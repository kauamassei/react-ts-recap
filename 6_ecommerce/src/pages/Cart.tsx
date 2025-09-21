import React from "react";
import type { Products } from "../components/Product";

interface CartItem {
  product: Products;
  quantity: number;
}
interface CartProps {
  cartItems: CartItem[];
}

const Cart = ({ cartItems }: CartProps) => {
  return (
    <>
      <div>
        <h1>Carrinho</h1>
        {cartItems.length === 0 ? (
          <p>Não há itens no carrinho</p>
        ) : (
          <>
            {cartItems.map((item) => (
              <div>
                <h1>{item.product.name}</h1>
                <p>Quantidade: {item.quantity}</p>
              <p>Preço: R${item.product.price * item.quantity}</p>

              </div>
            ))}
          </>
        )}
      </div>
    </>
  );
};

export default Cart;
