import { useEffect, useRef } from 'react';

const BASE_URL = import.meta.env.BASE_URL;
const LOGO_SRC = `${BASE_URL}reviews/ai-mindset-logo.png`;

interface VoxelPoint {
  homeX: number;
  homeY: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
  firmness: number;
  size: number;
  phase: number;
  drift: number;
}

interface VoxelVariant {
  title: string;
  note: string;
  cellSize: number;
  gap: number;
  seamInset: number;
  introMode: 'scatter' | 'sweep' | 'ring';
  scrollAmplitude: number;
  shadowBlur: number;
  randomCull: number;
}

const ACTIVE_VARIANT: VoxelVariant = {
  title: 'V3 / dense + scroll drift',
  note: 'Оставлен только один вариант: плотный, но легче по рендеру, с меньшим зазором у шва.',
  cellSize: 5,
  gap: 2,
  seamInset: 6,
  introMode: 'ring',
  scrollAmplitude: 5,
  shadowBlur: 2,
  randomCull: 0.2,
};

function roundedRect(context: CanvasRenderingContext2D, x: number, y: number, width: number, height: number, radius: number) {
  context.beginPath();
  context.moveTo(x + radius, y);
  context.lineTo(x + width - radius, y);
  context.quadraticCurveTo(x + width, y, x + width, y + radius);
  context.lineTo(x + width, y + height - radius);
  context.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
  context.lineTo(x + radius, y + height);
  context.quadraticCurveTo(x, y + height, x, y + height - radius);
  context.lineTo(x, y + radius);
  context.quadraticCurveTo(x, y, x + radius, y);
  context.closePath();
}

function getIntroPosition(
  mode: VoxelVariant['introMode'],
  homeX: number,
  homeY: number,
  internalSize: number,
  drawX: number,
  drawY: number,
  drawSize: number,
) {
  if (mode === 'sweep') {
    return {
      x: drawX + drawSize + 60 + Math.random() * 120,
      y: homeY + (Math.random() - 0.5) * 40,
    };
  }

  if (mode === 'ring') {
    const centerX = drawX + drawSize / 2;
    const centerY = drawY + drawSize / 2;
    const angle = Math.random() * Math.PI * 2;
    const radius = drawSize * (0.72 + Math.random() * 0.24);
    return {
      x: centerX + Math.cos(angle) * radius,
      y: centerY + Math.sin(angle) * radius,
    };
  }

  return {
    x: homeX + (Math.random() - 0.5) * internalSize * 0.34,
    y: homeY + (Math.random() - 0.5) * internalSize * 0.34,
  };
}

