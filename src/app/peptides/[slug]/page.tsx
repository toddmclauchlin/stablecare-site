import Link from "next/link";
import { notFound } from "next/navigation";
import { peptides, getPeptideBySlug } from "@/data/peptides";
import type { Metadata } from "next";

export async function generateStaticParams() {
  return peptides.map(p => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const p = getPeptideBySlug(slug);
  if (!p) return {};
  return { title: `${p.name} — What It Is, Evidence, Safety & More | [Brand Name]`, description: p.description.slice(0, 160) };
}

export default async function PeptidePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const p = getPeptideBySlug(slug);
  if (!p) notFound();

  return (
    <>
      {/* Header */}
      <section className="bg-[var(--navy)] text-white py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="flex items-center gap-3 mb-4 flex-wrap">
            <Link href="/peptides" className="text-slate-400 hover:text-amber-400 text-sm">← Peptide Guide</Link>
            <span className="text-slate-500">|</span>
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400">{p.category}</span>
            <span className={`text-xs font-bold px-2 py-0.5 rounded ${p.evidenceLevel === 'Strong' ? 'bg-green-500/20 text-green-400' : p.evidenceLevel === 'Moderate' ? 'bg-amber-500/20 text-amber-400' : 'bg-red-500/20 text-red-400'}`}>
              {p.evidenceLevel} Evidence
            </span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">{p.name}</h1>
          <p className="text-lg text-slate-300 leading-relaxed">{p.description}</p>
        </div>
      </section>

      {/* Quick Facts */}
      <section className="bg-[var(--cream)] border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
            <div><span className="text-slate-500 block text-xs uppercase tracking-wider mb-1">Route</span><span className="font-bold text-[var(--navy)]">{p.route}</span></div>
            <div><span className="text-slate-500 block text-xs uppercase tracking-wider mb-1">Type</span><span className="font-bold text-[var(--navy)]">{p.type === 'fda-approved' ? 'FDA Approved' : p.type === 'prescription' ? 'Prescription Required' : p.type === 'both' ? 'Rx or OTC' : 'Research Compound'}</span></div>
            <div><span className="text-slate-500 block text-xs uppercase tracking-wider mb-1">Evidence</span><span className="font-bold text-[var(--navy)]">{p.evidenceLevel}</span></div>
            <div><span className="text-slate-500 block text-xs uppercase tracking-wider mb-1">Goals</span><span className="font-bold text-[var(--navy)]">{p.goals.map(g => g.replace(/_/g, ' ')).join(', ')}</span></div>
          </div>
        </div>
      </section>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12 space-y-12">

        <section>
          <h2 className="text-2xl font-bold text-[var(--navy)] mb-4">How It Works</h2>
          <p className="text-slate-700 leading-relaxed">{p.mechanism}</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[var(--navy)] mb-4">What the Evidence Says</h2>
          <div className={`inline-flex items-center gap-2 mb-4 px-3 py-1.5 rounded-lg text-sm font-bold ${p.evidenceLevel === 'Strong' ? 'bg-green-100 text-green-700' : p.evidenceLevel === 'Moderate' ? 'bg-amber-100 text-amber-700' : 'bg-red-100 text-red-700'}`}>
            <span>{p.evidenceLevel === 'Strong' ? '✓' : p.evidenceLevel === 'Moderate' ? '◐' : '○'}</span>
            <span>{p.evidenceLevel} Evidence Level</span>
          </div>
          <p className="text-slate-700 leading-relaxed">{p.evidence}</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[var(--navy)] mb-4">Who Might Benefit</h2>
          <p className="text-slate-700 leading-relaxed">{p.whoIsItFor}</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[var(--navy)] mb-4">Safety & Side Effects</h2>
          <p className="text-slate-700 leading-relaxed">{p.sideEffects}</p>
        </section>

        <section className="bg-blue-50 border border-blue-200 rounded-xl p-6">
          <h2 className="text-xl font-bold text-[var(--navy)] mb-4">FDA Status</h2>
          <p className="text-slate-700 leading-relaxed">{p.fda}</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[var(--navy)] mb-4">Recommended Supplements</h2>
          <p className="text-slate-600 mb-4">These supplements are commonly paired with {p.name} to support its effects or address potential nutritional gaps:</p>
          <div className="flex flex-wrap gap-2">
            {p.supplements.map((s, i) => (
              <span key={i} className="bg-amber-50 border border-amber-200 text-amber-800 text-sm px-4 py-2 rounded-lg">{s}</span>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[var(--navy)] mb-4">Common Stacks</h2>
          <p className="text-slate-600 mb-4">{p.name} is often combined with:</p>
          <ul className="space-y-2">
            {p.stacks.map((s, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="text-amber-500 mt-1">•</span>
                <span className="text-slate-700">{s}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* CTA */}
        <section className="bg-[var(--navy)] text-white rounded-2xl p-8 md:p-12">
          <h2 className="text-2xl font-bold mb-3">Want to explore {p.name} with a doctor?</h2>
          <p className="text-slate-300 mb-6">Our licensed physicians can evaluate whether {p.name} is appropriate for your health goals and prescribe it if medically indicated.</p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/start" className="bg-amber-500 hover:bg-amber-400 text-white font-bold px-6 py-3 rounded-lg text-center transition">
              Talk to a Doctor →
            </Link>
            <Link href="/peptides/quiz" className="border border-white/30 hover:bg-white/10 text-white font-bold px-6 py-3 rounded-lg text-center transition">
              Take the Peptide Quiz
            </Link>
          </div>
          <p className="text-xs text-slate-400 mt-4">All prescribing decisions are made by licensed healthcare providers. {p.type !== 'fda-approved' ? 'This compound is not FDA-approved.' : ''}</p>
        </section>

        {/* Disclaimer */}
        <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 text-xs text-slate-500 leading-relaxed">
          <strong>Medical Disclaimer:</strong> This page is for educational purposes only and does not constitute medical advice. {p.name} {p.type !== 'fda-approved' ? 'is not FDA-approved for human use' : 'is FDA-approved for specific indications — off-label use should be discussed with your provider'}. Always consult a licensed healthcare provider before starting any peptide therapy. Individual results vary.
        </div>
      </div>
    </>
  );
}
