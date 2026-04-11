"use client"

import Image from "next/image"
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
      image: "/mountain-road.jpg",
    },
    {
      icon: Wine,
      title: t("upsell.step2.title"),
      description: t("upsell.step2.description"),
      color: "#5A1E2A",
      image: "/vineyard.jpg",
    },
    {
      icon: Package,
      title: t("upsell.step3.title"),
      description: t("upsell.step3.description"),
      color: "#6B7D5C",
      image: "/ski-resort.jpg",
    },
  ]

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="relative py-20 md:py-28 overflow-hidden">
      {/* Background with subtle image texture */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0B0B0B] to-[#1a1a1a]">
        <div className="absolute inset-0 opacity-5">
          <Image
            src="/hero-mountains.jpg"
            alt=""
            fill
            className="object-cover"
          />
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 text-balance">
            {t("upsell.title")}
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            {t("upsell.subtitle")}
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row items-stretch justify-center gap-6 md:gap-4 mb-12">
            {steps.map((step, index) => (
              <div key={index} className="flex items-center flex-1">
                <div className="relative flex-1 rounded-2xl overflow-hidden group">
                  {/* Background image */}
                  <div className="absolute inset-0">
                    <Image
                      src={step.image}
                      alt={step.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110 opacity-30"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0B] via-[#0B0B0B]/80 to-transparent" />
                  </div>
                  
                  {/* Content */}
                  <div className="relative z-10 p-6 text-center min-h-[200px] flex flex-col items-center justify-center">
                    <div
                      className="w-16 h-16 rounded-2xl flex items-center justify-center mb-4 transition-transform group-hover:scale-110"
                      style={{ backgroundColor: `${step.color}30` }}
                    >
                      <step.icon className="w-8 h-8" style={{ color: step.color }} />
                    </div>
                    <h3 className="text-white font-bold text-lg mb-2">{step.title}</h3>
                    <p className="text-white/50 text-sm">{step.description}</p>
                  </div>
                </div>
                {index < steps.length - 1 && (
                  <ChevronRight className="w-8 h-8 text-white/20 mx-2 hidden md:block flex-shrink-0" />
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
