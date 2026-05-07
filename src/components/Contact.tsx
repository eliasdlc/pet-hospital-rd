"use client";

import React, { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

type PetType = "Perro" | "Gato" | "Otro";

const DogIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-[18px] h-[18px]">
    <path d="M4 9c0-2 1-4 3-4l2 3"/>
    <path d="M20 9c0-2-1-4-3-4l-2 3"/>
    <path d="M6 13c0 4 3 7 6 7s6-3 6-7"/>
    <circle cx="9.5" cy="11" r=".8" fill="currentColor"/>
    <circle cx="14.5" cy="11" r=".8" fill="currentColor"/>
    <path d="M11 14h2"/>
  </svg>
);

const CatIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-[18px] h-[18px]">
    <path d="M5 5l3 4"/>
    <path d="M19 5l-3 4"/>
    <path d="M6 13c0 4 2.5 7 6 7s6-3 6-7-2.5-6-6-6-6 2-6 6z"/>
    <circle cx="9.5" cy="12" r=".8" fill="currentColor"/>
    <circle cx="14.5" cy="12" r=".8" fill="currentColor"/>
    <path d="M11 15c.5.4 1.5.4 2 0"/>
  </svg>
);

const PawIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-[18px] h-[18px]">
    <circle cx="6" cy="9" r="2"/>
    <circle cx="10.5" cy="6" r="2"/>
    <circle cx="13.5" cy="6" r="2"/>
    <circle cx="18" cy="9" r="2"/>
    <path d="M12 11c-3 0-5 3-5 5.5 0 1.5 1.2 2.5 2.5 2.5.8 0 1.5-.4 2.5-.4s1.7.4 2.5.4c1.3 0 2.5-1 2.5-2.5C17 14 15 11 12 11z"/>
  </svg>
);

const petOptions: { value: PetType; label: string; Icon: () => React.ReactElement }[] = [
  { value: "Perro", label: "Perro", Icon: DogIcon },
  { value: "Gato", label: "Gato", Icon: CatIcon },
  { value: "Otro", label: "Otro", Icon: PawIcon },
];

