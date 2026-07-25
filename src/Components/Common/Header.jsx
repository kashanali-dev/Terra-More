"use client";

import React, { useState, useEffect } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  // Next.js hydration error aur extensions conflict ko completely bypass karne ke liye
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <header className="fixed top-0 left-0 w-full z-50 bg-[#162713]/90 border-b border-white/5 h-20">
        <div className="max-w-300uto px-6 flex items-center justify-between h-full">
          <div className="text-white font-black text-xl tracking-widest uppercase">
            TERRAMORE
          </div>
        </div>
      </header>
    );
  }

  return (
    <header
      suppressHydrationWarning={true} // 👈 Browser extensions ke html modifications ko block karne ke liye
      className="fixed top-0 left-0 w-full z-50 bg-[#162713]/90 backdrop-blur-md border-b border-white/5 font-sans select-none antialiased notranslate"
      translate="no" // 👈 Google Translate ko is pure header ko touch karne se rokne ke liye
    >
      <div
        className="max-w-300 mx-auto px-6 sm:px-8"
        suppressHydrationWarning={true}
      >
        <div
          className="flex items-center justify-between h-20"
          suppressHydrationWarning={true}
        >
          {/* Logo Section */}
          <div className="shrink-0">
            <a
              href="/"
              className="text-white font-black text-xl tracking-widest uppercase"
            >
              TERRAMORE
            </a>
          </div>

          {/* Desktop Only Links - Re-arranged according to your 5 sections */}
          <nav
            className="hidden lg:flex items-center space-x-10"
            suppressHydrationWarning={true}
          >
            <a
              href="#inicio"
              className="text-white/80 hover:text-white font-bold text-xs uppercase tracking-widest transition-colors duration-200"
            >
              Inicio
            </a>
            <a
              href="#productos"
              className="text-white/80 hover:text-white font-bold text-xs uppercase tracking-widest transition-colors duration-200"
            >
              Productos
            </a>
            <a
              href="#pasos"
              className="text-white/80 hover:text-white font-bold text-xs uppercase tracking-widest transition-colors duration-200"
            >
              Pasos
            </a>
            <a
              href="#estadisticas"
              className="text-white/80 hover:text-white font-bold text-xs uppercase tracking-widest transition-colors duration-200"
            >
              Estadísticas
            </a>
            <a
              href="#informacion"
              className="text-white/80 hover:text-white font-bold text-xs uppercase tracking-widest transition-colors duration-200"
            >
              Información
            </a>
          </nav>

          {/* Desktop Button - Links straight to the bottom/cta info section */}
          <div className="hidden lg:block">
            <a
              href="#informacion"
              className="border border-white/40 hover:border-white text-white font-bold text-[10px] tracking-widest uppercase py-2.5 px-6 rounded-full transition-all duration-200 whitespace-nowrap"
            >
              Consultar
            </a>
          </div>

          {/* Hamburger Menu Icon */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="text-white/80 hover:text-white focus:outline-none p-2 block"
            >
              <svg
                className="h-7 w-7"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Layer */}
      {isOpen && (
        <div
          className="lg:hidden bg-[#162713] border-b border-white/10"
          suppressHydrationWarning={true}
        >
          <div className="px-6 pt-2 pb-8 space-y-4">
            <a
              href="#inicio"
              onClick={() => setIsOpen(false)}
              className="block text-white/90 hover:text-white font-bold text-base uppercase tracking-wider py-2 border-b border-white/5"
            >
              Inicio
            </a>
            <a
              href="#productos"
              onClick={() => setIsOpen(false)}
              className="block text-white/90 hover:text-white font-bold text-base uppercase tracking-wider py-2 border-b border-white/5"
            >
              Productos
            </a>
            <a
              href="#pasos"
              onClick={() => setIsOpen(false)}
              className="block text-white/90 hover:text-white font-bold text-base uppercase tracking-wider py-2 border-b border-white/5"
            >
              Pasos
            </a>
            <a
              href="#estadisticas"
              onClick={() => setIsOpen(false)}
              className="block text-white/90 hover:text-white font-bold text-base uppercase tracking-wider py-2 border-b border-white/5"
            >
              Estadísticas
            </a>
            <a
              href="#informacion"
              onClick={() => setIsOpen(false)}
              className="block text-white/90 hover:text-white font-bold text-base uppercase tracking-wider py-2"
            >
              Información
            </a>
            <div className="pt-4">
              <a
                href="#informacion"
                onClick={() => setIsOpen(false)}
                className="block text-center bg-[#dfd0bd] text-[#162713] font-bold text-sm uppercase tracking-widest py-3.5 rounded-full"
              >
                Consultar
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
