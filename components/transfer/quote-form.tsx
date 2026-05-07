"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { MessageCircle, Send, AlertCircle, CheckCircle2 } from "lucide-react"
import { WHATSAPP_CONFIG } from "@/lib/config"
import { cn } from "@/lib/utils"

interface QuoteFormProps {
  serviceType: "privado" | "compartido"
  vehicle: string
}

const vehicleLabels: Record<string, string> = {
  auto: "Auto (hasta 4 pax, poco equipaje)",
  pickup: "Pickup (hasta 4 pax, ideal equipaje deportivo)",
  "minibus-9": "Minibus 9 pax",
  "minibus-14": "Minibus 14 pax",
  "grupo-grande": "Grupo grande (consulta)",
  butaca: "Por butaca",
}

export function QuoteForm({ serviceType, vehicle }: QuoteFormProps) {
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    passengers: "",
    origin: "",
    destination: "las-lenas",
    customDestination: "",
    departureDate: "",
    tripType: "ida",
    returnDate: "",
    currency: "",
    name: "",
    email: "",
    whatsapp: "",
  })

  const handleChange = (field: string, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const buildWhatsAppMessage = () => {
    const vehicleLabel = vehicleLabels[vehicle] || vehicle
    const originLabel = formData.origin === "mendoza" ? "Mendoza" : "San Rafael"
    const destinationLabel = formData.destination === "las-lenas" ? "Las Leñas" : formData.customDestination
    const serviceLabel = serviceType === "privado" ? "Privado" : "Compartido"
    const currencyLabel = formData.currency === "ars" ? "Argentino (ARS)" : "Extranjero (USD)"

    let msg = `*Solicitud de Cotización - XUMA TRAVEL*\n\n`
    msg += `*RESUMEN DEL VIAJE:*\n`
    msg += `• Tipo de servicio: ${serviceLabel}\n`
    if (serviceType === "privado") {
      msg += `• Vehículo: ${vehicleLabel}\n`
    }
    msg += `• Pasajeros: ${formData.passengers}\n`
    msg += `• Origen: ${originLabel}\n`
    msg += `• Destino: ${destinationLabel}\n`
    msg += `• Fecha de ida: ${formData.departureDate}\n`
    if (formData.tripType === "ida-vuelta") {
      msg += `• Fecha de regreso: ${formData.returnDate}\n`
    }
    msg += `• Tipo de viaje: ${formData.tripType === "ida-vuelta" ? "Ida y vuelta" : "Solo ida"}\n`
    msg += `• Moneda: ${currencyLabel}\n\n`
    msg += `*DATOS DE CONTACTO:*\n`
    msg += `• Nombre: ${formData.name}\n`
    msg += `• Email: ${formData.email}\n`
    msg += `• WhatsApp: ${formData.whatsapp}\n`

    return msg
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  const handleWhatsApp = () => {
    WHATSAPP_CONFIG.open(buildWhatsAppMessage())
  }

  if (submitted) {
    return (
      <section id="cotizar" className="py-20 bg-[#0B0B0B]">
        <div className="container mx-auto px-6">
          <div className="max-w-xl mx-auto text-center">
            <div className="w-20 h-20 bg-[#6B7D5C]/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle2 className="w-10 h-10 text-[#6B7D5C]" />
            </div>
            <h2 className="font-serif text-3xl font-bold text-white mb-4">
              Recibimos tu solicitud
            </h2>
            <p className="text-white/70 mb-8">
              Te enviaremos la cotización a la brevedad. Si preferís una respuesta inmediata, contactanos por WhatsApp.
            </p>
            <Button
              onClick={handleWhatsApp}
              size="lg"
              className="bg-[#25D366] hover:bg-[#20bd5a] text-white font-semibold px-8 py-6 text-lg"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Enviar por WhatsApp
            </Button>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="cotizar" className="py-20 bg-[#0B0B0B]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-4">
            Cotizá tu Traslado
          </h2>
          <p className="text-white/60 max-w-xl mx-auto">
            Completá el formulario y te enviaremos una cotización personalizada
          </p>
        </div>

        {/* Shared service warning */}
        {serviceType === "compartido" && (
          <div className="max-w-2xl mx-auto mb-8 bg-[#C8A96A]/10 border border-[#C8A96A]/30 rounded-lg p-4 flex items-start gap-3">
            <AlertCircle className="w-5 h-5 text-[#C8A96A] flex-shrink-0 mt-0.5" />
            <p className="text-white/80 text-sm">
              El traslado compartido está disponible <strong>solo sábados y lunes desde San Rafael</strong>. 
              El precio es por butaca.
            </p>
          </div>
        )}

        <form onSubmit={handleSubmit} className="max-w-2xl mx-auto space-y-8">
          {/* Passengers & Vehicle info */}
          <div className="bg-white/5 border border-white/10 rounded-xl p-6 space-y-6">
            <h3 className="text-lg font-semibold text-white flex items-center gap-2">
              Datos del viaje
              <span className="text-xs font-normal text-white/50 bg-white/10 px-2 py-0.5 rounded">
                {serviceType === "privado" ? "Privado" : "Compartido"} 
                {serviceType === "privado" && vehicle && ` • ${vehicleLabels[vehicle]}`}
              </span>
            </h3>

            <div className="grid md:grid-cols-2 gap-6">
              {/* Passengers */}
              <div className="space-y-2">
                <Label htmlFor="passengers" className="text-white/80">
                  Cantidad de pasajeros *
                </Label>
                <Select
                  value={formData.passengers}
                  onValueChange={(v) => handleChange("passengers", v)}
                  required
                >
                  <SelectTrigger className="bg-white/5 border-white/20 text-white">
                    <SelectValue placeholder="Seleccionar" />
                  </SelectTrigger>
                  <SelectContent>
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14].map((n) => (
                      <SelectItem key={n} value={n.toString()}>
                        {n} {n === 1 ? "pasajero" : "pasajeros"}
                      </SelectItem>
                    ))}
                    <SelectItem value="15+">15+ pasajeros (grupo grande)</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Origin */}
              <div className="space-y-2">
                <Label className="text-white/80">Origen *</Label>
                <RadioGroup
                  value={formData.origin}
                  onValueChange={(v) => handleChange("origin", v)}
                  className="flex gap-4"
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="mendoza" id="mendoza" className="border-white/30 text-[#C8A96A]" />
                    <Label htmlFor="mendoza" className="text-white/80 cursor-pointer">Mendoza</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="san-rafael" id="san-rafael" className="border-white/30 text-[#C8A96A]" />
                    <Label htmlFor="san-rafael" className="text-white/80 cursor-pointer">San Rafael</Label>
                  </div>
                </RadioGroup>
              </div>

              {/* Destination */}
              <div className="space-y-2">
                <Label className="text-white/80">Destino *</Label>
                <RadioGroup
                  value={formData.destination}
                  onValueChange={(v) => handleChange("destination", v)}
                  className="flex gap-4"
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="las-lenas" id="las-lenas" className="border-white/30 text-[#C8A96A]" />
                    <Label htmlFor="las-lenas" className="text-white/80 cursor-pointer">Las Leñas</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="otro" id="otro" className="border-white/30 text-[#C8A96A]" />
                    <Label htmlFor="otro" className="text-white/80 cursor-pointer">Otro</Label>
                  </div>
                </RadioGroup>
                {formData.destination === "otro" && (
                  <Input
                    value={formData.customDestination}
                    onChange={(e) => handleChange("customDestination", e.target.value)}
                    placeholder="Indicá el destino"
                    className="mt-2 bg-white/5 border-white/20 text-white placeholder:text-white/40"
                  />
                )}
              </div>

              {/* Trip type */}
              <div className="space-y-2">
                <Label className="text-white/80">Tipo de viaje *</Label>
                <RadioGroup
                  value={formData.tripType}
                  onValueChange={(v) => handleChange("tripType", v)}
                  className="flex gap-4"
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="ida" id="ida" className="border-white/30 text-[#C8A96A]" />
                    <Label htmlFor="ida" className="text-white/80 cursor-pointer">Solo ida</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="ida-vuelta" id="ida-vuelta" className="border-white/30 text-[#C8A96A]" />
                    <Label htmlFor="ida-vuelta" className="text-white/80 cursor-pointer">Ida y vuelta</Label>
                  </div>
                </RadioGroup>
              </div>

              {/* Departure Date */}
              <div className="space-y-2">
                <Label htmlFor="departureDate" className="text-white/80">
                  Fecha de ida *
                </Label>
                <Input
                  type="date"
                  id="departureDate"
                  value={formData.departureDate}
                  onChange={(e) => handleChange("departureDate", e.target.value)}
                  required
                  className="bg-white/5 border-white/20 text-white"
                />
              </div>

              {/* Return Date - only shown if round trip selected */}
              {formData.tripType === "ida-vuelta" && (
                <div className="space-y-2">
                  <Label htmlFor="returnDate" className="text-white/80">
                    Fecha de regreso *
                  </Label>
                  <Input
                    type="date"
                    id="returnDate"
                    value={formData.returnDate}
                    onChange={(e) => handleChange("returnDate", e.target.value)}
                    required
                    min={formData.departureDate}
                    className="bg-white/5 border-white/20 text-white"
                  />
                </div>
              )}
            </div>
          </div>

          {/* Currency */}
          <div className="bg-white/5 border border-white/10 rounded-xl p-6 space-y-4">
            <h3 className="text-lg font-semibold text-white">Nacionalidad / Moneda de cotización</h3>
            <RadioGroup
              value={formData.currency}
              onValueChange={(v) => handleChange("currency", v)}
              className="flex flex-col sm:flex-row gap-4"
            >
              <div className={cn(
                "flex items-center space-x-3 p-4 rounded-lg border-2 transition-all cursor-pointer flex-1",
                formData.currency === "ars" 
                  ? "border-[#C8A96A] bg-[#C8A96A]/10" 
                  : "border-white/10 hover:border-white/30"
              )}>
                <RadioGroupItem value="ars" id="ars" className="border-white/30 text-[#C8A96A]" />
                <Label htmlFor="ars" className="text-white/80 cursor-pointer">
                  <span className="block font-medium">Argentino</span>
                  <span className="text-sm text-white/50">Cotización en ARS</span>
                </Label>
              </div>
              <div className={cn(
                "flex items-center space-x-3 p-4 rounded-lg border-2 transition-all cursor-pointer flex-1",
                formData.currency === "usd" 
                  ? "border-[#C8A96A] bg-[#C8A96A]/10" 
                  : "border-white/10 hover:border-white/30"
              )}>
                <RadioGroupItem value="usd" id="usd" className="border-white/30 text-[#C8A96A]" />
                <Label htmlFor="usd" className="text-white/80 cursor-pointer">
                  <span className="block font-medium">Extranjero</span>
                  <span className="text-sm text-white/50">Cotización en USD</span>
                </Label>
              </div>
            </RadioGroup>
          </div>

          {/* Contact info */}
          <div className="bg-white/5 border border-white/10 rounded-xl p-6 space-y-6">
            <h3 className="text-lg font-semibold text-white">Datos de contacto</h3>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2 md:col-span-2">
                <Label htmlFor="name" className="text-white/80">
                  Nombre completo *
                </Label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) => handleChange("name", e.target.value)}
                  required
                  placeholder="Tu nombre"
                  className="bg-white/5 border-white/20 text-white placeholder:text-white/40"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="text-white/80">
                  Email *
                </Label>
                <Input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => handleChange("email", e.target.value)}
                  required
                  placeholder="tu@email.com"
                  className="bg-white/5 border-white/20 text-white placeholder:text-white/40"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="whatsapp" className="text-white/80">
                  WhatsApp *
                </Label>
                <Input
                  type="tel"
                  id="whatsapp"
                  value={formData.whatsapp}
                  onChange={(e) => handleChange("whatsapp", e.target.value)}
                  required
                  placeholder="+54 9 ..."
                  className="bg-white/5 border-white/20 text-white placeholder:text-white/40"
                />
              </div>
            </div>
          </div>

          {/* Submit */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              type="submit"
              size="lg"
              className="bg-[#6B7D5C] hover:bg-[#5a6b4d] text-white font-semibold px-8 py-6 text-lg"
            >
              <Send className="w-5 h-5 mr-2" />
              Solicitar cotización
            </Button>
            <Button
              type="button"
              onClick={handleWhatsApp}
              size="lg"
              variant="outline"
              className="border-[#25D366] text-[#25D366] hover:bg-[#25D366]/10 px-8 py-6 text-lg"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Enviar por WhatsApp
            </Button>
          </div>
        </form>
      </div>
    </section>
  )
}
