import { MadeWithDyad } from "@/components/made-with-dyad";

export const Footer = () => {
  return (
    <footer className="py-8 border-t">
      <div className="container mx-auto px-4 md:px-6 flex flex-col md:flex-row justify-between items-center">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Bro's Rental. Todos os direitos reservados.
        </p>
        <div className="mt-4 md:mt-0">
          <MadeWithDyad />
        </div>
      </div>
    </footer>
  );
};