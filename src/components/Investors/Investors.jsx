import React from "react";

const Investors = () => {
  return (
    <div className="max-w-screen-xl mx-auto py-10 lg:py-20">
      <p className=" text-green-700 font-bold text-xl text-center lg:text-4xl">
        Investors and Partners
      </p>
      <div className="grid grid-cols-3 lg:grid-cols-4 lg:mt-16 place-items-center">
        <div className="p-5">
          <img src="/images/erc20.png" width="100" alt="" />
        </div>
        <div className="p-5">
          <img src="/images/erc20.png" width="100" alt="" />
        </div>
        <div className="p-5">
          <img src="/images/erc20.png" width="100" alt="" />
        </div>
        <div className="p-5">
          <img src="/images/erc20.png" width="100" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Investors;
