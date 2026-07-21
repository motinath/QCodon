import { useEffect, useRef, useState } from "react";
import { Link } from "@/lib/router-compat";
import heroVideo from "./hero.mp4";
import { QcLandingContent } from "./components/QcLandingContent";
import { ArrowRight, Dna, Volume2, VolumeX } from "lucide-react";

export default function Landing() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = useState(true);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.75;
    }
  }, []);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <div className="flex flex-col w-full page-3d-transition">
      {/* Hero Section */}
      <section className="relative pt-10 pb-16 md:pt-16 md:pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden section-base">
        {/* Ambient background glow */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[480px] bg-gradient-to-tr from-accent-blue/10 via-accent-purple/10 to-accent-emerald/10 blur-3xl -z-10 rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-14 items-center">
            
            {/* Left Content Column */}
            <div className="lg:col-span-7 text-left space-y-6">
              {/* Category Pill */}
              <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-accent-blue/10 dark:bg-accent-blue/20 border border-accent-blue/20 text-accent-blue font-medium text-xs tracking-wide">
                <Dna className="w-4 h-4 text-accent-blue" />
                <span>Quantum Codon Platform</span>
              </div>

              {/* Main Headline */}
              <h1 className="font-serif-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl leading-[1.08] text-foreground font-bold tracking-tight">
                The genome holds a secret{" "}
                <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-accent-purple via-accent-blue to-accent-emerald">
                  98%
                </span>
                .<br />
                We are decoding it.
              </h1>

              {/* Subtitle / Description */}
              <p className="text-base sm:text-lg lg:text-xl text-muted-foreground font-normal leading-relaxed max-w-2xl">
                A scientific platform unlocking non-expressing DNA and non-translating RNA to design first-in-class therapeutic molecules and transform computational bioeconomy.
              </p>

              {/* Call to Action Group */}
              <div className="pt-2 flex flex-wrap items-center gap-4">
                <Link
                  to="/services/drug-discovery"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl bg-foreground text-background font-semibold text-sm shadow-xl hover:opacity-90 transition-all duration-200 group"
                >
                  <span>Explore Drug Discovery</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/research"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl bg-card border border-border/80 text-foreground font-semibold text-sm hover:bg-secondary/60 transition-all duration-200 shadow-sm"
                >
                  <span>Read Scientific Research</span>
                </Link>
              </div>

              {/* Metrics Band */}
              <div className="pt-6 border-t border-border/40 grid grid-cols-3 gap-6 max-w-lg">
                <div>
                  <p className="text-2xl sm:text-3xl font-bold font-serif-display text-foreground">98%</p>
                  <p className="text-xs text-muted-foreground font-medium mt-0.5">Untapped Dark Genome</p>
                </div>
                <div>
                  <p className="text-2xl sm:text-3xl font-bold font-serif-display text-foreground">Single</p>
                  <p className="text-xs text-muted-foreground font-medium mt-0.5">Integrated Operating System</p>
                </div>
                <div>
                  <p className="text-2xl sm:text-3xl font-bold font-serif-display text-foreground">1st</p>
                  <p className="text-xs text-muted-foreground font-medium mt-0.5">Quantum Valley Mover</p>
                </div>
              </div>
            </div>

            {/* Right Media Column: Production-Grade Video Card Frame */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full max-w-lg">
                {/* Clean video wrapper with subtle depth shadow */}
                <div className="relative rounded-3xl overflow-hidden border border-border/60 dark:border-white/10 bg-slate-950 shadow-2xl group">
                  <div className="relative w-full aspect-[4/3] sm:aspect-[16/11] overflow-hidden bg-slate-900">
                    <video
                      ref={videoRef}
                      className="w-full h-full object-cover saturate-[1.1] transition-transform duration-700 group-hover:scale-105"
                      src={heroVideo}
                      autoPlay
                      muted={isMuted}
                      loop
                      playsInline
                    />

                    {/* Subtle bottom vignette gradient for depth */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent pointer-events-none" />

                    {/* Discrete Minimal Audio Toggle Button */}
                    <button
                      onClick={toggleMute}
                      className="absolute bottom-4 right-4 p-2.5 rounded-full bg-black/60 backdrop-blur-md border border-white/15 text-white/80 hover:text-white hover:bg-black/80 transition-all duration-200"
                      title={isMuted ? "Unmute audio" : "Mute audio"}
                    >
                      {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                    </button>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Content Sections */}
      <QcLandingContent />
    </div>
  );
}
