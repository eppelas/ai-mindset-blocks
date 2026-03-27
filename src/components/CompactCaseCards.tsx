import type { ResearchCase } from './labMirrorContent';

const cn = (...classes: Array<string | false | null | undefined>) => classes.filter(Boolean).join(' ');
const SIGNAL_SURFACE = '#EEF5D7';

const CASE_TITLE_RU: Record<ResearchCase['id'], string> = {
  'ai-coaching': 'AI-коучинг',
  'ai-vision': 'AI-видение',
  'ai-learning': 'Голосовой тьютор',
  'ai-summary': 'Сводка встреч',
  'ai-knowledge': 'Слой знаний',
  'ai-project': 'PM-ассистент',
  'ai-automation': 'Автоматизация',
  'ai-content': 'Контент-система',
};

const CASE_ROLE_RU: Record<string, string> = {
  'Executive-коуч': 'коуч',
  'Арт-директор': 'арт-директор',
  'Преподаватель': 'преподаватель',
  'Product Manager': 'продакт-менеджер',
  'Аналитик': 'аналитик',
  'Project Manager': 'проектный менеджер',
  'Operations Lead': 'операционный лид',
  'Копирайтер': 'копирайтер',
};

const PREVIEW_META: Record<
  ResearchCase['preview'],
  { accent: string; secondary: string; glyph: string; detail: string; label: string; nodes: string[] }
> = {
  agent: { accent: '#8DC63F', secondary: '#8DC63F', glyph: '[ mesh ]', detail: 'agent field', label: 'agent graph', nodes: ['12%', '33%', '57%', '76%'] },
  coach: { accent: '#8DC63F', secondary: '#8DC63F', glyph: '[ exe ]', detail: 'prompt rail', label: 'prompt rail', nodes: ['15%', '38%', '62%', '84%'] },
  content: { accent: '#C084FC', secondary: '#C084FC', glyph: '[ base ]', detail: 'content board', label: 'content board', nodes: ['18%', '41%', '67%', '87%'] },
  dashboard: { accent: '#8f8f8f', secondary: '#8f8f8f', glyph: '[ data ]', detail: 'metric field', label: 'metric field', nodes: ['14%', '28%', '51%', '72%', '88%'] },
  research: { accent: '#8f8f8f', secondary: '#8f8f8f', glyph: '[ target ]', detail: 'scan trace', label: 'target map', nodes: ['20%', '45%', '69%', '88%'] },
  vision: { accent: '#C084FC', secondary: '#C084FC', glyph: '[ base ]', detail: 'visual field', label: 'visual field', nodes: ['16%', '35%', '60%', '81%'] },
  voice: { accent: '#C084FC', secondary: '#C084FC', glyph: '[ wave ]', detail: 'voice signal', label: 'voice signal', nodes: ['11%', '30%', '50%', '70%', '89%'] },
  workflow: { accent: '#8DC63F', secondary: '#8DC63F', glyph: '[ route ]', detail: 'flow map', label: 'flow map', nodes: ['17%', '40%', '63%', '86%'] },
};

