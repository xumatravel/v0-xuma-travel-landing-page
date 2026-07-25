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

  const handleScrollToNext = () => {
    const nextSection = document.getElementById("next-section")
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }

  return (
    <section className="relative min-h-[95vh] flex items-end justify-center overflow-hidden pb-20">
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
        {/* Cinematic gradient overlay - more subtle bottom fade */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0B0B0B]/80 via-[#0B0B0B]/30 to-[#0B0B0B]/70" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B0B0B]/50 via-transparent to-[#0B0B0B]/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 pt-32 pb-12">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-[#C8A96A]/20 border border-[#C8A96A]/40 rounded-full px-4 py-2 mb-6">
            <Award className="w-4 h-4 text-[#C8A96A]" />
            <span className="text-[#C8A96A] text-sm font-medium">
              {t("hero.trust2")}
            </span>
          </div>

          {/* Headline - Shorter and more impactful */}
          <h1 className="font-serif text-[2.5rem] md:text-[3.25rem] lg:text-[4rem] font-bold text-[#6B7D5C] leading-tight mb-4">
            <span className="block">{t("hero.title.line1")}</span>
            <span className="block">{t("hero.title.line2")}</span>
          </h1>

          {/* Subheadline */}
          <p className="text-base md:text-lg lg:text-xl text-white/80 max-w-4xl mx-auto mb-8 leading-relaxed whitespace-normal lg:whitespace-nowrap">
            {t("hero.subheadline")}
          </p>

          {/* Premium Horizontal Pill Bar */}
          <div className="w-full max-w-4xl mx-auto mb-8">
            <div className="flex flex-wrap lg:flex-nowrap items-center justify-center gap-2 lg:gap-0 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-4 md:px-8 py-3">
              {/* Item 1 */}
              <div className="flex items-center gap-2 px-3 md:px-5 py-1">
                <Snowflake className="w-4 h-4 text-[#C8A96A] flex-shrink-0" />
                <span className="text-white/90 text-xs md:text-sm font-medium whitespace-nowrap">Especialistas en Ski</span>
              </div>
              
              {/* Separator */}
              <div className="hidden lg:block w-px h-4 bg-white/20" />
              
              {/* Item 2 */}
              <div className="flex items-center gap-2 px-3 md:px-5 py-1">
                <Car className="w-4 h-4 text-[#C8A96A] flex-shrink-0" />
                <span className="text-white/90 text-xs md:text-sm font-medium whitespace-nowrap">Transfers Premium</span>
              </div>
              
              {/* Separator */}
              <div className="hidden lg:block w-px h-4 bg-white/20" />
              
              {/* Item 3 */}
              <div className="flex items-center gap-2 px-3 md:px-5 py-1">
                <Award className="w-4 h-4 text-[#C8A96A] flex-shrink-0" />
                <span className="text-white/90 text-xs md:text-sm font-medium whitespace-nowrap">Experiencias en Mendoza</span>
              </div>
              
              {/* Separator */}
              <div className="hidden lg:block w-px h-4 bg-white/20" />
              
              {/* Item 4 */}
              <div className="flex items-center gap-2 px-3 md:px-5 py-1">
                <Shield className="w-4 h-4 text-[#C8A96A] flex-shrink-0" />
                <span className="text-white/90 text-xs md:text-sm font-medium whitespace-nowrap">Operador Oficial Las Lenas</span>
              </div>
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

      {/* Scroll indicator - Interactive */}
      <button
        type="button"
        onClick={handleScrollToNext}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 animate-bounce cursor-pointer group focus:outline-none focus-visible:ring-2 focus-visible:ring-white/50 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent rounded-full transition-all duration-300 hover:scale-110 hover:animate-none pointer-events-auto"
        aria-label="Scroll to next section"
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2 transition-all duration-300 group-hover:border-white/60 group-hover:shadow-[0_0_20px_rgba(255,255,255,0.2)]">
          <div className="w-1.5 h-3 bg-white/50 rounded-full animate-pulse transition-all duration-300 group-hover:bg-white/80 group-hover:animate-none group-hover:translate-y-1" />
        </div>
      </button>
    </section>
  )
}
