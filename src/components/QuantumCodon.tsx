import React, { useEffect, useRef, useState } from "react";
import { Card } from "@/components/ui/card";
import SkyToggle from "@/components/ui/sky-toggle";
import { Link, NavLink } from "@/lib/router-compat";
import { ArrowUp, Heart, Mail, Instagram, Facebook, Linkedin, Youtube, ChevronDown, Info, Briefcase, BookOpen, FileText, Microscope, HeartPulse, Factory, GraduationCap } from "lucide-react";
import { industries } from "@/lib/industries-data";
import { offerings } from "@/lib/services-data";
import { useTheme } from "@/components/ThemeProvider";
import { useContactModal } from "@/components/ContactModal";

const OFFERING_ANCHORS: Record<string, string> = {
  "drug-discovery": "/#drug-discovery",
  "bio-mmg": "/#bio-mmg",
  "analytical-service": "/#analytical-services",
  "bio-infactic": "/#bioinformatics",
  "regulatory-complaints": "/#regulatory-complaints",
  "bio-infactic": "/#bio-infactic",
  "regulatory-compliance": "/services/regulatory-compliance",
  "education": "/#education",
};

const companyItems = [
  {
    slug: "about",
    label: "About Us",
    subtext: "Discover who we are, what we do, and why it matters.",
    icon: Info,
    to: "/about",
  },
  {
    slug: "careers",
    label: "Careers",
    subtext: "Join the minds behind intelligent solutions.",
    icon: Briefcase,
    to: "/careers",
  },
];

const insightsItems = [
  {
    slug: "blogs",
    label: "Blogs",
    subtext: "Ideas, trends, and stories from the world of AI.",
    icon: BookOpen,
    to: "/blogs",
  },
  {
    slug: "case-studies",
    label: "Case Studies",
    subtext: "Discover how we make a difference.",
    icon: FileText,
    to: "/case-studies",
  },
  {
    slug: "research",
    label: "Research",
    subtext: "15+ years of peer-reviewed dark genome research.",
    icon: Microscope,
    to: "/research",
  },
];

const industriesItems = industries.map((i) => ({
  slug: i.slug,
  label: i.title,
  subtext: i.subtext,
  icon: i.icon,
  to: `/industries/${i.slug}`,
}));

export function QcNavbar() {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const offeringsRef = useRef<HTMLDivElement | null>(null);
  const companyRef = useRef<HTMLDivElement | null>(null);
  const industriesRef = useRef<HTMLDivElement | null>(null);
  const insightsRef = useRef<HTMLDivElement | null>(null);
  const { theme, setTheme } = useTheme();
  const { open: openContact } = useContactModal();

  const openMenu = (name: string) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setActiveMenu(name);
  };
  const scheduleClose = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setActiveMenu(null), 120);
  };

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setActiveMenu(null);
    }
    function onPointerDown(e: MouseEvent) {
      const target = e.target as Node;
      const refs = [offeringsRef, companyRef, industriesRef, insightsRef];
      if (!refs.some((r) => r.current?.contains(target))) {
        setActiveMenu(null);
      }
    }
    document.addEventListener("keydown", onKey);
    document.addEventListener("mousedown", onPointerDown);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("mousedown", onPointerDown);
    };
  }, []);

  return (
    <header className="fixed top-0 inset-x-0 z-50 glass-navbar">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2.5">
          <img src="/logo-emblem.png" alt="Quantum Codon Logo" className="h-7 w-auto object-contain dark:brightness-110" />
          <span className="font-serif-display text-base tracking-tight">Quantum Codon</span>
        </Link>

        <nav className="hidden md:flex gap-8 items-center text-sm">
          {/* Offerings mega menu */}
          <div
            ref={offeringsRef}
            className="relative"
            onMouseEnter={() => openMenu("offerings")}
            onMouseLeave={scheduleClose}
          >
            <button
              type="button"
              onClick={() => setActiveMenu(activeMenu === "offerings" ? null : "offerings")}
              className={`flex items-center gap-1 py-2 transition-colors ${activeMenu === "offerings" ? 'text-foreground font-medium' : 'text-muted-foreground hover:text-foreground'}`}
              aria-expanded={activeMenu === "offerings"}
              aria-haspopup="menu"
            >
              Offerings
              <ChevronDown className={`h-3 w-3 transition-transform duration-200 ${activeMenu === "offerings" ? "rotate-180" : ""}`} />
            </button>

            {activeMenu === "offerings" && (
              <div
                onMouseEnter={() => openMenu("offerings")}
                onMouseLeave={scheduleClose}
                className="animate-menu-in z-50"
                style={{
                  position: "absolute",
                  top: "calc(100% + 10px)",
                  left: "50%",
                  transform: "translateX(-50%)",
                  width: "600px",
                  background: "var(--popover)",
                  border: "1px solid var(--border)",
                  borderRadius: "14px",
                  padding: "14px",
                  boxShadow: "var(--shadow-mega)",
                }}
              >
                <div className="mb-2 px-1">
                  <p className="text-[9px] tracking-[0.3em] text-accent-emerald uppercase font-semibold">Our Offerings</p>
                  <p className="text-[11px] text-muted-foreground mt-0">Explore the full suite of Quantum Codon services.</p>
                </div>
                <div className="grid grid-cols-2" style={{ gap: "8px" }}>
                  {offerings.map((o) => {
                    const Icon = o.icon;
                    return (
                      <Link
                        key={o.slug}
                        to={`/services/${o.slug}`}
                        onClick={() => setActiveMenu(null)}
                        className="offering-card group p-3"
                      >
                        <div className="flex items-center gap-2 mb-1.5">
                          <Icon className="h-4 w-4 text-foreground/80 shrink-0 group-hover:text-accent-blue transition-colors" />
                          <h3 className="text-[12px] font-semibold leading-tight text-foreground group-hover:text-accent-blue transition-colors">{o.title}</h3>
                        </div>
                        <p className="text-[11px] leading-snug text-muted-foreground offering-desc">{o.description}</p>
                      </Link>
                    );
                  })}
                </div>
              </div>
            )}
          </div>

          {/* Industries dropdown */}
          <div
            ref={industriesRef}
            className="relative"
            onMouseEnter={() => openMenu("industries")}
            onMouseLeave={scheduleClose}
          >
            <button
              type="button"
              onClick={() => setActiveMenu(activeMenu === "industries" ? null : "industries")}
              className={`flex items-center gap-1 py-2 transition-colors ${activeMenu === "industries" ? 'text-foreground font-medium' : 'text-muted-foreground hover:text-foreground'}`}
              aria-expanded={activeMenu === "industries"}
              aria-haspopup="menu"
            >
              Industries
              <ChevronDown className={`h-3 w-3 transition-transform duration-200 ${activeMenu === "industries" ? "rotate-180" : ""}`} />
            </button>

            {activeMenu === "industries" && (
              <div
                onMouseEnter={() => openMenu("industries")}
                onMouseLeave={scheduleClose}
                className="animate-menu-in z-50"
                style={{
                  position: "absolute",
                  top: "calc(100% + 10px)",
                  left: "50%",
                  transform: "translateX(-50%)",
                  width: "360px",
                  background: "var(--popover)",
                  border: "1px solid var(--border)",
                  borderRadius: "14px",
                  padding: "14px",
                  boxShadow: "var(--shadow-mega)",
                }}
              >
                <div className="mb-2 px-1">
                  <p className="text-[9px] tracking-[0.3em] text-accent-emerald uppercase font-semibold">Industries</p>
                  <p className="text-[11px] text-muted-foreground mt-0">Where Deep Codon creates impact.</p>
                </div>
                <div className="flex flex-col" style={{ gap: "8px" }}>
                  {industriesItems.map((item) => {
                    const Icon = item.icon;
                    return (
                      <Link
                        key={item.slug}
                        to={item.to}
                        onClick={() => setActiveMenu(null)}
                        className="offering-card group p-3"
                      >
                        <div className="flex items-center gap-2 mb-1.5">
                          <Icon className="h-4 w-4 text-foreground/80 shrink-0 group-hover:text-accent-blue transition-colors" />
                          <h3 className="text-[12px] font-semibold leading-tight text-foreground group-hover:text-accent-blue transition-colors">{item.label}</h3>
                        </div>
                        <p className="text-[11px] leading-snug text-muted-foreground offering-desc line-clamp-2">{item.subtext}</p>
                      </Link>
                    );
                  })}
                </div>
              </div>
            )}
          </div>

          {/* Insights dropdown */}
          <div
            ref={insightsRef}
            className="relative"
            onMouseEnter={() => openMenu("insights")}
            onMouseLeave={scheduleClose}
          >
            <button
              type="button"
              onClick={() => setActiveMenu(activeMenu === "insights" ? null : "insights")}
              className={`flex items-center gap-1 py-2 transition-colors ${activeMenu === "insights" ? 'text-foreground font-medium' : 'text-muted-foreground hover:text-foreground'}`}
              aria-expanded={activeMenu === "insights"}
              aria-haspopup="menu"
            >
              Insights
              <ChevronDown className={`h-3 w-3 transition-transform duration-200 ${activeMenu === "insights" ? "rotate-180" : ""}`} />
            </button>

            {activeMenu === "insights" && (
              <div
                onMouseEnter={() => openMenu("insights")}
                onMouseLeave={scheduleClose}
                className="animate-menu-in z-50"
                style={{
                  position: "absolute",
                  top: "calc(100% + 10px)",
                  left: "50%",
                  transform: "translateX(-50%)",
                  width: "360px",
                  background: "var(--popover)",
                  border: "1px solid var(--border)",
                  borderRadius: "14px",
                  padding: "14px",
                  boxShadow: "var(--shadow-mega)",
                }}
              >
                <div className="mb-2 px-1">
                  <p className="text-[9px] tracking-[0.3em] text-accent-emerald uppercase font-semibold">Insights</p>
                  <p className="text-[11px] text-muted-foreground mt-0">Ideas, stories, and science from our team.</p>
                </div>
                <div className="flex flex-col" style={{ gap: "8px" }}>
                  {insightsItems.map((item) => {
                    const Icon = item.icon;
                    return (
                      <Link
                        key={item.slug}
                        to={item.to}
                        onClick={() => setActiveMenu(null)}
                        className="offering-card group p-3"
                      >
                        <div className="flex items-center gap-2 mb-1.5">
                          <Icon className="h-4 w-4 text-foreground/80 shrink-0 group-hover:text-accent-blue transition-colors" />
                          <h3 className="text-[12px] font-semibold leading-tight text-foreground group-hover:text-accent-blue transition-colors">{item.label}</h3>
                        </div>
                        <p className="text-[11px] leading-snug text-muted-foreground offering-desc line-clamp-2">{item.subtext}</p>
                      </Link>
                    );
                  })}
                </div>
              </div>
            )}
          </div>


          {/* Company dropdown */}
          <div
            ref={companyRef}
            className="relative"
            onMouseEnter={() => openMenu("company")}
            onMouseLeave={scheduleClose}
          >
            <button
              type="button"
              onClick={() => setActiveMenu(activeMenu === "company" ? null : "company")}
              className={`flex items-center gap-1 py-2 transition-colors ${activeMenu === "company" ? 'text-foreground font-medium' : 'text-muted-foreground hover:text-foreground'}`}
              aria-expanded={activeMenu === "company"}
              aria-haspopup="menu"
            >
              Company
              <ChevronDown className={`h-3 w-3 transition-transform duration-200 ${activeMenu === "company" ? "rotate-180" : ""}`} />
            </button>

            {activeMenu === "company" && (
              <div
                onMouseEnter={() => openMenu("company")}
                onMouseLeave={scheduleClose}
                className="animate-menu-in z-50"
                style={{
                  position: "absolute",
                  top: "calc(100% + 10px)",
                  left: "50%",
                  transform: "translateX(-50%)",
                  width: "320px",
                  background: "var(--popover)",
                  border: "1px solid var(--border)",
                  borderRadius: "14px",
                  padding: "14px",
                  boxShadow: "var(--shadow-mega)",
                }}
              >
                <div className="mb-2 px-1">
                  <p className="text-[9px] tracking-[0.3em] text-accent-emerald uppercase font-semibold">Company</p>
                  <p className="text-[11px] text-muted-foreground mt-0">Learn more about Quantum Codon.</p>
                </div>
                <div className="flex flex-col" style={{ gap: "8px" }}>
                  {companyItems.map((item) => {
                    const Icon = item.icon;
                    return (
                      <Link
                        key={item.slug}
                        to={item.to}
                        onClick={() => setActiveMenu(null)}
                        className="offering-card group p-3"
                      >
                        <div className="flex items-center gap-2 mb-1.5">
                          <Icon className="h-4 w-4 text-foreground/80 shrink-0 group-hover:text-accent-blue transition-colors" />
                          <h3 className="text-[12px] font-semibold leading-tight text-foreground group-hover:text-accent-blue transition-colors">{item.label}</h3>
                        </div>
                        <p className="text-[11px] leading-snug text-muted-foreground offering-desc">{item.subtext}</p>
                      </Link>
                    );
                  })}
                </div>
              </div>
            )}
          </div>

          <Link
            to="/contact"
            className="transition-colors text-muted-foreground hover:text-foreground"
          >
            Contact
          </Link>
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm bg-accent-blue text-white hover:opacity-90 transition font-semibold shadow-lg shadow-accent-blue/20"
          >
            Connect with us
          </Link>
          <SkyToggle
            checked={theme === "dark"}
            onChange={(checked) => setTheme(checked ? "dark" : "light")}
            aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
          />
        </div>
      </div>
    </header>
  );
}



