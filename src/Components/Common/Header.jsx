"use client";

import React, { useState, useEffect } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const shouldScroll = window.scrollY > 10;
      setIsScrolled((prev) => (prev !== shouldScroll ? shouldScroll : prev));
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <header
      suppressHydrationWarning={true}
      className={`fixed top-0 left-0 w-full z-50 select-none antialiased notranslate transition-all duration-300 ${
        isScrolled
          ? "bg-[#162713] border-b border-white/10 h-20 shadow-2xl"
          : "bg-transparent border-b border-white/0 h-24"
      }`}
      translate="no"
    >
      <div className="max-w-[85.5%] mx-auto h-full px-0">
        <div className="flex items-center justify-between h-full">
          {/* Logo Section */}
          <div className="shrink-0">
            <a
              href="/"
              className="text-white font-black text-xl md:text-2xl tracking-wider uppercase transition-transform duration-200 active:scale-95 block"
            >
              TERRAMORE
            </a>
          </div>

          {/* Desktop Links */}
          <nav className="hidden lg:flex items-center space-x-8 xl:space-x-12">
            <a
              href="#inicio"
              className="text-white font-bold lg:text-base uppercase tracking-wider transition-colors duration-200"
            >
              Inicio
            </a>
            <a
              href="#productos"
              className="text-white font-bold lg:text-base uppercase tracking-wider transition-colors duration-200"
            >
              Productos
            </a>
            <a
              href="#pasos"
              className="text-white font-bold lg:text-base uppercase tracking-wider transition-colors duration-200"
            >
              Pasos
            </a>
            <a
              href="#estadisticas"
              className="text-white font-bold lg:text-base uppercase tracking-wider transition-colors duration-200"
            >
              Estadísticas
            </a>
            <a
              href="#informacion"
              className="text-white font-bold lg:text-base uppercase tracking-wider transition-colors duration-200"
            >
              Información
            </a>
          </nav>

          {/* Desktop Button */}
          <div className="hidden lg:block">
            <a
              href="#informacion"
              className="border border-white/50 hover:border-white text-white font-bold lg:text-base tracking-wider uppercase py-2 px-7 rounded-full transition-all duration-200 whitespace-nowrap bg-white/5 hover:bg-white/10"
            >
              Consultar
            </a>
          </div>

          {/* Hamburger Menu Icon */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(true)}
              type="button"
              className="text-white/80 hover:text-white focus:outline-none p-2 block"
            >
              <svg
                className="h-7 w-7"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Overlay */}
      <div
        className={`fixed inset-0 bg-black/40 z-40 transition-opacity duration-300 lg:hidden ${
          isOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsOpen(false)}
      />

      {/* Mobile Drawer Panel */}
      <div
        className={`fixed top-0 right-0 h-full w-[85%] sm:w-100 bg-[#162713] z-50 shadow-2xl transform transition-transform duration-300 ease-in-out lg:hidden flex flex-col ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between px-6 h-24 border-b border-white/5">
          <span className="text-white font-black text-xl tracking-wider uppercase">
            TERRAMORE
          </span>
          <button
            onClick={() => setIsOpen(false)}
            className="text-white/80 hover:text-white p-2 focus:outline-none"
          >
            <svg
              className="h-7 w-7"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-6 py-6 space-y-1">
          <a
            href="#inicio"
            onClick={() => setIsOpen(false)}
            className="block text-white font-bold text-sm uppercase tracking-widest py-3.5 border-b border-white/5"
          >
            Inicio
          </a>
          <a
            href="#productos"
            onClick={() => setIsOpen(false)}
            className="block text-white font-bold text-sm uppercase tracking-widest py-3.5 border-b border-white/5"
          >
            Productos
          </a>
          <a
            href="#pasos"
            onClick={() => setIsOpen(false)}
            className="block text-white font-bold text-sm uppercase tracking-widest py-3.5 border-b border-white/5"
          >
            Pasos
          </a>
          <a
            href="#estadisticas"
            onClick={() => setIsOpen(false)}
            className="block text-white font-bold text-sm uppercase tracking-widest py-3.5 border-b border-white/5"
          >
            Estadísticas
          </a>
          <a
            href="#informacion"
            onClick={() => setIsOpen(false)}
            className="block text-white font-bold text-sm uppercase tracking-widest py-3.5 border-b border-white/5"
          >
            Información
          </a>

          <div className="pt-8 space-y-4">
            <a
              href="#informacion"
              onClick={() => setIsOpen(false)}
              className="block text-center bg-[#dfd0bd] text-[#162713] font-bold text-sm uppercase tracking-widest py-3.5 rounded-full dynamic-click"
            >
              Consultar
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
