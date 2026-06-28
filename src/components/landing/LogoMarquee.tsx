// Lista de aseguradoras mapeada a tus imágenes en public/brands/
const BRANDS = [
  { name: "Zurich", src: "/brands/zurich.png" },
  { name: "Allianz", src: "/brands/allianz.png" },
  { name: "Sancor Seguros", src: "/brands/sancor.png" },
  { name: "Federación Patronal", src: "/brands/federacion.png" },
  { name: "atm", src: "/brands/atm.png" },
  { name: "mercantil", src: "/brands/mercantil.png" },
  { name: "La segunda", src: "/brands/lacaja.png" },
  { name: "Mapfre", src: "/brands/mapfre.png" },
  { name: "Galeano", src: "/brands/galeano.png" },
  { name: "San Cristóbal", src: "/brands/sancristobal.png" },
];

export function LogoMarquee() {
  // Ya no usamos "const row = ..." porque vamos a renderizar dos bloques separados para el loop perfecto.

  return (
    <section className="relative overflow-hidden border-y border-white/5 bg-cream py-14">
      
      {/* Máscaras de degradado a los costados para la transición suave */}
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-32 bg-gradient-to-r from-cream to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-32 bg-gradient-to-l from-cream to-transparent" />
      
      <div className="mx-auto mb-10 max-w-7xl px-6">
        <p className="text-center text-[11px] font-medium uppercase tracking-[0.6em] text-white/50">
          Operamos con las principales aseguradoras del país
        </p>
      </div>

      {/* Contenedor principal de la animación */}
      <div className="jh-marquee flex w-max">
        
        {/* ===================== TANDA 1 ===================== */}
        <div className="flex w-max items-center gap-24 pr-24">
          {BRANDS.map((brand, i) => (
            /* 1. CONTENEDOR PADRE: Tamaño fijo y overflow-visible para que los logos gigantes no se corten */
            <div 
              key={`tanda1-${i}`} 
              className="flex h-16 w-40 shrink-0 items-center justify-center overflow-hidden"
              title={brand.name}
            >
              <div className="flex h-full w-full cursor-pointer items-center justify-center transition-transform duration-300 hover:scale-110">
                <img
                  src={brand.src}
                  alt={`Logo de ${brand.name}`}
                  className="h-full w-full object-contain"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                  }}
                />  
              </div>
            </div>
          ))}
        </div>

        {/* ===================== TANDA 2 ===================== */}
        {/* Copia exacta de Tanda 1 para que el bucle continuo sea imperceptible */}
        <div className="flex w-max items-center gap-24 pr-24">
          {BRANDS.map((brand, i) => (
            <div 
              key={`tanda2-${i}`} 
              className="flex h-16 w-40 shrink-0 items-center justify-center overflow-hidden"
              title={brand.name}
            >
              <div className="flex h-full w-full cursor-pointer items-center justify-center transition-transform duration-300 hover:scale-110">
                <img
                  src={brand.src}
                  alt={`Logo de ${brand.name}`}
                  className="h-full w-full object-contain"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                  }}
                />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}