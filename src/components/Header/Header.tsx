import React from "react";
import MobileMenu from "./MobileMenu";
import Logo from "./Logo";
import ShoppingBag from "@/SVGs/ShoppingBag";
import NavLinks from "./NavLinks";
import NavSection from "./NavSection";

type Props = {};

const Header = (props: Props) => {
  return (
    <header className="flex p-3 text items-center justify-between">
      <div className={`hidden md:block`}>
        <NavSection />
      </div>
      <div className={`md:hidden`}>{<MobileMenu />} </div>
      <div>
        <Logo />
      </div>
      <ShoppingBag />
    </header>
  );
};

export default Header;
