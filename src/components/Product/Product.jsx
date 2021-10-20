import React from "react";
import Markdown from "markdown-to-jsx";
import "./Product.css";

const Product = ({ name, imageURL, title, markdown, comingSoon }) => {
  return (
    <div
      id={name}
      className="product flex flex-col md:flex-row mt-10 bg-white rounded-lg shadow px-10 py-10"
    >
      <div className="product-image flex-shrink-0">
        <img src={imageURL} className="mx-auto" width="200" alt="" />
        <p className="text-center text-xl md:text-2xl font-bold text-pink-700 mt-6">
          {title}
          <br />
          {comingSoon && <span className="text-lg"> (Coming Soon) </span>}
        </p>
      </div>
      <div className="product-desc mt-5 md:mt-0 md:pl-5 lg:pl-20 prose md:prose-md lg:prose-lg xl:prose-xl 2xl:prose-2xl prose-pink">
        <div>
          <Markdown>{markdown}</Markdown>
        </div>
      </div>
    </div>
  );
};

export default Product;
