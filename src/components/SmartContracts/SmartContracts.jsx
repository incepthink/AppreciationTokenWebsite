import React from "react";
import "./SmartContracts.css";

const SmartContracts = () => {
  return (
    <div className="smart-contracts max-w-screen-xl mx-auto py-10 px-5 lg:px-0 lg:py-20">
      <p className=" text-green-700 font-bold text-xl text-center lg:text-4xl">
        Our Custom Smart Contracts Have
      </p>
      <div className="block mt-6 md:flex  lg:mt-16">
        <ul className="list-outside list-disc flex-1 text-md px-5 leading-loose lg:text-2xl font-medium lg:leading-loose">
          <li> No file size limitations, the larger the better</li>
          <li>Upgradeable features</li>
          <li>Inbuilt features like snapshots</li>
          <li>Ownability</li>
          <li>Cross platform compatibility</li>
        </ul>
        <div className="flex-1 flex justify-center items-center lg:justify-end mt-6 md:mt-0">
          <img
            src="/images/smart_contract.png"
            width="250"
            className="smart-contract-img bg-white rounded-xl shadow-lg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default SmartContracts;
