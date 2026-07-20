import { n as require_jsx_runtime } from "./_libs/react+tanstack__react-query.mjs";
import { t as Link$1 } from "./_chunks/router-compat-Byun9neG.mjs";
//#region dist/server/assets/_PageShell-BkJHn740.js
var import_jsx_runtime = require_jsx_runtime();
function PageShell({ children, className = "", spotlight = "from-accent-blue/15 via-accent-purple/5 to-transparent" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: `pt-24 pb-16 min-h-screen transition-colors duration-300 page-3d-transition bg-background text-foreground relative overflow-hidden ${className}`,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: `absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[350px] bg-gradient-to-b ${spotlight} blur-[120px] rounded-full pointer-events-none -z-10 opacity-60 dark:opacity-40` }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "max-w-6xl mx-auto px-6 mb-8 relative z-10",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link$1, {
					to: "/",
					className: "text-xs tracking-[0.25em] uppercase text-muted-foreground hover:text-foreground transition",
					children: "← Back to home"
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "relative z-10",
				children
			})
		]
	});
}
//#endregion
export { PageShell as t };
