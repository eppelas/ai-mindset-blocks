import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const FAQ_DATA = [
  {
    category: 'ОРГАНИЗАЦИЯ И ПРОЦЕССЫ',
    items: [
      { q: 'Наш подход к обучению', a: '80% практики и 20% теории. Мы фокусируемся на реальных кейсах и практических заданиях.' },
      { q: 'Будет ли возможность пообщаться с авторами курса лично?', a: 'Да, в рамках живых воркшопов и сессий Q&A.' },
      { q: 'Как будет организовано общение и взаимодействие участников?', a: 'Мы используем закрытый Telegram-чат для оперативного общения и нетворкинга.' },
    ]
  },
  {
    category: 'ОЖИДАНИЯ И РЕЗУЛЬТАТ',
    items: [
      { q: 'Кому лаборатория подходит, а кому нет?', a: 'Подходит тем, кто готов много практиковаться. Не подходит тем, кто ищет только теорию.' },
      { q: 'Инструменты, которые мы освоим', a: 'LLM (GPT, Claude), инструменты автоматизации (n8n, Make), медиа-генерация.' },
      { q: 'Нужен ли технический бэкграунд для участия в лаборатории?', a: 'Нет, мы обучаем с нуля. Главное — ваше желание разбираться.' },
    ]
  },
  {
    category: 'ОПЛАТА И УСЛОВИЯ',
    items: [
      { q: 'Какие варианты оплаты?', a: 'Мы принимаем карты всех банков и безналичные платежи от юрлиц.' },
      { q: 'Можете ли выставить счёт?', a: 'Да, мы работаем с юридическими лицами.' },
      { q: 'Возможен ли возврат, если мне не подойдет формат лаборатории?', a: 'Да, возврат возможен в течение первой недели обучения.' },
    ]
  }
];

export const DesktopFaqV2 = () => {
  const [openIndex, setOpenIndex] = useState<string | null>(null);

  const toggle = (id: string) => {
    setOpenIndex(openIndex === id ? null : id);
  };

  return (
    <div className="w-full bg-[#f3f3f5] py-8 px-4 md:px-6 font-sans overflow-hidden border-y border-black/10">
      <div className="max-w-[800px] mx-auto flex flex-col md:flex-row gap-6">
        
        {/* Left Side: Header & Info */}
        <div className="md:w-[220px] shrink-0 flex flex-col border-l-2 border-black pl-4">
          <div className="text-[#8dc63f] font-mono font-bold text-[9px] tracking-[0.2em] mb-3 uppercase flex items-center gap-2">
            <span className="w-3 h-[1px] bg-[#8dc63f]"></span> INFO_CENTER
          </div>
          <h2 className="text-2xl font-black uppercase tracking-tighter leading-none mb-4">
            F.A.Q. <br />
            <span className="text-black/30">QUESTIONS</span>
          </h2>
          <div className="mt-auto hidden md:block">
            <div className="font-mono text-[8px] text-black/40 uppercase mb-2 leading-relaxed tracking-wider">
              * STATUS: OPERATIONAL<br />
              * SOURCE: LAB_X26<br />
              * UPDATED: 2024.MAR.20
            </div>
          </div>
        </div>

        {/* Right Side: Accordions */}
        <div className="flex-1 flex flex-col gap-6">
          {FAQ_DATA.map((cat, catIdx) => (
            <div key={catIdx}>
              <div className="text-[9px] font-mono font-bold tracking-[0.2em] text-[#8dc63f] mb-3 uppercase border-b border-black/10 pb-1">
                [{catIdx + 1}] // {cat.category}
              </div>
              <div className="flex flex-col border-t border-black/20">
                {cat.items.map((item, itemIdx) => {
                    const id = `${catIdx}-${itemIdx}`;
                    const isOpen = openIndex === id;
                    return (
                        <div key={itemIdx} className="border-b border-black/20 overflow-hidden bg-white/40 hover:bg-white transition-colors">
                            <button 
                                onClick={() => toggle(id)}
                                className="w-full flex items-center justify-between p-3 lg:p-4 text-left group"
                            >
                                <span className={`text-sm tracking-tight transition-colors pr-4 ${isOpen ? 'text-black font-bold' : 'text-black/70 font-medium group-hover:text-black'}`}>
                                    {item.q}
                                </span>
                                <div className={`w-5 h-5 rounded-none border border-black/30 flex items-center justify-center font-mono text-xs transition-all shrink-0 ${isOpen ? 'bg-black text-white border-black' : 'bg-transparent text-black/50 group-hover:bg-[#8dc63f] group-hover:border-[#8dc63f] group-hover:text-white'}`}>
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
                                        <div className="px-4 pb-4 pt-0 text-[13px] leading-relaxed text-black/60 max-w-2xl">
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
          <div className="mt-4 bg-black/5 p-4 border border-dashed border-black/15 relative overflow-hidden">
             <div className="relative z-10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <div className="flex items-center gap-2 mb-1.5">
                      <div className="w-1 h-1 bg-[#8dc63f]"></div>
                      <span className="text-[8px] font-mono font-bold uppercase tracking-widest text-[#8dc63f]">FREE SPOTS PROGRAM</span>
                  </div>
                  <h4 className="text-xs font-black uppercase mb-1 leading-tight">
                      NON-PROFIT / ART СФЕРА?
                  </h4>
                  <p className="text-[10px] text-black/60 leading-relaxed max-w-[300px]">
                      3 бесплатных места за мотивационное письмо.
                  </p>
                </div>
                <button className="bg-black text-white px-4 py-2 font-mono font-bold text-[9px] uppercase tracking-widest hover:bg-[#8dc63f] transition-colors shrink-0 whitespace-nowrap">
                    APPLY NOW
                </button>
             </div>
          </div>
        </div>

      </div>
    </div>
  );
};
