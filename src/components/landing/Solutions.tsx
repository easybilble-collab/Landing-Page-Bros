import { Calendar, Truck, Shield, Wrench, RotateCcw, TrendingUp, Award } from "lucide-react";

const solutions = [
  { icon: <Calendar className="h-8 w-8 text-primary" />, text: "Contratos Flexíveis" },
  { icon: <Truck className="h-8 w-8 text-primary" />, text: "Pagamento Após Entrega" },
  { icon: <Shield className="h-8 w-8 text-primary" />, text: "Sem Impacto no Crédito" },
  { icon: <Wrench className="h-8 w-8 text-primary" />, text: "Manutenção Inclusa" },
  { icon: <RotateCcw className="h-8 w-8 text-primary" />, text: "Troca e Upgrade Fácil" },
  { icon: <TrendingUp className="h-8 w-8 text-primary" />, text: "Sempre Atualizado" },
  { icon: <Award className="h-8 w-8 text-primary" />, text: "Suporte Premium" },
];

export const Solutions = () => {
  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">
            Apresentamos o Modelo Pague e Use
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Nossa solução de locação é desenhada para dar liberdade e poder de fogo para sua empresa, sem as amarras da compra de ativos.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {solutions.map((solution, index) => (
            <div key={index} className="flex flex-col items-center text-center gap-4 p-4 rounded-lg transition-transform hover:scale-105">
              <div className="bg-background p-4 rounded-full shadow-md">
                {solution.icon}
              </div>
              <p className="font-semibold">{solution.text}</p>
            </div>
          ))}
        </div>
        <div className="mt-12 bg-primary text-primary-foreground p-8 rounded-2xl text-center shadow-lg">
          <h3 className="text-2xl font-bold">Vantagem Competitiva Imediata</h3>
          <p className="mt-2 max-w-3xl mx-auto">
            Equipe sua empresa com a melhor tecnologia do mercado hoje, sem descapitalizar seu caixa. Saia na frente da concorrência com agilidade e inteligência financeira.
          </p>
        </div>
      </div>
    </section>
  );
};