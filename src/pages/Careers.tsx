import Container from '@/components/layout/Container';
import Card from '@/components/ui/Card';
import SectionHeader from '@/components/ui/SectionHeader';
import { SEO } from '@/lib/hooks/useSEO';
import Button from '@/components/ui/Button';

const ROLES = [
  { id: 'swe-ii', title: 'Software Engineer II', tags: ['Node/Go', 'React', 'AWS'] },
  { id: 'sre', title: 'Site Reliability Engineer', tags: ['K8s', 'Terraform', 'Observability'] },
  { id: 'pm', title: 'Product Manager', tags: ['Discovery', 'Roadmaps', 'KPIs'] },
];

export default function Careers() {
  return (
    <>
      <SEO title="Careers — StarSmith" />
      <Container className="py-12">
        <SectionHeader title="Join us" subtitle="Small teams, big impact." />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {ROLES.map((r) => (
            <Card key={r.id}>
              <h3 className="h3">{r.title}</h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {r.tags.map((t) => (
                  <span key={t} className="text-xs bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 px-2 py-1 rounded-lg">{t}</span>
                ))}
              </div>
              <Button className="mt-4">Apply</Button>
            </Card>
          ))}
        </div>
      </Container>
    </>
  );
}
