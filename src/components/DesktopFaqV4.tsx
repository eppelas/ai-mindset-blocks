import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

const FAQ_DATA = [
  {
    category: 'ОРГАНИЗАЦИЯ И ПРОЦЕССЫ',
    items: [
      { q: 'Наш подход к обучению', a: 'Практика прежде всего: реальные кейсы, практические задания и чеклисты в каждом модуле. Гибкость: программа подстраивается под динамику и интересы группы. Актуальность: следим за последними трендами в AI и обновляем контент. Философское осмысление: размышляем об этике и влиянии AI на будущее. Коллаборация: поощряем обмен идеями и опытом между участниками.' },
      { q: 'Будет ли возможность пообщаться с авторами курса лично?', a: 'Да, в рамках лаборатории предусмотрены коворкинги и Office Hours специально для разбора ваших вопросов авторами курса и кураторами. На воркшопах тоже предусмотрена возможность задавать вопросы.' },
      { q: 'Как будет организовано общение и взаимодействие участников?', a: 'Мы создадим закрытый Telegram-чат для участников. Этот чат и сами занятия — эффективные площадки для обсуждений, взаимной поддержки и обмена опытом.' },
    ]
  },
  {
    category: 'ОЖИДАНИЯ И РЕЗУЛЬТАТ',
    items: [
      { q: 'Кому лаборатория подходит, а кому нет?', a: 'Подходит: предприниматели, менеджеры, аналитики, преподаватели, криэйторы, исследователи и философы и все, кто интересуется будущим и своей эффективностью. Технический уровень: от начального до продвинутого. Вы готовы разбираться в новом, инвестировать время и силы. НЕ для вас, если: вы не готовы самостоятельно решать технические сложности, не готовы оплатить необходимые инструменты (AI-модели), ждёте готовые решения и не хотите думать самостоятельно.' },
      { q: 'Инструменты, которые мы освоим', a: 'Текстовые LLM: ChatGPT, Custom GPTs, GPT Canvas, Claude, Claude Artefacts, Google Gemini, Groq, OpenRouter. Софт с интеграцией AI: Claude Code, WindSurf, Cursor, Taskade, Tactiq, Krisp, Ollama, LMStudio, MSTY, Obsidian. Автоматизация и ресерч: Perplexity, Consensus, DeepResearches, Elicit, Elevenlabs, SuperWhisper, WisprFlow, n8n, make, Vapi, AutoGPT, AIDER. Графические и видео инструменты: Midjourney, Runway ML, Dream Machine, Heygen, Stable Diffusion, Pika.' },
      { q: 'Нужен ли технический бэкграунд для участия в лаборатории?', a: 'Нет, мы будем использовать готовые плагины и инструменты, доступные даже для новичков. Главное — ваше желание учиться и экспериментировать.' },
      { q: 'Ваши обязательства для максимального результата', a: 'Присутствие на live-сессиях с включенной камерой и активное участие. Самостоятельная оплата необходимых AI-инструментов. Выполнение практических заданий (минимум 2-3 часа в неделю). Готовность экспериментировать.' },
      { q: 'Что вы получите?', a: 'Системное понимание AI как партнера для мышления. Практические навыки: промпт-инжиниринг, контекст-инжиниринг, агенты и автоматизации. Собственные AI-ассистенты, настроенные на ваш контекст. AI-ритуалы для повышения продуктивности и креативности. Сообщество практиков.' }
    ]
  },
  {
    category: 'ОПЛАТА И УСЛОВИЯ',
    items: [
      { q: 'Какие варианты оплаты?', a: 'Принимаем рубли, криптовалюты, евро и доллары по SWIFT, Paypal и другим сервисам.' },
      { q: 'Можете ли выставить счёт?', a: 'Да, можем выставить счёт на консультационные услуги от юрлица в Армении.' },
      { q: 'Почему компании стоит купить этот курс для сотрудника?', a: 'Специальный тариф FOR TEAMS, экономия времени сотрудника, стоимость ниже найма нового специалиста, передача навыков коллегам, удобное совмещение с работой, автоматизация процессов.' },
      { q: 'Есть ли скидки для команд или возможность персонального консалтинга?', a: 'Да, есть тариф FOR TEAMS и расширенный пакет VISIONARY (индивидуальный трекинг, консультации, прямой доступ к авторам).' },
      { q: 'Возможен ли возврат, если мне не подойдет формат лаборатории?', a: 'Да, возврат после первой недели без вопросов (за вычетом комиссий платежных систем).' }
    ]
  }
];

