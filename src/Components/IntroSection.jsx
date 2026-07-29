"use client";

import React from "react";
import { Oswald } from "next/font/google";
import Image from "next/image";

const oswald = Oswald({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export default function SplitIntroSection() {
  return (
    <section
      id="informacion"
      className="w-full min-h-162.5 md:min-h-137.5 grid grid-cols-1 md:grid-cols-2 font-sans select-none antialiased overflow-hidden"
    >
      {/* Left Panel - Dark Leaf Background */}
      <div className="relative bg-[#000000] flex items-center p-6 sm:p-12 lg:p-20 py-16 md:py-0 min-h-95 md:min-h-0">
        {/* Background Image Optimization using Next.js Image Component */}
        <Image
          src="/flower.png"
          alt="Information Background"
          fill
          loading="lazy"
          quality={75}
          sizes="(max-w-768px) 100vw, 50vw"
          className="object-cover object-center z-0 pointer-events-none"
        />

        {/* Overlay replacement for inline linear-gradient */}
        <div className="absolute inset-0 bg-black/45 z-10"></div>

        <div className="relative z-20 w-full max-w-xl mx-auto md:mx-0 text-center md:text-left">
          <h2
            className={`${oswald.className} text-4xl sm:text-5xl md:text-[44px] lg:text-[54px] font-bold text-[#fdfcf7] leading-none md:leading-[0.95] tracking-tight uppercase`}
          >
            ¿QUERÉS ACCEDER <br />
            AL CANNABIS <br />
            MEDICINAL PERO <br />
            NO SABÉS <br />
            POR DONDE <br />
            EMPEZAR?
          </h2>
        </div>
      </div>

      {/* Right Panel - Exact Tan/Khaki Background */}
      <div className="bg-[#b5a78d] flex flex-col justify-center items-center p-6 sm:p-12 lg:p-20 py-16 md:py-0 text-[#fdfcf7] relative">
        <div className="max-w-xl w-full flex flex-col justify-center space-y-6 md:space-y-8 items-center md:items-start">
          <p className="text-sm sm:text-base lg:text-[17px] leading-relaxed tracking-normal text-[#fdfcf7]/90 font-normal text-center md:text-left">
            La mayoría de las personas que nos llegan tienen las mismas dudas:
            si es legal, cuánto cuesta, cuánto tarda y si alguien los va a
            acompañar en el proceso. En Terramore respondemos cada una de esas
            preguntas — y después te acompañamos en cada paso.
          </p>

          <div
            className={`${oswald.className} space-y-2 text-center md:text-left w-full`}
          >
            <h3 className="text-2xl sm:text-3xl md:text-[32px] font-bold tracking-tight leading-tight text-[#fdfcf7] uppercase">
              Sin membresía. Sin costos ocultos.
            </h3>
            <h3 className="text-2xl sm:text-3xl md:text-[32px] font-bold tracking-tight leading-tight text-[#fdfcf7] uppercase">
              Solo el turno médico.
            </h3>
          </div>

          <div className="pt-4 flex justify-center md:justify-start w-full">
            <button
              className={`${oswald.className} border border-[#fdfcf7]/80 hover:bg-white/10 text-[#fdfcf7] font-medium text-xs sm:text-sm tracking-widest uppercase py-3.5 px-8 rounded-full transition-colors duration-200 w-full sm:w-auto min-w-70 sm:min-w-85 text-center leading-tight mx-auto md:mx-0`}
            >
              ESCRIBINOS Y TE <br />
              CONTAMOS TODO EN 5 MINUTOS
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
