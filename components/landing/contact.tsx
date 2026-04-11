"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field"
import { MessageCircle, Send, Calendar, Users } from "lucide-react"

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    date: "",
    passengers: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    setIsSubmitting(false)
    setIsSubmitted(true)
    
    // Reset after showing success
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({ name: "", email: "", date: "", passengers: "", message: "" })
    }, 3000)
  }

  const handleWhatsApp = () => {
    const message = formData.name 
      ? `Hello! I'm ${formData.name} and I'm interested in booking a transfer to Las Leñas${formData.date ? ` on ${formData.date}` : ''}${formData.passengers ? ` for ${formData.passengers} passengers` : ''}.`
      : "Hello! I'm interested in booking a transfer to Las Leñas."
    window.open(`https://wa.me/5492615555555?text=${encodeURIComponent(message)}`, "_blank")
  }

  return (
    <section id="contact" className="py-20 md:py-28 bg-[#0B0B0B]">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-[#C8A96A] font-medium tracking-wider uppercase text-sm mb-3">
              Get Started
            </p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 text-balance">
              Plan your transfer to Las Leñas today
            </h2>
            <p className="text-white/70 text-lg max-w-2xl mx-auto">
              Contact us directly via WhatsApp for the fastest response, or fill out the form below and we&apos;ll get back to you shortly.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* WhatsApp CTA */}
            <div className="bg-[#6B7D5C] rounded-xl p-8 flex flex-col justify-center items-center text-center">
              <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center mb-6">
                <MessageCircle className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-serif font-bold text-white text-2xl mb-3">
                Instant Response
              </h3>
              <p className="text-white/80 mb-6">
                Get a quick quote and book your transfer directly through WhatsApp
              </p>
              <Button
                onClick={handleWhatsApp}
                size="lg"
                className="bg-white text-[#6B7D5C] hover:bg-white/90 font-medium px-8 py-6 text-base w-full"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Chat on WhatsApp
              </Button>
            </div>

            {/* Contact Form */}
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8">
              {isSubmitted ? (
                <div className="h-full flex flex-col items-center justify-center text-center">
                  <div className="w-16 h-16 rounded-full bg-[#6B7D5C]/20 flex items-center justify-center mb-4">
                    <Send className="w-8 h-8 text-[#6B7D5C]" />
                  </div>
                  <h3 className="font-serif font-bold text-white text-xl mb-2">
                    Message Sent!
                  </h3>
                  <p className="text-white/70">
                    We&apos;ll get back to you within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <FieldGroup>
                    <Field>
                      <FieldLabel className="text-white/80">Your Name</FieldLabel>
                      <Input
                        type="text"
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        required
                        className="bg-white/10 border-white/20 text-white placeholder:text-white/40"
                      />
                    </Field>
                  </FieldGroup>

                  <FieldGroup>
                    <Field>
                      <FieldLabel className="text-white/80">Email</FieldLabel>
                      <Input
                        type="email"
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        required
                        className="bg-white/10 border-white/20 text-white placeholder:text-white/40"
                      />
                    </Field>
                  </FieldGroup>

                  <div className="grid grid-cols-2 gap-4">
                    <FieldGroup>
                      <Field>
                        <FieldLabel className="text-white/80 flex items-center gap-2">
                          <Calendar className="w-4 h-4" />
                          Travel Date
                        </FieldLabel>
                        <Input
                          type="date"
                          value={formData.date}
                          onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                          className="bg-white/10 border-white/20 text-white"
                        />
                      </Field>
                    </FieldGroup>

                    <FieldGroup>
                      <Field>
                        <FieldLabel className="text-white/80 flex items-center gap-2">
                          <Users className="w-4 h-4" />
                          Passengers
                        </FieldLabel>
                        <Input
                          type="number"
                          min="1"
                          placeholder="2"
                          value={formData.passengers}
                          onChange={(e) => setFormData({ ...formData, passengers: e.target.value })}
                          className="bg-white/10 border-white/20 text-white placeholder:text-white/40"
                        />
                      </Field>
                    </FieldGroup>
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    disabled={isSubmitting}
                    className="w-full bg-[#C8A96A] hover:bg-[#b89a5c] text-[#0B0B0B] font-medium py-6"
                  >
                    {isSubmitting ? (
                      "Sending..."
                    ) : (
                      <>
                        <Send className="w-5 h-5 mr-2" />
                        Send Inquiry
                      </>
                    )}
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
