import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { renderSpeakerDescription } from './speakerHighlights';

const cn = (...classes: Array<string | false | null | undefined>) => classes.filter(Boolean).join(' ');
const speakerImage = (filename: string) => `${import.meta.env.BASE_URL}speakers/${filename}`;

const LIVE_SITE_SPEAKERS = [
  {
    name: 'Александр Поваляев',
    role: 'Основатель AI Mindset, стратег',
    description:
      'Основатель проекта AI Mindset, стратег и эксперт по AI-интеграциям. 15+ лет соединяет технологии, бизнес и людей, создавая системы, которые работают на человека, а не наоборот. На лаборатории помогает увидеть большую картину и встроить AI в жизнь и работу осмысленно.',
    image: speakerImage('alexander-povalyaev.jpg'),
  },
  {
    name: 'Сергей Хабаров',
    role: 'Системный архитектор',
    description:
      'Системный архитектор на стыке AI, образования и бизнес-процессов. 6+ лет в образовании, 500+ обученных специалистов. Бывший CTO и директор по развитию. Ведёт контекст-инжиниринг: как структурировать знания, чтобы AI работал с ними, а не терялся в хаосе файлов и заметок.',
    image: speakerImage('sergey-khabarov.jpg'),
  },
  {
    name: 'Степан Гершуни',
    role: 'Технологический стратег',
    description:
      'Фаундер, построил Credentia, Deep Skills и Codex Town. Инвестор в венчурном фонде Cyber Fund, крипто- и ИИ-энтузиаст. Автор cybOS, о которой и расскажет на лаборатории на advanced-треке.',
    image: speakerImage('stepan-gershuni.jpg'),
  },
  {
    name: 'Алексей Иванов',
    role: 'Экзекьютив-коуч',
    description:
      'Экзекьютив-коуч для фаундеров и IT-лидеров. ICF PCC, экс-дизайн лид. После 15 лет в UX и продуктах делает то, что действительно даёт энергию и драйв. Ведёт advanced-трек AI-coaching.',
    image: speakerImage('alexey-ivanov.jpg'),
  },
  {
    name: 'Серёжа Рис',
    role: 'AI-евангелист, экс-Yandex',
    description:
      'AI-евангелист, экс-Yandex. Билдер и фаундер в комьюнити вайбкодеров @vibecod3rs. Клод-код стример на YouTube. Ведёт advanced-трек vibe-coding.',
    image: speakerImage('serezha-ris.jpg'),
  },
  {
    name: 'Анна Ставенски',
    role: 'Продуктовый архитектор',
    description:
      'Продуктовый архитектор. 10+ лет в управлении, технологических и креативных индустриях: продукт, визуал, роботы, тренажёры. PO в стартапах и визуальный сторителлер в жизни. Ведёт life engineering и помогает собрать изученные инструменты в единую систему.',
    image: speakerImage('anka-stavenski.jpg'),
  },
  {
    name: 'Анна Лозицкая',
    role: 'Фаундер embraceme.app',
    description:
      '12+ лет помогала стартапам расти с нуля до больших раундов. Фаундер embraceme.app. Исследует, как технологии помогают основателям. Ведёт mind engineering: как использовать AI для персональных ритуалов, рефлексии и трекинга целей.',
    image: speakerImage('anna-lozitskaya.jpg'),
  },
];

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

        <div className="md:hidden grid grid-cols-2 gap-5">
          {LIVE_SITE_SPEAKERS.map((member, index) => {
            const currentRowIndex = Math.floor(index / 2);
            const isLastInRow = index % 2 === 1 || index === LIVE_SITE_SPEAKERS.length - 1;
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
                            {renderSpeakerDescription(LIVE_SITE_SPEAKERS[activeSpeakerIndex].name, LIVE_SITE_SPEAKERS[activeSpeakerIndex].description)}
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

        <div className="relative hidden md:flex flex-wrap justify-center gap-x-4 gap-y-8">
          {LIVE_SITE_SPEAKERS.map((member) => (
            <article key={member.name} className="group flex flex-col gap-3 w-[calc(33.333%-10.66px)] lg:w-[calc(25%-12px)] xl:w-[calc(20%-12.8px)] relative z-10">
              <div className="relative aspect-square overflow-hidden border border-[#332b2b]/10 bg-[#332b2b]/5">
                <img
                  src={member.image}
                  alt={member.name}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/8 transition-colors duration-300 group-hover:bg-black/14" />
              </div>

              <div className="flex flex-col gap-2">
                <div>
                  <h3 className="text-[15px] font-bold uppercase tracking-tight leading-tight text-black/92">
                    {member.name}
                  </h3>
                  <p className="mt-1 text-[9px] opacity-40 uppercase tracking-widest">
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
