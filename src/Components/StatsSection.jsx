"use client";

import React from "react";
import Image from "next/image";

export default function StatsSection() {
  const stats = [
    { value: "+350", label: "SOCIOS ACTIVOS" },
    { value: "+4 AÑOS", label: "DE TRAYECTORIA" },
    { value: "2 SEDES", label: "EN ARGENTINA" },
  ];

  return (
    <section
      id="estadisticas"
      className="relative w-full min-h-screen md:min-h-fit flex flex-col justify-center items-center py-20 md:py-24 bg-[#0a0f0a] select-none overflow-hidden"
    >
      {/* Background Image Optimization */}
      <Image
        src="/back.png"
        alt="Stats Background"
        fill
        loading="lazy"
        quality={95}
        sizes="100vw"
        className="object-cover object-center z-0 pointer-events-none"
      />

      {/* Corrected Light/Vibrant Soft Greenish Overlay - Leaves will now look exactly like your image */}
      <div className="absolute inset-0 bg-linear-to-b from-[#0a0f0a]/30 via-transparent to-[#0a0f0a]/30 z-10"></div>

      {/* Main Container Layout */}
      <div className="relative z-20 w-full max-w-[85.5%] mx-auto flex flex-col justify-center items-center">
        {/* Exact Tinted Wide Pill Box with Original Padding */}
        <div className="w-full bg-[#1e2716]/55 border border-white/4 backdrop-blur-[1px] rounded-[50px] md:rounded-[75px] py-14 md:py-16 px-6 md:px-16 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4 items-center justify-center text-center">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center text-center w-full"
            >
              {/* Reduced Proportional Heading Size */}
              <h2 className="text-h1 font-black text-[#e5dac6] uppercase tracking-display mb-1">
                {stat.value}
              </h2>

              {/* Proportional Fine Label Text */}
              <p className="text-label font-bold text-[#e5dac6]/90 uppercase tracking-widest mt-2">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom Dual Brands Layout */}
        <div className="w-full max-w-4xl flex flex-row justify-around items-center gap-6 mt-14 md:mt-16 text-center">
          {/* Legal Firm Brand */}
          <div className="flex justify-center">
            <p className="text-label font-bold text-[#e5dac6]/85 tracking-widest uppercase">
              ESTUDIO DE
              <br />
              ABOGADOS ROBLES
            </p>
          </div>

          {/* Medical Brand */}
          <div className="flex justify-center">
            <p className="text-label font-bold text-[#e5dac6]/85 tracking-widest uppercase">
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
