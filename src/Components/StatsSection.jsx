"use client";

import React from "react";
import { Oswald } from "next/font/google";
import Image from "next/image";

const oswald = Oswald({
  subsets: ["latin"],
  weight: ["500", "700"],
  display: "swap",
});

export default function StatsSection() {
  const stats = [
    { value: "+350", label: "SOCIOS ACTIVOS" },
    { value: "+4 AÑOS", label: "DE TRAYECTORIA" },
    { value: "2 SEDES", label: "EN ARGENTINA" },
  ];

  return (
    <section
      id="estadisticas"
      className="relative w-full min-h-162.5 md:min-h-137.5 flex flex-col justify-center items-center py-12 md:py-16 bg-[#0a0f0a] select-none overflow-hidden"
    >
      {/* Background Image Optimization using Next.js Image Component */}
      <Image
        src="/back.png"
        alt="Stats Background"
        fill
        loading="lazy"
        quality={75}
        sizes="100vw"
        className="object-cover object-center z-0 pointer-events-none"
      />

      {/* Replaced linear-gradient with optimized absolute overlay divs */}
      <div className="absolute inset-0 bg-[#0a0f0a]/65 z-10"></div>

      {/* Main Fluid Wrapper */}
      <div className="relative z-20 w-full px-4 sm:px-6 md:px-16 lg:px-24 flex flex-col justify-center items-center">
        {/* Stats Pill Container */}
        <div className="w-full bg-[#2e3b22]/60 border border-white/5 rounded-[30px] md:rounded-[65px] py-10 md:py-12 px-6 grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-4 items-center justify-center text-center shadow-xl">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center text-center w-full"
            >
              <h2
                className={`${oswald.className} text-5xl md:text-[80px] lg:text-[88px] font-bold text-[#e1d5c3] leading-[0.9] uppercase tracking-[-0.04em] scale-y-[1.1] origin-center my-1`}
              >
                {stat.value}
              </h2>

              <p
                className={`${oswald.className} text-xs md:text-[18px] font-semibold text-[#e1d5c3] leading-[0.95] uppercase tracking-[-0.02em] scale-y-[1.1] origin-center mt-3 mb-1`}
              >
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom Brands Section */}
        <div className="w-full max-w-195 flex flex-col sm:flex-row justify-between items-center gap-10 sm:gap-6 mt-14 md:mt-16 text-center">
          {/* Brand 1 */}
          <div className="min-w-40 flex justify-center">
            <p
              className={`${oswald.className} text-[#e1d5c3] text-sm md:text-[18px] font-semibold tracking-[-0.01em] leading-[1.05] uppercase scale-y-[1.1] origin-center`}
            >
              ESTUDIO DE
              <br />
              ABOGADOS ROBLES
            </p>
          </div>

          {/* Brand 2 */}
          <div className="min-w-40 flex justify-center">
            <p
              className={`${oswald.className} text-[#e1d5c3] text-sm md:text-[18px] font-semibold tracking-[-0.01em] leading-[1.05] uppercase scale-y-[1.1] origin-center`}
            >
              LABORATORIO
              <br />
              PROPIO ARMEDIC
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
