import HeroSection from "@/Components/HeroSection";
import IntroSection from "@/Components/IntroSection";
import ProductSection from "@/Components/ProductSection";
import StatsSection from "@/Components/StatsSection";
import StepsSection from "@/Components/StepsSection";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <StepsSection />
      <ProductSection />
      <StatsSection />
      <IntroSection />
    </main>
  );
}