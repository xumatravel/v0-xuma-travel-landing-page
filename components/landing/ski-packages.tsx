"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Hotel, Building2, Snowflake, Users, Coffee, CheckCircle } from "lucide-react"
import { useI18n } from "@/lib/i18n"

export function SkiPackages() {
  const { t, tArray } = useI18n()

  const packages = [
    {
      icon: Hotel,
      title: t("skiPackages.hotels.title"),
      features: tArray("skiPackages.hotels.features"),
      image: "/ski-resort.jpg",
    },
    {
      icon: Building2,
      title: t("skiPackages.apartments.title"),
      features: tArray("skiPackages.apartments.features"),
      image: "/hero-mountains.jpg",
    },
  ]

  return (
    <section className="py-20 md:py-28 bg-[#0B0B0B]">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 bg-[#C8A96A]/20 border border-[#C8A96A]/40 rounded-full px-4 py-2 mb-6">
            <Snowflake className="w-4 h-4 text-[#C8A96A]" />
            <span className="text-[#C8A96A] text-sm font-medium">
              {t("skiPackages.badge")}
            </span>
          </div>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 text-balance">
            {t("skiPackages.title")}
          </h2>
          <p className="text-white/70 text-lg max-w-2xl mx-auto leading-relaxed">
            {t("skiPackages.subtitle")}
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-12">
          {packages.map((pkg, index) => (
            <Card key={index} className="bg-white/5 border-white/10 overflow-hidden group hover:bg-white/10 transition-all duration-300">
              {/* Image Header */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={pkg.image}
                  alt={pkg.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#0B0B0B]/80" />
                <div className="absolute bottom-4 left-4 flex items-center gap-2">
                  <div className="w-10 h-10 rounded-lg bg-[#C8A96A] flex items-center justify-center">
                    <pkg.icon className="w-5 h-5 text-[#0B0B0B]" />
                  </div>
                  <h3 className="font-serif text-xl font-bold text-white">{pkg.title}</h3>
                </div>
              </div>
              
              <CardContent className="p-6">
                <ul className="space-y-3 mb-6">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-white/80">
                      <CheckCircle className="w-4 h-4 text-[#6B7D5C] flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Link href="/paquetes-las-lenas">
                  <Button className="w-full bg-[#6B7D5C] hover:bg-[#5a6b4d] text-white group">
                    {index === 0 ? t("skiPackages.hotels.cta") : t("skiPackages.apartments.cta")}
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Info */}
        <div className="text-center">
          <div className="inline-flex flex-wrap items-center justify-center gap-6 text-white/60 text-sm">
            <div className="flex items-center gap-2">
              <Snowflake className="w-4 h-4 text-[#C8A96A]" />
              <span>{t("skiPackages.info.skiPass")}</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4 text-[#C8A96A]" />
              <span>{t("skiPackages.info.transfers")}</span>
            </div>
            <div className="flex items-center gap-2">
              <Coffee className="w-4 h-4 text-[#C8A96A]" />
              <span>{t("skiPackages.info.halfBoard")}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
