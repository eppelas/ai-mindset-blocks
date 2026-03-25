import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

const PROGRAM_TRACKS = [
  {
    id: '01',
    week: 'НЕДЕЛЯ 1',
    title: 'Prompt Engineering',
    shortDescription: 'ИИ как интерфейс мышления',
    longDescription:
      'Освоение техник промптов: Chain-of-Thought, Few-Shot Learning, Custom GPTs. Создание первых персональных ассистентов.',
    events: ['Лекция', 'Воркшоп', 'Q&A', 'Коворкинг'],
  },
  {
    id: '02',
    week: 'НЕДЕЛЯ 2',
    title: 'Context Engineering',
    shortDescription: 'Автоматизация и агенты',
    longDescription:
      'Управление контекстом: Obsidian + MCP + Claude. Автоматизация через n8n, Make. AI-агенты и workflows.',
    events: ['Лекция', 'Воркшоп', 'Q&A'],
  },
  {
    id: '03',
    week: 'НЕДЕЛЯ 3',
    title: 'Mind Engineering',
    shortDescription: 'Продуктивность и ритуалы',
    longDescription:
      'AI для коучинга, рефлексии, персональных ритуалов. Трекинг привычек и целей с поддержкой AI.',
    events: ['Лекция', 'Разбор кейсов', 'Q&A'],
  },
  {
    id: '04',
    week: 'НЕДЕЛЯ 4',
    title: 'Life Engineering',
    shortDescription: 'Творчество и реализация',
    longDescription:
      'От идеи до прототипа. Vibe-coding с Cursor, Windsurf, Claude Projects. Создание без технического бэкграунда.',
    events: ['Лекция', 'Воркшоп', 'Демо-день'],
  },
];

const ADVANCED_TRACKS = [
  {
    id: 'T1',
    week: 'НЕДЕЛЯ 1',
    title: 'AI Coaching',
    description: 'Для тех, кто выгорел и ищет баланс. AI для коучинга, рефлексии.',
    speaker: 'Александр Поваляев',
  },
  {
    id: 'T2',
    week: 'НЕДЕЛЯ 2',
    title: 'AI Agents',
    description: 'Автономные AI-системы. Проектирование и запуск AI-агентов.',
    speaker: 'Сергей Хабаров',
  },
  {
    id: 'T3',
    week: 'НЕДЕЛЯ 3',
    title: 'Vibe-Coding',
    description: 'Творческое программирование. От идеи до прототипа за часы.',
    speaker: 'Анна Лозицкая',
  },
  {
    id: 'T4',
    week: 'НЕДЕЛЯ 4',
    title: 'AI Creative',
    description: 'Для музыкантов, художников и креативщиков. Генерация визуального контента.',
    speaker: 'Анка Ставенски',
  },
];

const GRAPHIC_SPLIT_VISUALS = [
  {
    accent: '#D8F6A8',
    glow: 'rgba(184, 236, 111, 0.55)',
    code: '[ SHIFT ]',
    metric: 'NODE 01',
    topPath: 'M 24 32 H 168 L 192 54 H 216',
    middlePath: 'M 38 76 H 112 M 62 58 V 132 M 84 58 V 132 M 118 76 H 146',
    bottomPath: 'M 28 142 H 210',
  },
  {
    accent: '#C894FF',
    glow: 'rgba(191, 140, 255, 0.58)',
    code: '[ BASE ]',
    metric: 'NODE 02',
    topPath: 'M 30 38 H 210',
    middlePath: 'M 78 62 V 110 M 108 62 V 110 M 138 62 V 110 M 68 86 H 148',
    bottomPath: 'M 60 132 H 178',
  },
  {
    accent: '#8CE7FF',
    glow: 'rgba(116, 222, 255, 0.52)',
    code: '[ FLOW ]',
    metric: 'NODE 03',
    topPath: 'M 28 42 H 118 L 136 62 H 212',
    middlePath: 'M 44 84 C 78 58, 112 58, 146 84 S 190 110, 214 88',
    bottomPath: 'M 34 130 H 122 L 150 106 H 212',
  },
  {
    accent: '#F0D98B',
    glow: 'rgba(243, 215, 118, 0.46)',
    code: '[ LOOP ]',
    metric: 'NODE 04',
    topPath: 'M 32 34 H 208 V 60',
    middlePath: 'M 52 70 H 170 M 52 92 H 150 M 52 114 H 182',
    bottomPath: 'M 40 138 H 198',
  },
] as const;

