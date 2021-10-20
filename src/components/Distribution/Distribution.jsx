import React from "react";

const Distribution = () => {
  return (
    <div className="distribution bg-white py-8 px-5 lg:py-10 lg:px-20 rounded-lg h-full">
      <h1 className="text-center text-lg lg:text-3xl text-pink-600 font-bold">
        3. Distribution
      </h1>
      <div className="flex mt-5 lg:mt-10 flex-col lg:flex-row">
        <div className="flex-1 text-gray-800 font-medium lg:leading-relaxed">
          <p className="text-md lg:text-xl">
            Save on gas costs by using our contract to distribute across a large
            list of wallet addresses, or simply create a claiming portal on our
            website. Layer 2 solutions are always an exciting option as well.
          </p>
        </div>
        <div className="flex-1 flex justify-center items-center">
          <img src="/images/distribution.png" width="350" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Distribution;
