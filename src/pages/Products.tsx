import Container from '@/components/layout/Container';
import Card from '@/components/ui/Card';
import SectionHeader from '@/components/ui/SectionHeader';
import { SEO } from '@/lib/hooks/useSEO';
import { PRODUCTS } from '@/data/products';
import Button from '@/components/ui/Button';

export default function Products() {
  return (
    <>
      <SEO title="Products — StarSmith" description="Explore StarSmith Pulse, Forge and more." />
      <Container className="py-12">
        <SectionHeader title="Products" subtitle="Built by developers, for developers." />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {PRODUCTS.map((p) => (
            <Card key={p.id}>
              <h3 className="h3">{p.name}</h3>
              <p className="lead mt-2">{p.summary}</p>
              <div className="mt-4 flex gap-3">
                <Button>View details</Button>
                <Button variant="outline">Get a demo</Button>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </>
  );
}
