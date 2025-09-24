
import type { Products } from "./Product";

interface CartProps {
  onCheckout: (product: Products) => void,
}

const CheckoutButton = ({onCheckout}: CartProps) => {
  return (
    <>
      <button onClick={() => onCheckout({} as Products)}>Finalizar compra</button>
    </>
  );
};

export default CheckoutButton;
