import type { Metadata } from 'next'
import { LasLenasHero } from "@/components/las-lenas/hero"
import { LasLenasTrust } from "@/components/las-lenas/trust"
import { LasLenasServices } from "@/components/las-lenas/services"
import { LasLenasHowItWorks } from "@/components/las-lenas/how-it-works"
import { LasLenasWhyUs } from "@/components/las-lenas/why-us"
import { LasLenasTestimonials } from "@/components/las-lenas/testimonials"
import { LasLenasFAQ } from "@/components/las-lenas/faq"
import { LasLenasContact } from "@/components/las-lenas/contact"
import { LasLenasFooter } from "@/components/las-lenas/footer"
import { LasLenasHeader } from "@/components/las-lenas/header"
import { WhatsAppButton } from "@/components/landing/whatsapp-button"

export const metadata: Metadata = {
  title: 'Transfers Privados a Las Leñas | XUMA TRAVEL - Mendoza, Argentina',
  description: 'Transfers privados y seguros desde Mendoza a Las Leñas. Vehículos 4x4 equipados para montaña, conductores expertos y servicio puerta a puerta. Viaja sin estrés al mejor centro de ski de Sudamérica.',
  keywords: 'transfers Las Leñas, transporte Las Leñas, shuttle Las Leñas Mendoza, traslado ski Las Leñas, transfers privados montaña',
  openGraph: {
    title: 'Transfers Privados a Las Leñas | XUMA TRAVEL',
    description: 'Viaja seguro y cómodo al mejor centro de ski de Sudamérica. Transfers privados desde Mendoza.',
    type: 'website',
    locale: 'es_AR',
    alternateLocale: ['pt_BR', 'en_US'],
  },
}

export default function LasLenasPage() {
  return (
    <main className="min-h-screen">
      <LasLenasHeader />
      <LasLenasHero />
      <LasLenasTrust />
      <LasLenasServices />
      <LasLenasHowItWorks />
      <LasLenasWhyUs />
      <LasLenasTestimonials />
      <LasLenasFAQ />
      <LasLenasContact />
      <LasLenasFooter />
      <WhatsAppButton />
    </main>
  )
}
