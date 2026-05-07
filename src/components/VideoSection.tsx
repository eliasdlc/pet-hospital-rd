"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";

export default function VideoSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-8% 0px" });
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(true);
    setTimeout(() => setClicked(false), 300);
  };

  return (
    <section id="video" ref={ref} className="bg-[#FAF9F6] py-[clamp(80px,10vw,130px)]">
      <div className="w-[min(1200px,92vw)] mx-auto">
        {/* Head */}
        <div className="text-center mb-14 flex flex-col items-center gap-3.5">
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.2, 0.6, 0.2, 1] }}
            className="text-[12px] tracking-[0.18em] uppercase font-semibold text-[#2D8C6E]"
          >
            Una vuelta por la casa
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.08, ease: [0.2, 0.6, 0.2, 1] }}
            className="font-serif font-medium tracking-[-0.015em] text-[#0D1F3C]"
            style={{ fontSize: "clamp(36px, 4.5vw, 56px)", lineHeight: 1.05 }}
          >
            Conoce nuestro espacio
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.16, ease: [0.2, 0.6, 0.2, 1] }}
            className="text-[#5A6478] max-w-[520px] text-[17px]"
          >
            Un recorrido corto por la clínica, la sala de peluquería y el pet shop — para que llegues sintiéndote en confianza.
          </motion.p>
        </div>

        {/* Video frame */}
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, delay: 0.08, ease: [0.2, 0.6, 0.2, 1] }}
          onClick={handleClick}
          animate-style={clicked ? { scale: 0.985 } : { scale: 1 }}
          className="relative rounded-3xl overflow-hidden aspect-video bg-[#0D1F3C] cursor-pointer group"
          style={{
            boxShadow: "0 30px 80px -40px rgba(13,31,60,0.45), inset 0 1px 0 rgba(255,255,255,0.6)",
            transform: clicked ? "scale(0.985)" : "scale(1)",
            transition: "transform 0.3s ease",
          }}
          role="button"
          tabIndex={0}
          aria-label="Reproducir video de Pet Hospital RD"
          onKeyDown={(e) => e.key === "Enter" && handleClick()}
        >
          {/* Gradient overlay */}
          <div
            className="absolute inset-0 z-10 pointer-events-none"
            style={{ background: "linear-gradient(180deg, rgba(13,31,60,0) 40%, rgba(13,31,60,0.55) 100%)" }}
          />

          {/* Thumbnail */}
          <Image
            src="https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&w=1800&q=80"
            alt="Espacio de Pet Hospital RD"
            fill
            sizes="(max-width: 1200px) 92vw, 1200px"
            className="object-cover scale-[1.02] group-hover:scale-[1.06] transition-transform duration-700"
            priority={false}
          />

          {/* Play button */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 rounded-full bg-white grid place-items-center z-20 group-hover:scale-110 transition-all duration-300 shadow-[0_14px_40px_-10px_rgba(0,0,0,0.5)] animate-ring">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor" className="text-[#0D1F3C] ml-1">
              <path d="M8 5v14l11-7z"/>
            </svg>
          </div>

          {/* Tag */}
          <div className="absolute bottom-6 left-6 z-20 flex items-center gap-3 text-white text-[13px] font-medium tracking-[0.01em]">
            <span className="bg-white/18 backdrop-blur-lg px-3 py-1.5 rounded-full text-[12px] font-semibold tracking-[0.06em]">
              2:14
            </span>
            <span>Recorrido por Pet Hospital RD</span>
          </div>
        </motion.div>

        {/* Address */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.2, 0.6, 0.2, 1] }}
          className="mt-7 text-center"
        >
          <p className="text-[15px] text-[#0D1F3C] inline-flex items-center gap-2.5 justify-center">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#2D8C6E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 21s-7-5.5-7-11a7 7 0 1 1 14 0c0 5.5-7 11-7 11z"/>
              <circle cx="12" cy="10" r="2.5"/>
            </svg>
            Visítanos en <strong className="font-semibold">Calle 3, esq. Onésimo Jiménez,</strong> Los Jardines Metropolitanos, Santiago.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
