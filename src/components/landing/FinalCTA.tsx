import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, CheckCircle, Phone, Mail, MessageSquare } from "lucide-react";

const benefits = [
  "Sem investimento inicial",
  "Resposta em 48h",
  "Sem impacto no crédito",
];

const finalBenefits = [
  "Consultoria gratuita",
  "Análise personalizada",
  "Implementação em 48h",
];

export const FinalCTA = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-primary to-purple-600 text-white">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <Badge className="bg-white text-primary mb-4">Momento de Decisão</Badge>
        <h2 className="text-3xl md:text-4xl font-bold">
          Cada Dia com Tecnologia Obsoleta é Produtividade e Lucro Perdidos
        </h2>
        <p className="mt-4 max-w-3xl mx-auto text-lg text-white/80">
          Não espere mais. Solicite um orçamento personalizado e descubra como nossa solução pode transformar sua empresa em apenas 48 horas.
        </p>
        <div className="flex justify-center gap-4 md:gap-8 my-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-green-300" />
              <span>{benefit}</span>
            </div>
          ))}
        </div>
        <Button size="lg" className="bg-cta hover:bg-cta/90 text-cta-foreground h-14 px-10 text-lg font-bold">
          Solicitar Orçamento Imediato <ArrowRight className="ml-2 h-5 w-5" />
        </Button>
        <p className="mt-4 text-sm text-white/70">Resposta em até 2 horas úteis</p>
        <div className="mt-12 border-t border-white/20 pt-8">
          <div className="flex flex-wrap justify-center items-center gap-x-6 gap-y-2 text-sm">
            <span className="flex items-center gap-2"><Phone className="h-4 w-4" /> (11) 4002-8922</span>
            <span className="flex items-center gap-2"><Mail className="h-4 w-4" /> vendas@brosrental.com.br</span>
            <span className="flex items-center gap-2"><MessageSquare className="h-4 w-4" /> Chat online</span>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-x-4 gap-y-2 mt-4 text-xs text-white/80">
            {finalBenefits.map(b => <span key={b} className="flex items-center gap-1"><CheckCircle className="h-3 w-3" /> {b}</span>)}
          </div>
        </div>
      </div>
    </section>
  );
};