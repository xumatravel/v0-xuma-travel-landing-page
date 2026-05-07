"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Check, MessageCircle, Star, Users, Car, Calendar } from "lucide-react"
import { WHATSAPP_CONFIG } from "@/lib/config"

export function LasLenasServices() {
  const handleWhatsApp = (service: string) => {
    WHATSAPP_CONFIG.open(`Hola! Me interesa el servicio de ${service} a Las Leñas`)
  }

  const scrollToForm = () => {
    document.getElementById("cotizar")?.scrollIntoView({ behavior: "smooth" })
  }

  const services = [
    {
      title: "Transfer Privado",
      subtitle: "Mendoza o San Rafael - Las Lenas",
      price: "Desde USD $180",
      priceNote: "por vehiculo (hasta 4 pax)",
      popular: true,
      icon: Car,
      features: [
        "Todos los dias disponible",
        "Horario 100% a tu eleccion",
        "Servicio puerta a puerta",
        "Vehiculo 4x4 exclusivo para tu grupo",
        "Conductores expertos en montana",
        "Espacio amplio para equipaje de ski",
        "Paradas en ruta si las necesitas",
      ],
      capacity: "Hasta 4 pasajeros",
      vehicleType: "SUV 4x4 / Van",
    },
    {
      title: "Transfer Compartido",
      subtitle: "Solo desde San Rafael",
      price: "USD $95",
      priceNote: "por butaca",
      popular: false,
      icon: Users,
      features: [
        "Solo Sabados y Lunes",
        "Puntos de encuentro en San Rafael",
        "Horarios fijos de salida",
        "Vehiculo compartido 4x4",
        "Equipamiento de seguridad incluido",
        "Espacio para equipaje de ski",
        "Ideal para viajeros solos o parejas",
      ],
      capacity: "6-8 pasajeros",
      vehicleType: "Van 4x4",
      availability: "Sujeto a disponibilidad",
    },
  ]

  return (
    <section id="servicios" className="py-20 md:py-28 bg-[#F8F6F3]">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-[#6B7D5C] font-medium tracking-wider uppercase text-sm mb-3">
            Opciones de servicio
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-[#0B0B0B] mb-6 text-balance">
            Elige el Traslado que Necesitas
          </h2>
          <p className="text-[#0B0B0B]/70 text-lg leading-relaxed max-w-2xl mx-auto">
            Todos nuestros servicios incluyen vehiculos 4x4 equipados para montana,
            conductores expertos y la tranquilidad de viajar con profesionales.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
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
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 bg-[#6B7D5C]/10 rounded-lg flex items-center justify-center">
                    <service.icon className="w-5 h-5 text-[#6B7D5C]" />
                  </div>
                  <div>
                    <p className="text-[#6B7D5C] text-sm font-medium">{service.subtitle}</p>
                    <CardTitle className="font-serif text-2xl text-[#0B0B0B]">
                      {service.title}
                    </CardTitle>
                  </div>
                </div>
                
                {/* Capacity & Vehicle Type */}
                <div className="flex flex-wrap gap-2 mt-4">
                  <Badge variant="secondary" className="bg-[#0B0B0B]/5 text-[#0B0B0B]/70">
                    <Users className="w-3 h-3 mr-1" />
                    {service.capacity}
                  </Badge>
                  <Badge variant="secondary" className="bg-[#0B0B0B]/5 text-[#0B0B0B]/70">
                    <Car className="w-3 h-3 mr-1" />
                    {service.vehicleType}
                  </Badge>
                  {service.availability && (
                    <Badge variant="secondary" className="bg-[#C8A96A]/20 text-[#C8A96A]">
                      <Calendar className="w-3 h-3 mr-1" />
                      {service.availability}
                    </Badge>
                  )}
                </div>

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
                <div className="flex flex-col gap-3">
                  <Button
                    onClick={scrollToForm}
                    className={`w-full ${
                      service.popular
                        ? "bg-[#6B7D5C] hover:bg-[#5a6b4d] text-white"
                        : "bg-[#0B0B0B] hover:bg-[#0B0B0B]/90 text-white"
                    }`}
                  >
                    Reservar Ahora
                  </Button>
                  <Button
                    onClick={() => handleWhatsApp(service.title)}
                    variant="outline"
                    className="w-full border-[#0B0B0B]/20"
                  >
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Consultar disponibilidad
                  </Button>
                </div>
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
