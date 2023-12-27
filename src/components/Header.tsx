import React from "react";
import MobileMenu from "./MobileMenu";
import Logo from "./Logo";
import ShoppingBag from "@/SVGs/ShoppingBag";

type Props = {};

const Header = (props: Props) => {
  return (
    <div className="flex p-4 text items-center justify-between">
      <div className={`hidden md:block`}>menu </div>
      <div className={`md:hidden`}>{<MobileMenu />} </div>
      <div>
        <Logo />
      </div>
      <ShoppingBag />
    </div>
  );
};

export default Header;
