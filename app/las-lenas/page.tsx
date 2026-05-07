import type { Metadata } from 'next'
import { LasLenasHero } from "@/components/las-lenas/hero"
import { LasLenasTrust } from "@/components/las-lenas/trust"
import { LasLenasRouteInfo } from "@/components/las-lenas/route-info"
import { LasLenasServices } from "@/components/las-lenas/services"
import { LasLenasHowItWorks } from "@/components/las-lenas/how-it-works"
import { LasLenasWhyUs } from "@/components/las-lenas/why-us"
import { LasLenasTestimonials } from "@/components/las-lenas/testimonials"
import { LasLenasFAQ } from "@/components/las-lenas/faq"
import { LasLenasFooter } from "@/components/las-lenas/footer"
import { LasLenasHeader } from "@/components/las-lenas/header"
import { WhatsAppButton } from "@/components/landing/whatsapp-button"
import { BackToHomeButton } from "@/components/las-lenas/back-to-home"
import { LasLenasQuoteForm } from "@/components/las-lenas/quote-form"
import { LasLenasCTASection } from "@/components/las-lenas/cta-section"

export const metadata: Metadata = {
  title: 'Traslados a Las Lenas | XUMA TRAVEL - Transfers desde Mendoza y San Rafael',
  description: 'Traslados privados y compartidos a Las Lenas desde Mendoza y San Rafael. Vehiculos 4x4 equipados para montana, conductores expertos y servicio puerta a puerta. Reserva tu transfer ahora.',
  keywords: 'traslados Las Lenas, transfers Las Lenas, transporte Las Lenas, shuttle Las Lenas Mendoza, traslado ski Las Lenas, transfers privados montana, San Rafael Las Lenas',
  openGraph: {
    title: 'Traslados a Las Lenas | XUMA TRAVEL',
    description: 'Viaja seguro y comodo al mejor centro de ski de Sudamerica. Traslados privados y compartidos desde Mendoza y San Rafael.',
    type: 'website',
    locale: 'es_AR',
    alternateLocale: ['pt_BR', 'en_US'],
  },
}

export default function LasLenasPage() {
  return (
    <main className="min-h-screen scroll-smooth">
      <LasLenasHeader />
      <LasLenasHero />
      <LasLenasTrust />
      
      {/* Quote Form - Main conversion element */}
      <LasLenasQuoteForm />
      
      {/* Services with clear explanation */}
      <LasLenasServices />
      
      {/* CTA after services */}
      <LasLenasCTASection variant="dark" />
      
      {/* Route information */}
      <LasLenasRouteInfo />
      
      {/* Why choose us - Trust building */}
      <LasLenasWhyUs />
      
      {/* Tagline CTA */}
      <LasLenasCTASection variant="accent" showTagline />
      
      {/* How it works */}
      <LasLenasHowItWorks />
      
      {/* Testimonials - Social proof */}
      <LasLenasTestimonials />
      
      {/* Final CTA before FAQ */}
      <LasLenasCTASection variant="light" />
      
      {/* FAQ */}
      <LasLenasFAQ />
      
      {/* Footer */}
      <LasLenasFooter />
      
      {/* Floating elements */}
      <WhatsAppButton />
      <BackToHomeButton />
    </main>
  )
}
