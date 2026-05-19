"use client"

import { Button } from "@/components/ui/button"
import { ArrowDown, MessageCircle, Clock, Shield } from "lucide-react"
import { useI18n } from "@/lib/i18n"
import { WHATSAPP_CONFIG } from "@/lib/config"

export function PaquetesCTA() {
  const { t } = useI18n()

  const handleWhatsApp = () => {
    WHATSAPP_CONFIG.open(t("paquetesPage.header.whatsappMsg"))
  }

  const scrollToForm = () => {
    document.getElementById("cotizador")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="py-20 md:py-28 bg-gradient-to-b from-[#6B7D5C] to-[#5a6b4d]">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 text-balance">
            {t("paquetesPage.cta.title")}
          </h2>
          <p className="text-white/90 text-lg mb-8 leading-relaxed">
            {t("paquetesPage.cta.subtitle")}
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button
              onClick={scrollToForm}
              size="lg"
              className="bg-white text-[#0B0B0B] hover:bg-white/90 px-8 py-6 text-lg font-semibold transition-all duration-300 group rounded-lg"
            >
              {t("paquetesPage.cta.quote")}
              <ArrowDown className="w-5 h-5 ml-2 group-hover:translate-y-1 transition-transform" />
            </Button>
            <Button
              onClick={handleWhatsApp}
              size="lg"
              className="bg-white/20 text-white hover:bg-white/30 border border-white/30 px-8 py-6 text-lg transition-colors rounded-lg"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              {t("paquetesPage.cta.whatsapp")}
            </Button>
          </div>

          {/* Trust indicators */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-white/80 text-sm">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>{t("paquetesPage.hero.response")}</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4" />
              <span>{t("lasLenasPage.form.noCommitment")}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
