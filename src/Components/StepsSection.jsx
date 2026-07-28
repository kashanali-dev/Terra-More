"use client";

import Link from "next/link";

export default function StepsSection() {
  return (
    <section
      id="productos"
      className="relative min-h-screen md:min-h-fit w-full flex flex-col justify-center items-center px-6 py-24 md:py-28 bg-cover bg-center bg-no-repeat overflow-hidden text-white select-none"
      style={{ backgroundImage: "url('/steps.png')" }}
    >
      {/* Background Subtle Dark Overlay */}
      <div className="absolute inset-0 bg-black/25 z-0"></div>

      {/* Aapka original max-w-7xl container bahaal kar diya taaki width bilkul pehle jaisi ho jaye */}
      <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col items-center justify-center gap-16 md:gap-20">
        {/* Main Container for Steps Grid */}
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 sm:gap-10 lg:gap-8 pt-10 md:pt-0">
          {/* PASO 1 (Perfect Column Center) */}
          <div className="flex flex-col items-center text-center">
            {/* Clean Outline WhatsApp Icon */}
            <div className="mb-4 text-white flex items-center justify-center">
              <svg
                className="w-16 h-16 stroke-[1.4]"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                <path
                  d="M9 10a0.5.5 0 0 0-1 0v1a5 5 0 0 0 5 5h1a0.5.5 0 0 0 0-1h-1a4 4 0 0 1-4-4v-1z"
                  fill="currentColor"
                  stroke="none"
                />
              </svg>
            </div>
            <h3
              className="text-[28px] lg:text-[32px] font-black uppercase tracking-tighter leading-none mb-3 scale-x-[0.95] origin-center notranslate"
              translate="no"
            >
              PASO 1
            </h3>
            <p
              className="text-sm lg:text-base font-light leading-relaxed text-white max-w-60 notranslate"
              translate="no"
            >
              Nos escribís por WhatsApp. Una persona real te responde. Sin bots,
              sin formularios.
            </p>
          </div>

          {/* PASO 2 (Perfect Column Center) */}
          <div className="flex flex-col items-center text-center">
            {/* Clean Dual Bubble Outline Icon */}
            <div className="mb-4 text-white flex items-center justify-center">
              <svg
                className="w-16 h-16 stroke-[1.4]"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                <path d="M8 10h.01M12 10h.01M16 10h.01" strokeWidth="2" />
              </svg>
            </div>
            <h3
              className="text-[28px] lg:text-[32px] font-black uppercase tracking-tighter leading-none mb-3 scale-x-[0.95] origin-center notranslate"
              translate="no"
            >
              PASO 2
            </h3>
            <p
              className="text-sm lg:text-base font-light leading-relaxed text-white max-w-60 notranslate"
              translate="no"
            >
              Primera consulta Te contamos todo — qué es Terramore, cómo
              funciona y qué productos tenemos para tu caso.
            </p>
          </div>

          {/* PASO 3 (Perfect Column Center) */}
          <div className="flex flex-col items-center text-center">
            {/* Premium Stethoscope Outline Icon */}
            <div className="mb-4 text-white flex items-center justify-center">
              <svg
                className="w-16 h-16 stroke-[1.4]"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M4.5 3v5a6.5 6.5 0 0 0 13 0V3M11 14.5v5M8 21h6" />
                <circle cx="11" cy="3" r="1.5" />
                <circle cx="17" cy="3" r="1.5" />
              </svg>
            </div>
            <h3
              className="text-[28px] lg:text-[32px] font-black uppercase tracking-tighter leading-none mb-3 scale-x-[0.95] origin-center notranslate"
              translate="no"
            >
              PASO 3
            </h3>
            <p
              className="text-sm lg:text-base font-light leading-relaxed text-white max-w-60 notranslate"
              translate="no"
            >
              Te conectamos con nuestro médico. Online o presencial, como
              prefieras.
            </p>
          </div>

          {/* PASO 4 (Perfect Column Center) */}
          <div className="flex flex-col items-center text-center">
            {/* Checked Document Outline Icon */}
            <div className="mb-4 text-white flex items-center justify-center">
              <svg
                className="w-16 h-16 stroke-[1.4]"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                <polyline points="14 2 14 8 20 8" />
                <polyline points="9 15 11 17 15 13" />
              </svg>
            </div>
            <h3
              className="text-[28px] lg:text-[32px] font-black uppercase tracking-tighter leading-none mb-3 scale-x-[0.95] origin-center notranslate"
              translate="no"
            >
              PASO 4
            </h3>
            <p
              className="text-sm lg:text-base font-light leading-relaxed text-white max-w-60 notranslate"
              translate="no"
            >
              REPROCANN gestionado En 24 a 72 horas tenés tu habilitación legal
              y acceso a todos nuestros productos.
            </p>
          </div>
        </div>

        {/* Bottom Center Button */}
        <div className="w-full flex justify-center pt-4">
          <Link
            href="#"
            className="px-10 py-2.5 border-2 border-white text-white rounded-full font-medium uppercase tracking-widest text-sm hover:bg-white hover:text-black transition-all duration-300 backdrop-blur-[2px]"
          >
            EMPEZAR AHORA
          </Link>
        </div>
      </div>
    </section>
  );
}
