import { useRef, useState } from 'react';
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from 'motion/react';
import { ADVANCED_TRACKS, PROGRAM_TRACKS, PROGRAM_WEEK_COPY } from '../data';
import { cn } from '../lib/utils';

const WEEKLY_RHYTHM = [
  { day: 'ПН', time: '18:00 CET', task: 'ВОРКШОП', type: 'workshop' as const },
  { day: 'ВТ', time: '', task: 'КОВОРКИНГ', type: 'normal' as const },
  { day: 'СР', time: '18:00 CET', task: 'ADVANCED TRACK', type: 'advanced' as const },
  { day: 'ЧТ', time: '', task: '', type: 'empty' as const },
  { day: 'ПТ', time: '', task: 'ЛЕКЦИЯ', type: 'normal' as const },
  { day: 'СБ', time: '', task: 'Q&A СЕССИЯ', type: 'normal' as const },
  { day: 'ВС', time: '', task: '', type: 'empty' as const },
];

const SIGNAL_VISUALS = [
  {
    accent: '#D8F6A8',
    glow: 'rgba(184, 236, 111, 0.55)',
    code: '[ SHIFT ]',
    topPath: 'M 24 32 H 168 L 192 54 H 216',
    middlePath: 'M 38 76 H 112 M 62 58 V 132 M 84 58 V 132 M 118 76 H 146',
    bottomPath: 'M 28 142 H 210',
  },
  {
    accent: '#C894FF',
    glow: 'rgba(191, 140, 255, 0.58)',
    code: '[ BASE ]',
    topPath: 'M 30 38 H 210',
    middlePath: 'M 78 62 V 110 M 108 62 V 110 M 138 62 V 110 M 68 86 H 148',
    bottomPath: 'M 60 132 H 178',
  },
  {
    accent: '#8CE7FF',
    glow: 'rgba(116, 222, 255, 0.52)',
    code: '[ FLOW ]',
    topPath: 'M 28 42 H 118 L 136 62 H 212',
    middlePath: 'M 44 84 C 78 58, 112 58, 146 84 S 190 110, 214 88',
    bottomPath: 'M 34 130 H 122 L 150 106 H 212',
  },
  {
    accent: '#F0D98B',
    glow: 'rgba(243, 215, 118, 0.46)',
    code: '[ LOOP ]',
    topPath: 'M 32 34 H 208 V 60',
    middlePath: 'M 52 70 H 170 M 52 92 H 150 M 52 114 H 182',
    bottomPath: 'M 40 138 H 198',
  },
] as const;

const LECTURE_CARDS = [
  {
    title: 'Визуальный сторителлинг',
    description: 'SVG-метафоры, образы, обложки и headshots для персонального брендинга.',
    speaker: 'Команда AI Mindset',
  },
  {
    title: 'Аудиогенерация',
    description: 'Озвучка, подкасты, музыка для видео и саунд-дизайн для рабочих сценариев.',
    speaker: 'Команда AI Mindset',
  },
  {
    title: 'Видеогенерация',
    description: 'Runway, Pika, Sora, монтаж, b-roll и визуальный narrative для задач команды.',
    speaker: 'Команда AI Mindset',
  },
  {
    title: 'Пространственные интерфейсы',
    description: 'WebGL, 3D-ассеты, интерактивные сцены и AR-маски для digital-продуктов.',
    speaker: 'Команда AI Mindset',
  },
] as const;

type ProgramTrack = (typeof PROGRAM_TRACKS)[number];
type ProgramCopy = (typeof PROGRAM_WEEK_COPY)[keyof typeof PROGRAM_WEEK_COPY];
type AdvancedTrack = (typeof ADVANCED_TRACKS)[number];
type LectureCard = (typeof LECTURE_CARDS)[number];

const useStickyWeekState = () => {
  const [activeWeek, setActiveWeek] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start center', 'end center'],
  });

  useMotionValueEvent(scrollYProgress, 'change', (latest) => {
    let nextWeek = Math.floor(latest * PROGRAM_TRACKS.length);
    if (nextWeek >= PROGRAM_TRACKS.length) nextWeek = PROGRAM_TRACKS.length - 1;
    if (nextWeek < 0) nextWeek = 0;
    if (nextWeek !== activeWeek) setActiveWeek(nextWeek);
  });

  const handleWeekClick = (idx: number) => {
    setActiveWeek(idx);
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const totalHeight = rect.height;
    const targetY =
      window.scrollY +
      rect.top +
      (totalHeight / PROGRAM_TRACKS.length) * idx +
      totalHeight / PROGRAM_TRACKS.length / 2 -
      window.innerHeight / 2;
    window.scrollTo({ top: targetY, behavior: 'smooth' });
  };

  return {
    activeWeek,
    containerRef,
    handleWeekClick,
    track: PROGRAM_TRACKS[activeWeek],
    weekCopy: PROGRAM_WEEK_COPY[PROGRAM_TRACKS[activeWeek].id],
    advanced: ADVANCED_TRACKS[activeWeek],
    lecture: LECTURE_CARDS[activeWeek],
  };
};

const WeekRail = ({
  activeWeek,
  onWeekClick,
}: {
  activeWeek: number;
  onWeekClick: (idx: number) => void;
}) => (
  <div className="w-[120px] shrink-0 flex flex-col relative h-[480px] mt-6">
    <div className="absolute left-[11.5px] top-[40px] bottom-[40px] w-px bg-black/15 z-0 pointer-events-none" />

    <div className="flex-1 flex flex-col w-[120px] gap-2">
      {PROGRAM_TRACKS.map((item, idx) => {
        const isActive = activeWeek === idx;
        return (
          <button
            key={`rail-${item.id}`}
            onClick={() => onWeekClick(idx)}
            className="flex-1 w-full flex items-center gap-3.5 group text-left relative z-10 transition-colors hover:bg-black/[0.04] rounded-[10px] -ml-4 pl-4 cursor-pointer"
          >
            <div
              className={cn(
                'w-6 h-6 rounded-full flex items-center justify-center transition-all shrink-0 z-10',
                isActive
                  ? 'bg-black border border-black shadow-[rgba(0,0,0,0.1)_0_4px_12px]'
                  : 'bg-white border border-black/20 group-hover:border-black/40',
              )}
            >
              {isActive && <div className="w-1.5 h-1.5 rounded-full bg-white" />}
            </div>

            <div className="flex items-baseline gap-2">
              <div
                className={cn(
                  'text-[9px] font-mono font-bold uppercase transition-colors tracking-[0.14em]',
                  isActive ? 'text-black' : 'text-black/30 group-hover:text-black/50',
                )}
              >
                НЕДЕЛЯ
              </div>
              <div
                className={cn(
                  'text-[17px] font-black tracking-tighter leading-none transition-colors',
                  isActive ? 'text-black' : 'text-black/20 group-hover:text-black/40',
                )}
              >
                0{idx + 1}
              </div>
            </div>
          </button>
        );
      })}
    </div>

    <div className="w-[100px] flex items-center gap-2 p-2 border border-black/10 rounded-[6px] bg-[#f8f8f8] text-left relative z-10 opacity-70 mt-1 mb-8 -ml-1">
      <div className="flex flex-col">
        <div className="text-[8.5px] font-mono font-bold uppercase text-black/50 mb-0.5 tracking-wider">FINAL</div>
        <div className="text-[11px] font-black tracking-widest leading-none text-black/90">DEMO DAY</div>
      </div>
    </div>
  </div>
);

