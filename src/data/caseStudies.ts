import type { CaseStudy } from '@/types';

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'fintech-scale',
    client: 'FinEdge',
    title: 'Scaling payments by 10x with event-driven architecture',
    excerpt: 'We modernized a monolith to an event-driven system reducing latency by 60%.',
    tags: ['Kafka', 'Kubernetes', 'Observability'],
  },
  {
    id: 'retail-ml',
    client: 'ShopLite',
    title: 'Personalization engine increased AOV by 23%',
    excerpt: 'A real-time recommendation engine powered by feature store + LLM.',
    tags: ['Feature store', 'NLP', 'Realtime'],
  },
];
