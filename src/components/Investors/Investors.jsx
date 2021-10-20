import React from "react";

const Investors = () => {
  return (
    <div className="max-w-screen-xl mx-auto py-10 lg:py-20">
      <p className=" text-green-700 font-bold text-xl text-center lg:text-4xl">
        Investors and Partners
      </p>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:mt-16 place-items-center">
        <div className="p-5">
          <img src="/images/alphabetty_logo.png" width="150" alt="" />
        </div>
        <div className="p-5">
          <img src="/images/coolvox_logo.png" width="150" alt="" />
        </div>
        <div className="p-5">
          <img src="/images/eth-men_logo.png" width="150" alt="" />
        </div>
        <div className="p-5">
          <img src="/images/nftcomics_logo.png" width="150" alt="" />
        </div>
        <div className="p-5">
          <img src="/images/polygon_logo.png" width="200" alt="" />
        </div>
        <div className="p-5">
          <img src="/images/weaponized_countries_logo.png" width="150" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Investors;
