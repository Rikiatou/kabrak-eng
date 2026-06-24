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

/* ── Browser mockup frame ── */
function BrowserMockup({ url, accentColor, children }) {
  return (
    <div className="w-full max-w-sm mx-auto rounded-xl overflow-hidden border border-slate-700/50 shadow-2xl"
      style={{ boxShadow: `0 20px 60px ${accentColor}20` }}>
      {/* Browser bar */}
      <div className="flex items-center gap-1.5 px-3 py-2 bg-[#1a1a2e] border-b border-slate-700/50">
        <span className="w-2.5 h-2.5 rounded-full bg-red-400/70" />
        <span className="w-2.5 h-2.5 rounded-full bg-yellow-400/70" />
        <span className="w-2.5 h-2.5 rounded-full bg-green-400/70" />
        <div className="flex-1 ml-2 px-2 py-1 rounded bg-[#0d0d1a] text-[10px] text-slate-500 truncate">{url}</div>
      </div>
      {/* Content */}
      <div className="bg-[#0d0d1a] p-4 min-h-[200px]">
        {children}
      </div>
    </div>
  );
}

/* ── Mini UI mockups per project type ── */
function StoreMockup({ accent }) {
  return (
    <BrowserMockup url="kabrak-store.kabrakeng.com" accentColor={accent}>
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-lg" style={{ background: accent }} />
            <span className="text-white text-xs font-bold">KABRAK Store</span>
          </div>
          <div className="flex gap-1">
            <div className="w-6 h-1.5 rounded bg-slate-700" />
            <div className="w-6 h-1.5 rounded bg-slate-700" />
          </div>
        </div>
        {/* Stats cards */}
        <div className="grid grid-cols-3 gap-1.5 pt-1">
          <div className="rounded-lg bg-slate-800/60 p-1.5">
            <div className="text-[8px] text-slate-500">Ventes</div>
            <div className="text-[10px] font-bold text-white">1.2M</div>
          </div>
          <div className="rounded-lg bg-slate-800/60 p-1.5">
            <div className="text-[8px] text-slate-500">Stock</div>
            <div className="text-[10px] font-bold" style={{ color: accent }}>847</div>
          </div>
          <div className="rounded-lg bg-slate-800/60 p-1.5">
            <div className="text-[8px] text-slate-500">Clients</div>
            <div className="text-[10px] font-bold text-white">312</div>
          </div>
        </div>
        {/* Chart bars */}
        <div className="flex items-end gap-1 h-12 pt-2">
          {[40, 65, 50, 80, 60, 90, 70].map((h, i) => (
            <div key={i} className="flex-1 rounded-t" style={{ height: `${h}%`, background: i === 5 ? accent : '#334155' }} />
          ))}
        </div>
        {/* Table rows */}
        <div className="space-y-1 pt-1">
          {[1, 2, 3].map((r) => (
            <div key={r} className="flex items-center gap-2">
              <div className="w-4 h-4 rounded bg-slate-700" />
              <div className="flex-1 h-1.5 rounded bg-slate-700/60" />
              <div className="text-[8px] font-bold" style={{ color: accent }}>15 000</div>
            </div>
          ))}
        </div>
      </div>
    </BrowserMockup>
  );
}

