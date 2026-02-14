import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { NAV_LINKS } from '@/config/nav';
import ThemeToggle from '@/components/ui/ThemeToggle';
import logoUrl from '@/assets/logo.svg?url';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 navbar-blur">
      <nav className="container-px max-w-content flex items-center justify-between h-16">
        <Link to="/" className="flex items-center gap-2">
          <img src={logoUrl} alt="StarSmith logo" className="h-7 w-7" />
          <span className="font-semibold">StarSmith</span>
        </Link>

        <ul className="hidden md:flex items-center gap-6">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <NavLink
                to={link.href}
                className={({ isActive }) => `text-sm font-medium hover:text-brand-700 ${isActive ? 'text-brand-700' : 'text-zinc-700 dark:text-zinc-300'}`}
              >
                {/* {link.label} */}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <button onClick={() => setOpen(!open)} className="md:hidden p-2 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800" aria-label="Toggle Menu">
            {/* {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />} */}
          </button>
        </div>
      </nav>

      {open && (
        <div className="md:hidden border-t border-zinc-200 dark:border-zinc-800">
          <ul className="container-px max-w-content py-2 grid gap-1">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <NavLink
                  to={link.href}
                  // onClick={() => setOpen(false)}
                  className={({ isActive }) => `block px-2 py-2 rounded-lg text-sm hover:bg-zinc-100 dark:hover:bg-zinc-800 ${isActive ? 'text-brand-700' : 'text-zinc-700'}`}
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
