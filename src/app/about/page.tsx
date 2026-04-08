import Link from "next/link";
export const metadata = { title: "About Us | [Brand Name]" };

export default function About() {
  return (
    <>
      <section className="bg-[var(--navy)] text-white py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">We built what we wished existed.</h1>
          <p className="text-lg text-slate-300 leading-relaxed max-w-2xl">When we started exploring peptides, we found the same thing everyone finds: contradicting Reddit threads, shady "research only" vendors, and telehealth companies more interested in selling than educating. So we built something different.</p>
        </div>
      </section>
      <section className="py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 space-y-8 text-lg text-slate-700 leading-relaxed">
          <p>[Brand Name] is two things: the most comprehensive, honest peptide education platform on the internet, and a doctor-supervised GLP-1 weight loss program that treats patients like adults.</p>
          <p>We believe you deserve to understand what you're putting in your body — the evidence, the risks, and the unknowns. We believe doctors should make prescribing decisions, not algorithms. And we believe the companies that got FDA warning letters for fake before/after photos and misleading claims deserve to lose their customers to brands that tell the truth.</p>
          <p>Our medical providers are licensed physicians and nurse practitioners through OpenLoop Health, a nationwide telehealth network covering all 50 states. Our medications are prepared by licensed US compounding pharmacies following USP sterile compounding standards.</p>
          <p className="font-serif text-xl font-bold text-[var(--navy)]">No AI doctors. No fake results. Just real medicine, honestly delivered.</p>
        </div>
      </section>
    </>
  );
}
