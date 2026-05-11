"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Check, MessageCircle, Star, Users, Car, Calendar, MapPin, ArrowRight } from "lucide-react"
import { WHATSAPP_CONFIG } from "@/lib/config"
import { useI18n } from "@/lib/i18n"

export function LasLenasServices() {
  const { t, tArray } = useI18n()

  const handleWhatsApp = (service: string) => {
    WHATSAPP_CONFIG.open(`${t("lasLenasPage.header.whatsappMsg")} - ${service}`)
  }

  const scrollToForm = () => {
    document.getElementById("cotizador")?.scrollIntoView({ behavior: "smooth" })
  }

  const serviceTypes = [
    {
      title: t("lasLenasPage.services.private.title"),
      icon: Car,
      popular: true,
      routes: [
        { from: "Mendoza", to: "Las Leñas", duration: "~5 horas" },
        { from: "San Rafael", to: "Las Leñas", duration: "~3 horas" },
        { from: "Aeropuerto MDZ", to: "Las Leñas", duration: "~5 horas" },
      ],
      availability: t("lasLenasPage.services.private.availability"),
      scheduleNote: t("lasLenasPage.services.private.schedule"),
      features: tArray("lasLenasPage.services.private.features"),
    },
    {
      title: t("lasLenasPage.services.shared.title"),
      icon: Users,
      popular: false,
      routes: [
        { from: "San Rafael", to: "Las Leñas", duration: "~3 horas" },
      ],
      availability: t("lasLenasPage.services.shared.availability"),
      scheduleNote: t("lasLenasPage.services.shared.schedule"),
      features: tArray("lasLenasPage.services.shared.features"),
    },
  ]

  const vehicleTypes = [
    {
      name: t("lasLenasPage.form.vehicle.auto").split(" (")[0],
      capacity: "4 pax",
      luggage: t("lasLenasPage.form.vehicle.auto").includes("poco") ? "Poco equipaje" : "Little luggage",
      icon: "🚗",
    },
    {
      name: t("lasLenasPage.form.vehicle.pickup").split(" (")[0],
      capacity: "4 pax",
      luggage: "Ski equipment",
      icon: "🛻",
    },
    {
      name: "Van / Minibus 9",
      capacity: "9 pax",
      luggage: "Medium",
      icon: "🚐",
    },
    {
      name: "Minibus 14",
      capacity: "14 pax",
      luggage: "Large",
      icon: "🚌",
    },
    {
      name: t("lasLenasPage.form.vehicle.group").split(" (")[0],
      capacity: "15+ pax",
      luggage: "Custom",
      icon: "🚍",
    },
  ]

  return (
    <section id="servicios" className="py-20 md:py-28 bg-[#F8F6F3]">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-[#6B7D5C] font-medium tracking-wider uppercase text-sm mb-3">
            {t("lasLenasPage.services.badge")}
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-[#0B0B0B] mb-6 text-balance">
            {t("lasLenasPage.services.title")}
          </h2>
          <p className="text-[#0B0B0B]/70 text-lg leading-relaxed max-w-2xl mx-auto">
            {t("lasLenasPage.services.subtitle")}
          </p>
        </div>

        {/* Service Types Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-20">
          {serviceTypes.map((service, index) => (
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
                    {t("lasLenasPage.services.mostPopular")}
                  </Badge>
                </div>
              )}
              <CardHeader className="pb-4">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-[#6B7D5C]/10 rounded-xl flex items-center justify-center">
                    <service.icon className="w-6 h-6 text-[#6B7D5C]" />
                  </div>
                  <div>
                    <CardTitle className="font-serif text-2xl text-[#0B0B0B]">
                      {service.title}
                    </CardTitle>
                  </div>
                </div>
                
                {/* Availability & Schedule */}
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="secondary" className="bg-[#6B7D5C]/10 text-[#6B7D5C]">
                    <Calendar className="w-3 h-3 mr-1" />
                    {service.availability}
                  </Badge>
                  <Badge variant="secondary" className="bg-[#0B0B0B]/5 text-[#0B0B0B]/70">
                    {service.scheduleNote}
                  </Badge>
                </div>

                {/* Routes */}
                <div className="space-y-2 mb-4">
                  <p className="text-sm font-medium text-[#0B0B0B]/80">{t("lasLenasPage.services.private.routes")}</p>
                  {service.routes.map((route, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm text-[#0B0B0B]/70 bg-[#0B0B0B]/5 rounded-lg px-3 py-2">
                      <MapPin className="w-3 h-3 text-[#6B7D5C]" />
                      <span>{route.from}</span>
                      <ArrowRight className="w-3 h-3" />
                      <span>{route.to}</span>
                      <span className="ml-auto text-[#0B0B0B]/50 text-xs">{route.duration}</span>
                    </div>
                  ))}
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <Check className="w-4 h-4 text-[#6B7D5C] shrink-0 mt-0.5" />
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
                    {t("lasLenasPage.services.quote")}
                  </Button>
                  <Button
                    onClick={() => handleWhatsApp(service.title)}
                    variant="outline"
                    className="w-full border-[#0B0B0B]/20"
                  >
                    <MessageCircle className="w-4 h-4 mr-2" />
                    {t("lasLenasPage.services.checkAvailability")}
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Vehicle Types Section */}
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <h3 className="font-serif text-2xl md:text-3xl font-bold text-[#0B0B0B] mb-4">
              {t("lasLenasPage.services.vehicleTypes")}
            </h3>
            <p className="text-[#0B0B0B]/70 text-base max-w-xl mx-auto">
              {t("lasLenasPage.services.vehicleTypesDesc")}
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
            {vehicleTypes.map((vehicle, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-5 border border-[#0B0B0B]/10 hover:border-[#6B7D5C]/50 hover:shadow-md transition-all"
              >
                <div className="text-3xl mb-3">{vehicle.icon}</div>
                <h4 className="font-semibold text-[#0B0B0B] mb-1">{vehicle.name}</h4>
                <div className="space-y-1 mb-3">
                  <p className="text-xs text-[#6B7D5C] font-medium">{vehicle.capacity}</p>
                  <p className="text-xs text-[#0B0B0B]/60">{vehicle.luggage}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Note */}
        <div className="text-center mt-12">
          <p className="text-[#0B0B0B]/60 text-sm mb-4">
            {t("lasLenasPage.services.customNote")}
          </p>
          <Button
            onClick={scrollToForm}
            variant="outline"
            className="border-[#6B7D5C] text-[#6B7D5C] hover:bg-[#6B7D5C] hover:text-white"
          >
            {t("lasLenasPage.services.customQuote")}
          </Button>
        </div>
      </div>
    </section>
  )
}
