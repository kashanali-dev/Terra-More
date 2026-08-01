"use client";

import Link from "next/link";
import Image from "next/image";

export default function StepsSection() {
  return (
    <section
      id="productos"
      className="relative min-h-screen md:min-h-fit w-full flex flex-col justify-center items-center px-6 py-24 md:py-28 bg-[#0a0f0a] overflow-hidden text-white select-none"
    >
      {/* Background Image Optimization */}
      <Image
        src="/steps.png"
        alt="Steps Background"
        fill
        loading="lazy"
        quality={90}
        sizes="100vw"
        className="object-cover object-center z-0 pointer-events-none"
      />

      {/* Background Overlay */}
      <div className="absolute inset-0 bg-black/15 z-10"></div>

      {/* Main Container */}
      <div className="relative z-20 w-full max-w-7xl mx-auto flex flex-col items-center justify-center gap-12 md:gap-16">
        {/* Steps Grid */}
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16 text-center">
          {/* PASO 1 - EXACT WHATSAPP ICON */}
          <div className="flex flex-col items-center">
            <div className="mb-4 text-white flex items-center justify-center h-20 w-20">
              <svg
                className="w-16 h-16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                <path
                  d="M9 10a.5.5 0 0 0-1 0v1a5 5 0 0 0 5 5h1a.5.5 0 0 0 0-1h-1a4 4 0 0 1-4-4v-1z"
                  fill="currentColor"
                  stroke="none"
                />
              </svg>
            </div>
            <h3 className="text-2xl md:text-3xl font-black tracking-tighter mb-2 uppercase leading-none scale-x-[0.95]">
              PASO 1
            </h3>
            <p className="text-[13px] md:text-sm font-light leading-tight text-white/95 max-w-55 mx-auto tracking-normal">
              Nos escribís por WhatsApp. Una persona real te responde. Sin bots,
              sin formularios.
            </p>
          </div>

          {/* PASO 2 - EXACT DOUBLE CHAT TRACKS */}
          <div className="flex flex-col items-center">
            <div className="mb-4 text-white flex items-center justify-center h-20 w-20">
              <svg
                className="w-16 h-16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                {/* Back / Main Bubble */}
                <path d="M14 3H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h2v3l3-3h5a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2z" />
                <path d="M5 6h6M5 9h4" />
                {/* Front / Small Bubble */}
                <path d="M10 14h4l3 3v-3h3a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2" />
                <path d="M13 10h4" />
              </svg>
            </div>
            <h3 className="text-2xl md:text-3xl font-black tracking-tighter mb-2 uppercase leading-none scale-x-[0.95]">
              PASO 2
            </h3>
            <p className="text-[13px] md:text-sm font-light leading-tight text-white/95 max-w-55 mx-auto tracking-normal">
              Primera consulta Te contamos todo — qué es Terramore, cómo
              funciona y qué productos tenemos para tu caso.
            </p>
          </div>

          {/* PASO 3 - EXACT HOOK STETHOSCOPE */}
          <div className="flex flex-col items-center">
            <div className="mb-4 text-white flex items-center justify-center h-20 w-20">
              <svg
                className="w-16 h-16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 3v6a7 7 0 0 0 14 0V3" />
                <path d="M12 16v4a2 2 0 0 0 4 0v-2" />
                <circle cx="16" cy="16" r="1.5" />
              </svg>
            </div>
            <h3 className="text-2xl md:text-3xl font-black tracking-tighter mb-2 uppercase leading-none scale-x-[0.95]">
              PASO 3
            </h3>
            <p className="text-[13px] md:text-sm font-light leading-tight text-white/95 max-w-55 mx-auto tracking-normal">
              Te conectamos con nuestro médico. Online o presencial, como
              prefieras.
            </p>
          </div>

          {/* PASO 4 - EXACT VALIDATED SHEET */}
          <div className="flex flex-col items-center">
            <div className="mb-4 text-white flex items-center justify-center h-20 w-20">
              <svg
                className="w-16 h-16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M16 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2z" />
                <path d="M7 6h6M7 10h6M7 14h4" />
                {/* Checked Stamp Badge at corner */}
                <circle
                  cx="16"
                  cy="18"
                  r="3"
                  fill="#0a0f0a"
                  className="stroke-[1.5]"
                />
                <polyline points="14.5 18 15.5 19 17.5 17" />
              </svg>
            </div>
            <h3 className="text-2xl md:text-3xl font-black tracking-tighter mb-2 uppercase leading-none scale-x-[0.95]">
              PASO 4
            </h3>
            <p className="text-[13px] md:text-sm font-light leading-tight text-white/95 max-w-55 mx-auto tracking-normal">
              REPROCANN gestionado En 24 a 72 horas tenés tu habilitación legal
              y acceso a todos nuestros productos.
            </p>
          </div>
        </div>

        {/* Action Button Area */}
        <div className="w-full flex justify-center pt-6 md:pt-10">
          <Link
            href="#"
            className="px-4 py-2 border border-white/60 text-white rounded-full text-lg uppercase tracking-[0.2em] hover:bg-white hover:text-black transition-all duration-300 bg-transparent"
          >
            EMPEZAR AHORA
          </Link>
        </div>
      </div>
    </section>
  );
}
