"use client"

import { Clock, Mountain, Calendar, Car } from "lucide-react"

export function LasLenasRouteInfo() {
  const infoItems = [
    {
      icon: Clock,
      title: "Duracion del viaje",
      details: [
        { label: "Desde San Rafael", value: "2h30 - 3h" },
        { label: "Desde Mendoza", value: "4h15 - 5h" },
      ],
    },
    {
      icon: Mountain,
      title: "Tipo de camino",
      details: [
        { label: "Ruta de montana", value: "Asfalto + ripio" },
        { label: "Condiciones", value: "Nieve en invierno" },
      ],
    },
    {
      icon: Calendar,
      title: "Horarios",
      details: [
        { label: "Privado", value: "A eleccion del pasajero" },
        { label: "Compartido", value: "Sabados y Lunes" },
      ],
    },
    {
      icon: Car,
      title: "Tipo de servicio",
      details: [
        { label: "Privado", value: "100% exclusivo" },
        { label: "Compartido", value: "Segun disponibilidad" },
      ],
    },
  ]

  return (
    <section className="py-16 md:py-20 bg-[#0B0B0B]">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-[#C8A96A] font-medium tracking-wider uppercase text-sm mb-3">
            Informacion del viaje
          </p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-4">
            Todo lo que necesitas saber
          </h2>
        </div>

        {/* Info Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {infoItems.map((item, index) => (
            <div
              key={index}
              className="bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-colors"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-[#6B7D5C]/20 rounded-lg flex items-center justify-center">
                  <item.icon className="w-5 h-5 text-[#6B7D5C]" />
                </div>
                <h3 className="text-white font-semibold">{item.title}</h3>
              </div>
              <div className="space-y-3">
                {item.details.map((detail, idx) => (
                  <div key={idx} className="flex justify-between items-center">
                    <span className="text-white/60 text-sm">{detail.label}</span>
                    <span className="text-white font-medium text-sm">{detail.value}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
