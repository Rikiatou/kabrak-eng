import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function CtaBand({ title, sub, btn, to = '/contact' }) {
  return (
    <section className="py-14 sm:py-16 bg-slate-50 border-t border-slate-200">
      <div className="max-w-6xl mx-auto px-5 flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <h2 className="font-display font-bold text-2xl text-slate-900 mb-2">{title}</h2>
          {sub && <p className="text-slate-600 max-w-xl">{sub}</p>}
        </div>
        <Link to={to} className="inline-flex justify-center items-center gap-2 px-6 py-3 rounded-lg bg-blue-700 hover:bg-blue-800 text-white font-semibold text-sm shrink-0">
          {btn} <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </section>
  );
}
