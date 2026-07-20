import "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { t as Link$1 } from "./router-compat-Byun9neG.mjs";
import { t as blogPosts } from "./blogs-data-B64K1K-s.mjs";
require_react();
var import_jsx_runtime = require_jsx_runtime();
function Blogs() {
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
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "max-w-5xl mx-auto px-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs tracking-[0.3em] text-accent-blue uppercase",
						children: "Insights · Blogs"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "font-serif-display text-[clamp(2rem,5vw,3.75rem)] mt-3 leading-tight",
						children: "Ideas, trends, and stories from the world of AI"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-5 text-lg text-muted-foreground max-w-3xl",
						children: "Long-form essays and field notes from the Quantum Codon team on dark genome science, computational biology, and the future of therapeutics."
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "max-w-5xl mx-auto px-6 mt-14 grid grid-cols-[repeat(auto-fit,minmax(min(100%,360px),1fr))] gap-8",
				children: blogPosts.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link$1, {
					to: "/blogs/$slug",
					params: { slug: p.slug },
					className: "group flex flex-col justify-between p-8 rounded-3xl border border-foreground/10 bg-white/60 dark:bg-white/5 backdrop-blur transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:border-accent-blue/30",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "aspect-[16/9] w-full overflow-hidden rounded-2xl border border-foreground/5 bg-slate-100 dark:bg-slate-900/50",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: p.image,
								alt: p.title,
								decoding: "async",
								className: "w-full h-full object-cover transition-transform duration-500 group-hover:scale-103"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-[10px] tracking-[0.3em] text-accent-emerald uppercase mt-6",
							children: p.eyebrow
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "mt-3 font-serif-display text-2xl group-hover:text-accent-blue transition-colors duration-300 leading-snug",
							children: p.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-sm text-muted-foreground leading-relaxed",
							children: p.excerpt
						})
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-6 pt-5 border-t border-foreground/5 flex justify-between items-center text-xs text-muted-foreground font-mono",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: p.date }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-sans font-semibold group-hover:text-accent-blue transition-colors",
							children: "Read post →"
						})]
					})]
				}, p.slug))
			})
		]
	});
}
var SplitComponent = Blogs;
//#endregion
export { SplitComponent as component };
