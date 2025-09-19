
import productsData from '../data/products_mock.json'
import Product, { type Products } from '../components/Product'


const Catalog = () => {
  return (
    <>
    <div>
      <h1>Catálogo de produtos</h1>
        <div className='products-container'>
          {productsData.map((product: Products) => (
            <Product key={product.id} {...product} />
          ))}
        </div>
    </div>
    </>
  )
}

export default Catalog