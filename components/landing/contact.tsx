"use client"

import { useState, useCallback } from "react"
import { useI18n } from "@/lib/i18n"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { MessageCircle, Send, Clock, Zap, CheckCircle2 } from "lucide-react"
import { 
  WHATSAPP_CONFIG, 
  INTEGRATIONS_CONFIG, 
  buildWhatsAppMessage as buildMessage,
  prepareLeadData 
} from "@/lib/config"

// ============================================================================
// TIPOS
// ============================================================================
interface FormData {
  name: string
  email: string
  phone: string
  country: string
  arrivalDate: string
  departureDate: string
  passengers: string
  interest: string
  message: string
}

interface ValidationErrors {
  [key: string]: string
}

/**
 * Valida los campos del formulario
 */
function validateForm(formData: FormData): ValidationErrors {
  const errors: ValidationErrors = {}
  
  if (!formData.name.trim()) {
    errors.name = "El nombre es requerido"
  }
  
  if (!formData.country.trim()) {
    errors.country = "El país es requerido"
  }
  
  if (!formData.email.trim()) {
    errors.email = "El email es requerido"
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
    errors.email = "Ingresa un email válido"
  }
  
  if (!formData.arrivalDate) {
    errors.arrivalDate = "La fecha de llegada es requerida"
  }
  
  if (!formData.interest) {
    errors.interest = "Selecciona tu interés"
  }
  
  return errors
}

