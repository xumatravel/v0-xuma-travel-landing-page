"use client"

import { Shield, Clock, Car, Users } from "lucide-react"

export function LasLenasTrust() {
  const stats = [
    {
      icon: Car,
      value: "+500",
      label: "Transfers realizados",
    },
    {
      icon: Shield,
      value: "100%",
      label: "Llegadas seguras",
    },
    {
      icon: Clock,
      value: "24/7",
      label: "Servicio disponible",
    },
    {
      icon: Users,
      value: "98%",
      label: "Clientes satisfechos",
    },
  ]

  return (
    <section className="bg-[#0B0B0B] py-8 border-y border-white/10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#6B7D5C]/20 mb-3">
                <stat.icon className="w-6 h-6 text-[#C8A96A]" />
              </div>
              <p className="text-2xl md:text-3xl font-bold text-white">{stat.value}</p>
              <p className="text-white/60 text-sm">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
