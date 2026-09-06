import Link from 'next/link'
import React from 'react'

const Page = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-10">
      
      <div className="bg-white shadow-xl rounded-2xl p-10 w-full max-w-md">
        
        <h1 className="text-3xl font-bold text-center mb-8">
          Products
        </h1>

        <ul className="space-y-5">

          <li>
            <Link 
              href="/products/men"
              className="block bg-black text-white text-center py-4 rounded-xl text-lg font-semibold hover:bg-gray-800 transition"
            >
              Men Accessories
            </Link>
          </li>

          <li>
            <Link 
              href="/products/women"
              className="block bg-pink-500 text-white text-center py-4 rounded-xl text-lg font-semibold hover:bg-pink-600 transition"
            >
              Women Accessories
            </Link>
          </li>

        </ul>

      </div>

    </div>
  )
}

export default Page