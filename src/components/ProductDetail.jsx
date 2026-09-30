import { Link, useParams } from 'react-router-dom'

function ProductDetail({ products, addToCart }) {
  const { id } = useParams()

  const product = products.find(
    (item) => String(item.id) === String(id)
  )

  if (!product) {
    return (
      <section className="product-not-found">
        <h2>Producto no encontrado</h2>

        <p>
          El producto que estás buscando no está disponible.
        </p>

        <Link to="/productos" className="back-products-button">
          Volver a productos
        </Link>
      </section>
    )
  }

  return (
    <section className="product-detail">

      <div className="product-detail-image">
        <img
          src={`/images/${product.image}`}
          alt={product.name}
        />
      </div>

      <div className="product-detail-info">

        <p className="product-detail-category">
          {product.category}
        </p>

        <h2>{product.name}</h2>

        <p className="product-detail-description">
          {product.description}
        </p>

        <div className="product-detail-separator"></div>

        <p className="product-detail-price">
          ${product.price.toLocaleString('es-AR')}
        </p>

        <p className="product-detail-note">
          Producto disponible para compra.
        </p>

        <button
          onClick={() => addToCart(product)}
          className="product-detail-button"
        >
          Agregar al carrito
        </button>

        <Link
          to="/productos"
          className="product-detail-back"
        >
          ← Volver a productos
        </Link>

      </div>

    </section>
  )
}

export default ProductDetail