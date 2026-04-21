"use client"

import { useEffect, useState, useRef } from "react"
import { useI18n } from "@/lib/i18n"
import Image from "next/image"
import { Shield, Globe, Users, Clock, Award, Building2 } from "lucide-react"

function AnimatedNumber({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.5 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!isVisible) return

    const duration = 2000
    const steps = 60
    const increment = value / steps
    let current = 0

    const timer = setInterval(() => {
      current += increment
      if (current >= value) {
        setCount(value)
        clearInterval(timer)
      } else {
        setCount(Math.floor(current))
      }
    }, duration / steps)

    return () => clearInterval(timer)
  }, [isVisible, value])

  return (
    <span ref={ref} className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-[#0B0B0B]">
      {count.toLocaleString()}{suffix}
    </span>
  )
}

export function Trust() {
  const { t } = useI18n()

  const stats = [
    { value: 30, suffix: "+", label: t("trust.years"), icon: Award },
    { value: 5000, suffix: "+", label: t("trust.passengers"), icon: Users },
    { value: 99, suffix: "%", label: t("trust.satisfaction"), icon: Shield },
    { value: 24, suffix: "/7", label: t("trust.support"), icon: Clock },
  ]

  const trustPoints = [
    { icon: Award, label: t("trust.point1") },
    { icon: Globe, label: t("trust.point2") },
    { icon: Building2, label: t("trust.point3") },
    { icon: Users, label: t("trust.point4") },
  ]

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-[#F8F6F3] to-white">
      <div className="container mx-auto px-6">
        {/* Las Leñas Official Partner Badge */}
        <div className="flex flex-col items-center mb-16">
          <div className="bg-white rounded-2xl shadow-lg border border-[#C8A96A]/20 p-8 max-w-2xl w-full">
            <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8">
              {/* Las Leñas Logo */}
              <div className="flex-shrink-0">
                <Image
                  src="/las-lenas-logo.jpg"
                  alt="Las Leñas - Official Partner"
                  width={120}
                  height={80}
                  className="object-contain rounded-lg"
                />
              </div>
              {/* Partner Text */}
              <div className="text-center md:text-left">
                <p className="text-[#C8A96A] text-xs font-semibold uppercase tracking-wider mb-1">
                  {t("trust.partnerBadge")}
                </p>
                <h3 className="font-serif text-xl md:text-2xl font-bold text-[#0B0B0B] mb-2">
                  {t("trust.partnerTitle")}
                </h3>
                <p className="text-[#0B0B0B]/60 text-sm">
                  {t("trust.partnerDescription")}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-16">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center p-6 bg-white rounded-xl shadow-sm border border-[#0B0B0B]/5 hover:shadow-md hover:border-[#C8A96A]/30 transition-all duration-300"
            >
              <stat.icon className="w-8 h-8 text-[#6B7D5C] mx-auto mb-4" />
              <AnimatedNumber value={stat.value} suffix={stat.suffix} />
              <p className="mt-2 text-[#0B0B0B]/70 font-medium text-sm">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Trust Points */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {trustPoints.map((point, index) => (
            <div
              key={index}
              className="flex items-center gap-3 p-4 bg-[#0B0B0B]/5 rounded-lg"
            >
              <point.icon className="w-5 h-5 text-[#C8A96A] flex-shrink-0" />
              <span className="text-[#0B0B0B]/80 text-sm font-medium">{point.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
