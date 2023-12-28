import React from "react";
import FeaturedProduct from "./FeaturedProduct";

type Props = {
  headerText: string;
};

const FeaturedSection = ({ headerText }: Props) => {
  return (
    <section className="p-5 ">
      <h2 className="text-2xl mt-10 font-semibold mb-10">{headerText}</h2>
      <div className="mb-20">
        <FeaturedProduct />
      </div>
      <div className="mb-20">
        <FeaturedProduct />
      </div>
    </section>
  );
};

export default FeaturedSection;
