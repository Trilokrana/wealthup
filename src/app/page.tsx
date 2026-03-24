import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import BackedBy from "@/components/BackedBy";
import GrowthWays from "@/components/GrowthWays";
import FasterGrowth from "@/components/FasterGrowth";
import PlanBanner from "@/components/PlanBanner";
import HowItWorks from "@/components/HowItWorks";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#DDEEFE]">
      <Navbar />
      <Hero />
      <BackedBy />
      <GrowthWays />
      <FasterGrowth />
      <PlanBanner />
      <HowItWorks />
    </main>
  );
}
