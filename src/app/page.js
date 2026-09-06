"use client";
import { useRouter } from "next/navigation";

const Page = () => {
  const router = useRouter();
  return (
    <main>
      {/* Hero Section */}
      <section className="min-h-screen bg-gray-100 flex items-center">
        <div className="max-w-7xl mx-auto px-8 grid md:grid-cols-2 gap-10 items-center">

          {/* Text */}
          <div>
            <h1 className="text-5xl font-bold text-gray-900 leading-tight">
              Upgrade Your Style With
              <span className="text-blue-600"> Nova Wears</span>
            </h1>

            <p className="mt-5 text-gray-600 text-lg">
              Discover premium fashion collections designed for modern
              lifestyles. Shop trendy clothes with the best quality.
            </p>

            <button onClick={()=>
              router.push("/products")
            }
            className="mt-8 bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition">
              Shop Now
            </button>
          </div>


          {/* Image */}
          <div className="flex justify-center">
            <div className="bg-white rounded-3xl shadow-xl p-5">
              <img
                src="https://images.unsplash.com/photo-1445205170230-053b83016050"
                alt="fashion"
                className="w-96 h-96 object-cover rounded-2xl"
              />
            </div>
          </div>

        </div>
      </section>


      {/* Categories */}
      <section className="py-16 px-8">
        <h2 className="text-3xl font-bold text-center mb-10">
          Shop By Category
        </h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">

          <div className="bg-black text-white rounded-2xl p-10 text-center hover:scale-105 transition">
            <h3 className="text-2xl font-semibold">
              Men's Wear
            </h3>
          </div>


          <div className="bg-gray-200 rounded-2xl p-10 text-center hover:scale-105 transition">
            <h3 className="text-2xl font-semibold">
              Women's Wear
            </h3>
          </div>


          <div className="bg-blue-600 text-white rounded-2xl p-10 text-center hover:scale-105 transition">
            <h3 className="text-2xl font-semibold">
              Accessories
            </h3>
          </div>

        </div>
      </section>

    </main>
  );
};

export default Page;