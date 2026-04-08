import type { Metadata } from "next";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "[Brand Name] — Peptide Education & Doctor-Supervised Weight Loss",
  description: "The internet's most trusted peptide guide — backed by licensed physicians. Explore 22+ peptides, take our free quiz, or start a GLP-1 weight loss program supervised by real doctors.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
