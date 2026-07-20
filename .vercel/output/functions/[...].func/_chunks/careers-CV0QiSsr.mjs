import { r as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { t as require_lucide_react } from "../_libs/lucide-react.mjs";
import { t as PageShell } from "../_PageShell-BkJHn740.mjs";
import { n as useContactModal } from "./ContactModal-G1XSPA_v.mjs";
//#region dist/server/assets/careers-CV0QiSsr.js
var import_react = /* @__PURE__ */ __toESM(require_react(), 1);
var import_jsx_runtime = require_jsx_runtime();
var import_lucide_react = require_lucide_react();
var careerp_default = "/assets/careerp-BTa7ITXJ.mp4";
function CareersHero() {
	const { open } = useContactModal();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "relative overflow-hidden",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
			"aria-hidden": true,
			className: "pointer-events-none absolute inset-0 h-full w-full opacity-[0.07] dark:opacity-[0.12]",
			preserveAspectRatio: "xMidYMid slice",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("defs", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("pattern", {
				id: "careers-grid",
				width: "120",
				height: "120",
				patternUnits: "userSpaceOnUse",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
					d: "M0 60 L120 60 M60 0 L60 120 M0 0 L120 120 M120 0 L0 120",
					stroke: "currentColor",
					strokeWidth: "0.6",
					fill: "none",
					className: "text-accent-blue"
				})
			}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				width: "100%",
				height: "100%",
				fill: "url(#careers-grid)"
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative max-w-7xl mx-auto px-6 py-[clamp(4rem,8vw,6rem)] grid grid-cols-[repeat(auto-fit,minmax(min(100%,440px),1fr))] gap-12 items-center",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "order-2 lg:order-1",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-[11px] tracking-[0.32em] uppercase text-accent-blue font-semibold",
						children: "Careers · Quantum Codon"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
						className: "font-bagel mt-5 leading-[1.05] text-[clamp(2.5rem,6vw,4.5rem)]",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-accent-blue/80 mr-2 align-top text-[clamp(1.75rem,3vw,2.5rem)]",
								children: "“"
							}),
							"Shape the Future.",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", {
								className: "italic",
								children: "Engineer it with Quantum Codon."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-accent-blue/80 ml-2 align-top text-[clamp(1.75rem,3vw,2.5rem)]",
								children: "”"
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-6 w-full max-w-xl text-[clamp(0.875rem,1.5vw,1.125rem)] text-muted-foreground leading-relaxed",
						children: "We're recruiting pioneers across biology, quantum computation, and software engineering. If you're driven to decode the genome's untouched frontier — there's a bench, a terminal, and a team waiting for you here."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-9 flex flex-wrap items-center gap-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							onClick: open,
							className: "group inline-flex items-center gap-2 rounded-full bg-accent-blue px-7 py-3 text-sm font-semibold text-white shadow-lg shadow-accent-blue/25 hover:opacity-90 transition",
							children: ["Get in touch", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_lucide_react.ArrowRight, { className: "h-4 w-4 transition-transform group-hover:translate-x-0.5" })]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "#open-positions",
							className: "text-sm font-medium text-foreground/80 hover:text-foreground transition story-link",
							children: "See open roles"
						})]
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "order-1 lg:order-2",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative rounded-3xl overflow-hidden border border-black/10 dark:border-white/10 shadow-[0_30px_80px_-30px_rgba(30,58,138,0.35)] bg-black/5 dark:bg-white/5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("video", {
						className: "block w-full h-full object-cover aspect-[4/3]",
						autoPlay: true,
						muted: true,
						loop: true,
						playsInline: true,
						preload: "metadata",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("source", {
							src: careerp_default,
							type: "video/mp4"
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/10 rounded-3xl" })]
				})
			})]
		})]
	});
}
var VALUES = [
	{
		title: "We act boldly with integrity.",
		body: "Curiosity, not convention, drives every hypothesis we test. We push the science even when it's hard.",
		accent: "#a435c4",
		image: "/hex-microscope.png"
	},
	{
		title: "We move with urgency because patients are waiting.",
		body: "We compress discovery cycles without ever compromising the science behind them.",
		accent: "#e6542b",
		image: "/hex-rocket.png"
	},
	{
		title: "We care deeply and engage directly.",
		body: "Open notebooks, candid reviews, fast feedback. We're better together than apart.",
		accent: "#d6248c",
		image: "/hex-gears.png"
	},
	{
		title: "We take ownership and accountability.",
		body: "From wet-lab to wet-ware, every teammate carries the work — and the responsibility — end to end.",
		accent: "#2bb24a",
		image: "/hex-mountain.png"
	},
	{
		title: "We learn actively and adapt rapidly.",
		body: "We grow faster when we share what we got wrong. Iteration is our default mode.",
		accent: "#e0a52b",
		image: "/hex-lightbulb.png"
	},
	{
		title: "We are One Codon.",
		body: "Biologists, physicists, and engineers in the same room. One mission, one team, zero silos.",
		accent: "#1f7fb0",
		image: "/hex-infinity.png"
	}
];
function HexCard({ value, index }) {
	const [flipped, setFlipped] = (0, import_react.useState)(false);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "hex-flip group",
		onClick: () => setFlipped((f) => !f),
		onMouseLeave: () => setFlipped(false),
		style: { animationDelay: `${index * 80}ms` },
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: `hex-flip-inner ${flipped ? "is-flipped" : ""}`,
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "hex-face hex-face-front",
				style: { backgroundColor: value.accent },
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "absolute inset-0",
						style: {
							backgroundImage: `url(${value.image})`,
							backgroundSize: "cover",
							backgroundPosition: "center",
							filter: "grayscale(100%) contrast(1.05) brightness(0.9)",
							mixBlendMode: "multiply",
							opacity: .85
						}
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "absolute inset-0",
						style: {
							backgroundColor: value.accent,
							mixBlendMode: "screen",
							opacity: .25
						}
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "relative z-10 flex h-full w-full items-start justify-start px-[14%] pt-[26%]",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-left text-white text-[0.95rem] md:text-[1.05rem] leading-[1.25] font-medium tracking-[-0.005em]",
							children: [
								value.title,
								" ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									"aria-hidden": true,
									className: "inline-block translate-y-[1px]",
									children: "→"
								})
							]
						})
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "hex-face hex-face-back",
				style: { backgroundColor: value.accent },
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex h-full w-full flex-col items-start justify-center px-[14%] text-left",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-white text-[0.95rem] md:text-[1.05rem] leading-[1.25] font-medium",
							children: value.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "my-3 h-[2px] w-10 rounded-full bg-white/60" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-[12px] md:text-[13px] text-white/90 leading-relaxed",
							children: value.body
						})
					]
				})
			})]
		})
	});
}
function ValuesHexGrid() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "relative py-20 md:py-28 overflow-hidden bg-[#f7f5f0]",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			"aria-hidden": true,
			className: "absolute inset-0 opacity-[0.18] pointer-events-none",
			style: {
				backgroundImage: "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='180' height='156' viewBox='0 0 180 156'><g fill='none' stroke='%23b8b2a3' stroke-width='1'><polygon points='45,4 86,27 86,73 45,96 4,73 4,27'/><polygon points='135,4 176,27 176,73 135,96 94,73 94,27'/><polygon points='90,58 131,81 131,127 90,150 49,127 49,81'/></g></svg>\")",
				backgroundSize: "180px 156px"
			}
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative max-w-6xl mx-auto px-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "text-center max-w-2xl mx-auto",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
							className: "font-bagel text-[clamp(1.75rem,4vw,3rem)] leading-[1.1] text-[#1a1a1a]",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									style: {
										background: "linear-gradient(90deg, #7c3aed 0%, #5b21b6 100%)",
										WebkitBackgroundClip: "text",
										WebkitTextFillColor: "transparent",
										backgroundClip: "text"
									},
									children: "Six values."
								}),
								" ",
								"One operating system."
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "mx-auto mt-3 h-[2px] w-20 rounded-full bg-[linear-gradient(90deg,#c084fc,#f59e0b)]" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-5 text-sm md:text-base text-[#5a5a5a]",
							children: [
								"Hover or tap each value to read how we work.",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", { className: "hidden md:block" }),
								"These aren't posters on a wall — they're the decisions we make every day."
							]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "hex-grid mt-14",
					children: VALUES.map((v, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HexCard, {
						value: v,
						index: i
					}, v.title))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative mt-12 flex items-center justify-center gap-2 text-sm text-[#5a5a5a]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "inline-flex h-7 w-7 items-center justify-center rounded-full bg-accent-purple/10 text-accent-purple",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_lucide_react.Infinity, { className: "h-4 w-4" })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
						"Different strengths. Shared purpose.",
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-accent-purple font-medium",
							children: "One Codon."
						})
					] })]
				})
			]
		})]
	});
}
var JOBS = [];
var TABS = [
	"All",
	"Research",
	"Engineering",
	"Operations"
];
function OpenPositions() {
	const { open } = useContactModal();
	const [active, setActive] = (0, import_react.useState)("All");
	const filtered = (0, import_react.useMemo)(() => active === "All" ? JOBS : JOBS.filter((j) => j.track === active), [active]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "open-positions",
		className: "relative py-20 md:py-24",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-5xl mx-auto px-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "text-center",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-bagel text-4xl md:text-5xl",
						children: "Open Positions"
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-10 border-b border-border",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex items-center justify-center gap-8 md:gap-14 -mb-px",
						children: TABS.map((tab) => {
							const isActive = active === tab;
							return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								onClick: () => setActive(tab),
								className: `relative pb-3 text-xs md:text-sm font-mono-data uppercase tracking-wider transition focus-visible:ring-2 focus-visible:ring-accent-blue rounded-sm ${isActive ? "text-accent-blue font-semibold" : "text-muted-foreground hover:text-foreground"}`,
								children: [tab, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: `absolute left-0 right-0 -bottom-px h-[2px] rounded-full transition-all ${isActive ? "bg-accent-blue scale-x-100" : "bg-transparent scale-x-0"}` })]
							}, tab);
						})
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-14 min-h-[180px]",
					children: filtered.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-center text-sm text-muted-foreground",
						children: "No openings in this track right now — but we're always reading inbound notes."
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "space-y-3",
						children: filtered.map((j) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-col md:flex-row md:items-center md:justify-between gap-4 rounded-2xl border border-border bg-card/70 p-6 backdrop-blur hover:bg-card transition",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-[10px] tracking-[0.24em] uppercase text-accent-purple font-semibold",
									children: j.dept
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "font-bagel text-xl mt-1",
									children: j.title
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs text-muted-foreground mt-1",
									children: j.type
								})
							] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: "mailto:careers@qcodon.com",
								className: "self-start md:self-auto inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-2 text-xs font-semibold text-background hover:opacity-90 transition",
								children: ["Apply Now ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_lucide_react.ArrowRight, { className: "h-3.5 w-3.5" })]
							})]
						}, j.title))
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-20",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-3xl border border-border bg-card shadow-[0_20px_60px_-25px_rgba(0,0,0,0.25)] px-6 py-12 md:px-12 md:py-14 text-center",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-bagel text-3xl md:text-4xl",
								children: "Ready to Build What's Next?"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 text-muted-foreground max-w-xl mx-auto",
								children: "We're always reading notes from driven, curious minds. Tell us what you'd build if the dark genome was your canvas."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
										href: "mailto:careers@qcodon.com",
										className: "text-accent-blue font-medium hover:underline",
										children: "✉ careers@qcodon.com"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-muted-foreground hidden sm:inline",
										children: "|"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
										href: "https://www.qcodon.com/careers",
										className: "text-accent-blue font-medium hover:underline",
										children: "◍ qcodon.com/careers"
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								onClick: open,
								className: "group mt-7 inline-flex items-center gap-2 rounded-full bg-accent-blue px-7 py-3 text-sm font-semibold text-white shadow-lg shadow-accent-blue/25 hover:opacity-90 transition",
								children: ["Let's talk", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_lucide_react.ArrowRight, { className: "h-4 w-4 transition-transform group-hover:translate-x-0.5" })]
							})
						]
					})
				})
			]
		})
	});
}
function CareersPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PageShell, {
		spotlight: "from-amber-500/10 via-transparent to-transparent",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CareersHero, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ValuesHexGrid, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(OpenPositions, {})
		]
	});
}
var SplitComponent = CareersPage;
//#endregion
export { SplitComponent as component };
