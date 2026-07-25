import React from "react";

export default function ProductSection() {
  const productos = [
    {
      id: 1,
      categoria: "ACEITES MEDICINALES",
      nombre: "Aceite con Gotero",
      precio: "$$$",
      imagen: "/p1.PNG",
      boton: "COMPRAR",
    },
    {
      id: 2,
      categoria: "ACEITES MEDICINALES",
      nombre: "Aceite Dispensador",
      precio: "$$$",
      imagen: "/p2.PNG",
      boton: "COMPRAR",
    },
    {
      id: 3,
      categoria: "FLORES OUTDOOR",
      nombre: "Flores de Exterior",
      precio: "$$$",
      imagen: "/p3.PNG",
      boton: "COMPRAR",
    },
    {
      id: 4,
      categoria: "FLORES INDOOR",
      nombre: "Flores de Interior",
      precio: "$$$",
      imagen: "/p4.PNG",
      boton: "COMPRAR",
    },
  ];

  return (
    <section
      id="pasos"
      className="bg-[#2a401f] py-12 md:py-16 px-4 sm:px-6 w-full font-sans antialiased selection:bg-emerald-900 selection:text-white flex justify-center"
    >
      {/* Exact Width Container */}
      <div className="w-full max-w-300">
        {/* Main Heading Left-Aligned & Styled */}
        <div className="mb-8 md:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-[40px] font-black text-white leading-tight md:leading-[1.1] tracking-tight">
            Productos de cannabis medicinal <br className="hidden sm:inline" />{" "}
            analizados en laboratorio propio
          </h2>
        </div>

        {/* Product Cards Grid - Perfectly Responsive Spacing */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-5 md:gap-6">
          {productos.map((producto) => (
            <div
              key={producto.id}
              className="bg-[#385429] rounded-3xl pt-7 pb-6 px-5 flex flex-col items-center justify-between text-center transition-transform duration-200 hover:scale-[1.01] w-full max-w-[320px] sm:max-w-none mx-auto"
            >
              {/* Category Name - Pure White */}
              <span className="text-[11px] font-bold tracking-widest text-white/90 mb-3 block uppercase">
                {producto.categoria}
              </span>

              {/* Price Outline Badge */}
              <div className="border border-white/40 rounded-full px-8 py-1.5 mb-5 w-fit min-w-25">
                <span className="text-white text-xs font-semibold tracking-wider">
                  {producto.precio}
                </span>
              </div>

              {/* Product Image Container - Responsive Heights */}
              <div className="w-full h-48 sm:h-52 md:h-56 my-2 flex items-center justify-center relative drop-shadow-[0_12px_15px_rgba(0,0,0,0.5)]">
                <img
                  src={producto.imagen}
                  alt={producto.nombre}
                  className="max-w-full max-h-full object-contain pointer-events-none"
                />
              </div>

              {/* Lower Section (Button + Subtext) */}
              <div className="w-full mt-5">
                {/* Comprar Button - Pure White Text */}
                <button className="bg-[#dfd0bd] hover:bg-[#e6d9c9] text-white font-bold text-xs uppercase tracking-[0.15em] py-3.5 px-6 rounded-full w-full max-w-48.75 mx-auto block transition-colors duration-200 shadow-md">
                  {producto.boton}
                </button>

                {/* Footer Availability Text - Pure White */}
                <p className="text-[10px] text-white/70 font-medium tracking-wide mt-4 capitalize">
                  Consulta disponibilidad
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