const RhythmGrid = ({
  compact = false,
  mono = false,
  widthClass,
  cellHeightClass,
}: {
  compact?: boolean;
  mono?: boolean;
  widthClass?: string;
  cellHeightClass?: string;
}) => (
  <div className={cn('grid grid-cols-7 border border-black/10 bg-black/10 gap-px overflow-hidden', widthClass ?? (compact ? 'max-w-[680px]' : 'max-w-[720px]'))}>
    {WEEKLY_RHYTHM.map((item, idx) => {
      const isWorkshop = item.type === 'workshop';
      const isAdvanced = item.type === 'advanced';
      const isEmpty = item.type === 'empty';
      return (
        <div
          key={`rhythm-${idx}`}
          className={cn(
            'flex flex-col px-2 pt-2 pb-[3px] relative',
            cellHeightClass ?? (compact ? 'h-[62px]' : 'h-[78px]'),
            isWorkshop
              ? 'bg-[#8DC63F]'
              : isAdvanced
                ? 'bg-black'
                : isEmpty
                  ? 'bg-white/75'
                  : mono
                    ? 'bg-[#F2F2EF]'
                    : 'bg-white',
          )}
        >
          <div className="flex flex-col items-start mb-0">
            <span
              className={cn(
                compact ? 'text-[8px]' : 'text-[8.5px]',
                'font-mono font-black tracking-widest leading-none',
                isWorkshop ? 'text-white/82' : isAdvanced ? 'text-white/55' : 'text-black/40',
              )}
            >
              {item.day}
            </span>
            {item.time && (
              <div
                className={cn(
                  compact ? 'text-[7px]' : 'text-[7.5px]',
                  'font-mono font-bold tracking-widest leading-[1.15] mt-[3px] whitespace-nowrap',
                  isWorkshop ? 'text-white/82' : 'text-[#8DC63F]',
                )}
              >
                {item.time}
              </div>
            )}
          </div>
          <div
            className={cn(
              'font-black uppercase mt-auto font-sans text-left flex min-h-[18px] flex-col justify-end tracking-tight',
              isWorkshop || isAdvanced
                ? cn(compact ? 'text-[9px] leading-[0.8]' : 'text-[10px] leading-[0.88]', 'text-white tracking-[0.02em]')
                : isEmpty
                  ? 'opacity-0 text-[9px]'
                  : cn(compact ? 'text-[8.5px] leading-[0.84]' : 'text-[9px] leading-[0.9]', 'text-black/70'),
            )}
          >
            {(isWorkshop || isAdvanced) && item.task.includes(' ')
              ? item.task.split(' ').map((word, wordIdx) => <span key={`${item.day}-${wordIdx}`}>{word}</span>)
              : item.task}
          </div>
        </div>
      );
    })}
  </div>
);

const FunctionalSignalPanel = ({
  activeWeek,
  track,
  weekCopy,
}: {
  activeWeek: number;
  track: ProgramTrack;
  weekCopy: ProgramCopy;
}) => {
  const visual = SIGNAL_VISUALS[activeWeek % SIGNAL_VISUALS.length];

  return (
    <div className="relative overflow-hidden bg-[#070707] min-h-[220px]">
      <div
        className="absolute inset-0 opacity-[0.11]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.12) 1px, transparent 1px)',
          backgroundSize: '34px 34px',
        }}
      />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.07),transparent_24%,rgba(0,0,0,0.56)_100%),radial-gradient(circle_at_20%_70%,rgba(141,198,63,0.18),transparent_35%)]" />
      <div className="absolute -left-10 top-1/3 h-36 w-36 rounded-full blur-3xl" style={{ backgroundColor: visual.glow }} />
      <motion.div
        aria-hidden
        className="absolute inset-y-0 w-20 bg-gradient-to-r from-transparent via-white/10 to-transparent mix-blend-screen"
        initial={{ x: -120, opacity: 0 }}
        animate={{ x: 320, opacity: [0, 0.55, 0] }}
        transition={{ duration: 3.6, repeat: Infinity, repeatDelay: 1.4, ease: 'easeInOut' }}
      />
      <svg viewBox="0 0 240 180" className="absolute inset-0 h-full w-full opacity-65 translate-x-[6%]">
        <path d={visual.topPath} fill="none" stroke={visual.glow} strokeWidth="12" strokeLinecap="round" strokeLinejoin="round" style={{ filter: 'blur(10px)' }} />
        <path d={visual.middlePath} fill="none" stroke={visual.glow} strokeWidth="10" strokeLinecap="round" strokeLinejoin="round" style={{ filter: 'blur(8px)' }} />
        <path d={visual.bottomPath} fill="none" stroke={visual.glow} strokeWidth="10" strokeLinecap="round" strokeLinejoin="round" style={{ filter: 'blur(8px)' }} />
        <path d={visual.topPath} fill="none" stroke={visual.accent} strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round" />
        <path d={visual.middlePath} fill="none" stroke={visual.accent} strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round" />
        <path d={visual.bottomPath} fill="none" stroke={visual.accent} strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,rgba(7,7,7,0.98)_0%,rgba(7,7,7,0.94)_20%,rgba(7,7,7,0.74)_38%,rgba(7,7,7,0.32)_68%,rgba(7,7,7,0)_100%),linear-gradient(180deg,rgba(7,7,7,0.64)_0%,rgba(7,7,7,0.3)_36%,rgba(7,7,7,0)_72%)]" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[54%] bg-[linear-gradient(180deg,rgba(7,7,7,0),rgba(7,7,7,0.36)_34%,rgba(7,7,7,0.86)_76%,rgba(7,7,7,0.98)_100%)]" />

      <div className="relative z-10 flex h-full flex-col p-5">
        <div className="flex items-start justify-between gap-4">
          <div className="text-[10px] font-mono uppercase tracking-[0.3em] text-white/55">{visual.code}</div>
          <div className="text-right text-[9px] font-mono uppercase tracking-[0.28em] text-white/35">{weekCopy.dateRange}</div>
        </div>

        <div className="mt-auto">
          <div className="rounded-[18px] border border-white/10 bg-white/[0.05] px-4 py-4 backdrop-blur-md">
            <div className="text-[9px] font-mono uppercase tracking-[0.28em] text-[#D8F484]">{weekCopy.framedDescription}</div>
            <div className="mt-3 max-w-[240px] text-[34px] font-black uppercase tracking-[-0.06em] leading-[0.86] text-white">
              {track.title}
            </div>
            <div className="mt-4 border-t border-white/10 pt-3 text-[11px] leading-[1.55] text-white/64">
              {weekCopy.bodyDescription}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const FunctionalSplitHero = ({
  activeWeek,
  track,
  weekCopy,
}: {
  activeWeek: number;
  track: ProgramTrack;
  weekCopy: ProgramCopy;
}) => {
  const visual = SIGNAL_VISUALS[activeWeek % SIGNAL_VISUALS.length];
  const pulseXs = [26, 56, 86, 116, 146, 176, 206];
  const orbitNodes = [
    { x: 42, y: 94, r: 2.5 },
    { x: 76, y: 72, r: 3.2 },
    { x: 126, y: 98, r: 2.8 },
    { x: 168, y: 84, r: 2.6 },
    { x: 202, y: 104, r: 3.1 },
  ];

  return (
    <div className="absolute inset-0 overflow-hidden bg-[#060606]">
      <div
        className="absolute inset-0 opacity-[0.12]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.12) 1px, transparent 1px)',
          backgroundSize: '34px 34px',
        }}
      />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.08),transparent_18%,rgba(0,0,0,0.4)_55%,rgba(0,0,0,0.82)_100%),radial-gradient(circle_at_22%_18%,rgba(255,255,255,0.13),transparent_22%),radial-gradient(circle_at_84%_16%,rgba(255,255,255,0.08),transparent_16%),radial-gradient(circle_at_50%_110%,rgba(141,198,63,0.16),transparent_34%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(135deg,transparent_0%,rgba(255,255,255,0.04)_38%,transparent_52%),linear-gradient(180deg,transparent_58%,rgba(0,0,0,0.54)_100%)]" />
      <div className="absolute -left-10 top-1/3 h-36 w-36 rounded-full blur-3xl" style={{ backgroundColor: visual.glow }} />
      <div className="absolute right-[-1rem] top-10 h-28 w-28 rounded-full bg-white/6 blur-2xl" />
      <motion.div
        aria-hidden
        className="absolute inset-y-0 w-20 bg-gradient-to-r from-transparent via-white/10 to-transparent mix-blend-screen"
        initial={{ x: -120, opacity: 0 }}
        animate={{ x: 320, opacity: [0, 0.55, 0] }}
        transition={{ duration: 3.4, repeat: Infinity, repeatDelay: 1.2, ease: 'easeInOut' }}
      />
      <motion.div
        aria-hidden
        className="absolute inset-x-0 top-[8.4rem] h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"
        initial={{ opacity: 0.12 }}
        animate={{ opacity: [0.12, 0.28, 0.12] }}
        transition={{ duration: 3.2, repeat: Infinity, ease: 'easeInOut' }}
      />

      <svg viewBox="0 0 240 180" className="absolute inset-0 h-full w-full">
        <path d="M 22 28 H 220" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />
        <path d="M 22 150 H 220" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />
        <path d="M 26 38 H 214" fill="none" stroke={visual.accent} strokeOpacity="0.18" strokeWidth="2" strokeLinecap="round" />
        <path d={visual.topPath} fill="none" stroke={visual.glow} strokeWidth="12" strokeLinecap="round" strokeLinejoin="round" style={{ filter: 'blur(10px)' }} />
        <path d={visual.middlePath} fill="none" stroke={visual.glow} strokeWidth="10" strokeLinecap="round" strokeLinejoin="round" style={{ filter: 'blur(8px)' }} />
        <path d={visual.bottomPath} fill="none" stroke={visual.glow} strokeWidth="10" strokeLinecap="round" strokeLinejoin="round" style={{ filter: 'blur(8px)' }} />
        <path d={visual.topPath} fill="none" stroke={visual.accent} strokeWidth="3.4" strokeLinecap="round" strokeLinejoin="round" />
        <path d={visual.middlePath} fill="none" stroke={visual.accent} strokeWidth="3.4" strokeLinecap="round" strokeLinejoin="round" />
        <path d={visual.bottomPath} fill="none" stroke={visual.accent} strokeWidth="3.4" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M 34 54 H 96" fill="none" stroke="rgba(255,255,255,0.18)" strokeWidth="1.2" strokeDasharray="2 4" />
        <path d="M 150 62 H 210" fill="none" stroke="rgba(255,255,255,0.18)" strokeWidth="1.2" strokeDasharray="2 4" />
        <path d="M 34 118 H 102" fill="none" stroke="rgba(255,255,255,0.16)" strokeWidth="1.2" strokeDasharray="2 4" />
        <path d="M 150 122 H 206" fill="none" stroke="rgba(255,255,255,0.16)" strokeWidth="1.2" strokeDasharray="2 4" />
        {pulseXs.map((cx) => (
          <g key={`pulse-${cx}`}>
            <circle cx={cx} cy="38" r="3.4" fill={visual.accent} />
            <circle cx={cx} cy="38" r="7.2" fill="none" stroke={visual.accent} strokeOpacity="0.34" strokeWidth="1.2" />
          </g>
        ))}
        {orbitNodes.map((node, nodeIdx) => (
          <g key={`node-${nodeIdx}`}>
            <circle cx={node.x} cy={node.y} r={node.r + 5} fill={visual.glow} opacity="0.16" />
            <circle cx={node.x} cy={node.y} r={node.r} fill={visual.accent} opacity="0.94" />
          </g>
        ))}
        <path d="M 40 90 C 74 62, 120 64, 154 92 S 198 116, 220 92" fill="none" stroke="rgba(255,255,255,0.12)" strokeWidth="1.3" />
        <path d="M 32 106 C 68 120, 108 122, 148 108 S 196 86, 220 102" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="1.1" />
      </svg>

      <div className="absolute left-6 top-6 right-6 flex items-start justify-between gap-4">
        <div>
          <div className="text-[10px] font-mono font-bold uppercase tracking-[0.22em] text-white/76">
            Неделя {Number(track.id)}
          </div>
          <div className="mt-1 text-[10px] font-mono uppercase tracking-[0.2em] text-white/42">
            {weekCopy.dateRange}
          </div>
        </div>
      </div>

      <div className="absolute bottom-12 left-5 right-5 rounded-[1.35rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.12),rgba(255,255,255,0.03))] px-5 py-4 shadow-[0_18px_40px_rgba(0,0,0,0.3)] backdrop-blur-xl">
        <div
          className="mb-2 text-[10px] font-mono uppercase tracking-[0.28em]"
          style={{ color: visual.accent, textShadow: `0 0 14px ${visual.glow}` }}
        >
          Основной воркшоп
        </div>
        <h3
          className="max-w-[220px] text-[2.05rem] font-black uppercase leading-[0.88] tracking-[-0.06em]"
          style={{
            color: '#F7F7F3',
            textShadow: `0 4px 28px rgba(0,0,0,0.8), 0 0 22px ${visual.glow}`,
          }}
        >
          {track.title}
        </h3>
      </div>
    </div>
  );
};

