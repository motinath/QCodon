import { useEffect, useRef } from 'react'
import heroVideo from '@/assets/hero.mp4'
import {
  QcAbout,
  QcPipeline,
  QcBlogs,
} from '@/components/QuantumCodon'

export default function Landing() {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.5
    }
  }, [])

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
          style={{ filter: 'saturate(1.15) brightness(1.05)' }}
        />
        {/* Subtle overlay so hero text stays readable while the DNA animation shows through */}
        <div className="absolute inset-0 bg-white/20 dark:bg-black/40" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_45%,var(--background)_100%)]" />

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <p className="text-[11px] tracking-[0.35em] text-accent-blue dark:text-accent-blue font-semibold uppercase mb-8">
            Quantum Codon · Deep Codon Initiative
          </p>
          <h1 className="font-serif-display text-5xl md:text-7xl leading-[1.05] text-foreground">
            The genome holds a secret <em className="italic text-accent-purple dark:text-accent-purple">98%</em>.
            <br />We are decoding it.
          </h1>
          <p className="mt-8 max-w-xl mx-auto text-base md:text-lg text-slate-800 dark:text-slate-200 font-medium leading-relaxed">
            A scientific platform unlocking the dark genome — non-expressing DNA and non-translating RNA — to design first-in-class therapeutic molecules.
          </p>

          {/* Removed links and contact info pill as requested */}
        </div>
      </section>

      {/* Content Sections */}
      <QcAbout />
      <QcPipeline />
      <QcBlogs />
    </div>
  )
}