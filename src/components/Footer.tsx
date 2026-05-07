export default function Footer() {
  return (
    <footer className="bg-[#0D1F3C] text-white/78 pt-20 pb-9">
      <div className="w-[min(1200px,92vw)] mx-auto">
        <div className="grid grid-cols-[1.4fr_1fr_1fr_1fr] max-[820px]:grid-cols-2 max-[480px]:grid-cols-1 gap-[50px] max-[820px]:gap-10 max-[480px]:gap-8 mb-[60px]">

          {/* Brand */}
          <div>
            <a href="#top" className="inline-flex items-center gap-2.5 text-white mb-4">
              <span className="w-9 h-9 rounded-xl bg-[#2D8C6E] grid place-items-center flex-shrink-0">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 21s-7.5-4.5-7.5-10.5A4.5 4.5 0 0 1 12 7a4.5 4.5 0 0 1 7.5 3.5C19.5 16.5 12 21 12 21z"/>
                  <path d="M9.5 11.5h5"/><path d="M12 9v5"/>
                </svg>
              </span>
              <span className="font-serif text-[18px] font-semibold tracking-[-0.01em] leading-none">
                Pet Hospital RD
                <small className="block font-sans text-[10px] font-medium tracking-[0.18em] uppercase mt-[3px] opacity-75">Santiago</small>
              </span>
            </a>
            <p className="font-serif italic text-[18px] text-white/85 leading-[1.45] max-w-[320px]">
              "Sanamos con amor y responsabilidad — para que tu familia esté completa."
            </p>
          </div>

          {/* Schedule */}
          <div>
            <h4 className="font-sans text-[12px] font-semibold tracking-[0.18em] uppercase text-white mb-[18px]">Horario</h4>
            <ul className="flex flex-col gap-2.5 text-sm list-none">
              <li>Lunes a Viernes</li>
              <li className="text-white/55 text-[13px]">8:00 am – 10:00 pm</li>
              <li className="mt-2">Sábados y Domingos</li>
              <li className="text-white/55 text-[13px]">Horario reducido</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-sans text-[12px] font-semibold tracking-[0.18em] uppercase text-white mb-[18px]">Contacto</h4>
            <ul className="flex flex-col gap-2.5 text-sm list-none">
              <li><a href="tel:+18098502143" className="hover:text-white transition-colors">+1 809 850 2143</a></li>
              <li><a href="https://wa.me/18098502143" target="_blank" rel="noopener" className="hover:text-white transition-colors">WhatsApp</a></li>
              <li className="text-white/55 text-[13px] mt-1.5 leading-[1.6]">Calle 3, esq. Onésimo<br/>Jiménez, Los Jardines<br/>Metropolitanos, Santiago</li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-sans text-[12px] font-semibold tracking-[0.18em] uppercase text-white mb-[18px]">Síguenos</h4>
            <ul className="flex flex-col gap-2.5 text-sm list-none mb-1.5">
              <li className="text-white/55 text-[13px]">23K en Instagram</li>
            </ul>
            <div className="flex gap-2.5 mt-1.5">
              {[
                {
                  href: "https://instagram.com/pethospitalrd",
                  label: "Instagram",
                  icon: (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="3" y="3" width="18" height="18" rx="5"/>
                      <path d="M16 11.4a4 4 0 1 1-7.9 1.2A4 4 0 0 1 16 11.4z"/>
                      <path d="M17.5 6.5h.01"/>
                    </svg>
                  ),
                },
                {
                  href: "https://facebook.com/pethospitalrd",
                  label: "Facebook",
                  icon: (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                    </svg>
                  ),
                },
                {
                  href: "https://wa.me/18098502143",
                  label: "WhatsApp",
                  icon: (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.5 14.4c-.3-.1-1.7-.8-2-.9-.3-.1-.5-.1-.7.1-.2.3-.7.9-.9 1.1-.2.2-.3.2-.6.1-.3-.1-1.2-.5-2.4-1.5-.9-.8-1.5-1.7-1.6-2-.2-.3 0-.5.1-.6.1-.1.3-.3.4-.5.1-.2.2-.3.3-.5.1-.2 0-.4 0-.5-.1-.1-.7-1.6-.9-2.2-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.7.4-.3.3-1 1-1 2.4 0 1.4 1 2.8 1.2 3 .1.2 2 3.1 4.9 4.3.7.3 1.2.5 1.7.6.7.2 1.3.2 1.8.1.5-.1 1.7-.7 1.9-1.4.2-.7.2-1.2.2-1.4-.1-.1-.3-.2-.6-.3z M12 2C6.5 2 2 6.5 2 12c0 1.8.5 3.5 1.3 5L2 22l5.1-1.3c1.4.8 3.1 1.3 4.9 1.3 5.5 0 10-4.5 10-10S17.5 2 12 2z"/>
                    </svg>
                  ),
                },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener"
                  aria-label={s.label}
                  className="w-10 h-10 rounded-[10px] border border-white/15 grid place-items-center hover:bg-[#2D8C6E] hover:border-[#2D8C6E] hover:-translate-y-0.5 transition-all duration-200"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-7 flex justify-between flex-wrap gap-3.5 text-[12px] text-white/50">
          <span>© 2026 Pet Hospital RD · Santiago, República Dominicana</span>
          <span>Sanamos con amor y responsabilidad.</span>
        </div>
      </div>
    </footer>
  );
}
