import Container from '@/components/layout/Container';
import Card from '@/components/ui/Card';
import SectionHeader from '@/components/ui/SectionHeader';
import { SEO } from '@/lib/hooks/useSEO';
import { CASE_STUDIES } from '@/data/caseStudies';

export default function CaseStudies() {
  return (
    <>
      <SEO title="Case Studies — StarSmith" />
      <Container className="py-12">
        <SectionHeader title="Case Studies" subtitle="Outcomes over outputs." />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {CASE_STUDIES.map((c) => (
            <Card key={c.id}>
              <div className="text-xs uppercase tracking-wide text-zinc-500">{c.client}</div>
              <h3 className="h3 mt-1">{c.title}</h3>
              <p className="lead mt-2">{c.excerpt}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {c.tags.map((t) => (
                  <span key={t} className="text-xs bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 px-2 py-1 rounded-lg">{t}</span>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </>
  );
}
