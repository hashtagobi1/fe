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
    visible: { x: 0, transition: { duration: 0.6, type: "tween" } },
    exit: {
      x: "-100%",
      opacity: 1,
      transition: { duration: 0.3, type: "tween" },
    },
  };

  return (
    <div className="py-4 px-2">
      <Hamburger size={28} toggled={isOpen} toggle={setOpen} />
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={"hidden"}
            animate={isOpen ? "visible" : "hidden"}
            exit={"exit"}
            variants={slideVariants}
            className={`  flex-col fixed  top-0 right-0 w-full h-full 
            bg-white flex p-4
            z-50 overflow-hidden ${isOpen ? "block" : "hidden"}`}
          >
            <div className="flex flex-col w-full justify-between">
              <div className="cursor-pointer" onClick={() => setOpen(false)}>
                <XMark size={40} />
              </div>

              <nav className="mt-12 ">
                <NavLinks />
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MobileMenu;
