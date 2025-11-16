import React, { useEffect, useState } from 'react';

export default function DarkModeToggle() {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const t = localStorage.getItem('meraki-theme') || 'light';
    setTheme(t);
    document.documentElement.setAttribute('data-theme', t);
  }, []);

  const toggle = () => {
    const next = theme === 'light' ? 'dark' : 'light';
    setTheme(next);
    document.documentElement.setAttribute('data-theme', next);
    localStorage.setItem('meraki-theme', next);
  };

  return (
    <button className="theme-toggle" onClick={toggle} aria-label={`Cambiar a modo ${theme === 'light' ? 'nocturno' : 'claro'}`}> 
      {theme === 'light' ? '🌙' : '☀️'}
    </button>
  );
}