"use client";
import React, { useState } from "react";
import Hamburger from "hamburger-react";
import { AnimatePresence, motion } from "framer-motion";
import XMark from "@/SVGs/XMark";
import NavLinks from "./NavLinks";

type Props = {};

const MobileMenu = (props: Props) => {
  const [isOpen, setOpen] = useState(false);

  const slideVariants = {
    hidden: { x: "-100%" },
    visible: { x: 0, transition: { duration: 0.1, type: "tween" } },
    exit: {
      x: "100%",
      opacity: 0,
      transition: { duration: 0.5, type: "tween" },
    }, // Exit animation
  };

  return (
    <>
      <div className="z-10">
        <Hamburger size={28} toggled={isOpen} toggle={setOpen} />
      </div>
      <div className="">
        <AnimatePresence>
          <div
            className={`slide-in ${
              isOpen ? "active" : " transform translate-x-0"
            } `}
          >
            {isOpen && (
              <motion.div
                initial={"hidden"}
                animate={isOpen ? "visible" : "hidden"}
                exit={"exit"}
                variants={slideVariants}
                className={`  flex-col fixed opacity-100 top-0 right-0 w-full h-full 
            bg-white duration-500 
            transition-all
            flex p-4
            z-50 overflow-hidden ${isOpen ? "block" : "hidden"}`}
              >
                <div className="flex flex-col w-full justify-between">
                  <div
                    className="cursor-pointer"
                    onClick={() => setOpen(false)}
                  >
                    <XMark size={40} />
                  </div>

                  <nav className="mt-12 ">
                    <NavLinks />
                  </nav>
                </div>
              </motion.div>
            )}
          </div>
        </AnimatePresence>
      </div>
    </>
  );
};

export default MobileMenu;
