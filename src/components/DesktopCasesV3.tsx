import { CompactCaseCard } from './CompactCaseCards';
import { RESEARCH_CASES } from './labMirrorContent';

export const DesktopCasesV3 = () => {
  return (
    <div className="flex w-full justify-center border-y border-black/5 bg-[#f7f7f4] px-6 py-16 font-sans">
      <div className="flex w-full max-w-[1180px] flex-col">
        <div className="mb-8 flex items-end gap-8">
          <div className="mb-1 shrink-0 text-[14px] font-bold uppercase tracking-[0.2em] text-black/40">
            COMPACT MODE
          </div>
          <div className="mx-4 mb-2 h-px w-full flex-1 bg-black/10" />
          <h2 className="shrink-0 text-right text-5xl font-black uppercase tracking-tighter">
            КЕЙСЫ
          </h2>
        </div>

        <p className="mb-6 max-w-[42rem] text-[13px] leading-[1.6] text-black/62">
          Маленькие карточки без раскрытия: только название, одна ключевая фраза и короткий контекст роли.
        </p>

        <div className="grid grid-cols-1 gap-3 md:grid-cols-2 xl:grid-cols-4">
          {RESEARCH_CASES.map((item) => (
            <CompactCaseCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};
