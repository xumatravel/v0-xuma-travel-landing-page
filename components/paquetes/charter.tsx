"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Bus, CheckCircle, ArrowRight } from "lucide-react"
import { useI18n } from "@/lib/i18n"
import { WHATSAPP_CONFIG } from "@/lib/config"

export function PaquetesCharter() {
  const { t, tArray } = useI18n()

  const features = tArray("paquetesPage.charter.features")

  const handleWhatsApp = () => {
    WHATSAPP_CONFIG.open(t("paquetesPage.header.whatsappMsg"))
  }

  return (
    <section className="py-20 md:py-28 bg-[#F8F6F3]">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <Card className="bg-white border-[#0B0B0B]/10 overflow-hidden">
            <CardContent className="p-8 md:p-12">
              <div className="flex flex-col md:flex-row md:items-center gap-8">
                {/* Icon */}
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-2xl bg-[#6B7D5C]/20 flex items-center justify-center">
                    <Bus className="w-8 h-8 text-[#6B7D5C]" />
                  </div>
                </div>
                
                {/* Content */}
                <div className="flex-grow">
                  <Badge className="bg-[#6B7D5C]/20 text-[#6B7D5C] hover:bg-[#6B7D5C]/30 border-[#6B7D5C]/40 mb-4">
                    {t("paquetesPage.charter.badge")}
                  </Badge>
                  
                  <h2 className="font-serif text-2xl md:text-3xl font-bold text-[#0B0B0B] mb-3">
                    {t("paquetesPage.charter.title")}
                  </h2>
                  
                  <p className="text-[#0B0B0B]/70 text-lg mb-6 leading-relaxed">
                    {t("paquetesPage.charter.subtitle")}
                  </p>
                  
                  <ul className="grid grid-cols-2 gap-3 mb-6">
                    {features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-[#0B0B0B]/80">
                        <CheckCircle className="w-4 h-4 text-[#6B7D5C] flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button 
                    onClick={handleWhatsApp}
                    className="bg-[#0B0B0B] hover:bg-[#0B0B0B]/90 text-white font-semibold group"
                  >
                    {t("paquetesPage.charter.cta")}
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
