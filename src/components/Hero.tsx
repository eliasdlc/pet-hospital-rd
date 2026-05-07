"use client";

import { motion } from "framer-motion";

const ease = [0.2, 0.6, 0.2, 1] as const;

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 22 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.9, ease, delay },
});

export default function Hero() {
  return (
    <header
      id="top"
      className="relative min-h-screen flex items-center pt-[120px] pb-20 text-white overflow-hidden isolate"
    >
      {/* Background image with zoom */}
      <div
        className="absolute inset-0 -z-20 bg-cover bg-center animate-hero-zoom"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1628009368231-7bb7cfcb0def?auto=format&fit=crop&w=2000&q=80')",
          backgroundPosition: "center 35%",
        }}
        role="img"
        aria-label="Veterinaria atendiendo a un perro con cuidado"
      />
      {/* Overlay */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          background:
            "linear-gradient(180deg, rgba(13,31,60,0.55) 0%, rgba(13,31,60,0.4) 35%, rgba(13,31,60,0.78) 100%), linear-gradient(90deg, rgba(13,31,60,0.55) 0%, rgba(13,31,60,0.15) 60%)",
        }}
        aria-hidden="true"
      />

      <div className="w-[min(1200px,92vw)] mx-auto relative">
        <div className="max-w-[720px]">
          {/* Eyebrow badge */}
          <motion.span
            {...fadeUp(0.15)}
            className="inline-flex items-center gap-2.5 px-3.5 py-2 rounded-full bg-white/12 backdrop-blur-lg border border-white/18 text-[12px] tracking-[0.14em] uppercase font-semibold text-white mb-6"
          >
            <span className="relative w-2 h-2 rounded-full bg-[#2D8C6E] animate-pulse-ring" aria-hidden="true" />
            Atendiendo en Santiago, RD
          </motion.span>

          {/* Heading */}
          <motion.h1
            {...fadeUp(0.32)}
            className="font-serif font-medium leading-[0.98] tracking-[-0.025em] mb-6 block"
            style={{ fontSize: "clamp(48px, 8vw, 104px)" }}
          >
            Pet Hospital{" "}
            <span className="italic font-normal" style={{ color: "#B8E0CF" }}>RD</span>
          </motion.h1>

          {/* Tagline */}
          <motion.p
            {...fadeUp(0.48)}
            className="font-serif italic font-normal text-white/90 mb-10"
            style={{ fontSize: "clamp(20px, 2.4vw, 28px)", lineHeight: 1.35, maxWidth: 540 }}
          >
            &ldquo;Sanamos con amor y responsabilidad.&rdquo;
          </motion.p>

          {/* CTAs */}
          <motion.div
            {...fadeUp(0.65)}
            className="flex gap-3.5 flex-wrap items-center"
          >
            <a
              href="#contacto"
              className="inline-flex items-center gap-2.5 px-6 py-4 rounded-full font-semibold text-[15px] tracking-[-0.005em] bg-[#2D8C6E] text-white transition-all duration-200 hover:bg-[#226B54] hover:-translate-y-0.5 group"
              style={{ boxShadow: "0 8px 24px -10px rgba(45,140,110,0.7), inset 0 1px 0 rgba(255,255,255,0.2)" }}
            >
              Agenda tu cita
              <svg className="group-hover:translate-x-1 transition-transform duration-200" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14"/><path d="m13 5 7 7-7 7"/>
              </svg>
            </a>
            <a
              href="https://wa.me/18098502143"
              target="_blank"
              rel="noopener"
              className="inline-flex items-center gap-2.5 px-6 py-4 rounded-full font-semibold text-[15px] bg-white/10 text-white border border-white/30 backdrop-blur-lg hover:bg-white/18 hover:-translate-y-0.5 transition-all duration-200"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.5 14.4c-.3-.1-1.7-.8-2-.9-.3-.1-.5-.1-.7.1-.2.3-.7.9-.9 1.1-.2.2-.3.2-.6.1-.3-.1-1.2-.5-2.4-1.5-.9-.8-1.5-1.7-1.6-2-.2-.3 0-.5.1-.6.1-.1.3-.3.4-.5.1-.2.2-.3.3-.5.1-.2 0-.4 0-.5-.1-.1-.7-1.6-.9-2.2-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.7.4-.3.3-1 1-1 2.4 0 1.4 1 2.8 1.2 3 .1.2 2 3.1 4.9 4.3.7.3 1.2.5 1.7.6.7.2 1.3.2 1.8.1.5-.1 1.7-.7 1.9-1.4.2-.7.2-1.2.2-1.4-.1-.1-.3-.2-.6-.3z M12 2C6.5 2 2 6.5 2 12c0 1.8.5 3.5 1.3 5L2 22l5.1-1.3c1.4.8 3.1 1.3 4.9 1.3 5.5 0 10-4.5 10-10S17.5 2 12 2z"/>
              </svg>
              Llámanos por WhatsApp
            </a>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-9 left-1/2 -translate-x-1/2 text-[11px] tracking-[0.22em] uppercase text-white/70 flex flex-col items-center gap-2.5 font-medium"
        aria-hidden="true"
      >
        <span>Desliza</span>
        <span
          className="w-px h-10 animate-scroll-line"
          style={{ background: "linear-gradient(180deg, rgba(255,255,255,0.6), rgba(255,255,255,0))" }}
        />
      </div>
    </header>
  );
}
