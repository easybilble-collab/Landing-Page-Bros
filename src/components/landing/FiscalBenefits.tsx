import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calculator, PiggyBank, TrendingUp } from "lucide-react";

const benefits = [
  {
    icon: <Calculator className="h-8 w-8 text-primary" />,
    title: "Dedução Integral",
    description: "100% do valor pago é dedutível como despesa operacional",
  },
  {
    icon: <PiggyBank className="h-8 w-8 text-primary" />,
    title: "Redução de Impostos",
    description: "Diminua significativamente PIS, COFINS e CSLL",
  },
  {
    icon: <TrendingUp className="h-8 w-8 text-primary" />,
    title: "Fluxo de Caixa Otimizado",
    description: "Pagamentos mensais preservam capital de giro",
  },
];

export const FiscalBenefits = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">
            Benefícios Fiscais que Fazem a Diferença
          </h2>
          <p className="text-muted-foreground mt-4 max-w-3xl mx-auto">
            Maximize sua eficiência tributária enquanto moderniza sua infraestrutura
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <Card key={index}>
              <CardHeader className="flex flex-row items-center gap-4 space-y-0">
                {benefit.icon}
                <CardTitle>{benefit.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="mt-12 text-center bg-secondary p-8 rounded-lg">
          <p className="text-2xl font-bold text-primary">Economia média de 30% em impostos comparado à compra</p>
          <p className="text-muted-foreground mt-2">Consulte nossos especialistas tributários para uma análise personalizada.</p>
        </div>
      </div>
    </section>
  );
};