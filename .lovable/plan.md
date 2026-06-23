## Nota sobre el stack

El proyecto corre sobre **TanStack Start + React 19 + Tailwind v4 + Vite** (no Next.js App Router). El resultado funcional será equivalente: componentes React reutilizables, animaciones con Framer Motion, SEO vía `head()` por ruta, y máximo rendimiento en edge. Si más adelante querés portarlo a Next.js, la estructura de componentes es directamente transferible.

## Dirección visual elegida

**Navy & Gold Architectural** — fondo `#0F172A` (navy profundo), acentos en oro `#D4AF37`, tipografía display Playfair + sans Inter. Transmite solidez institucional, banca privada, 25 años de trayectoria. Glassmorphism en navbar y tarjetas, neumorfismo sutil en botones premium.

## Secciones (en `src/routes/index.tsx`, una sola página)

1. **Navbar sticky** — glass + blur, logo JH, navegación, CTA "Asociarse"
2. **Hero** `h-screen` — imagen parallax distrito financiero al atardecer, título "La arquitectura del respaldo total", dos CTAs
3. **Marquee de logos** — aseguradoras partners en loop CSS infinito
4. **Stats federales** — 50k+ riesgos / 600+ productores / 7 provincias / 25 años
5. **Feature Cards** — Respaldo Técnico, Agilidad Operativa, Red Federal (fade-in-up + hover lift)
6. **Before / After Slider** — "Gestión tradicional" vs "Modelo JH Broker", draggable
7. **Product Cards** — Caución, Agro, Energía, Flotas (image zoom + slide-up CTA)
8. **Pricing** — PAS Asociado / Red Federal JH (Premium, borde dorado glass) / Broker Integral
9. **Testimonial Carousel** — con flechas, autoplay, productores de Mendoza/Neuquén
10. **FAQ Accordion** — Radix accordion ya disponible en `src/components/ui/`
11. **CTA Banner** — bloque dorado "Escale su estructura"
12. **Contact + Google Maps** — form + iframe embed (sede Mendoza)
13. **Footer** — multicolumna oscuro, sedes, legal, redes sociales (LinkedIn/IG/FB)

## Estructura de archivos

```text
src/
├── routes/
│   ├── __root.tsx          (head: fuentes Playfair/Inter via <link>, OG defaults)
│   └── index.tsx           (compone todas las secciones + head SEO)
├── components/
│   └── landing/
│       ├── Navbar.tsx
│       ├── Hero.tsx
│       ├── LogoMarquee.tsx
│       ├── Stats.tsx
│       ├── FeatureCards.tsx
│       ├── BeforeAfterSlider.tsx
│       ├── ProductCards.tsx
│       ├── Pricing.tsx
│       ├── TestimonialCarousel.tsx
│       ├── FAQ.tsx
│       ├── CTABanner.tsx
│       ├── ContactSection.tsx
│       └── Footer.tsx
├── assets/                 (imágenes generadas: hero, products, before/after)
└── styles.css              (tokens @theme: --color-brand-navy, --color-brand-gold, fuentes, keyframes marquee)
```

## Detalles técnicos

- **Tailwind v4**: tokens en `@theme` dentro de `src/styles.css`. Fuentes vía `<link>` en `__root.tsx` (nunca `@import` remoto).
- **Animaciones**: `bun add framer-motion` — usar `motion.div` con `whileInView` + `viewport={{ once: true }}` para scroll reveal. Marquee y parallax con CSS puro.
- **Iconos**: `lucide-react` (ya disponible).
- **Smooth scroll**: `html { scroll-behavior: smooth }` global.
- **Imágenes**: generar 6 imágenes premium (hero, 4 product cards, before/after) con `imagegen` y guardar en `src/assets/`.
- **Accordion / carousel**: reutilizar Radix de `src/components/ui/accordion.tsx` y `carousel.tsx`.
- **Form de contacto**: por ahora solo UI (toast on submit). Si querés persistencia/email real, lo agregamos en una segunda iteración con Lovable Cloud.
- **Google Maps**: iframe embed simple apuntando a Mendoza (sin requerir API key).
- **SEO**: `head()` en `index.tsx` con title "JH Broker — Productores Asesores de Seguros | 25 años de trayectoria federal", description, og:title/description/url, canonical relativa `/`, JSON-LD `Organization` con sedes y datos de contacto.
- **Responsive**: mobile-first, grids que colapsan, navbar con menú hamburguesa en `<md`.

## Lo que NO incluyo en esta iteración

- Envío real del form (necesita backend / Cloud)
- Multi-idioma
- Blog / segunda página
- Portal del productor (login)

Si querés cualquiera de estos después, los sumamos sobre la base ya armada.
