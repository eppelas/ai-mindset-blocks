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
  { id: 'T1', week: 'НЕДЕЛЯ 1', title: 'AI Coaching', description: 'Для тех, кто выгорел и ищет баланс. AI для коучинга, рефлексии.', speaker: 'Александр Поваляев' },
  { id: 'T2', week: 'НЕДЕЛЯ 2', title: 'AI Agents', description: 'Автономные AI-системы. Проектирование и запуск AI-агентов.', speaker: 'Сергей Хабаров' },
  { id: 'T3', week: 'НЕДЕЛЯ 3', title: 'Vibe-Coding', description: 'Творческое программирование. От идеи до прототипа за часы.', speaker: 'Анна Лозицкая' },
  { id: 'T4', week: 'НЕДЕЛЯ 4', title: 'AI Creative', description: 'Для музыкантов, художников и креативщиков. Генерация визуального контента.', speaker: 'Анка Ставенски' },
];

const SPLIT_CONTEXT_VISUALS = [
  {
    accent: '#D8F6A8',
    glow: 'rgba(190, 241, 128, 0.55)',
    label: '[ EXE ]',
    metric: '10%',
    sideNote: '1#',
    footer: 'PROMPT RAIL',
    topPath: 'M 28 34 H 190 V 52 H 214',
    middlePath: 'M 46 82 H 104 M 58 64 V 136 M 80 62 V 134 M 113 82 H 144',
    bottomPath: 'M 44 138 H 212',
  },
  {
    accent: '#C993FF',
    glow: 'rgba(198, 140, 255, 0.5)',
    label: '[ BASE ]',
    metric: 'STACK',
    sideNote: '02',
    footer: 'CONTEXT FIELD',
    topPath: 'M 34 42 H 208',
    middlePath: 'M 86 70 V 108 M 114 70 V 108 M 140 70 V 108 M 74 88 H 154',
    bottomPath: 'M 68 126 H 176',
  },
  {
    accent: '#8B8B8B',
    glow: 'rgba(120, 120, 120, 0.2)',
    label: '[ TARGET ]',
    metric: '99%',
    sideNote: 'XY',
    footer: 'EXECUTION MAP',
    topPath: 'M 48 40 L 68 62 L 96 40 L 124 62',
    middlePath: 'M 136 56 H 212 M 136 74 H 212 M 136 92 H 196',
    bottomPath: 'M 192 46 V 126 M 178 112 L 192 126 L 206 112',
  },
  {
    accent: '#D7F48D',
    glow: 'rgba(194, 232, 112, 0.5)',
    label: '[ FLOW ]',
    metric: 'LIVE',
    sideNote: '04',
    footer: 'BUILD LOOP',
    topPath: 'M 26 40 H 152 L 176 64 H 214',
    middlePath: 'M 60 74 H 136 M 60 92 H 146 M 60 110 H 128',
    bottomPath: 'M 34 136 H 208 V 116',
  },
] as const;

