import PageShell from "./_PageShell";
import CareersHero from "@/components/careers/CareersHero";
import ValuesHexGrid from "@/components/careers/ValuesHexGrid";
import OpenPositions from "@/components/careers/OpenPositions";

export default function CareersPage() {
  return (
    <PageShell spotlight="from-amber-500/10 via-transparent to-transparent">
      <CareersHero />
      <ValuesHexGrid />
      <OpenPositions />
    </PageShell>
  );
}
