import { r as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { t as require_lucide_react } from "../_libs/lucide-react.mjs";
//#region dist/server/assets/ContactModal-G1XSPA_v.js
var import_react = /* @__PURE__ */ __toESM(require_react(), 1);
var import_jsx_runtime = require_jsx_runtime();
var import_lucide_react = require_lucide_react();
var ContactModalContext = (0, import_react.createContext)(null);
function ContactModalProvider({ children }) {
	const [isOpen, setIsOpen] = (0, import_react.useState)(false);
	const open = (0, import_react.useCallback)(() => setIsOpen(true), []);
	const close = (0, import_react.useCallback)(() => setIsOpen(false), []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ContactModalContext.Provider, {
		value: {
			isOpen,
			open,
			close
		},
		children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ContactModal, {})]
	});
}
function useContactModal() {
	const ctx = (0, import_react.useContext)(ContactModalContext);
	if (ctx) return ctx;
	return {
		isOpen: false,
		open: () => {},
		close: () => {}
	};
}
function ContactModal() {
	const { isOpen, close } = useContactModal();
	const [submitted, setSubmitted] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		if (!isOpen) return;
		function onKey(e) {
			if (e.key === "Escape") close();
		}
		document.addEventListener("keydown", onKey);
		const prevOverflow = document.body.style.overflow;
		document.body.style.overflow = "hidden";
		return () => {
			document.removeEventListener("keydown", onKey);
			document.body.style.overflow = prevOverflow;
		};
	}, [isOpen, close]);
	(0, import_react.useEffect)(() => {
		if (!isOpen) setSubmitted(false);
	}, [isOpen]);
	if (!isOpen) return null;
	const handleSubmit = (e) => {
		e.preventDefault();
		setSubmitted(true);
		setTimeout(() => close(), 1400);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "fixed inset-0 z-[100] flex items-center justify-center p-4",
		role: "dialog",
		"aria-modal": "true",
		"aria-labelledby": "contact-modal-title",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "absolute inset-0 bg-black/60 backdrop-blur-md",
			onClick: close
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative w-full max-w-2xl rounded-3xl border bg-card text-card-foreground shadow-2xl animate-scale-in",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				onClick: close,
				"aria-label": "Close",
				className: "absolute right-4 top-4 inline-flex h-9 w-9 items-center justify-center rounded-full border border-border bg-background/60 text-muted-foreground hover:text-foreground transition",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_lucide_react.X, { className: "h-4 w-4" })
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "px-6 pt-10 pb-6 sm:px-10 sm:pt-12 sm:pb-8",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "text-center",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-[10px] tracking-[0.3em] uppercase text-accent-emerald font-semibold",
							children: "Quantum Codon"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							id: "contact-modal-title",
							className: "font-serif-display text-3xl md:text-4xl mt-2",
							children: "Get in touch"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm text-muted-foreground",
							children: "We typically reply within one business day."
						})
					]
				}), submitted ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-10 mb-6 text-center",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "inline-flex h-12 w-12 items-center justify-center rounded-full bg-accent-emerald/15 text-accent-emerald text-xl",
						children: "✓"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 text-base font-medium",
						children: "Thanks! Your message is on its way."
					})]
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
					onSubmit: handleSubmit,
					className: "mt-8 space-y-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid grid-cols-1 sm:grid-cols-2 gap-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "First Name",
								name: "firstName",
								placeholder: "Jane",
								required: true
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "Last Name",
								name: "lastName",
								placeholder: "Doe",
								required: true
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid grid-cols-1 sm:grid-cols-2 gap-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "Email Address",
								name: "email",
								type: "email",
								placeholder: "jane@company.com",
								required: true
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "Phone Number",
								name: "phone",
								type: "tel",
								placeholder: "+1 555 000 0000"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
							className: "block text-xs font-medium text-muted-foreground mb-1.5",
							children: "Message"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
							name: "message",
							rows: 5,
							required: true,
							placeholder: "Tell us about your project or question…",
							className: "w-full rounded-xl border border-border bg-input px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent-blue/40 transition"
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "submit",
							className: "mt-2 w-full rounded-full bg-accent-blue px-6 py-3 text-sm font-semibold text-white hover:opacity-90 transition shadow-lg shadow-accent-blue/20",
							children: "Send message"
						})
					]
				})]
			})]
		})]
	});
}
function Field({ label, name, type = "text", placeholder, required }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
		className: "block text-xs font-medium text-muted-foreground mb-1.5",
		children: label
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
		name,
		type,
		required,
		placeholder,
		className: "w-full rounded-xl border border-border bg-input px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent-blue/40 transition"
	})] });
}
//#endregion
export { useContactModal as n, ContactModalProvider as t };
