import { motion } from "framer-motion";
import { ShieldCheck, Zap, Network } from "lucide-react";

const features = [
  {
    icon: ShieldCheck,
    title: "Respaldo Técnico",
    text: "Acceso directo a suscriptores senior y condiciones comerciales preferenciales en más de 20 compañías líderes del mercado.",
  },
  {
    icon: Zap,
    title: "Agilidad Operativa",
    text: "Gestión centralizada de siniestros, emisiones y cobranzas con equipos especializados que liberan tu agenda.",
  },
  {
    icon: Network,
    title: "Red Federal",
    text: "Presencia en 7 provincias con oficinas propias en Mendoza, Buenos Aires, Córdoba, Mar del Plata y Neuquén.",
  },
];

export function FeatureCards() {
  return (
    <section id="ecosistema" className="bg-navy py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-20 grid items-end gap-12 md:grid-cols-2">
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="font-display text-4xl font-medium leading-tight text-balance text-cream md:text-5xl"
          >
            Estructura federal para desafíos
            <span className="italic text-gold"> de gran escala.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="max-w-md text-pretty leading-relaxed text-slate"
          >
            Liberamos al productor de la carga administrativa para que el foco sea
            exclusivamente estratégico — el negocio, el cliente, la cartera.
          </motion.p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="glass group flex flex-col rounded-2xl p-8 transition-all duration-500 hover:-translate-y-2 hover:bg-white/10"
            >
              <div className="mb-8 grid size-14 place-items-center rounded-full border border-gold/30 bg-gold/10 text-gold transition-colors group-hover:bg-gold group-hover:text-navy">
                <f.icon className="size-6" strokeWidth={1.5} />
              </div>
              <h3 className="mb-3 font-display text-2xl text-cream">{f.title}</h3>
              <p className="text-pretty text-sm leading-relaxed text-slate">{f.text}</p>
              <div className="mt-8 h-px w-12 bg-gold transition-all duration-500 group-hover:w-full" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
