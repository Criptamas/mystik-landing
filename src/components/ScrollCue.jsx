export const ScrollCue = ({ to }) => (
  <div className="mt-8 flex justify-center">
    <a
      href={to}
      className="inline-flex items-center gap-2 rounded-full border border-white/10 px-3 py-2 text-sm opacity-85 hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-red-600/30 transition"
      aria-label="Bajar a la siguiente sección"
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
        <path fillRule="evenodd" d="M12 3.75a.75.75 0 01.75.75v12.69l3.22-3.22a.75.75 0 111.06 1.06l-4.5 4.5a.75.75 0 01-1.06 0l-4.5-4.5a.75.75 0 111.06-1.06l3.22 3.22V4.5A.75.75 0 0112 3.75z" clipRule="evenodd" />
      </svg>
      <span className="hidden sm:inline">Deslizar</span>
    </a>
  </div>
);
