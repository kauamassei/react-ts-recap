import CartItem from "../components/CartItem";
import CheckoutButton from "../components/CheckoutButton";
import type { Products } from "../components/Product";

export interface CartItems {
  product: Products;
  quantity: number;
  price: number;
}
interface CartProps {
  cartItems: CartItems[];
  onUpdateCart: (product: Products, quantity: number) => void;
  onRemoveFromCart: (product: Products) => void;
  setCartItems: React.Dispatch<React.SetStateAction<CartItems[]>>;
}

const Cart = ({
  cartItems,
  setCartItems,
  onUpdateCart,
  onRemoveFromCart,

}: CartProps) => {
  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  
  return (
    <>
      <div>
        <h1>Carrinho</h1>
        {cartItems.length === 0 ? (
          <div>
            <p>Não há itens no carrinho</p>
          </div>
        ) : (
          <>
            {cartItems.map((item) => (
              <CartItem
                key={item.product.id}
                item={{ ...item.product, quantity: item.quantity }}
                onUpdateCart={onUpdateCart}
                onRemoveFromCart={onRemoveFromCart}
              />
            ))}
            <div className="total">
              <p>Total: R${totalPrice}</p>
              <CheckoutButton cartItems={cartItems} setCartItems={setCartItems} />
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Cart;
