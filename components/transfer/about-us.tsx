"use client"

import { Shield, Mountain, Clock, Users } from "lucide-react"

export function AboutUs() {
  return (
    <section id="nosotros" className="py-20 bg-[#111111]">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-4">
              Sobre Nosotros
            </h2>
            <div className="w-16 h-1 bg-[#C8A96A] mx-auto" />
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <p className="text-white/80 leading-relaxed">
                Somos una empresa especializada en traslados a Las Leñas con años de experiencia 
                en rutas de montaña. Conocemos cada curva del camino y las condiciones que presenta 
                cada temporada.
              </p>
              <p className="text-white/80 leading-relaxed">
                Nuestro enfoque está en la <strong className="text-white">seguridad</strong>, 
                la <strong className="text-white">puntualidad</strong> y el 
                <strong className="text-white"> servicio personalizado</strong>. Atendemos tanto 
                a pasajeros individuales como a grupos grandes con la misma dedicación.
              </p>
              <p className="text-white/80 leading-relaxed">
                Contamos con vehículos habilitados, equipados para montaña y conductores 
                profesionales que garantizan un viaje seguro y cómodo.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/5 border border-white/10 rounded-xl p-6 text-center">
                <Shield className="w-8 h-8 text-[#6B7D5C] mx-auto mb-3" />
                <span className="text-white font-medium block">Seguridad</span>
                <span className="text-white/50 text-sm">Nuestra prioridad</span>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-xl p-6 text-center">
                <Mountain className="w-8 h-8 text-[#6B7D5C] mx-auto mb-3" />
                <span className="text-white font-medium block">Experiencia</span>
                <span className="text-white/50 text-sm">En rutas de montaña</span>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-xl p-6 text-center">
                <Clock className="w-8 h-8 text-[#6B7D5C] mx-auto mb-3" />
                <span className="text-white font-medium block">Puntualidad</span>
                <span className="text-white/50 text-sm">Siempre a tiempo</span>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-xl p-6 text-center">
                <Users className="w-8 h-8 text-[#6B7D5C] mx-auto mb-3" />
                <span className="text-white font-medium block">Atención</span>
                <span className="text-white/50 text-sm">Personalizada</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
