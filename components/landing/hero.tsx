"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { MessageCircle, ArrowRight, Shield, Award, Car, Snowflake, Mountain, CheckCircle2 } from "lucide-react"
import { useI18n } from "@/lib/i18n"
import { WHATSAPP_CONFIG } from "@/lib/config"

export function Hero() {
  const { t } = useI18n()

  const handleWhatsApp = () => {
    WHATSAPP_CONFIG.open()
  }

  return (
    <section className="relative min-h-[100vh] flex items-center justify-center overflow-hidden">
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
        {/* Enhanced cinematic gradient overlay - smoother transition */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0B0B0B]/85 via-[#0B0B0B]/35 via-60% to-[#0B0B0B]/95" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B0B0B]/40 via-transparent to-[#0B0B0B]/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 pt-24 pb-8">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-[#C8A96A]/15 backdrop-blur-sm border border-[#C8A96A]/30 rounded-full px-4 py-2 mb-8">
            <Award className="w-4 h-4 text-[#C8A96A]" />
            <span className="text-[#C8A96A] text-sm font-medium">
              {t("hero.trust2")}
            </span>
          </div>

          {/* Headline - New premium title with better spacing */}
          <h1 className="font-serif text-[2.25rem] md:text-[3rem] lg:text-[3.75rem] font-bold text-white leading-[1.15] mb-6 tracking-tight">
            <span className="block">{t("hero.title.line1")}</span>
            <span className="block text-[#C8A96A] mt-1">{t("hero.title.line2")}</span>
          </h1>

          {/* Subheadline - New positioning-focused copy */}
          <p className="text-base md:text-lg lg:text-xl text-white/85 max-w-2xl mx-auto mb-8 leading-relaxed text-pretty">
            {t("hero.subheadline")}
          </p>

          {/* Trust Points - Compact */}
          <div className="flex flex-wrap items-center justify-center gap-3 md:gap-5 mb-8">
            <div className="flex items-center gap-2 text-white/75">
              <Shield className="w-4 h-4 text-[#6B7D5C]" />
              <span className="text-sm">{t("hero.trust1")}</span>
            </div>
            <div className="flex items-center gap-2 text-white/75">
              <Car className="w-4 h-4 text-[#6B7D5C]" />
              <span className="text-sm">{t("hero.trustDoorToDoor")}</span>
            </div>
            <div className="flex items-center gap-2 text-white/75">
              <Mountain className="w-4 h-4 text-[#6B7D5C]" />
              <span className="text-sm">{t("hero.trustSki")}</span>
            </div>
          </div>

          {/* CTAs - with subtle glass effect */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-10">
            <Link href="/traslados-las-lenas">
              <Button
                size="lg"
                className="w-full sm:w-auto bg-[#6B7D5C]/95 backdrop-blur-sm hover:bg-[#5a6b4d] hover:scale-105 hover:shadow-xl hover:shadow-[#6B7D5C]/20 text-white font-semibold px-6 py-5 text-base transition-all duration-300 group rounded-lg border border-[#6B7D5C]/30"
              >
                {t("hero.cta.transfer")}
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link href="/paquetes-las-lenas">
              <Button
                size="lg"
                className="w-full sm:w-auto bg-[#C8A96A]/95 backdrop-blur-sm hover:bg-[#b89a5f] hover:scale-105 hover:shadow-xl hover:shadow-[#C8A96A]/20 text-[#0B0B0B] font-semibold px-6 py-5 text-base transition-all duration-300 group rounded-lg border border-[#C8A96A]/30"
              >
                <Snowflake className="w-4 h-4 mr-2" />
                {t("hero.cta.skiPackage")}
              </Button>
            </Link>
            <Button
              onClick={handleWhatsApp}
              size="lg"
              className="w-full sm:w-auto bg-white/10 backdrop-blur-md text-white hover:bg-white hover:text-gray-800 border border-white/25 px-6 py-5 text-base transition-all duration-300 rounded-lg hover:shadow-xl"
            >
              <MessageCircle className="w-4 h-4 mr-2" />
              {t("hero.cta.secondary")}
            </Button>
          </div>

          {/* Premium Mini Bar - Glassmorphism highlights */}
          <div className="max-w-3xl mx-auto">
            <div className="bg-white/[0.06] backdrop-blur-md border border-white/10 rounded-2xl px-6 py-4 shadow-lg">
              <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 md:gap-x-10">
                <div className="flex items-center gap-2 text-white/90">
                  <CheckCircle2 className="w-4 h-4 text-[#C8A96A]" />
                  <span className="text-sm font-medium">{t("hero.highlights.ski")}</span>
                </div>
                <div className="flex items-center gap-2 text-white/90">
                  <CheckCircle2 className="w-4 h-4 text-[#C8A96A]" />
                  <span className="text-sm font-medium">{t("hero.highlights.transfers")}</span>
                </div>
                <div className="flex items-center gap-2 text-white/90">
                  <CheckCircle2 className="w-4 h-4 text-[#C8A96A]" />
                  <span className="text-sm font-medium">{t("hero.highlights.experiences")}</span>
                </div>
                <div className="flex items-center gap-2 text-white/90">
                  <CheckCircle2 className="w-4 h-4 text-[#C8A96A]" />
                  <span className="text-sm font-medium">{t("hero.highlights.official")}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator - positioned better */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/25 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-white/40 rounded-full animate-pulse" />
        </div>
      </div>

      {/* Bottom gradient transition to next section */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent pointer-events-none" />
    </section>
  )
}
