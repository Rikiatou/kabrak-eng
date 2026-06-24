import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useLang } from '../context/LangContext';
import {
  ArrowRight, CheckCircle,
  Users, Briefcase, Star, ChevronRight,
  Rocket
} from 'lucide-react';

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

const GlobeIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <path d="M2 12h20" />
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
  </svg>
);

const TrendingIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
    <polyline points="17 6 23 6 23 12" />
  </svg>
);

const ZapIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
  </svg>
);

const ShieldIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
  </svg>
);

/* ── Scroll reveal hook ─────────────────────────────── */
function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll('.reveal');
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add('visible'); }),
      { threshold: 0.12 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

/* ── Hero background: subtle aurora orbs (Stripe/Linear style) */
function HeroAurora() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="aurora-orb aurora-1"
        style={{ width: '500px', height: '500px', top: '-10%', left: '15%', background: 'rgba(201,162,39,0.08)' }} />
      <div className="aurora-orb aurora-2"
        style={{ width: '400px', height: '400px', top: '30%', right: '10%', background: 'rgba(184,115,51,0.06)' }} />
      <div className="aurora-orb aurora-3"
        style={{ width: '350px', height: '350px', bottom: '-5%', left: '40%', background: 'rgba(139,105,20,0.05)' }} />
    </div>
  );
}

