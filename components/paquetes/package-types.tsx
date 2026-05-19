"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CalendarDays, Clock, Info } from "lucide-react"
import { useI18n } from "@/lib/i18n"

export function PaquetesPackageTypes() {
  const { t } = useI18n()

  const packages = [
    {
      id: "skiweek",
      title: t("paquetesPage.types.skiweek.title"),
      duration: t("paquetesPage.types.skiweek.duration"),
      schedule: t("paquetesPage.types.skiweek.schedule"),
      description: t("paquetesPage.types.skiweek.desc"),
      featured: true,
    },
    {
      id: "miniweek",
      title: t("paquetesPage.types.miniweek.title"),
      duration: t("paquetesPage.types.miniweek.duration"),
      schedule: t("paquetesPage.types.miniweek.schedule"),
      description: t("paquetesPage.types.miniweek.desc"),
      featured: false,
    },
    {
      id: "extraweek",
      title: t("paquetesPage.types.extraweek.title"),
      duration: t("paquetesPage.types.extraweek.duration"),
      schedule: t("paquetesPage.types.extraweek.schedule"),
      description: t("paquetesPage.types.extraweek.desc"),
      featured: false,
    },
  ]

  return (
    <section id="paquetes" className="py-20 md:py-28 bg-[#0B0B0B]">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-14">
          <Badge className="bg-[#C8A96A]/20 text-[#C8A96A] hover:bg-[#C8A96A]/30 border-[#C8A96A]/40 mb-4">
            {t("paquetesPage.types.badge")}
          </Badge>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 text-balance">
            {t("paquetesPage.types.title")}
          </h2>
          <p className="text-white/70 text-lg max-w-2xl mx-auto leading-relaxed">
            {t("paquetesPage.types.subtitle")}
          </p>
        </div>

        {/* Package Cards */}
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-10">
          {packages.map((pkg) => (
            <Card 
              key={pkg.id} 
              className={`bg-white/5 border-white/10 overflow-hidden transition-all duration-300 hover:-translate-y-2 ${
                pkg.featured ? "ring-2 ring-[#C8A96A]" : ""
              }`}
            >
              <CardContent className="p-6">
                {pkg.featured && (
                  <Badge className="bg-[#C8A96A] text-[#0B0B0B] mb-4">
                    Recomendado
                  </Badge>
                )}
                
                <h3 className="font-serif text-2xl font-bold text-white mb-4">
                  {pkg.title}
                </h3>
                
                <div className="space-y-3 mb-4">
                  <div className="flex items-center gap-3 text-white/80">
                    <CalendarDays className="w-5 h-5 text-[#6B7D5C]" />
                    <span className="font-semibold">{pkg.duration}</span>
                  </div>
                  <div className="flex items-center gap-3 text-white/70">
                    <Clock className="w-5 h-5 text-[#C8A96A]" />
                    <span>{pkg.schedule}</span>
                  </div>
                </div>
                
                <p className="text-white/60 text-sm">
                  {pkg.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Info Note */}
        <div className="max-w-3xl mx-auto">
          <div className="flex items-start gap-3 bg-[#C8A96A]/10 border border-[#C8A96A]/30 rounded-xl p-4">
            <Info className="w-5 h-5 text-[#C8A96A] flex-shrink-0 mt-0.5" />
            <p className="text-white/80 text-sm leading-relaxed">
              {t("paquetesPage.types.passNote")}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
