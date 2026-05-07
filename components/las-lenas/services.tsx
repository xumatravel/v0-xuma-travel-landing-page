"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Check, MessageCircle, Star } from "lucide-react"
import { WHATSAPP_CONFIG } from "@/lib/config"

export function LasLenasServices() {
  const handleWhatsApp = (service: string) => {
    WHATSAPP_CONFIG.open(`Hola! Me interesa el servicio de ${service} a Las Leñas`)
  }

  const services = [
    {
      title: "Transfer Privado",
      subtitle: "Mendoza → Las Leñas",
      price: "USD $280",
      priceNote: "por vehículo (hasta 4 pax)",
      popular: true,
      features: [
        "Vehículo 4x4 exclusivo",
        "Pickup en hotel/aeropuerto",
        "Conductores expertos en montaña",
        "Cadenas y equipamiento incluido",
        "Espacio para equipaje de ski",
        "Paradas en ruta si las necesitas",
      ],
    },
    {
      title: "Transfer Compartido",
      subtitle: "Salidas programadas",
      price: "USD $95",
      priceNote: "por persona",
      popular: false,
      features: [
        "Vehículo compartido 4x4",
        "Puntos de encuentro en Mendoza",
        "Horarios fijos de salida",
        "Equipamiento de seguridad",
        "Espacio para equipaje de ski",
        "Ideal para viajeros solos",
      ],
    },
    {
      title: "Transfer + Ski Pass",
      subtitle: "Paquete completo",
      price: "USD $420",
      priceNote: "por persona (mínimo 2 pax)",
      popular: false,
      features: [
        "Transfer privado ida y vuelta",
        "Ski pass de 1 día incluido",
        "Tiempo de espera en resort",
        "Snacks y bebidas en ruta",
        "Seguro de viaje incluido",
        "Descuento en alquiler de equipos",
      ],
    },
  ]

  return (
    <section id="servicios" className="py-20 md:py-28 bg-[#F8F6F3]">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-[#6B7D5C] font-medium tracking-wider uppercase text-sm mb-3">
            Nuestros Servicios
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-[#0B0B0B] mb-6 text-balance">
            Elige el Transfer que Necesitas
          </h2>
          <p className="text-[#0B0B0B]/70 text-lg leading-relaxed max-w-2xl mx-auto">
            Todos nuestros servicios incluyen vehículos 4x4 equipados para montaña,
            conductores expertos y la tranquilidad de viajar con profesionales.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <Card
              key={index}
              className={`relative overflow-hidden transition-all duration-300 hover:shadow-xl ${
                service.popular
                  ? "border-2 border-[#6B7D5C] shadow-lg"
                  : "border border-[#0B0B0B]/10"
              }`}
            >
              {service.popular && (
                <div className="absolute top-0 right-0">
                  <Badge className="bg-[#6B7D5C] text-white rounded-none rounded-bl-lg px-4 py-1">
                    <Star className="w-3 h-3 mr-1 fill-current" />
                    Más Popular
                  </Badge>
                </div>
              )}
              <CardHeader className="pb-4">
                <p className="text-[#6B7D5C] text-sm font-medium mb-1">{service.subtitle}</p>
                <CardTitle className="font-serif text-2xl text-[#0B0B0B]">
                  {service.title}
                </CardTitle>
                <div className="mt-4">
                  <span className="text-3xl font-bold text-[#0B0B0B]">{service.price}</span>
                  <span className="text-[#0B0B0B]/60 text-sm ml-2">{service.priceNote}</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-[#6B7D5C] shrink-0 mt-0.5" />
                      <span className="text-[#0B0B0B]/70 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  onClick={() => handleWhatsApp(service.title)}
                  className={`w-full ${
                    service.popular
                      ? "bg-[#6B7D5C] hover:bg-[#5a6b4d] text-white"
                      : "bg-[#0B0B0B] hover:bg-[#0B0B0B]/90 text-white"
                  }`}
                >
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Reservar Ahora
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Note */}
        <p className="text-center text-[#0B0B0B]/60 text-sm mt-10">
          Todos los precios son referenciales. Consulta por grupos grandes o servicios personalizados.
        </p>
      </div>
    </section>
  )
}