/* ─────────────────────────────────────────────────── */
export default function Home() {
  useReveal();
  const { t } = useLang();
  const h = t.home;

  return (
    <main className="overflow-x-hidden">

      {/* ══ HERO ══════════════════════════════════════════ */}
      <section className="relative min-h-screen flex items-center justify-center grid-bg overflow-hidden">
        <HeroAurora />

        {/* Radial glow behind text */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
          w-[280px] h-[280px] sm:w-[600px] sm:h-[600px] rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(201,162,39,0.08) 0%, transparent 70%)' }}
        />

        <div className="relative z-10 text-center px-4 sm:px-5 pt-16 sm:pt-20 pb-12 sm:pb-16 max-w-4xl mx-auto">
          {/* Badge */}
          <h1 className="font-display font-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-white leading-tight mb-4 sm:mb-6 fade-in-up"
            style={{ animationDelay: '0.1s' }}>
            {h.heroTitle1}<br />
            <span className="shimmer-text">{h.heroTitle2}</span> {h.heroTitle3}<br />
            <span className="gradient-text">{h.heroTitle4}</span>
          </h1>

          <p className="text-slate-400 text-sm sm:text-base md:text-lg max-w-2xl mx-auto mb-6 sm:mb-10 leading-relaxed fade-in-up"
            style={{ animationDelay: '0.25s' }}>
            {h.heroSub}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 fade-in-up"
            style={{ animationDelay: '0.4s' }}>
            <Link
              to="/services"
              className="group px-5 sm:px-7 py-3 sm:py-3.5 rounded-xl bg-[#c9a227] hover:bg-[#b8952a] text-white font-semibold text-xs sm:text-sm
                flex items-center gap-2 transition-all glow-btn"
            >
              <Rocket className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              {h.heroBtn1}
              <ChevronRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/contact"
              className="px-5 sm:px-7 py-3 sm:py-3.5 rounded-xl border border-slate-700 hover:border-[#c9a227]/50
                text-slate-300 hover:text-white font-semibold text-xs sm:text-sm flex items-center gap-2 transition-all"
            >
              {h.heroBtn2}
            </Link>
          </div>

          {/* Trust pills */}
          <div className="mt-8 sm:mt-14 flex flex-wrap justify-center gap-2 sm:gap-4 text-[10px] sm:text-xs text-slate-400 fade-in-up"
            style={{ animationDelay: '0.55s' }}>
            {h.trustPills.map((pill) => (
              <span key={t} className="flex items-center gap-1 sm:gap-1.5">
                <CheckCircle className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#c9a227]" /> {pill}
              </span>
            ))}
          </div>
        </div>

        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
          style={{ background: 'linear-gradient(to bottom, transparent, #050a14)' }} />
      </section>

      {/* ══ SERVICES ══════════════════════════════════════ */}
      <section className="py-16 sm:py-24 max-w-6xl mx-auto px-4 sm:px-5">
        <div className="text-center mb-10 sm:mb-14 reveal">
          <span className="text-[#c9a227] text-[10px] sm:text-xs font-semibold uppercase tracking-widest mb-2 sm:mb-3 block">{h.servicesLabel}</span>
          <h2 className="font-display font-black text-xl sm:text-2xl md:text-4xl text-white mb-3 sm:mb-4">{h.servicesTitle}</h2>
          <p className="text-slate-400 max-w-xl mx-auto text-xs sm:text-sm leading-relaxed">
            {h.servicesSub}
          </p>
        </div>

        <div className="grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-3">
          {[
            { icon: CodeIcon, color: '#c9a227', ...h.services[0] },
            { icon: BrainIcon, color: '#8b6914', ...h.services[1] },
            { icon: GlobeIcon, color: '#b87333', ...h.services[2] },
          ].map(({ icon: Icon, color, title, sub, desc }) => (
            <div key={title}
              className="card-hover rounded-2xl p-5 sm:p-7 border border-slate-800 bg-[#1a1a1a]/60 group cursor-pointer">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center mb-3 sm:mb-5"
                style={{ background: `${color}18`, border: `1px solid ${color}35` }}>
                <div className="w-5 h-5 sm:w-6 sm:h-6" style={{ color }}>
                  <Icon />
                </div>
              </div>
              <div className="text-[10px] sm:text-xs font-medium mb-1" style={{ color }}>{sub}</div>
              <h3 className="text-white font-bold text-base sm:text-lg mb-2 sm:mb-3">{title}</h3>
              <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-10 reveal">
          <Link to="/services"
            className="inline-flex items-center gap-2 text-[#c9a227] hover:text-[#b8952a] text-sm font-medium transition-colors group">
            {h.servicesLink}
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>

      {/* ══ IMPACT STATS ══════════════════════════════════ */}
      <section className="py-12 sm:py-20 border-y border-slate-800"
        style={{ background: 'linear-gradient(135deg, #1a1a1a 0%, #0a0a0a 50%, #1a1a1a 100%)' }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-5">
          <div className="text-center mb-8 sm:mb-12 reveal">
            <span className="text-[#c9a227] text-[10px] sm:text-xs font-semibold uppercase tracking-widest mb-2 sm:mb-3 block">{h.impactLabel}</span>
            <h2 className="font-display font-black text-xl sm:text-2xl md:text-4xl text-white mb-3 sm:mb-4">
              {h.impactTitle1}<br />
              <span className="gradient-text">{h.impactTitle2}</span>
            </h2>
            <p className="text-slate-400 text-xs sm:text-sm max-w-lg mx-auto">
              {h.impactSub}
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-6 mb-8 sm:mb-14">
            {[
              { ...h.stats[0], icon: Briefcase, color: '#c9a227' },
              { ...h.stats[1], icon: Users, color: '#8b6914' },
              { ...h.stats[2], icon: Rocket, color: '#b87333' },
              { ...h.stats[3], icon: GlobeIcon, color: '#a67c52' },
            ].map(({ num, label, icon: Icon, color }) => (
              <div key={label} className="reveal text-center p-3 sm:p-6 rounded-2xl border border-slate-800 bg-[#1a1a1a]/40">
                <div className="w-4 h-4 sm:w-6 sm:h-6 mx-auto mb-2 sm:mb-3" style={{ color }}>
                  <Icon />
                </div>
                <div className="font-display font-black text-2xl sm:text-4xl text-white mb-1">{num}</div>
                <div className="text-slate-400 text-[10px] sm:text-xs">{label}</div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-5">
            {[
              { icon: TrendingIcon, ...h.pillars[0] },
              { icon: ZapIcon, ...h.pillars[1] },
              { icon: ShieldIcon, ...h.pillars[2] },
            ].map(({ icon: Icon, title, desc }) => (
              <div key={title} className="reveal flex gap-3 sm:gap-4 p-3 sm:p-5 rounded-xl border border-slate-800 bg-[#1a1a1a]/30">
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-[#c9a227]/15 border border-[#c9a227]/25 flex items-center justify-center shrink-0">
                  <div className="w-4 h-4 sm:w-5 sm:h-5 text-[#c9a227]">
                    <Icon />
                  </div>
                </div>
                <div>
                  <div className="text-white font-semibold text-xs sm:text-sm mb-1">{title}</div>
                  <div className="text-slate-400 text-[10px] sm:text-xs leading-relaxed">{desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ FEATURED PROJECT ══════════════════════════════ */}
      <section className="py-16 sm:py-24 max-w-6xl mx-auto px-4 sm:px-5">
        <div className="text-center mb-10 sm:mb-14 reveal">
          <span className="text-[#c9a227] text-[10px] sm:text-xs font-semibold uppercase tracking-widest mb-2 sm:mb-3 block">{h.featuredLabel}</span>
          <h2 className="font-display font-black text-xl sm:text-2xl md:text-4xl text-white mb-3 sm:mb-4">{h.featuredTitle}</h2>
        </div>

        <div className="reveal rounded-2xl border border-amber-600/30 overflow-hidden"
          style={{ background: 'linear-gradient(135deg, #1a1a1a 0%, #252525 100%)' }}>
          <div className="grid md:grid-cols-2 gap-0">
            {/* Info */}
            <div className="p-5 sm:p-10 flex flex-col justify-center">
              <div className="inline-flex items-center gap-2 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-400 text-[10px] sm:text-xs font-medium mb-4 sm:mb-6 w-fit">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400 pulse-dot" />
                Produit Phare
              </div>
              <h3 className="font-display font-black text-2xl sm:text-3xl text-white mb-2 sm:mb-3">KABRAK Store</h3>
              <p className="text-slate-400 text-xs sm:text-sm leading-relaxed mb-4 sm:mb-6">
                Logiciel de point de vente multi-boutiques avec gestion des stocks, facturation, analytics et support multi-devises. Solution complète pour le commerce de détail en Afrique.
              </p>
              <div className="flex flex-wrap gap-2 sm:gap-3">
                <a
                  href="https://kabrak-store.kabrakeng.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-white
                    bg-amber-600 hover:bg-amber-500 px-4 sm:px-5 py-2 sm:py-2.5 rounded-xl transition-all glow-btn group">
                  Essai Gratuit
                  <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform" />
                </a>
                <Link to="/projects"
                  className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-slate-300
                    hover:text-white border border-slate-700 hover:border-amber-500/50
                    px-4 sm:px-5 py-2 sm:py-2.5 rounded-xl transition-all w-fit group">
                  Voir tous les projets
                </Link>
              </div>
            </div>

            {/* Visual placeholder */}
            <div className="relative h-48 sm:h-64 md:h-auto bg-[#0a0a0a] flex items-center justify-center overflow-hidden">
              <div className="absolute inset-0 grid-bg opacity-60" />
              <div className="relative z-10 text-center p-4 sm:p-8">
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl mx-auto mb-3 sm:mb-4 flex items-center justify-center glow-amber"
                  style={{ background: 'linear-gradient(135deg, #d97706, #f59e0b)' }}>
                  <Briefcase className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                </div>
                <div className="text-white font-bold text-lg sm:text-xl font-display">KABRAK Store</div>
                <div className="text-slate-400 text-xs sm:text-sm mt-1">SaaS POS · Gestion Commerciale</div>
                <div className="mt-3 sm:mt-4 flex justify-center gap-2 sm:gap-3 text-[10px] sm:text-xs text-slate-500">
                  <span>Cameroun</span>
                  <span>·</span>
                  <span>Production</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-6 sm:mt-10 reveal">
          <Link to="/projects"
            className="inline-flex items-center gap-2 text-[#c9a227] hover:text-[#b8952a] text-xs sm:text-sm font-medium transition-colors group">
            {h.featuredAllProjects}
            <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>

      {/* ══ TESTIMONIALS ══════════════════════════════════ */}
      <section className="py-12 sm:py-20 bg-[#1a1a1a]/40 border-y border-slate-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-5">
          <div className="text-center mb-8 sm:mb-12 reveal">
            <span className="text-[#c9a227] text-[10px] sm:text-xs font-semibold uppercase tracking-widest mb-2 sm:mb-3 block">{h.testimonialsLabel}</span>
            <h2 className="font-display font-black text-xl sm:text-2xl md:text-4xl text-white">{h.testimonialsTitle}</h2>
          </div>
          <div className="grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-3">
            {h.testimonials.map(({ name, role, quote }) => (
              <div key={name} className="reveal card-hover p-5 sm:p-7 rounded-2xl border border-slate-800 bg-[#0a0a0a]/80">
                <div className="flex gap-0.5 mb-3 sm:mb-4">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="w-3 h-3 sm:w-4 sm:h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-4 sm:mb-6 italic">"{quote}"</p>
                <div>
                  <div className="text-white font-semibold text-xs sm:text-sm">{name}</div>
                  <div className="text-slate-500 text-[10px] sm:text-xs mt-0.5">{role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ CTA BANNER ════════════════════════════════════ */}
      <section className="py-16 sm:py-24 max-w-6xl mx-auto px-4 sm:px-5">
        <div className="reveal rounded-2xl p-5 sm:p-8 md:p-12 text-center relative overflow-hidden"
          style={{ background: 'linear-gradient(135deg, #1a1a1a 0%, #252525 50%, #1a1a1a 100%)', border: '1px solid rgba(201,162,39,0.3)' }}>
          <div className="absolute inset-0 grid-bg opacity-30" />
          <div className="relative z-10">
            <h2 className="font-display font-black text-xl sm:text-2xl md:text-4xl text-white mb-3 sm:mb-4">
              {h.ctaTitle}
            </h2>
            <p className="text-slate-300 text-xs sm:text-sm max-w-lg mx-auto mb-6 sm:mb-8 leading-relaxed">
              {h.ctaSub}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
              <Link to="/contact"
                className="px-6 sm:px-8 py-3 sm:py-3.5 rounded-xl bg-white text-slate-900 font-bold text-xs sm:text-sm hover:bg-[#c9a227]/10
                  flex items-center gap-2 transition-all group">
                {h.ctaBtn1}
                <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link to="/projects"
                className="px-6 sm:px-8 py-3 sm:py-3.5 rounded-xl border border-white/20 text-white font-semibold text-xs sm:text-sm
                  hover:border-white/40 hover:bg-white/5 transition-all">
                {h.ctaBtn2}
              </Link>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
