import Link from "next/link";
export const metadata = { title: "FAQ | [Brand Name]", description: "Frequently asked questions about our GLP-1 weight loss program, peptide guide, compounded medications, and how telehealth prescribing works." };

const faqs = [
  { q: "What is compounded semaglutide?", a: "Compounded semaglutide contains the same active ingredient as Wegovy and Ozempic, but it is prepared by a licensed compounding pharmacy rather than the original manufacturer (Novo Nordisk). Compounded medications are NOT FDA-approved — they have not undergone the same rigorous testing for safety and efficacy. However, they are prepared by state-licensed pharmacies following USP standards. Your prescribing provider will explain the differences." },
  { q: "Is this FDA-approved?", a: "Semaglutide and tirzepatide are FDA-approved medications when produced by their original manufacturers (as Wegovy/Ozempic and Mounjaro/Zepbound). The compounded versions we prescribe use the same active ingredients but are NOT FDA-approved as finished products. We believe in being completely transparent about this distinction." },
  { q: "Who prescribes the medication?", a: "All prescriptions are written by licensed physicians or nurse practitioners through our partner network, OpenLoop Health. These are real, licensed medical providers — not AI, not chatbots. They review your health history, assess your eligibility, and make independent prescribing decisions." },
  { q: "How quickly will I receive my medication?", a: "After your provider approves your prescription (typically within 24-48 hours of completing your health assessment), your medication ships from our licensed pharmacy. Most patients receive their medication within 3-5 business days." },
  { q: "What side effects should I expect?", a: "The most common side effects of GLP-1 medications include nausea (especially in the first few weeks), vomiting, diarrhea, constipation, and decreased appetite. Most side effects diminish over time. Rare but serious side effects include pancreatitis and gallbladder issues. Your provider will discuss all risks during your consultation." },
  { q: "Can I cancel anytime?", a: "Yes. There are no contracts and no cancellation fees. You can cancel your subscription at any time through your patient portal or by contacting our support team. We keep patients because the program works, not because they're locked in." },
  { q: "What about the Peptide Guide — is that free?", a: "Yes, our entire Peptide Guide, including the encyclopedia and the quiz tool, is completely free. We built it because we believe education should come before medication. You can use the guide without ever enrolling in our prescription program." },
  { q: "Do you prescribe peptides other than GLP-1s?", a: "Currently, our prescription program focuses on GLP-1 medications for weight management. Our Peptide Guide covers 22+ peptides across many categories (recovery, cognitive, immune, etc.) for educational purposes. If you're interested in other peptides, the guide can help you have an informed conversation with your own doctor." },
  { q: "How is this different from Hims, Ro, or Medvi?", a: "We lead with education, not just medication. Our Peptide Guide helps you understand what you're taking and why — something most competitors skip entirely. We also prioritize transparency: we don't use AI-generated before/after photos, we don't make misleading claims about FDA approval, and we clearly disclose what compounded medication is (and isn't)." },
  { q: "Is my health information secure?", a: "Yes. All health information is collected through HIPAA-compliant systems and encrypted in transit and at rest. We never sell or share your personal health information. Our intake forms meet all federal requirements for protected health information (PHI)." },
];

export default function FAQ() {
  return (
    <>
      <section className="bg-[var(--navy)] text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h1 className="text-4xl font-bold mb-4">Frequently Asked Questions</h1>
          <p className="text-slate-300">Honest answers to the questions people actually ask.</p>
        </div>
      </section>
      <section className="py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 space-y-8">
          {faqs.map((f, i) => (
            <div key={i} className="border-b border-slate-200 pb-8">
              <h2 className="text-lg font-bold text-[var(--navy)] mb-3">{f.q}</h2>
              <p className="text-slate-600 leading-relaxed">{f.a}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="bg-[var(--cream)] py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-2xl font-bold text-[var(--navy)] mb-4">Still have questions?</h2>
          <p className="text-slate-600 mb-6">We're here to help. Reach out and a real person will get back to you.</p>
          <Link href="/start" className="inline-block bg-amber-500 hover:bg-amber-400 text-white font-bold px-8 py-4 rounded-lg transition">Get Started →</Link>
        </div>
      </section>
    </>
  );
}
