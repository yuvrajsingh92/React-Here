import React from "react";
import { Link, Outlet } from "react-router-dom";

const Product = () => {
  return (
    <div className="flex flex-col justify-center items-center h-[80vh] w-full gap-6">
      <div className="product-section flex gap-6 text-lg font-medium text-gray-600">
        <Link to="/product/mens" className="hover:text-black transition-colors">
          Men's Section
        </Link>
        <Link
          to="/product/womens"
          className="hover:text-black transition-colors"
        >
          Women's Section
        </Link>
        <Link to="/product/kids" className="hover:text-black transition-colors">
          Kid's Section
        </Link>
      </div>
      <div className="middle font-bold text-4xl text-gray-900">
        Product Page
      </div>
      <Outlet/>
    </div>
  );
};

export default Product;
