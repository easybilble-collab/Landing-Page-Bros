import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Package, Truck, Smile } from "lucide-react";

const steps = [
  {
    icon: <Package className="h-10 w-10 text-primary" />,
    title: "1. Escolha seu Plano",
    description: "Navegue por nosso catálogo e escolha os equipamentos e o plano de locação que se encaixam na sua necessidade.",
  },
  {
    icon: <Truck className="h-10 w-10 text-primary" />,
    title: "2. Receba Onde Quiser",
    description: "Nós cuidamos da logística e entregamos tudo pronto para uso no seu escritório ou em casa, em tempo recorde.",
  },
  {
    icon: <Smile className="h-10 w-10 text-primary" />,
    title: "3. Use Sem Preocupação",
    description: "Aproveite a tecnologia de ponta com suporte e manutenção inclusos. Fez um upgrade? Nós trocamos para você.",
  },
];

export const HowItWorks = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">
            Alugar Nunca Foi Tão Fácil
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Nosso processo é simples, rápido e transparente. Em apenas 3 passos, sua equipe estará equipada com o melhor da tecnologia.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <Card key={index} className="text-center p-6 border-2 border-transparent hover:border-primary transition-all duration-300">
              <CardHeader className="items-center">
                <div className="bg-primary/10 p-4 rounded-full">
                  {step.icon}
                </div>
                <CardTitle className="mt-4 text-xl">{step.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{step.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};