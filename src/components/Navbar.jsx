import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useLang } from '../context/LangContext';


export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();
  const { lang, setLang, t } = useLang();
  const links = [
    { to: '/', label: t.nav.home },
    { to: '/about', label: t.nav.about },
    { to: '/services', label: t.nav.services },
    { to: '/projects', label: t.nav.projects },
    { to: '/contact', label: t.nav.contact },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => { setOpen(false); }, [pathname]);
  const light = pathname === '/';

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 navbar-blur
      ${light ? 'bg-white/95 border-b border-slate-200' : scrolled ? 'bg-[#0a0a0a]/90 border-b border-slate-800 shadow-lg shadow-black/30' : 'bg-transparent'}`}>
      <div className="max-w-6xl mx-auto px-5 flex items-center justify-between h-20">
        {/* Logo */}
        <Link to="/" className="flex items-center group">
          <img src="/logo-kabrakeng-trimmed.png" alt="KABRAK ENG" className="h-16 w-auto object-contain" style={{maxWidth:'220px'}} />
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-7">
          {links.map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              className={`text-sm font-medium transition-colors duration-200
                ${pathname === to ? (light ? 'text-blue-700' : 'text-[#c9a227]') : light ? 'text-slate-600 hover:text-slate-900' : 'text-slate-400 hover:text-white'}`}
            >
              {label}
            </Link>
          ))}
        </div>

        {/* Lang switcher + CTA */}
        <div className="hidden md:flex items-center gap-3">
          <button
            onClick={() => setLang(lang === 'fr' ? 'en' : 'fr')}
            className={`px-3 py-1.5 rounded-lg border text-xs font-bold transition-all ${light ? 'border-slate-300 text-slate-600 hover:text-slate-900' : 'border-slate-700 hover:border-[#c9a227] text-slate-400 hover:text-white'}`}
          >
            {lang === 'fr' ? 'EN' : 'FR'}
          </button>
          <Link
            to="/contact"
            className={`px-4 py-2 text-sm font-semibold rounded-lg text-white transition-all ${light ? 'bg-blue-700 hover:bg-blue-800' : 'bg-[#c9a227] hover:bg-[#b8952a] glow-btn'}`}
          >
            {t.nav.cta}
          </Link>
        </div>

        {/* Mobile burger */}
        <button
          className={`md:hidden p-1 ${light ? 'text-slate-700' : 'text-slate-300 hover:text-white'}`}
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-[#1a1a1a]/95 border-b border-slate-800 navbar-blur px-5 pb-6 pt-2 space-y-1">
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
          <div className="flex gap-3 mt-4">
            <button
              onClick={() => setLang(lang === 'fr' ? 'en' : 'fr')}
              className="flex-1 py-3 rounded-lg border border-slate-700 text-slate-300 text-sm font-bold"
            >
              {lang === 'fr' ? '🇬🇧 English' : '🇫🇷 Français'}
            </button>
            <Link
              to="/contact"
              className="flex-1 text-center py-3 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm transition-all"
            >
              {t.nav.cta}
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
