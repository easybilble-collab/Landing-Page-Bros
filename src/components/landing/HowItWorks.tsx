import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Package, Truck, Smile } from "lucide-react";

const steps = [
  {
    icon: <Package className="h-10 w-10 text-primary" />,
    title: "1. Escolha seu Plano",
    description: "Navegue e escolha os equipamentos que se encaixam na sua necessidade.",
  },
  {
    icon: <Truck className="h-10 w-10 text-primary" />,
    title: "2. Receba Onde Quiser",
    description: "Cuidamos da logística e entregamos tudo pronto para uso no seu escritório.",
  },
  {
    icon: <Smile className="h-10 w-10 text-primary" />,
    title: "3. Use Sem Preocupação",
    description: "Aproveite a tecnologia de ponta com suporte e manutenção inclusos.",
  },
];

export const HowItWorks = () => {
  return (
    <section className="py-20 bg-card">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">
            Alugar Nunca Foi Tão Fácil
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Nosso processo é simples, rápido e transparente.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center p-6">
              <div className="inline-block bg-background p-4 rounded-full">
                {step.icon}
              </div>
              <h3 className="mt-4 text-xl font-semibold">{step.title}</h3>
              <p className="text-muted-foreground mt-2">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};