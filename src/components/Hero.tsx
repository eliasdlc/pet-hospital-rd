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
              href="https://ig.me/m/pethospitalrd"
              target="_blank"
              rel="noopener"
              className="inline-flex items-center gap-2.5 px-6 py-4 rounded-full font-semibold text-[15px] bg-white/10 text-white border border-white/30 backdrop-blur-lg hover:bg-white/18 hover:-translate-y-0.5 transition-all duration-200"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
              Escríbenos por Instagram
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
