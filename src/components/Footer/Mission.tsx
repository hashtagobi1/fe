import React from "react";

type Props = {};

const Mission = (props: Props) => {
  return (
    <div className="md:p-56 bg-gradient-to-r from-brandPurple from-70%% to-brandBlue text-4xl md:text-6xl  text-white px-6 py-12">
      <p className="font-bold">
        Our Mission is to <span className="opacity-50">See Better.</span>
      </p>
      <div className="">
        <button
          className="text-sm  font-bold
        rounded-full 
        bg-white
        border py-4 px-8
        
        duration-500
        transition-all
        mt-12
        text-black"
        >
          Discover More
        </button>
      </div>
    </div>
  );
};

export default Mission;
