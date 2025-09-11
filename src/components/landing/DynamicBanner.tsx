import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, Tablet, Smartphone } from "lucide-react";
import Autoplay from "embla-carousel-autoplay";

const slides = [
  {
    category: "Notebooks",
    title: "Locação de notebook em oferta",
    price: "89,99",
    description: "Notebooks de alta performance para impulsionar a produtividade da sua empresa. Processadores Intel Core i7, 16GB RAM.",
    gradient: "from-primary to-blue-500",
    image: "https://images.pexels.com/photos/4158/apple-iphone-smartphone-desk.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    badge: "OFERTA ESPECIAL",
  },
  {
    category: "Tablets",
    title: "Locação de tablet em oferta",
    price: "43,99",
    description: "Tablets de última geração para mobilidade e praticidade. Samsung Galaxy Tab, iPad Pro disponíveis.",
    gradient: "from-blue-500 to-primary",
    icon: <Tablet className="h-48 w-48 text-white/80" />,
    badge: "OFERTA ESPECIAL",
  },
  {
    category: "Smartphones",
    title: "Locação de smartphone em oferta",
    price: "32,99",
    description: "Smartphones corporativos com conectividade 5G. iPhone, Samsung Galaxy, ideal para equipes móveis.",
    gradient: "from-primary to-pink-500",
    icon: <Smartphone className="h-48 w-48 text-white/80" />,
    badge: "OFERTA ESPECIAL",
  },
];

export const DynamicBanner = () => {
  return (
    <section className="pt-20 bg-secondary">
      <Carousel
        plugins={[Autoplay({ delay: 4000, stopOnInteraction: true })]}
        className="w-full"
        opts={{ loop: true }}
      >
        <CarouselContent>
          {slides.map((slide, index) => (
            <CarouselItem key={index}>
              <div className={`relative text-white py-20 md:py-32 bg-gradient-to-br ${slide.gradient}`}>
                <div className="container mx-auto px-4 md:px-6 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                  <div className="space-y-6 text-center md:text-left">
                    <Badge variant="destructive" className="text-sm font-bold rotate-[-5deg]">
                      <Star className="mr-2 h-4 w-4" /> {slide.badge}
                    </Badge>
                    <h1 className="text-4xl md:text-5xl font-bold tracking-tighter">{slide.title}</h1>
                    <p className="text-lg text-white/80">{slide.description}</p>
                    <div className="flex items-center gap-4 justify-center md:justify-start">
                      <div className="bg-white/20 rounded-full p-1 flex items-center">
                        <div className="bg-white text-primary rounded-full h-16 w-16 flex flex-col justify-center items-center font-bold text-xs">
                          <span>A partir de</span>
                          <span className="text-lg">R${slide.price}</span>
                          <span>/mês</span>
                        </div>
                      </div>
                      <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-gray-200">
                        Contratar {slide.category}
                      </Button>
                    </div>
                  </div>
                  <div className="flex justify-center items-center">
                    {slide.image ? (
                      <img src={slide.image} alt={slide.title} className="rounded-lg shadow-2xl max-h-80" />
                    ) : (
                      slide.icon
                    )}
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 text-white" />
        <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 text-white" />
      </Carousel>
      <div className="bg-secondary py-8">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-xl font-semibold mb-4">Locação de equipamentos: conheça as principais ofertas</h2>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg">Locar Equipamentos</Button>
            <Button size="lg" variant="outline">Solicitar Contato</Button>
            <Button size="lg" variant="secondary">Compre agora</Button>
          </div>
        </div>
      </div>
    </section>
  );
};