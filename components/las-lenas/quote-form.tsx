"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { MessageCircle, CalendarIcon, Users, Car, MapPin, ArrowRight, Check, Clock, Shield } from "lucide-react"
import { format } from "date-fns"
import { es } from "date-fns/locale"
import { WHATSAPP_CONFIG } from "@/lib/config"

type ServiceType = "privado" | "compartido"
type VehicleType = "auto" | "pickup" | "minibus9" | "minibus14" | "grupo"
type Origin = "mendoza" | "san-rafael" | "las-lenas"
type Destination = "las-lenas" | "otro"

interface FormData {
  serviceType: ServiceType
  vehicleType: VehicleType
  passengers: string
  origin: Origin
  originManual: string
  destination: Destination
  destinationManual: string
  departureDate: Date | undefined
  returnDate: Date | undefined
  roundTrip: boolean
  fullName: string
  email: string
  whatsapp: string
}

const vehicleLabels: Record<VehicleType, string> = {
  auto: "Auto (4 pax con poco equipaje)",
  pickup: "Pickup (camioneta, 4 pax c/ski)",
  minibus9: "Minibus 9 pax",
  minibus14: "Minibus 14 pax",
  grupo: "Grupo grande (consultar)"
}

const originLabels: Record<Origin, string> = {
  mendoza: "Mendoza",
  "san-rafael": "San Rafael",
  "las-lenas": "Las Leñas"
}

