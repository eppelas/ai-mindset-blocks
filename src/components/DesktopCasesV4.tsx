import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { CompactCaseCard } from './CompactCaseCards';
import { RESEARCH_CASES } from './labMirrorContent';

export const DesktopCasesV4 = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const visibleCases = isExpanded ? RESEARCH_CASES : RESEARCH_CASES.slice(0, 4);

  return (
    <div className="flex w-full justify-center border-y border-black/5 bg-[#f6f6f2] px-6 py-16 font-sans">
      <div className="flex w-full max-w-[1180px] flex-col">
        <div className="mb-8 flex items-end gap-8">
          <div className="mb-1 shrink-0 text-[14px] font-bold uppercase tracking-[0.2em] text-black/40">
            COMPACT TAGS
          </div>
          <div className="mx-4 mb-2 h-px w-full flex-1 bg-black/10" />
          <h2 className="shrink-0 text-right text-5xl font-black uppercase tracking-tighter">
            КЕЙСЫ
          </h2>
        </div>

        <p className="mb-6 max-w-[42rem] text-[13px] leading-[1.6] text-black/62">
          Компактная сетка с более живыми превью и зелёным hover-состоянием. Теги стека оставлены, но читаются как metadata, а не как кнопки или CTA.
        </p>

        <div className="grid grid-cols-1 gap-3 md:grid-cols-2 xl:grid-cols-4">
          {visibleCases.map((item) => (
            <CompactCaseCard key={item.id} item={item} showTools variant="signal" />
          ))}
        </div>

        {RESEARCH_CASES.length > 4 ? (
          <div className="mt-8 flex justify-center">
            <button
              type="button"
              onClick={() => setIsExpanded((prev) => !prev)}
              className="flex items-center gap-2 font-mono text-[12px] uppercase tracking-[0.18em] text-black/48 transition-colors hover:text-black/76"
              aria-expanded={isExpanded}
            >
              <span>{isExpanded ? 'свернуть' : 'ещё'}</span>
              <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${isExpanded ? 'rotate-180' : ''}`} />
            </button>
          </div>
        ) : null}
      </div>
    </div>
  );
};
