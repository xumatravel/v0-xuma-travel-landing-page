"use client"

import { useState } from "react"
import { useI18n } from "@/lib/i18n"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { MessageCircle, Send, CheckCircle } from "lucide-react"

export function Contact() {
  const { t } = useI18n()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
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
      setFormData({ name: "", email: "", phone: "", interest: "", message: "" })
    }, 3000)
  }

  const handleWhatsApp = () => {
    const message = formData.name 
      ? `Hello! I'm ${formData.name} and I'm interested in planning my Mendoza experience.`
      : "Hello! I'm interested in planning my Mendoza experience."
    window.open(`https://wa.me/5492615555555?text=${encodeURIComponent(message)}`, "_blank")
  }

  return (
    <section id="contact" className="py-20 md:py-28 bg-[#0B0B0B]">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-[#C8A96A] font-medium tracking-wider uppercase text-sm mb-3">
              {t("nav.contact")}
            </p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 text-balance">
              {t("contact.title")}
            </h2>
            <p className="text-white/70 text-lg max-w-2xl mx-auto">
              {t("contact.subtitle")}
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-8">
            {/* WhatsApp CTA */}
            <div className="md:col-span-2 bg-[#6B7D5C] rounded-2xl p-8 flex flex-col justify-center items-center text-center">
              <div className="w-20 h-20 rounded-full bg-white/20 flex items-center justify-center mb-6">
                <MessageCircle className="w-10 h-10 text-white" />
              </div>
              <h3 className="font-serif font-bold text-white text-2xl mb-3">
                {t("contact.whatsapp.title")}
              </h3>
              <p className="text-white/80 mb-8">
                {t("contact.whatsapp.description")}
              </p>
              <Button
                onClick={handleWhatsApp}
                size="lg"
                className="bg-white text-[#6B7D5C] hover:bg-white/90 font-semibold px-8 w-full"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                {t("contact.whatsapp.cta")}
              </Button>
            </div>

            {/* Contact Form */}
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
                  <div className="grid md:grid-cols-2 gap-5">
                    <FieldGroup>
                      <Field>
                        <FieldLabel className="text-white/80">{t("contact.form.name")}</FieldLabel>
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
                        <FieldLabel className="text-white/80">{t("contact.form.email")}</FieldLabel>
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
                  </div>

                  <div className="grid md:grid-cols-2 gap-5">
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

                    <FieldGroup>
                      <Field>
                        <FieldLabel className="text-white/80">{t("contact.form.interest")}</FieldLabel>
                        <Select value={formData.interest} onValueChange={(value) => setFormData({ ...formData, interest: value })}>
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
                  </div>

                  <FieldGroup>
                    <Field>
                      <FieldLabel className="text-white/80">{t("contact.form.message")}</FieldLabel>
                      <Textarea
                        placeholder="Tell us about your travel plans..."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        rows={4}
                        className="bg-white/10 border-white/20 text-white placeholder:text-white/40 resize-none"
                      />
                    </Field>
                  </FieldGroup>

                  <Button
                    type="submit"
                    size="lg"
                    disabled={isSubmitting}
                    className="w-full bg-[#C8A96A] hover:bg-[#b89a5c] text-[#0B0B0B] font-semibold py-6"
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
