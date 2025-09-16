import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Phone } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import { Link } from "react-router-dom";

const navLinks = [
  { name: "Soluções", path: "/#solucoes" },
  { name: "Empresas", path: "/#empresas" },
  { name: "Benefícios", path: "/#beneficios" },
  { name: "Ofertas", path: "/ofertas" },
];

const NavLink = ({ path, children }: { path: string; children: React.ReactNode }) => {
  const className = "text-sm font-medium text-muted-foreground transition-colors hover:text-primary";
  if (path.startsWith('/')) {
    return <Link to={path} className={className}>{children}</Link>;
  }
  return <a href={path} className={className}>{children}</a>;
};

const MobileNavLink = ({ path, children }: { path: string; children: React.ReactNode }) => {
  const className = "text-lg font-medium text-foreground hover:text-primary";
  if (path.startsWith('/')) {
    return <Link to={path} className={className}>{children}</Link>;
  }
  return <a href={path} className={className}>{children}</a>;
};

export const Header = () => {
  const isMobile = useIsMobile();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b">
      <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-6">
        <Link to="/" className="text-2xl font-bold">
          <span className="bg-gradient-to-r from-primary to-purple-400 bg-clip-text text-transparent">
            Bro's Rental
          </span>
        </Link>
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
                  <MobileNavLink key={link.name} path={link.path}>
                    {link.name}
                  </MobileNavLink>
                ))}
                <Button className="mt-4"><Phone className="mr-2 h-4 w-4" /> Fale com um Consultor</Button>
              </nav>
            </SheetContent>
          </Sheet>
        ) : (
          <div className="flex items-center gap-8">
            <nav className="hidden items-center gap-6 md:flex">
              {navLinks.map((link) => (
                <NavLink key={link.name} path={link.path}>
                  {link.name}
                </NavLink>
              ))}
            </nav>
            <Button>
              <Phone className="mr-2 h-4 w-4" /> Fale com um Consultor
            </Button>
          </div>
        )}
      </div>
    </header>
  );
};