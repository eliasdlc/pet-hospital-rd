"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const services = [
  {
    num: "01",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 4v6a5 5 0 0 0 10 0V4"/>
        <path d="M14 15v4a4 4 0 0 0 8 0v-2"/>
        <circle cx="22" cy="15" r="2"/>
        <circle cx="9" cy="4" r="1.2" fill="currentColor"/>
        <circle cx="19" cy="4" r="1.2" fill="currentColor"/>
      </svg>
    ),
    name: "Consulta veterinaria",
    desc: "Chequeos generales, vacunación, control de peso y seguimiento de salud para perros y gatos.",
    cta: "Ver detalles",
  },
  {
    num: "02",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <path d="M5 8c2 0 3 1.5 3 3.5"/>
        <path d="M5 8c-1 1-1 3 0 4l3-1"/>
        <path d="M14 6c2 4 8 4 8 8 0 4-3 7-8 7s-8-3-8-7c0-2 1.5-3.5 3-4.5"/>
        <path d="M11 16c1.5 1 3.5 1 5 0"/>
        <circle cx="11" cy="13" r=".8" fill="currentColor"/>
        <circle cx="16" cy="13" r=".8" fill="currentColor"/>
      </svg>
    ),
    name: "Peluquería canina",
    desc: "Baño, corte de raza, cepillado profundo y cuidado de oídos y uñas. Tu peludo sale brillante.",
    cta: "Ver detalles",
  },
  {
    num: "03",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <path d="M5 9h18l-1.5 12a2 2 0 0 1-2 1.7H8.5a2 2 0 0 1-2-1.7L5 9z"/>
        <path d="M9.5 9V6a4.5 4.5 0 0 1 9 0v3"/>
        <path d="M11 14v3"/><path d="M17 14v3"/>
      </svg>
    ),
    name: "Pet Shop",
    desc: "Alimento premium, accesorios, juguetes y productos de cuidado — seleccionado por veterinarios.",
    cta: "Ver productos",
  },
  {
    num: "04",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 4 5 9v6c0 5 4 8.5 9 9.5 5-1 9-4.5 9-9.5V9l-9-5z"/>
        <path d="M14 11v6"/><path d="M11 14h6"/>
      </svg>
    ),
    name: "Emergencias",
    desc: "Atención prioritaria cuando más se necesita. Llámanos antes de venir y te recibimos listos.",
    cta: "Llamar ahora",
  },
];

function ServiceCard({ service, index }: { service: typeof services[0]; index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-8% 0px" });

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 22 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.9, delay: index * 0.08, ease: [0.2, 0.6, 0.2, 1] }}
      className="bg-white border border-[#E6E2DA] rounded-[18px] p-7 flex flex-col gap-4 relative transition-all duration-300 ease-[cubic-bezier(.2,.6,.2,1)] hover:-translate-y-1 hover:shadow-[0_18px_40px_-22px_rgba(13,31,60,0.25)] hover:border-[#D9D4C8] min-h-[280px] group shadow-[0_1px_2px_rgba(13,31,60,0.04)]"
    >
      <span className="absolute top-6 right-6 font-serif italic text-[14px] text-[#C7C2B5] font-normal">
        {service.num}
      </span>
      <div className="w-14 h-14 rounded-[14px] bg-[#E7F1ED] text-[#226B54] grid place-items-center transition-all duration-300 ease-[cubic-bezier(.2,.6,.2,1)] group-hover:bg-[#2D8C6E] group-hover:text-white group-hover:rotate-[-4deg] group-hover:scale-105">
        {service.icon}
      </div>
      <h3 className="font-serif text-[24px] font-medium tracking-[-0.015em] text-[#0D1F3C] leading-[1.15]">
        {service.name}
      </h3>
      <p className="text-sm text-[#5A6478] leading-[1.55] -mt-1.5">
        {service.desc}
      </p>
      <span className="mt-auto pt-3.5 text-[13px] font-semibold text-[#226B54] inline-flex items-center gap-1.5 tracking-[0.005em]">
        {service.cta}{" "}
        <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
      </span>
    </motion.article>
  );
}

export default function Services() {
  const headRef = useRef(null);
  const headInView = useInView(headRef, { once: true, margin: "-8% 0px" });

  return (
    <section id="services" className="bg-[#F4F2EE] py-[clamp(80px,10vw,130px)]">
      <div className="w-[min(1200px,92vw)] mx-auto">
        <div
          ref={headRef}
          className="grid grid-cols-[1.1fr_1fr] max-[760px]:grid-cols-1 gap-[60px] max-[760px]:gap-6 items-end mb-16 max-[760px]:mb-11"
        >
          <div>
            <motion.span
              initial={{ opacity: 0, y: 16 }}
              animate={headInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, ease: [0.2, 0.6, 0.2, 1] }}
              className="text-[12px] tracking-[0.18em] uppercase font-semibold text-[#2D8C6E] font-sans"
            >
              Lo que hacemos
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              animate={headInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.9, delay: 0.08, ease: [0.2, 0.6, 0.2, 1] }}
              className="font-serif font-medium tracking-[-0.015em] text-[#0D1F3C] mt-4"
              style={{ fontSize: "clamp(36px, 4.5vw, 56px)", lineHeight: 1.05 }}
            >
              Cuidado integral,{" "}
              <em className="italic font-normal text-[#2D8C6E]">bajo un mismo techo.</em>
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={headInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.16, ease: [0.2, 0.6, 0.2, 1] }}
            className="text-[#5A6478] text-[17px] leading-[1.6] max-w-[460px] ml-auto max-[760px]:ml-0"
          >
            Desde una consulta de rutina hasta una emergencia a las 9pm — tu mascota recibe atención completa, sin tener que salir corriendo a otro lado.
          </motion.p>
        </div>

        <div className="grid grid-cols-4 max-[1000px]:grid-cols-2 max-[540px]:grid-cols-1 gap-5">
          {services.map((s, i) => (
            <ServiceCard key={i} service={s} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
