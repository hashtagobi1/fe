"use client";
import { AnimatePresence, motion } from "framer-motion";
import React, { useRef, useState } from "react";
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
import XMark from "@/SVGs/XMark";

type Props = {};

const FooterLanguage = (props: Props) => {
  const ref = useRef(null);
  const [open, setOpen] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState(
    getCountryData("GB").name
  );
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
  const slideVariants = {
    hidden: { x: "100%" },
    visible: { x: 0, transition: { duration: 0.1, type: "tween" } },
    exit: {
      x: "100%",
      opacity: 0,
      transition: { duration: 0.5, type: "tween" },
    }, // Exit animation
  };

  const backdropStyle = open
    ? "fixed inset-0 bg-black opacity-50 z-50"
    : "hidden";

  const handleChange = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    console.log({ e });
    setOpen(false);
  };
  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const name = e.target.value;
    // console.log(name);
    e.preventDefault();
    setSelectedCountry(name);
    const code = name ? getCountryCode(name) : false;
    // console.log(code);
    const language =
      name && code !== false
        ? languages[getCountryData(code).languages[0]].name
        : "";
    const currency =
      name && code !== false ? getCountryData(code).currency[0] : "";

    // console.log({ language, currency });

    setSelectedLanguage(language);
    setSelectedCurrency(currency);
    // console.log({ Selsect: e.target.value });
  };
  return (
    <div>
      <button
        onClick={() => {
          setOpen(!open);
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
      {open && (
        <AnimatePresence>
          <div
            className={`${backdropStyle} text-black `}
            // onClick={() => setOpen(false)}
          >
            <motion.div
              initial={"hidden"}
              animate={open ? "visible" : "hidden"}
              exit={"exit"}
              variants={slideVariants}
              className={`  flex-col fixed opacity-100 top-0 right-0 w-4/6 h-full 
            bg-white duration-500 
            transition-all
            flex p-8
            z-50 overflow-hidden ${open ? "block" : "hidden"}`}
              //   onClick={() => setOpen(false)}
            >
              <div className="flex w-full justify-between">
                <h1 className="text-2xl font-bold">Select your location</h1>
                <div className="cursor-pointer" onClick={() => setOpen(false)}>
                  <XMark />
                </div>
              </div>

              <form className="mt-6">
                <div>
                  <select
                    className="bg-gray-100 w-full rounded-full p-4 "
                    onChange={(e) => handleSelectChange(e)}
                    value={selectedCountry}
                  >
                    {getCountryDataList().map((country) => {
                      const cc = getCountryCode(country.name);
                      const emoji = cc ? getEmojiFlag(cc) : "";
                      return (
                        <option className="" key={country.name}>
                          {country.name}
                          {/* {emoji} */}
                          <RightArrow />
                        </option>
                      );
                    })}
                  </select>
                </div>

                <div className="flex p-4 mt-6 font-light">
                  <button
                    className="bg-gradient-to-r py-2 px-4 rounded-full from-brandPurple to-brandBlue text-white"
                    onClick={(e) => handleChange(e)}
                    type="submit"
                  >
                    Submit
                  </button>
                  <button
                    className="underline ml-8 underline-offset-8"
                    onClick={() => setOpen(false)}
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        </AnimatePresence>
      )}
    </div>
  );
};

export default FooterLanguage;
