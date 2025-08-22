import { ScrollCue } from "./ScrollCue";
import { Section } from "./Section";


export const About = () => (
  <Section id="about">
    <div className="mx-auto max-w-3xl text-center">
      <h2 className="text-2xl sm:text-3xl font-bold mb-4" style={{ letterSpacing: ".04em" }}>¿Quienes somos?</h2>
      <p className="leading-relaxed opacity-90 text-gray-300">
        Mystik es el cruce entre la nostalgia emo y la potencia moderna del dark pop; melodías que arañan la piel y letras que
        exponen heridas con honestidad. Somos atmósferas densas, riffs afilados y una vibra intensa, pero controlada — estética dark y presencia directa.
      </p>
    </div>
    <ScrollCue to="#members" />
  </Section>
);