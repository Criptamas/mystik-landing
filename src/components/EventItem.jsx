export const EventItem = ({ date, place, city, status }) => (
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