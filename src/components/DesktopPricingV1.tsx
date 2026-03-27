import { RESEARCH_PRICING_PLANS } from './labMirrorContent';

const planToneClasses = {
  base: 'border-black/10 bg-white/90 text-black',
  highlight: 'border-[#8DC63F] bg-[#161616] text-white shadow-[0_22px_56px_rgba(0,0,0,0.22)]',
  premium: 'border-black/12 bg-[#f1efe9] text-black',
};

const greenButtonClass =
  'inline-flex items-center justify-center rounded-sm bg-[#8DC63F] px-6 py-4 text-[14px] leading-none font-mono font-bold tracking-[0.12em] text-black normal-case shadow-[0_0_20px_rgba(141,198,63,0.28)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#9ded46] hover:shadow-[0_0_40px_rgba(141,198,63,0.65)]';

const darkButtonClass =
  'inline-flex items-center justify-center rounded-sm bg-black px-6 py-4 text-[12px] leading-none font-mono font-bold tracking-[0.12em] text-white normal-case transition-all duration-200 hover:bg-[#8DC63F] hover:text-black';

export const DesktopPricingV1 = () => {
  return (
    <div className="w-full border-y border-black/5 bg-[#f6f6f3] px-6 py-20 font-sans flex justify-center">
      <div className="w-full max-w-[1020px] flex flex-col">
        <div className="mb-8 flex items-end gap-8">
          <div className="mb-1 shrink-0 text-[14px] font-bold uppercase tracking-[0.2em] text-black/40">
            FORMATS
          </div>
          <div className="mx-4 mb-2 h-px w-full flex-1 bg-black/10" />
          <h2 className="shrink-0 text-right text-5xl font-black uppercase tracking-tighter">
            ТАРИФЫ
          </h2>
        </div>

        <p className="mb-5 max-w-[42rem] text-[13px] leading-[1.55] text-black/68">
          Версия без раскрывашек: вся информация видна сразу. Контраст усилен через разные поверхности, акцент на цене и более плотную структуру списков.
        </p>

        <div className="mx-auto grid w-full max-w-[28rem] grid-cols-1 gap-3 lg:max-w-none lg:grid-cols-3">
          {RESEARCH_PRICING_PLANS.map((plan) => {
            const isHighlight = plan.tone === 'highlight';
            const cardTag = plan.tag ?? '';
            return (
              <article
                key={plan.name}
                className={`flex h-full flex-col rounded-[0.4rem] border p-4 ${planToneClasses[plan.tone]}`}
              >
                <div className="mb-4 flex items-start justify-between gap-3">
                  <div>
                    <h3 className={`text-[18px] font-black uppercase tracking-tight ${isHighlight ? 'text-white' : 'text-black/88'}`}>
                      {plan.name}
                    </h3>
                  </div>
                  <div className={`rounded-sm px-3 py-2 text-[10px] font-black uppercase tracking-[0.16em] ${isHighlight ? 'bg-[#8DC63F] text-black' : 'border border-black/10 bg-white/70 text-black/58'}`}>
                    {cardTag}
                  </div>
                </div>

                <div className="mb-4 flex items-end gap-2">
                  <span className={`text-[40px] md:text-[46px] font-black tracking-[-0.05em] leading-none ${isHighlight ? 'text-white' : 'text-black'}`}>
                    €{plan.price}
                  </span>
                </div>

                <p className={`mb-5 min-h-[3.2rem] border-l-2 pl-3 text-[12px] leading-[1.5] ${isHighlight ? 'border-[#8DC63F] text-white/80' : 'border-[#8DC63F] text-black/70'}`}>
                  {plan.summary}
                </p>

                <div className={`mb-3 text-[10px] font-bold uppercase tracking-[0.18em] ${isHighlight ? 'text-[#8DC63F]' : 'text-[#8DC63F]'}`}>
                  программа
                </div>
                <div className="mb-4 space-y-2">
                  {plan.features.map((feature) => (
                    <div key={feature} className="flex items-start gap-3">
                      <span className={`mt-[0.08rem] shrink-0 text-[12px] font-bold leading-none ${isHighlight ? 'text-[#8DC63F]' : 'text-[#8DC63F]'}`}>
                        ›
                      </span>
                      <span className={`text-[12px] leading-[1.45] font-semibold ${isHighlight ? 'text-white/86' : 'text-black/78'}`}>
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                <div className={`mb-4 border-t pt-4 ${isHighlight ? 'border-white/10' : 'border-black/8'}`}>
                  <div className={`mb-3 text-[10px] font-bold uppercase tracking-[0.18em] ${isHighlight ? 'text-[#8DC63F]' : 'text-[#8DC63F]'}`}>
                    что получаешь
                  </div>
                  <div className="space-y-2">
                    {plan.details.map((item) => (
                      <div key={item} className="flex items-start gap-3">
                        <span className={`mt-[0.08rem] shrink-0 text-[12px] font-bold leading-none ${isHighlight ? 'text-white/52' : 'text-[#8DC63F]'}`}>
                          ›
                        </span>
                        <span className={`text-[12px] leading-[1.45] ${isHighlight ? 'text-white/78' : 'text-black/66'}`}>
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <button
                  type="button"
                  className={`mt-auto h-10 w-full px-4 ${isHighlight ? greenButtonClass : darkButtonClass}`}
                >
                  записаться
                </button>
              </article>
            );
          })}
        </div>
      </div>
    </div>
  );
};
