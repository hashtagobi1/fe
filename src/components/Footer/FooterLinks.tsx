import React from "react";

type Props = {
  links: string[];
  linkTitle: string;
};

const FooterLinks = ({ links, linkTitle }: Props) => {
  return (
    <div className="mt-10 md:mt-0 flex flex-col gap-4  mb-6">
      <div className="">
        <div className="">
          <p className=" font-light  text-brandPurple uppercase">{linkTitle}</p>
          <ul className="mt-4">
            {links.map((link) => {
              return (
                <li
                  className="text-md cursor-pointer p-1 font-light mb-4 hover:opacity-30 transition-opacity duration-300"
                  key={link}
                >
                  {link}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default FooterLinks;
