"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Shield, Car, Award, Mountain, ArrowDown } from "lucide-react"
import { useI18n } from "@/lib/i18n"

export function LasLenasWhyUs() {
  const { t } = useI18n()

  const differentials = [
    {
      icon: Award,
      title: t("ll.whyUs.diff1.title"),
      description: t("ll.whyUs.diff1.desc"),
    },
    {
      icon: Shield,
      title: t("ll.whyUs.diff2.title"),
      description: t("ll.whyUs.diff2.desc"),
    },
    {
      icon: Car,
      title: t("ll.whyUs.diff3.title"),
      description: t("ll.whyUs.diff3.desc"),
    },
    {
      icon: Mountain,
      title: t("ll.whyUs.diff4.title"),
      description: t("ll.whyUs.diff4.desc"),
    },
  ]

  const scrollToForm = () => {
    document.getElementById("cotizador")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section id="por-que-nosotros" className="py-20 md:py-28 bg-[#F8F6F3]">
      <div className="container mx-auto px-6">
        {/* About Us Header */}
        <div className="text-center mb-16">
          <p className="text-[#6B7D5C] font-medium tracking-wider uppercase text-sm mb-3">
            {t("ll.whyUs.label")}
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-[#0B0B0B] mb-6 text-balance">
            {t("ll.whyUs.title")}
          </h2>
          <p className="text-[#0B0B0B]/70 text-lg leading-relaxed max-w-3xl mx-auto mb-8">
            {t("ll.whyUs.subtitle")}
          </p>
          
          {/* Strong phrase */}
          <div className="inline-block bg-[#0B0B0B] text-white px-8 py-4 rounded-2xl">
            <p className="text-lg md:text-xl font-medium">
              &ldquo;{t("ll.whyUs.quote")}&rdquo;
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <div className="relative">
            <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/ski-resort.jpg"
                alt="Vehículo en camino a Las Leñas"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0B]/60 to-transparent" />

              {/* Stats Overlay */}
              <div className="absolute bottom-6 left-6 right-6 bg-[#0B0B0B]/90 backdrop-blur-sm rounded-xl p-6">
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <p className="text-2xl font-bold text-[#C8A96A]">+350</p>
                    <p className="text-white/60 text-xs">{t("ll.whyUs.stats.trips")}</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-[#C8A96A]">10+</p>
                    <p className="text-white/60 text-xs">{t("ll.whyUs.stats.exp")}</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-[#C8A96A]">98%</p>
                    <p className="text-white/60 text-xs">{t("ll.whyUs.stats.satisfaction")}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Content - Differentials */}
          <div>
            <p className="text-[#6B7D5C] font-medium tracking-wider uppercase text-sm mb-3">
              {t("ll.whyUs.diffLabel")}
            </p>
            <h3 className="font-serif text-2xl md:text-3xl font-bold text-[#0B0B0B] mb-8 text-balance">
              {t("ll.whyUs.diffTitle")}
            </h3>

            <div className="grid gap-6 mb-8">
              {differentials.map((item, index) => (
                <div key={index} className="flex gap-4 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
                  <div className="shrink-0 w-12 h-12 rounded-xl bg-[#6B7D5C]/10 flex items-center justify-center">
                    <item.icon className="w-6 h-6 text-[#6B7D5C]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#0B0B0B] mb-1">{item.title}</h4>
                    <p className="text-[#0B0B0B]/60 text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <Button
              onClick={scrollToForm}
              size="lg"
              className="w-full sm:w-auto bg-[#6B7D5C] hover:bg-[#5a6b4d] text-white px-8 py-6 text-lg font-semibold"
            >
              {t("ll.hero.cta1")}
              <ArrowDown className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
