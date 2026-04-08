import Link from "next/link";
export const metadata = { title: "Get Started — Health Assessment | [Brand Name]" };

export default function Start() {
  return (
    <section className="py-20 md:py-28">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-[var(--navy)] mb-4">Start Your Health Assessment</h1>
        <p className="text-lg text-slate-600 mb-8">You will be taken to our secure, HIPAA-compliant health questionnaire. It takes about 2 minutes. A licensed provider will review your profile within 24-48 hours.</p>
        <a href="https://form.jotform.com/YOUR_FORM_ID" target="_blank" rel="noopener noreferrer" className="inline-block bg-amber-500 hover:bg-amber-400 text-white font-bold px-10 py-5 rounded-lg transition text-xl">Begin Health Assessment →</a>
        <div className="mt-8 space-y-2 text-sm text-slate-500">
          <p>🔒 HIPAA-compliant and encrypted</p>
          <p>👨‍⚕️ Reviewed by a licensed physician in your state</p>
          <p>⏱️ Takes approximately 2 minutes</p>
        </div>
        <p className="mt-8 text-xs text-slate-400">Compounded medications are NOT FDA-approved. Not all patients will qualify. A $99 consultation fee applies. Monthly subscription of $349/month begins after prescription approval.</p>
      </div>
    </section>
  );
}
