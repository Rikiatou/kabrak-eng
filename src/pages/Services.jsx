import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight, Check
} from 'lucide-react';
import { useLang } from '../context/LangContext';

/* ── Custom SVG Icons ────────────────────────────────── */
const CodeIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M7 8L3 12L7 16" />
    <path d="M17 8L21 12L17 16" />
    <path d="M14 4L10 20" />
  </svg>
);

const BrainIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="3" />
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" />
    <path d="M12 6v12" />
    <path d="M6 12h12" />
  </svg>
);

const SmartphoneIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
    <line x1="12" y1="18" x2="12.01" y2="18" />
  </svg>
);

const GlobeIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <path d="M2 12h20" />
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
  </svg>
);

const DatabaseIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <ellipse cx="12" cy="5" rx="9" ry="3" />
    <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
    <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
  </svg>
);

const ShieldIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
  </svg>
);

const ZapIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
  </svg>
);

function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll('.reveal');
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add('visible'); }),
      { threshold: 0.1 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

const ICONS = [CodeIcon, BrainIcon, SmartphoneIcon, GlobeIcon, DatabaseIcon, ShieldIcon];
const COLORS = ['#c9a227', '#8b6914', '#b87333', '#a67c52', '#d4a84b', '#c9a227'];

export default function Services() {
  useReveal();
  const { t } = useLang();
  const s = t.services;
  const services = s.list.map((item, i) => ({ ...item, icon: ICONS[i], color: COLORS[i] }));

  return (
    <main className="pt-24 overflow-x-hidden">

      {/* ── Header ─────────────────────────────────────── */}
      <section className="py-20 grid-bg relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse at 50% 0%, rgba(201,162,39,0.08) 0%, transparent 65%)' }} />
        <div className="max-w-3xl mx-auto px-5 text-center relative z-10">
          <span className="text-[#c9a227] text-xs font-semibold uppercase tracking-widest mb-3 block">{s.label}</span>
          <h1 className="font-display font-black text-3xl sm:text-5xl text-white mb-6">
            {s.title} <span className="gradient-text">{s.titleSpan}</span>
          </h1>
          <p className="text-slate-400 text-base sm:text-lg leading-relaxed">
            {s.sub}
          </p>
        </div>
      </section>

      {/* ── Services grid ──────────────────────────────── */}
      <section className="py-24 max-w-6xl mx-auto px-5">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map(({ icon: Icon, color, title, subtitle, desc, features, badge }) => (
            <div key={title}
              className="reveal card-hover rounded-2xl border border-slate-800 bg-[#1a1a1a]/60 overflow-hidden flex flex-col">
              <div className="p-7 flex-1">
                <div className="flex items-start justify-between mb-5">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center"
                    style={{ background: `${color}15`, border: `1px solid ${color}30` }}>
                    <div className="w-6 h-6" style={{ color }}>
                      <Icon />
                    </div>
                  </div>
                  {badge && (
                    <span className="px-2.5 py-1 rounded-full text-xs font-bold bg-[#c9a227]/20 text-[#c9a227] border border-[#c9a227]/30">
                      {badge}
                    </span>
                  )}
                </div>
                <div className="text-xs font-medium mb-1" style={{ color }}>{subtitle}</div>
                <h3 className="text-white font-bold text-xl mb-3">{title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-5">{desc}</p>
                <ul className="space-y-2">
                  {features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-slate-300">
                      <Check className="w-4 h-4 text-green-400 mt-0.5 shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="px-7 pb-7 pt-4 border-t border-slate-800/60">
                <Link to="/contact"
                  className="flex items-center justify-center gap-1.5 w-full px-4 py-2.5 rounded-xl text-sm font-semibold
                    text-white transition-all group"
                  style={{ background: color }}>
                  {s.quoteBtn}
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Process ────────────────────────────────────── */}
      <section className="py-20 border-y border-slate-800 bg-[#1a1a1a]/30">
        <div className="max-w-6xl mx-auto px-5">
          <div className="text-center mb-14 reveal">
            <span className="text-[#c9a227] text-xs font-semibold uppercase tracking-widest mb-3 block">{s.processLabel}</span>
            <h2 className="font-display font-black text-2xl sm:text-4xl text-white">{s.processTitle}</h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-4">
            {s.process.map(({ num, title, desc }, i) => {
              const stepColor = ['#c9a227','#8b6914','#b87333','#a67c52'][i];
              return (
              <div key={num} className="reveal relative p-6 rounded-2xl border border-slate-800 bg-[#0a0a0a]/70">
                <div className="text-5xl font-black mb-4 font-display" style={{ color: `${stepColor}25` }}>{num}</div>
                <div className="absolute top-5 right-5 w-8 h-8 rounded-full flex items-center justify-center text-white text-xs font-black"
                  style={{ background: stepColor }}>{num}</div>
                <h3 className="text-white font-bold text-base mb-2">{title}</h3>
                <p className="text-slate-400 text-xs leading-relaxed">{desc}</p>
              </div>
            );})}
          </div>
        </div>
      </section>

      {/* ── CTA ─────────────────────────────────────────── */}
      <section className="py-24 max-w-4xl mx-auto px-5 text-center reveal">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#c9a227]/30
          bg-[#c9a227]/10 text-[#c9a227] text-xs font-medium mb-6">
          <div className="w-3.5 h-3.5">
            <ZapIcon />
          </div> {s.ctaBadge}
        </div>
        <h2 className="font-display font-black text-2xl sm:text-3xl text-white mb-4">
          {s.ctaTitle}
        </h2>
        <p className="text-slate-400 text-sm mb-8 max-w-md mx-auto leading-relaxed">
          {s.ctaSub}
        </p>
        <Link to="/contact"
          className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-[#c9a227] hover:bg-[#b8952a]
            text-white font-bold text-sm transition-all glow-btn group">
          {s.ctaBtn}
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </Link>
      </section>

    </main>
  );
}
