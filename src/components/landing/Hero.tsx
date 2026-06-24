import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import brokerVideo from "@/assets/broker.mp4.asset.json";

export function Hero() {
  return (
    <header
      id="top"
      className="relative flex h-screen min-h-[720px] w-full items-center overflow-hidden bg-navy"
    >
      {/* Video de fondo (lado derecho) */}
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className="absolute right-0 top-0 z-0 h-full w-full object-cover md:w-[65%]"
        poster=""
      >
        <source src={brokerVideo.url} type="video/mp4" />
      </video>

      {/* Overlay degradado: navy sólido a la izquierda → transparente a la derecha */}
      <div
        className="absolute inset-0 z-[1] pointer-events-none"
        style={{
          background:
            "linear-gradient(to right, rgb(15,23,42) 30%, rgba(15,23,42,0.85) 50%, rgba(15,23,42,0.35) 75%, rgba(15,23,42,0) 100%)",
        }}
      />
      {/* Sutil veladura inferior para legibilidad en mobile */}
      <div className="absolute inset-0 z-[1] bg-gradient-to-t from-navy/80 via-transparent to-transparent md:hidden" />

      {/* Contenido */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pt-24">
        <div className="flex max-w-xl flex-col items-start gap-6 text-left">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="inline-flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.4em] text-gold"
          >
            <span className="h-px w-10 bg-gold" />
            Liderazgo federal en seguros · Est. 1998
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1 }}
            className="font-display text-5xl font-medium leading-[1.05] text-balance text-cream md:text-7xl lg:text-[5.5rem]"
          >
            La arquitectura del <br />
            <span className="italic text-gold">respaldo total.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-pretty text-base leading-relaxed text-slate md:text-lg"
          >
            Liberamos al Productor Asesor de la carga operativa con infraestructura tecnológica
            de vanguardia y 25 años de solidez institucional en toda la Argentina.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.45 }}
            className="mt-4 flex flex-wrap gap-4"
          >
            <a
              href="#productores"
              className="group neumorph-gold inline-flex items-center gap-3 bg-gold px-8 py-4 text-[11px] font-bold uppercase tracking-[0.25em] text-navy transition-transform hover:-translate-y-0.5 active:translate-y-0"
            >
              Sumarme a la red
              <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <a
              href="#ecosistema"
              className="glass inline-flex items-center gap-3 px-8 py-4 text-[11px] font-bold uppercase tracking-[0.25em] text-cream transition-colors hover:bg-white/10"
            >
              Conocer ecosistema
            </a>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-10 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-2 text-[10px] uppercase tracking-[0.4em] text-cream/40 md:flex"
      >
        Scroll
        <span className="block h-10 w-px animate-pulse bg-cream/40" />
      </motion.div>
    </header>
  );
}
