const brandLogos = [
  { name: "Apple", logo: "https://cdn.jsdelivr.net/gh/dyad-sh/dyad-assets@main/images/apple-logo-white.svg" },
  { name: "Dell", logo: "https://cdn.jsdelivr.net/gh/dyad-sh/dyad-assets@main/images/dell-logo-white.svg" },
  { name: "HP", logo: "https://cdn.jsdelivr.net/gh/dyad-sh/dyad-assets@main/images/hp-logo-white.svg" },
  { name: "Samsung", logo: "https://cdn.jsdelivr.net/gh/dyad-sh/dyad-assets@main/images/samsung-logo-white.svg" },
  { name: "Lenovo", logo: "https://cdn.jsdelivr.net/gh/dyad-sh/dyad-assets@main/images/lenovo-logo-white.svg" },
  { name: "Microsoft", logo: "https://cdn.jsdelivr.net/gh/dyad-sh/dyad-assets@main/images/microsoft-logo-white.svg" },
  { name: "Asus", logo: "https://cdn.jsdelivr.net/gh/dyad-sh/dyad-assets@main/images/asus-logo-white.svg" },
];

export const Brands = () => {
  const duplicatedLogos = [...brandLogos, ...brandLogos];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h3 className="text-lg font-semibold text-muted-foreground tracking-wider uppercase">
            Trabalhamos com as melhores marcas do mercado
          </h3>
        </div>
        <div
          className="relative w-full overflow-hidden"
          style={{
            maskImage: "linear-gradient(to right, transparent, white 20%, white 80%, transparent)",
          }}
        >
          <div className="flex w-max animate-[scroll_40s_linear_infinite]">
            {duplicatedLogos.map((brand, index) => (
              <div key={index} className="flex-shrink-0 w-64 h-20 flex items-center justify-center">
                <img
                  src={brand.logo}
                  alt={brand.name}
                  className="h-10 w-auto object-contain opacity-70 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};