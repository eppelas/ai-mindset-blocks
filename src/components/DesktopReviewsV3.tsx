import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown } from 'lucide-react';

type ReviewAvatar =
  | { type: 'photo'; src: string }
  | { type: 'voxel'; seed: number };

interface ReviewItem {
  id: string;
  name: string;
  role: string;
  quote: string;
  tg: string;
  avatar: ReviewAvatar;
}

const BASE_URL = import.meta.env.BASE_URL;

const REVIEWS: ReviewItem[] = [
  {
    id: '01',
    name: 'Дмитрий Твердохлебов',
    role: 'EX-ДИРЕКТОР ИИ МТС | EX-CPO AI VK',
    quote:
      'снова иду учиться к упоротым на практике чувакам из AI Mindset. Все, как мы любим: 20% теории, 80% практики. Дипломы не дают, выпускников на работу не устраивают.',
    tg: 'tg ->',
    avatar: { type: 'voxel', seed: 1 },
  },
  {
    id: '02',
    name: 'Дмитрий Лаухин',
    role: 'ЕВАНГЕЛИСТ OBSIDIAN | SECOND BRAIN',
    quote:
      'Редко что-то советую от себя, но здесь тот самый случай. AI вплетается в жизнь не как магический инструмент, а как часть системы мышления. Это не про хайп.',
    tg: 'tg ->',
    avatar: { type: 'voxel', seed: 2 },
  },
  {
    id: '03',
    name: 'Оля Еремина',
    role: 'ПРЕДПРИНИМАТЕЛЬ',
    quote:
      'использовать ИИ — это не писать промпт. Использовать ИИ — это самому создавать контекст. За то, что они говорят на понятном языке.',
    tg: 'tg ->',
    avatar: { type: 'photo', src: `${BASE_URL}reviews/olga-eremina.jpg` },
  },
  {
    id: '04',
    name: 'Олег Цербаев',
    role: 'ИСТОРИК | APPLE / AVITO / DEUTSCHE BANK',
    quote:
      'Был удивлен. Сильно. Ребята нашли уникальную нишу, стиль и интонацию, которые предельно точно попадают в нерв сегодняшнего и завтрашнего дня.',
    tg: 'tg ->',
    avatar: { type: 'photo', src: `${BASE_URL}reviews/oleg-tzerbaev.jpg` },
  },
  {
    id: '05',
    name: 'Вероника Долгих',
    role: 'COO | SETTERS AGENCY',
    quote:
      'я офигела, как клод четко прописал мне схему планирования, чтобы не выпадать из режима, избегать выгораний. оооочень круто вытащил поведенческие паттерны.',
    tg: 'tg ->',
    avatar: { type: 'voxel', seed: 5 },
  },
  {
    id: '06',
    name: 'Александра Гусева',
    role: 'L&D | AVITO',
    quote:
      'Произошел shift. Я на 30% начала думать AI-first: где я могу ускориться за счет того, что AI начнет помогать. Это реально меняет продуктивность.',
    tg: 'tg ->',
    avatar: { type: 'voxel', seed: 6 },
  },
  {
    id: '07',
    name: 'Сергей Петров',
    role: 'UNIX DEVELOPER',
    quote:
      'После лабы я понял: это не просто инструменты, а новый способ мышления. Я офигел, когда Cursor сам нашел решение проблемы, которую я не знал как решить.',
    tg: 'tg ->',
    avatar: { type: 'voxel', seed: 1 },
  },
  {
    id: '08',
    name: 'Екатерина Грачева',
    role: 'HR-КОММУНИКАЦИИ | AVITO',
    quote:
      'Я боялась, что это слишком сложно для нетехнического человека. Но через 3 недели я уже создавала агентов и автоматизации. Теперь веду трек по AI для 700+ коллег.',
    tg: 'tg ->',
    avatar: { type: 'voxel', seed: 5 },
  },
  {
    id: '09',
    name: 'Антон Мормышев',
    role: 'МУЗЫКАНТ',
    quote:
      'После первой лекции по вайб-кодингу я не мог уснуть до 6 утра. Побежал делать. Это было мощно. AI стал моим соавтором, а не просто инструментом.',
    tg: 'tg ->',
    avatar: { type: 'voxel', seed: 2 },
  },
];

const VOXEL_PATTERNS = {
  1: [
    '00011100',
    '00111110',
    '01111111',
    '01100111',
    '01111111',
    '00111110',
    '00011100',
    '00001000',
  ],
  2: [
    '00111100',
    '01111110',
    '11100111',
    '11111111',
    '11101111',
    '01111110',
    '00111100',
    '00011000',
  ],
  5: [
    '00011110',
    '00111111',
    '01110111',
    '01111111',
    '01111111',
    '00111110',
    '00011100',
    '00001000',
  ],
  6: [
    '00111100',
    '01111110',
    '11111111',
    '11110111',
    '11111111',
    '01111110',
    '00111100',
    '00010000',
  ],
} as const;

