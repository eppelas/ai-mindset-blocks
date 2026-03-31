import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown } from 'lucide-react';

interface ReviewItem {
  id: string;
  name: string;
  role: string;
  quote: string;
  tg: string;
}

const REVIEWS: ReviewItem[] = [
  {
    id: "01",
    name: "Дмитрий Твердохлебов",
    role: "ex-директор ИИ МТС, ex-CPO AI VK",
    quote: "снова иду учиться к **упоротым на практике чувакам из AI Mindset**. Все, как мы любим: 20% теории, 80% практики. Дипломы не дают, выпускников на работу не устраивают, рост зарплаты на 146% не обещают, за что им отдельное спасибо.",
    tg: "tg ->"
  },
  {
    id: "02",
    name: "Дмитрий Лаухин",
    role: "евангелист Obsidian, Second Brain",
    quote: "Редко что-то советую от себя, но здесь тот самый случай. **AI вплетается в жизнь не как магический инструмент, а как часть системы мышления**. Это не про хайп и не про энциклопедию инструментов.",
    tg: "tg ->"
  },
  {
    id: "03",
    name: "Оля Еремина",
    role: "Предприниматель",
    quote: "**использовать ИИ — это не писать промпт. Использовать ИИ — это самому создавать контекст**. Спасибо ребятам AI Mindset за проект. За то, что они говорят на понятном языке.",
    tg: "tg ->"
  },
  {
    id: "04",
    name: "Олег Цербаев",
    role: "историк, Apple / Avito / Deutsche Bank",
    quote: "Был удивлен. Сильно. **Ребята нашли уникальную нишу, стиль и интонацию**, которые предельно точно попадают в нерв сегодняшнего и завтрашнего дня. AI Mindset показывает реальный путь.",
    tg: "tg ->"
  },
  {
    id: "05",
    name: "Вероника Долгих",
    role: "COO, SETTERS Agency",
    quote: "**я офигела, как клод четко прописал мне схему планирования**, чтобы не выпадать из режима, избегать выгораний. оооочень круто вытащил поведенческие паттерны года.",
    tg: "tg ->"
  },
  {
    id: "06",
    name: "Александра Гусева",
    role: "L&D, Avito",
    quote: "Произошел shift. **Я на 30% начала думать AI-first:** где я могу ускориться за счет того, что AI начнет помогать.",
    tg: ""
  },
  {
    id: "07",
    name: "Сергей Петров",
    role: "UNIX DEVELOPER",
    quote: "**Создал парсер Jira через Cursor за 1 день.** Проанализировал 1000+ задач. Задача, которая вручную заняла бы недели.",
    tg: "tg ->"
  },
  {
    id: "08",
    name: "Екатерина Грачева",
    role: "HR-КОММУНИКАЦИИ | AVITO",
    quote: "я заболел темой автоматизации после каста AI mindset. **Получил очень хороший подарок в лице ребят из AI mindset** и немного заболел вайбкодингом.",
    tg: "tg ->"
  },
  {
    id: "09",
    name: "Антон Мормышев",
    role: "МУЗЫКАНТ",
    quote: "**Новый способ думать и действовать**, когда барьеры уходят, а свобода экспериментировать и автоматизировать становится нормой. ИИ-мышление — новая база.",
    tg: "tg ->"
  }
];

const renderQuote = (text: string) => {
  const parts = text.split(/(\*\*.*?\*\*)/g);
  return (
    <>
      <span className="text-black/80">"</span>
      {parts.map((part, i) => {
        if (part.startsWith('**') && part.endsWith('**')) {
          return (
            <strong key={i} className="font-bold not-italic text-black">
              {part.slice(2, -2)}
            </strong>
          );
        }
        return <span key={i}>{part}</span>;
      })}
      <span className="text-black/80">"</span>
    </>
  );
};

export const DesktopReviewsV4 = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const toggleExpanded = () => {
    if (isExpanded) {
      if (sectionRef.current) {
        const yOffset = sectionRef.current.getBoundingClientRect().top + window.scrollY - 100;
        window.scrollTo({ top: yOffset, behavior: 'smooth' });
      }
      setTimeout(() => {
        setIsExpanded(false);
      }, 400);
    } else {
      setIsExpanded(true);
      setTimeout(() => {
        if (sectionRef.current) {
          const yOffset = sectionRef.current.getBoundingClientRect().top + window.scrollY - 50;
          window.scrollTo({ top: yOffset, behavior: 'smooth' });
        }
      }, 100);
    }
  };

  const previewCount = isMobile ? 3 : 6;
  const visibleReviews = isExpanded ? REVIEWS : REVIEWS.slice(0, previewCount);

  return (
    <section ref={sectionRef} className="w-full bg-white py-20 px-6 md:px-8 font-mono">
      <div className="mx-auto max-w-[1180px]">
        <div className="mb-12">
          <h2 className="text-[14px] md:text-[16px] uppercase tracking-[0.1em] text-black">
            что говорят о нас
          </h2>
        </div>

        <div className={`transition-all duration-500 w-full ${
            isExpanded 
              ? 'columns-1 md:columns-2 lg:columns-3 gap-6' 
              : 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'
          }`}>
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={isExpanded ? 'expanded-masonry' : 'collapsed-grid'}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.26, ease: 'easeOut' }}
              className="contents"
            >
              {visibleReviews.map((review) => (
                <article
                  key={review.id}
                  className={`group relative flex flex-col justify-between bg-white border border-black/10 border-t-2 border-t-[#8dc63f] px-6 pt-6 pb-5 transition-all ${
                    isExpanded ? 'break-inside-avoid mb-6 h-auto' : 'h-full grid grid-rows-[1fr_auto]'
                  }`}
                >
                  <div className="mb-10">
                    <p className="font-mono italic text-[14px] leading-[1.6] text-black/60 whitespace-pre-line tracking-tight">
                      {renderQuote(review.quote)}
                    </p>
                  </div>

                  <div className="mt-auto">
                    <div className="flex items-end justify-between gap-4 text-left">
                      <div className="min-w-0 pr-2">
                        <h3 className="mb-1 font-mono text-[13px] font-bold text-black truncate">
                          {review.name}
                        </h3>
                        <p className="font-mono text-[11px] text-black/40 truncate">
                          {review.role}
                        </p>
                      </div>
                      {review.tg && (
                        <span className="shrink-0 font-mono text-[11px] text-[#8DC63F] font-medium tracking-tight">
                          {review.tg}
                        </span>
                      )}
                    </div>
                  </div>
                </article>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="mt-12 flex justify-center">
          <button
            type="button"
            onClick={toggleExpanded}
            aria-expanded={isExpanded}
            className="inline-flex items-center gap-3 bg-transparent px-4 py-3 text-[12px] font-mono font-bold uppercase tracking-[0.16em] text-black/68 hover:text-black transition-colors"
          >
            <span>{isExpanded ? 'свернуть' : 'открыть все'}</span>
            <span className="flex h-6 w-6 items-center justify-center">
              <ChevronDown className={`h-4 w-4 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`} />
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};
