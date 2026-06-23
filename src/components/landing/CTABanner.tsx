import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export function CTABanner() {
  return (
    <section className="bg-navy px-6 py-20">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative mx-auto max-w-7xl overflow-hidden rounded-3xl bg-gold p-12 md:p-20"
      >
        <div className="pointer-events-none absolute -right-10 -top-10 select-none font-display text-[18rem] italic leading-none text-navy/10">
          JH
        </div>

        <div className="relative grid items-center gap-10 md:grid-cols-[1.4fr_1fr]">
          <h2 className="font-display text-4xl font-medium leading-[1.05] text-balance text-navy md:text-6xl">
            Escalá tu estructura con el <span className="italic">respaldo</span> de JH Broker.
          </h2>
          <div className="flex flex-col items-start gap-6 md:items-end">
            <p className="max-w-sm text-pretty text-navy/70 md:text-right">
              Hablemos de tu cartera y diseñemos juntos el camino. Sin compromiso.
            </p>
            <a
              href="#contacto"
              className="group inline-flex items-center gap-3 bg-navy px-8 py-4 text-[11px] font-bold uppercase tracking-[0.25em] text-gold shadow-2xl transition-transform hover:-translate-y-0.5"
            >
              Solicitar entrevista
              <ArrowUpRight className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
