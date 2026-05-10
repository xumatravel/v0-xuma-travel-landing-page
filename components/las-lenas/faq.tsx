"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { useI18n } from "@/lib/i18n"

export function LasLenasFAQ() {
  const { t, locale } = useI18n()

  const faqs = {
    es: [
      {
        question: "¿Cuánto dura el viaje de Mendoza a Las Leñas?",
        answer:
          "El viaje dura aproximadamente 5 horas dependiendo de las condiciones climáticas y del camino. La distancia es de unos 450 km y el último tramo es de montaña, lo que requiere precaución especialmente en invierno.",
      },
      {
        question: "¿Qué tipo de vehículos utilizan?",
        answer:
          "Utilizamos diferentes tipos de vehículos según las necesidades: autos, pickups, vans y minibuses. Todos equipados con cadenas para nieve cuando es necesario, calefacción potente y espacio amplio para equipaje de ski.",
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
    ],
    pt: [
      {
        question: "Quanto tempo dura a viagem de Mendoza a Las Leñas?",
        answer:
          "A viagem dura aproximadamente 5 horas dependendo das condições climáticas e da estrada. A distância é de cerca de 450 km e o último trecho é de montanha, o que requer cuidado especialmente no inverno.",
      },
      {
        question: "Que tipo de veículos vocês usam?",
        answer:
          "Usamos diferentes tipos de veículos conforme as necessidades: carros, pickups, vans e minibuses. Todos equipados com correntes para neve quando necessário, aquecimento potente e espaço amplo para equipamento de ski.",
      },
      {
        question: "Vocês podem me buscar no aeroporto de Mendoza?",
        answer:
          "Sim, oferecemos serviço de pickup tanto no aeroporto quanto em qualquer hotel da cidade de Mendoza. Coordenamos o horário conforme seu voo com margem para atrasos.",
      },
      {
        question: "O que acontece se o tempo estiver ruim ou a estrada fechar?",
        answer:
          "Monitoramos constantemente as condições climáticas e viárias. Se a estrada estiver fechada, reprogramamos a viagem sem custo adicional. Sua segurança é nossa prioridade.",
      },
      {
        question: "Quanta bagagem posso levar?",
        answer:
          "Nossos veículos têm espaço amplo para equipamento de ski (esquis, pranchas de snowboard, botas, etc.) além de malas. Se tiver bagagem especial, avise-nos ao reservar.",
      },
      {
        question: "Como funciona o pagamento?",
        answer:
          "Aceitamos transferência bancária, dinheiro (pesos argentinos ou dólares) e cartões de crédito. É necessário um sinal de 30% para confirmar a reserva.",
      },
      {
        question: "Vocês oferecem serviço de ida e volta?",
        answer:
          "Sim, oferecemos transfer de ida, de volta, ou ambos. Ao reservar ida e volta juntos você obtém 10% de desconto sobre o total.",
      },
      {
        question: "Posso fazer paradas no caminho?",
        answer:
          "Claro. Podemos fazer paradas para fotos, banheiro ou comida durante o trajeto. Apenas coordene com seu motorista.",
      },
    ],
    en: [
      {
        question: "How long is the trip from Mendoza to Las Leñas?",
        answer:
          "The trip takes approximately 5 hours depending on weather and road conditions. The distance is about 450 km and the last stretch is mountain road, which requires caution especially in winter.",
      },
      {
        question: "What type of vehicles do you use?",
        answer:
          "We use different types of vehicles according to needs: cars, pickups, vans and minibuses. All equipped with snow chains when necessary, powerful heating and ample space for ski equipment.",
      },
      {
        question: "Can you pick me up at Mendoza airport?",
        answer:
          "Yes, we offer pickup service both at the airport and at any hotel in Mendoza city. We coordinate the schedule according to your flight with margin for delays.",
      },
      {
        question: "What happens if the weather is bad or the road closes?",
        answer:
          "We constantly monitor weather and road conditions. If the road is closed, we reschedule the trip at no additional cost. Your safety is our priority.",
      },
      {
        question: "How much luggage can I bring?",
        answer:
          "Our vehicles have ample space for ski equipment (skis, snowboards, boots, etc.) plus suitcases. If you have special luggage, let us know when booking.",
      },
      {
        question: "How does payment work?",
        answer:
          "We accept bank transfer, cash (Argentine pesos or dollars) and credit cards. A 30% deposit is required to confirm the reservation.",
      },
      {
        question: "Do you offer round-trip service?",
        answer:
          "Yes, we offer one-way, return, or both transfers. When booking round-trip together you get a 10% discount on the total.",
      },
      {
        question: "Can I make stops along the way?",
        answer:
          "Of course. We can make stops for photos, bathroom or food during the trip. Just coordinate with your driver.",
      },
    ],
  }

  const currentFaqs = faqs[locale] || faqs.es

  return (
    <section className="py-20 md:py-28 bg-[#F8F6F3]">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-[#6B7D5C] font-medium tracking-wider uppercase text-sm mb-3">
            {t("lasLenasPage.faq.badge")}
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-[#0B0B0B] mb-6 text-balance">
            {t("lasLenasPage.faq.title")}
          </h2>
          <p className="text-[#0B0B0B]/70 text-lg leading-relaxed max-w-2xl mx-auto">
            {t("lasLenasPage.faq.subtitle")}
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {currentFaqs.map((faq, index) => (
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
