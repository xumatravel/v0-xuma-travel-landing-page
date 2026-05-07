"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Car, Users, Mountain, ShieldCheck } from "lucide-react"

export function TransferHero() {
  const scrollToForm = () => {
    document.getElementById("cotizar")?.scrollIntoView({ behavior: "smooth" })
  }

  const scrollToServices = () => {
    document.getElementById("servicios")?.scrollIntoView({ behavior: "smooth" })
  }

  const trustPoints = [
    { icon: Car, text: "Puerta a puerta" },
    { icon: Users, text: "Choferes profesionales" },
    { icon: Mountain, text: "Camino de montaña" },
    { icon: ShieldCheck, text: "Vehículos habilitados" },
  ]

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/hero-mountains.jpg"
          alt="Ruta a Las Leñas - Montaña nevada"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0B0B0B]/70 via-[#0B0B0B]/50 to-[#0B0B0B]/90" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 pt-28 pb-16">
        <div className="max-w-3xl mx-auto text-center">
          {/* Headline */}
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight mb-6">
            Traslados a Las Leñas
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-8 leading-relaxed">
            Servicio privado y compartido desde Mendoza y San Rafael. 
            Viajes seguros, directos y a tu medida.
          </p>

          {/* Trust Points */}
          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6 mb-10">
            {trustPoints.map((point, index) => (
              <div key={index} className="flex items-center gap-2 text-white/70">
                <point.icon className="w-5 h-5 text-[#C8A96A]" />
                <span className="text-sm">{point.text}</span>
              </div>
            ))}
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              onClick={scrollToForm}
              size="lg"
              className="bg-[#6B7D5C] hover:bg-[#5a6b4d] text-white font-semibold px-8 py-6 text-lg rounded-lg transition-all duration-300 hover:scale-105"
            >
              Cotizar mi traslado
            </Button>
            <Button
              onClick={scrollToServices}
              size="lg"
              variant="outline"
              className="border-white/30 text-white hover:bg-white/10 px-8 py-6 text-lg rounded-lg"
            >
              Ver opciones de servicio
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-white/50 rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  )
}
