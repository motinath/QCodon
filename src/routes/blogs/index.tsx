import { createFileRoute, Link } from "@tanstack/react-router";
import { blogPosts } from "@/lib/blogs-data";

export const Route = createFileRoute("/blogs/")({
  head: () => ({
    meta: [
      { title: "Blogs — Quantum Codon" },
      {
        name: "description",
        content: "Ideas, trends, and stories from the world of AI and dark genome science.",
      },
      { property: "og:title", content: "Blogs — Quantum Codon" },
      {
        property: "og:description",
        content: "Ideas, trends, and stories from the world of AI and dark genome science.",
      },
    ],
  }),
  component: BlogsPage,
});

function BlogsPage() {
  return (
    <div className="pt-24 pb-20 min-h-screen bg-[#f0f4f8] dark:bg-[#0c131f] transition-colors duration-300">
      <div className="max-w-5xl mx-auto px-6 mb-8">
        <Link
          to="/"
          className="text-xs tracking-[0.25em] uppercase text-muted-foreground hover:text-foreground transition"
        >
          ← Back to home
        </Link>
      </div>

      <section className="max-w-5xl mx-auto px-6">
        <p className="text-xs tracking-[0.3em] text-accent-blue uppercase">Insights · Blogs</p>
        <h1 className="font-serif-display text-4xl md:text-6xl mt-3 leading-tight">
          Ideas, trends, and stories from the world of AI
        </h1>
        <p className="mt-5 text-lg text-muted-foreground max-w-3xl">
          Long-form essays and field notes from the Quantum Codon team on dark genome science,
          computational biology, and the future of therapeutics.
        </p>
      </section>

      <section className="max-w-5xl mx-auto px-6 mt-14 grid md:grid-cols-2 gap-8">
        {blogPosts.map((p) => (
          <Link
            key={p.slug}
            to="/blogs/$slug"
            params={{ slug: p.slug }}
            className="group rounded-3xl overflow-hidden border border-foreground/5 bg-white/40 dark:bg-black/20 p-5 shadow-lg backdrop-blur-md flex flex-col justify-between hover:-translate-y-1.5 hover:shadow-2xl hover:border-accent-blue/35 transition-all duration-500"
          >
            <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl border border-foreground/5 bg-slate-950 mb-6">
              <img
                src={p.image}
                alt={p.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute top-4 left-4 bg-slate-900/90 text-white font-mono text-[10px] tracking-widest uppercase px-3 py-1 rounded-md backdrop-blur shadow">
                {p.eyebrow}
              </div>
            </div>
            <div>
              <h2 className="font-serif-display text-2xl font-semibold text-foreground mb-3 transition-colors duration-300 group-hover:text-accent-blue leading-snug">
                {p.title}
              </h2>
              <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3 mb-5">
                {p.excerpt}
              </p>
              <div className="flex justify-between items-center border-t border-foreground/5 pt-4">
                <span className="text-xs text-muted-foreground font-mono">{p.date}</span>
                <span className="text-xs font-semibold text-accent-blue group-hover:translate-x-1 transition-transform duration-300 flex items-center gap-1">
                  Read Article →
                </span>
              </div>
            </div>
          </Link>
        ))}
      </section>
    </div>
  );
}
