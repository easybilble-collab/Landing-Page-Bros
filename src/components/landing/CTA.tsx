import { Button } from "@/components/ui/button";

export const CTA = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold">
          Pronto para Modernizar sua Empresa?
        </h2>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
          Deixe-nos cuidar da tecnologia para que você possa focar no crescimento do seu negócio.
        </p>
        <Button size="lg" className="mt-8">
          Solicite uma Proposta Agora
        </Button>
      </div>
    </section>
  );
};