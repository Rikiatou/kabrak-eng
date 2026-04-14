import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import {
  Code2, Brain, Globe, ArrowRight, CheckCircle,
  Users, Briefcase, Star, TrendingUp, ChevronRight,
  Rocket, Shield, Zap
} from 'lucide-react';

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

/* ── Hero background canvas (animated particles + grid) */
function HeroCanvas() {
  const canvasRef = useRef(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let raf;
    const dots = Array.from({ length: 70 }, () => ({
      x: Math.random() * canvas.offsetWidth,
      y: Math.random() * canvas.offsetHeight,
      r: Math.random() * 1.8 + 0.4,
      vx: (Math.random() - 0.5) * 0.35,
      vy: (Math.random() - 0.5) * 0.35,
      alpha: Math.random() * 0.5 + 0.2,
    }));

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      dots.forEach((d) => {
        d.x += d.vx;
        d.y += d.vy;
        if (d.x < 0) d.x = canvas.width;
        if (d.x > canvas.width) d.x = 0;
        if (d.y < 0) d.y = canvas.height;
        if (d.y > canvas.height) d.y = 0;
        ctx.beginPath();
        ctx.arc(d.x, d.y, d.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(59,130,246,${d.alpha})`;
        ctx.fill();
      });
      // draw connecting lines
      dots.forEach((a, i) => {
        dots.slice(i + 1).forEach((b) => {
          const dist = Math.hypot(a.x - b.x, a.y - b.y);
          if (dist < 110) {
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.strokeStyle = `rgba(59,130,246,${0.12 * (1 - dist / 110)})`;
            ctx.lineWidth = 0.7;
            ctx.stroke();
          }
        });
      });
      raf = requestAnimationFrame(draw);
    };
    draw();
    return () => { cancelAnimationFrame(raf); window.removeEventListener('resize', resize); };
  }, []);
  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none" />;
}

/* ─────────────────────────────────────────────────── */
export default function Home() {
  useReveal();

  return (
    <main className="overflow-x-hidden">

      {/* ══ HERO ══════════════════════════════════════════ */}
      <section className="relative min-h-screen flex items-center justify-center grid-bg overflow-hidden">
        <HeroCanvas />

        {/* Radial glow behind text */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
          w-[600px] h-[600px] rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(59,130,246,0.12) 0%, transparent 70%)' }}
        />

        <div className="relative z-10 text-center px-5 pt-20 pb-16 max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-500/30
            bg-blue-500/10 text-blue-300 text-xs font-medium mb-8 fade-in-up">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-400 pulse-dot" />
            Basé en Afrique · Présence internationale
          </div>

          <h1 className="font-display font-black text-5xl sm:text-6xl md:text-7xl text-white leading-tight mb-6 fade-in-up"
            style={{ animationDelay: '0.1s' }}>
            Empowering African<br />
            <span className="shimmer-text">Businesses</span> Through<br />
            <span className="gradient-text">Smart Technology</span>
          </h1>

          <p className="text-slate-400 text-lg sm:text-xl max-w-2xl mx-auto mb-10 leading-relaxed fade-in-up"
            style={{ animationDelay: '0.25s' }}>
            KABRAK Eng conçoit des solutions digitales sur-mesure adaptées aux réalités africaines —
            rapides, robustes et pensées pour scaler.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 fade-in-up"
            style={{ animationDelay: '0.4s' }}>
            <Link
              to="/services"
              className="group px-7 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm
                flex items-center gap-2 transition-all glow-btn"
            >
              <Rocket className="w-4 h-4" />
              Découvrir nos services
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/contact"
              className="px-7 py-3.5 rounded-xl border border-slate-600 hover:border-blue-500/60
                text-slate-300 hover:text-white font-semibold text-sm flex items-center gap-2 transition-all"
            >
              Nous contacter
            </Link>
          </div>

          {/* Trust pills */}
          <div className="mt-14 flex flex-wrap justify-center gap-4 text-xs text-slate-400 fade-in-up"
            style={{ animationDelay: '0.55s' }}>
            {['100% Made in Africa', 'Mobile-first', 'Low-bandwidth ready', 'Livraison rapide'].map((t) => (
              <span key={t} className="flex items-center gap-1.5">
                <CheckCircle className="w-3.5 h-3.5 text-blue-400" /> {t}
              </span>
            ))}
          </div>
        </div>

        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
          style={{ background: 'linear-gradient(to bottom, transparent, #050a14)' }} />
      </section>

      {/* ══ SERVICES ══════════════════════════════════════ */}
      <section className="py-24 max-w-6xl mx-auto px-5">
        <div className="text-center mb-14 reveal">
          <span className="text-blue-400 text-xs font-semibold uppercase tracking-widest mb-3 block">Ce que nous faisons</span>
          <h2 className="font-display font-black text-4xl text-white mb-4">Nos domaines d'expertise</h2>
          <p className="text-slate-400 max-w-xl mx-auto text-sm leading-relaxed">
            Des solutions concrètes qui simplifient, automatisent et transforment votre business.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-3">
          {[
            {
              icon: Code2,
              color: '#3b82f6',
              title: 'Développement Logiciel',
              sub: 'Plateformes, SaaS & applications web',
              desc: 'Applications web sur-mesure et plateformes SaaS complètes. Du prototype au produit scalable, nous gérons tout le cycle.',
            },
            {
              icon: Brain,
              color: '#8b5cf6',
              title: 'Intelligence Artificielle',
              sub: 'Automatisation & prédictions',
              desc: 'Automatisez vos processus, prenez de meilleures décisions. Chatbots, prédictions de ventes, recommandations intelligentes.',
            },
            {
              icon: Globe,
              color: '#06b6d4',
              title: 'Solutions Digitales',
              sub: "Outils pensés pour l'Afrique",
              desc: 'Des outils adaptés aux contraintes locales : connexion lente, Mobile Money, interfaces simples et puissantes.',
            },
          ].map(({ icon: Icon, color, title, sub, desc }) => (
            <div key={title}
              className="card-hover rounded-2xl p-7 border border-slate-800 bg-[#0a1628]/60 group cursor-pointer">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                style={{ background: `${color}18`, border: `1px solid ${color}35` }}>
                <Icon className="w-6 h-6" style={{ color }} />
              </div>
              <div className="text-xs font-medium mb-1" style={{ color }}>{sub}</div>
              <h3 className="text-white font-bold text-lg mb-3">{title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-10 reveal">
          <Link to="/services"
            className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 text-sm font-medium transition-colors group">
            Voir tous nos services
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>

      {/* ══ IMPACT STATS ══════════════════════════════════ */}
      <section className="py-20 border-y border-blue-900/20"
        style={{ background: 'linear-gradient(135deg, #0a1628 0%, #050a14 50%, #0a1628 100%)' }}>
        <div className="max-w-6xl mx-auto px-5">
          <div className="text-center mb-12 reveal">
            <span className="text-blue-400 text-xs font-semibold uppercase tracking-widest mb-3 block">Notre impact</span>
            <h2 className="font-display font-black text-4xl text-white mb-4">
              We build technology<br />
              <span className="gradient-text">that works for Africa</span>
            </h2>
            <p className="text-slate-400 text-sm max-w-lg mx-auto">
              Nous créons des solutions adaptées aux réalités africaines — accessibles, durables et prêtes à scaler.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mb-14">
            {[
              { num: '+10', label: 'Projets réalisés', icon: Briefcase, color: '#3b82f6' },
              { num: '+5', label: 'Clients satisfaits', icon: Users, color: '#8b5cf6' },
              { num: '1', label: 'Produit SaaS live', icon: Rocket, color: '#06b6d4' },
              { num: '100%', label: 'Focus Afrique', icon: Globe, color: '#10b981' },
            ].map(({ num, label, icon: Icon, color }) => (
              <div key={label} className="reveal text-center p-6 rounded-2xl border border-slate-800 bg-[#0a1628]/40">
                <Icon className="w-6 h-6 mx-auto mb-3" style={{ color }} />
                <div className="font-display font-black text-4xl text-white mb-1">{num}</div>
                <div className="text-slate-400 text-xs">{label}</div>
              </div>
            ))}
          </div>

          <div className="grid sm:grid-cols-3 gap-5">
            {[
              { icon: TrendingUp, title: 'Digitalisation des PME', desc: 'Aider les petites et moyennes entreprises à passer au numérique efficacement.' },
              { icon: Zap, title: 'Productivité accrue', desc: 'Nos outils réduisent le travail manuel et augmentent les revenus de nos clients.' },
              { icon: Shield, title: 'Tech accessible', desc: 'Interfaces optimisées pour la 3G, Mobile Money intégré, mode hors-ligne.' },
            ].map(({ icon: Icon, title, desc }) => (
              <div key={title} className="reveal flex gap-4 p-5 rounded-xl border border-slate-800 bg-[#0a1628]/30">
                <div className="w-10 h-10 rounded-lg bg-blue-600/15 border border-blue-500/25 flex items-center justify-center shrink-0">
                  <Icon className="w-5 h-5 text-blue-400" />
                </div>
                <div>
                  <div className="text-white font-semibold text-sm mb-1">{title}</div>
                  <div className="text-slate-400 text-xs leading-relaxed">{desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ FEATURED PROJECT ══════════════════════════════ */}
      <section className="py-24 max-w-6xl mx-auto px-5">
        <div className="text-center mb-14 reveal">
          <span className="text-blue-400 text-xs font-semibold uppercase tracking-widest mb-3 block">Projet phare</span>
          <h2 className="font-display font-black text-4xl text-white mb-4">Ce que nous avons construit</h2>
        </div>

        <div className="reveal rounded-2xl border border-blue-900/30 overflow-hidden"
          style={{ background: 'linear-gradient(135deg, #0a1628 0%, #0f1f3d 100%)' }}>
          <div className="grid md:grid-cols-2 gap-0">
            {/* Info */}
            <div className="p-10 flex flex-col justify-center">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-500/15 border border-green-500/30 text-green-400 text-xs font-medium mb-6 w-fit">
                <span className="w-1.5 h-1.5 rounded-full bg-green-400 pulse-dot" />
                Déjà utilisé en conditions réelles
              </div>
              <h3 className="font-display font-black text-3xl text-white mb-3">KABRAK Optic Pro</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">
                Une plateforme SaaS complète pour les opticiens — gestion des ventes, inventaire,
                patients, assurances et prescriptions en un seul endroit. Multi-tenant, multi-magasins,
                PDF automatisés, analytics temps réel.
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  href="https://kabrakopticpro.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-white
                    bg-blue-600 hover:bg-blue-500 px-5 py-2.5 rounded-xl transition-all glow-btn group">
                  Visiter kabrakopticpro.com
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
                <Link to="/projects"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-slate-300
                    hover:text-white border border-slate-700 hover:border-blue-500/50
                    px-5 py-2.5 rounded-xl transition-all w-fit group">
                  En savoir plus
                </Link>
              </div>
            </div>

            {/* Visual placeholder */}
            <div className="relative h-64 md:h-auto bg-[#050a14] flex items-center justify-center overflow-hidden">
              <div className="absolute inset-0 grid-bg opacity-60" />
              <div className="relative z-10 text-center p-8">
                <div className="w-20 h-20 rounded-2xl mx-auto mb-4 flex items-center justify-center glow-blue"
                  style={{ background: 'linear-gradient(135deg, #1e40af, #3b82f6)' }}>
                  <Code2 className="w-10 h-10 text-white" />
                </div>
                <div className="text-white font-bold text-xl font-display">Kabrak Optic Pro</div>
                <div className="text-slate-400 text-sm mt-1">Plateforme SaaS · Optique</div>
                <div className="mt-4 flex justify-center gap-3 text-xs text-slate-500">
                  <span>🌍 Cameroun</span>
                  <span>·</span>
                  <span>📦 Production</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-10 reveal">
          <Link to="/projects"
            className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 text-sm font-medium transition-colors group">
            Voir tous les projets
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>

      {/* ══ TESTIMONIALS ══════════════════════════════════ */}
      <section className="py-20 bg-[#0a1628]/40 border-y border-slate-800">
        <div className="max-w-6xl mx-auto px-5">
          <div className="text-center mb-12 reveal">
            <span className="text-blue-400 text-xs font-semibold uppercase tracking-widest mb-3 block">Témoignages</span>
            <h2 className="font-display font-black text-4xl text-white">Ce qu'ils disent de nous</h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-3">
            {[
              {
                name: 'Nabil A.',
                role: 'Gérant, Saoudia Optique — Douala',
                quote: "KABRAK Eng a livré en 2 semaines ce que j'attendais depuis des mois. Interface claire, performance au top — exactement ce dont j'avais besoin.",
                rating: 5,
              },
              {
                name: 'Thierry Bogo',
                role: 'Directeur, Bogo System — Bureau de change',
                quote: 'Le logiciel de gestion qu\'ils ont développé pour notre bureau de change a transformé nos opérations. Rapide, fiable et parfaitement adapté à nos besoins.',
                rating: 5,
              },
              {
                name: 'Aminatou K.',
                role: 'Responsable, Cabinet Optique — Yaoundé',
                quote: 'Équipe très professionnelle et réactive. La plateforme simplifie notre gestion quotidienne et nos clients sont impressionnés par la fluidité du service.',
                rating: 5,
              },
            ].map(({ name, role, quote, rating }) => (
              <div key={name} className="reveal card-hover p-7 rounded-2xl border border-slate-800 bg-[#050a14]/80">
                <div className="flex gap-0.5 mb-4">
                  {Array.from({ length: rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-slate-300 text-sm leading-relaxed mb-6 italic">"{quote}"</p>
                <div>
                  <div className="text-white font-semibold text-sm">{name}</div>
                  <div className="text-slate-500 text-xs mt-0.5">{role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ CTA BANNER ════════════════════════════════════ */}
      <section className="py-24 max-w-6xl mx-auto px-5">
        <div className="reveal rounded-2xl p-12 text-center relative overflow-hidden"
          style={{ background: 'linear-gradient(135deg, #1e3a8a 0%, #1e1b4b 50%, #0f172a 100%)', border: '1px solid rgba(99,102,241,0.3)' }}>
          <div className="absolute inset-0 grid-bg opacity-30" />
          <div className="relative z-10">
            <h2 className="font-display font-black text-3xl sm:text-4xl text-white mb-4">
              Prêt à transformer votre business ?
            </h2>
            <p className="text-slate-300 text-sm max-w-lg mx-auto mb-8 leading-relaxed">
              Discutons de votre projet. En 30 minutes, on vous propose une solution concrète et adaptée à votre budget.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/contact"
                className="px-8 py-3.5 rounded-xl bg-white text-slate-900 font-bold text-sm hover:bg-blue-50
                  flex items-center gap-2 transition-all group">
                Démarrer un projet
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link to="/projects"
                className="px-8 py-3.5 rounded-xl border border-white/20 text-white font-semibold text-sm
                  hover:border-white/40 hover:bg-white/5 transition-all">
                Voir nos projets
              </Link>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
