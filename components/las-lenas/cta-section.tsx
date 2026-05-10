"use client"

import { Button } from "@/components/ui/button"
import { MessageCircle, ArrowDown, Clock, CheckCircle } from "lucide-react"
import { WHATSAPP_CONFIG } from "@/lib/config"
import { useI18n } from "@/lib/i18n"

export function LasLenasCTA() {
  const { t } = useI18n()

  const handleWhatsApp = () => {
    WHATSAPP_CONFIG.open("Hola! Quiero reservar un transfer a Las Leñas")
  }

  const scrollToForm = () => {
    document.getElementById("cotizador")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="py-16 md:py-20 bg-gradient-to-br from-[#6B7D5C] to-[#5a6b4d]">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4 text-balance">
            {t("ll.cta.title")}
          </h2>
          <p className="text-white/80 text-lg mb-8">
            {t("ll.cta.subtitle")}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button
              onClick={scrollToForm}
              size="lg"
              className="bg-white text-[#6B7D5C] hover:bg-white/90 px-10 py-7 text-lg font-semibold"
            >
              <ArrowDown className="w-5 h-5 mr-2" />
              {t("ll.cta.quoteBtn")}
            </Button>
            <Button
              onClick={handleWhatsApp}
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white/10 px-10 py-7 text-lg font-semibold"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              {t("ll.cta.checkAvail")}
            </Button>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-white/70 text-sm">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>{t("ll.cta.response")}</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4" />
              <span>{t("ll.cta.noCommit")}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
