import type { Metadata } from 'next'
import { PaquetesHeader } from "@/components/paquetes/header"
import { PaquetesHero } from "@/components/paquetes/hero"
import { PaquetesPackageTypes } from "@/components/paquetes/package-types"
import { PaquetesHotels } from "@/components/paquetes/hotels"
import { PaquetesApartments } from "@/components/paquetes/apartments"
import { PaquetesCharter } from "@/components/paquetes/charter"
import { PaquetesQuoteForm } from "@/components/paquetes/quote-form"
import { PaquetesFAQ } from "@/components/paquetes/faq"
import { PaquetesCTA } from "@/components/paquetes/cta-section"
import { PaquetesContact } from "@/components/paquetes/contact"
import { PaquetesFooter } from "@/components/paquetes/footer"
import { WhatsAppButton } from "@/components/landing/whatsapp-button"
import { BackToHomeButton } from "@/components/las-lenas/back-to-home"

export const metadata: Metadata = {
  title: 'Paquetes Ski & Hotelería en Las Leñas | XUMA TRAVEL',
  description: 'Paquetes de ski completos en Las Leñas. Hoteles, departamentos, pases de ski y transfers coordinados. Skiweek, Miniweek y Extraweek. Cotiza tu paquete ahora.',
  keywords: 'paquetes ski Las Leñas, hotel Las Leñas, skiweek Las Leñas, miniweek Las Leñas, ski argentina, snowboard Las Leñas, nieve argentina, pases ski Las Leñas',
  openGraph: {
    title: 'Paquetes Ski & Hotelería en Las Leñas | XUMA TRAVEL',
    description: 'Coordinamos tu viaje completo a Las Leñas: hotel, pases de ski, transfers y experiencias de nieve.',
    type: 'website',
    locale: 'es_AR',
    alternateLocale: ['pt_BR', 'en_US'],
  },
}

export default function PaquetesLasLenasPage() {
  return (
    <main className="min-h-screen scroll-smooth">
      <PaquetesHeader />
      <PaquetesHero />
      <PaquetesPackageTypes />
      <PaquetesQuoteForm />
      <PaquetesHotels />
      <PaquetesApartments />
      <PaquetesCharter />
      <PaquetesCTA />
      <PaquetesFAQ />
      <PaquetesContact />
      <PaquetesFooter />
      <WhatsAppButton />
      <BackToHomeButton />
    </main>
  )
}
