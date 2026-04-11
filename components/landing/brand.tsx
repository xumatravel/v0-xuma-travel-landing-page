"use client"

import { useI18n } from "@/lib/i18n"
import { Car, Settings, Sparkles, ArrowRight } from "lucide-react"

export function Brand() {
  const { t } = useI18n()

  const pillars = [
    { icon: Car, label: t("brand.transport"), color: "#C8A96A" },
    { icon: Settings, label: t("brand.logistics"), color: "#6B7D5C" },
    { icon: Sparkles, label: t("brand.experiences"), color: "#5A1E2A" },
  ]

  return (
    <section className="py-20 md:py-28 bg-[#F8F6F3]">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-[#6B7D5C] font-medium tracking-wider uppercase text-sm mb-3">
            XUMA TRAVEL
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-[#0B0B0B] mb-4">
            {t("brand.title")}
          </h2>
          <p className="text-[#0B0B0B]/60 text-lg mb-16">
            {t("brand.subtitle")}
          </p>

          <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-4 mb-12">
            {pillars.map((pillar, index) => (
              <div key={index} className="flex items-center">
                <div className="flex flex-col items-center">
                  <div
                    className="w-24 h-24 rounded-full flex items-center justify-center mb-4 shadow-lg"
                    style={{ backgroundColor: `${pillar.color}15` }}
                  >
                    <pillar.icon className="w-12 h-12" style={{ color: pillar.color }} />
                  </div>
                  <span className="font-bold text-[#0B0B0B]">{pillar.label}</span>
                </div>
                {index < pillars.length - 1 && (
                  <div className="hidden md:flex items-center mx-6">
                    <div className="w-12 h-0.5 bg-[#0B0B0B]/20" />
                    <ArrowRight className="w-5 h-5 text-[#0B0B0B]/30 -ml-1" />
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="bg-[#0B0B0B] rounded-2xl p-8 md:p-12">
            <p className="text-2xl md:text-3xl text-white font-serif">
              = <span className="text-[#C8A96A]">{t("brand.result")}</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
