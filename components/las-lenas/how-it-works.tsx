"use client"

import { MessageCircle, Calendar, MapPin, Mountain } from "lucide-react"

export function LasLenasHowItWorks() {
  const steps = [
    {
      icon: MessageCircle,
      step: "01",
      title: "Contactanos",
      description:
        "Escribinos por WhatsApp con la fecha de tu viaje y cantidad de pasajeros. Te respondemos en minutos.",
    },
    {
      icon: Calendar,
      step: "02",
      title: "Confirmá tu Reserva",
      description:
        "Coordinamos horarios, punto de pickup y detalles del viaje. Pago seguro y confirmación inmediata.",
    },
    {
      icon: MapPin,
      step: "03",
      title: "Te Buscamos",
      description:
        "Nuestro conductor te busca en tu hotel o aeropuerto a la hora acordada. Puntualidad garantizada.",
    },
    {
      icon: Mountain,
      step: "04",
      title: "Llegás a Las Leñas",
      description:
        "Viaja cómodo y seguro en nuestros vehículos. En 5 horas estás en la nieve.",
    },
  ]

  return (
    <section id="como-funciona" className="py-20 md:py-28 bg-[#0B0B0B]">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-[#C8A96A] font-medium tracking-wider uppercase text-sm mb-3">
            Proceso Simple
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 text-balance">
            Cómo Funciona
          </h2>
          <p className="text-white/70 text-lg leading-relaxed max-w-2xl mx-auto">
            Reservar tu transfer es fácil y rápido. En 4 simples pasos
            estás viajando a Las Leñas.
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-[60%] w-full h-0.5 bg-gradient-to-r from-[#6B7D5C] to-transparent" />
              )}

              <div className="relative bg-white/5 rounded-2xl p-6 border border-white/10 hover:border-[#6B7D5C]/50 transition-colors">
                {/* Step Number */}
                <span className="absolute -top-3 -right-3 bg-[#6B7D5C] text-white text-xs font-bold w-8 h-8 rounded-full flex items-center justify-center">
                  {step.step}
                </span>

                {/* Icon */}
                <div className="w-14 h-14 rounded-xl bg-[#6B7D5C]/20 flex items-center justify-center mb-4">
                  <step.icon className="w-7 h-7 text-[#C8A96A]" />
                </div>

                {/* Content */}
                <h3 className="font-serif text-xl font-semibold text-white mb-3">
                  {step.title}
                </h3>
                <p className="text-white/60 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
