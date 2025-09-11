import { Header } from "@/components/landing/Header";
import { DynamicBanner } from "@/components/landing/DynamicBanner";
import { Problems } from "@/components/landing/Problems";
import { Solution } from "@/components/landing/Solution";
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
        <DynamicBanner />
        <Problems />
        <Solution />
        <FiscalBenefits />
        <ContractOptions />
        <Statistics />
        <Testimonials />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;