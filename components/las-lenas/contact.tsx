"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { MessageCircle, Phone, Mail, Clock, ArrowDown } from "lucide-react"
import { WHATSAPP_CONFIG } from "@/lib/config"
import { useI18n } from "@/lib/i18n"

export function LasLenasContact() {
  const { t } = useI18n()

  const handleWhatsApp = () => {
    WHATSAPP_CONFIG.open("Hola! Quiero reservar un transfer a Las Leñas")
  }

  const scrollToForm = () => {
    document.getElementById("cotizador")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section id="contacto" className="py-20 md:py-28 bg-[#0B0B0B]">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <p className="text-[#C8A96A] font-medium tracking-wider uppercase text-sm mb-3">
              {t("ll.contact.label")}
            </p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 text-balance">
              {t("ll.contact.title")}
            </h2>
            <p className="text-white/70 text-lg leading-relaxed max-w-2xl mx-auto">
              {t("ll.contact.subtitle")}
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button
              onClick={scrollToForm}
              size="lg"
              className="bg-[#6B7D5C] hover:bg-[#5a6b4d] text-white px-10 py-7 text-lg font-semibold"
            >
              <ArrowDown className="w-5 h-5 mr-2" />
              {t("ll.contact.quoteBtn")}
            </Button>
            <Button
              onClick={handleWhatsApp}
              size="lg"
              className="bg-white text-[#0B0B0B] hover:bg-white/90 px-10 py-7 text-lg font-semibold"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              {t("ll.contact.checkAvail")}
            </Button>
          </div>

          {/* Contact Info Card */}
          <Card className="bg-white/5 border-white/10 overflow-hidden">
            <CardContent className="p-8 md:p-12">
              <div className="grid md:grid-cols-3 gap-8">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#6B7D5C]/20 flex items-center justify-center">
                    <Phone className="w-5 h-5 text-[#6B7D5C]" />
                  </div>
                  <div>
                    <p className="text-white/60 text-sm">{t("ll.contact.whatsapp")}</p>
                    <p className="text-white font-semibold">+54 260 402 3087</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#6B7D5C]/20 flex items-center justify-center">
                    <Mail className="w-5 h-5 text-[#6B7D5C]" />
                  </div>
                  <div>
                    <p className="text-white/60 text-sm">{t("ll.contact.email")}</p>
                    <p className="text-white font-semibold">info@xuma.com.ar</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#6B7D5C]/20 flex items-center justify-center">
                    <Clock className="w-5 h-5 text-[#6B7D5C]" />
                  </div>
                  <div>
                    <p className="text-white/60 text-sm">{t("ll.contact.hours")}</p>
                    <p className="text-white font-semibold">{t("ll.contact.hoursValue")}</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Trust Note */}
          <p className="text-center text-white/50 text-sm mt-8">
            {t("ll.contact.noCommit")}
          </p>
        </div>
      </div>
    </section>
  )
}
