import Container from '@/components/layout/Container';
import Button from '@/components/ui/Button';
import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <Container className="py-24 text-center">
      <div className="text-8xl font-bold">404</div>
      <p className="lead mt-2">The page you’re looking for doesn’t exist.</p>
      <Link to="/"><Button className="mt-6">Go home</Button></Link>
    </Container>
  );
}
