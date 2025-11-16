import React, { useState } from 'react';

export default function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', budget: '', message: '' });
  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(false);

  const handle = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const submit = async (e) => {
    e.preventDefault();
    setStatus(null);
    setLoading(true);

    try {
      // Using Formspree (option chosen) - replace FORM_ID in .env
      const formId = process.env.REACT_APP_FORMSPREE_ID || '';
      if (!formId) {
        setStatus({ ok: false, message: 'Formspree no configurado. Añade REACT_APP_FORMSPREE_ID en .env.' });
        setLoading(false);
        return;
      }
      const endpoint = `https://formspree.io/f/${formId}`;
      const res = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: form.name, email: form.email, message: form.message, budget: form.budget })
      });
      if (res.ok) {
        setStatus({ ok: true, message: 'Mensaje enviado. Te responderemos pronto.' });
        setForm({ name: '', email: '', budget: '', message: '' });
      } else {
        const json = await res.json();
        setStatus({ ok: false, message: json.error || 'Error enviando el mensaje.' });
      }
    } catch (err) {
      setStatus({ ok: false, message: 'Error de red.' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={submit} style={{ maxWidth: 420, display: 'grid', gap: 8 }}>
      <input name="name" required value={form.name} onChange={handle} placeholder="Tu nombre" />
      <input name="email" type="email" required value={form.email} onChange={handle} placeholder="Tu email" />
      <input name="budget" value={form.budget} onChange={handle} placeholder="Presupuesto (opcional)" />
      <textarea name="message" required value={form.message} onChange={handle} placeholder="Cuéntame tu proyecto..." rows={4} />
      <div style={{ display: 'flex', gap: 8 }}>
        <button className="btn primary large" type="submit" disabled={loading}>{loading ? 'Enviando…' : 'Enviar mensaje'}</button>
        <a className="btn outline large" href={`mailto:${process.env.REACT_APP_CONTACT_EMAIL || 'info@tu-dominio.com'}`}>Email</a>
      </div>

      {status && (
        <div role="status" style={{ marginTop: 8, color: status.ok ? 'green' : 'crimson' }}>{status.message}</div>
      )}
    </form>
  );
}