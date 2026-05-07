"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { MessageCircle, Shield, Clock, Award } from "lucide-react"
import { WHATSAPP_CONFIG } from "@/lib/config"

export function LasLenasHero() {
  const handleWhatsApp = () => {
    WHATSAPP_CONFIG.open("Hola! Quiero reservar un transfer a Las Leñas")
  }

  const scrollToServices = () => {
    document.getElementById("servicios")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/ski-resort.jpg"
          alt="Las Leñas Ski Resort - Montañas nevadas"
          fill
          className="object-cover animate-slow-zoom"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0B0B0B]/70 via-[#0B0B0B]/50 to-[#0B0B0B]/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 pt-24 pb-16">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <Badge className="bg-[#C8A96A] text-[#0B0B0B] hover:bg-[#C8A96A] text-sm px-4 py-2 font-bold mb-8 inline-flex items-center gap-2">
            <Award className="w-4 h-4" />
            +500 Transfers a Las Leñas en 2024
          </Badge>

          {/* Headline */}
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-none mb-6">
            <span className="block">Transfers Privados</span>
            <span className="block">a Las Leñas</span>
            <span className="block text-[#C8A96A] my-2">—</span>
            <span className="block text-2xl md:text-3xl lg:text-4xl font-normal mt-4">
              Viaja Seguro, Llega Relajado
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-white/80 text-lg md:text-xl leading-relaxed mb-10 max-w-2xl mx-auto">
            Servicio puerta a puerta desde Mendoza con vehículos 4x4 equipados para montaña
            y conductores expertos en rutas de alta montaña.
          </p>

          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center gap-6 mb-10">
            <div className="flex items-center gap-2 text-white/90">
              <Shield className="w-5 h-5 text-[#6B7D5C]" />
              <span className="text-sm">Vehículos 4x4 Equipados</span>
            </div>
            <div className="flex items-center gap-2 text-white/90">
              <Clock className="w-5 h-5 text-[#6B7D5C]" />
              <span className="text-sm">Servicio Puerta a Puerta</span>
            </div>
            <div className="flex items-center gap-2 text-white/90">
              <Award className="w-5 h-5 text-[#6B7D5C]" />
              <span className="text-sm">Conductores Expertos</span>
            </div>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={handleWhatsApp}
              size="lg"
              className="bg-[#6B7D5C] hover:bg-[#5a6b4d] text-white px-8 py-6 text-lg group"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Reservar por WhatsApp
            </Button>
            <Button
              onClick={scrollToServices}
              size="lg"
              className="bg-gray-500 text-white hover:bg-white hover:text-gray-800 px-8 py-6 text-lg transition-colors"
            >
              Ver Servicios y Precios
            </Button>
          </div>

          {/* Price Hint */}
          <p className="text-white/60 text-sm mt-6">
            Desde USD $180 por viaje (hasta 4 pasajeros)
          </p>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2" />
        </div>
      </div>
    </section>
  )
}
