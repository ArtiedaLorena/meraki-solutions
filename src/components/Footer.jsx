import React from 'react';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <div>
          <strong>Meraki</strong>
          <p>Landing pages responsive & SEO-friendly</p>
        </div>
        <div className="footer-links">
          <a href="#features">Servicios</a>
          <a href="#pricing">Precios</a>
          <a href="#contact">Contacto</a>
        </div>
      </div>
      <div className="copyright">© 2025 Meraki. Todos los derechos reservados.</div>
    </footer>
  );
}