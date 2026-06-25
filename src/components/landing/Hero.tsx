import { motion, useScroll, useTransform, useReducedMotion, useMotionValue, useSpring } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useRef, useEffect } from "react";
import brokerVideo from "@/assets/broker.mp4.asset.json";

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
      {/* Video de fondo con parallax */}
      <motion.div
        style={{ y: prefersReducedMotion ? 0 : videoY, scale: prefersReducedMotion ? 1 : videoScale }}
        className="absolute right-0 top-0 z-0 h-full w-full md:w-[65%] will-change-transform"
      >
        <motion.video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          style={{ x: prefersReducedMotion ? 0 : px, y: prefersReducedMotion ? 0 : py }}
          className="h-full w-full object-cover"
          initial={{ opacity: 0, scale: 1.12 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <source src={brokerVideo.url} type="video/mp4" />
        </motion.video>
      </motion.div>

      {/* Overlay degradado navy de marca */}
      <div
        className="absolute inset-0 z-[1] pointer-events-none"
        style={{
          background:
            "linear-gradient(to right, var(--brand-navy-deep) 28%, color-mix(in oklab, var(--brand-navy-deep) 80%, transparent) 52%, color-mix(in oklab, var(--brand-navy-deep) 35%, transparent) 75%, transparent 100%)",
        }}
      />
      <div className="absolute inset-0 z-[1] bg-gradient-to-t from-navy-deep via-navy-deep/70 to-transparent md:hidden" />

      {/* Contenido con parallax inverso */}
      <motion.div
        style={{ y: prefersReducedMotion ? 0 : contentY, opacity: prefersReducedMotion ? 1 : rawContentOpacity }}
        className="relative z-10 mx-auto w-full max-w-7xl px-6 pt-24"
      >
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex max-w-2xl flex-col items-start gap-6 text-left"
        >
          <motion.span
            variants={itemVariants}
            className="inline-flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.4em] text-gold"
          >
            <motion.span
              className="block h-px bg-gold"
              initial={{ width: 0 }}
              animate={{ width: 40 }}
              transition={{ duration: 0.9, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            />
            #NoSosUnNúmero · JH Broker
          </motion.span>

          <motion.h1
            variants={itemVariants}
            className="font-hero text-6xl font-medium leading-[0.92] tracking-[-0.02em] text-balance text-cream md:text-8xl lg:text-[7.5rem]"
            style={{ fontOpticalSizing: "auto", fontVariationSettings: '"opsz" 144' }}
          >
            No Sos <br />
            Un <motion.span
              className="italic font-black text-gold inline-block"
              whileHover={prefersReducedMotion ? undefined : { letterSpacing: "0.01em", transition: { duration: 0.4 } }}
            >
              Número.
            </motion.span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-pretty text-base leading-relaxed text-cream/75 md:text-lg"
          >
            La voz de los que eligieron crecer con JH Broker. Acompañamos al Productor Asesor
            con tecnología, respaldo institucional y trato humano en toda la Argentina.
          </motion.p>


          <motion.div variants={itemVariants} className="mt-4 flex flex-wrap gap-4">
            {/* CTA primario con microinteracciones */}
            <motion.a
              href="#productores"
              className="group neumorph-gold relative inline-flex items-center gap-3 overflow-hidden bg-gold px-8 py-4 text-[11px] font-bold uppercase tracking-[0.25em] text-navy"
              whileHover={{ y: -3, scale: 1.02 }}
              whileTap={{ y: 0, scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400, damping: 22 }}
            >
              {/* Shimmer */}
              <motion.span
                aria-hidden
                className="pointer-events-none absolute inset-y-0 -left-1/3 w-1/3 bg-gradient-to-r from-transparent via-white/40 to-transparent"
                initial={{ x: "-150%" }}
                whileHover={{ x: "450%" }}
                transition={{ duration: 0.9, ease: "easeOut" }}
              />
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

            {/* CTA secundario */}
            <motion.a
              href="#ecosistema"
              className="glass relative inline-flex items-center gap-3 px-8 py-4 text-[11px] font-bold uppercase tracking-[0.25em] text-cream"
              whileHover={{ y: -2, backgroundColor: "rgba(255,255,255,0.10)" }}
              whileTap={{ y: 0, scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400, damping: 22 }}
            >
              Conocer ecosistema
              <motion.span
                aria-hidden
                className="block h-px bg-cream/60"
                initial={{ width: 0 }}
                whileHover={{ width: 20 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
              />
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
            className="absolute left-0 top-0 block h-1/2 w-full bg-gold"
            animate={{ y: ["-100%", "200%"] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          />
        </span>
      </motion.div>
    </motion.header>
  );
}
