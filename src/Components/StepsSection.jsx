import Link from "next/link";
import Image from "next/image";

const steps = [
  {
    n: "01",
    t: "Escribinos por WhatsApp",
    d: "Una persona real te responde. Sin bots, sin formularios.",
    icon: (
      <svg
        className="w-10 h-10"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
        <path
          d="M9 10a.5.5 0 0 0-1 0v1a5 5 0 0 0 5 5h1a.5.5 0 0 0 0-1h-1a4 4 0 0 1-4-4v-1z"
          fill="currentColor"
          stroke="none"
        />
      </svg>
    ),
  },
  {
    n: "02",
    t: "Primera consulta",
    d: "Te contamos todo: qué es Terramore, cómo funciona y qué productos tenemos para tu caso.",
    icon: (
      <svg
        className="w-10 h-10"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M14 3H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h2v3l3-3h5a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2z" />
        <path d="M5 6h6M5 9h4" />
        <path d="M10 14h4l3 3v-3h3a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2" />
        <path d="M13 10h4" />
      </svg>
    ),
  },
  {
    n: "03",
    t: "Turno médico",
    d: "Te conectamos con nuestro médico. Online o presencial, como prefieras.",
    icon: (
      <svg
        className="w-10 h-10"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M5 3v6a7 7 0 0 0 14 0V3" />
        <path d="M12 16v4a2 2 0 0 0 4 0v-2" />
        <circle cx="16" cy="16" r="1.5" />
      </svg>
    ),
  },
  {
    n: "04",
    t: "Habilitación REPROCANN",
    d: "En 24 a 72 horas tenés tu habilitación legal y acceso a todos nuestros productos.",
    icon: (
      <svg
        className="w-10 h-10"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M16 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2z" />
        <path d="M7 6h6M7 10h6M7 14h4" />
        <circle cx="16" cy="18" r="3" fill="#0a0f0a" className="stroke-[1.5]" />
        <polyline points="14.5 18 15.5 19 17.5 17" />
      </svg>
    ),
  },
];

export default function StepsSection() {
  return (
    <section
      id="productos"
      className="relative min-h-screen md:min-h-fit w-full flex flex-col justify-center items-center py-24 md:py-28 bg-[#0a0f0a] overflow-hidden text-white select-none"
    >
      {/* Background Image Optimization */}
      <Image
        src="/steps.png"
        alt="Steps Background"
        fill
        loading="lazy"
        quality={90}
        sizes="100vw"
        className="object-cover object-center z-0 pointer-events-none"
      />

      {/* Background Overlay */}
      <div className="absolute inset-0 bg-black/15 z-10"></div>

      {/* Main Container */}
      <div className="relative z-20 w-full max-w-[min(85.5%,100rem)] mx-auto flex flex-col items-center justify-center gap-12 md:gap-16">
        {/* Steps Cards Grid */}
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step) => (
            <div
              key={step.n}
              className="group bg-[#1b2f15]/90 border border-white/10 rounded-3xl p-7 flex flex-col gap-5 hover:border-[#dfd0bd]/50 hover:-translate-y-1 transition-all duration-300 shadow-xl backdrop-blur-sm"
            >
              <div className="flex items-center justify-between">
                <span className="text-h2 font-black text-[#dfd0bd]/70">
                  {step.n}
                </span>
                <div className="text-white/80 group-hover:text-[#dfd0bd] transition-colors flex items-center justify-center h-14 w-14">
                  {step.icon}
                </div>
              </div>

              <div className="h-px w-full bg-white/10"></div>

              <h3 className="text-h3 font-black uppercase tracking-sub">
                {step.t}
              </h3>
              <p className="text-body font-normal text-white/85">
                {step.d}
              </p>
            </div>
          ))}
        </div>

        {/* Action Button Area */}
        <div className="w-full flex justify-center pt-2 md:pt-4">
          <Link
            href="/cotizar"
            className="px-4 py-2 border border-white/60 text-white rounded-full text-sm font-bold uppercase tracking-[0.2em] hover:bg-white hover:text-black transition-all duration-300 bg-transparent"
          >
            EMPEZAR AHORA
          </Link>
        </div>
      </div>
    </section>
  );
}