import { Button } from "@/components/ui/button";

export const CTA = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold">
          Pronto para destravar o potencial da sua equipe?
        </h2>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
          Fale com um de nossos especialistas e descubra o plano ideal para sua empresa.
        </p>
        <Button size="lg" className="mt-8">
          Fale com um especialista
        </Button>
      </div>
    </section>
  );
};