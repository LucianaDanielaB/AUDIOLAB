import { Link } from 'react-router-dom'

function CartWidget({ cartCount }) {
  return (
    <Link to="/carrito" className="cart-widget">
      <span className="cart-icon">🛒</span>
      <span className="cart-count">{cartCount}</span>
    </Link>
  )
}

export default CartWidget