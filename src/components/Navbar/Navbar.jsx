import React, { useEffect, useState } from "react";
import { useLocation, Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [showNav, setShowNav] = useState(false);

  const toggleNav = () => {
    setShowNav((prev) => !prev);
  };

  const [showNavBg, setShowNavBg] = useState(false);

  const handleScroll = (e) => {
    if (window.scrollY > 100) {
      setShowNavBg(true);
    } else {
      setShowNavBg(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      let elem = document.getElementById(location.hash.slice(1));
      console.log(location.hash);
      if (elem) {
        elem.scrollIntoView({ alignToTop: true, behavior: "smooth" });
      }
    } else {
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    }
    setShowNav(false);
  }, [location]);

  return (
    <nav
      className={`navbar bg-transparent z-10 fixed top-0 py-3 left-0 right-0 flex  lg:py-4 px-5 lg:px-20 items-center justify-between ${
        showNavBg ? "scrolled shadow" : " "
      }`}
    >
      <div className="nav-left-container flex">
        <div className="nav-brand text-lg font-bold lg:text-2xl">
          Appreciation Token
        </div>
        {/* <div className="social flex items-center ">
          <a href="/" className="bg-primary p-2 rounded-full">
            <img src="/images/discord-2-32.png" width="32" alt="" />
          </a>
          <a href="/" className="bg-primary p-2 rounded-full ml-5">
            <img src="/images/twitter-32.png" width="32" alt="" />
          </a>
          <a href="/" className="bg-primary p-2 rounded-full ml-5">
            <img src="/images/opensea.png" width="32" alt="" />
          </a>
        </div> */}
      </div>

      <button className="block  lg:hidden" onClick={toggleNav}>
        <div
          className={`w-10 bg-black h-0.5  transition ${
            showNav ? "transform rotate-45 translate-y-2.5" : " "
          }`}
        ></div>
        <div
          className={`w-10 bg-black h-0.5 mt-2 transition ${
            showNav ? "hidden" : " "
          }`}
        ></div>
        <div
          className={`w-10 bg-black h-0.5 mt-2 transition ${
            showNav ? "transform -rotate-45" : " "
          }`}
        ></div>
      </button>

      <ul
        className={`bg-white links flex z-10  flex-col absolute left-0 ${
          showNav ? "top-full" : "-top-64"
        } w-screen lg:top-0  lg:text-xl lg:relative lg:flex-row transition-all duration-500 lg:w-1/4 lg:bg-transparent justify-between items-center`}
      >
        <li className="p-2 nav-link">
          <Link to="/#home">Home</Link>
        </li>
        <li className="p-2 nav-link">
          <Link to="/#about">About</Link>
        </li>
        <li className="p-2 nav-link">
          <Link to="/products">Products</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