function AnimatedSplitVoxelLogo({ variant }: { variant: VoxelVariant }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const pointerRef = useRef({ x: -9999, y: -9999 });
  const scrollRef = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const context = canvas.getContext('2d');
    if (!context) return;

    const internalSize = 680;
    const drawSize = 560;
    const drawX = (internalSize - drawSize) / 2;
    const drawY = (internalSize - drawSize) / 2;
    const step = variant.cellSize + variant.gap;
    const repulsionRadius = 88;
    const seamX = drawX + drawSize / 2;
    const rightHalfStart = seamX - variant.cellSize - variant.seamInset;
    const edgeRadius = Math.max(1.6, variant.cellSize * 0.2);

    canvas.width = internalSize;
    canvas.height = internalSize;

    const image = new Image();
    const offscreen = document.createElement('canvas');
    offscreen.width = internalSize;
    offscreen.height = internalSize;
    const offscreenContext = offscreen.getContext('2d', { willReadFrequently: true });

    let frameId = 0;
    let disposed = false;
    let introProgress = 0;
    let voxels: VoxelPoint[] = [];

    const onPointerMove = (event: PointerEvent) => {
      const rect = canvas.getBoundingClientRect();
      pointerRef.current = {
        x: ((event.clientX - rect.left) / rect.width) * internalSize,
        y: ((event.clientY - rect.top) / rect.height) * internalSize,
      };
    };

    const onPointerLeave = () => {
      pointerRef.current = { x: -9999, y: -9999 };
    };

    const onScroll = () => {
      scrollRef.current = window.scrollY;
    };

    const isInsideEyeZone = (x: number, y: number) => {
      const normalizedX = (x - drawX) / drawSize;
      const normalizedY = (y - drawY) / drawSize;
      return normalizedX > 0.62 && normalizedX < 0.9 && normalizedY > 0.43 && normalizedY < 0.61;
    };

    const isInsideEyeContourZone = (x: number, y: number) => {
      const normalizedX = (x - drawX) / drawSize;
      const normalizedY = (y - drawY) / drawSize;
      return normalizedX > 0.6 && normalizedX < 0.92 && normalizedY > 0.41 && normalizedY < 0.63;
    };

    const getSeamShift = (x: number) => {
      const contourProgress = Math.max(0, Math.min(1, (x - rightHalfStart) / Math.max(1, drawX + drawSize - rightHalfStart)));
      return 5 * Math.pow(1 - contourProgress, 1.75);
    };

    const getCoverage = (imageData: Uint8ClampedArray, x: number, y: number) => {
      let brightHits = 0;
      let samples = 0;
      const sampleStep = Math.max(1, Math.floor(variant.cellSize / 2));
      const endX = Math.min(internalSize - 1, x + variant.cellSize);
      const endY = Math.min(internalSize - 1, y + variant.cellSize);

      for (let sampleY = y; sampleY < endY; sampleY += sampleStep) {
        for (let sampleX = Math.max(x, Math.floor(seamX) + 1); sampleX < endX; sampleX += sampleStep) {
          const index = (sampleY * internalSize + sampleX) * 4;
          const r = imageData[index] ?? 0;
          const g = imageData[index + 1] ?? 0;
          const b = imageData[index + 2] ?? 0;
          const alpha = imageData[index + 3] ?? 0;
          const brightness = (r + g + b) / 3;
          samples += 1;
          if (alpha > 40 && brightness > 160) brightHits += 1;
        }
      }

      return samples > 0 ? brightHits / samples : 0;
    };

    const getDarkCoverage = (imageData: Uint8ClampedArray, x: number, y: number) => {
      const centerX = Math.max(0, Math.min(internalSize - 1, Math.round(x + variant.cellSize * 0.5)));
      const centerY = Math.max(0, Math.min(internalSize - 1, Math.round(y + variant.cellSize * 0.5)));
      let darkHits = 0;
      let samples = 0;

      for (let offsetY = -6; offsetY <= 6; offsetY += 2) {
        for (let offsetX = -7; offsetX <= 7; offsetX += 2) {
          const sampleX = Math.max(0, Math.min(internalSize - 1, centerX + offsetX));
          const sampleY = Math.max(0, Math.min(internalSize - 1, centerY + offsetY));
          const index = (sampleY * internalSize + sampleX) * 4;
          const r = imageData[index] ?? 0;
          const g = imageData[index + 1] ?? 0;
          const b = imageData[index + 2] ?? 0;
          const alpha = imageData[index + 3] ?? 0;
          const brightness = (r + g + b) / 3;
          samples += 1;
          if (alpha > 40 && brightness < 96) darkHits += 1;
        }
      }

      return samples > 0 ? darkHits / samples : 0;
    };

    const buildVoxels = () => {
      if (!offscreenContext) return;

      offscreenContext.clearRect(0, 0, internalSize, internalSize);
      offscreenContext.fillStyle = '#1a1a1a';
      offscreenContext.fillRect(0, 0, internalSize, internalSize);
      offscreenContext.drawImage(image, drawX, drawY, drawSize, drawSize);

      const imageData = offscreenContext.getImageData(0, 0, internalSize, internalSize).data;
      voxels = [];

      for (let y = drawY; y < drawY + drawSize; y += step) {
        for (let x = rightHalfStart; x < drawX + drawSize; x += step) {
          const normalizedX = (x - drawX) / drawSize;
          const normalizedY = (y - drawY) / drawSize;
          const coverage = getCoverage(imageData, x, y);
          const nearSeam = x < drawX + drawSize / 2 + step * 2;
          const nearTail = y > drawY + drawSize * 0.78;
          const nearOuter = normalizedX > 0.82;
          const nearTopCurve = normalizedX > 0.7 && normalizedY < 0.24;
          const nearEyeContour = isInsideEyeContourZone(x + variant.cellSize * 0.5, y + variant.cellSize * 0.5);
          const insideEye = isInsideEyeZone(x + variant.cellSize * 0.5, y + variant.cellSize * 0.5) && getDarkCoverage(imageData, x, y) > 0.32;
          const preserveDensity = nearSeam || nearTail || nearOuter || nearTopCurve || nearEyeContour;
          const threshold = preserveDensity ? 0.04 : 0.14;

          if (coverage > threshold) {
            if (!preserveDensity && Math.random() < variant.randomCull) {
              continue;
            }
            if (insideEye) {
              continue;
            }
            const introPosition = getIntroPosition(variant.introMode, x, y, internalSize, drawX, drawY, drawSize);
            voxels.push({
              homeX: x - getSeamShift(x),
              homeY: y,
              x: introPosition.x,
              y: introPosition.y,
              vx: 0,
              vy: 0,
              firmness: 0.06 + Math.random() * 0.024,
              size: variant.cellSize,
              phase: Math.random() * Math.PI * 2,
              drift: 0.45 + Math.random() * 0.75,
            });
          }
        }
      }
    };

    const draw = () => {
      if (disposed) return;

      introProgress = Math.min(1, introProgress + 0.02);

      context.clearRect(0, 0, internalSize, internalSize);
      context.fillStyle = '#1a1a1a';
      context.fillRect(0, 0, internalSize, internalSize);

      context.save();
      context.beginPath();
      context.rect(0, 0, drawX + drawSize / 2, internalSize);
      context.clip();
      context.drawImage(image, drawX, drawY, drawSize, drawSize);
      context.restore();

      context.fillStyle = '#f5f5f1';
      context.shadowColor = '#ffffff';
      context.shadowBlur = variant.shadowBlur;

      for (const voxel of voxels) {
        const dx = voxel.x - pointerRef.current.x;
        const dy = voxel.y - pointerRef.current.y;
        const distance = Math.hypot(dx, dy) || 1;

        if (distance < repulsionRadius) {
          const force = (1 - distance / repulsionRadius) * 1.8;
          voxel.vx += (dx / distance) * force;
          voxel.vy += (dy / distance) * force;
        }

        const scrollWave = variant.scrollAmplitude
          ? Math.sin(scrollRef.current * 0.012 + voxel.phase + voxel.homeY * 0.016) * variant.scrollAmplitude * voxel.drift
          : 0;
        const targetX = voxel.homeX + scrollWave * 0.45;
        const targetY = voxel.homeY + scrollWave * 0.18;
        const introPull = 0.72 - introProgress * 0.72;

        voxel.vx += (targetX - voxel.x) * (voxel.firmness + introPull * 0.02);
        voxel.vy += (targetY - voxel.y) * (voxel.firmness + introPull * 0.02);
        voxel.vx *= 0.84;
        voxel.vy *= 0.84;
        voxel.x += voxel.vx;
        voxel.y += voxel.vy;

        roundedRect(context, voxel.x, voxel.y, voxel.size, voxel.size, edgeRadius);
        context.fill();
      }

      context.shadowBlur = 0;
      frameId = window.requestAnimationFrame(draw);
    };

    image.onload = () => {
      if (disposed) return;
      buildVoxels();
      draw();
    };
    image.src = LOGO_SRC;

    canvas.addEventListener('pointermove', onPointerMove);
    canvas.addEventListener('pointerleave', onPointerLeave);
    window.addEventListener('scroll', onScroll, { passive: true });

    return () => {
      disposed = true;
      window.cancelAnimationFrame(frameId);
      canvas.removeEventListener('pointermove', onPointerMove);
      canvas.removeEventListener('pointerleave', onPointerLeave);
      window.removeEventListener('scroll', onScroll);
    };
  }, [variant]);

  return (
    <canvas
      ref={canvasRef}
      className="aspect-square w-full bg-[#1a1a1a]"
      aria-label={`Animated AI Mindset split voxel logo ${variant.title}`}
    />
  );
}

