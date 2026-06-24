import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Star } from 'lucide-react';
import { useLang } from '../context/LangContext';

/* ── Custom SVG Icons ────────────────────────────────── */
const ExternalLinkIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
    <polyline points="15 3 21 3 21 9" />
    <line x1="10" y1="14" x2="21" y2="3" />
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

/* ── Browser frame with real screenshot ── */
function ScreenshotMockup({ url, src, alt, accentColor }) {
  return (
    <div className="w-full max-w-md mx-auto rounded-xl overflow-hidden border border-slate-700/50"
      style={{ boxShadow: `0 20px 60px ${accentColor}25` }}>
      {/* Browser bar */}
      <div className="flex items-center gap-1.5 px-3 py-2 bg-[#1a1a2e] border-b border-slate-700/50">
        <span className="w-2.5 h-2.5 rounded-full bg-red-400/70" />
        <span className="w-2.5 h-2.5 rounded-full bg-yellow-400/70" />
        <span className="w-2.5 h-2.5 rounded-full bg-green-400/70" />
        <div className="flex-1 ml-2 px-2 py-1 rounded bg-[#0d0d1a] text-[10px] text-slate-500 truncate">{url}</div>
      </div>
      {/* Screenshot */}
      <div className="bg-[#0d0d1a] overflow-hidden">
        <img
          src={src}
          alt={alt}
          className="w-full h-auto block"
          loading="lazy"
        />
      </div>
    </div>
  );
}

