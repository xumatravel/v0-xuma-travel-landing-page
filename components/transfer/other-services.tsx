"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Wine, Hotel, Sparkles, ArrowRight } from "lucide-react"

export function OtherServicesSection() {
  const services = [
    {
      icon: Wine,
      title: "Traslados a Bodegas",
      description: "Visitá las mejores bodegas de Mendoza con transporte privado y guía especializado.",
    },
    {
      icon: Sparkles,
      title: "Experiencias Enológicas",
      description: "Degustaciones, maridajes y recorridos por viñedos de la región.",
    },
    {
      icon: Hotel,
      title: "Paquetes con Alojamiento",
      description: "Combiná tu traslado con estadía en los mejores hoteles y departamentos.",
    },
  ]

  return (
    <section className="py-20 bg-[#0B0B0B] border-t border-white/10">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <p className="text-[#C8A96A] text-sm font-medium mb-2">TAMBIÉN OFRECEMOS</p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-4">
            Otros Servicios en Mendoza
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-10">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white/5 border border-white/10 rounded-xl p-6 text-center"
            >
              <div className="w-12 h-12 bg-[#6B7D5C]/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                <service.icon className="w-6 h-6 text-[#6B7D5C]" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">
                {service.title}
              </h3>
              <p className="text-white/60 text-sm">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link href="/experiencias">
            <Button
              variant="outline"
              size="lg"
              className="border-white/20 text-white hover:bg-white/10"
            >
              Ver experiencias en Mendoza
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
