import React from "react";
import Tag from "../Tag";
import FooterLanguage from "../Footer/FooterLanguage";

type Props = {};

const NavLinks = (props: Props) => {
  const renderNavLink = (link: string) => {
    return (
      <li
        className={`hover:opacity-50 text-2xl ${
          link === "Gift Guide"
            ? "bg-gradient-to-br from-yellow-600 from-15% to-yellow-300 text-transparent bg-clip-text"
            : ""
        } flex items-center md:text-sm duration-300 transition-all`}
      >
        {link}
        {link === "Prescription" ? <Tag styles="ml-4" name="NEW" /> : null}
      </li>
    );
  };
  const renderBottomLink = (link: string) => {
    return (
      <li className="hover:text-brandPurple transition-all first-of-type:mt-32">
        {link}
      </li>
    );
  };
  return (
    <div className="flex flex-col w-full  pt-2 justify-between">
      <ol className="flex md:flex-row flex-col gap-6 font-semibold text-black">
        {renderNavLink("Shop All")}
        {renderNavLink("Sunglasses")}
        {renderNavLink("Prescription")}
        {renderNavLink("Goggles")}
        {renderNavLink("Limited Edition")}
        {renderNavLink("Shop By Sport")}
        {renderNavLink("Gift Guide")}
      </ol>
      <ul className="font-light mt-6 text-2xl md:hidden flex gap-8 flex-col">
        {renderBottomLink("Mission")}
        {renderBottomLink("Explore")}
        {renderBottomLink("Support")}
      </ul>
      <div className="mt-72 md:hidden">
        <FooterLanguage />
      </div>
    </div>
  );
};

export default NavLinks;
