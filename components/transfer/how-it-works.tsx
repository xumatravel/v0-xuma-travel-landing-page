"use client"

import { Button } from "@/components/ui/button"
import { FileText, Send, CheckCircle, Car, ArrowRight } from "lucide-react"

const steps = [
  {
    icon: FileText,
    number: "1",
    title: "Completás la solicitud",
    description: "Indicá tus datos de viaje en el formulario",
  },
  {
    icon: Send,
    number: "2",
    title: "Te enviamos la cotización",
    description: "Recibís el precio por email o WhatsApp",
  },
  {
    icon: CheckCircle,
    number: "3",
    title: "Confirmás el servicio",
    description: "Reservás abonando una seña",
  },
  {
    icon: Car,
    number: "4",
    title: "Coordinamos tu traslado",
    description: "Te contactamos para definir los detalles",
  },
]

export function HowItWorks() {
  const scrollToForm = () => {
    document.getElementById("cotizar")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="py-20 bg-[#0B0B0B]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-4">
            Cómo Funciona el Servicio
          </h2>
          <p className="text-white/60 max-w-xl mx-auto">
            Reservar tu traslado es simple y rápido
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="text-center relative">
                {/* Connector line */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-[60%] w-full h-0.5 bg-gradient-to-r from-[#C8A96A]/50 to-transparent" />
                )}
                
                <div className="w-16 h-16 bg-[#C8A96A]/10 border border-[#C8A96A]/30 rounded-full flex items-center justify-center mx-auto mb-4 relative">
                  <step.icon className="w-7 h-7 text-[#C8A96A]" />
                  <span className="absolute -top-2 -right-2 w-6 h-6 bg-[#6B7D5C] text-white text-xs font-bold rounded-full flex items-center justify-center">
                    {step.number}
                  </span>
                </div>
                <h3 className="text-white font-semibold mb-2">{step.title}</h3>
                <p className="text-white/50 text-sm">{step.description}</p>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center mt-12">
            <Button
              onClick={scrollToForm}
              size="lg"
              className="bg-[#6B7D5C] hover:bg-[#5a6b4d] text-white font-semibold px-8 py-6 text-lg group"
            >
              Cotizar mi traslado
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
