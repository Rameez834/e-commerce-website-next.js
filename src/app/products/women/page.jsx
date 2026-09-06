"use client";

import React, { useEffect, useState } from "react";

const Page = () => {
  const [products, setProducts] = useState([]);
  const [search, setsearch] = useState("");

  useEffect(() => {
    const getProducts = async () => {
      const res = await fetch("https://dummyjson.com/products");
      const data = await res.json();

      console.log(data);

      setProducts(data.products);
    };

    getProducts();
  }, []);
    const filteredProducts = products.filter((product)=>{
      return product.title.toLowerCase().includes(search.toLowerCase())
    })

  return (
    <main className="min-h-screen bg-gray-100 py-10 px-6">

      {/* Heading */}
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold text-gray-900">
          Our Products
        </h1>

        <p className="text-gray-500 mt-2">
          Discover our latest collection
        </p>
      </div>

      {/* Search Box */}
      <div className="max-w-xl mx-auto mb-12">
        <input
          value={search}
          onChange={(e) => {
            setsearch(e.target.value);
          }}
          className="w-full border-2 border-gray-300 bg-white rounded-xl px-5 py-3 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition"
          type="search"
          placeholder="Search products..."
        />
      </div>

      {/* Products */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">

        {filteredProducts.map((product) => {
          return (
            <div
              key={product.id}
              className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl hover:-translate-y-1 transition duration-300"
            >

              {/* Image */}
              <div className="relative">
                <img
                  src={product.thumbnail}
                  alt={product.title}
                  className="w-full h-60 object-cover"
                />

                <span className="absolute top-3 left-3 bg-blue-600 text-white text-xs px-3 py-1 rounded-full">
                  {product.category}
                </span>
              </div>

              {/* Content */}
              <div className="p-5">

                <h2 className="text-xl font-bold text-gray-800">
                  {product.title}
                </h2>

                <p className="text-gray-500 text-sm mt-2 line-clamp-2">
                  {product.description}
                </p>

                {/* Rating */}
                <div className="flex items-center gap-2 mt-4">
                  <span className="text-yellow-500">
                    ★
                  </span>

                  <span className="text-sm text-gray-600">
                    {product.rating}
                  </span>
                </div>

                {/* Price */}
                <div className="flex items-center justify-between mt-5">

                  <h3 className="text-2xl font-bold text-blue-600">
                    ${product.price}
                  </h3>

                  <span className="text-sm text-gray-500">
                    Stock: {product.stock}
                  </span>

                </div>

                {/* Button */}
                <button
                  className="w-full mt-5 bg-blue-600 text-white py-3 rounded-xl font-semibold hover:bg-blue-700 transition"
                >
                  Add to Cart
                </button>

              </div>

            </div>
          );
        })}

      </div>

    </main>
  );
};

export default Page;