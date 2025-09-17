import Container from '@/components/layout/Container';
import Card from '@/components/ui/Card';
import SectionHeader from '@/components/ui/SectionHeader';
import { SEO } from '@/lib/hooks/useSEO';
import { SERVICES } from '@/data/services';

export default function Services() {
  return (
    <>
      <SEO title="Services — StarSmith" description="Custom software, AI/ML, DevOps/SRE, and Product Design services." />
      <Container className="py-12">
        <SectionHeader title="Services" subtitle="Battle-tested practices, measurable outcomes." />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((s) => (
            <Card key={s.id}>
              <h3 className="h3">{s.name}</h3>
              <p className="lead mt-2">{s.summary}</p>
              <ul className="mt-4 space-y-1 text-sm text-zinc-600 dark:text-zinc-300">
                {s.features.map((f) => <li key={f}>• {f}</li>)}
              </ul>
            </Card>
          ))}
        </div>
      </Container>
    </>
  );
}
