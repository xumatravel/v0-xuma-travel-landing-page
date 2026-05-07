"use client"

import { Button } from "@/components/ui/button"
import { MessageCircle, ArrowUp } from "lucide-react"
import { WHATSAPP_CONFIG } from "@/lib/config"

export function FinalCTA() {
  const scrollToForm = () => {
    document.getElementById("cotizar")?.scrollIntoView({ behavior: "smooth" })
  }

  const handleWhatsApp = () => {
    WHATSAPP_CONFIG.open("Hola! Quiero cotizar un traslado a Las Leñas")
  }

  return (
    <section className="py-20 bg-gradient-to-b from-[#0B0B0B] to-[#111111]">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-4">
            ¿Listo para tu viaje a Las Leñas?
          </h2>
          <p className="text-white/60 mb-8 text-lg">
            Solicitá tu cotización ahora y viajá con la tranquilidad de un servicio profesional.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              onClick={scrollToForm}
              size="lg"
              className="bg-[#6B7D5C] hover:bg-[#5a6b4d] text-white font-semibold px-8 py-6 text-lg"
            >
              <ArrowUp className="w-5 h-5 mr-2" />
              Cotizar mi traslado
            </Button>
            <Button
              onClick={handleWhatsApp}
              size="lg"
              className="bg-[#25D366] hover:bg-[#20bd5a] text-white font-semibold px-8 py-6 text-lg"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Hablar por WhatsApp
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
