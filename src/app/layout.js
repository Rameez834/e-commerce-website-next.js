import "./globals.css";
import CartProvider from "@/context/cartContext";
import Navbar from "../components/Navbar";

const Layout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <CartProvider>
          <Navbar />
          {children}
        </CartProvider>
      </body>
    </html>
  );
};

export default Layout;