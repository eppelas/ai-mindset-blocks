export interface ResearchSpeaker {
  name: string;
  role: string;
  description: string;
  image: string;
}

export interface ResearchCase {
  id: string;
  title: string;
  author: string;
  role: string;
  summary: string;
  description: string;
  task: string;
  solution: string;
  tools: string[];
  result: string;
  filters: string[];
  preview: 'coach' | 'vision' | 'voice' | 'workflow' | 'research' | 'dashboard' | 'content' | 'agent';
}

export interface ResearchPricingPlan {
  name: string;
  price: string;
  tag?: string;
  tone: 'base' | 'highlight' | 'premium';
  summary: string;
  features: string[];
  details: string[];
}

const speakerImage = (filename: string) => `${import.meta.env.BASE_URL}speakers/${filename}`;

export const RESEARCH_SPEAKERS: ResearchSpeaker[] = [
  {
    name: 'Александр Поваляев',
    role: 'Основатель AI Mindset, стратег',
    description:
      'Основатель AI Mindset, стратег и эксперт по AI-интеграциям. Помогает увидеть большую картину и встроить AI в жизнь и работу осмысленно.',
    image: speakerImage('alexander-povalyaev.jpg'),
  },
  {
    name: 'Сергей Хабаров',
    role: 'Системный архитектор',
    description:
      'Системный архитектор на стыке AI, образования и бизнес-процессов. Ведёт Context Engineering: как структурировать знания, чтобы AI работал с ними, а не терялся в хаосе.',
    image: speakerImage('sergey-khabarov.jpg'),
  },
  {
    name: 'Степан Гершуни',
    role: 'Технологический стратег',
    description:
      'Founder, инвестор и исследователь агентных систем. На лаборатории ведёт advanced-практику про системное мышление и новые AI-операционные модели.',
    image: speakerImage('stepan-gershuni.jpg'),
  },
  {
    name: 'Алексей Иванов',
    role: 'Executive-коуч',
    description:
      'Executive-коуч для фаундеров и IT-лидеров. Ведёт advanced-трек AI-coaching и помогает превращать AI в рабочую поддержку для решений и рефлексии.',
    image: speakerImage('alexey-ivanov.jpg'),
  },
  {
    name: 'Серёжа Рис',
    role: 'AI-евангелист, ex Yandex',
    description:
      'AI-евангелист, builder и фаундер в сообществе vibecod3rs. Ведёт advanced-трек vibe-coding и показывает, как быстро собирать продукты и прототипы.',
    image: speakerImage('serezha-ris.jpg'),
  },
  {
    name: 'Анна Ставенски',
    role: 'Продуктовый архитектор',
    description:
      'Продуктовый архитектор и визуальный сторителлер. Помогает собрать изученные инструменты в цельную систему и довести идеи до сильной формы.',
    image: speakerImage('anka-stavenski.jpg'),
  },
  {
    name: 'Анна Лозицкая',
    role: 'Фаундер embraceme.app',
    description:
      'Фаундер embraceme.app. Исследует, как технологии помогают основателям, и ведёт трек Mind Engineering: AI для рефлексии, ритуалов и трекинга целей.',
    image: speakerImage('anna-lozitskaya.jpg'),
  },
];

export const RESEARCH_CASE_FILTERS = [
  { id: 'all', label: 'все' },
  { id: 'non-tech', label: 'нетехнический' },
  { id: 'manager', label: 'менеджер' },
  { id: 'creative', label: 'креатор' },
  { id: 'educator', label: 'преподаватель' },
  { id: 'developer', label: 'разработчик' },
];

