"use client";
import Link from "next/link";
import { useState } from "react";

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="font-serif font-bold text-xl text-[var(--navy)]">
            [Brand Name]
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="/peptides" className="text-sm font-medium text-slate-600 hover:text-[var(--navy)] transition">Peptide Guide</Link>
            <Link href="/peptides/quiz" className="text-sm font-medium text-slate-600 hover:text-[var(--navy)] transition">Take the Quiz</Link>
            <Link href="/how-it-works" className="text-sm font-medium text-slate-600 hover:text-[var(--navy)] transition">How It Works</Link>
            <Link href="/pricing" className="text-sm font-medium text-slate-600 hover:text-[var(--navy)] transition">Pricing</Link>
            <Link href="/blog" className="text-sm font-medium text-slate-600 hover:text-[var(--navy)] transition">Blog</Link>
            <Link href="/faq" className="text-sm font-medium text-slate-600 hover:text-[var(--navy)] transition">FAQ</Link>
            <Link href="/start" className="bg-[var(--amber)] hover:bg-[var(--amber-light)] text-white text-sm font-bold px-5 py-2.5 rounded-lg transition">
              Get Started
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button onClick={() => setOpen(!open)} className="md:hidden p-2" aria-label="Menu">
            <svg className="w-6 h-6 text-slate-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {open ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="md:hidden pb-4 space-y-2">
            <Link href="/peptides" onClick={() => setOpen(false)} className="block py-2 text-sm font-medium text-slate-600">Peptide Guide</Link>
            <Link href="/peptides/quiz" onClick={() => setOpen(false)} className="block py-2 text-sm font-medium text-slate-600">Take the Quiz</Link>
            <Link href="/how-it-works" onClick={() => setOpen(false)} className="block py-2 text-sm font-medium text-slate-600">How It Works</Link>
            <Link href="/pricing" onClick={() => setOpen(false)} className="block py-2 text-sm font-medium text-slate-600">Pricing</Link>
            <Link href="/blog" onClick={() => setOpen(false)} className="block py-2 text-sm font-medium text-slate-600">Blog</Link>
            <Link href="/faq" onClick={() => setOpen(false)} className="block py-2 text-sm font-medium text-slate-600">FAQ</Link>
            <Link href="/start" onClick={() => setOpen(false)} className="block mt-2 bg-[var(--amber)] text-white text-sm font-bold px-5 py-2.5 rounded-lg text-center">Get Started</Link>
          </div>
        )}
      </div>
    </nav>
  );
}
