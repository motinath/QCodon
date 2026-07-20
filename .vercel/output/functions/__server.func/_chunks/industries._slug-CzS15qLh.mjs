import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
//#region dist/server/assets/industries._slug-CzS15qLh.js
var import_jsx_runtime = require_jsx_runtime();
var SplitErrorComponent = ({ error, reset }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
	className: "pt-32 pb-24 px-6 max-w-3xl mx-auto text-center",
	children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
			className: "font-serif-display text-2xl",
			children: "Something went wrong"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-2 text-sm text-muted-foreground",
			children: error.message
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
			onClick: reset,
			className: "mt-6 px-4 py-2 rounded-full border text-sm",
			children: "Try again"
		})
	]
});
//#endregion
export { SplitErrorComponent as errorComponent };
