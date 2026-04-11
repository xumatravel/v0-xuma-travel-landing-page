"use client"

import { useEffect, useState, useRef } from "react"
import { useI18n } from "@/lib/i18n"

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
    <span ref={ref} className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-[#0B0B0B]">
      {count.toLocaleString()}{suffix}
    </span>
  )
}

export function Trust() {
  const { t } = useI18n()

  const stats = [
    { value: 5000, suffix: "+", label: t("trust.passengers") },
    { value: 30, suffix: "+", label: t("trust.years") },
    { value: 99, suffix: "%", label: t("trust.satisfaction") },
    { value: 24, suffix: "/7", label: t("trust.support") },
  ]

  return (
    <section className="py-16 md:py-20 bg-[#F8F6F3]">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center p-6 rounded-lg hover:bg-white/50 transition-colors duration-300"
            >
              <AnimatedNumber value={stat.value} suffix={stat.suffix} />
              <p className="mt-3 text-[#0B0B0B]/70 font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
