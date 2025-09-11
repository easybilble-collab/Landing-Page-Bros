const brandLogos = [
  { name: "Apple", logo: "https://cdn.jsdelivr.net/gh/dyad-sh/dyad-assets@main/images/apple-logo-white.svg" },
  { name: "Dell", logo: "https://cdn.jsdelivr.net/gh/dyad-sh/dyad-assets@main/images/dell-logo-white.svg" },
  { name: "HP", logo: "https://cdn.jsdelivr.net/gh/dyad-sh/dyad-assets@main/images/hp-logo-white.svg" },
  { name: "Samsung", logo: "https://cdn.jsdelivr.net/gh/dyad-sh/dyad-assets@main/images/samsung-logo-white.svg" },
  { name: "Lenovo", logo: "https://cdn.jsdelivr.net/gh/dyad-sh/dyad-assets@main/images/lenovo-logo-white.svg" },
];

export const Brands = () => {
  return (
    <section className="py-12 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-10">
          <h3 className="text-lg font-semibold text-muted-foreground tracking-wider uppercase">
            Trabalhamos com as melhores marcas
          </h3>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 items-center">
          {brandLogos.map((brand) => (
            <div key={brand.name} className="flex justify-center">
              <img
                src={brand.logo}
                alt={brand.name}
                className="h-10 w-auto object-contain opacity-70 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};