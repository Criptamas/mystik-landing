export const Footer = () => (
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