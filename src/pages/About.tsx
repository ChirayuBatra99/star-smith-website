import Container from '@/components/layout/Container';
import SectionHeader from '@/components/ui/SectionHeader';
import { SEO } from '@/lib/hooks/useSEO';

export default function About() {
  return (
    <>
      <SEO title="About — StarSmith" />
      <Container className="py-12">
        <SectionHeader title="About StarSmith" subtitle="Engineering-first. Customer-obsessed." />
        <div className="prose prose-zinc dark:prose-invert max-w-none">
          <p>
            StarSmith Technologies builds dependable software and developer products. Our teams value clarity, code quality, and sustainable velocity.
          </p>
          <h3>Values</h3>
          <ul>
            <li>Craftsmanship over shortcuts</li>
            <li>Autonomy with accountability</li>
            <li>Documentation & observability by default</li>
          </ul>
        </div>
      </Container>
    </>
  );
}
