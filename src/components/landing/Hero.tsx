import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <section className="pt-32 pb-20 bg-background">
      <div className="container mx-auto px-4 md:px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="text-center lg:text-left">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tighter leading-tight">
            Sua empresa, equipada para o futuro. Sem burocracia.
          </h1>
          <p className="mt-6 max-w-xl mx-auto lg:mx-0 text-lg text-muted-foreground">
            Alugue os melhores notebooks, monitores e equipamentos para sua equipe. Foco no que importa: o crescimento do seu negócio.
          </p>
          <Button size="lg" className="mt-8">
            Fale Conosco
          </Button>
        </div>
        <div className="relative">
          <div className="absolute -inset-4 bg-primary/20 rounded-full blur-3xl opacity-50"></div>
          <img
            src="https://images.pexels.com/photos/1029757/pexels-photo-1029757.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="MacBook Pro, iPhone e outros notebooks premium disponíveis para aluguel"
            className="relative w-full max-w-2xl mx-auto"
          />
        </div>
      </div>
    </section>
  );
};