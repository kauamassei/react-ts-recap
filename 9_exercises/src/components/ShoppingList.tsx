interface Products {
  id: number;
  name: string;
  price: number;
}
interface ProductsList {
  products: Products[];
}
const ShoppingList = ({ products }: ProductsList) => {
  return (
    <>
      <h1>Exercício 2</h1>
      <h2>Lista de produtos</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.name} - R${product.price}
          </li>
        ))}
      </ul>
    </>
  );
};

export default ShoppingList;
