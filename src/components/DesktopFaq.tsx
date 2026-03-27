import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

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

export const DesktopFaq = () => {
  const [openIndex, setOpenIndex] = useState<string | null>(null);

  const toggle = (id: string) => {
    setOpenIndex(openIndex === id ? null : id);
  };

  return (
    <div className="w-full bg-[#f3f3f5] py-20 px-8 font-sans overflow-hidden">
      <div className="max-w-[1240px] mx-auto flex flex-col lg:flex-row gap-20">
        
        {/* Left Side: Header & Info */}
        <div className="lg:w-1/3 shrink-0 flex flex-col border-l-2 border-black pl-8">
          <div className="text-[#8dc63f] font-mono font-bold text-xs tracking-[0.4em] mb-6 uppercase flex items-center gap-4">
            <span className="w-4 h-[1px] bg-[#8dc63f]"></span> INFO_CENTER
          </div>
          <h2 className="text-7xl font-black uppercase tracking-tighter leading-none mb-10">
            F.A.Q. <br />
            <span className="text-black/30">QUESTIONS</span>
          </h2>
          <div className="mt-auto hidden lg:block">
            <div className="font-mono text-[10px] text-black/40 uppercase mb-4 leading-relaxed">
              * SYSTEM STATUS: OPERATIONAL<br />
              * DATA SOURCE: LAB_X26_HANDBOOK<br />
              * LAST UPDATE: 2024.MAR.20
            </div>
            <div className="w-full h-px bg-black opacity-10 mb-4"></div>
            <div className="flex justify-between items-center text-[10px] font-mono font-black text-black/50">
              <span>0% THEORETICAL</span>
              <span>100% PRACTICAL</span>
            </div>
          </div>
        </div>

        {/* Right Side: Accordions */}
        <div className="flex-1 flex flex-col gap-12">
          {FAQ_DATA.map((cat, catIdx) => (
            <div key={catIdx}>
              <div className="text-[11px] font-mono font-black tracking-[0.2em] text-[#8dc63f] mb-6 uppercase border-b border-black/10 pb-2">
                [{catIdx + 1}] // {cat.category}
              </div>
              <div className="flex flex-col border-t border-black">
                {cat.items.map((item, itemIdx) => {
                    const id = `${catIdx}-${itemIdx}`;
                    const isOpen = openIndex === id;
                    return (
                        <div key={itemIdx} className="border-b border-black overflow-hidden bg-white/40 hover:bg-white/80 transition-colors">
                            <button 
                                onClick={() => toggle(id)}
                                className="w-full flex items-center justify-between p-6 text-left group"
                            >
                                <span className={`text-lg font-bold tracking-tight uppercase transition-colors ${isOpen ? 'text-black' : 'text-black/60 group-hover:text-black'}`}>
                                    {item.q}
                                </span>
                                <div className={`w-8 h-8 rounded-none border border-black flex items-center justify-center font-mono text-sm transition-all ${isOpen ? 'bg-black text-white' : 'bg-transparent text-black group-hover:bg-[#8dc63f] group-hover:border-[#8dc63f]'}`}>
                                    {isOpen ? '-' : '+'}
                                </div>
                            </button>
                            <AnimatePresence>
                                {isOpen && (
                                    <motion.div 
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        className="overflow-hidden bg-white/60"
                                    >
                                        <div className="px-6 pb-8 pt-0 text-base leading-relaxed text-black/70 max-w-3xl">
                                            {item.a}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    );
                })}
              </div>
            </div>
          ))}

          {/* Non-Profit Banner */}
          <div className="mt-8 bg-black/5 border border-dashed border-black/20 p-8 relative overflow-hidden">
             <div className="relative z-10">
                <div className="flex items-center gap-3 mb-4">
                    <div className="w-2 h-2 bg-[#8dc63f]"></div>
                    <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#8dc63f]">FREE SPOTS PROGRAM</span>
                </div>
                <h4 className="text-xl font-black uppercase mb-4 leading-tight">
                    ТЫ ПРЕДСТАВИТЕЛЬ NON-PROFIT / ART СФЕРЫ?<br />
                    ХОЧЕШЬ НА ЛАБУ?
                </h4>
                <p className="text-sm text-black/60 leading-relaxed mb-6 max-w-2xl">
                    Мы предлагаем <strong className="text-black">3 бесплатных места</strong> для представителей некоммерческих и творческих организаций за мотивационное письмо.
                </p>
                <button className="bg-black text-white px-8 py-3 font-mono font-bold text-xs uppercase tracking-widest hover:bg-[#8dc63f] transition-colors">
                    ПОДАТЬ ЗАЯВКУ // APPLY
                </button>
             </div>
             {/* Decorative ASCII in background */}
             <div className="absolute -right-8 -bottom-8 font-mono text-[80px] font-black text-black/[0.03] leading-none pointer-events-none select-none">
                LAB_X26
             </div>
          </div>
        </div>

      </div>
    </div>
  );
};
