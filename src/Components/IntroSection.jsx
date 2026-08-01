"use client";

import React from "react";
import { Oswald } from "next/font/google";
import Image from "next/image";

const oswald = Oswald({
  subsets: ["latin"],
  weight: ["700"],
  display: "swap",
});

export default function SplitIntroSection() {
  return (
    <section
      id="informacion"
      className="w-full min-h-162.5 md:min-h-137.5 grid grid-cols-1 md:grid-cols-2 font-sans select-none antialiased overflow-hidden"
    >
      {/* Left Panel - Dark Leaf Background */}
      <div className="relative bg-[#040604] flex items-center px-8 sm:px-16 lg:px-24 py-16 md:py-0 justify-center md:justify-start">
        {/* Background Image Optimization */}
        <Image
          src="/flower.png"
          alt="Information Background"
          fill
          priority
          quality={95}
          sizes="(max-w-768px) 100vw, 50vw"
          className="object-cover object-center z-0 pointer-events-none"
        />

        {/* Soft Contrast Depth Tint Overlay */}
        <div className="absolute inset-0 bg-black/25 z-10"></div>

        <div className="relative z-20 w-full max-w-xl text-left">
          {" "}
          {/* FIXED COLOR: Exact Soft Light Cream/Ivory Tint instead of pure white */}{" "}
          <h2
            className={`${oswald.className} text-[38px] sm:text-[45px] md:text-[48px] lg:text-[52px] font-bold text-[#f3ebd9] leading-[0.85] tracking-[-0.04em] uppercase scale-y-[1.1] origin-left`}
          >
            {" "}
            ¿QUERÉS ACCEDER <br /> AL CANNABIS <br /> MEDICINAL PERO <br /> NO
            SABÉS <br /> POR DONDE <br /> EMPEZAR?{" "}
          </h2>{" "}
        </div>
      </div>

      {/* Right Panel - Exact Khaki / Tan Solid Shading */}
      <div className="bg-[#beaf98] flex flex-col justify-center px-8 sm:px-16 lg:px-24 py-16 md:py-0 text-[#e5dac6]">
        <div className="max-w-xl w-full flex flex-col space-y-3 text-left mx-auto">
          {/* Smooth Sans Font Description matching exact word sizing */}
          <p className="text-[14px] sm:text-[15px] lg:text-[17px] leading-snug tracking-normal text-[#fdfcf7]/85 font-medium max-w-lg">
            La mayoría de las personas que nos llegan tienen las mismas dudas:
            si es legal, cuánto cuesta, cuánto tarda y si alguien los va a
            acompañar en el proceso. En Terramore respondemos cada una de esas
            preguntas — y después te acompañamos en cada paso.
          </p>

          {/* Restored Font Sizes for Lower Headings */}
          <div className={`${oswald.className} w-full flex flex-col`}>
            <h3 className="text-xl sm:text-2xl md:text-[26px] lg:text-[25px] font-bold tracking-[-0.03em] leading-[0.9] text-[#fdfcf7] uppercase scale-y-[1.1] origin-left">
              Sin membresía. Sin costos ocultos.
            </h3>
            <h3 className="text-xl sm:text-2xl md:text-[26px] lg:text-[25px] font-bold tracking-[-0.03em] leading-[0.9] text-[#fdfcf7] uppercase scale-y-[1.1] origin-left mt-1.5">
              Solo el turno médico.
            </h3>
          </div>

          {/* Centered Button Area with Increased Top Gap */}
          <div className="pt-6 md:pt-25 w-full flex justify-center">
            <button
              className={`${oswald.className} border border-[#fdfcf7]/80 hover:bg-white/10 text-[#fdfcf7] font-medium text-[10px] sm:text-[11px] tracking-widest uppercase py-3 px-6 rounded-full transition-colors duration-200 w-full sm:w-auto min-w-70 sm:min-w-60 text-center leading-tight mx-auto md:mx-0`}
            >
              {" "}
              ESCRIBINOS Y TE <br /> CONTAMOS TODO EN 5 MINUTOS{" "}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
