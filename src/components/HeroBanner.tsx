import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

const HeroBanner = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-plant-lightGreen to-accent py-16 sm:py-24">
      <div className="absolute inset-0 bg-[url('/placeholder.svg')] opacity-10 bg-center bg-cover"></div>
      <div className="container relative">
        <div className="max-w-2xl animate-fade-in">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-plant-darkGreen mb-4">
            Сохраним природное наследие вместе
          </h1>
          <p className="text-lg text-foreground/80 mb-8">
            Изучайте редкие и находящиеся под угрозой исчезновения растения, занесенные в Красную книгу России и других стран мира.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button size="lg" className="bg-plant-red hover:bg-plant-red/90">
              Каталог растений
              <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline">
              Узнать больше
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
