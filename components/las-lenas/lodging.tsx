"use client"

import { Button } from "@/components/ui/button"
import { Building2, MessageCircle } from "lucide-react"
import { WHATSAPP_CONFIG } from "@/lib/config"

export function LasLenasLodging() {
  const handleWhatsApp = () => {
    WHATSAPP_CONFIG.open("Hola! Me interesa consultar por alojamiento en Las Leñas")
  }

  return (
    <section className="py-16 md:py-20 bg-[#F8F6F3]">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center">
          <div className="w-14 h-14 bg-[#C8A96A]/20 rounded-full flex items-center justify-center mx-auto mb-6">
            <Building2 className="w-7 h-7 text-[#C8A96A]" />
          </div>
          
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-[#0B0B0B] mb-4">
            También podés reservar tu alojamiento
          </h2>
          
          <p className="text-[#0B0B0B]/70 text-lg leading-relaxed mb-8 max-w-xl mx-auto">
            Ofrecemos opciones de departamentos y hoteles en Las Leñas 
            <span className="text-[#0B0B0B]/50"> (sujeto a disponibilidad)</span>
          </p>
          
          <Button
            onClick={handleWhatsApp}
            size="lg"
            variant="outline"
            className="border-[#C8A96A] text-[#C8A96A] hover:bg-[#C8A96A] hover:text-white px-8 py-6 text-lg transition-colors"
          >
            <MessageCircle className="w-5 h-5 mr-2" />
            Consultar alojamiento
          </Button>
        </div>
      </div>
    </section>
  )
}
