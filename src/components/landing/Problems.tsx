import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { DollarSign, Wrench, TrendingDown, CreditCard } from "lucide-react";

const problems = [
  {
    icon: <DollarSign className="h-8 w-8 text-primary" />,
    title: "Capital Imobilizado",
    description: "Comprar equipamentos caros prende seu capital que poderia ser usado para crescer.",
  },
  {
    icon: <Wrench className="h-8 w-8 text-primary" />,
    title: "Custos Imprevisíveis",
    description: "Manutenção e reparos geram despesas inesperadas e difíceis de orçar.",
  },
  {
    icon: <TrendingDown className="h-8 w-8 text-primary" />,
    title: "Obsolescência Rápida",
    description: "A tecnologia avança rápido, e seus equipamentos perdem valor e eficiência.",
  },
  {
    icon: <CreditCard className="h-8 w-8 text-primary" />,
    title: "Juros Elevados",
    description: "Financiamentos para compra de ativos vêm com juros que aumentam o custo total.",
  },
];

export const Problems = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">
            Comprar Equipamentos Já Não Faz Sentido
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Descubra os problemas que você evita ao alugar com a Bro's Rental.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {problems.map((problem, index) => (
            <Card key={index} className="bg-card border p-6 flex items-start gap-6 hover:border-primary/50 transition-colors">
              <div className="bg-primary/10 p-3 rounded-lg">
                {problem.icon}
              </div>
              <div>
                <CardTitle>{problem.title}</CardTitle>
                <p className="text-muted-foreground mt-2">{problem.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};