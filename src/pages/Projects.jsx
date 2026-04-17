import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ExternalLink, CheckCircle, Star, TrendingUp } from 'lucide-react';
import { useLang } from '../context/LangContext';

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

function ProjectCard({ accentColor, borderColor, badgeText, title, subtitle, desc, features, visitUrl, visitBtn, similarBtn, stats, tags, visualContent }) {
  return (
    <section className="py-16 max-w-6xl mx-auto px-5">
      <div className={`reveal rounded-2xl border ${borderColor} overflow-hidden`}
        style={{ background: 'linear-gradient(135deg, #0a1628 0%, #0f1f3d 100%)' }}>
        <div className="grid md:grid-cols-2 gap-0">

          {/* Left — info */}
          <div className="p-10 flex flex-col justify-center">
            <div className="flex items-center gap-2 mb-6">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium
                bg-green-500/15 text-green-400 border border-green-500/30">
                <span className="w-1.5 h-1.5 rounded-full bg-green-400 pulse-dot" />
                {badgeText}
              </span>
            </div>
            <h2 className="font-display font-black text-4xl text-white mb-3">{title}</h2>
            <div className="text-sm font-medium mb-5" style={{ color: accentColor }}>{subtitle}</div>
            <p className="text-slate-300 text-sm leading-relaxed mb-6">{desc}</p>
            <div className="grid grid-cols-2 gap-2 mb-8">
              {features.map((f) => (
                <div key={f} className="flex items-start gap-2 text-xs text-slate-300">
                  <CheckCircle className="w-3.5 h-3.5 shrink-0 mt-0.5" style={{ color: accentColor }} />
                  <span>{f}</span>
                </div>
              ))}
            </div>
            <div className="flex flex-wrap gap-3">
              <a href={visitUrl} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-white font-bold text-sm transition-all glow-btn"
                style={{ background: accentColor }}>
                {visitBtn}
                <ExternalLink className="w-4 h-4" />
              </a>
              <Link to="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-slate-600
                  hover:border-blue-500/60 text-slate-300 hover:text-white font-semibold text-sm transition-all">
                {similarBtn}
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Right — visual */}
          <div className="relative min-h-[320px] bg-[#050a14] flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 grid-bg opacity-50" />
            <div className="relative z-10 text-center p-10">
              {visualContent}
              <div className="flex flex-wrap justify-center gap-2 text-xs mt-5">
                {tags.map((tag) => (
                  <span key={tag}
                    className="px-2.5 py-1 rounded-md border text-xs"
                    style={{ background: `${accentColor}15`, color: accentColor, borderColor: `${accentColor}30` }}>
                    {tag}
                  </span>
                ))}
              </div>
              <div className="mt-4 flex justify-center gap-4 text-xs text-slate-500">
                <span>🌍 Cameroun</span>
                <span>·</span>
                <span>📦 Production</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats row */}
      <div className="grid grid-cols-3 gap-4 mt-6 reveal">
        {stats.map(({ num, label }) => (
          <div key={label} className="p-5 rounded-xl border border-slate-800 bg-[#0a1628]/40 text-center">
            <div className="text-white font-bold text-base mb-1">{num}</div>
            <div className="text-slate-400 text-xs">{label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default function Projects() {
  useReveal();
  const { t } = useLang();
  const p = t.projects;

  return (
    <main className="pt-24 overflow-x-hidden">

      {/* ── Header ─────────────────────────────────────── */}
      <section className="py-20 grid-bg relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse at 50% 0%, rgba(59,130,246,0.1) 0%, transparent 65%)' }} />
        <div className="max-w-3xl mx-auto px-5 text-center relative z-10">
          <span className="text-blue-400 text-xs font-semibold uppercase tracking-widest mb-3 block">{p.label}</span>
          <h1 className="font-display font-black text-5xl text-white mb-6">
            {p.title} <span className="gradient-text">{p.titleSpan}</span>
          </h1>
          <p className="text-slate-400 text-lg leading-relaxed">{p.sub}</p>
        </div>
      </section>

      {/* ── Featured badge ──────────────────────────────── */}
      <div className="max-w-6xl mx-auto px-5 pt-16 text-center reveal">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-amber-500/30
          bg-amber-500/10 text-amber-300 text-xs font-medium">
          <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
          {p.featuredBadge}
        </div>
      </div>

      {/* ── Kabrak Optic Pro ───────────────────────────── */}
      <ProjectCard
        accentColor="#3b82f6"
        borderColor="border-blue-600/40"
        badgeText={p.opticBadge}
        title="KABRAK Optic Pro"
        subtitle={p.opticSubtitle}
        desc={p.opticDesc}
        features={p.opticFeatures}
        visitUrl="https://kabrakopticpro.com"
        visitBtn={p.opticVisitBtn}
        similarBtn={p.opticSimilarBtn}
        stats={p.opticStats}
        tags={['SaaS', 'Multi-tenant', 'PDF', 'Analytics', 'IA']}
        visualContent={
          <>
            <img
              src="/logo-kabrakopticpro.png"
              alt="Kabrak Optic Pro"
              className="w-24 h-24 rounded-2xl mx-auto mb-5 object-cover float-anim glow-blue"
            />
            <div className="text-white font-bold text-2xl font-display mb-1">Kabrak Optic Pro</div>
            <div className="text-slate-400 text-sm">kabrakopticpro.com</div>
          </>
        }
      />

      {/* ── KABRAK Exchange ─────────────────────────────── */}
      <div className="border-t border-slate-800/60" />
      <ProjectCard
        accentColor="#10b981"
        borderColor="border-emerald-600/40"
        badgeText={p.exchangeBadge}
        title={p.exchangeTitle}
        subtitle={p.exchangeSubtitle}
        desc={p.exchangeDesc}
        features={p.exchangeFeatures}
        visitUrl="https://exchange.kabrakeng.com"
        visitBtn={p.exchangeVisitBtn}
        similarBtn={p.exchangeSimilarBtn}
        stats={p.exchangeStats}
        tags={['Bureau de change', 'Multi-devises', 'PDF', 'Temps réel']}
        visualContent={
          <>
            <div className="w-24 h-24 rounded-2xl mx-auto mb-5 flex items-center justify-center float-anim"
              style={{ background: 'linear-gradient(135deg, #065f46, #10b981)' }}>
              <TrendingUp className="w-12 h-12 text-white" />
            </div>
            <div className="text-white font-bold text-2xl font-display mb-1">KABRAK Exchange</div>
            <div className="text-slate-400 text-sm">exchange.kabrakeng.com</div>
          </>
        }
      />

      {/* ── CTA ─────────────────────────────────────────── */}
      <section className="py-16 border-t border-slate-800">
        <div className="max-w-4xl mx-auto px-5 text-center reveal">
          <h2 className="font-display font-black text-3xl text-white mb-4">{p.ctaTitle}</h2>
          <p className="text-slate-400 text-sm max-w-md mx-auto mb-8 leading-relaxed">{p.ctaSub}</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/contact"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500
                text-white font-bold text-sm transition-all glow-btn group">
              {p.ctaBtn1}
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}
