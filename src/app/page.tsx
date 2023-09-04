import ImageSlider from "@/components/ImagesSlider";
import Layout from "@/components/layout";
import CustomNavbar from "@/components/navbar";
import PhotoCard from "@/components/photoCard";
import Image from "next/image";

import React from "react";

const images = [
  {
    image: "/assets/images/2.jpg",
    title: "Imagen 1",
    description: "Descripcion 1",
  },
  {
    image: "/assets/images/Card01.jpg",
    title: "Imagen 2",
    description: "Descripcion 2",
  },
  {
    image: "/assets/images/Card01.jpg",
    title: "Imagen 3",
    description: "Descripcion 3",
  },
];

const HomePage = () => {
  return (
    <>
      <ImageSlider slides={images} />
      <Layout className="pt-0">
        <div className="flex item-center justify-between w-full">
          <div className="w-1/2">
            <Image
              className="rounded-2xl w-full h-auto"
              src="/assets/images/2.jpg"
              width={500}
              height={500}
              alt="Imagen Principal"
            />
          </div>
          <div className="w-1/2">
            <h1 className="text-4xl font-bold text-justify">
              David Talavera Portfolio
            </h1>
            <p className="text-2xl font-medium italic text-justify">
              Si quieres tener enemigos, supera a tus amigos; si quieres tener
              amigos, deja que tus amigos te superen
            </p>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default HomePage;
