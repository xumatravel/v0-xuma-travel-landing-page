"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export function LasLenasFAQ() {
  const faqs = [
    {
      question: "¿Cuánto dura el viaje de Mendoza a Las Leñas?",
      answer:
        "El viaje dura aproximadamente 5 horas dependiendo de las condiciones climáticas y del camino. La distancia es de unos 450 km y el último tramo es de montaña, lo que requiere precaución especialmente en invierno.",
    },
    {
      question: "¿Qué tipo de vehículos utilizan?",
      answer:
        "Utilizamos vehículos 4x4 de última generación (Toyota Hilux, Ford Ranger, etc.) equipados con cadenas para nieve, neumáticos de invierno, calefacción potente y espacio amplio para equipaje de ski.",
    },
    {
      question: "¿Pueden buscarme en el aeropuerto de Mendoza?",
      answer:
        "Sí, ofrecemos servicio de pickup tanto en el aeropuerto como en cualquier hotel de Mendoza ciudad. Coordinamos el horario según tu vuelo con margen para retrasos.",
    },
    {
      question: "¿Qué pasa si hay mal tiempo o se cierra el camino?",
      answer:
        "Monitoreamos constantemente las condiciones climáticas y viales. Si el camino está cerrado, reprogramamos el viaje sin costo adicional. Tu seguridad es nuestra prioridad.",
    },
    {
      question: "¿Cuánto equipaje puedo llevar?",
      answer:
        "Nuestros vehículos tienen amplio espacio para equipaje de ski (esquíes, tablas de snowboard, botas, etc.) además de valijas. Si tienes equipaje especial, avísanos al reservar.",
    },
    {
      question: "¿Cómo es el pago?",
      answer:
        "Aceptamos transferencia bancaria, efectivo (pesos argentinos o dólares) y tarjetas de crédito. Se requiere una seña del 30% para confirmar la reserva.",
    },
    {
      question: "¿Ofrecen servicio de ida y vuelta?",
      answer:
        "Sí, ofrecemos transfer de ida, de vuelta, o ambos. Al reservar ida y vuelta juntos obtienes un 10% de descuento sobre el total.",
    },
    {
      question: "¿Puedo hacer paradas en el camino?",
      answer:
        "Por supuesto. Podemos hacer paradas para fotos, baño o comida durante el trayecto. Solo coordínalo con tu conductor.",
    },
  ]

  return (
    <section className="py-20 md:py-28 bg-[#F8F6F3]">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-[#6B7D5C] font-medium tracking-wider uppercase text-sm mb-3">
            Preguntas Frecuentes
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-[#0B0B0B] mb-6 text-balance">
            ¿Tienes Dudas?
          </h2>
          <p className="text-[#0B0B0B]/70 text-lg leading-relaxed max-w-2xl mx-auto">
            Aquí respondemos las preguntas más comunes sobre nuestro servicio
            de transfers a Las Leñas.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-white rounded-xl border border-[#0B0B0B]/10 px-6 overflow-hidden"
              >
                <AccordionTrigger className="text-left font-semibold text-[#0B0B0B] hover:no-underline py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-[#0B0B0B]/70 pb-5 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
