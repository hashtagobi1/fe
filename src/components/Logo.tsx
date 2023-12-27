import SunGodLogo from "@/SVGs/SunGodLogo";
import Link from "next/link";
import React from "react";

type Props = {};

const Logo = (props: Props) => {
  return (
    <div>
      <Link href={"/"} passHref>
        <span className="sr-only">SunGod</span>
        <SunGodLogo />
      </Link>
    </div>
  );
};

export default Logo;
