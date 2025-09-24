import { toast } from "react-toastify";
import type { Products } from "./Product";
import { useNavigate } from "react-router-dom";

interface CartItems {
  product: Products;
  quantity: number;
  price: number;
}

interface CheckoutButtonProps {
  cartItems: CartItems[];
  setCartItems: React.Dispatch<React.SetStateAction<CartItems[]>>;
}

const CheckoutButton = ({ cartItems, setCartItems }: CheckoutButtonProps) => {
  const navigate = useNavigate();

  const handleCheckout = () => {
    if (cartItems.length > 0) {
      toast.success("Compra finalizada com sucesso!");

      navigate("/finished", { state: { cartItems } });
      setCartItems([]);
    } else {
      toast.error("Carrinho vazio!");
    }
  };
  return (
    <>
      <button onClick={handleCheckout}>Finalizar compra</button>
    </>
  );
};

export default CheckoutButton;
