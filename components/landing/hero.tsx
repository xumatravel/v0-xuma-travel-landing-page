"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { MessageCircle, ArrowRight, Snowflake } from "lucide-react"
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
        {/* Enhanced cinematic gradient overlay - deeper, more editorial */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0B0B0B]/80 via-[#0B0B0B]/25 via-50% to-[#0B0B0B]/90" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B0B0B]/30 via-transparent to-[#0B0B0B]/30" />
      </div>

      {/* Content - More vertical breathing room */}
      <div className="relative z-10 container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center">
          {/* Headline - Reduced size, more elegant spacing */}
          <h1 className="font-serif text-[2rem] md:text-[2.5rem] lg:text-[3.25rem] font-bold text-white leading-[1.2] mb-5 tracking-tight">
            <span className="block">{t("hero.title.line1")}</span>
            <span className="block text-[#C8A96A] mt-2">{t("hero.title.line2")}</span>
          </h1>

          {/* Subheadline - Shorter, more premium */}
          <p className="text-base md:text-lg text-white/80 max-w-xl mx-auto mb-10 leading-relaxed font-light tracking-wide">
            {t("hero.subheadline")}
          </p>

          {/* CTAs - More breathing room */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-12">
            <Link href="/traslados-las-lenas">
              <Button
                size="lg"
                className="w-full sm:w-auto bg-[#6B7D5C] hover:bg-[#5a6b4d] text-white font-medium px-7 py-5 text-base transition-all duration-300 group rounded-md"
              >
                {t("hero.cta.transfer")}
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link href="/paquetes-las-lenas">
              <Button
                size="lg"
                className="w-full sm:w-auto bg-[#C8A96A] hover:bg-[#b89a5f] text-[#0B0B0B] font-medium px-7 py-5 text-base transition-all duration-300 group rounded-md"
              >
                <Snowflake className="w-4 h-4 mr-2" />
                {t("hero.cta.skiPackage")}
              </Button>
            </Link>
            <Button
              onClick={handleWhatsApp}
              size="lg"
              variant="ghost"
              className="w-full sm:w-auto text-white/90 hover:text-white hover:bg-white/10 border border-white/20 px-7 py-5 text-base transition-all duration-300 rounded-md"
            >
              <MessageCircle className="w-4 h-4 mr-2" />
              {t("hero.cta.secondary")}
            </Button>
          </div>

          {/* Minimal text line - No box, no glass, just elegant typography */}
          <p className="text-sm text-white/50 font-light tracking-widest uppercase">
            {t("hero.tagline")}
          </p>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-5 h-9 border border-white/20 rounded-full flex items-start justify-center p-1.5">
          <div className="w-1 h-2.5 bg-white/30 rounded-full animate-pulse" />
        </div>
      </div>

      {/* Bottom gradient transition - smoother, more elegant */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background via-background/50 to-transparent pointer-events-none" />
    </section>
  )
}
