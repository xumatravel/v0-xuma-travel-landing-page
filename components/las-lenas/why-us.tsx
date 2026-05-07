"use client"

import Image from "next/image"
import { Shield, Snowflake, Clock, Users, Car, Award } from "lucide-react"

export function LasLenasWhyUs() {
  const reasons = [
    {
      icon: Award,
      title: "Transporte Oficial a Las Lenas",
      description:
        "Somos operadores en Mendoza especializados en traslados a Las Lenas con experiencia en logistica de montana.",
    },
    {
      icon: Shield,
      title: "Choferes Profesionales",
      description:
        "Nuestros conductores conocen cada curva del camino a Las Lenas. Mas de 10 anos de experiencia en rutas de montana.",
    },
    {
      icon: Car,
      title: "Vehiculos Habilitados",
      description:
        "Todos nuestros vehiculos cuentan con traccion 4x4, cadenas, neumaticos de invierno y equipamiento de emergencia.",
    },
    {
      icon: Snowflake,
      title: "Experiencia en Montana",
      description:
        "Operamos durante toda la temporada de ski. Conocemos las condiciones del camino y nos adaptamos a ellas.",
    },
    {
      icon: Clock,
      title: "Puntualidad Garantizada",
      description:
        "Llegamos a tiempo, siempre. Monitoreamos condiciones climaticas y de ruta para cumplir con los horarios.",
    },
    {
      icon: Users,
      title: "Servicio Personalizado",
      description:
        "Adaptamos el servicio a tus necesidades: paradas, horarios flexibles, equipaje especial para ski.",
    },
  ]

  return (
    <section id="por-que-nosotros" className="py-20 md:py-28 bg-[#F8F6F3]">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <div className="relative order-2 lg:order-1">
            <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/ski-resort.jpg"
                alt="Vehiculo 4x4 en camino a Las Lenas"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0B]/60 to-transparent" />

              {/* Stats Overlay */}
              <div className="absolute bottom-6 left-6 right-6 bg-[#0B0B0B]/90 backdrop-blur-sm rounded-xl p-6">
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <p className="text-2xl font-bold text-[#C8A96A]">+500</p>
                    <p className="text-white/60 text-xs">Viajes 2024</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-[#C8A96A]">10+</p>
                    <p className="text-white/60 text-xs">Anos Exp.</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-[#C8A96A]">98%</p>
                    <p className="text-white/60 text-xs">Satisfaccion</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <p className="text-[#6B7D5C] font-medium tracking-wider uppercase text-sm mb-3">
              Sobre Nosotros
            </p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-[#0B0B0B] mb-6 text-balance">
              La Ruta a Las Lenas Requiere Expertos
            </h2>
            <p className="text-[#0B0B0B]/70 text-lg leading-relaxed mb-10">
              El camino a Las Lenas puede ser desafiante, especialmente en invierno.
              No arriesgues tu viaje con improvisados. Confia en quienes conocen
              cada kilometro de esta ruta.
            </p>

            <div className="grid sm:grid-cols-2 gap-6">
              {reasons.map((reason, index) => (
                <div key={index} className="flex gap-4">
                  <div className="shrink-0 w-10 h-10 rounded-lg bg-[#6B7D5C]/10 flex items-center justify-center">
                    <reason.icon className="w-5 h-5 text-[#6B7D5C]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#0B0B0B] mb-1">{reason.title}</h3>
                    <p className="text-[#0B0B0B]/60 text-sm leading-relaxed">
                      {reason.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
