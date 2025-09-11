import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <section className="pt-32 pb-20 bg-background">
      <div className="container mx-auto px-4 md:px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="text-center lg:text-left">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tighter leading-tight">
            Acelere o Crescimento da Sua Empresa
          </h1>
          <p className="mt-6 max-w-xl mx-auto lg:mx-0 text-lg text-muted-foreground">
            Equipamentos de ponta para sua equipe, sem o alto custo de aquisição. Tenha acesso à melhor tecnologia e pague apenas pelo uso.
          </p>
          <Button size="lg" className="mt-8">
            Solicite uma Proposta
          </Button>
        </div>
        <div className="relative">
          <div className="absolute -inset-4 bg-primary/20 rounded-full blur-3xl opacity-50"></div>
          <img
            src="https://cdn.jsdelivr.net/gh/dyad-sh/dyad-assets@main/images/premium-devices-mockup-dark.png"
            alt="MacBook Pro, iPhone e outros notebooks premium disponíveis para aluguel"
            className="relative w-full max-w-2xl mx-auto"
          />
        </div>
      </div>
    </section>
  );
};