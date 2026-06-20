import { createFileRoute, Link } from "@tanstack/react-router";
import { QcFooter } from "@/components/QuantumCodon";

const posts = [
  {
    eyebrow: "AI in Biology",
    title: "Why the dark genome will define the next decade of AI-driven discovery",
    excerpt: "Large models are reshaping how we read non-coding sequences. Here's what changes when 98% of the genome becomes addressable.",
    date: "Jun 2026",
  },
  {
    eyebrow: "Founders' Notes",
    title: "From JNU to Amaravati: building a parallel biology universe",
    excerpt: "A look at the journey behind the Deep Codon Initiative and what it takes to commercialize foundational science.",
    date: "May 2026",
  },
  {
    eyebrow: "Engineering",
    title: "Synthetic translation at scale: lessons from our internal pipelines",
    excerpt: "Notes on tooling, GPU economics, and lab-in-the-loop systems that make dark genome screening tractable.",
    date: "Apr 2026",
  },
];

export const Route = createFileRoute("/blogs")({
  head: () => ({
    meta: [
      { title: "Blogs — Quantum Codon" },
      { name: "description", content: "Ideas, trends, and stories from the world of AI and dark genome science." },
      { property: "og:title", content: "Blogs — Quantum Codon" },
      { property: "og:description", content: "Ideas, trends, and stories from the world of AI and dark genome science." },
    ],
  }),
  component: BlogsPage,
});

function BlogsPage() {
  return (
    <>
    <div className="pt-24 pb-20 min-h-screen bg-[#f0f4f8] dark:bg-[#0c131f] transition-colors duration-300">
      <div className="max-w-5xl mx-auto px-6 mb-8">
        <Link to="/" className="text-xs tracking-[0.25em] uppercase text-muted-foreground hover:text-foreground transition">← Back to home</Link>
      </div>

      <section className="max-w-5xl mx-auto px-6">
        <p className="text-xs tracking-[0.3em] text-accent-blue uppercase">Insights · Blogs</p>
        <h1 className="font-serif-display text-4xl md:text-6xl mt-3 leading-tight">Ideas, trends, and stories from the world of AI</h1>
        <p className="mt-5 text-lg text-muted-foreground max-w-3xl">Long-form essays and field notes from the Quantum Codon team on dark genome science, computational biology, and the future of therapeutics.</p>
      </section>

      <section className="max-w-5xl mx-auto px-6 mt-14 grid md:grid-cols-2 gap-6">
        {posts.map((p) => (
          <article key={p.title} className="p-7 rounded-2xl border border-foreground/10 bg-white/60 dark:bg-white/5 backdrop-blur hover:-translate-y-0.5 transition">
            <p className="text-[10px] tracking-[0.3em] text-accent-emerald uppercase">{p.eyebrow}</p>
            <h2 className="mt-3 font-serif-display text-2xl leading-snug">{p.title}</h2>
            <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{p.excerpt}</p>
            <p className="mt-5 text-xs text-muted-foreground font-mono">{p.date}</p>
          </article>
        ))}
      </section>
    </div>
    <QcFooter />
    </>
  );
}
