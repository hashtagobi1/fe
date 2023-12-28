"use client";
import React, { useState } from "react";
import { useQuery } from "react-query";
// Interfaces and types
import type {
  ICountry,
  ICountryData,
  ILanguage,
  TContinentCode,
  TCountryCode,
  TLanguageCode,
} from "countries-list";

// Main data and utils
import { continents, countries, languages } from "countries-list";
// Utils
import {
  getCountryCode,
  getCountryData,
  getCountryDataList,
  getEmojiFlag,
} from "countries-list";
import RightArrow from "@/SVGs/RightArrow";

type Props = {};

const FooterLanguage = (props: Props) => {
  const [open, setOpen] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedLanguage, setSelectedLanguage] = useState(languages.en.name);
  const [selectedCurrency, setSelectedCurrency] = useState(
    getCountryData("GB").currency[0]
  );

  const opacity = {
    initial: {
      opacity: 0,
      x: "-100%",
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
      x: "-100%",
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
  console.log(getCountryData("GB"));
  console.log(selectedLanguage);

  const renderModal = () => {
    return (
      <div
        className={` fixed top-0 left-0 w-full h-full 
        bg-red-800 duration-500 
        transition-all
        flex items-center justify-center
        z-50 overflow-hidden ${open ? "block" : "hidden"}`}
      >
        <h1 onClick={() => setOpen(false)} className="text-red-600 text-5xl">
          Hi
        </h1>
      </div>
    );
  };

  console.log({ open });
  return (
    <>
      <button
        onClick={() => {
          setOpen(!open), console.log("hi");
        }}
        className="mb-8 rounded-full px-6 py-4 font-semibold text-sm flex border border-black"
      >
        <p className="flex flex-wrap items-center justify-center">
          {selectedLanguage} / {selectedCurrency}{" "}
          <span className="ml-4">
            <RightArrow />
          </span>
        </p>
      </button>
      {open && <div>{renderModal()}</div>}
    </>
  );
};

export default FooterLanguage;

{
  /* <motion.section
  variants={opacity}
  animate={isInView ? "open" : "closed"}
  ref={ref}
  className="p-5 mt-20"
  data-scroll
></motion.section>; */
}
