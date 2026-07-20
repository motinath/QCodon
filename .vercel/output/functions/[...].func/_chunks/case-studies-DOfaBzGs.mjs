import "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { t as Link$1 } from "./router-compat-Byun9neG.mjs";
require_react();
var import_jsx_runtime = require_jsx_runtime();
var cases = [
	{
		tag: "Infectious Disease",
		title: "tREP-18: a first-in-class anti-leishmanial peptide",
		summary: "How a non-translating RNA-derived peptide achieved 22nM IC50 against Leishmania, validated in vitro and in vivo.",
		metric: "22nM IC50"
	},
	{
		tag: "Oncology",
		title: "Tumor-selective Class I peptides for solid tumors",
		summary: "A partnership engagement designing dark-DNA-derived peptides with differential cytotoxicity across cancer lines.",
		metric: "6 lead candidates"
	},
	{
		tag: "Industrial Biotech",
		title: "Engineered biocatalysts for specialty chemistry",
		summary: "Co-developed enzymes from synthetic translation frames cut process steps and improved yield for a chemicals partner.",
		metric: "34% yield uplift"
	}
];
function CaseStudies() {
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
						className: "text-xs tracking-[0.3em] text-accent-purple uppercase",
						children: "Insights · Case Studies"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "font-serif-display text-[clamp(2rem,5vw,3.75rem)] mt-3 leading-tight",
						children: "Discover how we make a difference"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-5 text-lg text-muted-foreground max-w-3xl",
						children: "Selected engagements that show how the Deep Codon platform translates dark genome science into measurable outcomes for partners."
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "max-w-5xl mx-auto px-6 mt-14 space-y-5",
				children: cases.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
					className: "p-7 rounded-2xl border border-foreground/10 bg-white/60 dark:bg-white/5 backdrop-blur grid grid-cols-[repeat(auto-fit,minmax(min(100%,300px),1fr))] gap-6 items-start sci-panel",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-[10px] font-mono-data tracking-[0.3em] text-accent-emerald uppercase",
							children: c.tag
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-2 font-serif-display text-2xl leading-snug",
							children: c.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-sm text-muted-foreground leading-relaxed max-w-2xl",
							children: c.summary
						})
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "md:text-right",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "font-mono-data font-bold text-2xl md:text-3xl bg-gradient-to-r from-accent-blue to-accent-emerald bg-clip-text text-transparent",
							children: c.metric
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs font-mono-data uppercase tracking-wider text-muted-foreground mt-1",
							children: "Key Outcome"
						})]
					})]
				}, c.title))
			})
		]
	});
}
var SplitComponent = CaseStudies;
//#endregion
export { SplitComponent as component };
