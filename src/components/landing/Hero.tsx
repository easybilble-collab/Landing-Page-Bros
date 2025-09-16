import { Button } from "@/components/ui/button";
import { ArrowRight, Users } from "lucide-react";

export const Hero = () => {
  return (
    <section className="pt-32 pb-20 bg-secondary">
      <div className="container mx-auto px-4 md:px-6 grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter">
            Tecnologia de Ponta,{" "}
            <span className="text-primary">Sem Burocracia.</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto md:mx-0">
            Equipe sua empresa com os melhores notebooks, tablets e smartphones do mercado. Modelo de locação flexível para acelerar seu crescimento.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4">
            <Button size="lg" className="bg-cta hover:bg-cta/90 text-cta-foreground font-bold">
              Solicitar Orçamento <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline">
              Ver Equipamentos
            </Button>
          </div>
          <div className="flex items-center justify-center md:justify-start gap-2 text-sm text-muted-foreground pt-4">
            <Users className="h-5 w-5 text-primary" />
            <span>+2.500 empresas já confiam na Bro's Rental</span>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <img 
            src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
            alt="Equipe diversificada colaborando em um escritório moderno e tecnológico" 
            className="rounded-2xl shadow-2xl w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};