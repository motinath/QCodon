import { useEffect, useRef, useState, useMemo } from "react";
import { Link } from "@/lib/router-compat";
import { useContactModal } from "@/components/ContactModal";
import { useTheme } from "@/components/ThemeProvider";
import { Reveal } from "@/components/contact/Reveal";
import {
  Search,
  Brain,
  Layers,
  Sparkles,
  Award,
  ChevronDown,
  ArrowDown,
  ArrowLeft,
  ArrowRight,
  Plus,
  Minus,
  ExternalLink,
  Zap,
  Clock,
  ShieldCheck,
  Check,
  BookOpen,
  Activity,
  Dna
} from "lucide-react";

// --- Sub-component: GenomeAtlasHero ---
export function GenomeAtlasHero({ isDark }: { isDark: boolean }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(media.matches);
    const listener = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    media.addEventListener("change", listener);
    return () => media.removeEventListener("change", listener);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    let width = (canvas.width = canvas.offsetWidth);
    let height = (canvas.height = canvas.offsetHeight);

    const particles: Array<{
      x: number;
      y: number;
      baseY: number;
      speed: number;
      phase: number;
      amplitude: number;
      size: number;
      color: string;
      glow: boolean;
    }> = [];

    const particleCount = width < 768 ? 85 : 185;
    const darkColors = ["#ffffff", "#e2e8f0", "#94a3b8", "#475569"]; // shades of white and gray only
    const lightColors = ["#1e3a8a", "#3b82f6", "#4f46e5", "#0d9488"]; // navy, medium blue, indigo, teal

    const colors = isDark ? darkColors : lightColors;

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        baseY: Math.random() * height,
        y: 0,
        speed: Math.random() * 0.001 + 0.0003,
        phase: Math.random() * Math.PI * 2,
        amplitude: Math.random() * 15 + 5,
        size: Math.random() * 1.8 + 0.6,
        color: colors[Math.floor(Math.random() * colors.length)],
        glow: Math.random() > 0.8,
      });
    }

    let mouseX = -1000;
    let mouseY = -1000;
    let scrollY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseX = e.clientX - rect.left;
      mouseY = e.clientY - rect.top;
    };

    const handleMouseLeave = () => {
      mouseX = -1000;
      mouseY = -1000;
    };

    const handleScroll = () => {
      scrollY = window.scrollY;
    };

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.offsetWidth;
      height = canvas.height = canvas.offsetHeight;
    };

    window.addEventListener("mousemove", handleMouseMove);
    canvas.addEventListener("mouseleave", handleMouseLeave);
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    let time = 0;
    const render = () => {
      if (reducedMotion) {
        ctx.clearRect(0, 0, width, height);
        ctx.fillStyle = isDark ? "rgba(96, 165, 250, 0.03)" : "rgba(30, 58, 138, 0.03)";
        ctx.beginPath();
        ctx.arc(width / 2, height / 2, Math.min(width, height) / 3, 0, Math.PI * 2);
        ctx.fill();
        return;
      }

      ctx.clearRect(0, 0, width, height);
      time += 0.25;

      ctx.fillStyle = isDark ? "rgba(10, 11, 13, 0.03)" : "rgba(255, 255, 255, 0.03)";
      ctx.fillRect(0, 0, width, height);

      ctx.strokeStyle = isDark ? "rgba(250, 246, 240, 0.015)" : "rgba(30, 58, 138, 0.02)";
      ctx.lineWidth = 0.5;
      ctx.beginPath();
      for (let i = 0; i < particles.length; i += 7) {
        for (let j = i + 1; j < Math.min(i + 4, particles.length); j++) {
          const dist = Math.hypot(particles[i].x - particles[j].x, particles[i].y - particles[j].y);
          if (dist < 90) {
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
          }
        }
      }
      ctx.stroke();

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.x += Math.sin(time * p.speed + p.phase) * 0.15;
        const waveY = p.baseY + Math.cos(p.x * 0.005 + time * p.speed) * p.amplitude;

        let dx = p.x - mouseX;
        let dy = waveY - mouseY;
        let dist = Math.sqrt(dx * dx + dy * dy);
        let currentY = waveY;
        let currentX = p.x;

        if (dist < 140) {
          const force = (140 - dist) / 140;
          currentX += (dx / dist) * force * 12;
          currentY += (dy / dist) * force * 12;
        }

        if (scrollY > 0) {
          currentY += (scrollY * 0.2) * (p.size * 0.4);
        }

        ctx.beginPath();
        ctx.arc(currentX, currentY % height, p.size, 0, Math.PI * 2);
        ctx.fillStyle = p.color;

        if (isDark && p.glow) {
          ctx.shadowBlur = 6;
          ctx.shadowColor = p.color;
          ctx.globalAlpha = 0.55;
        } else {
          ctx.globalAlpha = isDark ? 0.3 : 0.4;
        }

        ctx.fill();
        ctx.shadowBlur = 0;
        ctx.globalAlpha = 1.0;
      }

      animationId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("mousemove", handleMouseMove);
      canvas.removeEventListener("mouseleave", handleMouseLeave);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, [reducedMotion, isDark]);

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 w-full h-full pointer-events-none z-0 ${isDark ? "bg-[#0a0b0d]" : "bg-white"
        }`}
    />
  );
}

// --- Sub-component: AnimatedCounter ---
export function AnimatedCounter({
  value,
  suffix = "",
  decimals = 0,
  duration = 1500,
}: {
  value: number;
  suffix?: string;
  decimals?: number;
  duration?: number;
}) {
  const [count, setCount] = useState(0);
  const elementRef = useRef<HTMLSpanElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          let startTimestamp: number | null = null;
          const step = (timestamp: number) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);
            const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
            setCount(easeProgress * value);
            if (progress < 1) {
              window.requestAnimationFrame(step);
            }
          };
          window.requestAnimationFrame(step);
        }
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [value, duration, hasAnimated]);

  return (
    <span ref={elementRef} className="font-mono tabular-nums">
      {count.toLocaleString(undefined, {
        minimumFractionDigits: decimals,
        maximumFractionDigits: decimals,
      })}
      {suffix}
    </span>
  );
}

// --- Sub-component: DarkGenomeMap ---
export function DarkGenomeMap({ isDark }: { isDark: boolean }) {
  const segments = [
    {
      num: "01",
      title: "Protein-Coding Genome",
      ratio: "2%",
      meaning: "Active Exons & Structural Translation Matrices",
      description: "Decades of drug development have focused exclusively on the tiny fraction of DNA that codes directly for protein structures. This has left the remaining 98% completely unmined.",
      accentColor: "from-slate-500 to-slate-600",
      accentText: "text-slate-500 dark:text-slate-400",
      status: "Saturated Target Field",
      metrics: [
        { label: "Druggability Index", value: "Low (Saturated)" },
        { label: "R&D Focus Rate", value: "98% of Global Capital" },
        { label: "Target Scope", value: "~20,005 Annotations" }
      ],
      attributes: [
        "Well-characterized translation mechanics",
        "Saturated patent space & high generic competition",
        "Higher off-target side effect margins across tissues"
      ],
      strategy: "We bypass standard coding sequence bottlenecks to design completely unique chemical spaces."
    },
    {
      num: "02",
      title: "Class I Dark DNA",
      ratio: "~40%",
      meaning: "Non-Expressing Introns & Chromosomal Intergenic Regions",
      description: "Silent segments and alternative reading frames that do not express under standard cellular coordinates. We map hidden promoters and translation pathways to express therapeutic peptide candidates.",
      accentColor: "from-[#cca54a] to-[#cca54a]/85",
      accentText: "text-amber-500",
      status: "Active Expression Mapping",
      metrics: [
        { label: "Druggability Index", value: "High (Unexplored)" },
        { label: "Target Resolution", value: "Sub-nanomolar Lead Affinity" },
        { label: "SPR Validation", value: "tREP-18 Lead (1.8 nM)" }
      ],
      attributes: [
        "Maps hidden promoters and alternative reading frames",
        "Direct high-density synthesis of peptide candidates",
        "Locks disease states at intronic splice boundaries"
      ],
      strategy: "SilicoFeller indexes introns to create high-affinity synthetic peptides, unlocking novel patent spaces."
    },
    {
      num: "03",
      title: "Class II Dark RNA",
      ratio: "~56%",
      meaning: "Non-Translating Structural RNAs & Riboswitch Domains",
      description: "Regulatory RNA machinery (lncRNAs, microRNAs, and untranslated mRNA hairpins) that coordinate cellular protein levels. Our platform models three-dimensional binding pockets directly on these structures.",
      accentColor: "from-[#3f4c8c] to-[#3f4c8c]/85",
      accentText: "text-[#3f4c8c] dark:text-[#5c6bb0]",
      status: "3D Fold Target Lock",
      metrics: [
        { label: "Druggability Index", value: "Exceptional" },
        { label: "Binding Focus", value: "3D Tertiary Pockets" },
        { label: "Preclinical Lead", value: "EcoI2 Candidate (5.6x reduction)" }
      ],
      attributes: [
        "Models secondary & tertiary lncRNA conformations",
        "Blocks protein translation via 5'-UTR and 3'-UTR locks",
        "Targets structural RNA complexes without genetic modification"
      ],
      strategy: "SilicoFeller models structural RNA pockets to shut down disease translation networks at the source."
    }
  ];

  return (
    <div className="max-w-7xl mx-auto py-12 px-6 relative">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-stretch">
        {segments.map((seg, idx) => (
          <div key={idx} className="relative group">
            {/* Visual offset backing container (warm bone / deep slate) */}
            <div className={`absolute -bottom-3 -right-3 h-full w-full rounded-3xl -z-10 transition-all duration-300 group-hover:-bottom-4 group-hover:-right-4 ${isDark ? "bg-[#16171a] border border-border-subtle" : "bg-[#f4f0e6] border border-slate-200/80 shadow-sm"
              }`} />

            <div className={`h-full border rounded-3xl p-6 md:p-8 flex flex-col justify-between backdrop-blur transition-all duration-300 group-hover:-translate-y-1 ${isDark
              ? "border-zinc-800/80 bg-zinc-950/30 text-white hover:border-zinc-700 hover:bg-zinc-950/40"
              : "border-slate-200 bg-white text-slate-900 shadow-md shadow-slate-100/50 hover:border-slate-350 hover:shadow-lg"
              }`}>

              {/* Card Header */}
              <div>
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <span className="text-[10px] font-mono font-bold tracking-widest text-text-tertiary block mb-1">
                      SEGMENT {seg.num}
                    </span>
                    <span className={`inline-block px-2.5 py-0.5 rounded-full text-[9px] font-mono font-bold uppercase tracking-wider border ${idx === 0
                      ? (isDark ? "border-slate-800 bg-slate-900/30 text-slate-400" : "border-slate-200 bg-slate-50 text-slate-650")
                      : idx === 1
                        ? "border-amber-500/20 bg-amber-500/5 text-amber-500"
                        : "border-[#3f4c8c]/20 bg-[#3f4c8c]/5 text-[#3f4c8c] dark:text-[#5c6bb0]"
                      }`}>
                      {seg.status}
                    </span>
                  </div>
                  <span className={`text-xl font-mono font-bold px-3 py-1 rounded-2xl bg-gradient-to-r ${seg.accentColor} text-white shadow-sm`}>
                    {seg.ratio}
                  </span>
                </div>

                <h3 className="font-serif-display text-2xl font-medium tracking-tight mb-2">
                  {seg.title}
                </h3>
                <p className={`text-[10px] font-mono tracking-wider uppercase mb-5 font-bold ${seg.accentText}`}>
                  {seg.meaning}
                </p>

                <p className="text-sm text-text-secondary leading-relaxed mb-6 font-medium">
                  {seg.description}
                </p>

                {/* Technical Parameters */}
                <div className={`p-4 rounded-2xl border mb-6 space-y-3 ${isDark ? "bg-black/20 border-zinc-800/60" : "bg-slate-50 border-slate-200/60"
                  }`}>
                  <span className="text-[9px] font-mono uppercase tracking-wider text-text-tertiary block font-bold">
                    Bioinformatics Parameters
                  </span>
                  <div className="space-y-2 text-xs font-mono">
                    {seg.metrics.map((m, mIdx) => (
                      <div key={mIdx} className="flex justify-between items-center py-1 border-b border-border-subtle/20 last:border-0">
                        <span className="text-text-secondary font-medium">{m.label}</span>
                        <span className="text-text-primary font-bold">{m.value}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Attributes List */}
                <div className="space-y-3 mb-8">
                  <span className="text-[9px] font-mono uppercase tracking-wider text-text-tertiary block font-bold">
                    Target Properties
                  </span>
                  <ul className="space-y-2.5 text-xs text-text-secondary">
                    {seg.attributes.map((attr, aIdx) => (
                      <li key={aIdx} className="flex items-start gap-2">
                        <Dna className={`w-3.5 h-3.5 mt-0.5 shrink-0 ${seg.accentText}`} />
                        <span className="leading-relaxed">{attr}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* SilicoFeller Integration Box */}
              <div className={`p-4 rounded-2xl border flex items-start gap-3 transition-colors ${idx === 0
                ? (isDark ? "bg-zinc-900/10 border-zinc-800/50" : "bg-slate-50/50 border-slate-200/50")
                : idx === 1
                  ? "bg-amber-500/5 border-amber-500/20"
                  : "bg-[#3f4c8c]/5 border-[#3f4c8c]/20"
                }`}>
                <span className={`h-2 w-2 rounded-full mt-1.5 shrink-0 ${idx === 0 ? "bg-slate-400" : idx === 1 ? "bg-amber-500" : "bg-[#3f4c8c]"
                  }`} />
                <div>
                  <span className="text-[9px] font-mono font-bold uppercase tracking-wider text-text-primary block mb-0.5">
                    SilicoFeller Strategy
                  </span>
                  <p className="text-xs text-text-secondary leading-relaxed font-medium">
                    {seg.strategy}
                  </p>
                </div>
              </div>

            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// --- Sub-component: BiologicalScalePipeline ---
export function BiologicalScalePipeline({ isDark }: { isDark: boolean }) {
  const [activeStage, setActiveStage] = useState<number | null>(0);
  const [intersecting, setIntersecting] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) setIntersecting(true);
      },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const stages = [
    {
      num: "01",
      name: "Genome Scan",
      scale: "Scale: 10⁶ base pairs",
      icon: Search,
      tagline: "Scouring non-coding regions across intergenic DNA",
      body: "We process whole-genome sequencing files to locate silent intron boundaries and untranslated mRNA sequences. This identifies where potential structural templates sit inside previously discarded data.",
    },
    {
      num: "02",
      name: "Folding AI",
      scale: "Scale: 10⁻⁹ meters",
      icon: Brain,
      tagline: "Resolving tertiary structural protein structures",
      body: "Our models translate dark-encoded patterns into predicted 3D structures, establishing binding pocket configurations and ADMET kinetics with state-of-the-art accuracy.",
    },
    {
      num: "03",
      name: "Virtual Docking",
      scale: "Scale: Angstroms (10⁻¹⁰m)",
      icon: Layers,
      tagline: "Screening candidate binding dynamics in silico",
      body: "High-throughput docking matrices score binding affinities across dynamic receptor templates, weeding out molecules with unfavorable steric constraints.",
    },
    {
      num: "04",
      name: "Quantum Dynamics",
      scale: "Scale: Sub-angstrom",
      icon: Sparkles,
      tagline: "Electron density and sub-kcal/mol energy modeling",
      body: "We calculate quantum molecular parameters—analyzing electrostatic polarization, charge transport vectors, and thermodynamic binding free energies.",
    },
    {
      num: "05",
      name: "Wet-Lab Assays",
      scale: "Scale: Micrometers (10⁻⁶m)",
      icon: Award,
      tagline: "In vitro binding testing and lead crystallization",
      body: "Validated structures are synthesized and tested in cellular biological assays, verifying target inhibition performance and preclinical viability parameters.",
    },
  ];

  return (
    <div ref={ref} className="w-full">
      {/* Node Path */}
      <div className="relative flex flex-col md:flex-row items-center justify-between gap-8 md:gap-4 px-4">
        {/* Dynamic connection lines */}
        <div className={`absolute top-1/2 left-0 right-0 h-[1.5px] -translate-y-1/2 z-0 hidden md:block ${isDark ? "bg-[#222528]" : "bg-slate-200"
          }`}>
          <div
            className="h-full bg-gradient-to-r from-accent-primary via-accent-secondary to-accent-data transition-all duration-[1800ms] ease-out"
            style={{ width: intersecting ? "100%" : "0%" }}
          />
        </div>

        <div className={`absolute left-1/2 top-0 bottom-0 w-[1.5px] -translate-x-1/2 z-0 md:hidden ${isDark ? "bg-[#222528]" : "bg-slate-200"
          }`}>
          <div
            className="w-full bg-gradient-to-b from-accent-primary via-accent-secondary to-accent-data transition-all duration-[1800ms] ease-out"
            style={{ height: intersecting ? "100%" : "0%" }}
          />
        </div>

        {stages.map((stage, idx) => {
          const Icon = stage.icon;
          const isActive = activeStage === idx;
          return (
            <div
              key={idx}
              onClick={() => setActiveStage(isActive ? null : idx)}
              className="relative z-10 flex flex-col items-center cursor-pointer transition-all duration-300 animate-fade-in"
              style={{
                transform: intersecting ? "scale(1) translateY(0)" : "scale(0.8) translateY(25px)",
                opacity: intersecting ? 1 : 0,
                transitionDelay: `${idx * 120}ms`,
              }}
            >
              <div
                className={`h-16 w-16 rounded-full border flex flex-col items-center justify-center transition-all duration-300 shadow-md ${isActive
                  ? `${isDark ? "border-white bg-zinc-900" : "border-accent-blue bg-accent-blue/10"} scale-105`
                  : `${isDark ? "border-border-subtle bg-obsidian" : "border-slate-200 bg-white"} hover:border-text-secondary`
                  }`}
              >
                <Icon className={`h-5 w-5 ${isActive ? (isDark ? "text-white" : "text-accent-blue") : "text-text-secondary"}`} />
              </div>
              <span className="text-[9px] font-mono mt-3 font-semibold tracking-wider text-accent-blue dark:text-zinc-500">
                STAGE {stage.num}
              </span>
              <span className="text-[11px] font-bold text-text-primary mt-0.5">
                {stage.name}
              </span>
              <span className="text-[9px] font-mono opacity-60 mt-0.5">
                {stage.scale}
              </span>
            </div>
          );
        })}
      </div>

      {/* Node Detail Drawer */}
      <div className="mt-10 overflow-hidden relative">
        <div className={`absolute -bottom-3 -right-3 h-full w-full rounded-3xl -z-10 transition-all ${isDark ? "bg-[#181a1d] border border-border-subtle" : "bg-[#f4f0e6] border border-slate-200"
          }`} />
        <div className={`border rounded-3xl p-6 md:p-8 shadow-sm transition-all duration-300 min-h-[140px] ${isDark ? "border-border-subtle bg-bg-raised" : "border-slate-200 bg-white"
          }`}>
          {activeStage !== null ? (
            <div className="animate-fade-in space-y-2">
              <div className="flex items-center gap-3">
                <span className="text-[9px] font-mono font-bold uppercase tracking-widest px-2.5 py-1 rounded border bg-accent-blue/5 border-border-subtle text-accent-blue dark:bg-zinc-800/40 dark:text-zinc-300 dark:border-zinc-700/50">
                  STAGE {stages[activeStage].num} · {stages[activeStage].scale}
                </span>
                <h4 className="text-lg font-bold font-serif-display text-text-primary">
                  {stages[activeStage].name} Details
                </h4>
              </div>
              <p className="text-xs font-mono uppercase font-semibold tracking-wider text-accent-blue dark:text-white">
                {stages[activeStage].tagline}
              </p>
              <p className="text-sm text-text-secondary leading-relaxed max-w-4xl pt-2">
                {stages[activeStage].body}
              </p>
            </div>
          ) : (
            <div className="flex items-center justify-center h-24 text-xs font-mono uppercase tracking-wider text-text-tertiary">
              Select a pipeline stage above to reveal molecular dimensions.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

// --- Sub-component: NatureStyleEvidence ---
export function NatureStyleEvidence({ isDark }: { isDark: boolean }) {
  const publications = [
    {
      tag: "Oncology · Kinase Targets",
      title: "Targeting alternative frames: EcoI2 leads in kinase domain inhibition",
      journal: "Journal of Cancer Genomics Research",
      date: "May 2026",
      metric: "5.6x",
      metricLabel: "Reduction in tumor cell division rates vs. negative control arrays.",
    },
    {
      tag: "Infectious Disease · tRNA Peptides",
      title: "tREP-18 demonstrates sub-nanomolar affinity against Leishmania donovani",
      journal: "Nature Therapeutics Preprint",
      date: "Feb 2026",
      metric: "1.8 nM",
      metricLabel: "Best-in-class IC50 validation verified via surface plasmon resonance.",
    },
    {
      tag: "Neurodegeneration · UTR Structures",
      title: "Suppression of BACE1 translation efficiency via target 5'-UTR locks",
      journal: "Therapeutic RNA & Structural Biology",
      date: "Nov 2025",
      metric: "60%",
      metricLabel: "Beta-amyloid peptide secretion drop observed in vitro cell lines.",
    },
  ];

  return (
    <div className="grid md:grid-cols-3 gap-8">
      {publications.map((paper, idx) => (
        <div key={idx} className="relative">
          <div className={`absolute -bottom-3 -right-3 h-full w-full rounded-3xl -z-10 transition-all ${isDark ? "bg-[#181a1d] border border-border-subtle" : "bg-[#f4f0e6] border border-slate-200"
            }`} />
          <article
            className={`border rounded-3xl p-6 md:p-8 flex flex-col justify-between h-full transition-all duration-300 ${isDark
              ? "border-border-subtle bg-bg-raised hover:border-white shadow-md shadow-black/25"
              : "border-slate-200 bg-white hover:border-accent-blue shadow-md shadow-slate-100/50"
              }`}
          >
            <div>
              <div className="flex justify-between items-center text-[10px] font-mono text-text-tertiary font-bold uppercase mb-4 tracking-wider">
                <span>{paper.tag}</span>
                <span className="text-accent-blue dark:text-zinc-400">{paper.date}</span>
              </div>

              <h3 className="font-serif-display text-xl font-bold leading-snug text-text-primary hover:opacity-80 transition-colors mb-4">
                {paper.title}
              </h3>

              <div className="my-5 p-4 rounded-2xl border text-center bg-accent-blue/5 border-border-subtle dark:bg-zinc-800/40 dark:border-zinc-700/50">
                <span className="text-3xl font-mono font-bold text-accent-blue dark:text-white">
                  <AnimatedCounter value={parseFloat(paper.metric)} suffix={paper.metric.replace(/[0-9.]/g, "")} decimals={paper.metric.includes(".") ? 1 : 0} />
                </span>
                <p className="text-[9px] font-mono uppercase text-text-secondary mt-1 font-semibold tracking-wider">
                  {paper.metricLabel}
                </p>
              </div>
            </div>

            <div className="pt-4 border-t border-border-subtle/50 flex justify-between items-center text-[10px] font-mono uppercase font-bold text-text-tertiary">
              <span>{paper.journal}</span>
              <span className="flex items-center gap-1 hover:underline cursor-pointer text-accent-blue dark:text-zinc-300 dark:hover:text-white">
                View study <ExternalLink className="w-3 h-3" />
              </span>
            </div>
          </article>
        </div>
      ))}
    </div>
  );
}

// --- Sub-component: MoleculeShowcase ---
export function MoleculeShowcase({ isDark }: { isDark: boolean }) {
  const [activeMol, setActiveMol] = useState<"trep" | "ecoi">("trep");

  const molData = {
    trep: {
      name: "tREP-18 Candidate",
      type: "tRNA-derived Peptide Assembly",
      disease: "Leishmaniasis (Pathogenic Infection)",
      steps: [
        {
          label: "1. Sequence Origin",
          detail: "Isolated from structural transfer RNA segments inside the non-coding genome mapped in clinical Leishmania lines.",
        },
        {
          label: "2. Vector Structure",
          detail: "Folds into a rigid, cationic macrocycle displaying optimal ADMET profiles and proteolytic stability thresholds.",
        },
        {
          label: "3. Target Lock",
          detail: "Binds directly to the pathogen outer membrane, disrupting replication and structural integrity.",
        },
        {
          label: "4. Assay Proof",
          detail: "Tested in vitro, yielding a best-in-class binding affinity index of 1.8 nM IC50, with minimal toxicity bounds.",
        },
      ],
    },
    ecoi: {
      name: "EcoI2 Candidate",
      type: "Intergenic Kinase Inhibitor",
      disease: "Oncology (Solid Tumor Proliferation)",
      steps: [
        {
          label: "1. Sequence Origin",
          detail: "Derived from unannotated chromosomal exons outside classic protein-coding segments.",
        },
        {
          label: "2. Vector Structure",
          detail: "AlphaFold models show a highly specific alpha-helix arm that slots precisely into mutated ATP kinase pockets.",
        },
        {
          label: "3. Target Lock",
          detail: "Blocks signaling cascade sequences, arresting cell division without triggering cellular necrosis pathways.",
        },
        {
          label: "4. Assay Proof",
          detail: "Tested in solid tumor cultures, showcasing a 5.6-fold division arrest rate compared to traditional inhibitors.",
        },
      ],
    },
  };

  const active = molData[activeMol];

  return (
    <div className="relative">
      <div className={`absolute -bottom-4 -right-4 h-full w-full rounded-3xl -z-10 transition-all ${isDark ? "bg-[#181a1d] border border-border-subtle" : "bg-[#f4f0e6] border border-slate-200"
        }`} />
      <div className={`border rounded-3xl p-6 md:p-10 shadow-sm ${isDark ? "border-border-subtle bg-bg-raised" : "border-slate-200 bg-white"
        }`}>
        <div className="flex gap-4 border-b border-border-subtle pb-6 mb-8">
          <button
            onClick={() => setActiveMol("trep")}
            className={`pb-2 border-b-2 font-serif-display text-lg font-bold transition-all ${activeMol === "trep"
              ? "border-accent-blue text-accent-blue dark:border-white dark:text-white"
              : "border-transparent text-text-secondary hover:text-text-primary"
              }`}
          >
            tREP-18 Dossier
          </button>
          <button
            onClick={() => setActiveMol("ecoi")}
            className={`pb-2 border-b-2 font-serif-display text-lg font-bold transition-all ${activeMol === "ecoi"
              ? "border-accent-blue text-accent-blue dark:border-white dark:text-white"
              : "border-transparent text-text-secondary hover:text-text-primary"
              }`}
          >
            EcoI2 Dossier
          </button>
        </div>

        <div className="grid md:grid-cols-12 gap-8">
          <div className="md:col-span-4 space-y-4">
            <div>
              <span className="text-[9px] font-mono font-bold uppercase tracking-widest px-2 py-0.5 border rounded text-accent-blue bg-accent-blue/5 border-border-subtle dark:text-zinc-350 dark:bg-zinc-800/40 dark:border-zinc-700/50">
                Lead Candidate Profile
              </span>
              <h3 className="font-serif-display text-2xl font-bold text-text-primary mt-3">
                {active.name}
              </h3>
              <p className="text-xs font-mono text-text-secondary">{active.type}</p>
            </div>

            <div className={`p-4 rounded-xl border space-y-1 ${isDark ? "bg-zinc-900 border-zinc-800" : "bg-slate-50 border-slate-200"
              }`}>
              <span className="text-[9px] font-mono uppercase text-text-tertiary tracking-wider font-semibold">Target Indication</span>
              <p className="text-sm font-bold text-text-primary">{active.disease}</p>
            </div>
          </div>

          <div className="md:col-span-8 grid gap-4 sm:grid-cols-2">
            {active.steps.map((step, idx) => (
              <div key={idx} className={`p-5 rounded-2xl border space-y-2 transition-colors duration-300 ${isDark
                ? "bg-bg-sunken/45 border-border-subtle hover:border-zinc-700"
                : "bg-slate-50/50 border-slate-200 hover:border-accent-blue"
                }`}>
                <span className="text-[10px] font-mono font-bold tracking-wider uppercase block text-accent-blue dark:text-white">
                  {step.label}
                </span>
                <p className="text-xs text-text-secondary leading-relaxed">
                  {step.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// --- Sub-component: DarkGenomeSandbox ---
export function DarkGenomeSandbox({ isDark }: { isDark: boolean }) {
  const [activeStage, setActiveStage] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [hoveredNode, setHoveredNode] = useState<number | null>(null);

  const stages = [
    {
      id: "01",
      name: "Intro",
      label: "Intro - Capsule Appears",
      desc: "Scene fades in from darkness. Particle field forms. Capsule materializes in the center with a soft glow.",
      durationText: "1.2s",
      easingText: "easeOutCubic",
    },
    {
      id: "02",
      name: "Protein-Coding",
      label: "Connect: Protein-Coding",
      desc: "Top-left node activates. Wavy line draws from capsule top to the Protein-Coding node. Node icon and text fade in with gold glow.",
      durationText: "1.4s",
      easingText: "easeInOutCubic",
    },
    {
      id: "03",
      name: "Currently Mined",
      label: "Connect: Currently Mined",
      desc: "Top-right node activates. Wavy line draws from capsule top-right to the Currently Mined node. Copper glow travels to the node.",
      durationText: "1.4s",
      easingText: "easeInOutCubic",
    },
    {
      id: "04",
      name: "Class I Dark DNA",
      label: "Connect: Class I Dark DNA",
      desc: "Middle-left node activates. Wavy line draws from capsule middle to the Class I Dark DNA node. Amber glow pulses along the line.",
      durationText: "1.4s",
      easingText: "easeInOutCubic",
    },
    {
      id: "05",
      name: "Class I Potential",
      label: "Connect: Class I Potential",
      desc: "Middle-right node activates. Wavy line draws from capsule middle-right to the Class I Potential node. Amber glow pulses.",
      durationText: "1.4s",
      easingText: "easeInOutCubic",
    },
    {
      id: "06",
      name: "Class II Dark RNA",
      label: "Connect: Class II Dark RNA",
      desc: "Lower-left node activates. Wavy line draws from capsule lower section to the Class II Dark RNA node. Indigo glow pulses.",
      durationText: "1.4s",
      easingText: "easeInOutCubic",
    },
    {
      id: "07",
      name: "Class II Potential",
      label: "Connect: Class II Potential",
      desc: "Lower-right node activates. All 6 nodes are now connected. Indigo glow travels to the final node.",
      durationText: "1.4s",
      easingText: "easeInOutCubic",
    },
    {
      id: "08",
      name: "All Active",
      label: "All Connections Active",
      desc: "All 6 nodes are connected. Lines pulse once. Capsule rotation slows and settles in the center.",
      durationText: "1.2s",
      easingText: "easeOutCubic",
    },
    {
      id: "09",
      name: "Rotation Highlight",
      label: "Capsule Rotation Highlight",
      desc: "Capsule rotates 360° on Y-axis. Bands emit sequential glow from top to bottom and back.",
      durationText: "1.2s",
      easingText: "linear",
    },
    {
      id: "10",
      name: "Active Event",
      label: "Active Sequence Event",
      desc: "Bottom info panel expands from center. Text types in with subtle scan effect. Background particles intensify.",
      durationText: "1.6s",
      easingText: "easeOutCubic",
    },
    {
      id: "11",
      name: "Timeline Nav",
      label: "Timeline / Steps Navigation",
      desc: "Step timeline appears at the bottom. Active step is highlighted. User can navigate steps. On hover, corresponding line & node pulse.",
      durationText: "0.6s",
      easingText: "easeInOutCubic",
    },
    {
      id: "12",
      name: "Loop & Idle",
      label: "Loop & Idle State",
      desc: "Subtle ambient loop. Capsule continues slow rotation. Connections breathe softly. Particles drift.",
      durationText: "6.0s",
      easingText: "easeInOutSine",
    }
  ];

  const stageDurations = [
    3000, // Stage 0 (01 Intro)
    3000, // Stage 1 (02 Protein-Coding)
    3000, // Stage 2 (03 Currently Mined)
    3000, // Stage 3 (04 Class I Dark DNA)
    3000, // Stage 4 (05 Class I Potential)
    3000, // Stage 5 (06 Class II Dark RNA)
    3000, // Stage 6 (07 Class II Potential)
    2500, // Stage 7 (08 All Connections Active)
    2500, // Stage 8 (09 Capsule Rotation Highlight)
    4000, // Stage 9 (10 Active Sequence Event)
    3000, // Stage 10 (11 Timeline Nav)
    8000, // Stage 11 (12 Loop & Idle State)
  ];

  // Auto-play loop
  useEffect(() => {
    if (!isPlaying) return;
    const timer = setTimeout(() => {
      setActiveStage((prev) => (prev + 1) % 12);
    }, stageDurations[activeStage] || 3000);
    return () => clearTimeout(timer);
  }, [isPlaying, activeStage]);

  // Typewriter effect
  const [typedDesc, setTypedDesc] = useState("");
  useEffect(() => {
    let index = 0;
    const fullText = stages[activeStage].desc;
    setTypedDesc("");

    // Typewriter active for all stages when transitioning
    const interval = setInterval(() => {
      setTypedDesc((prev) => prev + fullText.charAt(index));
      index++;
      if (index >= fullText.length) {
        clearInterval(interval);
      }
    }, 15);
    return () => clearInterval(interval);
  }, [activeStage]);

  const isNodeActive = (nodeIndex: number) => {
    if (activeStage >= 7) return true; // stages 7+ = all connected
    if (nodeIndex === 1) return activeStage >= 1; // Protein-Coding
    if (nodeIndex === 4) return activeStage >= 2; // Currently Mined
    if (nodeIndex === 2) return activeStage >= 3; // Class I Dark DNA
    if (nodeIndex === 5) return activeStage >= 4; // Class I Potential
    if (nodeIndex === 3) return activeStage >= 5; // Class II Dark RNA
    if (nodeIndex === 6) return activeStage >= 6; // Class II Potential
    return false;
  };

  const getCapsuleRotationClass = () => {
    if (activeStage === 0) return "dgs-capsule-scroller-intro";
    if (activeStage >= 1 && activeStage <= 6) return "dgs-capsule-scroller-standard";
    if (activeStage === 7) return "dgs-capsule-scroller-slow";
    if (activeStage === 8) return "dgs-capsule-scroller-highlight";
    if (activeStage === 9) return "dgs-capsule-scroller-event";
    if (activeStage === 10) return "dgs-capsule-scroller-standard";
    return "dgs-capsule-scroller-idle";
  };

  const bgParticles = useMemo(() => {
    return Array.from({ length: 25 }).map((_, i) => ({
      cx: Math.random() * 800,
      cy: Math.random() * 340,
      r: Math.random() * 2 + 0.6,
      delay: Math.random() * 5,
      duration: Math.random() * 6 + 4,
      color: ["#cca54a", "#f59e0b", "#3f4c8c", "#3e6b5c", "#faf6f0"][Math.floor(Math.random() * 5)],
    }));
  }, []);

  const colorGold = {
    activeBorder: "border-[#cca54a]/60 dark:border-[#cca54a]/50 shadow-[0_0_15px_rgba(204,165,74,0.06)]",
    activeBg: "bg-[#cca54a]/5 dark:bg-[#cca54a]/3",
    activeText: "text-[#cca54a] dark:text-[#cca54a]",
  };
  const colorAmber = {
    activeBorder: "border-amber-500/60 dark:border-amber-500/50 shadow-[0_0_15px_rgba(245,158,11,0.06)]",
    activeBg: "bg-amber-500/5 dark:bg-amber-500/3",
    activeText: "text-amber-600 dark:text-amber-400",
  };
  const colorIndigo = {
    activeBorder: "border-[#3f4c8c]/60 dark:border-[#3f4c8c]/50 shadow-[0_0_15px_rgba(63,76,140,0.06)]",
    activeBg: "bg-[#3f4c8c]/5 dark:bg-[#3f4c8c]/3",
    activeText: "text-[#3f4c8c] dark:text-[#5c6bb0]",
  };
  const colorCopper = {
    activeBorder: "border-[#3e6b5c]/60 dark:border-[#3e6b5c]/50 shadow-[0_0_15px_rgba(62,107,92,0.06)]",
    activeBg: "bg-[#3e6b5c]/5 dark:bg-[#3e6b5c]/3",
    activeText: "text-[#3e6b5c] dark:text-[#5fa38d]",
  };
  const colorAmberPotential = {
    activeBorder: "border-amber-500/60 dark:border-amber-500/50 shadow-[0_0_15px_rgba(245,158,11,0.06)]",
    activeBg: "bg-amber-500/5 dark:bg-amber-500/3",
    activeText: "text-amber-600 dark:text-amber-400",
  };
  const colorIndigoPotential = {
    activeBorder: "border-[#3f4c8c]/60 dark:border-[#3f4c8c]/50 shadow-[0_0_15px_rgba(63,76,140,0.06)]",
    activeBg: "bg-[#3f4c8c]/5 dark:bg-[#3f4c8c]/3",
    activeText: "text-[#3f4c8c] dark:text-[#5c6bb0]",
  };

  const capsuleBodyColor = isDark ? "#121316" : "#e4e2da";
  const capsuleLineColor = isDark ? "rgba(255,255,255,0.06)" : "rgba(0,0,0,0.05)";
  const capsuleLineColorStrong = isDark ? "rgba(255,255,255,0.12)" : "rgba(0,0,0,0.1)";

  const renderCard = (
    badgeNum: number,
    title: string,
    subtitle: string,
    icon: React.ReactNode,
    colorClass: typeof colorGold,
    isActive: boolean
  ) => {
    const isHovered = hoveredNode === badgeNum;
    return (
      <div
        onClick={() => {
          const targetStage = badgeNum === 1 ? 1 : badgeNum === 2 ? 3 : badgeNum === 3 ? 5 : badgeNum === 4 ? 2 : badgeNum === 5 ? 4 : 6;
          setActiveStage(targetStage);
          setIsPlaying(false);
        }}
        onMouseEnter={() => setHoveredNode(badgeNum)}
        onMouseLeave={() => setHoveredNode(null)}
        className={`p-3 md:p-4 rounded-2xl border text-left transition-all duration-500 cursor-pointer ${isActive
          ? `${colorClass.activeBorder} ${colorClass.activeBg} ${isHovered ? "scale-[1.04] border-opacity-100" : "scale-[1.02]"}`
          : `${isDark ? "border-zinc-800/50 bg-[#0d0e12]/20 text-zinc-500" : "border-slate-200 bg-slate-50/30 text-slate-400"} hover:scale-[1.01]`
          }`}
      >
        <div className="flex items-center gap-3">
          <div className={`h-8 w-8 rounded-full border flex items-center justify-center transition-all ${isActive ? colorClass.activeBorder : "border-border-subtle"
            } ${isHovered ? "scale-110" : ""}`}>
            {icon}
          </div>
          <div className="flex-1 min-w-0">
            <h4 className={`text-[10px] md:text-xs font-mono tracking-wider uppercase font-bold truncate transition-colors ${isActive ? colorClass.activeText : "text-text-secondary"
              }`}>
              {title}
            </h4>
            <p className="text-[9px] md:text-[10px] text-text-secondary/70 font-mono mt-0.5 truncate">
              {subtitle}
            </p>
          </div>
          <span className={`h-5 w-5 rounded-full text-[9px] font-mono font-bold flex items-center justify-center border transition-all ${isActive
            ? `${colorClass.activeBorder} ${colorClass.activeText}`
            : "border-border-subtle text-zinc-500"
            } ${isHovered ? "scale-110" : ""}`}>
            {badgeNum}
          </span>
        </div>
      </div>
    );
  };

  const renderBadgeOnPath = (cx: number, cy: number, num: number, isActive: boolean, activeColor: string) => {
    const isHovered = hoveredNode === num;
    const radius = isHovered ? 13 : (isActive ? 10 : 8.5);
    return (
      <g>
        <circle
          cx={cx}
          cy={cy}
          r={radius}
          fill={isActive ? activeColor : (isDark ? "#121316" : "#faf6f0")}
          stroke={isActive ? activeColor : (isDark ? "#27272a" : "#cbd5e1")}
          strokeWidth={isHovered ? 2.5 : 1.5}
          className="transition-all duration-300 ease-out"
          style={{
            filter: isHovered ? "url(#glow-filter)" : "none",
          }}
        />
        <text
          x={cx}
          y={cy + 3}
          textAnchor="middle"
          fontSize={isHovered ? "10" : "9"}
          fontWeight="bold"
          fontFamily="monospace"
          fill={isActive ? (isDark ? "#0a0b0d" : "#ffffff") : (isDark ? "#71717a" : "#64748b")}
          className="transition-all duration-300"
        >
          {num}
        </text>
      </g>
    );
  };

  const mobileCardContent = [
    {
      title: "01 INTRO - CAPSULE APPEARS",
      subtitle: "Duration: 1.2s • Easing: easeOutCubic",
      desc: "Scene fades in from darkness. Particle field forms. Capsule materializes in the center with a soft glow.",
      color: "border-zinc-800/50 bg-zinc-900/5 text-text-primary"
    },
    {
      title: "02 CONNECT: PROTEIN-CODING",
      subtitle: "Duration: 1.4s • Easing: easeInOutCubic",
      desc: "Top-left node activates. Wavy line draws from capsule top to the Protein-Coding node with a gold glow.",
      color: "border-[#cca54a]/30 bg-[#cca54a]/5 text-[#cca54a]"
    },
    {
      title: "03 CONNECT: CURRENTLY MINED",
      subtitle: "Duration: 1.4s • Easing: easeInOutCubic",
      desc: "Top-right node activates. Wavy line draws from capsule top-right. Copper/green glow travels to the node.",
      color: "border-[#3e6b5c]/30 bg-[#3e6b5c]/5 text-[#3e6b5c]"
    },
    {
      title: "04 CONNECT: CLASS I DARK DNA",
      subtitle: "Duration: 1.4s • Easing: easeInOutCubic",
      desc: "Middle-left node activates. Wavy line draws from capsule middle to the Class I Dark DNA node. Amber glow pulses.",
      color: "border-amber-500/30 bg-amber-500/5 text-amber-500"
    },
    {
      title: "05 CONNECT: CLASS I POTENTIAL",
      subtitle: "Duration: 1.4s • Easing: easeInOutCubic",
      desc: "Middle-right node activates. Wavy line draws to Class I Potential. Amber glow mirrors the left side.",
      color: "border-amber-500/30 bg-amber-500/5 text-amber-500"
    },
    {
      title: "06 CONNECT: CLASS II DARK RNA",
      subtitle: "Duration: 1.4s • Easing: easeInOutCubic",
      desc: "Lower-left node activates. Wavy line draws from capsule lower section to Class II Dark RNA. Indigo glow.",
      color: "border-[#3f4c8c]/30 bg-[#3f4c8c]/5 text-[#3f4c8c]"
    },
    {
      title: "07 CONNECT: CLASS II POTENTIAL",
      subtitle: "Duration: 1.4s • Easing: easeInOutCubic",
      desc: "Lower-right node activates. All 6 nodes are now connected. Indigo glow completes the final connection.",
      color: "border-[#3f4c8c]/30 bg-[#3f4c8c]/5 text-[#3f4c8c]"
    },
    {
      title: "08 ALL CONNECTIONS ACTIVE",
      subtitle: "Duration: 1.2s • Easing: easeOutCubic",
      desc: "All 6 nodes connected. Lines pulse once in sequence. Capsule rotation slows and settles in center.",
      color: "border-emerald-500/30 bg-emerald-500/5 text-emerald-500"
    },
    {
      title: "09 CAPSULE ROTATION HIGHLIGHT",
      subtitle: "Duration: 1.2s • Easing: linear",
      desc: "Capsule rotates 360° on Y-axis. Bands emit sequential glow from top to bottom and back.",
      color: "border-indigo-500/30 bg-indigo-500/5 text-indigo-400"
    },
    {
      title: "10 ACTIVE SEQUENCE EVENT",
      subtitle: "Duration: 1.6s • Easing: easeOutCubic",
      desc: "Bottom info panel expands from center. Text types in with subtle scan effect. Background particles intensify.",
      color: "border-orange-500/30 bg-orange-500/5 text-orange-400"
    },
    {
      title: "11 TIMELINE / STEPS NAVIGATION",
      subtitle: "Duration (per step): 0.6s • Easing: easeInOutCubic",
      desc: "Step timeline appears at the bottom. Active step is highlighted. On hover, corresponding line & node pulse.",
      color: "border-blue-500/30 bg-blue-500/5 text-blue-400"
    },
    {
      title: "12 LOOP & IDLE STATE",
      subtitle: "Loop Duration: 6.0s • Easing: easeInOutSine",
      desc: "Subtle ambient loop. Capsule continues slow rotation. Connections breathe softly. Particles drift.",
      color: "border-teal-500/30 bg-teal-500/5 text-teal-400"
    }
  ];

  return (
    <div className={`w-full border rounded-3xl p-5 md:p-8 flex flex-col items-center relative overflow-hidden transition-all duration-300 ${isDark
      ? "bg-obsidian/45 border-zinc-850 shadow-2xl shadow-black/40"
      : "bg-white/70 border-slate-200/90 shadow-xl shadow-slate-100/50"
      }`}>
      <style dangerouslySetInnerHTML={{
        __html: `
        @keyframes dgs-rotateCapsule {
          0% { transform: translateX(0); }
          100% { transform: translateX(-100px); }
        }
        .dgs-capsule-scroller-intro {
          animation: dgs-rotateCapsule 10s linear infinite;
        }
        .dgs-capsule-scroller-standard {
          animation: dgs-rotateCapsule 22s linear infinite;
        }
        .dgs-capsule-scroller-slow {
          animation: dgs-rotateCapsule 45s linear infinite;
        }
        .dgs-capsule-scroller-highlight {
          animation: dgs-rotateCapsule 1.2s linear 1;
        }
        .dgs-capsule-scroller-event {
          animation: dgs-rotateCapsule 25s linear infinite;
        }
        .dgs-capsule-scroller-idle {
          animation: dgs-rotateCapsule 30s linear infinite;
        }

        @keyframes dgs-pulseGlow {
          0%, 100% { opacity: 0.15; }
          50% { opacity: 0.65; }
        }
        .dgs-active-band-glow {
          animation: dgs-pulseGlow 2s ease-in-out infinite;
        }

        @keyframes dgs-bandSeqGlow {
          0% { opacity: 0.15; filter: none; }
          25% { opacity: 0.95; filter: url(#glow-filter); }
          50% { opacity: 0.15; filter: none; }
          100% { opacity: 0.15; filter: none; }
        }
        .dgs-band-seq-glow-gold {
          animation: dgs-bandSeqGlow 1.2s cubic-bezier(0.645, 0.045, 0.355, 1) 1;
        }
        .dgs-band-seq-glow-amber {
          animation: dgs-bandSeqGlow 1.2s cubic-bezier(0.645, 0.045, 0.355, 1) 1;
          animation-delay: 0.25s;
        }
        .dgs-band-seq-glow-indigo {
          animation: dgs-bandSeqGlow 1.2s cubic-bezier(0.645, 0.045, 0.355, 1) 1;
          animation-delay: 0.5s;
        }

        @keyframes dgs-flowConnection {
          0% { stroke-dashoffset: 300; }
          100% { stroke-dashoffset: 0; }
        }
        .dgs-flow-particles {
          animation: dgs-flowConnection 4s linear infinite;
        }

        @keyframes dgs-floatParticle {
          0%, 100% { transform: translateY(0) translateX(0); opacity: 0.05; }
          50% { transform: translateY(-15px) translateX(8px); opacity: 0.3; }
        }
        .dgs-bg-particle {
          animation: dgs-floatParticle 8s ease-in-out infinite;
        }

        @keyframes dgs-particlesIntensify {
          0%, 100% { transform: translateY(0) scale(1); opacity: 0.2; }
          50% { transform: translateY(-25px) scale(1.4); opacity: 0.8; }
        }
        .dgs-particles-intensify {
          animation: dgs-particlesIntensify 4s ease-in-out infinite;
        }

        @keyframes dgs-scanline {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(100%); }
        }
        .dgs-scanline-effect::after {
          content: "";
          position: absolute;
          inset: 0;
          background: linear-gradient(to bottom, transparent, rgba(250,250,250,0.06), transparent);
          animation: dgs-scanline 3s linear infinite;
          pointer-events: none;
          z-index: 5;
        }

        @keyframes dgs-connectionBreathing {
          0%, 100% { opacity: 0.75; stroke-width: 2px; }
          50% { opacity: 1; stroke-width: 2.75px; }
        }
        .dgs-connection-breathe {
          animation: dgs-connectionBreathing 3.5s cubic-bezier(0.445, 0.05, 0.55, 0.95) infinite;
        }

        @keyframes dgs-linePulse {
          0% { stroke-width: 2px; opacity: 0.65; }
          50% { stroke-width: 4px; opacity: 1; filter: url(#glow-filter); }
          100% { stroke-width: 2px; opacity: 0.65; }
        }
        .dgs-line-pulse-once {
          animation: dgs-linePulse 1.2s cubic-bezier(0.215, 0.610, 0.355, 1) 1;
        }

        .dgs-capsule-intro {
          animation: dgs-capsuleFadeIn 1.2s cubic-bezier(0.215, 0.610, 0.355, 1) forwards;
        }
        @keyframes dgs-capsuleFadeIn {
          0% { opacity: 0; transform: scale(0.85); filter: blur(4px); }
          100% { opacity: 1; transform: scale(1); filter: blur(0); }
        }

        @keyframes dgs-fillProgress {
          0% { width: 0%; }
          100% { width: 100%; }
        }
      ` }} />

      {/* Decorative Particle Cloud behind components */}
      <div className={`absolute inset-0 pointer-events-none transition-opacity duration-[1500ms] ${activeStage === 7 ? "opacity-75" : "opacity-40"
        }`}>
        <svg className="w-full h-full" fill="none">
          {bgParticles.map((p, i) => (
            <circle
              key={i}
              cx={p.cx}
              cy={p.cy}
              r={p.r}
              fill={p.color}
              className={activeStage === 7 ? "dgs-particles-intensify" : "dgs-bg-particle"}
              style={{
                animationDelay: `${p.delay}s`,
                animationDuration: `${activeStage === 7 ? p.duration / 2 : p.duration}s`,
              }}
            />
          ))}
        </svg>
      </div>

      {/* Visual Sandbox Title Header */}
      <div className="w-full flex flex-col md:flex-row justify-between items-start md:items-center border-b border-border-subtle/30 pb-6 mb-8 gap-4 z-10">
        <div>
          <h2 className="text-[10px] font-mono tracking-[0.2em] uppercase font-bold text-amber-500">
            Dark Genome – Interactive Sequence
          </h2>
          <h3 className="font-serif-display text-2xl font-medium tracking-tight text-text-primary mt-1">
            Complete Animation Flow
          </h3>
        </div>
        <div className="flex flex-col md:items-end gap-2 max-w-md">
          <p className="text-[11px] text-text-secondary leading-relaxed md:text-right">
            A continuous, smooth, story-driven animation that connects all nodes one by one with capsule rotation, particle fields, glow pulses and elegant transitions.
          </p>
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className={`px-3 py-1.5 rounded-full text-[9px] font-mono uppercase font-bold border transition-all flex items-center gap-1.5 self-start md:self-auto ${isDark
              ? "border-zinc-800 bg-zinc-900/50 hover:bg-zinc-800 text-zinc-300"
              : "border-slate-200 bg-slate-100/50 hover:bg-slate-200/50 text-slate-600"
              }`}
          >
            {isPlaying ? (
              <>
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                Autoplay ON
              </>
            ) : (
              <>
                <span className="h-1.5 w-1.5 rounded-full bg-zinc-500" />
                Autoplay OFF
              </>
            )}
          </button>
        </div>
      </div>

      {/* DESKTOP: Single full-width SVG — cards + capsule + lines in one coordinate space */}
      <div className="hidden md:block w-full max-w-5xl relative z-10" style={{ height: 440 }}>
        <svg viewBox="0 0 900 440" className="w-full h-full overflow-visible" style={{ pointerEvents: 'none' }}>
          <defs>
            <filter id="glow-filter" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="4" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
            <filter id="card-shadow" x="-10%" y="-10%" width="120%" height="120%">
              <feDropShadow dx="0" dy="2" stdDeviation="4" floodOpacity="0.08" />
            </filter>
            <clipPath id="capsule-clip-path">
              <rect x="400" y="30" width="56" height="148" rx="28" ry="28" />
              <rect x="414" y="178" width="28" height="24" />
              <rect x="400" y="202" width="56" height="148" rx="28" ry="28" />
            </clipPath>
            <linearGradient id="capsule-shading" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor={isDark ? "rgba(0,0,0,0.65)" : "rgba(0,0,0,0.15)"} />
              <stop offset="18%" stopColor={isDark ? "rgba(255,255,255,0.28)" : "rgba(255,255,255,0.55)"} />
              <stop offset="50%" stopColor={isDark ? "rgba(255,255,255,0.02)" : "rgba(255,255,255,0)"} />
              <stop offset="85%" stopColor={isDark ? "rgba(0,0,0,0.02)" : "rgba(0,0,0,0)"} />
              <stop offset="100%" stopColor={isDark ? "rgba(0,0,0,0.65)" : "rgba(0,0,0,0.2)"} />
            </linearGradient>
          </defs>

          {/* Card backgrounds — 6 boxes */}
          {([
            [10, 30, "#cca54a", 1],
            [10, 172, "#f59e0b", 2],
            [10, 314, "#3f4c8c", 3],
            [695, 30, "#3e6b5c", 4],
            [695, 172, "#f59e0b", 5],
            [695, 314, "#3f4c8c", 6],
          ] as [number, number, string, number][]).map(([cx, cy, col, num]) => {
            const active = isNodeActive(num);
            const hov = hoveredNode === num || hoveredNode === 99;
            return (
              <rect key={`bg-${num}`} x={cx} y={cy} width={195} height={96} rx={14}
                fill={isDark ? (active ? `${col}20` : "#0d0e1240") : (active ? `${col}10` : "#f8f8f680")}
                stroke={active ? col : (isDark ? "#3f3f46" : "#e2e8f0")}
                strokeWidth={hov ? 2 : 1.5}
                filter="url(#card-shadow)"
                style={{ transition: 'stroke 500ms ease, fill 500ms ease' }}
              />
            );
          })}

          {/* Ghost guide lines (static dashes, wavy S-curves) */}
          {([
            { d: "M 400 60  C 360 60,  320 78,  280 78  S 240 78,  205 78", col: "#cca54a" },
            { d: "M 400 150 C 355 150, 310 190, 280 210 S 230 230, 205 220", col: "#f59e0b" },
            { d: "M 400 310 C 355 320, 305 345, 270 358 S 230 368, 205 362", col: "#3f4c8c" },
            { d: "M 456 60  C 496 60,  536 78,  576 78  S 660 78,  695 78", col: "#3e6b5c" },
            { d: "M 456 150 C 501 150, 546 190, 576 210 S 626 230, 695 220", col: "#f59e0b" },
            { d: "M 456 310 C 501 320, 551 345, 586 358 S 626 368, 695 362", col: "#3f4c8c" },
          ] as { d: string; col: string }[]).map(({ d, col }, i) => (
            <path key={`ghost-${i}`} d={d}
              stroke={isDark ? "rgba(255,255,255,0.05)" : "rgba(0,0,0,0.06)"}
              strokeWidth="1.5" strokeDasharray="5 5" fill="none" />
          ))}
          {/* Animated connection lines — wavy S-curves */}
          {([
            { d: "M 400 60  C 360 60,  320 78,  280 78  S 240 78,  205 78", col: "#cca54a", node: 1 },
            { d: "M 400 150 C 355 150, 310 190, 280 210 S 230 230, 205 220", col: "#f59e0b", node: 2 },
            { d: "M 400 310 C 355 320, 305 345, 270 358 S 230 368, 205 362", col: "#3f4c8c", node: 3 },
            { d: "M 456 60  C 496 60,  536 78,  576 78  S 660 78,  695 78", col: "#3e6b5c", node: 4 },
            { d: "M 456 150 C 501 150, 546 190, 576 210 S 626 230, 695 220", col: "#f59e0b", node: 5 },
            { d: "M 456 310 C 501 320, 551 345, 586 358 S 626 368, 695 362", col: "#3f4c8c", node: 6 },
          ] as { d: string; col: string; node: number }[]).map(({ d, col, node }) => {
            const active = isNodeActive(node);
            const hov = hoveredNode === node || hoveredNode === 99;
            return (
              <g key={`ln-${node}`}>
                <path d={d} stroke={col}
                  strokeWidth={hov ? 3.5 : 2.5}
                  strokeDasharray="700" strokeDashoffset={active ? 0 : 700}
                  fill="none"
                  className={activeStage === 7 ? "dgs-line-pulse-once" : (activeStage >= 11 && active && !hoveredNode ? "dgs-connection-breathe" : "")}
                  style={{
                    transition: 'stroke-dashoffset 1200ms cubic-bezier(0.645,0.045,0.355,1), stroke-width 300ms ease',
                    filter: hov ? `drop-shadow(0 0 6px ${col})` : 'none',
                  }} />
                {active && (
                  <path d={d} stroke={col} strokeWidth="3" strokeDasharray="8 28"
                    fill="none" className="dgs-flow-particles"
                    opacity={activeStage === 9 || hov ? 0.9 : 0}
                    style={{ transition: 'opacity 400ms ease' }} />
                )}
              </g>
            );
          })}

          {/* CHROMOSOME CAPSULE BODY */}
          <g clipPath="url(#capsule-clip-path)" className={activeStage === 0 ? "dgs-capsule-intro" : ""}>
            <g className={getCapsuleRotationClass()}>
              {[0, 100].map(dx => (
                <g key={dx} transform={`translate(${dx + 370}, 0)`}>
                  <rect x="0" y="0" width="100" height="440" fill={capsuleBodyColor} />
                  <rect x="12" y="0" width="4" height="440" fill={capsuleLineColor} />
                  <rect x="42" y="0" width="7" height="440" fill={capsuleLineColorStrong} />
                  <rect x="75" y="0" width="4" height="440" fill={capsuleLineColor} />
                  <rect x="0" y="46" width="100" height="26" fill="#cca54a" />
                  <rect x="12" y="46" width="9" height="26" fill={isDark ? "#8c6f27" : "#fffbe8"} />
                  <rect x="44" y="46" width="14" height="26" fill={isDark ? "#634e19" : "#f5e6c8"} />
                  <rect x="0" y="124" width="100" height="26" fill={isDark ? "#b45309" : "#f59e0b"} />
                  <rect x="18" y="124" width="12" height="26" fill={isDark ? "#78350f" : "#fef3c7"} />
                  <rect x="0" y="276" width="100" height="30" fill="#3f4c8c" />
                  <rect x="10" y="276" width="9" height="30" fill={isDark ? "#2d3765" : "#e0e7ff"} />
                  <rect x="48" y="276" width="14" height="30" fill={isDark ? "#1e244a" : "#c7d2fe"} />
                </g>
              ))}
            </g>
          </g>

          {/* 3D shading */}
          <g className={activeStage === 0 ? "dgs-capsule-intro" : ""}>
            <rect x="400" y="30" width="56" height="148" rx="28" ry="28" fill="url(#capsule-shading)" pointerEvents="none" />
            <rect x="414" y="178" width="28" height="24" fill="url(#capsule-shading)" pointerEvents="none" />
            <rect x="400" y="202" width="56" height="148" rx="28" ry="28" fill="url(#capsule-shading)" pointerEvents="none" />
          </g>
          <rect x="400" y="30" width="56" height="148" rx="28" ry="28" stroke={isDark ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.06)"} strokeWidth="1.5" fill="none" className={activeStage === 0 ? "dgs-capsule-intro" : ""} />
          <rect x="414" y="178" width="28" height="24" stroke={isDark ? "rgba(255,255,255,0.06)" : "rgba(0,0,0,0.04)"} strokeWidth="1" fill="none" className={activeStage === 0 ? "dgs-capsule-intro" : ""} />
          <rect x="400" y="202" width="56" height="148" rx="28" ry="28" stroke={isDark ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.06)"} strokeWidth="1.5" fill="none" className={activeStage === 0 ? "dgs-capsule-intro" : ""} />

          {/* Band glows — stage 8 = sequential pulse, stage >=7 = breathing idle */}
          <rect x="400" y="46" width="56" height="26" fill="#cca54a" filter="url(#glow-filter)"
            opacity={activeStage === 8 ? 1 : (isNodeActive(1) || hoveredNode === 1 || hoveredNode === 4 || hoveredNode === 99 ? 0.7 : 0)}
            className={`pointer-events-none transition-opacity duration-700 ${activeStage === 8 ? "dgs-band-seq-glow-gold" : (activeStage >= 7 || hoveredNode === 1 || hoveredNode === 4 || hoveredNode === 99 ? "dgs-active-band-glow" : "")}`} />
          <rect x="400" y="124" width="56" height="26" fill="#f59e0b" filter="url(#glow-filter)"
            opacity={activeStage === 8 ? 1 : (isNodeActive(2) || hoveredNode === 2 || hoveredNode === 5 || hoveredNode === 99 ? 0.7 : 0)}
            className={`pointer-events-none transition-opacity duration-700 ${activeStage === 8 ? "dgs-band-seq-glow-amber" : (activeStage >= 7 || hoveredNode === 2 || hoveredNode === 5 || hoveredNode === 99 ? "dgs-active-band-glow" : "")}`} />
          <rect x="400" y="276" width="56" height="30" fill="#3f4c8c" filter="url(#glow-filter)"
            opacity={activeStage === 8 ? 1 : (isNodeActive(3) || hoveredNode === 3 || hoveredNode === 6 || hoveredNode === 99 ? 0.7 : 0)}
            className={`pointer-events-none transition-opacity duration-700 ${activeStage === 8 ? "dgs-band-seq-glow-indigo" : (activeStage >= 7 || hoveredNode === 3 || hoveredNode === 6 || hoveredNode === 99 ? "dgs-active-band-glow" : "")}`} />

          {/* Card text via foreignObject */}
          {([
            { x: 10, y: 30, n: 1, title: "PROTEIN-CODING", sub: "1–2% of genome", col: "#cca54a", Icon: Brain },
            { x: 10, y: 172, n: 2, title: "CLASS I DARK DNA", sub: "Non-expressing DNA", col: "#f59e0b", Icon: Sparkles },
            { x: 10, y: 314, n: 3, title: "CLASS II DARK RNA", sub: "Non-translating RNA", col: "#3f4c8c", Icon: Activity },
            { x: 695, y: 30, n: 4, title: "CURRENTLY MINED", sub: "~2% · explored so far", col: "#3e6b5c", Icon: Search },
            { x: 695, y: 172, n: 5, title: "CLASS I POTENTIAL", sub: "~40% untapped DNA", col: "#f59e0b", Icon: Sparkles },
            { x: 695, y: 314, n: 6, title: "CLASS II POTENTIAL", sub: "~56% untapped RNA", col: "#3f4c8c", Icon: Activity },
          ] as { x: number; y: number; n: number; title: string; sub: string; col: string; Icon: React.ElementType }[]).map(({ x, y, n, title, sub, col, Icon }) => {
            const active = isNodeActive(n);
            return (
              <foreignObject key={`fo-${n}`} x={x} y={y} width={195} height={96}
                style={{ pointerEvents: 'all', cursor: 'pointer' }}
                onClick={() => { const s = n === 1 ? 1 : n === 2 ? 3 : n === 3 ? 5 : n === 4 ? 2 : n === 5 ? 4 : 6; setActiveStage(s); setIsPlaying(false); }}
                onMouseEnter={() => setHoveredNode(n)} onMouseLeave={() => setHoveredNode(null)}>
                <div className="w-full h-full flex items-center gap-3 px-3">
                  <div className="h-8 w-8 rounded-full border flex items-center justify-center shrink-0 transition-all duration-300"
                    style={{ borderColor: active ? col : (isDark ? '#3f3f46' : '#e2e8f0'), background: active ? `${col}22` : 'transparent', opacity: active ? 1 : 0.45 }}>
                    <Icon style={{ width: 14, height: 14, color: active ? col : (isDark ? '#71717a' : '#94a3b8') }} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-[9px] font-mono font-bold tracking-wider truncate" style={{ color: active ? col : (isDark ? '#52525b' : '#94a3b8') }}>{title}</p>
                    <p className="text-[9px] mt-0.5 truncate" style={{ color: isDark ? '#52525b' : '#94a3b8' }}>{sub}</p>
                  </div>
                  <span className="h-5 w-5 rounded-full text-[9px] font-mono font-bold flex items-center justify-center border shrink-0"
                    style={{ borderColor: active ? col : (isDark ? '#3f3f46' : '#e2e8f0'), color: active ? col : (isDark ? '#52525b' : '#94a3b8') }}>{n}</span>
                </div>
              </foreignObject>
            );
          })}

          {/* Line-end dots — at wavy path endpoints touching card edges */}
          {([
            { cx: 205, cy: 78, col: "#cca54a", node: 1 },
            { cx: 205, cy: 220, col: "#f59e0b", node: 2 },
            { cx: 205, cy: 362, col: "#3f4c8c", node: 3 },
            { cx: 695, cy: 78, col: "#3e6b5c", node: 4 },
            { cx: 695, cy: 220, col: "#f59e0b", node: 5 },
            { cx: 695, cy: 362, col: "#3f4c8c", node: 6 },
          ] as { cx: number; cy: number; col: string; node: number }[]).map(({ cx, cy, col, node }) => {
            const active = isNodeActive(node);
            return (
              <circle key={`dot-${node}`} cx={cx} cy={cy} r={active ? 5.5 : 3.5}
                fill={active ? col : (isDark ? '#3f3f46' : '#cbd5e1')}
                style={{ transition: 'r 400ms ease, fill 600ms ease', filter: active ? `drop-shadow(0 0 5px ${col})` : 'none' }} />
            );
          })}

          {/* Capsule-side start dots */}
          {([
            { cx: 400, cy: 60, col: "#cca54a", node: 1 },
            { cx: 400, cy: 150, col: "#f59e0b", node: 2 },
            { cx: 400, cy: 310, col: "#3f4c8c", node: 3 },
            { cx: 456, cy: 60, col: "#3e6b5c", node: 4 },
            { cx: 456, cy: 150, col: "#f59e0b", node: 5 },
            { cx: 456, cy: 310, col: "#3f4c8c", node: 6 },
          ] as { cx: number; cy: number; col: string; node: number }[]).map(({ cx, cy, col, node }) => {
            const active = isNodeActive(node);
            return (
              <circle key={`sdot-${node}`} cx={cx} cy={cy} r={active ? 4 : 2.5}
                fill={active ? col : (isDark ? '#3f3f46' : '#cbd5e1')}
                style={{ transition: 'r 400ms ease, fill 600ms ease', filter: active ? `drop-shadow(0 0 4px ${col})` : 'none' }} />
            );
          })}

          {/* Numbered badges — placed at midpoint of each wavy path */}
          {renderBadgeOnPath(302, 76, 1, isNodeActive(1), "#cca54a")}
          {renderBadgeOnPath(295, 205, 2, isNodeActive(2), "#f59e0b")}
          {renderBadgeOnPath(300, 352, 3, isNodeActive(3), "#3f4c8c")}
          {renderBadgeOnPath(556, 76, 4, isNodeActive(4), "#3e6b5c")}
          {renderBadgeOnPath(563, 205, 5, isNodeActive(5), "#f59e0b")}
          {renderBadgeOnPath(558, 352, 6, isNodeActive(6), "#3f4c8c")}
        </svg>
      </div>

      {/* MOBILE CHROMOSOME DISPLAY */}
      <div className="flex md:hidden flex-col items-center gap-6 w-full max-w-sm relative z-10">
        <div className="h-56 flex justify-center items-center">
          <svg viewBox="85 30 50 280" className="w-16 h-56 select-none pointer-events-none overflow-visible">
            <defs>
              <filter id="glow-filter-mobile" x="-30%" y="-30%" width="160%" height="160%">
                <feGaussianBlur stdDeviation="3" result="blur" />
                <feComposite in="SourceGraphic" in2="blur" operator="over" />
              </filter>
              <clipPath id="capsule-clip-path-mobile">
                <rect x="85" y="30" width="50" height="125" rx="25" ry="25" />
                <rect x="85" y="185" width="50" height="125" rx="25" ry="25" />
                <circle cx="110" cy="170" r="10" />
              </clipPath>
              <linearGradient id="capsule-shading-mobile" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor={isDark ? "rgba(0,0,0,0.7)" : "rgba(0,0,0,0.18)"} />
                <stop offset="20%" stopColor={isDark ? "rgba(255,255,255,0.3)" : "rgba(255,255,255,0.6)"} />
                <stop offset="45%" stopColor={isDark ? "rgba(255,255,255,0.03)" : "rgba(255,255,255,0)"} />
                <stop offset="75%" stopColor={isDark ? "rgba(0,0,0,0)" : "rgba(0,0,0,0)"} />
                <stop offset="92%" stopColor={isDark ? "rgba(0,0,0,0.35)" : "rgba(0,0,0,0.02)"} />
                <stop offset="100%" stopColor={isDark ? "rgba(0,0,0,0.7)" : "rgba(0,0,0,0.22)"} />
              </linearGradient>
            </defs>

            <g clipPath="url(#capsule-clip-path-mobile)" className={activeStage === 0 ? "dgs-capsule-intro" : ""}>
              <g className={getCapsuleRotationClass()}>
                <g transform="translate(0, 0)">
                  <rect x="0" y="0" width="100" height="340" fill={capsuleBodyColor} />
                  <rect x="15" y="0" width="3.5" height="340" fill={capsuleLineColor} />
                  <rect x="45" y="0" width="6" height="340" fill={capsuleLineColorStrong} />

                  <rect x="0" y="45" width="100" height="20" fill="#cca54a" />
                  <rect x="15" y="45" width="8" height="20" fill={isDark ? "#8c6f27" : "#faf6f0"} />
                  <rect x="45" y="45" width="12" height="20" fill={isDark ? "#634e19" : "#eeddcc"} />

                  <rect x="0" y="95" width="100" height="20" fill={isDark ? "#b45309" : "#f59e0b"} />
                  <rect x="20" y="95" width="10" height="20" fill={isDark ? "#78350f" : "#fef3c7"} />

                  <rect x="0" y="220" width="100" height="25" fill="#3f4c8c" />
                  <rect x="10" y="220" width="8" height="25" fill={isDark ? "#2d3765" : "#e0e7ff"} />
                </g>
                <g transform="translate(100, 0)">
                  <rect x="0" y="0" width="100" height="340" fill={capsuleBodyColor} />
                  <rect x="15" y="0" width="3.5" height="340" fill={capsuleLineColor} />
                  <rect x="45" y="0" width="6" height="340" fill={capsuleLineColorStrong} />

                  <rect x="0" y="45" width="100" height="20" fill="#cca54a" />
                  <rect x="15" y="45" width="8" height="20" fill={isDark ? "#8c6f27" : "#faf6f0"} />

                  <rect x="0" y="95" width="100" height="20" fill={isDark ? "#b45309" : "#f59e0b"} />
                  <rect x="20" y="95" width="10" height="20" fill={isDark ? "#78350f" : "#fef3c7"} />

                  <rect x="0" y="220" width="100" height="25" fill="#3f4c8c" />
                  <rect x="10" y="220" width="8" height="25" fill={isDark ? "#2d3765" : "#e0e7ff"} />
                </g>
              </g>
            </g>

            <rect x="85" y="30" width="50" height="125" rx="25" ry="25" fill="url(#capsule-shading-mobile)" pointerEvents="none" className={activeStage === 0 ? "dgs-capsule-intro" : ""} />
            <rect x="85" y="185" width="50" height="125" rx="25" ry="25" fill="url(#capsule-shading-mobile)" pointerEvents="none" className={activeStage === 0 ? "dgs-capsule-intro" : ""} />
            <circle cx="110" cy="170" r="10" fill="url(#capsule-shading-mobile)" pointerEvents="none" className={activeStage === 0 ? "dgs-capsule-intro" : ""} />

            <rect x="85" y="30" width="50" height="125" rx="25" ry="25" stroke={isDark ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.06)"} strokeWidth="1.5" fill="none" pointerEvents="none" className={activeStage === 0 ? "dgs-capsule-intro" : ""} />
            <rect x="85" y="185" width="50" height="125" rx="25" ry="25" stroke={isDark ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.06)"} strokeWidth="1.5" fill="none" pointerEvents="none" className={activeStage === 0 ? "dgs-capsule-intro" : ""} />
            <circle cx="110" cy="170" r="10" stroke={isDark ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.06)"} strokeWidth="1.5" fill="none" pointerEvents="none" className={activeStage === 0 ? "dgs-capsule-intro" : ""} />

            {/* Glowing active overlays */}
            <rect x="85" y="45" width="50" height="20" fill="#cca54a" filter="url(#glow-filter-mobile)" opacity={isNodeActive(1) ? 0.6 : 0} className="transition-opacity duration-700 pointer-events-none" />
            <rect x="85" y="95" width="50" height="20" fill="#f59e0b" filter="url(#glow-filter-mobile)" opacity={isNodeActive(2) ? 0.6 : 0} className="transition-opacity duration-700 pointer-events-none" />
            <rect x="85" y="220" width="50" height="25" fill="#3f4c8c" filter="url(#glow-filter-mobile)" opacity={isNodeActive(3) ? 0.6 : 0} className="transition-opacity duration-700 pointer-events-none" />
          </svg>
        </div>

        {/* Mobile Active Stage Card */}
        <div className={`w-full p-5 rounded-2xl border transition-all duration-500 text-center ${isDark ? "bg-[#0d0e12]/60 border-zinc-800/80" : "bg-slate-50/80 border-slate-200"
          } ${mobileCardContent[activeStage].color}`}>
          <h4 className="text-xs font-mono font-bold tracking-widest uppercase">
            {mobileCardContent[activeStage].title}
          </h4>
          <p className="text-[9px] opacity-80 font-mono mt-1">
            {mobileCardContent[activeStage].subtitle}
          </p>
          <p className="text-xs text-text-secondary mt-3 leading-relaxed">
            {mobileCardContent[activeStage].desc}
          </p>
        </div>
      </div>

      {/* ACTIVE STAGE DESCRIPTION BOX (DESKTOP) */}
      <div className={`hidden md:block w-full mt-6 p-5 rounded-2xl border text-center transition-all duration-500 relative overflow-hidden ${isDark ? "bg-[#0d0e12]/40 border-zinc-800/80 scanline-effect" : "bg-slate-50/50 border-slate-200 scanline-effect"
        }`}>
        <div className="flex justify-between items-center border-b border-border-subtle/30 pb-2 mb-3">
          <span className="text-[10px] font-mono uppercase font-bold text-amber-500 tracking-wider">
            {stages[activeStage].id} {stages[activeStage].label}
          </span>
          <span className="text-[9px] font-mono uppercase text-text-tertiary">
            Duration: {stages[activeStage].durationText} • Easing: {stages[activeStage].easingText}
          </span>
        </div>
        <p className="text-sm text-text-primary leading-relaxed max-w-2xl mx-auto font-medium text-left min-h-[40px]">
          {typedDesc}
        </p>
      </div>

      {/* TIMELINE PROGRESS CONTROLS (DOTS + LABEL) */}
      <div className="w-full flex flex-col items-center gap-3 mt-6 pt-4 border-t border-border-subtle/50 z-10">
        <div className="flex items-center gap-2 md:gap-4 flex-wrap justify-center font-mono">
          {[
            { id: "01", name: "Intro", targetStage: 0, hoverNode: null },
            { id: "02", name: "Protein-Coding", targetStage: 1, hoverNode: 1 },
            { id: "03", name: "Currently Mined", targetStage: 2, hoverNode: 4 },
            { id: "04", name: "Class I Dark DNA", targetStage: 3, hoverNode: 2 },
            { id: "05", name: "Class I Potential", targetStage: 4, hoverNode: 5 },
            { id: "06", name: "Class II Dark RNA", targetStage: 5, hoverNode: 3 },
            { id: "07", name: "Class II Potential", targetStage: 6, hoverNode: 6 },
            { id: "08", name: "All Connected", targetStage: 9, hoverNode: 99 },
          ].map((st, idx) => {
            const isButtonActive =
              st.targetStage === 9
                ? activeStage >= 7
                : activeStage === st.targetStage;

            return (
              <button
                key={idx}
                onClick={() => {
                  setActiveStage(st.targetStage);
                  setIsPlaying(false);
                }}
                onMouseEnter={() => setHoveredNode(st.hoverNode as number | null)}
                onMouseLeave={() => setHoveredNode(null)}
                className={`px-3 py-1.5 rounded-full text-[10px] font-mono font-bold uppercase transition-all duration-300 border ${isButtonActive
                  ? "bg-accent-blue dark:bg-white text-white dark:text-zinc-950 border-transparent scale-105"
                  : `${isDark ? "border-zinc-800 hover:border-zinc-700 bg-zinc-900/30 text-zinc-400" : "border-slate-200 hover:border-slate-350 bg-slate-50/50 text-slate-500"}`
                  }`}
              >
                {st.id} <span className="hidden sm:inline ml-1 font-sans text-[9px] font-semibold tracking-normal text-opacity-80">{st.name}</span>
              </button>
            );
          })}
        </div>

        {/* Timeline progress bar indicator */}
        <div className={`h-1 w-48 rounded-full overflow-hidden mt-1 bg-opacity-10 ${isDark ? "bg-white" : "bg-black"
          }`}>
          <div
            key={activeStage + (isPlaying ? "-playing" : "-paused")}
            className="h-full bg-accent-blue dark:bg-white"
            style={{
              width: isPlaying ? "100%" : `${((activeStage + 1) / 12) * 100}%`,
              transition: isPlaying
                ? `width ${stageDurations[activeStage]}ms linear`
                : "width 300ms ease-out",
              // Start at 0 width when playing
              ...(isPlaying ? { animation: `dgs-fillProgress ${stageDurations[activeStage]}ms linear forwards` } : {})
            }}
          />
        </div>
      </div>

      {/* ANIMATION PRINCIPLES FOOTER */}
      <div className="w-full grid grid-cols-2 md:grid-cols-5 gap-4 mt-8 pt-6 border-t border-border-subtle/30 text-[10px] font-mono text-text-tertiary">
        <div className="flex items-center gap-1.5 justify-center md:justify-start">
          <Activity className="w-3.5 h-3.5 text-amber-500" />
          <span>Smooth easing (easeInOutCubic)</span>
        </div>
        <div className="flex items-center gap-1.5 justify-center">
          <Layers className="w-3.5 h-3.5 text-[#cca54a]" />
          <span>Dotted drawing (stroke-dasharray)</span>
        </div>
        <div className="flex items-center gap-1.5 justify-center">
          <Sparkles className="w-3.5 h-3.5 text-[#3f4c8c]" />
          <span>Glow pulses on completion</span>
        </div>
        <div className="flex items-center gap-1.5 justify-center">
          <Brain className="w-3.5 h-3.5 text-[#3e6b5c]" />
          <span>Subtle depth & parallax</span>
        </div>
        <div className="flex items-center gap-1.5 justify-center md:justify-end col-span-2 md:col-span-1">
          <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
          <span>Respects reduce-motion preferences</span>
        </div>
      </div>
    </div >
  );
}

// --- Main Page Component ---
export default function DrugDiscoveryPage() {
  const contactModal = useContactModal();
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className={`flex flex-col w-full min-h-screen relative overflow-hidden font-sans transition-colors duration-300 ${isDark ? "bg-[#0a0b0d] text-bone" : "bg-white text-slate-900"
      }`}>

      {/* SECTION 1: THE FRONTIER (Hero) */}
      <section className="relative min-h-screen flex items-center justify-center pt-28 pb-20 overflow-hidden">
        <GenomeAtlasHero isDark={isDark} />

        <div className={`absolute inset-0 pointer-events-none ${isDark
          ? "bg-gradient-to-t from-[#0a0b0d] via-transparent to-[#0a0b0d]/60"
          : "bg-gradient-to-t from-white via-transparent to-white/40"
          }`} />

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <Reveal>
            <p className="text-[10px] tracking-[0.35em] font-bold uppercase mb-8 text-accent-blue dark:text-zinc-500">
              Scientific Discovery Environment
            </p>
          </Reveal>
          <Reveal delay={120}>
            {/* Heading styled exactly like the Contact page hero (sans-serif with serif-italic blocker) */}
            <h1 className="font-semibold leading-[1.1] text-text-primary tracking-tight" style={{ fontSize: 'clamp(2.3rem, 5.5vw, 4.25rem)' }}>
              <span>Discover previously inaccessible</span>
              <span className="font-serif-italic block mt-3 text-accent-blue dark:text-white">
                — in weeks instead of years.
              </span>
            </h1>
          </Reveal>
          <Reveal delay={240}>
            <p className="mt-8 max-w-2xl mx-auto text-base md:text-lg text-text-secondary leading-relaxed font-medium">
              We explore the 98% non-coding genome—mapping silent DNA frames and structural RNA networks to output validated therapeutic candidates.
            </p>
          </Reveal>

          <Reveal delay={300}>
            <div className="mt-12 w-full">
              <DarkGenomeSandbox isDark={isDark} />
            </div>
          </Reveal>

          {/* Action buttons */}
          <Reveal delay={360}>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <button
                onClick={() => scrollToSection("genome-map")}
                className="px-8 py-3.5 rounded-full text-xs font-semibold uppercase tracking-wider transition duration-300 hover:scale-105 active:scale-95 shadow-md bg-accent-blue dark:bg-white text-white dark:text-zinc-950 font-bold"
              >
                Explore the Atlas
              </button>
              <button
                onClick={() => scrollToSection("evidence")}
                className={`px-8 py-3.5 rounded-full border text-xs font-semibold uppercase tracking-wider transition duration-300 hover:scale-105 active:scale-95 shadow-sm ${isDark
                  ? "border-zinc-800 bg-zinc-900/50 hover:bg-zinc-850 hover:border-zinc-700 text-white"
                  : "border-slate-200 bg-white/75 hover:bg-white hover:border-accent-blue text-slate-800"
                  }`}
              >
                View Scientific Evidence
              </button>
            </div>
          </Reveal>
        </div>
      </section>

      {/* SECTION 2: THE DARK GENOME MAP (Interactive Chromosome) */}
      <section id="genome-map" className={`relative z-10 py-24 border-y ${isDark ? "border-border-subtle bg-bg-raised/20" : "border-slate-200 bg-slate-50/50"
        }`}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <Reveal>
              <span className="text-[10px] font-mono uppercase tracking-widest font-bold text-accent-blue dark:text-zinc-500">
                Act 1 · Visual Mapping
              </span>
            </Reveal>
            <Reveal delay={100}>
              <h2 className="font-semibold leading-[1.1] text-3xl md:text-5xl tracking-tight text-text-primary mt-3">
                <span>The Dark Genome</span>
                <span className="font-serif-italic block mt-1.5 text-accent-blue dark:text-white">
                  — Atlas Exploration
                </span>
              </h2>
            </Reveal>
            <Reveal delay={200}>
              <p className="mt-4 text-sm text-text-secondary max-w-xl mx-auto leading-relaxed">
                Decades of medicine focused on 2% coding regions. We map Class I DNA and Class II RNA structures inside the unexamined 98%.
              </p>
            </Reveal>
          </div>

          <Reveal delay={250}>
            <DarkGenomeMap isDark={isDark} />
          </Reveal>
        </div>
      </section>

      {/* SECTION 3: THE DISCOVERY PIPELINE (Journey through Scale) */}
      <section id="pipeline" className={`relative z-10 py-24 border-b ${isDark ? "bg-obsidian border-border-subtle" : "bg-white border-slate-200"
        }`}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <Reveal>
              <span className="text-[10px] font-mono uppercase tracking-widest font-bold text-accent-blue dark:text-zinc-500">
                Act 2 · Unified Journey
              </span>
            </Reveal>
            <Reveal delay={100}>
              <h2 className="font-semibold leading-[1.1] text-3xl md:text-5xl tracking-tight text-text-primary mt-3">
                <span>Pipeline Journey</span>
                <span className="font-serif-italic block mt-1.5 text-accent-blue dark:text-white">
                  — through Biological Scale
                </span>
              </h2>
            </Reveal>
            <Reveal delay={250}>
              <p className="mt-4 text-sm text-text-secondary max-w-xl mx-auto leading-relaxed">
                Following genomic candidates from macroscopic structural database mapping to sub-angstrom quantum simulation parameters.
              </p>
            </Reveal>
          </div>

          <Reveal delay={300}>
            <BiologicalScalePipeline isDark={isDark} />
          </Reveal>
        </div>
      </section>

      {/* SECTION 4: SCIENTIFIC EVIDENCE (Trust Builders) */}
      <section id="evidence" className={`relative z-10 py-24 border-b ${isDark ? "bg-bg-raised/20 border-border-subtle" : "bg-slate-50/50 border-slate-200"
        }`}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <Reveal>
              <span className="text-[10px] font-mono uppercase tracking-widest font-bold text-accent-blue dark:text-zinc-500">
                Act 3 · Peer Validation
              </span>
            </Reveal>
            <Reveal delay={100}>
              <h2 className="font-semibold leading-[1.1] text-3xl md:text-5xl tracking-tight text-text-primary mt-3">
                <span>Scientific Evidence</span>
                <span className="font-serif-italic block mt-1.5 text-accent-blue dark:text-white">
                  — & Peer Benchmarks
                </span>
              </h2>
            </Reveal>
            <Reveal delay={200}>
              <p className="mt-4 text-sm text-text-secondary max-w-xl mx-auto leading-relaxed">
                Rigorous empirical validations backed by in vitro testing coordinates and academic publications.
              </p>
            </Reveal>
          </div>

          <Reveal delay={300}>
            <NatureStyleEvidence isDark={isDark} />
          </Reveal>
        </div>
      </section>

      {/* SECTION 5: MOLECULE SHOWCASE (Case Studies) */}
      <section id="molecule-showcase" className={`relative z-10 py-24 border-b ${isDark ? "bg-obsidian border-border-subtle" : "bg-white border-slate-200"
        }`}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <Reveal>
              <span className="text-[10px] font-mono uppercase tracking-widest font-bold text-accent-blue dark:text-zinc-500">
                Act 4 · Molecule Profiles
              </span>
            </Reveal>
            <Reveal delay={100}>
              <h2 className="font-semibold leading-[1.1] text-3xl md:text-5xl tracking-tight text-text-primary mt-3">
                <span>Lead Candidate</span>
                <span className="font-serif-italic block mt-1.5 text-accent-blue dark:text-white">
                  — Molecule Showcase
                </span>
              </h2>
            </Reveal>
            <Reveal delay={200}>
              <p className="mt-4 text-sm text-text-secondary max-w-xl mx-auto leading-relaxed">
                Step-by-step case histories tracing candidate discovery from genomic sequences to verified assay binding outcomes.
              </p>
            </Reveal>
          </div>

          <Reveal delay={300}>
            <MoleculeShowcase isDark={isDark} />
          </Reveal>
        </div>
      </section>

      {/* SECTION 6: PLATFORM VISION (Supporting Engines) */}
      <section className={`relative z-10 py-24 border-b ${isDark ? "bg-bg-raised/25 border-border-subtle" : "bg-slate-50/50 border-slate-200"
        }`}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <Reveal>
              <span className="text-[10px] font-mono uppercase tracking-widest font-bold text-accent-blue dark:text-zinc-500">
                Act 5 · The Supporting Stack
              </span>
            </Reveal>
            <Reveal delay={100}>
              <h2 className="font-semibold leading-[1.1] text-3xl md:text-5xl tracking-tight text-text-primary mt-3">
                <span>Platform Vision</span>
                <span className="font-serif-italic block mt-1.5 text-accent-blue dark:text-white">
                  — & Supporting Tech
                </span>
              </h2>
            </Reveal>
            <Reveal delay={200}>
              <p className="mt-4 text-sm text-text-secondary max-w-lg mx-auto leading-relaxed">
                Our biological outcomes are backed by proprietary compute clusters, AI algorithms, and quantum solvers.
              </p>
            </Reveal>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Neural Folding AI",
                body: "Deep neural networks trained specifically on unexpressed chromosomal loops to resolve folded tertiary models and structural binding receptors.",
              },
              {
                title: "Quantum Chem Solver",
                body: "Sub-angstrom quantum molecular simulations analyzing charge vectors and free energy values without laboratory backlogs.",
              },
              {
                title: "High-Throughput Clusters",
                body: "Proprietary cloud GPU arrays and automation pipelines processing trillions of target structures simultaneously.",
              },
            ].map((vision, idx) => (
              <div key={idx} className="relative">
                <div className={`absolute -bottom-2 -right-2 h-full w-full rounded-3xl -z-10 transition-all ${isDark ? "bg-[#181a1d] border border-border-subtle" : "bg-[#f4f0e6] border border-slate-200"
                  }`} />
                <Reveal delay={idx * 100}>
                  <div className={`border rounded-3xl p-6 md:p-8 flex flex-col justify-between min-h-[200px] transition-all hover:-translate-y-0.5 duration-300 ${isDark
                    ? "border-border-subtle bg-bg-raised hover:border-accent-blue shadow-md shadow-black/25"
                    : "border-slate-200 bg-white hover:border-accent-blue shadow-md shadow-slate-100/50"
                    }`}>
                    <div>
                      <h4 className="text-lg font-serif-display font-bold mb-3">
                        {vision.title}
                      </h4>
                      <p className="text-xs text-text-secondary leading-relaxed">
                        {vision.body}
                      </p>
                    </div>
                  </div>
                </Reveal>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Act 6: Conversion / Closing CTA (Contact Page Copy & Visual Formats) */}
      <section className="relative z-10 py-28 bg-[#0a0b0d] text-white overflow-hidden border-t border-border-subtle/25">
        <GenomeAtlasHero isDark={true} />

        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
          <Reveal>
            {/* Title styled EXACTLY like the Contact page main heading */}
            <h2 className="font-semibold leading-[1.1] text-bone tracking-tight mb-6 text-3xl md:text-5xl">
              <span>Your Goals, Our Commitment</span>
              <span className="font-serif-italic block mt-3 text-white">
                — Let&rsquo;s Build Together.
              </span>
            </h2>
          </Reveal>
          <Reveal delay={120}>
            {/* Description matching the contact page description */}
            <p className="text-slate-400 text-sm md:text-base mb-10 max-w-xl mx-auto leading-relaxed">
              Tell us what you&rsquo;re building and we&rsquo;ll help you ship it.
              Our team replies to every message within one business day.
            </p>
          </Reveal>

          <Reveal delay={240}>
            <div className="flex flex-wrap justify-center gap-4">
              <button
                onClick={() => contactModal.open()}
                className="px-8 py-3.5 rounded-full bg-white hover:bg-zinc-100 text-black font-bold text-xs font-semibold uppercase tracking-wider transition hover:scale-105 active:scale-95 shadow-md"
              >
                Get in touch
              </button>
              <Link
                to="/contact"
                className="px-8 py-3.5 rounded-full border border-white/20 bg-white/5 hover:bg-white/10 text-white text-xs font-semibold uppercase tracking-wider transition hover:scale-105 active:scale-95"
              >
                Inquire Online
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

    </div>
  );
}
