import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calculator, PiggyBank, TrendingUp, Gem, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const generalBenefits = [
  {
    icon: <Calculator className="h-8 w-8 text-primary" />,
    title: "Dedução como Despesa",
    description: "Transforme o custo com tecnologia em despesa operacional (OPEX).",
  },
  {
    icon: <PiggyBank className="h-8 w-8 text-primary" />,
    title: "Redução de Impostos",
    description: "Impacto direto na base de cálculo de impostos sobre o lucro.",
  },
  {
    icon: <TrendingUp className="h-8 w-8 text-primary" />,
    title: "Fluxo de Caixa Otimizado",
    description: "Pagamentos mensais que preservam seu capital de giro para investimentos.",
  },
];

export const FiscalBenefits = () => {
  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">
            Benefícios Fiscais que Impulsionam seu Balanço
          </h2>
          <p className="text-muted-foreground mt-4 max-w-3xl mx-auto">
            Nossa solução é uma ferramenta estratégica de planejamento tributário, com vantagens claras para cada regime.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {generalBenefits.map((benefit, index) => (
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
        
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          <div className="flex flex-col gap-8">
            <Card className="border-2 border-primary shadow-lg flex-grow">
              <CardHeader>
                <Badge className="w-fit bg-primary text-primary-foreground">
                  <Gem className="mr-2 h-4 w-4" /> Vantagem Estratégica para Lucro Real
                </Badge>
                <CardTitle className="pt-2">Maximize sua Economia Tributária</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Para empresas no regime de Lucro Real, a locação de equipamentos é <strong>100% dedutível como despesa operacional (OPEX)</strong>. Isso reduz diretamente a base de cálculo do Imposto de Renda (IRPJ) e da Contribuição Social sobre o Lucro Líquido (CSLL), gerando uma economia significativa e imediata.
                </p>
                <Button className="bg-cta hover:bg-cta/90 text-cta-foreground">
                  Simular Economia para Lucro Real
                </Button>
              </CardContent>
            </Card>

            <div className="bg-background p-6 rounded-lg">
              <h3 className="font-semibold text-lg mb-2">Para Lucro Presumido e Simples Nacional</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-success mr-2 mt-1 flex-shrink-0" />
                  <span className="text-muted-foreground">
                    <strong>Previsibilidade Total:</strong> Custos mensais fixos sem surpresas com manutenção.
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-success mr-2 mt-1 flex-shrink-0" />
                  <span className="text-muted-foreground">
                    <strong>Tecnologia de Ponta:</strong> Acesso a equipamentos modernos sem descapitalizar sua empresa.
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-success mr-2 mt-1 flex-shrink-0" />
                  <span className="text-muted-foreground">
                    <strong>Foco no Core Business:</strong> Deixe a gestão de ativos de TI conosco e concentre-se no que sua empresa faz de melhor.
                  </span>
                </li>
              </ul>
            </div>
          </div>
          <div className="hidden lg:block">
            <img src="https://images.pexels.com/photos/6801874/pexels-photo-6801874.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Análise de gráficos financeiros em monitores modernos" className="rounded-lg object-cover w-full h-full shadow-lg" />
          </div>
        </div>
      </div>
    </section>
  );
};