import React from "react";
import MobileMenu from "./MobileMenu";
import Logo from "./Logo";
import ShoppingBag from "@/SVGs/ShoppingBag";
import NavLinks from "./NavLinks";
import NavSection from "./NavSection";

type Props = {};

const Header = (props: Props) => {
  return (
    <header className=" text items-center justify-between">
      <div className="md:flex hidden items-center py-8 px-16 md:px-10 justify-between">
        <div className="flex items-center justify-between">
          <Logo size={125} />
          <NavSection />
        </div>
        <ShoppingBag />
      </div>

      <div className="md:hidden flex items-center justify-between">
        <MobileMenu />
        <Logo size={125} />
        <ShoppingBag />
      </div>

      {/* <div className={`hidden md:block`}></div>
      <div className={`md:hidden`}>{<MobileMenu />} </div>
      <div>
        <Logo size={100} />
      </div>
      <ShoppingBag /> */}
    </header>
  );
};

export default Header;
