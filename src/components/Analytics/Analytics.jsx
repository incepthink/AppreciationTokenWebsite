import React from "react";

const Analytics = () => {
  return (
    <div className="analytics bg-white py-8 px-5 lg:pt-10 lg:pb-20 lg:px-20 rounded-lg h-full">
      <h1 className="text-center text-lg lg:text-3xl text-pink-600 font-bold">
        1. Analytics
      </h1>
      <div className="flex mt-5 lg:mt-10 flex-col lg:flex-row">
        <div className="flex-1">
          <p className=" text-green-800 font-medium text-md lg:text-2xl">
            Finding out who and what constitutes your community is key, our in
            depth analytics gives you :-
          </p>
          <ul className="list-inside list-disc text-md lg:text-xl	lg:mt-5">
            <li>Top holders by volume</li>
            <li> Every wallet address associated with your smart contract</li>
            <li> Current holders and amounts</li>
            <li> Diamond Hands (people who buy and have never sold)</li>
          </ul>
        </div>
        <div className="flex-1 mt-5 flex justify-center items-center lg:mt-0">
          <img src="/images/analytics.png" width="350" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Analytics;
