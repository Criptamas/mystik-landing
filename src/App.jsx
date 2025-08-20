// App.jsx — Mystik Landing (rock/metal styling, header centrado y difuminado)
// Requisitos: header centrado 100% con fondo redondeado/difuminado, tipografía rockera,
// títulos centrados, miembros apilados en mobile, acentos dark/agresivos, transiciones suaves.

import React, { useEffect, useState } from "react";

const Section = ({ id, children }) => (
  <section id={id} className="relative w-full px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
    {children}
  </section>
);

const ScrollCue = ({ to }) => (
  <div className="mt-8 flex justify-center">
    <a
      href={to}
      className="inline-flex items-center gap-2 rounded-full border border-white/10 px-3 py-2 text-sm opacity-85 hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-red-600/30 transition"
      aria-label="Bajar a la siguiente sección"
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
        <path fillRule="evenodd" d="M12 3.75a.75.75 0 01.75.75v12.69l3.22-3.22a.75.75 0 111.06 1.06l-4.5 4.5a.75.75 0 01-1.06 0l-4.5-4.5a.75.75 0 111.06-1.06l3.22 3.22V4.5A.75.75 0 0112 3.75z" clipRule="evenodd" />
      </svg>
      <span className="hidden sm:inline">Sigue bajando</span>
    </a>
  </div>
);

