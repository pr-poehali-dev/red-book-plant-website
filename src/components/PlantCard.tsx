import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface PlantCardProps {
  name: string;
  latinName: string;
  status: string;
  description: string;
  image: string;
}

const PlantCard = ({ name, latinName, status, description, image }: PlantCardProps) => {
  return (
    <Card className="overflow-hidden transition-all hover:shadow-md">
      <div className="aspect-[4/3] relative overflow-hidden">
        <img
          src={image || "/placeholder.svg"}
          alt={name}
          className="object-cover w-full h-full transition-transform hover:scale-105 duration-300"
        />
        <Badge 
          className="absolute top-2 right-2" 
          variant="destructive"
        >
          {status}
        </Badge>
      </div>
      <CardHeader className="pb-2">
        <CardTitle>{name}</CardTitle>
        <CardDescription className="italic">{latinName}</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground line-clamp-3">{description}</p>
      </CardContent>
      <CardFooter>
        <Button variant="outline" className="w-full group">
          Подробнее
          <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Button>
      </CardFooter>
    </Card>
  );
};

export default PlantCard;
