"use client";
import React, { useState } from "react";
import Hamburger from "hamburger-react";

type Props = {};

const MobileMenu = (props: Props) => {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <div className="z-10">
        <Hamburger size={35} toggled={isOpen} toggle={setOpen} />
      </div>
      <div className="">
        <div
          className={`slide-in ${
            isOpen ? "active" : " transform translate-x-0"
          } `}
        >
          {isOpen && (
            <div className="absolute top-0 bg-red-800 duration-500 transition-all z-30 left-0 w-screen h-screen flex items-center justify-center">
              <div className="text-black  text-4xl font-bold text-center">
                <button className="text-white" onClick={() => setOpen(false)}>
                  clear
                </button>
                Your Text Overlay
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default MobileMenu;