export function QcHero() {
  return (
    <section id="hero" className="relative min-h-screen pt-32 pb-24 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(124,58,237,0.25),transparent_55%),radial-gradient(ellipse_at_bottom_left,rgba(37,99,235,0.25),transparent_55%)]" />
      <div className="absolute inset-0 opacity-[0.08] bg-[linear-gradient(rgba(255,255,255,0.4)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.4)_1px,transparent_1px)] bg-[size:48px_48px]" />
      <div className="relative max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <p className="text-xs tracking-[0.3em] text-accent-blue mb-6">DEEP CODON INITIATIVE — QUANTUM CODON PVT LTD</p>
          <h1 className="font-bagel text-5xl md:text-7xl leading-[1.05]">
            The Genome Holds a Secret{" "}
            <span className="bg-gradient-to-r from-accent-blue via-accent-purple to-accent-emerald bg-clip-text text-transparent">
              98%.
            </span>
            <br />We Are Decoding It.
          </h1>
          <blockquote className="mt-8 border-l-2 border-accent-purple pl-4 text-muted-foreground italic max-w-lg">
            "Dark genome is a treasure house for the next generation of drug discovery molecules."
            <footer className="not-italic mt-2 text-sm">— Prof. Pawan K Dhar, CSO, Quantum Codon</footer>
          </blockquote>
          <p className="mt-6 text-muted-foreground max-w-xl leading-relaxed">
            For fifty years, biology focused on the 2% of DNA that codes for proteins. Deep Codon systematically unlocks the remaining 98% — non-expressing DNA and non-translating RNA — and converts it into first-in-class therapeutic molecules.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a href="#platform" className="px-6 py-3 rounded-full bg-gradient-to-r from-accent-blue to-accent-purple text-white shadow-[0_10px_40px_-10px_rgba(124,58,237,0.6)]">
              Explore the Platform →
            </a>
            <a href="#paper" className="px-6 py-3 rounded-full glass-effect dark:border-white/15">
              Read the Landmark Paper
            </a>
          </div>
        </div>
        <div className="relative">
          <div className="glass-effect rounded-3xl p-8 dark:border-white/10">
            <div className="relative aspect-square flex items-center justify-center">
              {/* central helix */}
              <div className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-24 rounded-full bg-gradient-to-b from-accent-blue/30 via-accent-purple/30 to-accent-emerald/30 blur-xl" />
              <div className="absolute inset-y-8 left-1/2 -translate-x-1/2 w-16 rounded-full border border-white/20 bg-gradient-to-b from-accent-blue/40 via-accent-purple/40 to-accent-emerald/40" />
              {/* nodes */}
              <div className="absolute top-4 left-2 px-3 py-2 rounded-lg border border-accent-blue/40 bg-accent-blue/10 text-xs">
                <div className="text-accent-blue font-mono">PROTEIN-CODING</div>
                <div className="opacity-70">1–2% of genome</div>
              </div>
              <div className="absolute top-1/2 -translate-y-1/2 left-2 px-3 py-2 rounded-lg border border-yellow-500/40 bg-yellow-500/10 text-xs">
                <div className="text-yellow-400 font-mono">CLASS I DARK DNA</div>
                <div className="opacity-70">Non-expressing DNA</div>
              </div>
              <div className="absolute bottom-4 left-2 px-3 py-2 rounded-lg border border-accent-purple/40 bg-accent-purple/10 text-xs">
                <div className="text-accent-purple font-mono">CLASS II DARK RNA</div>
                <div className="opacity-70">Non-translating RNA</div>
              </div>
              <div className="absolute top-4 right-2 px-3 py-2 rounded-lg border border-cyan-400/40 bg-cyan-400/10 text-xs text-right">
                <div className="text-cyan-300 font-mono">Currently mined</div>
                <div className="opacity-70">2%</div>
              </div>
              <div className="absolute top-1/2 -translate-y-1/2 right-2 px-3 py-2 rounded-lg border border-yellow-500/40 bg-yellow-500/10 text-xs text-right">
                <div className="text-yellow-400 font-mono">Class I potential</div>
                <div className="opacity-70">~40%</div>
              </div>
              <div className="absolute bottom-4 right-2 px-3 py-2 rounded-lg border border-accent-purple/40 bg-accent-purple/10 text-xs text-right">
                <div className="text-accent-purple font-mono">Class II potential</div>
                <div className="opacity-70">~56%</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* stat strip */}
      <div className="relative max-w-7xl mx-auto px-6 mt-20 grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          ["15+", "Years of continuous dark genome research"],
          ["6+", "Disease areas with proof-of-concept evidence"],
          ["98%", "Genome space historically unmined for therapeutics"],
          ["22nM", "IC50 of tREP-18 against Leishmania"],
        ].map(([n, l]) => (
          <Card key={n} className="glass-effect dark:border-white/10 p-6 dark:bg-white/5">
            <div className="font-bagel text-4xl bg-gradient-to-r from-accent-blue to-accent-emerald bg-clip-text text-transparent">{n}</div>
            <div className="mt-2 text-xs text-muted-foreground">{l}</div>
          </Card>
        ))}
      </div>
    </section>
  );
}

