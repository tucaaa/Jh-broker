import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

export function ContactSection() {
  const [loading, setLoading] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      (e.target as HTMLFormElement).reset();
      toast.success("Mensaje enviado", {
        description: "Nuestro equipo se pondrá en contacto en breve.",
      });
    }, 900);
  }

  return (
    <section id="contacto" className="bg-navy-deep py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 max-w-2xl">
          <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.4em] text-gold">
            Hablemos
          </p>
          <h2 className="font-display text-4xl font-medium leading-tight text-balance text-cream md:text-5xl">
            Contacto <span className="italic text-gold">directo.</span>
          </h2>
        </div>

        <div className="grid gap-10 lg:grid-cols-2">
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass space-y-5 rounded-2xl p-8 md:p-10"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <Field label="Nombre" name="name" placeholder="Tu nombre completo" required />
              <Field
                label="Email"
                name="email"
                type="email"
                placeholder="vos@empresa.com"
                required
              />
            </div>
            <div className="grid gap-5 sm:grid-cols-2">
              <Field label="Teléfono" name="phone" placeholder="+54 9 ..." />
              <Field label="Provincia" name="province" placeholder="Mendoza, CABA..." />
            </div>
            <div>
              <label className="mb-2 block text-[10px] font-semibold uppercase tracking-[0.25em] text-cream/70">
                Consulta
              </label>
              <textarea
                name="message"
                rows={4}
                required
                placeholder="Contanos sobre tu cartera o proyecto..."
                className="w-full resize-none rounded-md border border-white/10 bg-white/5 px-4 py-3 text-sm text-cream placeholder:text-cream/30 focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/20"
              />
            </div>
            <button
              type="submit"
              disabled={loading}
              className="neumorph-gold group inline-flex w-full items-center justify-center gap-3 bg-gold px-6 py-4 text-[11px] font-bold uppercase tracking-[0.25em] text-navy transition-all hover:-translate-y-0.5 disabled:opacity-60"
            >
              {loading ? "Enviando..." : "Enviar mensaje"}
              <Send className="size-4 transition-transform group-hover:translate-x-0.5" />
            </button>
          </motion.form>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-col gap-6"
          >
            <div className="glass grid gap-4 rounded-2xl p-8">
              <InfoRow icon={MapPin} title="Sede Central" text="Mendoza, Argentina" />
              <InfoRow icon={Phone} title="Teléfono" text="+54 261 000-0000" />
              <InfoRow icon={Mail} title="Email" text="contacto@jhbroker.com.ar" />
            </div>
            <div className="relative h-72 overflow-hidden rounded-2xl border border-white/10 md:h-80">
              <iframe
                title="Sede JH Broker en Mendoza"
                src="https://www.google.com/maps?q=Mendoza,Argentina&output=embed"
                className="size-full grayscale-[0.4]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
  required,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="mb-2 block text-[10px] font-semibold uppercase tracking-[0.25em] text-cream/70">
        {label}
      </label>
      <input
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="w-full rounded-md border border-white/10 bg-white/5 px-4 py-3 text-sm text-cream placeholder:text-cream/30 focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/20"
      />
    </div>
  );
}

function InfoRow({
  icon: Icon,
  title,
  text,
}: {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  text: string;
}) {
  return (
    <div className="flex items-start gap-4">
      <div className="grid size-10 shrink-0 place-items-center rounded-full border border-gold/30 bg-gold/10 text-gold">
        <Icon className="size-4" />
      </div>
      <div>
        <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-cream/60">
          {title}
        </p>
        <p className="mt-1 text-sm text-cream">{text}</p>
      </div>
    </div>
  );
}
