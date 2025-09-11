const clientLogos = [
  { name: "TechCorp", logo: "/placeholder.svg" },
  { name: "Innovate Inc.", logo: "/placeholder.svg" },
  { name: "Solutions Co.", logo: "/placeholder.svg" },
  { name: "NextGen Ltd.", logo: "/placeholder.svg" },
  { name: "Quantum Leap", logo: "/placeholder.svg" },
  { name: "Apex Digital", logo: "/placeholder.svg" },
];

export const Clients = () => {
  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">
            Empresas que Confiam na Gente
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Junte-se a startups e grandes corporações que aceleram seus negócios com a Bro's Rental.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
          {clientLogos.map((client) => (
            <div key={client.name} className="flex justify-center">
              <img
                src={client.logo}
                alt={client.name}
                className="h-10 w-auto object-contain opacity-60 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};