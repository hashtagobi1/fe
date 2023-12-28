"use client";

import React, { useEffect, useRef } from "react";
import FeaturedProduct from "./FeaturedProduct";
import { useInView, motion } from "framer-motion";
type Props = {
  headerText: string;
  direction: "left" | "right";
};

const FeaturedSection = ({ headerText, direction }: Props) => {
  const opacity = {
    initial: {
      opacity: 0,
      x: direction === "left" ? "-100%" : "100%",
    },
    open: (i: number) => ({
      opacity: 1,
      x: "0%",
      transition: {
        type: "spring",
        damping: 15, // Adjust the damping for elasticity
        stiffness: 50, // Adjust the stiffness for elasticity
        duration: 1.5,
        delay: 0,
        staggerChildren: 0.5,
      },
    }),
    closed: (i: number) => ({
      opacity: 0,
      x: direction === "left" ? "-100%" : "100%",
      transition: {
        type: "spring",
        damping: 15, // Adjust the damping for elasticity
        stiffness: 100, // Adjust the stiffness for elasticity
        duration: 1.5,
        delay: 0,
        staggerChildren: 0.5,
      },
    }),
  };

  const ref = useRef(null);
  const isInView = useInView(ref);
  useEffect(() => {
    console.log("Element is in view: ", isInView);
  }, [isInView]);
  return (
    <div className="overflow-hidden ">
      <motion.section
        variants={opacity}
        animate={isInView ? "open" : "closed"}
        ref={ref}
        className="p-5 mt-20 flex items-center justify-center flex-col "
        data-scroll
      >
        <h2 className="text-2xl md:text-4xl mt-10  font-semibold mb-10">{headerText}</h2>
        <div className="flex flex-col md:flex-row gap-6">
          <div className="mb-20">
            <FeaturedProduct
              image={
                "https://sg360.sungod.co/insecure/crop:1996:1996/resize:auto:800:800/extend:1:ce/aHR0cHM6Ly9zZzM2MC1zdGFjay5zdW5nb2QuY28vP3BhdGhzPTIzMDQwNiUyRlJlbmVnYWRlcyUyRnJnZl9NYmxhY2tfMDAxLnBuZyUyQzIzMDQwNiUyRlJlbmVnYWRlcyUyRnJnaV9Cc2lsdmVyXzAwMS5wbmclMkMyMzA0MDYlMkZSZW5lZ2FkZXMlMkZyZ2xlX3Ntb2tlXzAwMS5wbmclMkMyMjA1MjAlMkZSZW5lZ2FkZXMlMkZyZ2xnJTJGcmdsZ19QXzAwMS5wbmc"
              }
            />
          </div>
          <div className="mb-20">
            <FeaturedProduct image="https://sg360.sungod.co/insecure/crop:1996:1996/resize:auto:800:800/extend:1:ce/aHR0cHM6Ly9zZzM2MC1zdGFjay5zdW5nb2QuY28vP3BhdGhzPTIzMDUwNCUyRklORU9TJTJGVnVsY2Fuc19URl9JTkVPUyUyMEdyZW5hZGllcnNfMDAxLnBuZw" />
          </div>
          <div className="mb-20">
            <FeaturedProduct image="https://sg360.sungod.co/insecure/crop:1996:1996/resize:auto:1600:1600/extend:1:ce/aHR0cHM6Ly9zZzM2MC1zdGFjay5zdW5nb2QuY28vP3BhdGhzPTIzMDQxMiUyRlplcGh5cnMlMkZ6Zl9ibGFja18wMDEucG5nJTJDMjMwNDEyJTJGWmVwaHlycyUyRnppX2dvbGRfMDAxLnBuZyUyQzIzMDQxMiUyRlplcGh5cnMlMkZ6bGVfZ29sZF8wMDEucG5nJTJDMjIwNjIwJTJGWmVwaHlycyUyRnpsZyUyRnpsZ19QXzAwMS5wbmc" />
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default FeaturedSection;