export const RESEARCH_CASES: ResearchCase[] = [
  {
    id: 'ai-coaching',
    title: 'AI Coaching',
    author: 'Анна Л.',
    role: 'Executive-коуч',
    summary: 'Персональный AI-коуч для решений, рефлексии и разбора сложных ситуаций.',
    description:
      'Не просто чат с промптом, а персональная система поддержки с контекстом человека, историей сессий и понятным ритуалом использования каждую неделю.',
    task: 'Собрать безопасную систему, которая помогает человеку думать глубже, а не только генерирует ответы.',
    solution: 'Claude + Obsidian + структурированный журнал сессий, шаблоны разборов и короткие coaching-петли.',
    tools: ['Claude', 'Obsidian', 'Notion'],
    result: 'Минус 35% хаоса в задачах и больше регулярности в принятии решений.',
    filters: ['non-tech'],
    preview: 'coach',
  },
  {
    id: 'ai-vision',
    title: 'AI Vision',
    author: 'Виктория М.',
    role: 'Арт-директор',
    summary: 'Категоризация визуальных архивов и поиск нужных образов без ручной сортировки.',
    description:
      'Кейс про визуальную библиотеку, где AI не просто распознаёт картинки, а помогает строить осмысленную структуру коллекций, метафор и референсов.',
    task: 'Разобрать большой архив изображений и быстро находить материалы по смыслу, а не по папкам.',
    solution: 'Vision-модель, тематические теги, короткие описания и интерфейс просмотра с полезными категориями.',
    tools: ['GPT Vision', 'Claude', 'Airtable'],
    result: 'Сортировка и навигация стали в 3 раза быстрее.',
    filters: ['creative', 'non-tech'],
    preview: 'vision',
  },
  {
    id: 'ai-learning',
    title: 'AI Voice Tutor',
    author: 'Ирина С.',
    role: 'Преподаватель',
    summary: 'Голосовой партнёр для практики языка и уверенной устной речи.',
    description:
      'Не учебный бот, а живой AI-собеседник: задаёт темп, адаптирует сложность, даёт обратную связь и помогает не выпадать из практики.',
    task: 'Сделать формат обучения, в который легко возвращаться каждый день без дополнительной подготовки.',
    solution: 'Речевая модель, сценарии диалогов, короткие голосовые сессии и заметки по итогам разговора.',
    tools: ['GPT-4', 'ElevenLabs', 'Whisper'],
    result: 'Регулярность практики выросла примерно на 40%.',
    filters: ['educator', 'non-tech'],
    preview: 'voice',
  },
  {
    id: 'ai-summary',
    title: 'AI Meeting Summary',
    author: 'Михаил К.',
    role: 'Product Manager',
    summary: 'Автосуммаризация встреч с action items, решениями и статусами команды.',
    description:
      'Кейс для тех, кто живёт в созвонах. AI превращает разговор в структуру: решения, задачи, ответственные, контекст для следующего шага.',
    task: 'Убрать ручную рутину после встреч и снизить потери контекста между людьми.',
    solution: 'Транскрипт, summary-слой, выделение решений и экспорт в рабочие системы команды.',
    tools: ['Whisper', 'Gemini', 'Notion'],
    result: 'Минус 60% ручной пост-обработки после встреч.',
    filters: ['manager'],
    preview: 'workflow',
  },
  {
    id: 'ai-knowledge',
    title: 'AI Knowledge Layer',
    author: 'Елена В.',
    role: 'Аналитик',
    summary: 'Чат с базой знаний команды поверх заметок, документов и внутренних материалов.',
    description:
      'Это уже не поиск по файлам, а отдельный слой доступа к знаниям: можно быстро спросить, уточнить, собрать выжимку и вернуть человека к источнику.',
    task: 'Сделать так, чтобы полезные знания не терялись в заметках, чатах и папках.',
    solution: 'RAG-слой над заметками и документацией с понятными ответами и ссылками на источник.',
    tools: ['Obsidian', 'MCP', 'Claude API'],
    result: 'Поиск ответов стал в 10 раз быстрее.',
    filters: ['developer'],
    preview: 'research',
  },
  {
    id: 'ai-project',
    title: 'AI PM Assistant',
    author: 'Дмитрий О.',
    role: 'Project Manager',
    summary: 'PM-ассистент с автостатусами, недельными брифингами и обзорами рисков.',
    description:
      'Кейс про проектную прозрачность: AI собирает сигналы из нескольких систем и превращает их в понятный управленческий слой.',
    task: 'Понимать статус проекта без ручного обхода всех таблиц, чатов и трекеров.',
    solution: 'Интеграции с трекерами и заметками, сводка рисков, weekly brief и обновления статусов.',
    tools: ['Linear', 'Notion', 'n8n'],
    result: 'Предсказуемость сроков выросла на 25%.',
    filters: ['manager', 'non-tech'],
    preview: 'dashboard',
  },
  {
    id: 'ai-automation',
    title: 'AI Workflow Automation',
    author: 'Олег Т.',
    role: 'Operations Lead',
    summary: 'Автоматизация многошаговых процессов: от входящего сигнала до CRM и уведомлений.',
    description:
      'Здесь AI встроен в бизнес-процесс: классифицирует, выбирает ветку, дополняет контекст и запускает следующие шаги без ручного оркестрования.',
    task: 'Снять регулярную операционную нагрузку и сократить количество ручных переключений.',
    solution: 'n8n/Make-сценарии с AI-классификацией, развилками и отправкой структурированных результатов.',
    tools: ['n8n', 'Make', 'Claude'],
    result: 'Экономия около 12 часов ручной работы в неделю.',
    filters: ['developer'],
    preview: 'agent',
  },
  {
    id: 'ai-content',
    title: 'AI Content System',
    author: 'Мария Д.',
    role: 'Копирайтер',
    summary: 'Контент-конвейер: идеи, сценарии, тексты и адаптация под разные каналы.',
    description:
      'Не генерация одного поста, а связанная система производства контента, где одна мысль превращается в несколько форматов с разной глубиной.',
    task: 'Собирать контент быстрее и не терять качество при масштабировании на несколько каналов.',
    solution: 'Контент-фреймворк, генерация вариантов, визуальные референсы и правила адаптации под формат.',
    tools: ['Claude', 'ChatGPT', 'Midjourney'],
    result: 'Скорость публикаций выросла в 3 раза.',
    filters: ['creative', 'non-tech'],
    preview: 'content',
  },
];

