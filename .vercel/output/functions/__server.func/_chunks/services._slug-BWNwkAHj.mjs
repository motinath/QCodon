import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
//#region dist/server/assets/services._slug-BWNwkAHj.js
var import_jsx_runtime = require_jsx_runtime();
var SplitNotFoundComponent = () => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
	className: "pt-32 pb-24 px-6 max-w-3xl mx-auto text-center",
	children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-xs tracking-[0.3em] text-accent-emerald uppercase",
			children: "404"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
			className: "font-serif-display text-4xl mt-3",
			children: "Service not found"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
			to: "/",
			className: "inline-block mt-6 text-sm text-muted-foreground hover:text-foreground",
			children: "← Back to home"
		})
	]
});
//#endregion
export { SplitNotFoundComponent as notFoundComponent };
