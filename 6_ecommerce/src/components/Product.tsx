export interface Products {
  id: number;
  name: string;
  price: number;
  image: string;
}

const Product = ({ name, price, image }: Products) => {
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
          <button>Adicionar ao carrinho</button>
        </div>
      </div>
    </>
  );
};

export default Product;
