
import productsData from '../data/products_mock.json'
import Product, { type Products } from '../components/Product'

interface CatalogProps {
  onAddToCart: (product: Products, quantity: number) => void;
}

const Catalog = ({ onAddToCart }: CatalogProps) => {
  return (
    <>
    <div>
      <h1>Catálogo de produtos</h1>
        <div className='products-container'>
          {productsData.map((product: Products) => (
            <Product key={product.id} {...product} onAddToCart={onAddToCart} />
          ))}
        </div>
        </div>
      </>
  )
}

export default Catalog