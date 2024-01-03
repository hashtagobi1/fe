"use client";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import LeftArrow from "@/SVGs/LeftArrow";
import RightArrow2 from "@/SVGs/RightArrow2";
import imageBuilder from "@/utils/sanity/imageBuilder";
import { motion } from "framer-motion";
import Image from "next/image";
import { Navigation } from "swiper/modules";
import type { SliderSection } from "../../../../sungod-be/schema";
import { useState } from "react";

type Props = {
  sliderSections: SliderSection[];
};

const SliderSections = ({ sliderSections }: Props) => {
  const [mouseIn, setMouseIn] = useState(false);

  return (
    <div className="sectionContainer">
      {sliderSections.map((section, i) => (
        <>
          <div className="flex items-center justify-between p-6 w-full">
            <h2 className="text-2xl  md:text-4xl mt-10 font-semibold mb-10">
              Shop By: {section.title}.
            </h2>
            <span className="flex gap-8">
              <motion.span className={`swiper-button-prev-${i}`}>
                <LeftArrow size={45} />
              </motion.span>
              <motion.span className={`swiper-button-next-${i}`}>
                <RightArrow2 size={45} />
              </motion.span>
            </span>
          </div>
          <Swiper
            key={`${i}+${section._id}`}
            slidesPerView={3}
            centeredSlides={true}
            spaceBetween={30}
            className="p-4 w-full"
            modules={[Navigation]}
            onMouseEnter={() => setMouseIn(true)}
            onMouseLeave={() => setMouseIn(false)}
            navigation={{
              prevEl: `.swiper-button-prev-${i}`,
              nextEl: `.swiper-button-next-${i}`,
            }}
          >
            {section.sliderItems?.map((item, i) => (
              <SwiperSlide key={i} className="swiper-slide">
                <div className="">
                  {item.image && (
                    <div
                      key={`${i}-${item.title}`}
                      className=" hover:cursor-pointer overflow-hidden relative "
                    >
                      <Image
                        width={"600"}
                        height={"600"}
                        className="rounded-lg 
                        hover:scale-110 scale-100 hover:blur-[0.4px]
                        bg-gradient-to-br from-purple-900 to-blue-500
                        duration-300 ease-in-out transform  hover:rounded-lg
                        filter hover:brightness-50 brightness-75 transition-all
                        select-none object-cover w-full"
                        src={imageBuilder(item.image)
                          .height(600)
                          .height(600)
                          .url()}
                        alt={item.title ?? "slider image"}
                      />
                      <h3 className="absolute text-md bottom-0 left-0 p-8 text-white font-semibold  transform md:text-2xl">
                        {item.title}
                      </h3>
                    </div>
                  )}
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </>
      ))}
    </div>
  );
};

export default SliderSections;
