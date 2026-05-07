"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const items = [
  {
    icon: (
      <svg className="w-7 h-7 text-[#2D8C6E]" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3.5" y="6" width="21" height="16" rx="2.5"/>
        <path d="M3.5 11.5h21"/><path d="M9.5 6V3.5"/><path d="M18.5 6V3.5"/>
        <path d="M14 15.5v3"/><path d="M12.5 17h3"/>
      </svg>
    ),
    label: "Clínica · Pet Shop · Peluquería",
  },
  {
    icon: (
      <svg className="w-7 h-7 text-[#2D8C6E]" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="14" cy="14" r="10"/>
        <path d="M14 8v6l3.5 2.5"/>
      </svg>
    ),
    label: "Emergencias disponibles",
  },
  {
    icon: (
      <svg className="w-7 h-7 text-[#2D8C6E]" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 25s-8.5-7-8.5-13a8.5 8.5 0 0 1 17 0c0 6-8.5 13-8.5 13z"/>
        <circle cx="14" cy="12" r="3"/>
      </svg>
    ),
    label: "Los Jardines Metropolitanos, Santiago",
  },
  {
    icon: (
      <svg className="w-7 h-7 text-[#2D8C6E]" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 15a4 4 0 1 0 0-8 4 4 0 0 0 0 8z"/>
        <path d="M5.5 24a8.5 8.5 0 0 1 17 0"/>
      </svg>
    ),
    label: "Atención personalizada",
  },
];

export default function TrustBar() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-8% 0px" });

  return (
    <section
      ref={ref}
      className="bg-white border-t border-b border-[#E6E2DA] py-[22px]"
    >
      <div className="w-[min(1200px,92vw)] mx-auto">
        <div className="grid grid-cols-4 max-[880px]:grid-cols-2 max-[480px]:grid-cols-1 gap-4 items-center">
          {items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 12 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.08, ease: [0.2, 0.6, 0.2, 1] }}
              className={`flex items-center gap-3 text-[13px] text-[#0D1F3C] font-medium
                ${i > 0 ? "border-l border-[#E6E2DA] pl-5 max-[480px]:border-l-0 max-[480px]:pl-0 max-[480px]:pt-3 max-[480px]:border-t max-[480px]:border-[#E6E2DA]" : ""}
                ${i === 2 ? "max-[880px]:border-l-0 max-[880px]:pl-0" : ""}
              `}
            >
              {item.icon}
              <div>{item.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
