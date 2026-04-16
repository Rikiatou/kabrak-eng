import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Target, Eye, Heart, Zap, Globe, Code2, Users } from 'lucide-react';
import { useLang } from '../context/LangContext';

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
          <span className="text-blue-400 text-xs font-semibold uppercase tracking-widest mb-3 block">{a.label}</span>
          <h1 className="font-display font-black text-5xl text-white mb-6">
            {a.title} <span className="gradient-text">KABRAK Eng</span>
          </h1>
          <p className="text-slate-400 text-lg leading-relaxed">
            {a.sub}
          </p>
        </div>
      </section>

      {/* ── Who we are ──────────────────────────────────── */}
      <section className="py-24 max-w-6xl mx-auto px-5">
        <div className="grid md:grid-cols-2 gap-14 items-center">
          {/* Visual */}
          <div className="reveal relative">
            <div className="rounded-2xl overflow-hidden border border-blue-900/30 p-10 text-center"
              style={{ background: 'linear-gradient(135deg, #0a1628, #0f1f3d)' }}>
              <div className="w-28 h-28 rounded-2xl mx-auto mb-6 flex items-center justify-center float-anim glow-blue"
                style={{ background: 'linear-gradient(135deg, #1e3a8a, #3b82f6)' }}>
                <Code2 className="w-14 h-14 text-white" />
              </div>
              <div className="font-display font-black text-2xl text-white mb-1">KABRAK Engineering</div>
              <div className="text-blue-400 text-sm mb-5">Technology · Innovation · Africa</div>
              <div className="grid grid-cols-3 gap-4 mt-6">
                {[
                  { num: '+10', label: 'Projets' },
                  { num: '+5', label: 'Clients' },
                  { num: '1', label: 'SaaS live' },
                ].map(({ num, label }) => (
                  <div key={label} className="p-3 rounded-xl border border-blue-900/30 bg-[#050a14]/50">
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
            <span className="text-blue-400 text-xs font-semibold uppercase tracking-widest mb-3 block">{a.whoLabel}</span>
            <h2 className="font-display font-black text-4xl text-white mb-6">
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
                <span key={tag} className="px-3 py-1.5 rounded-lg bg-blue-600/12 text-blue-300 border border-blue-500/25 text-xs font-medium">
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
            <h2 className="font-display font-black text-4xl text-white">{a.guideTitle}</h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-3">
            {[
              { icon: Target, color: '#3b82f6', ...a.mission },
              { icon: Eye, color: '#8b5cf6', ...a.vision },
              { icon: Heart, color: '#06b6d4', ...a.values },
            ].map(({ icon: Icon, color, title, desc }) => (
              <div key={title} className="reveal card-hover p-8 rounded-2xl border border-slate-800 bg-[#050a14]/70 text-center">
                <div className="w-14 h-14 rounded-xl mx-auto flex items-center justify-center mb-5"
                  style={{ background: `${color}15`, border: `1px solid ${color}30` }}>
                  <Icon className="w-7 h-7" style={{ color }} />
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
          <span className="text-blue-400 text-xs font-semibold uppercase tracking-widest mb-3 block">{a.whyLabel}</span>
          <h2 className="font-display font-black text-4xl text-white">
            {a.whyTitle}
          </h2>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { icon: Zap, color: '#3b82f6', ...a.why[0] },
            { icon: Globe, color: '#06b6d4', ...a.why[1] },
            { icon: Code2, color: '#8b5cf6', ...a.why[2] },
            { icon: Users, color: '#10b981', ...a.why[3] },
          ].map(({ icon: Icon, color, title, desc }) => (
            <div key={title} className="reveal card-hover p-6 rounded-2xl border border-slate-800 bg-[#0a1628]/50">
              <div className="w-10 h-10 rounded-lg flex items-center justify-center mb-4"
                style={{ background: `${color}15`, border: `1px solid ${color}30` }}>
                <Icon className="w-5 h-5" style={{ color }} />
              </div>
              <h3 className="text-white font-semibold text-sm mb-2">{title}</h3>
              <p className="text-slate-400 text-xs leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA ─────────────────────────────────────────── */}
      <section className="py-16 max-w-4xl mx-auto px-5 text-center reveal">
        <h2 className="font-display font-black text-3xl text-white mb-4">
          {a.ctaTitle}
        </h2>
        <p className="text-slate-400 text-sm mb-8 max-w-md mx-auto leading-relaxed">
          {a.ctaSub}
        </p>
        <Link to="/contact"
          className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500
            text-white font-bold text-sm transition-all glow-btn group">
          {a.ctaBtn}
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </Link>
      </section>

    </main>
  );
}
