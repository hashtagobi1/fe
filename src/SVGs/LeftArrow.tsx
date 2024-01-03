import React from "react";

type Props = {
  classes?: string;
  galleryLength?: number;
  handleClick?: (galleryLength: number) => void;
  size?: number;
};

const LeftArrow = ({
  classes,
  galleryLength,
  handleClick,
  size = 36,
}: Props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      width={size}
      height={size}
      onClick={() => handleClick && galleryLength && handleClick(galleryLength)}
      className={`cursor-pointer ${classes}`}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
      />
    </svg>
  );
};

export default LeftArrow;