function OpticMockup({ accent }) {
  return (
    <BrowserMockup url="kabrakopticpro.com" accentColor={accent}>
      <div className="space-y-2">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-lg" style={{ background: accent }} />
          <span className="text-white text-xs font-bold">Optic Pro</span>
        </div>
        {/* Prescription card */}
        <div className="rounded-lg bg-slate-800/60 p-2">
          <div className="text-[8px] text-slate-500 mb-1">Ordonnance</div>
          <div className="grid grid-cols-2 gap-1.5">
            <div>
              <div className="text-[7px] text-slate-600">OD</div>
              <div className="text-[9px] font-bold text-white">-2.25 / +0.75</div>
            </div>
            <div>
              <div className="text-[7px] text-slate-600">OG</div>
              <div className="text-[9px] font-bold text-white">-2.00 / +0.50</div>
            </div>
          </div>
        </div>
        {/* Patient list */}
        <div className="space-y-1">
          {[1, 2, 3].map((r) => (
            <div key={r} className="flex items-center gap-2 rounded bg-slate-800/40 p-1.5">
              <div className="w-5 h-5 rounded-full bg-slate-700" />
              <div className="flex-1">
                <div className="h-1.5 w-3/4 rounded bg-slate-600 mb-0.5" />
                <div className="h-1 w-1/2 rounded bg-slate-700" />
              </div>
              <div className="text-[8px]" style={{ color: accent }}>PDF</div>
            </div>
          ))}
        </div>
      </div>
    </BrowserMockup>
  );
}

function ExchangeMockup({ accent }) {
  return (
    <BrowserMockup url="exchange.kabrakeng.com" accentColor={accent}>
      <div className="space-y-2">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-lg" style={{ background: accent }} />
          <span className="text-white text-xs font-bold">Exchange</span>
        </div>
        {/* Rate cards */}
        <div className="grid grid-cols-2 gap-1.5">
          <div className="rounded-lg bg-slate-800/60 p-2">
            <div className="text-[8px] text-slate-500">EUR → XAF</div>
            <div className="text-[10px] font-bold" style={{ color: accent }}>655.95</div>
          </div>
          <div className="rounded-lg bg-slate-800/60 p-2">
            <div className="text-[8px] text-slate-500">USD → XAF</div>
            <div className="text-[10px] font-bold" style={{ color: accent }}>608.20</div>
          </div>
        </div>
        {/* Transaction list */}
        <div className="space-y-1 pt-1">
          {[
            { from: 'EUR', amount: '500', to: '327 975' },
            { from: 'USD', amount: '200', to: '121 640' },
            { from: 'EUR', amount: '1000', to: '655 950' },
          ].map((tx, i) => (
            <div key={i} className="flex items-center justify-between rounded bg-slate-800/40 p-1.5">
              <div className="flex items-center gap-1.5">
                <div className="w-4 h-4 rounded-full" style={{ background: `${accent}40` }} />
                <span className="text-[8px] text-slate-400">{tx.from} {tx.amount}</span>
              </div>
              <span className="text-[8px] font-bold text-white">{tx.to} XAF</span>
            </div>
          ))}
        </div>
        {/* Balance bar */}
        <div className="rounded-lg bg-slate-800/60 p-2">
          <div className="flex justify-between text-[8px] text-slate-500 mb-1">
            <span>Caisse du jour</span>
            <span style={{ color: accent }}>2 104 565 XAF</span>
          </div>
          <div className="h-1.5 rounded-full bg-slate-700 overflow-hidden">
            <div className="h-full rounded-full" style={{ width: '72%', background: accent }} />
          </div>
        </div>
      </div>
    </BrowserMockup>
  );
}

function BeautyMockup({ accent }) {
  return (
    <BrowserMockup url="beautyspa.kabrakeng.com" accentColor={accent}>
      <div className="space-y-2">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-lg" style={{ background: accent }} />
          <span className="text-white text-xs font-bold">Beauty & Spa</span>
        </div>
        {/* Calendar grid */}
        <div className="grid grid-cols-4 gap-1">
          {['Lun', 'Mar', 'Mer', 'Jeu'].map((d, i) => (
            <div key={d} className="text-center">
              <div className="text-[7px] text-slate-500 mb-1">{d}</div>
              <div className="space-y-0.5">
                <div className="h-2 rounded" style={{ background: i === 2 ? accent : '#334155' }} />
                <div className="h-2 rounded bg-slate-700" />
                <div className="h-2 rounded" style={{ background: i === 1 ? `${accent}80` : '#1e293b' }} />
              </div>
            </div>
          ))}
        </div>
        {/* Appointment cards */}
        <div className="space-y-1 pt-1">
          {[
            { name: 'Tresse goddess', time: '10:00', price: '15 000' },
            { name: 'Manucure', time: '14:00', price: '8 000' },
            { name: 'Massage relaxant', time: '16:30', price: '25 000' },
          ].map((apt, i) => (
            <div key={i} className="flex items-center justify-between rounded-lg bg-slate-800/40 p-1.5">
              <div>
                <div className="text-[8px] font-bold text-white">{apt.name}</div>
                <div className="text-[7px] text-slate-500">{apt.time}</div>
              </div>
              <div className="text-[8px] font-bold" style={{ color: accent }}>{apt.price}</div>
            </div>
          ))}
        </div>
      </div>
    </BrowserMockup>
  );
}

