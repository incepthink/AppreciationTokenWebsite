import React from "react";

const AssetCreation = () => {
  return (
    <div className="asset-creation bg-white py-8 px-5 lg:py-10 lg:px-20 rounded-lg h-full">
      <h1 className="text-center text-lg lg:text-3xl text-pink-600 font-bold">
        2. Asset Creation
      </h1>
      <div className="flex mt-5 lg:mt-10 flex-col lg:flex-row">
        <div className="flex-1 text-gray-800 font-medium">
          <p className="text-md lg:text-xl lg:leading-relaxed">
            Creating the perfect asset requires experience and technique, chose
            the best option from our in-house expertise in GLB files, 3-D
            printing, or something simple that we co-create such as colouring
            books and posters.
          </p>
          <p className="text-md mt-3 lg:text-xl  lg:mt-6">
            Don't forget to chose your perfect custom beat from our library of
            composed music to add more value to your NFT
          </p>
        </div>
        <div className="flex-1 mt-5 flex justify-center items-center lg:mt-0">
          <img src="/images/asset_creation.png" width="350" alt="" />
        </div>
      </div>
    </div>
  );
};

export default AssetCreation;
