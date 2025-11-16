import React from 'react';
import ContactForm from './ContactForm';

export default function CTA() {
  return (
    <section className="cta container" id="contact">
      <div className="cta-inner">
        <div>
          <h2>Listo para aumentar tus conversiones?</h2>
          <p>Cuéntanos tu proyecto y te damos una propuesta en 48 horas.</p>
        </div>
        <div className="cta-actions">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}