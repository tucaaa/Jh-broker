import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { href: "#ecosistema", label: "Ecosistema" },
  { href: "#productores", label: "Productores" },
  { href: "#trayectoria", label: "Trayectoria" },
  { href: "#contacto", label: "Contacto" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "glass-strong border-b border-white/10 py-3"
          : "border-b border-transparent bg-transparent py-5"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6">
        <a href="#top" className="flex items-center gap-3">
          <div className="grid size-9 place-items-center rounded-sm bg-gold font-display text-navy">
            <span className="text-base font-bold">JH</span>
          </div>
          <span className="font-display text-lg font-bold uppercase tracking-[0.18em] text-cream">
            Broker
          </span>
        </a>

        <div className="hidden items-center gap-10 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-xs font-medium uppercase tracking-[0.22em] text-cream/70 transition-colors hover:text-gold"
            >
              {l.label}
            </a>
          ))}
        </div>

        <div className="hidden md:block">
          <a
            href="#contacto"
            className="inline-flex items-center gap-2 bg-gold px-6 py-3 text-[11px] font-bold uppercase tracking-[0.22em] text-navy transition-all hover:-translate-y-0.5 hover:bg-gold-soft"
          >
            Asociarse
          </a>
        </div>

        <button
          onClick={() => setOpen((o) => !o)}
          className="grid size-10 place-items-center rounded border border-white/10 text-cream md:hidden"
          aria-label="Menu"
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {open && (
        <div className="glass-strong mx-6 mt-3 rounded-lg border border-white/10 px-6 py-6 md:hidden">
          <div className="flex flex-col gap-5">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-sm font-medium uppercase tracking-[0.22em] text-cream/80"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#contacto"
              onClick={() => setOpen(false)}
              className="mt-2 bg-gold px-6 py-3 text-center text-[11px] font-bold uppercase tracking-[0.22em] text-navy"
            >
              Asociarse
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
