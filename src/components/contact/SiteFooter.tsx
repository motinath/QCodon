import { Facebook, Instagram, Linkedin, Twitter, Youtube } from "lucide-react";

const columns = [
  {
    title: "Offerings",
    links: ["Offerings", "Bio MMG", "Analytical Service", "Bioinformatics", "Regulatory & Compliance"],
  },
  {
    title: "Industries",
    links: [ "Pharma", "Education", "Bio-Manufacturing"],
  },
  {
    title: "Company",
    links: ["About", "Careers", "Research", "Case Studies", "Blog", "Contact"],
  },
];

const socials = [
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Youtube, href: "#", label: "YouTube" },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-4">
          <div>
            <div className="font-serif-italic text-3xl text-foreground">
              Quantum Codon<span className="text-primary"></span>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
              Empowering the future of biotechnology with cutting-edge solutions.
            </p>
            <a
              href="mailto:hello@quantumcodon.com"
              className="mt-6 inline-block text-sm font-medium underline-offset-4 hover:underline"
              style={{ color: '#2563eb' }}
            >
              hello@quantumcodon.com
            </a>
            <div className="mt-6 flex gap-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="grid h-9 w-9 place-items-center rounded-full border border-border bg-background text-foreground transition-colors hover:border-blue-600 hover:bg-blue-600 hover:text-white"
                >
                  <s.icon className="h-4 w-4" strokeWidth={1.75} />
                </a>
              ))}
            </div>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <h4 className="text-sm font-semibold uppercase tracking-[0.15em] text-foreground">
                {col.title}
              </h4>
              <ul className="mt-5 space-y-3">
                {col.links.map((l) => (
                  <li key={l}>
                    <a
                      href="#"
                      className="text-sm text-muted-foreground transition-colors hover:text-blue-600"
                    >
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-border pt-6 text-xs text-muted-foreground sm:flex-row sm:items-center">
          <p>© {new Date().getFullYear()} Quantum Codon. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-foreground">Privacy</a>
            <a href="#" className="hover:text-foreground">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
