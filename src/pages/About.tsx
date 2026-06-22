import { useState, useEffect } from 'react'
import PageShell from './_PageShell'
import { useContactModal } from '@/components/ContactModal'
import {
  Award,
  Globe,
  Activity,
  Users,
  Linkedin,
  Calendar,
  MapPin,
  ExternalLink,
  ArrowRight,
  BookOpen,
  Check,
  Cpu,
  History,
  TrendingUp,
  FlaskConical,
  Sparkles,
  Search,
  Database,
  ChevronLeft,
  ChevronRight
} from 'lucide-react'

// Sub-components / Data Types
interface Milestone {
  year: string;
  title: string;
  tag: string;
  description: string;
  image: string;
  icon: React.ComponentType<any>;
}

interface Leader {
  name: string;
  title: string;
  credential: string;
  bio: string;
  specialties: string[];
  publications: string[];
  linkedin: string;
  photo: string;
}

interface EventItem {
  id: string;
  title: string;
  date: string;
  day: string;
  monthYear: string;
  venue: string;
  location: string;
  type: 'Symposium' | 'Keynote' | 'Panel' | 'Workshop' | 'Poster';
  speaker: string;
  description: string;
  upcoming: boolean;
}

export default function About() {
  const contactModal = useContactModal()

  // Slideshow State
  const [currentSlide, setCurrentSlide] = useState(0)
  const slides = [
    { url: '/display_cell_structure.png', alt: 'Fluorescent Cell Imaging' },
    { url: '/display_quantum_docking.png', alt: 'Quantum Molecular Docking' },
    { url: '/timeline_ai.png', alt: 'AI Protein Structure Predictions' },
    { url: '/timeline_genesis.png', alt: 'DNA Structure & Synthesis Mapping' }
  ]

  // Auto-slide every 4.5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % slides.length)
    }, 4500)
    return () => clearInterval(timer)
  }, [slides.length])

  // Events Filter State
  const [eventFilter, setEventFilter] = useState<'all' | 'upcoming' | 'past'>('all')

  // Leadership Detail Modal / Expansion State
  const [expandedLeader, setExpandedLeader] = useState<string | null>(null)

  // Active Section Tracking via Intersection Observer
  const [activeSection, setActiveSection] = useState('mission')

  useEffect(() => {
    const sections = ['mission', 'story', 'leadership', 'events']
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -50% 0px', // Trigger when the section occupies the center of the screen
      threshold: 0
    }

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id)
        }
      })
    }

    const observer = new IntersectionObserver(observerCallback, observerOptions)
    sections.forEach(id => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })

    return () => {
      sections.forEach(id => {
        const el = document.getElementById(id)
        if (el) observer.unobserve(el)
      })
    }
  }, [])

  // Data Definitions
  const milestones: Milestone[] = [
    {
      year: '2011',
      title: 'Dark Genome Genesis',
      tag: 'Academic Breakthrough',
      description: 'Prof. Pawan K Dhar publishes initial proof-of-concept papers at JNU, expressing functional, stable proteins from non-expressing intergenic sequences in E. coli.',
      image: '/timeline_genesis.png',
      icon: History
    },
    {
      year: '2018',
      title: 'Founding of Quantum Codon',
      tag: 'Corporate Spin-out',
      description: 'Quantum Codon is incorporated to scale and commercialize dark genome research. A dedicated team of computational biologists and molecular biophysicists is assembled.',
      image: '/timeline_launch.png',
      icon: FlaskConical
    },
    {
      year: '2021',
      title: 'Amaravati Laboratory Launch',
      tag: 'Infrastructure Expansion',
      description: 'Opened flagship laboratories in Amaravati Quantum Valley. Integrating quantum chemistry solvers to simulate atomic docking energies for synthetically expressed peptides.',
      image: '/timeline_lab.png',
      icon: Cpu
    },
    {
      year: '2024',
      title: 'AI Structural Integration',
      tag: 'Technology Milestone',
      description: 'Seamless integration of deep learning (AlphaFold predictions) into our design pipeline. Accelerates Class I (non-expressing DNA) & Class II (non-translating RNA) candidate validation.',
      image: '/timeline_ai.png',
      icon: Sparkles
    },
    {
      year: '2026',
      title: 'Preclinical Advancements',
      tag: 'Clinical Validation',
      description: 'Preclinical validation of therapeutic candidates like tREP-18. Achieving micromolar and nanomolar efficacy profiles against antimicrobial resistant pathogens and oncology models.',
      image: '/timeline_preclinical.png',
      icon: TrendingUp
    }
  ]

  const leaders: Leader[] = [
    {
      name: 'Prof. Pawan K. Dhar',
      title: 'Chief Scientific Officer & Founder',
      credential: 'Ph.D. in Molecular Biology',
      bio: 'A pioneer with over 15 years of continuous dark genome and synthetic biology research. Former Professor and Dean of the School of Biotechnology at Jawaharlal Nehru University (JNU), New Delhi. He holds multiple patents in non-coding DNA translation.',
      specialties: ['Synthetic Genomics', 'Class I & II Design', 'Parallel Biology Systems'],
      publications: [
        'Dhar et al. (2009) "World\'s First Synthetic Intergenic Protein Expressed in E. coli"',
        'Dhar et al. (2023) "tREP-18: A tRNA-derived peptide exhibiting nanomolar anti-leishmanial efficacy"'
      ],
      linkedin: 'https://linkedin.com',
      photo: '/team_pawan_dhar.png'
    },
    {
      name: 'Dr. Kadalmani Krishnan',
      title: 'Head of Bioinformatics & Co-Founder',
      credential: 'Ph.D. in Computational Biology',
      bio: 'Senior researcher in structural biology and sequence analysis. Co-author of the landmark paper on recoding genomic elements using AI and quantum models. Specializes in sequence translation models, tRNA-derived peptide (tREP) mapping, and GPU-accelerated structural searches.',
      specialties: ['Sequence Translation Models', 'tREP Mapping', 'Structural Bioinformatics'],
      publications: [
        'Krishnan et al. (2025) "Recoding genomic elements with AI and quantum computation"',
        'Krishnan & Dhar (2024) "Computational translation parameters for non-coding sequences"'
      ],
      linkedin: 'https://linkedin.com',
      photo: '/team_kadalmani_krishnan.png'
    },
    {
      name: 'Dr. Vidya Niranjan',
      title: 'Chief Scientific Advisor',
      credential: 'Ph.D. in Biotechnology',
      bio: 'Professor and Head of Biotechnology Department. Expert in high-throughput sequencing data analysis, structural biology database models, and sequence alignment algorithms. Advisor to several national genomic initiatives.',
      specialties: ['Multi-Omics Database Integration', 'Metabolic Reconstruction', 'Structural Analysis'],
      publications: [
        'Niranjan et al. (2024) "Comparative analysis of silent elements in bacterial genomes"',
        'Niranjan & Sen (2025) "High-throughput bioinformatics tools for novel drug discovery"'
      ],
      linkedin: 'https://linkedin.com',
      photo: '/team_vidya_niranjan.png'
    },
    {
      name: 'Dr. Anita Chugh',
      title: 'Director of Biotechnology',
      credential: 'Ph.D. in Molecular Biophysics',
      bio: 'Lead investigator in synthetic gene expressions and biochemical validation assays. Oversees the wet-lab validation pipeline, synthetic cloning vectors, cell-free expression assays, and lead candidate optimizations.',
      specialties: ['Cloning Vector Synthesis', 'Cell-Free Expression Assays', 'Lead Candidate Optimization'],
      publications: [
        'Chugh et al. (2023) "In vitro stability of synthetically expressed intergenic proteins"',
        'Chugh & Dhar (2025) "Lead validation parameters for Class II therapeutic peptides"'
      ],
      linkedin: 'https://linkedin.com',
      photo: '/team_anita_chugh.png'
    }
  ]

  const events: EventItem[] = [
    {
      id: 'evt-1',
      title: 'Global Biotech Frontiers 2026',
      date: 'Oct 12, 2026',
      day: '12',
      monthYear: 'OCT 2026',
      venue: 'Boston Convention Center',
      location: 'Boston, MA',
      type: 'Keynote',
      speaker: 'Prof. Pawan K. Dhar',
      description: 'Quantum Codon will present its landmark keynote "Therapeutic Peptides from Silent Genomes: Preclinical Efficacy Analysis" outlining the nanomolar results of tREP-18.',
      upcoming: true
    },
    {
      id: 'evt-2',
      title: 'Quantum Biology Symposium 2026',
      date: 'Nov 04, 2026',
      day: '04',
      monthYear: 'NOV 2026',
      venue: 'Amaravati Convention Hall',
      location: 'Amaravati, India',
      type: 'Workshop',
      speaker: 'Dr. Kadalmani Krishnan',
      description: 'A technical workshop on "Quantum-State Docking Simulations for Non-Coding Targets", demonstrating high-throughput simulations on quantum annealing architectures.',
      upcoming: true
    },
    {
      id: 'evt-3',
      title: 'ASCO Annual Meeting 2025',
      date: 'Jun 02, 2025',
      day: '02',
      monthYear: 'JUN 2025',
      venue: 'McCormick Place',
      location: 'Chicago, IL',
      type: 'Poster',
      speaker: 'Dr. Anita Chugh',
      description: 'Unveiling preclinical poster board #240: "Targeting Non-Coding Mutations in Oncology via Synthetic Introns," showing 86% tumor growth reduction in vivo.',
      upcoming: false
    },
    {
      id: 'evt-4',
      title: 'Bio-IT World Conference & Expo 2025',
      date: 'Apr 16, 2025',
      day: '16',
      monthYear: 'APR 2025',
      venue: 'Omni Boston Hotel at the Seaport',
      location: 'Boston, MA',
      type: 'Panel',
      speaker: 'Dr. Kadalmani Krishnan',
      description: 'Participated in the plenary panel session "Scaling the Parallel Proteome: AI-Guided Structural Search in Bioinformatics", detailing dark genome screening speedups.',
      upcoming: false
    }
  ]

  const filteredEvents = events.filter(e => {
    if (eventFilter === 'upcoming') return e.upcoming
    if (eventFilter === 'past') return !e.upcoming
    return true
  })

  // Smooth Scroll function
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id)
    if (el) {
      const offset = 80 // Sticky header height offset
      const bodyRect = document.body.getBoundingClientRect().top
      const elementRect = el.getBoundingClientRect().top
      const elementPosition = elementRect - bodyRect
      const offsetPosition = elementPosition - offset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
  }

  return (
    <PageShell className="bg-[#f8fafc] dark:bg-[#090d16] !pb-0 transition-colors duration-300">
      
      {/* Title / Hero */}
      <div className="max-w-6xl mx-auto px-6 mb-8 text-center">
        <p className="text-xs tracking-[0.3em] text-accent-blue dark:text-accent-blue uppercase font-semibold">About Quantum Codon</p>
        <h1 className="font-serif-display text-4xl md:text-6xl mt-4 leading-tight">Unlocking the Genome's Hidden Moat</h1>
        <p className="mt-4 text-muted-foreground max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
          Quantum Codon is a scientific platform dedicated to exploring the dark genome—uncovering silent DNA and non-translating RNA to design novel first-in-class therapies.
        </p>
      </div>

      {/* Sticky Navigation Bar */}
      <div className="sticky top-16 z-30 bg-[#f8fafc]/90 dark:bg-[#090d16]/90 backdrop-blur-md border-y border-black/5 dark:border-white/5 py-4 mb-12 shadow-sm transition-colors duration-300">
        <div className="max-w-6xl mx-auto px-6 flex justify-center gap-4 md:gap-8">
          {[
            { id: 'mission', label: 'Our Mission' },
            { id: 'story', label: 'Our Story' },
            { id: 'leadership', label: 'Leadership' },
            { id: 'events', label: 'Events & Presence' }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => scrollToSection(tab.id)}
              className={`text-xs md:text-sm font-semibold tracking-wider transition-all duration-300 relative pb-1 cursor-pointer ${
                activeSection === tab.id
                  ? 'text-foreground font-bold'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              {tab.label}
              {activeSection === tab.id && (
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-foreground rounded-full animate-fade-in" />
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Main Content Sections */}
      <div className="max-w-6xl mx-auto px-6 space-y-28 pb-24">
        
        {/* SECTION 1: OUR MISSION */}
        <section id="mission" className="scroll-mt-32 space-y-16">
          <div className="grid lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Column: Mission Description */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-blue/10 text-accent-blue text-xs font-semibold">
                <Award className="h-3.5 w-3.5" />
                Pioneering Parallel Biology
              </div>
              <h2 className="font-serif-display text-3xl md:text-4xl leading-tight">
                We are building a parallel biology universe.
              </h2>
              <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
                Biology has historically focused on the 2% of the genome that codes for proteins. Quantum Codon was established to explore the final frontier: the remaining 98% that nature left silent. By synthetically expressing non-coding DNA and non-translating RNA, we design completely new therapeutics that do not exist in natural systems.
              </p>
              
              <blockquote className="border-l-2 border-accent-purple pl-5 py-3 italic text-foreground bg-white/45 dark:bg-white/[0.02] border-t border-r border-b border-black/5 dark:border-white/5 rounded-r-2xl pr-4 text-sm font-medium">
                "By synthetically expressing genes that nature kept silent, we are creating a completely new class of medicines to treat oncology and infectious diseases."
                <span className="block not-italic mt-2 text-xs font-semibold text-muted-foreground">— Prof. Pawan K Dhar, CSO & Founder</span>
              </blockquote>
            </div>

            {/* Right Column: Premium Image Slideshow */}
            <div className="lg:col-span-6">
              <div className="relative rounded-3xl border border-black/10 dark:border-white/10 bg-white/40 dark:bg-black/40 backdrop-blur-md p-4 shadow-xl overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-accent-blue/5 via-transparent to-accent-emerald/5 opacity-50 pointer-events-none" />
                
                {/* Main Slide Screen */}
                <div className="relative aspect-video rounded-2xl overflow-hidden bg-slate-950 border border-black/5 dark:border-white/10 shadow-inner flex items-center justify-center">
                  {/* Slider Container */}
                  <div className="relative w-full h-full flex transition-transform duration-700 ease-in-out"
                       style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
                    {slides.map((slide, idx) => (
                      <div key={slide.url} className="w-full h-full shrink-0 relative">
                        <img
                          src={slide.url}
                          alt={slide.alt}
                          className="w-full h-full object-cover opacity-90"
                        />
                        {/* Elegant slide description overlay */}
                        <div className="absolute bottom-4 left-4 right-4 bg-slate-900/80 backdrop-blur-sm border border-white/10 px-4 py-2.5 rounded-xl text-xs text-white font-semibold flex justify-between items-center select-none font-mono">
                          <span>{slide.alt.toUpperCase()}</span>
                          <span className="text-[10px] text-cyan-400 font-semibold">{idx + 1} / {slides.length}</span>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Manual Arrow Controls (visible on hover) */}
                  <button
                    onClick={() => setCurrentSlide(prev => (prev - 1 + slides.length) % slides.length)}
                    className="absolute left-3 top-1/2 -translate-y-1/2 h-9 w-9 rounded-full bg-slate-900/60 backdrop-blur-sm border border-white/10 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300 hover:bg-slate-900/90 cursor-pointer"
                    aria-label="Previous Slide"
                  >
                    <ChevronLeft className="h-5 w-5" />
                  </button>
                  
                  <button
                    onClick={() => setCurrentSlide(prev => (prev + 1) % slides.length)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 h-9 w-9 rounded-full bg-slate-900/60 backdrop-blur-sm border border-white/10 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300 hover:bg-slate-900/90 cursor-pointer"
                    aria-label="Next Slide"
                  >
                    <ChevronRight className="h-5 w-5" />
                  </button>
                </div>

                {/* Dot Indicators */}
                <div className="mt-4 flex justify-center gap-2">
                  {slides.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentSlide(idx)}
                      className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                        currentSlide === idx ? 'w-6 bg-accent-blue' : 'w-2 bg-black/10 dark:bg-white/15 hover:bg-black/25 dark:hover:bg-white/30'
                      }`}
                      aria-label={`Go to slide ${idx + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Core Pillars Section */}
          <div className="space-y-6">
            <div className="text-center">
              <p className="text-[10px] tracking-[0.35em] text-accent-emerald uppercase font-semibold">Scientific Anchors</p>
              <h3 className="font-serif-display text-2xl md:text-3xl mt-2">The four pillars of our scientific platform</h3>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  title: 'Academic Heritage',
                  desc: 'Initiated and incubated at JNU, Delhi, with continuous proof-of-concept success published in top peer-reviewed journals.',
                  color: 'border-accent-blue/15 hover:border-accent-blue/45 bg-accent-blue/5',
                  icon: Award,
                  val: '15+ Yrs'
                },
                {
                  title: 'Computational AI',
                  desc: 'Using advanced bioinformatics screening and AlphaFold structure predictions to identify and filter druggable candidates.',
                  color: 'border-accent-purple/15 hover:border-accent-purple/45 bg-accent-purple/5',
                  icon: Cpu,
                  val: '10k+ Genomes'
                },
                {
                  title: 'Quantum Valley',
                  desc: 'Anchored at Amaravati Quantum Valley lab to perform sub-atomic simulations of electrostatic molecular interactions.',
                  color: 'border-accent-emerald/15 hover:border-accent-emerald/45 bg-accent-emerald/5',
                  icon: Globe,
                  val: 'Amaravati Hub'
                },
                {
                  title: 'Clinical Translation',
                  desc: 'Translating genomic peptides into preclinical candidates targeting oncology pathways and antimicrobial resistance.',
                  color: 'border-amber-500/15 hover:border-amber-500/45 bg-amber-500/5',
                  icon: Activity,
                  val: 'Preclinical Phase'
                }
              ].map((pillar) => {
                const Icon = pillar.icon
                return (
                  <div
                    key={pillar.title}
                    className={`p-6 rounded-2xl border transition-all duration-300 flex flex-col justify-between ${pillar.color}`}
                  >
                    <div>
                      <div className="h-10 w-10 rounded-xl bg-white dark:bg-slate-900 border border-black/5 dark:border-white/10 flex items-center justify-center shadow-sm mb-4">
                        <Icon className="h-5 w-5 text-foreground" />
                      </div>
                      <h4 className="font-semibold text-sm leading-tight text-foreground">{pillar.title}</h4>
                      <p className="text-xs text-muted-foreground mt-2 leading-relaxed">{pillar.desc}</p>
                    </div>
                    <div className="mt-4 pt-3 border-t border-black/5 dark:border-white/5 flex justify-between items-center text-[10px] font-mono text-muted-foreground">
                      <span>METRIC</span>
                      <span className="font-semibold text-foreground">{pillar.val}</span>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* SECTION 2: OUR STORY (TIMELINE) */}
        <section id="story" className="scroll-mt-32 space-y-12">
          <div className="text-center max-w-2xl mx-auto">
            <p className="text-[10px] tracking-[0.35em] text-accent-purple uppercase font-semibold">Our Journey</p>
            <h2 className="font-serif-display text-3xl md:text-4xl mt-2 leading-tight">Decades of Discovery</h2>
            <p className="mt-2 text-xs md:text-sm text-muted-foreground font-medium">
              Quantum Codon is built on a clear foundation of scientific milestones. This timeline details how we evolved from research hypotheses into a clinical drug discovery platform.
            </p>
          </div>

          {/* Vertical timeline */}
          <div className="relative border-l border-black/10 dark:border-white/10 ml-4 md:ml-1/2 md:translate-x-[-0.5px] space-y-16 py-8">
            {milestones.map((m, idx) => {
              const Icon = m.icon
              const isEven = idx % 2 === 0
              return (
                <div key={m.year} className="relative flex flex-col md:flex-row items-start md:items-center">
                  
                  {/* Circle timeline dot with indicator icon */}
                  <div className="absolute left-[-17px] md:left-1/2 md:translate-x-[-17px] h-9 w-9 rounded-full bg-background border-2 border-foreground flex items-center justify-center z-10 shadow-sm">
                    <Icon className="h-4 w-4 text-foreground" />
                  </div>

                  {/* Timeline card wrapper */}
                  <div className={`w-full md:w-1/2 pl-8 md:pl-0 ${isEven ? 'md:pr-12 md:text-right' : 'md:pl-12 md:order-2 md:text-left'}`}>
                    <div className="p-6 rounded-2xl border border-black/10 dark:border-white/10 bg-white/40 dark:bg-white/[0.02] backdrop-blur-md hover:shadow-lg transition-shadow duration-300 relative group overflow-hidden">
                      {/* Background mesh glow on card hover */}
                      <div className="absolute inset-0 bg-gradient-to-tr from-accent-blue/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      
                      <div className="flex items-center gap-2.5 mb-2 md:justify-start justify-start group-hover:text-accent-blue transition-colors">
                        <span className="font-serif-display text-2xl font-bold tracking-tight">{m.year}</span>
                        <span className="text-[10px] uppercase tracking-wider font-semibold bg-black/5 dark:bg-white/10 px-2 py-0.5 rounded-full text-muted-foreground">{m.tag}</span>
                      </div>
                      
                      <h3 className="font-semibold text-sm leading-tight text-foreground mb-2">{m.title}</h3>
                      <p className="text-xs text-muted-foreground leading-relaxed">{m.description}</p>
                      
                      {/* Decorative image from public resources */}
                      <div className="mt-4 rounded-xl overflow-hidden h-32 border border-black/5 dark:border-white/5">
                        <img src={m.image} alt={m.title} className="w-full h-full object-cover brightness-95 group-hover:scale-105 transition-transform duration-500" />
                      </div>
                    </div>
                  </div>

                  {/* Empty placeholder to balance desktop layout */}
                  <div className="hidden md:block w-1/2" />
                </div>
              )
            })}
          </div>
        </section>

        {/* SECTION 3: LEADERSHIP */}
        <section id="leadership" className="scroll-mt-32 space-y-12">
          <div className="text-center max-w-2xl mx-auto">
            <p className="text-[10px] tracking-[0.35em] text-accent-blue uppercase font-semibold">Leadership</p>
            <h2 className="font-serif-display text-3xl md:text-4xl mt-2 leading-tight">The minds behind Quantum Codon</h2>
            <p className="mt-2 text-xs md:text-sm text-muted-foreground font-medium">
              Meet our core research, clinical, and database team, using peer-reviewed biology to unlock synthetic medicine.
            </p>
          </div>

          {/* Grid of Executive Profiles */}
          <div className="grid md:grid-cols-2 gap-8 items-start">
            {leaders.map((leader) => {
              const isExpanded = expandedLeader === leader.name
              return (
                <div
                  key={leader.name}
                  className={`rounded-3xl border border-black/10 dark:border-white/10 bg-white/40 dark:bg-white/[0.02] backdrop-blur-md p-6 hover:shadow-lg transition-all duration-300 ${
                    isExpanded ? 'ring-1 ring-accent-blue/30 shadow-md' : ''
                  }`}
                >
                  <div className="flex gap-5 items-center">
                    {/* Actual Portrait Photo */}
                    <div className="h-16 w-16 rounded-2xl overflow-hidden border border-black/10 dark:border-white/10 shadow-sm shrink-0 bg-slate-100">
                      <img src={leader.photo} alt={leader.name} className="w-full h-full object-cover" />
                    </div>

                    <div className="min-w-0">
                      <h3 className="font-serif-display text-lg leading-tight text-foreground">{leader.name}</h3>
                      <p className="text-xs text-accent-blue font-medium mt-0.5">{leader.title}</p>
                      <p className="text-[10px] text-muted-foreground font-mono">{leader.credential}</p>
                    </div>
                  </div>

                  <p className="text-xs text-muted-foreground mt-4 leading-relaxed">
                    {leader.bio}
                  </p>

                  {/* Interactive Expandable Section */}
                  {isExpanded ? (
                    <div className="mt-6 pt-5 border-t border-black/5 dark:border-white/5 space-y-4 animate-in fade-in duration-300">
                      <div>
                        <h4 className="text-[10px] uppercase font-mono tracking-wider text-accent-emerald font-semibold mb-2">Scientific Specialties</h4>
                        <div className="flex flex-wrap gap-1.5">
                          {leader.specialties.map(spec => (
                            <span key={spec} className="px-2 py-1 rounded bg-black/5 dark:bg-white/5 text-[9px] font-mono border border-black/5 dark:border-white/10 text-muted-foreground">
                              {spec}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h4 className="text-[10px] uppercase font-mono tracking-wider text-accent-purple font-semibold mb-2">Selected Publications & Patents</h4>
                        <ul className="space-y-2">
                          {leader.publications.map(pub => (
                            <li key={pub} className="text-[10px] leading-relaxed text-muted-foreground flex gap-2">
                              <span className="text-accent-purple shrink-0">•</span>
                              <span>{pub}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="flex justify-between items-center pt-2">
                        <a
                          href={leader.linkedin}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground transition font-medium"
                        >
                          <Linkedin className="h-3.5 w-3.5" />
                          LinkedIn Profile
                        </a>
                        <button
                          onClick={() => setExpandedLeader(null)}
                          className="text-[10px] text-accent-blue font-semibold hover:underline cursor-pointer"
                        >
                          Show Less
                        </button>
                      </div>
                    </div>
                  ) : (
                    <div className="mt-4 pt-3 border-t border-black/5 dark:border-white/5 flex justify-end">
                      <button
                        onClick={() => setExpandedLeader(leader.name)}
                        className="text-[11px] text-accent-blue hover:text-accent-blue/80 font-semibold inline-flex items-center gap-1 transition cursor-pointer"
                      >
                        View Scientific Focus
                        <ArrowRight className="h-3 w-3" />
                      </button>
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </section>

        {/* SECTION 4: EVENTS & PRESENCE */}
        <section id="events" className="scroll-mt-32 space-y-12">
          <div className="text-center max-w-2xl mx-auto">
            <p className="text-[10px] tracking-[0.35em] text-accent-emerald uppercase font-semibold">Events Portfolio</p>
            <h2 className="font-serif-display text-3xl md:text-4xl mt-2 leading-tight">Scientific Conferences & Workshops</h2>
            <p className="mt-2 text-xs md:text-sm text-muted-foreground font-medium">
              Follow where we present our research, outline proof profiles, and interact with the biotech ecosystem.
            </p>
          </div>

          {/* Event Category Filter Controls (Capium style) */}
          <div className="flex justify-center gap-2 border-b border-black/5 dark:border-white/5 pb-4">
            {[
              { id: 'all', label: 'All Events' },
              { id: 'upcoming', label: 'Upcoming' },
              { id: 'past', label: 'Past Presence' }
            ].map(filter => (
              <button
                key={filter.id}
                onClick={() => setEventFilter(filter.id as any)}
                className={`px-4 py-1.5 rounded-lg text-xs font-semibold tracking-wider transition border cursor-pointer ${
                  eventFilter === filter.id
                    ? 'bg-foreground text-background border-foreground font-semibold shadow-sm'
                    : 'bg-black/5 dark:bg-white/5 border-black/10 dark:border-white/10 text-muted-foreground hover:text-foreground'
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>

          {/* Events Card Layout */}
          <div className="grid lg:grid-cols-2 gap-6 items-start">
            {filteredEvents.length > 0 ? (
              filteredEvents.map((evt) => (
                <div
                  key={evt.id}
                  className="p-6 rounded-3xl border border-black/10 dark:border-white/10 bg-white/40 dark:bg-white/[0.02] backdrop-blur-md flex flex-col md:flex-row gap-5 items-start hover:shadow-lg transition-shadow duration-300"
                >
                  
                  {/* Calendar Badge */}
                  <div className="flex md:flex-col items-center justify-center shrink-0 w-20 h-20 bg-slate-900 border border-white/10 rounded-2xl p-2 select-none shadow-md">
                    <span className="text-2xl font-serif-display text-white leading-none font-bold">{evt.day}</span>
                    <span className="text-[9px] font-mono tracking-wider text-muted-foreground uppercase mt-1 md:mt-0.5">{evt.monthYear.split(' ')[0]}</span>
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="text-[9px] uppercase tracking-wider font-mono font-bold bg-accent-blue/15 text-accent-blue px-2.5 py-0.5 rounded-full">
                        {evt.type}
                      </span>
                      
                      <span className={`text-[9px] uppercase tracking-wider font-mono font-bold px-2.5 py-0.5 rounded-full ${
                        evt.upcoming 
                          ? 'bg-emerald-500/15 text-emerald-500' 
                          : 'bg-amber-500/15 text-amber-500'
                      }`}>
                        {evt.upcoming ? 'Upcoming' : 'Concluded'}
                      </span>
                    </div>

                    <h3 className="font-serif-display text-lg font-semibold leading-snug mt-2 text-foreground">{evt.title}</h3>
                    <p className="text-xs text-muted-foreground mt-1 leading-relaxed">
                      Presenter: <strong className="text-foreground">{evt.speaker}</strong>
                    </p>
                    
                    <p className="text-xs text-muted-foreground mt-3 leading-relaxed">
                      {evt.description}
                    </p>

                    <div className="mt-4 pt-3 border-t border-black/5 dark:border-white/5 flex flex-wrap gap-x-4 gap-y-2 items-center text-[10px] text-muted-foreground">
                      <span className="flex items-center gap-1.5">
                        <MapPin className="h-3.5 w-3.5 shrink-0" />
                        {evt.location} ({evt.venue})
                      </span>
                    </div>

                    {/* Interactive Button calling Contact modal */}
                    <div className="mt-5">
                      {evt.upcoming ? (
                        <button
                          onClick={contactModal.open}
                          className="inline-flex items-center gap-1 px-4 py-2 rounded-full bg-accent-blue text-white text-xs font-semibold hover:opacity-90 transition shadow-md shadow-accent-blue/10 cursor-pointer"
                        >
                          Request Meeting / Briefing
                          <ArrowRight className="h-3.5 w-3.5" />
                        </button>
                      ) : (
                        <button
                          onClick={contactModal.open}
                          className="inline-flex items-center gap-1 px-4 py-2 rounded-full border border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/5 text-[11px] font-semibold text-muted-foreground hover:text-foreground transition cursor-pointer"
                        >
                          Request Abstract & Slides
                          <ExternalLink className="h-3.5 w-3.5" />
                        </button>
                      )}
                    </div>

                  </div>
                </div>
              ))
            ) : (
              <div className="lg:col-span-2 p-12 text-center rounded-3xl border border-black/10 dark:border-white/10 bg-white/40 dark:bg-white/[0.02]">
                <Search className="h-8 w-8 text-muted-foreground mx-auto" />
                <p className="mt-3 text-sm text-muted-foreground font-semibold">No events found matching this filter.</p>
              </div>
            )}
          </div>

          {/* Bottom Section */}
          <div className="p-8 rounded-3xl border border-black/10 dark:border-white/10 bg-gradient-to-r from-accent-blue/10 via-accent-purple/10 to-accent-emerald/10 text-center max-w-4xl mx-auto">
            <h3 className="font-serif-display text-xl">Coordinate a Scientific Presentation?</h3>
            <p className="mt-2 text-xs md:text-sm text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              If you are organizing a computational biology symposium or pharmacological conference and would like Prof. Pawan K Dhar or members of our bioinformatics core to present, please get in touch.
            </p>
            <button
              onClick={contactModal.open}
              className="mt-5 px-6 py-2.5 rounded-full bg-foreground text-background text-xs font-semibold hover:opacity-90 transition cursor-pointer"
            >
              Inquire for Scientific Events
            </button>
          </div>
        </section>

      </div>
    </PageShell>
  )
}
