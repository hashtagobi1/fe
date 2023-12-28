import SunGodLogo from "@/SVGs/SunGodLogo";
import Link from "next/link";
import React from "react";

type Props = {
  size: number;
};

const Logo = ({ size }: Props) => {
  return (
    <div>
      <Link href={"/"} passHref>
        <span className="sr-only">SunGod</span>
        <SunGodLogo size={size} />
      </Link>
    </div>
  );
};

export default Logo;
