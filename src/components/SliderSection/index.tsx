"use client";
import { Swiper, SwiperSlide } from "swiper/react";

import { client } from "@/utils/sanity/client";
import type { SliderSection } from "../../../../sungod-be/schema";
import Image from "next/image";
import imageBuilder from "@/utils/sanity/imageBuilder";
import {
  AnimatePresence,
  MotionValue,
  motion,
  useAnimation,
  useMotionValue,
  useScroll,
  useTransform,
} from "framer-motion";
import { useRef, useState } from "react";
import LeftArrow from "@/SVGs/LeftArrow";
import RightArrow from "@/SVGs/RightChevron";
import RightChevron from "@/SVGs/RightChevron";
import RightArrow2 from "@/SVGs/RightArrow2";

type Props = {
  sliderSections: SliderSection[];
};

const SliderSections = ({ sliderSections }: Props) => {
  const container = useRef(null);
  // const { scrollYProgress } = useScroll({
  //   target: container,
  //   offset: ["start end", "end start"],
  // });
  const [currentIndex, setCurrentIndex] = useState(0);
  const xValues: MotionValue<number>[] = Array.from(
    { length: sliderSections.length },
    () => useMotionValue(0)
  );

  const handlePrev = (i: number) => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? i - 1 : prevIndex - 1));
    xValues[i].set(xValues[i].get() - 600); // Decrement x by 15 units on click

    console.log(`Current Value is ${currentIndex}`);
    return;
  };
  const handleNext = (i: number) => {
    setCurrentIndex((prevIndex) => (prevIndex === i - 1 ? 0 : prevIndex + 1));
    xValues[i].set(xValues[i].get() + 600); // Increment x by 15 units on click

    console.log(`Current Value is ${currentIndex}`);
    return;
  };
  // const x = useMotionValue(currentIndex);
  const controls = useAnimation();

  console.log({ xValues });
  /**
   * @param motionValue
   * @param mapping range
   * @param mapping range
   */
  // const x1 = useTransform(x, [0, 1000], [500, -2000]);
  // const x2 = useTransform(scrollYProgress, [0, 1], [0, -150]);
  // const height = useTransform(scrollYProgress, [0, 0.9], [50, 0]);
  return (
    <div className="sectionContainer overflow-hidden ">
      {sliderSections.map((section, i) => (
        <section key={section.title}>
          <div className="flex justify-between">
            <h2 className="text-2xl flex md:text-4xl mt-10 md:items-center md:justify-center font-semibold mb-10">
              Shop By {section.title}.
            </h2>
            <span className="flex gap-5 items-center">
              <AnimatePresence>
                {currentIndex === 0 ? (
                  <span className="p-4"></span>
                ) : (
                  <motion.span>
                    <LeftArrow
                      galleryLength={section.sliderItems?.length!}
                      handleClick={() => handlePrev(i)}
                    />
                  </motion.span>
                )}
                {currentIndex === sliderSections[i].sliderItems?.length ?? 0 ? (
                  <span className="p-4"></span>
                ) : (
                  <motion.span className="">
                    <RightArrow2
                      galleryLength={section.sliderItems?.length!}
                      handleClick={() => handleNext(i)}
                    />
                  </motion.span>
                )}
              </AnimatePresence>
            </span>
          </div>

          <motion.div
            style={{
              x: useTransform(xValues[i], [0, 1000], [250, -500]),
            }}
            className="w-[600%] md:w-[175%] flex"
          >
            <AnimatePresence>
              {section.sliderItems?.map((item, i) => {
                return (
                  <motion.div className="p-4" key={`${i} - ${item.title}`}>
                    <motion.div className="object-cover  ">
                      {item.image && (
                        <Image
                          width={"1000"}
                          height={"1000"}
                          className="w-full rounded-lg"
                          src={imageBuilder(item.image)
                            .width(1000)
                            .height(1000)
                            .url()}
                          alt={item.title ?? "slider image"}
                        />
                      )}
                    </motion.div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </motion.div>
        </section>
      ))}
    </div>
  );
};

export default SliderSections;
