"use client"

import { useI18n } from "@/lib/i18n"
import { Globe, Hotel, Car, CheckCircle } from "lucide-react"

export function WhatWeDo() {
  const { t } = useI18n()

  const points = [
    { icon: Globe, text: t("whatWeDo.point1") },
    { icon: Hotel, text: t("whatWeDo.point2") },
    { icon: Car, text: t("whatWeDo.point3") },
  ]

  return (
    <section className="py-20 bg-[#0B0B0B]">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            {t("whatWeDo.title")}
          </h2>
          
          <p className="text-[#C8A96A] text-lg font-medium mb-10">
            {t("whatWeDo.subtitle")}
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {points.map((point, index) => (
              <div
                key={index}
                className="flex flex-col items-center p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-[#6B7D5C]/50 transition-colors"
              >
                <div className="w-14 h-14 rounded-full bg-[#6B7D5C]/20 flex items-center justify-center mb-4">
                  <point.icon className="w-7 h-7 text-[#6B7D5C]" />
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-[#6B7D5C]" />
                  <span className="text-white font-medium">{point.text}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-r from-[#6B7D5C]/20 via-[#6B7D5C]/10 to-[#6B7D5C]/20 rounded-2xl p-8 border border-[#6B7D5C]/30">
            <p className="text-xl md:text-2xl text-white font-serif italic">
              &ldquo;{t("whatWeDo.description")}&rdquo;
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
