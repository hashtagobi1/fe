import { SocialIcon } from "react-social-icons";
import React from "react";

type Props = {
  url: string;
};

const FooterSocial = ({ url }: Props) => {
  return (
    <li className="">
      <SocialIcon
        className="mb-4 p-0"
        bgColor="white"
        fgColor="black"
        url={url}
      />
    </li>
  );
};

export default FooterSocial;
