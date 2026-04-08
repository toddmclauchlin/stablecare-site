import Link from "next/link";
export const metadata = { title: "Pricing — $349/month, Everything Included | [Brand Name]", description: "One price. Everything included. No hidden fees. Doctor consultation, prescription, compounded GLP-1 medication, and monthly shipping for $349/month." };

export default function Pricing() {
  return (
    <>
      <section className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-[var(--navy)] mb-4">One price. Everything included.</h1>
          <p className="text-lg text-slate-600 mb-12">No hidden fees. No surprise charges. No membership on top of medication cost.</p>
          <div className="bg-white border-2 border-[var(--navy)] rounded-2xl p-8 md:p-12 max-w-lg mx-auto">
            <div className="text-sm font-bold text-amber-600 uppercase tracking-widest mb-2">GLP-1 Weight Loss Program</div>
            <div className="text-5xl md:text-6xl font-bold text-[var(--navy)] mb-2">$349<span className="text-2xl text-slate-400">/mo</span></div>
            <p className="text-slate-500 mb-8">+ $99 one-time initial consultation</p>
            <div className="text-left space-y-3 mb-8">
              {["Licensed provider consultation", "Prescription (if medically appropriate)", "Compounded GLP-1 medication (monthly supply)", "Free discreet, temperature-controlled shipping", "Ongoing provider access & dose adjustments", "No enrollment fees", "No contracts — cancel anytime"].map((item, i) => (
                <div key={i} className="flex items-start gap-3"><span className="text-green-500 mt-0.5 font-bold">✓</span><span className="text-slate-700">{item}</span></div>
              ))}
            </div>
            <Link href="/start" className="block w-full bg-amber-500 hover:bg-amber-400 text-white font-bold py-4 rounded-lg text-center transition text-lg">See If You Qualify →</Link>
          </div>
          <div className="mt-12 max-w-2xl mx-auto bg-slate-50 border border-slate-200 rounded-xl p-6 text-left">
            <h3 className="font-bold text-[var(--navy)] mb-2">How does this compare?</h3>
            <div className="space-y-2 text-sm text-slate-600">
              <div className="flex justify-between"><span>Brand-name Wegovy (without insurance)</span><span className="font-bold text-slate-800">$1,000+/mo</span></div>
              <div className="flex justify-between"><span>Hims & Hers GLP-1 program</span><span className="font-bold text-slate-800">$199–$599/mo</span></div>
              <div className="flex justify-between"><span>Ro Body Program (med + membership)</span><span className="font-bold text-slate-800">$294–$494/mo</span></div>
              <div className="flex justify-between border-t border-slate-200 pt-2"><span className="font-bold text-[var(--navy)]">[Brand Name] — all included</span><span className="font-bold text-amber-600">$349/mo</span></div>
            </div>
          </div>
          <div className="mt-8 bg-amber-50 border border-amber-200 rounded-xl p-6 max-w-2xl mx-auto text-sm text-slate-700">
            <strong className="text-[var(--navy)]">Transparency note:</strong> Compounded medications are prepared by state-licensed pharmacies and are NOT FDA-approved. They are not generic versions of brand-name drugs. Your prescribing provider will explain the differences during your consultation.
          </div>
        </div>
      </section>
    </>
  );
}
