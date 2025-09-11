import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Package, Truck, Smile } from "lucide-react";

const steps = [
  {
    icon: <Package className="h-10 w-10 text-primary" />,
    title: "1. Monte seu setup ideal",
    description: "Escolha os equipamentos perfeitos para cada membro da sua equipe em nosso catálogo.",
  },
  {
    icon: <Truck className="h-10 w-10 text-primary" />,
    title: "2. Receba em tempo recorde",
    description: "Cuidamos da logística e entregamos tudo pronto para uso onde você precisar.",
  },
  {
    icon: <Smile className="h-10 w-10 text-primary" />,
    title: "3. Produza sem limites",
    description: "Com tudo funcionando, sua equipe foca no que faz de melhor. E nosso suporte garante que continue assim.",
  },
];

export const HowItWorks = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">
            Comece a usar em 3 passos simples
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Nosso processo é desenhado para ser rápido, simples e sem burocracia.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center p-6">
              <div className="inline-block bg-card p-4 rounded-full">
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