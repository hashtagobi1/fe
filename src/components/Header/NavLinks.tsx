import React from "react";

type Props = {};

const NavLinks = (props: Props) => {
  const renderLink = (link: string) => {
    return (
      <li className="hover:opacity-50 text-2xl md:text-sm duration-300 transition-all">{link}</li>
    );
  };
  return (
    <ol className="flex md:flex-row  flex-col gap-8 font-semibold text-black">
      {renderLink("Shop All")}
      {renderLink("Sunglasses")}
      {renderLink("Prescription")}
      {renderLink("Goggles")}
      {renderLink("Limited Edition")}
      {renderLink("Shop By Sport")}
      {renderLink("Gift Guide")}
    </ol>
  );
};

export default NavLinks;
