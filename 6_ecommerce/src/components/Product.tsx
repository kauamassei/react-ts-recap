import { useState } from "react";

export interface Products {
  id: number;
  name: string;
  price: number;
  image: string;
}

interface ProductProps extends Products {
  onAddToCart: (product: Products, quantity: number) => void;
}
const Product = ({id, name, price, image, onAddToCart }: ProductProps) => {
  const [quantity, setQuantity] = useState(1);
  return (
    <>
      <div className="product">
        <img src={image} alt={name} />
        <h3>{name}</h3>
        <p>${price}</p>
        <div className="cart-buttons">
          <select>
            <option value="">1</option>
          </select>
          <button onClick={() => onAddToCart({ id, name, price, image }, quantity)}>
            Adicionar ao carrinho
          </button>
        </div>
      </div>
    </>
  );
};

export default Product;
