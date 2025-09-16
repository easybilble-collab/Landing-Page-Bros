import { useState, useMemo } from "react";
import { Header } from "@/components/landing/Header";
import { Footer } from "@/components/landing/Footer";
import { ProductCard } from "@/components/ProductCard";
import { OffersFilterBar } from "@/components/offers/OffersFilterBar";
import { Badge } from "@/components/ui/badge";
import { SearchX } from "lucide-react";

const offers = [
  {
    name: "MacBook Air M2",
    imageUrl: "https://images.pexels.com/photos/18993455/pexels-photo-18993455/free-photo-of-macbook-air-m2.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    description: "Performance e portabilidade incomparáveis para o profissional moderno. Ideal para tarefas do dia a dia e trabalho remoto.",
    price: 299,
    tags: ["Apple", "Portabilidade", "Design"],
  },
  {
    name: "MacBook Pro 14\"",
    imageUrl: "https://images.pexels.com/photos/4158/apple-iphone-smartphone-desk.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    description: "Potência máxima para criativos e desenvolvedores. Edite vídeos, compile códigos e renderize projetos com velocidade.",
    price: 499,
    tags: ["Apple", "Performance", "Criativos"],
  },
  {
    name: "Dell Latitude 7440",
    imageUrl: "https://images.pexels.com/photos/205316/pexels-photo-205316.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    description: "O padrão corporativo em segurança e confiabilidade. Construído para durar e proteger seus dados mais importantes.",
    price: 249,
    tags: ["Dell", "Corporativo", "Segurança"],
  },
  {
    name: "Dell Inspiron 15",
    imageUrl: "https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    description: "Versatilidade para o trabalho e entretenimento. Uma solução completa com excelente custo-benefício para equipes dinâmicas.",
    price: 189,
    tags: ["Dell", "Versátil", "Custo-Benefício"],
  },
  {
    name: "Lenovo ThinkBook 14",
    imageUrl: "https://images.pexels.com/photos/2148216/pexels-photo-2148216.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    description: "Design elegante com a robustez da linha Think. Colabore com estilo e eficiência em qualquer lugar.",
    price: 219,
    tags: ["Lenovo", "Business", "Design"],
  },
  {
    name: "HP EliteBook 840",
    imageUrl: "https://images.pexels.com/photos/2528118/pexels-photo-2528118.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    description: "Mobilidade premium com recursos de ponta. Leve, potente e pronto para videoconferências com qualidade superior.",
    price: 239,
    tags: ["HP", "Premium", "Mobilidade"],
  },
];

const Offers = () => {
  const [selectedBrand, setSelectedBrand] = useState("Todos");
  const [sortOrder, setSortOrder] = useState("price-asc");

  const filteredAndSortedOffers = useMemo(() => {
    const filtered = selectedBrand === "Todos"
      ? offers
      : offers.filter(offer => offer.tags.includes(selectedBrand));

    return [...filtered].sort((a, b) => {
      if (sortOrder === "price-desc") {
        return b.price - a.price;
      }
      return a.price - b.price;
    });
  }, [selectedBrand, sortOrder]);

  return (
    <div className="bg-background text-foreground">
      <Header />
      <main className="pt-32 pb-20">
        <section className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-primary text-primary-foreground">Catálogo Otimizado</Badge>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tighter">
              Soluções de Alta Performance
            </h1>
            <p className="text-lg text-muted-foreground mt-4 max-w-3xl mx-auto">
              Analise nosso portfólio de equipamentos. Utilize os filtros para encontrar a solução exata que sua operação demanda e solicite um orçamento otimizado.
            </p>
          </div>

          <OffersFilterBar
            selectedBrand={selectedBrand}
            onBrandChange={setSelectedBrand}
            sortOrder={sortOrder}
            onSortOrderChange={setSortOrder}
          />

          {filteredAndSortedOffers.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredAndSortedOffers.map((offer) => (
                <ProductCard key={offer.name} {...offer} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16 bg-secondary rounded-lg border">
              <SearchX className="mx-auto h-12 w-12 text-muted-foreground" />
              <h3 className="mt-4 text-xl font-semibold">Nenhum equipamento encontrado</h3>
              <p className="mt-2 text-muted-foreground">Tente ajustar seus filtros para encontrar o que procura.</p>
            </div>
          )}
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Offers;