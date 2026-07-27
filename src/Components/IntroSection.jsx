import React from "react";

export default function SplitIntroSection() {
  return (
    <section
      id="informacion"
      className="w-full min-h-screen md:min-h-145 grid grid-cols-1 md:grid-cols-2 font-sans select-none antialiased overflow-hidden"
    >
      {/* Left Panel - Dark Leaf Background with Perfectly Scaled Stretched Heading */}
      <div
        className="relative bg-cover bg-center flex items-center p-6 sm:p-12 lg:p-20 py-16 md:py-0 min-h-112.5 md:min-h-0"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.45), rgba(0,0,0,0.45)), url('/flower.PNG')`,
        }}
      >
        <div className="w-full max-w-lg mx-auto md:mx-0 text-center md:text-left">
          {/* Heading with vertical stretching like the image */}
          <h2 className="text-3xl sm:text-4xl md:text-[35px] lg:text-[42px] font-black text-[#fdfcf7] leading-[1.05] tracking-tight uppercase transform scale-y-[1.25] md:scale-y-[1.35] origin-center md:origin-left my-6">
            ¿QUERÉS ACCEDER <br />
            AL CANNABIS <br />
            MEDICINAL PERO <br />
            NO SABÉS <br />
            POR DONDE <br />
            EMPEZAR?
          </h2>
        </div>
      </div>

      {/* Right Panel - Exact Tan Background with Centered Content */}
      <div className="bg-[#b8aa8f] flex flex-col justify-center items-center p-6 sm:p-12 lg:p-20 py-16 md:py-0 text-[#fdfcf7]/90 relative">
        <div className="max-w-xl w-full flex flex-col justify-center h-full space-y-8 md:space-y-12">
          {/* Main Content Paragraph - Removed fixed <br> for flawless mobile wrapping */}
          <p className="text-[13px] sm:text-[14px] lg:text-[15px] leading-normal tracking-normal text-[#fdfcf7]/90 font-normal text-center md:text-left">
            La mayoría de las personas que nos llegan tienen las mismas dudas:
            si es legal, cuánto cuesta, cuánto tarda y si alguien los va a
            acompañar en el proceso. En Terramore respondemos cada una de esas
            preguntas — y después te acompañamos en cada paso.
          </p>

          {/* Subheadings - Perfectly adjusted tracking and vertical scale to match screenshot */}
          <div className="space-y-3 md:space-y-4 pt-2 text-center md:text-left">
            <h3 className="text-xl sm:text-[23px] md:text-[24px] font-black tracking-[-0.04em] leading-none text-[#fdfcf7] uppercase transform scale-y-[1.3] lg:scale-y-[1.35] origin-center md:origin-left">
              Sin membresía. Sin costos ocultos.
            </h3>
            <h3 className="text-xl sm:text-[23px] md:text-[24px] font-black tracking-[-0.04em] leading-none text-[#fdfcf7] uppercase transform scale-y-[1.3] lg:scale-y-[1.35] origin-center md:origin-left">
              Solo el turno médico.
            </h3>
          </div>

          {/* Bottom Call-to-Action Outline Pill Button - Spaced perfectly beneath typography */}
          <div className="pt-4 flex justify-center md:justify-center">
            <button className="border border-[#fdfcf7]/70 hover:bg-white/10 text-[#fdfcf7] font-bold text-[10px] sm:text-[11px] tracking-[0.12em] uppercase py-3.5 px-10 rounded-full transition-colors duration-200 min-w-62.5 sm:min-w-70 text-center leading-normal backdrop-blur-[1px]">
              ESCRIBINOS Y TE <br />
              CONTAMOS TODO EN 5 MINUTOS
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
