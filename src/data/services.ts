import type { Service } from '@/types';

export const SERVICES: Service[] = [
  {
    id: 'custom-dev',
    name: 'Custom Software Development',
    summary: 'API-first, cloud-native applications built for longevity.',
    features: ['Domain-driven design', 'CI/CD & QA automation', 'Cloud & containerization'],
  },
  {
    id: 'ai-ml',
    name: 'AI/ML Solutions',
    summary: 'From data pipelines to intelligent products with measurable ROI.',
    features: ['MLOps', 'LLM applications', 'Computer vision & NLP'],
  },
  {
    id: 'devops',
    name: 'DevOps & SRE',
    summary: 'Modern infra with zero-downtime releases and observability.',
    features: ['Kubernetes', 'IaC (Terraform)', 'Monitoring & alerting'],
  },
  {
    id: 'ui-ux',
    name: 'Product Design (UI/UX)',
    summary: 'Elegant, accessible interfaces that convert.',
    features: ['Design systems', 'Rapid prototyping', 'Accessibility (WCAG)'],
  },
];
