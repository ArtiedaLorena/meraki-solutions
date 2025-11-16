import React from 'react';

export default function Hero() {
  return (
    <section className="hero">
      <div className="container hero-grid">
        <div>
          <h1>Landing pages responsive y optimizadas para conversión</h1>
          <p className="lead">
            Creamos páginas rápidas, bonitas y enfocadas a convertir visitantes en clientes. Diseño móvil-first, SEO y llamadas a la acción claras.
          </p>
          <div className="hero-cta">
            <a className="btn primary" href="#contact">Solicitar presupuesto</a>
            <a className="btn outline" href="#features">Ver servicios</a>
          </div>
          <ul className="hero-features">
            <li>SEO friendly</li>
            <li>Velocidad optimizada</li>
            <li>Diseño personalizado</li>
          </ul>
        </div>
        <div className="hero-visual" aria-hidden="true">
          <div className="mockup">
            <div className="screen">Tu nueva landing se verá así</div>
          </div>
        </div>
      </div>
    </section>
  );
}