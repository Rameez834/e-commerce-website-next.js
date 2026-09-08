"use client";
import { useContext, useEffect, useState } from "react";
import {cartContext} from "@/context/cartContext";

const Page = () => {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const { addToCart } = useContext(cartContext)
  console.log("addToCart:", addToCart);

  useEffect(() => {
    const getData = async () => {
      const res = await fetch(
        "https://dummyjson.com/products/category/mens-shirts"
      );

      const data = await res.json();

      setProducts(data.products);
    };

    getData();
  }, []);

  const filteredProducts = products.filter((product) => {
    return product.title.toLowerCase().includes(search.toLowerCase());
  });

  return (
    <main className="min-h-screen bg-gray-100 py-10 px-6">

      {/* Header */}
      <div className="max-w-7xl mx-auto text-center mb-10">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
          Men's Collection
        </h1>

        <p className="text-gray-500 mt-3">
          Discover our latest men's shirts
        </p>
      </div>

      {/* Search */}
      <div className="max-w-xl mx-auto mb-12">
        <div className="relative">

          <input
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
            }}
            type="search"
            placeholder="Search men's products..."
            className="w-full bg-white border border-gray-300 rounded-full px-6 py-4 pr-12 outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 shadow-sm"
          />

          <span className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-400 text-xl">
            🔍
          </span>

        </div>
      </div>

      {/* Products */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">

        {filteredProducts.map((product) => {
          return (
            <div
              key={product.id}
              className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
            >

              {/* Image */}
              <div className="relative">
                <img
                  src={product.thumbnail}
                  alt={product.title}
                  className="w-full h-64 object-cover"
                />

                <span className="absolute top-4 left-4 bg-black text-white text-xs px-3 py-1.5 rounded-full">
                  Men's Shirt
                </span>
              </div>

              {/* Product Info */}
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

                {/* Price + Stock */}
                <div className="flex justify-between items-center mt-5">

                  <span className="text-2xl font-bold text-blue-600">
                    ${product.price}
                  </span>

                  <span className="text-xs text-gray-500">
                    {product.stock} left
                  </span>

                </div>

                {/* Add to Cart */}
                <button onClick={() => addToCart(product)}

                  className="w-full mt-5 bg-blue-600 text-white py-3 rounded-xl font-semibold hover:bg-blue-700 active:scale-95 transition"
                >
                  Add to Cart
                </button>

              </div>
            </div>
          );
        })}

      </div>

      {/* No Result */}
      {filteredProducts.length === 0 && (
        <div className="text-center mt-16">
          <h2 className="text-2xl font-bold text-gray-700">
            No products found
          </h2>

          <p className="text-gray-500 mt-2">
            Try searching for another product.
          </p>
        </div>
      )}

    </main>
  );
};

export default Page;