import { TEAM_MEMBERS } from './DesktopSpeakers';

export const DesktopSpeakersV2 = () => {
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

        {/* 4 Column Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-16 gap-x-12">
          {TEAM_MEMBERS.map((member, idx) => (
            <div key={idx} className="flex flex-col items-center text-center group cursor-pointer">
              {/* Round Image container */}
              <div className="relative aspect-square w-[75%] max-w-[240px] rounded-full filter grayscale hover:grayscale-0 transition-all duration-300 mb-6 bg-black/5 overflow-hidden shadow-sm group-hover:shadow-lg">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-full object-cover scale-100 group-hover:scale-105 transition-transform duration-500"
                />
                
                {/* Overlay with Arrow Icon */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-all -translate-y-2 group-hover:translate-y-0">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </div>
              </div>
              
              <h3 className="font-bold text-[18px] uppercase tracking-tighter group-hover:text-[#8DC63F] transition-colors leading-tight mb-2">
                {member.name}
              </h3>
              <p className="font-mono text-[10px] uppercase tracking-widest text-black/40 max-w-[80%]">
                {member.role}
              </p>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};
