import React from "react";
import CircularLayout from "../CircularLayout/CircularLayout";
import ClosingNote from "../ClosingNote/ClosingNote";
import Facets from "../Facets/Facets";
import Investors from "../Investors/Investors";
import SmartContracts from "../SmartContracts/SmartContracts";

const About = () => {
  return (
    <>
      <div id="about" className="max-w-screen-xl py-8 mx-auto lg:py-16">
        <p className=" text-green-700 font-bold text-xl text-center lg:text-4xl">
          What is Appreciation Token?
        </p>
        <p className="text-center text-sm  mt-3 lg:mt-6 px-4   lg:text-xl lg:px-48">
          A way to keep your community engaged via subsequent airdrops, tokens,
          3D printed items, physical products, metaverse wearables and much
          more.
        </p>
        <p className="text-green-700 font-bold text-center mt-8 text-xl  lg:mt-20 lg:text-4xl">
          What We Provide
        </p>
        <p className="text-center text-sm mt-3 lg:mt-6  lg:text-xl lg:px-48">
          Our ways of appreciating the community
        </p>
      </div>
      <CircularLayout />
      <Facets />
      <SmartContracts />
      <ClosingNote />
      <Investors />
    </>
  );
};

export default About;