const TripleLectureCards = ({
  activeWeek = 0,
  track,
  advanced,
  lecture,
  darkMode = false,
  compact = false,
  mode = 'regular',
}: {
  activeWeek?: number;
  track: ProgramTrack;
  advanced: AdvancedTrack;
  lecture: LectureCard;
  darkMode?: boolean;
  compact?: boolean;
  mode?: 'regular' | 'single-neon' | 'all-neon';
}) => {
  const visual = SIGNAL_VISUALS[activeWeek % SIGNAL_VISUALS.length];
  const cards = [
    {
      label: 'Основной трек',
      title: track.title,
      description: track.longDescription,
      speaker: 'Команда AI Mindset',
      tone:
        mode === 'all-neon'
          ? 'darkSoft'
          : darkMode
            ? 'dark'
            : 'light',
      neon: mode === 'all-neon',
    },
    {
      label: 'Advanced',
      title: advanced.title,
      description: advanced.description,
      speaker: advanced.speaker,
      tone: 'dark',
      neon: mode === 'single-neon' || mode === 'all-neon',
    },
    {
      label: 'Лекция',
      title: lecture.title,
      description: lecture.description,
      speaker: lecture.speaker,
      tone:
        mode === 'all-neon'
          ? 'darkSoft'
          : darkMode
            ? 'darkSoft'
            : 'lightSoft',
      neon: mode === 'all-neon',
    },
  ] as const;

  return (
    <div className={cn('grid lg:grid-cols-3', compact ? 'gap-3' : 'gap-3 lg:gap-4')}>
      {cards.map((card, index) => (
        (() => {
          const cardVisual = SIGNAL_VISUALS[(activeWeek + index) % SIGNAL_VISUALS.length];
          const isDarkCard = card.tone === 'dark' || card.tone === 'darkSoft';
          const isAdvancedSpotlight = mode === 'single-neon' && card.label === 'Advanced';
          const isAllNeonCard = mode === 'all-neon';
          const isMainTrackAllNeon = isAllNeonCard && card.label === 'Основной трек';
          const isLectureAllNeon = isAllNeonCard && card.label === 'Лекция';
          const isAdvancedAllNeon = isAllNeonCard && card.label === 'Advanced';

          return (
            <div
              key={`${card.label}-${card.title}`}
              className={cn(
                'relative overflow-hidden',
                compact ? 'min-h-[122px] border px-4 py-3.5 backdrop-blur-xl' : 'min-h-[154px] border px-5 py-5 backdrop-blur-xl',
                isAdvancedSpotlight
                  ? 'bg-[#040404] text-white border-white/10 shadow-[0_18px_38px_rgba(0,0,0,0.28)]'
                  : isAllNeonCard
                    ? 'min-h-[156px] rounded-[12px] border-white/10 bg-[linear-gradient(180deg,rgba(20,20,20,0.96),rgba(6,6,6,0.98))] text-white shadow-[0_18px_44px_rgba(0,0,0,0.28)]'
                  : card.tone === 'dark'
                    ? 'bg-black text-white border-white/10 shadow-[0_16px_36px_rgba(0,0,0,0.24)]'
                    : card.tone === 'darkSoft'
                      ? 'bg-white/[0.06] text-white border-white/10 shadow-[0_16px_36px_rgba(0,0,0,0.18)]'
                      : card.tone === 'lightSoft'
                        ? 'bg-[#F2F2EF]/85 text-black border-black/8 shadow-[0_12px_30px_rgba(0,0,0,0.06)]'
                      : 'bg-white text-black border-black/10 shadow-[0_12px_30px_rgba(0,0,0,0.05)]',
              )}
            >
              {card.neon && !isAdvancedSpotlight && !isAllNeonCard && (
                <>
                  <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),transparent_42%,rgba(0,0,0,0.28)_100%)]" />
                  <div className="pointer-events-none absolute -left-4 top-1/2 h-20 w-20 -translate-y-1/2 rounded-full bg-[#8DC63F]/30 blur-3xl" />
                  <div className="pointer-events-none absolute right-4 top-4 h-14 w-14 rounded-full bg-white/8 blur-2xl" />
                </>
              )}
              {isAdvancedSpotlight && (
                <>
                  <div
                    className="pointer-events-none absolute inset-0"
                    style={{
                      backgroundImage:
                        'linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)',
                      backgroundSize: '30px 30px',
                      opacity: 0.1,
                    }}
                  />
                  <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),transparent_24%,rgba(0,0,0,0.3)_48%,rgba(0,0,0,0.88)_100%),radial-gradient(circle_at_16%_18%,rgba(255,255,255,0.08),transparent_18%),radial-gradient(circle_at_18%_70%,rgba(116,222,255,0.18),transparent_28%)]" />
                  <div className="pointer-events-none absolute left-[-8%] top-[12%] h-24 w-36 rounded-full blur-[56px]" style={{ backgroundColor: visual.glow, opacity: 0.28 }} />
                  <div className="pointer-events-none absolute left-[8%] top-[24%] h-16 w-28 rounded-full blur-[42px]" style={{ backgroundColor: visual.glow, opacity: 0.18 }} />
                  <div className="pointer-events-none absolute right-[8%] top-[14%] h-14 w-14 blur-[32px]" style={{ backgroundColor: 'rgba(255,255,255,0.14)' }} />
                  <div className="pointer-events-none absolute inset-x-4 top-4 h-[78px] overflow-hidden border border-white/6 bg-[linear-gradient(180deg,rgba(255,255,255,0.03),rgba(255,255,255,0.01))]">
                    <svg viewBox="0 0 300 96" className="h-full w-full opacity-[0.96]">
                      <path d="M 18 22 H 132 L 170 54 H 282" fill="none" stroke={visual.glow} strokeWidth="10" strokeLinecap="round" strokeLinejoin="round" style={{ filter: 'blur(8px)' }} />
                      <path d="M 18 22 H 132 L 170 54 H 282" fill="none" stroke={visual.accent} strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M 34 74 H 152 L 196 44 H 284" fill="none" stroke={visual.glow} strokeWidth="9" strokeLinecap="round" strokeLinejoin="round" style={{ filter: 'blur(7px)' }} />
                      <path d="M 34 74 H 152 L 196 44 H 284" fill="none" stroke={visual.accent} strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M 28 48 C 70 10, 118 10, 162 48" fill="none" stroke="rgba(255,255,255,0.16)" strokeWidth="2.2" strokeLinecap="round" />
                      <path d="M 34 50 C 74 22, 116 22, 156 50" fill="none" stroke={visual.accent} strokeWidth="2.8" strokeLinecap="round" style={{ filter: 'blur(2px)', opacity: 0.84 }} />
                      <path d="M 44 58 C 98 34, 154 34, 212 66 S 258 86, 286 50" fill="none" stroke="rgba(255,255,255,0.12)" strokeWidth="1.5" />
                      {[28, 72, 116, 160, 204, 248, 286].map((cx) => (
                        <g key={`spot-${card.title}-${cx}`}>
                          <circle cx={cx} cy="22" r="5.5" fill={visual.accent} />
                          <circle cx={cx} cy="22" r="12.5" fill="none" stroke={visual.accent} strokeOpacity="0.3" strokeWidth="2.2" />
                        </g>
                      ))}
                    </svg>
                  </div>
                  <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[58%] bg-[linear-gradient(180deg,rgba(16,16,16,0.02),rgba(10,10,10,0.72)_16%,rgba(8,8,8,0.98)_100%)] backdrop-blur-xl" />
                </>
              )}
              {isAllNeonCard && (
                <>
                  <div className="pointer-events-none absolute inset-0 rounded-[12px] bg-[linear-gradient(180deg,rgba(255,255,255,0.05),transparent_24%,rgba(0,0,0,0.14)_48%,rgba(0,0,0,0.76)_100%)]" />
                  <div
                    className="pointer-events-none absolute inset-0"
                    style={{
                      backgroundImage:
                        'linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)',
                      backgroundSize: '30px 30px',
                      opacity: 0.08,
                    }}
                  />
                  <div className="pointer-events-none absolute -left-5 top-1 h-24 w-28 rounded-full blur-[58px]" style={{ backgroundColor: cardVisual.glow, opacity: 0.24 }} />
                  <div className="pointer-events-none absolute left-[10%] top-[18%] h-20 w-36 rounded-full blur-[56px]" style={{ backgroundColor: cardVisual.glow, opacity: 0.18 }} />
                  <div className="pointer-events-none absolute right-4 top-3 h-14 w-14 rounded-full blur-[34px]" style={{ backgroundColor: 'rgba(255,255,255,0.1)' }} />
                  <div className="pointer-events-none absolute inset-x-4 top-3 h-[72px] overflow-hidden rounded-[10px] border border-white/6 bg-[linear-gradient(180deg,rgba(255,255,255,0.03),rgba(255,255,255,0.01))]">
                    <svg viewBox="0 0 300 96" className="h-full w-full opacity-[0.96]">
                      <path d="M 16 22 H 126 L 164 50 H 280" fill="none" stroke={cardVisual.glow} strokeWidth="10" strokeLinecap="round" strokeLinejoin="round" style={{ filter: 'blur(8px)' }} />
                      <path d="M 16 22 H 126 L 164 50 H 280" fill="none" stroke={cardVisual.accent} strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M 26 74 H 136 C 156 74, 176 46, 204 46 H 282" fill="none" stroke={cardVisual.glow} strokeWidth="9" strokeLinecap="round" strokeLinejoin="round" style={{ filter: 'blur(7px)' }} />
                      <path d="M 26 74 H 136 C 156 74, 176 46, 204 46 H 282" fill="none" stroke={cardVisual.accent} strokeWidth="3.6" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M 34 58 C 74 22, 128 20, 184 60 S 246 82, 286 44" fill="none" stroke="rgba(255,255,255,0.15)" strokeWidth="1.6" />
                      <path d="M 44 46 C 80 18, 120 18, 156 46" fill="none" stroke="rgba(255,255,255,0.18)" strokeWidth="2.1" strokeLinecap="round" />
                      <path d="M 46 48 C 80 26, 118 26, 152 48" fill="none" stroke={cardVisual.accent} strokeWidth="2.4" strokeLinecap="round" style={{ filter: 'blur(2px)', opacity: 0.82 }} />
                      <path d="M 42 22 H 96" fill="none" stroke="rgba(255,255,255,0.14)" strokeWidth="2" strokeDasharray="4 6" />
                      <path d="M 204 72 H 266" fill="none" stroke="rgba(255,255,255,0.12)" strokeWidth="2" strokeDasharray="4 6" />
                      {[24, 68, 112, 156, 200, 244, 286].map((cx) => (
                        <g key={`v17-card-${card.label}-${cx}`}>
                          <circle cx={cx} cy="22" r="5.5" fill={cardVisual.accent} />
                          <circle cx={cx} cy="22" r="12.5" fill="none" stroke={cardVisual.accent} strokeOpacity="0.28" strokeWidth="2.2" />
                        </g>
                      ))}
                      {[{ x: 82, y: 66, r: 7 }, { x: 196, y: 76, r: 6 }, { x: 236, y: 58, r: 6 }].map((node, nodeIndex) => (
                        <g key={`v17-node-${card.label}-${nodeIndex}`}>
                          <circle cx={node.x} cy={node.y} r={node.r + 11} fill={cardVisual.glow} opacity="0.14" />
                          <circle cx={node.x} cy={node.y} r={node.r} fill={cardVisual.accent} opacity="0.95" />
                        </g>
                      ))}
                    </svg>
                    {isAdvancedAllNeon && (
                      <>
                        <div className="absolute left-[18%] top-[48%] h-[11px] w-[54%] -translate-y-1/2 bg-white/10 blur-[18px]" />
                        <div className="absolute left-[20%] top-[46%] h-[4px] w-[50%] -translate-y-1/2 rounded-full" style={{ backgroundColor: cardVisual.accent, boxShadow: `0 0 26px ${cardVisual.glow}` }} />
                        <div className="absolute left-[24%] top-[20%] h-[58%] w-[9px] rounded-full blur-[10px]" style={{ backgroundColor: cardVisual.glow, opacity: 0.74 }} />
                        <div className="absolute left-[38%] top-[20%] h-[58%] w-[9px] rounded-full blur-[10px]" style={{ backgroundColor: cardVisual.glow, opacity: 0.72 }} />
                        <div className="absolute left-[24%] top-[20%] h-[58%] w-[3px] rounded-full" style={{ backgroundColor: cardVisual.accent }} />
                        <div className="absolute left-[38%] top-[20%] h-[58%] w-[3px] rounded-full" style={{ backgroundColor: cardVisual.accent }} />
                      </>
                    )}
                  </div>
                  <div className="pointer-events-none absolute inset-x-3 bottom-3 h-[56%] rounded-[10px] border border-white/8 bg-[linear-gradient(180deg,rgba(24,24,24,0.12),rgba(12,12,12,0.82)_18%,rgba(10,10,10,0.96)_100%)] shadow-[0_18px_40px_rgba(0,0,0,0.34)] backdrop-blur-xl" />
                </>
              )}
              <div className={cn('relative z-10 flex h-full flex-col', isAllNeonCard ? 'justify-end px-1 pb-1 pt-[5rem]' : isAdvancedSpotlight ? 'justify-end pt-[5.1rem]' : '')}>
                <div className={cn('text-[9px] font-mono uppercase tracking-[0.24em]', isDarkCard ? 'text-[#D8F484]' : 'text-black/35')}>
                  {card.label}
                </div>
                <div
                  className={cn(
                    'mt-2.5 font-black uppercase tracking-[-0.06em] leading-[0.92]',
                    compact ? 'text-[18px]' : 'text-[28px]',
                    isAllNeonCard && 'tracking-[-0.075em]',
                    isMainTrackAllNeon && 'whitespace-nowrap text-[15px] md:text-[16px] leading-[0.82]',
                    isLectureAllNeon && 'text-[16px] md:text-[17px] leading-[0.84]',
                    isAllNeonCard && 'leading-[0.82]',
                  )}
                  style={
                    isAdvancedSpotlight
                      ? { textShadow: `0 10px 34px rgba(0,0,0,0.82), 0 0 18px ${visual.glow}` }
                      : isAllNeonCard
                        ? { textShadow: `0 10px 24px rgba(0,0,0,0.72), 0 0 16px ${cardVisual.glow}` }
                      : undefined
                  }
                >
                  {card.title}
                </div>
                <div
                  className={cn(
                    compact ? 'mt-2 text-[11px] leading-[1.45]' : 'mt-3 text-[12px] leading-[1.55]',
                    isDarkCard ? 'text-white/68' : 'text-black/58',
                    isAllNeonCard && 'text-[10.5px] leading-[1.42] text-white/70',
                  )}
                >
                  {card.description}
                </div>
                <div
                  className={cn(
                    compact ? 'mt-3 pt-2.5' : 'mt-5 pt-3',
                    'border-t text-[10px] font-bold uppercase tracking-[0.08em]',
                    isDarkCard ? 'border-white/10 text-white/84' : 'border-black/8 text-black/72',
                    isAllNeonCard && 'border-white/12 text-white/82',
                  )}
                >
                  {card.speaker}
                </div>
              </div>
            </div>
          );
        })()
      ))}
    </div>
  );
};

