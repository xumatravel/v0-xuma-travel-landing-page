import type { Metadata } from 'next'
import { LasLenasHero } from "@/components/las-lenas/hero"
import { LasLenasTrust } from "@/components/las-lenas/trust"
import { LasLenasRouteInfo } from "@/components/las-lenas/route-info"
import { LasLenasServices } from "@/components/las-lenas/services"
import { LasLenasHowItWorks } from "@/components/las-lenas/how-it-works"
import { LasLenasWhyUs } from "@/components/las-lenas/why-us"
import { LasLenasTestimonials } from "@/components/las-lenas/testimonials"
import { LasLenasFAQ } from "@/components/las-lenas/faq"
import { LasLenasContact } from "@/components/las-lenas/contact"
import { MainHeader } from "@/components/main-header"
import { MainFooter } from "@/components/main-footer"
import { OtherServices } from "@/components/other-services"
import { WhatsAppButton } from "@/components/landing/whatsapp-button"

export const metadata: Metadata = {
  title: 'Traslados a Las Leñas | XUMA TRAVEL - Transfers desde Mendoza y San Rafael',
  description: 'Traslados privados y compartidos a Las Leñas desde Mendoza y San Rafael. Vehículos 4x4 equipados para montaña, conductores expertos y servicio puerta a puerta. Reserva tu transfer ahora.',
  keywords: 'traslados Las Leñas, transfers Las Leñas, transporte Las Leñas, shuttle Las Leñas Mendoza, traslado ski Las Leñas, transfers privados montaña, San Rafael Las Leñas',
  openGraph: {
    title: 'Traslados a Las Leñas | XUMA TRAVEL',
    description: 'Viaja seguro y cómodo al mejor centro de ski de Sudamérica. Traslados privados y compartidos desde Mendoza y San Rafael.',
    type: 'website',
    locale: 'es_AR',
    alternateLocale: ['pt_BR', 'en_US'],
  },
}

export default function Home() {
  return (
    <main className="min-h-screen scroll-smooth">
      <MainHeader />
      <LasLenasHero />
      <LasLenasTrust />
      <LasLenasRouteInfo />
      <LasLenasServices />
      <LasLenasHowItWorks />
      <LasLenasWhyUs />
      <LasLenasTestimonials />
      <LasLenasFAQ />
      <LasLenasContact />
      <OtherServices />
      <MainFooter />
      <WhatsAppButton />
    </main>
  )
}
