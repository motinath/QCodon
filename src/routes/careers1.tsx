import { createFileRoute } from "@tanstack/react-router";
import CareersPage from "@/pages/Careers";

export const Route = createFileRoute("/careers1")({
  head: () => ({
    meta: [
      { title: "Careers — Quantum Codon" },
      { name: "description", content: "Join the Deep Codon team — pioneers in biology, quantum computation, and software engineering." },
    ],
  }),
  component: CareersPage,
});
