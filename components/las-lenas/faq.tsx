"use client"

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

export function LasLenasFAQ() {
  const { t, tObject } = useI18n()

  const faqs = tObject<FAQItem[]>("ll.faq.items")

  return (
    <section className="py-20 md:py-28 bg-[#F8F6F3]">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-[#6B7D5C] font-medium tracking-wider uppercase text-sm mb-3">
            {t("ll.faq.label")}
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-[#0B0B0B] mb-6 text-balance">
            {t("ll.faq.title")}
          </h2>
          <p className="text-[#0B0B0B]/70 text-lg leading-relaxed max-w-2xl mx-auto">
            {t("ll.faq.subtitle")}
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
