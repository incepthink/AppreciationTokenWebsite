import React from "react";
import { Link } from "react-router-dom";
import Popup from "reactjs-popup";
import "./CircularLayout.css";

const CircularLayout = () => {
  return (
    <div className="provide  relative max-w-screen-2xl mx-auto lg:mt-0 lg:h-screen">
      <Popup
        on="hover"
        position="left center"
        trigger={(open) => (
          <div className="item flex   transform cursor-pointer items-center justify-center p-3 lg:p-5 absolute top-1/2 left-1/2  -translate-x-1/2 -translate-y-1/2 bg-white rounded shadow-lg deg-0  h-16 w-16 lg:h-32 lg:w-32 xl:h-32 xl:w-32 2xl:h-44 2xl:w-44">
            <img src="/images/airdrop1.png" alt="" />
          </div>
        )}
      >
        <div className=" text-white">
          <p className="font-bold lg:text-lg">Airdrops</p>
          <Link to="/products/#airdrop" className="text-sm underline">
            Know More
          </Link>
        </div>
      </Popup>
      <Popup
        on="hover"
        position="left center"
        trigger={(open) => (
          <div className="item flex transform  cursor-pointer items-center justify-center p-3 lg:p-5 absolute top-1/2 left-1/2  -translate-x-1/2 -translate-y-1/2 bg-white rounded shadow-lg deg-40  h-16 w-16 lg:h-32 lg:w-32 xl:h-32 xl:w-32 2xl:h-44 2xl:w-44">
            <img src="/images/merchandise2.png" alt="" />
          </div>
        )}
      >
        <div className=" text-white">
          <p className="font-bold lg:text-lg">Merchandise</p>
          <Link to="/products/#merchandise" className="text-sm underline">
            Know More
          </Link>
        </div>
      </Popup>
      <Popup
        on="hover"
        position="top center"
        trigger={(open) => (
          <div className="item flex transform  cursor-pointer items-center justify-center p-3 lg:p-5 absolute top-1/2 left-1/2  -translate-x-1/2 -translate-y-1/2 bg-white rounded shadow-lg deg-80  h-16 w-16 lg:h-32 lg:w-32 xl:h-32 xl:w-32 2xl:h-44 2xl:w-44">
            <img src="/images/companion2.png" alt="" />
          </div>
        )}
      >
        <div className=" text-white">
          <p className="font-bold lg:text-lg">Companion</p>
          <Link to="/products/#companion-nfts" className="text-sm underline">
            Know More
          </Link>
        </div>
      </Popup>
      <Popup
        on="hover"
        position="top"
        trigger={(open) => (
          <div className="item flex transform  cursor-pointer items-center justify-center p-3 lg:p-5 absolute top-1/2 left-1/2  -translate-x-1/2 -translate-y-1/2 bg-white rounded shadow-lg deg-120  h-16 w-16 lg:h-32 lg:w-32 xl:h-32 xl:w-32 2xl:h-44 2xl:w-44">
            <img src="/images/3dprinter.png" alt="" />
          </div>
        )}
      >
        <div className=" text-white">
          <p className="font-bold lg:text-lg">3-D printed figures</p>
          <Link to="/products/#printed-figures" className="text-sm underline">
            Know More
          </Link>
        </div>
      </Popup>
      <Popup
        on="hover"
        position="right center"
        trigger={(open) => (
          <div className="item flex transform  cursor-pointer items-center justify-center p-3 lg:p-5 absolute top-1/2 left-1/2  -translate-x-1/2 -translate-y-1/2 bg-white rounded shadow-lg deg-160  h-16 w-16 lg:h-32 lg:w-32 xl:h-32 xl:w-32 2xl:h-44 2xl:w-44">
            <img src="/images/interactable1.png" alt="" />
          </div>
        )}
      >
        <div className=" text-white">
          <p className="font-bold lg:text-lg">Interactive GLB Files</p>
          <Link to="/products/#glb-files" className="text-sm underline">
            Know More
          </Link>
        </div>
      </Popup>
      <Popup
        on="hover"
        position="right center"
        trigger={(open) => (
          <div className="item flex transform  cursor-pointer items-center justify-center p-3 lg:p-5 absolute top-1/2 left-1/2  -translate-x-1/2 -translate-y-1/2 bg-white rounded shadow-lg deg-200  h-16 w-16 lg:h-32 lg:w-32 xl:h-32 xl:w-32 2xl:h-44 2xl:w-44">
            <img src="/images/erc20.png" alt="" />
          </div>
        )}
      >
        <div className=" text-white">
          <p className="font-bold lg:text-lg">ERC-20 Tokens</p>
          <Link to="/products/#erc-tokens" className="text-sm underline">
            Know More
          </Link>
        </div>
      </Popup>
      <Popup
        on="hover"
        position="bottom"
        trigger={(open) => (
          <div className="item  flex cursor-pointer items-center justify-center p-3 lg:p-5 absolute top-1/2 left-1/2  -translate-x-1/2 -translate-y-1/2 bg-white rounded shadow-lg deg-240  h-16 w-16 lg:h-32 lg:w-32 xl:h-32 xl:w-32 2xl:h-44 2xl:w-44">
            <img src="/images/beats1.png" alt="" />
          </div>
        )}
      >
        <div className=" text-white">
          <p className="font-bold lg:text-lg">Custom Beats</p>
          <Link to="/products/#custom-beats" className="text-sm underline">
            Know More
          </Link>
        </div>
      </Popup>
      <Popup
        on="hover"
        position="bottom"
        trigger={(open) => (
          <div className="item flex transform  cursor-pointer items-center justify-center p-3 lg:p-5 absolute top-1/2 left-1/2  -translate-x-1/2 -translate-y-1/2 bg-white rounded shadow-lg deg-280  h-16 w-16 lg:h-32 lg:w-32 xl:h-32 xl:w-32 2xl:h-44 2xl:w-44">
            <img src="/images/book.png" alt="" />
          </div>
        )}
      >
        <div className=" text-white">
          <p className="font-bold lg:text-lg">
            {" "}
            Unlockable NFT Colouring books
          </p>
          <Link to="/products/#coloring-books" className="text-sm underline">
            Know More
          </Link>
        </div>
      </Popup>

      <Popup
        on="hover"
        position="left center"
        trigger={(open) => (
          <div className="item flex transform  cursor-pointer items-center justify-center p-3 lg:p-8 absolute top-1/2 left-1/2  -translate-x-1/2 -translate-y-1/2 bg-white rounded shadow-lg deg-320  h-16 w-16 lg:h-32 lg:w-32 xl:h-32 xl:w-32 2xl:h-44 2xl:w-44">
            <img src="/images/holographic_card.png" alt="" />
          </div>
        )}
      >
        <div className=" text-white">
          <p className="font-bold lg:text-lg">3D Holographic Cards</p>
          <Link to="/products/#holographic-cards" className="text-sm underline">
            Know More
          </Link>
        </div>
      </Popup>

      <div className="bg-white p-3 lg:p-6 rounded shadow-lg absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <img
          src="/images/logo.png"
          className="center-logo"
          width="150"
          alt=""
        />
      </div>
    </div>
  );
};

export default CircularLayout;
