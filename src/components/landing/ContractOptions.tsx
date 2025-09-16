import { Card, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const options = [
  {
    imgSrc: "https://images.pexels.com/photos/1029757/pexels-photo-1029757.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    title: "Upgrade Premium",
    description: "Troque por equipamentos mais modernos",
    badge: "MAIS POPULAR",
    badgeVariant: "default",
  },
  {
    imgSrc: "https://images.pexels.com/photos/4050315/pexels-photo-4050315.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    title: "Extensão do Contrato",
    description: "Continue com os mesmos equipamentos",
    badge: "ECONOMIA",
    badgeVariant: "secondary",
  },
  {
    imgSrc: "https://images.pexels.com/photos/7988086/pexels-photo-7988086.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    title: "Devolução Simples",
    description: "Finalize sem complicações",
    badge: "SEM TAXA",
    badgeVariant: "outline",
  },
];

export const ContractOptions = () => {
  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold">
          Escolha como Terminar seu Contrato
        </h2>
        <p className="text-muted-foreground mt-4 max-w-3xl mx-auto">
          Flexibilidade total para adaptar sua estratégia tecnológica
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {options.map((option, index) => (
            <Card key={index} className="relative overflow-hidden border-2 hover:border-primary transition-all group">
              <Badge variant={option.badgeVariant as any} className="absolute top-4 right-4 z-10">{option.badge}</Badge>
              <img src={option.imgSrc} alt={option.title} className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105" />
              <div className="p-6">
                <CardTitle className="mt-2">{option.title}</CardTitle>
                <CardContent className="p-0 mt-2">
                  <p className="text-muted-foreground">{option.description}</p>
                </CardContent>
              </div>
            </Card>
          ))}
        </div>
        <p className="mt-12 text-lg font-medium">
          Flexibilidade Total: Adapte sua estratégia tecnológica conforme sua empresa evolui.
        </p>
      </div>
    </section>
  );
};