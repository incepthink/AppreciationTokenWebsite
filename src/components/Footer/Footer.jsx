import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="relative bg-white pt-8 pb-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap text-center lg:text-left justify-between">
          <div className="logo text-xl font-bold lg:text-3xl">
            Appreciation Token
          </div>
          <div className="w-full lg:w-6/12 px-4  text-2xl ">
            <div className="flex flex-col md:flex-row md:flex-wrap items-top mb-6">
              <Link className="mt-5 mx-10" to="/#home">
                Home
              </Link>
              <Link className="mt-5 mx-10" to="/#about">
                About
              </Link>

              <Link className="mt-5 mx-10" to="/products">
                Products
              </Link>
              {/* <Link className="mt-5 mx-10" to="/#team">
                Team
              </Link>
              <Link className="mt-5 mx-10" to="/tnc">
                Terms&Conditions
              </Link> */}
            </div>
          </div>
        </div>
        <div className="mt-6 lg:mb-0 mb-6 flex justify-end  ">
          {/* <FontAwesomeIcon icon="github" color="white" /> */}

          <div className="social flex items-center ">
            <a href="/" className="bg-primary p-2 rounded-full">
              <img src="/images/discord-2-32.png" width="32" alt="" />
            </a>
            <a href="/" className="bg-primary p-2 rounded-full ml-5">
              <img src="/images/twitter-32.png" width="32" alt="" />
            </a>
            <a href="/" className="bg-primary p-2 rounded-full ml-5">
              <img src="/images/opensea.png" width="32" alt="" />
            </a>
          </div>
        </div>
        <hr className="my-6 border-blueGray-300" />
        <div className="flex flex-wrap items-center md:justify-between justify-center">
          <div className="w-full md:w-4/12 px-4 mx-auto text-center ">
            <div className="text-sm  font-semibold py-1">
              © 2021 Appreciation Token, Inc. All Rights Reserved
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
