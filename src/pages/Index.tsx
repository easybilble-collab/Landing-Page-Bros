import { Header } from "@/components/landing/Header";
import { Hero } from "@/components/landing/Hero";
import { Brands } from "@/components/landing/Brands";
import { Benefits } from "@/components/landing/Benefits";
import { HowItWorks } from "@/components/landing/HowItWorks";
import { Clients } from "@/components/landing/Clients";
import { Testimonials } from "@/components/landing/Testimonials";
import { Footer } from "@/components/landing/Footer";

const Index = () => {
  return (
    <div className="bg-background text-foreground">
      <Header />
      <main>
        <Hero />
        <Brands />
        <Benefits />
        <HowItWorks />
        <Clients />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
};

export default Index;