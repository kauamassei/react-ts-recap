import CartItem from "../components/CartItem";
import type { Products } from "../components/Product";

interface CartItems {
  product: Products;
  quantity: number;
  price: number
}
interface CartProps {
  cartItems: CartItems[];
  onUpdateCart: (product: Products, quantity: number) => void;
}

const Cart = ({ cartItems, onUpdateCart }: CartProps) => {
  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  return (
    <>
      <div>
        <h1>Carrinho</h1>
        {cartItems.length === 0 ? (
          <p>Não há itens no carrinho</p>
        ) : (
          <>
            {cartItems.map((item) => (
              <CartItem
                key={item.product.id}
                item={{ ...item.product, quantity: item.quantity }}
                onUpdateCart={onUpdateCart}
              />
            ))}
            <div className="total">
              <p>Total: R${totalPrice}</p>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Cart;
