"use client"

import { Button } from "@/components/ui/button"
import { Building2, MessageCircle, Star, Users, Wifi, Car } from "lucide-react"
import { WHATSAPP_CONFIG } from "@/lib/config"
import Link from "next/link"

export function AlojamientoContent() {
  const handleWhatsApp = () => {
    WHATSAPP_CONFIG.open("Hola! Me interesa consultar por alojamiento en Las Leñas")
  }

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-[#0B0B0B]">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <div className="w-16 h-16 bg-[#C8A96A]/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Building2 className="w-8 h-8 text-[#C8A96A]" />
            </div>
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-white mb-6">
              Alojamiento en Las Leñas
            </h1>
            <p className="text-white/80 text-xl leading-relaxed mb-8">
              Te ayudamos a encontrar el lugar perfecto para tu estadía en el mejor centro de ski de Sudamérica
            </p>
            <Button
              onClick={handleWhatsApp}
              size="lg"
              className="bg-[#6B7D5C] hover:bg-[#5a6b4d] text-white px-8 py-6 text-lg"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Consultar disponibilidad
            </Button>
          </div>
        </div>
      </section>

      {/* Options */}
      <section className="py-20 bg-[#F8F6F3]">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#0B0B0B] text-center mb-12">
              Opciones de alojamiento
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Departamentos */}
              <div className="bg-white rounded-2xl p-8 shadow-sm">
                <h3 className="font-serif text-xl font-bold text-[#0B0B0B] mb-4">
                  Departamentos
                </h3>
                <p className="text-[#0B0B0B]/70 mb-6">
                  Ideales para familias y grupos. Con cocina equipada, living y las mejores vistas a la montaña.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center gap-2 text-[#0B0B0B]/70 text-sm">
                    <Users className="w-4 h-4 text-[#6B7D5C]" />
                    Capacidad: 2 a 8 personas
                  </li>
                  <li className="flex items-center gap-2 text-[#0B0B0B]/70 text-sm">
                    <Wifi className="w-4 h-4 text-[#6B7D5C]" />
                    WiFi incluido
                  </li>
                  <li className="flex items-center gap-2 text-[#0B0B0B]/70 text-sm">
                    <Car className="w-4 h-4 text-[#6B7D5C]" />
                    Estacionamiento
                  </li>
                </ul>
                <p className="text-[#C8A96A] font-semibold">Desde USD $120/noche</p>
              </div>

              {/* Hoteles */}
              <div className="bg-white rounded-2xl p-8 shadow-sm">
                <h3 className="font-serif text-xl font-bold text-[#0B0B0B] mb-4">
                  Hoteles
                </h3>
                <p className="text-[#0B0B0B]/70 mb-6">
                  Servicio completo con desayuno, spa y todas las comodidades para una estadía sin preocupaciones.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center gap-2 text-[#0B0B0B]/70 text-sm">
                    <Star className="w-4 h-4 text-[#6B7D5C]" />
                    3 a 5 estrellas
                  </li>
                  <li className="flex items-center gap-2 text-[#0B0B0B]/70 text-sm">
                    <Users className="w-4 h-4 text-[#6B7D5C]" />
                    Media pensión disponible
                  </li>
                  <li className="flex items-center gap-2 text-[#0B0B0B]/70 text-sm">
                    <Building2 className="w-4 h-4 text-[#6B7D5C]" />
                    Ski in/out
                  </li>
                </ul>
                <p className="text-[#C8A96A] font-semibold">Desde USD $180/noche</p>
              </div>
            </div>

            <div className="text-center mt-12">
              <p className="text-[#0B0B0B]/60 mb-6">
                Sujeto a disponibilidad. Consultanos y te armamos el paquete ideal.
              </p>
              <Button
                onClick={handleWhatsApp}
                size="lg"
                className="bg-[#C8A96A] hover:bg-[#b8995a] text-[#0B0B0B] px-8 py-6 text-lg"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Consultar alojamiento
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#0B0B0B]">
        <div className="container mx-auto px-6 text-center">
          <p className="text-white/70 mb-4">
            ¿Necesitás también el traslado?
          </p>
          <Link href="/">
            <Button
              variant="outline"
              className="border-white/30 text-white hover:bg-white/10"
            >
              Ver traslados a Las Leñas
            </Button>
          </Link>
        </div>
      </section>
    </>
  )
}
