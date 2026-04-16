import { Link } from 'react-router-dom';
import { Mail, MapPin, ArrowRight } from 'lucide-react';
import { useLang } from '../context/LangContext';


export default function Footer() {
  const year = new Date().getFullYear();
  const { t, lang } = useLang();
  const phone = '237653561862';
  const waMsg = encodeURIComponent(t.whatsapp);
  return (
    <footer className="bg-[#050a14] border-t border-blue-900/20 pt-16 pb-8">
      <div className="max-w-6xl mx-auto px-5">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="mb-4">
              <img src="/logo-kabrakeng.jpeg" alt="KABRAK Eng" className="h-20 w-auto object-contain rounded-xl" />
            </div>
            <p className="text-slate-400 text-sm leading-relaxed max-w-xs mb-5">
              {t.footer.tagline}
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4">{t.footer.nav}</h4>
            <ul className="space-y-2.5">
              {[
                { to: '/', label: t.nav.home },
                { to: '/about', label: t.nav.about },
                { to: '/services', label: t.nav.services },
                { to: '/projects', label: t.nav.projects },
                { to: '/contact', label: t.nav.contact },
              ].map(({ to, label }) => (
                <li key={to}>
                  <Link to={to} className="text-slate-400 hover:text-blue-400 text-sm flex items-center gap-1 group transition-colors">
                    <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4">{t.footer.contact}</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-slate-400 text-sm">
                <MapPin className="w-4 h-4 text-blue-400 mt-0.5 shrink-0" />
                <span>Cameroun — Afrique Centrale</span>
              </li>
              <li className="flex items-start gap-2 text-slate-400 text-sm">
                <Mail className="w-4 h-4 text-blue-400 mt-0.5 shrink-0" />
                <a href="mailto:contact@kabrakeng.com" className="hover:text-blue-400 transition-colors">
                  contact@kabrakeng.com
                </a>
              </li>
              <li className="flex items-start gap-2 text-slate-400 text-sm">
                <a href={`https://wa.me/${phone}?text=${waMsg}`} target="_blank" rel="noopener noreferrer"
                  className="hover:text-green-400 transition-colors flex items-center gap-1.5">
                  <svg viewBox="0 0 24 24" className="w-4 h-4 fill-green-400 shrink-0">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  +237 653 561 862
                </a>
              </li>
            </ul>
            <Link
              to="/contact"
              className="mt-5 inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-600/15 border border-blue-500/30 text-blue-400 text-sm font-medium hover:bg-blue-600/25 transition-all"
            >
              {t.footer.startProject} <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-slate-800 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500">
          <span>© {year} KABRAK Engineering. {t.footer.rights}</span>
          <span className="flex items-center gap-1">
            {t.footer.builtIn} <span className="text-blue-400 font-medium">Cameroun</span> 🇨�
          </span>
        </div>
      </div>
    </footer>
  );
}
