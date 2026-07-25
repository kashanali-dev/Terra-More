import Link from "next/link";

export default function StepsSection() {
  return (
    <section
      id="productos"
      className="relative min-h-screen md:h-screen w-full flex flex-col justify-center items-center px-6 py-12 md:px-16 lg:px-22 bg-cover bg-center bg-no-repeat overflow-hidden text-white"
      style={{ backgroundImage: "url('/steps.png')" }}
    >
      {/* Background Subtle Dark Overlay */}
      <div className="absolute inset-0 bg-black/25 z-0"></div>

      {/* Wrapper with significantly increased gap for larger spacing */}
      <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col items-center justify-center gap-16 md:gap-28">
        {/* Main Container for Steps Grid */}
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 sm:gap-10 lg:gap-8 pt-10 md:pt-0">
          {/* PASO 1 */}
          <div className="flex flex-col items-center text-center">
            {/* WhatsApp Custom Line Icon */}
            <div className="mb-4 text-white flex items-center justify-center">
              <svg
                className="w-[52px] h-[52px]"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.4"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                <path
                  d="M16 12A4 4 0 0 1 12 16a3.89 3.89 0 0 1-2.6-1L8 16l1-1.4A3.9 3.9 0 0 1 8 12a4 4 0 0 1 8 0z"
                  strokeDasharray="1 1"
                />
              </svg>
            </div>
            <h3 className="text-2xl font-black uppercase tracking-tighter leading-none mb-3 scale-x-[0.95] origin-center">
              PASO 1
            </h3>
            <p className="text-[13px] font-normal leading-relaxed text-zinc-200/90 max-w-[220px]">
              Nos escribís por WhatsApp. Una persona real te responde. Sin bots,
              sin formularios.
            </p>
          </div>

          {/* PASO 2 */}
          <div className="flex flex-col items-center text-center">
            {/* Multi Chat Bubble Line Icon */}
            <div className="mb-4 text-white flex items-center justify-center">
              <svg
                className="w-[52px] h-[52px]"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.4"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14 a2 2 0 0 1 2 2z" />
                <path
                  d="M8 10h.01M12 10h.01M16 10h.01"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </div>
            <h3 className="text-2xl font-black uppercase tracking-tighter leading-none mb-3 scale-x-[0.95] origin-center">
              PASO 2
            </h3>
            <p className="text-[13px] font-normal leading-relaxed text-zinc-200/90 max-w-[220px]">
              Primera consulta Te contamos todo — qué es Terramore, cómo
              funciona y qué productos tenemos para tu caso.
            </p>
          </div>

          {/* PASO 3 */}
          <div className="flex flex-col items-center text-center">
            {/* Stethoscope Clean Line Icon */}
            <div className="mb-4 text-white flex items-center justify-center">
              <svg
                className="w-[52px] h-[52px]"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.4"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M4.5 3v5a6.5 6.5 0 0 0 13 0V3M11 14.5v5M8 21h6" />
                <circle cx="11" cy="3" r="1.5" />
                <circle cx="17" cy="3" r="1.5" />
              </svg>
            </div>
            <h3 className="text-2xl font-black uppercase tracking-tighter leading-none mb-3 scale-x-[0.95] origin-center">
              PASO 3
            </h3>
            <p className="text-[13px] font-normal leading-relaxed text-zinc-200/90 max-w-[220px]">
              Te conectamos con nuestro médico. Online o presencial, como
              prefieras.
            </p>
          </div>

          {/* PASO 4 */}
          <div className="flex flex-col items-center text-center">
            {/* Verified Document/Badge Line Icon */}
            <div className="mb-4 text-white flex items-center justify-center">
              <svg
                className="w-[52px] h-[52px]"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.4"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                <polyline points="14 2 14 8 20 8" />
                <polyline points="9 15 11 17 15 13" />
              </svg>
            </div>
            <h3 className="text-2xl font-black uppercase tracking-tighter leading-none mb-3 scale-x-[0.95] origin-center">
              PASO 4
            </h3>
            <p className="text-[13px] font-normal leading-relaxed text-zinc-200/90 max-w-[220px]">
              REPROCANN gestionado En 24 a 72 horas tenés tu habilitación legal
              y acceso a todos nuestros productos.
            </p>
          </div>
        </div>

        {/* Bottom Center Button with maximum spacing */}
        <div className="w-full flex justify-center">
          <Link
            href="#"
            className="px-8 py-3 border border-white/60 text-white rounded-full font-medium uppercase tracking-widest text-xs sm:text-sm hover:bg-white hover:text-black transition-all duration-300 backdrop-blur-[2px]"
          >
            EMPEZAR AHORA
          </Link>
        </div>
      </div>
    </section>
  );
}
