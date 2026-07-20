import { r as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { t as Link$1 } from "./router-compat-Byun9neG.mjs";
import { t as require_lucide_react } from "../_libs/lucide-react.mjs";
import { t as Reveal } from "./Reveal-az3c4cn2.mjs";
import { n as objectType, r as stringType, t as literalType } from "../_libs/zod.mjs";
import { t as toast } from "../_libs/sonner.mjs";
//#region dist/server/assets/contact-D1RZPr5w.js
var import_react = /* @__PURE__ */ __toESM(require_react(), 1);
var import_jsx_runtime = require_jsx_runtime();
var import_lucide_react = require_lucide_react();
var contact_default = "/assets/contact-BeVBNzzS.png";
function PillButton({ children, asChildHref, className = "", ...rest }) {
	const classes = `group inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-medium text-white shadow-sm transition-all hover:shadow-md hover:opacity-90 ${className}`;
	const style = { backgroundColor: "#2563eb" };
	if (asChildHref) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
		href: asChildHref,
		className: classes,
		style,
		children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_lucide_react.ArrowRight, { className: "h-4 w-4 transition-transform group-hover:translate-x-1" })]
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
		className: classes,
		style,
		...rest,
		children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_lucide_react.ArrowRight, { className: "h-4 w-4 transition-transform group-hover:translate-x-1" })]
	});
}
function ContactHero() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "relative overflow-hidden",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "hero-grid-bg absolute inset-0 -z-10" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-x-0 top-0 -z-10 h-72 bg-gradient-to-b from-background to-transparent" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto grid max-w-7xl grid-cols-[repeat(auto-fit,minmax(min(100%,420px),1fr))] items-center gap-12 px-6 py-[clamp(5rem,10vw,7rem)]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "max-w-xl",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mb-6 text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground",
							children: "Contact"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
							className: "font-semibold leading-[1.1] text-foreground",
							style: { fontSize: "clamp(1.8rem, 3.5vw, 3.25rem)" },
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "block",
									children: "Your Goals,"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "block",
									children: "Our Commitment"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-serif-italic mt-2 block",
									style: { color: "#2563eb" },
									children: "— Let’s Build Together"
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-8 max-w-md text-base leading-relaxed text-muted-foreground",
							children: "Tell us what you’re building and we’ll help you ship it. Our team replies to every message within one business day."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-10",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PillButton, {
								asChildHref: "#form",
								children: "Get in touch"
							})
						})
					]
				}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: 150,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "absolute -bottom-6 -right-6 h-3/4 w-3/4 rounded-3xl md:-bottom-8 md:-right-8",
							style: { backgroundColor: "#2563eb" }
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "relative overflow-hidden rounded-3xl shadow-xl ring-1 ring-border",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: contact_default,
								alt: "Customer support specialist with headset working at a laptop",
								className: "h-full w-full object-cover",
								loading: "eager"
							})
						})]
					})
				})]
			})
		]
	});
}
var channels = [
	{
		icon: import_lucide_react.Headphones,
		title: "Talk to sales",
		subtitle: "Interested in our offerings? Reach out and we'll tailor a fit.",
		linkLabel: "contact@qcodon.com",
		href: "mailto:contact@qcodon.com",
		from: "translateY(80px)"
	},
	{
		icon: import_lucide_react.LifeBuoy,
		title: "Talk to support",
		subtitle: "Already a customer? We're here whenever you need a hand.",
		linkLabel: "contact@qcodon.com",
		href: "mailto:contact@qcodon.com",
		from: "translateY(-80px)"
	},
	{
		icon: import_lucide_react.MapPin,
		title: "Visit us",
		subtitle: "Amaravati Quantum Valley, Amaravati, Andhra Pradesh 522020, India.",
		linkLabel: "View on Google Maps",
		href: "https://maps.app.goo.gl/bAURtJ7543zqQ3qG8",
		from: "translateY(80px)"
	}
];
function AnimatedCard({ channel, index, inView }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-2xl border border-border bg-card p-5 hover:shadow-md w-full md:w-64",
		style: {
			transform: inView ? "translateY(0)" : channel.from,
			opacity: inView ? 1 : 0,
			transition: `transform 0.9s cubic-bezier(0.22, 1, 0.36, 1) ${index * 160}ms, opacity 0.9s ease ${index * 160}ms`
		},
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid h-10 w-10 place-items-center rounded-lg border border-border bg-background",
				style: { color: "#2563eb" },
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(channel.icon, {
					className: "h-5 w-5",
					strokeWidth: 1.5
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "mt-4 text-base font-semibold text-foreground",
				children: channel.title
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-1 text-sm leading-relaxed text-muted-foreground",
				children: channel.subtitle
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
				href: channel.href,
				className: "mt-3 inline-block text-sm font-medium underline underline-offset-4 hover:opacity-75",
				style: { color: "#2563eb" },
				children: channel.linkLabel
			})
		]
	});
}
function ContactChannels() {
	const gridRef = (0, import_react.useRef)(null);
	const [inView, setInView] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const el = gridRef.current;
		if (!el) return;
		const obs = new IntersectionObserver(([entry]) => {
			setInView(entry.isIntersecting);
		}, { threshold: .4 });
		obs.observe(el);
		return () => obs.disconnect();
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "px-6 py-24",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-2xl text-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
					className: "text-4xl font-semibold text-foreground sm:text-5xl",
					children: ["Turn Your Ideas", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-serif-italic mt-1 block",
						style: { color: "#2563eb" },
						children: "into Reality"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-6 text-base leading-relaxed text-muted-foreground",
					children: "Pick the channel that works best for you. Whether you’re scoping a new project, troubleshooting, or just want to say hello — we’re listening."
				})]
			}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				ref: gridRef,
				className: "mt-16 flex flex-col md:flex-row justify-center gap-16",
				children: channels.map((c, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatedCard, {
					channel: c,
					index: i,
					inView
				}, c.title))
			})]
		})
	});
}
var office_building_default = "/assets/office-building-hZlYqlH_.jpg";
function ContactMap() {
	const mapSearchUrl = "https://maps.app.goo.gl/bAURtJ7543zqQ3qG8";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "px-6 py-12 md:py-20 bg-[#f0f4f8]/50 dark:bg-[#0c131f]/50 transition-colors duration-300 border-t border-b border-border/10",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mx-auto max-w-7xl",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid grid-cols-1 lg:grid-cols-12 gap-12 items-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "lg:col-span-5 space-y-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-xs font-semibold uppercase tracking-[0.2em] text-accent-blue block",
							children: "Our Headquarters"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "text-3xl font-bold text-foreground md:text-4xl font-serif-display leading-tight",
							children: "Flagship Corporate Laboratory"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-muted-foreground leading-relaxed text-sm",
							children: "Located in the heart of Andhra Pradesh's quantum research corridor, our flagship laboratory facility houses the computational nodes, molecular genetics host engineering platforms, and bio-validation benches that power the Deep Codon Initiative."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "p-6 rounded-2xl border border-border/10 bg-white/40 dark:bg-black/20 shadow-sm backdrop-blur-sm space-y-4 hover:shadow-md transition-all duration-300",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex gap-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "h-10 w-10 flex items-center justify-center rounded-xl bg-accent-blue/10 text-accent-blue shrink-0 border border-accent-blue/10",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_lucide_react.MapPin, { className: "h-5 w-5" })
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "font-semibold text-foreground text-sm",
									children: "Quantum Codon Pvt Ltd"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "text-muted-foreground text-xs mt-2 leading-relaxed",
									children: [
										"Amaravati Quantum Valley,",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
										"Amaravati, Andhra Pradesh 522020,",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
										"India"
									]
								})] })]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "pt-4 border-t border-foreground/5 flex flex-wrap gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: mapSearchUrl,
									target: "_blank",
									rel: "noopener noreferrer",
									className: "inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold bg-accent-blue text-white shadow-lg shadow-accent-blue/20 hover:opacity-90 transition-all duration-300",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_lucide_react.Navigation, { className: "h-3 w-3" }), "Get Directions"]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: mapSearchUrl,
									target: "_blank",
									rel: "noopener noreferrer",
									className: "inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold border border-border text-muted-foreground hover:text-foreground transition-all duration-300",
									children: ["Open in Google Maps", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_lucide_react.ExternalLink, { className: "h-3 w-3" })]
								})]
							})]
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "lg:col-span-7 w-full",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: 150,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid grid-cols-1 sm:grid-cols-2 gap-6",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: mapSearchUrl,
								target: "_blank",
								rel: "noopener noreferrer",
								className: "group block relative w-full aspect-[4/3] rounded-3xl overflow-hidden border border-border/10 shadow-lg hover:shadow-xl hover:border-accent-blue/25 transition-all duration-500 bg-[#091b2c]",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: office_building_default,
									alt: "Quantum Codon Flagship Laboratory Building",
									className: "w-full h-full object-cover transition-transform duration-750 group-hover:scale-[1.03]"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "absolute inset-0 bg-black/0 group-hover:bg-accent-blue/[0.02] transition-colors duration-300 flex items-end p-4",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "px-3 py-1.5 rounded-full bg-slate-900/90 text-white text-[9px] font-semibold tracking-wider uppercase shadow backdrop-blur flex items-center gap-1",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_lucide_react.Microscope, { className: "h-3 w-3 text-accent-blue" }), "Flagship Facility"]
									})
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: mapSearchUrl,
								target: "_blank",
								rel: "noopener noreferrer",
								className: "group block relative w-full aspect-[4/3] rounded-3xl overflow-hidden border border-border/10 shadow-lg hover:shadow-xl hover:border-accent-blue/25 transition-all duration-500 bg-[#091b2c]",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("iframe", {
									title: "Quantum Codon Office Location Map",
									src: "https://maps.google.com/maps?q=Amaravati%20Quantum%20Valley%20Amaravati%20Andhra%20Pradesh%20India&t=&z=14&ie=UTF8&iwloc=&output=embed",
									className: "w-full h-full border-0 pointer-events-none transition-transform duration-700 group-hover:scale-[1.015] dark:opacity-85",
									allowFullScreen: false,
									loading: "lazy",
									style: { filter: "contrast(1.1) saturate(0.9) brightness(0.95)" }
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "absolute inset-0 bg-transparent group-hover:bg-accent-blue/[0.02] transition-colors duration-300 flex items-center justify-center cursor-pointer",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300 px-4 py-2 rounded-full bg-slate-900/95 text-white text-[9px] font-semibold shadow-lg backdrop-blur flex items-center gap-1.5",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_lucide_react.Navigation, { className: "h-3.5 w-3.5" }), "Open Google Maps"]
									})
								})]
							})]
						})
					})
				})]
			}) })
		})
	});
}
var schema = objectType({
	name: stringType().trim().min(1, "Name is required").max(100),
	email: stringType().trim().email("Enter a valid email").max(255),
	phone: stringType().trim().max(30).optional().or(literalType("")),
	message: stringType().trim().min(1, "Message is required").max(500)
});
var MAX = 500;
function ContactForm() {
	const [message, setMessage] = (0, import_react.useState)("");
	const [submitting, setSubmitting] = (0, import_react.useState)(false);
	function onSubmit(e) {
		e.preventDefault();
		const fd = new FormData(e.currentTarget);
		const parsed = schema.safeParse({
			name: fd.get("name"),
			email: fd.get("email"),
			phone: fd.get("phone"),
			message: fd.get("message")
		});
		if (!parsed.success) {
			toast.error(parsed.error.issues[0]?.message ?? "Please check the form");
			return;
		}
		setSubmitting(true);
		setTimeout(() => {
			setSubmitting(false);
			toast.success("Thanks — we'll be in touch within one business day.");
			e.target.reset();
			setMessage("");
		}, 600);
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "form",
		className: "px-6 py-24",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid max-w-7xl grid-cols-[repeat(auto-fit,minmax(min(100%,420px),1fr))] gap-12 px-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "md:sticky md:top-24",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mb-5 text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground",
						children: "Send a message"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
						className: "text-4xl font-semibold text-foreground sm:text-5xl",
						children: ["Get in", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-serif-italic ml-3",
							style: { color: "#2563eb" },
							children: "touch"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-6 max-w-md text-base leading-relaxed text-muted-foreground",
						children: "Share a few details about your project or question, and the right person on our team will reach back out personally."
					})
				]
			}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
				delay: 120,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
					onSubmit,
					className: "rounded-3xl border border-border bg-card p-8 shadow-sm sm:p-10",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid grid-cols-1 gap-5 sm:grid-cols-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "Name",
								name: "name",
								type: "text",
								required: true,
								placeholder: "Jane Doe"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "Email",
								name: "email",
								type: "email",
								required: true,
								placeholder: "jane@company.com"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-5",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "Phone",
								name: "phone",
								type: "tel",
								placeholder: "+1 555 000 0000"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-5",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
									className: "mb-2 block text-sm font-medium text-foreground",
									children: "Message"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
									name: "message",
									required: true,
									maxLength: MAX,
									value: message,
									onChange: (e) => setMessage(e.target.value),
									rows: 5,
									placeholder: "Tell us a little about your project...",
									className: "w-full resize-none rounded-2xl border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-2 text-right text-xs text-muted-foreground",
									children: [
										message.length,
										"/",
										MAX,
										" characters"
									]
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-8",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PillButton, {
								type: "submit",
								disabled: submitting,
								className: "w-full sm:w-auto",
								children: submitting ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "flex items-center justify-center gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
										className: "animate-spin h-4 w-4 text-current",
										xmlns: "http://www.w3.org/2000/svg",
										fill: "none",
										viewBox: "0 0 24 24",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
											className: "opacity-25",
											cx: "12",
											cy: "12",
											r: "10",
											stroke: "currentColor",
											strokeWidth: "4"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
											className: "opacity-75",
											fill: "currentColor",
											d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
										})]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Sending message..." })]
								}) : "Submit now"
							})
						})
					]
				})
			})]
		})
	});
}
function Field({ label, ...rest }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
		className: "mb-2 block text-sm font-medium text-foreground",
		children: label
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
		...rest,
		className: "w-full rounded-full border border-border bg-background px-5 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
	})] });
}
function Contact() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "pt-24 pb-16 min-h-screen transition-colors duration-300 bg-background text-foreground relative overflow-hidden",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[350px] bg-gradient-to-b from-accent-blue/15 via-transparent to-transparent blur-[120px] rounded-full pointer-events-none -z-10 opacity-60 dark:opacity-40" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "max-w-6xl mx-auto px-6 mb-8 relative z-10",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link$1, {
					to: "/",
					className: "text-xs tracking-[0.25em] uppercase text-muted-foreground hover:text-foreground transition",
					children: "← Back to home"
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative z-10",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ContactHero, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ContactChannels, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ContactMap, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ContactForm, {})
				]
			})
		]
	});
}
var SplitComponent = Contact;
//#endregion
export { SplitComponent as component };
