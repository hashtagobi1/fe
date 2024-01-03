"use client";
import React, { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

type Props = {};

const ModelDescription = (props: Props) => {
  const text =
    "Experience 8KO®. Our best lenses yet. See with greater clarity than ever before through the most advanced lens technology on the planet. Built from 2mm nylon and available in 10 refined lens tints across our Lifestyle™ series, see better with 8KO®. A cutting-edge design that delivers maximum performance. Featuring market-leading 8KO® lenses and ultra-durable frames for the active everyday.";
  const words = text.split(" ");
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref);

  useEffect(() => {
    if (isInView) {
      controls.start((i) => ({
        opacity: 1,
        y: 0,
        transition: { delay: i * 0.1 },
      }));
    }
  }, [controls, isInView]);

  return (
    <div className="w-[50vw] p-8 gap-8 flex flex-col justify-between overflow-hidden">
      <motion.h4
        whileHover={{
          scale: 1.1,
          originX: 0,
          transition: { duration: 0.3, yoyo: Infinity },
        }}
        className="text-7xl w-full p-8 bg-clip-text text-transparent bg-gradient-to-r from-brandPurple  to to-brandBlue"
      >
        SunGod Renegades™
      </motion.h4>
      <motion.span className="text-justify text-xl" ref={ref}>
        {words.map((word, index) => (
          <motion.span
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={controls}
            custom={index}
          >
            {word}{" "}
          </motion.span>
        ))}
      </motion.span>
    </div>
  );
};

export default ModelDescription;
