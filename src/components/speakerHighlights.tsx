import type { ReactNode } from 'react';

const HIGHLIGHT_MAP: Record<string, string[]> = {
  'Александр Поваляев': ['Основатель AI Mindset', 'стратег', 'эксперт по AI-интеграциям'],
  'Сергей Хабаров': ['Системный архитектор', 'Context Engineering', 'AI, образования и бизнес-процессов'],
  'Степан Гершуни': ['Founder', 'инвестор', 'исследователь агентных систем'],
  'Алексей Иванов': ['Executive-коуч', 'фаундеров и IT-лидеров', 'AI-coaching'],
  'Серёжа Рис': ['AI-евангелист', 'builder', 'фаундер', 'vibe-coding'],
  'Анна Ставенски': ['Продуктовый архитектор', 'визуальный сторителлер', 'цельную систему'],
  'Анна Лозицкая': ['Фаундер embraceme.app', 'Mind Engineering', 'рефлексии и трекинга целей'],
};

export function renderSpeakerDescription(name: string, description: string): ReactNode {
  const highlights = HIGHLIGHT_MAP[name];
  if (!highlights?.length) return description;

  const escaped = highlights
    .slice()
    .sort((left, right) => right.length - left.length)
    .map((item) => item.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'));

  const matcher = new RegExp(`(${escaped.join('|')})`, 'g');
  const parts = description.split(matcher);

  return parts.map((part, index) =>
    highlights.includes(part) ? <strong key={`${name}-${index}`} className="font-bold text-black/74">{part}</strong> : part,
  );
}