function RetailMockup({ accent }) {
  return (
    <BrowserMockup url="kabrak-supermarket-erp" accentColor={accent}>
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-lg" style={{ background: accent }} />
            <span className="text-white text-xs font-bold">Retail ERP</span>
          </div>
          <div className="text-[7px] px-1.5 py-0.5 rounded-full bg-green-500/20 text-green-400">Hors-ligne OK</div>
        </div>
        {/* POS interface */}
        <div className="rounded-lg bg-slate-800/60 p-2">
          <div className="text-[8px] text-slate-500 mb-1">Caisse en cours</div>
          <div className="space-y-1">
            {[
              { name: 'Riz 5kg', qty: 'x2', price: '12 000' },
              { name: 'Huile 1L', qty: 'x3', price: '9 000' },
              { name: 'Sucre 1kg', qty: 'x1', price: '650' },
            ].map((item, i) => (
              <div key={i} className="flex items-center justify-between text-[8px]">
                <span className="text-slate-300">{item.name} <span className="text-slate-600">{item.qty}</span></span>
                <span className="text-white font-bold">{item.price}</span>
              </div>
            ))}
          </div>
          <div className="border-t border-slate-700 mt-1.5 pt-1.5 flex justify-between">
            <span className="text-[8px] text-slate-500">Total</span>
            <span className="text-[10px] font-bold" style={{ color: accent }}>21 650 FCFA</span>
          </div>
        </div>
        {/* Stock alert */}
        <div className="flex items-center gap-2 rounded-lg bg-amber-500/10 p-1.5">
          <div className="w-1.5 h-1.5 rounded-full bg-amber-400" />
          <span className="text-[8px] text-amber-300">3 produits sous le seuil</span>
        </div>
      </div>
    </BrowserMockup>
  );
}

function ProjectCard({ accentColor, borderColor, badgeText, title, subtitle, desc, features, visitUrl, visitBtn, similarBtn, stats, tags, mockup, reverse }) {
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
    <div className="relative min-h-[320px] bg-[#050a14] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-50" />
      <div className="relative z-10 text-center p-5 sm:p-10 w-full">
        {mockup}
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
        mockup={<StoreMockup accent="#f59e0b" />}
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
        visitUrl="https://kabrakopticpro.com"
        visitBtn={p.opticVisitBtn}
        similarBtn={p.opticSimilarBtn}
        stats={p.opticStats}
        tags={['SaaS', 'Multi-tenant', 'PDF', 'Analytics', 'IA']}
        mockup={<OpticMockup accent="#c9a227" />}
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
        mockup={<ExchangeMockup accent="#10b981" />}
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
        mockup={<BeautyMockup accent="#ec4899" />}
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
        visitUrl="https://kabrak-supermarket-erp-frontend.vercel.app/proposition"
        visitBtn={p.retailVisitBtn}
        similarBtn={p.retailSimilarBtn}
        stats={p.retailStats}
        tags={['ERP', 'POS', 'Hybride', 'Hors-ligne', 'Multi-langue']}
        mockup={<RetailMockup accent="#3b82f6" />}
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
