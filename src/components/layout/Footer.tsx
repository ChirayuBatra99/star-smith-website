import Container from './Container';
import { Link } from 'react-router-dom';
import { SITE } from '@/config/site';

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-zinc-200/70 dark:border-zinc-800">
      <Container className="py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        <div>
          <h4 className="h3 mb-2">{SITE.name}</h4>
          <p className="lead">{SITE.tagline}</p>
        </div>
        <div>
          <h5 className="font-semibold mb-3">Company</h5>
          <ul className="space-y-2 text-sm">
            <li><Link className="link" to="/about">About</Link></li>
            <li><Link className="link" to="/careers">Careers</Link></li>
            <li><Link className="link" to="/case-studies">Case Studies</Link></li>
          </ul>
        </div>
        <div>
          <h5 className="font-semibold mb-3">Legal</h5>
          <ul className="space-y-2 text-sm">
            <li><Link className="link" to="/privacy">Privacy</Link></li>
          </ul>
        </div>
        <div>
          <h5 className="font-semibold mb-3">Contact</h5>
          <ul className="space-y-2 text-sm">
            <li><a className="link" href={`mailto:${SITE.email}`}>{SITE.email}</a></li>
            <li><a className="link" href={`tel:${SITE.phone}`}>{SITE.phone}</a></li>
            <li className="text-sm text-zinc-600 dark:text-zinc-400">{SITE.address}</li>
          </ul>
        </div>
      </Container>
      <div className="py-4 border-t border-zinc-200/70 dark:border-zinc-800 text-center text-xs text-zinc-500">
        © {new Date().getFullYear()} {SITE.name}. All rights reserved.
      </div>
    </footer>
  );
}
