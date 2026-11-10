import { Check } from 'lucide-react';
import { useLang } from '../context/LangContext';
import PageHeader from '../components/PageHeader';
import CtaBand from '../components/CtaBand';

const copy = {
  fr: {
    label: 'Sur mesure',
    title: 'Nous développons le logiciel dont votre entreprise a besoin',
    sub: 'Si aucun de nos logiciels ne correspond à votre activité, nous construisons le vôtre. Vous parlez directement à la personne qui le développe.',
    list: [
      { title: 'Logiciel de gestion', desc: 'Ventes, stock, clients, factures, comptabilité : un outil fait pour votre façon de travailler.', features: ['Application web', 'Tableau de bord', 'Plusieurs utilisateurs et magasins', 'Formation de votre équipe'] },
      { title: 'Application mobile', desc: 'Une application Android et iOS pour vos clients ou votre équipe.', features: ['Android et iOS', 'Marche sans internet', 'Paiement Mobile Money', 'Notifications'] },
      { title: 'Site web', desc: 'Un site clair qui présente votre entreprise et vous amène des clients.', features: ['Site vitrine', 'Catalogue de produits', 'Commande sur WhatsApp', 'Adapté au téléphone'] },
      { title: 'Automatisation', desc: 'Des tâches répétitives faites par le logiciel : rapports, rappels, messages.', features: ['Rapports automatiques', 'Rappels WhatsApp', 'Tableaux de chiffres', 'Assistant IA intégré'] },
      { title: 'Hébergement et suivi', desc: 'Nous mettons votre logiciel en ligne et nous le gardons à jour.', features: ['Mise en ligne', 'Nom de domaine et HTTPS', 'Sauvegardes', 'Corrections et mises à jour'] },
    ],
    processTitle: 'Comment ça se passe',
    process: [
      { title: 'Appel de 30 minutes', desc: 'Vous expliquez votre besoin. Nous vous disons si c’est faisable.' },
      { title: 'Devis sous 48 h', desc: 'Un prix fixe en FCFA et un planning précis.' },
      { title: 'Développement', desc: 'Vous voyez l’avancement à chaque étape et vous donnez votre avis.' },
      { title: 'Mise en ligne', desc: 'Installation, formation de votre équipe, puis suivi.' },
    ],
    ctaTitle: 'Vous avez un projet ?',
    ctaSub: 'Décrivez votre idée. Nous vous disons si c’est faisable et à quel prix.',
    ctaBtn: 'Demander un devis',
  },
  en: {
    label: 'Custom work',
    title: 'We build the software your business needs',
    sub: 'If none of our apps fits your business, we build yours. You talk directly to the person who develops it.',
    list: [
      { title: 'Management software', desc: 'Sales, stock, clients, invoices, accounting: a tool built around the way you work.', features: ['Web app', 'Dashboard', 'Several users and stores', 'Training for your team'] },
      { title: 'Mobile app', desc: 'An Android and iOS app for your clients or your team.', features: ['Android and iOS', 'Works offline', 'Mobile Money payment', 'Notifications'] },
      { title: 'Website', desc: 'A clear website that presents your business and brings you clients.', features: ['Company website', 'Product catalogue', 'WhatsApp ordering', 'Phone-friendly'] },
      { title: 'Automation', desc: 'Repetitive tasks done by software: reports, reminders, messages.', features: ['Automatic reports', 'WhatsApp reminders', 'Dashboards', 'Built-in AI assistant'] },
      { title: 'Hosting and support', desc: 'We put your software online and keep it up to date.', features: ['Going live', 'Domain name and HTTPS', 'Backups', 'Fixes and updates'] },
    ],
    processTitle: 'How it works',
    process: [
      { title: '30-minute call', desc: 'You explain what you need. We tell you if it is feasible.' },
      { title: 'Quote within 48 h', desc: 'A fixed price in FCFA and a clear schedule.' },
      { title: 'Development', desc: 'You see progress at each step and give your feedback.' },
      { title: 'Going live', desc: 'Installation, team training, then follow-up.' },
    ],
    ctaTitle: 'Have a project?',
    ctaSub: 'Describe your idea. We will tell you if it is feasible and at what price.',
    ctaBtn: 'Ask for a quote',
  },
};

export default function Services() {
  const { lang } = useLang();
  const c = copy[lang] || copy.fr;

  return (
    <main className="bg-white text-slate-900">
      <PageHeader label={c.label} title={c.title} sub={c.sub} />

      <section className="py-14 sm:py-20">
        <div className="max-w-6xl mx-auto px-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {c.list.map((s) => (
            <div key={s.title} className="rounded-xl border border-slate-200 p-6">
              <h2 className="font-display font-bold text-lg text-slate-900 mb-2">{s.title}</h2>
              <p className="text-sm text-slate-600 leading-relaxed mb-4">{s.desc}</p>
              <ul className="space-y-2 text-sm text-slate-700">
                {s.features.map((f) => (
                  <li key={f} className="flex gap-2"><Check className="w-4 h-4 text-blue-700 mt-0.5 shrink-0" />{f}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="py-14 sm:py-20 bg-slate-50 border-t border-slate-200">
        <div className="max-w-6xl mx-auto px-5">
          <h2 className="font-display font-bold text-2xl sm:text-3xl text-slate-900 mb-10">{c.processTitle}</h2>
          <ol className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {c.process.map((p, i) => (
              <li key={p.title}>
                <span className="block text-sm font-semibold text-blue-700 mb-2">{String(i + 1).padStart(2, '0')}</span>
                <h3 className="font-semibold text-slate-900 mb-1">{p.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{p.desc}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <CtaBand title={c.ctaTitle} sub={c.ctaSub} btn={c.ctaBtn} />
    </main>
  );
}
