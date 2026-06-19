import { createFileRoute } from "@tanstack/react-router";
import EducationPage from "@/pages/Education";

export const Route = createFileRoute("/education")({
  head: () => ({
    meta: [
      { title: "Education — Quantum Codon" },
      { name: "description", content: "Institutional training and certification in computational biology, synthetic biology, and quantum-molecular mechanics." },
    ],
  }),
  component: EducationPage,
});
