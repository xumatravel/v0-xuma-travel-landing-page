"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Star, Coffee, Utensils, ArrowRight } from "lucide-react"
import { useI18n } from "@/lib/i18n"

export function PaquetesHotels() {
  const { t } = useI18n()

  const hotels = [
    {
      id: "piscis",
      name: t("paquetesPage.hotels.piscis.name"),
      category: t("paquetesPage.hotels.piscis.category"),
      description: t("paquetesPage.hotels.piscis.desc"),
      stars: 4,
      hasHalfBoard: true,
    },
    {
      id: "aries",
      name: t("paquetesPage.hotels.aries.name"),
      category: t("paquetesPage.hotels.aries.category"),
      description: t("paquetesPage.hotels.aries.desc"),
      stars: 3,
      hasHalfBoard: true,
    },
    {
      id: "acuario",
      name: t("paquetesPage.hotels.acuario.name"),
      category: t("paquetesPage.hotels.acuario.category"),
      description: t("paquetesPage.hotels.acuario.desc"),
      stars: 3,
      hasHalfBoard: true,
    },
    {
      id: "scorpio",
      name: t("paquetesPage.hotels.scorpio.name"),
      category: t("paquetesPage.hotels.scorpio.category"),
      description: t("paquetesPage.hotels.scorpio.desc"),
      stars: 2,
      hasHalfBoard: false,
    },
    {
      id: "virgo",
      name: t("paquetesPage.hotels.virgo.name"),
      category: t("paquetesPage.hotels.virgo.category"),
      description: t("paquetesPage.hotels.virgo.desc"),
      stars: 4,
      hasHalfBoard: true,
    },
  ]

  const scrollToForm = () => {
    document.getElementById("cotizador")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section id="hoteles" className="py-20 md:py-28 bg-[#F8F6F3]">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-14">
          <Badge className="bg-[#6B7D5C]/20 text-[#6B7D5C] hover:bg-[#6B7D5C]/30 border-[#6B7D5C]/40 mb-4">
            {t("paquetesPage.hotels.badge")}
          </Badge>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-[#0B0B0B] mb-4 text-balance">
            {t("paquetesPage.hotels.title")}
          </h2>
          <p className="text-[#0B0B0B]/70 text-lg max-w-2xl mx-auto leading-relaxed">
            {t("paquetesPage.hotels.subtitle")}
          </p>
        </div>

        {/* Hotel Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {hotels.map((hotel) => (
            <Card 
              key={hotel.id} 
              className="bg-white border-[#0B0B0B]/10 overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="font-serif text-xl font-bold text-[#0B0B0B] mb-1">
                      {hotel.name}
                    </h3>
                    <Badge variant="outline" className="text-xs">
                      {hotel.category}
                    </Badge>
                  </div>
                  <div className="flex gap-0.5">
                    {Array.from({ length: hotel.stars }).map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#C8A96A] text-[#C8A96A]" />
                    ))}
                  </div>
                </div>
                
                <p className="text-[#0B0B0B]/70 text-sm mb-4 leading-relaxed">
                  {hotel.description}
                </p>
                
                <div className="flex items-center gap-2 mb-4">
                  {hotel.hasHalfBoard ? (
                    <div className="flex items-center gap-2 text-[#6B7D5C] text-sm">
                      <Utensils className="w-4 h-4" />
                      <span>{t("paquetesPage.hotels.halfBoard")}</span>
                    </div>
                  ) : (
                    <div className="flex items-center gap-2 text-[#C8A96A] text-sm">
                      <Coffee className="w-4 h-4" />
                      <span>{t("paquetesPage.hotels.breakfastOnly")}</span>
                    </div>
                  )}
                </div>
                
                <Button 
                  onClick={scrollToForm}
                  className="w-full bg-[#0B0B0B] hover:bg-[#0B0B0B]/90 text-white group"
                >
                  {t("paquetesPage.hotels.cta")}
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
