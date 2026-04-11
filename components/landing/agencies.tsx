"use client"

import { Button } from "@/components/ui/button"
import { Building2, Clock, Handshake, CheckCircle, MessageCircle } from "lucide-react"

const benefits = [
  {
    icon: Building2,
    title: "Local Reliable Partner",
    description: "A trusted ground operator in Mendoza for your Argentina operations",
  },
  {
    icon: Clock,
    title: "Fast Response Times",
    description: "Quick quotes and confirmations to keep your workflow moving",
  },
  {
    icon: Handshake,
    title: "Flexible Coordination",
    description: "We adapt to your clients' changing schedules and needs",
  },
  {
    icon: CheckCircle,
    title: "Professional Operation",
    description: "Consistent service standards that reflect well on your agency",
  },
]

export function Agencies() {
  const handleWhatsApp = () => {
    window.open("https://wa.me/5492615555555?text=Hello!%20I%20am%20a%20travel%20agency%20interested%20in%20partnering%20with%20XUMA%20TRAVEL", "_blank")
  }

  return (
    <section id="agencies" className="py-20 md:py-28 bg-[#5A1E2A]">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <div>
            <p className="text-[#C8A96A] font-medium tracking-wider uppercase text-sm mb-3">
              For Travel Agencies
            </p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 text-balance">
              Your trusted partner in Mendoza
            </h2>
            <p className="text-white/80 text-lg leading-relaxed mb-10">
              Looking for a reliable ground operator for your clients traveling to Las Leñas? 
              Partner with XUMA TRAVEL for seamless coordination and professional service that 
              enhances your agency&apos;s reputation.
            </p>

            <Button
              onClick={handleWhatsApp}
              size="lg"
              className="bg-[#C8A96A] hover:bg-[#b89a5c] text-[#0B0B0B] font-medium px-8 py-6 text-base"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Partner with us
            </Button>
          </div>

          {/* Benefits */}
          <div className="grid sm:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/15 transition-colors duration-300"
              >
                <div className="w-12 h-12 rounded-lg bg-[#C8A96A]/20 flex items-center justify-center mb-4">
                  <benefit.icon className="w-6 h-6 text-[#C8A96A]" />
                </div>
                <h3 className="font-serif font-semibold text-white text-lg mb-2">
                  {benefit.title}
                </h3>
                <p className="text-white/70 text-sm leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