export function CompactCasePreview({
  item,
  variant = 'default',
}: {
  item: ResearchCase;
  variant?: 'default' | 'signal';
}) {
  const meta = PREVIEW_META[item.preview];
  const isSignal = variant === 'signal';

  return (
    <div
      className={cn(
        'relative overflow-hidden border border-black/8 transition-colors duration-200',
        isSignal ? 'h-[88px] bg-[#f4f4ef] group-hover:bg-[#EEF5D7] group-hover:border-[#8DC63F]' : 'h-[76px] bg-[#f7f6f2]',
      )}
    >
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.035)_1px,transparent_1px),linear-gradient(rgba(0,0,0,0.035)_1px,transparent_1px)] bg-[size:18px_18px] opacity-70" />
      <div
        className={cn('absolute left-3 right-3 top-4 h-px opacity-60', isSignal && 'group-hover:opacity-100')}
        style={{ backgroundColor: meta.accent }}
      />
      {isSignal
        ? meta.nodes.map((left) => (
            <span
              key={`${item.id}-${left}`}
              className="absolute top-[13px] h-[9px] w-[9px] rounded-full border border-current bg-[#f4f4ef] transition-colors duration-200 group-hover:bg-[rgba(141,198,63,0.12)]"
              style={{ left, color: meta.accent, backgroundColor: isSignal ? SIGNAL_SURFACE : undefined }}
            />
          ))
        : null}
      <div
        className="absolute left-3 top-2 font-mono text-[8px] uppercase tracking-[0.2em]"
        style={{ color: `${meta.accent}` }}
      >
        {item.id.slice(-2)}
      </div>
      <div className="absolute right-3 top-2 font-mono text-[8px] uppercase tracking-[0.18em] text-black/28">
        {meta.label}
      </div>
      <div
        className={cn(
          'absolute left-3 font-mono uppercase tracking-[0.22em]',
          isSignal ? 'top-[28px] text-[15px] group-hover:tracking-[0.24em]' : 'top-[30px] text-[13px]',
        )}
        style={{ color: meta.accent }}
      >
        {meta.glyph}
      </div>
      {isSignal ? (
        <>
          {item.preview === 'workflow' ? (
            <>
              <div className="absolute inset-x-3 top-[14px] h-px opacity-85" style={{ backgroundColor: meta.accent }} />
              <div className="absolute left-[58px] top-[52px] h-[4px] w-[92px]" style={{ backgroundColor: meta.accent }} />
              <div className="absolute left-[142px] top-[46px] h-[22px] w-[4px] rotate-[58deg]" style={{ backgroundColor: meta.accent }} />
              <div className="absolute left-[160px] top-[66px] h-[4px] w-[86px]" style={{ backgroundColor: meta.accent }} />
              <span className="absolute left-[32px] top-[43px] font-mono text-[20px] font-bold leading-none" style={{ color: meta.accent }}>
                R
              </span>
            </>
          ) : null}
          {item.preview === 'vision' || item.preview === 'content' || item.preview === 'voice' ? (
            <>
              <div className="absolute left-[46px] top-[38px] h-[4px] w-[128px] rounded-full opacity-90" style={{ backgroundColor: meta.accent, boxShadow: `0 0 12px ${meta.accent}` }} />
              <div className="absolute left-[46px] top-[52px] h-[4px] w-[116px] rounded-full opacity-78" style={{ backgroundColor: meta.accent, boxShadow: `0 0 9px ${meta.accent}` }} />
              <div className="absolute left-[24px] top-[30px] font-mono text-[22px] uppercase tracking-[0.16em]" style={{ color: meta.accent }}>
                {meta.glyph}
              </div>
            </>
          ) : null}
          {item.preview === 'research' || item.preview === 'dashboard' || item.preview === 'agent' || item.preview === 'coach' ? (
            <>
              <div className="absolute left-[32px] top-[34px] h-[28px] w-[86px] border-l-2 border-b-2 opacity-82" style={{ borderColor: meta.accent }} />
              <div className="absolute left-[118px] top-[58px] h-[4px] w-[72px] opacity-82" style={{ backgroundColor: meta.accent }} />
              <div className="absolute left-[198px] top-[50px] h-[4px] w-[40px] opacity-68" style={{ backgroundColor: meta.accent }} />
            </>
          ) : null}
          <div
            className="absolute bottom-3 left-3 font-mono text-[8px] uppercase tracking-[0.18em] transition-colors duration-200"
            style={{ color: meta.secondary }}
          >
            {meta.detail}
          </div>
          <div className="absolute bottom-3 right-3 font-mono text-[8px] uppercase tracking-[0.18em] text-black/28">
            live signal
          </div>
        </>
      ) : (
        <div className="absolute bottom-2 left-3 font-mono text-[8px] uppercase tracking-[0.18em] text-black/26">
          AI MINDSET SIGNAL
        </div>
      )}
    </div>
  );
}

export function CompactCaseCard({
  item,
  showTools = false,
  variant = 'default',
}: {
  item: ResearchCase;
  showTools?: boolean;
  variant?: 'default' | 'signal';
}) {
  const isSignal = variant === 'signal';
  const displayTitle = CASE_TITLE_RU[item.id] ?? item.title;
  const displayRole = CASE_ROLE_RU[item.role] ?? item.role.toLowerCase();

  return (
    <article
      className={cn(
        'group flex h-full flex-col border border-black/10 bg-white transition-colors duration-200',
        isSignal ? 'hover:border-[#8DC63F] hover:bg-[#EEF5D7]' : 'hover:border-black/20 hover:bg-[#fbfbf9]',
      )}
    >
      <CompactCasePreview item={item} variant={variant} />

      <div className="flex flex-1 flex-col gap-3 p-4">
        <div className="flex items-start justify-between gap-3">
          <h3 className="max-w-[13rem] text-[16px] font-black uppercase leading-[0.95] tracking-[-0.04em] text-black transition-colors duration-200 group-hover:text-black">
            {displayTitle}
          </h3>
          <div className="shrink-0 font-mono text-[8px] uppercase tracking-[0.16em] text-black/34">
            case
          </div>
        </div>

        <p className="text-[12px] font-semibold leading-[1.45] text-black/78 transition-colors duration-200 group-hover:text-black/88">
          {item.summary}
        </p>

        <div className="mt-auto flex flex-col gap-3 pt-1">
          <div className="font-mono text-[9px] tracking-[0.08em] text-black/42">
            {item.author}, {displayRole}
          </div>

          {showTools ? (
            <div className="flex flex-wrap items-center gap-x-2 gap-y-1.5">
              {item.tools.map((tool, index) => (
                <span
                  key={tool}
                  className="font-mono text-[8px] uppercase tracking-[0.16em] text-black/52 transition-colors duration-200 group-hover:text-black/68"
                >
                  {index > 0 ? '· ' : ''}
                  {tool}
                </span>
              ))}
            </div>
          ) : null}
        </div>
      </div>
    </article>
  );
}
