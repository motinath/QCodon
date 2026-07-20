import "./_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "./_libs/react+tanstack__react-query.mjs";
import { t as Link$1 } from "./_chunks/router-compat-Byun9neG.mjs";
import { n as getBlogPost, t as blogPosts } from "./_chunks/blogs-data-B64K1K-s.mjs";
import { t as Route } from "./_slug-DIOVogrZ.mjs";
import { t as require_lucide_react } from "./_libs/lucide-react.mjs";
require_react();
var import_jsx_runtime = require_jsx_runtime();
var import_lucide_react = require_lucide_react();
function BlogPostDetail({ slug }) {
	const post = getBlogPost(slug);
	if (!post) return null;
	const readNextPosts = blogPosts.filter((p) => p.slug !== slug).slice(0, 2);
	const getSectionIcon = (title) => {
		const t = title.toLowerCase();
		if (t.includes("mining") || t.includes("genome") || t.includes("genomics") || t.includes("dna")) return import_lucide_react.Dna;
		if (t.includes("intelligence") || t.includes("ai") || t.includes("brain")) return import_lucide_react.Brain;
		if (t.includes("quantum") || t.includes("simulate") || t.includes("atom")) return import_lucide_react.Atom;
		if (t.includes("therapeutics") || t.includes("medicine") || t.includes("pill") || t.includes("drug")) return import_lucide_react.Pill;
		if (t.includes("datasets") || t.includes("data") || t.includes("process")) return import_lucide_react.Database;
		if (t.includes("patterns") || t.includes("decode")) return import_lucide_react.Cpu;
		if (t.includes("bridge") || t.includes("scientific") || t.includes("innovation")) return import_lucide_react.Sparkles;
		return import_lucide_react.Activity;
	};
	const getBulletIcon = (text) => {
		const t = text.toLowerCase();
		if (t.includes("science")) return import_lucide_react.Dna;
		if (t.includes("collaboration") || t.includes("interdisciplinary")) return import_lucide_react.Users;
		if (t.includes("ethical") || t.includes("impact")) return import_lucide_react.Shield;
		if (t.includes("global") || t.includes("health")) return import_lucide_react.Globe;
		if (t.includes("genomics") || t.includes("dna")) return import_lucide_react.Dna;
		if (t.includes("biotechnology")) return import_lucide_react.Sparkles;
		if (t.includes("drug") || t.includes("therapeutic")) return import_lucide_react.Pill;
		if (t.includes("quantum")) return import_lucide_react.Atom;
		if (t.includes("ai") || t.includes("data")) return import_lucide_react.Brain;
		if (t.includes("precision") || t.includes("medicine")) return import_lucide_react.Heart;
		return import_lucide_react.CheckCircle2;
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "pt-24 pb-20 min-h-screen bg-[#f0f4f8] dark:bg-[#0c131f] transition-colors duration-300 page-3d-transition",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "max-w-4xl mx-auto px-6 mb-8 animate-fade-in",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link$1, {
				to: "/blogs",
				id: "back-to-blogs-btn",
				className: "group inline-flex items-center gap-2 text-xs tracking-[0.25em] uppercase text-muted-foreground hover:text-foreground transition-colors duration-300",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_lucide_react.ArrowLeft, { className: "h-3 w-3 transition-transform duration-300 group-hover:-translate-x-1" }), "Back to blogs"]
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
			className: "max-w-4xl mx-auto px-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
					className: "mb-8 animate-fade-in",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-wrap items-center gap-3 mb-4",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "bg-accent-blue/10 dark:bg-accent-blue/20 text-accent-blue font-mono text-[10px] tracking-widest uppercase px-3 py-1 rounded-md backdrop-blur",
									children: post.eyebrow
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-1.5 text-xs text-muted-foreground font-mono",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_lucide_react.Calendar, { className: "h-3.5 w-3.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: post.date })]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-1.5 text-xs text-muted-foreground font-mono",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_lucide_react.Clock, { className: "h-3.5 w-3.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "5 min read" })]
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "font-serif-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-[1.1] tracking-tight",
							children: post.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-6 flex items-center gap-3 border-b border-foreground/5 pb-8",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex h-10 w-10 items-center justify-center rounded-full bg-accent-purple/10 text-accent-purple font-mono text-sm font-semibold",
								children: "QC"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm font-semibold text-foreground",
								children: "Quantum Codon Research Team"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs text-muted-foreground",
								children: "Deep Codon Initiative Authors"
							})] })]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative aspect-[16/9] w-full overflow-hidden rounded-3xl border border-foreground/5 shadow-2xl bg-slate-950 mb-12 animate-fade-in",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: post.image,
						alt: post.title,
						decoding: "async",
						className: "w-full h-full object-cover transition-transform duration-1000 hover:scale-102"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" })]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
					className: "prose prose-slate dark:prose-invert max-w-none mb-14 animate-fade-in",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "relative pl-6 border-l-4 border-accent-blue py-2",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-lg md:text-xl text-foreground/85 leading-relaxed font-medium italic",
							children: post.introduction
						})
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "space-y-8 mb-16",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-xs tracking-[0.3em] text-accent-purple uppercase font-bold mb-6",
						children: "Key Core Capabilities"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid gap-6",
						children: post.sections.map((section) => {
							return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "group relative p-8 rounded-2xl border border-foreground/10 bg-white/40 dark:bg-black/20 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-accent-blue/35 hover:bg-white/60 dark:hover:bg-black/35",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex flex-col md:flex-row md:items-start gap-6",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-accent-blue/10 text-accent-blue transition-all duration-500 group-hover:scale-108 group-hover:rotate-3 shadow-sm border border-accent-blue/10",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(getSectionIcon(section.title), { className: "h-6 w-6" })
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "space-y-2",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "font-mono text-[10px] tracking-widest uppercase text-accent-blue/80 dark:text-accent-blue/90 font-semibold block",
												children: section.subhead
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
												className: "font-serif-display text-2xl font-bold text-foreground transition-colors duration-300 group-hover:text-accent-blue",
												children: section.title
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "text-muted-foreground leading-relaxed text-base pt-1",
												children: section.body
											})
										]
									})]
								})
							}, section.title);
						})
					})]
				}),
				post.conclusion && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
					className: "mb-20 animate-fade-in",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative rounded-3xl border border-foreground/10 p-8 md:p-12 bg-gradient-to-br from-accent-blue/10 via-accent-purple/10 to-accent-emerald/10 shadow-lg overflow-hidden",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -right-20 -bottom-20 w-80 h-80 rounded-full bg-accent-blue/10 blur-3xl pointer-events-none" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -left-20 -top-20 w-80 h-80 rounded-full bg-accent-purple/10 blur-3xl pointer-events-none" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "relative z-10",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-xs tracking-[0.3em] text-accent-purple uppercase font-bold block mb-4",
										children: post.conclusion.headline
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
										className: "font-serif-display text-3xl md:text-4xl text-foreground font-semibold leading-tight mb-6",
										children: post.conclusion.text
									}),
									post.conclusion.bulletLabel && post.conclusion.bullets && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "border-t border-foreground/5 pt-8 mt-8",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
											className: "font-mono text-xs tracking-wider uppercase text-foreground mb-6 font-semibold",
											children: post.conclusion.bulletLabel
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "grid md:grid-cols-2 gap-4",
											children: post.conclusion.bullets.map((bullet) => {
												const BulletIcon = getBulletIcon(bullet);
												const parts = bullet.split(": ");
												const title = parts[0];
												const desc = parts.slice(1).join(": ");
												return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "flex items-start gap-3 p-4 rounded-2xl border border-foreground/5 bg-white/30 dark:bg-white/[0.02] backdrop-blur-sm transition-all duration-300 hover:border-accent-blue/20 hover:bg-white/50 dark:hover:bg-white/5",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
														className: "flex h-8 w-8 items-center justify-center rounded-xl bg-accent-blue/10 text-accent-blue shrink-0",
														children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BulletIcon, { className: "h-4 w-4" })
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: "text-sm text-foreground/95 leading-normal",
														children: desc ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
															className: "text-foreground font-semibold",
															children: title
														}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
															className: "text-muted-foreground block mt-0.5 text-xs",
															children: desc
														})] }) : bullet
													})]
												}, bullet);
											})
										})]
									})
								]
							})
						]
					})
				}),
				readNextPosts.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
					className: "border-t border-foreground/10 pt-16 mt-16 animate-fade-in",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "text-xs tracking-[0.3em] text-muted-foreground uppercase font-semibold mb-6",
						children: "Keep Reading"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid md:grid-cols-2 gap-6",
						children: readNextPosts.map((nextPost) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link$1, {
							to: "/blogs/$slug",
							params: { slug: nextPost.slug },
							className: "group flex flex-col p-5 rounded-3xl border border-foreground/5 bg-white/40 dark:bg-black/20 hover:-translate-y-1 hover:shadow-xl hover:border-accent-blue/35 transition-all duration-500",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "relative aspect-[16/10] w-full overflow-hidden rounded-2xl border border-foreground/5 bg-slate-950 mb-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: nextPost.image,
									alt: nextPost.title,
									loading: "lazy",
									decoding: "async",
									className: "w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "absolute top-3 left-3 bg-slate-900/90 text-white font-mono text-[9px] tracking-widest uppercase px-2 py-0.5 rounded-md backdrop-blur",
									children: nextPost.eyebrow
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-2 flex-grow flex flex-col justify-between",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
									className: "font-serif-display text-lg font-bold text-foreground group-hover:text-accent-blue transition-colors duration-300 line-clamp-2 leading-snug",
									children: nextPost.title
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs text-muted-foreground line-clamp-2 leading-relaxed mt-1",
									children: nextPost.excerpt
								})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-1 text-xs font-semibold text-accent-blue pt-3 border-t border-foreground/5 mt-3",
									children: [
										"Read Article",
										" ",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_lucide_react.ArrowLeft, { className: "h-3 w-3 rotate-180 transition-transform duration-300 group-hover:translate-x-0.5" })
									]
								})]
							})]
						}, nextPost.slug))
					})]
				})
			]
		})]
	});
}
var SplitComponent = () => {
	const { slug } = Route.useLoaderData();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BlogPostDetail, { slug });
};
//#endregion
export { SplitComponent as component };