function VariantCard({ variant }: { variant: VoxelVariant }) {
  return (
    <div className="border border-black/10 bg-[#1a1a1a] p-5 md:p-6">
      <div className="mb-5 flex flex-wrap items-center justify-between gap-3 border-b border-white/10 pb-4 font-mono text-[11px] uppercase tracking-[0.18em] text-white/48">
        <span>[ {variant.title} ]</span>
        <span>hover / scroll</span>
      </div>

      <div className="mx-auto max-w-[520px]">
        <AnimatedSplitVoxelLogo variant={variant} />
      </div>

      <div className="mt-5 border-t border-white/10 pt-4 font-mono text-[11px] uppercase tracking-[0.14em] text-white/46">
        {variant.note}
      </div>
    </div>
  );
}

export function DesktopVoxelLogoLab() {
  return (
    <section className="w-full bg-[#f9f9f7] px-6 py-20 md:px-8">
      <div className="mx-auto max-w-[1440px]">
        <div className="mb-12 flex items-end gap-6 md:gap-8">
          <div className="mb-1 shrink-0 text-[12px] font-bold uppercase tracking-[0.2em] text-black/38">
            VOXEL_LOGO
          </div>
          <div className="mx-4 mb-2 h-px flex-1 bg-black/10" />
          <div className="text-right text-4xl font-black uppercase tracking-widest md:text-5xl">
            ЛОГО ЛАБ
          </div>
        </div>

        <div className="grid gap-6 xl:grid-cols-[minmax(0,1fr)_340px]">
          <div>
            <VariantCard variant={ACTIVE_VARIANT} />
          </div>

          <div className="flex flex-col gap-6">
            <div className="border border-black/10 bg-white p-5">
              <div className="mb-4 font-mono text-[11px] uppercase tracking-[0.18em] text-black/42">
                [ reference png ]
              </div>
              <div className="border border-black/10 bg-[#1a1a1a] p-4">
                <img
                  src={LOGO_SRC}
                  alt="AI Mindset logo reference"
                  className="aspect-square w-full object-contain"
                />
              </div>
            </div>

            <div className="border border-black/10 bg-white p-5">
              <div className="mb-4 font-mono text-[11px] uppercase tracking-[0.18em] text-black/42">
                [ what changed ]
              </div>
              <div className="space-y-3 font-mono text-[12px] leading-relaxed text-black/72">
                <p>Оставлен только третий вариант, чтобы убрать лишнюю нагрузку от трёх canvas сразу.</p>
                <p>Правую сторону подтянул ближе к шву примерно на 30–40% и усилил заполнение у верхнего стыка.</p>
                <p>Количество вокселей в массе уменьшено примерно на 20%, чтобы сохранить зернистость, но снять лаги.</p>
              </div>
            </div>

            <div className="border border-black/10 bg-white p-5">
              <div className="mb-4 font-mono text-[11px] uppercase tracking-[0.18em] text-black/42">
                [ focus points ]
              </div>
              <div className="space-y-3 font-mono text-[11px] uppercase tracking-[0.14em] text-black/48">
                <div>// right half width</div>
                <div>// top seam gap</div>
                <div>// eye curvature</div>
                <div>// bottom tail balance</div>
                <div>// intro motion / scroll drift</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
