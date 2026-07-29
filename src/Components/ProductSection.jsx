"use client";

import React, { useRef, useEffect } from "react";
import Image from "next/image";

export default function ProductSection() {
  const sliderRef = useRef(null);
  const sectionRef = useRef(null);
  const autoPlayTimer = useRef(null);

  const productos = [
    {
      id: 1,
      categoria: "ACEITES MEDICINALES",
      nombre: "Aceite con Gotero 10%",
      precio: "$$$",
      imagen: "/product1.png",
      boton: "COMPRAR",
    },
    {
      id: 2,
      categoria: "ACEITES MEDICINALES",
      nombre: "Aceite Dispensador Cream",
      precio: "$$$",
      imagen: "/product2.png",
      boton: "COMPRAR",
    },
    {
      id: 3,
      categoria: "FLORES OUTDOOR",
      nombre: "Flores Gorilla Glue",
      precio: "$$$",
      imagen: "/product3.png",
      boton: "COMPRAR",
    },
    {
      id: 4,
      categoria: "FLORES INDOOR",
      nombre: "Flores Amnesia Haze",
      precio: "$$$",
      imagen: "/product4.png",
      boton: "COMPRAR",
    },
    {
      id: 5,
      categoria: "CREMAS MEDICINALES",
      nombre: "Crema Antiinflamatoria",
      precio: "$$$",
      imagen: "/product2.png",
      boton: "COMPRAR",
    },
    {
      id: 6,
      categoria: "EXTRACTOS CONCENTRADOS",
      nombre: "Resina Premium",
      precio: "$$$",
      imagen: "/product1.png",
      boton: "COMPRAR",
    },
  ];

  useEffect(() => {
    const startAutoPlay = () => {
      stopAutoPlay();
      autoPlayTimer.current = setInterval(() => {
        if (sliderRef.current) {
          const { scrollLeft, scrollWidth, clientWidth } = sliderRef.current;

          if (scrollLeft + clientWidth >= scrollWidth - 5) {
            stopAutoPlay();
            return;
          }

          // Fixed original slider children calculation typo safely for JSX
          const cardWidth =
            sliderRef.current.children?.[0]?.clientWidth || clientWidth;
          sliderRef.current.scrollBy({
            left: cardWidth + 24,
            behavior: "smooth",
          });
        }
      }, 3500);
    };

    const stopAutoPlay = () => {
      if (autoPlayTimer.current) {
        clearInterval(autoPlayTimer.current);
      }
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          startAutoPlay();
        } else {
          stopAutoPlay();
        }
      },
      { threshold: 0.15 },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      observer.disconnect();
      stopAutoPlay();
    };
  }, []);

  const slide = (direction) => {
    if (sliderRef.current) {
      const { scrollLeft } = sliderRef.current;
      const cardWidth = sliderRef.current.children?.[0]?.clientWidth || 300;
      const scrollAmount = cardWidth + 24;

      sliderRef.current.scrollTo({
        left:
          direction === "left"
            ? scrollLeft - scrollAmount
            : scrollLeft + scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      ref={sectionRef}
      id="pasos"
      className="relative w-full flex flex-col justify-center items-center py-20 md:py-24 bg-[#162713] overflow-hidden text-white select-none"
    >
      {/* Background Image Optimization using Next.js Image Component */}
      <Image
        src="/bg.png"
        alt="Products Background"
        fill
        loading="lazy"
        quality={75}
        sizes="100vw"
        className="object-cover object-center z-0 pointer-events-none"
      />

      {/* Gradients and Overlays */}
      <div className="absolute inset-0 bg-linear-to-b from-[#162713]/90 via-transparent to-[#162713]/95 z-10"></div>
      <div className="absolute inset-0 bg-black/15 z-10"></div>

      <div className="relative z-20 w-full max-w-[85.5%] mx-auto flex flex-col px-0">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 md:mb-10 gap-6">
          <h2 className="text-2xl sm:text-3xl md:text-[40px] font-bold text-white leading-[1.05] tracking-tight md:tracking-normal">
            Productos de cannabis medicinal <br className="hidden sm:inline" />{" "}
            analizados en laboratorio propio
          </h2>

          <div className="hidden md:flex items-center space-x-3 mb-2">
            <button
              onClick={() => slide("left")}
              className="w-10 h-10 border border-white/30 hover:border-white rounded-full flex items-center justify-center transition-colors bg-[#1b2f15]/40 hover:bg-[#1b2f15]/80 active:scale-95"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
            <button
              onClick={() => slide("right")}
              className="w-10 h-10 border border-white/30 hover:border-white rounded-full flex items-center justify-center transition-colors bg-[#1b2f15]/40 hover:bg-[#1b2f15]/80 active:scale-95"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>

        <div
          ref={sliderRef}
          className="w-full flex overflow-x-auto gap-8 sm:gap-6 pb-6 snap-x snap-mandatory [-ms-overflow-style:none] scrollbar-none [&::-webkit-scrollbar]:hidden"
        >
          {productos.map((producto, index) => (
            <div
              key={`prod-${producto.id}-${index}`}
              className="bg-[#1b2f15]/95 border border-white/5 rounded-3xl pt-8 pb-6 px-6 flex flex-col items-center justify-between text-center transition-transform duration-300 hover:scale-[1.01] w-full min-w-70 sm:min-w-[320px] md:min-w-[calc(33.333%-16px)] lg:min-w-[calc(25%-18px)] snap-start shadow-2xl backdrop-blur-sm"
            >
              <span
                className="text-[13px] sm:text-sm font-bold tracking-widest text-white mb-3 block uppercase notranslate"
                translate="no"
              >
                {producto.categoria}
              </span>

              <div className="border border-white/60 rounded-full px-10 py-2 mb-6 w-fit min-w-27.5">
                <span className="text-white text-sm font-bold tracking-widest">
                  {producto.precio}
                </span>
              </div>

              {/* Optimized Individual Product Images for JSX */}
              <div className="w-full h-48 sm:h-52 md:h-56 my-2 flex items-center justify-center relative drop-shadow-[0_16px_25px_rgba(0,0,0,0.65)]">
                <Image
                  src={producto.imagen}
                  alt={producto.nombre}
                  fill
                  sizes="(max-w-640px) 100vw, (max-w-1024px) 33vw, 25vw"
                  loading="lazy"
                  className="object-contain pointer-events-none"
                />
              </div>

              <div className="w-full mt-6">
                <button className="bg-[#dfd0bd] hover:bg-white text-[#162713] font-black text-[13px] uppercase tracking-[0.15em] py-3.5 px-6 rounded-full w-full block transition-colors duration-300 shadow-md">
                  {producto.boton}
                </button>
                <p className="text-[11px] text-white/70 font-light tracking-wide mt-4 normal-case">
                  Consultá disponibilidad
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
