import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const testimonials = [
  {
    name: "Ana Silva",
    title: "CEO, InovaTech",
    avatar: "https://i.pravatar.cc/150?u=a042581f4e29026704d",
    quote: "A Bro's Rental revolucionou nossa TI. Equipamentos de ponta sem imobilizar nosso capital. O suporte é incrível!",
  },
  {
    name: "Marcos Lins",
    title: "Diretor de Engenharia, CodeFlow",
    avatar: "https://i.pravatar.cc/150?u=a042581f4e29026704e",
    quote: "O processo foi ridiculamente fácil. Em 48 horas, toda a nossa equipe de desenvolvimento estava com notebooks novos. Recomendo 100%.",
  },
  {
    name: "Julia Costa",
    title: "Fundadora, Agile Solutions",
    avatar: "https://i.pravatar.cc/150?u=a042581f4e29026704f",
    quote: "Flexibilidade é tudo para uma startup. Poder fazer upgrade dos equipamentos conforme crescemos, sem burocracia, é uma vantagem competitiva enorme.",
  },
];

export const Testimonials = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">
            O que nossos parceiros dizem
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-card border p-6 flex flex-col justify-between">
                <CardContent className="p-0">
                  <p className="italic text-lg">"{testimonial.quote}"</p>
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
      </div>
    </section>
  );
};