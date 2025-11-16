import React from 'react';

export default function Header() {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <div className="brand">
          <span className="logo">Meraki</span>
          <span className="tagline">Landing pages que convierten</span>
        </div>
        <nav className="nav">
          <a href="#features">Servicios</a>
          <a href="#pricing">Precios</a>
          <a href="#contact">Contacto</a>
        </nav>
      </div>
    </header>
  );
}