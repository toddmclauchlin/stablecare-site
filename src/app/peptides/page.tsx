import Link from "next/link";
import { peptides, GOALS, CATEGORIES } from "@/data/peptides";

export const metadata = { title: "Peptide Guide — 22+ Peptides Explained | [Brand Name]", description: "The most comprehensive peptide encyclopedia on the internet. Evidence-based guides on semaglutide, BPC-157, tirzepatide, and 20+ more peptides. No bro-science." };

export default function PeptidesHub() {
  return (
    <>
      <section className="bg-[var(--navy)] text-white py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <p className="text-amber-400 font-bold text-sm uppercase tracking-widest mb-4">The Peptide Guide</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Everything you need to know, in plain English.</h1>
          <p className="text-lg text-slate-300 max-w-2xl mb-8">22+ peptides. Evidence-based. No bro-science. No sales pitch. Just honest information to help you make informed decisions with your doctor.</p>
          <Link href="/peptides/quiz" className="inline-block bg-amber-500 hover:bg-amber-400 text-white font-bold px-8 py-4 rounded-lg transition">
            Take the Peptide Quiz →
          </Link>
        </div>
      </section>

      {/* Browse by Goal */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl font-bold text-[var(--navy)] mb-8">Browse by Goal</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {GOALS.map(g => {
              const count = peptides.filter(p => p.goals.includes(g.id)).length;
              return (
                <Link key={g.id} href={`/peptides?goal=${g.id}`} className="bg-white border border-slate-200 rounded-xl p-5 hover:shadow-md hover:border-amber-300 transition text-center">
                  <div className="text-3xl mb-2">{g.icon}</div>
                  <div className="font-bold text-sm text-[var(--navy)]">{g.label}</div>
                  <div className="text-xs text-slate-400 mt-1">{count} peptides</div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* All Peptides by Category */}
      {CATEGORIES.map(cat => {
        const catPeptides = peptides.filter(p => p.category === cat);
        return (
          <section key={cat} className="py-8">
            <div className="max-w-6xl mx-auto px-4 sm:px-6">
              <h2 className="text-xl font-bold text-[var(--navy)] mb-6 pb-2 border-b border-slate-200">{cat}</h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {catPeptides.map(p => (
                  <Link key={p.slug} href={`/peptides/${p.slug}`} className="bg-white border border-slate-200 rounded-xl p-5 hover:shadow-md hover:border-amber-300 transition group">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-bold text-[var(--navy)] group-hover:text-amber-600 transition">{p.name}</h3>
                      <span className={`text-xs font-bold px-2 py-0.5 rounded ${p.evidenceLevel === 'Strong' ? 'bg-green-100 text-green-700' : p.evidenceLevel === 'Moderate' ? 'bg-amber-100 text-amber-700' : 'bg-red-100 text-red-700'}`}>
                        {p.evidenceLevel}
                      </span>
                    </div>
                    <p className="text-sm text-slate-600 leading-relaxed line-clamp-2">{p.description}</p>
                    <div className="mt-3 flex items-center gap-3 text-xs text-slate-400">
                      <span>{p.route}</span>
                      <span>•</span>
                      <span>{p.type === 'fda-approved' ? 'FDA Approved' : p.type === 'prescription' ? 'Rx Required' : p.type === 'both' ? 'Rx or OTC' : 'Research'}</span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        );
      })}

      {/* CTA */}
      <section className="bg-[var(--cream)] py-16 mt-8">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-2xl font-bold text-[var(--navy)] mb-4">Not sure where to start?</h2>
          <p className="text-slate-600 mb-6">Answer 3 quick questions and get a personalized peptide recommendation.</p>
          <Link href="/peptides/quiz" className="inline-block bg-amber-500 hover:bg-amber-400 text-white font-bold px-8 py-4 rounded-lg transition">Take the Peptide Quiz →</Link>
        </div>
      </section>
    </>
  );
}
