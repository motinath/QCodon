import { createFileRoute } from "@tanstack/react-router";
import ContactPage from "@/pages/Contact";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Quantum Codon" },
      { name: "description", content: "Partner with Quantum Codon. Request the investor deck or schedule a meeting." },
    ],
  }),
  component: ContactPage,
});
