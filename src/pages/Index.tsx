import Navbar from "@/components/Navbar";
import HeroBanner from "@/components/HeroBanner";
import PlantCard from "@/components/PlantCard";
import { Button } from "@/components/ui/button";

const featuredPlants = [
  {
    name: "Венерин башмачок",
    latinName: "Cypripedium calceolus",
    status: "Под угрозой",
    description: "Редкая орхидея, находящаяся под угрозой исчезновения из-за разрушения мест обитания и сбора растений для коллекций.",
    image: "/placeholder.svg"
  },
  {
    name: "Лотос орехоносный",
    latinName: "Nelumbo nucifera",
    status: "Уязвимый",
    description: "Водное растение с крупными розовыми цветками и круглыми листьями, символ чистоты и духовности в азиатских культурах.",
    image: "/placeholder.svg"
  },
  {
    name: "Женьшень обыкновенный",
    latinName: "Panax ginseng",
    status: "В опасности",
    description: "Многолетнее травянистое растение, ценное благодаря лечебным свойствам корня. Из-за чрезмерного сбора находится под угрозой исчезновения.",
    image: "/placeholder.svg"
  }
];

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 pt-16">
        <HeroBanner />
        
        <section className="container py-16">
          <div className="mb-10">
            <h2 className="text-3xl font-bold mb-2">Что такое Красная книга?</h2>
            <p className="text-muted-foreground max-w-3xl">
              Красная книга — аннотированный список редких и находящихся под угрозой исчезновения животных, растений и грибов. 
              Красная книга является основным документом, в котором обобщены материалы о современном состоянии редких и 
              находящихся под угрозой исчезновения видов, на основании которых проводится разработка научных и практических мер, 
              направленных на их охрану, воспроизводство и рациональное использование.
            </p>
          </div>
          
          <h2 className="text-3xl font-bold mb-6">Редкие растения</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredPlants.map((plant, index) => (
              <PlantCard key={index} {...plant} />
            ))}
          </div>
          <div className="mt-10 text-center">
            <Button size="lg">
              Смотреть все растения
            </Button>
          </div>
        </section>
        
        <section className="bg-muted py-16">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-4">Помогите сохранить биоразнообразие</h2>
                <p className="text-muted-foreground mb-6">
                  Каждый из нас может внести свой вклад в сохранение редких видов растений и помочь восстановить природные экосистемы.
                </p>
                <Button className="bg-plant-green hover:bg-plant-green/90">
                  Присоединиться к проекту
                </Button>
              </div>
              <div className="bg-card rounded-lg p-6 shadow-sm">
                <h3 className="font-semibold text-xl mb-4">Как вы можете помочь:</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="mr-2 text-plant-red">•</span>
                    <span>Сообщать о находках редких растений</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-plant-red">•</span>
                    <span>Участвовать в экологических акциях</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-plant-red">•</span>
                    <span>Распространять информацию о важности сохранения биоразнообразия</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-plant-red">•</span>
                    <span>Делать пожертвования на природоохранные программы</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <footer className="bg-foreground text-background py-8">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p>© 2023 Красная Книга Растений. Все права защищены.</p>
            <div className="flex gap-4 mt-4 md:mt-0">
              <a href="#" className="hover:text-plant-lightGreen transition-colors">Политика конфиденциальности</a>
              <a href="#" className="hover:text-plant-lightGreen transition-colors">Контакты</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
