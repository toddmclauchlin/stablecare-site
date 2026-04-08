export const metadata = { title: "Safety & Compliance | [Brand Name]" };

export default function Safety() {
  return (
    <>
      <section className="bg-[var(--navy)] text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h1 className="text-4xl font-bold mb-4">Safety & Compliance</h1>
          <p className="text-slate-300">What compounded medication means, how we protect you, and what you should know.</p>
        </div>
      </section>
      <section className="py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 space-y-8 text-slate-700 leading-relaxed">
          <div>
            <h2 className="text-2xl font-bold text-[var(--navy)] mb-3">What is compounded medication?</h2>
            <p>Compounded medications are prepared by licensed compounding pharmacies using the same active pharmaceutical ingredients (APIs) as brand-name drugs. However, they are NOT the same as FDA-approved medications. They have not undergone the same rigorous testing for safety, efficacy, and manufacturing quality that FDA-approved drugs have. We believe you should understand this distinction before making a decision.</p>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-[var(--navy)] mb-3">How are prescribing decisions made?</h2>
            <p>All prescriptions are written by licensed physicians or nurse practitioners through OpenLoop Health, a nationwide telehealth provider network. These providers are independently licensed in the state where you reside. They review your complete health history and make independent prescribing decisions. No AI or automated system prescribes medication.</p>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-[var(--navy)] mb-3">How is my data protected?</h2>
            <p>All patient health information is collected through HIPAA-compliant systems. Data is encrypted in transit and at rest. We maintain Business Associate Agreements (BAAs) with all technology vendors that handle protected health information. We never sell or share your personal health data for marketing purposes.</p>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-[var(--navy)] mb-3">What about side effects?</h2>
            <p>All medications carry risks. GLP-1 medications commonly cause nausea, vomiting, diarrhea, and constipation — especially in the first weeks of treatment. Rare but serious risks include pancreatitis, gallbladder issues, and thyroid concerns. Your prescribing provider will discuss all risks specific to your health profile during your consultation.</p>
          </div>
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-6">
            <h3 className="font-bold text-[var(--navy)] mb-2">Our commitment to honesty</h3>
            <p>In March 2026, the FDA issued warning letters to 30+ telehealth companies for misleading claims about compounded GLP-1 products. We are committed to never making claims we can't substantiate. We don't use AI-generated before/after photos. We don't claim our compounded medications are FDA-approved. We don't use fake doctor profiles. If you see something on our site that doesn't meet this standard, please let us know.</p>
          </div>
        </div>
      </section>
    </>
  );
}
