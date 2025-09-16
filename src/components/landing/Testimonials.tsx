import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Carlos Silva",
    title: "Diretor de TI, TechCorp",
    avatar: "https://i.pravatar.cc/150?u=carlos",
    quote: "A locação reduziu nossos custos em 45% e nos deu flexibilidade para crescer sem grandes investimentos iniciais.",
  },
  {
    name: "Ana Santos",
    title: "CEO, InnovaBiz",
    avatar: "https://i.pravatar.cc/150?u=ana",
    quote: "Excelente suporte técnico e equipamentos sempre atualizados. Nosso uptime melhorou significativamente.",
  },
  {
    name: "Roberto Costa",
    title: "CFO, GlobalTech",
    avatar: "https://i.pravatar.cc/150?u=roberto",
    quote: "O modelo de pagamento após entrega nos deu segurança total. Recomendo para qualquer empresa.",
  },
];

const sectors = ["Tecnologia", "Saúde", "Educação", "Varejo", "Serviços Financeiros", "Indústria"];

export const Testimonials = () => {
  return (
    <section id="empresas" className="py-20 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">
            O que Nossos Clientes Dizem
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Depoimentos reais de empresas que transformaram sua gestão de TI
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-secondary border p-6 flex flex-col">
              <div className="flex mb-2">
                {[...Array(5)].map((_, i) => <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />)}
              </div>
              <CardContent className="p-0 flex-grow">
                <p className="italic text-foreground">"{testimonial.quote}"</p>
              </CardContent>
              <div className="flex items-center gap-4 mt-6 pt-6 border-t">
                <Avatar>
                  <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                  <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
        <div className="text-center mt-16">
          <p className="text-lg font-semibold">Junte-se a mais de 2.500 empresas que já transformaram sua gestão de TI</p>
          <div className="flex flex-wrap justify-center gap-x-4 gap-y-2 mt-4">
            {sectors.map(sector => <span key={sector} className="text-muted-foreground">{sector}</span>)}
          </div>
        </div>
      </div>
    </section>
  );
};