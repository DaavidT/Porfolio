import React from "react";
import Image from "next/image";

import { AspectRatio } from "@/components/ui/aspect-ratio";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "./ui/button";
import { Check } from "lucide-react";

interface PhotoCardProps {
  title: string;
  description?: string;
  footer?: string;
  imgName?: string;
}

const PhotoCard = (props: PhotoCardProps) => {
  const { title, description, footer, imgName } = props;

  const url = `/assets/images/${imgName || "Card01"}.jpg`;

  return (
    <Card className="w-[450px]">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="w-[450px]">
          <AspectRatio ratio={16 / 9}>
            <Image
              src={url}
              alt="Image"
              width={400}
              height={225} // Añade la altura para mantener la proporción 16/9
              className="rounded-md object-cover"
            />
          </AspectRatio>
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full">
          <Check className="mr-2 h-4 w-4" />
          Ver más
        </Button>
      </CardFooter>
    </Card>
  );
};

export default PhotoCard;
