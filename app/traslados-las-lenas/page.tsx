import type { Metadata } from 'next'
import { LasLenasHero } from "@/components/las-lenas/hero"
import { LasLenasTrust } from "@/components/las-lenas/trust"
import { LasLenasRouteInfo } from "@/components/las-lenas/route-info"
import { LasLenasServices } from "@/components/las-lenas/services"
import { LasLenasQuoteForm } from "@/components/las-lenas/quote-form"
import { LasLenasWhyUs } from "@/components/las-lenas/why-us"
import { LasLenasTestimonials } from "@/components/las-lenas/testimonials"
import { LasLenasFAQ } from "@/components/las-lenas/faq"
import { LasLenasContact } from "@/components/las-lenas/contact"
import { LasLenasFooter } from "@/components/las-lenas/footer"
import { LasLenasHeader } from "@/components/las-lenas/header"
import { WhatsAppButton } from "@/components/landing/whatsapp-button"
import { BackToHomeButton } from "@/components/las-lenas/back-to-home"

export const metadata: Metadata = {
  title: 'Traslados a Las Leñas | XUMA TRAVEL - Transfers desde Mendoza y San Rafael',
  description: 'Traslados privados y compartidos a Las Leñas desde Mendoza y San Rafael. Vehículos equipados para montaña, conductores expertos y servicio puerta a puerta. Reserva tu transfer ahora.',
  keywords: 'traslados Las Leñas, transfers Las Leñas, transporte Las Leñas, shuttle Las Leñas Mendoza, traslado ski Las Leñas, transfers privados montaña, San Rafael Las Leñas',
  openGraph: {
    title: 'Traslados a Las Leñas | XUMA TRAVEL',
    description: 'Viaja seguro y cómodo al mejor centro de ski de Sudamérica. Traslados privados y compartidos desde Mendoza y San Rafael.',
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
      <LasLenasServices />
      <LasLenasRouteInfo />
      <LasLenasWhyUs />
      <LasLenasQuoteForm />
      <LasLenasTestimonials />
      <LasLenasFAQ />
      <LasLenasContact />
      <LasLenasFooter />
      <WhatsAppButton />
      <BackToHomeButton />
    </main>
  )
}
