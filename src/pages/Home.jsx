import { Link } from 'react-router-dom';
import { ArrowRight, Check } from 'lucide-react';
import { useLang } from '../context/LangContext';

const WA = 'https://wa.me/237653561862';

const copy = {
  fr: {
    kicker: 'KABRAK Eng · Cameroun',
    title: 'Des logiciels simples pour gérer votre commerce.',
    sub: 'Caisse, stock, factures, rendez-vous. Nos applications sont utilisées chaque jour par des boutiques, des opticiens, des salons de beauté et des bureaux de change. Elles marchent sur téléphone, même sans internet.',
    seeApps: 'Voir nos logiciels',
    whatsapp: 'Nous écrire sur WhatsApp',
    waMsg: 'Bonjour KABRAK Eng, je voudrais des informations.',
    points: ['Sur téléphone et ordinateur', 'Marche sans internet', 'Orange Money et MTN MoMo', 'Français et anglais'],
    appsTitle: 'Nos logiciels',
    appsSub: 'Chaque logiciel est fait pour un métier. Essayez-le gratuitement avant de payer.',
    try: 'Essayer gratuitement',
    visit: 'Découvrir',
    ask: 'Demander une démo',
    apps: [
      {
        name: 'KABRAK Store', logo: '/kabrak-store-logo.png', href: 'https://kabrak-store.kabrakeng.com', cta: 'try',
        who: 'Boutiques, vêtements, cosmétiques, pâtisseries, quincailleries',
        points: ['Caisse et ticket imprimé', 'Stock par taille et couleur', 'Dettes clients et rappel WhatsApp'],
        price: 'À partir de 4 900 FCFA / mois',
      },
      {
        name: 'KABRAK Optic Pro', logo: '/logo-kabrakopticpro.png', href: 'https://app.kabrakopticpro.com', cta: 'visit',
        who: 'Opticiens et magasins d’optique',
        points: ['Patients et ordonnances', 'Ventes et stock de montures', 'Assurances et mutuelles'],
      },
      {
        name: 'KABRAK Beauty & Spa', logo: '/kabrak-beauty-logo.jpg', href: 'https://beautyspa.kabrakeng.com', cta: 'visit',
        who: 'Salons de beauté, barbershops, instituts',
        points: ['Rendez-vous', 'Caisse et factures', 'Équipe et commissions'],
      },
      {
        name: 'KABRAK Exchange', logo: '/kabrak-exchange-logo.jpeg', href: 'https://exchange.kabrakeng.com', cta: 'visit',
        who: 'Bureaux de change',
        points: ['Opérations de change', 'Caisse et solde du jour', 'Rapports PDF'],
      },
      {
        name: 'KABRAK Retail ERP', logo: '/kabrak-retail-logo.jpeg', href: 'https://kabrak-supermarket-erp-frontend.vercel.app', cta: 'ask',
        who: 'Supermarchés et grands commerces',
        points: ['Caisse rapide, plusieurs postes', 'Achats et fournisseurs', 'Comptabilité'],
      },
    ],
    customTitle: 'Un besoin précis ?',
    customSub: 'Nous développons aussi des applications sur mesure : site web, application mobile, logiciel de gestion. Expliquez-nous votre activité, nous vous disons ce qui est possible et à quel prix.',
    customBtn: 'Parler de mon projet',
    founderLabel: 'Qui est derrière KABRAK',
    founderName: 'Rikiatou Hassan Sale',
    founderRole: 'Fondatrice, ingénieure logiciel',
    founderText: 'J’ai créé KABRAK Eng pour donner aux commerçants d’Afrique des outils qui marchent vraiment chez eux : sur un téléphone, avec une connexion qui coupe, et payés par Mobile Money. Chaque logiciel est suivi et amélioré à partir des retours de nos clients.',
    founderLink: 'En savoir plus',
  },
  en: {
    kicker: 'KABRAK Eng · Cameroon',
    title: 'Simple software to run your business.',
    sub: 'Point of sale, stock, invoices, appointments. Our apps are used every day by shops, opticians, beauty salons and currency exchange offices. They work on a phone, even without internet.',
    seeApps: 'See our software',
    whatsapp: 'Message us on WhatsApp',
    waMsg: 'Hello KABRAK Eng, I would like some information.',
    points: ['Phone and computer', 'Works offline', 'Orange Money and MTN MoMo', 'French and English'],
    appsTitle: 'Our software',
    appsSub: 'Each app is made for one trade. Try it for free before you pay.',
    try: 'Try for free',
    visit: 'Discover',
    ask: 'Ask for a demo',
    apps: [
      {
        name: 'KABRAK Store', logo: '/kabrak-store-logo.png', href: 'https://kabrak-store.kabrakeng.com', cta: 'try',
        who: 'Shops, clothing, cosmetics, bakeries, hardware stores',
        points: ['Register and printed receipt', 'Stock by size and colour', 'Client debts and WhatsApp reminders'],
        price: 'From 4,900 FCFA / month',
      },
      {
        name: 'KABRAK Optic Pro', logo: '/logo-kabrakopticpro.png', href: 'https://app.kabrakopticpro.com', cta: 'visit',
        who: 'Opticians and optical stores',
        points: ['Patients and prescriptions', 'Sales and frame stock', 'Insurance'],
      },
      {
        name: 'KABRAK Beauty & Spa', logo: '/kabrak-beauty-logo.jpg', href: 'https://beautyspa.kabrakeng.com', cta: 'visit',
        who: 'Beauty salons, barbershops, spas',
        points: ['Appointments', 'Register and invoices', 'Staff and commissions'],
      },
      {
        name: 'KABRAK Exchange', logo: '/kabrak-exchange-logo.jpeg', href: 'https://exchange.kabrakeng.com', cta: 'visit',
        who: 'Currency exchange offices',
        points: ['Exchange operations', 'Daily cash balance', 'PDF reports'],
      },
      {
        name: 'KABRAK Retail ERP', logo: '/kabrak-retail-logo.jpeg', href: 'https://kabrak-supermarket-erp-frontend.vercel.app', cta: 'ask',
        who: 'Supermarkets and large stores',
        points: ['Fast multi-till register', 'Purchasing and suppliers', 'Accounting'],
      },
    ],
    customTitle: 'A specific need?',
    customSub: 'We also build custom software: websites, mobile apps, management tools. Tell us about your business and we will tell you what is possible and at what price.',
    customBtn: 'Talk about my project',
    founderLabel: 'Who is behind KABRAK',
    founderName: 'Rikiatou Hassan Sale',
    founderRole: 'Founder, software engineer',
    founderText: 'I started KABRAK Eng to give African merchants tools that really work for them: on a phone, with a connection that drops, paid with Mobile Money. Every app is maintained and improved from our clients’ feedback.',
    founderLink: 'Learn more',
  },
};

