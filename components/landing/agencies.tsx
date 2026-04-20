"use client"

import Image from "next/image"
import { useI18n } from "@/lib/i18n"
import { Button } from "@/components/ui/button"
import { CheckCircle, MessageCircle, ArrowRight } from "lucide-react"
import { getWhatsAppUrl, WHATSAPP_CONFIG } from "@/lib/contact-config"

export function Agencies() {
  const { t, tArray } = useI18n()
  const benefits = tArray("b2b.benefits")

  const handleWhatsApp = () => {
    const agencyMessage = "Hola! Soy una agencia de viajes interesada en trabajar con XUMA TRAVEL"
    window.open(getWhatsAppUrl(agencyMessage), "_blank")
  }

  return (
    <section id="agencies" className="relative py-20 md:py-28 overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <Image
          src="/travel-planning.jpg"
          alt="Travel Planning"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[#5A1E2A]/90" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#5A1E2A] via-[#5A1E2A]/95 to-[#5A1E2A]/80" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <div>
            <p className="text-[#C8A96A] font-medium tracking-wider uppercase text-sm mb-3">
              B2B
            </p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 text-balance">
              {t("b2b.title")}
            </h2>
            <p className="text-[#C8A96A] text-xl font-medium mb-6">
              {t("b2b.subtitle")}
            </p>
            <p className="text-white/80 text-lg leading-relaxed mb-10">
              {t("b2b.description")}
            </p>

            <Button
              onClick={handleWhatsApp}
              size="lg"
              className="bg-[#C8A96A] hover:bg-[#b89a5c] text-[#0B0B0B] font-semibold px-8 group"
            >
              {t("b2b.cta")}
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          {/* Benefits */}
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/10">
            <ul className="space-y-5">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-[#C8A96A] flex-shrink-0 mt-0.5" />
                  <span className="text-white text-lg">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
