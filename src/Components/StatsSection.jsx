import React from "react";

export default function StatsSection() {
  const stats = [
    { value: "+350", label: "SOCIOS ACTIVOS" },
    { value: "+4 AÑOS", label: "DE TRAYECTORIA" },
    { value: "2 SEDES", label: "EN ARGENTINA" },
  ];

  return (
    <section
      id="estadisticas"
      className="relative w-full min-h-137.5 md:min-h-130 flex flex-col justify-center items-center py-16 px-4 sm:px-6 lg:px-8 bg-cover bg-center bg-no-repeat font-sans select-none overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('/flower.PNG')`,
      }}
    >
      {/* Container matching layout widths */}
      <div className="w-full max-w-300 flex flex-col justify-center md:justify-between h-full">
        {/* Fixed Pill Container - Changes to rounded-3xl on mobile and full capsule rounded-full on Desktop */}
        <div className="w-full bg-[#1c2e15]/75 backdrop-blur-sm border border-white/5 rounded-4xl md:rounded-full py-10 md:py-12 px-6 sm:px-12 md:px-16 grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-4 items-center justify-center text-center shadow-xl mt-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center text-center"
            >
              {/* Stat Big Number - Responsive Stretched Text */}
              <h2 className="text-4xl sm:text-5xl md:text-[54px] lg:text-[60px] font-black text-[#dfd0bd] leading-none uppercase tracking-tighter transform scale-y-[1.3] md:scale-y-[1.4] origin-center my-3">
                {stat.value}
              </h2>

              {/* Stat Subtitle Label - Adjusted origin to center to prevent mobile clipping */}
              <p className="text-[12px] sm:text-[13px] md:text-[14px] font-bold text-[#dfd0bd] leading-none uppercase tracking-[-0.03em] transform scale-y-[1.35] origin-center mt-5 mb-2">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom Partner Brands Section - Centered and perfectly spaced on mobile, justified on desktop */}
        <div className="w-full flex flex-col sm:flex-row justify-center md:justify-center items-center gap-10 sm:gap-16 md:gap-28 mt-16 md:mt-20">
          {/* Partner 1 */}
          <div className="text-center md:text-left max-w-50">
            <p className="text-white text-[12px] sm:text-[13px] md:text-[14px] font-black tracking-normal leading-[1.2] uppercase transform scale-y-[1.15] origin-center md:origin-left">
              ESTUDIO DE
              <br />
              ABOGADOS ROBLES
            </p>
          </div>

          {/* Partner 2 */}
          <div className="text-center md:text-left max-w-50">
            <p className="text-white text-[12px] sm:text-[13px] md:text-[14px] font-black tracking-normal leading-[1.2] uppercase transform scale-y-[1.15] origin-center md:origin-left">
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
