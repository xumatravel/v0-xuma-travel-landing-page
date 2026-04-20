"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { MessageCircle, ArrowRight, Shield, Award } from "lucide-react"
import { useI18n } from "@/lib/i18n"
import { WHATSAPP_CONFIG } from "@/lib/config"

export function Hero() {
  const { t } = useI18n()

  const handleWhatsApp = () => {
    WHATSAPP_CONFIG.open()
  }

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Parallax Effect */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 scale-110 animate-slow-zoom">
          <Image
            src="/hero-mountains.jpg"
            alt="Andes Mountains - Las Leñas"
            fill
            className="object-cover"
            priority
            loading="eager"
          />
        </div>
        {/* Cinematic gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0B0B0B]/80 via-[#0B0B0B]/40 to-[#0B0B0B]/90" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B0B0B]/50 via-transparent to-[#0B0B0B]/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 pt-24 pb-16">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-[#C8A96A]/20 border border-[#C8A96A]/40 rounded-full px-4 py-2 mb-8">
            <Award className="w-4 h-4 text-[#C8A96A]" />
            <span className="text-[#C8A96A] text-sm font-medium">
              {t("hero.trust2")}
            </span>
          </div>

          {/* Headline */}
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight mb-6 text-balance">
            {t("hero.headline")}
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-8 leading-relaxed text-pretty">
            {t("hero.subheadline")}
          </p>

          {/* Trust Points */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-10">
            <div className="flex items-center gap-2 text-white/70">
              <Shield className="w-5 h-5 text-[#6B7D5C]" />
              <span className="text-sm">{t("hero.trust1")}</span>
            </div>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              onClick={scrollToContact}
              size="lg"
              className="bg-[#6B7D5C] hover:bg-[#5a6b4d] text-white font-semibold px-8 py-6 text-lg group"
            >
              {t("hero.cta.primary")}
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              onClick={handleWhatsApp}
              size="lg"
              variant="outline"
              className="border-white/30 text-white hover:bg-white/10 px-8 py-6 text-lg"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              {t("hero.cta.secondary")}
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-white/50 rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  )
}
