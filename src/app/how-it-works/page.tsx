import Link from "next/link";
export const metadata = { title: "How It Works | [Brand Name]", description: "See how our doctor-supervised GLP-1 weight loss program works. 5 simple steps from health assessment to medication delivered to your door." };

const steps = [
  { num: "01", title: "Tell Us About Yourself", desc: "Complete a quick online health assessment — your weight, medical history, goals, and current medications. It takes about 2 minutes. All information is HIPAA-protected and encrypted.", icon: "📋" },
  { num: "02", title: "A Real Doctor Reviews Your Profile", desc: "A licensed physician in your state reviews your health history and determines if GLP-1 medication is appropriate for you. Not an AI. Not a chatbot. A real, licensed medical provider makes all prescribing decisions.", icon: "👨‍⚕️" },
  { num: "03", title: "Get Your Personalized Prescription", desc: "If appropriate, your provider prescribes a compounded medication tailored to your needs. If peptides aren't right for you, we'll tell you honestly — and suggest alternatives.", icon: "📝" },
  { num: "04", title: "Medication Delivered to Your Door", desc: "Your medication ships from a licensed US compounding pharmacy in discreet, temperature-controlled packaging. Free shipping, every month. No trips to the pharmacy.", icon: "📦" },
  { num: "05", title: "Ongoing Support & Check-ins", desc: "Your provider monitors your progress. Dose adjustments, question answering, and ongoing care — all included in your monthly subscription. We're with you for the journey.", icon: "💬" },
];

export default function HowItWorks() {
  return (
    <>
      <section className="bg-[var(--navy)] text-white py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">How It Works</h1>
          <p className="text-lg text-slate-300">From health assessment to medication at your door — in 5 simple steps.</p>
        </div>
      </section>
      <section className="py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-12">
          {steps.map((s, i) => (
            <div key={i} className="flex gap-6 md:gap-8">
              <div className="flex-shrink-0 w-16 h-16 bg-amber-50 border-2 border-amber-200 rounded-2xl flex items-center justify-center text-2xl">{s.icon}</div>
              <div>
                <div className="text-xs font-bold text-amber-600 uppercase tracking-widest mb-1">Step {s.num}</div>
                <h2 className="text-xl font-bold text-[var(--navy)] mb-2">{s.title}</h2>
                <p className="text-slate-600 leading-relaxed">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="bg-[var(--cream)] py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-2xl font-bold text-[var(--navy)] mb-4">Ready to get started?</h2>
          <p className="text-slate-600 mb-6">The health assessment takes about 2 minutes. A provider typically reviews within 24-48 hours.</p>
          <Link href="/start" className="inline-block bg-amber-500 hover:bg-amber-400 text-white font-bold px-8 py-4 rounded-lg transition">See If You Qualify →</Link>
          <p className="text-xs text-slate-400 mt-4">Compounded medications are NOT FDA-approved. All prescribing decisions are made by licensed providers.</p>
        </div>
      </section>
    </>
  );
}