export const RESEARCH_PRICING_PLANS: ResearchPricingPlan[] = [
  {
    name: 'MAIN LAB',
    price: '590',
    tag: 'БАЗА',
    tone: 'base',
    summary: 'Базовый формат для самостоятельной работы и полного прохождения основного потока.',
    features: [
      'четыре воркшопа, четыре коворкинга, четыре Q&A сессии и дополнительные гостевые лекции',
      'закрытый чат участников',
      'полный доступ к программе main lab',
    ],
    details: [
      'формат: 4 недели, online',
      'подходит non-tech и advanced users',
      'доступ к библиотеке материалов',
      'возврат после первой недели — без вопросов',
    ],
  },
  {
    name: 'ADVANCED',
    price: '890',
    tag: '+4 занятия',
    tone: 'highlight',
    summary: 'Для тех, кто строит более полный AI-стек и хочет углубление в личные кейсы.',
    features: [
      'всё из MAIN LAB',
      'дополнительный чат advanced участников',
      'еженедельные закрытые разборы',
    ],
    details: [
      'AI coaching · AI agents · vibe-coding · AI creative',
      'углубление в личные кейсы и доменные задачи',
      'приоритетная обратная связь',
      'лучший выбор для системного внедрения',
    ],
  },
  {
    name: 'PREMIUM',
    price: '1490',
    tag: 'ПЕРСОНАЛЬНОЕ СОПРОВОЖДЕНИЕ',
    tone: 'premium',
    summary: 'Индивидуальный маршрут внедрения под ваш контекст, задачи и уровень зрелости.',
    features: [
      'всё из ADVANCED',
      'аудит процессов',
      'приоритетная поддержка',
    ],
    details: [
      'персональная стратегия под ваш контекст',
      'две сессии 1:1 со стратегами',
      'персональный канал и точечная поддержка',
      'фокус на реальные бизнес-задачи',
    ],
  },
];
