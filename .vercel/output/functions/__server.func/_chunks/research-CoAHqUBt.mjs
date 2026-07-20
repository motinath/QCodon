import { r as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { t as PageShell } from "../_PageShell-BkJHn740.mjs";
import { t as Card } from "./card-CzXpCsbD.mjs";
//#region dist/server/assets/research-CoAHqUBt.js
var import_react = /* @__PURE__ */ __toESM(require_react(), 1);
var import_jsx_runtime = require_jsx_runtime();
var dna_default = "/assets/dna-U7kFEeHU.mp4";
function QcUntapped() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "platform",
		className: "relative py-28 px-6 bg-[#f0f4f8] dark:bg-[#0c131f] transition-colors duration-300",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "lg:col-span-7",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs tracking-[0.3em] text-accent-emerald",
						children: "UNTAPPED BIOLOGICAL SPACE"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-bagel text-[clamp(1.75rem,4vw,3rem)] mt-3",
						children: "The Untapped Scale of the Dark Genome"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-6 text-muted-foreground text-sm leading-relaxed",
						children: "Every genome — bacterial, yeast, fly, worm, human — contains an overwhelming majority of sequences that have never been expressed as proteins. These are not gaps or errors. They are the unexplored majority of life's coding potential."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-10 space-y-4",
						children: [
							{
								label: "Protein-coding DNA",
								pct: 2,
								color: "from-cyan-400 to-accent-blue"
							},
							{
								label: "Class I — Non-expressing DNA",
								pct: 40,
								color: "from-yellow-500 to-orange-500"
							},
							{
								label: "Class II — Non-translating RNA",
								pct: 56,
								color: "from-accent-purple to-pink-500"
							}
						].map((b) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex justify-between text-xs mb-1.5 font-medium",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: b.label }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "font-mono text-muted-foreground",
								children: [b.pct, "%"]
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "h-2.5 rounded-full bg-black/5 dark:bg-white/5 overflow-hidden",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: `h-full bg-gradient-to-r ${b.color}`,
								style: { width: `${b.pct}%` }
							})
						})] }, b.label))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-5 text-[11px] text-muted-foreground leading-relaxed",
						children: "Approximate proportions vary by organism and annotation methodology. Class I + Class II form Deep Codon's therapeutic reservoir."
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "lg:col-span-5 flex justify-center w-full",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative w-full max-w-sm rounded-3xl overflow-hidden border border-black/10 dark:border-white/10 bg-white/40 dark:bg-black/20 p-4 shadow-xl backdrop-blur-md",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-br from-accent-emerald/10 via-transparent to-accent-blue/10 opacity-40 pointer-events-none" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "w-full h-64 rounded-2xl overflow-hidden border border-black/5 dark:border-white/5 relative bg-[#091b2c]",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("video", {
								className: "w-full h-full object-cover rounded-2xl",
								src: dna_default,
								autoPlay: true,
								muted: true,
								loop: true,
								playsInline: true
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-4 text-center",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-[10px] tracking-[0.25em] uppercase font-mono text-accent-emerald font-semibold",
								children: "98% Dark Genome Reservoir"
							})
						})
					]
				})
			})]
		})
	});
}
var classes = [{
	badge: "I",
	tag: "Class I",
	image: "/dna-structure.png",
	color: "from-yellow-500/20 to-orange-500/10 border-yellow-500/30",
	title: "Non-Expressing DNA Sequences",
	intro: "DNA regions that are present in every cell but are never transcribed into RNA under natural conditions. Deep Codon's synthetic expression platform unlocks this vast, untouched coding reservoir for the first time.",
	items: [
		["Intergenic regions", "Sequences between annotated genes. 6/6 randomly selected E. coli intergenic sequences produced stable, functional proteins."],
		["Antisense sequences", "Complementary strands to coding sequences. Full-length antisense proteins predicted across E. coli, S. cerevisiae, and D. melanogaster."],
		["Reverse ORFs", "Existing coding sequences read in the reverse (-1) frame — a parallel protein universe derived from every annotated gene."],
		["Repetitive elements", "Telomeric repeats, microsatellites, LINE/SINE-derived sequences — an underexplored test bed for novel scaffold motifs."],
		["Pseudogenes", "Once-active genes silenced by mutation. Synthetic reconstruction shows many fold into stable, functional proteins."]
	],
	pipeline: "Bioinformatics → Synthetic cloning → Expression (E. coli / HEK293 / cell-free) → AlphaFold → Functional assays → Lead optimisation"
}, {
	badge: "II",
	tag: "Class II",
	image: "/rna-structure.png",
	color: "from-accent-purple/20 to-pink-500/10 border-accent-purple/30",
	title: "Non-Translating RNA Sequences",
	intro: "RNA molecules produced by the cell but never translated into protein. Synthetic translation of these sequences produces biologically active peptides with remarkable therapeutic properties.",
	items: [
		["Introns", "Spliced out during mRNA processing — yet translate into stable, bioactive peptides and proteins."],
		["tREPs (tRNA-derived peptides)", "tREP-18, derived from E. coli tRNA, showed anti-leishmanial activity at IC50 = 22.13 nM while safe for human cells."],
		["Ribosomal RNA", "The scaffold of the ribosome itself — never translated in evolution, a unique template for novel functional peptides."],
		["MicroRNA", "Only ~22 nucleotides, but with remarkable precision when synthetically translated."],
		["Long non-coding RNA", "Hundreds to thousands of bases — enormous, uncharted protein-coding reservoir."]
	],
	pipeline: "tRNA / rRNA / intron ID → Computational translation → Stability prediction → Chemical synthesis → Bioassay → tREP library"
}];
function QcClasses() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "classes",
		className: "relative py-28 px-6 bg-[#f5f3ff] dark:bg-[#120e24] transition-colors duration-300",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-6xl mx-auto",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs tracking-[0.3em] text-accent-purple",
					children: "THE DEEP CODON CLASSIFICATION"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-bagel text-4xl md:text-5xl mt-3 max-w-3xl",
					children: "Two classes of dark genomic matter. One drug discovery canvas."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-14 grid lg:grid-cols-2 gap-8",
					children: classes.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
						className: `relative p-8 border bg-gradient-to-br ${c.color} backdrop-blur-xl flex flex-col md:flex-row gap-6 items-start`,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex-1",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-4 mb-4",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "w-14 h-14 rounded-full border border-white/20 flex items-center justify-center font-bagel text-2xl",
										children: c.badge
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "text-xs tracking-[0.3em] text-muted-foreground",
										children: c.tag.toUpperCase()
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "font-bagel text-2xl mb-3",
									children: c.title
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-sm text-muted-foreground mb-6",
									children: c.intro
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
									className: "space-y-3 text-sm",
									children: c.items.map(([k, v]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
										className: "border-l-2 border-black/10 dark:border-white/10 pl-3",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "font-semibold",
												children: k
											}),
											" — ",
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-muted-foreground",
												children: v
											})
										]
									}, k))
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-6 text-xs font-mono text-muted-foreground border-t border-white/10 pt-4",
									children: c.pipeline
								})
							]
						}), c.image && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "w-full md:w-32 shrink-0 rounded-2xl overflow-hidden border border-black/5 dark:border-white/10 bg-white/20 dark:bg-black/20 p-2 shadow-md self-center md:self-start",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: c.image,
								alt: c.title,
								loading: "lazy",
								decoding: "async",
								className: "w-full h-32 md:h-24 object-cover rounded-xl border border-black/5 dark:border-white/5"
							})
						})]
					}, c.tag))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
					className: "mt-10 p-8 border border-white/10 bg-gradient-to-r from-accent-blue/10 via-accent-purple/10 to-accent-emerald/10",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "font-bagel text-2xl",
						children: "Class I + Class II → First-in-Class Pathways"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-muted-foreground",
						children: "By combining Class I proteins and Class II peptides — using domain prediction and molecular docking — Deep Codon designs entirely novel cellular pathways: regulatory, signalling, or metabolic. These pathways do not exist in nature."
					})]
				})
			]
		})
	});
}
var results = [
	{
		year: "2009",
		cls: "Class I",
		author: "Dhar et al — JNU, New Delhi",
		area: "Proof of Concept",
		title: "World's First Dark Genome Expression",
		body: "Six E. coli intergenic sequences cloned and expressed. All six produced stable proteins, with Eka1 causing potent reversible growth inhibition.",
		stats: "6/6 expressed · Eka1 inhibition · 2 stable tertiary structures"
	},
	{
		year: "2013–15",
		cls: "Class I",
		author: "Joshi, Krishnan et al",
		area: "Anti-Malaria",
		title: "Plasmodium falciparum Invasion Blocked",
		body: "Synthetic peptides from S. cerevisiae intergenic sequences screened against P. falciparum invasion proteins. >60% inhibition of parasite entry.",
		stats: ">60% invasion inhibition · clinical strain validated"
	},
	{
		year: "2015–23",
		cls: "Class I",
		author: "Raj, Verma et al",
		area: "Alzheimer's",
		title: "BACE1 Inhibition: 86.7% at 1μM",
		body: "From 2,500 intergenic sequences and 424 novel peptides, ECOI2 achieved 86.7% BACE1 inhibition and reduced amyloid Aβ 1-40 and 1-42 in SH-SY5Y cells.",
		stats: "ECOI2 86.7% · Aβ reduction · non-toxic"
	},
	{
		year: "2023",
		cls: "Class II",
		author: "Dhar et al — Published",
		area: "Anti-Leishmania",
		title: "First Functional tRNA-Derived Peptide",
		body: "E. coli tRNAs computationally translated into tREPs. tREP-18 showed IC50 = 22.13 nM against L. donovani and remained safe for human macrophages.",
		stats: "IC50 = 22.13 nM · membrane disruption"
	},
	{
		year: "2024",
		cls: "Class II",
		author: "Shanthappa et al",
		area: "Vaccines",
		title: "tREP-Derived Antiviral Vaccine Epitopes",
		body: "tRNA-encoded peptides screened as vaccine epitopes. RRHIDIVV and IMVRFSAE showed favorable HLA binding and 200 ns MD stability.",
		stats: "2 validated epitopes · 200 ns MD stable"
	},
	{
		year: "2016–23",
		cls: "Class I",
		author: "Varughese, Garg et al",
		area: "Enzymes",
		title: "Antisense and Reverse Protein Landscape",
		body: "Full-length antisense and reverse proteins mapped across E. coli, S. cerevisiae, D. melanogaster — many predicted enzymatic, transporter, or secretory functions.",
		stats: "Thousands mapped · multi-organism"
	}
];
function QcResults() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "results",
		className: "relative py-28 px-6 bg-slate-900 text-white transition-colors duration-300",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-6xl mx-auto",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs tracking-[0.3em] text-accent-emerald",
					children: "PEER-REVIEWED VALIDATION"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-bagel text-[clamp(1.75rem,4vw,3rem)] mt-3 max-w-3xl",
					children: "15+ years of peer-reviewed validation"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-6 text-slate-400 max-w-3xl",
					children: "Our platform is built on continuous research from JNU and partner labs. From anti-malarial leads to anti-leishmanial candidates, Deep Codon translates computational theory into wet-lab outcomes."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-14 grid grid-cols-[repeat(auto-fit,minmax(min(100%,280px),1fr))] gap-6",
					children: results.map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
						className: "p-6 border border-white/10 bg-white/80 dark:bg-white/[0.03] backdrop-blur-md shadow-sm hover:shadow-md transition text-foreground dark:text-white",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex justify-between text-xs text-muted-foreground",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-mono",
									children: r.year
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "px-2 py-0.5 rounded-full border border-black/10 dark:border-white/15 text-foreground/80 dark:text-white/80",
									children: r.cls
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-3 text-xs text-accent-purple",
								children: r.area
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-bagel text-xl mt-2",
								children: r.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs text-muted-foreground mt-1",
								children: r.author
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 text-sm text-muted-foreground dark:text-slate-300",
								children: r.body
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-4 pt-3 border-t border-black/5 dark:border-white/10 text-xs font-mono text-accent-emerald",
								children: r.stats
							})
						]
					}, r.title))
				})
			]
		})
	});
}
var steps = [
	[
		"01",
		"Dark Genome Mapping",
		"Identify Class I and Class II sequences across model organisms; cross-reference NCBI GEO and NR databases."
	],
	[
		"02",
		"AI Prediction",
		"Translate in silico, predict tertiary structure, screen toxicity, and rank stability, solubility, charge, and immunogenicity."
	],
	[
		"03",
		"Virtual Screening",
		"Dock dark-genome candidates against kinases, GPCRs, enzymes, viral proteins, and other target classes."
	],
	[
		"04",
		"Quantum Simulation",
		"Molecular dynamics + quantum modules for binding, folding, electron distribution, and reaction-energy modeling."
	],
	[
		"05",
		"Experimental Validation",
		"Synthesize or express top candidates and validate via cell assays, Western blot, flow cytometry, and preclinical models."
	]
];
function QcPipeline() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "pipeline",
		className: "relative py-28 px-6 bg-[#edf2f7] dark:bg-[#0a1118] transition-colors duration-300",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-6xl mx-auto",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs tracking-[0.3em] text-accent-emerald",
					children: "THE DEEP CODON TECHNOLOGY PLATFORM"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-bagel text-4xl md:text-5xl mt-3 max-w-3xl",
					children: "From dark genome to validated drug candidate"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-6 text-muted-foreground max-w-3xl",
					children: "An integrated pipeline converting silent genomic sequences into therapeutic candidates through bioinformatics, AI, molecular simulation, and experimental validation."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
					className: "mt-14 grid md:grid-cols-5 gap-4 relative",
					children: steps.map(([n, t, d]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "relative p-6 rounded-2xl border border-black/10 dark:border-white/10 bg-white/80 dark:bg-white/[0.03] backdrop-blur-md shadow-sm",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "font-bagel text-3xl bg-gradient-to-br from-accent-blue to-accent-purple bg-clip-text text-transparent",
								children: n
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-bagel text-lg mt-2",
								children: t
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs text-muted-foreground mt-2 leading-relaxed",
								children: d
							})
						]
					}, n))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-12 grid md:grid-cols-2 gap-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
						className: "p-8 border border-black/10 dark:border-white/10 bg-gradient-to-br from-accent-blue/10 to-transparent shadow-sm",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs tracking-[0.3em] text-accent-blue",
								children: "ARTIFICIAL INTELLIGENCE"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-bagel text-2xl mt-2",
								children: "Making the Invisible Visible at Scale"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
								className: "mt-4 space-y-2 text-sm text-muted-foreground list-disc pl-5",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "AlphaFold-based tertiary structure prediction" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Multi-omics integration across genetic, immune, and metabolic data" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "ADMET and toxicity screening at genome scale" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Automated candidate prioritization by druggability" })
								]
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
						className: "p-8 border border-black/10 dark:border-white/10 bg-gradient-to-br from-accent-purple/10 to-transparent shadow-sm",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs tracking-[0.3em] text-accent-purple",
								children: "QUANTUM COMPUTING"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-bagel text-2xl mt-2",
								children: "Simulating Molecular Reality with Precision"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
								className: "mt-4 space-y-2 text-sm text-muted-foreground list-disc pl-5",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Quantum-level electron distribution modeling" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Variational Quantum Eigensolver for electronic structure" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Quantum pattern recognition in high-dimensional data" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Molecular dynamics refined by quantum accuracy" })
								]
							})
						]
					})]
				})
			]
		})
	});
}
function QcPaper() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "paper",
		className: "relative py-28 px-6 bg-[#fdf6e2] dark:bg-[#15120a] transition-colors duration-300",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-5xl mx-auto",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs tracking-[0.3em] text-accent-purple",
					children: "LANDMARK PUBLICATION — 2025"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-bagel text-4xl md:text-5xl mt-3",
					children: "The Scientific Foundation"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-6 text-muted-foreground max-w-3xl",
					children: "The Deep Codon platform is anchored in 15+ years of published research, culminating in a 2025 preprint proposing an integrated AI + quantum framework for dark genome drug discovery."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
					className: "mt-10 p-8 border border-black/10 dark:border-white/10 bg-white/80 dark:bg-white/[0.03] backdrop-blur-md shadow-sm",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-xs text-muted-foreground",
							children: "Preprint · Posted 19 May 2025 · Preprints.org · Biology and Biotechnology"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-bagel text-2xl md:text-3xl mt-3",
							children: "Recoding Genomic Elements with AI and Quantum Computation to Build the Next Generation Drug Discovery Platform"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-3 text-sm text-muted-foreground",
							children: [
								"Kadalmani Krishnan · Anita Chugh · Vidya Niranjan ·",
								" ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
									className: "text-foreground",
									children: "Pawan Kumar Dhar*"
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-xs font-mono text-muted-foreground",
							children: "DOI: 10.20944/preprints202505.1422.v1"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("blockquote", {
							className: "mt-5 border-l-2 border-accent-purple pl-4 italic text-muted-foreground",
							children: "\"We propose a next-generation, first-in-class drug discovery platform that harnesses the vast, untapped genomic landscape through the integration of Artificial Intelligence and Quantum Computing.\""
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-5 flex flex-wrap gap-2 text-xs",
							children: [
								"dark genome",
								"synthetic biology",
								"drug discovery",
								"AI",
								"quantum computing",
								"tRNA-derived peptides"
							].map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "px-3 py-1 rounded-full border border-white/15 text-muted-foreground",
								children: t
							}, t))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-6 flex flex-wrap gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "https://www.preprints.org/manuscript/202505.1422",
								target: "_blank",
								rel: "noreferrer",
								className: "px-5 py-2.5 rounded-full bg-gradient-to-r from-accent-blue to-accent-purple text-white text-sm",
								children: "Read Full Paper →"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "https://www.preprints.org/frontend/manuscript/a1670eb948afd0978f09cf16d10f08c9/download_pub",
								target: "_blank",
								rel: "noreferrer",
								className: "px-5 py-2.5 rounded-full glass-effect dark:border-white/15 text-sm",
								children: "Download PDF"
							})]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-8 text-sm text-muted-foreground",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
						className: "text-foreground",
						children: "Also see:"
					}), " Dhar et al 2009, Joshi et al 2013, Raj et al 2015, Verma et al 2023, Garg & Dhar 2023a,b, Nayak & Dhar 2023, Shanthappa et al 2024."]
				})
			]
		})
	});
}
function ResearchPage() {
	const [activeTab, setActiveTab] = (0, import_react.useState)("overview");
	const tabs = [
		{
			id: "overview",
			label: "Platform Overview"
		},
		{
			id: "classes",
			label: "Classes I & II"
		},
		{
			id: "results",
			label: "Proof & Results"
		},
		{
			id: "publications",
			label: "Publications"
		}
	];
	(0, import_react.useEffect)(() => {
		const hash = window.location.hash;
		if (hash) {
			const cleanHash = hash.replace("#", "");
			if (cleanHash === "platform" || cleanHash === "pipeline") setActiveTab("overview");
			else if (cleanHash === "classes") setActiveTab("classes");
			else if (cleanHash === "results") setActiveTab("results");
			else if (cleanHash === "paper") setActiveTab("publications");
		}
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PageShell, {
		className: "!pb-0",
		spotlight: "from-accent-emerald/15 via-transparent to-transparent",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "badge-meta text-accent-blue",
					children: "Scientific Platform"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "heading-hero mt-4",
					children: "Dark Genome Research"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 text-muted-foreground max-w-2xl mx-auto text-sm md:text-base leading-relaxed",
					children: "Explore our experimental proof, genomic classifications, and the technological framework behind the Deep Codon Initiative."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex flex-wrap justify-center gap-2.5 mt-8",
					children: tabs.map((tab) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => {
							setActiveTab(tab.id);
							if (tab.id === "overview") window.location.hash = "platform";
							else if (tab.id === "classes") window.location.hash = "classes";
							else if (tab.id === "results") window.location.hash = "results";
							else if (tab.id === "publications") window.location.hash = "paper";
						},
						className: `px-5 py-2.5 rounded-full text-xs font-mono-data uppercase font-semibold tracking-wider transition-all duration-300 border focus-visible:ring-2 focus-visible:ring-accent-blue ${activeTab === tab.id ? "bg-foreground text-background border-foreground shadow-md font-semibold" : "bg-white/5 border-white/10 hover:bg-white/10 text-muted-foreground hover:text-foreground"}`,
						children: tab.label
					}, tab.id))
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "transition-all duration-500 animate-in fade-in slide-in-from-bottom-4",
			children: [
				activeTab === "overview" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(QcUntapped, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(QcPipeline, {})] }),
				activeTab === "classes" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(QcClasses, {}),
				activeTab === "results" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(QcResults, {}),
				activeTab === "publications" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(QcPaper, {})
			]
		})]
	});
}
var SplitComponent = ResearchPage;
//#endregion
export { SplitComponent as component };
