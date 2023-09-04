import CardGallery from "@/components/CardGallery";
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
      <Layout className="pt-0">
        <div className="flex items-center justify-center py-32">
          <div className="text-center">
            <h1 className="text-4xl font-bold py-10">Proyecto de fotografia</h1>
            <p className="text-2xl font-medium italic">
              Si quieres tener enemigos, supera a tus amigos; si quieres tener
              amigos, deja que tus amigos te superen
            </p>
          </div>
        </div>
      </Layout>
      <CardGallery
        key={1}
        id={"Persona"}
        slug={"Persona"}
        image={{
          url: "/assets/images/Card01.jpg",
          fileName: "Card01.jpg",
          width: 1000,
          height: 1000,
        }}
        title={"Nublado atardecer"}
        year={"2023"}
        tags={[
          {
            slug: "Persona",
            title: "Nublado Atardecer",
          },
        ]}
        date={"2023"}
      />
      <CardGallery
        key={1}
        id={"Persona"}
        slug={"Persona"}
        image={{
          url: "/assets/images/Card01.jpg",
          fileName: "Card01.jpg",
          width: 1000,
          height: 1000,
        }}
        title={"Nublado atardecer"}
        year={"2023"}
        tags={[
          {
            slug: "Persona",
            title: "Nublado Atardecer",
          },
        ]}
        date={"2023"}
      />
    </>
  );
};

export default HomePage;
