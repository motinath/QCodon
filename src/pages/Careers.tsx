import PageShell from "./_PageShell";
import CareersHero from "@/components/careers/CareersHero";
import ValuesHexGrid from "@/components/careers/ValuesHexGrid";
import OpenPositions from "@/components/careers/OpenPositions";
import { SiteFooter } from "@/components/contact/SiteFooter";

export default function CareersPage() {
  return (
    <PageShell className="bg-[#edf2f7] dark:bg-[#0a1118]">
      <CareersHero />
      <ValuesHexGrid />
      <OpenPositions />
      <SiteFooter />
    </PageShell>
  );
}
