import React from "react";
import "./Header.css";
import { motion } from "framer-motion";

const Header = () => {
  return (
    <div
      id="home"
      className="header bg-header bg-cover bg-center pt-20 items-center justify-around px-10 lg:pt-0 lg:flex lg:flex-row lg:px-32 xl:px-52 "
    >
      <p className=" text-gray-800  font-medium text-3xl xl:text-5xl xl:leading-tight 2xl:leading-tight 2xl:text-6xl lg:leading-tight lg:flex-1">
        Send An <span className="text-pink-600"> Appreciation Token </span>To
        Show Your Community How Much You Appreciate Them!
      </p>
      <div className="flex py-10  items-center justify-center lg:py-0 lg:flex-1">
        <motion.img
          animate={{
            rotate: "360deg",
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
          }}
          className="header-logo"
          src="/images/logo.png"
          width="300"
          alt=""
        />
      </div>
    </div>
  );
};

export default Header;
