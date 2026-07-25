import Header from "@/Components/Common/Header";
import HeroSection from "@/Components/HeroSection";
import IntroSection from "@/Components/IntroSection";
import ProductosSection from "@/Components/ProductSection";
import StatsSection from "@/Components/StatsSection";
import StepsSection from "@/Components/StepsSection";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <StepsSection />
        <ProductosSection />
        <StatsSection />
        <IntroSection />
      </main>
    </>
  );
}
