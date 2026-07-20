import { useEffect, useRef } from "react";
import heroVideo from "./hero.mp4";
import { QcLandingContent } from "./components/QcLandingContent";

export default function Landing() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.5;
    }
  }, []);

  return (
    <div className="flex flex-col w-full page-3d-transition">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* DNA video background */}
        {/* Animated DNA / molecule strand background */}
        <video
          ref={videoRef}
          className="absolute inset-0 w-full h-full object-cover scale-110"
          src={heroVideo}
          autoPlay
          muted
          loop
          playsInline
          style={{ filter: "saturate(1.15) brightness(1.05)" }}
        />
        {/* Subtle overlay so hero text stays readable while the DNA animation shows through */}
        <div className="absolute inset-0 bg-white/20 dark:bg-black/40" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_45%,var(--background)_100%)]" />

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full bg-background/90 dark:bg-black/80 border border-accent-blue/40 shadow-xl backdrop-blur-md mb-8">
            <span className="text-xs sm:text-sm tracking-[0.18em] text-foreground dark:text-white font-bold uppercase">
              Quantum Codon — Powering the Next-Generation Bioeconomy
            </span>
          </div>
          <h1 className="font-serif-display text-5xl md:text-7xl leading-[1.05] text-foreground font-bold drop-shadow-sm">
            The genome holds a secret{" "}
            <em className="italic text-accent-purple dark:text-accent-purple">98%</em>.
            <br />
            We are decoding it.
          </h1>
          <p className="mt-8 max-w-xl mx-auto text-base md:text-lg text-slate-800 dark:text-slate-200 font-medium leading-relaxed">
            A scientific platform unlocking the dark genome — non-expressing DNA and non-translating
            RNA — to design first-in-class therapeutic molecules.
          </p>
        </div>
      </section>

      {/* Content Sections */}
      <QcLandingContent />
    </div>
  );
}
