import React, { useState, useEffect } from "react";

export const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 6);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed top-4 left-0 right-0 z-50 pointer-events-auto">
      {/* Contenedor centrado con fondo difuminado y radius */}
      <div
        className={`mx-auto max-w-4xl flex flex-col sm:flex-row items-center justify-center gap-3 px-4 py-2 transition-all duration-300 
          rounded-2xl border border-white/6 bg-black/45 backdrop-blur-md ${scrolled ? "shadow-2xl scale-100" : "shadow-md" }`}
        style={{ boxShadow: "0 6px 30px rgba(0,0,0,0.6)" }}
      >
        {/* Logo */}
        <div className="flex items-center gap-3">
          
          <span className="hidden sm:inline text-base font-black tracking-widest" style={{ letterSpacing: "0.22em" }}>
            MYSTIK
          </span>
        </div>

        {/* Nav centrado: en mobile aparece en una fila debajo/arriba según espacio */}
        <nav className="w-full sm:w-auto">
          
          <ul className="flex flex-wrap justify-center gap-4 text-xs sm:text-sm">
            <li><a href="#about" className="px-2 py-1 rounded-md hover:text-red-400 transition">Sobre</a></li>
            <li><a href="#members" className="px-2 py-1 rounded-md hover:text-red-400 transition">Miembros</a></li>
            <li><a href="#events" className="px-2 py-1 rounded-md hover:text-red-400 transition">Eventos</a></li>
            <li><a href="#contact" className="px-2 py-1 rounded-md hover:text-red-400 transition">Contacto</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};