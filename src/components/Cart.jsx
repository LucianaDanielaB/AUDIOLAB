function Cart({ cart, increaseQuantity, decreaseQuantity, clearCart }) {
  const total = cart.reduce(
    (sum, product) => sum + product.price * product.quantity,
    0
  )

  return (
    <section className="cart-page">

      <div className="cart-header">
        <p className="cart-label">
          TU COMPRA
        </p>

        <h2>Carrito</h2>

        <p className="cart-introduction">
          Revisá tus productos antes de finalizar la compra.
        </p>
      </div>

      {cart.length === 0 ? (
        <div className="empty-cart">
          <div className="empty-cart-icon">
            🛒
          </div>

          <h3>Tu carrito está vacío</h3>

          <p>
            Todavía no agregaste ningún producto.
          </p>
        </div>
      ) : (
        <div className="cart-layout">

          <div className="cart-products">

            {cart.map((product) => (
              <article
                key={product.id}
                className="cart-product"
              >

                <div className="cart-product-image">
                  <img
                    src={`/images/${product.image}`}
                    alt={product.name}
                  />
                </div>

                <div className="cart-product-info">

                  <p className="cart-product-category">
                    {product.category}
                  </p>

                  <h3>
                    {product.name}
                  </h3>

                  <p className="cart-product-price">
                    ${product.price.toLocaleString('es-AR')}
                  </p>

                </div>

                <div className="cart-product-actions">

                  <p className="cart-subtotal-label">
                    Subtotal
                  </p>

                  <p className="cart-subtotal">
                    ${(product.price * product.quantity).toLocaleString('es-AR')}
                  </p>

                  <div className="quantity-controls">

                    <button
                      onClick={() => decreaseQuantity(product.id)}
                      className="quantity-button"
                    >
                      −
                    </button>

                    <span>
                      {product.quantity}
                    </span>

                    <button
                      onClick={() => increaseQuantity(product.id)}
                      className="quantity-button"
                    >
                      +
                    </button>

                  </div>

                </div>

              </article>
            ))}

          </div>

          <aside className="cart-summary">

            <p className="cart-summary-label">
              RESUMEN
            </p>

            <h3>
              Tu pedido
            </h3>

            <div className="cart-summary-line">
              <span>
                Productos
              </span>

              <span>
                {cart.reduce(
                  (total, product) => total + product.quantity,
                  0
                )}
              </span>
            </div>

            <div className="cart-summary-separator"></div>

            <div className="cart-total">
              <span>
                Total
              </span>

              <strong>
                ${total.toLocaleString('es-AR')}
              </strong>
            </div>

            <button
              onClick={clearCart}
              className="clear-cart-button"
            >
              Vaciar carrito
            </button>

          </aside>

        </div>
      )}

    </section>
  )
}

export default Cart