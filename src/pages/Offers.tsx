import { Header } from "@/components/landing/Header";
import { Footer } from "@/components/landing/Footer";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";

// --- Componente ProductCard definido aqui dentro ---
interface ProductCardProps {
  name: string;
  imageUrl: string;
  description: string;
  price: number;
  tags: string[];
}

const ProductCard = ({ name, imageUrl, description, price, tags }: ProductCardProps) => {
  return (
    <Card className="flex flex-col overflow-hidden transition-all hover:shadow-lg hover:-translate-y-1">
      <CardHeader className="p-0">
        <img src={imageUrl} alt={name} className="w-full h-48 object-cover" />
      </CardHeader>
      <CardContent className="p-6 flex-grow">
        <div className="flex gap-2 mb-2">
          {tags.map(tag => <Badge key={tag} variant="secondary">{tag}</Badge>)}
        </div>
        <CardTitle className="text-xl mb-2">{name}</CardTitle>
        <p className="text-sm text-muted-foreground">{description}</p>
      </CardContent>
      <CardFooter className="p-6 pt-0 flex flex-col items-start">
        <div className="mb-4">
          <p className="text-sm text-muted-foreground">A partir de</p>
          <p className="text-2xl font-bold">
            R$ {price}
            <span className="text-base font-normal text-muted-foreground">/mês</span>
          </p>
        </div>
        <Button className="w-full bg-cta hover:bg-cta/90 text-cta-foreground">
          Solicitar Orçamento <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </CardFooter>
    </Card>
  );
};
// --- Fim da definição do componente ---

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
  return (
    <div className="bg-background text-foreground">
      <Header />
      <main className="pt-32 pb-20">
        <section className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tighter">
              Ofertas Especiais
            </h1>
            <p className="text-lg text-muted-foreground mt-4 max-w-3xl mx-auto">
              Selecione o equipamento ideal para sua equipe e solicite um orçamento personalizado. Tecnologia de ponta com a flexibilidade que sua empresa precisa.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {offers.map((offer) => (
              <ProductCard key={offer.name} {...offer} />
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Offers;