const Header = () => {
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

const Hero = () => {
  return (
    <Section id="hero">
      <div
        className="relative group h-[68vh] sm:h-[78vh] rounded-xl overflow-hidden shadow-inner"
        style={{
          backgroundImage: "url('./images/hero.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* dark vignette + rojo sutil al hover */}
        <div className="absolute inset-0 bg-black/30 transition-opacity duration-400 group-hover:bg-black/65" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/20 pointer-events-none" />

        <div className="relative z-10 h-full w-full flex items-center justify-center text-center px-4">
          <h1 className="text-5xl sm:text-5xl md:text-6xl font-extrabold tracking-tight" style={{ fontFamily: "'Metal Mania', impact, sans-serif" }}>
            <span className="block">MYSTIK</span>
            <span className="mt-2 block text-base sm:text-xl font-medium opacity-90">— ROCKBAND —</span>
          </h1>
        </div>
      </div>
      <ScrollCue to="#about" />
    </Section>
  );
};

const About = () => (
  <Section id="about">
    <div className="mx-auto max-w-3xl text-center">
      <h2 className="text-2xl sm:text-3xl font-bold mb-4" style={{ letterSpacing: ".04em" }}>¿Qué es Mystik?</h2>
      <p className="leading-relaxed opacity-90 text-gray-300">
        Mystik es el cruce entre la nostalgia emo y la potencia moderna del dark pop; melodías que arañan la piel y letras que
        exponen heridas con honestidad. Somos atmósferas densas, riffs afilados y una vibra intensa, pero controlada — estética dark y presencia directa.
      </p>
    </div>
    <ScrollCue to="#members" />
  </Section>
);

const MemberCard = ({ name, role, src }) => (
  <article className="group flex flex-col items-center text-center p-4 rounded-lg border border-white/6 bg-gradient-to-b from-black/40 to-black/20 hover:from-black/35 hover:to-black/10 transition">
    <img
      src={src}
      alt={`${name} — ${role}`}
      className="h-28 w-28 sm:h-32 sm:w-32 md:h-36 md:w-36 rounded-full object-cover object-center mb-3 ring-1 ring-red-800/30"
      loading="lazy"
    />
    <h3 className="font-semibold tracking-wide">{name}</h3>
    <p className="text-sm opacity-80">{role}</p>
  </article>
);

const Members = () => (
  <Section id="members">
    <div className="mx-auto max-w-6xl">
      <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-center">Miembros</h2>

      {/* Mobile-first: 1 columna, luego 2, luego 3/5 según espacio */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 items-start">
        <MemberCard name="Cynthia" role="Voz" src="./images/vocalista.png" />
        <MemberCard name="David" role="Guitarra líder" src="./images/david.png" />
        <MemberCard name="Monika" role="Bajo" src="./images/monik.png" />
        <MemberCard name="Sammy" role="Batería" src="./images/baterista.png" />
        <MemberCard name="Manuel" role="Guitarra rítmico" src="./images/maneh.png" />
      </div>
    </div>
    <ScrollCue to="#events" />
  </Section>
);

const EventItem = ({ date, place, city, status }) => (
  <li className="flex items-center justify-between gap-4 py-3 px-4 rounded-lg border border-white/8 bg-gradient-to-b from-black/30 to-black/20">
    <div>
      <p className="font-medium">{place}</p>
      <p className="text-xs opacity-80">{city}</p>
    </div>
    <div className="text-right">
      <p className="text-sm opacity-90">{date}</p>
      <span className={`inline-block mt-1 text-[11px] px-2 py-0.5 rounded-full border ${
        status === "Confirmado" ? "border-emerald-400/40" : status === "Por confirmar" ? "border-amber-400/40" : "border-sky-400/40"
      }`}>{status}</span>
    </div>
  </li>
);

const Events = () => (
  <Section id="events">
    <div className="mx-auto max-w-6xl">
      <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-center">Eventos</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div>
          <h3 className="mb-3 font-semibold tracking-wide">Próximos</h3>
          <ul className="space-y-3">
            <EventItem date="Sep 14, 2025" place="Hoyo 19 - Club de Golf" city="Comunidad Cardon" status="Por confirmar" />

            <EventItem date="Oct 03, 2025" place="Virtudes Ciudad Comercial" city="Punto Fijo" status="Por confirmar" />
          </ul>
        </div>
        <div>
          <h3 className="mb-3 font-semibold tracking-wide">Realizados</h3>
          <ul className="space-y-3">
            <EventItem date="Agosto 6, 2025" place="Hoyo 19 - Club de Golf" city="Punto Fijo" status="Confirmado" />
            <EventItem date="Julio 31, 2025" place="Hoyo 19 - Club de Golf" city="Comunidad Cardon" status="Confirmado" />
          </ul>
        </div>
      </div>
    </div>
    <ScrollCue to="#contact" />
  </Section>
);

const Footer = () => (
  <footer id="contact" className="w-full border-t border-white/10 mt-16">
    <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-10">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <img src="./icons/logo.png" alt="Mystik logo" className="h-8 w-8" />
          <div>
            <p className="font-semibold">MYSTIK</p>
            <p className="text-sm opacity-80">Rock band — emo / dark pop</p>
          </div>
        </div>
        <div className="text-sm opacity-90">
          <p>Instagram: <a className="underline hover:no-underline" href="https://instagram.com/mystik_rockband" target="_blank" rel="noreferrer">@mystik_rockband</a></p>
          <p>WhatsApp: <a className="underline hover:no-underline" href="https://wa.me/584121587879" target="_blank" rel="noreferrer">+58-0412-158-7879</a></p>
          <p className="mt-2 opacity-70">© {new Date().getFullYear()} Powered by <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/criptamas/">Juan Rojas</a>.</p>
        </div>
      </div>
    </div>
  </footer>
);

export default function App() {
  // Import font + smooth scroll styles (se inyecta en head)
  useEffect(() => {
    const style = document.createElement("style");
    style.innerHTML = `
      @import url('https://fonts.googleapis.com/css2?family=Metal+Mania&display=swap');
      html { scroll-behavior: smooth; }
      body { font-family: 'Metal Mania', system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial; }
    `;
    document.head.appendChild(style);
    return () => document.head.removeChild(style);
  }, []);

  return (
    <div className="min-h-screen bg-[#070607] text-zinc-100 selection:bg-red-700/30">
      {/* Fondo sutil con acentos rojos/púrpura para mayor agresividad pero sin saturar */}
      <div aria-hidden className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full blur-3xl opacity-8 bg-red-700" />
        <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full blur-3xl opacity-8 bg-purple-700" />
      </div>

      <Header />
      <main className="pt-28">
        <Hero />
        <About />
        <Members />
        <Events />
      </main>
      <Footer />
    </div>
  );
}
