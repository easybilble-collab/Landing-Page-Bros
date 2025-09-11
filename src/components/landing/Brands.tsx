const brandNames = [
  "Apple",
  "Dell",
  "HP",
  "Samsung",
  "Lenovo",
  "Microsoft",
  "Asus",
];

export const Brands = () => {
  const duplicatedNames = [...brandNames, ...brandNames];

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
            {duplicatedNames.map((name, index) => (
              <div key={index} className="flex-shrink-0 w-64 h-20 flex items-center justify-center">
                <span className="text-4xl font-bold text-muted-foreground/60 transition-colors duration-300 hover:text-foreground/90">
                  {name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};