"use client"

import { Button } from "@/components/ui/button"
import { MessageCircle, Calendar, CheckCircle } from "lucide-react"
import Image from "next/image"

const features = [
  "Scheduled departures",
  "Authorized vehicles",
  "Door-to-door coordination",
  "Fast and direct communication",
]

export function Hero() {
  const handleWhatsApp = () => {
    window.open("https://wa.me/5492615555555?text=Hello!%20I%20am%20interested%20in%20booking%20a%20transfer%20to%20Las%20Leñas", "_blank")
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero-mountains.jpg"
          alt="Andes Mountains - Las Leñas"
          fill
          className="object-cover"
          priority
          quality={90}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0B0B0B]/70 via-[#0B0B0B]/50 to-[#0B0B0B]/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 py-24 md:py-32">
        <div className="max-w-3xl">
          <p className="text-[#C8A96A] font-serif font-medium tracking-wider uppercase text-sm mb-4 animate-in fade-in slide-in-from-bottom-4 duration-700">
            XUMA TRAVEL • Mendoza, Argentina
          </p>
          
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight mb-6 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-150 text-balance">
            Transfers to Las Leñas without complications
          </h1>
          
          <p className="text-white/90 text-lg md:text-xl mb-8 leading-relaxed animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300">
            Reliable transportation from Mendoza for agencies and travelers
          </p>

          {/* Features */}
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-500">
            {features.map((feature, index) => (
              <li key={index} className="flex items-center gap-3 text-white/80">
                <CheckCircle className="w-5 h-5 text-[#6B7D5C] flex-shrink-0" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-700">
            <Button
              onClick={handleWhatsApp}
              size="lg"
              className="bg-[#6B7D5C] hover:bg-[#5a6b4d] text-white font-medium px-8 py-6 text-base group"
            >
              <MessageCircle className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
              Contact via WhatsApp
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-white/30 text-white hover:bg-white/10 hover:text-white font-medium px-8 py-6 text-base"
              asChild
            >
              <a href="#contact">
                <Calendar className="w-5 h-5 mr-2" />
                Book your transfer
              </a>
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-white/30 flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-white/60 rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  )
}
