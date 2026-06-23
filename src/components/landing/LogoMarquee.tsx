const logos = [
  "Zurich",
  "Allianz",
  "Sancor Seguros",
  "Federación Patronal",
  "Chubb",
  "SMG Seguros",
  "La Caja",
  "Mapfre",
  "Galeno",
  "San Cristóbal",
];

export function LogoMarquee() {
  const row = [...logos, ...logos];
  return (
    <section className="relative overflow-hidden border-y border-white/5 bg-navy-deep py-14">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-32 bg-gradient-to-r from-navy-deep to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-32 bg-gradient-to-l from-navy-deep to-transparent" />
      <div className="mx-auto mb-8 max-w-7xl px-6">
        <p className="text-center text-[10px] font-medium uppercase tracking-[0.4em] text-cream/40">
          Operamos con las principales aseguradoras del país
        </p>
      </div>
      <div className="jh-marquee items-center gap-20 px-10">
        {row.map((name, i) => (
          <span
            key={i}
            className="whitespace-nowrap font-display text-2xl italic text-cream/30 transition-colors hover:text-gold"
          >
            {name}
          </span>
        ))}
      </div>
    </section>
  );
}
