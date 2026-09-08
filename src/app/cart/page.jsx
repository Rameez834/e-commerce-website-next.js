"use client";

import { useContext } from "react";
import { cartContext } from "@/context/cartContext";

const Page = () => {

  const { cart } = useContext(cartContext);

  return (
    <div className="min-h-screen bg-gray-100 p-10">

      <h1 className="text-4xl font-bold mb-8">
        My Cart
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

        {cart.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-xl shadow-lg p-5"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-60 object-cover rounded-lg"
            />

            <h2 className="text-xl font-bold mt-4">
              {product.name}
            </h2>

            <p className="text-gray-600">
              ${product.price}
            </p>

          </div>
        ))}

      </div>

    </div>
  );
};

export default Page;