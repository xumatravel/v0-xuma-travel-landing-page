"use client"

import { useState } from "react"
import { useI18n } from "@/lib/i18n"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { MessageCircle, Send, CheckCircle, Clock, Zap } from "lucide-react"

export function Contact() {
  const { t } = useI18n()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    country: "",
    date: "",
    passengers: "",
    interest: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    setIsSubmitting(false)
    setIsSubmitted(true)
    
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({ name: "", email: "", phone: "", country: "", date: "", passengers: "", interest: "", message: "" })
    }, 3000)
  }

  const handleWhatsApp = () => {
    let message = "Hello! I'm interested in planning my Mendoza experience."
    
    if (formData.name) {
      message = `Hello! I'm ${formData.name}`
      if (formData.country) message += ` from ${formData.country}`
      message += "."
      
      if (formData.interest) {
        const interestMap: Record<string, string> = {
          ski: "Ski in Las Leñas",
          experience: "Mendoza Experience",
          transfer: "transfers",
          agency: "partnering as a travel agency"
        }
        message += ` I'm interested in ${interestMap[formData.interest] || formData.interest}.`
      }
      
      if (formData.date) message += ` Travel date: ${formData.date}.`
      if (formData.passengers) message += ` ${formData.passengers} passengers.`
    }
    
    window.open(`https://wa.me/542604023087?text=${encodeURIComponent(message)}`, "_blank")
  }

  return (
    <section id="contact" className="py-20 md:py-28 bg-[#0B0B0B]">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-[#C8A96A] font-medium tracking-wider uppercase text-sm mb-3">
              {t("nav.contact")}
            </p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 text-balance">
              {t("contact.title")}
            </h2>
            <div className="inline-flex items-center gap-2 bg-[#6B7D5C]/20 border border-[#6B7D5C]/40 rounded-full px-4 py-2">
              <Zap className="w-4 h-4 text-[#6B7D5C]" />
              <span className="text-[#6B7D5C] text-sm font-medium">
                {t("contact.subtitle")}
              </span>
            </div>
          </div>

          <div className="grid md:grid-cols-5 gap-8">
            {/* WhatsApp CTA - Highlighted */}
            <div className="md:col-span-2 bg-gradient-to-br from-[#6B7D5C] to-[#5a6b4d] rounded-2xl p-8 flex flex-col justify-center items-center text-center relative overflow-hidden">
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2" />
              
              <div className="relative z-10">
                <div className="w-20 h-20 rounded-full bg-white/20 flex items-center justify-center mb-6 mx-auto">
                  <MessageCircle className="w-10 h-10 text-white" />
                </div>
                <h3 className="font-serif font-bold text-white text-2xl mb-2">
                  {t("contact.whatsapp.title")}
                </h3>
                <div className="flex items-center justify-center gap-2 text-white/80 mb-6">
                  <Clock className="w-4 h-4" />
                  <span className="text-sm">{t("contact.whatsapp.description")}</span>
                </div>
                <Button
                  onClick={handleWhatsApp}
                  size="lg"
                  className="bg-white text-[#6B7D5C] hover:bg-white/90 font-bold px-8 w-full text-lg"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  {t("contact.whatsapp.cta")}
                </Button>
              </div>
            </div>

            {/* Smart Contact Form */}
            <div className="md:col-span-3 bg-white/5 backdrop-blur-sm rounded-2xl p-8">
              {isSubmitted ? (
                <div className="h-full flex flex-col items-center justify-center text-center py-12">
                  <div className="w-20 h-20 rounded-full bg-[#6B7D5C]/20 flex items-center justify-center mb-6">
                    <CheckCircle className="w-10 h-10 text-[#6B7D5C]" />
                  </div>
                  <h3 className="font-serif font-bold text-white text-2xl mb-2">
                    Message Sent!
                  </h3>
                  <p className="text-white/70">
                    We&apos;ll get back to you within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Row 1: Name + Country */}
                  <div className="grid md:grid-cols-2 gap-5">
                    <FieldGroup>
                      <Field>
                        <FieldLabel className="text-white/80">{t("contact.form.name")} *</FieldLabel>
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
                        <FieldLabel className="text-white/80">{t("contact.form.country")} *</FieldLabel>
                        <Input
                          type="text"
                          placeholder="Brazil"
                          value={formData.country}
                          onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                          required
                          className="bg-white/10 border-white/20 text-white placeholder:text-white/40"
                        />
                      </Field>
                    </FieldGroup>
                  </div>

                  {/* Row 2: Email + Phone */}
                  <div className="grid md:grid-cols-2 gap-5">
                    <FieldGroup>
                      <Field>
                        <FieldLabel className="text-white/80">{t("contact.form.email")} *</FieldLabel>
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

                    <FieldGroup>
                      <Field>
                        <FieldLabel className="text-white/80">{t("contact.form.phone")}</FieldLabel>
                        <Input
                          type="tel"
                          placeholder="+54 9 261 555 5555"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="bg-white/10 border-white/20 text-white placeholder:text-white/40"
                        />
                      </Field>
                    </FieldGroup>
                  </div>

                  {/* Row 3: Travel Date + Passengers */}
                  <div className="grid md:grid-cols-2 gap-5">
                    <FieldGroup>
                      <Field>
                        <FieldLabel className="text-white/80">{t("contact.form.date")}</FieldLabel>
                        <Input
                          type="date"
                          value={formData.date}
                          onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                          className="bg-white/10 border-white/20 text-white placeholder:text-white/40 [color-scheme:dark]"
                        />
                      </Field>
                    </FieldGroup>

                    <FieldGroup>
                      <Field>
                        <FieldLabel className="text-white/80">{t("contact.form.passengers")}</FieldLabel>
                        <Select value={formData.passengers} onValueChange={(value) => setFormData({ ...formData, passengers: value })}>
                          <SelectTrigger className="bg-white/10 border-white/20 text-white">
                            <SelectValue placeholder="1-2" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="1-2">1-2</SelectItem>
                            <SelectItem value="3-4">3-4</SelectItem>
                            <SelectItem value="5-8">5-8</SelectItem>
                            <SelectItem value="9-15">9-15</SelectItem>
                            <SelectItem value="16+">16+</SelectItem>
                          </SelectContent>
                        </Select>
                      </Field>
                    </FieldGroup>
                  </div>

                  {/* Row 4: Interest */}
                  <FieldGroup>
                    <Field>
                      <FieldLabel className="text-white/80">{t("contact.form.interest")} *</FieldLabel>
                      <Select value={formData.interest} onValueChange={(value) => setFormData({ ...formData, interest: value })} required>
                        <SelectTrigger className="bg-white/10 border-white/20 text-white">
                          <SelectValue placeholder={t("contact.form.interest")} />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="ski">{t("contact.form.interest.ski")}</SelectItem>
                          <SelectItem value="experience">{t("contact.form.interest.experience")}</SelectItem>
                          <SelectItem value="transfer">{t("contact.form.interest.transfer")}</SelectItem>
                          <SelectItem value="agency">{t("contact.form.interest.agency")}</SelectItem>
                        </SelectContent>
                      </Select>
                    </Field>
                  </FieldGroup>

                  {/* Row 5: Message */}
                  <FieldGroup>
                    <Field>
                      <FieldLabel className="text-white/80">{t("contact.form.message")}</FieldLabel>
                      <Textarea
                        placeholder="Tell us about your travel plans..."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        rows={3}
                        className="bg-white/10 border-white/20 text-white placeholder:text-white/40 resize-none"
                      />
                    </Field>
                  </FieldGroup>

                  <Button
                    type="submit"
                    size="lg"
                    disabled={isSubmitting}
                    className="w-full bg-[#C8A96A] hover:bg-[#b89a5c] text-[#0B0B0B] font-bold py-6"
                  >
                    {isSubmitting ? (
                      "Sending..."
                    ) : (
                      <>
                        <Send className="w-5 h-5 mr-2" />
                        {t("contact.form.submit")}
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
