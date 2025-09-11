import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { DollarSign, Wrench, TrendingDown, CreditCard } from "lucide-react";

const problems = [
  {
    icon: <DollarSign className="h-10 w-10 text-primary" />,
    title: "Capital Imobilizado",
    description: "Comprar equipamentos caros prende seu capital que poderia ser usado para crescer.",
  },
  {
    icon: <Wrench className="h-10 w-10 text-primary" />,
    title: "Custos Imprevisíveis",
    description: "Manutenção, reparos e seguros geram despesas inesperadas e difíceis de orçar.",
  },
  {
    icon: <TrendingDown className="h-10 w-10 text-primary" />,
    title: "Obsolescência Rápida",
    description: "A tecnologia avança rápido, e seus equipamentos comprados perdem valor e eficiência.",
  },
  {
    icon: <CreditCard className="h-10 w-10 text-primary" />,
    title: "Juros Elevados",
    description: "Financiamentos para compra de ativos vêm com juros que aumentam o custo total.",
  },
];

export const Problems = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">
            Comprar Equipamentos Já Não Faz Sentido
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Empresas modernas estão abandonando o modelo de compra de ativos. Descubra os problemas que você evita ao alugar com a Bro's Rental.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {problems.map((problem, index) => (
            <Card key={index} className="text-center p-6 transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
              <CardHeader className="items-center">
                <div className="bg-primary/10 p-4 rounded-full">
                  {problem.icon}
                </div>
                <CardTitle className="mt-4">{problem.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{problem.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};