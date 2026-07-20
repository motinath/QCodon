import { r as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { t as Link$1 } from "./router-compat-Byun9neG.mjs";
import { t as require_lucide_react } from "../_libs/lucide-react.mjs";
import { n as useContactModal } from "./ContactModal-G1XSPA_v.mjs";
import { a as useScroll, i as useTransform, n as useReducedMotion, o as motion, r as useSpring, s as AnimatePresence, t as useInView } from "../_libs/framer-motion+[...].mjs";
//#region dist/server/assets/services.regulatory-compliance-CrYMHnWT.js
var import_react = /* @__PURE__ */ __toESM(require_react(), 1);
var import_jsx_runtime = require_jsx_runtime();
var import_lucide_react = require_lucide_react();
var hero_reg_default = "/assets/hero-reg-DwcVfgeK.png";
var sci_reg_default = "/assets/sci-reg-WGlcj-Pa.png";
var work_reg_default = "/assets/work-reg-BQSc3zcc.png";
var molecule_default = "/assets/molecule-DtU9_vJO.jpeg";
var manf_default = "/assets/manf-q51S9he4.jpg";
var brainr_default = "/assets/brainr-B0f6_zcJ.jpeg";
function Reveal({ children, delay = 0, y = 28, className = "" }) {
	const reduced = useReducedMotion();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
		className,
		initial: reduced ? false : {
			opacity: 0,
			y
		},
		whileInView: {
			opacity: 1,
			y: 0
		},
		viewport: {
			once: true,
			margin: "-15% 0px"
		},
		transition: {
			duration: .8,
			delay,
			ease: [
				.22,
				1,
				.36,
				1
			]
		},
		children
	});
}
function Eyebrow({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		className: "text-[11px] font-mono tracking-[0.32em] text-emerald-600 uppercase",
		children
	});
}
function RegulatoryCompliancePage() {
	const { open: openContactModal } = useContactModal();
	const { scrollYProgress } = useScroll();
	const progress = useSpring(scrollYProgress, {
		stiffness: 120,
		damping: 30,
		mass: .2
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 overflow-x-clip",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
				className: "fixed top-0 left-0 right-0 h-[3px] z-[60] origin-left bg-gradient-to-r from-emerald-500 via-sky-500 to-emerald-500",
				style: { scaleX: progress }
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hero, { openContactModal }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ImpactStrip, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InvestorTrust, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DomainsSection, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProvenProcess, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(NumbersStrip, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArchitectsGrid, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PartnerBand, { openContactModal }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TagStrip, {})
		]
	});
}
function Hero({ openContactModal }) {
	const ref = (0, import_react.useRef)(null);
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ["start start", "end start"]
	});
	const yImg = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
	const scaleImg = useTransform(scrollYProgress, [0, 1], [1.05, 1.18]);
	const yText = useTransform(scrollYProgress, [0, 1], ["0%", "-15%"]);
	const opacityText = useTransform(scrollYProgress, [0, .85], [1, 0]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		ref,
		className: "relative min-h-[100svh] flex items-center pt-28 pb-20 px-6 overflow-hidden",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute inset-0 z-0",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.img, {
					src: hero_reg_default,
					alt: "",
					className: "h-full w-full object-cover",
					style: {
						y: yImg,
						scale: scaleImg
					}
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 z-[1] bg-gradient-to-r from-white/95 via-white/70 to-white/10 dark:from-slate-950/95 dark:via-slate-950/70 dark:to-slate-950/10" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 z-[1] bg-gradient-to-b from-white/20 via-transparent to-white/60 dark:from-slate-950/20 dark:via-transparent dark:to-slate-950/60" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HexGridOverlay, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
				className: "relative z-[2] max-w-3xl",
				style: {
					y: yText,
					opacity: opacityText
				},
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-emerald-200 dark:border-emerald-800 bg-emerald-50 dark:bg-emerald-950/60 shadow-sm",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_lucide_react.Compass, { className: "h-3.5 w-3.5 text-emerald-600 dark:text-emerald-400" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-[11px] font-mono tracking-[0.3em] uppercase text-emerald-700 dark:text-emerald-400",
							children: "Regulatory & Compliance"
						})]
					}) }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: .1,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
							className: "mt-7 font-serif-display italic text-5xl md:text-7xl leading-[1.04] text-slate-900 dark:text-slate-100",
							children: [
								"Navigating the Future of",
								" ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "bg-gradient-to-r from-emerald-600 via-teal-500 to-sky-600 bg-clip-text text-transparent not-italic",
									children: "Bio-Innovation"
								})
							]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: .2,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-6 text-base md:text-lg text-slate-600 dark:text-slate-400 max-w-xl leading-relaxed",
							children: [
								"Your regulatory compass in",
								" ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-slate-900 dark:text-slate-100 font-medium",
									children: "Biotech"
								}),
								",",
								" ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-slate-900 dark:text-slate-100 font-medium",
									children: "Biomanufacturing"
								}),
								" ",
								"& ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-slate-900 dark:text-slate-100 font-medium",
									children: "BioAI"
								}),
								"."
							]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: .3,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-10 flex flex-wrap gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								onClick: openContactModal,
								className: "group inline-flex items-center gap-2 px-6 py-3 rounded-full bg-emerald-600 text-white text-sm font-medium tracking-wide hover:bg-emerald-700 transition-all hover:shadow-[0_14px_40px_-12px_rgba(5,150,105,0.55)]",
								children: ["Schedule a Consultation", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_lucide_react.ArrowRight, { className: "h-4 w-4 transition-transform group-hover:translate-x-1" })]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: "#process",
								className: "group inline-flex items-center gap-2 px-6 py-3 rounded-full border border-slate-300 dark:border-slate-700 bg-white/70 dark:bg-slate-900/70 backdrop-blur text-slate-800 dark:text-slate-200 text-sm font-medium tracking-wide hover:bg-white dark:hover:bg-slate-800 transition-all",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_lucide_react.Download, { className: "h-4 w-4" }), "Download Investor Deck"]
							})]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
						className: "absolute -bottom-20 left-0 flex flex-col items-start gap-2 text-slate-400 dark:text-slate-600",
						animate: { y: [
							0,
							8,
							0
						] },
						transition: {
							duration: 2.2,
							repeat: Infinity,
							ease: "easeInOut"
						},
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-[10px] font-mono tracking-[0.3em] uppercase",
							children: "Scroll"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "w-px h-10 bg-gradient-to-b from-slate-400 to-transparent" })]
					})
				]
			})
		]
	});
}
function HexGridOverlay() {
	const { scrollYProgress } = useScroll();
	const rotate = useTransform(scrollYProgress, [0, 1], [0, 20]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.svg, {
		className: "absolute inset-0 -z-10 w-full h-full opacity-[0.08] text-emerald-600",
		style: { rotate },
		viewBox: "0 0 800 800",
		preserveAspectRatio: "xMidYMid slice",
		"aria-hidden": true,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("defs", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("pattern", {
			id: "hex",
			width: "60",
			height: "52",
			patternUnits: "userSpaceOnUse",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("polygon", {
				points: "30,2 56,16 56,44 30,58 4,44 4,16",
				fill: "none",
				stroke: "currentColor",
				strokeWidth: "0.6"
			})
		}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
			width: "100%",
			height: "100%",
			fill: "url(#hex)"
		})]
	});
}
var IMPACT = [
	{
		icon: import_lucide_react.TrendingUp,
		title: "Unprecedented Growth",
		body: "Global biotech investment surpassing $100B annually, with regulatory complexity growing in parallel."
	},
	{
		icon: import_lucide_react.ShieldCheck,
		title: "Critical Compliance",
		body: "Regulatory missteps cost companies years and millions — our expertise eliminates that risk."
	},
	{
		icon: import_lucide_react.Target,
		title: "Clear Pathways",
		body: "We transform complex regulatory challenges into actionable strategies for market success."
	}
];
function ImpactStrip() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "relative py-28 px-6 bg-slate-50 dark:bg-slate-900",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-6xl mx-auto",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: "The Bio-Revolution" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
					className: "mt-4 font-serif-display italic text-4xl md:text-5xl text-slate-900 dark:text-slate-100 max-w-3xl leading-tight",
					children: [
						"Demands Precision.",
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-emerald-600 dark:text-emerald-400 not-italic",
							children: "We provide it."
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-5 text-slate-600 dark:text-slate-400 max-w-2xl leading-relaxed",
					children: "The biotech, biomanufacturing, and bioAI sectors are experiencing unprecedented growth — but navigating the intricate web of regulatory compliance remains the critical hurdle for startups seeking investment and market entry."
				})
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-14 grid md:grid-cols-3 gap-6",
				children: IMPACT.map((it, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: i * .1,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
						whileHover: { y: -6 },
						transition: {
							type: "spring",
							stiffness: 200,
							damping: 20
						},
						className: "group relative h-full p-8 rounded-3xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 shadow-sm hover:shadow-xl hover:shadow-emerald-500/5 transition-shadow overflow-hidden",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -top-20 -right-20 h-48 w-48 rounded-full bg-emerald-100 dark:bg-emerald-900/30 blur-3xl opacity-0 group-hover:opacity-70 transition-opacity duration-700" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-50 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 ring-1 ring-emerald-100 dark:ring-emerald-900",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(it.icon, { className: "h-5 w-5" })
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "mt-6 font-serif-display italic text-2xl text-slate-900 dark:text-slate-100",
									children: it.title
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-3 text-sm text-slate-600 dark:text-slate-400 leading-relaxed",
									children: it.body
								})
							]
						})]
					})
				}, it.title))
			})]
		})
	});
}
function InvestorTrust() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "relative py-28 px-6 border-y border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-6xl mx-auto grid lg:grid-cols-2 gap-14 items-center",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: "Investor Confidence Starts Here" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
					className: "mt-4 font-serif-display italic text-4xl md:text-5xl text-slate-900 dark:text-slate-100 leading-tight",
					children: [
						"We bridge the gap between groundbreaking science and",
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-sky-600 dark:text-sky-400 not-italic",
							children: "investor readiness."
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-6 text-slate-600 dark:text-slate-400 leading-relaxed",
					children: "Our deep understanding of global regulatory frameworks ensures your company is positioned for robust, de-risked growth."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-7 flex flex-wrap gap-3",
					children: [
						"FDA",
						"EMA",
						"ICH",
						"PMDA"
					].map((a) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "px-5 py-2 rounded-full border border-emerald-200 dark:border-emerald-800 bg-emerald-50 dark:bg-emerald-950/50 text-xs font-mono tracking-[0.25em] text-emerald-700 dark:text-emerald-400 uppercase",
						children: a
					}, a))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-8 space-y-3",
					children: [
						{
							t: "Deep Regulatory Intelligence",
							d: "Former agency reviewers and industry veterans on every engagement.",
							icon: import_lucide_react.ScanSearch
						},
						{
							t: "Accelerated Timelines",
							d: "Proven strategies that compress approval cycles and reduce capital burn.",
							icon: import_lucide_react.Clock
						},
						{
							t: "Investor-Ready Documentation",
							d: "Regulatory packages that instill confidence in due diligence.",
							icon: import_lucide_react.ShieldCheck
						}
					].map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex gap-4 p-4 rounded-2xl border border-slate-200 dark:border-slate-700 bg-slate-50/60 dark:bg-slate-800/60",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex-shrink-0 h-10 w-10 rounded-xl bg-emerald-50 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 grid place-items-center ring-1 ring-emerald-100 dark:ring-emerald-900",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(p.icon, { className: "h-4 w-4" })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
							className: "font-medium text-slate-900 dark:text-slate-100",
							children: p.t
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-sm text-slate-600 dark:text-slate-400 leading-relaxed",
							children: p.d
						})] })]
					}, p.t))
				})
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
				delay: .15,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ParallaxImage, {
					src: sci_reg_default,
					alt: "Pre-IPO compliance dashboard tracking readiness and risk indicators"
				})
			})]
		})
	});
}
function ParallaxImage({ src, alt }) {
	const ref = (0, import_react.useRef)(null);
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ["start end", "end start"]
	});
	const y = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		ref,
		className: "relative",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -inset-4 bg-gradient-to-tr from-emerald-200/50 via-sky-200/40 to-transparent rounded-[2rem] blur-2xl" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "relative overflow-hidden rounded-3xl border border-slate-200 dark:border-slate-700 shadow-2xl shadow-slate-900/10",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.img, {
				src,
				alt,
				style: {
					y,
					scale: 1.1
				},
				className: "w-full h-full object-cover"
			})
		})]
	});
}
var DOMAINS = [
	{
		icon: import_lucide_react.Microscope,
		title: "Biotech Breakthroughs",
		body: "From novel therapeutics to advanced diagnostics, we guide you through FDA, EMA, and global regulatory approvals — navigating IND, NDA, BLA, and CE Mark pathways with precision.",
		tags: [
			"IND",
			"NDA",
			"BLA",
			"CE Mark"
		],
		image: molecule_default,
		imageAlt: "Glowing blue and red molecular network on dark background"
	},
	{
		icon: import_lucide_react.FlaskConical,
		title: "Biomanufacturing Excellence",
		body: "Ensuring compliance across complex manufacturing processes — from cell and gene therapy to large-scale bioprocessing — with GMP strategy, process validation, and facility readiness.",
		tags: [
			"GMP",
			"Cell & Gene",
			"Validation"
		],
		image: manf_default,
		imageAlt: "Industrial bioreactor facility with blue neon lighting"
	},
	{
		icon: import_lucide_react.Cpu,
		title: "BioAI Innovation",
		body: "Pioneering regulatory pathways for AI-driven drug discovery and development, addressing SaMD classifications, algorithmic accountability, and the evolving FDA AI/ML framework.",
		tags: [
			"SaMD",
			"AI/ML",
			"Algorithm Gov."
		],
		image: brainr_default,
		imageAlt: "Glowing digital brain with neural network connections in blue and red"
	}
];
function DomainsSection() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "relative py-36 px-6 bg-slate-50 dark:bg-slate-900 overflow-hidden",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-6xl mx-auto",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "text-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: "Unlocking Your Company's Potential" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
					className: "mt-4 font-serif-display italic text-4xl md:text-5xl text-slate-900 dark:text-slate-100 leading-tight",
					children: [
						"From molecule to market —",
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-emerald-600 dark:text-emerald-400 not-italic",
							children: "specialized expertise"
						}),
						" ",
						"across the full spectrum."
					]
				})]
			}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-16 grid lg:grid-cols-3 gap-8",
				children: DOMAINS.map((d, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: i * .12,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
						whileHover: { y: -8 },
						transition: {
							type: "spring",
							stiffness: 200,
							damping: 20
						},
						className: "group relative h-full rounded-3xl overflow-hidden border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 shadow-sm hover:shadow-2xl hover:shadow-emerald-900/10 transition-shadow",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative h-52 overflow-hidden",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: d.image,
									alt: d.imageAlt,
									loading: "lazy",
									decoding: "async",
									className: "w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-white dark:from-slate-800 via-white/20 dark:via-slate-800/20 to-transparent" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-emerald-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" })
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative flex flex-col gap-5 p-8",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-serif-display italic text-2xl md:text-3xl text-slate-900 dark:text-slate-100 leading-snug",
								children: d.title
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 text-sm text-slate-600 dark:text-slate-400 leading-relaxed",
								children: d.body
							})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex flex-wrap gap-2 pt-2 border-t border-slate-200 dark:border-slate-700",
								children: d.tags.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "px-3 py-1.5 rounded-full bg-slate-100 dark:bg-slate-700 border border-slate-200 dark:border-slate-600 text-[10px] font-mono tracking-[0.2em] uppercase text-slate-600 dark:text-slate-300",
									children: t
								}, t))
							})]
						})]
					})
				}, d.title))
			})]
		})
	});
}
var STEPS = [
	{
		icon: import_lucide_react.Compass,
		title: "Regulatory Gap Analysis",
		body: "Map current documentation, product claims, scientific evidence, manufacturing status, and jurisdictional risks."
	},
	{
		icon: import_lucide_react.FileCheck2,
		title: "Pathway Strategy",
		body: "Define FDA, EMA, ICH, GMP, CE Mark, or AI/ML regulatory pathways based on product category and market goals."
	},
	{
		icon: import_lucide_react.FlaskConical,
		title: "Evidence & Documentation",
		body: "Build investor-ready regulatory packages, quality documentation, validation plans, and submission roadmaps."
	},
	{
		icon: import_lucide_react.Send,
		title: "Submission Readiness",
		body: "Prepare teams for agency interactions, due diligence, audits, and milestone-based regulatory execution."
	},
	{
		icon: import_lucide_react.ShieldCheck,
		title: "Market & Governance Alignment",
		body: "Align founders, boards, investors, and technical teams around approval timelines, risk controls, and commercialization readiness."
	}
];
function ProvenProcess() {
	const ref = (0, import_react.useRef)(null);
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ["start start", "end end"]
	});
	const lineWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
	const activeIdx = useTransform(scrollYProgress, (v) => Math.min(STEPS.length - 1, Math.floor(v * STEPS.length)));
	const bgScale = useTransform(scrollYProgress, [0, 1], [1.1, 1.25]);
	const bgOpacity = useTransform(scrollYProgress, [
		0,
		.5,
		1
	], [
		.2,
		.35,
		.2
	]);
	const [active, setActive] = (0, import_react.useState)(0);
	const [isDark, setIsDark] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => activeIdx.on("change", (v) => setActive(v)), [activeIdx]);
	(0, import_react.useEffect)(() => {
		window.matchMedia("(prefers-color-scheme: dark)");
		const check = () => setIsDark(document.documentElement.classList.contains("dark"));
		check();
		const observer = new MutationObserver(check);
		observer.observe(document.documentElement, {
			attributes: true,
			attributeFilter: ["class"]
		});
		return () => observer.disconnect();
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "process",
		ref,
		className: "relative bg-white dark:bg-slate-950",
		style: { height: `${100 + STEPS.length * 60}vh` },
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "sticky top-0 h-screen flex flex-col justify-center px-6 overflow-hidden",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
					className: "absolute inset-0 -z-10",
					style: {
						scale: bgScale,
						opacity: bgOpacity
					},
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: work_reg_default,
						alt: "",
						loading: "lazy",
						decoding: "async",
						className: "h-full w-full object-cover"
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 -z-10 bg-gradient-to-b from-white/85 via-white/75 to-white/95 dark:from-slate-950/85 dark:via-slate-950/75 dark:to-slate-950/95" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,rgba(16,185,129,0.08),transparent_60%)]" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative max-w-6xl mx-auto w-full",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: "Our Proven Process" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
							className: "mt-4 font-serif-display italic text-4xl md:text-5xl text-slate-900 dark:text-slate-100 leading-tight max-w-3xl",
							children: [
								"From ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-emerald-600 dark:text-emerald-400 not-italic",
									children: "Vision"
								}),
								" ",
								"to ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-sky-600 dark:text-sky-400 not-italic",
									children: "Validation"
								}),
								"."
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-5 text-slate-600 dark:text-slate-400 max-w-2xl",
							children: "A structured, milestone-driven methodology that transforms regulatory complexity into competitive advantage."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-14 relative",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute left-0 right-0 top-7 h-px bg-slate-200 dark:bg-slate-700" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
									className: "absolute left-0 top-7 h-px bg-gradient-to-r from-emerald-500 via-sky-500 to-emerald-500",
									style: { width: lineWidth }
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "grid grid-cols-2 md:grid-cols-5 gap-6",
									children: STEPS.map((s, i) => {
										const isActive = i <= active;
										return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "relative",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
												animate: {
													scale: isActive ? 1 : .85,
													backgroundColor: isActive ? "rgb(5,150,105)" : isDark ? "rgb(15,23,42)" : "rgb(255,255,255)",
													borderColor: isActive ? "rgb(16,185,129)" : isDark ? "rgb(51,65,85)" : "rgb(226,232,240)",
													color: isActive ? "#ffffff" : isDark ? "#94a3b8" : "#475569"
												},
												transition: {
													duration: .5,
													ease: [
														.22,
														1,
														.36,
														1
													]
												},
												className: "relative z-10 mx-auto h-14 w-14 rounded-full border-2 grid place-items-center shadow-md",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(s.icon, { className: "h-5 w-5" })
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
												animate: { opacity: isActive ? 1 : .5 },
												transition: { duration: .4 },
												className: "mt-6 text-center",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
													className: "text-[10px] font-mono tracking-[0.3em] text-emerald-600 uppercase",
													children: ["Step 0", i + 1]
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
													className: "mt-2 font-serif-display italic text-xl text-slate-900 dark:text-slate-100",
													children: s.title
												})]
											})]
										}, s.title);
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-12 max-w-2xl mx-auto text-center min-h-[5rem]",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, {
										mode: "wait",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.p, {
											initial: {
												opacity: 0,
												y: 14
											},
											animate: {
												opacity: 1,
												y: 0
											},
											exit: {
												opacity: 0,
												y: -14
											},
											transition: { duration: .4 },
											className: "text-slate-700 dark:text-slate-300 leading-relaxed",
											children: STEPS[active].body
										}, active)
									})
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-10 text-center text-xs text-slate-500 dark:text-slate-500 max-w-2xl mx-auto",
							children: "Every engagement begins with a comprehensive regulatory gap analysis and concludes with a portfolio of investor-ready compliance assets."
						})
					]
				})
			]
		})
	});
}
var STATS = [
	{
		value: 200,
		suffix: "+",
		label: "Regulatory Submissions",
		sub: "Across global agencies",
		icon: import_lucide_react.Briefcase
	},
	{
		value: 40,
		suffix: "%",
		label: "Faster Time-to-Market",
		sub: "Average client improvement",
		icon: import_lucide_react.Clock
	},
	{
		value: 98,
		suffix: "%",
		label: "First-Cycle Approval",
		sub: "Rate for prepared submissions",
		icon: import_lucide_react.ShieldCheck
	},
	{
		value: 50,
		suffix: "+",
		label: "Expert Advisors",
		sub: "Former FDA, EMA & ICH veterans",
		icon: import_lucide_react.Users
	}
];
function Counter({ to, suffix }) {
	const ref = (0, import_react.useRef)(null);
	const inView = useInView(ref, {
		once: true,
		margin: "0px"
	});
	const [n, setN] = (0, import_react.useState)(0);
	(0, import_react.useEffect)(() => {
		if (!inView) return;
		const start = performance.now();
		const dur = 1600;
		let raf = 0;
		const tick = (t) => {
			const p = Math.min(1, (t - start) / dur);
			const eased = 1 - Math.pow(1 - p, 3);
			setN(Math.round(eased * to));
			if (p < 1) raf = requestAnimationFrame(tick);
		};
		raf = requestAnimationFrame(tick);
		return () => cancelAnimationFrame(raf);
	}, [inView, to]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
		ref,
		children: [n, suffix]
	});
}
function NumbersStrip() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "relative py-28 px-6 border-y border-slate-200 dark:border-slate-800 bg-gradient-to-b from-slate-50 via-white to-slate-50 dark:from-slate-900 dark:via-slate-950 dark:to-slate-900",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-6xl mx-auto",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "text-center max-w-3xl mx-auto",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: "By the Numbers" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
						className: "mt-4 font-serif-display italic text-4xl md:text-5xl text-slate-900 dark:text-slate-100 leading-tight",
						children: [
							"Every complex journey has a",
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-emerald-600 dark:text-emerald-400 not-italic",
								children: "clear path forward."
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-5 text-slate-600 dark:text-slate-400 leading-relaxed",
						children: "Regulatory uncertainty is the single greatest threat to biotech investment returns. We convert that uncertainty into structured, predictable milestones."
					})
				]
			}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-14 grid grid-cols-2 lg:grid-cols-4 gap-4",
				children: STATS.map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: i * .08,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "h-full p-8 rounded-3xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 shadow-sm hover:shadow-lg transition-shadow duration-500",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-start justify-between gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "font-sans text-4xl md:text-5xl font-bold tracking-tight bg-gradient-to-br from-sky-500 to-emerald-500 bg-clip-text text-transparent",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Counter, {
										to: s.value,
										suffix: s.suffix
									})
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "flex-shrink-0 h-10 w-10 rounded-xl bg-rose-50 dark:bg-rose-950/40 text-rose-400 grid place-items-center ring-1 ring-rose-100 dark:ring-rose-900/50",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(s.icon, { className: "h-4 w-4" })
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-4 text-sm font-semibold text-slate-900 dark:text-slate-100",
								children: s.label
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-xs text-slate-500 dark:text-slate-400",
								children: s.sub
							})
						]
					})
				}, s.label))
			})]
		})
	});
}
var ARCHITECTS = [
	{
		icon: import_lucide_react.Award,
		title: "Former Agency Reviewers",
		body: "Veterans from FDA, EMA, and PMDA who understand the reviewer mindset and how to build winning submissions."
	},
	{
		icon: import_lucide_react.Briefcase,
		title: "Industry Strategists",
		body: "Senior consultants with decades of experience at top-tier pharma, biotech, and medical device companies."
	},
	{
		icon: import_lucide_react.Cpu,
		title: "BioAI Specialists",
		body: "Pioneers in AI/ML regulatory science, bridging computational innovation with emerging global frameworks."
	},
	{
		icon: import_lucide_react.ShieldCheck,
		title: "GMP Compliance Experts",
		body: "Deep specialists in biomanufacturing quality systems, facility design, and process validation strategy."
	}
];
function ArchitectsGrid() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "relative py-28 px-6 bg-white dark:bg-slate-950",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-6xl mx-auto",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: "Meet the Architects" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
				className: "mt-4 font-serif-display italic text-4xl md:text-5xl text-slate-900 dark:text-slate-100 leading-tight max-w-3xl",
				children: [
					"of your",
					" ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-emerald-600 dark:text-emerald-400 not-italic",
						children: "regulatory success"
					}),
					"."
				]
			})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-14 grid md:grid-cols-2 lg:grid-cols-4 gap-5",
				children: ARCHITECTS.map((a, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: i * .08,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
						whileHover: { y: -6 },
						transition: {
							type: "spring",
							stiffness: 220,
							damping: 22
						},
						className: "group h-full p-7 rounded-3xl border border-slate-200 dark:border-slate-700 bg-slate-50/60 dark:bg-slate-800/60 hover:bg-white dark:hover:bg-slate-800 hover:border-emerald-200 dark:hover:border-emerald-700 hover:shadow-xl hover:shadow-emerald-500/5 transition-all",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "h-12 w-12 rounded-2xl bg-emerald-50 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 grid place-items-center ring-1 ring-emerald-100 dark:ring-emerald-900 group-hover:scale-110 transition-transform",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(a.icon, { className: "h-5 w-5" })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-6 font-serif-display italic text-xl text-slate-900 dark:text-slate-100 leading-snug",
								children: a.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 text-sm text-slate-600 dark:text-slate-400 leading-relaxed",
								children: a.body
							})
						]
					})
				}, a.title))
			})]
		})
	});
}
var AUDIENCES = [
	{
		icon: import_lucide_react.Users,
		title: "For Founders",
		body: "Build a regulatory strategy that accelerates your path to commercialization and scales with your ambition."
	},
	{
		icon: import_lucide_react.TrendingUp,
		title: "For Investors",
		body: "Conduct deeper due diligence with confidence — our assessments illuminate regulatory risk and timeline clarity."
	},
	{
		icon: import_lucide_react.Building2,
		title: "For Boards",
		body: "Establish governance-grade compliance infrastructure that protects enterprise value at every stage."
	}
];
function PartnerBand({ openContactModal }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "relative py-28 px-6 overflow-hidden bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-950",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(14,165,233,0.10),transparent_60%)] dark:opacity-50" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(16,185,129,0.10),transparent_60%)] dark:opacity-50" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative max-w-6xl mx-auto",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "text-center max-w-3xl mx-auto",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, { children: "Partner With Us" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
								className: "mt-4 font-serif-display italic text-4xl md:text-6xl text-slate-900 dark:text-slate-100 leading-tight",
								children: [
									"Accelerate your",
									" ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "bg-gradient-to-r from-emerald-600 to-sky-600 bg-clip-text text-transparent not-italic",
										children: "investment trajectory."
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-6 text-slate-600 dark:text-slate-400 leading-relaxed",
								children: "Ready to de-risk your venture and attract serious capital? Our regulatory expertise becomes your company's most significant competitive asset — from Series A readiness to IPO compliance posture."
							})
						]
					}) }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-14 grid md:grid-cols-3 gap-5",
						children: AUDIENCES.map((a, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
							delay: i * .1,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "h-full p-8 rounded-3xl border border-slate-200 dark:border-slate-700 bg-white/80 dark:bg-slate-800/80 backdrop-blur hover:bg-white dark:hover:bg-slate-800 hover:shadow-xl transition-all",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "h-11 w-11 rounded-xl bg-emerald-50 dark:bg-emerald-950 border border-emerald-100 dark:border-emerald-900 grid place-items-center text-emerald-600 dark:text-emerald-400",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(a.icon, { className: "h-5 w-5" })
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "mt-6 font-serif-display italic text-2xl text-slate-900 dark:text-slate-100",
										children: a.title
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-3 text-sm text-slate-600 dark:text-slate-400 leading-relaxed",
										children: a.body
									})
								]
							})
						}, a.title))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: .2,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-14 flex flex-wrap gap-4 justify-center",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								onClick: openContactModal,
								className: "group inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-emerald-600 text-white text-sm font-medium tracking-wide hover:bg-emerald-700 transition-all hover:shadow-[0_14px_40px_-12px_rgba(5,150,105,0.55)]",
								children: ["Schedule a Consultation", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_lucide_react.ArrowRight, { className: "h-4 w-4 transition-transform group-hover:translate-x-1" })]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link$1, {
								to: "/contact",
								className: "inline-flex items-center gap-2 px-7 py-3.5 rounded-full border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-200 text-sm font-medium tracking-wide hover:bg-slate-50 dark:hover:bg-slate-700 transition-all",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_lucide_react.Download, { className: "h-4 w-4" }), "Download Investor Deck"]
							})]
						})
					})
				]
			})
		]
	});
}
function TagStrip() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "relative py-16 px-6 border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-6xl mx-auto text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "font-serif-display italic text-2xl md:text-3xl text-slate-800 dark:text-slate-200 leading-snug",
					children: [
						"The future of bio-innovation is",
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-emerald-600 dark:text-emerald-400",
							children: "regulated"
						}),
						",",
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-sky-600 dark:text-sky-400",
							children: "funded"
						}),
						", and built here."
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 text-xs font-mono tracking-[0.3em] uppercase text-slate-500 dark:text-slate-500",
					children: "Biotech · Biomanufacturing · BioAI"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-8 flex flex-wrap justify-center gap-2",
					children: [
						"FDA Regulatory Strategy",
						"EMA Submissions",
						"GMP Compliance",
						"AI/ML Pathways",
						"Investor Readiness"
					].map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "px-4 py-2 rounded-full border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-xs text-slate-600 dark:text-slate-400 tracking-wide",
						children: t
					}, t))
				})
			]
		})
	});
}
var SplitComponent = RegulatoryCompliancePage;
//#endregion
export { SplitComponent as component };
