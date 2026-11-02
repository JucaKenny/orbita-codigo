export default function Home() {
  return (
    <main className="page">
      <div className="atmosphere" aria-hidden="true" />

      <header className="top">
        <p className="brand">Órbita Código</p>
        <nav className="nav">
          <a href="#servicios">Servicios</a>
          <a href="#contacto">Contacto</a>
        </nav>
      </header>

      <section className="hero">
        <p className="brand-hero">Órbita Código</p>
        <h1>Software que pone tu negocio en órbita</h1>
        <p className="lead">
          Webs, sistemas y automatización para PYMES que necesitan resultados,
          no solo una página bonita.
        </p>
        <div className="cta">
          <a className="btn-primary" href="#contacto">
            Hablar de tu proyecto
          </a>
          <a className="btn-secondary" href="#servicios">
            Ver servicios
          </a>
        </div>
      </section>

      <section id="servicios" className="section">
        <h2>Servicios</h2>
        <p className="section-lead">
          Tres formas de ayudarte a digitalizar y ordenar tu operación.
        </p>
        <ul className="services">
          <li>
            <h3>Presencia web</h3>
            <p>Sitio claro, rápido y orientado a conseguir contactos.</p>
          </li>
          <li>
            <h3>Sistemas a medida</h3>
            <p>Cotizaciones, pedidos, inventario o flujos que hoy viven en Excel.</p>
          </li>
          <li>
            <h3>Automatización</h3>
            <p>Conectamos herramientas para que dejes de copiar datos a mano.</p>
          </li>
        </ul>
      </section>

      <section id="contacto" className="section">
        <h2>Contacto</h2>
        <p className="section-lead">
          Cuéntame qué necesitas y armamos el siguiente paso.
        </p>
        <a className="btn-primary" href="mailto:hola@orbitacodigo.com">
          Escribir por email
        </a>
      </section>

      <footer className="footer">
        <p>© 2026 Órbita Código</p>
      </footer>
    </main>
  );
}