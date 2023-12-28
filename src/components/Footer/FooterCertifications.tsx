import Image from "next/image";
import React from "react";

type Props = {
    link:string
};

const FooterCertifications = ({link}: Props) => {
  return (
    <li className="ml-4 first-of-type:ml-0 mb-8 mt-4" >
      <Image
        src={link}
        width={65}
        height={65}
        alt="Certified B Corporation"
      />
    </li>
  );
};

export default FooterCertifications;
