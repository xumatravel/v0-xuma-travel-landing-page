"use client"

import { 
  MapPin, 
  UserCheck, 
  Car, 
  Mountain, 
  Clock, 
  Headphones 
} from "lucide-react"

const features = [
  {
    icon: MapPin,
    title: "Traslados puerta a puerta",
    description: "Te buscamos donde estés y te dejamos en tu destino final",
  },
  {
    icon: UserCheck,
    title: "Choferes profesionales",
    description: "Conductores capacitados con experiencia en rutas de montaña",
  },
  {
    icon: Car,
    title: "Vehículos habilitados",
    description: "Flota equipada para condiciones de montaña y nieve",
  },
  {
    icon: Mountain,
    title: "Experiencia en montaña",
    description: "Conocemos cada curva del camino a Las Leñas",
  },
  {
    icon: Clock,
    title: "Horarios flexibles",
    description: "Adaptamos el servicio a tus necesidades y vuelos",
  },
  {
    icon: Headphones,
    title: "Atención personalizada",
    description: "Respuesta rápida y seguimiento de tu reserva",
  },
]

export function WhyChooseUs() {
  return (
    <section className="py-20 bg-[#111111]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-4">
            Por Qué Elegirnos
          </h2>
          <div className="w-16 h-1 bg-[#C8A96A] mx-auto" />
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white/5 border border-white/10 rounded-xl p-6 hover:border-[#C8A96A]/30 transition-colors"
            >
              <feature.icon className="w-10 h-10 text-[#6B7D5C] mb-4" />
              <h3 className="text-white font-semibold text-lg mb-2">
                {feature.title}
              </h3>
              <p className="text-white/60 text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
