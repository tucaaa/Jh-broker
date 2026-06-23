import { motion } from "framer-motion";
import { Check } from "lucide-react";

const plans = [
  {
    name: "PAS Asociado",
    tier: "Emergente",
    desc: "Para productores que inician su recorrido con respaldo institucional.",
    features: [
      "Soporte administrativo base",
      "Acceso a 15+ aseguradoras",
      "Multicotizador online",
      "Capacitación trimestral",
    ],
    cta: "Postularme",
  },
  {
    name: "Red Federal JH",
    tier: "Premium",
    desc: "El plan más elegido. Estructura completa para escalar tu cartera.",
    features: [
      "Gestión 360° de siniestros",
      "Suscripción exclusiva en riesgos complejos",
      "Coworking en sedes propias",
      "Mesa técnica dedicada",
      "Marketing y branding JH",
    ],
    cta: "Consolidar cartera",
    highlight: true,
  },
  {
    name: "Broker Integral",
    tier: "Corporativo",
    desc: "Para brokers y oficinas con cartera consolidada y volumen alto.",
    features: [
      "Marca blanca opcional",
      "CRM y tecnología propios",
      "Alianza comercial directa",
      "Reporting ejecutivo",
    ],
    cta: "Consultar alianza",
  },
];

export function Pricing() {
  return (
    <section id="productores" className="bg-navy py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.4em] text-gold">
            Modelos de asociación
          </p>
          <h2 className="font-display text-4xl font-medium leading-tight text-balance text-cream md:text-5xl">
            Un plan a la <span className="italic text-gold">medida</span> de tu ambición.
          </h2>
        </div>

        <div className="grid items-stretch gap-6 md:grid-cols-3">
          {plans.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className={`relative flex flex-col rounded-2xl p-8 transition-all ${
                p.highlight
                  ? "glass-strong neumorph-gold scale-100 md:scale-[1.04]"
                  : "glass hover:-translate-y-1"
              }`}
            >
              {p.highlight && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gold px-4 py-1 text-[10px] font-bold uppercase tracking-[0.3em] text-navy">
                  Más elegido
                </div>
              )}
              <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-gold">
                {p.tier}
              </p>
              <h3 className="mt-3 font-display text-3xl text-cream">{p.name}</h3>
              <p className="mt-3 text-sm text-slate">{p.desc}</p>

              <ul className="my-10 flex-1 space-y-4">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm text-cream/85">
                    <Check className="mt-0.5 size-4 shrink-0 text-gold" strokeWidth={2.5} />
                    {f}
                  </li>
                ))}
              </ul>

              <a
                href="#contacto"
                className={`mt-auto inline-flex items-center justify-center px-6 py-4 text-[11px] font-bold uppercase tracking-[0.25em] transition-all ${
                  p.highlight
                    ? "bg-gold text-navy hover:bg-gold-soft"
                    : "border border-white/15 text-cream hover:border-gold hover:text-gold"
                }`}
              >
                {p.cta}
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
