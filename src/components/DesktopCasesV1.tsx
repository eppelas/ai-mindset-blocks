import { useMemo, useState } from 'react';
import { ResearchCaseVisual } from './ResearchCaseVisual';
import { RESEARCH_CASE_FILTERS, RESEARCH_CASES } from './labMirrorContent';

export const DesktopCasesV1 = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [hoveredId, setHoveredId] = useState<string | null>(RESEARCH_CASES[0]?.id ?? null);
  const darkButtonClass =
    'inline-flex items-center justify-center rounded-sm bg-black px-4 py-3 text-[11px] leading-none font-mono font-bold tracking-[0.12em] text-white normal-case transition-all duration-200 hover:bg-[#8DC63F] hover:text-black';

  const visibleCases = useMemo(() => {
    if (activeFilter === 'all') return RESEARCH_CASES;
    return RESEARCH_CASES.filter((item) => item.filters.includes(activeFilter));
  }, [activeFilter]);

  return (
    <div className="w-full border-y border-black/5 bg-[#f8f8f8] px-6 py-20 font-sans flex justify-center">
      <div className="w-full max-w-[1180px] flex flex-col">
        <div className="mb-8 flex items-end gap-8">
          <div className="mb-1 shrink-0 text-[14px] font-bold uppercase tracking-[0.2em] text-black/40">
            CASE SYSTEM
          </div>
          <div className="mx-4 mb-2 h-px w-full flex-1 bg-black/10" />
          <h2 className="shrink-0 text-right text-5xl font-black uppercase tracking-tighter">
            КЕЙСЫ
          </h2>
        </div>

        <div className="mb-6 max-w-[48rem]">
          <p className="mb-5 text-[14px] leading-[1.6] text-black/68">
            Версия с более вертикальными карточками: заголовок кейса читается первым, текста больше, а верхняя картинка ведёт себя как тихий интерфейсный preview, который становится содержательнее и ярче на hover.
          </p>

          <div className="flex flex-wrap gap-2">
            {RESEARCH_CASE_FILTERS.map((filter) => {
              const isActive = activeFilter === filter.id;
              return (
                <button
                  key={filter.id}
                  type="button"
                  onClick={() => setActiveFilter(filter.id)}
                  className={`rounded-sm border px-3 py-2 text-[10px] font-black uppercase tracking-[0.16em] transition-colors ${
                    isActive
                      ? 'border-black bg-black text-white'
                      : 'border-black/10 bg-white/70 text-black/52 hover:border-[#8DC63F] hover:bg-[#eff7df] hover:text-black'
                  }`}
                >
                  {filter.label}
                </button>
              );
            })}
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
          {visibleCases.map((item) => {
            const isActive = hoveredId === item.id;

            return (
              <article
                key={item.id}
                className={`group flex h-full flex-col overflow-hidden rounded-[6px] border transition-all duration-300 ${
                  isActive
                    ? 'border-[#8DC63F] bg-[#8DC63F] text-black shadow-[0_22px_55px_rgba(141,198,63,0.26)]'
                    : 'border-black/10 bg-white/88 text-black shadow-[0_18px_40px_rgba(0,0,0,0.06)] hover:border-[#8DC63F]/40'
                }`}
                onMouseEnter={() => setHoveredId(item.id)}
                onFocus={() => setHoveredId(item.id)}
              >
                <div className="p-4 pb-0">
                  <ResearchCaseVisual item={item} active={isActive} />
                </div>

                <div className="flex flex-1 flex-col gap-3 p-4">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <div className={`mb-1 text-[10px] font-bold uppercase tracking-[0.16em] ${isActive ? 'text-black/52' : 'text-black/36'}`}>
                        case
                      </div>
                      <h3 className="max-w-[13rem] text-[20px] font-black uppercase tracking-[-0.04em] leading-[0.94]">
                        {item.title}
                      </h3>
                    </div>
                    <div className={`max-w-[6rem] shrink-0 text-right text-[9px] font-bold uppercase tracking-[0.16em] ${isActive ? 'text-black/52' : 'text-black/40'}`}>
                      {item.role}
                    </div>
                  </div>

                  <p className={`text-[14px] font-semibold leading-[1.35] ${isActive ? 'text-black/92' : 'text-black/80'}`}>
                    {item.summary}
                  </p>

                  <p className={`text-[12px] leading-[1.55] ${isActive ? 'text-black/72' : 'text-black/64'}`}>
                    {item.description}
                  </p>

                  <div className="mt-auto flex flex-col gap-3 pt-1">
                    <div className={`text-[9px] font-bold uppercase tracking-[0.16em] ${isActive ? 'text-black/52' : 'text-black/36'}`}>
                      {item.result}
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {item.tools.map((tool) => (
                        <span
                          key={tool}
                          className={`rounded-sm border px-2.5 py-1.5 text-[9px] font-bold uppercase tracking-[0.12em] ${
                            isActive
                              ? 'border-black/12 bg-white/30 text-black/78'
                              : 'border-black/10 bg-black/[0.03] text-black/54'
                          }`}
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                    <button type="button" className={darkButtonClass}>
                      открыть кейс
                    </button>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </div>
  );
};
