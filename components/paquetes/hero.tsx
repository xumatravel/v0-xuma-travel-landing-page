"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { MessageCircle, Hotel, Snowflake, Car, ArrowDown } from "lucide-react"
import { WHATSAPP_CONFIG } from "@/lib/config"
import { useI18n } from "@/lib/i18n"

export function PaquetesHero() {
  const { t } = useI18n()

  const handleWhatsApp = () => {
    WHATSAPP_CONFIG.open(t("paquetesPage.header.whatsappMsg"))
  }

  const scrollToForm = () => {
    document.getElementById("cotizador")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/ski-resort.jpg"
          alt="Las Leñas Ski Resort - Paquetes de Ski"
          fill
          className="object-cover animate-slow-zoom"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0B0B0B]/70 via-[#0B0B0B]/50 to-[#0B0B0B]/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 pt-24 pb-16">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <Badge className="bg-[#C8A96A] text-[#0B0B0B] hover:bg-[#C8A96A] text-sm px-4 py-2 font-bold mb-8 inline-flex items-center gap-2">
            <Snowflake className="w-4 h-4" />
            {t("paquetesPage.badge")}
          </Badge>

          {/* Headline */}
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight mb-6">
            {t("paquetesPage.hero.title")}
          </h1>

          {/* Subheadline */}
          <p className="text-white/90 text-xl md:text-2xl leading-relaxed mb-6 max-w-2xl mx-auto font-light">
            {t("paquetesPage.hero.subtitle")}
          </p>

          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center gap-4 md:gap-6 mb-10">
            <div className="flex items-center gap-2 text-white/90 bg-white/10 px-4 py-2 rounded-full">
              <Hotel className="w-5 h-5 text-[#6B7D5C]" />
              <span className="text-sm">{t("paquetesPage.hero.trust1")}</span>
            </div>
            <div className="flex items-center gap-2 text-white/90 bg-white/10 px-4 py-2 rounded-full">
              <Snowflake className="w-5 h-5 text-[#6B7D5C]" />
              <span className="text-sm">{t("paquetesPage.hero.trust2")}</span>
            </div>
            <div className="flex items-center gap-2 text-white/90 bg-white/10 px-4 py-2 rounded-full">
              <Car className="w-5 h-5 text-[#6B7D5C]" />
              <span className="text-sm">{t("paquetesPage.hero.trust3")}</span>
            </div>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
            <Button
              onClick={scrollToForm}
              size="lg"
              className="bg-[#6B7D5C] hover:bg-[#5a6b4d] hover:scale-105 hover:shadow-lg text-white px-10 py-7 text-lg font-semibold transition-all duration-300 rounded-lg group"
            >
              {t("paquetesPage.hero.cta1")}
              <ArrowDown className="w-5 h-5 ml-2 group-hover:translate-y-1 transition-transform" />
            </Button>
            <Button
              onClick={handleWhatsApp}
              size="lg"
              className="bg-white/10 backdrop-blur-sm text-white hover:bg-white hover:text-gray-800 border border-white/20 px-10 py-7 text-lg transition-colors rounded-lg"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              {t("paquetesPage.hero.cta2")}
            </Button>
          </div>

          {/* Response time hint */}
          <p className="text-white/60 text-sm">
            {t("paquetesPage.hero.response")}
          </p>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2" />
        </div>
      </div>
    </section>
  )
}
