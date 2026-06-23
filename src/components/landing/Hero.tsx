import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import heroImg from "@/assets/hero-financial.jpg";

export function Hero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 600], [0, 160]);
  const opacity = useTransform(scrollY, [0, 500], [1, 0.3]);

  return (
    <header id="top" className="relative h-screen min-h-[720px] w-full overflow-hidden">
      <motion.div
        style={{ y, opacity }}
        className="absolute inset-0 -z-10 scale-110"
      >
        <img
          src={heroImg}
          alt="Distrito financiero al atardecer"
          width={1920}
          height={1280}
          className="size-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-navy/60 via-navy/70 to-navy" />
        <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/40 to-transparent" />
      </motion.div>

      <div className="relative mx-auto flex h-full max-w-7xl flex-col justify-center px-6 pt-24">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mb-6 inline-flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.4em] text-gold"
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
          className="mt-8 max-w-xl text-pretty text-base leading-relaxed text-slate md:text-lg"
        >
          Liberamos al Productor Asesor de la carga operativa con infraestructura tecnológica
          de vanguardia y 25 años de solidez institucional en toda la Argentina.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45 }}
          className="mt-12 flex flex-wrap gap-4"
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

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-10 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-[10px] uppercase tracking-[0.4em] text-cream/40 md:flex"
      >
        Scroll
        <span className="block h-10 w-px animate-pulse bg-cream/40" />
      </motion.div>
    </header>
  );
}
