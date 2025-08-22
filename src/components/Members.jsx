import { ScrollCue } from "./ScrollCue";
import { Section } from "./Section";
import { MemberCard } from './MemberCard'

export const Members = () => (
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