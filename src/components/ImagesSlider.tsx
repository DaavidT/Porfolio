"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type SlideItem = {
  image: string;
  title: string;
  description: string;
};

type ImageSliderProps = {
  slides: SlideItem[];
};

const ImageSlider: React.FC<ImageSliderProps> = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="relative w-full h-screen overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.img
          key={currentIndex}
          src={slides[currentIndex].image}
          alt={slides[currentIndex].title}
          className="object-cover w-full h-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        />
      </AnimatePresence>

      <div className="absolute top-0 left-0 w-full h-full flex items-center justify-between z-0">
        <button
          onClick={handlePrevSlide}
          className="text-primary hover:text-gray-300 p-2 ml-2 rounded-full  transition duration-300"
        >
          {"<"}
        </button>
        <button
          onClick={handleNextSlide}
          className="text-primary hover:text-gray-300 p-2 mr-2 rounded-full transition duration-300"
        >
          {">"}
        </button>
      </div>

      <div className="absolute top-[45%]  right-[44%]  ">
        <div className="text-center">
          <h1 className="text-3xl font-bold">{slides[currentIndex].title}</h1>
          <p className="text-lg">{slides[currentIndex].description}</p>
        </div>
      </div>
    </div>
  );
};

export default ImageSlider;
