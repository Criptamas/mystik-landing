import { EventItem } from "./EventItem";
import { Section } from "./Section";
import { ScrollCue } from "./ScrollCue";



export const Events = () => (
  <Section id="events">
    <div className="mx-auto max-w-6xl">
      <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-center">Eventos</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div>
          <h3 className="mb-3 font-semibold tracking-wide">Realizados</h3>
          <ul className="space-y-3">
            <EventItem date="Julio 31, 2025" place="Hoyo 19 - Club de Golf" city="Comunidad Cardon" status="Confirmado" />
            <EventItem date="Agosto 9, 2025" place="Hoyo 19 - Club de Golf" city="Punto Fijo" status="Confirmado" />
          </ul>
        </div>

        <div>
          <h3 className="mb-3 font-semibold tracking-wide">Próximos</h3>
          <ul className="space-y-3">
            <EventItem date="Agosto 30, 2025" place="Virtudes - Ciudad Comercial" city="Comunidad Cardon" status="Confirmado" />
          </ul>
        </div>
      </div>
    </div>
    <ScrollCue to="#contact" />
  </Section>
);