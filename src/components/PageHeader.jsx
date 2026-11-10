export default function PageHeader({ label, title, sub }) {
  return (
    <section className="pt-28 sm:pt-32 pb-12 sm:pb-16 border-b border-slate-200 bg-white">
      <div className="max-w-6xl mx-auto px-5">
        {label && <p className="text-sm font-semibold text-blue-700 mb-3">{label}</p>}
        <h1 className="font-display font-bold text-3xl sm:text-5xl leading-tight tracking-tight text-slate-900 mb-4 max-w-3xl">{title}</h1>
        {sub && <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-2xl">{sub}</p>}
      </div>
    </section>
  );
}
