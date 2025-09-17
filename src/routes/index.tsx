import { Routes, Route } from 'react-router-dom';
import Home from '@/pages/Home';
import Services from '@/pages/Services';
import Products from '@/pages/Products';
import CaseStudies from '@/pages/CaseStudies';
import About from '@/pages/About';
import Careers from '@/pages/Careers';
import Contact from '@/pages/Contact';
import Privacy from '@/pages/Privacy';
import NotFound from '@/pages/NotFound';

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/services" element={<Services />} />
      <Route path="/products" element={<Products />} />
      <Route path="/case-studies" element={<CaseStudies />} />
      <Route path="/about" element={<About />} />
      <Route path="/careers" element={<Careers />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/privacy" element={<Privacy />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
