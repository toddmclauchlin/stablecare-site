import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[var(--navy-dark)] text-white">
      {/* Medical disclaimer bar */}
      <div className="bg-[var(--navy)] border-b border-white/10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4">
          <p className="text-xs text-slate-300 leading-relaxed">
            <strong className="text-amber-400">Important Medical Disclaimer:</strong> This website provides educational information only and does not constitute medical advice, diagnosis, or treatment. Compounded medications are prepared by state-licensed pharmacies and are <strong>NOT FDA-approved</strong>. They are not generic versions of brand-name drugs. All prescribing decisions are made by independent, licensed healthcare providers. Individual results vary. Always consult a licensed healthcare provider before starting any medication or peptide therapy.
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h4 className="font-serif font-bold text-lg mb-4">[Brand Name]</h4>
            <p className="text-sm text-slate-400 leading-relaxed">The internet&apos;s most trusted peptide guide — backed by real doctors.</p>
            <p className="text-sm text-slate-400 mt-2">&ldquo;Weight loss, honestly.&rdquo;</p>
          </div>
          <div>
            <h5 className="font-bold text-sm uppercase tracking-wider text-slate-400 mb-4">Peptide Guide</h5>
            <div className="space-y-2">
              <Link href="/peptides" className="block text-sm text-slate-300 hover:text-amber-400 transition">Browse All Peptides</Link>
              <Link href="/peptides/quiz" className="block text-sm text-slate-300 hover:text-amber-400 transition">Peptide Quiz</Link>
              <Link href="/peptides/semaglutide" className="block text-sm text-slate-300 hover:text-amber-400 transition">Semaglutide</Link>
              <Link href="/peptides/tirzepatide" className="block text-sm text-slate-300 hover:text-amber-400 transition">Tirzepatide</Link>
              <Link href="/peptides/bpc-157" className="block text-sm text-slate-300 hover:text-amber-400 transition">BPC-157</Link>
            </div>
          </div>
          <div>
            <h5 className="font-bold text-sm uppercase tracking-wider text-slate-400 mb-4">Weight Loss Program</h5>
            <div className="space-y-2">
              <Link href="/how-it-works" className="block text-sm text-slate-300 hover:text-amber-400 transition">How It Works</Link>
              <Link href="/pricing" className="block text-sm text-slate-300 hover:text-amber-400 transition">Pricing</Link>
              <Link href="/faq" className="block text-sm text-slate-300 hover:text-amber-400 transition">FAQ</Link>
              <Link href="/safety" className="block text-sm text-slate-300 hover:text-amber-400 transition">Safety & Compliance</Link>
              <Link href="/start" className="block text-sm text-slate-300 hover:text-amber-400 transition">Get Started</Link>
            </div>
          </div>
          <div>
            <h5 className="font-bold text-sm uppercase tracking-wider text-slate-400 mb-4">Company</h5>
            <div className="space-y-2">
              <Link href="/about" className="block text-sm text-slate-300 hover:text-amber-400 transition">About Us</Link>
              <Link href="/blog" className="block text-sm text-slate-300 hover:text-amber-400 transition">Blog</Link>
              <Link href="/terms" className="block text-sm text-slate-300 hover:text-amber-400 transition">Terms of Service</Link>
              <Link href="/privacy" className="block text-sm text-slate-300 hover:text-amber-400 transition">Privacy Policy</Link>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10">
          <p className="text-xs text-slate-500 text-center">
            © {new Date().getFullYear()} [Brand Name]. All rights reserved. This site is not affiliated with Novo Nordisk, Eli Lilly, or any pharmaceutical manufacturer. Ozempic®, Wegovy®, Mounjaro®, and Zepbound® are registered trademarks of their respective owners.
          </p>
        </div>
      </div>
    </footer>
  );
}
