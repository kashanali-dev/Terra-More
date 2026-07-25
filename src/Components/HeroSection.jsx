"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";

export default function HeroSection() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <section className="relative min-h-screen w-full bg-black z-0"></section>
    );
  }

  return (
    <section
      id="inicio"
      suppressHydrationWarning={true}
      className="relative min-h-fit md:min-h-fit lg:min-h-screen w-full flex flex-col justify-between px-6 py-12 md:px-16 lg:px-22 bg-cover bg-center bg-no-repeat select-none overflow-hidden"
      style={{ backgroundImage: "url('/hero.png')" }}
    >
      {/* Background Dark Overlay */}
      <div className="absolute inset-0 bg-black/40 z-0"></div>

      {/* Strict layout behavior for tablets: forcing h-auto instead of full screen stretching */}
      <div
        suppressHydrationWarning={true}
        className="relative z-10 max-w-5xl w-full text-white flex flex-col justify-between h-auto lg:h-full gap-10 sm:gap-12 md:gap-14 lg:gap-24 pt-20 md:pt-24 lg:pt-32"
      >
        {/* Main Content Area */}
        <div className="flex flex-col gap-6" suppressHydrationWarning={true}>
          <h1
            className="text-[32px] sm:text-5xl md:text-6xl lg:text-[5rem] font-bold uppercase tracking-tighter leading-[0.95] md:leading-[0.92] font-sans antialiased max-w-4xl notranslate"
            translate="no"
          >
            Acceso Legal <br />
            Y Acompañado Al <br />
            Cannabis Medicinal
          </h1>

          <p
            className="text-xs sm:text-sm md:text-base font-normal max-w-2xl text-zinc-200/90 leading-normal tracking-wide notranslate"
            translate="no"
          >
            Somos una ONG habilitada en el Registro del Programa REPROCANN del{" "}
            <br className="hidden md:inline" />
            Ministerio de Salud de la Nación.
          </p>
        </div>

        {/* Bottom Action Container: Tight paddings applied specifically for tablet profiles */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 md:gap-6 w-full max-w-full pt-4 sm:pt-6 pb-2 md:pb-4 lg:pb-6">
          <Link
            href="#"
            className="w-full sm:w-55 md:w-65 lg:w-70 text-center py-3 border border-white/60 text-white rounded-full font-medium uppercase tracking-widest text-[11px] sm:text-xs hover:bg-white hover:text-black transition-all duration-300 backdrop-blur-[2px] block"
          >
            WPP CÓRDOBA
          </Link>

          <Link
            href="#"
            className="w-full sm:w-55 md:w-65 lg:w-70 text-center py-3 border border-white/60 text-white rounded-full font-medium uppercase tracking-widest text-[11px] sm:text-xs hover:bg-white hover:text-black transition-all duration-300 backdrop-blur-[2px] block"
          >
            WPP BS. AS
          </Link>

          <Link
            href="#"
            className="w-full sm:w-55 md:w-65 lg:w-70 text-center py-3 border border-white/60 text-white rounded-full font-medium uppercase tracking-widest text-[11px] sm:text-xs hover:bg-white hover:text-black transition-all duration-300 backdrop-blur-[2px] block"
          >
            WPP ARGENTINA
          </Link>
        </div>
      </div>
    </section>
  );
}
