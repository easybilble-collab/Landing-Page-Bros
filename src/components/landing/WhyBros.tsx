import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { DollarSign, TrendingUp, ShieldCheck, RefreshCw, PiggyBank, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const benefits = [
  {
    icon: <DollarSign className="h-8 w-8 text-primary" />,
    title: "Capital Livre",
    description: "Invista no seu core business, não em ativos que desvalorizam.",
    className: "md:col-span-2",
  },
  {
    icon: <TrendingUp className="h-8 w-8 text-primary" />,
    title: "Sempre Atualizado",
    description: "Acesso à última tecnologia sem custos de obsolescência.",
    className: "",
  },
  {
    icon: <ShieldCheck className="h-8 w-8 text-primary" />,
    title: "Suporte Total",
    description: "Manutenção e troca rápida garantem sua produtividade.",
    className: "",
  },
  {
    icon: <PiggyBank className="h-8 w-8 text-primary" />,
    title: "Benefício Fiscal",
    description: "Deduza 100% do valor como despesa operacional.",
    className: "md:col-span-2",
  },
  {
    icon: <RefreshCw className="h-8 w-8 text-primary" />,
    title: "Flexibilidade Total",
    description: "Escale, reduza ou atualize seus equipamentos com facilidade.",
    className: "",
  },
];

export const WhyBros = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">
            A Vantagem Estratégica da Locação
          </h2>
          <p className="text-muted-foreground mt-4 max-w-3xl mx-auto">
            Transforme um centro de custo em um motor de inovação. Veja por que líderes de mercado escolhem a Bro's Rental.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <Card key={index} className={`p-6 border-2 hover:border-primary transition-all hover:shadow-lg ${benefit.className}`}>
              <CardHeader className="p-0">
                {benefit.icon}
                <CardTitle className="mt-4 text-xl">{benefit.title}</CardTitle>
              </CardHeader>
              <CardContent className="p-0 mt-2">
                <p className="text-muted-foreground">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
           <Card className="md:col-span-1 p-6 bg-primary text-primary-foreground flex flex-col justify-center items-center text-center">
              <CardHeader className="p-0">
                <CardTitle className="text-2xl">Pronto para Inovar?</CardTitle>
              </CardHeader>
              <CardContent className="p-0 mt-4">
                <p>Descubra o plano ideal para sua empresa.</p>
                <Button variant="secondary" className="mt-4 bg-white text-primary hover:bg-gray-200">
                  Fale Conosco <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
        </div>
      </div>
    </section>
  );
};