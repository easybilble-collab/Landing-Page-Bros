import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

const navLinks = [
  "Equipamentos",
  "Soluções",
  "Preços",
  "FAQ",
];

export const Header = () => {
  const isMobile = useIsMobile();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm">
      <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-6">
        <a href="#" className="text-2xl font-bold text-foreground">
          Bro's Rental
        </a>
        {isMobile ? (
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
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
                <Button>Comece Agora</Button>
              </nav>
            </SheetContent>
          </Sheet>
        ) : (
          <nav className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <a
                key={link}
                href="#"
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
              >
                {link}
              </a>
            ))}
            <Button variant="outline">Login</Button>
            <Button>Comece Agora</Button>
          </nav>
        )}
      </div>
    </header>
  );
};