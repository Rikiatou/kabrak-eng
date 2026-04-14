import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ExternalLink, CheckCircle, Star, Code2 } from 'lucide-react';

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

export default function Projects() {
  useReveal();

  return (
    <main className="pt-24 overflow-x-hidden">

      {/* ── Header ─────────────────────────────────────── */}
      <section className="py-20 grid-bg relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse at 50% 0%, rgba(59,130,246,0.1) 0%, transparent 65%)' }} />
        <div className="max-w-3xl mx-auto px-5 text-center relative z-10">
          <span className="text-blue-400 text-xs font-semibold uppercase tracking-widest mb-3 block">Portfolio</span>
          <h1 className="font-display font-black text-5xl text-white mb-6">
            Nos <span className="gradient-text">Projets</span>
          </h1>
          <p className="text-slate-400 text-lg leading-relaxed">
            Des produits concrets, construits pour résoudre de vrais problèmes africains.
          </p>
        </div>
      </section>

      {/* ── Kabrak Optic Pro ───────────────────────────── */}
      <section className="py-24 max-w-6xl mx-auto px-5">

        {/* Featured badge */}
        <div className="text-center mb-10 reveal">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-amber-500/30
            bg-amber-500/10 text-amber-300 text-xs font-medium">
            <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
            Projet phare · En production
          </div>
        </div>

        {/* Main card */}
        <div className="reveal rounded-2xl border border-blue-600/40 overflow-hidden"
          style={{ background: 'linear-gradient(135deg, #0a1628 0%, #0f1f3d 100%)' }}>

          <div className="grid md:grid-cols-2 gap-0">

            {/* Left — info */}
            <div className="p-10 flex flex-col justify-center">
              <div className="flex items-center gap-2 mb-6">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium
                  bg-green-500/15 text-green-400 border border-green-500/30">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-400 pulse-dot" />
                  En production · kabrakopticpro.com
                </span>
              </div>

              <h2 className="font-display font-black text-4xl text-white mb-3">
                KABRAK Optic Pro
              </h2>
              <div className="text-blue-400 text-sm font-medium mb-5">
                Plateforme SaaS · Gestion optique
              </div>

              <p className="text-slate-300 text-sm leading-relaxed mb-6">
                Une plateforme SaaS complète dédiée aux opticiens d'Afrique. Gestion des ventes,
                inventaire, patients, prescriptions, assurances et bordereau de transmission —
                le tout en un seul outil. Multi-tenant, multi-magasins, analytics temps réel.
              </p>

              <div className="grid grid-cols-2 gap-2 mb-8">
                {[
                  'Multi-tenant & multi-magasins',
                  'Gestion assurances & bordereau PDF',
                  'Analytics & KPIs temps réel',
                  'Facturation & proformas PDF',
                  'Gestion stocks & inventaire',
                  'Interface simple, mobile-ready',
                ].map((f) => (
                  <div key={f} className="flex items-start gap-2 text-xs text-slate-300">
                    <CheckCircle className="w-3.5 h-3.5 text-blue-400 shrink-0 mt-0.5" />
                    <span>{f}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-3">
                <a
                  href="https://kabrakopticpro.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500
                    text-white font-bold text-sm transition-all glow-btn group"
                >
                  Visiter kabrakopticpro.com
                  <ExternalLink className="w-4 h-4" />
                </a>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-slate-600
                    hover:border-blue-500/60 text-slate-300 hover:text-white font-semibold text-sm transition-all"
                >
                  Projet similaire ?
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Right — visual */}
            <div className="relative min-h-[320px] bg-[#050a14] flex items-center justify-center overflow-hidden">
              <div className="absolute inset-0 grid-bg opacity-50" />
              <div className="relative z-10 text-center p-10">
                <div className="w-24 h-24 rounded-2xl mx-auto mb-5 flex items-center justify-center float-anim glow-blue"
                  style={{ background: 'linear-gradient(135deg, #1e40af, #3b82f6)' }}>
                  <Code2 className="w-12 h-12 text-white" />
                </div>
                <div className="text-white font-bold text-2xl font-display mb-1">Kabrak Optic Pro</div>
                <div className="text-slate-400 text-sm mb-5">Plateforme SaaS · Optique</div>
                <div className="flex flex-wrap justify-center gap-2 text-xs">
                  {['SaaS', 'Multi-tenant', 'PDF', 'Analytics', 'IA'].map((tag) => (
                    <span key={tag}
                      className="px-2.5 py-1 rounded-md bg-blue-600/15 text-blue-300 border border-blue-500/25">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="mt-5 flex justify-center gap-4 text-xs text-slate-500">
                  <span>🌍 Cameroun</span>
                  <span>·</span>
                  <span>📦 Production 2024</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-3 gap-4 mt-6 reveal">
          {[
            { num: 'Multi-magasins', label: 'Architecture scalable' },
            { num: 'PDF auto', label: 'Factures & bordereaux' },
            { num: 'Temps réel', label: 'Analytics & notifications' },
          ].map(({ num, label }) => (
            <div key={label}
              className="p-5 rounded-xl border border-slate-800 bg-[#0a1628]/40 text-center">
              <div className="text-white font-bold text-base mb-1">{num}</div>
              <div className="text-slate-400 text-xs">{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── More coming ────────────────────────────────── */}
      <section className="py-16 border-t border-slate-800">
        <div className="max-w-4xl mx-auto px-5 text-center reveal">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-500/30
            bg-blue-500/10 text-blue-300 text-xs font-medium mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-400 pulse-dot" />
            Nouveaux projets en cours
          </div>
          <h2 className="font-display font-black text-3xl text-white mb-4">
            D'autres produits arrivent bientôt
          </h2>
          <p className="text-slate-400 text-sm max-w-md mx-auto mb-8 leading-relaxed">
            Nous travaillons sur de nouveaux produits. Revenez bientôt ou contactez-nous
            si vous voulez être parmi les premiers à les découvrir.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500
                text-white font-bold text-sm transition-all glow-btn group"
            >
              Discuter d'un projet
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <a
              href="https://kabrakopticpro.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl border border-slate-700
                hover:border-blue-500/50 text-slate-300 hover:text-white font-semibold text-sm transition-all"
            >
              Voir Kabrak Optic Pro
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

    </main>
  );
}
