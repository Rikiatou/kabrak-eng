import { useLang } from '../context/LangContext';
import PageHeader from '../components/PageHeader';
import CtaBand from '../components/CtaBand';

const copy = {
  fr: {
    label: 'À propos',
    title: 'Une entreprise camerounaise de logiciels',
    sub: 'KABRAK Eng crée des logiciels pour les commerces et les entreprises d’Afrique depuis 2024.',
    storyTitle: 'Notre histoire',
    story: [
      'KABRAK Eng est née d’un constat simple : les logiciels de gestion vendus aux commerçants sont souvent pensés pour l’Europe. Ils demandent un ordinateur, une connexion stable et un paiement par carte.',
      'Nous faisons l’inverse. Nos logiciels marchent sur un téléphone, continuent quand internet coupe, se paient par Orange Money ou MTN MoMo et parlent français et anglais. Ils sont utilisés par des boutiques, des opticiens, des salons de beauté et des bureaux de change.',
      'Nous ne vendons pas un logiciel pour disparaître ensuite : nous le suivons et l’améliorons à partir de ce que nos clients nous demandent.',
    ],
    howTitle: 'Comment nous travaillons',
    how: [
      { title: 'Nous vivons ici', desc: 'Connexion lente, coupures de courant, Mobile Money : nos logiciels sont faits pour ça.' },
      { title: 'Vous parlez au développeur', desc: 'Pas d’intermédiaire. La personne qui vous répond est celle qui code.' },
      { title: 'Prix fixe, en FCFA', desc: 'Un devis clair avant de commencer, sans surprise.' },
      { title: 'Nous restons après la livraison', desc: 'Corrections, mises à jour et nouvelles fonctions selon vos retours.' },
    ],
    founderLabel: 'Fondatrice',
    founderName: 'Rikiatou Hassan Sale',
    founderRole: 'Fondatrice et ingénieure logiciel',
    founderBio: 'Ingénieure en développement logiciel, Rikiatou a fondé KABRAK Eng et conçoit elle-même les logiciels de la gamme KABRAK. Elle travaille directement avec les entreprises et les commerçants pour que chaque outil réponde à leur quotidien.',
    ctaTitle: 'Travaillons ensemble',
    ctaSub: 'Un projet ou une question ? Nous vous répondons.',
    ctaBtn: 'Nous contacter',
  },
  en: {
    label: 'About',
    title: 'A Cameroonian software company',
    sub: 'KABRAK Eng has been building software for African shops and businesses since 2024.',
    storyTitle: 'Our story',
    story: [
      'KABRAK Eng started from a simple observation: management software sold to merchants is often designed for Europe. It needs a computer, a stable connection and a card payment.',
      'We do the opposite. Our apps work on a phone, keep going when the internet drops, are paid with Orange Money or MTN MoMo, and speak French and English. They are used by shops, opticians, beauty salons and currency exchange offices.',
      'We do not sell software and disappear: we maintain it and improve it from what our clients ask for.',
    ],
    howTitle: 'How we work',
    how: [
      { title: 'We live here', desc: 'Slow connections, power cuts, Mobile Money: our apps are built for it.' },
      { title: 'You talk to the developer', desc: 'No middleman. The person who answers you is the one who codes.' },
      { title: 'Fixed price, in FCFA', desc: 'A clear quote before we start, no surprises.' },
      { title: 'We stay after delivery', desc: 'Fixes, updates and new features based on your feedback.' },
    ],
    founderLabel: 'Founder',
    founderName: 'Rikiatou Hassan Sale',
    founderRole: 'Founder and software engineer',
    founderBio: 'A software engineer, Rikiatou founded KABRAK Eng and designs the KABRAK apps herself. She works directly with businesses and merchants so that each tool fits their day-to-day work.',
    ctaTitle: 'Let’s work together',
    ctaSub: 'A project or a question? We will answer you.',
    ctaBtn: 'Contact us',
  },
};

export default function About() {
  const { lang } = useLang();
  const c = copy[lang] || copy.fr;

  return (
    <main className="bg-white text-slate-900">
      <PageHeader label={c.label} title={c.title} sub={c.sub} />

      <section className="py-14 sm:py-20">
        <div className="max-w-6xl mx-auto px-5 grid lg:grid-cols-[1fr_1.4fr] gap-10">
          <h2 className="font-display font-bold text-2xl sm:text-3xl text-slate-900">{c.storyTitle}</h2>
          <div className="space-y-4 text-slate-700 leading-relaxed">
            {c.story.map((p) => <p key={p}>{p}</p>)}
          </div>
        </div>
      </section>

      <section className="py-14 sm:py-20 bg-slate-50 border-y border-slate-200">
        <div className="max-w-6xl mx-auto px-5">
          <h2 className="font-display font-bold text-2xl sm:text-3xl text-slate-900 mb-10">{c.howTitle}</h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {c.how.map((h) => (
              <div key={h.title} className="border-t-2 border-blue-700 pt-4">
                <h3 className="font-semibold text-slate-900 mb-1">{h.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{h.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 sm:py-20">
        <div className="max-w-4xl mx-auto px-5 grid sm:grid-cols-[220px_1fr] gap-8 items-center">
          <img src="/ceo-rikiatou.jpeg" alt={c.founderName} className="w-44 sm:w-full aspect-[4/5] object-cover object-top rounded-xl" />
          <div>
            <p className="text-sm font-semibold text-blue-700 mb-2">{c.founderLabel}</p>
            <h2 className="font-display font-bold text-2xl text-slate-900">{c.founderName}</h2>
            <p className="text-sm text-slate-500 mb-4">{c.founderRole}</p>
            <p className="text-slate-700 leading-relaxed">{c.founderBio}</p>
          </div>
        </div>
      </section>

      <CtaBand title={c.ctaTitle} sub={c.ctaSub} btn={c.ctaBtn} />
    </main>
  );
}
