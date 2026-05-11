"use client"

import { Clock, Mountain, Calendar, Car } from "lucide-react"
import { useI18n } from "@/lib/i18n"

export function LasLenasRouteInfo() {
  const { t } = useI18n()

  const infoItems = [
    {
      icon: Clock,
      title: t("lasLenasPage.route.duration"),
      details: [
        { label: t("lasLenasPage.route.fromSanRafael"), value: "2h30 – 3h" },
        { label: t("lasLenasPage.route.fromMendoza"), value: "4h15 – 5h" },
      ],
    },
    {
      icon: Mountain,
      title: t("lasLenasPage.route.roadType"),
      details: [
        { label: t("lasLenasPage.route.mountainRoad"), value: t("lasLenasPage.route.asphaltGravel") },
        { label: t("lasLenasPage.route.conditions"), value: t("lasLenasPage.route.snowWinter") },
      ],
    },
    {
      icon: Calendar,
      title: t("lasLenasPage.route.schedules"),
      details: [
        { label: t("lasLenasPage.route.private"), value: t("lasLenasPage.route.passengerChoice") },
        { label: t("lasLenasPage.route.shared"), value: t("lasLenasPage.route.satMon") },
      ],
    },
    {
      icon: Car,
      title: t("lasLenasPage.route.serviceType"),
      details: [
        { label: t("lasLenasPage.route.private"), value: t("lasLenasPage.route.exclusive") },
        { label: t("lasLenasPage.route.shared"), value: t("lasLenasPage.route.byAvailability") },
      ],
    },
  ]

  return (
    <section className="py-16 md:py-20 bg-[#0B0B0B]">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-[#C8A96A] font-medium tracking-wider uppercase text-sm mb-3">
            {t("lasLenasPage.route.badge")}
          </p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-4">
            {t("lasLenasPage.route.title")}
          </h2>
        </div>

        {/* Info Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {infoItems.map((item, index) => (
            <div
              key={index}
              className="bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-colors"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-[#6B7D5C]/20 rounded-lg flex items-center justify-center">
                  <item.icon className="w-5 h-5 text-[#6B7D5C]" />
                </div>
                <h3 className="text-white font-semibold">{item.title}</h3>
              </div>
              <div className="space-y-3">
                {item.details.map((detail, idx) => (
                  <div key={idx} className="flex justify-between items-center">
                    <span className="text-white/60 text-sm">{detail.label}</span>
                    <span className="text-white font-medium text-sm">{detail.value}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
