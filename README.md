# Meraki — Landing Page (React - CRA)

Plantilla de landing page responsive para vender páginas web (Landing pages). Incluye:
- Modo claro / nocturno con persistencia.
- Integración con Formspree para formulario sin backend.
- SEO básico (react-helmet-async meta tags).
- Botón flotante de WhatsApp y CTAs.
- Componentes modernos y responsive.

Instalación:
1. Clona el repositorio
2. npm install
3. Copia .env.example a .env.local y rellena REACT_APP_FORMSPREE_ID y otros valores
4. npm start

Producción:
npm run build
serve -s build

Personaliza:
- Reemplaza REACT_APP_WHATSAPP_PHONE y REACT_APP_CONTACT_EMAIL en .env.local
- Cambia textos e imágenes en src/components

Licencia: MIT