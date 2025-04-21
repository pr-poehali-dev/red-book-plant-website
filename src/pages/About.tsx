import Navbar from "@/components/Navbar";
import { Separator } from "@/components/ui/separator";
import { Card, CardContent } from "@/components/ui/card";
import { AlertCircle, BookOpen, Info, Leaf } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="container py-24">
        <div className="space-y-6">
          <div className="space-y-2">
            <h1 className="text-4xl font-bold tracking-tight">О проекте</h1>
            <p className="text-lg text-muted-foreground">
              Информация о проекте "Красная Книга Растений" и его целях
            </p>
          </div>
          <Separator />
          
          <Card className="bg-card/50 backdrop-blur-sm">
            <CardContent className="pt-6">
              <div className="grid gap-6 md:grid-cols-2">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <BookOpen className="h-6 w-6 text-plant-red" />
                    <h2 className="text-2xl font-bold">Что такое Красная книга?</h2>
                  </div>
                  <p>
                    Красная книга — аннотированный список редких и находящихся под угрозой исчезновения или исчезнувших 
                    животных, растений и грибов. Красная книга является основным документом, в котором обобщены материалы 
                    о современном состоянии редких и находящихся под угрозой исчезновения видов, на основании которых 
                    проводится разработка научных и практических мер, направленных на их охрану, воспроизводство и 
                    рациональное использование.
                  </p>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Info className="h-6 w-6 text-plant-green" />
                    <h2 className="text-2xl font-bold">Наша миссия</h2>
                  </div>
                  <p>
                    Наш проект стремится повысить осведомленность о редких и исчезающих видах растений России и всего мира. 
                    Мы собираем и систематизируем информацию о редких растениях, создаем подробные описания видов, 
                    их местообитания, причин сокращения численности и мер, необходимых для их сохранения.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <div className="grid gap-6 md:grid-cols-3">
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center gap-3 mb-4">
                  <Leaf className="h-5 w-5 text-plant-green" />
                  <h3 className="text-xl font-bold">Исследования</h3>
                </div>
                <p>
                  Мы сотрудничаем с ботаническими садами и научными институтами для получения точной и актуальной информации 
                  о редких растениях и методах их сохранения.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center gap-3 mb-4">
                  <AlertCircle className="h-5 w-5 text-plant-red" />
                  <h3 className="text-xl font-bold">Категории охраны</h3>
                </div>
                <p>
                  Мы используем международную классификацию статусов охраны МСОП, чтобы точно определять степень 
                  угрозы для каждого вида растений в нашей базе данных.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center gap-3 mb-4">
                  <BookOpen className="h-5 w-5 text-primary" />
                  <h3 className="text-xl font-bold">Образование</h3>
                </div>
                <p>
                  Одной из главных задач нашего проекта является экологическое просвещение и воспитание бережного 
                  отношения к природе среди широкой общественности.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default About;
