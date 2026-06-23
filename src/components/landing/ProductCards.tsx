import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import caucion from "@/assets/product-caucion.jpg";
import agro from "@/assets/product-agro.jpg";
import energia from "@/assets/product-energia.jpg";
import flotas from "@/assets/product-flotas.jpg";

const products = [
  { img: caucion, title: "Caución", desc: "Garantías de obra, suministro y aduana." },
  { img: agro, title: "Agro", desc: "Protección climática y de capital productivo." },
  { img: energia, title: "Energía & Oil", desc: "Riesgos operativos complejos y patrimoniales." },
  { img: flotas, title: "Flotas & RC", desc: "Gestión masiva de riesgos vehiculares." },
];

export function ProductCards() {
  return (
    <section className="bg-navy-deep py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 flex flex-wrap items-end justify-between gap-8">
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="font-display text-4xl font-medium leading-tight text-cream md:text-5xl"
          >
            Líneas de <span className="italic text-gold">negocio.</span>
          </motion.h2>
          <p className="max-w-xs text-sm text-slate">
            Soluciones corporativas diseñadas para cubrir cada arista del riesgo empresarial.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((p, i) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="group relative aspect-[3/4] overflow-hidden rounded-xl border border-white/10 bg-navy"
            >
              <img
                src={p.img}
                alt={p.title}
                width={800}
                height={1024}
                loading="lazy"
                className="absolute inset-0 size-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/30 to-transparent" />

              <div className="absolute inset-x-0 bottom-0 p-6">
                <h3 className="font-display text-2xl text-cream">{p.title}</h3>
                <p className="mt-1 text-xs text-cream/60">{p.desc}</p>
              </div>

              {/* Slide-up CTA */}
              <div className="absolute inset-x-0 bottom-0 translate-y-full bg-gold px-6 py-4 transition-transform duration-500 group-hover:translate-y-0">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-bold uppercase tracking-[0.22em] text-navy">
                    Consultar solución
                  </span>
                  <ArrowUpRight className="size-4 text-navy" />
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
