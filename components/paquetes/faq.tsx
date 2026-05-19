"use client"

import { Badge } from "@/components/ui/badge"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { useI18n } from "@/lib/i18n"

interface FAQItem {
  question: string
  answer: string
}

export function PaquetesFAQ() {
  const { t, tObject } = useI18n()

  const faqItems = tObject<FAQItem[]>("paquetesPage.faq.items")

  return (
    <section id="faq" className="py-20 md:py-28 bg-[#0B0B0B]">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <Badge className="bg-[#C8A96A]/20 text-[#C8A96A] hover:bg-[#C8A96A]/30 border-[#C8A96A]/40 mb-4">
              {t("paquetesPage.faq.badge")}
            </Badge>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              {t("paquetesPage.faq.title")}
            </h2>
            <p className="text-white/70 text-lg max-w-xl mx-auto leading-relaxed">
              {t("paquetesPage.faq.subtitle")}
            </p>
          </div>

          {/* FAQ Accordion */}
          <Accordion type="single" collapsible className="space-y-4">
            {faqItems.map((item, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-white/5 border border-white/10 rounded-xl px-6 overflow-hidden"
              >
                <AccordionTrigger className="text-left text-white hover:text-[#C8A96A] hover:no-underline py-5 font-semibold">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-white/70 pb-5 leading-relaxed">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
