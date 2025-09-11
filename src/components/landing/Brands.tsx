export const Brands = () => {
  return (
    <section className="py-12 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-10">
          <h3 className="text-lg font-semibold text-muted-foreground tracking-wider uppercase">
            Trabalhamos com as melhores marcas
          </h3>
        </div>
        <div className="flex justify-center">
          <img
            src="/brands-banner.png"
            alt="Equipamentos das melhores marcas como Apple, Dell, HP, Samsung e Lenovo"
            className="w-full max-w-5xl mx-auto"
          />
        </div>
      </div>
    </section>
  );
};