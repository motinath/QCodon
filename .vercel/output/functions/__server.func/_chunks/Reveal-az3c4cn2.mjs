import { r as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
//#region dist/server/assets/Reveal-az3c4cn2.js
var import_react = /* @__PURE__ */ __toESM(require_react(), 1);
var import_jsx_runtime = require_jsx_runtime();
function Reveal({ children, delay = 0, className = "" }) {
	const ref = (0, import_react.useRef)(null);
	const [visible, setVisible] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const el = ref.current;
		if (!el) return;
		const obs = new IntersectionObserver(([entry]) => {
			if (entry.isIntersecting) {
				setVisible(true);
				obs.disconnect();
			}
		}, { threshold: .15 });
		obs.observe(el);
		return () => obs.disconnect();
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		ref,
		className: `reveal ${visible ? "is-visible" : ""} ${className}`,
		style: { transitionDelay: `${delay}ms` },
		children
	});
}
//#endregion
export { Reveal as t };
