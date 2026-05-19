"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { MessageCircle, Mail, Clock, ArrowRight } from "lucide-react"
import { useI18n } from "@/lib/i18n"
import { WHATSAPP_CONFIG, COMPANY_CONFIG } from "@/lib/config"

export function PaquetesContact() {
  const { t } = useI18n()

  const handleWhatsApp = () => {
    WHATSAPP_CONFIG.open(t("paquetesPage.header.whatsappMsg"))
  }

  const scrollToForm = () => {
    document.getElementById("cotizador")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section id="contacto" className="py-20 md:py-28 bg-[#F8F6F3]">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <Badge className="bg-[#6B7D5C]/20 text-[#6B7D5C] hover:bg-[#6B7D5C]/30 border-[#6B7D5C]/40 mb-4">
              {t("paquetesPage.contact.badge")}
            </Badge>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-[#0B0B0B] mb-4 text-balance">
              {t("paquetesPage.contact.title")}
            </h2>
            <p className="text-[#0B0B0B]/70 text-lg max-w-2xl mx-auto leading-relaxed">
              {t("paquetesPage.contact.subtitle")}
            </p>
          </div>

          {/* Contact Methods */}
          <div className="grid md:grid-cols-3 gap-6 mb-10">
            {/* WhatsApp */}
            <div className="bg-white rounded-2xl p-6 text-center shadow-sm border border-[#0B0B0B]/5">
              <div className="w-12 h-12 rounded-full bg-[#6B7D5C]/20 flex items-center justify-center mx-auto mb-4">
                <MessageCircle className="w-6 h-6 text-[#6B7D5C]" />
              </div>
              <h3 className="font-semibold text-[#0B0B0B] mb-2">{t("lasLenasPage.contact.phone")}</h3>
              <p className="text-[#0B0B0B]/70 text-sm mb-4">+54 9 260 402-3087</p>
              <Button 
                onClick={handleWhatsApp}
                size="sm"
                className="bg-[#6B7D5C] hover:bg-[#5a6b4d] text-white"
              >
                <MessageCircle className="w-4 h-4 mr-2" />
                WhatsApp
              </Button>
            </div>

            {/* Email */}
            <div className="bg-white rounded-2xl p-6 text-center shadow-sm border border-[#0B0B0B]/5">
              <div className="w-12 h-12 rounded-full bg-[#C8A96A]/20 flex items-center justify-center mx-auto mb-4">
                <Mail className="w-6 h-6 text-[#C8A96A]" />
              </div>
              <h3 className="font-semibold text-[#0B0B0B] mb-2">{t("lasLenasPage.contact.email")}</h3>
              <p className="text-[#0B0B0B]/70 text-sm mb-4">{COMPANY_CONFIG.emailReservas}</p>
              <Button 
                asChild
                size="sm"
                variant="outline"
                className="border-[#0B0B0B]/20"
              >
                <a href={`mailto:${COMPANY_CONFIG.emailReservas}`}>
                  <Mail className="w-4 h-4 mr-2" />
                  Email
                </a>
              </Button>
            </div>

            {/* Hours */}
            <div className="bg-white rounded-2xl p-6 text-center shadow-sm border border-[#0B0B0B]/5">
              <div className="w-12 h-12 rounded-full bg-[#0B0B0B]/10 flex items-center justify-center mx-auto mb-4">
                <Clock className="w-6 h-6 text-[#0B0B0B]/70" />
              </div>
              <h3 className="font-semibold text-[#0B0B0B] mb-2">{t("lasLenasPage.contact.hours")}</h3>
              <p className="text-[#0B0B0B]/70 text-sm mb-4">{t("lasLenasPage.contact.hoursValue")}</p>
              <Button 
                onClick={scrollToForm}
                size="sm"
                variant="outline"
                className="border-[#0B0B0B]/20"
              >
                {t("paquetesPage.cta.quote")}
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>

          {/* Trust Note */}
          <p className="text-center text-[#0B0B0B]/60 text-sm">
            {t("lasLenasPage.contact.trustNote")}
          </p>
        </div>
      </div>
    </section>
  )
}