export default function Home() {
  const { lang } = useLang();
  const c = copy[lang] || copy.fr;
  const wa = `${WA}?text=${encodeURIComponent(c.waMsg)}`;

  return (
    <main className="bg-white text-slate-900">
      {/* Hero */}
      <section className="pt-28 sm:pt-32 pb-16 sm:pb-20 border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-5 grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          <div>
            <p className="text-sm font-semibold text-blue-700 mb-4">{c.kicker}</p>
            <h1 className="font-display font-bold text-4xl sm:text-5xl leading-[1.1] tracking-tight text-slate-900 mb-5">
              {c.title}
            </h1>
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed mb-8 max-w-xl">{c.sub}</p>
            <div className="flex flex-col sm:flex-row gap-3 mb-8">
              <a href="#logiciels" className="inline-flex justify-center items-center gap-2 px-6 py-3 rounded-lg bg-blue-700 hover:bg-blue-800 text-white font-semibold text-sm">
                {c.seeApps} <ArrowRight className="w-4 h-4" />
              </a>
              <a href={wa} target="_blank" rel="noopener noreferrer" className="inline-flex justify-center items-center px-6 py-3 rounded-lg border border-slate-300 hover:border-slate-400 text-slate-800 font-semibold text-sm">
                {c.whatsapp}
              </a>
            </div>
            <ul className="grid grid-cols-2 gap-x-6 gap-y-2 text-sm text-slate-600 max-w-md">
              {c.points.map((p) => (
                <li key={p} className="flex items-center gap-2"><Check className="w-4 h-4 text-blue-700 shrink-0" />{p}</li>
              ))}
            </ul>
          </div>
          <div className="rounded-xl border border-slate-200 shadow-sm overflow-hidden bg-slate-50">
            <img src="/screenshots/kabrak-store-dashboard.png" alt="KABRAK Store : tableau de bord" className="w-full h-auto block" />
          </div>
        </div>
      </section>

      {/* Apps */}
      <section id="logiciels" className="py-16 sm:py-20 bg-slate-50 border-b border-slate-200 scroll-mt-20">
        <div className="max-w-6xl mx-auto px-5">
          <h2 className="font-display font-bold text-3xl text-slate-900 mb-2">{c.appsTitle}</h2>
          <p className="text-slate-600 mb-10 max-w-2xl">{c.appsSub}</p>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {c.apps.map((a) => (
              <div key={a.name} className="flex flex-col rounded-xl border border-slate-200 bg-white p-6">
                <div className="flex items-center gap-3 mb-4">
                  <img src={a.logo} alt="" className="w-11 h-11 rounded-lg object-contain border border-slate-100 bg-white" />
                  <h3 className="font-display font-bold text-lg text-slate-900">{a.name}</h3>
                </div>
                <p className="text-sm text-slate-500 mb-4">{a.who}</p>
                <ul className="space-y-2 text-sm text-slate-700 mb-5">
                  {a.points.map((p) => (
                    <li key={p} className="flex gap-2"><Check className="w-4 h-4 text-blue-700 mt-0.5 shrink-0" />{p}</li>
                  ))}
                </ul>
                <div className="mt-auto">
                  {a.price && <p className="text-sm font-semibold text-slate-900 mb-3">{a.price}</p>}
                  {a.cta === 'ask' ? (
                    <a href={`${WA}?text=${encodeURIComponent(`${c.waMsg} (${a.name})`)}`} target="_blank" rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue-700 hover:text-blue-900">
                      {c.ask} <ArrowRight className="w-4 h-4" />
                    </a>
                  ) : (
                    <a href={a.href} target="_blank" rel="noopener noreferrer"
                      className={a.cta === 'try'
                        ? 'inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-blue-700 hover:bg-blue-800 text-white text-sm font-semibold'
                        : 'inline-flex items-center gap-1.5 text-sm font-semibold text-blue-700 hover:text-blue-900'}>
                      {a.cta === 'try' ? c.try : c.visit} <ArrowRight className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>
            ))}
            {/* Custom work */}
            <div className="flex flex-col rounded-xl bg-slate-900 text-white p-6">
              <h3 className="font-display font-bold text-lg mb-3">{c.customTitle}</h3>
              <p className="text-sm text-slate-300 leading-relaxed mb-5">{c.customSub}</p>
              <Link to="/contact" className="mt-auto inline-flex items-center gap-1.5 text-sm font-semibold text-white hover:text-[#e0c15a]">
                {c.customBtn} <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Founder */}
      <section className="py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-5 grid sm:grid-cols-[200px_1fr] gap-8 items-center">
          <img src="/ceo-rikiatou.jpeg" alt={c.founderName} className="w-40 sm:w-full aspect-[4/5] object-cover object-top rounded-xl" />
          <div>
            <p className="text-sm font-semibold text-blue-700 mb-3">{c.founderLabel}</p>
            <p className="text-slate-700 text-lg leading-relaxed mb-5">« {c.founderText} »</p>
            <p className="font-semibold text-slate-900">{c.founderName}</p>
            <p className="text-sm text-slate-500 mb-4">{c.founderRole}</p>
            <Link to="/about" className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue-700 hover:text-blue-900">
              {c.founderLink} <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
