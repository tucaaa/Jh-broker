import { Facebook, Instagram, Linkedin } from "lucide-react";
import { JhBrokerLogo } from "./JhBrokerLogo";

const sedes = ["Mendoza (Casa Central)", "Buenos Aires", "Córdoba", "Mar del Plata", "Neuquén"];
const nav = [
  { href: "#ecosistema", label: "Ecosistema" },
  { href: "#productores", label: "Sumar producción" },
  { href: "#trayectoria", label: "Trayectoria" },
  { href: "#contacto", label: "Contacto" },
];

export function Footer() {
  return (
    <footer className="border-t border-white/5 bg-navy-deep pt-20 pb-10 text-cream/70">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 md:grid-cols-4">
        <div className="md:col-span-1">
          <div className="mb-6 flex items-center">
            <JhBrokerLogo className="text-3xl" />
          </div>
          <p className="max-w-xs text-pretty text-xs leading-relaxed">
            Organización de Productores Asesores de Seguros con más de 25 años de
            trayectoria federal en Argentina.
          </p>
        </div>

        <div>
          <h5 className="mb-5 text-[10px] font-bold uppercase tracking-[0.3em] text-cream">
            Sedes
          </h5>
          <ul className="space-y-3 text-xs">
            {sedes.map((s) => (
              <li key={s}>{s}</li>
            ))}
          </ul>
        </div>

        <div>
          <h5 className="mb-5 text-[10px] font-bold uppercase tracking-[0.3em] text-cream">
            Navegación
          </h5>
          <ul className="space-y-3 text-xs">
            {nav.map((n) => (
              <li key={n.href}>
                <a href={n.href} className="transition-colors hover:text-gold">
                  {n.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h5 className="mb-5 text-[10px] font-bold uppercase tracking-[0.3em] text-cream">
            Seguinos
          </h5>
          <div className="flex gap-3">
            <SocialLink href="https://www.linkedin.com/" label="LinkedIn" Icon={Linkedin} />
            <SocialLink href="https://www.instagram.com/" label="Instagram" Icon={Instagram} />
            <SocialLink href="https://www.facebook.com/" label="Facebook" Icon={Facebook} />
          </div>
          <p className="mt-6 text-xs">contacto@jhbroker.com.ar</p>
        </div>
      </div>

      <div className="mx-auto mt-16 flex max-w-7xl flex-col items-center justify-between gap-3 border-t border-white/5 px-6 pt-8 text-[10px] uppercase tracking-[0.3em] text-cream/40 md:flex-row">
        <p>© {new Date().getFullYear()} JH Broker · Todos los derechos reservados</p>
        <p>SSN Matrícula · Política de privacidad</p>
      </div>
    </footer>
  );
}

function SocialLink({
  href,
  label,
  Icon,
}: {
  href: string;
  label: string;
  Icon: React.ComponentType<{ className?: string }>;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer noopener"
      aria-label={label}
      className="grid size-10 place-items-center rounded border border-white/10 bg-white/5 text-cream transition-colors hover:border-gold hover:bg-gold hover:text-navy"
    >
      <Icon className="size-4" />
    </a>
  );
}
