export const MemberCard = ({ name, role, src }) => (
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