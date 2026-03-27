import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { RESEARCH_SPEAKERS } from './labMirrorContent';
import { renderSpeakerDescription } from './speakerHighlights';

const cn = (...classes: Array<string | false | null | undefined>) => classes.filter(Boolean).join(' ');
const chunkArray = <T,>(items: T[], size: number) =>
  Array.from({ length: Math.ceil(items.length / size) }, (_, index) => items.slice(index * size, index * size + size));

export const DesktopSpeakersOriginal = () => {
  const [activeSpeakerIndex, setActiveSpeakerIndex] = useState<number | null>(null);
  const [activeRowIndex, setActiveRowIndex] = useState<number | null>(null);

  const toggleSpeaker = (index: number, rowSize: number) => {
    const rowIndex = Math.floor(index / rowSize);
    if (activeSpeakerIndex === index) {
      setActiveSpeakerIndex(null);
      setActiveRowIndex(null);
      return;
    }
    setActiveSpeakerIndex(index);
    setActiveRowIndex(rowIndex);
  };

  return (
    <div className="w-full border-y border-black/5 bg-[#f8f8f8] px-6 py-20 font-sans flex justify-center">
      <div className="w-full max-w-[1180px] flex flex-col">
        <div className="mb-10 flex items-end gap-8">
          <div className="mb-1 shrink-0 text-[14px] font-bold uppercase tracking-[0.2em] text-black/40">
            LAB TEAM
          </div>
          <div className="mx-4 mb-2 h-px w-full flex-1 bg-black/10" />
          <h2 className="shrink-0 text-right text-5xl font-black uppercase tracking-tighter">
            СПИКЕРЫ
          </h2>
        </div>

        <p className="mb-10 font-mono text-sm uppercase tracking-tighter text-black/60">
          Ниже — текущий live-site блок со стрелками, раскрытием и построчной анимацией.
        </p>

        <div className="md:hidden grid grid-cols-2 gap-5">
          {RESEARCH_SPEAKERS.map((member, index) => {
            const currentRowIndex = Math.floor(index / 2);
            const isLastInRow = index % 2 === 1 || index === RESEARCH_SPEAKERS.length - 1;
            const isActive = activeSpeakerIndex === index;
            const dimmed = activeSpeakerIndex !== null && !isActive;

            return (
              <div key={member.name} className="contents">
                <div className={cn('flex flex-col gap-3 transition-opacity duration-300', dimmed && 'opacity-40')}>
                  <button type="button" onClick={() => toggleSpeaker(index, 2)} className="group text-left">
                    <div className="relative aspect-square overflow-hidden border border-[#332b2b]/10 bg-[#332b2b]/5">
                      <img src={member.image} alt={member.name} className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]" loading="lazy" />
                      <div className={cn('absolute inset-0 transition-colors duration-300', isActive ? 'bg-black/16' : dimmed ? 'bg-black/42' : 'bg-black/6 group-hover:bg-black/12')} />
                      <div className="absolute right-3 bottom-3 text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.35)]">
                        <ArrowRight size={20} strokeWidth={2.25} className={cn('transition-transform duration-300', isActive && 'rotate-90')} />
                      </div>
                    </div>
                  </button>
                  <div>
                    <h3 className="text-[12px] font-bold uppercase tracking-tight leading-tight">{member.name}</h3>
                    <p className="text-[8px] opacity-40 uppercase tracking-widest">{member.role}</p>
                  </div>
                </div>

                {isLastInRow ? (
                  <div className="col-span-2">
                    <AnimatePresence initial={false}>
                      {activeSpeakerIndex !== null && activeRowIndex === currentRowIndex ? (
                        <motion.div
                          key={`speaker-detail-mobile-${currentRowIndex}`}
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="overflow-hidden bg-[#faf8f3] mt-0.5"
                        >
                          <div className="px-1 pt-2 pb-3 text-[12px] leading-[1.6] text-black/72">
                            {renderSpeakerDescription(RESEARCH_SPEAKERS[activeSpeakerIndex].name, RESEARCH_SPEAKERS[activeSpeakerIndex].description)}
                          </div>
                        </motion.div>
                      ) : null}
                    </AnimatePresence>
                  </div>
                ) : null}
              </div>
            );
          })}
        </div>

        <div className="hidden md:flex md:flex-col md:gap-8">
          {chunkArray(RESEARCH_SPEAKERS, 4).map((row, rowIndex) => (
            <div key={`speaker-row-${rowIndex}`} className="flex flex-col gap-4 lg:gap-5">
              <div className="grid grid-cols-4 gap-6 lg:gap-8">
                {row.map((member, indexInRow) => {
                  const memberIndex = rowIndex * 4 + indexInRow;
                  const isActive = activeSpeakerIndex === memberIndex;
                  const dimmed = activeSpeakerIndex !== null && !isActive;

                  return (
                    <div key={member.name} className={cn('flex flex-col gap-2 transition-opacity duration-300', dimmed && 'opacity-40')}>
                      <button type="button" onClick={() => toggleSpeaker(memberIndex, 4)} className="group text-left">
                        <div className="relative aspect-square overflow-hidden border border-[#332b2b]/10 bg-[#332b2b]/5">
                          <img src={member.image} alt={member.name} className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]" loading="lazy" />
                          <div className={cn('absolute inset-0 transition-colors duration-300', isActive ? 'bg-black/14' : dimmed ? 'bg-black/48' : 'bg-black/8 group-hover:bg-black/14')} />
                          <div className="absolute right-3 bottom-3 text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.35)]">
                            <ArrowRight size={20} strokeWidth={2.25} className={cn('transition-transform duration-300', isActive && 'rotate-90')} />
                          </div>
                        </div>
                      </button>
                      <div>
                        <h3 className="text-[15px] font-bold uppercase tracking-tight leading-tight">{member.name}</h3>
                        <p className="text-[9px] opacity-40 uppercase tracking-widest">{member.role}</p>
                      </div>
                    </div>
                  );
                })}
                {Array.from({ length: 4 - row.length }).map((_, placeholderIndex) => (
                  <div key={`speaker-placeholder-${rowIndex}-${placeholderIndex}`} aria-hidden="true" className="pointer-events-none opacity-0" />
                ))}
              </div>

              <AnimatePresence initial={false}>
                {activeSpeakerIndex !== null && activeRowIndex === rowIndex ? (
                  <motion.div
                    key={`speaker-detail-desktop-${rowIndex}`}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="grid grid-cols-4 gap-6 lg:gap-8">
                      <div className="col-span-3 grid">
                        {row.map((member, indexInRow) => {
                          const memberIndex = rowIndex * 4 + indexInRow;
                          const isVisible = activeSpeakerIndex === memberIndex;

                          return (
                            <motion.div
                              key={`speaker-detail-copy-${member.name}`}
                              className="col-start-1 row-start-1 text-[14px] leading-[1.62] text-black/72"
                              initial={false}
                              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 6 }}
                              transition={{ duration: 0.18, ease: 'easeOut' }}
                              style={{ pointerEvents: 'none', visibility: isVisible ? 'visible' : 'hidden' }}
                            >
                              {renderSpeakerDescription(member.name, member.description)}
                            </motion.div>
                          );
                        })}
                      </div>
                    </div>
                  </motion.div>
                ) : null}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
