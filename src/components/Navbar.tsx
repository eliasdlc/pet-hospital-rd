"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-bone/92 backdrop-blur-[14px] backdrop-saturate-[140%] shadow-[0_1px_0_#E6E2DA] py-3"
          : "py-[18px]"
      }`}
    >
      <div className="w-[min(1200px,92vw)] mx-auto flex items-center justify-between gap-6">
        <a href="#top" className={`inline-flex items-center gap-2.5 transition-colors duration-300 ${scrolled ? "text-[#0D1F3C]" : "text-white"}`}>
          <span className="w-9 h-9 rounded-xl bg-[#2D8C6E] grid place-items-center flex-shrink-0">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 21s-7.5-4.5-7.5-10.5A4.5 4.5 0 0 1 12 7a4.5 4.5 0 0 1 7.5 3.5C19.5 16.5 12 21 12 21z"/>
              <path d="M9.5 11.5h5"/><path d="M12 9v5"/>
            </svg>
          </span>
          <span className="font-serif text-[18px] font-semibold tracking-[-0.01em] leading-none">
            Pet Hospital RD
            <small className={`block font-sans text-[10px] font-medium tracking-[0.18em] uppercase mt-[3px] ${scrolled ? "opacity-75" : "opacity-75"}`}>
              Santiago
            </small>
          </span>
        </a>

        <div className="flex items-center gap-7">
          <a
            href="#services"
            className={`hidden sm:block text-sm font-medium transition-opacity duration-200 opacity-85 hover:opacity-100 ${scrolled ? "text-[#0D1F3C]" : "text-white"}`}
          >
            Servicios
          </a>
          <a
            href="#testimonios"
            className={`hidden sm:block text-sm font-medium transition-opacity duration-200 opacity-85 hover:opacity-100 ${scrolled ? "text-[#0D1F3C]" : "text-white"}`}
          >
            Testimonios
          </a>
          <a
            href="#contacto"
            className={`hidden sm:block text-sm font-medium transition-opacity duration-200 opacity-85 hover:opacity-100 ${scrolled ? "text-[#0D1F3C]" : "text-white"}`}
          >
            Contacto
          </a>
          <a
            href="#contacto"
            className="bg-[#2D8C6E] text-white px-[18px] py-2.5 rounded-full text-[13px] font-semibold hover:bg-[#226B54] hover:-translate-y-px transition-all duration-200"
          >
            Agenda tu cita
          </a>
        </div>
      </div>
    </nav>
  );
}
