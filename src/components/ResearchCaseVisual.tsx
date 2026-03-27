import type { ResearchCase } from './labMirrorContent';

const TONES = {
  coach: { accent: '#d8fb8a', label: 'prompt rail', glyph: '[ exe ]', status: '10%' },
  vision: { accent: '#b88cff', label: 'visual field', glyph: '[ base ]', status: 'stack' },
  voice: { accent: '#76c5ff', label: 'voice signal', glyph: '[ wave ]', status: '84%' },
  workflow: { accent: '#8dc63f', label: 'flow map', glyph: '[ route ]', status: 'live' },
  research: { accent: '#8f8f8f', label: 'target map', glyph: '[ target ]', status: '99%' },
  dashboard: { accent: '#6ea8ff', label: 'metric field', glyph: '[ data ]', status: 'sync' },
  agent: { accent: '#9de06f', label: 'agent graph', glyph: '[ mesh ]', status: 'run' },
  content: { accent: '#d9fb8d', label: 'content board', glyph: '[ copy ]', status: 'edit' },
} as const;

function SignalRail({ color }: { color: string }) {
  return (
    <>
      <div className="absolute left-6 right-6 top-10 h-px opacity-55" style={{ backgroundColor: color }} />
      {Array.from({ length: 7 }).map((_, idx) => (
        <span
          key={idx}
          className="absolute top-[34px] h-2 w-2 rounded-full opacity-80"
          style={{ left: `${24 + idx * 36}px`, backgroundColor: color }}
        />
      ))}
    </>
  );
}

function CoachGlyph({ color }: { color: string }) {
  return (
    <>
      <div className="absolute left-[68px] top-[66px] h-[72px] w-[3px]" style={{ backgroundColor: color }} />
      <div className="absolute left-[92px] top-[58px] h-[88px] w-[3px]" style={{ backgroundColor: color }} />
      <div className="absolute left-[48px] top-[102px] h-[3px] w-[126px]" style={{ backgroundColor: color }} />
      <div className="absolute left-[42px] top-[146px] h-[2px] w-[170px] opacity-80" style={{ backgroundColor: color }} />
    </>
  );
}

function VisionGlyph({ color }: { color: string }) {
  return (
    <>
      <div className="absolute left-[72px] top-[88px] h-[3px] w-[92px]" style={{ backgroundColor: color }} />
      <div className="absolute left-[88px] top-[64px] h-[52px] w-[3px]" style={{ backgroundColor: color }} />
      <div className="absolute left-[120px] top-[64px] h-[52px] w-[3px]" style={{ backgroundColor: color }} />
      <div className="absolute left-[56px] top-[140px] h-[2px] w-[164px] opacity-75" style={{ backgroundColor: color }} />
      {Array.from({ length: 5 }).map((_, idx) => (
        <span
          key={idx}
          className="absolute top-[136px] h-2 w-2 rounded-full opacity-80"
          style={{ left: `${58 + idx * 34}px`, backgroundColor: color }}
        />
      ))}
    </>
  );
}

function TargetGlyph({ color }: { color: string }) {
  return (
    <>
      <div className="absolute left-[82px] top-[68px] h-[3px] w-[112px]" style={{ backgroundColor: color }} />
      <div className="absolute left-[126px] top-[48px] h-[76px] w-[3px]" style={{ backgroundColor: color }} />
      <div className="absolute left-[98px] top-[60px] h-[3px] w-[84px] opacity-80" style={{ backgroundColor: color }} />
      <div className="absolute left-[98px] top-[92px] h-[3px] w-[84px] opacity-80" style={{ backgroundColor: color }} />
      <div className="absolute left-[160px] top-[122px] h-[30px] w-[3px] rotate-45" style={{ backgroundColor: color }} />
      <div className="absolute left-[140px] top-[140px] h-[3px] w-[26px]" style={{ backgroundColor: color }} />
      {Array.from({ length: 6 }).map((_, idx) => (
        <span
          key={idx}
          className="absolute top-[138px] h-1.5 w-1.5 rounded-full opacity-75"
          style={{ left: `${54 + idx * 28}px`, backgroundColor: color }}
        />
      ))}
    </>
  );
}

function WaveGlyph({ color }: { color: string }) {
  return (
    <>
      {Array.from({ length: 8 }).map((_, idx) => (
        <div
          key={idx}
          className="absolute bottom-[58px] w-[3px]"
          style={{
            left: `${58 + idx * 18}px`,
            height: `${18 + (idx % 3) * 14 + (idx === 4 ? 18 : 0)}px`,
            backgroundColor: color,
          }}
        />
      ))}
      <div className="absolute left-[50px] top-[132px] h-[2px] w-[170px] opacity-75" style={{ backgroundColor: color }} />
    </>
  );
}

function RouteGlyph({ color }: { color: string }) {
  return (
    <>
      <div className="absolute left-[52px] top-[78px] h-[2px] w-[54px]" style={{ backgroundColor: color }} />
      <div className="absolute left-[104px] top-[78px] h-[2px] w-[54px] rotate-[26deg] origin-left" style={{ backgroundColor: color }} />
      <div className="absolute left-[150px] top-[102px] h-[2px] w-[62px]" style={{ backgroundColor: color }} />
      <div className="absolute left-[80px] top-[122px] h-[2px] w-[110px] opacity-75" style={{ backgroundColor: color }} />
      {[52, 104, 156, 210].map((left) => (
        <span key={left} className="absolute top-[73px] h-3 w-3 rounded-full" style={{ left, border: `2px solid ${color}` }} />
      ))}
    </>
  );
}

