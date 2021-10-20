import React from "react";
import Product from "../../components/Product/Product";
import { products } from "../../data/productsData";

const Products = () => {
  return (
    <div className="products min-h-screen max-w-screen-xl py-20 mx-auto px-6 lg:px-10">
      <h1 className=" text-green-700 font-bold text-3xl text-center lg:text-4xl">
        Products
      </h1>
      {products.map((product) => (
        <Product
          key={product.name}
          name={product.name}
          title={product.title}
          imageURL={product.imageURL}
          markdown={product.markdown}
          comingSoon={product.comingSoon}
        />
      ))}
    </div>
  );
};

export default Products;
