"use client"

import Image from "next/image"
import { useI18n } from "@/lib/i18n"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Award, Mountain, Users, ThumbsUp, ArrowRight } from "lucide-react"

export function LasLenas() {
  const { t } = useI18n()

  const stats = [
    { icon: Mountain, value: t("lasLenas.stats.trips"), label: "Trips" },
    { icon: Award, value: t("lasLenas.stats.experience"), label: "Experience" },
    { icon: ThumbsUp, value: t("lasLenas.stats.satisfaction"), label: "Satisfaction" },
  ]

  const scrollToProducts = () => {
    document.getElementById("products")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section id="las-lenas" className="relative py-20 md:py-28 overflow-hidden">
      {/* Full-width background image */}
      <div className="absolute inset-0">
        <Image
          src="/ski-resort.jpg"
          alt="Las Leñas Ski Resort"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/95 to-white/80 lg:from-white lg:via-white/90 lg:to-transparent" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <div>
            <Badge className="bg-[#C8A96A] text-[#0B0B0B] hover:bg-[#C8A96A] text-sm px-4 py-2 font-bold mb-6">
              <Award className="w-4 h-4 mr-2" />
              {t("lasLenas.badge")}
            </Badge>
            
            <p className="text-[#6B7D5C] font-medium tracking-wider uppercase text-sm mb-3">
              {t("lasLenas.subtitle")}
            </p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-[#0B0B0B] mb-6 text-balance">
              {t("lasLenas.title")}
            </h2>
            <p className="text-[#0B0B0B]/70 text-lg leading-relaxed mb-8">
              {t("lasLenas.description")}
            </p>

            {/* Stats inline */}
            <div className="bg-[#0B0B0B] rounded-xl p-6 shadow-2xl mb-8 inline-block">
              <div className="flex gap-8">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <stat.icon className="w-5 h-5 text-[#C8A96A] mx-auto mb-2" />
                    <p className="text-white font-bold text-sm md:text-base">{stat.value}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                onClick={scrollToProducts}
                size="lg"
                className="bg-[#6B7D5C] hover:bg-[#5a6b4d] text-white group"
              >
                {t("lasLenas.cta")}
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>

          {/* Empty space for image to show through on large screens */}
          <div className="hidden lg:block" />
        </div>
      </div>
    </section>
  )
}
