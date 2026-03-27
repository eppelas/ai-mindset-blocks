import { useState } from 'react';
import { ResearchCaseVisual } from './ResearchCaseVisual';
import { RESEARCH_CASES } from './labMirrorContent';

export const DesktopCasesV2 = () => {
  const [activeCaseId, setActiveCaseId] = useState(RESEARCH_CASES[0]?.id ?? '');
  const activeCase = RESEARCH_CASES.find((item) => item.id === activeCaseId) ?? RESEARCH_CASES[0];
  const darkButtonClass =
    'inline-flex items-center justify-center rounded-sm bg-black px-4 py-3 text-[11px] leading-none font-mono font-bold tracking-[0.12em] text-white normal-case transition-all duration-200 hover:bg-[#8DC63F] hover:text-black';

  return (
    <div className="w-full border-y border-black/5 bg-[#f6f6f3] px-6 py-20 font-sans flex justify-center">
      <div className="w-full max-w-[1180px] flex flex-col">
        <div className="mb-8 flex items-end gap-8">
          <div className="mb-1 shrink-0 text-[14px] font-bold uppercase tracking-[0.2em] text-black/40">
            LIVE SITE FEEL
          </div>
          <div className="mx-4 mb-2 h-px w-full flex-1 bg-black/10" />
          <h2 className="shrink-0 text-right text-5xl font-black uppercase tracking-tighter">
            КЕЙСЫ
          </h2>
        </div>

        <p className="mb-6 max-w-[52rem] text-[14px] leading-[1.6] text-black/68">
          Версия ближе к живому сайту: слева компактный список кейсов, справа большой detail-view с более читаемой иерархией, понятной задачей, решением и артефактом.
        </p>

        <div className="grid grid-cols-1 gap-4 xl:grid-cols-[18rem_minmax(0,1fr)]">
          <div className="rounded-[6px] border border-black/10 bg-white/84 p-3 shadow-[0_16px_36px_rgba(0,0,0,0.05)]">
            <div className="mb-4 text-[10px] font-bold uppercase tracking-[0.18em] text-black/36">
              выберите кейс
            </div>
            <div className="flex flex-col gap-2">
              {RESEARCH_CASES.map((item) => {
                const isActive = item.id === activeCase.id;
                return (
                  <button
                    key={item.id}
                    type="button"
                    onMouseEnter={() => setActiveCaseId(item.id)}
                    onFocus={() => setActiveCaseId(item.id)}
                    onClick={() => setActiveCaseId(item.id)}
                    className={`rounded-[6px] border px-3 py-3 text-left transition-all ${
                      isActive
                        ? 'border-[#8DC63F] bg-[#8DC63F] text-black shadow-[0_10px_24px_rgba(141,198,63,0.22)]'
                        : 'border-black/8 bg-white text-black/84 hover:border-[#8DC63F]/40 hover:bg-[#fbfdf6]'
                    }`}
                  >
                    <div className={`mb-1 text-[10px] font-bold uppercase tracking-[0.16em] ${isActive ? 'text-black/52' : 'text-black/34'}`}>
                      {item.role}
                    </div>
                    <div className="mb-1 text-[15px] font-black uppercase tracking-tight leading-[1.0]">
                      {item.title}
                    </div>
                    <div className={`text-[11px] leading-[1.45] ${isActive ? 'text-black/74' : 'text-black/60'}`}>
                      {item.summary}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          <article className="overflow-hidden rounded-[6px] border border-black/10 bg-white shadow-[0_22px_48px_rgba(0,0,0,0.07)]">
            <div className="grid grid-cols-1 xl:grid-cols-[1.1fr_0.9fr]">
              <div className="border-b border-black/8 p-5 xl:border-b-0 xl:border-r">
                <div className="mb-4 flex flex-wrap items-center gap-3 text-[10px] font-bold uppercase tracking-[0.16em] text-black/38">
                  <span>кейс</span>
                  <span className="h-1.5 w-1.5 rounded-full bg-[#8DC63F]" />
                  <span>{activeCase.author}</span>
                  <span>{activeCase.role}</span>
                </div>

                <h3 className="max-w-[24rem] text-[26px] md:text-[32px] font-black uppercase tracking-[-0.05em] leading-[0.92] text-black">
                  {activeCase.title}
                </h3>

                <p className="mt-3 max-w-[34rem] text-[15px] font-semibold leading-[1.4] text-black/84">
                  {activeCase.summary}
                </p>

                <p className="mt-3 max-w-[36rem] text-[13px] leading-[1.65] text-black/64">
                  {activeCase.description}
                </p>

                <div className="mt-5">
                  <ResearchCaseVisual item={activeCase} active={true} compact />
                </div>

                <div className="mt-4">
                  <button type="button" className={darkButtonClass}>
                    открыть кейс
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-px bg-black/8">
                {[
                  ['задача', activeCase.task],
                  ['решение', activeCase.solution],
                  ['инструменты', activeCase.tools.join(' · ')],
                  ['результат', activeCase.result],
                ].map(([label, value]) => (
                  <div key={label} className="bg-[#f8f8f5] p-5">
                    <div className="mb-2 text-[10px] font-bold uppercase tracking-[0.18em] text-black/36">
                      {label}
                    </div>
                    <div className={`leading-[1.6] ${label === 'результат' ? 'text-[14px] font-semibold text-[#56771f]' : 'text-[13px] text-black/74'}`}>
                      {value}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </article>
        </div>
      </div>
    </div>
  );
};
