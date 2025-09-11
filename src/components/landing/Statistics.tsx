import { TrendingDown, Clock, Users, Globe } from "lucide-react";

const stats = [
  {
    icon: <TrendingDown className="h-12 w-12 text-white" />,
    value: "40%",
    title: "Redução Média de Custos",
    description: "Economia comprovada vs. compra de equipamentos",
  },
  {
    icon: <Clock className="h-12 w-12 text-white" />,
    value: "48h",
    title: "Tempo de Entrega",
    description: "Do pedido à instalação em sua empresa",
  },
  {
    icon: <Users className="h-12 w-12 text-white" />,
    value: "2.500+",
    title: "Empresas Atendidas",
    description: "Confiança de organizações em todo o Brasil",
  },
  {
    icon: <Globe className="h-12 w-12 text-white" />,
    value: "99.8%",
    title: "Disponibilidade",
    description: "Uptime garantido com suporte técnico especializado",
  },
];

export const Statistics = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-primary to-purple-600 text-white">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold">
          Resultados que Comprovam Nossa Eficiência
        </h2>
        <p className="text-white/80 mt-4 max-w-3xl mx-auto">
          Números que demonstram o impacto real em empresas como a sua
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white/10 p-6 rounded-lg">
              {stat.icon}
              <p className="text-5xl font-bold mt-4">{stat.value}</p>
              <h3 className="text-xl font-semibold mt-2">{stat.title}</h3>
              <p className="text-white/70 mt-1">{stat.description}</p>
            </div>
          ))}
        </div>
        <p className="mt-12 text-lg font-medium">
          Resultados comprovados em mais de 2.500 empresas atendidas.
        </p>
      </div>
    </section>
  );
};