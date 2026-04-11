"use client"

import Image from "next/image"
import { useI18n } from "@/lib/i18n"
import { Snowflake, Wine, Car, CheckCircle, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Products() {
  const { t, tArray } = useI18n()

  const products = [
    {
      icon: Snowflake,
      title: t("products.ski.title"),
      subtitle: t("products.ski.subtitle"),
      description: t("products.ski.description"),
      features: tArray("products.ski.features"),
      accent: "#6B7D5C",
      featured: true,
      image: "/ski-resort.jpg",
    },
    {
      icon: Wine,
      title: t("products.experience.title"),
      subtitle: t("products.experience.subtitle"),
      description: t("products.experience.description"),
      features: tArray("products.experience.features"),
      accent: "#5A1E2A",
      featured: false,
      image: "/vineyard.jpg",
    },
    {
      icon: Car,
      title: t("products.transfers.title"),
      subtitle: t("products.transfers.subtitle"),
      description: t("products.transfers.description"),
      features: tArray("products.transfers.features"),
      accent: "#C8A96A",
      featured: false,
      image: "/mountain-road.jpg",
    },
  ]

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section id="products" className="py-20 md:py-28 bg-[#F8F6F3]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-[#6B7D5C] font-medium tracking-wider uppercase text-sm mb-3">
            {t("products.title")}
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-[#0B0B0B] mb-4">
            {t("products.subtitle")}
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {products.map((product, index) => (
            <div
              key={index}
              className={`relative rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-2 group ${
                product.featured
                  ? "shadow-2xl scale-105 z-10"
                  : "shadow-lg hover:shadow-xl"
              }`}
            >
              {/* Background Image */}
              <div className="absolute inset-0">
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className={`absolute inset-0 ${
                  product.featured 
                    ? "bg-gradient-to-b from-[#0B0B0B]/60 via-[#0B0B0B]/80 to-[#0B0B0B]/95"
                    : "bg-gradient-to-b from-[#0B0B0B]/50 via-[#0B0B0B]/70 to-[#0B0B0B]/90"
                }`} />
              </div>

              {/* Content */}
              <div className="relative z-10 p-8 min-h-[500px] flex flex-col">
                {product.featured && (
                  <div className="absolute -top-0 left-1/2 -translate-x-1/2 bg-[#C8A96A] text-[#0B0B0B] text-xs font-bold px-4 py-1 rounded-b-lg">
                    {product.subtitle}
                  </div>
                )}

                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 bg-white/10 backdrop-blur-sm"
                >
                  <product.icon
                    className="w-8 h-8"
                    style={{ color: product.accent }}
                  />
                </div>

                {!product.featured && (
                  <span
                    className="text-xs font-bold tracking-wider mb-2 block"
                    style={{ color: product.accent }}
                  >
                    {product.subtitle}
                  </span>
                )}

                <h3 className="font-serif text-2xl font-bold mb-3 text-white">
                  {product.title}
                </h3>

                <p className="mb-6 leading-relaxed text-white/70">
                  {product.description}
                </p>

                <ul className="space-y-3 mb-8 flex-grow">
                  {product.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-3">
                      <CheckCircle
                        className="w-5 h-5 flex-shrink-0"
                        style={{ color: product.accent }}
                      />
                      <span className="text-sm text-white/80">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <Button
                  onClick={scrollToContact}
                  className="w-full group bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white border border-white/20"
                >
                  {t("hero.cta.secondary")}
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-[#0B0B0B]/60 text-sm italic max-w-xl mx-auto">
          {t("products.note")}
        </p>
      </div>
    </section>
  )
}