function ProjectCard({ accentColor, borderColor, badgeText, title, subtitle, desc, features, visitUrl, visitBtn, similarBtn, stats, tags, screenshot, screenshotUrl, reverse }) {
  const infoPanel = (
    <div className="p-5 sm:p-10 flex flex-col justify-center">
      <div className="flex items-center gap-2 mb-6">
        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium
          bg-green-500/15 text-green-400 border border-green-500/30">
          <span className="w-1.5 h-1.5 rounded-full bg-green-400 pulse-dot" />
          {badgeText}
        </span>
      </div>
      <h2 className="font-display font-black text-2xl sm:text-4xl text-white mb-3">{title}</h2>
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
          <div className="w-4 h-4">
            <ExternalLinkIcon />
          </div>
        </a>
        <Link to="/contact"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-slate-600
            hover:border-[#c9a227]/60 text-slate-300 hover:text-white font-semibold text-sm transition-all">
          {similarBtn}
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );

  const visualPanel = (
    <div className="relative min-h-[360px] bg-[#050a14] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-50" />
      <div className="relative z-10 text-center p-5 sm:p-10 w-full">
        <ScreenshotMockup url={screenshotUrl} src={screenshot} alt={title} accentColor={accentColor} />
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
          <span>Cameroun</span>
          <span>·</span>
          <span>Production</span>
        </div>
      </div>
    </div>
  );

  return (
    <section className="py-16 max-w-6xl mx-auto px-5">
      <div className={`reveal rounded-2xl border ${borderColor} overflow-hidden`}
        style={{ background: 'linear-gradient(135deg, #1a1a1a 0%, #252525 100%)' }}>
        <div className="grid md:grid-cols-2 gap-0">
          {reverse ? <>{visualPanel}{infoPanel}</> : <>{infoPanel}{visualPanel}</>}
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
          style={{ background: 'radial-gradient(ellipse at 50% 0%, rgba(201,162,39,0.08) 0%, transparent 65%)' }} />
        <div className="max-w-3xl mx-auto px-5 text-center relative z-10">
          <span className="text-[#c9a227] text-xs font-semibold uppercase tracking-widest mb-3 block">{p.label}</span>
          <h1 className="font-display font-black text-3xl sm:text-5xl text-white mb-6">
            {p.title} <span className="gradient-text">{p.titleSpan}</span>
          </h1>
          <p className="text-slate-400 text-base sm:text-lg leading-relaxed">{p.sub}</p>
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

      {/* ── KABRAK Store (Produit Phare) ─────────────────── */}
      <ProjectCard
        accentColor="#f59e0b"
        borderColor="border-amber-600/40"
        badgeText="Produit Phare"
        title="KABRAK Store"
        subtitle="SaaS POS & Gestion Commerciale"
        desc="Logiciel de point de vente multi-boutiques avec gestion des stocks, facturation, analytics et support multi-devises. Solution complète pour le commerce de détail en Afrique."
        features={["Multi-boutiques", "Stocks en temps réel", "Facturation", "Analytics avancés", "PWA mobile", "Support Orange Money/MTN"]}
        visitUrl="https://kabrak-store.kabrakeng.com"
        visitBtn="Essai Gratuit"
        similarBtn="Solution similaire"
        stats={[
          { num: '+500', label: 'Utilisateurs' },
          { num: '+50', label: 'Boutiques' },
          { num: '4.8/5', label: 'Note clients' },
        ]}
        tags={['SaaS', 'POS', 'Multi-tenant', 'PWA', 'Analytics']}
        screenshot="/screenshots/kabrak-store.png"
        screenshotUrl="kabrak-store.kabrakeng.com"
      />

      {/* ── Kabrak Optic Pro ───────────────────────────── */}
      <div className="border-t border-slate-800/60" />
      <ProjectCard
        accentColor="#c9a227"
        borderColor="border-[#c9a227]/40"
        badgeText={p.opticBadge}
        title="KABRAK Optic Pro"
        subtitle={p.opticSubtitle}
        desc={p.opticDesc}
        features={p.opticFeatures}
        visitUrl="https://app.kabrakopticpro.com"
        visitBtn={p.opticVisitBtn}
        similarBtn={p.opticSimilarBtn}
        stats={p.opticStats}
        tags={['SaaS', 'Multi-tenant', 'PDF', 'Analytics', 'IA']}
        screenshot="/screenshots/kabrak-optic-pro.png"
        screenshotUrl="app.kabrakopticpro.com"
        reverse
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
        screenshot="/screenshots/kabrak-exchange.png"
        screenshotUrl="exchange.kabrakeng.com"
      />

      {/* ── KABRAK Beauty & Spa Pro ─────────────────────── */}
      <div className="border-t border-slate-800/60" />
      <ProjectCard
        accentColor="#ec4899"
        borderColor="border-pink-600/40"
        badgeText={p.beautyBadge}
        title={p.beautyTitle}
        subtitle={p.beautySubtitle}
        desc={p.beautyDesc}
        features={p.beautyFeatures}
        visitUrl="https://beautyspa.kabrakeng.com"
        visitBtn={p.beautyVisitBtn}
        similarBtn={p.beautySimilarBtn}
        stats={p.beautyStats}
        tags={['SaaS', 'PWA', 'Rendez-vous', 'Caisse', 'Multi-thèmes']}
        screenshot="/screenshots/kabrak-beauty.png"
        screenshotUrl="beautyspa.kabrakeng.com"
        reverse
      />

      {/* ── KABRAK Retail ERP (Supermarché) ─────────────── */}
      <div className="border-t border-slate-800/60" />
      <ProjectCard
        accentColor="#3b82f6"
        borderColor="border-blue-600/40"
        badgeText={p.retailBadge}
        title={p.retailTitle}
        subtitle={p.retailSubtitle}
        desc={p.retailDesc}
        features={p.retailFeatures}
        visitUrl="https://kabrak-supermarket-erp-frontend.vercel.app"
        visitBtn={p.retailVisitBtn}
        similarBtn={p.retailSimilarBtn}
        stats={p.retailStats}
        tags={['ERP', 'POS', 'Hybride', 'Hors-ligne', 'Multi-langue']}
        screenshot="/screenshots/kabrak-retail-erp.png"
        screenshotUrl="kabrak-supermarket-erp-frontend.vercel.app"
      />

      {/* ── CTA ─────────────────────────────────────────── */}
      <section className="py-16 border-t border-slate-800">
        <div className="max-w-4xl mx-auto px-5 text-center reveal">
          <h2 className="font-display font-black text-2xl sm:text-3xl text-white mb-4">{p.ctaTitle}</h2>
          <p className="text-slate-400 text-sm max-w-md mx-auto mb-8 leading-relaxed">{p.ctaSub}</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/contact"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-[#c9a227] hover:bg-[#b8952a]
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
