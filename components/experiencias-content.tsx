"use client"

import { Button } from "@/components/ui/button"
import { Wine, Mountain, Utensils, MessageCircle, Clock, Users } from "lucide-react"
import { WHATSAPP_CONFIG } from "@/lib/config"
import Link from "next/link"

export function ExperienciasContent() {
  const handleWhatsApp = (message: string) => {
    WHATSAPP_CONFIG.open(message)
  }

  const experiences = [
    {
      icon: Wine,
      title: "Tour de Bodegas",
      description: "Visitá las mejores bodegas de Mendoza con degustación de vinos premium y almuerzo gourmet.",
      duration: "6-8 horas",
      groupSize: "2-8 personas",
      price: "Desde USD $85/persona",
      message: "Hola! Me interesa el tour de bodegas en Mendoza",
    },
    {
      icon: Mountain,
      title: "Alta Montaña",
      description: "Recorrido por la Ruta 7 hasta el Cristo Redentor, Puente del Inca y las mejores vistas de los Andes.",
      duration: "10-12 horas",
      groupSize: "2-8 personas",
      price: "Desde USD $95/persona",
      message: "Hola! Me interesa el tour de alta montaña",
    },
    {
      icon: Utensils,
      title: "Experiencia Gastronómica",
      description: "Disfrutá de la cocina mendocina con cata de vinos maridaje en restaurantes exclusivos.",
      duration: "4-5 horas",
      groupSize: "2-6 personas",
      price: "Desde USD $120/persona",
      message: "Hola! Me interesa la experiencia gastronómica en Mendoza",
    },
  ]

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-[#0B0B0B]">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <div className="w-16 h-16 bg-[#6B7D5C]/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Wine className="w-8 h-8 text-[#6B7D5C]" />
            </div>
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-white mb-6">
              Experiencias en Mendoza
            </h1>
            <p className="text-white/80 text-xl leading-relaxed mb-8">
              Aprovechá tu viaje para conocer lo mejor de la región: vino, montaña y gastronomía
            </p>
            <Button
              onClick={() => handleWhatsApp("Hola! Me interesan las experiencias en Mendoza")}
              size="lg"
              className="bg-[#6B7D5C] hover:bg-[#5a6b4d] text-white px-8 py-6 text-lg"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Consultar experiencias
            </Button>
          </div>
        </div>
      </section>

      {/* Experiences */}
      <section className="py-20 bg-[#F8F6F3]">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#0B0B0B] text-center mb-12">
              Nuestras experiencias
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              {experiences.map((exp, index) => {
                const Icon = exp.icon
                return (
                  <div key={index} className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow">
                    <div className="w-14 h-14 bg-[#6B7D5C]/20 rounded-full flex items-center justify-center mb-6">
                      <Icon className="w-7 h-7 text-[#6B7D5C]" />
                    </div>
                    <h3 className="font-serif text-xl font-bold text-[#0B0B0B] mb-3">
                      {exp.title}
                    </h3>
                    <p className="text-[#0B0B0B]/70 mb-6 text-sm leading-relaxed">
                      {exp.description}
                    </p>
                    <ul className="space-y-2 mb-6">
                      <li className="flex items-center gap-2 text-[#0B0B0B]/60 text-sm">
                        <Clock className="w-4 h-4 text-[#C8A96A]" />
                        {exp.duration}
                      </li>
                      <li className="flex items-center gap-2 text-[#0B0B0B]/60 text-sm">
                        <Users className="w-4 h-4 text-[#C8A96A]" />
                        {exp.groupSize}
                      </li>
                    </ul>
                    <p className="text-[#6B7D5C] font-semibold mb-4">{exp.price}</p>
                    <Button
                      onClick={() => handleWhatsApp(exp.message)}
                      variant="outline"
                      className="w-full border-[#6B7D5C] text-[#6B7D5C] hover:bg-[#6B7D5C] hover:text-white"
                    >
                      <MessageCircle className="w-4 h-4 mr-2" />
                      Consultar
                    </Button>
                  </div>
                )
              })}
            </div>

            <div className="text-center mt-12">
              <p className="text-[#0B0B0B]/60 mb-2">
                ¿Buscás algo diferente?
              </p>
              <p className="text-[#0B0B0B]/70 mb-6">
                Armamos experiencias a medida según tus intereses
              </p>
              <Button
                onClick={() => handleWhatsApp("Hola! Quiero armar una experiencia personalizada en Mendoza")}
                size="lg"
                className="bg-[#C8A96A] hover:bg-[#b8995a] text-[#0B0B0B] px-8 py-6 text-lg"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Armar experiencia a medida
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#0B0B0B]">
        <div className="container mx-auto px-6 text-center">
          <p className="text-white/70 mb-4">
            ¿Necesitás también el traslado a Las Leñas?
          </p>
          <Link href="/">
            <Button
              variant="outline"
              className="border-white/30 text-white hover:bg-white/10"
            >
              Ver traslados a Las Leñas
            </Button>
          </Link>
        </div>
      </section>
    </>
  )
}
