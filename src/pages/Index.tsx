import { Header } from "@/components/landing/Header";
import { Hero } from "@/components/landing/Hero";
import { WhyBros } from "@/components/landing/WhyBros";
import { FiscalBenefits } from "@/components/landing/FiscalBenefits";
import { ContractOptions } from "@/components/landing/ContractOptions";
import { Statistics } from "@/components/landing/Statistics";
import { Testimonials } from "@/components/landing/Testimonials";
import { FAQ } from "@/components/landing/FAQ";
import { FinalCTA } from "@/components/landing/FinalCTA";
import { Footer } from "@/components/landing/Footer";

const Index = () => {
  return (
    <div className="bg-background text-foreground">
      <Header />
      <main>
        <Hero />
        <WhyBros />
        <Statistics />
        <FiscalBenefits />
        <Testimonials />
        <ContractOptions />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;