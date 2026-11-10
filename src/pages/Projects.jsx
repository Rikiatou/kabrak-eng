import { ArrowRight, Check } from 'lucide-react';
import { useLang } from '../context/LangContext';
import { getApps, waLink } from '../data/apps';
import PageHeader from '../components/PageHeader';
import CtaBand from '../components/CtaBand';

const copy = {
  fr: {
    label: 'Nos logiciels',
    title: 'Un logiciel pour chaque métier',
    sub: 'Nous avons construit et nous maintenons ces applications. Chacune est utilisée par des commerces au Cameroun.',
    try: 'Essayer gratuitement', visit: 'Ouvrir le site', ask: 'Demander une démo',
    askMsg: 'Bonjour KABRAK Eng, je voudrais une démo de',
    ctaTitle: 'Votre métier n’est pas dans la liste ?',
    ctaSub: 'Expliquez-nous comment vous travaillez. Nous vous disons si un de nos logiciels convient ou ce qu’il faudrait développer.',
    ctaBtn: 'Parler de mon projet',
  },
  en: {
    label: 'Our software',
    title: 'One app for each trade',
    sub: 'We built these apps and we maintain them. Each one is used by businesses in Cameroon.',
    try: 'Try for free', visit: 'Open the site', ask: 'Ask for a demo',
    askMsg: 'Hello KABRAK Eng, I would like a demo of',
    ctaTitle: 'Your trade is not listed?',
    ctaSub: 'Tell us how you work. We will tell you if one of our apps fits or what would need to be built.',
    ctaBtn: 'Talk about my project',
  },
};

export default function Projects() {
  const { lang } = useLang();
  const c = copy[lang] || copy.fr;
  const apps = getApps(lang);

  return (
    <main className="bg-white text-slate-900">
      <PageHeader label={c.label} title={c.title} sub={c.sub} />

      {apps.map((a, i) => {
        const href = a.cta === 'ask' ? waLink(`${c.askMsg} ${a.name}.`) : a.href;
        const label = a.cta === 'try' ? c.try : a.cta === 'ask' ? c.ask : c.visit;
        return (
          <section key={a.name} className={`py-14 sm:py-20 border-b border-slate-200 ${i % 2 ? 'bg-slate-50' : 'bg-white'}`}>
            <div className="max-w-6xl mx-auto px-5 grid lg:grid-cols-2 gap-10 items-center">
              <div className={i % 2 ? 'lg:order-2' : ''}>
                <div className="flex items-center gap-3 mb-4">
                  <img src={a.logo} alt="" className="w-12 h-12 rounded-lg object-contain border border-slate-200 bg-white" />
                  <div>
                    <h2 className="font-display font-bold text-2xl text-slate-900">{a.name}</h2>
                    <p className="text-sm text-slate-500">{a.who}</p>
                  </div>
                </div>
                <p className="text-slate-700 leading-relaxed mb-6">{a.desc}</p>
                <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-2 text-sm text-slate-700 mb-6">
                  {a.features.map((f) => (
                    <li key={f} className="flex gap-2"><Check className="w-4 h-4 text-blue-700 mt-0.5 shrink-0" />{f}</li>
                  ))}
                </ul>
                {a.price && <p className="text-sm font-semibold text-slate-900 mb-4">{a.price}</p>}
                <a href={href} target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-blue-700 hover:bg-blue-800 text-white text-sm font-semibold">
                  {label} <ArrowRight className="w-4 h-4" />
                </a>
              </div>
              <div className={`rounded-xl border border-slate-200 shadow-sm overflow-hidden bg-white ${i % 2 ? 'lg:order-1' : ''}`}>
                <img src={a.screenshot} alt={a.name} loading="lazy" className="w-full h-auto block" />
              </div>
            </div>
          </section>
        );
      })}

      <CtaBand title={c.ctaTitle} sub={c.ctaSub} btn={c.ctaBtn} />
    </main>
  );
}
