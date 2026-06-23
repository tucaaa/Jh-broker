import { AnimatePresence, motion } from "framer-motion";
import { Plus } from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    q: "¿Cómo es el proceso de alta para un nuevo productor?",
    a: "Comienza con una entrevista de perfil comercial. Evaluamos tu cartera actual y objetivos para asignar el plan de soporte ideal — desde administrativo base hasta acompañamiento ejecutivo completo.",
  },
  {
    q: "¿Qué aseguradoras integran el panel de JH Broker?",
    a: "Trabajamos con las compañías líderes del mercado argentino: Zurich, Allianz, Sancor Seguros, Federación Patronal, Chubb, SMG, La Caja, Mapfre y más de 20 aseguradoras adicionales según el ramo.",
  },
  {
    q: "¿Ofrecen capacitación técnica en riesgos complejos?",
    a: "Sí. Contamos con un programa continuo de formación en Caución, Agro, Energía, Patrimoniales corporativos y Líneas Financieras, dictado por nuestra mesa técnica senior.",
  },
  {
    q: "¿Puedo conservar mi marca personal como productor?",
    a: "Absolutamente. Operás con tu propia marca y cartera, mientras te apalancás en nuestra infraestructura operativa, tecnológica y de respaldo institucional.",
  },
  {
    q: "¿En qué provincias tienen presencia directa?",
    a: "Tenemos oficinas propias en Mendoza (sede central), Buenos Aires, Córdoba, Mar del Plata y Neuquén, con presencia comercial directa en 7 provincias.",
  },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="bg-navy py-32">
      <div className="mx-auto max-w-3xl px-6">
        <div className="mb-16 text-center">
          <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.4em] text-gold">
            Consultas frecuentes
          </p>
          <h2 className="font-display text-4xl font-medium leading-tight text-balance text-cream md:text-5xl">
            Lo que querés <span className="italic text-gold">saber.</span>
          </h2>
        </div>

        <div className="divide-y divide-white/10 border-y border-white/10">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={i}>
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-start justify-between gap-6 py-6 text-left"
                >
                  <span className="font-display text-lg text-cream md:text-xl">
                    {f.q}
                  </span>
                  <Plus
                    className={`mt-1 size-5 shrink-0 text-gold transition-transform duration-500 ${
                      isOpen ? "rotate-45" : ""
                    }`}
                  />
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="c"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: "easeOut" }}
                      className="overflow-hidden"
                    >
                      <p className="pb-6 pr-12 text-pretty text-sm leading-relaxed text-slate">
                        {f.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
