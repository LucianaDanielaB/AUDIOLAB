function Footer() {
  return (
    <footer className="site-footer">

      <div className="footer-main">

        <div className="footer-brand">
          <p className="footer-label">
            AUDIO · TECNOLOGÍA · EXPERIENCIA
          </p>

          <h2>AUDIOLAB</h2>

          <p className="footer-description">
            Una selección de productos de audio para
            acompañar cada momento.
          </p>

          <a
            href="mailto:contacto@audiolab.com.ar"
            className="footer-email"
          >
            contacto@audiolab.com.ar
          </a>
        </div>

        <div className="footer-column">
          <h3>Información</h3>

          <a href="#privacidad">
            Política de privacidad
          </a>

          <a href="#terminos">
            Términos y condiciones
          </a>

          <a href="#contacto">
            Contacto
          </a>

          <a href="#newsletter">
            Newsletter
          </a>
        </div>

        <div className="footer-column">
          <h3>Atención</h3>

          <p>Consultas sobre productos</p>
          <p>Asesoramiento personalizado</p>
          <p>Soporte y asistencia</p>
        </div>

      </div>

      <div className="footer-team">

        <div className="footer-team-header">
          <p className="footer-label">
            NUESTRO EQUIPO
          </p>

          <p>
            Personas detrás de cada experiencia Audiolab.
          </p>
        </div>

        <div className="team-cards">

          <article className="team-card">
            <div>
              <h4>Sofía Martínez</h4>

              <p className="team-role">
                Especialista en audio
              </p>

              <p>
                Asesoramiento para encontrar el producto
                adecuado para cada necesidad.
              </p>

              <a
                href="mailto:sofia@audiolab.com.ar"
                className="team-contact"
              >
                sofia@audiolab.com.ar
              </a>
            </div>
          </article>

          <article className="team-card">
            <div>
              <h4>Tomás Rodríguez</h4>

              <p className="team-role">
                Atención al cliente
              </p>

              <p>
                Acompañamiento durante todo el proceso
                de compra.
              </p>

              <a
                href="mailto:tomas@audiolab.com.ar"
                className="team-contact"
              >
                tomas@audiolab.com.ar
              </a>
            </div>
          </article>

          <article className="team-card">
            <div>
              <h4>Valentina Gómez</h4>

              <p className="team-role">
                Soporte técnico
              </p>

              <p>
                Asistencia y orientación para resolver
                consultas sobre nuestros productos.
              </p>

              <a
                href="mailto:valentina@audiolab.com.ar"
                className="team-contact"
              >
                valentina@audiolab.com.ar
              </a>
            </div>
          </article>

        </div>

      </div>

      <div className="footer-bottom">

        <p>
          © 2026 Audiolab
        </p>

        <p>
          Todos los derechos reservados.
        </p>

      </div>

    </footer>
  )
}

export default Footer