import { createFileRoute } from "@tanstack/react-router";
import { Toaster } from "sonner";
import { ContactHero } from "@/components/contact/ContactHero";
import { ContactChannels } from "@/components/contact/ContactChannels";
import { ContactForm } from "@/components/contact/ContactForm";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Quantum Codon" },
      {
        name: "description",
        content:
          "Get in touch with the Quantum Codon team. Talk to sales, support, or visit our studio — we reply within one business day.",
      },
      { property: "og:title", content: "Contact — Quantum Codon" },
      {
        property: "og:description",
        content: "Tell us about your project and our team will reach out personally.",
      },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <ContactHero />
      <ContactChannels />
      <ContactForm />
      <Toaster position="top-center" richColors />
    </main>
  );
}
