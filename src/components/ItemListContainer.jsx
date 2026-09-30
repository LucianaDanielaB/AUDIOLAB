import { useEffect, useState } from 'react'
import ProductList from './ProductList'

const productsUrl = new URL(
  '../data/products.json',
  import.meta.url
)

function ItemListContainer({ addToCart, onProductsLoaded }) {
  const [products, setProducts] = useState([])

  useEffect(() => {
    fetch(productsUrl.href)
      .then((response) => response.json())
      .then((data) => {
        setProducts(data)
        onProductsLoaded(data)
      })
      .catch((error) => {
        console.error(
          'Error al cargar los productos:',
          error
        )
      })
  }, [onProductsLoaded])

  return (
    <ProductList
      products={products}
      addToCart={addToCart}
    />
  )
}

export default ItemListContainer