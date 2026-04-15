import { useEffect, useState } from 'react';
import emailjs from '@emailjs/browser';
import { Mail, MapPin, Clock, Send, MessageCircle, ArrowRight, CheckCircle } from 'lucide-react';

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
    `Bonjour KABRAK Eng!\n\nJe m'appelle ${form.name || '...'} et je souhaite discuter d'un projet.\n\n${form.message || ''}`
  );

  return (
    <main className="pt-24 overflow-x-hidden">

      {/* ── Header ─────────────────────────────────────── */}
      <section className="py-20 grid-bg relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse at 50% 0%, rgba(59,130,246,0.1) 0%, transparent 65%)' }} />
        <div className="max-w-3xl mx-auto px-5 text-center relative z-10">
          <span className="text-blue-400 text-xs font-semibold uppercase tracking-widest mb-3 block">Parlons business</span>
          <h1 className="font-display font-black text-5xl text-white mb-6">
            Contactez-<span className="gradient-text">nous</span>
          </h1>
          <p className="text-slate-400 text-lg leading-relaxed">
            Vous avez un projet ? Une idée ? Une question ? On vous répond sous 24h.
            Ou discutez directement sur WhatsApp pour une réponse immédiate.
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
                <MessageCircle className="w-6 h-6 text-green-400" />
              </div>
              <h3 className="text-white font-bold text-lg mb-2">WhatsApp Direct</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-5">
                La façon la plus rapide pour nous joindre. Réponse en moins d'1h pendant les heures ouvrables.
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
                Écrire sur WhatsApp
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Info cards */}
            <div className="reveal space-y-4">
              {[
                {
                  icon: Mail,
                  color: '#3b82f6',
                  label: 'Email',
                  value: 'contact@kabrakeng.com',
                  href: 'mailto:contact@kabrakeng.com',
                },
                {
                  icon: MapPin,
                  color: '#8b5cf6',
                  label: 'Localisation',
                  value: 'Cameroun — Afrique centrale',
                  href: null,
                },
                {
                  icon: Clock,
                  color: '#06b6d4',
                  label: 'Disponibilité',
                  value: 'Lun–Sam, 8h–18h WAT',
                  href: null,
                },
              ].map(({ icon: Icon, color, label, value, href }) => (
                <div key={label} className="flex items-center gap-4 p-4 rounded-xl border border-slate-800 bg-[#0a1628]/40">
                  <div className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0"
                    style={{ background: `${color}15`, border: `1px solid ${color}30` }}>
                    <Icon className="w-4 h-4" style={{ color }} />
                  </div>
                  <div>
                    <div className="text-slate-500 text-xs">{label}</div>
                    {href
                      ? <a href={href} className="text-white text-sm font-medium hover:text-blue-400 transition-colors">{value}</a>
                      : <div className="text-white text-sm font-medium">{value}</div>
                    }
                  </div>
                </div>
              ))}
            </div>

            {/* What to expect */}
            <div className="reveal p-6 rounded-2xl border border-slate-800 bg-[#0a1628]/30">
              <div className="text-white font-semibold text-sm mb-4">Ce qui se passe ensuite</div>
              <ul className="space-y-3">
                {[
                  'On vous répond sous 24h',
                  'Appel découverte de 30 min',
                  'Devis détaillé sous 48h',
                  'Démarrage du projet',
                ].map((step, i) => (
                  <li key={step} className="flex items-center gap-3 text-sm text-slate-300">
                    <span className="w-5 h-5 rounded-full bg-blue-600/20 border border-blue-500/30 text-blue-400
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
            <div className="rounded-2xl border border-slate-800 bg-[#0a1628]/60 p-8">
              {sent ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 rounded-full bg-green-500/15 border border-green-500/30 flex items-center justify-center mx-auto mb-5">
                    <CheckCircle className="w-8 h-8 text-green-400" />
                  </div>
                  <h3 className="font-display font-black text-2xl text-white mb-3">Message envoyé !</h3>
                  <p className="text-slate-400 text-sm leading-relaxed max-w-xs mx-auto">
                    Merci pour votre message. On vous répond dans les 24h. En attendant, vous pouvez aussi nous joindre sur WhatsApp.
                  </p>
                  <a
                    href={`https://wa.me/${phone}?text=${whatsappMsg}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-white transition-all"
                    style={{ background: 'linear-gradient(135deg, #25d366, #128c7e)' }}
                  >
                    Continuer sur WhatsApp
                  </a>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <h2 className="font-display font-black text-2xl text-white mb-1">Envoyez-nous un message</h2>
                    <p className="text-slate-400 text-sm">Décrivez votre projet et on reviendra vers vous rapidement.</p>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-slate-400 mb-1.5">Nom complet *</label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Moussa Njike"
                        className="w-full bg-[#050a14] border border-slate-700 focus:border-blue-500 rounded-xl
                          px-4 py-3 text-sm text-white placeholder-slate-600 outline-none transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-slate-400 mb-1.5">Email *</label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={form.email}
                        onChange={handleChange}
                        placeholder="vous@exemple.com"
                        className="w-full bg-[#050a14] border border-slate-700 focus:border-blue-500 rounded-xl
                          px-4 py-3 text-sm text-white placeholder-slate-600 outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-400 mb-1.5">Type de projet</label>
                    <select
                      name="service"
                      value={form.service}
                      onChange={handleChange}
                      className="w-full bg-[#050a14] border border-slate-700 focus:border-blue-500 rounded-xl
                        px-4 py-3 text-sm text-white outline-none transition-colors appearance-none"
                    >
                      <option value="">Sélectionnez un service...</option>
                      <option value="web">Développement Web / SaaS</option>
                      <option value="mobile">Application Mobile</option>
                      <option value="ai">Intelligence Artificielle</option>
                      <option value="digital">Transformation Digitale</option>
                      <option value="other">Autre</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-400 mb-1.5">Votre projet *</label>
                    <textarea
                      name="message"
                      required
                      rows={5}
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Décrivez votre projet : ce que vous voulez construire, vos délais, votre budget approximatif..."
                      className="w-full bg-[#050a14] border border-slate-700 focus:border-blue-500 rounded-xl
                        px-4 py-3 text-sm text-white placeholder-slate-600 outline-none transition-colors resize-none"
                    />
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3">
                    <button
                      type="submit"
                      disabled={sending}
                      className="flex-1 flex items-center justify-center gap-2 py-3.5 rounded-xl
                        bg-blue-600 hover:bg-blue-500 disabled:opacity-60 text-white font-bold text-sm
                        transition-all glow-btn"
                    >
                      {sending ? (
                        <>
                          <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          Envoi en cours...
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          Envoyer le message
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
