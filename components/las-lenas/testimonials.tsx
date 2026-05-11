"use client"

import { Star, Quote } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { useI18n } from "@/lib/i18n"

export function LasLenasTestimonials() {
  const { t, locale } = useI18n()

  const testimonials = {
    es: [
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
        text: "Servicio profesional de principio a fin. El conductor fue puntual y el vehículo perfecto para el camino de montaña. Definitivamente usaré de nuevo la próxima temporada de ski!",
        rating: 5,
      },
    ],
    pt: [
      {
        name: "María González",
        location: "Argentina",
        text: "Serviço excelente! O motorista conhecia perfeitamente o caminho e nos sentimos muito seguros durante toda a viagem. O veículo era novo e muito confortável. 100% recomendado.",
        rating: 5,
      },
      {
        name: "João Silva",
        location: "Brasil",
        text: "Primeira vez em Las Leñas e o transfer foi perfeito. Nos buscaram no aeroporto pontualmente e a viagem foi muito tranquila. Já reservei para a volta!",
        rating: 5,
      },
      {
        name: "Carlos Méndez",
        location: "Chile",
        text: "Viajamos com toda a família e o equipamento de ski. O veículo tinha espaço para tudo. Muito melhor que alugar carro e dirigir na neve.",
        rating: 5,
      },
      {
        name: "Laura Fernández",
        location: "Uruguai",
        text: "Coordenamos tudo pelo WhatsApp e foi super fácil. Chegaram pontualmente no hotel e a viagem a Las Leñas foi espetacular. O motorista nos deu dicas do centro de ski.",
        rating: 5,
      },
      {
        name: "Michael Thompson",
        location: "Estados Unidos",
        text: "Serviço profissional do início ao fim. O motorista foi pontual e o veículo perfeito para a estrada de montanha. Definitivamente usarei novamente na próxima temporada de ski!",
        rating: 5,
      },
    ],
    en: [
      {
        name: "María González",
        location: "Argentina",
        text: "Excellent service! The driver knew the road perfectly and we felt very safe throughout the trip. The vehicle was new and very comfortable. 100% recommended.",
        rating: 5,
      },
      {
        name: "João Silva",
        location: "Brazil",
        text: "First time at Las Leñas and the transfer was perfect. They picked us up at the airport on time and the trip was very smooth. Already booked for the return!",
        rating: 5,
      },
      {
        name: "Carlos Méndez",
        location: "Chile",
        text: "We traveled with the whole family and ski equipment. The vehicle had space for everything. Much better than renting a car and driving in the snow.",
        rating: 5,
      },
      {
        name: "Laura Fernández",
        location: "Uruguay",
        text: "We coordinated everything via WhatsApp and it was super easy. They arrived on time at the hotel and the trip to Las Leñas was spectacular. The driver gave us tips about the ski resort.",
        rating: 5,
      },
      {
        name: "Michael Thompson",
        location: "United States",
        text: "Professional service from start to finish. The driver was punctual and the vehicle perfect for the mountain road. Will definitely use again next ski season!",
        rating: 5,
      },
    ],
  }

  const currentTestimonials = testimonials[locale] || testimonials.es

  return (
    <section id="testimonios" className="py-20 md:py-28 bg-[#0B0B0B]">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-[#C8A96A] font-medium tracking-wider uppercase text-sm mb-3">
            {t("lasLenasPage.testimonials.badge")}
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 text-balance">
            {t("lasLenasPage.testimonials.title")}
          </h2>
          <p className="text-white/70 text-lg leading-relaxed max-w-2xl mx-auto">
            {t("lasLenasPage.testimonials.subtitle")}
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {currentTestimonials.slice(0, 3).map((testimonial, index) => (
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
