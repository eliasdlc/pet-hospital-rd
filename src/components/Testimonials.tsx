"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const PawIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <circle cx="6" cy="9" r="2"/>
    <circle cx="10.5" cy="6" r="2"/>
    <circle cx="13.5" cy="6" r="2"/>
    <circle cx="18" cy="9" r="2"/>
    <path d="M12 11c-3 0-5 3-5 5.5 0 1.5 1.2 2.5 2.5 2.5.8 0 1.5-.4 2.5-.4s1.7.4 2.5.4c1.3 0 2.5-1 2.5-2.5C17 14 15 11 12 11z"/>
  </svg>
);

const testimonials = [
  {
    text: "Llegué un domingo en la noche con Coco vomitando y asustada. Me atendieron en minutos y al otro día ya estaba comiendo. La calma con la que me explicaron todo no la encontré en ningún otro lado.",
    name: "Mariela Rodríguez",
    pet: "— mamá de Coco, schnauzer",
    dark: false,
  },
  {
    text: "Mis dos gatos van desde gatitos. Vacunas, peluquería, todo. La doctora se acuerda de los nombres y hasta del carácter de cada uno. Eso ya no se ve.",
    name: "Luis Antonio Pérez",
    pet: "— papá de Lino y Olivia",
    dark: true,
  },
  {
    text: "Confié en ellos para la cirugía de mi pug y todo salió perfecto. El seguimiento después fue lo que más me marcó — me llamaron tres días seguidos a preguntar.",
    name: "Carolina Espinal",
    pet: "— mamá de Tomate, pug",
    dark: false,
  },
];

export default function Testimonials() {
  const headRef = useRef(null);
  const headInView = useInView(headRef, { once: true, margin: "-8% 0px" });

  return (
    <section id="testimonios" className="bg-white py-[clamp(80px,10vw,130px)]">
      <div className="w-[min(1200px,92vw)] mx-auto">
        <div ref={headRef} className="mb-[60px] max-w-[720px]">
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            animate={headInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.2, 0.6, 0.2, 1] }}
            className="text-[12px] tracking-[0.18em] uppercase font-semibold text-[#2D8C6E]"
          >
            Familias que confían
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            animate={headInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.08, ease: [0.2, 0.6, 0.2, 1] }}
            className="font-serif font-medium tracking-[-0.015em] text-[#0D1F3C] mt-4"
            style={{ fontSize: "clamp(36px, 4.5vw, 56px)", lineHeight: 1.05 }}
          >
            Más que clientes —{" "}
            <em className="italic font-normal text-[#2D8C6E]">familia.</em>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={headInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.16, ease: [0.2, 0.6, 0.2, 1] }}
            className="text-[#5A6478] text-[17px] mt-[18px] max-w-[540px]"
          >
            Casi 23,000 dueños nos siguen y nos visitan. Estas son tres historias de las muchas que pasan por nuestra puerta.
          </motion.p>
        </div>

        <div className="grid grid-cols-3 max-[900px]:grid-cols-1 gap-6">
          {testimonials.map((t, i) => (
            <TestimonialCard key={i} t={t} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function TestimonialCard({ t, index }: { t: typeof testimonials[0]; index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-8% 0px" });

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 22 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.9, delay: index * 0.08, ease: [0.2, 0.6, 0.2, 1] }}
      className={`rounded-[22px] p-9 pb-8 relative flex flex-col gap-6 transition-transform duration-300 hover:-translate-y-[3px] border ${
        t.dark
          ? "bg-[#0D1F3C] text-white border-[#0D1F3C]"
          : "bg-[#FAF9F6] border-[#E6E2DA]"
      }`}
    >
      {/* Quote mark */}
      <span
        className={`font-serif italic leading-[0.6] h-7 select-none ${t.dark ? "text-[rgba(184,224,207,0.4)]" : "text-[#D9D4C8]"}`}
        style={{ fontSize: 80 }}
        aria-hidden="true"
      >
        "
      </span>

      {/* Quote text */}
      <p className={`font-serif text-[19px] leading-[1.45] flex-1 ${t.dark ? "text-white" : "text-[#0D1F3C]"}`}>
        {t.text}
      </p>

      {/* Meta */}
      <div className={`flex items-center gap-3 pt-5 border-t ${t.dark ? "border-white/12" : "border-[rgba(13,31,60,0.08)]"}`}>
        <PawIcon className={`w-7 h-7 flex-shrink-0 ${t.dark ? "text-[#B8E0CF]" : "text-[#2D8C6E]"}`} />
        <div className="flex flex-col gap-0.5">
          <span className={`text-sm font-semibold tracking-[-0.005em] ${t.dark ? "text-white" : "text-[#0D1F3C]"}`}>
            {t.name}
          </span>
          <span className={`text-[13px] font-serif italic ${t.dark ? "text-white/65" : "text-[#5A6478]"}`}>
            {t.pet}
          </span>
        </div>
      </div>
    </motion.article>
  );
}
