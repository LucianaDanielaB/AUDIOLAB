import { Link } from 'react-router-dom'

function Item({ product, addToCart }) {
  return (
    <article className="product-card">
      <div className="product-image-container">
        <img
          src={`/images/${product.image}`}
          alt={product.name}
          className="product-image"
        />
      </div>

      <div className="product-info">
        <p className="product-category">
          {product.category}
        </p>

        <h3>{product.name}</h3>

        <p className="product-description">
          {product.description}
        </p>

        <p className="product-price">
          ${product.price.toLocaleString('es-AR')}
        </p>

        <div className="product-actions">
          <Link
            to={`/producto/${product.id}`}
            className="detail-button"
          >
            Ver detalle
          </Link>

          <button
            onClick={() => addToCart(product)}
            className="add-button"
          >
            Agregar al carrito
          </button>
        </div>
      </div>
    </article>
  )
}

export default Item