"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { MessageCircle, Phone, Mail, Clock } from "lucide-react"
import { WHATSAPP_CONFIG } from "@/lib/config"

export function LasLenasContact() {
  const handleWhatsApp = () => {
    WHATSAPP_CONFIG.open("Hola! Quiero reservar un transfer a Las Leñas")
  }

  return (
    <section id="contacto" className="py-20 md:py-28 bg-[#0B0B0B]">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <p className="text-[#C8A96A] font-medium tracking-wider uppercase text-sm mb-3">
              Reserva Tu Transfer
            </p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 text-balance">
              ¿Listo para Viajar a Las Leñas?
            </h2>
            <p className="text-white/70 text-lg leading-relaxed max-w-2xl mx-auto">
              Contactanos por WhatsApp y reserva tu transfer en minutos.
              Respondemos rápido y te confirmamos disponibilidad al instante.
            </p>
          </div>

          {/* CTA Card */}
          <Card className="bg-gradient-to-br from-[#6B7D5C] to-[#5a6b4d] border-0 overflow-hidden">
            <CardContent className="p-8 md:p-12">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                {/* Left - Contact Info */}
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
                      <Phone className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="text-white/70 text-sm">WhatsApp</p>
                      <p className="text-white font-semibold">+54 260 402 3087</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
                      <Mail className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="text-white/70 text-sm">Email</p>
                      <p className="text-white font-semibold">info@xuma.com.ar</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
                      <Clock className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="text-white/70 text-sm">Horario de Atención</p>
                      <p className="text-white font-semibold">Lunes a Domingo, 8:00 - 22:00</p>
                    </div>
                  </div>
                </div>

                {/* Right - CTA */}
                <div className="text-center md:text-right">
                  <p className="text-white text-lg mb-4">
                    La forma más rápida de reservar:
                  </p>
                  <Button
                    onClick={handleWhatsApp}
                    size="lg"
                    className="bg-white text-[#6B7D5C] hover:bg-white/90 px-8 py-6 text-lg font-semibold"
                  >
                    <MessageCircle className="w-5 h-5 mr-2" />
                    Reservar por WhatsApp
                  </Button>
                  <p className="text-white/60 text-sm mt-4">
                    Respuesta en menos de 30 minutos
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Trust Note */}
          <p className="text-center text-white/50 text-sm mt-8">
            Sin compromisos. Consulta sin costo y reserva solo cuando estés seguro.
          </p>
        </div>
      </div>
    </section>
  )
}