const SharedLectureBackdrop = ({ activeWeek }: { activeWeek: number }) => {
  const primary = SIGNAL_VISUALS[activeWeek % SIGNAL_VISUALS.length];
  const secondary = SIGNAL_VISUALS[(activeWeek + 1) % SIGNAL_VISUALS.length];
  const tertiary = SIGNAL_VISUALS[(activeWeek + 2) % SIGNAL_VISUALS.length];

  return (
    <>
      <div
        className="absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.11) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.11) 1px, transparent 1px)',
          backgroundSize: '32px 32px',
        }}
      />
      <div className="pointer-events-none absolute left-[7%] top-[14%] h-40 w-44 rounded-full blur-[96px]" style={{ backgroundColor: primary.glow, opacity: 0.22 }} />
      <div className="pointer-events-none absolute left-[36%] top-[28%] h-44 w-56 rounded-full blur-[110px]" style={{ backgroundColor: secondary.glow, opacity: 0.18 }} />
      <div className="pointer-events-none absolute right-[8%] top-[18%] h-40 w-44 rounded-full blur-[102px]" style={{ backgroundColor: tertiary.glow, opacity: 0.2 }} />
      <div className="pointer-events-none absolute left-[16%] bottom-[18%] h-28 w-[42%] blur-[72px]" style={{ backgroundColor: primary.glow, opacity: 0.12 }} />
      <div className="pointer-events-none absolute right-[12%] bottom-[14%] h-24 w-[28%] blur-[64px]" style={{ backgroundColor: secondary.glow, opacity: 0.1 }} />
      <svg viewBox="0 0 960 320" className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.9]">
        <g transform="translate(44 10)">
          <path d="M 24 46 H 228 L 286 94 H 452" fill="none" stroke={primary.glow} strokeWidth="18" strokeLinecap="round" strokeLinejoin="round" style={{ filter: 'blur(16px)' }} />
          <path d="M 24 46 H 228 L 286 94 H 452" fill="none" stroke={primary.accent} strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M 88 126 C 170 62, 274 62, 362 122 S 492 194, 572 104" fill="none" stroke="rgba(255,255,255,0.16)" strokeWidth="3.2" />
          {[22, 102, 182, 262, 342, 422].map((cx) => (
            <g key={`backdrop-primary-${cx}`}>
              <circle cx={cx} cy="46" r="10" fill={primary.accent} />
              <circle cx={cx} cy="46" r="28" fill="none" stroke={primary.accent} strokeOpacity="0.26" strokeWidth="3" />
            </g>
          ))}
        </g>
        <g transform="translate(252 120)" opacity="0.9">
          <path d="M 34 78 H 248 L 312 28 H 500" fill="none" stroke={secondary.glow} strokeWidth="16" strokeLinecap="round" strokeLinejoin="round" style={{ filter: 'blur(14px)' }} />
          <path d="M 34 78 H 248 L 312 28 H 500" fill="none" stroke={secondary.accent} strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M 56 132 C 148 104, 254 104, 334 148 S 452 190, 528 118" fill="none" stroke="rgba(255,255,255,0.11)" strokeWidth="2.8" />
          {[86, 196, 332, 448].map((cx) => (
            <g key={`backdrop-secondary-${cx}`}>
              <circle cx={cx} cy="78" r="8" fill={secondary.accent} />
              <circle cx={cx} cy="78" r="22" fill="none" stroke={secondary.accent} strokeOpacity="0.22" strokeWidth="2.6" />
            </g>
          ))}
        </g>
        <g transform="translate(604 24)" opacity="0.75">
          <path d="M 18 56 H 156 L 194 94 H 298" fill="none" stroke={tertiary.glow} strokeWidth="14" strokeLinecap="round" strokeLinejoin="round" style={{ filter: 'blur(12px)' }} />
          <path d="M 18 56 H 156 L 194 94 H 298" fill="none" stroke={tertiary.accent} strokeWidth="4.6" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M 30 138 C 88 84, 150 88, 212 136 S 284 164, 314 112" fill="none" stroke="rgba(255,255,255,0.09)" strokeWidth="2.4" />
          {[28, 110, 190, 270].map((cx) => (
            <g key={`backdrop-tertiary-${cx}`}>
              <circle cx={cx} cy="56" r="7" fill={tertiary.accent} />
              <circle cx={cx} cy="56" r="18" fill="none" stroke={tertiary.accent} strokeOpacity="0.2" strokeWidth="2.4" />
            </g>
          ))}
        </g>
      </svg>
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(5,5,5,0.12),rgba(8,8,8,0.42)_34%,rgba(5,5,5,0.88)_100%)]" />
    </>
  );
};

