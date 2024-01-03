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
import RightArrow from "@/SVGs/RightChevron";
import Select from "react-select";
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
    hidden: { x: "100%", opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.6, type: "tween" },
    },
    exit: {
      x: "100%",
      opacity: 1,
      transition: { duration: 0.3, type: "tween" },
    },
  };

  const backdropStyle = open ? "fixed bg-gray-700  inset-0 z-50" : "hidden";

  const handleChange = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    setOpen(false);
  };

  const countryOptions = getCountryDataList().map((country) => {
    const cc = getCountryCode(country.name);
    const emoji = cc ? getEmojiFlag(cc) : "";
    return { label: country.name, value: country.name };
  });
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
      <AnimatePresence>
        {open && (
          <div className={`${backdropStyle} text-black `}>
            <motion.div
              initial={"hidden"}
              animate={open ? "visible" : "hidden"}
              exit={"exit"}
              variants={slideVariants}
              className={` opacity-100 flex-col fixed top-0 right-0 w-4/6 h-full 
            bg-white
            flex p-8
            z-50 overflow-hidden ${open ? "block" : "hidden"}`}
              //   onClick={() => setOpen(false)}
            >
              <div className="flex w-full justify-between">
                <h1 className="text-2xl font-bold">Select your location</h1>
                <div className="cursor-pointer" onClick={() => setOpen(false)}>
                  <XMark size={34} />
                </div>
              </div>

              <div className="mt-6 font-light">
                <Select
                  styles={{
                    control: (baseStyles, state) => ({
                      ...baseStyles,
                      borderRadius: "9999px",
                      width: "100%",
                      padding: "1rem",
                      fontWeight: 200,
                      backgroundColor: "#F7F7F7",
                    }),
                    option: (baseStyles, state) => ({
                      ...baseStyles,
                      border: "1px solid #F7F7F7",
                    }),
                    // input: (baseStyles, state) => ({
                    //   ...baseStyles,
                    //   backgroundColor: "red",
                    //   color: "red",
                    //   padding: "8rem",
                    // }),
                  }}
                  value={{ label: selectedCountry, value: selectedCountry }}
                  options={countryOptions}
                  onChange={(option) => {
                    setSelectedCountry(option ? option.value : "");
                    const code = option ? getCountryCode(option.value) : "";
                    const language = code
                      ? languages[getCountryData(code).languages[0]].name
                      : "";
                    const currency = code
                      ? getCountryData(code).currency[0]
                      : "";
                    setSelectedLanguage(language);
                    setSelectedCurrency(currency);
                  }}
                />

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
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default FooterLanguage;
