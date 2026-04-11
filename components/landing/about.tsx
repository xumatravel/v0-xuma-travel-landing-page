"use client"

import { useI18n } from "@/lib/i18n"
import { CheckCircle } from "lucide-react"

export function About() {
  const { t, tArray } = useI18n()
  const values = tArray("about.values.items")

  return (
    <section id="about" className="py-20 md:py-28 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div>
            <p className="text-[#6B7D5C] font-medium tracking-wider uppercase text-sm mb-3">
              {t("nav.about")}
            </p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-[#0B0B0B] mb-6 text-balance">
              {t("about.title")}
            </h2>
            <p className="text-[#0B0B0B]/70 text-lg leading-relaxed">
              {t("about.description")}
            </p>
          </div>

          <div className="bg-[#F8F6F3] rounded-2xl p-8">
            <h3 className="font-serif font-bold text-[#0B0B0B] text-xl mb-6">
              {t("about.values.title")}
            </h3>
            <ul className="space-y-4">
              {values.map((value, index) => (
                <li key={index} className="flex items-center gap-4">
                  <CheckCircle className="w-6 h-6 text-[#6B7D5C] flex-shrink-0" />
                  <span className="text-[#0B0B0B]/80 font-medium">{value}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
