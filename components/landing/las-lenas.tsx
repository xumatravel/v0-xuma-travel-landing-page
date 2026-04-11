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
    <section id="las-lenas" className="py-20 md:py-28 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <div className="relative">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/ski-resort.jpg"
                alt="Las Leñas Ski Resort"
                fill
                className="object-cover"
              />
              {/* Badge overlay */}
              <div className="absolute top-6 left-6">
                <Badge className="bg-[#C8A96A] text-[#0B0B0B] hover:bg-[#C8A96A] text-sm px-4 py-2 font-bold">
                  <Award className="w-4 h-4 mr-2" />
                  {t("lasLenas.badge")}
                </Badge>
              </div>
            </div>
            {/* Stats overlay */}
            <div className="absolute -bottom-8 left-6 right-6 lg:left-8 lg:right-8">
              <div className="bg-[#0B0B0B] rounded-xl p-6 shadow-2xl">
                <div className="grid grid-cols-3 gap-4">
                  {stats.map((stat, index) => (
                    <div key={index} className="text-center">
                      <stat.icon className="w-5 h-5 text-[#C8A96A] mx-auto mb-2" />
                      <p className="text-white font-bold text-sm md:text-base">{stat.value}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="pt-8 lg:pt-0">
            <p className="text-[#6B7D5C] font-medium tracking-wider uppercase text-sm mb-3">
              {t("lasLenas.subtitle")}
            </p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-[#0B0B0B] mb-6 text-balance">
              {t("lasLenas.title")}
            </h2>
            <p className="text-[#0B0B0B]/70 text-lg leading-relaxed mb-8">
              {t("lasLenas.description")}
            </p>

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
        </div>
      </div>
    </section>
  )
}
