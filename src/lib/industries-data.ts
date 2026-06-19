import { HeartPulse, Factory, GraduationCap, type LucideIcon } from "lucide-react";

export type Industry = {
  slug: string;
  title: string;
  icon: LucideIcon;
  eyebrow: string;
  headline: string;
  subtext: string;
  overview: string;
  highlights: { title: string; body: string }[];
  useCases: { title: string; body: string }[];
  color: string;
  accent: string;
};

export const industries: Industry[] = [
  {
    slug: "healthcare",
    title: "Healthcare",
    icon: HeartPulse,
    eyebrow: "Industry — Healthcare",
    headline: "Accelerating discovery and care with the dark genome",
    subtext:
      "From novel therapeutic leads to precision diagnostics, Quantum Codon empowers healthcare innovators to translate hidden biology into clinical impact.",
    overview:
      "We partner with hospitals, biotech firms, and research institutions to apply Deep Codon technology to drug discovery pipelines, biomarker development, and translational research initiatives.",
    highlights: [
      { title: "Novel Therapeutics", body: "First-in-class peptides and proteins designed from non-expressing DNA regions." },
      { title: "Precision Diagnostics", body: "Dark RNA signatures as biomarkers for early-stage disease detection." },
      { title: "Translational Pipelines", body: "End-to-end support from target identification to preclinical validation." },
      { title: "Regulatory Readiness", body: "Documentation aligned to FDA, EMA, and CDSCO biotech standards." },
    ],
    useCases: [
      { title: "Oncology", body: "Designing tumor-selective peptides from Class I dark DNA libraries." },
      { title: "Neurodegeneration", body: "Modulating non-translating RNA implicated in protein aggregation." },
      { title: "Infectious Disease", body: "Rapid screening against resistant pathogens — e.g. tREP-18 vs Leishmania." },
    ],
    color: "border-accent-blue/20 bg-accent-blue/[0.04]",
    accent: "text-accent-blue",
  },
  {
    slug: "manufacturing",
    title: "Manufacturing",
    icon: Factory,
    eyebrow: "Industry — Manufacturing",
    headline: "Bioprocess and industrial biotech at quantum scale",
    subtext:
      "Engineer enzymes, biomaterials, and bioproducts using synthetic translation frames sourced from the unexplored 98% of the genome.",
    overview:
      "Quantum Codon supports manufacturers in scaling sustainable, high-yield bio-production — from enzyme engineering to specialty chemicals and biomaterials grounded in dark genome science.",
    highlights: [
      { title: "Enzyme Engineering", body: "Designer biocatalysts for greener, more selective industrial chemistry." },
      { title: "Bio-based Materials", body: "Novel proteins for textiles, packaging, and specialty polymers." },
      { title: "Process Optimization", body: "Strain design and expression tuning across microbial chassis." },
      { title: "Quality Analytics", body: "HPLC, mass spec, and ADMET-style profiling for industrial QC." },
    ],
    useCases: [
      { title: "Specialty Chemicals", body: "Custom catalytic peptides for fine-chemical synthesis." },
      { title: "Food & Agri-Tech", body: "Functional proteins and bioactives for next-gen food systems." },
      { title: "Sustainable Materials", body: "Biodegradable polymers from engineered protein backbones." },
    ],
    color: "border-accent-purple/20 bg-accent-purple/[0.04]",
    accent: "text-accent-purple",
  },
  {
    slug: "education",
    title: "Education",
    icon: GraduationCap,
    eyebrow: "Industry — Education",
    headline: "Training the next generation of dark genome scientists",
    subtext:
      "University programs, certifications, and corporate workshops that bring computational biology and quantum-molecular science to learners worldwide.",
    overview:
      "Through the Deep Codon Initiative, we collaborate with universities and research institutes to deliver curricula, training fellowships, and joint research programs in synthetic biology and dark genome analytics.",
    highlights: [
      { title: "University Curricula", body: "Modular courses on dark DNA, RNA, and synthetic gene expression." },
      { title: "Certification Programs", body: "Hands-on tracks in bioinformatics, AI structural biology, and lab methods." },
      { title: "Research Fellowships", body: "Joint projects with JNU and Amaravati Quantum Valley." },
      { title: "Corporate Workshops", body: "Bespoke trainings for R&D teams transitioning into dark genome science." },
    ],
    useCases: [
      { title: "Graduate Training", body: "Dark genome mapping, annotation, and synthetic translation labs." },
      { title: "Continuing Education", body: "Refresher tracks for clinicians, biotech engineers, and analysts." },
      { title: "Joint Research", body: "Co-authored peer-reviewed studies and shared infrastructure." },
    ],
    color: "border-accent-emerald/20 bg-accent-emerald/[0.04]",
    accent: "text-accent-emerald",
  },
];

export function getIndustry(slug: string): Industry | undefined {
  return industries.find((i) => i.slug === slug);
}
