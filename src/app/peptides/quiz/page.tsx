"use client";
import { useState } from "react";
import Link from "next/link";
import { peptides, GOALS } from "@/data/peptides";
import type { Peptide } from "@/data/peptides";

type Step = "goals" | "experience" | "route" | "results";

function getEvidenceColor(level: string) {
  if (level === "Strong") return "bg-green-100 text-green-700";
  if (level === "Moderate") return "bg-amber-100 text-amber-700";
  return "bg-red-100 text-red-700";
}

export default function PeptideQuiz() {
  const [step, setStep] = useState<Step>("goals");
  const [selectedGoals, setSelectedGoals] = useState<string[]>([]);
  const [experience, setExperience] = useState<string | null>(null);
  const [routePref, setRoutePref] = useState<string | null>(null);
  const [results, setResults] = useState<(Peptide & { score: number })[]>([]);
  const [expanded, setExpanded] = useState<number | null>(null);

  const toggleGoal = (id: string) => {
    setSelectedGoals(prev =>
      prev.includes(id) ? prev.filter(g => g !== id) : prev.length < 3 ? [...prev, id] : prev
    );
  };

  const getResults = () => {
    const scored = peptides.map(p => {
      let score = 0;
      selectedGoals.forEach(g => { if (p.goals.includes(g)) score += 10; });
      if (p.evidenceLevel === "Strong") score += 5;
      else if (p.evidenceLevel === "Moderate") score += 3;
      if (experience === "beginner") {
        if (p.route.includes("Oral") || p.route.includes("Topical")) score += 3;
        if (p.evidenceLevel === "Strong") score += 3;
        if (p.type === "research") score -= 4;
      }
      if (routePref === "no_injections") {
        if (p.route.includes("Oral") || p.route.includes("Topical") || p.route.includes("Intranasal")) score += 5;
        else score -= 8;
      }
      return { ...p, score };
    }).filter(p => p.score > 0).sort((a, b) => b.score - a.score);
    setResults(scored);
    setStep("results");
  };

  const reset = () => {
    setStep("goals");
    setSelectedGoals([]);
    setExperience(null);
    setRoutePref(null);
    setResults([]);
    setExpanded(null);
  };

  return (
    <>
      {/* Header */}
      <section className="bg-[var(--navy)] text-white py-12 md:py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-amber-400 font-bold text-sm uppercase tracking-widest mb-3">Free Peptide Quiz</p>
          <h1 className="text-3xl md:text-4xl font-bold mb-3">
            {step === "goals" && "What are you trying to achieve?"}
            {step === "experience" && "What's your experience level?"}
            {step === "route" && "Any preferences on how you take it?"}
            {step === "results" && "Your Personalized Peptide Plan"}
          </h1>
          <p className="text-slate-300">
            {step === "goals" && "Select up to 3 health goals. We'll match you with the right peptides."}
            {step === "experience" && "This helps us calibrate our recommendations for safety and complexity."}
            {step === "route" && "Not everyone is comfortable with injections — that's completely okay."}
            {step === "results" && `Based on your goals: ${selectedGoals.map(g => GOALS.find(x => x.id === g)?.label).join(", ")}`}
          </p>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">

          {/* STEP 1: Goals */}
          {step === "goals" && (
            <>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {GOALS.map(g => {
                  const sel = selectedGoals.includes(g.id);
                  return (
                    <button
                      key={g.id}
                      onClick={() => toggleGoal(g.id)}
                      className={`text-left p-4 rounded-xl border-2 transition ${sel ? "border-amber-500 bg-amber-50" : "border-slate-200 bg-white hover:border-slate-300"}`}
                    >
                      <div className="text-2xl mb-1">{g.icon}</div>
                      <div className="font-bold text-sm text-[var(--navy)]">{g.label}</div>
                      <div className="text-xs text-slate-500 mt-0.5">{g.desc}</div>
                    </button>
                  );
                })}
              </div>
              <div className="flex items-center justify-between mt-8">
                <Link href="/peptides" className="text-sm text-slate-500 hover:text-slate-700">
                  ← Browse all peptides instead
                </Link>
                <button
                  disabled={selectedGoals.length === 0}
                  onClick={() => setStep("experience")}
                  className={`font-bold px-8 py-3 rounded-lg transition ${selectedGoals.length > 0 ? "bg-amber-500 hover:bg-amber-400 text-white" : "bg-slate-200 text-slate-400 cursor-not-allowed"}`}
                >
                  Continue ({selectedGoals.length}/3)
                </button>
              </div>
            </>
          )}

          {/* STEP 2: Experience */}
          {step === "experience" && (
            <>
              <div className="space-y-3">
                {[
                  { id: "beginner", label: "New to Peptides", desc: "I've never used peptides before. Show me the safest, most well-studied options." },
                  { id: "intermediate", label: "Some Experience", desc: "I've used a few peptides or GLP-1 medications. Comfortable with injections." },
                  { id: "advanced", label: "Experienced", desc: "I've used multiple peptides and understand protocols, stacking, and dosing." },
                ].map(e => (
                  <button
                    key={e.id}
                    onClick={() => { setExperience(e.id); setStep("route"); }}
                    className="w-full text-left p-5 rounded-xl border-2 border-slate-200 bg-white hover:border-amber-400 transition"
                  >
                    <div className="font-bold text-[var(--navy)]">{e.label}</div>
                    <div className="text-sm text-slate-600 mt-1">{e.desc}</div>
                  </button>
                ))}
              </div>
              <button onClick={() => setStep("goals")} className="mt-6 text-sm text-slate-500 hover:text-slate-700">← Back to goals</button>
            </>
          )}

          {/* STEP 3: Route */}
          {step === "route" && (
            <>
              <div className="space-y-3">
                {[
                  { id: "any", label: "I'm open to anything", desc: "Injections, oral, topical, nasal — whatever works best for my goals." },
                  { id: "no_injections", label: "No injections please", desc: "Only show me oral, topical, or intranasal options." },
                ].map(r => (
                  <button
                    key={r.id}
                    onClick={() => { setRoutePref(r.id); setTimeout(getResults, 50); }}
                    className="w-full text-left p-5 rounded-xl border-2 border-slate-200 bg-white hover:border-amber-400 transition"
                  >
                    <div className="font-bold text-[var(--navy)]">{r.label}</div>
                    <div className="text-sm text-slate-600 mt-1">{r.desc}</div>
                  </button>
                ))}
              </div>
              <button onClick={() => setStep("experience")} className="mt-6 text-sm text-slate-500 hover:text-slate-700">← Back</button>
            </>
          )}

          {/* RESULTS */}
          {step === "results" && (
            <>
              <div className="space-y-4">
                {results.slice(0, 8).map((p, i) => (
                  <div key={p.slug} className="bg-white border border-slate-200 rounded-xl overflow-hidden">
                    <button
                      onClick={() => setExpanded(expanded === i ? null : i)}
                      className="w-full text-left p-5 hover:bg-slate-50 transition"
                    >
                      <div className="flex items-start justify-between">
                        <div className="flex items-center gap-3">
                          {i < 3 && (
                            <span className={`text-xs font-bold px-2 py-1 rounded ${i === 0 ? "bg-amber-500 text-white" : i === 1 ? "bg-slate-300 text-slate-700" : "bg-amber-200 text-amber-800"}`}>
                              #{i + 1}
                            </span>
                          )}
                          <div>
                            <h3 className="font-bold text-[var(--navy)]">{p.name}</h3>
                            <span className="text-xs text-slate-500">{p.category}</span>
                          </div>
                        </div>
                        <div className="text-right flex-shrink-0">
                          <span className={`text-xs font-bold px-2 py-0.5 rounded ${getEvidenceColor(p.evidenceLevel)}`}>
                            {p.evidenceLevel}
                          </span>
                          <div className="text-xs text-slate-400 mt-1">{p.route}</div>
                        </div>
                      </div>
                    </button>

                    {expanded === i && (
                      <div className="px-5 pb-5 border-t border-slate-100 pt-4 space-y-4">
                        <p className="text-sm text-slate-700 leading-relaxed">{p.description}</p>

                        <div className="bg-slate-50 rounded-lg p-4">
                          <h4 className="text-xs font-bold uppercase tracking-wider text-[var(--navy)] mb-2">FDA Status</h4>
                          <p className="text-sm text-slate-600">{p.fda}</p>
                        </div>

                        <div className="bg-slate-50 rounded-lg p-4">
                          <h4 className="text-xs font-bold uppercase tracking-wider text-amber-600 mb-2">Recommended Supplements</h4>
                          <div className="flex flex-wrap gap-2">
                            {p.supplements.map((s, j) => (
                              <span key={j} className="bg-amber-50 border border-amber-200 text-amber-800 text-xs px-3 py-1 rounded-md">{s}</span>
                            ))}
                          </div>
                        </div>

                        <div className="bg-slate-50 rounded-lg p-4">
                          <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">Common Stacks</h4>
                          <ul className="text-sm text-slate-600 space-y-1">
                            {p.stacks.map((s, j) => (
                              <li key={j}>• {s}</li>
                            ))}
                          </ul>
                        </div>

                        <div className="flex gap-3">
                          <Link href={`/peptides/${p.slug}`} className="text-sm font-bold text-amber-600 hover:text-amber-700">
                            Read Full Guide →
                          </Link>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* CTA */}
              <div className="mt-10 bg-[var(--navy)] text-white rounded-2xl p-8 text-center">
                <h2 className="text-2xl font-bold mb-3">Want to discuss this plan with a doctor?</h2>
                <p className="text-slate-300 mb-6">Our licensed physicians can evaluate your personalized peptide plan and prescribe what&apos;s medically appropriate.</p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <Link href="/start" className="bg-amber-500 hover:bg-amber-400 text-white font-bold px-8 py-3 rounded-lg transition">
                    Talk to a Doctor →
                  </Link>
                  <button onClick={reset} className="border border-white/30 hover:bg-white/10 text-white font-bold px-8 py-3 rounded-lg transition">
                    Retake Quiz
                  </button>
                </div>
                <p className="text-xs text-slate-400 mt-4">All prescribing decisions are made by licensed healthcare providers. Not all peptides are available through our program.</p>
              </div>

              {/* Disclaimer */}
              <div className="mt-8 bg-slate-50 border border-slate-200 rounded-xl p-5 text-xs text-slate-500 leading-relaxed">
                <strong>Medical Disclaimer:</strong> This quiz provides educational information only and does not constitute medical advice, diagnosis, or treatment. Many peptides listed are not FDA-approved for human use. Compounded medications are not FDA-approved. The recommendations are based on general goal-matching and do not account for your complete health profile. Always consult a licensed healthcare provider before starting any peptide therapy. Individual results vary.
              </div>
            </>
          )}

        </div>
      </section>
    </>
  );
}
