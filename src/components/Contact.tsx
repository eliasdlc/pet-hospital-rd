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
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: Record<string, boolean> = {};
    if (!fname.trim()) newErrors.fname = true;
    if (!pname.trim()) newErrors.pname = true;
    if (!reason.trim()) newErrors.reason = true;

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    const message = `¡Hola Pet Hospital RD! 👋\n\nSoy *${fname}* y quisiera agendar una cita.\n\n🐾 Mascota: *${pname}* (${petType})\n📋 Motivo: ${reason}\n\n¡Gracias!`;
    const url = `https://wa.me/18098502143?text=${encodeURIComponent(message)}`;

    setSuccess(true);
    setTimeout(() => {
      window.open(url, "_blank");
      setTimeout(() => setSuccess(false), 1200);
    }, 400);
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
              className="text-[#5A6478] text-[17px] leading-[1.6] mb-9 max-w-[440px]"
            >
              Llena el formulario y te respondemos directamente por WhatsApp en pocos minutos. Si es una emergencia, llámanos primero.
            </motion.p>

            <div className="flex flex-col gap-[18px]">
              {[
                {
                  href: "https://wa.me/18098502143",
                  icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>,
                  label: "809 850 2143",
                  sub: "WhatsApp · Lun a Dom",
                  delay: 0.24,
                },
                {
                  href: undefined,
                  icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>,
                  label: "Lunes a Viernes · 8am – 10pm",
                  sub: "Sábados y Domingos · horario reducido",
                  delay: 0.24,
                },
                {
                  href: undefined,
                  icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 21s-7-5.5-7-11a7 7 0 1 1 14 0c0 5.5-7 11-7 11z"/><circle cx="12" cy="10" r="2.5"/></svg>,
                  label: "Calle 3, esq. Onésimo Jiménez",
                  sub: "Los Jardines Metropolitanos, Santiago",
                  delay: 0.24,
                },
              ].map((item, i) => {
                const Comp = item.href ? "a" : "div";
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 16 }}
                    animate={sideInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.7, delay: item.delay + i * 0.04, ease: [0.2, 0.6, 0.2, 1] }}
                  >
                    <Comp
                      {...(item.href ? { href: item.href, target: "_blank", rel: "noopener" } : {})}
                      className="flex gap-4 items-start text-[15px] text-[#0D1F3C] hover:text-[#226B54] transition-colors"
                    >
                      <span className="w-11 h-11 rounded-xl bg-white border border-[#E6E2DA] grid place-items-center flex-shrink-0 text-[#2D8C6E]">
                        {item.icon}
                      </span>
                      <div>
                        <strong className="block font-semibold mb-0.5">{item.label}</strong>
                        <span className="text-[#5A6478] text-[14px]">{item.sub}</span>
                      </div>
                    </Comp>
                  </motion.div>
                );
              })}
            </div>
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
              className="w-full mt-2 py-[18px] px-6 rounded-[14px] bg-[#25D366] text-white text-[15px] font-semibold inline-flex items-center justify-center gap-3 transition-all duration-200 hover:bg-[#1FAA52] hover:-translate-y-px hover:shadow-[0_14px_28px_-12px_rgba(37,211,102,0.7)] shadow-[0_8px_22px_-12px_rgba(37,211,102,0.7)]"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.5 14.4c-.3-.1-1.7-.8-2-.9-.3-.1-.5-.1-.7.1-.2.3-.7.9-.9 1.1-.2.2-.3.2-.6.1-.3-.1-1.2-.5-2.4-1.5-.9-.8-1.5-1.7-1.6-2-.2-.3 0-.5.1-.6.1-.1.3-.3.4-.5.1-.2.2-.3.3-.5.1-.2 0-.4 0-.5-.1-.1-.7-1.6-.9-2.2-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.7.4-.3.3-1 1-1 2.4 0 1.4 1 2.8 1.2 3 .1.2 2 3.1 4.9 4.3.7.3 1.2.5 1.7.6.7.2 1.3.2 1.8.1.5-.1 1.7-.7 1.9-1.4.2-.7.2-1.2.2-1.4-.1-.1-.3-.2-.6-.3z M12 2C6.5 2 2 6.5 2 12c0 1.8.5 3.5 1.3 5L2 22l5.1-1.3c1.4.8 3.1 1.3 4.9 1.3 5.5 0 10-4.5 10-10S17.5 2 12 2z"/>
              </svg>
              Enviar por WhatsApp
            </button>

            {/* Success message */}
            {success && (
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center gap-2.5 bg-[#E7F1ED] text-[#226B54] px-4 py-3 rounded-[10px] text-[13px] font-medium mt-3.5"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m5 12 5 5L20 7"/>
                </svg>
                Abriendo WhatsApp con tu mensaje listo…
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
