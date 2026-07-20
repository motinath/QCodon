import { r as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react, t as QueryClientProvider } from "../_libs/react+tanstack__react-query.mjs";
import { D as redirect, N as useNavigate, P as useRouter, c as HeadContent, d as createRouter, f as Outlet, g as Link, h as createRootRouteWithContext, l as useLocation, m as createFileRoute, p as lazyRouteComponent, s as Scripts } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as Link$1 } from "./router-compat-Byun9neG.mjs";
import { t as Route$11 } from "../_slug-DIOVogrZ.mjs";
import { t as require_lucide_react } from "../_libs/lucide-react.mjs";
import { n as useContactModal, t as ContactModalProvider } from "./ContactModal-G1XSPA_v.mjs";
import { r as industries, t as Route$12 } from "./industries._slug-Bt496p4b.mjs";
import { t as cn } from "./utils-C_uf36nf.mjs";
import { a as themeBootstrapScript, i as offerings, n as ThemeProvider, o as useTheme, t as Route$13 } from "./services._slug-fZYjFj52.mjs";
import { t as QueryClient } from "../_libs/tanstack__query-core.mjs";
import { o as motion, s as AnimatePresence } from "../_libs/framer-motion+[...].mjs";
//#region dist/server/assets/router-Cc7ijWNY.js
var import_react = /* @__PURE__ */ __toESM(require_react(), 1);
var import_jsx_runtime = require_jsx_runtime();
var import_lucide_react = require_lucide_react();
var styles_default = "/assets/styles-DDIwd66C.css";
var SkyToggle = ({ checked, onChange, "aria-label": ariaLabel, className }) => {
	const handleChange = (e) => {
		onChange?.(e.target.checked);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: `inline-flex items-center ${className || ""}`,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
			className: "theme-switch",
			style: { display: "block" },
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
				type: "checkbox",
				className: "theme-switch__checkbox",
				checked,
				onChange: handleChange,
				"aria-label": ariaLabel
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "theme-switch__container",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "theme-switch__clouds" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "theme-switch__stars-container",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
							xmlns: "http://www.w3.org/2000/svg",
							viewBox: "0 0 144 55",
							fill: "none",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
								fillRule: "evenodd",
								clipRule: "evenodd",
								d: "M135.831 3.00688C135.055 3.85027 134.111 4.29946 133 4.35447C134.111 4.40947 135.055 4.85867 135.831 5.71123C136.607 6.55462 136.996 7.56303 136.996 8.72727C136.996 7.95722 137.172 7.25134 137.525 6.59129C137.886 5.93124 138.372 5.39954 138.98 5.00535C139.598 4.60199 140.268 4.39114 141 4.35447C139.88 4.2903 138.936 3.85027 138.16 3.00688C137.384 2.16348 136.996 1.16425 136.996 0C136.996 1.16425 136.607 2.16348 135.831 3.00688ZM31 23.3545C32.1114 23.2995 33.0551 22.8503 33.8313 22.0069C34.6075 21.1635 34.9956 20.1642 34.9956 19C34.9956 20.1642 35.3837 21.1635 36.1599 22.0069C36.9361 22.8503 37.8798 23.2903 39 23.3545C38.2679 23.3911 37.5976 23.602 36.9802 24.0053C36.3716 24.3995 35.8864 24.9312 35.5248 25.5913C35.172 26.2513 34.9956 26.9572 34.9956 27.7273C34.9956 26.563 34.6075 25.5546 33.8313 24.7112C33.0551 23.8587 32.1114 23.4095 31 23.3545ZM0 36.3545C1.11136 36.2995 2.05513 35.8503 2.83131 35.0069C3.6075 34.1635 3.99559 33.1642 3.99559 32C3.99559 33.1642 4.38368 34.1635 5.15987 35.0069C5.93605 35.8503 6.87982 36.2903 8 36.3545C7.26792 36.3911 6.59757 36.602 5.98015 37.0053C5.37155 37.3995 4.88644 37.9312 4.52481 38.5913C4.172 39.2513 3.99559 39.9572 3.99559 40.7273C3.99559 39.563 3.6075 38.5546 2.83131 37.7112C2.05513 36.8587 1.11136 36.4095 0 36.3545ZM56.8313 24.0069C56.0551 24.8503 55.1114 25.2995 54 25.3545C55.1114 25.4095 56.0551 25.8587 56.8313 26.7112C57.6075 27.5546 57.9956 28.563 57.9956 29.7273C57.9956 28.9572 58.172 28.2513 58.5248 27.5913C58.8864 26.9312 59.3716 26.3995 59.9802 26.0053C60.5976 25.602 61.2679 25.3911 62 25.3545C60.8798 25.2903 59.9361 24.8503 59.1599 24.0069C58.3837 23.1635 57.9956 22.1642 57.9956 21C57.9956 22.1642 57.6075 23.1635 56.8313 24.0069ZM81 25.3545C82.1114 25.2995 83.0551 24.8503 83.8313 24.0069C84.6075 23.1635 84.9956 22.1642 84.9956 21C84.9956 22.1642 85.3837 23.1635 86.1599 24.0069C86.9361 24.8503 87.8798 25.2903 89 25.3545C88.2679 25.3911 87.5976 25.602 86.9802 26.0053C86.3716 26.3995 85.8864 26.9312 85.5248 27.5913C85.172 28.2513 84.9956 28.9572 84.9956 29.7273C84.9956 28.563 84.6075 27.5546 83.8313 26.7112C83.0551 25.8587 82.1114 25.4095 81 25.3545ZM136 36.3545C137.111 36.2995 138.055 35.8503 138.831 35.0069C139.607 34.1635 139.996 33.1642 139.996 32C139.996 33.1642 140.384 34.1635 141.16 35.0069C141.936 35.8503 142.88 36.2903 144 36.3545C143.268 36.3911 142.598 36.602 141.98 37.0053C141.372 37.3995 140.886 37.9312 140.525 38.5913C140.172 39.2513 139.996 39.9572 139.996 40.7273C139.996 39.563 139.607 38.5546 138.831 37.7112C138.055 36.8587 137.111 36.4095 136 36.3545ZM101.831 49.0069C101.055 49.8503 100.111 50.2995 99 50.3545C100.111 50.4095 101.055 50.8587 101.831 51.7112C102.607 52.5546 102.996 53.563 102.996 54.7273C102.996 53.9572 103.172 53.2513 103.525 52.5913C103.886 51.9312 104.372 51.3995 104.98 51.0053C105.598 50.602 106.268 50.3911 107 50.3545C105.88 50.2903 104.936 49.8503 104.16 49.0069C103.384 48.1635 102.996 47.1642 102.996 46C102.996 47.1642 102.607 48.1635 101.831 49.0069Z",
								fill: "currentColor"
							})
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "theme-switch__circle-container",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "theme-switch__sun-moon-container",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "theme-switch__moon",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "theme-switch__spot" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "theme-switch__spot" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "theme-switch__spot" })
								]
							})
						})
					})
				]
			})]
		})
	});
};
var companyItems = [{
	slug: "about",
	label: "About Us",
	subtext: "Discover who we are, what we do, and why it matters.",
	icon: import_lucide_react.Info,
	to: "/about"
}, {
	slug: "careers",
	label: "Careers",
	subtext: "Join the minds behind intelligent solutions.",
	icon: import_lucide_react.Briefcase,
	to: "/careers"
}];
var insightsItems = [
	{
		slug: "blogs",
		label: "Blogs",
		subtext: "Ideas, trends, and stories from the world of AI.",
		icon: import_lucide_react.BookOpen,
		to: "/blogs"
	},
	{
		slug: "case-studies",
		label: "Case Studies",
		subtext: "Discover how we make a difference.",
		icon: import_lucide_react.FileText,
		to: "/case-studies"
	},
	{
		slug: "research",
		label: "Research",
		subtext: "15+ years of peer-reviewed dark genome research.",
		icon: import_lucide_react.Microscope,
		to: "/research"
	}
];
var industriesItems = industries.map((i) => ({
	slug: i.slug,
	label: i.title,
	subtext: i.subtext,
	icon: i.icon,
	to: `/industries/${i.slug}`
}));
function QcNavbar() {
	const [activeMenu, setActiveMenu] = (0, import_react.useState)(null);
	const [mobileOpen, setMobileOpen] = (0, import_react.useState)(false);
	const closeTimer = (0, import_react.useRef)(null);
	const offeringsRef = (0, import_react.useRef)(null);
	const companyRef = (0, import_react.useRef)(null);
	const industriesRef = (0, import_react.useRef)(null);
	const insightsRef = (0, import_react.useRef)(null);
	const { theme, setTheme } = useTheme();
	const { open: openContact } = useContactModal();
	const openMenu = (name) => {
		if (closeTimer.current) clearTimeout(closeTimer.current);
		setActiveMenu(name);
	};
	const scheduleClose = () => {
		if (closeTimer.current) clearTimeout(closeTimer.current);
		closeTimer.current = setTimeout(() => setActiveMenu(null), 120);
	};
	(0, import_react.useEffect)(() => {
		function onKey(e) {
			if (e.key === "Escape") setActiveMenu(null);
		}
		function onPointerDown(e) {
			const target = e.target;
			if (![
				offeringsRef,
				companyRef,
				industriesRef,
				insightsRef
			].some((r) => r.current?.contains(target))) setActiveMenu(null);
		}
		document.addEventListener("keydown", onKey);
		document.addEventListener("mousedown", onPointerDown);
		return () => {
			document.removeEventListener("keydown", onKey);
			document.removeEventListener("mousedown", onPointerDown);
		};
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: "fixed top-0 inset-x-0 z-50 glass-navbar",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-7xl mx-auto px-6 h-16 flex items-center justify-between",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link$1, {
					to: "/",
					className: "flex items-center gap-2.5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: "/logo-emblem.png",
						alt: "Quantum Codon Logo",
						className: "h-7 w-auto object-contain dark:brightness-110"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-serif-display text-base tracking-tight",
						children: "Quantum Codon"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
					className: "hidden md:flex gap-8 items-center text-sm",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							ref: offeringsRef,
							className: "relative",
							onMouseEnter: () => openMenu("offerings"),
							onMouseLeave: scheduleClose,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								onClick: () => setActiveMenu(activeMenu === "offerings" ? null : "offerings"),
								className: `flex items-center gap-1 py-2 transition-colors ${activeMenu === "offerings" ? "text-foreground font-medium" : "text-muted-foreground hover:text-foreground"}`,
								"aria-expanded": activeMenu === "offerings",
								"aria-haspopup": "menu",
								children: ["Offerings", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_lucide_react.ChevronDown, { className: `h-3 w-3 transition-transform duration-200 ${activeMenu === "offerings" ? "rotate-180" : ""}` })]
							}), activeMenu === "offerings" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								onMouseEnter: () => openMenu("offerings"),
								onMouseLeave: scheduleClose,
								className: "animate-menu-in z-50",
								style: {
									position: "absolute",
									top: "calc(100% + 10px)",
									left: "50%",
									transform: "translateX(-50%)",
									width: "600px",
									background: "var(--popover)",
									border: "1px solid var(--border)",
									borderRadius: "14px",
									padding: "14px",
									boxShadow: "var(--shadow-mega)"
								},
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mb-2 px-1",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-[9px] tracking-[0.3em] text-accent-emerald uppercase font-semibold",
										children: "Our Offerings"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-[11px] text-muted-foreground mt-0",
										children: "Explore the full suite of Quantum Codon services."
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "grid grid-cols-2",
									style: { gap: "8px" },
									children: offerings.map((o) => {
										const Icon = o.icon;
										return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link$1, {
											to: `/services/${o.slug}`,
											onClick: () => setActiveMenu(null),
											className: "offering-card group p-3",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex items-center gap-2 mb-1.5",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-4 w-4 text-foreground/80 shrink-0 group-hover:text-accent-blue transition-colors" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
													className: "text-[12px] font-semibold leading-tight text-foreground group-hover:text-accent-blue transition-colors",
													children: o.title
												})]
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "text-[11px] leading-snug text-muted-foreground offering-desc",
												children: o.description
											})]
										}, o.slug);
									})
								})]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							ref: industriesRef,
							className: "relative",
							onMouseEnter: () => openMenu("industries"),
							onMouseLeave: scheduleClose,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								onClick: () => setActiveMenu(activeMenu === "industries" ? null : "industries"),
								className: `flex items-center gap-1 py-2 transition-colors ${activeMenu === "industries" ? "text-foreground font-medium" : "text-muted-foreground hover:text-foreground"}`,
								"aria-expanded": activeMenu === "industries",
								"aria-haspopup": "menu",
								children: ["Industries", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_lucide_react.ChevronDown, { className: `h-3 w-3 transition-transform duration-200 ${activeMenu === "industries" ? "rotate-180" : ""}` })]
							}), activeMenu === "industries" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								onMouseEnter: () => openMenu("industries"),
								onMouseLeave: scheduleClose,
								className: "animate-menu-in z-50",
								style: {
									position: "absolute",
									top: "calc(100% + 10px)",
									left: "50%",
									transform: "translateX(-50%)",
									width: "360px",
									background: "var(--popover)",
									border: "1px solid var(--border)",
									borderRadius: "14px",
									padding: "14px",
									boxShadow: "var(--shadow-mega)"
								},
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mb-2 px-1",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-[9px] tracking-[0.3em] text-accent-emerald uppercase font-semibold",
										children: "Industries"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-[11px] text-muted-foreground mt-0",
										children: "Where Deep Codon creates impact."
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "flex flex-col",
									style: { gap: "8px" },
									children: industriesItems.map((item) => {
										const Icon = item.icon;
										return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link$1, {
											to: item.to,
											onClick: () => setActiveMenu(null),
											className: "offering-card group p-3",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex items-center gap-2 mb-1.5",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-4 w-4 text-foreground/80 shrink-0 group-hover:text-accent-blue transition-colors" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
													className: "text-[12px] font-semibold leading-tight text-foreground group-hover:text-accent-blue transition-colors",
													children: item.label
												})]
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "text-[11px] leading-snug text-muted-foreground offering-desc line-clamp-2",
												children: item.subtext
											})]
										}, item.slug);
									})
								})]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							ref: insightsRef,
							className: "relative",
							onMouseEnter: () => openMenu("insights"),
							onMouseLeave: scheduleClose,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								onClick: () => setActiveMenu(activeMenu === "insights" ? null : "insights"),
								className: `flex items-center gap-1 py-2 transition-colors ${activeMenu === "insights" ? "text-foreground font-medium" : "text-muted-foreground hover:text-foreground"}`,
								"aria-expanded": activeMenu === "insights",
								"aria-haspopup": "menu",
								children: ["Insights", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_lucide_react.ChevronDown, { className: `h-3 w-3 transition-transform duration-200 ${activeMenu === "insights" ? "rotate-180" : ""}` })]
							}), activeMenu === "insights" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								onMouseEnter: () => openMenu("insights"),
								onMouseLeave: scheduleClose,
								className: "animate-menu-in z-50",
								style: {
									position: "absolute",
									top: "calc(100% + 10px)",
									left: "50%",
									transform: "translateX(-50%)",
									width: "360px",
									background: "var(--popover)",
									border: "1px solid var(--border)",
									borderRadius: "14px",
									padding: "14px",
									boxShadow: "var(--shadow-mega)"
								},
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mb-2 px-1",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-[9px] tracking-[0.3em] text-accent-emerald uppercase font-semibold",
										children: "Insights"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-[11px] text-muted-foreground mt-0",
										children: "Ideas, stories, and science from our team."
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "flex flex-col",
									style: { gap: "8px" },
									children: insightsItems.map((item) => {
										const Icon = item.icon;
										return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link$1, {
											to: item.to,
											onClick: () => setActiveMenu(null),
											className: "offering-card group p-3",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex items-center gap-2 mb-1.5",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-4 w-4 text-foreground/80 shrink-0 group-hover:text-accent-blue transition-colors" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
													className: "text-[12px] font-semibold leading-tight text-foreground group-hover:text-accent-blue transition-colors",
													children: item.label
												})]
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "text-[11px] leading-snug text-muted-foreground offering-desc line-clamp-2",
												children: item.subtext
											})]
										}, item.slug);
									})
								})]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							ref: companyRef,
							className: "relative",
							onMouseEnter: () => openMenu("company"),
							onMouseLeave: scheduleClose,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								onClick: () => setActiveMenu(activeMenu === "company" ? null : "company"),
								className: `flex items-center gap-1 py-2 transition-colors ${activeMenu === "company" ? "text-foreground font-medium" : "text-muted-foreground hover:text-foreground"}`,
								"aria-expanded": activeMenu === "company",
								"aria-haspopup": "menu",
								children: ["Company", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_lucide_react.ChevronDown, { className: `h-3 w-3 transition-transform duration-200 ${activeMenu === "company" ? "rotate-180" : ""}` })]
							}), activeMenu === "company" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								onMouseEnter: () => openMenu("company"),
								onMouseLeave: scheduleClose,
								className: "animate-menu-in z-50",
								style: {
									position: "absolute",
									top: "calc(100% + 10px)",
									left: "50%",
									transform: "translateX(-50%)",
									width: "320px",
									background: "var(--popover)",
									border: "1px solid var(--border)",
									borderRadius: "14px",
									padding: "14px",
									boxShadow: "var(--shadow-mega)"
								},
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mb-2 px-1",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-[9px] tracking-[0.3em] text-accent-emerald uppercase font-semibold",
										children: "Company"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-[11px] text-muted-foreground mt-0",
										children: "Learn more about Quantum Codon."
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "flex flex-col",
									style: { gap: "8px" },
									children: companyItems.map((item) => {
										const Icon = item.icon;
										return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link$1, {
											to: item.to,
											onClick: () => setActiveMenu(null),
											className: "offering-card group p-3",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex items-center gap-2 mb-1.5",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-4 w-4 text-foreground/80 shrink-0 group-hover:text-accent-blue transition-colors" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
													className: "text-[12px] font-semibold leading-tight text-foreground group-hover:text-accent-blue transition-colors",
													children: item.label
												})]
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "text-[11px] leading-snug text-muted-foreground offering-desc",
												children: item.subtext
											})]
										}, item.slug);
									})
								})]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link$1, {
							to: "/contact",
							className: "transition-colors text-muted-foreground hover:text-foreground",
							children: "Contact"
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "hidden md:flex items-center gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link$1, {
						to: "/contact",
						className: "inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm bg-accent-blue text-white hover:opacity-90 transition font-semibold shadow-lg shadow-accent-blue/20",
						children: "Connect with us"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SkyToggle, {
						checked: theme === "dark",
						onChange: (checked) => setTheme(checked ? "dark" : "light"),
						"aria-label": theme === "dark" ? "Switch to light mode" : "Switch to dark mode"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex md:hidden items-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SkyToggle, {
						checked: theme === "dark",
						onChange: (checked) => setTheme(checked ? "dark" : "light"),
						"aria-label": theme === "dark" ? "Switch to light mode" : "Switch to dark mode"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => setMobileOpen(!mobileOpen),
						className: "p-2 rounded-lg text-foreground hover:bg-black/5 dark:hover:bg-white/10 transition-colors focus:outline-none",
						"aria-label": "Toggle mobile menu",
						children: mobileOpen ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_lucide_react.X, { className: "w-6 h-6" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_lucide_react.Menu, { className: "w-6 h-6" })
					})]
				})
			]
		}), mobileOpen && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "md:hidden fixed inset-x-0 top-16 bottom-0 bg-background/95 backdrop-blur-2xl z-50 overflow-y-auto px-6 py-6 border-t border-border flex flex-col justify-between animate-fade-in",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "space-y-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-[10px] uppercase font-bold tracking-[0.2em] text-accent-blue mb-3",
					children: "Offerings & Services"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid grid-cols-1 gap-2",
					children: offerings.map((o) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link$1, {
						to: `/services/${o.slug}`,
						onClick: () => setMobileOpen(false),
						className: "flex items-center justify-between p-3 rounded-xl bg-card border border-border/60 text-sm font-medium text-foreground hover:border-accent-blue transition-colors",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: o.title }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_lucide_react.ChevronRight, { className: "w-4 h-4 text-muted-foreground" })]
					}, o.slug))
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-[10px] uppercase font-bold tracking-[0.2em] text-accent-purple mb-3",
					children: "Company & Insights"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid grid-cols-2 gap-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link$1, {
							to: "/about",
							onClick: () => setMobileOpen(false),
							className: "p-3 rounded-xl bg-card border border-border/60 text-xs font-semibold text-foreground text-center",
							children: "About Us"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link$1, {
							to: "/research",
							onClick: () => setMobileOpen(false),
							className: "p-3 rounded-xl bg-card border border-border/60 text-xs font-semibold text-foreground text-center",
							children: "Research"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link$1, {
							to: "/blogs",
							onClick: () => setMobileOpen(false),
							className: "p-3 rounded-xl bg-card border border-border/60 text-xs font-semibold text-foreground text-center",
							children: "Blogs"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link$1, {
							to: "/case-studies",
							onClick: () => setMobileOpen(false),
							className: "p-3 rounded-xl bg-card border border-border/60 text-xs font-semibold text-foreground text-center",
							children: "Case Studies"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link$1, {
							to: "/careers",
							onClick: () => setMobileOpen(false),
							className: "p-3 rounded-xl bg-card border border-border/60 text-xs font-semibold text-foreground text-center",
							children: "Careers"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link$1, {
							to: "/contact",
							onClick: () => setMobileOpen(false),
							className: "p-3 rounded-xl bg-card border border-border/60 text-xs font-semibold text-foreground text-center",
							children: "Contact"
						})
					]
				})] })]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "pt-6 border-t border-border/40 mt-6 space-y-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link$1, {
					to: "/contact",
					onClick: () => setMobileOpen(false),
					className: "w-full py-3 rounded-full bg-accent-blue text-white text-center font-semibold text-sm block shadow-lg shadow-accent-blue/20",
					children: "Connect with us"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-center text-xs text-muted-foreground",
					children: "Quantum Codon — Powering the next-generation bioeconomy"
				})]
			})]
		})]
	});
}
function QcPreloader3D() {
	const [phase, setPhase] = (0, import_react.useState)("playing");
	const videoRef = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		document.body.style.overflow = "hidden";
		if (videoRef.current) {
			videoRef.current.muted = true;
			videoRef.current.play().catch(() => {});
		}
		const timer1 = setTimeout(() => {
			setPhase("zooming");
		}, 4200);
		const timer2 = setTimeout(() => {
			setPhase("hidden");
			document.body.style.overflow = "";
		}, 5e3);
		return () => {
			clearTimeout(timer1);
			clearTimeout(timer2);
			document.body.style.overflow = "";
		};
	}, []);
	if (phase === "hidden") return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: `fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden select-none pointer-events-auto touch-none overscroll-none transition-opacity duration-1000 ${phase === "zooming" ? "opacity-0 pointer-events-none" : "opacity-100"}`,
		style: { background: "#050608" },
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: `absolute inset-0 w-full h-full transition-all duration-1000 ease-in-out transform-gpu ${phase === "zooming" ? "scale-[4.5] opacity-0 filter blur-[40px]" : "scale-100 opacity-100"}`,
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("video", {
				ref: videoRef,
				src: "/d.mp4",
				autoPlay: true,
				loop: true,
				muted: true,
				playsInline: true,
				className: "w-full h-full object-cover filter brightness-[1.08] contrast-[1.25] saturate-[1.3] blur-[5px] animate-slow-zoom"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(6,9,17,0.2)_0%,#050608_90%)] pointer-events-none" })]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: `relative z-20 text-center px-6 transition-all duration-1000 ease-in-out transform-gpu ${phase === "zooming" ? "scale-150 opacity-0 -translate-y-6 filter blur-xl" : "scale-100 opacity-100 translate-y-0"}`,
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "font-serif-display text-5xl md:text-7xl font-normal tracking-tight text-white animate-title-glow",
					children: "Quantum Codon"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 font-mono-data text-xs md:text-sm font-semibold uppercase text-accent-blue animate-tagline-tracking",
					children: "Powering the Next-Generation Bioeconomy"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "mt-6 mx-auto w-28 h-[1.5px] bg-gradient-to-r from-transparent via-accent-blue to-transparent animate-pulse" })
			]
		})]
	});
}
var columns = [
	{
		title: "Offerings",
		links: [
			{
				label: "Drug Discovery",
				to: "/services/$slug",
				params: { slug: "drug-discovery" }
			},
			{
				label: "Bio MMG",
				to: "/services/$slug",
				params: { slug: "bio-mmg" }
			},
			{
				label: "Analytical Service",
				to: "/services/$slug",
				params: { slug: "analytical-service" }
			},
			{
				label: "Bioinformatics",
				to: "/services/$slug",
				params: { slug: "bioinformatics" }
			},
			{
				label: "Regulatory & Compliance",
				to: "/services/regulatory-compliance"
			}
		]
	},
	{
		title: "Industries",
		links: [
			{
				label: "Healthcare",
				to: "/industries/$slug",
				params: { slug: "healthcare" }
			},
			{
				label: "Education",
				to: "/services/$slug",
				params: { slug: "education" }
			},
			{
				label: "Bio-Manufacturing",
				to: "/industries/$slug",
				params: { slug: "manufacturing" }
			}
		]
	},
	{
		title: "Company",
		links: [
			{
				label: "About",
				to: "/about"
			},
			{
				label: "Careers",
				to: "/careers"
			},
			{
				label: "Research",
				to: "/research"
			},
			{
				label: "Case Studies",
				to: "/case-studies"
			},
			{
				label: "Blog",
				to: "/blogs"
			},
			{
				label: "Contact",
				to: "/contact"
			}
		]
	}
];
var socials = [
	{
		icon: import_lucide_react.Linkedin,
		href: "https://linkedin.com",
		label: "LinkedIn"
	},
	{
		icon: import_lucide_react.MapPin,
		href: "https://maps.app.goo.gl/bAURtJ7543zqQ3qG8",
		label: "Location"
	},
	{
		icon: import_lucide_react.Twitter,
		href: "#",
		label: "Twitter"
	},
	{
		icon: import_lucide_react.Instagram,
		href: "#",
		label: "Instagram"
	},
	{
		icon: import_lucide_react.Facebook,
		href: "#",
		label: "Facebook"
	},
	{
		icon: import_lucide_react.Youtube,
		href: "#",
		label: "YouTube"
	}
];
function SiteFooter() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
		className: "border-t border-border bg-card",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-6 py-16",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid grid-cols-1 gap-12 md:grid-cols-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "font-serif-italic text-3xl text-foreground",
						children: ["Quantum Codon", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "text-primary" })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground",
						children: "Empowering the future of biotechnology with cutting-edge solutions."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: "https://www.qcodon.com",
						target: "_blank",
						rel: "noopener noreferrer",
						className: "mt-2 inline-flex items-center gap-1.5 text-sm font-medium underline-offset-4 hover:underline",
						style: { color: "#2563eb" },
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
							xmlns: "http://www.w3.org/2000/svg",
							className: "h-3.5 w-3.5",
							viewBox: "0 0 24 24",
							fill: "none",
							stroke: "currentColor",
							strokeWidth: "2",
							strokeLinecap: "round",
							strokeLinejoin: "round",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
									cx: "12",
									cy: "12",
									r: "10"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
									x1: "2",
									y1: "12",
									x2: "22",
									y2: "12"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" })
							]
						}), "www.qcodon.com"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-6 flex gap-3",
						children: socials.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: s.href,
							target: s.href.startsWith("http") ? "_blank" : void 0,
							rel: s.href.startsWith("http") ? "noopener noreferrer" : void 0,
							"aria-label": s.label,
							className: "grid h-9 w-9 place-items-center rounded-full border border-border bg-background text-foreground transition-colors hover:border-blue-600 hover:bg-blue-600 hover:text-white",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(s.icon, {
								className: "h-4 w-4",
								strokeWidth: 1.75
							})
						}, s.label))
					})
				] }), columns.map((col) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
					className: "text-sm font-semibold uppercase tracking-[0.15em] text-foreground",
					children: col.title
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-5 space-y-3",
					children: col.links.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link$1, {
						to: l.to,
						params: l.params,
						className: "text-sm text-muted-foreground transition-colors hover:text-blue-600",
						children: l.label
					}) }, l.label))
				})] }, col.title))]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-14 flex flex-col items-start justify-between gap-4 border-t border-border pt-6 text-xs text-muted-foreground sm:flex-row sm:items-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
					"© ",
					(/* @__PURE__ */ new Date()).getFullYear(),
					" Quantum Codon. All rights reserved."
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex gap-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "#",
						className: "hover:text-foreground",
						children: "Privacy"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "#",
						className: "hover:text-foreground",
						children: "Terms"
					})]
				})]
			})]
		})
	});
}
var SYSTEM_PROMPT = `You are "QCodon", the official AI copilot for Quantum Codon Pvt Ltd — a pioneering biotechnology company focused on dark genome drug discovery. You are embedded as an intelligent, native AI copilot inside the platform.

Your role is to help visitors understand:
1. What Quantum Codon does and its science
2. Where specific data, research, services, or topics are located in the website
3. Concepts in biotechnology relevant to this company

## COMPANY OVERVIEW
Quantum Codon Pvt Ltd is a deep-tech biotechnology company that focuses on the "Dark Genome" — the 98% of the human genome historically dismissed as "junk DNA". The company's flagship initiative is the **Deep Codon Initiative**, which converts non-expressing DNA and non-translating RNA into first-in-class therapeutic drug candidates.

**CSO / Founder**: Prof. Pawan K Dhar — 15+ years of continuous dark genome research, formerly at Jawaharlal Nehru University (JNU), New Delhi.

**Corporate Lab**: Amaravati Quantum Valley, Andhra Pradesh, India.

**Email**: contact@qcodon.com | education: education@qcodon.com | careers: careers@qcodon.com

---

## WEBSITE STRUCTURE & NAVIGATION

The website has the following pages and sections. Always guide users to the exact URL and section when they ask where to find something:

### Pages:
- **Home / Landing** → URL: /
  - Contains: Hero section (dark genome overview), Platform stats, Classes overview, Results preview, Pipeline overview, Landmark paper section, Investor brief, Contact CTA
  - Key sections: #hero, #platform, #classes, #results, #pipeline, #paper, #contact

- **About Us** → URL: /about
  - Contains: Company founding story, Prof. Pawan K Dhar profile, Academic Heritage (JNU), Amaravati Quantum Valley lab info, Scientific anchors

- **Services** → URL: /services
  - Contains 5 enterprise services, each with a dedicated section:
    1. Drug Discovery → /services#drug-discovery
    2. Bio MMG (Microbiology & Molecular Genetics) → /services#bio-mmg
    3. Analytical Services → /services#analytical-services
    4. Bio Infactic (Bioinformatics) → /services#bio-infactic
    5. Regulatory & Complaints → /services#regulatory-complaints

- **Research** → URL: /research
  - Has 4 tabs:
    1. Platform Overview → /research#platform (shows Untapped Dark Genome + Pipeline)
    2. Classes I & II → /research#classes
    3. Proof & Results → /research#results
    4. Publications → /research#paper

- **Education** → URL: /education
  - Contains: Academic Training & Certification programs
  - Section: /education#academic-training
  - Next cohort: July 15, 2026
  - Programs: Dark Genome Mapping, AI Structure Prediction, Quantum Molecular Dynamics, Synthetic Expression Genetics

- **Careers** → URL: /careers
  - Open positions: Computational Biologist, Quantum Software Engineer, Lead Regulatory Auditor
  - Apply: careers@qcodon.com

- **Contact** → URL: /contact
  - Partner with Quantum Codon, request investor deck, schedule meetings
  - Email: contact@qcodon.com

---

## SCIENCE & TECHNOLOGY KNOWLEDGE BASE

### What is the Dark Genome?
The "dark genome" refers to the 98% of the genome that does NOT code for proteins under natural conditions. For 50 years, biology focused only on the 2% that codes for proteins. Quantum Codon's Deep Codon platform systematically unlocks this remaining 98%.

### The Two Classes:
**Class I — Non-Expressing DNA Sequences** (~40% of genome)
- DNA regions present in every cell but NEVER transcribed into RNA naturally
- Includes: Intergenic regions, Antisense sequences, Reverse ORFs, Repetitive elements (telomeric repeats, microsatellites, LINE/SINE), Pseudogenes
- Pipeline: Bioinformatics → Synthetic cloning → Expression (E. coli / HEK293 / cell-free) → AlphaFold → Functional assays → Lead optimisation
- Found on website: /research#classes

**Class II — Non-Translating RNA Sequences** (~56% of genome)
- RNA molecules produced by the cell but NEVER translated into protein naturally
- Includes: Introns, tREPs (tRNA-derived peptides), Ribosomal RNA, MicroRNA, Long non-coding RNA
- Pipeline: tRNA / rRNA / intron ID → Computational translation → Stability prediction → Chemical synthesis → Bioassay → tREP library
- Found on website: /research#classes

### Key Scientific Results (Proof & Evidence):
All results are at: /research#results

1. **2009 — World's First Dark Genome Expression** (Dhar et al, JNU)
   - Class I proof of concept: 6 E. coli intergenic sequences cloned and expressed
   - All 6 produced stable proteins; Eka1 caused potent reversible growth inhibition
   - Stats: 6/6 expressed · 2 stable tertiary structures

2. **2013-15 — Anti-Malarial: Plasmodium falciparum Invasion Blocked** (Joshi, Krishnan et al)
   - Class I: Synthetic peptides from S. cerevisiae intergenic sequences
   - >60% inhibition of P. falciparum parasite entry into red blood cells
   - Stats: >60% invasion inhibition · clinical strain validated

3. **2015-23 — Alzheimer's: BACE1 Inhibition at 86.7%** (Raj, Verma et al)
   - Class I: From 2,500 intergenic sequences → 424 novel peptides
   - ECOI2 achieved 86.7% BACE1 inhibition, reduced amyloid Aβ 1-40 and 1-42 in SH-SY5Y cells
   - Stats: ECOI2 86.7% inhibition · Aβ reduction · non-toxic

4. **2023 — First Functional tRNA-Derived Peptide (tREP-18)** (Dhar et al — Published)
   - Class II: E. coli tRNAs computationally translated into tREPs
   - tREP-18 showed IC50 = 22.13 nM against Leishmania donovani (anti-leishmanial)
   - Safe for human macrophages, causes membrane disruption
   - Stats: IC50 = 22.13 nM · membrane disruption

5. **2024 — tREP-Derived Antiviral Vaccine Epitopes** (Shanthappa et al)
   - Class II: tRNA-encoded peptides as vaccine epitopes
   - RRHIDIVV and IMVRFSAE showed favorable HLA binding + 200 ns MD stability
   - Stats: 2 validated epitopes · 200 ns MD stable

6. **2016-23 — Antisense and Reverse Protein Landscape** (Varughese, Garg et al)
   - Class I: Full-length antisense and reverse proteins mapped across E. coli, S. cerevisiae, D. melanogaster
   - Many predicted enzymatic, transporter, or secretory functions
   - Stats: Thousands mapped · multi-organism

### Key Numbers / Stats:
- 15+ years of continuous dark genome research
- 6+ disease areas with proof-of-concept evidence
- 98% genome space historically unmined for therapeutics
- 22 nM IC50 of tREP-18 against Leishmania

### Technology Pipeline (5 Steps):
Found at: /research#platform or /

1. Dark Genome Mapping — Identify Class I and Class II sequences; cross-reference NCBI GEO and NR databases
2. AI Prediction — Translate in silico, predict tertiary structure, screen toxicity, rank stability/solubility/charge/immunogenicity
3. Virtual Screening — Dock dark-genome candidates against kinases, GPCRs, enzymes, viral proteins
4. Quantum Simulation — Molecular dynamics + quantum modules for binding, folding, electron distribution
5. Experimental Validation — Synthesize or express top candidates; validate via cell assays, Western blot, flow cytometry

### AI & Quantum Computing:
- AlphaFold-based tertiary structure prediction
- Multi-omics integration
- ADMET and toxicity screening at genome scale
- Automated candidate prioritization by druggability
- Variational Quantum Eigensolver (VQE) for electronic structure
- Quantum pattern recognition in high-dimensional data
- Molecular dynamics refined by quantum accuracy

### Landmark Publication:
- **Title**: "Recoding Genomic Elements with AI and Quantum Computation to Build the Next Generation Drug Discovery Platform"
- **Authors**: Kadalmani Krishnan, Anita Chugh, Vidya Niranjan, Prof. Pawan Kumar Dhar*
- **Published**: Preprint, 19 May 2025, Preprints.org — Biology and Biotechnology
- **DOI**: 10.20944/preprints202505.1422.v1
- **Link**: https://www.preprints.org/manuscript/202505.1422
- Found at: /research#paper

---

## SERVICES DETAILED:

### 1. Drug Discovery (/services#drug-discovery)
- Computational screening of intergenic DNA strands and antisense reading frames
- Translation in silico of microRNAs, introns, and tRNA-derived peptides (tREPs)
- Binding affinity optimization via virtual docking software
- Candidate synthesis of leading peptide structures for preclinical validations
- Technologies: In Silico Translation, Dynamic Docking, Peptide Synthesis, Lead Profiling

### 2. Bio MMG — Microbiology & Molecular Genetics (/services#bio-mmg)
- High-fidelity cloning of candidate constructs into customized plasmids
- Host organism engineering (E. coli, S. cerevisiae, cell-free models)
- Verification of synthetic protein expression and translational stability
- Growth-inhibition, receptor-binding, and multi-well functional bioassays
- Technologies: Cloning Vectors, Recombinant Expression, Western Blot, SDS-PAGE

### 3. Analytical Services (/services#analytical-services)
- Purity and concentration via HPLC
- Mass spectrometry (LC-MS/MS) for molecular weight and sequence validation
- Solubility, thermal shift, stability, formulation assays
- Preclinical ADMET checks
- Technologies: HPLC, LC-MS/MS, Thermal Shift, ADMET Assays

### 4. Bio Infactic — Bioinformatics (/services#bio-infactic)
- Genome-scale sequence mapping across multi-organism genetic directories
- Non-coding sequence structural annotation and sequence homology indexes
- Tertiary structure prediction (AlphaFold integrations)
- High-throughput screening algorithms for virtual library prioritization
- Technologies: Homology Models, Sequence Mapping, AlphaFold APIs, Deep Docking

### 5. Regulatory & Complaints (/services#regulatory-complaints)
- IND (Investigational New Drug) dossier compilation
- Safety assurance reporting per FDA and EMA guidelines
- GLP/GMP-compliant documentation audits
- Comprehensive client reporting and complaint logging
- Technologies: GLP Logging, FDA Dossiers, Audit Trails, Quality Controls

---

## EDUCATION PROGRAMS (/education#academic-training):
1. Dark Genome Mapping & Annotation
2. AI Structure Prediction (AlphaFold algorithms)
3. Quantum Molecular Dynamics
4. Synthetic Expression Genetics
- Next cohort: July 15, 2026
- Certified by Quantum Codon Pvt Ltd
- Contact: education@qcodon.com

---

## INVESTOR INFORMATION:
- Global pharma spends USD 2.6 trillion annually on R&D with 90%+ failure rate (only mining 1-2% of biological space)
- Deep Codon has competitive moat: 15 years of proprietary science, no competing platform
- Amaravati Quantum Valley anchor laboratory
- For investor deck: contact@qcodon.com

---

## RESPONSE GUIDELINES:
1. Be friendly, concise, and scientifically accurate
2. Always include relevant page links when users ask "where is X" or "how do I find X"
3. Format links like this: [Go to Research Results →](/research#results)
4. For complex science questions, give a clear, jargon-free explanation first, then offer to go deeper
5. If someone asks about drugs/diseases, explain which specific research applies
6. Keep responses focused — don't overwhelm with all information at once
7. If something is not covered in the knowledge base, say you don't have that information and suggest contacting contact@qcodon.com
8. Use emojis sparingly and professionally (🧬 for genome/DNA topics, 💊 for drugs, 🔬 for research, 📍 for navigation)
9. Never make up facts — stick to the provided knowledge base
10. Always be helpful for new users who may not understand biotechnology — explain terms simply

IMPORTANT: You are embedded in the website itself. When you mention pages or sections, format links as markdown links so they render as clickable navigation.
`;
var GEMINI_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=undefined`;
var KB_FALLBACK = [
	{
		patterns: [
			"dark genome",
			"what is dark genome",
			"98%",
			"junk dna",
			"non-coding"
		],
		answer: `🧬 **The Dark Genome** is the 98% of DNA that doesn't code for proteins — long dismissed as "junk DNA". QCodon systematically converts this silent majority into first-in-class drug candidates.\n\n→ Learn more at [Research → Platform Overview](/research#platform)`
	},
	{
		patterns: [
			"trep",
			"trep-18",
			"ic50",
			"leishmania",
			"leishmaniasis",
			"22nm"
		],
		answer: `🔬 **tREP-18** is a tRNA-derived peptide (Class II) derived from E. coli tRNA. It showed an IC50 of **22.13 nM** against *Leishmania donovani* while remaining safe for human macrophages — a breakthrough anti-leishmanial result.\n\n→ Full data at [Research Results](/research#results)`
	},
	{
		patterns: [
			"alzheimer",
			"bace1",
			"86.7",
			"ecoi2",
			"amyloid"
		],
		answer: `🧠 For **Alzheimer's Disease**, the ECOI2 peptide (derived from intergenic sequences) achieved **86.7% BACE1 inhibition** at 1μM and reduced amyloid Aβ 1-40 and 1-42 in SH-SY5Y cells — a non-toxic lead candidate.\n\n→ See full results at [Research → Proof & Results](/research#results)`
	},
	{
		patterns: [
			"malaria",
			"plasmodium",
			"anti-malarial",
			"60%",
			"parasite"
		],
		answer: `💊 For **Anti-Malarial** research, synthetic peptides from *S. cerevisiae* intergenic sequences (Class I) showed **>60% inhibition** of *P. falciparum* invasion into red blood cells, validated on clinical strains.\n\n→ [Research Results](/research#results)`
	},
	{
		patterns: [
			"drug discovery",
			"drug",
			"service",
			"discovery"
		],
		answer: `💊 **Drug Discovery** is Quantum Codon's core service — computationally screening intergenic DNA, antisense sequences, and tREPs, then optimizing binding affinity via virtual docking.\n\n→ [Services → Drug Discovery](/services#drug-discovery)`
	},
	{
		patterns: [
			"service",
			"services",
			"what do you offer",
			"analytical",
			"bio mmg",
			"bioinformatics",
			"regulatory"
		],
		answer: `Quantum Codon offers **5 enterprise services**:\n1. 💊 [Drug Discovery](/services#drug-discovery)\n2. 🧫 [Bio MMG (Microbiology & Molecular Genetics)](/services#bio-mmg)\n3. 🔬 [Analytical Services](/services#analytical-services)\n4. 🖥️ [Bio Infactic (Bioinformatics)](/services#bio-infactic)\n5. 📋 [Regulatory & Complaints](/services#regulatory-complaints)`
	},
	{
		patterns: [
			"class i",
			"class 1",
			"non-expressing",
			"intergenic",
			"antisense",
			"pseudogene"
		],
		answer: `**Class I — Non-Expressing DNA** (~40% of genome): DNA regions that are never transcribed naturally. This includes intergenic regions, antisense sequences, reverse ORFs, repetitive elements, and pseudogenes.\n\nPipeline: Bioinformatics → Synthetic cloning → Expression → AlphaFold → Lead optimisation\n\n→ [Research → Classes I & II](/research#classes)`
	},
	{
		patterns: [
			"class ii",
			"class 2",
			"non-translating",
			"rna",
			"intron",
			"microrna",
			"treps"
		],
		answer: `**Class II — Non-Translating RNA** (~56% of genome): RNA molecules produced but never translated naturally. Includes introns, tREPs, ribosomal RNA, microRNA, and long non-coding RNA.\n\n→ [Research → Classes I & II](/research#classes)`
	},
	{
		patterns: [
			"paper",
			"publication",
			"preprint",
			"doi",
			"2025",
			"landmark"
		],
		answer: `📄 **Landmark Publication (2025)**:\n"Recoding Genomic Elements with AI and Quantum Computation to Build the Next Generation Drug Discovery Platform"\nAuthors: Krishnan, Chugh, Niranjan, **Prof. Pawan K Dhar**\nDOI: 10.20944/preprints202505.1422.v1\n\n→ [Read the Paper](/research#paper)`
	},
	{
		patterns: [
			"education",
			"training",
			"certification",
			"course",
			"learn",
			"program"
		],
		answer: `🎓 **Education & Training** programs by Quantum Codon:\n• Dark Genome Mapping & Annotation\n• AI Structure Prediction (AlphaFold)\n• Quantum Molecular Dynamics\n• Synthetic Expression Genetics\n\nNext cohort: **July 15, 2026** | Contact: education@qcodon.com\n→ [Education Page](/education#academic-training)`
	},
	{
		patterns: [
			"career",
			"job",
			"position",
			"hire",
			"apply",
			"work"
		],
		answer: `💼 **Open Positions at Quantum Codon**:\n• Computational Biologist (Full-Time · Amaravati)\n• Quantum Software Engineer (Full-Time/Hybrid)\n• Lead Regulatory Auditor (Full-Time/Hybrid)\n\nApply: careers@qcodon.com\n→ [Careers Page](/careers)`
	},
	{
		patterns: [
			"contact",
			"email",
			"partner",
			"investor",
			"meeting",
			"reach"
		],
		answer: `📬 **Contact Quantum Codon**:\n• General: contact@qcodon.com\n• Education: education@qcodon.com\n• Careers: careers@qcodon.com\n\nFor partnerships or investor enquiries → [Contact Page](/contact)`
	},
	{
		patterns: [
			"about",
			"who",
			"founder",
			"pawan",
			"dhar",
			"company",
			"history"
		],
		answer: `**Quantum Codon Pvt Ltd** was founded by **Prof. Pawan K Dhar**, a pioneer with 15+ years of dark genome research (formerly JNU, New Delhi). The company is anchored in **Amaravati Quantum Valley**, designing quantum-computational simulations for drug discovery.\n\n→ [About Us](/about)`
	},
	{
		patterns: [
			"alphafold",
			"ai",
			"artificial intelligence",
			"quantum",
			"simulation",
			"pipeline"
		],
		answer: `🤖 Quantum Codon's **Technology Pipeline** uses:\n1. Dark Genome Mapping (NCBI GEO)\n2. AI Prediction (AlphaFold, ADMET)\n3. Virtual Screening (docking vs GPCRs, kinases)\n4. Quantum Simulation (VQE, molecular dynamics)\n5. Experimental Validation (cell assays, Western blot)\n\n→ [Research → Platform Overview](/research#platform)`
	},
	{
		patterns: [
			"result",
			"proof",
			"evidence",
			"disease",
			"validated"
		],
		answer: `🔬 Quantum Codon has **15 years of validated results** across 6 disease areas:\n• 2009: First dark genome expression (E. coli)\n• 2013-15: Anti-malarial (>60% P. falciparum inhibition)\n• 2015-23: Alzheimer's (86.7% BACE1 inhibition)\n• 2023: Anti-leishmanial tREP-18 (IC50=22nM)\n• 2024: Antiviral vaccine epitopes\n\n→ [Full Results](/research#results)`
	}
];
function getFallbackResponse(query) {
	const q = query.toLowerCase();
	for (const entry of KB_FALLBACK) if (entry.patterns.some((p) => q.includes(p))) return entry.answer;
	return null;
}
async function callGemini(history, userMessage) {
	const contents = [
		{
			role: "user",
			parts: [{ text: SYSTEM_PROMPT }]
		},
		{
			role: "model",
			parts: [{ text: "Understood. I am QCodon, the AI assistant for Yellow.ai-styled interface. I'm ready to help." }]
		},
		...history.map((m) => ({
			role: m.sender === "user" ? "user" : "model",
			parts: [{ text: m.text }]
		})),
		{
			role: "user",
			parts: [{ text: userMessage }]
		}
	];
	const res = await fetch(GEMINI_URL, {
		method: "POST",
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify({
			contents,
			generationConfig: {
				temperature: .7,
				topK: 40,
				topP: .95,
				maxOutputTokens: 800
			},
			safetySettings: [{
				category: "HARM_CATEGORY_HARASSMENT",
				threshold: "BLOCK_MEDIUM_AND_ABOVE"
			}, {
				category: "HARM_CATEGORY_HATE_SPEECH",
				threshold: "BLOCK_MEDIUM_AND_ABOVE"
			}]
		})
	});
	if (!res.ok) {
		const err = await res.json().catch(() => ({}));
		throw new Error(err?.error?.message || `API error ${res.status}`);
	}
	return (await res.json()).candidates?.[0]?.content?.parts?.[0]?.text ?? "I couldn't generate a response. Please try again.";
}
function RenderBotText({ text, onNavigate }) {
	const parts = [];
	let index = 0;
	const regex = /(\[([^\]]+)\]\(([^)]+)\))|(\*\*([^*]+)\*\*)/g;
	let match;
	while ((match = regex.exec(text)) !== null) {
		if (match.index > index) parts.push(text.slice(index, match.index));
		if (match[1]) {
			const label = match[2];
			const href = match[3];
			const isInternal = href.startsWith("/");
			parts.push(isInternal ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				onClick: () => onNavigate(href),
				className: "inline-flex items-center gap-0.5 text-violet-600 dark:text-violet-400 hover:underline underline-offset-2 transition-colors font-semibold cursor-pointer text-xs align-baseline",
				children: [label, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_lucide_react.ExternalLink, { className: "w-2.5 h-2.5 inline" })]
			}, match.index) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
				href,
				target: "_blank",
				rel: "noreferrer",
				className: "inline-flex items-center gap-0.5 text-violet-600 dark:text-violet-400 hover:underline underline-offset-2 transition-colors font-semibold cursor-pointer text-xs align-baseline",
				children: [label, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_lucide_react.ExternalLink, { className: "w-2.5 h-2.5 inline" })]
			}, match.index));
		} else if (match[4]) {
			const boldText = match[5];
			parts.push(/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
				className: "font-semibold text-foreground",
				children: boldText
			}, match.index));
		}
		index = match.index + match[0].length;
	}
	if (index < text.length) parts.push(text.slice(index));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: "whitespace-pre-wrap leading-relaxed block text-xs",
		children: parts
	});
}
var ROUTE_GREETINGS = {
	"/": "Hi there! I am QCodon. How can I help you explore Quantum Codon today?",
	"/about": "Hi! I am QCodon. How can I help you with our scientific anchors, founder, and lab locations?",
	"/services": "Hi! I am QCodon. How can I help you understand our computational and clinical services?",
	"/research": "Hi! I am QCodon. How can I help you explore our dark genome research and proof results?",
	"/education": "Hi! I am QCodon. How can I help you learn about our academic training modules and certifications?",
	"/careers": "Hi! I am QCodon. How can I help you check open positions at Quantum Codon?",
	"/contact": "Hi! I am QCodon. How can I help you get in touch or request the investor brief?"
};
function getRouteGreeting(pathname) {
	return ROUTE_GREETINGS[pathname] || ROUTE_GREETINGS["/"];
}
function MascotAvatar({ size = "sm" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: cn("rounded-full bg-gradient-to-br from-violet-600 to-indigo-700 flex items-center justify-center shadow-md shrink-0 select-none", size === "md" ? "w-10 h-10" : "w-8 h-8"),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_lucide_react.Dna, {
			className: cn("text-white animate-[pulse_2.5s_infinite]", size === "md" ? "w-5.5 h-5.5" : "w-4.5 h-4.5"),
			strokeWidth: 2.5
		})
	});
}
function MessageBubble({ msg, onNavigate }) {
	const isAI = msg.sender === "ai";
	const [copied, setCopied] = (0, import_react.useState)(false);
	const handleCopy = () => {
		navigator.clipboard.writeText(msg.text);
		setCopied(true);
		setTimeout(() => setCopied(false), 800);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
		initial: {
			opacity: 0,
			y: 10
		},
		animate: {
			opacity: 1,
			y: 0
		},
		transition: {
			duration: .25,
			ease: "easeOut"
		},
		className: cn("flex flex-col max-w-[85%] group", isAI ? "self-start" : "self-end items-end"),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex gap-2 items-start",
			children: [isAI && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MascotAvatar, { size: "sm" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: cn("px-4 py-2.5 rounded-2xl text-xs leading-relaxed shadow-sm transition-colors", isAI ? "bg-[#eef1f6] dark:bg-zinc-800 text-slate-800 dark:text-slate-100 rounded-tl-sm" : "bg-[#f9c349] text-zinc-950 rounded-tr-sm font-semibold"),
					children: isAI ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RenderBotText, {
						text: msg.text,
						onNavigate
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "whitespace-pre-wrap",
						children: msg.text
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: cn("text-[9px] text-slate-400 dark:text-zinc-500 mt-1 select-none", isAI ? "text-left" : "text-right"),
					children: "Today"
				})]
			})]
		}), isAI && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "flex items-center gap-2 mt-1 ml-10 opacity-0 group-hover:opacity-100 transition-opacity",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				onClick: handleCopy,
				className: "p-1 rounded hover:bg-slate-100 dark:hover:bg-zinc-800 text-slate-400 dark:text-zinc-500 hover:text-slate-700 dark:hover:text-zinc-300 transition-colors cursor-pointer",
				title: "Copy response",
				children: copied ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_lucide_react.Check, { className: "w-3 h-3 text-emerald-600" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_lucide_react.Copy, { className: "w-3 h-3" })
			})
		})]
	});
}
function TypingIndicator() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
		initial: {
			opacity: 0,
			y: 6
		},
		animate: {
			opacity: 1,
			y: 0
		},
		className: "flex items-start gap-2 self-start max-w-[85%]",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MascotAvatar, { size: "sm" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "px-4 py-3.5 rounded-2xl rounded-tl-sm bg-[#eef1f6] dark:bg-zinc-800 flex items-center gap-1.5 shadow-sm",
			children: [
				0,
				1,
				2
			].map((i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.span, {
				className: "w-1.5 h-1.5 rounded-full bg-violet-600 dark:bg-violet-400",
				animate: {
					y: [
						0,
						-3,
						0
					],
					opacity: [
						.5,
						1,
						.5
					]
				},
				transition: {
					duration: .8,
					repeat: Infinity,
					delay: i * .18,
					ease: "easeInOut"
				}
			}, i))
		})]
	});
}
function ChatPanel({ onClose }) {
	const navigate = useNavigate();
	const { pathname } = useLocation();
	const [messages, setMessages] = (0, import_react.useState)([{
		id: "init",
		sender: "ai",
		text: ""
	}]);
	const [input, setInput] = (0, import_react.useState)("");
	const [isTyping, setIsTyping] = (0, import_react.useState)(false);
	const scrollRef = (0, import_react.useRef)(null);
	const inputRef = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		if (messages.length === 1 && messages[0].id === "init") setMessages([{
			id: "init",
			sender: "ai",
			text: getRouteGreeting(pathname)
		}]);
	}, [pathname]);
	(0, import_react.useEffect)(() => {
		if (scrollRef.current) scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
	}, [messages, isTyping]);
	(0, import_react.useEffect)(() => {
		setTimeout(() => inputRef.current?.focus(), 300);
	}, []);
	const handleNavigate = (path) => {
		const [route, hash] = path.split("#");
		navigate({ to: route || "/" });
		if (hash) setTimeout(() => {
			window.document.getElementById(hash)?.scrollIntoView({
				behavior: "smooth",
				block: "start"
			});
		}, 300);
		if (window.innerWidth < 640) onClose();
	};
	const sendMessage = async (text) => {
		if (!text.trim() || isTyping) return;
		const userMsg = {
			id: `u-${Date.now()}`,
			sender: "user",
			text: text.trim()
		};
		setMessages((prev) => [...prev, userMsg]);
		setInput("");
		setIsTyping(true);
		try {
			const response = await callGemini(messages.filter((m) => m.id !== "init"), text.trim());
			setMessages((prev) => [...prev, {
				id: `a-${Date.now()}`,
				sender: "ai",
				text: response
			}]);
		} catch (err) {
			const errMsg = err instanceof Error ? err.message : "Unknown error";
			console.warn("Gemini API unavailable, using knowledge base fallback:", errMsg);
			const fallback = getFallbackResponse(text.trim());
			if (fallback) setMessages((prev) => [...prev, {
				id: `a-${Date.now()}`,
				sender: "ai",
				text: fallback
			}]);
			else setMessages((prev) => [...prev, {
				id: `a-${Date.now()}`,
				sender: "ai",
				text: `I'm having trouble connecting to my AI engine right now. Here is what I can help you with:\n\n• 🧬 [Dark Genome Research](/research#platform)\n• 💊 [Drug Discovery & Services](/services)\n• 🔬 [Research Results & Proof](/research#results)\n• 📄 [Publications](/research#paper)\n• 🎓 [Education Programs](/education)\n• 💼 [Careers](/careers)\n• 📬 [Contact Us](/contact)\n\nOr email us directly: contact@qcodon.com`
			}]);
		} finally {
			setIsTyping(false);
			setTimeout(() => inputRef.current?.focus(), 100);
		}
	};
	const handleReset = () => {
		setMessages([{
			id: "init",
			sender: "ai",
			text: `👋 Hi! I am **QCodon**, your AI-native copilot for Quantum Codon. Let me help you navigate this space.\n\n${getRouteGreeting(pathname)}`
		}]);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative flex flex-col w-full h-full bg-white dark:bg-zinc-900 overflow-hidden text-slate-800 dark:text-zinc-100",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative z-10 flex items-center justify-between px-5 py-4 bg-gradient-to-r from-violet-700 to-indigo-800 text-white shadow-md select-none shrink-0",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MascotAvatar, { size: "md" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute bottom-0 right-0 w-3 h-3 rounded-full bg-green-400 border-2 border-indigo-800 animate-pulse" })]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-col leading-none",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-sm font-bold tracking-tight",
							children: "QCodon"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-[10px] text-white/70 mt-1",
							children: "Ask me anything about QCodon"
						})]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					onClick: onClose,
					className: "p-1 rounded-full text-white/80 hover:text-white hover:bg-white/10 transition-all cursor-pointer",
					title: "Close",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_lucide_react.X, { className: "w-5 h-5" })
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				ref: scrollRef,
				className: "flex-1 overflow-y-auto px-5 py-4 flex flex-col gap-4 scrollbar-none relative z-10 bg-slate-50 dark:bg-zinc-900",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex justify-center my-1 select-none",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "bg-slate-200/60 dark:bg-zinc-800 text-slate-500 dark:text-zinc-400 text-[10px] font-semibold px-3 py-0.5 rounded-full font-mono",
							children: "Today"
						})
					}),
					messages.map((msg) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageBubble, {
						msg,
						onNavigate: handleNavigate
					}, msg.id)),
					isTyping && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TypingIndicator, {})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "p-3 border-t border-slate-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 flex flex-col gap-2 select-none shrink-0 relative z-10",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: handleReset,
						className: "w-9 h-9 rounded-full bg-slate-100 dark:bg-zinc-800 hover:bg-slate-200 dark:hover:bg-zinc-700 flex items-center justify-center text-slate-500 hover:text-slate-700 dark:text-zinc-400 dark:hover:text-zinc-200 transition-colors cursor-pointer shrink-0",
						title: "Reset Chat",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_lucide_react.RotateCcw, { className: "w-4 h-4" })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex-1 flex items-center gap-2 bg-[#f0f2f5] dark:bg-zinc-800 border border-transparent focus-within:border-slate-300 dark:focus-within:border-zinc-700 focus-within:bg-white dark:focus-within:bg-zinc-900 rounded-full px-4 py-2 transition-all",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							ref: inputRef,
							type: "text",
							className: "flex-1 bg-transparent text-xs text-slate-800 dark:text-zinc-100 placeholder:text-slate-400 focus:outline-none leading-relaxed",
							placeholder: "Type your message...",
							value: input,
							onChange: (e) => setInput(e.target.value),
							onKeyDown: (e) => {
								if (e.key === "Enter" && !e.shiftKey) sendMessage(input);
							},
							disabled: isTyping
						}), input.trim() && !isTyping && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: () => void sendMessage(input),
							className: "text-violet-600 dark:text-violet-400 hover:text-violet-800 dark:hover:text-violet-300 transition-colors cursor-pointer flex items-center justify-center shrink-0",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_lucide_react.Send, { className: "w-3.5 h-3.5" })
						})]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "text-center text-[9px] text-slate-400 dark:text-zinc-500 font-mono tracking-widest mt-0.5 select-none",
					children: [
						"Powered by",
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-semibold text-slate-500 dark:text-zinc-400",
							children: "QCodon AI"
						})
					]
				})]
			})
		]
	});
}
function QcChatbot() {
	const [isOpen, setIsOpen] = (0, import_react.useState)(false);
	const handleOpen = () => setIsOpen(true);
	const handleClose = () => setIsOpen(false);
	(0, import_react.useEffect)(() => {
		const handler = (e) => {
			if (e.ctrlKey && e.key === "/") {
				e.preventDefault();
				setIsOpen((prev) => !prev);
			}
		};
		window.addEventListener("keydown", handler);
		return () => window.removeEventListener("keydown", handler);
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, { children: isOpen && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
		initial: { opacity: 0 },
		animate: { opacity: 1 },
		exit: { opacity: 0 },
		onClick: handleClose,
		className: "fixed inset-0 bg-black/10 dark:bg-black/40 backdrop-blur-[1px] z-[9998] sm:hidden block pointer-events-auto"
	}, "copilot-backdrop"), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
		initial: {
			opacity: 0,
			scale: .3,
			y: 150,
			x: 100
		},
		animate: {
			opacity: 1,
			scale: 1,
			y: 0,
			x: 0
		},
		exit: {
			opacity: 0,
			scale: .3,
			y: 150,
			x: 100
		},
		transition: {
			type: "spring",
			stiffness: 320,
			damping: 28
		},
		className: cn("fixed z-[9999] flex flex-col bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 shadow-2xl overflow-hidden", "w-full h-full inset-0 sm:inset-auto sm:bottom-6 sm:right-6 sm:w-[340px] sm:h-[620px] sm:rounded-2xl pointer-events-auto"),
		style: { transformOrigin: "bottom right" },
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChatPanel, { onClose: handleClose })
	}, "copilot-panel")] }) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, { children: !isOpen && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
		initial: {
			opacity: 0,
			scale: .5,
			y: 20
		},
		animate: {
			opacity: 1,
			scale: 1,
			y: 0
		},
		exit: {
			opacity: 0,
			scale: .5,
			y: 20
		},
		transition: {
			type: "spring",
			stiffness: 350,
			damping: 25
		},
		className: "fixed bottom-6 right-6 z-[9997]",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.button, {
			onClick: handleOpen,
			className: "w-14 h-14 rounded-full bg-gradient-to-br from-violet-600 to-indigo-700 hover:from-violet-500 hover:to-indigo-600 flex items-center justify-center shadow-xl hover:shadow-2xl hover:scale-[1.06] transition-all cursor-pointer border border-white/10 select-none relative",
			whileTap: { scale: .94 },
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_lucide_react.Dna, {
				className: "w-7 h-7 text-white animate-[pulse_2.5s_infinite]",
				strokeWidth: 2.2
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute bottom-0.5 right-0.5 w-3 h-3 rounded-full bg-green-500 border-2 border-white dark:border-zinc-950 animate-pulse" })]
		})
	}, "copilot-launcher") })] });
}
function NotFoundComponent() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-7xl font-bold text-foreground",
					children: "404"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-4 text-xl font-semibold text-foreground",
					children: "Page not found"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "The page you're looking for doesn't exist or has been moved."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Go home"
					})
				})
			]
		})
	});
}
function ErrorComponent({ error, reset }) {
	console.error(error);
	const router = useRouter();
	(0, import_react.useEffect)(() => {
		console.error(error);
	}, [error]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-xl font-semibold tracking-tight text-foreground",
					children: "This page didn't load"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "Something went wrong on our end. You can try refreshing or head back home."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex flex-wrap justify-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => {
							router.invalidate();
							reset();
						},
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Try again"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "/",
						className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
						children: "Go home"
					})]
				})
			]
		})
	});
}
var Route$10 = createRootRouteWithContext()({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: "Quantum Codon" },
			{
				name: "description",
				content: "Quantum Codon — Unlocking the dark genome for next-generation therapeutics, bioinformatics, and biotech innovation."
			},
			{
				name: "author",
				content: "Quantum Codon"
			},
			{
				property: "og:title",
				content: "Quantum Codon"
			},
			{
				property: "og:description",
				content: "Unlocking the dark genome for next-generation therapeutics, bioinformatics, and biotech innovation."
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				name: "twitter:card",
				content: "summary"
			},
			{
				name: "twitter:site",
				content: "@QuantumCodon"
			}
		],
		links: [
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: "anonymous"
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600;1,700&family=Fira+Code:wght@400;500;600;700&family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap"
			},
			{
				rel: "icon",
				type: "image/png",
				href: "/favicon.png"
			}
		]
	}),
	shellComponent: RootShell,
	component: RootComponent,
	notFoundComponent: NotFoundComponent,
	errorComponent: ErrorComponent
});
function RootShell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "en",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("head", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("script", { dangerouslySetInnerHTML: { __html: themeBootstrapScript } })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", { children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})] })]
	});
}
function RootComponent() {
	const { queryClient } = Route$10.useRouteContext();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(QueryClientProvider, {
		client: queryClient,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ThemeProvider, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ContactModalProvider, { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(QcPreloader3D, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(QcNavbar, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteFooter, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(QcChatbot, {})
		] }) })
	});
}
var $$splitComponentImporter$8 = () => import("./research-CoAHqUBt.mjs");
var Route$9 = createFileRoute("/research")({
	head: () => ({ meta: [{ title: "Research — Quantum Codon" }, {
		name: "description",
		content: "15+ years of peer-reviewed dark genome research across six disease areas."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$8, "component")
});
var Route$8 = createFileRoute("/education")({ beforeLoad: () => {
	throw redirect({
		to: "/services/$slug",
		params: { slug: "education" }
	});
} });
var $$splitComponentImporter$7 = () => import("./contact-CEZByq3V.mjs");
var Route$7 = createFileRoute("/contact")({
	head: () => ({ meta: [
		{ title: "Contact — Quantum Codon" },
		{
			name: "description",
			content: "Get in touch with the Quantum Codon team. Talk to sales, support, or visit our studio — we reply within one business day."
		},
		{
			property: "og:title",
			content: "Contact — Quantum Codon"
		},
		{
			property: "og:description",
			content: "Tell us about your project and our team will reach out personally."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$7, "component")
});
var $$splitComponentImporter$6 = () => import("./case-studies-DOfaBzGs.mjs");
var Route$6 = createFileRoute("/case-studies")({
	head: () => ({ meta: [
		{ title: "Case Studies — Quantum Codon" },
		{
			name: "description",
			content: "Discover how Quantum Codon makes a difference across therapeutics, diagnostics, and industrial biotech."
		},
		{
			property: "og:title",
			content: "Case Studies — Quantum Codon"
		},
		{
			property: "og:description",
			content: "Discover how Quantum Codon makes a difference across therapeutics, diagnostics, and industrial biotech."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$6, "component")
});
var $$splitComponentImporter$5 = () => import("./careers-CV0QiSsr.mjs");
var Route$5 = createFileRoute("/careers")({
	head: () => ({ meta: [{ title: "Careers — Quantum Codon" }, {
		name: "description",
		content: "Join the Deep Codon team — pioneers in biology, quantum computation, and software engineering."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
var $$splitComponentImporter$4 = () => import("./blogs-BO-Mf7Wp.mjs");
var Route$4 = createFileRoute("/blogs")({ component: lazyRouteComponent($$splitComponentImporter$4, "component") });
var $$splitComponentImporter$3 = () => import("./about-C7cyKXwt.mjs");
var Route$3 = createFileRoute("/about")({
	head: () => ({ meta: [{ title: "About — Quantum Codon" }, {
		name: "description",
		content: "Quantum Codon was founded to explore the final frontier of biology: the silent 98% of the genome."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
var $$splitComponentImporter$2 = () => import("./routes-Cs1P81dl.mjs");
var Route$2 = createFileRoute("/")({
	head: () => ({ meta: [{ title: "Quantum Codon — Deep Codon Initiative" }, {
		name: "description",
		content: "Decoding the 98% of the genome that mainstream biology has ignored — to design first-in-class therapeutic molecules."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
var $$splitComponentImporter$1 = () => import("./blogs-c1tz3zvH.mjs");
var Route$1 = createFileRoute("/blogs/")({
	head: () => ({ meta: [
		{ title: "Blogs — Quantum Codon" },
		{
			name: "description",
			content: "Ideas, trends, and stories from the world of AI and dark genome science."
		},
		{
			property: "og:title",
			content: "Blogs — Quantum Codon"
		},
		{
			property: "og:description",
			content: "Ideas, trends, and stories from the world of AI and dark genome science."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
var $$splitComponentImporter = () => import("./services.regulatory-compliance-CrYMHnWT.mjs");
var Route = createFileRoute("/services/regulatory-compliance")({
	head: () => ({ meta: [
		{ title: "Regulatory & Compliance — Quantum Codon" },
		{
			name: "description",
			content: "Your regulatory compass in Biotech, Biomanufacturing & BioAI. FDA, EMA, ICH submissions; GMP strategy; AI/ML pathways; investor-ready compliance."
		},
		{
			property: "og:title",
			content: "Regulatory & Compliance — Quantum Codon"
		},
		{
			property: "og:description",
			content: "We transform regulatory complexity into competitive advantage — from molecule to market."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
var ResearchRoute = Route$9.update({
	id: "/research",
	path: "/research",
	getParentRoute: () => Route$10
});
var EducationRoute = Route$8.update({
	id: "/education",
	path: "/education",
	getParentRoute: () => Route$10
});
var ContactRoute = Route$7.update({
	id: "/contact",
	path: "/contact",
	getParentRoute: () => Route$10
});
var CaseStudiesRoute = Route$6.update({
	id: "/case-studies",
	path: "/case-studies",
	getParentRoute: () => Route$10
});
var CareersRoute = Route$5.update({
	id: "/careers",
	path: "/careers",
	getParentRoute: () => Route$10
});
var BlogsRoute = Route$4.update({
	id: "/blogs",
	path: "/blogs",
	getParentRoute: () => Route$10
});
var AboutRoute = Route$3.update({
	id: "/about",
	path: "/about",
	getParentRoute: () => Route$10
});
var IndexRoute = Route$2.update({
	id: "/",
	path: "/",
	getParentRoute: () => Route$10
});
var BlogsIndexRoute = Route$1.update({
	id: "/",
	path: "/",
	getParentRoute: () => BlogsRoute
});
var ServicesRegulatoryComplianceRoute = Route.update({
	id: "/services/regulatory-compliance",
	path: "/services/regulatory-compliance",
	getParentRoute: () => Route$10
});
var ServicesSlugRoute = Route$13.update({
	id: "/services/$slug",
	path: "/services/$slug",
	getParentRoute: () => Route$10
});
var IndustriesSlugRoute = Route$12.update({
	id: "/industries/$slug",
	path: "/industries/$slug",
	getParentRoute: () => Route$10
});
var BlogsRouteChildren = {
	BlogsSlugRoute: Route$11.update({
		id: "/$slug",
		path: "/$slug",
		getParentRoute: () => BlogsRoute
	}),
	BlogsIndexRoute
};
var rootRouteChildren = {
	IndexRoute,
	AboutRoute,
	BlogsRoute: BlogsRoute._addFileChildren(BlogsRouteChildren),
	CareersRoute,
	CaseStudiesRoute,
	ContactRoute,
	EducationRoute,
	ResearchRoute,
	IndustriesSlugRoute,
	ServicesSlugRoute,
	ServicesRegulatoryComplianceRoute
};
var routeTree = Route$10._addFileChildren(rootRouteChildren)._addFileTypes();
var getRouter = () => {
	return createRouter({
		routeTree,
		context: { queryClient: new QueryClient() },
		scrollRestoration: true,
		defaultPreloadStaleTime: 0
	});
};
//#endregion
export { getRouter };
