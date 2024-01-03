import React from "react";

type Props = {
  name: string;
  styles?: string;
};

const Tag = ({ name, styles }: Props) => {
  return (
    <span
      className={`text-sm ${styles}  uppercase font-bold
      border py-1 px-2 rounded-lg 
      bg-clip-text text-transparent bg-gradient-to-r from-brandPurple  to to-brandBlue`}
    >
      {name}
    </span>
  );
};

export default Tag;
