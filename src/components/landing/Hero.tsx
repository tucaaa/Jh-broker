import { motion, useScroll, useTransform, useReducedMotion, useMotionValue, useSpring } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useRef, useEffect } from "react";

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 28, filter: "blur(6px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const prefersReducedMotion = useReducedMotion();

  // Parallax suave en scroll
  const { scrollY } = useScroll();
  const rawVideoY = useTransform(scrollY, [0, 800], [0, 140]);
  const rawVideoScale = useTransform(scrollY, [0, 800], [1, 1.08]);
  const rawContentY = useTransform(scrollY, [0, 600], [0, -60]);
  const rawContentOpacity = useTransform(scrollY, [0, 500], [1, 0.2]);

  const videoY = useSpring(rawVideoY, { stiffness: 80, damping: 20, mass: 0.4 });
  const videoScale = useSpring(rawVideoScale, { stiffness: 80, damping: 20, mass: 0.4 });
  const contentY = useSpring(rawContentY, { stiffness: 90, damping: 22, mass: 0.4 });

  // Parallax por puntero (sutil)
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const px = useSpring(pointerX, { stiffness: 60, damping: 18 });
  const py = useSpring(pointerY, { stiffness: 60, damping: 18 });

  useEffect(() => {
    if (prefersReducedMotion) return;
    const handler = (e: PointerEvent) => {
      const el = ref.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const nx = (e.clientX - rect.left) / rect.width - 0.5;
      const ny = (e.clientY - rect.top) / rect.height - 0.5;
      pointerX.set(nx * 18);
      pointerY.set(ny * 14);
    };
    window.addEventListener("pointermove", handler);
    return () => window.removeEventListener("pointermove", handler);
  }, [pointerX, pointerY, prefersReducedMotion]);

  return (
    <motion.header
      ref={ref}
      id="top"
      className="relative flex h-screen min-h-[720px] w-full items-center overflow-hidden bg-navy"
    >
      {/* 1. EL TRUCO: Video al 100% de ancho (w-full) alineado a la derecha (object-right) */}
      <motion.div
        style={{ y: prefersReducedMotion ? 0 : videoY, scale: prefersReducedMotion ? 1 : videoScale }}
        className="absolute inset-0 z-0 h-full w-full will-change-transform"
      >
        <motion.video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          style={{ x: prefersReducedMotion ? 0 : px, y: prefersReducedMotion ? 0 : py }}
          className="h-full w-full object-cover object-right opacity-100"
          initial={{ opacity: 0, scale: 1.12 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <source src={"/broker.mp4"} type="video/mp4" />
        </motion.video>
      </motion.div>

      {/* 2. MÁSCARA ULTRA SUAVE: Tapa al 100% el lado izquierdo y se desvanece de golpe hacia la derecha */}
      <div
        className="absolute inset-0 z-[1] pointer-events-none hidden md:block"
        style={{
          background:
            "linear-gradient(to right, var(--brand-navy) 0%, var(--brand-navy) 42%, color-mix(in oklab, var(--brand-navy) 70%, transparent) 60%, color-mix(in oklab, var(--brand-navy) 20%, transparent) 80%, transparent 100%)",
        }}
      />
      {/* Degradado exclusivo para celulares (de abajo hacia arriba) */}
      <div className="absolute inset-0 z-[1] bg-gradient-to-t from-navy via-navy/40 to-transparent md:hidden pointer-events-none" />

      {/* 3. CONTENIDO EN CUADRANTE ESTRICTO */}
      <motion.div
        style={{ y: prefersReducedMotion ? 0 : contentY, opacity: prefersReducedMotion ? 1 : rawContentOpacity }}
        className="relative z-10 mx-auto w-full max-w-7xl px-6 md:px-12 pt-24"
      >
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex max-w-2xl flex-col items-start gap-6 text-left"
        >
          {/* Eyebrow / Etiqueta superior */}
          <motion.span
            variants={itemVariants}
            className="inline-flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.4em] text-slate"
          >
            <motion.span
              className="block h-px bg-slate/40"
              initial={{ width: 0 }}
              animate={{ width: 40 }}
              transition={{ duration: 0.9, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            />
            #NoSosUnNúmero · JH Broker
          </motion.span>

          {/* Título unificado en Azul Marino Oscuro sólido */}
          <motion.h1
            variants={itemVariants}
            className="font-hero text-6xl font-medium leading-[1.05] tracking-[-0.02em] text-balance text-cream md:text-7xl lg:text-8xl"
          >
            No Sos <br />
            Un Número.
          </motion.h1>

          {/* Párrafo descriptivo alineado */}
          <motion.p
            variants={itemVariants}
            className="text-pretty text-base leading-relaxed text-slate md:text-lg max-w-xl"
          >
            La voz de los que eligieron crecer con JH Broker. Acompañamos al Productor Asesor
            con tecnología, respaldo institucional y trato humano en toda la Argentina.
          </motion.p>

          {/* BOTONES PREMIUM MODERNOS */}
          <motion.div variants={itemVariants} className="mt-6 flex flex-wrap gap-4">
            
            {/* Botón Principal: Redondeado completo, fondo Azul Marino, texto blanco */}
            <motion.a
              href="#productores"
              className="group relative inline-flex items-center gap-3 rounded-full bg-cream px-8 py-4 text-[11px] font-bold uppercase tracking-[0.25em] text-white shadow-md shadow-cream/10"
              whileHover={{ y: -3, scale: 1.02 }}
              whileTap={{ y: 0, scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400, damping: 22 }}
            >
              <span className="relative">Sumarme a la red</span>
              <motion.span
                className="relative"
                initial={{ x: 0, y: 0 }}
                whileHover={{ x: 3, y: -3 }}
                transition={{ type: "spring", stiffness: 500, damping: 20 }}
              >
                <ArrowUpRight className="size-4" />
              </motion.span>
            </motion.a>

            {/* Botón Secundario: Transparente con borde sutil en gris oscuro */}
            <motion.a
              href="#ecosistema"
              className="relative inline-flex items-center gap-3 rounded-full border border-slate/30 bg-white/40 px-8 py-4 text-[11px] font-bold uppercase tracking-[0.25em] text-cream backdrop-blur-sm transition-all duration-300 hover:border-cream/40 hover:bg-cream/5"
              whileHover={{ y: -2 }}
              whileTap={{ y: 0, scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400, damping: 22 }}
            >
              Conocer ecosistema
            </motion.a>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Scroll indicator animado */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.4, duration: 1 }}
        className="absolute bottom-10 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-3 text-[10px] uppercase tracking-[0.4em] text-cream/40 md:flex"
      >
        Scroll
        <span className="relative block h-10 w-px overflow-hidden bg-cream/15">
          <motion.span
            className="absolute left-0 top-0 block h-1/2 w-full bg-cream/40"
            animate={{ y: ["-100%", "200%"] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          />
        </span>
      </motion.div>
    </motion.header>
  );
}