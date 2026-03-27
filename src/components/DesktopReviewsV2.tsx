const REVIEWS_DATA = [
  {
    id: '01',
    name: 'Дмитрий Твердохлебов',
    title: 'ex-директор ИИ МТС, ex-CPO AI VK',
    text: 'снова иду учиться к упоротым на практике чувакам из AI Mindset. Все, как мы любим: 20% теории, 80% практики.',
  },
  {
    id: '02',
    name: 'Дмитрий Лаухин',
    title: 'евангелист Obsidian, Second Brain',
    text: 'Редко что-то советую от себя, но здесь тот самый случай. AI вплетается в жизнь не как магический инструмент, а как часть системы мышления.',
  },
  {
    id: '03',
    name: 'Оля Еремина',
    title: 'Предприниматель',
    text: 'использовать ИИ — это не писать промпт. Использовать ИИ — это самому создавать контекст. За то, что они говорят на понятном языке.',
  },
  {
    id: '04',
    name: 'Олег Цербаев',
    title: 'историк, Apple / Avito / Deutsche Bank',
    text: 'Ребята нашли уникальную нишу, стиль и интонацию, которые предельно точно попадают в нерв сегодняшнего и завтрашнего дня.',
  },
  {
    id: '05',
    name: 'Вероника Долгих',
    title: 'COO, SETTERS Agency',
    text: 'я офигела, как клод четко прописал мне схему планирования, чтобы не выпадать из режима и избегать выгораний.',
  },
  {
    id: '06',
    name: 'Александра Гусева',
    title: 'L&D, Avito',
    text: 'Произошел shift. Я начала думать AI-first: где я могу ускориться за счет того, что AI начнет помогать.',
  },
];

export const DesktopReviewsV2 = () => {
  return (
    <div className="w-full bg-[#f3f3f5] py-20 px-6 font-sans">
      <div className="mx-auto max-w-[1180px]">
        <div className="mb-10 flex items-end gap-8">
          <div className="mb-1 shrink-0 text-[14px] font-bold uppercase tracking-[0.2em] text-black/40">
            FEEDBACK LOG
          </div>
          <div className="mx-4 mb-2 h-px w-full flex-1 bg-black/10" />
          <h2 className="shrink-0 text-right text-5xl font-black uppercase tracking-tighter">
            ОТЗЫВЫ
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-px border border-black/8 bg-black/8 md:grid-cols-2 xl:grid-cols-3">
          {REVIEWS_DATA.map((review) => (
            <article key={review.id} className="flex min-h-[17rem] flex-col bg-[#f9f9f7] p-5">
              <div className="mb-4 flex items-center justify-between gap-4">
                <div className="font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-black/32">
                  id::{review.id}
                </div>
                <div className="flex gap-1">
                  {[0, 1, 2].map((dot) => (
                    <span key={dot} className="h-1 w-1 bg-[#8DC63F]" />
                  ))}
                </div>
              </div>

              <p className="mb-6 text-[14px] leading-[1.65] text-black/82">
                {review.text}
              </p>

              <div className="mt-auto border-t border-black/8 pt-4">
                <div className="text-[12px] font-black uppercase tracking-tight text-black">
                  {review.name}
                </div>
                <div className="mt-1 font-mono text-[9px] font-bold uppercase tracking-[0.16em] text-black/38">
                  {review.title}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};
