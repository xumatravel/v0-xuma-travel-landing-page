"use client"

import { Star, Quote } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export function LasLenasTestimonials() {
  const testimonials = [
    {
      name: "María González",
      location: "Argentina",
      text: "Excelente servicio! El conductor conocía perfectamente el camino y nos sentimos muy seguros durante todo el viaje. El vehículo era nuevo y muy cómodo. 100% recomendado.",
      rating: 5,
    },
    {
      name: "João Silva",
      location: "Brasil",
      text: "Primera vez en Las Leñas y el transfer fue perfecto. Nos buscaron en el aeropuerto puntualmente y el viaje fue muy tranquilo. Ya reservé para el regreso!",
      rating: 5,
    },
    {
      name: "Carlos Méndez",
      location: "Chile",
      text: "Viajamos con toda la familia y el equipo de ski. El vehículo tenía espacio para todo. Mucho mejor que alquilar auto y manejar en la nieve.",
      rating: 5,
    },
    {
      name: "Laura Fernández",
      location: "Uruguay",
      text: "Coordinamos todo por WhatsApp y fue súper fácil. Llegaron puntuales al hotel y el viaje a Las Leñas fue espectacular. El chofer nos dio tips del centro de ski.",
      rating: 5,
    },
    {
      name: "Michael Thompson",
      location: "Estados Unidos",
      text: "Professional service from start to finish. The driver was punctual and the vehicle was perfect for the mountain road. Will definitely use again next ski season!",
      rating: 5,
    },
  ]

  return (
    <section id="testimonios" className="py-20 md:py-28 bg-[#0B0B0B]">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-[#C8A96A] font-medium tracking-wider uppercase text-sm mb-3">
            Testimonios
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 text-balance">
            Lo Que Dicen Nuestros Pasajeros
          </h2>
          <p className="text-white/70 text-lg leading-relaxed max-w-2xl mx-auto">
            Más de 500 viajeros ya confiaron en nosotros para llegar a Las Leñas.
            Esto es lo que opinan de su experiencia.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="bg-white/5 border-white/10 hover:border-[#6B7D5C]/50 transition-colors"
            >
              <CardContent className="p-6">
                {/* Quote Icon */}
                <Quote className="w-10 h-10 text-[#6B7D5C]/30 mb-4" />

                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 text-[#C8A96A] fill-[#C8A96A]"
                    />
                  ))}
                </div>

                {/* Text */}
                <p className="text-white/80 text-sm leading-relaxed mb-6">
                  &ldquo;{testimonial.text}&rdquo;
                </p>

                {/* Author */}
                <div className="border-t border-white/10 pt-4">
                  <p className="font-semibold text-white">{testimonial.name}</p>
                  <p className="text-white/50 text-sm">{testimonial.location}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
