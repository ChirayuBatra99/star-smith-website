import type { Product } from '@/types';

export const PRODUCTS: Product[] = [
  {
    id: 'pulse',
    name: 'StarSmith Pulse',
    summary: 'Lightweight analytics and feature flags for SaaS teams.',
    metrics: { users: 4200, uptime: 99.98 },
  },
  {
    id: 'forge',
    name: 'StarSmith Forge',
    summary: 'Internal developer platform for spinning up microservices fast.',
    metrics: { users: 980, uptime: 99.95 },
  },
];
