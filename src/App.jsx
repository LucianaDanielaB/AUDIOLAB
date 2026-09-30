import { useCallback, useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './components/Home'
import ItemListContainer from './components/ItemListContainer'
import ProductDetail from './components/ProductDetail'
import Cart from './components/Cart'

function App() {
  const [products, setProducts] = useState([])
  const [cart, setCart] = useState([])

  const handleProductsLoaded = useCallback((data) => {
    setProducts(data)
  }, [])

  const addToCart = (product) => {
    setCart((currentCart) => {
      const existingProduct = currentCart.find(
        (item) => item.id === product.id
      )

      if (existingProduct) {
        return currentCart.map((item) =>
          item.id === product.id
            ? {
                ...item,
                quantity: item.quantity + 1,
              }
            : item
        )
      }

      return [
        ...currentCart,
        {
          ...product,
          quantity: 1,
        },
      ]
    })
  }

  const increaseQuantity = (id) => {
    setCart((currentCart) =>
      currentCart.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity: item.quantity + 1,
            }
          : item
      )
    )
  }

  const decreaseQuantity = (id) => {
    setCart((currentCart) =>
      currentCart
        .map((item) =>
          item.id === id
            ? {
                ...item,
                quantity: item.quantity - 1,
              }
            : item
        )
        .filter((item) => item.quantity > 0)
    )
  }

  const clearCart = () => {
    setCart([])
  }

  const cartCount = cart.reduce(
    (total, product) => total + product.quantity,
    0
  )

  return (
    <Layout cartCount={cartCount}>
      <Routes>

        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/productos"
          element={
            <ItemListContainer
              addToCart={addToCart}
              onProductsLoaded={handleProductsLoaded}
            />
          }
        />

        <Route
          path="/producto/:id"
          element={
            <ProductDetail
              products={products}
              addToCart={addToCart}
            />
          }
        />

        <Route
          path="/carrito"
          element={
            <Cart
              cart={cart}
              increaseQuantity={increaseQuantity}
              decreaseQuantity={decreaseQuantity}
              clearCart={clearCart}
            />
          }
        />

      </Routes>
    </Layout>
  )
}

export default App