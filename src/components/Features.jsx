import React from 'react';

const features = [
  {
    title: 'Responsive desde el inicio',
    text: 'Diseño móvil-first para que tu landing se vea perfecta en cualquier dispositivo.'
  },
  {
    title: 'Optimización SEO',
    text: 'Estructura semántica, meta tags, velocidad y buenas prácticas para posicionamiento.'
  },
  {
    title: 'Conversiones enfocadas',
    text: 'CTAs claros, pruebas A/B y técnicas de copywriting para mejorar la conversión.'
  }
];

export default function Features() {
  return (
    <section id="features" className="features container">
      <h2>Lo que ofrecemos</h2>
      <div className="features-grid">
        {features.map((f, i) => (
          <article key={i} className="feature-card">
            <h3>{f.title}</h3>
            <p>{f.text}</p>
          </article>
        ))}
      </div>

      <section id="pricing" className="pricing">
        <h3>Planes</h3>
        <div className="pricing-grid">
          <div className="price-card">
            <h4>Starter</h4>
            <p className="price">Desde €299</p>
            <ul>
              <li>Landing responsive</li>
              <li>SEO básico</li>
            </ul>
            <a className="btn primary" href="#contact">Contratar</a>
          </div>
          <div className="price-card recommended">
            <h4>Pro</h4>
            <p className="price">Desde €599</p>
            <ul>
              <li>Diseño personalizado</li>
              <li>Optimizaciones de velocidad</li>
              <li>Soporte 30 días</li>
            </ul>
            <a className="btn primary" href="#contact">Contratar</a>
          </div>
          <div className="price-card">
            <h4>Agencia</h4>
            <p className="price">Desde €999</p>
            <ul>
              <li>Landing + Integraciones</li>
              <li>SEO avanzado</li>
              <li>Soporte premium</li>
            </ul>
            <a className="btn outline" href="#contact">Contactar</a>
          </div>
        </div>
      </section>
    </section>
  );
}