import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

const FAQ_DATA = [
  {
    category: 'Организация и процессы',
    items: [
      { q: 'Наш подход к обучению', a: 'Практика прежде всего: реальные кейсы, практические задания и чеклисты в каждом модуле. Гибкость: программа подстраивается под динамику и интересы группы. Актуальность: следим за последними трендами в AI и обновляем контент. Философское осмысление: размышляем об этике и влиянии AI на будущее. Коллаборация: поощряем обмен идеями и опытом между участниками.' },
      { q: 'Будет ли возможность пообщаться с авторами курса лично?', a: 'Да, в рамках лаборатории предусмотрены коворкинги и Office Hours специально для разбора ваших вопросов авторами курса и кураторами. На воркшопах тоже предусмотрена возможность задавать вопросы.' },
      { q: 'Как будет организовано общение и взаимодействие участников?', a: 'Мы создадим закрытый Telegram-чат для участников. Этот чат и сами занятия — эффективные площадки для обсуждений, взаимной поддержки и обмена опытом.' },
    ]
  },
  {
    category: 'Ожидания и результат',
    items: [
      { q: 'Кому лаборатория подходит, а кому нет?', a: 'Подходит: предприниматели, менеджеры, аналитики, преподаватели, криэйторы, исследователи и философы и все, кто интересуется будущим и своей эффективностью. Технический уровень: от начального до продвинутого. Вы готовы разбираться в новом, инвестировать время и силы. НЕ для вас, если: вы не готовы самостоятельно решать технические сложности, не готовы оплатить необходимые инструменты (AI-модели), ждёте готовые решения и не хотите думать самостоятельно.' },
      { q: 'Инструменты, которые мы освоим', a: 'Текстовые LLM: ChatGPT, Custom GPTs, GPT Canvas, Claude, Claude Artefacts, Google Gemini, Groq, OpenRouter. Софт с интеграцией AI: Claude Code, WindSurf, Cursor, Taskade, Tactiq, Krisp, Ollama, LMStudio, MSTY, Obsidian. Автоматизация и ресерч: Perplexity, Consensus, DeepResearches, Elicit, Elevenlabs, SuperWhisper, WisprFlow, n8n, make, Vapi, AutoGPT, AIDER. Графические и видео инструменты: Midjourney, Runway ML, Dream Machine, Heygen, Stable Diffusion, Pika.' },
      { q: 'Нужен ли технический бэкграунд для участия в лаборатории?', a: 'Нет, мы будем использовать готовые плагины и инструменты, доступные даже для новичков. Главное — ваше желание учиться и экспериментировать.' },
      { q: 'Ваши обязательства для максимального результата', a: 'Присутствие на live-сессиях с включенной камерой и активное участие. Самостоятельная оплата необходимых AI-инструментов. Выполнение практических заданий (минимум 2-3 часа в неделю). Готовность экспериментировать.' },
      { q: 'Что вы получите?', a: 'Системное понимание AI как партнера для мышления. Практические навыки: промпт-инжиниринг, контекст-инжиниринг, агенты и автоматизации. Собственные AI-ассистенты, настроенные на ваш контекст. AI-ритуалы для повышения продуктивности и креативности. Сообщество практиков.' }
    ]
  },
  {
    category: 'Оплата и условия',
    items: [
      { q: 'Какие варианты оплаты?', a: 'Принимаем рубли, криптовалюты, евро и доллары по SWIFT, Paypal и другим сервисам.' },
      { q: 'Можете ли выставить счёт?', a: 'Да, можем выставить счёт на консультационные услуги от юрлица в Армении.' },
      { q: 'Почему компании стоит купить этот курс для сотрудника?', a: 'Специальный тариф FOR TEAMS, экономия времени сотрудника, стоимость ниже найма нового специалиста, передача навыков коллегам, удобное совмещение с работой, автоматизация процессов.' },
      { q: 'Есть ли скидки для команд или возможность персонального консалтинга?', a: 'Да, есть тариф FOR TEAMS и расширенный пакет VISIONARY (индивидуальный трекинг, консультации, прямой доступ к авторам).' },
      { q: 'Возможен ли возврат, если мне не подойдет формат лаборатории?', a: 'Да, возврат после первой недели без вопросов (за вычетом комиссий платежных систем).' }
    ]
  }
];

export const DesktopFaqV3 = () => {
  const [openIndex, setOpenIndex] = useState<string | null>(null);

  const toggle = (id: string) => {
    setOpenIndex(openIndex === id ? null : id);
  };

  return (
    <div className="w-full bg-white py-16 px-4 font-sans border-y border-black/5">
      <div className="max-w-[640px] mx-auto flex flex-col">
        {/* Simple Header */}
        <div className="mb-12 text-center">
          <h2 className="text-2xl font-bold tracking-tight text-black mb-2">
            Частые вопросы
          </h2>
          <p className="text-sm text-black/50">Всё, что нужно знать перед стартом</p>
        </div>

        {/* Accordion List */}
        <div className="flex flex-col gap-8">
          {FAQ_DATA.map((cat, catIdx) => (
            <div key={catIdx}>
              {/* Category label - calm and subtle */}
              <h3 className="text-[11px] font-semibold text-black/40 uppercase tracking-widest mb-3">
                {cat.category}
              </h3>
              
              <div className="flex flex-col border-t border-black/10">
                {cat.items.map((item, itemIdx) => {
                    const id = `${catIdx}-${itemIdx}`;
                    const isOpen = openIndex === id;
                    
                    return (
                        <div key={itemIdx} className="border-b border-black/10 group">
                            <button 
                                onClick={() => toggle(id)}
                                className="w-full flex items-center justify-between py-4 text-left transition-colors hover:bg-black/[0.02] px-2 -mx-2 rounded-sm"
                            >
                                <span className="text-[15px] font-medium text-black/90 pr-8">
                                    {item.q}
                                </span>
                                <div className="shrink-0 text-black/40 group-hover:text-black/80 transition-colors">
                                    <motion.div
                                      initial={false}
                                      animate={{ rotate: isOpen ? 45 : 0 }}
                                      transition={{ duration: 0.2 }}
                                    >
                                      <svg width="14" height="14" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
                                        <path d="M6 1v10M1 6h10" />
                                      </svg>
                                    </motion.div>
                                </div>
                            </button>
                            <AnimatePresence>
                                {isOpen && (
                                    <motion.div 
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.2, ease: "easeInOut" }}
                                        className="overflow-hidden"
                                    >
                                        <div className="pb-5 pt-1 px-2 text-[14px] leading-relaxed text-black/60">
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
        </div>

        {/* Calm Non-Profit Box */}
        <div className="mt-12 bg-[#F9F9F9] rounded-[14px] p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border border-black/5">
           <div>
              <div className="text-[14px] font-medium text-black mb-1">Non-profit программа</div>
              <div className="text-[13px] text-black/60">3 бесплатных места за мотивационное письмо</div>
           </div>
           <button className="text-[13px] font-medium text-white bg-black px-4 py-2.5 rounded-lg hover:bg-black/80 transition-colors whitespace-nowrap shadow-sm">
              Подать заявку
           </button>
        </div>

      </div>
    </div>
  );
};
