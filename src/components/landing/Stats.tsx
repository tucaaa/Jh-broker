import { motion } from "framer-motion";

const stats = [
  { n: "01", value: "+50K", label: "Riesgos administrados" },
  { n: "02", value: "+600", label: "Productores asociados" },
  { n: "03", value: "7", label: "Provincias con presencia directa" },
  { n: "04", value: "25", label: "Años de trayectoria líder" },
];

export function Stats() {
  return (
    <section id="trayectoria" className="border-b border-white/5 py-24">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-12 px-6 md:grid-cols-4">
        {stats.map((s, i) => (
          <motion.div
            key={s.n}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: i * 0.08 }}
          >
            <span className="block font-mono text-xs tracking-widest text-gold">
              {s.n}/
            </span>
            <p className="mt-3 font-display text-5xl font-medium text-cream md:text-6xl">
              {s.value}
            </p>
            <p className="mt-3 text-[11px] font-medium uppercase tracking-[0.22em] text-slate">
              {s.label}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
