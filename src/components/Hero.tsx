"use client";
import React, { useState, useEffect } from "react";
import Image1 from "../../public/images/image1.avif";
import Image2 from "../../public/images/image2.avif";
import Image3 from "../../public/images/image3.avif";
import Image from "next/image";
import { motion } from "framer-motion";

const Hero = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [currentText, setCurrentText] = useState({
    mainText: "Meet Ullrs.",
    secondaryText: "New to Snow Series.",
    buttonText: "Shop Now",
  });
  const images = [
    Image1,
    Image2,
    Image3,
    // Add more image URLs as needed
  ];
  const texts = [
    {
      mainText: "Sunglasses for Everyday.",
      secondaryText: "Shop Lifestyle.",
      buttonText: "Shop Sunglasses",
    },
    {
      mainText: "Cycling Lenses for Shorter Days.",
      secondaryText: "Shop Pace.",
      buttonText: "Shop Cycling Sunglasses",
    },
    // Add more image URLs as needed
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
      setCurrentText((prevTexts) => {
        return texts[(texts.indexOf(prevTexts) + 1) % texts.length];
      });
    }, 5000); // Change image every 5 seconds (5000 milliseconds)

    return () => clearInterval(interval);
  }, [images.length, texts.length]);

  const initial = { opacity: 0 };
  const animate = { opacity: 1 };
  const exit = { opacity: 0 };
  const transition = {
    duration: 0.5,
    ease: "easeInOut",
  };

  return (
    <motion.div
      initial={initial}
      animate={animate}
      exit={exit}
      transition={transition}
      className="relative h-[75vh]"
    >
      <Image
        src={images[currentImage]}
        alt={`Image ${currentImage + 1}`}
        className="object-cover w-screen h-full filter brightness-50"
      />
      <motion.div className="absolute top-0 left-0 w-full h-full  items-center flex m-auto px-5 ">
        <div className="">
          <div className="text-white text-4xl font-bold mt-32">
            <h1>{currentText.mainText}</h1>
            <h1 className="opacity-60">{currentText.secondaryText}</h1>
          </div>
          <button className="rounded-full mt-16 p-5 text-md duration-300 transition-colors text-black hover:text-white bg-white bg-gradient-to-r hover:from-brandBlue hover:to-brandPurple ">
            {currentText.buttonText}
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Hero;
