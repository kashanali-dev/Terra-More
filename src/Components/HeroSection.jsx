"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export default function HeroSection() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <section className="relative min-h-screen w-full bg-[#0c150b] z-0"></section>
    );
  }

  return (
    <section
      id="inicio"
      suppressHydrationWarning={true}
      className="relative min-h-fit lg:min-h-screen w-full flex flex-col px-6 py-16 md:px-12 lg:px-20 bg-[#0c150b] select-none overflow-hidden"
    >
      {/* Background Image Optimization using Next.js Image Component */}
      <Image
        src="/hero.png"
        alt="Hero Background"
        fill
        priority
        quality={85}
        sizes="100vw"
        className="object-cover object-center z-0 pointer-events-none"
      />

      {/* Background Dark Overlay */}
      <div className="absolute inset-0 bg-black/35 z-10"></div>

      {/* Main Content Container */}
      <div
        suppressHydrationWarning={true}
        className="relative z-20 w-full text-white flex flex-col gap-10 md:gap-14 pt-16 md:pt-24 pb-2"
      >
        {/* Top Text Area */}
        <div
          className="flex flex-col gap-1.5 md:gap-2 max-lg:text-center max-lg:items-center"
          suppressHydrationWarning={true}
        >
          <h1
            className="text-[34px] sm:text-4xl md:text-5xl lg:text-[4.4rem] font-black uppercase antialiased max-w-4xl leading-[0.85] notranslate"
            translate="no"
          >
            ACCESO LEGAL <br />
            Y ACOMPAÑADO AL <br />
            CANNABIS MEDICINAL
          </h1>

          <p
            className="text-lg sm:text-xl md:text-xl font-light max-w-3xl text-white/80 leading-normal mt-1 md:mt-2 notranslate"
            translate="no"
          >
            Somos una ONG habilitada en el Registro del{" "}
            <br className="hidden md:inline" />
            Programa REPROCANN del Ministerio de Salud de la Nación.
          </p>
        </div>

        {/* Bottom Action Buttons with Increased Top Gap using mt properties */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 w-full mt-8 md:mt-16 pb-0">
          <Link
            href="#"
            className="w-full sm:w-24 md:w-32 lg:w-40 text-center py-2 border border-white text-white rounded-full font-medium uppercase tracking-widest text-base lg:text-lg hover:bg-white hover:text-black transition-all duration-300 backdrop-blur-[2px] block"
          >
            WPP CÓRDOBA
          </Link>

          <Link
            href="#"
            className="w-full sm:w-24 md:w-32 lg:w-40 text-center py-2 border border-white text-white rounded-full font-medium uppercase tracking-widest text-base lg:text-lg hover:bg-white hover:text-black transition-all duration-300 backdrop-blur-[2px] block"
          >
            WPP BS. AS
          </Link>

          <Link
            href="#"
            className="w-full sm:w-24 md:w-32 lg:w-40 text-center py-2 border border-white text-white rounded-full font-medium uppercase tracking-widest text-base lg:text-lg hover:bg-white hover:text-black transition-all duration-300 backdrop-blur-[2px] block"
          >
            WPP ARGENTINA
          </Link>
        </div>
      </div>
    </section>
  );
}
