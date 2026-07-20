import "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { t as Link$1 } from "./router-compat-Byun9neG.mjs";
import { n as getIndustry, r as industries, t as Route } from "./industries._slug-Bt496p4b.mjs";
require_react();
var import_jsx_runtime = require_jsx_runtime();
function IndustryDetailPage({ slug }) {
	const i = getIndustry(slug);
	if (!i) return null;
	const Icon = i.icon;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "pt-24 pb-20 min-h-screen bg-[#f0f4f8] dark:bg-[#0c131f] transition-colors duration-300",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "max-w-5xl mx-auto px-6 mb-8",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link$1, {
					to: "/",
					className: "text-xs tracking-[0.25em] uppercase text-muted-foreground hover:text-foreground transition",
					children: "← Back to home"
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "max-w-5xl mx-auto px-6",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: `premium-glow-container rounded-3xl border p-10 md:p-14 ${i.color} backdrop-blur`,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "lg:col-span-7",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-3 mb-6",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "flex h-12 w-12 items-center justify-center rounded-2xl bg-accent-blue/10 text-accent-blue",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-6 w-6" })
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: `font-mono text-xs tracking-widest uppercase ${i.accent}`,
										children: i.eyebrow
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
									className: "font-serif-display text-[clamp(2rem,4.5vw,3.75rem)] mt-2 leading-tight",
									children: i.headline
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-5 text-[clamp(0.875rem,1.5vw,1.125rem)] text-muted-foreground leading-relaxed",
									children: i.subtext
								})
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "lg:col-span-5 mt-6 lg:mt-0 relative w-full aspect-[4/3] lg:aspect-square overflow-hidden rounded-2xl border border-accent-blue/10 shadow-2xl bg-slate-950/5 dark:bg-slate-950/25",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: `/industry-${i.slug}-hero.png`,
								alt: `${i.title} Industry Graphic`,
								decoding: "async",
								className: "w-full h-full object-cover transition-transform duration-700 hover:scale-105"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-black/10 to-transparent pointer-events-none" })]
						})]
					})
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "max-w-5xl mx-auto px-6 mt-16",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs tracking-[0.3em] text-accent-blue uppercase",
						children: "Overview"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
						className: "font-serif-display text-3xl md:text-4xl mt-3",
						children: ["How we serve ", i.title.toLowerCase()]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-5 text-base text-muted-foreground leading-relaxed max-w-3xl",
						children: i.overview
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "max-w-5xl mx-auto px-6 mt-16",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs tracking-[0.3em] text-accent-purple uppercase",
						children: "Highlights"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-serif-display text-[clamp(1.75rem,3vw,2.5rem)] mt-3",
						children: "What we bring"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-8 grid grid-cols-[repeat(auto-fit,minmax(min(100%,300px),1fr))] gap-6",
						children: i.highlights.map((h) => {
							const HIcon = h.icon;
							return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "group p-8 rounded-2xl border border-foreground/10 bg-white/60 dark:bg-white/5 backdrop-blur flex flex-col items-center text-center gap-4 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:border-accent-blue/30 hover:bg-white/80 dark:hover:bg-white/10",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "flex h-14 w-14 items-center justify-center rounded-full bg-accent-blue text-white shadow-md transition-all duration-500 group-hover:scale-110 group-hover:rotate-6",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HIcon, { className: "h-6 w-6" })
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "font-serif-display text-lg font-bold text-foreground transition-colors duration-300 group-hover:text-accent-blue leading-snug",
									children: h.title
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-3 text-sm text-muted-foreground leading-relaxed max-w-sm",
									children: h.body
								})] })]
							}, h.title);
						})
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "max-w-5xl mx-auto px-6 mt-16",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs tracking-[0.3em] text-accent-blue uppercase",
						children: "Use Cases"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-serif-display text-[clamp(1.75rem,3vw,2.5rem)] mt-3",
						children: "Where it applies"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-8 grid grid-cols-[repeat(auto-fit,minmax(min(100%,220px),1fr))] gap-5",
						children: i.useCases.map((u) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "group p-6 rounded-2xl border border-foreground/10 bg-white/60 dark:bg-white/5 backdrop-blur transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:border-accent-blue/30 hover:bg-white/85 dark:hover:bg-white/10",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-semibold text-base transition-colors duration-300 group-hover:text-accent-blue mb-2",
								children: u.title
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm text-muted-foreground leading-relaxed",
								children: u.body
							})]
						}, u.title))
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "max-w-5xl mx-auto px-6 mt-20",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs tracking-[0.3em] text-accent-purple uppercase font-bold",
						children: "Collaboration Model"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-serif-display text-[clamp(1.75rem,3vw,2.5rem)] mt-3 text-foreground",
						children: "How We Partner"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 text-sm text-muted-foreground max-w-2xl leading-relaxed",
						children: "An integrated framework designed to transition dark genome insights directly into your institutional research and deployment pipelines."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-8 grid grid-cols-[repeat(auto-fit,minmax(min(100%,180px),1fr))] gap-4 relative",
						children: i.workflow.map((w) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "group p-6 rounded-2xl border border-foreground/5 bg-white/70 dark:bg-white/[0.02] shadow-sm flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:border-accent-blue/20 hover:bg-white/90 dark:hover:bg-white/5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-serif-display text-3xl font-bold bg-gradient-to-r from-accent-blue to-accent-purple bg-clip-text text-transparent block mb-4 transition-transform duration-300 group-hover:scale-110 origin-left",
								children: w.step
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
								className: "font-semibold text-sm text-foreground mb-2 transition-colors duration-300 group-hover:text-accent-blue",
								children: w.title
							})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs text-muted-foreground leading-relaxed mt-2",
								children: w.body
							})]
						}, w.step))
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "max-w-5xl mx-auto px-6 mt-20",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-3xl border border-foreground/10 p-10 md:p-14 bg-gradient-to-br from-accent-blue/10 via-accent-purple/10 to-accent-emerald/10 text-center",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
							className: "font-serif-display text-[clamp(1.75rem,3vw,2.5rem)]",
							children: ["Partner with us in ", i.title]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-muted-foreground max-w-2xl mx-auto",
							children: "Tell us about your goals and we'll map the right Deep Codon capabilities to your roadmap."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-7 flex flex-wrap justify-center gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link$1, {
								to: "/contact",
								className: "px-6 py-3 rounded-full bg-foreground text-background text-sm font-semibold hover:opacity-90 transition",
								children: "Partner with us"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link$1, {
								to: "/",
								className: "px-6 py-3 rounded-full border border-foreground/20 text-sm hover:bg-foreground/5 transition",
								children: "Explore other industries"
							})]
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-14",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs tracking-[0.3em] text-muted-foreground uppercase",
						children: "Other industries"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-5 grid grid-cols-[repeat(auto-fit,minmax(min(100%,220px),1fr))] gap-4",
						children: industries.filter((x) => x.slug !== i.slug).map((x) => {
							const XIcon = x.icon;
							return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link$1, {
								to: "/industries/$slug",
								params: { slug: x.slug },
								className: "offering-card group p-3.5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-2 mb-1.5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(XIcon, { className: "h-4 w-4 text-foreground/80 shrink-0 group-hover:text-accent-blue transition-colors" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "text-sm font-semibold leading-tight text-foreground group-hover:text-accent-blue transition-colors",
										children: x.title
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs text-muted-foreground leading-snug line-clamp-2",
									children: x.subtext
								})]
							}, x.slug);
						})
					})]
				})]
			})
		]
	});
}
var SplitComponent = () => {
	const { slug } = Route.useLoaderData();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(IndustryDetailPage, { slug });
};
//#endregion
export { SplitComponent as component };
