import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

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
            O Que Nossos Clientes Dizem
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Veja como ajudamos empresas a crescer com mais inteligência e agilidade.
          </p>
        </div>
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-4xl mx-auto"
        >
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1 h-full">
                  <Card className="h-full flex flex-col justify-between p-6">
                    <CardContent className="p-0">
                      <p className="italic">"{testimonial.quote}"</p>
                    </CardContent>
                    <div className="flex items-center gap-4 mt-6">
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
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
};