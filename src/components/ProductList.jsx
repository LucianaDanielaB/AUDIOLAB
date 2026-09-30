import Item from './Item'

function ProductList({ products, addToCart }) {
  const categories = [
    ...new Set(products.map((product) => product.category))
  ]

  return (
    <section>
      <h2>Productos</h2>

      {categories.map((category) => {
        const productsByCategory = products.filter(
          (product) => product.category === category
        )

        return (
          <div key={category}>
            <h3>{category}</h3>

            <div>
              {productsByCategory.map((product) => (
                <Item
                  key={product.id}
                  product={product}
                  addToCart={addToCart}
                />
              ))}
            </div>
          </div>
        )
      })}
    </section>
  )
}

export default ProductList