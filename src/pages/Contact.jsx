import { useState } from 'react';
import emailjs from '@emailjs/browser';
import { Send, CheckCircle, Mail, MapPin, Clock } from 'lucide-react';
import PageHeader from '../components/PageHeader';
import { useLang } from '../context/LangContext';

const extra = {
  fr: {
    title: 'Parlons de votre besoin',
    sub: 'Une question sur un de nos logiciels ou un projet sur mesure ? Écrivez-nous sur WhatsApp ou par email.',
    waSub: 'C’est le moyen le plus rapide de nous joindre.',
    serviceOptions: ['KABRAK Store', 'KABRAK Optic Pro', 'KABRAK Beauty & Spa', 'KABRAK Exchange', 'KABRAK Retail ERP', 'Logiciel sur mesure', 'Application mobile', 'Site web', 'Autre'],
    labelLocation: 'Localisation', labelHours: 'Disponibilité',
  },
  en: {
    title: 'Tell us what you need',
    sub: 'A question about one of our apps or a custom project? Message us on WhatsApp or by email.',
    waSub: 'It is the fastest way to reach us.',
    serviceOptions: ['KABRAK Store', 'KABRAK Optic Pro', 'KABRAK Beauty & Spa', 'KABRAK Exchange', 'KABRAK Retail ERP', 'Custom software', 'Mobile app', 'Website', 'Other'],
    labelLocation: 'Location', labelHours: 'Availability',
  },
};

export default function Contact() {
  const { t, lang } = useLang();
  const c = { ...t.contact, ...(extra[lang] || extra.fr) };
  const [form, setForm] = useState({ name: '', email: '', service: '', message: '' });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const handleChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    try {
      await emailjs.send(
        'service_qoa8cco',
        'template_szlgd0f',
        {
          from_name: form.name,
          from_email: form.email,
          service: form.service,
          message: form.message,
        },
        'L3oI8SYlm0E7V65jQ'
      );
      setSent(true);
    } catch {
      alert('Erreur lors de l\'envoi. Veuillez réessayer ou nous contacter sur WhatsApp.');
    } finally {
      setSending(false);
    }
  };

  const phone = '237653561862';
  const whatsappMsg = encodeURIComponent(
    `${t.whatsapp}\n\n${form.name ? form.name + '\n' : ''}${form.message || ''}`
  );

  const input = 'w-full bg-white border border-slate-300 focus:border-blue-700 rounded-lg px-4 py-3 text-sm text-slate-900 placeholder-slate-400 outline-none transition-colors';
  const waHref = `https://wa.me/${phone}?text=${whatsappMsg}`;

  return (
    <main className="bg-white text-slate-900">
      <PageHeader label={c.label} title={c.title} sub={c.sub} />

      <section className="py-14 sm:py-20">
        <div className="max-w-6xl mx-auto px-5 grid md:grid-cols-5 gap-10">
          <div className="md:col-span-2 space-y-6">
            <div className="rounded-xl border border-slate-200 p-6">
              <h2 className="font-semibold text-slate-900 mb-1">{c.waTitle}</h2>
              <p className="text-sm text-slate-600 mb-4">{c.waSub}</p>
              <a href={waHref} target="_blank" rel="noopener noreferrer"
                className="inline-flex w-full justify-center items-center px-5 py-3 rounded-lg bg-[#1fa855] hover:bg-[#188d47] text-white font-semibold text-sm">
                {c.waBtn}
              </a>
            </div>
            <ul className="space-y-4 text-sm">
              <li className="flex gap-3"><Mail className="w-5 h-5 text-blue-700 shrink-0" /><div><div className="text-slate-500">Email</div><a href="mailto:contact@kabrakeng.com" className="font-medium text-slate-900 hover:text-blue-700">contact@kabrakeng.com</a></div></li>
              <li className="flex gap-3"><MapPin className="w-5 h-5 text-blue-700 shrink-0" /><div><div className="text-slate-500">{c.labelLocation}</div><div className="font-medium text-slate-900">{c.location}</div></div></li>
              <li className="flex gap-3"><Clock className="w-5 h-5 text-blue-700 shrink-0" /><div><div className="text-slate-500">{c.labelHours}</div><div className="font-medium text-slate-900">{c.availability}</div></div></li>
            </ul>
            <div className="border-t border-slate-200 pt-6">
              <h2 className="font-semibold text-slate-900 mb-3">{c.nextTitle}</h2>
              <ol className="space-y-2 text-sm text-slate-700">
                {c.nextSteps.map((step, i) => (
                  <li key={step} className="flex gap-3"><span className="text-blue-700 font-semibold w-4">{i + 1}.</span>{step}</li>
                ))}
              </ol>
            </div>
          </div>

          <div className="md:col-span-3">
            <div className="rounded-xl border border-slate-200 p-6 sm:p-8">
              {sent ? (
                <div className="text-center py-10">
                  <CheckCircle className="w-10 h-10 text-green-600 mx-auto mb-4" />
                  <h2 className="font-display font-bold text-2xl text-slate-900 mb-2">{c.sentTitle}</h2>
                  <p className="text-sm text-slate-600 max-w-sm mx-auto mb-6">{c.sentSub}</p>
                  <a href={waHref} target="_blank" rel="noopener noreferrer"
                    className="inline-flex items-center px-5 py-2.5 rounded-lg bg-[#1fa855] hover:bg-[#188d47] text-white text-sm font-semibold">
                    {c.continueWa}
                  </a>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <h2 className="font-display font-bold text-xl text-slate-900 mb-1">{c.formTitle}</h2>
                    <p className="text-sm text-slate-600">{c.formSub}</p>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <label className="block text-sm font-medium text-slate-700">{c.labelName}
                      <input type="text" name="name" required value={form.name} onChange={handleChange} placeholder={c.placeholderName} className={`${input} mt-1.5`} />
                    </label>
                    <label className="block text-sm font-medium text-slate-700">{c.labelEmail}
                      <input type="email" name="email" required value={form.email} onChange={handleChange} placeholder={c.placeholderEmail} className={`${input} mt-1.5`} />
                    </label>
                  </div>
                  <label className="block text-sm font-medium text-slate-700">{c.labelService}
                    <select name="service" value={form.service} onChange={handleChange} className={`${input} mt-1.5`}>
                      <option value="">—</option>
                      {c.serviceOptions.map((opt) => <option key={opt} value={opt}>{opt}</option>)}
                    </select>
                  </label>
                  <label className="block text-sm font-medium text-slate-700">{c.labelMsg}
                    <textarea name="message" required rows={5} value={form.message} onChange={handleChange} placeholder={c.placeholderMsg} className={`${input} mt-1.5 resize-none`} />
                  </label>
                  <button type="submit" disabled={sending}
                    className="w-full flex items-center justify-center gap-2 py-3 rounded-lg bg-blue-700 hover:bg-blue-800 disabled:opacity-60 text-white font-semibold text-sm">
                    <Send className="w-4 h-4" />{sending ? c.sending : c.sendBtn}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
