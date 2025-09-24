import { useLocation, useNavigate } from "react-router-dom";
import type { CartItems } from "./Cart";
const Finished = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const items: CartItems[] = location.state?.cartItems || [];

  const totalPrice = items.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <>
      <div className="thank-you-page">
        <ul>
          {items.map((item) => (
            <li key={item.product.id}>
              {item.product.name} - {item.quantity} x R$
              {item.price}
            </li>
          ))}
        </ul>
        <p>Total: R${totalPrice.toFixed(2)}</p>
        <button onClick={() => navigate("/")}>Voltar ao carrinho</button>
      </div>
    </>
  );
};

export default Finished;
