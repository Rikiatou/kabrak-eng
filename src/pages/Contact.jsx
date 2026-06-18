import { useEffect, useState } from 'react';
import emailjs from '@emailjs/browser';
import { Send, ArrowRight, CheckCircle } from 'lucide-react';
import { useLang } from '../context/LangContext';

/* ── Custom SVG Icons ────────────────────────────────── */
const MailIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
    <polyline points="22,6 12,13 2,6" />
  </svg>
);

const MapPinIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

const ClockIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <polyline points="12 6 12 12 16 14" />
  </svg>
);

const MessageCircleIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
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

export default function Contact() {
  useReveal();
  const { t } = useLang();
  const c = t.contact;
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
    } catch (err) {
      alert('Erreur lors de l\'envoi. Veuillez réessayer ou nous contacter sur WhatsApp.');
    } finally {
      setSending(false);
    }
  };

  const phone = '237653561862';
  const whatsappMsg = encodeURIComponent(
    `${t.whatsapp}\n\n${form.name ? form.name + '\n' : ''}${form.message || ''}`
  );

  return (
    <main className="pt-24 overflow-x-hidden">

      {/* ── Header ─────────────────────────────────────── */}
      <section className="py-20 grid-bg relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse at 50% 0%, rgba(201,162,39,0.08) 0%, transparent 65%)' }} />
        <div className="max-w-3xl mx-auto px-5 text-center relative z-10">
          <span className="text-[#c9a227] text-xs font-semibold uppercase tracking-widest mb-3 block">{c.label}</span>
          <h1 className="font-display font-black text-3xl sm:text-5xl text-white mb-6">
            <span className="gradient-text">{c.title}</span>
          </h1>
          <p className="text-slate-400 text-base sm:text-lg leading-relaxed">
            {c.sub}
          </p>
        </div>
      </section>

      {/* ── Main content ───────────────────────────────── */}
      <section className="py-20 max-w-6xl mx-auto px-5">
        <div className="grid md:grid-cols-5 gap-10">

          {/* Left: info + WhatsApp */}
          <div className="md:col-span-2 space-y-6">

            {/* WhatsApp CTA (primary) */}
            <div className="reveal rounded-2xl p-7 border border-green-500/30 bg-green-500/5">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                style={{ background: 'rgba(37,211,102,0.15)' }}>
                <div className="w-6 h-6 text-green-400">
                  <MessageCircleIcon />
                </div>
              </div>
              <h3 className="text-white font-bold text-lg mb-2">{c.waTitle}</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-5">
                {c.waSub}
              </p>
              <a
                href={`https://wa.me/${phone}?text=${whatsappMsg}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 py-3 px-5 rounded-xl font-semibold text-sm text-white transition-all w-full"
                style={{ background: 'linear-gradient(135deg, #25d366, #128c7e)' }}
              >
                <svg viewBox="0 0 24 24" className="w-4 h-4 fill-white">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                {c.waBtn}
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Info cards */}
            <div className="reveal space-y-4">
              {[
                {
                  icon: MailIcon,
                  color: '#c9a227',
                  label: 'Email',
                  value: 'contact@kabrakeng.com',
                  href: 'mailto:contact@kabrakeng.com',
                },
                {
                  icon: MapPinIcon,
                  color: '#8b6914',
                  label: 'Localisation',
                  value: c.location,
                  href: null,
                },
                {
                  icon: ClockIcon,
                  color: '#b87333',
                  label: 'Disponibilité',
                  value: c.availability,
                  href: null,
                },
              ].map(({ icon: Icon, color, label, value, href }) => (
                <div key={label} className="flex items-center gap-4 p-4 rounded-xl border border-slate-800 bg-[#1a1a1a]/40">
                  <div className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0"
                    style={{ background: `${color}15`, border: `1px solid ${color}30` }}>
                    <div className="w-4 h-4" style={{ color }}>
                      <Icon />
                    </div>
                  </div>
                  <div>
                    <div className="text-slate-500 text-xs">{label}</div>
                    {href
                      ? <a href={href} className="text-white text-sm font-medium hover:text-[#c9a227] transition-colors">{value}</a>
                      : <div className="text-white text-sm font-medium">{value}</div>
                    }
                  </div>
                </div>
              ))}
            </div>

            {/* What to expect */}
            <div className="reveal p-6 rounded-2xl border border-slate-800 bg-[#1a1a1a]/30">
              <div className="text-white font-semibold text-sm mb-4">{c.nextTitle}</div>
              <ul className="space-y-3">
                {c.nextSteps.map((step, i) => (
                  <li key={step} className="flex items-center gap-3 text-sm text-slate-300">
                    <span className="w-5 h-5 rounded-full bg-[#c9a227]/20 border border-[#c9a227]/30 text-[#c9a227]
                      text-xs flex items-center justify-center font-bold shrink-0">
                      {i + 1}
                    </span>
                    {step}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right: Form */}
          <div className="md:col-span-3 reveal">
            <div className="rounded-2xl border border-slate-800 bg-[#1a1a1a]/60 p-8">
              {sent ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 rounded-full bg-green-500/15 border border-green-500/30 flex items-center justify-center mx-auto mb-5">
                    <CheckCircle className="w-8 h-8 text-green-400" />
                  </div>
                  <h3 className="font-display font-black text-2xl text-white mb-3">{c.sentTitle}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed max-w-xs mx-auto">
                    {c.sentSub}
                  </p>
                  <a
                    href={`https://wa.me/${phone}?text=${whatsappMsg}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-white transition-all"
                    style={{ background: 'linear-gradient(135deg, #25d366, #128c7e)' }}
                  >
                    {c.continueWa}
                  </a>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <h2 className="font-display font-black text-2xl text-white mb-1">{c.formTitle}</h2>
                    <p className="text-slate-400 text-sm">{c.formSub}</p>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-slate-400 mb-1.5">{c.labelName}</label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={form.name}
                        onChange={handleChange}
                        placeholder={c.placeholderName}
                        className="w-full bg-[#0a0a0a] border border-slate-700 focus:border-[#c9a227] rounded-xl
                          px-4 py-3 text-sm text-white placeholder-slate-600 outline-none transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-slate-400 mb-1.5">{c.labelEmail}</label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={form.email}
                        onChange={handleChange}
                        placeholder={c.placeholderEmail}
                        className="w-full bg-[#0a0a0a] border border-slate-700 focus:border-[#c9a227] rounded-xl
                          px-4 py-3 text-sm text-white placeholder-slate-600 outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-400 mb-1.5">{c.labelService}</label>
                    <select
                      name="service"
                      value={form.service}
                      onChange={handleChange}
                      className="w-full bg-[#050a14] border border-slate-700 focus:border-blue-500 rounded-xl
                        px-4 py-3 text-sm text-white outline-none transition-colors appearance-none"
                    >
                      <option value="">{c.labelService}...</option>
                      {c.serviceOptions.map((opt) => (
                        <option key={opt} value={opt}>{opt}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-400 mb-1.5">{c.labelMsg}</label>
                    <textarea
                      name="message"
                      required
                      rows={5}
                      value={form.message}
                      onChange={handleChange}
                      placeholder={c.placeholderMsg}
                      className="w-full bg-[#050a14] border border-slate-700 focus:border-blue-500 rounded-xl
                        px-4 py-3 text-sm text-white placeholder-slate-600 outline-none transition-colors resize-none"
                    />
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3">
                    <button
                      type="submit"
                      disabled={sending}
                      className="flex-1 flex items-center justify-center gap-2 py-3.5 rounded-xl
                        bg-[#c9a227] hover:bg-[#b8952a] disabled:opacity-60 text-white font-bold text-sm
                        transition-all glow-btn"
                    >
                      {sending ? (
                        <>
                          <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          {c.sending}
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          {c.sendBtn}
                        </>
                      )}
                    </button>
                    <a
                      href={`https://wa.me/${phone}?text=${whatsappMsg}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl text-white font-semibold text-sm transition-all"
                      style={{ background: 'linear-gradient(135deg, #25d366, #128c7e)' }}
                    >
                      <svg viewBox="0 0 24 24" className="w-4 h-4 fill-white">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                      </svg>
                      WhatsApp
                    </a>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