function VoxelAvatar({ seed }: { seed: keyof typeof VOXEL_PATTERNS }) {
  const pattern = VOXEL_PATTERNS[seed];

  return (
    <div className="relative h-12 w-12 overflow-hidden border border-black/10 bg-[#f5f5f1]">
      <div className="absolute inset-y-0 left-0 w-[42%] bg-black" />
      <div className="absolute left-[8px] top-[16px] h-3 w-3 rounded-full bg-[#f5f5f1]" />
      <div className="absolute right-[4px] top-[4px] grid grid-cols-8 gap-[1px]">
        {pattern.flatMap((row, rowIdx) =>
          row.split('').map((cell, colIdx) => (
            <span
              key={`${rowIdx}-${colIdx}`}
              className="h-[4px] w-[4px]"
              style={{ backgroundColor: cell === '1' ? '#1b1b1b' : 'transparent' }}
            />
          )),
        )}
      </div>
    </div>
  );
}

function ReviewAvatarView({ avatar, alt }: { avatar: ReviewAvatar; alt: string }) {
  if (avatar.type === 'photo') {
    return (
      <img
        src={avatar.src}
        alt={alt}
        className="h-12 w-12 border border-black/10 object-cover grayscale"
        loading="lazy"
        referrerPolicy="no-referrer"
      />
    );
  }

  return <VoxelAvatar seed={avatar.seed as keyof typeof VOXEL_PATTERNS} />;
}

export const DesktopReviewsV3 = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const previewCount = isMobile ? 2 : 3;
  const visibleReviews = isExpanded ? REVIEWS : REVIEWS.slice(0, previewCount);

  return (
    <section className="w-full bg-[#f9f9f7] py-20 px-6 md:px-8 font-sans">
      <div className="mx-auto max-w-[1180px]">
        <div className="mb-12 flex items-end gap-6 md:gap-8">
          <div className="mb-1 shrink-0 text-[12px] font-bold uppercase tracking-[0.2em] text-black/38">
            FEEDBACK_LOG
          </div>
          <div className="mx-4 mb-2 h-px flex-1 bg-black/10" />
          <div className="text-right text-4xl md:text-5xl font-black uppercase tracking-widest">
            ОТЗЫВЫ
          </div>
        </div>

        <div className={isExpanded ? 'columns-1 gap-3 md:columns-2 xl:columns-3' : 'grid grid-cols-1 gap-px border border-black/8 bg-black/8 md:grid-cols-2 lg:grid-cols-3'}>
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={isExpanded ? 'expanded-masonry' : 'collapsed-grid'}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.26, ease: 'easeOut' }}
              className={isExpanded ? 'contents' : 'contents'}
            >
              {visibleReviews.map((review, idx) => (
                <article
                  key={review.id}
                  className={`group flex flex-col bg-[#f9f9f7] p-5 transition-colors hover:bg-white break-inside-avoid ${
                    isExpanded
                      ? `mb-3 border border-black/8 ${
                          idx % 5 === 0 ? 'min-h-[19rem]' : idx % 3 === 0 ? 'min-h-[15rem]' : 'min-h-[13rem]'
                        }`
                      : 'min-h-[19rem]'
                  }`}
                >
                  <div className="mb-5 flex items-start justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <ReviewAvatarView avatar={review.avatar} alt={review.name} />
                      <div className="flex flex-col gap-1">
                        <div className="font-mono text-[9px] bg-black text-white px-2 py-1 tracking-[0.12em] uppercase">
                          {review.name}
                        </div>
                        <div className="font-mono text-[8px] uppercase tracking-[0.16em] text-black/30">
                          id::{review.id}
                        </div>
                      </div>
                    </div>

                    <div className="font-mono text-[8px] uppercase tracking-[0.2em] text-black/22">
                      {'/// //'}
                    </div>
                  </div>

                  <div className="mb-4 flex flex-wrap items-center gap-2">
                    <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-black/34">
                      {review.role}
                    </span>
                    <span className="h-[1px] w-6 bg-[#8DC63F]/55" />
                  </div>

                  <div className="flex-1">
                    <p className="mb-4 font-mono text-[12px] md:text-[13px] leading-relaxed text-black/82 whitespace-pre-line">
                      <span className="mr-1 text-[#8DC63F]">{'»'}</span>
                      {review.quote}
                    </p>
                  </div>

                  <div className="mt-auto border-t border-dashed border-black/10 pt-5">
                    <div className="flex items-end justify-between gap-4 text-left">
                      <div className="min-w-0">
                        <h3 className="mb-0.5 font-mono text-[11px] font-bold uppercase tracking-wider truncate">
                          {review.name}
                        </h3>
                        <p className="font-mono text-[9px] uppercase tracking-tight text-black/40 truncate">
                          {`[ ${review.role} ]`}
                        </p>
                      </div>
                      <span className="shrink-0 font-mono text-[10px] font-black uppercase tracking-tighter text-[#8DC63F]">
                        {review.tg}
                      </span>
                    </div>
                  </div>
                </article>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="mt-8 flex justify-center">
          <button
            type="button"
            onClick={() => setIsExpanded((prev) => !prev)}
            aria-expanded={isExpanded}
            className="inline-flex items-center gap-3 border border-black/12 bg-white px-4 py-3 text-[11px] font-mono font-bold uppercase tracking-[0.16em] text-black/68 transition-colors hover:bg-black hover:text-white"
          >
            <span>{isExpanded ? 'свернуть grid' : 'открыть grid'}</span>
            <span className="flex h-7 w-7 items-center justify-center border border-current/20">
              <ChevronDown className={`h-4 w-4 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`} />
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};
