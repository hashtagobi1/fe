import React from "react";
import MobileMenu from "./MobileMenu";
import Logo from "./Logo";
import ShoppingBag from "@/SVGs/ShoppingBag";

type Props = {};

const Header = (props: Props) => {
  return (
    <div className="flex p-3 text items-center justify-between">
      <nav className={`hidden md:block`}>menu </nav>
      <div className={`md:hidden`}>{<MobileMenu />} </div>
      <div>
        <Logo />
      </div>
      <ShoppingBag />
    </div>
  );
};

export default Header;
