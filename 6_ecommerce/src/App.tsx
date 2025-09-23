import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Catalog from "./pages/Catalog";
import Cart from "./pages/Cart";
import type { Products } from "./components/Product";
import { useState } from "react";
import Finished from "./pages/Finished";

import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

function App() {
  const [cartItems, setCartItems] = useState<
    { product: Products; quantity: number }[]
  >([]);

  const handleAddCart = (product: Products, quantity: number) => {
    setCartItems((prevItems) => {
      const itemExists = prevItems.find(
        (item) => item.product.id === product.id
      );

      if (itemExists) {
        toast.info(`Quantidade do item ${product.name} atualizada.`);
        return prevItems.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      } else {
        toast.success(`${product.name} adicionado com sucesso!`);
        return [...prevItems, { product, quantity }];
      }
    });
  };

  const handleUpdateCart = (product: Products, quantity: number) => {
    toast.info(`Quantidade do item ${product.name} atualizada.`);
    setCartItems((prevItems) => {
      return prevItems.map((item) =>
        item.product.id === product.id ? { ...item, quantity: +quantity } : item
      );
    });
  };

  return (
    <div>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Catalog onAddToCart={handleAddCart} />} />
          <Route
            path="/cart"
            element={
              <Cart
                cartItems={cartItems.map(item => ({
                  ...item,
                  price: item.product.price
                }))}
                onUpdateCart={handleUpdateCart}
              />
            }
          />
          <Route path="/finished" element={<Finished />} />
        </Routes>
      </div>
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        closeOnClick
        pauseOnFocusLoss
        pauseOnHover
      />
    </div>
  );
}

export default App;
