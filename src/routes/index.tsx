import { createFileRoute } from "@tanstack/react-router";
import { Toaster } from "sonner";

import { Navbar } from "@/components/landing/Navbar";
import { Hero } from "@/components/landing/Hero";
import { LogoMarquee } from "@/components/landing/LogoMarquee";
import { Stats } from "@/components/landing/Stats";
import { FeatureCards } from "@/components/landing/FeatureCards";
import { BeforeAfterSlider } from "@/components/landing/BeforeAfterSlider";
import { ProductCards } from "@/components/landing/ProductCards";
import { Pricing } from "@/components/landing/Pricing";
import { TestimonialCarousel } from "@/components/landing/TestimonialCarousel";
import { FAQ } from "@/components/landing/FAQ";
import { CTABanner } from "@/components/landing/CTABanner";
import { ContactSection } from "@/components/landing/ContactSection";
import { Footer } from "@/components/landing/Footer";

const TITLE = "JH Broker — Productores Asesores de Seguros | 25 años de trayectoria federal";
const DESCRIPTION =
  "JH Broker: organización líder de PAS en Argentina con +600 productores, +50.000 riesgos administrados y presencia en 7 provincias. Respaldo técnico, operativo y federal.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:url", content: "/" },
      { property: "og:type", content: "website" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "JH Broker",
          description: DESCRIPTION,
          foundingDate: "1998",
          areaServed: "AR",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Mendoza",
            addressCountry: "AR",
          },
          sameAs: [
            "https://www.linkedin.com/",
            "https://www.instagram.com/",
            "https://www.facebook.com/",
          ],
        }),
      },
    ],
  }),
  component: LandingPage,
});

function LandingPage() {
  return (
    <div className="min-h-screen bg-navy text-cream">
      <Navbar />
      <main>
        <Hero />
        <LogoMarquee />
        <Stats />
        <FeatureCards />
        <BeforeAfterSlider />
        <ProductCards />
        <Pricing />
        <TestimonialCarousel />
        <FAQ />
        <CTABanner />
        <ContactSection />
      </main>
      <Footer />
      <Toaster theme="dark" position="bottom-right" />
    </div>
  );
}
