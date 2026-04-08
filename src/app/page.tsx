import Link from "next/link";
import { peptides, GOALS, CATEGORIES } from "@/data/peptides";

export default function Home() {
  const featuredPeptides = peptides.filter(p => ["semaglutide", "tirzepatide", "bpc-157", "cjc-1295-ipamorelin", "ghk-cu", "pt-141"].includes(p.slug));

  return (
    <>
      {/* HERO */}
      <section className="bg-[var(--navy)] text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--navy-dark)] via-[var(--navy)] to-[var(--navy-light)] opacity-80" />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 py-20 md:py-28">
          <div className="max-w-3xl">
            <p className="text-amber-400 font-bold text-sm uppercase tracking-widest mb-4">Peptide Education + Doctor-Supervised Programs</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Understand peptides.<br />
              Get the right one.<br />
              <span className="text-amber-400">From a real doctor.</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-300 leading-relaxed mb-8 max-w-2xl">
              The internet&apos;s most comprehensive peptide guide — backed by licensed physicians who can prescribe what&apos;s right for you. No bro-science. No fake results. Just real information, honestly delivered.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/peptides" className="bg-white/10 hover:bg-white/20 border-2 border-white text-white font-bold px-8 py-4 rounded-lg text-center transition text-lg">
                Explore Peptides
              </Link>
              <Link href="/start" className="bg-amber-500 hover:bg-amber-400 text-white font-bold px-8 py-4 rounded-lg text-center transition text-lg">
                Start Weight Loss Program →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* THE PROBLEM */}
      <section className="bg-[var(--cream)] py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--navy)] mb-6">
            100+ peptides. Zero trustworthy sources.
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed max-w-3xl mx-auto">
            Reddit threads contradict each other. &ldquo;Research only&rdquo; vendors sell you chemicals with no doctor involved.
            And the telehealth companies that <em>do</em> have doctors? They just want to sell you GLP-1s without explaining anything.
            In March 2026, the FDA sent warning letters to 30+ telehealth companies for misleading patients.
          </p>
          <p className="text-xl font-serif font-bold text-[var(--navy)] mt-8">
            We built something different.
          </p>
        </div>
      </section>

      {/* THREE PILLARS */}
      <section className="py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white border border-slate-200 rounded-2xl p-8 hover:shadow-lg transition">
              <div className="text-4xl mb-4">📚</div>
              <h3 className="text-xl font-bold text-[var(--navy)] mb-3">Learn</h3>
              <p className="text-slate-600 leading-relaxed">
                Browse our peptide encyclopedia. 22+ peptides explained in plain English — mechanisms, evidence levels, safety profiles, and supplement pairings. No jargon. No sales pitch.
              </p>
              <Link href="/peptides" className="inline-block mt-4 text-amber-600 font-bold text-sm hover:text-amber-700">
                Browse All Peptides →
              </Link>
            </div>
            <div className="bg-white border border-slate-200 rounded-2xl p-8 hover:shadow-lg transition">
              <div className="text-4xl mb-4">🧭</div>
              <h3 className="text-xl font-bold text-[var(--navy)] mb-3">Discover</h3>
              <p className="text-slate-600 leading-relaxed">
                Take our free Peptide Quiz. Tell us your goals, experience level, and preferences — we&apos;ll match you with the right peptides and show you exactly what supplements support them.
              </p>
              <Link href="/peptides/quiz" className="inline-block mt-4 text-amber-600 font-bold text-sm hover:text-amber-700">
                Take the Quiz →
              </Link>
            </div>
            <div className="bg-white border border-slate-200 rounded-2xl p-8 hover:shadow-lg transition">
              <div className="text-4xl mb-4">👨‍⚕️</div>
              <h3 className="text-xl font-bold text-[var(--navy)] mb-3">Get Treated</h3>
              <p className="text-slate-600 leading-relaxed">
                Talk to a real, licensed physician. If a prescription peptide is right for you, we handle everything — the consultation, the prescription, the medication, delivered to your door.
              </p>
              <Link href="/start" className="inline-block mt-4 text-amber-600 font-bold text-sm hover:text-amber-700">
                See If You Qualify →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* WEIGHT LOSS PROGRAM */}
      <section className="bg-[var(--navy)] text-white py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="max-w-3xl">
            <p className="text-amber-400 font-bold text-sm uppercase tracking-widest mb-4">Doctor-Supervised Weight Loss</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              GLP-1 weight loss program — <span className="text-amber-400">$349/month</span>, everything included.
            </h2>
            <p className="text-lg text-slate-300 leading-relaxed mb-8">
              Licensed provider consultation. Prescription (if medically appropriate). Compounded medication. Monthly shipping. Ongoing support. One price. No hidden fees. No contracts.
            </p>
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {["Licensed providers in all 50 states", "Real doctors — not AI, not chatbots", "Compounded semaglutide or tirzepatide", "Free discreet shipping", "Cancel anytime — no contracts", "Ongoing dose adjustments included"].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <span className="text-amber-400 mt-0.5">✓</span>
                  <span className="text-slate-300">{item}</span>
                </div>
              ))}
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/start" className="bg-amber-500 hover:bg-amber-400 text-white font-bold px-8 py-4 rounded-lg text-center transition">
                See If You Qualify →
              </Link>
              <Link href="/how-it-works" className="border border-white/30 hover:bg-white/10 text-white font-bold px-8 py-4 rounded-lg text-center transition">
                How It Works
              </Link>
            </div>
            <p className="text-xs text-slate-400 mt-6">
              Compounded medications are NOT FDA-approved. All prescribing decisions are made by licensed healthcare providers. Results vary.
            </p>
          </div>
        </div>
      </section>

      {/* FEATURED PEPTIDES */}
      <section className="py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[var(--navy)] mb-3">Explore Popular Peptides</h2>
            <p className="text-slate-600">Deep-dive into the most discussed peptides — evidence, safety, and what the science actually says.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredPeptides.map(p => (
              <Link key={p.slug} href={`/peptides/${p.slug}`} className="bg-white border border-slate-200 rounded-xl p-6 hover:shadow-lg hover:border-amber-300 transition group">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-400">{p.category}</span>
                  <span className={`text-xs font-bold px-2 py-0.5 rounded ${p.evidenceLevel === 'Strong' ? 'bg-green-100 text-green-700' : p.evidenceLevel === 'Moderate' ? 'bg-amber-100 text-amber-700' : 'bg-red-100 text-red-700'}`}>
                    {p.evidenceLevel}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-[var(--navy)] group-hover:text-amber-600 transition mb-2">{p.name}</h3>
                <p className="text-sm text-slate-600 leading-relaxed line-clamp-3">{p.description}</p>
                <div className="mt-4 flex items-center gap-2">
                  <span className="text-xs text-slate-400">{p.route}</span>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/peptides" className="text-amber-600 font-bold hover:text-amber-700">
              View All 22+ Peptides →
            </Link>
          </div>
        </div>
      </section>

      {/* TRANSPARENCY PLEDGE */}
      <section className="bg-[var(--cream)] py-16 md:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--navy)] mb-6">
            Weight loss, honestly.
          </h2>
          <div className="text-lg text-slate-700 leading-relaxed space-y-4 text-left md:text-center">
            <p>We don&apos;t use AI-generated before/after photos. We don&apos;t use fake doctor profiles. We don&apos;t claim our compounded medications are FDA-approved — <strong>because they&apos;re not.</strong></p>
            <p>What we do: connect you with real, licensed physicians who make real prescribing decisions based on your real health history. We explain the evidence honestly — including when it&apos;s limited. We show you the risks alongside the benefits.</p>
            <p className="font-serif font-bold text-[var(--navy)] text-xl">No AI doctors. No fake results. Just real medicine, honestly delivered.</p>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl font-bold text-[var(--navy)] mb-4">Ready to get started?</h2>
          <p className="text-lg text-slate-600 mb-8">Take our free peptide quiz to discover what&apos;s right for you — or jump straight into our doctor-supervised weight loss program.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/peptides/quiz" className="border-2 border-[var(--navy)] text-[var(--navy)] font-bold px-8 py-4 rounded-lg hover:bg-[var(--navy)] hover:text-white transition">
              Take the Peptide Quiz
            </Link>
            <Link href="/start" className="bg-amber-500 hover:bg-amber-400 text-white font-bold px-8 py-4 rounded-lg transition">
              Start Weight Loss Program →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