export function LasLenasQuoteForm() {
  const [formData, setFormData] = useState<FormData>({
    serviceType: "privado",
    vehicleType: "auto",
    passengers: "2",
    origin: "mendoza",
    originManual: "",
    destination: "las-lenas",
    destinationManual: "",
    departureDate: undefined,
    returnDate: undefined,
    roundTrip: false,
    fullName: "",
    email: "",
    whatsapp: ""
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  const updateForm = <K extends keyof FormData>(key: K, value: FormData[K]) => {
    setFormData(prev => {
      const newData = { ...prev, [key]: value }
      
      // If switching to compartido, force San Rafael origin
      if (key === "serviceType" && value === "compartido") {
        newData.origin = "san-rafael"
      }
      
      return newData
    })
  }

  const buildWhatsAppMessage = (): string => {
    const serviceLabel = formData.serviceType === "privado" ? "Privado" : "Compartido"
    const vehicleLabel = vehicleLabels[formData.vehicleType]
    const originLabel = originLabels[formData.origin]
    const destinationLabel = formData.destination === "las-lenas" ? "Las Leñas" : formData.destinationManual
    const departureDateLabel = formData.departureDate 
      ? format(formData.departureDate, "dd/MM/yyyy", { locale: es })
      : "No especificada"
    const returnDateLabel = formData.roundTrip && formData.returnDate
      ? format(formData.returnDate, "dd/MM/yyyy", { locale: es })
      : "No aplica"

    return `Hola, quiero solicitar una cotización de traslado a Las Leñas:

• Tipo de servicio: ${serviceLabel}
• Vehículo: ${vehicleLabel}
• Cantidad de pasajeros: ${formData.passengers}
• Origen: ${originLabel}
• Destino: ${destinationLabel}
• Fecha de ida: ${departureDateLabel}
• Fecha de regreso: ${returnDateLabel}

Mi nombre es: ${formData.fullName}
Email: ${formData.email}
WhatsApp: ${formData.whatsapp}`
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    const message = buildWhatsAppMessage()
    WHATSAPP_CONFIG.open(message)
    
    // Reset submitting state after a short delay
    setTimeout(() => setIsSubmitting(false), 1000)
  }

  const isFormValid = 
    formData.fullName.trim() !== "" &&
    formData.email.trim() !== "" &&
    formData.whatsapp.trim() !== "" &&
    formData.departureDate !== undefined &&
    formData.passengers !== "" &&
    (formData.destination === "las-lenas" || formData.destinationManual.trim() !== "") &&
    (!formData.roundTrip || formData.returnDate !== undefined)

  return (
    <section id="cotizador" className="py-20 md:py-28 bg-[#F8F6F3]">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <div className="text-center mb-10">
            <p className="text-[#6B7D5C] font-medium tracking-wider uppercase text-sm mb-3">
              Cotizador de Traslados
            </p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-[#0B0B0B] mb-4 text-balance">
              Cotiza tu Traslado en Minutos
            </h2>
            <p className="text-[#0B0B0B]/70 text-lg leading-relaxed max-w-xl mx-auto">
              Completa el formulario y te enviaremos la cotización por WhatsApp al instante.
            </p>
          </div>

          {/* Form Card */}
          <Card className="border-0 shadow-xl bg-white overflow-hidden">
            <CardContent className="p-0">
              <form onSubmit={handleSubmit}>
                {/* Section 1: Service Type */}
                <div className="p-6 md:p-8 border-b border-[#0B0B0B]/10">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-8 h-8 rounded-full bg-[#6B7D5C] text-white flex items-center justify-center text-sm font-bold">
                      1
                    </div>
                    <h3 className="font-semibold text-[#0B0B0B] text-lg">Tipo de Servicio</h3>
                  </div>
                  
                  <RadioGroup
                    value={formData.serviceType}
                    onValueChange={(value: ServiceType) => updateForm("serviceType", value)}
                    className="grid md:grid-cols-2 gap-4"
                  >
                    <Label
                      htmlFor="privado"
                      className={`flex items-start gap-4 p-4 rounded-xl border-2 cursor-pointer transition-all ${
                        formData.serviceType === "privado"
                          ? "border-[#6B7D5C] bg-[#6B7D5C]/5"
                          : "border-[#0B0B0B]/10 hover:border-[#6B7D5C]/50"
                      }`}
                    >
                      <RadioGroupItem value="privado" id="privado" className="mt-1" />
                      <div className="flex-1">
                        <span className="font-semibold text-[#0B0B0B] block">Privado</span>
                        <span className="text-[#0B0B0B]/60 text-sm">
                          Todos los días, horario a elección, puerta a puerta
                        </span>
                      </div>
                    </Label>
                    
                    <Label
                      htmlFor="compartido"
                      className={`flex items-start gap-4 p-4 rounded-xl border-2 cursor-pointer transition-all ${
                        formData.serviceType === "compartido"
                          ? "border-[#6B7D5C] bg-[#6B7D5C]/5"
                          : "border-[#0B0B0B]/10 hover:border-[#6B7D5C]/50"
                      }`}
                    >
                      <RadioGroupItem value="compartido" id="compartido" className="mt-1" />
                      <div className="flex-1">
                        <span className="font-semibold text-[#0B0B0B] block">Compartido</span>
                        <span className="text-[#0B0B0B]/60 text-sm">
                          Solo San Rafael, sábados y lunes, por butaca
                        </span>
                      </div>
                    </Label>
                  </RadioGroup>
                </div>

                {/* Section 2: Vehicle & Passengers */}
                <div className="p-6 md:p-8 border-b border-[#0B0B0B]/10">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-8 h-8 rounded-full bg-[#6B7D5C] text-white flex items-center justify-center text-sm font-bold">
                      2
                    </div>
                    <h3 className="font-semibold text-[#0B0B0B] text-lg">Vehículo y Pasajeros</h3>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="vehicle" className="text-[#0B0B0B]/80 flex items-center gap-2">
                        <Car className="w-4 h-4" />
                        Tipo de vehículo
                      </Label>
                      <Select
                        value={formData.vehicleType}
                        onValueChange={(value: VehicleType) => updateForm("vehicleType", value)}
                      >
                        <SelectTrigger id="vehicle" className="h-12 bg-white">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="auto">Auto (4 pax con poco equipaje)</SelectItem>
                          <SelectItem value="pickup">Camioneta (4 pax c/eq deportivo)</SelectItem>
                          <SelectItem value="minibus9">Minibus 9 pax</SelectItem>
                          <SelectItem value="minibus14">Minibus 14 pax</SelectItem>
                          <SelectItem value="grupo">Grupo grande (consultar)</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="passengers" className="text-[#0B0B0B]/80 flex items-center gap-2">
                        <Users className="w-4 h-4" />
                        Cantidad de pasajeros
                      </Label>
                      <Select
                        value={formData.passengers}
                        onValueChange={(value) => updateForm("passengers", value)}
                      >
                        <SelectTrigger id="passengers" className="h-12 bg-white">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14].map(num => (
                            <SelectItem key={num} value={String(num)}>
                              {num} {num === 1 ? "pasajero" : "pasajeros"}
                            </SelectItem>
                          ))}
                          <SelectItem value="15+">15+ pasajeros</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>

                {/* Section 3: Route */}
                <div className="p-6 md:p-8 border-b border-[#0B0B0B]/10">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-8 h-8 rounded-full bg-[#6B7D5C] text-white flex items-center justify-center text-sm font-bold">
                      3
                    </div>
                    <h3 className="font-semibold text-[#0B0B0B] text-lg">Origen y Destino</h3>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="origin" className="text-[#0B0B0B]/80 flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        Origen
                      </Label>
                      <Select
                        value={formData.origin}
                        onValueChange={(value: Origin) => updateForm("origin", value)}
                        disabled={formData.serviceType === "compartido"}
                      >
                        <SelectTrigger id="origin" className="h-12 bg-white">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="mendoza">Mendoza</SelectItem>
                          <SelectItem value="san-rafael">San Rafael</SelectItem>
                          <SelectItem value="las-lenas">Las Leñas</SelectItem>
                        </SelectContent>
                      </Select>
                      {formData.serviceType === "compartido" && (
                        <p className="text-xs text-[#C8A96A]">
                          Servicio compartido solo disponible desde San Rafael
                        </p>
                      )}
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="destination" className="text-[#0B0B0B]/80 flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        Destino
                      </Label>
                      <Select
                        value={formData.destination}
                        onValueChange={(value: Destination) => updateForm("destination", value)}
                      >
                        <SelectTrigger id="destination" className="h-12 bg-white">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="las-lenas">Las Leñas</SelectItem>
                          <SelectItem value="otro">Otro (especificar)</SelectItem>
                        </SelectContent>
                      </Select>
                      {formData.destination === "otro" && (
                        <Input
                          placeholder="Especifica el destino..."
                          value={formData.destinationManual}
                          onChange={(e) => updateForm("destinationManual", e.target.value)}
                          className="h-12 mt-2"
                        />
                      )}
                    </div>
                  </div>
                </div>

                {/* Section 4: Dates */}
                <div className="p-6 md:p-8 border-b border-[#0B0B0B]/10">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-8 h-8 rounded-full bg-[#6B7D5C] text-white flex items-center justify-center text-sm font-bold">
                      4
                    </div>
                    <h3 className="font-semibold text-[#0B0B0B] text-lg">Fechas de Viaje</h3>
                  </div>
                  
                  {/* Round trip toggle */}
                  <div className="flex items-center justify-between mb-6 p-4 rounded-xl bg-[#0B0B0B]/5">
                    <div className="flex items-center gap-3">
                      <ArrowRight className="w-5 h-5 text-[#6B7D5C]" />
                      <div>
                        <span className="font-medium text-[#0B0B0B]">Ida y vuelta</span>
                        <p className="text-sm text-[#0B0B0B]/60">Activa esta opción si necesitas regreso</p>
                      </div>
                    </div>
                    <Switch
                      checked={formData.roundTrip}
                      onCheckedChange={(checked) => updateForm("roundTrip", checked)}
                    />
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label className="text-[#0B0B0B]/80 flex items-center gap-2">
                        <CalendarIcon className="w-4 h-4" />
                        Fecha de ida *
                      </Label>
                      <Popover>
                        <PopoverTrigger asChild>
                          <Button
                            variant="outline"
                            className={`w-full h-12 justify-start text-left font-normal ${
                              !formData.departureDate && "text-muted-foreground"
                            }`}
                          >
                            <CalendarIcon className="mr-2 h-4 w-4" />
                            {formData.departureDate
                              ? format(formData.departureDate, "PPP", { locale: es })
                              : "Selecciona fecha"}
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0" align="start">
                          <Calendar
                            mode="single"
                            selected={formData.departureDate}
                            onSelect={(date) => updateForm("departureDate", date)}
                            disabled={(date) => date < new Date()}
                            initialFocus
                          />
                        </PopoverContent>
                      </Popover>
                    </div>
                    
                    {formData.roundTrip && (
                      <div className="space-y-2">
                        <Label className="text-[#0B0B0B]/80 flex items-center gap-2">
                          <CalendarIcon className="w-4 h-4" />
                          Fecha de regreso *
                        </Label>
                        <Popover>
                          <PopoverTrigger asChild>
                            <Button
                              variant="outline"
                              className={`w-full h-12 justify-start text-left font-normal ${
                                !formData.returnDate && "text-muted-foreground"
                              }`}
                            >
                              <CalendarIcon className="mr-2 h-4 w-4" />
                              {formData.returnDate
                                ? format(formData.returnDate, "PPP", { locale: es })
                                : "Selecciona fecha"}
                            </Button>
                          </PopoverTrigger>
                          <PopoverContent className="w-auto p-0" align="start">
                            <Calendar
                              mode="single"
                              selected={formData.returnDate}
                              onSelect={(date) => updateForm("returnDate", date)}
                              disabled={(date) => 
                                date < new Date() || 
                                (formData.departureDate && date < formData.departureDate)
                              }
                              initialFocus
                            />
                          </PopoverContent>
                        </Popover>
                      </div>
                    )}
                  </div>
                </div>

                {/* Section 5: Contact Info */}
                <div className="p-6 md:p-8 border-b border-[#0B0B0B]/10">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-8 h-8 rounded-full bg-[#6B7D5C] text-white flex items-center justify-center text-sm font-bold">
                      5
                    </div>
                    <h3 className="font-semibold text-[#0B0B0B] text-lg">Datos de Contacto</h3>
                  </div>
                  
                  <div className="grid gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="fullName" className="text-[#0B0B0B]/80">
                        Nombre completo *
                      </Label>
                      <Input
                        id="fullName"
                        placeholder="Tu nombre completo"
                        value={formData.fullName}
                        onChange={(e) => updateForm("fullName", e.target.value)}
                        className="h-12"
                        required
                      />
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="email" className="text-[#0B0B0B]/80">
                          Email *
                        </Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="tu@email.com"
                          value={formData.email}
                          onChange={(e) => updateForm("email", e.target.value)}
                          className="h-12"
                          required
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="whatsapp" className="text-[#0B0B0B]/80">
                          WhatsApp *
                        </Label>
                        <Input
                          id="whatsapp"
                          type="tel"
                          placeholder="+54 9 11 1234-5678"
                          value={formData.whatsapp}
                          onChange={(e) => updateForm("whatsapp", e.target.value)}
                          className="h-12"
                          required
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Submit Section */}
                <div className="p-6 md:p-8 bg-gradient-to-br from-[#6B7D5C]/10 to-[#6B7D5C]/5">
                  <Button
                    type="submit"
                    disabled={!isFormValid || isSubmitting}
                    className="w-full h-14 bg-[#6B7D5C] hover:bg-[#5a6b4d] text-white text-lg font-semibold transition-all hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>Abriendo WhatsApp...</>
                    ) : (
                      <>
                        <MessageCircle className="w-5 h-5 mr-2" />
                        Enviar Cotización por WhatsApp
                      </>
                    )}
                  </Button>
                  
                  {/* Micro-copy */}
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-6 text-sm text-[#0B0B0B]/60">
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-[#6B7D5C]" />
                      <span>Te respondemos en menos de 30 minutos</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Shield className="w-4 h-4 text-[#6B7D5C]" />
                      <span>Coordinación rápida por WhatsApp</span>
                    </div>
                  </div>
                </div>
              </form>
            </CardContent>
          </Card>

          {/* Trust badges below form */}
          <div className="flex flex-wrap justify-center gap-6 mt-8">
            <div className="flex items-center gap-2 text-[#0B0B0B]/60">
              <Check className="w-4 h-4 text-[#6B7D5C]" />
              <span className="text-sm">Sin compromiso</span>
            </div>
            <div className="flex items-center gap-2 text-[#0B0B0B]/60">
              <Check className="w-4 h-4 text-[#6B7D5C]" />
              <span className="text-sm">Respuesta inmediata</span>
            </div>
            <div className="flex items-center gap-2 text-[#0B0B0B]/60">
              <Check className="w-4 h-4 text-[#6B7D5C]" />
              <span className="text-sm">Cotización sin costo</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
