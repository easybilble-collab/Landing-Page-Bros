import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import { Laptop, Tablet, Smartphone as SmartphoneIcon } from "lucide-react";
import Autoplay from "embla-carousel-autoplay";

const slides = [
  {
    category: "Notebooks",
    price: "89,99",
    icon: <Laptop className="h-12 w-12" />,
    gradient: "from-blue-500 to-purple-600",
    image: "https://cdn.jsdelivr.net/gh/dyad-sh/dyad-assets@main/images/notebook.png",
  },
  {
    category: "Tablets",
    price: "43,99",
    icon: <Tablet className="h-12 w-12" />,
    gradient: "from-green-400 to-blue-500",
    image: "https://cdn.jsdelivr.net/gh/dyad-sh/dyad-assets@main/images/tablet.png",
  },
  {
    category: "Smartphones",
    price: "32,99",
    icon: <SmartphoneIcon className="h-12 w-12" />,
    gradient: "from-yellow-400 to-orange-500",
    image: "https://cdn.jsdelivr.net/gh/dyad-sh/dyad-assets@main/images/smartphone.png",
  },
];

export const Hero = () => {
  return (
    <section className="relative pt-20 bg-background">
      <Carousel
        className="w-full"
        plugins={[Autoplay({ delay: 5000, stopOnInteraction: true })]}
        opts={{ loop: true }}
      >
        <CarouselContent>
          {slides.map((slide, index) => (
            <CarouselItem key={index}>
              <div
                className={`relative flex h-[70vh] min-h-[500px] w-full items-center text-white bg-gradient-to-br ${slide.gradient} overflow-hidden`}
              >
                <div className="absolute inset-0 bg-black/30 z-10" />
                <div className="container mx-auto px-4 md:px-6 text-center z-20">
                  <div className="flex flex-col items-center gap-4">
                    {slide.icon}
                    <h1 className="text-4xl md:text-6xl font-bold tracking-tighter drop-shadow-lg">
                      {slide.category}
                    </h1>
                    <div className="relative">
                      <div className="absolute -inset-2 bg-white/20 rounded-full blur-xl"></div>
                      <div className="relative flex items-center justify-center h-32 w-32 md:h-40 md:w-40 rounded-full border-4 border-white bg-white/10 backdrop-blur-sm">
                        <p className="text-lg">
                          a partir de <br />
                          <span className="text-3xl md:text-4xl font-bold">
                            R$ {slide.price}
                          </span>
                          <br />
                          /mês
                        </p>
                      </div>
                    </div>
                    <Button size="lg" variant="secondary" className="mt-4">
                      Contratar {slide.category}
                    </Button>
                  </div>
                </div>
                {slide.image && (
                  <img
                    src={slide.image}
                    alt={slide.category}
                    className="absolute inset-0 w-full h-full object-cover object-center z-0"
                  />
                )}
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 text-white z-30" />
        <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 text-white z-30" />
      </Carousel>
      <div className="bg-secondary py-8">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-center gap-4 px-4 md:px-6">
          <Button size="lg" className="w-full md:w-auto">
            Ver Equipamentos
          </Button>
          <Button size="lg" variant="outline" className="w-full md:w-auto">
            Solicitar Contato
          </Button>
        </div>
      </div>
    </section>
  );
};