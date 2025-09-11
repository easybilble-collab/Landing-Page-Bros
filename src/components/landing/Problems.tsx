import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AlertTriangle, DollarSign, Wrench, TrendingDown, CreditCard } from "lucide-react";

const problems = [
  {
    icon: <DollarSign className="h-8 w-8 text-primary" />,
    title: "Capital Imobilizado",
    description: "Recursos presos em ativos que se desvalorizam rapidamente",
  },
  {
    icon: <Wrench className="h-8 w-8 text-primary" />,
    title: "Custos Imprevisíveis",
    description: "Manutenções e reparações que impactam o orçamento sem aviso",
  },
  {
    icon: <TrendingDown className="h-8 w-8 text-primary" />,
    title: "Obsolescência Rápida",
    description: "Tecnologia ultrapassada em poucos anos, prejudicando a produtividade",
  },
  {
    icon: <CreditCard className="h-8 w-8 text-primary" />,
    title: "Juros e IOF Elevados",
    description: "Financiamentos caros que comprometem a saúde financeira",
  },
];

export const Problems = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <Badge variant="destructive" className="mb-4">
          <AlertTriangle className="mr-2 h-4 w-4" /> O Desafio Real
        </Badge>
        <h2 className="text-3xl md:text-4xl font-bold">
          Comprar Equipamentos Já Não Faz Sentido
        </h2>
        <p className="text-muted-foreground mt-4 max-w-3xl mx-auto">
          Enquanto investe em tecnologia, a sua empresa enfrenta desafios que comprometem o crescimento e a competitividade no mercado.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          {problems.map((problem, index) => (
            <Card key={index} className="text-left p-6 border-2 hover:border-primary transition-all hover:shadow-lg">
              <CardHeader className="p-0">
                {problem.icon}
                <CardTitle className="mt-4">{problem.title}</CardTitle>
              </CardHeader>
              <CardContent className="p-0 mt-2">
                <p className="text-muted-foreground">{problem.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        <p className="mt-12 text-lg font-medium">
          É tempo de uma abordagem mais inteligente para a gestão de tecnologia empresarial.
        </p>
      </div>
    </section>
  );
};