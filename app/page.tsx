import type { Metadata } from 'next'
import { MainHeader } from "@/components/main-header"
import { MainFooter } from "@/components/main-footer"
import { TransferPage } from "@/components/transfer/transfer-page"
import { WhatsAppButton } from "@/components/landing/whatsapp-button"

export const metadata: Metadata = {
  title: 'Traslados a Las Leñas | XUMA TRAVEL - Transfers desde Mendoza y San Rafael',
  description: 'Traslados privados y compartidos a Las Leñas desde Mendoza y San Rafael. Vehículos 4x4 equipados para montaña, conductores expertos y servicio puerta a puerta. Cotizá tu transfer ahora.',
  keywords: 'traslados Las Leñas, transfers Las Leñas, transporte Las Leñas, shuttle Las Leñas Mendoza, traslado ski Las Leñas, transfers privados montaña, San Rafael Las Leñas',
  openGraph: {
    title: 'Traslados a Las Leñas | XUMA TRAVEL',
    description: 'Viajá seguro y cómodo al mejor centro de ski de Sudamérica. Traslados privados y compartidos desde Mendoza y San Rafael.',
    type: 'website',
    locale: 'es_AR',
    alternateLocale: ['pt_BR', 'en_US'],
  },
}

export default function Home() {
  return (
    <main className="min-h-screen scroll-smooth">
      <MainHeader />
      <TransferPage />
      <MainFooter />
      <WhatsAppButton />
    </main>
  )
}
