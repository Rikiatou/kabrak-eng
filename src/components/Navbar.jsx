import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const links = [
  { to: '/', label: 'Accueil' },
  { to: '/about', label: 'À Propos' },
  { to: '/services', label: 'Services' },
  { to: '/projects', label: 'Projets' },
  { to: '/contact', label: 'Contact' },
];

function KabrakLogo({ className }) {
  return (
    <svg viewBox="0 0 120 36" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <rect width="32" height="32" rx="8" fill="#1d4ed8"/>
      <polygon points="19,4 11,18 16,18 13,28 21,14 16,14" fill="white"/>
      <text x="40" y="14" fontFamily="'Syne','Inter',sans-serif" fontWeight="800" fontSize="13" fill="white" letterSpacing="1">KABRAK</text>
      <text x="40" y="29" fontFamily="'Inter',sans-serif" fontWeight="500" fontSize="11" fill="#60a5fa" letterSpacing="2">ENG</text>
    </svg>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => { setOpen(false); }, [pathname]);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 navbar-blur
      ${scrolled ? 'bg-[#050a14]/90 border-b border-blue-900/30 shadow-lg shadow-black/30' : 'bg-transparent'}`}>
      <div className="max-w-6xl mx-auto px-5 flex items-center justify-between h-16">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 group">
          <KabrakLogo className="h-9 w-auto group-hover:scale-105 transition-transform" />
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-7">
          {links.map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              className={`text-sm font-medium transition-colors duration-200
                ${pathname === to ? 'text-blue-400' : 'text-slate-400 hover:text-white'}`}
            >
              {label}
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden md:flex">
          <Link
            to="/contact"
            className="px-4 py-2 text-sm font-semibold rounded-lg bg-blue-600 hover:bg-blue-500 text-white transition-all glow-btn"
          >
            Nous contacter
          </Link>
        </div>

        {/* Mobile burger */}
        <button
          className="md:hidden text-slate-300 hover:text-white p-1"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-[#0a1628]/95 border-b border-blue-900/30 navbar-blur px-5 pb-6 pt-2 space-y-1">
          {links.map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              className={`block py-3 text-sm font-medium border-b border-slate-800
                ${pathname === to ? 'text-blue-400' : 'text-slate-300 hover:text-white'}`}
            >
              {label}
            </Link>
          ))}
          <Link
            to="/contact"
            className="mt-4 block text-center py-3 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm transition-all"
          >
            Nous contacter
          </Link>
        </div>
      )}
    </nav>
  );
}
