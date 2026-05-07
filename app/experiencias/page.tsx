import type { Metadata } from 'next'
import { MainHeader } from "@/components/main-header"
import { MainFooter } from "@/components/main-footer"
import { WhatsAppButton } from "@/components/landing/whatsapp-button"
import { ExperienciasContent } from "@/components/experiencias-content"

export const metadata: Metadata = {
  title: 'Experiencias en Mendoza | XUMA TRAVEL',
  description: 'Descubrí las mejores experiencias en Mendoza. Tours de vino, bodegas, alta montaña y más. Aprovechá tu viaje al máximo.',
}

export default function ExperienciasPage() {
  return (
    <main className="min-h-screen scroll-smooth">
      <MainHeader />
      <ExperienciasContent />
      <MainFooter />
      <WhatsAppButton />
    </main>
  )
}