const GraphicSplitCardVisual = ({
  idx,
  week,
  title,
  shortDescription,
}: {
  idx: number;
  week: string;
  title: string;
  shortDescription: string;
}) => {
  const visual = GRAPHIC_SPLIT_VISUALS[idx % GRAPHIC_SPLIT_VISUALS.length];
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
        className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/35 to-transparent"
        initial={{ y: 22, opacity: 0.15 }}
        animate={{ y: [22, 138, 22], opacity: [0.12, 0.35, 0.12] }}
        transition={{ duration: 4.6, repeat: Infinity, ease: 'linear' }}
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

      <div className="absolute left-6 top-6 rounded-full border border-white/10 bg-white/6 px-3 py-1 text-[9px] font-mono font-bold uppercase tracking-[0.32em] text-white/72 backdrop-blur-sm">
        {week}
      </div>

      <div
        className="absolute right-6 top-7 font-mono text-[10px] uppercase tracking-[0.28em]"
        style={{ color: visual.accent, textShadow: `0 0 16px ${visual.glow}` }}
      >
        {visual.code}
      </div>

      <div className="absolute right-6 top-12 text-[9px] font-mono uppercase tracking-[0.26em] text-white/38">
        {visual.metric}
      </div>
      <div className="absolute right-6 top-[4.7rem] rounded-2xl border border-white/10 bg-black/20 px-3 py-2 text-right backdrop-blur-sm">
        <div className="font-mono text-[8px] uppercase tracking-[0.3em] text-white/42">Signal</div>
        <div className="mt-1 font-mono text-[10px] uppercase tracking-[0.22em]" style={{ color: visual.accent }}>
          {shortDescription}
        </div>
      </div>

      <div className="absolute bottom-6 left-5 right-5 rounded-[1.35rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.09),rgba(255,255,255,0.02))] px-5 py-4 shadow-[0_18px_40px_rgba(0,0,0,0.3)] backdrop-blur-md">
        <div className="mb-2 text-[10px] font-mono uppercase tracking-[0.3em] text-white/72">{week}</div>
        <h3
          className="max-w-[220px] text-[2.05rem] font-black uppercase leading-[0.88] tracking-[-0.06em]"
          style={{
            color: '#F7F7F3',
            textShadow: `0 4px 28px rgba(0,0,0,0.8), 0 0 22px ${visual.glow}`,
          }}
        >
          {title}
        </h3>
        <div className="mt-3 flex items-center justify-between gap-4">
          <div className="h-px flex-1 bg-gradient-to-r from-white/45 to-transparent" />
          <div className="font-mono text-[8px] uppercase tracking-[0.34em] text-white/48">live field</div>
        </div>
      </div>
    </div>
  );
};

export const DesktopTechUiV10 = () => {
  const [activeWeek, setActiveWeek] = useState(0);
  const track = PROGRAM_TRACKS[activeWeek];
  const advanced = ADVANCED_TRACKS[activeWeek];

  return (
    <div className="mb-32 text-black">
      <div className="w-full max-w-sm mx-auto md:max-w-4xl">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeWeek}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-[2rem] overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-black/5 flex flex-col md:flex-row"
          >
            <div className="w-full md:w-2/5 h-64 md:h-auto relative bg-black shrink-0">
              <GraphicSplitCardVisual
                idx={activeWeek}
                week={track.week}
                title={track.title}
                shortDescription={track.shortDescription}
              />
            </div>

            <div className="flex-1 p-8 md:p-10 flex flex-col">
              <div className="flex flex-wrap gap-2 mb-6">
                {track.events.map((evt, eIdx) => (
                  <span key={eIdx} className="text-[9px] font-bold uppercase tracking-widest text-[#8DC63F] bg-[#8DC63F]/10 px-2 py-1 rounded">
                    {evt}
                  </span>
                ))}
              </div>

              <p className="opacity-80 text-sm md:text-base leading-relaxed mb-10 max-w-md">
                {track.longDescription}
              </p>

              <div className="mt-auto border-t border-black/10 pt-6">
                <div className="flex flex-col items-end text-right">
                  <div className="flex items-center gap-2 mb-1 justify-end">
                    <span className="text-[10px] uppercase font-bold tracking-widest opacity-50">Advanced Track</span>
                    <span className="bg-[#8DC63F] text-black px-2 py-0.5 rounded text-[10px] font-black uppercase shadow-md">PRO</span>
                  </div>
                  <h4 className="font-bold text-xl mb-2">{advanced.title}</h4>
                  <p className="text-xs opacity-60 max-w-[280px] leading-relaxed mb-4">{advanced.description}</p>
                  <div className="flex flex-col border-t border-black/5 pt-2 w-full items-end mt-2">
                    <div className="text-[9px] font-mono tracking-widest uppercase opacity-40 mb-1">Куратор PRO-трека</div>
                    <div className="text-black font-bold text-xs">{advanced.speaker}</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        <div className="flex justify-center mt-6 gap-2 md:gap-4 flex-wrap">
          {PROGRAM_TRACKS.map((item, idx) => {
            const isActive = activeWeek === idx;
            return (
              <button
                key={item.id}
                onClick={() => setActiveWeek(idx)}
                className={`px-4 md:px-6 py-2 md:py-3 rounded-full text-xs font-bold uppercase tracking-widest transition-all ${isActive ? 'bg-black text-white shadow-lg' : 'bg-white text-black/50 border border-black/10 hover:bg-black/5'}`}
              >
                {item.week}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};