export function QcUntapped() {
  return (
    <section id="platform" className="relative py-28 px-6 bg-[#f0f4f8] dark:bg-[#0c131f] transition-colors duration-300">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-12 gap-12 items-center">
        {/* Left column: Text & progress bars */}
        <div className="lg:col-span-7">
          <p className="text-xs tracking-[0.3em] text-accent-emerald">UNTAPPED BIOLOGICAL SPACE</p>
          <h2 className="font-bagel text-4xl md:text-5xl mt-3">The Untapped Scale of the Dark Genome</h2>
          <p className="mt-6 text-muted-foreground text-sm leading-relaxed">
            Every genome — bacterial, yeast, fly, worm, human — contains an overwhelming majority of sequences that have never been expressed as proteins. These are not gaps or errors. They are the unexplored majority of life's coding potential.
          </p>

          <div className="mt-10 space-y-4">
            {[
              { label: "Protein-coding DNA", pct: 2, color: "from-cyan-400 to-accent-blue" },
              { label: "Class I — Non-expressing DNA", pct: 40, color: "from-yellow-500 to-orange-500" },
              { label: "Class II — Non-translating RNA", pct: 56, color: "from-accent-purple to-pink-500" },
            ].map((b) => (
              <div key={b.label}>
                <div className="flex justify-between text-xs mb-1.5 font-medium">
                  <span>{b.label}</span>
                  <span className="font-mono text-muted-foreground">{b.pct}%</span>
                </div>
                <div className="h-2.5 rounded-full bg-black/5 dark:bg-white/5 overflow-hidden">
                  <div className={`h-full bg-gradient-to-r ${b.color}`} style={{ width: `${b.pct}%` }} />
                </div>
              </div>
            ))}
          </div>
          <p className="mt-5 text-[11px] text-muted-foreground leading-relaxed">
            Approximate proportions vary by organism and annotation methodology. Class I + Class II form Deep Codon's therapeutic reservoir.
          </p>
        </div>

        {/* Right column: 3D Visualization Card */}
        <div className="lg:col-span-5 flex justify-center w-full">
          <div className="relative w-full max-w-sm rounded-3xl overflow-hidden border border-black/10 dark:border-white/10 bg-white/40 dark:bg-black/20 p-4 shadow-xl backdrop-blur-md">
            <div className="absolute inset-0 bg-gradient-to-br from-accent-emerald/10 via-transparent to-accent-blue/10 opacity-40 pointer-events-none" />
            <img
              src="/dark-genome.png"
              alt="98% Dark Genome Structure Map"
              className="w-full h-64 object-cover rounded-2xl border border-black/5 dark:border-white/5 hover:scale-[1.02] transition-transform duration-500"
            />
            <div className="mt-4 text-center">
              <span className="text-[10px] tracking-[0.25em] uppercase font-mono text-accent-emerald font-semibold">98% Dark Genome Reservoir</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const classes = [
  {
    badge: "I",
    tag: "Class I",
    image: "/dna-structure.png",
    color: "from-yellow-500/20 to-orange-500/10 border-yellow-500/30",
    title: "Non-Expressing DNA Sequences",
    intro:
      "DNA regions that are present in every cell but are never transcribed into RNA under natural conditions. Deep Codon's synthetic expression platform unlocks this vast, untouched coding reservoir for the first time.",
    items: [
      ["Intergenic regions", "Sequences between annotated genes. 6/6 randomly selected E. coli intergenic sequences produced stable, functional proteins."],
      ["Antisense sequences", "Complementary strands to coding sequences. Full-length antisense proteins predicted across E. coli, S. cerevisiae, and D. melanogaster."],
      ["Reverse ORFs", "Existing coding sequences read in the reverse (-1) frame — a parallel protein universe derived from every annotated gene."],
      ["Repetitive elements", "Telomeric repeats, microsatellites, LINE/SINE-derived sequences — an underexplored test bed for novel scaffold motifs."],
      ["Pseudogenes", "Once-active genes silenced by mutation. Synthetic reconstruction shows many fold into stable, functional proteins."],
    ],
    pipeline: "Bioinformatics → Synthetic cloning → Expression (E. coli / HEK293 / cell-free) → AlphaFold → Functional assays → Lead optimisation",
  },
  {
    badge: "II",
    tag: "Class II",
    image: "/rna-structure.png",
    color: "from-accent-purple/20 to-pink-500/10 border-accent-purple/30",
    title: "Non-Translating RNA Sequences",
    intro:
      "RNA molecules produced by the cell but never translated into protein. Synthetic translation of these sequences produces biologically active peptides with remarkable therapeutic properties.",
    items: [
      ["Introns", "Spliced out during mRNA processing — yet translate into stable, bioactive peptides and proteins."],
      ["tREPs (tRNA-derived peptides)", "tREP-18, derived from E. coli tRNA, showed anti-leishmanial activity at IC50 = 22.13 nM while safe for human cells."],
      ["Ribosomal RNA", "The scaffold of the ribosome itself — never translated in evolution, a unique template for novel functional peptides."],
      ["MicroRNA", "Only ~22 nucleotides, but with remarkable precision when synthetically translated."],
      ["Long non-coding RNA", "Hundreds to thousands of bases — enormous, uncharted protein-coding reservoir."],
    ],
    pipeline: "tRNA / rRNA / intron ID → Computational translation → Stability prediction → Chemical synthesis → Bioassay → tREP library",
  },
];

export function QcClasses() {
  return (
    <section id="classes" className="relative py-28 px-6 bg-[#f5f3ff] dark:bg-[#120e24] transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        <p className="text-xs tracking-[0.3em] text-accent-purple">THE DEEP CODON CLASSIFICATION</p>
        <h2 className="font-bagel text-4xl md:text-5xl mt-3 max-w-3xl">
          Two classes of dark genomic matter. One drug discovery canvas.
        </h2>

        <div className="mt-14 grid lg:grid-cols-2 gap-8">
          {classes.map((c) => (
            <Card key={c.tag} className={`relative p-8 border bg-gradient-to-br ${c.color} backdrop-blur-xl flex flex-col md:flex-row gap-6 items-start`}>
              <div className="flex-1">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 rounded-full border border-white/20 flex items-center justify-center font-bagel text-2xl">
                    {c.badge}
                  </div>
                  <div className="text-xs tracking-[0.3em] text-muted-foreground">{c.tag.toUpperCase()}</div>
                </div>
                <h3 className="font-bagel text-2xl mb-3">{c.title}</h3>
                <p className="text-sm text-muted-foreground mb-6">{c.intro}</p>
                <ul className="space-y-3 text-sm">
                  {c.items.map(([k, v]) => (
                    <li key={k} className="border-l-2 border-black/10 dark:border-white/10 pl-3">
                      <span className="font-semibold">{k}</span>{" — "}
                      <span className="text-muted-foreground">{v}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-6 text-xs font-mono text-muted-foreground border-t border-white/10 pt-4">
                  {c.pipeline}
                </div>
              </div>
              {c.image && (
                <div className="w-full md:w-32 shrink-0 rounded-2xl overflow-hidden border border-black/5 dark:border-white/10 bg-white/20 dark:bg-black/20 p-2 shadow-md self-center md:self-start">
                  <img src={c.image} alt={c.title} className="w-full h-32 md:h-24 object-cover rounded-xl border border-black/5 dark:border-white/5" />
                </div>
              )}
            </Card>
          ))}
        </div>

        <Card className="mt-10 p-8 border border-white/10 bg-gradient-to-r from-accent-blue/10 via-accent-purple/10 to-accent-emerald/10">
          <h3 className="font-bagel text-2xl">Class I + Class II → First-in-Class Pathways</h3>
          <p className="mt-3 text-muted-foreground">
            By combining Class I proteins and Class II peptides — using domain prediction and molecular docking — Deep Codon designs entirely novel cellular pathways: regulatory, signalling, or metabolic. These pathways do not exist in nature.
          </p>
        </Card>
      </div>
    </section>
  );
}

const results = [
  { year: "2009", cls: "Class I", author: "Dhar et al — JNU, New Delhi", area: "Proof of Concept", title: "World's First Dark Genome Expression", body: "Six E. coli intergenic sequences cloned and expressed. All six produced stable proteins, with Eka1 causing potent reversible growth inhibition.", stats: "6/6 expressed · Eka1 inhibition · 2 stable tertiary structures" },
  { year: "2013–15", cls: "Class I", author: "Joshi, Krishnan et al", area: "Anti-Malaria", title: "Plasmodium falciparum Invasion Blocked", body: "Synthetic peptides from S. cerevisiae intergenic sequences screened against P. falciparum invasion proteins. >60% inhibition of parasite entry.", stats: ">60% invasion inhibition · clinical strain validated" },
  { year: "2015–23", cls: "Class I", author: "Raj, Verma et al", area: "Alzheimer's", title: "BACE1 Inhibition: 86.7% at 1μM", body: "From 2,500 intergenic sequences and 424 novel peptides, ECOI2 achieved 86.7% BACE1 inhibition and reduced amyloid Aβ 1-40 and 1-42 in SH-SY5Y cells.", stats: "ECOI2 86.7% · Aβ reduction · non-toxic" },
  { year: "2023", cls: "Class II", author: "Dhar et al — Published", area: "Anti-Leishmania", title: "First Functional tRNA-Derived Peptide", body: "E. coli tRNAs computationally translated into tREPs. tREP-18 showed IC50 = 22.13 nM against L. donovani and remained safe for human macrophages.", stats: "IC50 = 22.13 nM · membrane disruption" },
  { year: "2024", cls: "Class II", author: "Shanthappa et al", area: "Vaccines", title: "tREP-Derived Antiviral Vaccine Epitopes", body: "tRNA-encoded peptides screened as vaccine epitopes. RRHIDIVV and IMVRFSAE showed favorable HLA binding and 200 ns MD stability.", stats: "2 validated epitopes · 200 ns MD stable" },
  { year: "2016–23", cls: "Class I", author: "Varughese, Garg et al", area: "Enzymes", title: "Antisense and Reverse Protein Landscape", body: "Full-length antisense and reverse proteins mapped across E. coli, S. cerevisiae, D. melanogaster — many predicted enzymatic, transporter, or secretory functions.", stats: "Thousands mapped · multi-organism" },
];

export function QcResults() {
  return (
    <section id="results" className="relative py-28 px-6 bg-[#f0fcf5] dark:bg-[#071d12] transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        <p className="text-xs tracking-[0.3em] text-accent-blue">15 YEARS OF PROOF — 2009 TO 2026</p>
        <h2 className="font-bagel text-4xl md:text-5xl mt-3 max-w-3xl">Validated results across six disease areas</h2>
        <p className="mt-6 text-muted-foreground max-w-3xl">
          The platform has produced biologically active molecules against cancer, malaria, leishmaniasis, Alzheimer's disease, pathogenic microbes, and viral pathogens — over a sustained, peer-reviewed research programme beginning in 2009.
        </p>

        <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {results.map((r) => (
            <Card key={r.title} className="p-6 border border-black/10 dark:border-white/10 bg-white/80 dark:bg-white/[0.03] backdrop-blur-md shadow-sm hover:shadow-md transition">
              <div className="flex justify-between text-xs text-muted-foreground">
                <span className="font-mono">{r.year}</span>
                <span className="px-2 py-0.5 rounded-full border border-white/15">{r.cls}</span>
              </div>
              <div className="mt-3 text-xs text-accent-purple">{r.area}</div>
              <h3 className="font-bagel text-xl mt-2">{r.title}</h3>
              <p className="text-xs text-muted-foreground mt-1">{r.author}</p>
              <p className="mt-3 text-sm text-muted-foreground">{r.body}</p>
              <div className="mt-4 pt-3 border-t border-white/10 text-xs font-mono text-accent-emerald">{r.stats}</div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

const steps = [
  ["01", "Dark Genome Mapping", "Identify Class I and Class II sequences across model organisms; cross-reference NCBI GEO and NR databases."],
  ["02", "AI Prediction", "Translate in silico, predict tertiary structure, screen toxicity, and rank stability, solubility, charge, and immunogenicity."],
  ["03", "Virtual Screening", "Dock dark-genome candidates against kinases, GPCRs, enzymes, viral proteins, and other target classes."],
  ["04", "Quantum Simulation", "Molecular dynamics + quantum modules for binding, folding, electron distribution, and reaction-energy modeling."],
  ["05", "Experimental Validation", "Synthesize or express top candidates and validate via cell assays, Western blot, flow cytometry, and preclinical models."],
];

export function QcPipeline() {
  return (
    <section id="pipeline" className="relative py-28 px-6 bg-[#edf2f7] dark:bg-[#0a1118] transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        <p className="text-xs tracking-[0.3em] text-accent-emerald">THE DEEP CODON TECHNOLOGY PLATFORM</p>
        <h2 className="font-bagel text-4xl md:text-5xl mt-3 max-w-3xl">From dark genome to validated drug candidate</h2>
        <p className="mt-6 text-muted-foreground max-w-3xl">
          An integrated pipeline converting silent genomic sequences into therapeutic candidates through bioinformatics, AI, molecular simulation, and experimental validation.
        </p>

        <ol className="mt-14 grid md:grid-cols-5 gap-4 relative">
          {steps.map(([n, t, d]) => (
            <li key={n} className="relative p-6 rounded-2xl border border-black/10 dark:border-white/10 bg-white/80 dark:bg-white/[0.03] backdrop-blur-md shadow-sm">
              <div className="font-bagel text-3xl bg-gradient-to-br from-accent-blue to-accent-purple bg-clip-text text-transparent">{n}</div>
              <h3 className="font-bagel text-lg mt-2">{t}</h3>
              <p className="text-xs text-muted-foreground mt-2 leading-relaxed">{d}</p>
            </li>
          ))}
        </ol>

        <div className="mt-12 grid md:grid-cols-2 gap-6">
          <Card className="p-8 border border-black/10 dark:border-white/10 bg-gradient-to-br from-accent-blue/10 to-transparent shadow-sm">
            <p className="text-xs tracking-[0.3em] text-accent-blue">ARTIFICIAL INTELLIGENCE</p>
            <h3 className="font-bagel text-2xl mt-2">Making the Invisible Visible at Scale</h3>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground list-disc pl-5">
              <li>AlphaFold-based tertiary structure prediction</li>
              <li>Multi-omics integration across genetic, immune, and metabolic data</li>
              <li>ADMET and toxicity screening at genome scale</li>
              <li>Automated candidate prioritization by druggability</li>
            </ul>
          </Card>
          <Card className="p-8 border border-black/10 dark:border-white/10 bg-gradient-to-br from-accent-purple/10 to-transparent shadow-sm">
            <p className="text-xs tracking-[0.3em] text-accent-purple">QUANTUM COMPUTING</p>
            <h3 className="font-bagel text-2xl mt-2">Simulating Molecular Reality with Precision</h3>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground list-disc pl-5">
              <li>Quantum-level electron distribution modeling</li>
              <li>Variational Quantum Eigensolver for electronic structure</li>
              <li>Quantum pattern recognition in high-dimensional data</li>
              <li>Molecular dynamics refined by quantum accuracy</li>
            </ul>
          </Card>
        </div>
      </div>
    </section>
  );
}

export function QcPaper() {
  return (
    <section id="paper" className="relative py-28 px-6 bg-[#fdf6e2] dark:bg-[#15120a] transition-colors duration-300">
      <div className="max-w-5xl mx-auto">
        <p className="text-xs tracking-[0.3em] text-accent-purple">LANDMARK PUBLICATION — 2025</p>
        <h2 className="font-bagel text-4xl md:text-5xl mt-3">The Scientific Foundation</h2>
        <p className="mt-6 text-muted-foreground max-w-3xl">
          The Deep Codon platform is anchored in 15+ years of published research, culminating in a 2025 preprint proposing an integrated AI + quantum framework for dark genome drug discovery.
        </p>

        <Card className="mt-10 p-8 border border-black/10 dark:border-white/10 bg-white/80 dark:bg-white/[0.03] backdrop-blur-md shadow-sm">
          <div className="text-xs text-muted-foreground">Preprint · Posted 19 May 2025 · Preprints.org · Biology and Biotechnology</div>
          <h3 className="font-bagel text-2xl md:text-3xl mt-3">
            Recoding Genomic Elements with AI and Quantum Computation to Build the Next Generation Drug Discovery Platform
          </h3>
          <p className="mt-3 text-sm text-muted-foreground">
            Kadalmani Krishnan · Anita Chugh · Vidya Niranjan · <strong className="text-foreground">Pawan Kumar Dhar*</strong>
          </p>
          <p className="mt-2 text-xs font-mono text-muted-foreground">DOI: 10.20944/preprints202505.1422.v1</p>
          <blockquote className="mt-5 border-l-2 border-accent-purple pl-4 italic text-muted-foreground">
            "We propose a next-generation, first-in-class drug discovery platform that harnesses the vast, untapped genomic landscape through the integration of Artificial Intelligence and Quantum Computing."
          </blockquote>
          <div className="mt-5 flex flex-wrap gap-2 text-xs">
            {["dark genome", "synthetic biology", "drug discovery", "AI", "quantum computing", "tRNA-derived peptides"].map((t) => (
              <span key={t} className="px-3 py-1 rounded-full border border-white/15 text-muted-foreground">{t}</span>
            ))}
          </div>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="https://www.preprints.org/manuscript/202505.1422" target="_blank" rel="noreferrer" className="px-5 py-2.5 rounded-full bg-gradient-to-r from-accent-blue to-accent-purple text-white text-sm">
              Read Full Paper →
            </a>
            <a href="https://www.preprints.org/frontend/manuscript/a1670eb948afd0978f09cf16d10f08c9/download_pub" target="_blank" rel="noreferrer" className="px-5 py-2.5 rounded-full glass-effect dark:border-white/15 text-sm">
              Download PDF
            </a>
          </div>
        </Card>

        <p className="mt-8 text-sm text-muted-foreground">
          <strong className="text-foreground">Also see:</strong> Dhar et al 2009, Joshi et al 2013, Raj et al 2015, Verma et al 2023, Garg & Dhar 2023a,b, Nayak & Dhar 2023, Shanthappa et al 2024.
        </p>
      </div>
    </section>
  );
}

export function QcInvestor() {
  return (
    <div className="relative py-6 px-6 max-w-6xl mx-auto">
      <p className="text-xs tracking-[0.3em] text-accent-emerald">INVESTOR BRIEF — QUANTUM CODON PVT LTD</p>
      <h2 className="font-bagel text-4xl md:text-5xl mt-3 max-w-4xl">
        The last great frontier in drug discovery is inside our own genomes.
      </h2>
      <p className="mt-6 text-muted-foreground max-w-3xl">
        The global pharmaceutical industry spends USD 2.6 trillion annually on R&D with a 90%+ failure rate. The structural reason: it is mining only 1-2% of available biological space.
      </p>
      <p className="mt-3 text-muted-foreground max-w-3xl">
        Deep Codon has built a platform from Class I non-expressing DNA and Class II non-translating RNA sequences. Every intergenic region, antisense strand, tRNA, and pseudogene becomes part of the competitive moat.
      </p>

      <div className="mt-10 grid md:grid-cols-3 gap-6">
        {[
          ["15 Years of Proprietary Science", "Reproducible, published research across 6 disease areas creates a long-duration scientific advantage."],
          ["Amaravati Quantum Valley Anchor", "Quantum integration is already architected into the discovery pipeline as infrastructure matures."],
          ["No Competitive Platform Exists", "The non-expressing and non-translating genomic space remains largely unexplored territory."],
        ].map(([t, d]) => (
          <Card key={t} className="p-6 border border-black/10 dark:border-white/10 bg-white/80 dark:bg-white/[0.03] shadow-sm">
            <h3 className="font-bagel text-lg">{t}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{d}</p>
          </Card>
        ))}
      </div>
    </div>
  );
}

export function QcContact() {
  return (
    <div id="contact" className="relative py-6 px-6 max-w-4xl mx-auto text-center">
      <p className="text-xs tracking-[0.3em] text-accent-blue">PARTNER WITH QUANTUM CODON</p>
      <h2 className="font-bagel text-4xl md:text-6xl mt-3">
        The genome's most important medicines are yet to be discovered.
      </h2>
      <p className="mt-6 text-muted-foreground max-w-2xl mx-auto">
        Deep Codon is the platform built to find them in the 98% of the genome that science has barely explored. Join us at the frontier of next-generation drug discovery.
      </p>
      <div className="mt-8 flex flex-wrap gap-4 justify-center">
        <a href="mailto:contact@quantumcodon.in" className="px-6 py-3 rounded-full bg-gradient-to-r from-accent-blue to-accent-purple text-white shadow-[0_10px_40px_-10px_rgba(124,58,237,0.6)]">
          Request Investor Deck
        </a>
        <a href="mailto:contact@quantumcodon.in" className="px-6 py-3 rounded-full glass-effect dark:border-white/15">
          Schedule a Meeting
        </a>
      </div>
    </div>
  );
}

// --- Premium Custom Footer and Theme Toggle ---

const XIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const ThreadsIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M12 2a10 10 0 1 0 10 10c0-1.8-1-3-2.5-3s-2.5 1.2-2.5 3a2.5 2.5 0 0 1-5 0V11a2.5 2.5 0 0 0-5 0v1a8 8 0 1 1 16 0" />
  </svg>
);

const WhatsAppIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M12.004 2C6.48 2 2.001 6.477 2.001 12c0 1.89.525 3.66 1.438 5.18L2 22l5.002-1.313a9.957 9.957 0 0 0 4.997 1.313c5.525 0 10.002-4.477 10.002-10S17.529 2 12.004 2zm5.176 13.929c-.218.614-1.28 1.189-1.785 1.254-.45.058-.992.088-2.906-.703-2.445-1.012-4.02-3.486-4.14-3.648-.124-.162-.992-1.317-.992-2.513 0-1.196.627-1.785.848-2.029.222-.244.482-.305.643-.305.161 0 .322.002.462.008.147.006.345-.056.541.414.2.483.684 1.662.744 1.783.06.121.1.262.018.423-.082.161-.122.262-.242.402-.121.141-.252.315-.361.423-.122.12-.25.251-.108.494.142.242.631 1.037 1.353 1.678.932.83 1.716 1.087 1.958 1.209.242.121.383.1.524-.06.141-.162.604-.703.765-.944.161-.242.322-.202.542-.121.22.081 1.391.656 1.631.777.24.121.401.182.46.283.061.101.061.583-.157 1.197z" />
  </svg>
);

const BehanceIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M8.22 5.382c1.458 0 2.656.326 3.587.973.93.648 1.396 1.615 1.396 2.897 0 .809-.204 1.5-.615 2.074-.411.572-1.026.983-1.844 1.233.957.243 1.69.7 2.2 1.37.51.67.765 1.528.765 2.57 0 1.38-.49 2.45-1.47 3.21-.98.76-2.33 1.14-4.05 1.14H1.25V5.382H8.22zm-.57 6.43c.9 0 1.565-.184 1.996-.554.431-.37.646-.913.646-1.63 0-.693-.217-1.218-.65-1.577-.434-.36-1.11-.539-2.029-.539H4.625V11.81H7.65zm.38 6.472c.983 0 1.722-.213 2.217-.638.495-.426.743-1.025.743-1.8 0-.776-.247-1.37-.74-1.782-.493-.412-1.24-.618-2.24-.618H4.625V18.28h3.407zm11.233-7.51c1.378 0 2.441.383 3.19 1.15.75.766 1.125 1.87 1.125 3.314H15.932c.038.868.32 1.543.844 2.025.524.482 1.214.723 2.07.723.676 0 1.246-.145 1.71-.437.464-.29.81-.722 1.04-1.295h3.003c-.347 1.245-1.08 2.23-2.2 2.955-1.12.724-2.52 1.086-4.204 1.086-1.898 0-3.39-.567-4.475-1.701C15.776 18.067 15.234 16.292 15.234 14c0-2.22.518-3.956 1.554-5.207 1.036-1.252 2.457-1.878 4.263-1.878zm-.07 2.285c-.714 0-1.282.212-1.704.636-.422.424-.658 1.025-.707 1.802h4.743c-.02-.797-.245-1.396-.675-1.796-.43-.4-.984-.642-1.657-.642zm.052-4.148v-1.196h5.367v1.196h-5.367z" />
  </svg>
);

const footerNavigation = {
  categories: [
    {
      id: "quantumcodon",
      name: "Quantum Codon",
      sections: [
        {
          id: "about",
          name: "About Us",
          items: [
            { name: "About Overview", href: "/about" },
            { name: "Prof. Pawan K Dhar", href: "/about" },
            { name: "Research Pedigree", href: "/about" },
          ],
        },
        {
          id: "services",
          name: "Services",
          items: [
            { name: "Drug Discovery", href: "/#drug-discovery" },
            { name: "Bio MMG", href: "/#bio-mmg" },
            { name: "Analytical Services", href: "/#analytical-services" },
          ],
        },
        {
          id: "research",
          name: "Research",
          items: [
            { name: "Dark Genome Platform", href: "/research" },
            { name: "Classes I & II", href: "/research" },
            { name: "Results & Publication", href: "/research" },
          ],
        },
        {
          id: "education",
          name: "Education",
          items: [
            { name: "Academic Training", href: "/services/education#academic-training" },
            { name: "Certifications", href: "/services/education" },
          ],
        },
        {
          id: "careers",
          name: "Careers",
          items: [
            { name: "Open Positions", href: "/careers" },
            { name: "Scientific Culture", href: "/careers" },
          ],
        },
        {
          id: "contact",
          name: "Contact",
          items: [
            { name: "Partner With Us", href: "/contact" },
            { name: "Schedule a Meeting", href: "/contact" },
          ],
        },
      ],
    },
  ],
};

const Underline = `hover:-translate-y-1 border border-dotted border-white/10 rounded-xl p-2.5 transition-transform bg-white/5 backdrop-blur`;

export function ThemeToggle() {
  const handleScrollTop = () => {
    window.scroll({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="flex items-center justify-center">
      <button
        onClick={handleScrollTop}
        aria-label="Scroll to top"
        className="inline-flex items-center gap-2 rounded-full border border-dotted border-white/20 px-3 py-1.5 bg-white/5 backdrop-blur-md text-slate-300 hover:text-white hover:bg-white/10 transition-colors"
      >
        <ArrowUp className="h-3.5 w-3.5" />
        <span className="text-[11px] tracking-[0.18em] uppercase">Back to top</span>
      </button>
    </div>
  );
}

export function QcFooter() {
  const socials = [
    { ariaLabel: "Email", href: "mailto:contact@quantumcodon.in", icon: Mail },
    { ariaLabel: "LinkedIn", href: "https://linkedin.com/company/quantumcodon", icon: Linkedin },
    { ariaLabel: "X", href: "https://x.com/quantumcodon", icon: XIcon },
  ];

  return (
    <footer className="bg-[#0f1115] text-slate-200 border-t border-white/10 py-8 px-6 w-full mt-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Left Side: Logo & Copyright */}
        <div className="flex flex-col md:flex-row items-center gap-4">
          <Link to="/" className="flex items-center gap-2">
            <img src="/logo-emblem.png" alt="Quantum Codon Logo" className="h-6 w-auto object-contain dark:brightness-110" />
            <span className="font-serif-display text-sm tracking-tight text-white font-semibold">Quantum Codon</span>
          </Link>
          <div className="text-[11px] text-slate-400 font-mono tracking-tight text-center md:text-left">
            <span>© {new Date().getFullYear()} Quantum Codon Pvt Ltd · Deep Codon Initiative.</span>
            <span className="block md:inline md:ml-1.5 text-slate-500">All rights reserved.</span>
          </div>
        </div>

        {/* Right Side: Socials & Theme/Scroll toggles */}
        <div className="flex items-center gap-6">
          {/* Socials */}
          <div className="flex items-center gap-3">
            {socials.map((s) => (
              <a
                key={s.ariaLabel}
                aria-label={s.ariaLabel}
                href={s.href}
                rel="noreferrer"
                target="_blank"
                className="hover:-translate-y-0.5 transition-transform bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg p-2 text-slate-400 hover:text-white"
              >
                <s.icon className="h-4 w-4" />
              </a>
            ))}
          </div>

          <div className="h-4 w-px bg-white/10" />

          {/* Theme Toggle */}
          <ThemeToggle />
        </div>
      </div>
    </footer>
  );
}

// --- New Corporate Section Components ---

export function QcAbout() {
  return (
    <section id="about" className="relative py-28 px-6 bg-[#f8fafc] dark:bg-[#0f172a] transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        <p className="text-xs tracking-[0.3em] text-accent-blue">ABOUT QUANTUM CODON</p>
        <h2 className="font-bagel text-4xl md:text-5xl mt-3">Unlocking the Genome's Hidden Moat</h2>

        <div className="grid lg:grid-cols-2 gap-12 mt-12 items-center">
          <div className="space-y-6 text-muted-foreground leading-relaxed">
            <p>
              Quantum Codon was founded to explore the final frontier of biology: the non-coding and silent DNA regions that constitute 98% of our genome. Long dismissed as "junk DNA", these regions hold the instructions for creating stable, highly potent therapeutic candidates that do not exist in nature.
            </p>
            <p>
              Led by Prof. Pawan K Dhar, a pioneer with over 15 years of continuous dark genome research, we integrate advanced bioinformatics, state-of-the-art AI structural predictions (AlphaFold), and quantum mechanics to design and synthesize novel peptides and proteins.
            </p>
            <p className="text-sm border-l-2 border-accent-blue pl-4 italic">
              "We are building a parallel biology universe. By synthetically expressing genes that nature kept silent, we are creating a completely new class of medicines."
              <span className="block not-italic mt-2 text-xs font-semibold text-foreground">— Prof. Pawan K Dhar, CSO</span>
            </p>
          </div>
          <div className="glass-effect rounded-3xl p-8 dark:border-white/10 dark:bg-white/5 backdrop-blur">
            <h3 className="font-bagel text-xl mb-4">Our Anchors</h3>
            <ul className="space-y-4">
              <li className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-accent-blue/10 flex items-center justify-center shrink-0 text-accent-blue font-bold">1</div>
                <div>
                  <h4 className="font-semibold text-sm">Academic Heritage</h4>
                  <p className="text-xs text-muted-foreground mt-1">Research initiated at Jawaharlal Nehru University (JNU), New Delhi, with proof of concept validated across multiple peer-reviewed studies.</p>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-accent-emerald/10 flex items-center justify-center shrink-0 text-accent-emerald font-bold">2</div>
                <div>
                  <h4 className="font-semibold text-sm">Amaravati Quantum Valley</h4>
                  <p className="text-xs text-muted-foreground mt-1">Anchor corporate laboratory in Amaravati, designing advanced quantum-computational simulations of molecular docking and folding dynamics.</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export function QcServices() {
  const servicesList = [
    {
      id: "drug-discovery",
      num: "01",
      title: "1. Drug Discovery",
      desc: "Systematic screening and design of first-in-class therapeutic molecules and peptides from the dark genome's non-expressing regions. Tailored leads against cancer, neurodegenerative, and infectious diseases.",
      color: "border-accent-blue/20 bg-accent-blue/[0.02] hover:bg-accent-blue/[0.05]"
    },
    {
      id: "bio-mmg",
      num: "02",
      title: "2. Bio MMG",
      desc: "Microbiology and molecular genetics testing. Synthetic gene design, promoter cloning, expression profiling in bacterial/yeast/mammalian systems, and verification of synthetic translation products.",
      color: "border-accent-purple/20 bg-accent-purple/[0.02] hover:bg-accent-purple/[0.05]"
    },
    {
      id: "analytical-services",
      num: "03",
      title: "3. Analytical Service",
      desc: "High-resolution molecular structure validation. Chromatographic analysis, HPLC, mass spectrometry, stability testing, solubility profiling, and quantum-refined ADMET checks.",
      color: "border-accent-emerald/20 bg-accent-emerald/[0.02] hover:bg-accent-emerald/[0.05]"
    },
    {
      id: "bioinformatics",
      num: "04",
      title: "4. Bioinformatics",
      desc: "Next-gen bioinformatics modeling. Large-scale genome mapping, transcriptomic sequence annotation, custom neural net docking prediction, and multi-scale protein modeling.",
      color: "border-cyan-500/20 bg-cyan-500/[0.02] hover:bg-cyan-500/[0.05]"
    },
    {
      id: "regulatory-complaints",
      num: "05",
      title: "5. Regulatory & Complaints",
      desc: "Comprehensive compliance auditing. IND documentation assistance, FDA/EMA dossier compilation, safety assurance, and rigorous reporting systems conforming to international biotech regulatory metrics.",
      color: "border-orange-500/20 bg-orange-500/[0.02] hover:bg-orange-500/[0.05]"
    }
  ];

  return (
    <section id="services" className="relative py-28 px-6 bg-[#f0f4f8] dark:bg-[#0c131f] transition-colors duration-300">
      <div className="max-w-6xl mx-auto font-sans">
        <p className="text-xs tracking-[0.3em] text-accent-emerald uppercase">OUR SERVICES</p>
        <h2 className="font-bagel text-4xl md:text-5xl mt-3">Enterprise Biotechnology & Computing Solutions</h2>
        <p className="mt-6 text-muted-foreground max-w-3xl">
          We offer a comprehensive suite of computational, biological, and compliance services tailored to help pharmaceutical, agricultural, and clinical research teams unlock biological coding potential.
        </p>

        <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicesList.map((s) => (
            <Card id={s.id} key={s.id} className={`p-8 border backdrop-blur transition-all duration-300 hover:-translate-y-1 ${s.color}`}>
              <div className="font-mono text-xs text-muted-foreground mb-4">{s.num}</div>
              <h3 className="font-bagel text-2xl mb-3">{s.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

export function QcEducation() {
  return (
    <div id="education" className="relative py-6 px-6 max-w-5xl mx-auto">
      <p className="text-xs tracking-[0.3em] text-accent-purple">EDUCATION & TRAINING</p>
      <h2 className="font-bagel text-4xl md:text-5xl mt-3">Academic Training and Certification</h2>
      <p className="mt-6 text-muted-foreground max-w-3xl">
        Deep Codon Initiative provides institutional training and certification programs for scholars, graduate students, and corporate researchers. Learn state-of-the-art computational biology, synthetic gene expression, and quantum-molecular mechanics.
      </p>

      <div className="grid md:grid-cols-2 gap-8 mt-12" id="academic-training">
        <Card className="p-8 border border-black/10 dark:border-white/10 bg-white/80 dark:bg-white/5 backdrop-blur hover:bg-white/10 dark:hover:bg-white/10 transition">
          <h3 className="font-bagel text-2xl mb-4 text-accent-purple">Programs & Curriculums</h3>
          <ul className="space-y-4 text-sm text-muted-foreground list-disc pl-5">
            <li><strong>Dark Genome Mapping & Annotation</strong>: Analyzing non-coding RNA structures and synthetic translation frames.</li>
            <li><strong>AI Structure Prediction</strong>: Integrating AlphaFold algorithms and model metrics into lead generation pipelines.</li>
            <li><strong>Quantum Molecular Dynamics</strong>: Refining energy structures and binding calculations on quantum hardware.</li>
            <li><strong>Synthetic Expression Genetics</strong>: Designing promoters, intergenic sequence expression loops, and vectors.</li>
          </ul>
        </Card>

        <Card className="p-8 border border-black/10 dark:border-white/10 bg-white/80 dark:bg-white/5 backdrop-blur hover:bg-white/10 dark:hover:bg-white/10 transition">
          <h3 className="font-bagel text-2xl mb-4 text-accent-emerald">Certification</h3>
          <p className="text-sm text-muted-foreground leading-relaxed mb-4">
            All courses are certified by Quantum Codon Pvt Ltd, demonstrating core competency in synthetic bio-engineering and computational tools. Validated by theoretical assessments and laboratory design assignments.
          </p>
          <div className="p-4 rounded-xl bg-accent-emerald/10 border border-accent-emerald/20 text-xs text-accent-emerald font-mono">
            Next Cohort Enrollment opens: July 15, 2026.
            <br />For institutional partnerships, contact: edu@quantumcodon.in
          </div>
        </Card>
      </div>
    </div>
  );
}

export function QcCareers() {
  const jobs = [
    { title: "Computational Biologist", type: "Full-Time · Amaravati Anchor", dept: "R&D Bio-computational" },
    { title: "Quantum Software Engineer", type: "Full-Time / Hybrid", dept: "Quantum Mechanics & Simulation" },
    { title: "Lead Regulatory Auditor", type: "Full-Time · Hybrid", dept: "Quality & Compliance" },
  ];

  return (
    <div id="careers" className="relative py-6 px-6 max-w-5xl mx-auto">
      <p className="text-xs tracking-[0.3em] text-accent-blue">CAREERS AT QUANTUM CODON</p>
      <h2 className="font-bagel text-4xl md:text-5xl mt-3">Join the Deep Codon Team</h2>
      <p className="mt-6 text-muted-foreground max-w-3xl">
        We are searching for pioneers, scientists, and engineers to build the next generation drug discovery platform. Explore open roles across biological sciences, quantum computation, and software engineering.
      </p>

      <div className="mt-12 space-y-4">
        {jobs.map((j) => (
          <Card key={j.title} className="p-6 border border-black/10 dark:border-white/10 bg-white/80 dark:bg-white/5 backdrop-blur hover:bg-white/10 dark:hover:bg-white/10 transition flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <span className="text-xs text-accent-purple font-mono uppercase">{j.dept}</span>
              <h3 className="font-bagel text-xl mt-1">{j.title}</h3>
              <p className="text-xs text-muted-foreground mt-1">{j.type}</p>
            </div>
            <a href="mailto:careers@quantumcodon.in" className="px-5 py-2 text-xs rounded-full bg-foreground text-background font-semibold hover:opacity-90 transition inline-block text-center">
              Apply Now
            </a>
          </Card>
        ))}
      </div>
    </div>
  );
}

export function QcServicesDetailed() {
  const [activeTab, setActiveTab] = useState("drug-discovery");

  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const targetTab = hash.replace("#", "");
      if (details.some((d) => d.id === targetTab)) {
        setActiveTab(targetTab);
      }
    }
  }, []);

  const details = [
    {
      id: "drug-discovery",
      num: "01",
      title: "Drug Discovery",
      badge: "Discovery Core",
      color: "border-accent-blue/15 bg-accent-blue/[0.01]",
      accentText: "text-accent-blue",
      bullets: [
        "Computational screening of intergenic DNA strands and antisense reading frames.",
        "Translation in silico of microRNAs, introns, and tRNA-derived peptides (tREPs).",
        "Binding affinity optimization utilizing state-of-the-art virtual docking software.",
        "Candidate synthesis of leading peptide structures for preclinical validations."
      ],
      leadParagraph: "Quantum Codon's primary focus is the systematic conversion of previously unmined genomic regions into active drug candidates. Led by our proprietary discovery platform, we map silent sequences directly to cellular receptors.",
      technologies: "In Silico Translation, Dynamic Docking, Peptide Synthesis, Lead Profiling"
    },
    {
      id: "bio-mmg",
      num: "02",
      title: "Bio MMG (Microbiology & Molecular Genetics)",
      badge: "Wet-Lab Core",
      color: "border-accent-purple/15 bg-accent-purple/[0.01]",
      accentText: "text-accent-purple",
      bullets: [
        "High-fidelity cloning of candidate constructs into customized plasmids.",
        "Host organism engineering (E. coli, S. cerevisiae, cell-free models).",
        "Verification of synthetic protein expression and translational stability.",
        "Growth-inhibition, receptor-binding, and multi-well functional bioassays."
      ],
      leadParagraph: "Our molecular genetics facility validates computer models through rigorous wet-lab experimentation. We construct synthetic gene pathways that do not exist under natural evolutionary parameters.",
      technologies: "Cloning Vectors, Recombinant Expression, Western Blot, SDS-PAGE"
    },
    {
      id: "analytical-services",
      num: "03",
      title: "Analytical Services",
      badge: "Structure Validation",
      color: "border-accent-emerald/15 bg-accent-emerald/[0.01]",
      accentText: "text-accent-emerald",
      bullets: [
        "Purity and concentration assessment via High-Performance Liquid Chromatography (HPLC).",
        "Mass spectrometry (LC-MS/MS) for exact molecular weight and sequence validation.",
        "Solubility, thermal shift, stability, and formulation assays.",
        "Preclinical ADMET (Absorption, Distribution, Metabolism, Excretion, Toxicity) checks."
      ],
      leadParagraph: "Every synthetic candidate undergoes strict analytical characterization. We verify folding coordinates, absolute molecular weight, and pharmacokinetic properties under standard GLP directives.",
      technologies: "HPLC, LC-MS/MS, Thermal Shift, ADMET Assays"
    },
    {
      id: "bioinformatics",
      num: "04",
      title: "Bioinformatics",
      badge: "Computational Biology",
      color: "border-cyan-500/15 bg-cyan-500/[0.01]",
      accentText: "text-cyan-600 dark:text-cyan-400",
      bullets: [
        "Genome-scale sequence mapping across multi-organism genetic directories.",
        "Non-coding sequence structural annotation and sequence homology indexes.",
        "Tertiary structure prediction utilizing machine-learning metrics (AlphaFold integrations).",
        "High-throughput screening algorithms for virtual library prioritization."
      ],
      leadParagraph: "Computational bioinformatics forms the digital backbone of our discovery engine. We annotate genomes at scale, focusing exclusively on untranslated regions to prioritize viable candidates.",
      technologies: "Homology Models, Sequence Mapping, AlphaFold APIs, Deep Docking"
    },
    {
      id: "regulatory-complaints",
      num: "05",
      title: "Regulatory & Complaints",
      badge: "Compliance & Assurance",
      color: "border-orange-500/15 bg-orange-500/[0.01]",
      accentText: "text-orange-600 dark:text-orange-400",
      bullets: [
        "IND (Investigational New Drug) dossier compilation and regulatory support.",
        "Complete safety assurance reporting in accordance with FDA and EMA guidelines.",
        "GLP/GMP-compliant documentation audits and laboratory standard logging.",
        "Comprehensive client reporting, inquiry handling, and complaint logging logs."
      ],
      leadParagraph: "We maintain rigorous data integrity and clinical readiness. Our regulatory team ensures that every scientific discovery complies with international biotechnology guidelines and safety controls.",
      technologies: "GLP Logging, FDA Dossiers, Audit Trails, Quality Controls"
    },
    {
      id: "education",
      num: "06",
      title: "Education",
      badge: "Training & Certification",
      color: "border-accent-purple/15 bg-accent-purple/[0.01]",
      accentText: "text-accent-purple",
      bullets: [
        "Structured tracks for engineers, scientists, and research leadership.",
        "Live cohort-based workshops led by working quantum scientists.",
        "Industry-recognized certifications with rigorous assessment.",
        "Bespoke corporate training aligned to your team's roadmap."
      ],
      leadParagraph: "Deep Codon Initiative provides institutional training and certification programs in computational biology, synthetic gene expression, and quantum-molecular mechanics — taught by domain experts on real hardware.",
      technologies: "Dark Genome Mapping, AI Structure Prediction, Quantum Molecular Dynamics, Synthetic Expression"
    }
  ];


  const activeDetail = details.find((d) => d.id === activeTab) || details[0];

  return (
    <section className="py-12 px-6 font-sans">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-8 items-start">
          {/* Tabs Sidebar */}
          <div className="lg:col-span-4 flex flex-row lg:flex-col overflow-x-auto lg:overflow-x-visible gap-2.5 pb-4 lg:pb-0 scrollbar-none">
            {details.map((d) => {
              const isActive = d.id === activeTab;
              return (
                <button
                  key={d.id}
                  onClick={() => {
                    setActiveTab(d.id);
                    window.location.hash = d.id;
                  }}
                  className={`flex-shrink-0 text-left px-5 py-4 rounded-2xl border transition-all duration-300 w-[240px] lg:w-full flex items-center justify-between ${isActive
                      ? "bg-foreground text-background shadow-lg border-foreground font-semibold"
                      : "bg-white/5 border-white/10 hover:bg-white/10 text-muted-foreground hover:text-foreground"
                    }`}
                >
                  <div className="flex flex-col">
                    <span className="text-[10px] font-mono opacity-60 tracking-wider">{d.num}</span>
                    <span className="font-serif-display text-base font-semibold mt-1">{d.title.replace(/^\d+\.\s*/, '')}</span>
                  </div>
                  <span className={`w-1.5 h-1.5 rounded-full ${isActive ? 'bg-accent-emerald' : 'bg-transparent'}`} />
                </button>
              );
            })}
          </div>

          {/* Tab Content */}
          <div className="lg:col-span-8">
            <div className={`p-8 md:p-10 rounded-3xl border backdrop-blur-xl ${activeDetail.color} space-y-6 transition-all duration-500 animate-in fade-in slide-in-from-right-4`}>
              <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-6">
                <div>
                  <span className="font-mono text-xs text-muted-foreground tracking-widest">{activeDetail.num} · {activeDetail.badge.toUpperCase()}</span>
                  <h3 className="font-serif-display text-3xl md:text-4xl mt-2">{activeDetail.title}</h3>
                </div>
                <a href="#contact" className="px-5 py-2 text-xs rounded-full bg-foreground text-background font-semibold hover:opacity-90 transition">
                  Inquire Services
                </a>
              </div>


              <p className="text-base text-foreground/80 leading-relaxed font-serif-display italic">
                {activeDetail.leadParagraph}
              </p>

              <div className="grid md:grid-cols-2 gap-8 pt-4">
                <div>
                  <h4 className={`text-sm font-semibold uppercase tracking-wider mb-4 ${activeDetail.accentText}`}>Core Deliverables & Capabilities</h4>
                  <ul className="space-y-3 text-sm text-muted-foreground list-disc pl-5">
                    {activeDetail.bullets.map((b, i) => (
                      <li key={i}>{b}</li>
                    ))}
                  </ul>
                </div>
                <div className="p-6 rounded-2xl bg-white/5 border border-white/5 flex flex-col justify-between">
                  <div>
                    <h4 className="text-xs font-semibold text-muted-foreground uppercase tracking-widest">Technologies & Methods</h4>
                    <p className="text-sm text-foreground/80 font-mono mt-3 leading-relaxed">
                      {activeDetail.technologies}
                    </p>
                  </div>
                  <div className="text-xs text-muted-foreground mt-4 pt-4 border-t border-white/5">
                    Conforms to GLP and ISO corporate quality requirements.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}