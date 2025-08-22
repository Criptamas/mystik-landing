import React, { useEffect } from "react";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Members } from "./components/Members";
import { Events } from "./components/Events";
import { Footer } from "./components/Footer";

export default function App() {
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
