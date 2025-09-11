import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 text-center bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tighter leading-tight">
          Acelere o Crescimento <br /> da Sua Empresa
        </h1>
        <p className="mt-6 max-w-2xl mx-auto text-lg text-muted-foreground">
          Equipamentos de ponta para sua equipe, sem o alto custo de aquisição. Tenha acesso à melhor tecnologia e pague apenas pelo uso.
        </p>
        <Button size="lg" className="mt-8">
          Solicite uma Proposta
        </Button>

        <div className="relative mt-16">
          <div className="absolute -inset-2 bg-primary/30 rounded-full blur-3xl"></div>
          <img
            src="https://cdn.jsdelivr.net/gh/dyad-sh/dyad-assets@main/images/premium-devices-mockup-dark.png"
            alt="MacBook Pro, iPhone e outros notebooks premium disponíveis para aluguel"
            className="relative w-full max-w-4xl mx-auto"
          />
        </div>
      </div>
    </section>
  );
};