// ============================================================================
// COMPONENTE PRINCIPAL
// ============================================================================
export function Contact() {
  const { t } = useI18n()
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    country: "",
    arrivalDate: "",
    departureDate: "",
    passengers: "",
    interest: "",
    message: "",
  })
  const [errors, setErrors] = useState<ValidationErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")

  // Actualizar campo del formulario
  const updateField = useCallback((field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
    // Limpiar error del campo cuando el usuario empieza a escribir
    if (errors[field]) {
      setErrors(prev => {
        const newErrors = { ...prev }
        delete newErrors[field]
        return newErrors
      })
    }
  }, [errors])

  // Reset del formulario
  const resetForm = useCallback(() => {
    setFormData({
      name: "",
      email: "",
      phone: "",
      country: "",
      arrivalDate: "",
      departureDate: "",
      passengers: "",
      interest: "",
      message: "",
    })
    setErrors({})
  }, [])

  // Envio del formulario
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    // Validar formulario
    const validationErrors = validateForm(formData)
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      return
    }
    
    setIsSubmitting(true)
    setSubmitStatus("idle")

    try {
      // 1. PRIORIDAD: Abrir WhatsApp inmediatamente (nunca falla)
      const message = buildMessage(formData)
      WHATSAPP_CONFIG.open(message)
      
      // 2. BACKUP: Enviar email en segundo plano (no bloquea)
      if (INTEGRATIONS_CONFIG.email.enabled) {
        const leadData = prepareLeadData(formData)
        fetch("/api/contact", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(leadData),
        }).catch(() => {
          // Silenciosamente fallar - WhatsApp ya fue enviado
        })
      }
      
      // 3. TODO: Google Sheets backup (futuro)
      // if (INTEGRATIONS_CONFIG.googleSheets.enabled) {
      //   await sendToGoogleSheets(leadData)
      // }
      
      // 4. TODO: CRM sync (futuro)
      // if (INTEGRATIONS_CONFIG.crm.enabled) {
      //   await syncToCRM(leadData)
      // }
      
      // Exito - WhatsApp se abrio correctamente
      setSubmitStatus("success")
      
      // Reset formulario despues de un breve delay
      setTimeout(() => {
        resetForm()
        setSubmitStatus("idle")
      }, 3000)
      
    } catch (error) {
      console.error("Error submitting form:", error)
      // Incluso si hay error, intentar abrir WhatsApp como fallback
      const message = buildMessage(formData)
      WHATSAPP_CONFIG.open(message)
      setSubmitStatus("success")
    } finally {
      setIsSubmitting(false)
    }
  }

  // Boton de WhatsApp directo (sin formulario completo)
  const handleWhatsApp = () => {
    if (formData.name || formData.interest || formData.arrivalDate) {
      const message = buildMessage(formData)
      WHATSAPP_CONFIG.open(message)
    } else {
      WHATSAPP_CONFIG.open()
    }
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
                          onChange={(e) => updateField("name", e.target.value)}
                          className={`bg-white/10 border-white/20 text-white placeholder:text-white/40 ${errors.name ? "border-red-400" : ""}`}
                        />
                        {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name}</p>}
                      </Field>
                    </FieldGroup>

                    <FieldGroup>
                      <Field>
                        <FieldLabel className="text-white/80">{t("contact.form.country")} *</FieldLabel>
                        <Input
                          type="text"
                          placeholder="Brazil"
                          value={formData.country}
                          onChange={(e) => updateField("country", e.target.value)}
                          className={`bg-white/10 border-white/20 text-white placeholder:text-white/40 ${errors.country ? "border-red-400" : ""}`}
                        />
                        {errors.country && <p className="text-red-400 text-xs mt-1">{errors.country}</p>}
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
                          onChange={(e) => updateField("email", e.target.value)}
                          className={`bg-white/10 border-white/20 text-white placeholder:text-white/40 ${errors.email ? "border-red-400" : ""}`}
                        />
                        {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email}</p>}
                      </Field>
                    </FieldGroup>

                    <FieldGroup>
                      <Field>
                        <FieldLabel className="text-white/80">{t("contact.form.phone")}</FieldLabel>
                        <Input
                          type="tel"
                          placeholder="+54 9 261 555 5555"
                          value={formData.phone}
                          onChange={(e) => updateField("phone", e.target.value)}
                          className="bg-white/10 border-white/20 text-white placeholder:text-white/40"
                        />
                      </Field>
                    </FieldGroup>
                  </div>

                  {/* Row 3: Arrival Date + Departure Date */}
                  <div className="grid md:grid-cols-2 gap-5">
                    <FieldGroup>
                      <Field>
                        <FieldLabel className="text-white/80">{t("contact.form.arrivalDate")} *</FieldLabel>
                        <Input
                          type="date"
                          value={formData.arrivalDate}
                          onChange={(e) => updateField("arrivalDate", e.target.value)}
                          className={`bg-white/10 border-white/20 text-white placeholder:text-white/40 [color-scheme:dark] ${errors.arrivalDate ? "border-red-400" : ""}`}
                        />
                        {errors.arrivalDate && <p className="text-red-400 text-xs mt-1">{errors.arrivalDate}</p>}
                      </Field>
                    </FieldGroup>

                    <FieldGroup>
                      <Field>
                        <FieldLabel className="text-white/80">{t("contact.form.departureDate")}</FieldLabel>
                        <Input
                          type="date"
                          value={formData.departureDate}
                          onChange={(e) => updateField("departureDate", e.target.value)}
                          className="bg-white/10 border-white/20 text-white placeholder:text-white/40 [color-scheme:dark]"
                        />
                      </Field>
                    </FieldGroup>
                  </div>

                  {/* Row 4: Passengers */}
                  <FieldGroup>
                    <Field>
                      <FieldLabel className="text-white/80">{t("contact.form.passengers")}</FieldLabel>
                      <Select value={formData.passengers} onValueChange={(value) => updateField("passengers", value)}>
                        <SelectTrigger className="bg-white/10 border-white/20 text-white">
                          <SelectValue placeholder="1" />
                        </SelectTrigger>
                        <SelectContent>
                          {Array.from({ length: 24 }, (_, i) => i + 1).map((num) => (
                            <SelectItem key={num} value={num.toString()}>{num}</SelectItem>
                          ))}
                          <SelectItem value="25+">25+</SelectItem>
                        </SelectContent>
                      </Select>
                    </Field>
                  </FieldGroup>

                  {/* Row 5: Interest */}
                  <FieldGroup>
                    <Field>
                      <FieldLabel className="text-white/80">{t("contact.form.interest")} *</FieldLabel>
                      <Select value={formData.interest} onValueChange={(value) => updateField("interest", value)}>
                        <SelectTrigger className={`bg-white/10 border-white/20 text-white ${errors.interest ? "border-red-400" : ""}`}>
                          <SelectValue placeholder={t("contact.form.interest")} />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="ski">{t("contact.form.interest.ski")}</SelectItem>
                          <SelectItem value="experience">{t("contact.form.interest.experience")}</SelectItem>
                          <SelectItem value="transfer">{t("contact.form.interest.transfer")}</SelectItem>
                          <SelectItem value="agency">{t("contact.form.interest.agency")}</SelectItem>
                        </SelectContent>
                      </Select>
                      {errors.interest && <p className="text-red-400 text-xs mt-1">{errors.interest}</p>}
                    </Field>
                  </FieldGroup>

                  {/* Row 6: Message */}
                  <FieldGroup>
                    <Field>
                      <FieldLabel className="text-white/80">{t("contact.form.message")}</FieldLabel>
                      <Textarea
                        placeholder="Tell us about your travel plans..."
                        value={formData.message}
                        onChange={(e) => updateField("message", e.target.value)}
                        rows={3}
                        className="bg-white/10 border-white/20 text-white placeholder:text-white/40 resize-none"
                      />
                    </Field>
                  </FieldGroup>

                  {/* Status Messages */}
                  {submitStatus === "success" && (
                    <div className="bg-[#6B7D5C]/20 border border-[#6B7D5C]/40 rounded-lg p-4 text-center flex items-center justify-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-[#6B7D5C]" />
                      <p className="text-[#6B7D5C] text-sm font-medium">
                        Consulta enviada a WhatsApp. Te responderemos pronto.
                      </p>
                    </div>
                  )}

                  {/* Validation errors summary */}
                  {Object.keys(errors).length > 0 && (
                    <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-3 text-center">
                      <p className="text-red-400 text-sm">
                        Por favor completa los campos requeridos
                      </p>
                    </div>
                  )}

                  <Button
                    type="submit"
                    size="lg"
                    disabled={isSubmitting}
                    className="w-full bg-[#C8A96A] hover:bg-[#b89a5c] text-[#0B0B0B] font-bold py-6 disabled:opacity-50 transition-all"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <span className="w-5 h-5 border-2 border-[#0B0B0B]/30 border-t-[#0B0B0B] rounded-full animate-spin" />
                        Abriendo WhatsApp...
                      </span>
                    ) : (
                      <>
                        <Send className="w-5 h-5 mr-2" />
                        {t("contact.form.submit")}
                      </>
                    )}
                  </Button>
                  
                  {/* Trust indicator */}
                  <p className="text-center text-white/40 text-xs">
                    Tu consulta se enviara directamente a WhatsApp para respuesta inmediata
                  </p>
                </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