export default function Contact() {
  const sideRef = useRef(null);
  const sideInView = useInView(sideRef, { once: true, margin: "-8% 0px" });
  const formRef = useRef(null);
  const formInView = useInView(formRef, { once: true, margin: "-8% 0px" });

  const [petType, setPetType] = useState<PetType>("Perro");
  const [fname, setFname] = useState("");
  const [pname, setPname] = useState("");
  const [reason, setReason] = useState("");
  const [errors, setErrors] = useState<Record<string, boolean>>({});
  const [copied, setCopied] = useState(false);

  // Build the message template from current form values (used for live preview & clipboard).
  const buildMessage = () =>
    `¡Hola Pet Hospital RD! 👋\n\nSoy ${fname || "[tu nombre]"} y quisiera agendar una cita.\n\n🐾 Mascota: ${pname || "[nombre mascota]"} (${petType})\n📋 Motivo: ${reason || "[motivo de consulta]"}\n\n¡Gracias!`;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: Record<string, boolean> = {};
    if (!fname.trim()) newErrors.fname = true;
    if (!pname.trim()) newErrors.pname = true;
    if (!reason.trim()) newErrors.reason = true;

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // Copy the formatted message so the client can paste it directly into Instagram DM.
    try {
      await navigator.clipboard.writeText(buildMessage());
    } catch {
      // Clipboard API not available (e.g. non-secure context) — proceed anyway.
    }

    setCopied(true);
    // Small delay so the success state is visible before the tab switches.
    setTimeout(() => {
      window.open("https://ig.me/m/pethospitalrd", "_blank");
      setTimeout(() => setCopied(false), 3000);
    }, 350);
  };

  const clearError = (field: string) => {
    if (errors[field]) setErrors((e) => ({ ...e, [field]: false }));
  };

  return (
    <section id="contacto" className="bg-[#F6F2EA] py-[clamp(80px,10vw,130px)]">
      <div className="w-[min(1200px,92vw)] mx-auto">
        <div className="grid grid-cols-[1fr_1.15fr] max-[900px]:grid-cols-1 gap-20 max-[900px]:gap-12 items-start">

          {/* Left side */}
          <div ref={sideRef}>
            <motion.span
              initial={{ opacity: 0, y: 16 }}
              animate={sideInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, ease: [0.2, 0.6, 0.2, 1] }}
              className="text-[12px] tracking-[0.18em] uppercase font-semibold text-[#2D8C6E]"
            >
              Estamos aquí
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              animate={sideInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.9, delay: 0.08, ease: [0.2, 0.6, 0.2, 1] }}
              className="font-serif font-medium tracking-[-0.015em] text-[#0D1F3C] mt-4 mb-[22px]"
              style={{ fontSize: "clamp(36px, 4.5vw, 56px)", lineHeight: 1.05 }}
            >
              Agenda tu cita o{" "}
              <em className="italic font-normal text-[#2D8C6E]">escríbenos.</em>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={sideInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.9, delay: 0.16, ease: [0.2, 0.6, 0.2, 1] }}
              className="text-[#5A6478] text-[17px] leading-[1.6] mb-8 max-w-[440px]"
            >
              Llena el formulario y presiona el botón — tu mensaje se{" "}
              <strong className="text-[#0D1F3C]">copia automáticamente</strong> al portapapeles.
              Solo ábrelo en Instagram y pégalo. ¡Listo!
            </motion.p>

            {/* Live message preview */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={sideInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.26, ease: [0.2, 0.6, 0.2, 1] }}
              className="bg-white border border-[#E6E2DA] rounded-2xl p-5 mb-6"
              style={{ boxShadow: "0 4px 20px -8px rgba(13,31,60,0.12)" }}
            >
              <p className="text-[11px] tracking-[0.16em] uppercase font-semibold text-[#2D8C6E] mb-3">Vista previa del mensaje</p>
              <div className="bg-[#FAF9F6] rounded-xl p-4 text-[14px] text-[#0D1F3C] leading-[1.7] whitespace-pre-wrap font-mono">
                {buildMessage()}
              </div>
            </motion.div>

            {/* Contact info row */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={sideInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.36, ease: [0.2, 0.6, 0.2, 1] }}
              className="flex flex-col gap-3"
            >
              <a
                href="tel:+18098502143"
                className="flex gap-3 items-center text-[14px] text-[#0D1F3C] hover:text-[#226B54] transition-colors"
              >
                <span className="w-9 h-9 rounded-lg bg-white border border-[#E6E2DA] grid place-items-center flex-shrink-0 text-[#2D8C6E]">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                </span>
                <span><strong className="font-semibold">809 850 2143</strong> <span className="text-[#5A6478]">· Emergencias</span></span>
              </a>
              <div className="flex gap-3 items-center text-[14px] text-[#5A6478]">
                <span className="w-9 h-9 rounded-lg bg-white border border-[#E6E2DA] grid place-items-center flex-shrink-0 text-[#2D8C6E]">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 21s-7-5.5-7-11a7 7 0 1 1 14 0c0 5.5-7 11-7 11z"/><circle cx="12" cy="10" r="2.5"/></svg>
                </span>
                <span>Calle 3, esq. Onésimo Jiménez, Los Jardines Metropolitanos</span>
              </div>
            </motion.div>
          </div>

          {/* Form */}
          <motion.form
            ref={formRef}
            initial={{ opacity: 0, y: 22 }}
            animate={formInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.16, ease: [0.2, 0.6, 0.2, 1] }}
            onSubmit={handleSubmit}
            noValidate
            className="bg-white rounded-3xl p-10 max-[540px]:p-7 border border-[#E6E2DA]"
            style={{ boxShadow: "0 30px 80px -50px rgba(13,31,60,0.4)" }}
          >
            {/* Name row */}
            <div className="grid grid-cols-2 max-[540px]:grid-cols-1 gap-[18px] mb-[18px]">
              <div className="flex flex-col gap-2">
                <label htmlFor="fname" className="text-[12px] tracking-[0.08em] uppercase font-semibold text-[#0D1F3C]">
                  Tu nombre
                </label>
                <input
                  id="fname"
                  type="text"
                  placeholder="Ej. María Fernández"
                  value={fname}
                  onChange={(e) => { setFname(e.target.value); clearError("fname"); }}
                  className={`font-sans text-[15px] text-[#0D1F3C] bg-[#FAF9F6] border rounded-xl px-4 py-3.5 w-full transition-all duration-200 outline-none focus:border-[#2D8C6E] focus:bg-white focus:shadow-[0_0_0_4px_rgba(45,140,110,0.12)] ${errors.fname ? "border-red-400 shadow-[0_0_0_4px_rgba(196,68,68,0.1)]" : "border-[#E6E2DA]"}`}
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="pname" className="text-[12px] tracking-[0.08em] uppercase font-semibold text-[#0D1F3C]">
                  Nombre de tu mascota
                </label>
                <input
                  id="pname"
                  type="text"
                  placeholder="Ej. Luna"
                  value={pname}
                  onChange={(e) => { setPname(e.target.value); clearError("pname"); }}
                  className={`font-sans text-[15px] text-[#0D1F3C] bg-[#FAF9F6] border rounded-xl px-4 py-3.5 w-full transition-all duration-200 outline-none focus:border-[#2D8C6E] focus:bg-white focus:shadow-[0_0_0_4px_rgba(45,140,110,0.12)] ${errors.pname ? "border-red-400 shadow-[0_0_0_4px_rgba(196,68,68,0.1)]" : "border-[#E6E2DA]"}`}
                />
              </div>
            </div>

            {/* Pet type toggle */}
            <div className="flex flex-col gap-2 mb-[18px]">
              <span className="text-[12px] tracking-[0.08em] uppercase font-semibold text-[#0D1F3C]">
                Tipo de mascota
              </span>
              <div
                className="grid grid-cols-3 gap-2 bg-[#FAF9F6] border border-[#E6E2DA] rounded-xl p-1"
                role="radiogroup"
                aria-label="Tipo de mascota"
              >
                {petOptions.map(({ value, label, Icon }) => (
                  <button
                    key={value}
                    type="button"
                    role="radio"
                    aria-checked={petType === value}
                    onClick={() => setPetType(value)}
                    className={`py-2.5 px-3 rounded-[9px] text-[14px] font-medium inline-flex items-center justify-center gap-2 cursor-pointer transition-all duration-200 ${
                      petType === value
                        ? "bg-white text-[#0D1F3C] shadow-[0_1px_3px_rgba(13,31,60,0.08),0_0_0_1px_#E6E2DA]"
                        : "text-[#5A6478] hover:text-[#0D1F3C]"
                    }`}
                  >
                    <Icon />
                    {label}
                  </button>
                ))}
              </div>
            </div>

            {/* Reason */}
            <div className="flex flex-col gap-2 mb-[18px]">
              <label htmlFor="reason" className="text-[12px] tracking-[0.08em] uppercase font-semibold text-[#0D1F3C]">
                Motivo de consulta
              </label>
              <textarea
                id="reason"
                placeholder="Cuéntanos qué necesita tu mascota — chequeo, vacuna, peluquería, alguna molestia..."
                value={reason}
                onChange={(e) => { setReason(e.target.value); clearError("reason"); }}
                rows={4}
                className={`font-sans text-[15px] text-[#0D1F3C] bg-[#FAF9F6] border rounded-xl px-4 py-3.5 w-full transition-all duration-200 outline-none focus:border-[#2D8C6E] focus:bg-white focus:shadow-[0_0_0_4px_rgba(45,140,110,0.12)] resize-y min-h-[110px] leading-[1.5] ${errors.reason ? "border-red-400 shadow-[0_0_0_4px_rgba(196,68,68,0.1)]" : "border-[#E6E2DA]"}`}
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full mt-2 py-[18px] px-6 rounded-[14px] text-white text-[15px] font-semibold inline-flex items-center justify-center gap-3 transition-all duration-200 hover:-translate-y-px"
              style={{
                background: "linear-gradient(135deg, #f58529 0%, #dd2a7b 50%, #8134af 100%)",
                boxShadow: "0 8px 22px -12px rgba(225,48,108,0.7)",
              }}
            >
              {/* Instagram logo */}
              <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
              Copiar mensaje y abrir Instagram
            </button>

            {/* Success / copied feedback */}
            {copied && (
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-start gap-3 bg-gradient-to-r from-[#fdf0f5] to-[#f3eaff] border border-[#e8c8d8] px-4 py-3.5 rounded-[10px] mt-3.5"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#C13584" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="flex-shrink-0 mt-px">
                  <path d="m5 12 5 5L20 7"/>
                </svg>
                <div>
                  <p className="text-[13px] font-semibold text-[#8134af]">¡Mensaje copiado!</p>
                  <p className="text-[12px] text-[#a06070] mt-0.5">Instagram se abrió — solo pega el mensaje en el chat (Ctrl+V / ⌘V).</p>
                </div>
              </motion.div>
            )}

            <p className="mt-4 text-center text-[13px] text-[#5A6478]">
              ¿Prefieres llamar?{" "}
              <a href="tel:+18098502143" className="text-[#0D1F3C] font-semibold border-b border-[#2D8C6E] pb-px">
                809 850 2143
              </a>
            </p>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
