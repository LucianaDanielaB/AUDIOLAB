import { Link } from 'react-router-dom'

function Navbar({ cartCount }) {
  return (
    <nav className="main-nav">
      <div className="nav-content">
        <ul>
          <li>
            <Link to="/">
              Inicio
            </Link>
          </li>

          <li>
            <Link to="/productos">
              Productos
            </Link>
          </li>

          <li>
            <Link to="/carrito">
              Carrito
            </Link>
          </li>
        </ul>

        <Link
          to="/carrito"
          className="cart-widget"
        >
          🛒 {cartCount}
        </Link>
      </div>
    </nav>
  )
}

export default Navbar