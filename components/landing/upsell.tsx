"use client"

import { useI18n } from "@/lib/i18n"
import { Button } from "@/components/ui/button"
import { Plane, Wine, Package, ArrowRight, ChevronRight } from "lucide-react"

export function Upsell() {
  const { t } = useI18n()

  const steps = [
    {
      icon: Plane,
      title: t("upsell.step1.title"),
      description: t("upsell.step1.description"),
      color: "#C8A96A",
    },
    {
      icon: Wine,
      title: t("upsell.step2.title"),
      description: t("upsell.step2.description"),
      color: "#5A1E2A",
    },
    {
      icon: Package,
      title: t("upsell.step3.title"),
      description: t("upsell.step3.description"),
      color: "#6B7D5C",
    },
  ]

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="py-20 md:py-28 bg-gradient-to-b from-[#0B0B0B] to-[#1a1a1a]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 text-balance">
            {t("upsell.title")}
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            {t("upsell.subtitle")}
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-0 mb-12">
            {steps.map((step, index) => (
              <div key={index} className="flex items-center">
                <div className="flex flex-col items-center text-center">
                  <div
                    className="w-20 h-20 rounded-2xl flex items-center justify-center mb-4 transition-transform hover:scale-110"
                    style={{ backgroundColor: `${step.color}20` }}
                  >
                    <step.icon className="w-10 h-10" style={{ color: step.color }} />
                  </div>
                  <h3 className="text-white font-bold mb-1">{step.title}</h3>
                  <p className="text-white/50 text-sm">{step.description}</p>
                </div>
                {index < steps.length - 1 && (
                  <ChevronRight className="w-8 h-8 text-white/20 mx-4 hidden md:block" />
                )}
              </div>
            ))}
          </div>

          <div className="text-center">
            <Button
              onClick={scrollToContact}
              size="lg"
              className="bg-[#6B7D5C] hover:bg-[#5a6b4d] text-white font-semibold px-8 group"
            >
              {t("upsell.cta")}
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
