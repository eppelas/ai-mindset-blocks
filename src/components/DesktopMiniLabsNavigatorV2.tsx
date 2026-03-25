import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '../lib/utils';

const ECOSYSTEM_CONTENT = [
  {
    id: 'spring-lab',
    title: 'SPRING MAIN LAB',
    desc: 'Практический клуб AI-практиков',
    status: 'CURRENT',
    icon: (
      <div className="flex-1 flex flex-col items-center justify-center w-full">
         <span className="font-mono text-[11px] sm:text-[13px] tracking-[0.1em] font-black text-[#8DC63F] whitespace-nowrap" style={{ textShadow: "0 0 8px rgba(141,198,63,0.5)" }}>
           ∑ EXE: 10%
         </span>
      </div>
    )
  },
  {
    id: 'ai-native-orgs',
    title: 'AI-NATIVE ORGS',
    desc: 'AI-трансформация команд',
    status: 'CURRENT',
    icon: (
      <div className="flex-1 flex flex-col items-center justify-center w-full">
         <span className="font-mono text-[11px] sm:text-[13px] tracking-[0.2em] font-black text-[#C084FC] whitespace-nowrap" style={{ textShadow: "0 0 8px rgba(192,132,252,0.5)" }}>
           [ ====== ]
         </span>
      </div>
    )
  },
  {
    id: 'health-sprint',
    title: 'HEALTH SPRINT',
    desc: 'Агентная инфраструктура',
    status: 'CURRENT',
    icon: (
      <div className="flex-1 flex flex-col items-center justify-center w-full">
         <span className="font-mono text-[14px] sm:text-[16px] tracking-[0.1em] font-black text-[#C084FC] whitespace-nowrap" style={{ textShadow: "0 0 8px rgba(192,132,252,0.5)" }}>
           I BvF I
         </span>
      </div>
    )
  },
  {
    id: 'summer-lab',
    title: 'SUMMER MAIN LAB',
    desc: 'Платформа обучения',
    status: 'NEXT',
    icon: (
      <div className="flex-1 flex flex-col items-center justify-center w-full">
         <span className="font-mono text-[12px] sm:text-[14px] tracking-[0.15em] font-black text-[#8DC63F] whitespace-nowrap" style={{ textShadow: "0 0 8px rgba(141,198,63,0.5)" }}>
           [ DATA ]
         </span>
      </div>
    )
  }
];

const TABS = [
  { id: 0, label: 'CURRENT LABS' },
  { id: 1, label: 'FUTURE LABS' },
  { id: 2, label: 'LAB ARCHIVE' }
];

export const DesktopMiniLabsNavigatorV2 = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="w-full py-8 text-center font-sans flex justify-center">
      {/* Light Theme Container */}
      <div className="w-full max-w-[760px] bg-[#f8f8f8] text-black flex flex-col relative overflow-hidden border border-black/10 shadow-sm">
        
        {/* Inner Content Area */}
        <div className="flex flex-col p-4 sm:p-6 relative">
           
           {/* Navigation Tabs - embedded inside */}
           <div className="flex items-center justify-between gap-4 mb-4 sm:mb-6 border-b border-black/10 pb-3 relative z-10 w-full overflow-x-auto scrollbar-hide">
              <div className="flex items-center gap-3 shrink-0">
                  <div className="flex items-center gap-2">
                     <div className="w-1.5 h-1.5 bg-[#8DC63F] rounded-full animate-pulse" />
                     <span className="font-mono text-[9px] uppercase font-bold tracking-[0.2em] text-black/40 hidden sm:inline">SYSTEM</span>
                  </div>
                  <div className="font-sans text-[11px] sm:text-[13px] font-black uppercase tracking-widest text-[#8DC63F]">
                    LABS NAVIGATOR
                  </div>
              </div>
              
              <div className="flex gap-1.5 sm:gap-2 shrink-0">
                 {TABS.map((tab) => (
                    <button
                       key={tab.id}
                       onClick={() => setActiveTab(tab.id)}
                       className={cn(
                          "font-mono text-[8px] sm:text-[9px] font-bold tracking-[0.1em] sm:tracking-[0.2em] uppercase px-2 py-1 sm:px-3 sm:py-1.5 transition-all outline-none shrink-0",
                          activeTab === tab.id 
                            ? "bg-black text-white border border-black" 
                            : "bg-transparent text-black/50 border border-transparent hover:text-black hover:border-black/20"
                       )}
                    >
                       {tab.label}
                    </button>
                 ))}
              </div>
           </div>

           <div className="relative z-10 w-full">
             <AnimatePresence mode="wait">
               <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -5 }}
                  transition={{ duration: 0.2 }}
                  className="w-full flex justify-center"
               >
                  {activeTab === 0 ? (
                     // Grid of perfectly square cards
                     <div className="grid grid-cols-2 md:grid-cols-4 gap-3 w-full sm:w-auto mx-auto place-items-center">
                        {ECOSYSTEM_CONTENT.map((card) => (
                           <div key={card.id} className="relative group shrink-0 w-[140px] h-[140px] sm:w-[150px] sm:h-[150px] bg-white border border-black/10 p-4 flex flex-col hover:border-black/30 hover:shadow-lg transition-all cursor-pointer">
                              
                              {/* Top Row: Title + Tag strictly aligned */}
                              <div className="flex justify-between items-start w-full">
                                 <h3 className="font-sans text-[13px] sm:text-[15px] font-black tracking-tighter uppercase text-black leading-none group-hover:text-[#8DC63F] transition-colors truncate pr-2 mt-0.5">
                                    {card.title}
                                 </h3>
                                 <span className={cn("font-mono text-[6.5px] font-bold tracking-widest uppercase px-1 py-[3px] border shrink-0 leading-none", 
                                    card.status === 'CURRENT' ? "border-[#8DC63F]/50 text-[#8DC63F] bg-[#8DC63F]/5" : "border-black/20 text-black/50")}>
                                    {card.status}
                                 </span>
                              </div>

                              {/* Middle: ASCII Icon */}
                              {card.icon}

                              {/* Bottom: Ultra-short desc */}
                              <div className="mt-auto h-[26px]">
                                 <p className="font-mono text-[8.5px] leading-[1.3] text-black/60 group-hover:text-black transition-colors line-clamp-2 text-left">
                                    {card.desc}
                                 </p>
                              </div>
                           </div>
                        ))}
                     </div>
                  ) : (
                     <div className="w-full max-w-[600px] h-[150px] bg-white border border-black/10 flex flex-col items-center justify-center p-6 text-center">
                        <div className="text-[18px] font-black text-black mb-1.5 uppercase tracking-widest">WINTER MAIN LAB</div>
                        <div className="font-mono text-[9px] uppercase text-black/40 tracking-[0.2em]">Архив потока W26</div>
                     </div>
                  )}
               </motion.div>
             </AnimatePresence>
           </div>
        </div>
      </div>
    </div>
  );
};
