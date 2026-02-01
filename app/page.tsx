import { Hero } from "@/components/home/hero";
import { WhySection } from "@/components/home/why-section";
import { ServicesTeaser } from "@/components/home/services-teaser";
import { ApproachSummary } from "@/components/home/approach-summary";
import { TrustSection } from "@/components/home/trust-section";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <WhySection />
      <ApproachSummary />
      <ServicesTeaser />
      <TrustSection />
    </div>
  );
}
