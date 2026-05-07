"use client"

import { Button } from "@/components/ui/button"
import { Building2, Wine, MessageCircle } from "lucide-react"
import { WHATSAPP_CONFIG } from "@/lib/config"

export function OtherServices() {
  const handleLodgingWhatsApp = () => {
    WHATSAPP_CONFIG.open("Hola! Me interesa consultar por alojamiento en Las Leñas")
  }

  const handleExperiencesWhatsApp = () => {
    WHATSAPP_CONFIG.open("Hola! Me interesa consultar por experiencias en Mendoza")
  }

  return (
    <section className="py-20 md:py-24 bg-[#F8F6F3]">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#0B0B0B] mb-4">
            Otros servicios en destino
          </h2>
          <p className="text-[#0B0B0B]/70 text-lg leading-relaxed max-w-2xl mx-auto">
            Completá tu experiencia en la montaña o disfrutá de lo mejor de Mendoza
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Alojamiento */}
          <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300">
            <div className="w-14 h-14 bg-[#C8A96A]/20 rounded-full flex items-center justify-center mb-6">
              <Building2 className="w-7 h-7 text-[#C8A96A]" />
            </div>
            
            <h3 className="font-serif text-xl font-bold text-[#0B0B0B] mb-3">
              Alojamiento en Las Leñas
            </h3>
            
            <p className="text-[#0B0B0B]/70 leading-relaxed mb-6">
              Departamentos y hoteles en el centro de ski. Te ayudamos a encontrar la mejor opción para tu estadía.
            </p>
            
            <Button
              onClick={handleLodgingWhatsApp}
              variant="outline"
              className="w-full border-[#C8A96A] text-[#C8A96A] hover:bg-[#C8A96A] hover:text-white transition-colors"
            >
              <MessageCircle className="w-4 h-4 mr-2" />
              Consultar alojamiento
            </Button>
          </div>

          {/* Experiencias */}
          <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300">
            <div className="w-14 h-14 bg-[#6B7D5C]/20 rounded-full flex items-center justify-center mb-6">
              <Wine className="w-7 h-7 text-[#6B7D5C]" />
            </div>
            
            <h3 className="font-serif text-xl font-bold text-[#0B0B0B] mb-3">
              Experiencias en Mendoza
            </h3>
            
            <p className="text-[#0B0B0B]/70 leading-relaxed mb-6">
              Bodegas, tours de vino, alta montaña y más. Aprovechá tu viaje para conocer lo mejor de la región.
            </p>
            
            <Button
              onClick={handleExperiencesWhatsApp}
              variant="outline"
              className="w-full border-[#6B7D5C] text-[#6B7D5C] hover:bg-[#6B7D5C] hover:text-white transition-colors"
            >
              <MessageCircle className="w-4 h-4 mr-2" />
              Ver experiencias
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
