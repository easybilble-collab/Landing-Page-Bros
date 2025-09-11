import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Search } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

const navLinks = [
  "Produtos e Serviços",
  "Soluções Digitais",
  "Por tipo de Empresa",
  "Ajuda e Benefícios",
  "Melhores Ofertas",
];

export const Header = () => {
  const isMobile = useIsMobile();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm shadow-sm">
      <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-6">
        <a href="#" className="text-2xl font-bold">
          <span className="bg-gradient-to-r from-primary to-pink-500 bg-clip-text text-transparent">
            Bro's Rental
          </span>
        </a>
        {isMobile ? (
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon">
              <Search className="h-5 w-5" />
            </Button>
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right">
                <nav className="flex flex-col gap-6 pt-10">
                  {navLinks.map((link) => (
                    <a
                      key={link}
                      href="#"
                      className="text-lg font-medium text-foreground hover:text-primary"
                    >
                      {link}
                    </a>
                  ))}
                  <Button variant="outline">Login</Button>
                  <Button>Fale com um Consultor</Button>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        ) : (
          <nav className="hidden items-center gap-6 md:flex">
            {navLinks.map((link) => (
              <a
                key={link}
                href="#"
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
              >
                {link}
              </a>
            ))}
            <Button variant="ghost" size="icon">
              <Search className="h-5 w-5" />
            </Button>
            <Button variant="outline">Login</Button>
            <Button>Fale com um Consultor</Button>
          </nav>
        )}
      </div>
    </header>
  );
};