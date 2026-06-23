import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

const items = [
  {
    quote:
      "Delegar la emisión y la cobranza a JH me permitió duplicar mi cartera en menos de dos años. El respaldo en siniestros es, sencillamente, diferencial.",
    name: "Marcos Villalonga",
    role: "Productor Asociado · Mendoza",
    initials: "MV",
  },
  {
    quote:
      "Encontrar un broker con presencia real en el interior y conocimiento técnico en Caución fue clave para el crecimiento de mi oficina corporativa.",
    name: "Elena Rodríguez",
    role: "Broker Partner · Neuquén",
    initials: "ER",
  },
  {
    quote:
      "El soporte tecnológico y la mesa de riesgos especiales transformaron mi forma de trabajar. Hoy asesoro, no administro papeles.",
    name: "Carlos Pellegrini",
    role: "Productor Senior · Buenos Aires",
    initials: "CP",
  },
];

export function TestimonialCarousel() {
  const [i, setI] = useState(0);
  const next = () => setI((p) => (p + 1) % items.length);
  const prev = () => setI((p) => (p - 1 + items.length) % items.length);

  useEffect(() => {
    const id = setInterval(next, 7000);
    return () => clearInterval(id);
  }, []);

  const t = items[i];

  return (
    <section className="overflow-hidden bg-navy-deep py-32">
      <div className="mx-auto max-w-5xl px-6 text-center">
        <p className="mb-12 text-[10px] font-semibold uppercase tracking-[0.4em] text-gold">
          Voces de la red federal
        </p>

        <div className="relative min-h-[280px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6 }}
            >
              <p className="font-display text-2xl italic leading-relaxed text-balance text-cream md:text-4xl">
                <span className="text-gold">“</span>
                {t.quote}
                <span className="text-gold">”</span>
              </p>

              <div className="mt-10 flex items-center justify-center gap-4">
                <div className="grid size-12 place-items-center rounded-full border border-gold/40 bg-gold/10 font-display italic text-gold">
                  {t.initials}
                </div>
                <div className="text-left">
                  <p className="text-sm font-semibold text-cream">{t.name}</p>
                  <p className="text-xs text-slate">{t.role}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="mt-12 flex items-center justify-center gap-4">
          <button
            onClick={prev}
            aria-label="Anterior"
            className="glass grid size-11 place-items-center rounded-full text-cream transition-colors hover:bg-white/10"
          >
            <ArrowLeft className="size-4" />
          </button>
          <div className="flex gap-2">
            {items.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setI(idx)}
                aria-label={`Ir al testimonio ${idx + 1}`}
                className={`h-1 rounded-full transition-all ${
                  idx === i ? "w-8 bg-gold" : "w-3 bg-white/20"
                }`}
              />
            ))}
          </div>
          <button
            onClick={next}
            aria-label="Siguiente"
            className="glass grid size-11 place-items-center rounded-full text-cream transition-colors hover:bg-white/10"
          >
            <ArrowRight className="size-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
