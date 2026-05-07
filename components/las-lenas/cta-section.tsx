"use client"

import { Button } from "@/components/ui/button"
import { MessageCircle, ArrowRight } from "lucide-react"
import { WHATSAPP_CONFIG } from "@/lib/config"

interface CTASectionProps {
  variant?: "light" | "dark" | "accent"
  showTagline?: boolean
}

export function LasLenasCTASection({ variant = "dark", showTagline = false }: CTASectionProps) {
  const handleWhatsApp = () => {
    WHATSAPP_CONFIG.open("Hola! Quiero consultar disponibilidad para un traslado a Las Lenas")
  }

  const scrollToForm = () => {
    document.getElementById("cotizar")?.scrollIntoView({ behavior: "smooth" })
  }

  const bgClass = variant === "light" 
    ? "bg-[#F8F6F3]" 
    : variant === "accent" 
      ? "bg-[#6B7D5C]" 
      : "bg-[#0B0B0B]"
  
  const textClass = variant === "light" ? "text-[#0B0B0B]" : "text-white"
  const mutedTextClass = variant === "light" ? "text-[#0B0B0B]/70" : "text-white/70"

  return (
    <section className={`py-16 md:py-20 ${bgClass}`}>
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          {showTagline && (
            <p className={`font-serif text-2xl md:text-3xl lg:text-4xl font-bold ${textClass} mb-8 text-balance leading-relaxed`}>
              &ldquo;Vivi Mendoza sin preocuparte por nada. Nosotros coordinamos todo.&rdquo;
            </p>
          )}
          
          {!showTagline && (
            <>
              <h3 className={`font-serif text-2xl md:text-3xl font-bold ${textClass} mb-4`}>
                Listo para Reservar tu Traslado?
              </h3>
              <p className={`${mutedTextClass} text-lg mb-8`}>
                Completa el formulario y recibe tu cotizacion al instante por WhatsApp.
              </p>
            </>
          )}

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={scrollToForm}
              size="lg"
              className={
                variant === "accent"
                  ? "bg-white text-[#6B7D5C] hover:bg-white/90 px-8 py-6 text-lg font-semibold"
                  : variant === "light"
                    ? "bg-[#6B7D5C] hover:bg-[#5a6b4d] text-white px-8 py-6 text-lg font-semibold"
                    : "bg-[#6B7D5C] hover:bg-[#5a6b4d] text-white px-8 py-6 text-lg font-semibold"
              }
            >
              Cotizar mi traslado
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button
              onClick={handleWhatsApp}
              size="lg"
              variant="outline"
              className={
                variant === "accent"
                  ? "border-white text-white hover:bg-white/10 px-8 py-6 text-lg"
                  : variant === "light"
                    ? "border-[#0B0B0B]/20 text-[#0B0B0B] hover:bg-[#0B0B0B]/5 px-8 py-6 text-lg"
                    : "border-white/30 text-white hover:bg-white/10 px-8 py-6 text-lg"
              }
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Consultar disponibilidad
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
