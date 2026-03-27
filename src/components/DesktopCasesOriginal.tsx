import { CompactCasePreview } from './CompactCaseCards';
import { RESEARCH_CASES } from './labMirrorContent';

const ROLE_RU: Record<string, string> = {
  'Executive-коуч': 'коуч',
  'Арт-директор': 'арт-директор',
  'Преподаватель': 'преподаватель',
  'Product Manager': 'продакт-менеджер',
  'Аналитик': 'аналитик',
  'Project Manager': 'проектный менеджер',
  'Operations Lead': 'операционный лид',
  'Копирайтер': 'копирайтер',
};

export const DesktopCasesOriginal = () => {
  return (
    <div className="flex w-full justify-center border-y border-black/5 bg-[#f6f6f2] px-6 py-16 font-sans">
      <div className="flex w-full max-w-[1180px] flex-col">
        <div className="mb-8 flex items-end gap-8">
          <div className="mb-1 shrink-0 text-[14px] font-bold uppercase tracking-[0.2em] text-black/40">
            CURRENT LIVE SITE
          </div>
          <div className="mx-4 mb-2 h-px w-full flex-1 bg-black/10" />
          <h2 className="shrink-0 text-right text-5xl font-black uppercase tracking-tighter">
            КЕЙСЫ
          </h2>
        </div>

        <p className="mb-6 max-w-[42rem] text-[13px] leading-[1.6] text-black/62">
          Перенесённый original-подход с более длинными карточками и двухрядной горизонтальной раскладкой.
        </p>

        <div className="-mx-4 overflow-x-auto px-4 pb-3 md:-mx-12 md:px-12">
          <div className="grid min-w-max grid-flow-col grid-rows-2 gap-4 md:gap-6 auto-cols-[14.5rem] md:auto-cols-[15rem]">
            {RESEARCH_CASES.map((item) => (
              <article
                key={item.id}
                className="group flex min-h-[230px] flex-col justify-between overflow-hidden rounded-[6px] border border-black/10 bg-white p-4 text-left transition-all duration-300 hover:border-[#8DC63F] hover:bg-[#eef5d7]"
              >
                <CompactCasePreview item={item} variant="default" />

                <div className="mt-4 flex flex-1 flex-col justify-between gap-4">
                  <div>
                    <div className="mb-2 flex items-start justify-between gap-3">
                      <h3 className="max-w-[10.5rem] text-[15px] font-black uppercase leading-[0.98] tracking-[-0.04em] text-black">
                        {item.title}
                      </h3>
                      <div className="shrink-0 font-mono text-[8px] uppercase tracking-[0.16em] text-black/34">
                        case
                      </div>
                    </div>
                    <p className="text-[11px] leading-[1.45] text-black/72">
                      {item.summary}
                    </p>
                  </div>

                  <div className="border-t border-black/8 pt-3">
                    <div className="text-[11px] font-bold uppercase tracking-tight text-black/92">
                      {item.author}
                    </div>
                    <div className="mt-1 text-[9px] font-mono tracking-[0.08em] text-black/42">
                      {ROLE_RU[item.role] ?? item.role.toLowerCase()}
                    </div>
                    <div className="mt-2 flex items-center justify-end font-mono text-[10px] font-bold uppercase tracking-[0.16em] text-[#8DC63F]">
                      TG -&gt;
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
