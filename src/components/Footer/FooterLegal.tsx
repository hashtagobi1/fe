import React from "react";

type Props = {
  text: string;
};

const FooterLegal = ({ text }: Props) => {
  return (
    <li className="capitalize font-light ml-8 first-of-type:ml-0 text-xs cursor-pointer">
      {text}
    </li>
  );
};

export default FooterLegal;
