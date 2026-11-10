import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useLang } from '../context/LangContext';

const titles = {
  fr: { '/about': 'À propos', '/services': 'Logiciels sur mesure', '/projects': 'Nos logiciels', '/contact': 'Contact' },
  en: { '/about': 'About', '/services': 'Custom software', '/projects': 'Our software', '/contact': 'Contact' },
};

export default function PageMeta() {
  const { pathname } = useLocation();
  const { lang } = useLang();

  useEffect(() => {
    if (!PageMeta.home) PageMeta.home = document.title;
    const page = (titles[lang] || titles.fr)[pathname];
    document.title = page ? `${page} — KABRAK Eng` : PageMeta.home;
    const canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) canonical.href = `https://kabrakeng.com${pathname === '/' ? '/' : pathname}`;
  }, [pathname, lang]);

  return null;
}
