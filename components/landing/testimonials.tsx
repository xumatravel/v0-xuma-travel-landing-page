"use client"

import { useI18n } from "@/lib/i18n"
import { Star, Quote, Users } from "lucide-react"

interface Testimonial {
  text: string
  author: string
  role: string
}

export function Testimonials() {
  const { t, tObject } = useI18n()
  const testimonials = tObject<Testimonial[]>("testimonials.items")

  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-[#6B7D5C]/10 border border-[#6B7D5C]/20 rounded-full px-4 py-2 mb-6">
            <Users className="w-4 h-4 text-[#6B7D5C]" />
            <span className="text-[#6B7D5C] text-sm font-bold">
              {t("testimonials.subtitle")}
            </span>
          </div>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-[#0B0B0B] text-balance">
            {t("testimonials.title")}
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="relative bg-[#F8F6F3] rounded-2xl p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <Quote className="absolute top-6 right-6 w-10 h-10 text-[#6B7D5C]/20" />
              
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-[#C8A96A] text-[#C8A96A]"
                  />
                ))}
              </div>

              <p className="text-[#0B0B0B]/80 leading-relaxed mb-6 text-lg">
                &ldquo;{testimonial.text}&rdquo;
              </p>

              <div className="border-t border-[#0B0B0B]/10 pt-4">
                <p className="font-bold text-[#0B0B0B]">{testimonial.author}</p>
                <p className="text-sm text-[#0B0B0B]/60">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Agency Logos Placeholder */}
        <div className="mt-16 text-center">
          <p className="text-[#0B0B0B]/40 text-sm uppercase tracking-wider mb-8">
            Trusted by agencies worldwide
          </p>
          <div className="flex flex-wrap items-center justify-center gap-12 opacity-50">
            {/* Placeholder logos - these would be replaced with real agency logos */}
            <div className="w-24 h-8 bg-[#0B0B0B]/10 rounded" />
            <div className="w-28 h-8 bg-[#0B0B0B]/10 rounded" />
            <div className="w-20 h-8 bg-[#0B0B0B]/10 rounded" />
            <div className="w-26 h-8 bg-[#0B0B0B]/10 rounded" />
            <div className="w-24 h-8 bg-[#0B0B0B]/10 rounded" />
          </div>
        </div>
      </div>
    </section>
  )
}
