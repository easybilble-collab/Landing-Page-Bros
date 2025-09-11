import { Header } from "@/components/landing/Header";
import { Hero } from "@/components/landing/Hero";
import { Problems } from "@/components/landing/Problems";
import { Solutions } from "@/components/landing/Solutions";
import { HowItWorks } from "@/components/landing/HowItWorks";
import { Clients } from "@/components/landing/Clients";
import { Testimonials } from "@/components/landing/Testimonials";
import { MadeWithDyad } from "@/components/made-with-dyad";

const Index = () => {
  return (
    <div className="bg-background text-foreground">
      <Header />
      <main>
        <Hero />
        <Problems />
        <Solutions />
        <HowItWorks />
        <Clients />
        <Testimonials />
      </main>
      <footer className="py-6 bg-secondary">
        <MadeWithDyad />
      </footer>
    </div>
  );
};

export default Index;