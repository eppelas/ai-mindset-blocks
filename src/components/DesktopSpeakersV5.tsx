import { RESEARCH_SPEAKERS } from './labMirrorContent';

const CornerFrame = () => (
  <>
    <div className="pointer-events-none absolute left-0 top-0 h-4 w-4 border-l border-t border-black/40 transition-colors duration-500 group-hover:border-red-500" />
    <div className="pointer-events-none absolute right-0 top-0 h-4 w-4 border-r border-t border-black/40 transition-colors duration-500 group-hover:border-red-500" />
    <div className="pointer-events-none absolute left-0 bottom-0 h-4 w-4 border-b border-l border-black/40 transition-colors duration-500 group-hover:border-red-500" />
    <div className="pointer-events-none absolute bottom-0 right-0 h-4 w-4 border-b border-r border-black/40 transition-colors duration-500 group-hover:border-red-500" />
  </>
);

export const DesktopSpeakersV5 = () => {
  return (
    <div className="flex w-full justify-center border-y border-black/5 bg-[#f8f8f8] px-8 py-20 font-sans">
      <div className="flex w-full max-w-[1340px] flex-col">
        <div className="mb-16 flex items-end gap-3 md:gap-10">
          <div className="mb-[0.15rem] shrink-0 text-[10px] font-bold uppercase tracking-[0.2em] text-black/40 md:mb-[0.25rem] md:text-[13px]">
            команда лаборатории
          </div>
          <div className="mb-[0.45rem] h-px min-w-[20px] flex-1 bg-black/10 md:mb-[0.75rem]" />
          <h2 className="shrink-0 text-right text-xl font-black uppercase tracking-widest md:text-5xl/none">
            Спикеры
          </h2>
        </div>

        <div className="mb-16 max-w-3xl">
          <p className="text-sm leading-relaxed text-black/70 md:text-base">
            ниже — проводники, которые будут рядом на всём протяжении лаборатории.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
          {RESEARCH_SPEAKERS.map((member) => (
            <article
              key={member.name}
              className="group relative flex h-full flex-col p-3"
            >
              <CornerFrame />

              <div className="mx-auto mb-6 w-full">
                <div className="relative aspect-[4/5] overflow-hidden rounded-[10px] bg-black/6">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="h-full w-full object-cover grayscale transition duration-500 group-hover:scale-[1.02] group-hover:grayscale-0"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0)_0%,rgba(0,0,0,0.08)_100%)]" />
                </div>
              </div>

              <div className="flex flex-1 flex-col">
                <div className="mb-1 min-h-[3rem]">
                  <h3 className="mb-1 text-[16px] font-bold uppercase tracking-tight text-black/92">
                    {member.name.toUpperCase()}
                  </h3>
                  <p className="text-[9px] font-bold uppercase tracking-[0.22em] text-black/38">
                    {member.role.toUpperCase()}
                  </p>
                </div>

                <p className="text-[13px] leading-[1.58] text-black/68">
                  {member.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};
