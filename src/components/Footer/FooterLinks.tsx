import React from "react";

type Props = {
  links: string[];
  linkTitle: string;
};

const FooterLinks = ({ links, linkTitle }: Props) => {
  return (
    <>
      <div className="mt-10  mb-6">
        <div className="flex gap-4">
          <div className="flex-1">
            <p className=" font-light  text-brandPurple uppercase">
              {linkTitle}
            </p>
            <ul className="mt-4">
              {links.map((link) => {
                return (
                  <li
                    className="text-md cursor-pointer p-1 font-light mb-4 hover:opacity-30 transition-opacity duration-300"
                    key={link}
                  >
                    <span className="block w-full h-full absolute top-0 left-0 opacity-0 hover:opacity-30 transition-opacity duration-300 bg-white z-10"></span>
                    {link}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default FooterLinks;
