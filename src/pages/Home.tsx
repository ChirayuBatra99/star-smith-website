import Container from '@/components/layout/Container';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';
import SectionHeader from '@/components/ui/SectionHeader';
import { SEO } from '@/lib/hooks/useSEO';
import { SERVICES } from '@/data/services';
import { PRODUCTS } from '@/data/products';
import { CASE_STUDIES } from '@/data/caseStudies';
import MiniTrend from '@/components/charts/MiniTrend';
import { Link } from 'react-router-dom';

const demoTrend = Array.from({ length: 12 }, (_, i) => ({ x: i, y: 50 + Math.round(Math.sin(i / 2) * 10 + i * 2) }));

export default function Home() {
  return (
    <>
      <SEO title="StarSmith Technologies — Software Services & Products" description="We build scalable software solutions and craft reliable developer-focused products." />

      <section className="gradient-hero">
        <Container className="py-16 sm:py-24 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="h1">Build. Ship. Scale — with StarSmith.</h1>
            <p className="lead mt-4">Engineering-led teams delivering robust software systems and pragmatic AI solutions.</p>
            <div className="mt-6 flex items-center gap-3">
              <Link to="/contact"><Button>Talk to us</Button></Link>
              <Link to="/services"><Button variant="outline">Our Services</Button></Link>
            </div>
          </div>
          <Card className="p-6 lg:ml-auto">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-sm text-zinc-500">Uptime</div>
                <div className="text-3xl font-semibold">99.98%</div>
              </div>
              <div className="w-40"><MiniTrend data={demoTrend} /></div>
            </div>
            <p className="mt-3 text-sm text-zinc-600 dark:text-zinc-400">We practice SRE principles and zero-downtime deploys.</p>
          </Card>
        </Container>
      </section>

      <Container className="py-16">
        <SectionHeader title="What we do" subtitle="Outcome-driven services designed for long-term maintainability." />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
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

      <Container className="py-10">
        <SectionHeader title="Our products" subtitle="Tools we use internally and share with the world." />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {PRODUCTS.map((p) => (
            <Card key={p.id}>
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="h3">{p.name}</h3>
                  <p className="lead mt-2">{p.summary}</p>
                </div>
                {p.metrics?.users && (
                  <div className="text-right">
                    <div className="text-xs text-zinc-500">Users</div>
                    <div className="text-xl font-semibold">{p.metrics.users.toLocaleString('en-IN')}</div>
                  </div>
                )}
              </div>
            </Card>
          ))}
        </div>
      </Container>

      <Container className="py-10">
        <SectionHeader title="Proven impact" subtitle="A peek into the outcomes we've delivered." />
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

      <Container className="py-16">
        <div className="card p-8 text-center">
          <h3 className="h2">Have a project in mind?</h3>
          <p className="lead mt-2">Let's design, build and ship it together.</p>
          <Link to="/contact"><Button className="mt-4">Start a conversation</Button></Link>
        </div>
      </Container>
    </>
  );
}
