import type { Metadata } from 'next'
import { MainHeader } from "@/components/main-header"
import { MainFooter } from "@/components/main-footer"
import { WhatsAppButton } from "@/components/landing/whatsapp-button"
import { AlojamientoContent } from "@/components/alojamiento-content"

export const metadata: Metadata = {
  title: 'Alojamiento en Las Leñas | XUMA TRAVEL',
  description: 'Encontrá el mejor alojamiento en Las Leñas. Departamentos y hoteles con las mejores vistas y ubicación en el centro de ski.',
}

export default function AlojamientoPage() {
  return (
    <main className="min-h-screen scroll-smooth">
      <MainHeader />
      <AlojamientoContent />
      <MainFooter />
      <WhatsAppButton />
    </main>
  )
}
