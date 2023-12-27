"use client";
import React, { useState } from "react";
import Hamburger from "hamburger-react";

type Props = {};

const MobileMenu = (props: Props) => {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <Hamburger  toggled={isOpen} toggle={setOpen} />
      <div className="relative">
        <div
          className={`slide-in ${
            isOpen ? "active" : " transform translate-x-0"
          } `}
        >
          {isOpen && (
            <p className="bg-red-600 absolute w-screen h-screen overflow-hidden transition-all ease-in-out duration-300 transform -translate-x-[100%]">
              Hi
            </p>
          )}
        </div>
      </div>
    </>
  );
};

export default MobileMenu;
