import Container from '@/components/layout/Container';
import { SEO } from '@/lib/hooks/useSEO';

export default function Privacy() {
  return (
    <>
      <SEO title="Privacy — StarSmith" />
      <Container className="py-12 prose prose-zinc dark:prose-invert max-w-none">
        <h2>Privacy Policy</h2>
        <p>We respect your privacy. This site uses minimal cookies and no unnecessary tracking by default.</p>
        <h3>Data Collection</h3>
        <p>Contact form submissions are used solely to respond to your inquiry.</p>
      </Container>
    </>
  );
}
