import type { Products } from "./Product";

export interface CartItemProps {
    item: Products & {quantity: number};
    onUpdateCart: (item: Products, quantity: number) => void;
    onRemoveFromCart: (product: Products) => void,
}

const CartItem = ({ item, onUpdateCart, onRemoveFromCart }: CartItemProps) => {
  return (
    <>
      <div className="cart-item">
        <h3>{item.name}</h3>
        <p>R${item.price}</p>
        <div className="cart-buttons">
          <input
            type="number"
            value={item.quantity}
            onChange={(e) => onUpdateCart(item, Number(e.target.value))}
          />
          <button onClick={() => onRemoveFromCart(item)}>Remover</button>
        </div>
      </div>
    </>
  );
};

export default CartItem;
