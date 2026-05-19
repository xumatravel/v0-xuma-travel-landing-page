"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Building2, CheckCircle, ArrowRight } from "lucide-react"
import { useI18n } from "@/lib/i18n"

export function PaquetesApartments() {
  const { t, tArray } = useI18n()

  const features = tArray("paquetesPage.apartments.features")

  const scrollToForm = () => {
    document.getElementById("cotizador")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="py-20 md:py-28 bg-[#0B0B0B]">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <Card className="bg-white/5 border-white/10 overflow-hidden">
            <CardContent className="p-8 md:p-12">
              <div className="flex flex-col md:flex-row md:items-center gap-8">
                {/* Icon */}
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-2xl bg-[#C8A96A]/20 flex items-center justify-center">
                    <Building2 className="w-8 h-8 text-[#C8A96A]" />
                  </div>
                </div>
                
                {/* Content */}
                <div className="flex-grow">
                  <Badge className="bg-[#C8A96A]/20 text-[#C8A96A] hover:bg-[#C8A96A]/30 border-[#C8A96A]/40 mb-4">
                    {t("paquetesPage.apartments.badge")}
                  </Badge>
                  
                  <h2 className="font-serif text-2xl md:text-3xl font-bold text-white mb-3">
                    {t("paquetesPage.apartments.title")}
                  </h2>
                  
                  <p className="text-white/70 text-lg mb-6 leading-relaxed">
                    {t("paquetesPage.apartments.subtitle")}
                  </p>
                  
                  <ul className="grid grid-cols-2 gap-3 mb-6">
                    {features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-white/80">
                        <CheckCircle className="w-4 h-4 text-[#6B7D5C] flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button 
                    onClick={scrollToForm}
                    className="bg-[#C8A96A] hover:bg-[#b89a5f] text-[#0B0B0B] font-semibold group"
                  >
                    {t("paquetesPage.apartments.cta")}
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