export const DesktopFaqV4 = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(0); // 0th is open by default

  const toggle = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <div className="w-full bg-[#f3f3f5] py-16 px-4 font-sans border-y border-black/10 flex justify-center">
      {/* 3x times smaller -> target width ~380px-420px max */}
      <div className="w-full max-w-[420px] flex flex-col">
        
        {/* Module Terminal Header */}
        <div className="flex justify-between items-end mb-4 border-b-2 border-black pb-2">
           <div>
              <div className="text-[9px] font-mono font-bold text-[#8DC63F] uppercase tracking-widest mb-1.5 flex items-center gap-1.5">
                 <div className="w-1.5 h-1.5 bg-[#8DC63F]" />
                 [F.A.Q. MODULE]
              </div>
              <h2 className="text-[16px] font-black uppercase tracking-tight text-black leading-none">
                 БАЗА ЗНАНИЙ
              </h2>
           </div>
           <div className="text-[8px] font-mono text-black/40 uppercase tracking-widest text-right leading-[1.3]">
              VER_3.0<br/>
              SYS_READY
           </div>
        </div>

        {/* Grouped Accordions */}
        <div className="flex flex-col border border-black/15 bg-white shadow-sm">
          {FAQ_DATA.map((cat, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div key={idx} className="border-b border-black/10 last:border-b-0">
                <button 
                  onClick={() => toggle(idx)}
                  className={`w-full flex items-center justify-between px-3 py-3.5 font-mono text-[10px] font-bold uppercase tracking-wider transition-colors ${isOpen ? 'bg-black text-white' : 'hover:bg-black/5 text-black'}`}
                >
                  <div className="flex items-center gap-3">
                     <span className={`${isOpen ? 'text-[#8DC63F]' : 'text-black/30'}`}>[{idx + 1}]</span>
                     <span>{cat.category}</span>
                  </div>
                  <span className={`${isOpen ? 'text-white' : 'text-black/40'}`}>
                     {isOpen ? '—' : '+'}
                  </span>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "circOut" }}
                      className="overflow-hidden bg-white"
                    >
                      <div className="px-5 py-5 flex flex-col gap-5 border-t border-black/10">
                         {cat.items.map((item, i) => (
                           <div key={i} className="flex flex-col gap-1 max-w-[95%]">
                             <div className="text-[11px] font-bold text-black uppercase tracking-tight font-sans flex items-start gap-1.5">
                               <span className="text-[#8DC63F] font-mono select-none">Q:</span>
                               <span>{item.q}</span>
                             </div>
                             <div className="text-[12px] text-black/70 leading-[1.4] font-sans pl-[18px]">
                               {item.a}
                             </div>
                           </div>
                         ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Interactive Mini-Banner: Non-Profit */}
        <div className="mt-4 bg-black p-3 text-white flex items-center justify-between group cursor-pointer hover:bg-black/90 transition-colors shadow-lg">
           <div className="flex flex-col gap-1.5 pl-1">
              <span className="text-[#8DC63F] font-mono uppercase tracking-widest text-[8px] flex items-center gap-1.5">
                 <span className="animate-pulse">_</span> GRANT_PROGRAM
              </span>
              <span className="uppercase text-[11px] font-bold tracking-tight">
                 NON-PROFIT ТАРИФ (3 МЕСТА)
              </span>
           </div>
           <div className="border border-white/20 px-3 py-1.5 uppercase font-mono text-[9px] font-bold group-hover:bg-[#8DC63F] group-hover:text-black group-hover:border-[#8DC63F] transition-colors">
              APPLY
           </div>
        </div>

      </div>
    </div>
  );
};
