import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  Code2, Brain, Smartphone, Globe, Database, Shield,
  ArrowRight, Check, Zap
} from 'lucide-react';

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

const services = [
  {
    icon: Code2,
    color: '#3b82f6',
    title: 'Développement Web',
    subtitle: 'Sites & plateformes sur-mesure',
    desc: 'Applications web modernes, plateformes SaaS, dashboards, portails clients. Code propre et livraison rapide.',
    features: [
      'Site vitrine professionnel',
      'Application web / SaaS',
      'Dashboard & back-office',
      'API REST & intégrations',
      'Déploiement & maintenance',
    ],
  },
  {
    icon: Brain,
    color: '#8b5cf6',
    title: 'Intelligence Artificielle',
    subtitle: 'Automatisation & prédictions',
    desc: "Intégrez l'IA dans vos processus métier. Chatbots intelligents, analyse de données, prédictions de ventes.",
    features: [
      'Chatbot & assistant IA',
      'Prédictions & recommandations',
      'Analyse de données',
      'Automatisation des tâches',
      'Traitement du langage naturel',
    ],
    badge: 'Populaire',
  },
  {
    icon: Smartphone,
    color: '#06b6d4',
    title: 'Applications Mobiles',
    subtitle: 'Android & iOS',
    desc: "Applications mobiles cross-platform performantes. Interface intuitive, mode hors-ligne, Mobile Money intégré.",
    features: [
      'App Android & iOS',
      'Interface intuitive mobile-first',
      'Mode hors-ligne',
      'Intégration Mobile Money',
      'Notifications push',
    ],
  },
  {
    icon: Globe,
    color: '#10b981',
    title: 'Solutions Digitales',
    subtitle: 'Transformation numérique',
    desc: 'Digitalisez vos processus internes, automatisez vos workflows et gagnez en efficacité opérationnelle.',
    features: [
      'Audit digital & conseil',
      'Digitalisation des processus',
      'Systèmes de gestion (ERP/CRM)',
      'Formation & accompagnement',
      'Support & maintenance',
    ],
  },
  {
    icon: Database,
    color: '#f59e0b',
    title: 'Data & Analytics',
    subtitle: 'Vos données, vos décisions',
    desc: 'Transformez vos données brutes en insights actionnables. Tableaux de bord en temps réel, rapports automatisés.',
    features: [
      'Tableaux de bord temps réel',
      'Rapports automatisés',
      'KPIs & métriques métier',
      'Analyse de tendances',
      'Exports & intégrations',
    ],
  },
  {
    icon: Shield,
    color: '#ef4444',
    title: 'Sécurité & Infrastructure',
    subtitle: 'Fiable, sécurisé, scalable',
    desc: 'Audit de sécurité, mise en place de serveurs, déploiement cloud, sauvegardes automatiques et monitoring.',
    features: [
      'Audit de sécurité',
      'Déploiement cloud',
      'SSL, HTTPS, protection DDoS',
      'Sauvegardes automatiques',
      'Monitoring & alertes',
    ],
  },
];

export default function Services() {
  useReveal();

  return (
    <main className="pt-24 overflow-x-hidden">

      {/* ── Header ─────────────────────────────────────── */}
      <section className="py-20 grid-bg relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse at 50% 0%, rgba(59,130,246,0.1) 0%, transparent 65%)' }} />
        <div className="max-w-3xl mx-auto px-5 text-center relative z-10">
          <span className="text-blue-400 text-xs font-semibold uppercase tracking-widest mb-3 block">Ce que nous faisons</span>
          <h1 className="font-display font-black text-5xl text-white mb-6">
            Nos <span className="gradient-text">Services</span>
          </h1>
          <p className="text-slate-400 text-lg leading-relaxed">
            Du site vitrine à la plateforme SaaS complexe — nous couvrons tout le spectre du développement digital,
            adapté aux besoins et réalités africaines.
          </p>
        </div>
      </section>

      {/* ── Services grid ──────────────────────────────── */}
      <section className="py-24 max-w-6xl mx-auto px-5">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map(({ icon: Icon, color, title, subtitle, desc, features, badge }) => (
            <div key={title}
              className="reveal card-hover rounded-2xl border border-slate-800 bg-[#0a1628]/60 overflow-hidden flex flex-col">
              <div className="p-7 flex-1">
                <div className="flex items-start justify-between mb-5">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center"
                    style={{ background: `${color}15`, border: `1px solid ${color}30` }}>
                    <Icon className="w-6 h-6" style={{ color }} />
                  </div>
                  {badge && (
                    <span className="px-2.5 py-1 rounded-full text-xs font-bold bg-blue-600/20 text-blue-300 border border-blue-500/30">
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
                  Demander un devis
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Process ────────────────────────────────────── */}
      <section className="py-20 border-y border-slate-800 bg-[#0a1628]/30">
        <div className="max-w-6xl mx-auto px-5">
          <div className="text-center mb-14 reveal">
            <span className="text-blue-400 text-xs font-semibold uppercase tracking-widest mb-3 block">Comment ça marche</span>
            <h2 className="font-display font-black text-4xl text-white">Notre processus</h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-4">
            {[
              { num: '01', title: 'Découverte', desc: 'Appel de 30 min pour comprendre vos besoins, budget et délais.', color: '#3b82f6' },
              { num: '02', title: 'Proposition', desc: 'Devis détaillé, planning et architecture technique sous 48h.', color: '#8b5cf6' },
              { num: '03', title: 'Développement', desc: 'Sprints courts avec démos régulières. Vous suivez l\'avancement.', color: '#06b6d4' },
              { num: '04', title: 'Livraison', desc: 'Déploiement, formation et support inclus dans chaque projet.', color: '#10b981' },
            ].map(({ num, title, desc, color }) => (
              <div key={num} className="reveal relative p-6 rounded-2xl border border-slate-800 bg-[#050a14]/70">
                <div className="text-5xl font-black mb-4 font-display" style={{ color: `${color}25` }}>{num}</div>
                <div className="absolute top-5 right-5 w-8 h-8 rounded-full flex items-center justify-center text-white text-xs font-black"
                  style={{ background: color }}>{num}</div>
                <h3 className="text-white font-bold text-base mb-2">{title}</h3>
                <p className="text-slate-400 text-xs leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ─────────────────────────────────────────── */}
      <section className="py-24 max-w-4xl mx-auto px-5 text-center reveal">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-500/30
          bg-blue-500/10 text-blue-300 text-xs font-medium mb-6">
          <Zap className="w-3.5 h-3.5" /> Réponse sous 24h garantie
        </div>
        <h2 className="font-display font-black text-3xl text-white mb-4">
          Vous avez un projet en tête ?
        </h2>
        <p className="text-slate-400 text-sm mb-8 max-w-md mx-auto leading-relaxed">
          Décrivez-nous votre idée. On vous propose une solution concrète, un délai et un budget réaliste.
        </p>
        <Link to="/contact"
          className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500
            text-white font-bold text-sm transition-all glow-btn group">
          Obtenir un devis gratuit
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </Link>
      </section>

    </main>
  );
}
