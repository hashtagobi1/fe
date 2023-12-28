"use client";
import React, { useState, useEffect } from "react";
import Image1 from "../../public/images/image1.avif";
import Image2 from "../../public/images/image2.avif";
import Image3 from "../../public/images/image3.avif";
import Image from "next/image";

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

  return (
    <div className="relative h-[80vh]">
      <Image
        src={images[currentImage]}
        // src={`./images/image${currentImage}.jpg`}
        alt={`Image ${currentImage + 1}`}
        className="object-cover w-full h-full filter brightness-50"
      />
      <div className="absolute top-0 left-0 w-full h-full  items-center flex m-auto px-5 ">
        <div className="">
          <div className="text-white text-4xl font-bold mt-32">
            <h1>{currentText.mainText}</h1>
            <h1 className="opacity-60">{currentText.secondaryText}</h1>
          </div>
          <button className="rounded-full mt-16 p-5 text-md duration-300 transition-colors text-black hover:text-white bg-white bg-gradient-to-r hover:from-brandBlue hover:to-brandPurple ">
            {currentText.buttonText}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
