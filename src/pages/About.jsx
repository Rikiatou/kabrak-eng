import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { useLang } from '../context/LangContext';

/* ── Custom SVG Icons ────────────────────────────────── */
const UsersIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);

/* ── Custom SVG Icons ────────────────────────────────── */
const TargetIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <circle cx="12" cy="12" r="6" />
    <circle cx="12" cy="12" r="2" />
  </svg>
);

const EyeIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
    <circle cx="12" cy="12" r="3" />
  </svg>
);

const HeartIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
  </svg>
);

const ZapIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
  </svg>
);

const GlobeIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <path d="M2 12h20" />
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
  </svg>
);

const CodeIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M7 8L3 12L7 16" />
    <path d="M17 8L21 12L17 16" />
    <path d="M14 4L10 20" />
  </svg>
);

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

export default function About() {
  useReveal();
  const { t } = useLang();
  const a = t.about;

  return (
    <main className="pt-24 overflow-x-hidden">

      {/* ── Page header ─────────────────────────────────── */}
      <section className="py-20 grid-bg relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse at 50% 0%, rgba(59,130,246,0.1) 0%, transparent 65%)' }} />
        <div className="max-w-3xl mx-auto px-5 text-center relative z-10">
          <span className="text-[#c9a227] text-xs font-semibold uppercase tracking-widest mb-3 block">{a.label}</span>
          <h1 className="font-display font-black text-3xl sm:text-5xl text-white mb-6">
            {a.title} <span className="gradient-text">KABRAK Eng</span>
          </h1>
          <p className="text-slate-400 text-base sm:text-lg leading-relaxed">
            {a.sub}
          </p>
        </div>
      </section>

      {/* ── Who we are ──────────────────────────────────── */}
      <section className="py-24 max-w-6xl mx-auto px-5">
        <div className="grid md:grid-cols-2 gap-14 items-center">
          {/* Visual */}
          <div className="reveal relative">
            <div className="rounded-2xl overflow-hidden border border-slate-800 p-6 sm:p-10 text-center"
              style={{ background: 'linear-gradient(135deg, #1a1a1a, #252525)' }}>
              <div className="w-28 h-28 rounded-2xl mx-auto mb-6 flex items-center justify-center float-anim glow-gold"
                style={{ background: 'linear-gradient(135deg, #8b6914, #c9a227)' }}>
                <div className="w-14 h-14 text-white">
                  <CodeIcon />
                </div>
              </div>
              <div className="font-display font-black text-2xl text-white mb-1">KABRAK Engineering</div>
              <div className="text-[#c9a227] text-sm mb-5">Technology · Innovation · Africa</div>
              <div className="grid grid-cols-3 gap-4 mt-6">
                {[
                  { num: '+15', label: 'Projets' },
                  { num: '+20', label: 'Clients' },
                  { num: '4', label: 'SaaS live' },
                ].map(({ num, label }) => (
                  <div key={label} className="p-3 rounded-xl border border-slate-800 bg-[#0a0a0a]/50">
                    <div className="font-black text-2xl text-white font-display">{num}</div>
                    <div className="text-slate-400 text-xs mt-0.5">{label}</div>
                  </div>
                ))}
              </div>
            </div>
            {/* Deco dots */}
            <div className="absolute -top-4 -right-4 w-24 h-24 rounded-full opacity-20 pointer-events-none"
              style={{ background: 'radial-gradient(circle, #3b82f6, transparent)' }} />
          </div>

          {/* Text */}
          <div className="reveal">
            <span className="text-[#c9a227] text-xs font-semibold uppercase tracking-widest mb-3 block">{a.whoLabel}</span>
            <h2 className="font-display font-black text-2xl sm:text-4xl text-white mb-6">
              {a.whoTitle1}<br />
              <span className="gradient-text">{a.whoTitle2}</span>
            </h2>
            <p className="text-slate-400 text-sm leading-relaxed mb-5">
              {a.whoP1}
            </p>
            <p className="text-slate-400 text-sm leading-relaxed mb-8">
              {a.whoP2}
            </p>
            <div className="flex flex-wrap gap-3">
              {a.tags.map((tag) => (
                <span key={tag} className="px-3 py-1.5 rounded-lg bg-[#c9a227]/12 text-[#c9a227] border border-[#c9a227]/25 text-xs font-medium">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Mission / Vision / Values ────────────────────── */}
      <section className="py-20 border-y border-slate-800 bg-[#0a1628]/30">
        <div className="max-w-6xl mx-auto px-5">
          <div className="text-center mb-14 reveal">
            <h2 className="font-display font-black text-2xl sm:text-4xl text-white">{a.guideTitle}</h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-3">
            {[
              { icon: TargetIcon, color: '#c9a227', ...a.mission },
              { icon: EyeIcon, color: '#8b6914', ...a.vision },
              { icon: HeartIcon, color: '#b87333', ...a.values },
            ].map(({ icon: Icon, color, title, desc }) => (
              <div key={title} className="reveal card-hover p-8 rounded-2xl border border-slate-800 bg-[#0a0a0a]/70 text-center">
                <div className="w-14 h-14 rounded-xl mx-auto flex items-center justify-center mb-5"
                  style={{ background: `${color}15`, border: `1px solid ${color}30` }}>
                  <div className="w-7 h-7" style={{ color }}>
                    <Icon />
                  </div>
                </div>
                <h3 className="text-white font-bold text-lg mb-3">{title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why choose us ────────────────────────────────── */}
      <section className="py-24 max-w-6xl mx-auto px-5">
        <div className="text-center mb-14 reveal">
          <span className="text-[#c9a227] text-xs font-semibold uppercase tracking-widest mb-3 block">{a.whyLabel}</span>
          <h2 className="font-display font-black text-2xl sm:text-4xl text-white">
            {a.whyTitle}
          </h2>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { icon: ZapIcon, color: '#c9a227', ...a.why[0] },
            { icon: GlobeIcon, color: '#8b6914', ...a.why[1] },
            { icon: CodeIcon, color: '#b87333', ...a.why[2] },
            { icon: UsersIcon, color: '#a67c52', ...a.why[3] },
          ].map(({ icon: Icon, color, title, desc }) => (
            <div key={title} className="reveal card-hover p-6 rounded-2xl border border-slate-800 bg-[#1a1a1a]/50">
              <div className="w-10 h-10 rounded-lg flex items-center justify-center mb-4"
                style={{ background: `${color}15`, border: `1px solid ${color}30` }}>
                <div className="w-5 h-5" style={{ color }}>
                  <Icon />
                </div>
              </div>
              <h3 className="text-white font-semibold text-sm mb-2">{title}</h3>
              <p className="text-slate-400 text-xs leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── CEO ─────────────────────────────────────────── */}
      <section className="py-20 border-y border-slate-800 bg-[#0a1628]/30">
        <div className="max-w-5xl mx-auto px-5">
          <div className="text-center mb-12 reveal">
            <span className="text-[#c9a227] text-xs font-semibold uppercase tracking-widest mb-3 block">Leadership</span>
            <h2 className="font-display font-black text-2xl sm:text-4xl text-white">À la tête de <span className="gradient-text">KABRAK ENG</span></h2>
          </div>
          <div className="reveal flex flex-col md:flex-row items-center gap-10">
            {/* Photo */}
            <div className="flex-shrink-0">
              <div className="relative w-56 h-56 sm:w-64 sm:h-64 rounded-2xl overflow-hidden border-2 border-[#c9a227]/30 shadow-xl shadow-black/30">
                <img src="/ceo-rikiatou.jpeg" alt="Rikiatou Hassan Sale" className="w-full h-full object-cover object-top" />
              </div>
            </div>
            {/* Text */}
            <div className="text-center md:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#c9a227]/15 border border-[#c9a227]/30 text-[#c9a227] text-xs font-semibold mb-4">
                Fondatrice &amp; CEO
              </div>
              <h3 className="font-display font-black text-2xl sm:text-3xl text-white mb-1">RIKIATOU HASSAN SALE</h3>
              <p className="text-yellow-400 text-sm font-medium mb-5">Épouse Kabir</p>
              <p className="text-slate-400 text-sm leading-relaxed mb-6 max-w-lg">
                Ingénieure en développement logiciel, Rikiatou est la force créatrice derrière KABRAK ENG.
                Avec une vision claire et une expertise technique pointue, elle conçoit des solutions digitales
                qui propulsent les entreprises africaines vers l&apos;excellence.
              </p>
              <blockquote className="border-l-4 border-[#c9a227] pl-4 italic text-white font-semibold text-sm sm:text-base">
                &ldquo;Innovation · Performance · Excellence&rdquo;
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ─────────────────────────────────────────── */}
      <section className="py-16 max-w-4xl mx-auto px-5 text-center reveal">
        <h2 className="font-display font-black text-2xl sm:text-3xl text-white mb-4">
          {a.ctaTitle}
        </h2>
        <p className="text-slate-400 text-sm mb-8 max-w-md mx-auto leading-relaxed">
          {a.ctaSub}
        </p>
        <Link to="/contact"
          className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-[#c9a227] hover:bg-[#b8952a]
            text-white font-bold text-sm transition-all glow-btn group">
          {a.ctaBtn}
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </Link>
      </section>

    </main>
  );
}
