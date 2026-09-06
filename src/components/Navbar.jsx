import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md px-8 py-4">
      <div className="flex items-center justify-between max-w-7xl mx-auto">

        {/* Logo */}
        <div className="text-2xl font-bold text-blue-600">
          Nova Wears
        </div>

        {/* Links */}
        <ul className="flex gap-8 text-gray-700 font-medium">
          <li>
            <Link 
              href="/" 
              className="hover:text-blue-600 transition duration-300"
            >
              Home
            </Link>
          </li>

          <li>
            <Link 
              href="/products" 
              className="hover:text-blue-600 transition duration-300"
            >
              Products
            </Link>
          </li>

          <li>
            <Link 
              href="/cart" 
              className="hover:text-blue-600 transition duration-300"
            >
              Cart
            </Link>
          </li>

          <li>
            <Link 
              href="/logIn" 
              className="hover:text-blue-600 transition duration-300"
            >
              Login
            </Link>
          </li>
        </ul>

      </div>
    </nav>
  );
};

export default Navbar;