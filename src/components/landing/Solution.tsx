import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Calendar, ShieldCheck, Award, RefreshCw, TrendingUp, Star } from "lucide-react";

const benefits = [
  { icon: <Calendar className="h-6 w-6 text-success" />, text: "Contratos Flexíveis" },
  { icon: <CheckCircle className="h-6 w-6 text-success" />, text: "Pagamento Após Entrega" },
  { icon: <ShieldCheck className="h-6 w-6 text-success" />, text: "Sem Impacto no Crédito" },
  { icon: <Award className="h-6 w-6 text-success" />, text: "Garantia do Fabricante" },
  { icon: <RefreshCw className="h-6 w-6 text-success" />, text: "Troca Rápida" },
  { icon: <TrendingUp className="h-6 w-6 text-success" />, text: "Escalabilidade" },
  { icon: <Star className="h-6 w-6 text-success" />, text: "Marcas Líderes" },
];

export const Solution = () => {
  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <Badge className="bg-success text-success-foreground hover:bg-success/90 mb-4">
          Vantagem Competitiva Imediata
        </Badge>
        <h2 className="text-3xl md:text-4xl font-bold">
          O Modelo Pague e Use que Está Revolucionando o Mercado
        </h2>
        <p className="text-muted-foreground mt-4 max-w-3xl mx-auto">
          Transforme sua estratégia de TI com soluções flexíveis que crescem junto com seu negócio.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-12">
          {benefits.map((benefit, index) => (
            <Card key={index} className="p-4">
              <CardContent className="flex flex-col items-center justify-center gap-4 p-0">
                {benefit.icon}
                <span className="font-semibold text-center">{benefit.text}</span>
              </CardContent>
            </Card>
          ))}
        </div>
        <p className="mt-12 text-lg font-medium">
          Transforme a gestão de TI da sua empresa em vantagem competitiva.
        </p>
      </div>
    </section>
  );
};