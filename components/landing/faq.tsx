"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "Where do you pick up passengers?",
    answer: "We offer pickup from Mendoza International Airport (MDZ), hotels and accommodations throughout Mendoza city, and private addresses. We'll coordinate the exact location that works best for you.",
  },
  {
    question: "Can I bring ski equipment?",
    answer: "Absolutely! Our vehicles have ample space for skis, snowboards, and all your gear. Just let us know what equipment you're bringing when you book so we can ensure proper storage.",
  },
  {
    question: "How does agency collaboration work?",
    answer: "We offer competitive rates for travel agencies with fast quoting, flexible booking modifications, and reliable service that reflects well on your agency. Contact us to set up a partnership account.",
  },
  {
    question: "Do you offer custom services?",
    answer: "Yes! Beyond standard transfers, we can arrange multi-stop itineraries, combined wine tour and ski packages, group transportation, and other customized travel solutions.",
  },
  {
    question: "What is your cancellation policy?",
    answer: "We understand plans can change. Cancellations made 48 hours or more before departure receive a full refund. Please contact us for specific circumstances.",
  },
  {
    question: "How far in advance should I book?",
    answer: "We recommend booking at least 1 week in advance during peak ski season (June-September) to ensure availability. Off-season bookings can often be accommodated with shorter notice.",
  },
]

export function FAQ() {
  return (
    <section id="faq" className="py-20 md:py-28 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-[#6B7D5C] font-medium tracking-wider uppercase text-sm mb-3">
              Common Questions
            </p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-[#0B0B0B] text-balance">
              Frequently asked questions
            </h2>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-[#F8F6F3] rounded-lg px-6 border-none"
              >
                <AccordionTrigger className="text-left font-serif font-semibold text-[#0B0B0B] hover:text-[#6B7D5C] hover:no-underline py-5">
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
