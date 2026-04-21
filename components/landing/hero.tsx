"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { MessageCircle, ArrowRight, Shield, Award, Mountain, Wine, Car } from "lucide-react"
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

  const scrollToProducts = () => {
    document.getElementById("products")?.scrollIntoView({ behavior: "smooth" })
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
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-[#C8A96A]/20 border border-[#C8A96A]/40 rounded-full px-4 py-2 mb-8">
            <Award className="w-4 h-4 text-[#C8A96A]" />
            <span className="text-[#C8A96A] text-sm font-medium">
              {t("hero.badge")}
            </span>
          </div>

          {/* Headline */}
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight mb-6 text-balance">
            {t("hero.headline")}
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto mb-4 leading-relaxed text-pretty">
            {t("hero.subheadline")}
          </p>
          
          {/* Extended description */}
          <p className="text-base text-white/60 max-w-2xl mx-auto mb-10 leading-relaxed">
            {t("hero.description")}
          </p>

          {/* Trust Points */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-10">
            <div className="flex items-center gap-2 text-white/70">
              <Shield className="w-5 h-5 text-[#6B7D5C]" />
              <span className="text-sm">{t("hero.trust1")}</span>
            </div>
          </div>

          {/* Primary CTAs - 3 options */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto mb-6">
            <Button
              onClick={scrollToContact}
              size="lg"
              className="bg-[#C8A96A] hover:bg-[#b89a5c] text-[#0B0B0B] font-semibold px-6 py-6 text-base group"
            >
              <Mountain className="w-5 h-5 mr-2" />
              {t("hero.cta.ski")}
            </Button>
            <Button
              onClick={scrollToProducts}
              size="lg"
              className="bg-[#6B7D5C] hover:bg-[#5a6b4d] text-white font-semibold px-6 py-6 text-base group"
            >
              <Wine className="w-5 h-5 mr-2" />
              {t("hero.cta.experience")}
            </Button>
            <Button
              onClick={scrollToContact}
              size="lg"
              className="bg-white/10 hover:bg-white/20 text-white border border-white/30 font-semibold px-6 py-6 text-base group"
            >
              <Car className="w-5 h-5 mr-2" />
              {t("hero.cta.transfer")}
            </Button>
          </div>

          {/* Secondary CTA - WhatsApp */}
          <Button
            onClick={handleWhatsApp}
            size="lg"
            variant="outline"
            className="border-[#25D366]/50 text-[#25D366] hover:bg-[#25D366]/10 px-8 py-5"
          >
            <MessageCircle className="w-5 h-5 mr-2" />
            {t("hero.cta.whatsapp")}
          </Button>
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
