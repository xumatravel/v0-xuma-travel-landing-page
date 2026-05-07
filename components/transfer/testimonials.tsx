"use client"

import { Star, Quote } from "lucide-react"

const testimonials = [
  {
    text: "Excelente servicio, muy puntual y seguro en todo el trayecto. El chofer conocía perfectamente el camino y nos sentimos muy cómodos.",
    author: "María González",
    location: "Buenos Aires, Argentina",
  },
  {
    text: "Viaje cómodo y bien organizado, recomendable. Llegamos a Las Leñas sin problemas y el vehículo estaba impecable.",
    author: "Carlos Fernández",
    location: "Santiago, Chile",
  },
  {
    text: "Reservamos el traslado para todo nuestro grupo familiar y fue una experiencia excelente. Muy profesionales y atentos.",
    author: "Ana Martínez",
    location: "Montevideo, Uruguay",
  },
  {
    text: "El mejor servicio de traslados que usamos en nuestro viaje a Las Leñas. Puntuales, seguros y muy buena onda.",
    author: "Roberto Silva",
    location: "San Pablo, Brasil",
  },
]

export function Testimonials() {
  return (
    <section className="py-20 bg-[#0B0B0B]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-4">
            Experiencias de Nuestros Pasajeros
          </h2>
          <p className="text-white/60 max-w-xl mx-auto">
            Lo que dicen quienes ya viajaron con nosotros
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="bg-white/5 border border-white/10 rounded-xl p-6 relative"
            >
              <Quote className="w-8 h-8 text-[#C8A96A]/30 absolute top-4 right-4" />
              
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-[#C8A96A] fill-[#C8A96A]" />
                ))}
              </div>

              <p className="text-white/80 mb-4 leading-relaxed">
                &ldquo;{testimonial.text}&rdquo;
              </p>

              <div className="border-t border-white/10 pt-4">
                <span className="text-white font-medium block">{testimonial.author}</span>
                <span className="text-white/50 text-sm">{testimonial.location}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
