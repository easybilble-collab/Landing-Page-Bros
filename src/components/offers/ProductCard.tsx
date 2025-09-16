import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";

interface ProductCardProps {
  name: string;
  imageUrl: string;
  description: string;
  price: number;
  tags: string[];
}

export const ProductCard = ({ name, imageUrl, description, price, tags }: ProductCardProps) => {
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