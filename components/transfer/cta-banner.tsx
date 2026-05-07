"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, MessageCircle } from "lucide-react"
import { WHATSAPP_CONFIG } from "@/lib/config"

export function CTABanner() {
  const scrollToForm = () => {
    document.getElementById("cotizar")?.scrollIntoView({ behavior: "smooth" })
  }

  const handleWhatsApp = () => {
    WHATSAPP_CONFIG.open("Hola! Quiero consultar disponibilidad para un traslado a Las Leñas.")
  }

  return (
    <section className="py-12 bg-gradient-to-r from-[#6B7D5C] to-[#5a6b4d]">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 text-center md:text-left">
          <div className="md:flex-1">
            <h3 className="text-white font-serif text-2xl md:text-3xl font-bold mb-2">
              Planificá tu viaje a Las Leñas
            </h3>
            <p className="text-white/80">
              Cotizá ahora y asegurá tu traslado con anticipación
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              onClick={scrollToForm}
              size="lg"
              className="bg-white text-[#0B0B0B] hover:bg-white/90 font-semibold px-6 py-6 text-lg group"
            >
              Cotizar mi traslado
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              onClick={handleWhatsApp}
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white/10 px-6 py-6 text-lg"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Consultar disponibilidad
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
