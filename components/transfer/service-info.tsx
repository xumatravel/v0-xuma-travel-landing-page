"use client"

import { Clock, Mountain, Car, Calendar } from "lucide-react"

export function ServiceInfo() {
  const infoItems = [
    {
      icon: Clock,
      title: "Duración del viaje",
      items: [
        { label: "Desde San Rafael", value: "2h30 – 3h" },
        { label: "Desde Mendoza", value: "4h15 – 5h" },
      ],
    },
    {
      icon: Mountain,
      title: "Tipo de trayecto",
      description: "Camino de montaña con curvas y pendientes. Nuestros conductores tienen amplia experiencia en rutas de altura.",
    },
    {
      icon: Car,
      title: "Modalidad",
      description: "Servicio privado (vehículo exclusivo) o compartido (por butaca, solo San Rafael).",
    },
    {
      icon: Calendar,
      title: "Horarios",
      description: "En servicio privado, el horario lo elegís vos. Compartido: salidas sábados y lunes.",
    },
  ]

  return (
    <section className="py-20 bg-[#111111]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-4">
            Información del Servicio
          </h2>
          <p className="text-white/60 max-w-xl mx-auto">
            Todo lo que necesitás saber sobre tu traslado a Las Leñas
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {infoItems.map((item, index) => (
            <div
              key={index}
              className="bg-white/5 border border-white/10 rounded-xl p-6"
            >
              <div className="w-12 h-12 bg-[#C8A96A]/20 rounded-lg flex items-center justify-center mb-4">
                <item.icon className="w-6 h-6 text-[#C8A96A]" />
              </div>

              <h3 className="text-lg font-semibold text-white mb-3">
                {item.title}
              </h3>

              {item.items ? (
                <div className="space-y-2">
                  {item.items.map((subItem, idx) => (
                    <div key={idx} className="flex justify-between text-sm">
                      <span className="text-white/60">{subItem.label}</span>
                      <span className="text-white font-medium">{subItem.value}</span>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-white/60 text-sm leading-relaxed">
                  {item.description}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
