"use client"

import { Check, Calendar, Clock, Users } from "lucide-react"
import { cn } from "@/lib/utils"

interface ServiceSelectorProps {
  selected: "privado" | "compartido"
  onSelect: (service: "privado" | "compartido") => void
}

export function ServiceSelector({ selected, onSelect }: ServiceSelectorProps) {
  const services = [
    {
      id: "privado" as const,
      title: "Traslado Privado",
      features: [
        { icon: Calendar, text: "Disponible todos los días" },
        { icon: Clock, text: "Horario a elección" },
      ],
    },
    {
      id: "compartido" as const,
      title: "Traslado Compartido",
      features: [
        { icon: Users, text: "Solo desde San Rafael" },
        { icon: Calendar, text: "Sábados y lunes" },
      ],
      badge: "Por butaca",
    },
  ]

  return (
    <section id="servicios" className="py-20 bg-[#0B0B0B]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-4">
            Tipo de Servicio
          </h2>
          <p className="text-white/60 max-w-xl mx-auto">
            Elegí el tipo de traslado que mejor se adapte a tus necesidades
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {services.map((service) => (
            <button
              key={service.id}
              onClick={() => onSelect(service.id)}
              className={cn(
                "relative p-6 rounded-xl border-2 text-left transition-all duration-300",
                selected === service.id
                  ? "border-[#C8A96A] bg-[#C8A96A]/10"
                  : "border-white/10 bg-white/5 hover:border-white/30"
              )}
            >
              {/* Selection indicator */}
              <div
                className={cn(
                  "absolute top-4 right-4 w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all",
                  selected === service.id
                    ? "border-[#C8A96A] bg-[#C8A96A]"
                    : "border-white/30"
                )}
              >
                {selected === service.id && (
                  <Check className="w-4 h-4 text-[#0B0B0B]" />
                )}
              </div>

              {/* Badge */}
              {service.badge && (
                <span className="inline-block bg-[#6B7D5C] text-white text-xs font-medium px-2 py-1 rounded mb-3">
                  {service.badge}
                </span>
              )}

              <h3 className="text-xl font-semibold text-white mb-4 pr-8">
                {service.title}
              </h3>

              <div className="space-y-2">
                {service.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-white/70">
                    <feature.icon className="w-4 h-4 text-[#C8A96A]" />
                    <span className="text-sm">{feature.text}</span>
                  </div>
                ))}
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}
