"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { MessageCircle, ArrowRight, Shield, Award, Car, Snowflake } from "lucide-react"
import { useI18n } from "@/lib/i18n"
import { WHATSAPP_CONFIG } from "@/lib/config"

export function Hero() {
  const { t } = useI18n()

  const handleWhatsApp = () => {
    WHATSAPP_CONFIG.open()
  }

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
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
      <div className="relative z-10 container mx-auto px-6 pt-20 pb-12">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-[#C8A96A]/20 border border-[#C8A96A]/40 rounded-full px-4 py-2 mb-6">
            <Award className="w-4 h-4 text-[#C8A96A]" />
            <span className="text-[#C8A96A] text-sm font-medium">
              {t("hero.trust2")}
            </span>
          </div>

          {/* Headline - Shorter and more impactful */}
          <h1 className="font-serif text-[2.5rem] md:text-[3.25rem] lg:text-[4rem] font-bold text-white leading-tight mb-4">
            <span className="block">{t("hero.title.line1")}</span>
            <span className="block text-[#C8A96A]">{t("hero.title.line2")}</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-6 leading-relaxed text-pretty">
            {t("hero.subheadline")}
          </p>

          {/* Trust Points - Compact */}
          <div className="flex flex-wrap items-center justify-center gap-3 md:gap-5 mb-8">
            <div className="flex items-center gap-2 text-white/70">
              <Shield className="w-4 h-4 text-[#6B7D5C]" />
              <span className="text-sm">{t("hero.trust1")}</span>
            </div>
            <div className="flex items-center gap-2 text-white/70">
              <Car className="w-4 h-4 text-[#6B7D5C]" />
              <span className="text-sm">{t("hero.trustDoorToDoor")}</span>
            </div>
            <div className="flex items-center gap-2 text-white/70">
              <Snowflake className="w-4 h-4 text-[#6B7D5C]" />
              <span className="text-sm">{t("hero.trustSki")}</span>
            </div>
          </div>

          {/* CTAs - 3 buttons visible immediately */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
            <Link href="/traslados-las-lenas">
              <Button
                size="lg"
                className="w-full sm:w-auto bg-[#6B7D5C] hover:bg-[#5a6b4d] hover:scale-105 hover:shadow-lg text-white font-semibold px-6 py-5 text-base transition-all duration-300 group rounded-lg"
              >
                {t("hero.cta.transfer")}
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link href="/paquetes-las-lenas">
              <Button
                size="lg"
                className="w-full sm:w-auto bg-[#C8A96A] hover:bg-[#b89a5f] hover:scale-105 hover:shadow-lg text-[#0B0B0B] font-semibold px-6 py-5 text-base transition-all duration-300 group rounded-lg"
              >
                <Snowflake className="w-4 h-4 mr-2" />
                {t("hero.cta.skiPackage")}
              </Button>
            </Link>
            <Button
              onClick={handleWhatsApp}
              size="lg"
              className="w-full sm:w-auto bg-white/10 backdrop-blur-sm text-white hover:bg-white hover:text-gray-800 border border-white/20 px-6 py-5 text-base transition-colors rounded-lg"
            >
              <MessageCircle className="w-4 h-4 mr-2" />
              {t("hero.cta.secondary")}
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-white/50 rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  )
}
