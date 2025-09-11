import { CheckCircle2 } from "lucide-react";

const benefits = [
  {
    title: "Capital livre para investir",
    description: "Mantenha o fluxo de caixa e invista no que realmente impulsiona seu crescimento, não em ativos que depreciam.",
  },
  {
    title: "Sempre com o melhor hardware",
    description: "Sua equipe merece as melhores ferramentas. Ofereça os últimos lançamentos e troque sempre que precisar, sem complicação.",
  },
  {
    title: "Suporte ágil que não te deixa na mão",
    description: "Qualquer problema, uma solução rápida. Nosso time de especialistas garante que sua operação nunca pare.",
  },
  {
    title: "Escale sua equipe sem dor de cabeça",
    description: "O time cresceu? Entregamos os novos equipamentos em tempo recorde. Simples, rápido e na medida da sua necessidade.",
  },
];

export const Benefits = () => {
  return (
    <section className="py-20 bg-card">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">
            Por que alugar é a decisão mais inteligente
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Veja por que líderes de mercado estão abandonando a compra de ativos de TI.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <div className="relative rounded-lg overflow-hidden aspect-video">
             <img 
                src="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Equipe produtiva colaborando em um escritório moderno com equipamentos de ponta" 
                className="w-full h-full object-cover"
              />
          </div>
          <div className="grid grid-cols-1 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start gap-4">
                <CheckCircle2 className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold">{benefit.title}</h3>
                  <p className="text-muted-foreground mt-1">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};