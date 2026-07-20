import React from "react";
import {
  Sparkles,
  Layers,
  Zap,
  ShieldCheck,
  Building2,
  AlertTriangle,
  FileX,
  Database,
  Timer,
  CheckCircle2,
  Workflow,
  Cpu,
  GraduationCap,
} from "lucide-react";

export function QcLandingContent() {
  const painPoints = [
    {
      icon: <Timer className="w-5 h-5 text-amber-500" />,
      title: "Pipelines Running Dry",
      text: "Drug discovery pipelines are almost running dry.",
    },
    {
      icon: <FileX className="w-5 h-5 text-amber-500" />,
      title: "Generics & Reformulations",
      text: "Much of the industry's 'innovation' is limited to generics and reformulations of existing drugs, leaving substantial room for genuinely differentiated science.",
    },
    {
      icon: <Layers className="w-5 h-5 text-amber-500" />,
      title: "Siloed Discovery Teams",
      text: "Discovery teams operate independently from regulatory and manufacturing teams.",
    },
    {
      icon: <Database className="w-5 h-5 text-amber-500" />,
      title: "Trapped Data & Knowledge",
      text: "Biological data and best practices remain trapped in disconnected systems.",
    },
    {
      icon: <AlertTriangle className="w-5 h-5 text-amber-500" />,
      title: "Delayed Regulatory Planning",
      text: "Regulatory planning often starts too late and without adequate knowledge of components and processes.",
    },
    {
      icon: <Workflow className="w-5 h-5 text-amber-500" />,
      title: "Lost Commercial Connection",
      text: "Connection is often lost between research, development, and commercialisation.",
    },
  ];

  const differentiators = [
    {
      icon: <Zap className="w-6 h-6 text-accent-blue dark:text-accent-blue" />,
      title: "Brand New Pipeline",
      description: "A brand new drug discovery pipeline.",
    },
    {
      icon: <Cpu className="w-6 h-6 text-accent-purple dark:text-accent-purple" />,
      title: "Advanced Computation",
      description: "Advanced computational tools accelerate discovery, analysis, and optimisation.",
    },
    {
      icon: <Workflow className="w-6 h-6 text-accent-emerald dark:text-accent-emerald" />,
      title: "Connected Ecosystem",
      description: "Scientific, manufacturing, and regulatory workflows operate within a connected ecosystem.",
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-amber-500" />,
      title: "Built-in Regulatory Readiness",
      description: "Regulatory readiness is built into every stage rather than treated as a final hurdle.",
    },
    {
      icon: <GraduationCap className="w-6 h-6 text-indigo-500" />,
      title: "End-to-End & Workforce Support",
      description: "Support from early research through commercialisation and workforce development.",
    },
  ];

  return (
    <div className="w-full flex flex-col space-y-0 text-foreground transition-colors duration-300">
      {/* SECTION 1: Single-Window Overview & Amaravati Quantum Valley */}
      <section className="relative py-24 px-6 bg-gradient-to-b from-transparent via-[#f8fafc]/50 to-[#f1f5f9] dark:via-[#0c121e]/50 dark:to-[#080d16] border-b border-border/40">
        <div className="max-w-5xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent-blue/10 dark:bg-accent-blue/20 border border-accent-blue/20 text-accent-blue font-semibold text-xs tracking-wider uppercase mb-6">
            <Building2 className="w-3.5 h-3.5" />
            <span>Amaravati Quantum Valley Mover</span>
          </div>

          <h2 className="font-serif-display text-3xl md:text-5xl font-normal leading-tight text-foreground">
            Quantum Codon – powering the next-generation bioeconomy
          </h2>

          <div className="mt-8 p-8 md:p-10 rounded-3xl bg-white/70 dark:bg-white/[0.03] backdrop-blur-xl border border-black/10 dark:border-white/10 shadow-xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-96 h-96 bg-accent-blue/10 rounded-full filter blur-3xl -z-10 transition-all duration-700 group-hover:scale-125" />
            
            <p className="text-lg md:text-xl text-slate-800 dark:text-slate-200 font-medium leading-relaxed">
              As a first life sciences mover in the Amaravati Quantum Valley, Quantum Codon brings together biological innovation, computational intelligence, and compliance management in a single-window solution, eliminating fragmentation across the biotech value chain.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 2: Changing the Status Quo */}
      <section className="relative py-24 px-6 bg-[#f8fafc] dark:bg-[#0f172a] border-b border-border/40">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-12 gap-10 items-stretch">
            {/* Traditional Fragmented Challenge Card */}
            <div className="md:col-span-6 p-8 rounded-3xl bg-rose-500/5 dark:bg-rose-500/10 border border-rose-500/20 flex flex-col justify-between">
              <div>
                <span className="text-xs tracking-widest uppercase font-semibold text-rose-600 dark:text-rose-400">
                  The Problem
                </span>
                <h3 className="font-serif-display text-2xl md:text-3xl mt-3 mb-4 text-foreground">
                  Biotechnology innovation remains fragmented.
                </h3>
                <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
                  Drug discovery teams work in one environment, bioinformatics analyses are conducted in another, manufacturing development is outsourced elsewhere, and regulatory compliance often becomes an afterthought.
                </p>
              </div>
              <div className="mt-6 pt-6 border-t border-rose-500/20 text-xs text-rose-700 dark:text-rose-300 font-medium leading-relaxed">
                This fragmentation increases costs, extends development timelines, creates data silos, and introduces execution risk at every stage of the product lifecycle.
              </div>
            </div>

            {/* Quantum Codon Transformation Card */}
            <div className="md:col-span-6 p-8 rounded-3xl bg-gradient-to-br from-accent-blue/10 via-accent-purple/10 to-accent-emerald/10 dark:from-accent-blue/20 dark:to-accent-purple/20 border border-accent-blue/30 flex flex-col justify-between shadow-lg relative overflow-hidden">
              <div>
                <span className="inline-flex items-center gap-1.5 text-xs tracking-widest uppercase font-bold text-accent-blue dark:text-accent-blue">
                  <Sparkles className="w-3.5 h-3.5" />
                  The Transformation
                </span>
                <h3 className="font-serif-display text-2xl md:text-3xl mt-3 mb-4 text-foreground">
                  Quantum Codon is changing that status quo.
                </h3>
                <p className="text-foreground text-sm md:text-base font-medium leading-relaxed">
                  As a first mover in the Amaravati Quantum Valley, Quantum Codon brings together biological knowledge, computational intelligence, and compliance management into a single integrated platform, into a single operating framework.
                </p>
              </div>

              <div className="mt-6 pt-6 border-t border-accent-blue/20">
                <p className="text-xs text-muted-foreground leading-relaxed">
                  From drug discovery and bioinformatics to manufacturing, analytics, regulatory approvals, and workforce development, we help accelerate innovation while reducing complexity, cost, and delivery risk.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: Why Quantum Codon */}
      <section className="relative py-24 px-6 bg-[#edf2f7] dark:bg-[#0a1118] border-b border-border/40">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs tracking-[0.3em] uppercase text-accent-purple font-semibold">
              Ecosystem Assessment
            </span>
            <h2 className="font-serif-display text-3xl md:text-5xl mt-3">
              Why Quantum Codon
            </h2>
            <p className="mt-4 text-base md:text-lg text-muted-foreground">
              Today’s biotech innovators face a fragmented ecosystem:
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {painPoints.map((item, index) => (
              <div
                key={index}
                className="p-6 rounded-2xl bg-white/80 dark:bg-white/[0.04] backdrop-blur-md border border-black/10 dark:border-white/10 hover:border-amber-500/50 hover:shadow-md transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-amber-500/10 dark:bg-amber-500/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    {item.icon}
                  </div>
                  <h4 className="font-semibold text-base mb-2 text-foreground">
                    {item.title}
                  </h4>
                  <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
                    {item.text}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 p-6 rounded-2xl bg-rose-500/10 dark:bg-rose-500/15 border border-rose-500/30 text-center max-w-4xl mx-auto">
            <p className="text-sm md:text-base font-medium text-rose-800 dark:text-rose-200">
              The innovation drought and fragmentation increase development costs, delay timelines, and reduce the probability of success.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 4: Quantum Codon Solves This Problem */}
      <section className="relative py-24 px-6 bg-gradient-to-br from-[#1e3a8a]/5 via-background to-[#5b21b6]/5 dark:from-[#1e3a8a]/20 dark:to-[#5b21b6]/20 border-b border-border/40">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-xs tracking-[0.3em] uppercase text-accent-emerald font-semibold">
            Unified Operating Model
          </span>
          <h2 className="font-serif-display text-3xl md:text-5xl mt-3 mb-6">
            Quantum Codon Solves This Problem
          </h2>
          <div className="p-8 md:p-12 rounded-3xl bg-white/80 dark:bg-white/[0.04] backdrop-blur-xl border border-black/10 dark:border-white/10 shadow-2xl relative">
            <p className="text-lg md:text-xl text-foreground font-medium leading-relaxed">
              We offer a brand new drug discovery platform and connect critical functions required to bring biotechnology products from concept to commercialisation. By integrating biology, computation, and compliance into a unified operating model, we create continuity across distinct stages of development.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 5: What Makes Us Different */}
      <section className="relative py-24 px-6 bg-[#f8fafc] dark:bg-[#080d14]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs tracking-[0.3em] uppercase text-accent-blue font-semibold">
              Core Value Advantage
            </span>
            <h2 className="font-serif-display text-3xl md:text-5xl mt-3">
              What Makes Us Different
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {differentiators.map((diff, idx) => (
              <div
                key={idx}
                className="p-8 rounded-3xl bg-white/70 dark:bg-white/[0.03] backdrop-blur-lg border border-black/10 dark:border-white/10 hover:border-accent-blue/50 hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-accent-blue/10 dark:bg-accent-blue/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    {diff.icon}
                  </div>
                  <h3 className="font-serif-display text-xl font-medium mb-3 text-foreground">
                    {diff.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {diff.description}
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-border/30 flex items-center gap-2 text-xs font-semibold text-accent-blue">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Integrated Advantage</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
