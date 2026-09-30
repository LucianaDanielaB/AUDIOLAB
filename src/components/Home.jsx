import { Link } from 'react-router-dom'

function Home() {
  return (
    <section className="home">
      <div className="home-content">
        <p className="home-label">AUDIO · TECNOLOGÍA · EXPERIENCIA</p>

        <h1>
          Sonido que
          <span> se siente.</span>
        </h1>

        <p className="home-description">
          Descubrí productos de audio pensados para disfrutar cada detalle,
          desde tu música favorita hasta tus momentos de entretenimiento.
        </p>

        <Link to="/productos" className="home-button">
          Explorar productos
        </Link>
      </div>

      <div className="home-visual">
        <div className="sound-circle sound-circle-large"></div>
        <div className="sound-circle sound-circle-medium"></div>
        <div className="sound-circle sound-circle-small"></div>
        <div className="sound-center">◉</div>
      </div>
    </section>
  )
}

export default Home