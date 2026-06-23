import { motion } from "framer-motion";
import { useCallback, useRef, useState } from "react";
import { MoveHorizontal } from "lucide-react";
import beforeImg from "@/assets/before-chaos.jpg";
import afterImg from "@/assets/after-clean.jpg";

export function BeforeAfterSlider() {
  const [pos, setPos] = useState(52);
  const ref = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);

  const update = useCallback((clientX: number) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const next = ((clientX - rect.left) / rect.width) * 100;
    setPos(Math.max(4, Math.min(96, next)));
  }, []);

  return (
    <section className="bg-navy py-24">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-12 max-w-2xl"
        >
          <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.4em] text-gold">
            El cambio operativo
          </p>
          <h2 className="font-display text-4xl font-medium leading-tight text-balance text-cream md:text-5xl">
            De la sobrecarga administrativa al
            <span className="italic text-gold"> foco estratégico.</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          ref={ref}
          onMouseMove={(e) => dragging.current && update(e.clientX)}
          onMouseUp={() => (dragging.current = false)}
          onMouseLeave={() => (dragging.current = false)}
          onTouchMove={(e) => update(e.touches[0].clientX)}
          className="relative aspect-[16/10] w-full select-none overflow-hidden rounded-2xl border border-white/10 shadow-2xl md:aspect-[21/9]"
        >
          {/* After (base) */}
          <img
            src={afterImg}
            alt="Modelo JH Broker"
            width={1200}
            height={800}
            loading="lazy"
            className="absolute inset-0 size-full object-cover"
          />
          <div className="absolute right-6 top-6 z-20 inline-flex items-center gap-2 rounded-full bg-navy/70 px-4 py-1.5 backdrop-blur">
            <span className="size-1.5 rounded-full bg-gold" />
            <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-cream">
              Modelo JH Broker
            </span>
          </div>

          {/* Before (clipped) */}
          <div
            className="absolute inset-0 overflow-hidden"
            style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
          >
            <img
              src={beforeImg}
              alt="Gestión tradicional"
              width={1200}
              height={800}
              loading="lazy"
              className="size-full object-cover grayscale"
            />
            <div className="absolute inset-0 bg-navy/40" />
            <div className="absolute left-6 top-6 inline-flex items-center gap-2 rounded-full bg-black/60 px-4 py-1.5 backdrop-blur">
              <span className="size-1.5 rounded-full bg-cream/60" />
              <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-cream/80">
                Gestión tradicional
              </span>
            </div>
          </div>

          {/* Divider + handle */}
          <div
            className="absolute inset-y-0 z-30 w-0.5 bg-gold"
            style={{ left: `${pos}%` }}
          >
            <button
              type="button"
              onMouseDown={() => (dragging.current = true)}
              onTouchStart={() => (dragging.current = true)}
              className="neumorph-gold absolute left-1/2 top-1/2 grid size-12 -translate-x-1/2 -translate-y-1/2 cursor-ew-resize place-items-center rounded-full bg-gold text-navy"
              aria-label="Deslizar comparación"
            >
              <MoveHorizontal className="size-5" />
            </button>
          </div>

          {/* Invisible range for accessibility */}
          <input
            type="range"
            min={4}
            max={96}
            value={pos}
            onChange={(e) => setPos(Number(e.target.value))}
            className="absolute inset-0 z-40 size-full cursor-ew-resize opacity-0"
            aria-label="Posición del comparador"
          />
        </motion.div>
      </div>
    </section>
  );
}
