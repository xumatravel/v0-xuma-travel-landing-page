"use client"

import { useI18n } from "@/lib/i18n"
import { Button } from "@/components/ui/button"
import { CheckCircle, MessageCircle, ArrowRight } from "lucide-react"

export function Agencies() {
  const { t, tArray } = useI18n()
  const benefits = tArray("b2b.benefits")

  const handleWhatsApp = () => {
    window.open("https://wa.me/542604023087?text=Hello!%20I%20am%20a%20travel%20agency%20interested%20in%20partnering%20with%20XUMA%20TRAVEL", "_blank")
  }

  return (
    <section id="agencies" className="py-20 md:py-28 bg-[#5A1E2A]">
      <div className="container mx-auto px-6">
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
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
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
