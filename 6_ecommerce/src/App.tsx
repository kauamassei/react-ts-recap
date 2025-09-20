import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Catalog from "./pages/Catalog";
import Cart from "./pages/Cart";
import type { Products } from "./components/Product";
import { useState } from "react";

function App() {
  const [cartItems, setCartItems] = useState<
    { product: Products; quantity: number }[]
  >([]);

  const handleAddCart = (product: Products, quantity: number) => {
    setCartItems((prevItems) => {
      const itemExists = prevItems.find((item) => item.product.id === product.id);

      if (itemExists) {
        return prevItems.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      } else {
        return [...prevItems, { product, quantity }];
      }
    });
  };
  return (
    <div>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Catalog onAddToCart={handleAddCart} />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
