export type Service = {
  id: string;
  name: string;
  summary: string;
  features: string[];
};

export type Product = {
  id: string;
  name: string;
  summary: string;
  metrics?: { users?: number; uptime?: number };
};

export type CaseStudy = {
  id: string;
  client: string;
  title: string;
  excerpt: string;
  tags: string[];
};