const SplitContextCardVisual = ({ idx, week }: { idx: number; week: string }) => {
  const visual = SPLIT_CONTEXT_VISUALS[idx % SPLIT_CONTEXT_VISUALS.length];

  return (
    <div
      className="absolute inset-0 overflow-hidden"
      style={{
        backgroundColor: '#fbfbf8',
        backgroundImage:
          'linear-gradient(rgba(0,0,0,0.045) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.045) 1px, transparent 1px)',
        backgroundSize: '36px 36px',
      }}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.95),transparent_35%),radial-gradient(circle_at_80%_35%,rgba(255,255,255,0.78),transparent_30%),linear-gradient(135deg,rgba(141,198,63,0.06),transparent_55%)]" />
      <svg viewBox="0 0 240 160" className="absolute inset-0 h-full w-full">
        <path d={visual.topPath} fill="none" stroke={visual.glow} strokeWidth="10" strokeLinecap="round" strokeLinejoin="round" style={{ filter: 'blur(8px)' }} />
        <path d={visual.middlePath} fill="none" stroke={visual.glow} strokeWidth="10" strokeLinecap="round" strokeLinejoin="round" style={{ filter: 'blur(8px)' }} />
        <path d={visual.bottomPath} fill="none" stroke={visual.glow} strokeWidth="10" strokeLinecap="round" strokeLinejoin="round" style={{ filter: 'blur(8px)' }} />
        <path d={visual.topPath} fill="none" stroke={visual.accent} strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
        <path d={visual.middlePath} fill="none" stroke={visual.accent} strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
        <path d={visual.bottomPath} fill="none" stroke={visual.accent} strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
        {[24, 56, 88, 120, 152, 184, 216].map((cx) => (
          <circle key={`top-${cx}`} cx={cx} cy="40" r="2.8" fill={visual.accent} opacity="0.9" />
        ))}
        {[44, 76, 108, 140, 172, 204].map((cx) => (
          <circle key={`bottom-${cx}`} cx={cx} cy="136" r="2.6" fill={visual.accent} opacity="0.78" />
        ))}
      </svg>

      <div className="absolute left-5 top-4">
        <div className="rounded-full border border-black/10 bg-white/80 px-3 py-1 text-[9px] font-mono font-bold uppercase tracking-[0.32em] text-black/55 shadow-sm backdrop-blur-sm">
          {week}
        </div>
      </div>

      <div
        className="absolute left-1/2 top-[52%] -translate-x-1/2 -translate-y-1/2 font-mono text-[22px] md:text-[26px] uppercase tracking-[0.22em]"
        style={{
          color: visual.accent,
          textShadow: `0 0 14px ${visual.glow}, 0 0 24px ${visual.glow}`,
        }}
      >
        {visual.label}
      </div>

      <div className="absolute left-5 top-[4.8rem] font-mono text-[22px] font-bold uppercase tracking-[0.28em]" style={{ color: visual.accent, textShadow: `0 0 14px ${visual.glow}` }}>
        {visual.sideNote}
      </div>
      <div className="absolute right-5 top-5 text-right font-mono text-[11px] uppercase tracking-[0.24em] text-black/35">
        <div>{visual.metric}</div>
        <div className="mt-1 opacity-70">{visual.footer}</div>
      </div>
      <div className="absolute bottom-4 left-5 font-mono text-[9px] uppercase tracking-[0.32em] text-black/28">
        AI MINDSET SIGNAL
      </div>
    </div>
  );
};

export const DesktopTechUiV8 = () => {
  return (
    <div className="mb-32 text-black">
      <div className="flex gap-6 overflow-x-auto pb-12 snap-x snap-mandatory mx-[-1rem] md:mx-[-3rem] px-[1rem] md:px-[3rem] hide-scrollbar" style={{ scrollbarWidth: 'none' }}>
        {PROGRAM_TRACKS.map((track, idx) => {
          const advanced = ADVANCED_TRACKS[idx];

          return (
            <div key={track.id} className="shrink-0 w-[85vw] md:w-[450px] snap-center flex flex-col border border-black/10 shadow-sm rounded-[2rem] overflow-hidden bg-white relative">
              <div className="w-full h-48 relative overflow-hidden border-b border-black/6">
                <SplitContextCardVisual idx={idx} week={track.week} />
              </div>

              <div className="p-8 flex flex-col flex-1">
                <h3 className="text-3xl font-black uppercase tracking-tighter leading-[0.9] mb-4">{track.title}</h3>
                <p className="opacity-80 leading-relaxed text-sm md:text-base font-light mb-6">
                  {track.longDescription}
                </p>

                <div className="flex flex-wrap gap-2 mb-8">
                  {track.events.map((evt, eIdx) => (
                    <span key={eIdx} className="text-[9px] font-mono uppercase tracking-widest px-2 py-1 bg-[#f4f4f4] text-black/60 rounded">
                      {evt}
                    </span>
                  ))}
                </div>

                <div className="mt-auto border-t border-black/10 pt-6 relative bg-gradient-to-b from-transparent to-[#fafafa] -mx-8 -mb-8 px-8 pb-8 flex flex-col items-end text-right">
                  <div className="flex items-center justify-end gap-2 mb-3">
                    <div className="font-mono text-[10px] uppercase font-bold tracking-widest opacity-40">Advanced Track</div>
                    <span className="bg-[#8DC63F] text-black text-[9px] px-2 py-0.5 rounded tracking-widest uppercase font-bold">PRO</span>
                  </div>
                  <h4 className="font-bold text-lg mb-1 leading-tight">{advanced.title}</h4>
                  <p className="text-xs opacity-60 leading-relaxed max-w-[90%] mb-4">{advanced.description}</p>

                  <div className="flex justify-between items-end w-full mt-2 pt-4 border-t border-black/5">
                    <div className="text-left w-1/2">
                      <div className="text-[9px] uppercase tracking-widest font-mono opacity-40 mb-1">Куратор основной программы</div>
                      <div className="text-xs font-bold">Команда AI Mindset</div>
                    </div>

                    <div className="text-right w-1/2">
                      <div className="text-[9px] uppercase tracking-widest font-mono opacity-40 mb-1">Куратор PRO-трека</div>
                      <div className="text-xs font-bold">{advanced.speaker}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
