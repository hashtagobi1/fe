import React from "react";
import Star from "@/SVGs/Star";
import Image from "next/image";
import Link from "next/link";
import Tag from "../Tag";
type Props = {
  image: string;
};

const FeaturedProduct = ({ image }: Props) => {
  // const randomPrice = () => {
  //   return Math.floor(Math.random() * (195 - 60 + 1)) + 60;
  // };
  const renderSwatch = () => {
    return (
      <>
        <li className="cursor-pointer">
          <button
            type="button"
            className="bg-gradient-to-br from-opacity-20 to-black w-8 h-8"
          >
            <span className="w-full h-full block rounded-full bg-gradient-to-br from-blue-500 via-blue-400 to-blue-900"></span>
          </button>
        </li>
      </>
    );
  };
  return (
    <>
      <div className="mb-8">
        <Link className="" passHref href={"/"}>
          <div className="bg-gray-100 overflow-hidden rounded-lg flex items-center justify-center">
            <div className="transform scale-100 transition-transform hover:scale-110 duration-300 ease-in-out">
              <Image
                width={500}
                src={image}
                alt="image"
                className="object-cover"
                height={500}
              />
            </div>
          </div>
        </Link>
      </div>
      <div>
        <div className="flex items-center justify-between mb-6">
          <p className="text-2xl font-bold">Renegades &trade;</p>
          <Tag name="bestseller" />
        </div>
        <div>
          {/* <span className="text-lg">From £{randomPrice()}</span> */}
          <span className="text-lg">From £46</span>
        </div>
        <div>
          <ul className="flex wrap gap-4 w-full mt-4 ">
            {renderSwatch()}
            {renderSwatch()}
            {renderSwatch()}
            {renderSwatch()}
          </ul>
        </div>
        <div className="flex items-center mt-4">
          <Star />
          <Star />
          <Star />
          <Star />
          <Star />
          <p className="text-sm ml-6">
            <b className="font-bold">4.9</b> from 8'394 reviews
          </p>
        </div>
      </div>
    </>
  );
};

export default FeaturedProduct;
