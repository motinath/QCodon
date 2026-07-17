import { useState, useEffect, useRef } from "react";
import PageShell from "../_PageShell";
import { useTheme } from "@/components/shared/ThemeProvider";
import { Reveal } from "@/components/shared/Reveal";
import { 
  Award, 
  Activity, 
  Cpu, 
  Users, 
  BookOpen, 
  Globe, 
  ChevronLeft, 
  ChevronRight,
  ShieldAlert,
  Zap,
  FileCheck
} from "lucide-react";
import { MolecularBackground } from "./components/MolecularBackground";
import { DiagnosticWaveform } from "./components/DiagnosticWaveform";

export default function About() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  // Slideshow State
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    { url: "/display_cell_structure.png", alt: "Fluorescent Cell Imaging" },
    { url: "/display_quantum_docking.png", alt: "Quantum Molecular Docking" },
    { url: "/timeline_ai.png", alt: "AI Protein Structure Predictions" },
    { url: "/timeline_genesis.png", alt: "DNA Structure & Synthesis Mapping" },
  ];

  // Auto-slide slideshow
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5500);
    return () => clearInterval(timer);
  }, [slides.length]);

  // Challenge Scanner State
  const [activeChallenge, setActiveChallenge] = useState(0);

  // Orbit state for convergence hub
  const [activeOrbit, setActiveOrbit] = useState<number | null>(null);

  // HUD coordinate locking animation state
  const [hudMatch, setHudMatch] = useState(88.4);
  useEffect(() => {
    const timer = setInterval(() => {
      setHudMatch((prev) => {
        const delta = (Math.random() - 0.5) * 1.5;
        const next = prev + delta;
        return parseFloat(Math.min(Math.max(82, next), 99.8).toFixed(1));
      });
    }, 900);
    return () => clearInterval(timer);
  }, []);

  const challenges = [
    {
      title: "Pipeline Exhaustion",
      short: "Discovery pipelines running dry",
      desc: "Drug discovery pipelines are almost running dry, creating an industry-wide block on new breakthrough molecular designs.",
      metric: "Pipeline Yield",
      val: "-42% Decline",
      status: "CRITICAL LIMITS",
      color: "border-rose-500/25 bg-rose-500/5 shadow-rose-500/5",
      dot: "bg-rose-500",
      tag: "Drought",
    },
    {
      title: "Low Differentiation",
      short: "Generics & Reformulations focus",
      desc: "Much of the industry's 'innovation' is limited to generics and reformulations of existing drugs, leaving substantial room for genuinely differentiated science.",
      metric: "Genuine Novelty",
      val: "Low (Generics-Heavy)",
      status: "SYSTEM INERTIA",
      color: "border-amber-500/25 bg-amber-500/5 shadow-amber-500/5",
      dot: "bg-amber-500",
      tag: "Incremental",
    },
    {
      title: "Siloed Operations",
      short: "Independent operational teams",
      desc: "Discovery teams operate independently from regulatory and manufacturing teams, causing severe friction during translation phases.",
      metric: "Translation Lag",
      val: "+14 Months Delay",
      status: "INEFFICIENT SEGMENTS",
      color: "border-blue-500/25 bg-blue-500/5 shadow-blue-500/5",
      dot: "bg-blue-500",
      tag: "Siloed",
    },
    {
      title: "Trapped Knowledge",
      short: "Biological data remain trapped",
      desc: "Biological data and best practices remain trapped in disconnected systems, slowing research collaborations and workflow transfers.",
      metric: "Data Accessibility",
      val: "Siloed & Fragmented",
      status: "DATA ACCESS BLOCKED",
      color: "border-purple-500/25 bg-purple-500/5 shadow-purple-500/5",
      dot: "bg-purple-500",
      tag: "Silos",
    },
    {
      title: "Delayed Compliance",
      short: "Late regulatory planning",
      desc: "Regulatory planning often starts too late and without adequate knowledge of components and processes.",
      metric: "Approval Pathway",
      val: "High-Risk Strategy",
      status: "COMPLIANCE PENALTY",
      color: "border-cyan-500/25 bg-cyan-500/5 shadow-cyan-500/5",
      dot: "bg-cyan-500",
      tag: "Belated",
    },
    {
      title: "Lost Continuity",
      short: "Lost connection to market",
      desc: "Connection is often lost between research, development, and commercialisation.",
      metric: "Commercial Success",
      val: "Reduced Success %",
      status: "HIGH TRANSITION RISK",
      color: "border-slate-500/25 bg-slate-500/5 shadow-slate-500/5",
      dot: "bg-slate-500",
      tag: "Fragmented",
    },
  ];

  return (
    <PageShell className="pb-24 relative overflow-hidden" spotlight="from-accent-blue/15 via-accent-purple/5 to-transparent">
      
      {/* CSS Keyframe Animation Injections for Advanced Premium Layouts */}
      <style>{`
        @keyframes dash {
          to {
            stroke-dashoffset: -20;
          }
        }
        @keyframes scanline {
          0% {
            top: 0%;
          }
          50% {
            top: 100%;
          }
          100% {
            top: 0%;
          }
        }
        @keyframes orbitpulse {
          0%, 100% { transform: scale(1); opacity: 0.25; }
          50% { transform: scale(1.04); opacity: 0.45; }
        }
        @keyframes move1 {
          0% { cx: 50; cy: 14; opacity: 0; }
          8% { opacity: 1; }
          90% { opacity: 1; }
          100% { cx: 50; cy: 40; opacity: 0; }
        }
        @keyframes move2 {
          0% { cx: 26; cy: 74; opacity: 0; }
          8% { opacity: 1; }
          90% { opacity: 1; }
          100% { cx: 42; cy: 58; opacity: 0; }
        }
        @keyframes move3 {
          0% { cx: 74; cy: 74; opacity: 0; }
          8% { opacity: 1; }
          90% { opacity: 1; }
          100% { cx: 58; cy: 58; opacity: 0; }
        }
        .animate-dashflow {
          animation: dash 1.5s linear infinite;
        }
        .animate-scanline-sweep {
          animation: scanline 6s ease-in-out infinite;
        }
        .animate-orbitpulse {
          animation: orbitpulse 4s ease-in-out infinite;
        }
        .animate-packet1 {
          animation: move1 3s linear infinite;
        }
        .animate-packet2 {
          animation: move2 3s linear infinite;
        }
        .animate-packet3 {
          animation: move3 3s linear infinite;
        }
        .bg-dot-grid {
          background-size: 16px 16px;
          background-image: radial-gradient(circle, rgba(255,255,255,0.025) 1px, transparent 1px);
        }
      `}</style>

      {/* Background glowing ambient orbs */}
      <div className="absolute top-[-5%] left-[-10%] w-[45vw] h-[45vw] rounded-full bg-gradient-to-br from-accent-blue/12 via-accent-purple/6 to-transparent blur-[120px] pointer-events-none z-0 animate-pulse" style={{ animationDuration: '9s' }} />
      <div className="absolute top-[35%] right-[-10%] w-[40vw] h-[40vw] rounded-full bg-gradient-to-tr from-accent-emerald/10 via-accent-blue/5 to-transparent blur-[120px] pointer-events-none z-0 animate-pulse" style={{ animationDuration: '12s' }} />

      {/* Interactive molecular network background - matches dynamically on dark/light mode */}
      <MolecularBackground isDark={isDark} />

      <div className="relative z-10 space-y-28">
        
        {/* ------------------ DIVISION 1: VISION HERO & SLIDESHOW ------------------ */}
        <section className="max-w-6xl mx-auto px-6 pt-4">
          <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,420px),1fr))] gap-12 items-center">
            
            {/* Left Column: Vision & Mission Narrative */}
            <div className="lg:col-span-7 space-y-6">
              <Reveal>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-blue/10 text-accent-blue text-xs font-semibold uppercase tracking-wider">
                  <Zap className="h-3 w-3 animate-pulse" />
                  First-Mover · Amaravati Quantum Valley
                </div>
              </Reveal>

              <Reveal delay={100}>
                <h1 className="font-serif-display text-[clamp(2rem,5vw,3.75rem)] leading-[1.08] text-text-primary tracking-tight">
                  powering the <br />
                  <span className="bg-gradient-to-r from-accent-blue via-accent-purple to-accent-emerald bg-clip-text text-transparent">
                    next-generation bioeconomy
                  </span>
                </h1>
              </Reveal>

              <Reveal delay={200}>
                <p className="text-[clamp(0.8125rem,1.25vw,1rem)] text-text-secondary leading-relaxed font-medium">
                  As a first life sciences mover in the Amaravati Quantum Valley, Quantum Codon brings together biological innovation, computational intelligence, and compliance management in a single-window solution, eliminating fragmentation across the biotech value chain.
                </p>
              </Reveal>

              <div className="border-t border-border-subtle/40 pt-6 space-y-4">
                <Reveal delay={300}>
                  <p className="text-xs md:text-sm text-text-secondary leading-relaxed font-medium">
                    Biotechnology innovation remains fragmented. Drug discovery teams work in one environment, bioinformatics analyses are conducted in another, manufacturing development is outsourced elsewhere, and regulatory compliance often becomes an afterthought. This fragmentation increases costs, extends development timelines, creates data silos, and introduces execution risk at every stage of the product lifecycle.
                  </p>
                </Reveal>

                <Reveal delay={350}>
                  <div className="border-l-2 border-accent-purple pl-4 py-1.5 bg-bg-raised/20 rounded-r-xl">
                    <p className="text-xs md:text-sm font-serif-italic font-bold text-text-primary">
                      Quantum Codon is changing that status quo.
                    </p>
                  </div>
                </Reveal>

                <Reveal delay={400}>
                  <p className="text-xs md:text-sm text-text-secondary leading-relaxed font-medium">
                    As a first mover in the Amaravati Quantum Valley, Quantum Codon brings together biological knowledge, computational intelligence, and compliance management into a single integrated platform, into a single operating framework. From drug discovery and bioinformatics to manufacturing, analytics, regulatory approvals, and workforce development, we help accelerate innovation while reducing complexity, cost, and delivery risk.
                  </p>
                </Reveal>
              </div>
            </div>

            {/* Right Column: Premium Visual Slideshow */}
            <div className="lg:col-span-5 relative">
              <Reveal delay={300}>
                <div className="relative rounded-3xl border border-border-subtle bg-bg-raised/40 backdrop-blur-md p-4 shadow-2xl overflow-hidden group">
                  <div className="absolute inset-0 bg-gradient-to-br from-accent-blue/5 via-transparent to-accent-emerald/5 pointer-events-none" />

                  {/* Slider Screen */}
                  <div className="relative aspect-square rounded-2xl overflow-hidden bg-zinc-950 border border-border-subtle/30 shadow-inner flex items-center justify-center">
                    <div
                      className="relative w-full h-full flex transition-transform duration-700 ease-in-out"
                      style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                    >
                      {slides.map((slide, idx) => (
                        <div key={idx} className="w-full h-full shrink-0 relative">
                          <img
                            src={slide.url}
                            alt={slide.alt}
                            loading="lazy"
                            decoding="async"
                            className="w-full h-full object-cover opacity-85 transition-transform duration-10000 group-hover:scale-105"
                          />
                          {/* Slide Description Banner */}
                          <div className="absolute bottom-4 left-4 right-4 bg-black/75 backdrop-blur-sm border border-white/10 px-4 py-2.5 rounded-xl text-[10px] text-white font-semibold flex justify-between items-center select-none font-mono tracking-wider z-20">
                            <span>{slide.alt.toUpperCase()}</span>
                            <span className="text-accent-blue font-bold">
                              {idx + 1} / {slides.length}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Manual Slideshow Controls */}
                    <button
                      onClick={() => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)}
                      className="absolute left-3 top-1/2 -translate-y-1/2 h-9 w-9 rounded-full bg-black/60 backdrop-blur-xs border border-white/10 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300 hover:bg-black/90 cursor-pointer z-20"
                      aria-label="Previous Slide"
                    >
                      <ChevronLeft className="h-5 w-5" />
                    </button>
                    <button
                      onClick={() => setCurrentSlide((prev) => (prev + 1) % slides.length)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 h-9 w-9 rounded-full bg-black/60 backdrop-blur-xs border border-white/10 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300 hover:bg-black/90 cursor-pointer z-20"
                      aria-label="Next Slide"
                    >
                      <ChevronRight className="h-5 w-5" />
                    </button>
                  </div>

                  {/* Dot Indicators */}
                  <div className="mt-4 flex justify-center gap-1.5">
                    {slides.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => setCurrentSlide(idx)}
                        className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                          currentSlide === idx
                            ? "w-5 bg-accent-blue"
                            : "w-1.5 bg-black/10 dark:bg-white/15 hover:bg-black/25"
                        }`}
                        aria-label={`Go to slide ${idx + 1}`}
                      />
                    ))}
                  </div>
                </div>
              </Reveal>
            </div>

          </div>
        </section>

        {/* ------------------ DIVISION 2: INTERACTIVE CHALLENGE SCANNER ------------------ */}
        <section className="bg-bg-raised/20 border-y border-border-subtle/50 py-20 relative overflow-hidden">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
              <Reveal>
                <p className="text-[10px] tracking-[0.35em] text-accent-emerald uppercase font-semibold">
                  The Ecosystem Friction
                </p>
              </Reveal>
              <Reveal delay={100}>
                <h2 className="font-serif-display text-[clamp(1.75rem,3vw,2.5rem)] text-text-primary mt-1">
                  Why Quantum Codon
                </h2>
              </Reveal>
              <Reveal delay={200}>
                <p className="text-xs md:text-sm text-text-secondary font-medium">
                  Today’s biotech innovators operate in a fragmented ecosystem that stunts scientific translation:
                </p>
              </Reveal>
            </div>

            <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,280px),1fr))] gap-8 items-stretch">
              
              {/* Left Column: Interactive Friction List */}
              <div className="lg:col-span-7 flex flex-col gap-2.5">
                {challenges.map((item, idx) => {
                  const isActive = idx === activeChallenge;
                  return (
                    <button
                      key={idx}
                      onClick={() => setActiveChallenge(idx)}
                      onMouseEnter={() => setActiveChallenge(idx)}
                      className={`w-full py-3.5 px-5 rounded-2xl border text-left transition-all duration-300 flex justify-between items-center group relative cursor-pointer ${
                        isActive 
                          ? "border-accent-purple/40 bg-accent-purple/5 shadow-lg shadow-accent-purple/5 translate-x-1" 
                          : "border-border-subtle/60 hover:border-text-secondary/35 bg-bg-raised/40 hover:bg-bg-raised"
                      }`}
                    >
                      {isActive && (
                        <div className="absolute left-0 top-0 bottom-0 w-1 bg-accent-purple rounded-l-2xl" />
                      )}
                      <div className="flex items-center gap-4 min-w-0">
                        <div className={`h-7 w-7 rounded-lg border flex items-center justify-center text-xs font-mono font-bold transition-colors ${
                          isActive ? "bg-accent-purple text-white border-accent-purple" : "bg-bg-raised text-text-secondary border-border-subtle/50"
                        }`}>
                          0{idx + 1}
                        </div>
                        <div className="min-w-0">
                          <p className={`text-xs font-semibold transition-colors leading-tight ${isActive ? "text-text-primary" : "text-text-secondary"}`}>
                            {item.title}
                          </p>
                          <p className="text-[10px] text-text-tertiary truncate mt-0.5 font-medium">
                            {item.short}
                          </p>
                        </div>
                      </div>
                      <ChevronRight className={`h-4 w-4 shrink-0 transition-transform ${
                        isActive ? "text-accent-purple translate-x-1" : "text-text-tertiary/60 group-hover:text-text-secondary"
                      }`} />
                    </button>
                  );
                })}
              </div>

              {/* Right Column: Real-Time Diagnostic Dashboard Screen */}
              <div className="lg:col-span-5 relative flex flex-col">
                <div className="relative flex-1 rounded-3xl border border-border-subtle bg-zinc-950 p-7 flex flex-col justify-between overflow-hidden shadow-2xl">
                  {/* Dashboard Scan Telemetry Animation */}
                  <div className="absolute inset-0 bg-dot-grid opacity-[0.25] pointer-events-none" />
                  <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-accent-purple/35 animate-scanline-sweep z-10 pointer-events-none" />

                  {/* Screen Header */}
                  <div className="flex justify-between items-center pb-4 border-b border-border-subtle/10 font-mono text-[9px] text-text-tertiary select-none z-15">
                    <span className="flex items-center gap-1.5 uppercase font-bold text-accent-purple">
                      <ShieldAlert className="w-3.5 h-3.5" />
                      Diagnostic Monitor
                    </span>
                    <span className="px-2 py-0.5 rounded bg-rose-500/10 text-rose-400 border border-rose-500/20 font-bold tracking-wider">
                      {challenges[activeChallenge].status}
                    </span>
                  </div>

                  {/* Diagnostic Details */}
                  <div className="my-5 space-y-4 flex-1 flex flex-col justify-center z-15">
                    <div className="space-y-1">
                      <h4 className="text-lg font-bold text-white font-sans tracking-tight">
                        {challenges[activeChallenge].title}
                      </h4>
                      <p className="text-[11px] text-zinc-400 leading-relaxed">
                        {challenges[activeChallenge].desc}
                      </p>
                    </div>

                    {/* Unified Telemetry Panel: side-by-side metric & waveform */}
                    <div className="grid grid-cols-12 gap-4 items-center bg-black/45 rounded-2xl border border-border-subtle/10 p-4">
                      {/* Left: Large Impact Metric */}
                      <div className="col-span-5 space-y-0.5">
                        <span className="text-[7px] font-mono text-zinc-500 uppercase tracking-widest block">Analysis</span>
                        <span className="text-sm font-bold text-rose-400 font-mono block leading-none truncate">
                          {challenges[activeChallenge].val}
                        </span>
                        <span className="text-[7px] text-zinc-400 truncate block font-semibold uppercase tracking-wider">
                          {challenges[activeChallenge].metric}
                        </span>
                      </div>

                      {/* Right: Borderless Waveform */}
                      <div className="col-span-7 h-[40px] relative">
                        <DiagnosticWaveform status={challenges[activeChallenge].status} />
                      </div>
                    </div>

                    {/* Progress Indicator */}
                    <div className="space-y-1.5 pt-1">
                      <div className="w-full h-1 bg-zinc-800 rounded-full overflow-hidden relative">
                        <div className="absolute inset-y-0 left-0 bg-gradient-to-r from-rose-500 to-accent-purple rounded-full animate-pulse-glow" style={{ width: "75%" }} />
                      </div>
                    </div>
                  </div>

                  {/* Screen Footer Status Row */}
                  <div className="pt-4 border-t border-border-subtle/10 flex justify-between items-center font-mono text-[9px] text-zinc-500 z-15">
                    <span>SYS_REF: {challenges[activeChallenge].tag.toUpperCase()}</span>
                    <span>ALIGN_MATCH: {hudMatch}%</span>
                  </div>
                </div>
              </div>

            </div>

            <p className="text-center text-xs text-text-secondary italic font-medium pt-8 mt-4 border-t border-border-subtle/20 max-w-3xl mx-auto">
              ✦ The innovation drought and fragmentation increase development costs, delay timelines, and reduce the probability of success.
            </p>
          </div>
        </section>

        {/* ------------------ DIVISION 3: THE SOLVER ENGINE (CONVERGENCE) ------------------ */}
        <section className="max-w-6xl mx-auto px-6">
          <div className="relative rounded-3xl border border-accent-blue/20 bg-gradient-to-br from-accent-blue/10 via-accent-purple/5 to-transparent p-8 md:p-12 shadow-2xl overflow-hidden group">
            <div className="absolute inset-0 bg-grid-pattern opacity-[0.02] pointer-events-none" />

            <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,340px),1fr))] gap-10 items-center relative z-10">
              
              {/* Left Column: Solution Detail */}
              <div className="lg:col-span-7 space-y-6">
                <Reveal>
                  <span className="px-2.5 py-0.5 rounded-full text-[9px] font-mono font-bold bg-accent-blue/15 text-accent-blue border border-accent-blue/20 uppercase tracking-widest">
                    The Solver Engine
                  </span>
                </Reveal>
                <Reveal delay={100}>
                  <h3 className="font-serif-display text-[clamp(1.75rem,3vw,2.5rem)] text-text-primary leading-tight">
                    Quantum Codon Solves This Problem
                  </h3>
                </Reveal>
                <Reveal delay={200}>
                  <p className="text-sm md:text-base text-text-secondary leading-relaxed font-medium">
                    We offer a brand new drug discovery platform and connect critical functions required to bring biotechnology products from concept to commercialisation. By integrating biology, computation, and compliance into a unified operating model, we create continuity across distinct stages of development.
                  </p>
                </Reveal>
              </div>

              {/* Right Column: Visual Operating Framework Convergence Display */}
              <div className="lg:col-span-5 flex justify-center">
                <div className="w-full max-w-[280px] aspect-square rounded-full border border-border-subtle/30 bg-black/25 backdrop-blur-md relative flex items-center justify-center p-4">
                  
                  {/* Orbit Pulsing Ring HALO */}
                  <div className="absolute inset-0 rounded-full border border-accent-purple/20 animate-orbitpulse scale-[1.12]" />

                  {/* Glowing Merged Center Node */}
                  <div className="h-20 w-20 rounded-full bg-gradient-to-br from-accent-blue via-accent-purple to-accent-emerald flex items-center justify-center text-center shadow-lg shadow-accent-purple/40 animate-pulse relative z-20 transition-all duration-300">
                    <span className="font-mono text-[9px] font-bold text-white uppercase tracking-wider leading-none select-none">
                      {activeOrbit === 0 
                        ? "Biological\nData" 
                        : activeOrbit === 1 
                        ? "Quantum\nCompute" 
                        : activeOrbit === 2 
                        ? "Compliance\nIP" 
                        : "Unified\nFramework"}
                    </span>
                  </div>

                  {/* Orbit 1: Biology (uses responsive theme classes) */}
                  <div 
                    onMouseEnter={() => setActiveOrbit(0)}
                    onMouseLeave={() => setActiveOrbit(null)}
                    className="absolute top-4 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center z-10 select-none cursor-pointer group"
                  >
                    <div className="h-10 w-10 rounded-full bg-accent-blue/10 border border-accent-blue/35 flex items-center justify-center text-accent-blue shadow-md shadow-accent-blue/5 transition-transform duration-300 group-hover:scale-110">
                      <Activity className="h-4.5 w-4.5" />
                    </div>
                    <span className="font-mono text-[8px] font-bold uppercase text-accent-blue mt-1 transition-all duration-300 group-hover:scale-105">Biology</span>
                  </div>

                  {/* Orbit 2: Computation (uses responsive theme classes) */}
                  <div 
                    onMouseEnter={() => setActiveOrbit(1)}
                    onMouseLeave={() => setActiveOrbit(null)}
                    className="absolute bottom-4 left-6 translate-y-1/2 flex flex-col items-center z-10 select-none cursor-pointer group"
                  >
                    <div className="h-10 w-10 rounded-full bg-accent-emerald/10 border border-accent-emerald/35 flex items-center justify-center text-accent-emerald shadow-md shadow-emerald-500/5 transition-transform duration-300 group-hover:scale-110">
                      <Cpu className="h-4.5 w-4.5" />
                    </div>
                    <span className="font-mono text-[8px] font-bold uppercase text-accent-emerald mt-1 transition-all duration-300 group-hover:scale-105">Computation</span>
                  </div>

                  {/* Orbit 3: Compliance (uses responsive theme classes) */}
                  <div 
                    onMouseEnter={() => setActiveOrbit(2)}
                    onMouseLeave={() => setActiveOrbit(null)}
                    className="absolute bottom-4 right-6 translate-y-1/2 flex flex-col items-center z-10 select-none cursor-pointer group"
                  >
                    <div className="h-10 w-10 rounded-full bg-accent-purple/10 border border-accent-purple/35 flex items-center justify-center text-accent-purple shadow-md shadow-accent-purple/5 transition-transform duration-300 group-hover:scale-110">
                      <Award className="h-4.5 w-4.5" />
                    </div>
                    <span className="font-mono text-[8px] font-bold uppercase text-accent-purple mt-1 transition-all duration-300 group-hover:scale-105">Compliance</span>
                  </div>

                  {/* Connection Orbits & Dashed Flow Lines SVG */}
                  <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100">
                    {/* Biology to Center */}
                    <line x1="50" y1="14" x2="50" y2="40" stroke="url(#blueGrad)" strokeWidth="1.25" strokeDasharray="3 2" className="animate-dashflow" />
                    {/* Computation to Center */}
                    <line x1="26" y1="74" x2="42" y2="58" stroke="url(#emeraldGrad)" strokeWidth="1.25" strokeDasharray="3 2" className="animate-dashflow" />
                    {/* Compliance to Center */}
                    <line x1="74" y1="74" x2="58" y2="58" stroke="url(#purpleGrad)" strokeWidth="1.25" strokeDasharray="3 2" className="animate-dashflow" />
                    
                    {/* Flying Data Packets circles */}
                    <circle r="1.5" fill="#60a5fa" className="animate-packet1" />
                    <circle r="1.5" fill="#34d399" className="animate-packet2" />
                    <circle r="1.5" fill="#c084fc" className="animate-packet3" />

                    {/* Orbit Ring Background */}
                    <circle cx="50" cy="50" r="38" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-zinc-800/40" strokeDasharray="2 3" />
                    
                    <defs>
                      <linearGradient id="blueGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="#3b82f6" />
                        <stop offset="100%" stopColor="#6366f1" />
                      </linearGradient>
                      <linearGradient id="emeraldGrad" x1="0%" y1="100%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#10b981" />
                        <stop offset="100%" stopColor="#6366f1" />
                      </linearGradient>
                      <linearGradient id="purpleGrad" x1="100%" y1="100%" x2="0%" y2="0%">
                        <stop offset="0%" stopColor="#8b5cf6" />
                        <stop offset="100%" stopColor="#6366f1" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ------------------ DIVISION 4: WHAT MAKES US DIFFERENT (MATRIX GRID) ------------------ */}
        <section className="max-w-6xl mx-auto px-6 py-6 space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <Reveal>
              <p className="text-[10px] tracking-[0.35em] text-accent-purple uppercase font-semibold">
                Key Differentiators
              </p>
            </Reveal>
            <Reveal delay={100}>
              <h2 className="font-serif-display text-[clamp(1.75rem,3vw,2.5rem)] text-text-primary mt-1">
                What Makes Us Different
              </h2>
            </Reveal>
            <Reveal delay={200}>
              <p className="text-xs md:text-sm text-text-secondary font-medium">
                We eliminate traditional fragmentation, delivering support from initial discovery through regulatory approval.
              </p>
            </Reveal>
          </div>

          <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,180px),1fr))] gap-5 items-stretch">
            {[
              {
                title: "Brand New Pipeline",
                desc: "A brand new drug discovery pipeline built directly on genomic sequence mapping.",
                icon: Activity,
                color: "border-accent-blue/15 hover:border-accent-blue/45 bg-accent-blue/5 hover:bg-accent-blue/10 shadow-accent-blue/5",
                metric: "01",
                pill: "Bio-Mapping",
                iconColor: "text-accent-blue"
              },
              {
                title: "Advanced Computation",
                desc: "Advanced computational tools accelerate discovery, analysis, and optimisation.",
                icon: Cpu,
                color: "border-accent-purple/15 hover:border-accent-purple/45 bg-accent-purple/5 hover:bg-accent-purple/10 shadow-accent-purple/5",
                metric: "02",
                pill: "Accelerated",
                iconColor: "text-accent-purple"
              },
              {
                title: "Connected Ecosystem",
                desc: "Scientific, manufacturing, and regulatory workflows operate within a connected ecosystem.",
                icon: Globe,
                color: "border-accent-emerald/15 hover:border-accent-emerald/45 bg-accent-emerald/5 hover:bg-accent-emerald/10 shadow-accent-emerald/5",
                metric: "03",
                pill: "Unified",
                iconColor: "text-accent-emerald"
              },
              {
                title: "Built-In Readiness",
                desc: "Regulatory readiness is built into every stage rather than treated as a final hurdle.",
                icon: FileCheck,
                color: "border-amber-500/15 hover:border-amber-500/45 bg-amber-500/5 hover:bg-amber-500/10 shadow-amber-500/5",
                metric: "04",
                pill: "Risk-Reduced",
                iconColor: "text-amber-600 dark:text-amber-400"
              },
              {
                title: "End-to-End Support",
                desc: "Support from early research through commercialisation and workforce development.",
                icon: Users,
                color: "border-rose-500/15 hover:border-rose-500/45 bg-rose-500/5 hover:bg-rose-500/10 shadow-rose-500/5",
                metric: "05",
                pill: "Life-Cycle",
                iconColor: "text-rose-600 dark:text-rose-400"
              },
            ].map((diff, idx) => {
              const Icon = diff.icon;
              return (
                <div
                  key={idx}
                  className={`p-6 rounded-2xl border transition-all duration-300 flex flex-col justify-between hover:scale-[1.02] shadow-sm hover:shadow-md ${diff.color} ${idx === 4 ? "md:col-span-2 lg:col-span-1" : ""}`}
                >
                  <div>
                    <div className="flex justify-between items-start mb-4">
                      <div className="flex-shrink-0 h-8 w-8 rounded-lg bg-white dark:bg-slate-900 border border-black/5 dark:border-white/10 flex items-center justify-center shadow-sm">
                        <Icon className={`h-4 w-4 ${diff.iconColor}`} />
                      </div>
                      <span className="text-[10px] font-mono font-bold text-text-tertiary">
                        {diff.metric}
                      </span>
                    </div>
                    
                    <h4 className="font-semibold text-xs leading-tight text-foreground tracking-wide">
                      {diff.title}
                    </h4>
                    <p className="text-[11px] text-muted-foreground mt-2 leading-relaxed font-medium">
                      {diff.desc}
                    </p>
                  </div>
                  <div className="mt-5 pt-3 border-t border-black/5 dark:border-white/5 flex justify-between items-center text-[8px] font-mono text-muted-foreground">
                    <span>CAPABILITY</span>
                    <span className="px-1.5 py-0.5 rounded bg-white dark:bg-slate-900 border border-black/5 dark:border-white/10 font-bold uppercase text-foreground">
                      {diff.pill}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

      </div>
    </PageShell>
  );
}
