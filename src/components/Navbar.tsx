import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Leaf } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="border-b bg-background/95 backdrop-blur-sm fixed top-0 left-0 right-0 z-50">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Leaf className="h-6 w-6 text-plant-red" />
          <Link to="/" className="text-xl font-bold">
            Красная Книга Растений
          </Link>
        </div>
        <div className="flex items-center gap-4">
          <Link to="/" className="text-foreground/80 hover:text-foreground transition-colors">
            Главная
          </Link>
          <Link to="/about" className="text-foreground/80 hover:text-foreground transition-colors">
            О проекте
          </Link>
          <Button variant="outline" className="hidden sm:flex">
            Поиск растений
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
