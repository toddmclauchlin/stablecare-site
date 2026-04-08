import Link from "next/link";
export const metadata = { title: "Blog — Peptide Education & Weight Loss Science | [Brand Name]" };

const posts = [
  { slug: "what-is-compounded-semaglutide", title: "What Is Compounded Semaglutide? The Honest Guide (2026)", excerpt: "Everything you need to know about compounded semaglutide — what it is, how it differs from brand-name Wegovy, and what the FDA says.", date: "April 2026", category: "GLP-1 Education" },
  { slug: "glp1-side-effects-first-month", title: "GLP-1 Side Effects: What to Expect in Your First Month", excerpt: "A week-by-week guide to what your body might experience when starting a GLP-1 medication, and how to manage common side effects.", date: "April 2026", category: "Patient Guide" },
  { slug: "medical-weight-loss-vs-diet-exercise", title: "Medical Weight Loss vs Diet & Exercise: What the Evidence Says", excerpt: "A fair, evidence-based look at when diet and exercise are enough and when medical intervention makes a meaningful difference.", date: "April 2026", category: "Weight Loss Science" },
  { slug: "complete-guide-to-peptides", title: "The Complete Guide to Peptides: What They Are & How They Work", excerpt: "Peptides explained from scratch — amino acids, signaling, categories, and why they're getting so much attention right now.", date: "April 2026", category: "Peptide Education" },
  { slug: "bpc-157-explained", title: "BPC-157 Explained: Uses, Evidence, Safety, and How to Access It", excerpt: "The most popular recovery peptide on the internet — what the science actually shows, what it doesn't, and what to know before trying it.", date: "April 2026", category: "Peptide Education" },
];

export default function Blog() {
  return (
    <>
      <section className="bg-[var(--navy)] text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h1 className="text-4xl font-bold mb-4">Blog</h1>
          <p className="text-slate-300">Evidence-based articles on peptides, weight loss science, and honest health information.</p>
        </div>
      </section>
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-8">
          {posts.map(p => (
            <article key={p.slug} className="border-b border-slate-200 pb-8">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-xs font-bold text-amber-600 uppercase tracking-wider">{p.category}</span>
                <span className="text-xs text-slate-400">{p.date}</span>
              </div>
              <h2 className="text-xl font-bold text-[var(--navy)] mb-2 hover:text-amber-600 transition cursor-pointer">{p.title}</h2>
              <p className="text-slate-600 leading-relaxed">{p.excerpt}</p>
              <span className="inline-block mt-3 text-amber-600 font-bold text-sm">Read More →</span>
            </article>
          ))}
          <p className="text-center text-slate-400 pt-8">More articles coming weekly. Check back soon.</p>
        </div>
      </section>
    </>
  );
}
