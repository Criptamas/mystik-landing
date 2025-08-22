import { ScrollCue } from "./ScrollCue";
import { Section } from "./Section";


export const Hero = () => {
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