const OverlayLectureCards = ({
  activeWeek,
  track,
  advanced,
  lecture,
}: {
  activeWeek: number;
  track: ProgramTrack;
  advanced: AdvancedTrack;
  lecture: LectureCard;
}) => {
  const cards = [
    {
      label: 'Основной трек',
      title: track.title,
      description: track.longDescription,
      speaker: 'Команда AI Mindset',
    },
    {
      label: 'Advanced',
      title: advanced.title,
      description: advanced.description,
      speaker: advanced.speaker,
    },
    {
      label: 'Лекция',
      title: lecture.title,
      description: lecture.description,
      speaker: lecture.speaker,
    },
  ] as const;

  return (
    <div className="grid items-stretch gap-4 md:grid-cols-2 xl:grid-cols-3">
      {cards.map((card, index) => {
        const visual = SIGNAL_VISUALS[(activeWeek + index) % SIGNAL_VISUALS.length];

        return (
          <div
            key={`${card.label}-${card.title}-overlay`}
            className="relative h-full min-h-[232px] overflow-hidden rounded-[14px] border border-white/20 bg-[linear-gradient(180deg,rgba(16,16,16,0.5),rgba(8,8,8,0.56))] px-4 py-3.5 text-white shadow-[0_12px_20px_rgba(0,0,0,0.12)] backdrop-blur-[60px]"
          >
            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.03),rgba(255,255,255,0.01)_24%,rgba(0,0,0,0.01)_52%,rgba(0,0,0,0.05)_100%)]" />
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_22%_10%,rgba(255,255,255,0.05),transparent_18%),radial-gradient(circle_at_58%_44%,rgba(255,255,255,0.012),transparent_28%)]" />
            <div className="pointer-events-none absolute left-[56%] top-[22%] h-28 w-32 rounded-full blur-[56px]" style={{ backgroundColor: visual.glow, opacity: 0.085 }} />
            <div className="pointer-events-none absolute left-[32%] bottom-[24%] h-20 w-24 rounded-full blur-[52px]" style={{ backgroundColor: visual.glow, opacity: 0.05 }} />
            <div className="pointer-events-none absolute right-8 top-10 h-12 w-12 rounded-full blur-[34px]" style={{ backgroundColor: 'rgba(255,255,255,0.03)' }} />

            <div className="relative z-10 mb-3 h-[44px] overflow-visible">
              <svg viewBox="0 0 240 70" className="relative z-10 h-full w-full">
                <path d={visual.topPath} fill="none" stroke={visual.glow} strokeWidth="9" strokeLinecap="round" strokeLinejoin="round" style={{ filter: 'blur(7px)' }} />
                <path d={visual.topPath} fill="none" stroke={visual.accent} strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round" />
                <path d={visual.bottomPath} fill="none" stroke={visual.glow} strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" style={{ filter: 'blur(6px)' }} />
                <path d={visual.bottomPath} fill="none" stroke={visual.accent} strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round" />
                {[38, 92, 146, 200].map((cx) => (
                  <g key={`${card.title}-${cx}`}>
                    <circle cx={cx} cy="18" r="5" fill={visual.accent} />
                    <circle cx={cx} cy="18" r="12" fill="none" stroke={visual.accent} strokeOpacity="0.24" strokeWidth="2" />
                  </g>
                ))}
              </svg>
            </div>

            <div className="relative z-10 flex h-[calc(100%-3.5rem)] flex-col">
              <div className="text-[10px] font-mono font-semibold uppercase tracking-[0.28em] text-[#D8F484]/92">{card.label}</div>
              <div className="mt-2 text-[15px] md:text-[16px] font-black uppercase tracking-[-0.065em] leading-[0.86]" style={{ textShadow: `0 10px 22px rgba(0,0,0,0.66), 0 0 14px ${visual.glow}` }}>
                {card.title}
              </div>
              <div className="mt-2.5 flex-1 text-[11px] leading-[1.5] text-white/80">{card.description}</div>
              <div className="mt-3.5 border-t border-white/12 pt-2.5 text-[10px] font-semibold uppercase tracking-[0.12em] text-white/84">
                {card.speaker}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export const DesktopTechUiV14 = () => {
  const { activeWeek, containerRef, handleWeekClick, track, weekCopy, advanced } = useStickyWeekState();

  return (
    <div ref={containerRef} className="w-full max-w-[1340px] mx-auto font-sans h-[230vh] relative">
      <div className="sticky top-[10vh] flex flex-col lg:flex-row gap-4 lg:gap-7 items-stretch justify-center h-[500px] pt-10">
        <WeekRail activeWeek={activeWeek} onWeekClick={handleWeekClick} />

        <div className="flex-1 border border-black/10 shadow-[0_12px_38px_rgba(0,0,0,0.04)] relative overflow-hidden flex flex-col max-w-[1040px] bg-white">
          <AnimatePresence mode="wait">
            <motion.div
              key={`v14-card-${activeWeek}`}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-1 flex-col md:flex-row"
            >
              <div className="w-full md:w-[31%] h-[250px] md:h-auto relative shrink-0 bg-black">
                <FunctionalSignalPanel activeWeek={activeWeek} track={track} weekCopy={weekCopy} />
              </div>

              <div className="flex-1 px-8 py-8 md:px-9 md:py-9 flex flex-col bg-white relative">
                <div
                  className="absolute inset-0 opacity-[0.03] pointer-events-none"
                  style={{
                    backgroundImage:
                      'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)',
                    backgroundSize: '32px 32px',
                  }}
                />
                <div className="relative z-10 flex flex-col h-full">
                  <div className="flex items-center justify-end mb-5">
                    <div className="text-[10px] font-mono font-bold uppercase tracking-[0.2em] text-black/26">{weekCopy.dateRange}</div>
                  </div>

                  <div className="flex flex-col items-end text-right">
                    <div className="inline-flex items-center gap-2 mb-2 justify-end">
                      <span className="text-[10px] uppercase font-bold tracking-widest text-black/52">Advanced Track</span>
                    </div>
                    <h4 className="font-black text-[44px] uppercase tracking-tighter leading-[0.88] text-black mb-3 max-w-[380px]">{advanced.title}</h4>
                    <p className="text-[15px] opacity-62 max-w-[420px] leading-relaxed mb-8">{advanced.description}</p>
                  </div>

                  <div className="mt-auto">
                    <div className="text-[10px] font-mono font-black uppercase tracking-[0.32em] text-black/70 mb-3">НЕДЕЛЬНЫЙ РИТМ</div>
                    <RhythmGrid compact widthClass="max-w-[640px]" />
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export const DesktopTechUiV15 = () => {
  const { activeWeek, containerRef, handleWeekClick, track, weekCopy, advanced } = useStickyWeekState();
  const visual = SIGNAL_VISUALS[activeWeek % SIGNAL_VISUALS.length];
  const pulseXs = [80, 148, 216, 284, 352, 420, 488];
  const orbitNodes = [
    { x: 120, y: 176, r: 7 },
    { x: 226, y: 150, r: 9 },
    { x: 356, y: 188, r: 8 },
    { x: 468, y: 168, r: 7 },
    { x: 582, y: 198, r: 9 },
  ];

  return (
    <div ref={containerRef} className="w-full max-w-[1340px] mx-auto font-sans h-[230vh] relative">
      <div className="sticky top-[10vh] flex flex-col lg:flex-row gap-4 lg:gap-7 items-stretch justify-center h-[500px] pt-10">
        <WeekRail activeWeek={activeWeek} onWeekClick={handleWeekClick} />

        <div className="flex-1 border border-black/10 bg-white shadow-[0_12px_38px_rgba(0,0,0,0.04)] max-w-[1040px] overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={`v15-${activeWeek}`}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
              className="h-full flex flex-col"
            >
              <div className="relative flex-1 min-h-0 overflow-hidden bg-[#070707] border-b border-black/10">
                <div
                  className="absolute inset-0 opacity-[0.11]"
                  style={{
                    backgroundImage:
                    'linear-gradient(rgba(255,255,255,0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.12) 1px, transparent 1px)',
                    backgroundSize: '34px 34px',
                  }}
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),transparent_18%,rgba(0,0,0,0.66)_100%),radial-gradient(circle_at_24%_50%,rgba(141,198,63,0.06),transparent_32%),radial-gradient(circle_at_80%_72%,rgba(191,140,255,0.06),transparent_26%)]" />
                <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(4,4,4,0.98)_0%,rgba(4,4,4,0.96)_34%,rgba(4,4,4,0.78)_54%,rgba(4,4,4,0.3)_74%,rgba(4,4,4,0)_100%)]" />
                <div className="absolute inset-x-0 top-[84px] h-[8px] bg-[#D8F484] blur-[16px] opacity-34" />
                <div className="absolute -left-12 top-[36%] h-44 w-44 rounded-full blur-[90px]" style={{ backgroundColor: visual.glow, opacity: 0.24 }} />
                <div className="absolute left-[7%] top-[12%] h-64 w-[32rem] rounded-full blur-[140px]" style={{ backgroundColor: 'rgba(0,0,0,0.88)' }} />
                <div className="absolute right-[10%] top-[20%] h-28 w-28 rounded-full bg-white/8 blur-[70px]" />

                <svg viewBox="0 0 720 280" className="absolute inset-0 h-full w-full opacity-[0.56] translate-x-[12%]">
                  <path d="M 40 56 H 498 L 548 104 H 640" fill="none" stroke={visual.glow} strokeWidth="15" strokeLinecap="round" strokeLinejoin="round" style={{ filter: 'blur(12px)' }} />
                  <path d="M 40 56 H 498 L 548 104 H 640" fill="none" stroke={visual.accent} strokeWidth="4.8" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M 96 152 H 292 M 148 120 V 236 M 190 120 V 236 M 308 152 H 398" fill="none" stroke={visual.glow} strokeWidth="13" strokeLinecap="round" strokeLinejoin="round" style={{ filter: 'blur(10px)' }} />
                  <path d="M 96 152 H 292 M 148 120 V 236 M 190 120 V 236 M 308 152 H 398" fill="none" stroke={visual.accent} strokeWidth="4.8" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M 112 208 C 196 148, 324 148, 416 208 S 560 252, 648 198" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="1.9" />
                  <path d="M 84 228 C 164 258, 276 260, 380 228 S 560 182, 648 220" fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="1.6" />
                  <path d="M 70 110 H 180" fill="none" stroke="rgba(255,255,255,0.16)" strokeWidth="2" strokeDasharray="5 10" />
                  <path d="M 458 154 H 620" fill="none" stroke="rgba(255,255,255,0.14)" strokeWidth="2" strokeDasharray="5 10" />
                  {pulseXs.map((cx) => (
                    <g key={`v15-pulse-${cx}`}>
                      <circle cx={cx} cy="56" r="6" fill={visual.accent} />
                      <circle cx={cx} cy="56" r="14" fill="none" stroke={visual.accent} strokeOpacity="0.28" strokeWidth="2.4" />
                    </g>
                  ))}
                  {orbitNodes.map((node, nodeIdx) => (
                    <g key={`v15-node-${nodeIdx}`}>
                      <circle cx={node.x} cy={node.y} r={node.r + 10} fill={visual.glow} opacity="0.14" />
                      <circle cx={node.x} cy={node.y} r={node.r} fill={visual.accent} opacity="0.86" />
                    </g>
                  ))}
                </svg>
                <div className="pointer-events-none absolute inset-y-0 left-0 w-[66%] bg-[linear-gradient(90deg,rgba(6,6,6,0.995)_0%,rgba(6,6,6,0.98)_58%,rgba(6,6,6,0.8)_84%,rgba(6,6,6,0)_100%)]" />

                <div className="relative z-10 grid lg:grid-cols-[1.15fr_0.85fr] gap-6 px-8 py-7 md:px-9 md:py-7.5">
                  <div className="relative">
                    <div className="absolute inset-y-0 -left-6 w-[70%] bg-[linear-gradient(90deg,rgba(8,8,8,0.9),rgba(8,8,8,0.58),transparent)] blur-[18px]" />
                    <div className="flex items-center justify-between gap-4 mb-4">
                      <div className="text-[10px] font-mono uppercase tracking-[0.28em] text-white/52">[ WEEK {track.id} ]</div>
                      <div className="text-[10px] font-mono uppercase tracking-[0.2em] text-white/34">{weekCopy.dateRange}</div>
                    </div>
                    <div className="relative text-[44px] md:text-[52px] font-black uppercase tracking-[-0.06em] leading-[0.84] text-white max-w-[520px]" style={{ textShadow: '0 8px 22px rgba(0,0,0,0.42)' }}>
                      {track.title}
                    </div>
                    <div className="relative mt-3 inline-flex w-fit max-w-[31rem] bg-black/52 px-3 py-1.5 text-[10px] font-mono uppercase tracking-[0.28em] text-[#D8F484] shadow-[0_10px_28px_rgba(0,0,0,0.34)] backdrop-blur-md">
                      {weekCopy.framedDescription}
                    </div>
                    <div className="relative mt-4 max-w-[520px] text-[15px] leading-[1.54] text-white/82" style={{ textShadow: '0 6px 14px rgba(0,0,0,0.34)' }}>
                      {weekCopy.bodyDescription}
                    </div>
                  </div>

                  <div className="rounded-[22px] border border-white/10 bg-white/[0.04] p-4.5 backdrop-blur-md">
                    <div className="text-[9px] font-mono uppercase tracking-[0.26em] text-[#D8F484]">ADVANCED TRACK</div>
                    <div className="mt-3 text-[32px] font-black uppercase tracking-[-0.06em] leading-[0.86] text-white max-w-[240px]">
                      {advanced.title}
                    </div>
                    <div className="mt-3.5 text-[12.5px] leading-[1.54] text-white/66">{advanced.description}</div>
                    <div className="mt-5 grid grid-cols-2 gap-4 border-t border-white/10 pt-3.5">
                      <div>
                        <div className="text-[8px] font-mono uppercase tracking-[0.24em] text-white/35">slot</div>
                        <div className="mt-1 text-[10px] font-mono uppercase tracking-[0.16em] text-white/86">СР · 18:00 CET</div>
                      </div>
                      <div className="text-right">
                        <div className="text-[8px] font-mono uppercase tracking-[0.24em] text-white/35">speaker</div>
                        <div className="mt-1 text-[10px] font-bold uppercase tracking-[0.08em] text-white/86">{advanced.speaker}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="shrink-0 border-t border-black/10 bg-white px-8 py-3 md:px-9 md:py-3.5">
                <div className="mb-2">
                  <div className="text-[10px] font-mono font-black uppercase tracking-[0.32em] text-black/70">НЕДЕЛЬНЫЙ РИТМ</div>
                </div>
                <RhythmGrid compact widthClass="max-w-[440px]" cellHeightClass="h-[48px]" />
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export const DesktopTechUiV16 = () => {
  const { activeWeek, containerRef, handleWeekClick, track, weekCopy, advanced, lecture } = useStickyWeekState();

  return (
    <div ref={containerRef} className="w-full max-w-[1340px] mx-auto font-sans h-[230vh] relative">
      <div className="sticky top-[10vh] flex flex-col lg:flex-row gap-4 lg:gap-7 items-stretch justify-center h-[640px] pt-10">
        <WeekRail activeWeek={activeWeek} onWeekClick={handleWeekClick} />

        <div className="flex-1 border border-black/10 bg-white shadow-[0_12px_38px_rgba(0,0,0,0.04)] max-w-[1040px] overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={`v16a-${activeWeek}`}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
              className="h-full flex flex-col"
            >
              <div className="px-8 py-6 md:px-9 md:py-7 relative bg-white">
                <div
                  className="absolute inset-0 opacity-[0.03] pointer-events-none"
                  style={{
                    backgroundImage:
                      'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)',
                    backgroundSize: '32px 32px',
                  }}
                />
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-5">
                    <div className="text-[10px] font-mono uppercase tracking-[0.26em] text-black/34">Неделя {track.id}</div>
                    <div className="text-[13px] font-mono font-bold uppercase tracking-[0.22em] text-black/42">{weekCopy.dateRange}</div>
                  </div>
                  <h2 className="text-[40px] md:text-[48px] font-black uppercase tracking-[-0.06em] leading-[0.86] text-black mb-3 max-w-[780px] whitespace-nowrap">
                    {track.title}
                  </h2>
                  <div className="text-[#8DC63F] font-mono text-[10px] font-bold uppercase tracking-[0.3em] mb-2">{track.shortDescription}</div>
                  <div className="text-[15px] leading-[1.38] text-black/46 max-w-[620px]">{weekCopy.framedDescription}</div>
                  <div className="mt-3 text-[15px] leading-[1.55] text-black/74 max-w-[720px]">
                    {weekCopy.bodyDescription}
                  </div>
                </div>
              </div>

              <div className="px-8 py-3 md:px-9 md:py-3.5 border-t border-black/10 bg-white">
                <div className="text-[10px] font-mono font-black uppercase tracking-[0.32em] text-black/70 mb-2">НЕДЕЛЬНЫЙ РИТМ</div>
                <RhythmGrid compact widthClass="max-w-[440px]" cellHeightClass="h-[48px]" />
              </div>

              <div className="px-8 py-4 md:px-9 md:py-5 bg-[radial-gradient(circle_at_50%_20%,rgba(141,198,63,0.08),transparent_35%),linear-gradient(180deg,rgba(255,255,255,0.96),rgba(248,248,245,0.92))]">
                <TripleLectureCards activeWeek={activeWeek} track={track} advanced={advanced} lecture={lecture} compact mode="single-neon" />
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export const DesktopTechUiV17 = () => {
  const { activeWeek, containerRef, handleWeekClick, track, weekCopy, advanced, lecture } = useStickyWeekState();
  const metaLabelClass = 'text-[10px] font-mono font-semibold uppercase tracking-[0.28em] text-black/38';
  const accentLabelClass = 'text-[10px] font-mono font-semibold uppercase tracking-[0.28em] text-[#8DC63F]';

  return (
    <div ref={containerRef} className="w-full max-w-[1340px] mx-auto font-sans h-[230vh] relative">
      <div className="sticky top-[10vh] flex flex-col lg:flex-row gap-4 lg:gap-7 items-stretch justify-center h-[636px] pt-10">
        <WeekRail activeWeek={activeWeek} onWeekClick={handleWeekClick} />

        <div className="flex-1 max-w-[980px] overflow-hidden border border-black/10 bg-white shadow-[0_18px_48px_rgba(0,0,0,0.08)]">
          <AnimatePresence mode="wait">
            <motion.div
              key={`v17a-${activeWeek}`}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
              className="h-full flex flex-col"
            >
              <div className="relative border-b border-black/8 px-8 py-6.5 md:px-9 md:py-7 bg-white">
                <div
                  className="absolute inset-0 opacity-[0.03] pointer-events-none"
                  style={{
                    backgroundImage:
                      'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)',
                    backgroundSize: '32px 32px',
                  }}
                />
                <div
                  className="absolute inset-0 bg-[radial-gradient(circle_at_18%_46%,rgba(141,198,63,0.08),transparent_30%),radial-gradient(circle_at_80%_68%,rgba(191,140,255,0.06),transparent_24%)]"
                />
                <div className="relative z-10">
                  <div className="flex items-center gap-8 mb-4">
                    <div className={metaLabelClass}>Неделя {track.id}</div>
                    <div className={metaLabelClass}>{weekCopy.dateRange}</div>
                  </div>

                  <div className="lg:pr-[29rem]">
                    <h2 className="text-[40px] md:text-[48px] font-black uppercase tracking-tighter leading-[0.85] text-black mb-3 max-w-[520px]">
                      {track.title}
                    </h2>
                    <div className={cn(accentLabelClass, 'mb-5')}>{track.shortDescription}</div>
                  </div>

                  <div className="mt-5 max-w-[560px]">
                    <div className="text-[16px] leading-[1.2] text-black/54 max-w-[520px] mb-4">{weekCopy.framedDescription}</div>
                    <div className="text-[15px] leading-[1.56] text-black/72 max-w-[560px]">{weekCopy.bodyDescription}</div>
                  </div>

                  <div className="mt-6 w-full lg:absolute lg:right-0 lg:top-0 lg:mt-0 lg:w-[470px]">
                    <div className={cn(metaLabelClass, 'mb-3')}>Недельный ритм</div>
                    <RhythmGrid compact widthClass="w-full" cellHeightClass="h-[46px]" />
                  </div>
                </div>
              </div>

              <div className="relative flex-1 overflow-hidden bg-[linear-gradient(180deg,#090909,#0f0f0f)] px-8 py-4 md:px-9 md:py-4.5">
                <SharedLectureBackdrop activeWeek={activeWeek} />
                <div className="relative z-10">
                  <div className="mb-3 text-[10px] font-mono font-semibold uppercase tracking-[0.28em] text-white/66">Основные занятия недели</div>
                  <OverlayLectureCards activeWeek={activeWeek} track={track} advanced={advanced} lecture={lecture} />
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export const DesktopTechUiV18 = () => {
  const { activeWeek, containerRef, handleWeekClick, track, weekCopy, advanced } = useStickyWeekState();

  return (
    <div ref={containerRef} className="w-full max-w-[1340px] mx-auto font-sans h-[230vh] relative">
      <div className="sticky top-[10vh] flex flex-col lg:flex-row gap-4 lg:gap-7 items-stretch justify-center h-[510px] pt-10">
        <WeekRail activeWeek={activeWeek} onWeekClick={handleWeekClick} />

        <div className="flex-1 border border-black/10 shadow-[0_12px_38px_rgba(0,0,0,0.04)] relative overflow-hidden flex flex-col max-w-[1040px] bg-white rounded-[8px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={`v18-card-${activeWeek}`}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-1 flex-col md:flex-row"
            >
              <div className="w-full md:w-[38%] h-[280px] md:h-auto relative shrink-0 bg-black">
                <FunctionalSplitHero activeWeek={activeWeek} track={track} weekCopy={weekCopy} />
              </div>

              <div className="flex-1 px-8 py-7 md:px-9 md:py-8 flex flex-col bg-white relative">
                <div
                  className="absolute inset-0 opacity-[0.03] pointer-events-none"
                  style={{
                    backgroundImage:
                      'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)',
                    backgroundSize: '32px 32px',
                  }}
                />
                <div className="relative z-10 flex h-full flex-col">
                  <div className="mt-1 flex flex-wrap gap-3">
                    {['Лекция', 'Воркшоп', 'Q&A', 'Коворкинг'].map((item) => (
                      <div
                        key={`${track.id}-${item}`}
                        className="rounded-[10px] bg-[#F3F8EA] px-4 py-2 text-[10px] font-mono font-bold uppercase tracking-[0.16em] text-[#8DC63F]"
                      >
                        {item}
                      </div>
                    ))}
                  </div>

                  <div className="mt-7 text-[10px] font-mono uppercase tracking-[0.28em] text-[#8DC63F]">
                    Основной воркшоп
                  </div>
                  <div className="mt-3 max-w-[620px] text-[15px] leading-[1.68] text-black/78">
                    {track.longDescription}
                  </div>

                  <div className="mt-7 border-t border-black/10 pt-5">
                    <div className="flex items-start justify-between gap-6">
                      <div>
                        <div className="text-[10px] font-mono uppercase tracking-[0.24em] text-black/34">advanced track</div>
                        <div className="mt-2 text-[32px] font-black tracking-[-0.06em] leading-[0.9] text-black">
                          {advanced.title}
                        </div>
                      </div>
                      <div className="max-w-[320px] text-right text-[14px] leading-[1.62] text-black/58">
                        {advanced.description}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};
