import { RESEARCH_SPEAKERS } from './labMirrorContent';

export const TEAM_MEMBERS = RESEARCH_SPEAKERS.map((member) => ({
  ...member,
  name: member.name.toUpperCase(),
  role: member.role.toUpperCase(),
}));

export const DesktopSpeakers = () => {
  return (
    <div className="w-full bg-[#f8f8f8] py-24 px-8 font-sans border-y border-black/5 flex justify-center">
      <div className="w-full max-w-[1340px] flex flex-col">
        
        {/* Header Section */}
        <div className="flex items-end gap-10 mb-12">
          <div className="text-[14px] font-bold uppercase tracking-[0.2em] text-black/40 shrink-0 mb-1">
            LAB TEAM
          </div>
          <div className="h-px w-full flex-1 bg-black/10 mx-4 mb-2" />
          <h2 className="font-black uppercase tracking-tighter text-6xl text-right shrink-0">
            СПИКЕРЫ
          </h2>
        </div>

        <p className="font-mono text-sm tracking-tighter text-black/60 mb-16 uppercase">
          НИЖЕ — ПРОВОДНИКИ, КОТОРЫЕ БУДУТ РЯДОМ НА ВСЁМ ПРОТЯЖЕНИИ ЛАБОРАТОРИИ.
        </p>

        {/* 5 Column Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-y-12 gap-x-6">
          {TEAM_MEMBERS.map((member, idx) => (
            <div key={idx} className="flex flex-col group cursor-pointer">
              {/* Square Image container */}
              <div className="relative aspect-square w-full filter grayscale hover:grayscale-0 transition-all duration-300 mb-4 bg-black/5 overflow-hidden">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
                
                {/* Arrow Icon in bottom right */}
                <div className="absolute bottom-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity translate-x-2 group-hover:translate-x-0">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="square" strokeLinejoin="miter"/>
                  </svg>
                </div>
              </div>
              
              <h3 className="font-bold text-[15px] uppercase tracking-tighter group-hover:text-[#8DC63F] transition-colors leading-tight mb-1">
                {member.name}
              </h3>
              <p className="font-mono text-[9px] uppercase tracking-widest text-black/40">
                {member.role}
              </p>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};