function MeshGlyph({ color }: { color: string }) {
  return (
    <>
      {[58, 92, 126, 160].map((left, idx) => (
        <span
          key={left}
          className="absolute h-2.5 w-2.5 rounded-full"
          style={{ left, top: idx % 2 === 0 ? 88 : 122, backgroundColor: color }}
        />
      ))}
      <div className="absolute left-[62px] top-[92px] h-[2px] w-[34px] rotate-[-20deg] origin-left" style={{ backgroundColor: color }} />
      <div className="absolute left-[96px] top-[112px] h-[2px] w-[34px] rotate-[22deg] origin-left" style={{ backgroundColor: color }} />
      <div className="absolute left-[130px] top-[92px] h-[2px] w-[34px] rotate-[-20deg] origin-left" style={{ backgroundColor: color }} />
      <div className="absolute left-[52px] top-[144px] h-[2px] w-[168px] opacity-55" style={{ backgroundColor: color }} />
    </>
  );
}

function GridBarsGlyph({ color }: { color: string }) {
  return (
    <>
      {[44, 68, 92, 116].map((left, idx) => (
        <div
          key={left}
          className="absolute bottom-[56px] w-[14px]"
          style={{ left, height: `${22 + idx * 14}px`, backgroundColor: color, opacity: 0.82 }}
        />
      ))}
      <div className="absolute left-[148px] top-[74px] h-[62px] w-[2px]" style={{ backgroundColor: color }} />
      <div className="absolute left-[160px] top-[86px] h-[2px] w-[52px]" style={{ backgroundColor: color }} />
      <div className="absolute left-[160px] top-[114px] h-[2px] w-[40px]" style={{ backgroundColor: color, opacity: 0.7 }} />
    </>
  );
}

function ContentGlyph({ color }: { color: string }) {
  return (
    <>
      <div className="absolute left-[54px] top-[68px] h-[34px] w-[64px] border" style={{ borderColor: color }} />
      <div className="absolute left-[128px] top-[68px] h-[34px] w-[64px] border" style={{ borderColor: color }} />
      <div className="absolute left-[54px] top-[112px] h-[40px] w-[138px] border" style={{ borderColor: color }} />
      <div className="absolute left-[62px] top-[78px] h-[2px] w-[44px]" style={{ backgroundColor: color }} />
      <div className="absolute left-[136px] top-[78px] h-[2px] w-[34px]" style={{ backgroundColor: color }} />
      <div className="absolute left-[62px] top-[126px] h-[2px] w-[104px]" style={{ backgroundColor: color }} />
      <div className="absolute left-[62px] top-[138px] h-[2px] w-[88px] opacity-75" style={{ backgroundColor: color }} />
    </>
  );
}

function Glyph({ preview, color }: { preview: ResearchCase['preview']; color: string }) {
  if (preview === 'coach') return <CoachGlyph color={color} />;
  if (preview === 'vision') return <VisionGlyph color={color} />;
  if (preview === 'voice') return <WaveGlyph color={color} />;
  if (preview === 'workflow') return <RouteGlyph color={color} />;
  if (preview === 'research') return <TargetGlyph color={color} />;
  if (preview === 'dashboard') return <GridBarsGlyph color={color} />;
  if (preview === 'agent') return <MeshGlyph color={color} />;
  return <ContentGlyph color={color} />;
}

export function ResearchCaseVisual({
  item,
  active,
  compact = false,
}: {
  item: ResearchCase;
  active: boolean;
  compact?: boolean;
}) {
  const tone = TONES[item.preview];
  const color = active ? tone.accent : '#9a9a9a';
  const height = compact ? 'h-[10rem]' : 'h-[9.5rem]';

  return (
    <div className={`relative overflow-hidden border border-black/8 bg-[#f7f6f2] ${height}`}>
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.04)_1px,transparent_1px),linear-gradient(rgba(0,0,0,0.04)_1px,transparent_1px)] bg-[size:20px_20px] opacity-60" />
      <div className="absolute left-4 top-4 border border-black/10 bg-white px-3 py-1 text-[8px] font-bold uppercase tracking-[0.22em] text-black/42">
        case
      </div>
      <div className="absolute right-4 top-4 text-[8px] font-mono uppercase tracking-[0.24em] text-black/28">
        {tone.status}
      </div>
      <div className="absolute right-4 top-10 text-[8px] font-mono uppercase tracking-[0.24em]" style={{ color }}>
        {tone.label}
      </div>
      <div className="absolute left-4 bottom-4 text-[8px] font-mono uppercase tracking-[0.22em] text-black/26">
        AI MINDSET SIGNAL
      </div>
      <div className="absolute left-6 top-[58px] text-[28px] font-black uppercase tracking-[0.24em]" style={{ color }}>
        {item.id.slice(-2)}
      </div>
      <div
        className="absolute left-[84px] top-[54px] text-[18px] font-mono uppercase tracking-[0.28em]"
        style={{
          color,
          textShadow: active ? `0 0 16px ${tone.accent}55` : 'none',
        }}
      >
        {tone.glyph}
      </div>
      <SignalRail color={color} />
      <Glyph preview={item.preview} color={color} />
    </div>
  );
}
