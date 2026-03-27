import { RESEARCH_SPEAKERS } from './labMirrorContent';
import { renderSpeakerDescription } from './speakerHighlights';

export const DesktopSpeakersV4 = () => {
  return (
    <div className="flex w-full justify-center border-y border-black/5 bg-[#f8f8f8] px-6 py-20 font-sans">
      <div className="flex w-full max-w-[1180px] flex-col">
        <div className="mb-10 flex items-end gap-8">
          <div className="mb-1 shrink-0 text-[14px] font-bold uppercase tracking-[0.2em] text-black/40">
            LAB TEAM
          </div>
          <div className="mx-4 mb-2 h-px w-full flex-1 bg-black/10" />
          <h2 className="shrink-0 text-right text-5xl font-black uppercase tracking-tighter">
            СПИКЕРЫ
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-x-5 gap-y-10 md:grid-cols-2 xl:grid-cols-5">
          {RESEARCH_SPEAKERS.map((member) => (
            <article key={member.name} className="group flex flex-col gap-3">
              <div className="relative aspect-square overflow-hidden border border-[#332b2b]/10 bg-[#332b2b]/5">
                <img
                  src={member.image}
                  alt={member.name}
                  className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-[1.02]"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/8 transition-colors duration-300 group-hover:bg-black/14" />
              </div>

              <div className="flex flex-col gap-2">
                <div>
                  <h3 className="mb-1 text-[15px] font-bold uppercase leading-tight tracking-tight text-black/92">
                    {member.name}
                  </h3>
                  <p className="text-[9px] font-bold uppercase tracking-widest text-black/40">
                    {member.role}
                  </p>
                </div>

                <p className="text-[12px] leading-[1.58] text-black/68">
                  {renderSpeakerDescription(member.name, member.description)}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};
