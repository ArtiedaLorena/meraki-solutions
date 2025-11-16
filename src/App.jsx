import React, { useEffect } from 'react';
import { HelmetProvider, Helmet } from 'react-helmet-async';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import CTA from './components/CTA';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import DarkModeToggle from './components/DarkModeToggle';

function App() {
  useEffect(() => {
    const theme = localStorage.getItem('meraki-theme') || 'light';
    document.documentElement.setAttribute('data-theme', theme);
  }, []);

  return (
    <HelmetProvider>
      <div className="app">
        <Helmet>
          <html lang="es" />
          <title>Meraki — Landing pages responsive que convierten</title>
          <meta name="description" content="Meraki crea landing pages responsive, optimizadas para SEO y conversión. Sitios rápidos, modernos y adaptados a móviles. ¡Hablemos por WhatsApp!" />
        </Helmet>

        <Header />
        <main>
          <Hero />
          <Features />
          <CTA />
        </main>
        <Footer />
        <WhatsAppButton phone={process.env.REACT_APP_WHATSAPP_PHONE || '+34123456789'} />
        <DarkModeToggle />
      </div>
    </HelmetProvider>
  );
}

export default App;