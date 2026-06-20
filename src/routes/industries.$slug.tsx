import { createFileRoute, notFound, Link, redirect } from "@tanstack/react-router";
import { getIndustry, industries, type Industry } from "@/lib/industries-data";

export const Route = createFileRoute("/industries/$slug")({
  loader: ({ params }) => {
    const industry = getIndustry(params.slug);
    if (!industry) throw notFound();
    return { industry };
  },
  head: ({ loaderData }) => {
    const i = loaderData?.industry;
    if (!i) return { meta: [{ title: "Industry — Quantum Codon" }] };
    return {
      meta: [
        { title: `${i.title} — Quantum Codon` },
        { name: "description", content: i.subtext },
        { property: "og:title", content: `${i.title} — Quantum Codon` },
        { property: "og:description", content: i.subtext },
      ],
    };
  },
  notFoundComponent: () => (
    <div className="pt-32 pb-24 px-6 max-w-3xl mx-auto text-center">
      <p className="text-xs tracking-[0.3em] text-accent-emerald uppercase">404</p>
      <h1 className="font-serif-display text-4xl mt-3">Industry not found</h1>
      <Link to="/" className="inline-block mt-6 text-sm text-muted-foreground hover:text-foreground">← Back to home</Link>
    </div>
  ),
  errorComponent: ({ error, reset }) => (
    <div className="pt-32 pb-24 px-6 max-w-3xl mx-auto text-center">
      <h1 className="font-serif-display text-2xl">Something went wrong</h1>
      <p className="mt-2 text-sm text-muted-foreground">{error.message}</p>
      <button onClick={reset} className="mt-6 px-4 py-2 rounded-full border text-sm">Try again</button>
    </div>
  ),
  component: IndustryDetailPage,
});

function IndustryDetailPage() {
  const { industry: i } = Route.useLoaderData() as { industry: Industry };
  const Icon = i.icon;

  return (
    <div className="pt-24 pb-20 min-h-screen bg-[#f0f4f8] dark:bg-[#0c131f] transition-colors duration-300">
      <div className="max-w-5xl mx-auto px-6 mb-8">
        <Link to="/" className="text-xs tracking-[0.25em] uppercase text-muted-foreground hover:text-foreground transition">
          ← Back to home
        </Link>
      </div>

      <section className="max-w-5xl mx-auto px-6">
        <div className={`rounded-3xl border p-10 md:p-14 ${i.color} backdrop-blur`}>
          <div className="flex items-center gap-3 mb-6">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-accent-blue/10 text-accent-blue">
              <Icon className="h-6 w-6" />
            </div>
            <span className={`font-mono text-xs tracking-widest uppercase ${i.accent}`}>{i.eyebrow}</span>
          </div>
          <h1 className="font-serif-display text-4xl md:text-6xl mt-2 leading-tight">{i.headline}</h1>
          <p className="mt-5 text-lg text-muted-foreground max-w-3xl leading-relaxed">{i.subtext}</p>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-6 mt-16">
        <p className="text-xs tracking-[0.3em] text-accent-blue uppercase">Overview</p>
        <h2 className="font-serif-display text-3xl md:text-4xl mt-3">How we serve {i.title.toLowerCase()}</h2>
        <p className="mt-5 text-base text-muted-foreground leading-relaxed max-w-3xl">{i.overview}</p>
      </section>

      <section className="max-w-5xl mx-auto px-6 mt-16">
        <p className="text-xs tracking-[0.3em] text-accent-purple uppercase">Highlights</p>
        <h2 className="font-serif-display text-3xl md:text-4xl mt-3">What we bring</h2>
        <div className="mt-8 grid md:grid-cols-2 gap-5">
          {i.highlights.map((h) => (
            <div key={h.title} className="p-6 rounded-2xl border border-foreground/10 bg-white/60 dark:bg-white/5 backdrop-blur">
              <h3 className="font-semibold text-base">{h.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{h.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-6 mt-16">
        <p className="text-xs tracking-[0.3em] text-accent-blue uppercase">Use Cases</p>
        <h2 className="font-serif-display text-3xl md:text-4xl mt-3">Where it applies</h2>
        <div className="mt-8 grid md:grid-cols-3 gap-5">
          {i.useCases.map((u) => (
            <div key={u.title} className="p-6 rounded-2xl border border-foreground/10 bg-white/60 dark:bg-white/5 backdrop-blur">
              <h3 className="font-semibold text-base">{u.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{u.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-6 mt-20">
        <div className="rounded-3xl border border-foreground/10 p-10 md:p-14 bg-gradient-to-br from-accent-blue/10 via-accent-purple/10 to-accent-emerald/10 text-center">
          <h2 className="font-serif-display text-3xl md:text-4xl">Partner with us in {i.title}</h2>
          <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">Tell us about your goals and we'll map the right Deep Codon capabilities to your roadmap.</p>
          <div className="mt-7 flex flex-wrap justify-center gap-3">
            <Link to="/contact" className="px-6 py-3 rounded-full bg-foreground text-background text-sm font-semibold hover:opacity-90 transition">
              Partner with us
            </Link>
            <Link to="/" className="px-6 py-3 rounded-full border border-foreground/20 text-sm hover:bg-foreground/5 transition">
              Explore other industries
            </Link>
          </div>
        </div>

        <div className="mt-14">
          <p className="text-xs tracking-[0.3em] text-muted-foreground uppercase">Other industries</p>
          <div className="mt-5 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {industries.filter((x) => x.slug !== i.slug).map((x) => {
              const XIcon = x.icon;
              return (
                <Link key={x.slug} to="/industries/$slug" params={{ slug: x.slug }} className="offering-card group">
                  <div className="flex items-start gap-3">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-accent-blue/10 text-accent-blue group-hover:bg-accent-blue group-hover:text-white transition-colors">
                      <XIcon className="h-4 w-4" />
                    </div>
                    <div className="min-w-0">
                      <h3 className="text-sm font-semibold leading-tight">{x.title}</h3>
                      <p className="mt-1 text-xs text-muted-foreground leading-snug line-clamp-2">{x.subtext}</p>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
