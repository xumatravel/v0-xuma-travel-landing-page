"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"
import { CalendarIcon, MessageCircle, Clock, Shield, Users, Car, Truck, Bus } from "lucide-react"
import { cn } from "@/lib/utils"
import { format } from "date-fns"
import { es } from "date-fns/locale"
import { WHATSAPP_CONFIG } from "@/lib/config"

type FormData = {
  serviceType: "privado" | "compartido"
  vehicleType: string
  passengers: string
  origin: string
  originCustom: string
  destination: string
  destinationCustom: string
  departureDate: Date | undefined
  returnDate: Date | undefined
  roundTrip: boolean
  currency: "ARS" | "USD"
  name: string
  email: string
  whatsapp: string
}

const vehicleOptions = [
  { value: "auto", label: "Auto (hasta 4 pax, poco equipaje)", icon: Car, capacity: "1-4" },
  { value: "pickup", label: "Pickup (equipaje deportivo / ski)", icon: Truck, capacity: "1-4" },
  { value: "minibus-9", label: "Minibus 9 pasajeros", icon: Bus, capacity: "5-9" },
  { value: "minibus-14", label: "Minibus 14 pasajeros", icon: Bus, capacity: "10-14" },
  { value: "grupo-grande", label: "Grupo grande (consulta)", icon: Users, capacity: "15+" },
]

const originOptions = [
  { value: "mendoza", label: "Mendoza" },
  { value: "san-rafael", label: "San Rafael" },
  { value: "otro", label: "Otro (especificar)" },
]

const destinationOptions = [
  { value: "las-lenas", label: "Las Lenas" },
  { value: "otro", label: "Otro (especificar)" },
]

export function LasLenasQuoteForm() {
  const [formData, setFormData] = useState<FormData>({
    serviceType: "privado",
    vehicleType: "",
    passengers: "",
    origin: "",
    originCustom: "",
    destination: "las-lenas",
    destinationCustom: "",
    departureDate: undefined,
    returnDate: undefined,
    roundTrip: false,
    currency: "USD",
    name: "",
    email: "",
    whatsapp: "",
  })

  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({})

  const updateField = <K extends keyof FormData>(field: K, value: FormData[K]) => {
    setFormData(prev => ({ ...prev, [field]: value }))
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }))
    }
  }

  const validateForm = (): boolean => {
    const newErrors: Partial<Record<keyof FormData, string>> = {}

    if (!formData.serviceType) newErrors.serviceType = "Selecciona un tipo de servicio"
    if (!formData.vehicleType) newErrors.vehicleType = "Selecciona un tipo de vehiculo"
    if (!formData.passengers || parseInt(formData.passengers) < 1) newErrors.passengers = "Indica la cantidad de pasajeros"
    if (!formData.origin) newErrors.origin = "Selecciona el origen"
    if (formData.origin === "otro" && !formData.originCustom) newErrors.originCustom = "Especifica el origen"
    if (!formData.destination) newErrors.destination = "Selecciona el destino"
    if (formData.destination === "otro" && !formData.destinationCustom) newErrors.destinationCustom = "Especifica el destino"
    if (!formData.departureDate) newErrors.departureDate = "Selecciona la fecha de ida"
    if (formData.roundTrip && !formData.returnDate) newErrors.returnDate = "Selecciona la fecha de regreso"
    if (!formData.name.trim()) newErrors.name = "Ingresa tu nombre"
    if (!formData.email.trim()) newErrors.email = "Ingresa tu email"
    if (!formData.whatsapp.trim()) newErrors.whatsapp = "Ingresa tu WhatsApp"

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const buildWhatsAppMessage = (): string => {
    const serviceLabel = formData.serviceType === "privado" ? "Privado" : "Compartido"
    const vehicleLabel = vehicleOptions.find(v => v.value === formData.vehicleType)?.label || formData.vehicleType
    const originLabel = formData.origin === "otro" 
      ? formData.originCustom 
      : originOptions.find(o => o.value === formData.origin)?.label || formData.origin
    const destinationLabel = formData.destination === "otro"
      ? formData.destinationCustom
      : destinationOptions.find(d => d.value === formData.destination)?.label || formData.destination
    const departureDateStr = formData.departureDate 
      ? format(formData.departureDate, "dd/MM/yyyy", { locale: es })
      : "-"
    const returnDateStr = formData.roundTrip && formData.returnDate
      ? format(formData.returnDate, "dd/MM/yyyy", { locale: es })
      : "No aplica"
    const currencyLabel = formData.currency

    const message = `Hola, quiero solicitar una cotizacion de traslado a Las Lenas:

- Tipo de servicio: ${serviceLabel}
- Vehiculo: ${vehicleLabel}
- Cantidad de pasajeros: ${formData.passengers}
- Origen: ${originLabel}
- Destino: ${destinationLabel}
- Fecha de ida: ${departureDateStr}
- Fecha de regreso: ${returnDateStr}
- Moneda: ${currencyLabel}

Mi nombre es: ${formData.name}
Email: ${formData.email}
WhatsApp: ${formData.whatsapp}`

    return message
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!validateForm()) {
      return
    }

    const message = buildWhatsAppMessage()
    WHATSAPP_CONFIG.open(message)
  }

  // Show shared service warning
  const showSharedWarning = formData.serviceType === "compartido" && formData.origin !== "san-rafael"

  return (
    <section id="cotizar" className="py-20 md:py-28 bg-[#F8F6F3]">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-[#6B7D5C] font-medium tracking-wider uppercase text-sm mb-3">
            Cotizador de Traslados
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-[#0B0B0B] mb-6 text-balance">
            Cotiza Tu Traslado en Minutos
          </h2>
          <p className="text-[#0B0B0B]/70 text-lg leading-relaxed max-w-2xl mx-auto">
            Completa el formulario y recibiras una cotizacion personalizada por WhatsApp.
          </p>
        </div>

        <Card className="max-w-3xl mx-auto border-2 border-[#6B7D5C]/20 shadow-xl">
          <CardContent className="p-6 md:p-10">
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Service Type */}
              <div className="space-y-4">
                <Label className="text-lg font-semibold text-[#0B0B0B]">
                  Tipo de Servicio
                </Label>
                <RadioGroup
                  value={formData.serviceType}
                  onValueChange={(value) => updateField("serviceType", value as "privado" | "compartido")}
                  className="grid grid-cols-1 sm:grid-cols-2 gap-4"
                >
                  <Label
                    htmlFor="privado"
                    className={cn(
                      "flex items-center gap-4 p-4 rounded-xl border-2 cursor-pointer transition-all",
                      formData.serviceType === "privado"
                        ? "border-[#6B7D5C] bg-[#6B7D5C]/5"
                        : "border-[#0B0B0B]/10 hover:border-[#6B7D5C]/50"
                    )}
                  >
                    <RadioGroupItem value="privado" id="privado" className="sr-only" />
                    <div className="w-10 h-10 rounded-full bg-[#6B7D5C]/10 flex items-center justify-center shrink-0">
                      <Car className="w-5 h-5 text-[#6B7D5C]" />
                    </div>
                    <div>
                      <p className="font-semibold text-[#0B0B0B]">Privado</p>
                      <p className="text-sm text-[#0B0B0B]/60">Todos los dias, horario a eleccion</p>
                    </div>
                  </Label>
                  <Label
                    htmlFor="compartido"
                    className={cn(
                      "flex items-center gap-4 p-4 rounded-xl border-2 cursor-pointer transition-all",
                      formData.serviceType === "compartido"
                        ? "border-[#6B7D5C] bg-[#6B7D5C]/5"
                        : "border-[#0B0B0B]/10 hover:border-[#6B7D5C]/50"
                    )}
                  >
                    <RadioGroupItem value="compartido" id="compartido" className="sr-only" />
                    <div className="w-10 h-10 rounded-full bg-[#6B7D5C]/10 flex items-center justify-center shrink-0">
                      <Users className="w-5 h-5 text-[#6B7D5C]" />
                    </div>
                    <div>
                      <p className="font-semibold text-[#0B0B0B]">Compartido</p>
                      <p className="text-sm text-[#0B0B0B]/60">Solo San Rafael, sab y lun</p>
                    </div>
                  </Label>
                </RadioGroup>
                {showSharedWarning && (
                  <p className="text-sm text-amber-600 bg-amber-50 p-3 rounded-lg">
                    El servicio compartido solo esta disponible desde San Rafael. Selecciona San Rafael como origen o elige servicio privado.
                  </p>
                )}
              </div>

              {/* Vehicle Type */}
              <div className="space-y-4">
                <Label className="text-lg font-semibold text-[#0B0B0B]">
                  Tipo de Vehiculo
                </Label>
                <Select
                  value={formData.vehicleType}
                  onValueChange={(value) => updateField("vehicleType", value)}
                >
                  <SelectTrigger className={cn("h-14", errors.vehicleType && "border-red-500")}>
                    <SelectValue placeholder="Selecciona un vehiculo" />
                  </SelectTrigger>
                  <SelectContent>
                    {vehicleOptions.map((option) => (
                      <SelectItem key={option.value} value={option.value}>
                        <div className="flex items-center gap-3">
                          <option.icon className="w-4 h-4 text-[#6B7D5C]" />
                          <span>{option.label}</span>
                        </div>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                {errors.vehicleType && <p className="text-sm text-red-500">{errors.vehicleType}</p>}
              </div>

              {/* Passengers */}
              <div className="space-y-4">
                <Label htmlFor="passengers" className="text-lg font-semibold text-[#0B0B0B]">
                  Cantidad de Pasajeros
                </Label>
                <Input
                  id="passengers"
                  type="number"
                  min="1"
                  max="50"
                  placeholder="Ej: 4"
                  value={formData.passengers}
                  onChange={(e) => updateField("passengers", e.target.value)}
                  className={cn("h-14 text-lg", errors.passengers && "border-red-500")}
                />
                {errors.passengers && <p className="text-sm text-red-500">{errors.passengers}</p>}
              </div>

              {/* Origin & Destination */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <Label className="text-lg font-semibold text-[#0B0B0B]">Origen</Label>
                  <Select
                    value={formData.origin}
                    onValueChange={(value) => updateField("origin", value)}
                  >
                    <SelectTrigger className={cn("h-14", errors.origin && "border-red-500")}>
                      <SelectValue placeholder="Selecciona origen" />
                    </SelectTrigger>
                    <SelectContent>
                      {originOptions.map((option) => (
                        <SelectItem key={option.value} value={option.value}>
                          {option.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  {errors.origin && <p className="text-sm text-red-500">{errors.origin}</p>}
                  {formData.origin === "otro" && (
                    <Input
                      placeholder="Especifica el origen"
                      value={formData.originCustom}
                      onChange={(e) => updateField("originCustom", e.target.value)}
                      className={cn("h-12", errors.originCustom && "border-red-500")}
                    />
                  )}
                </div>
                <div className="space-y-4">
                  <Label className="text-lg font-semibold text-[#0B0B0B]">Destino</Label>
                  <Select
                    value={formData.destination}
                    onValueChange={(value) => updateField("destination", value)}
                  >
                    <SelectTrigger className={cn("h-14", errors.destination && "border-red-500")}>
                      <SelectValue placeholder="Selecciona destino" />
                    </SelectTrigger>
                    <SelectContent>
                      {destinationOptions.map((option) => (
                        <SelectItem key={option.value} value={option.value}>
                          {option.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  {errors.destination && <p className="text-sm text-red-500">{errors.destination}</p>}
                  {formData.destination === "otro" && (
                    <Input
                      placeholder="Especifica el destino"
                      value={formData.destinationCustom}
                      onChange={(e) => updateField("destinationCustom", e.target.value)}
                      className={cn("h-12", errors.destinationCustom && "border-red-500")}
                    />
                  )}
                </div>
              </div>

              {/* Dates */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <Label className="text-lg font-semibold text-[#0B0B0B]">Fechas del Viaje</Label>
                  <div className="flex items-center gap-3">
                    <Label htmlFor="roundTrip" className="text-sm text-[#0B0B0B]/70 cursor-pointer">
                      Ida y vuelta
                    </Label>
                    <Switch
                      id="roundTrip"
                      checked={formData.roundTrip}
                      onCheckedChange={(checked) => updateField("roundTrip", checked)}
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label className="text-sm text-[#0B0B0B]/70">Fecha de ida</Label>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant="outline"
                          className={cn(
                            "w-full h-14 justify-start text-left font-normal",
                            !formData.departureDate && "text-muted-foreground",
                            errors.departureDate && "border-red-500"
                          )}
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
                          onSelect={(date) => updateField("departureDate", date)}
                          disabled={(date) => date < new Date()}
                          locale={es}
                        />
                      </PopoverContent>
                    </Popover>
                    {errors.departureDate && <p className="text-sm text-red-500">{errors.departureDate}</p>}
                  </div>
                  {formData.roundTrip && (
                    <div className="space-y-2">
                      <Label className="text-sm text-[#0B0B0B]/70">Fecha de regreso</Label>
                      <Popover>
                        <PopoverTrigger asChild>
                          <Button
                            variant="outline"
                            className={cn(
                              "w-full h-14 justify-start text-left font-normal",
                              !formData.returnDate && "text-muted-foreground",
                              errors.returnDate && "border-red-500"
                            )}
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
                            onSelect={(date) => updateField("returnDate", date)}
                            disabled={(date) => 
                              date < new Date() || 
                              (formData.departureDate ? date < formData.departureDate : false)
                            }
                            locale={es}
                          />
                        </PopoverContent>
                      </Popover>
                      {errors.returnDate && <p className="text-sm text-red-500">{errors.returnDate}</p>}
                    </div>
                  )}
                </div>
              </div>

              {/* Currency */}
              <div className="space-y-4">
                <Label className="text-lg font-semibold text-[#0B0B0B]">
                  Nacionalidad / Moneda de Cotizacion
                </Label>
                <RadioGroup
                  value={formData.currency}
                  onValueChange={(value) => updateField("currency", value as "ARS" | "USD")}
                  className="flex gap-4"
                >
                  <Label
                    htmlFor="ars"
                    className={cn(
                      "flex-1 flex items-center justify-center gap-2 p-4 rounded-xl border-2 cursor-pointer transition-all",
                      formData.currency === "ARS"
                        ? "border-[#6B7D5C] bg-[#6B7D5C]/5"
                        : "border-[#0B0B0B]/10 hover:border-[#6B7D5C]/50"
                    )}
                  >
                    <RadioGroupItem value="ARS" id="ars" className="sr-only" />
                    <span className="text-2xl">🇦🇷</span>
                    <span className="font-semibold">ARS</span>
                  </Label>
                  <Label
                    htmlFor="usd"
                    className={cn(
                      "flex-1 flex items-center justify-center gap-2 p-4 rounded-xl border-2 cursor-pointer transition-all",
                      formData.currency === "USD"
                        ? "border-[#6B7D5C] bg-[#6B7D5C]/5"
                        : "border-[#0B0B0B]/10 hover:border-[#6B7D5C]/50"
                    )}
                  >
                    <RadioGroupItem value="USD" id="usd" className="sr-only" />
                    <span className="text-2xl">🇺🇸</span>
                    <span className="font-semibold">USD</span>
                  </Label>
                </RadioGroup>
              </div>

              {/* Contact Info */}
              <div className="space-y-4 pt-4 border-t border-[#0B0B0B]/10">
                <Label className="text-lg font-semibold text-[#0B0B0B]">
                  Datos de Contacto
                </Label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="md:col-span-2">
                    <Input
                      placeholder="Nombre completo"
                      value={formData.name}
                      onChange={(e) => updateField("name", e.target.value)}
                      className={cn("h-14", errors.name && "border-red-500")}
                    />
                    {errors.name && <p className="text-sm text-red-500 mt-1">{errors.name}</p>}
                  </div>
                  <div>
                    <Input
                      type="email"
                      placeholder="Email"
                      value={formData.email}
                      onChange={(e) => updateField("email", e.target.value)}
                      className={cn("h-14", errors.email && "border-red-500")}
                    />
                    {errors.email && <p className="text-sm text-red-500 mt-1">{errors.email}</p>}
                  </div>
                  <div>
                    <Input
                      type="tel"
                      placeholder="WhatsApp (con codigo de pais)"
                      value={formData.whatsapp}
                      onChange={(e) => updateField("whatsapp", e.target.value)}
                      className={cn("h-14", errors.whatsapp && "border-red-500")}
                    />
                    {errors.whatsapp && <p className="text-sm text-red-500 mt-1">{errors.whatsapp}</p>}
                  </div>
                </div>
              </div>

              {/* Submit */}
              <div className="pt-4">
                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-[#6B7D5C] hover:bg-[#5a6b4d] text-white h-16 text-lg font-semibold rounded-xl transition-all hover:scale-[1.02] hover:shadow-lg"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Solicitar Cotizacion por WhatsApp
                </Button>

                {/* Trust micro copy */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-6 text-sm text-[#0B0B0B]/60">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-[#6B7D5C]" />
                    <span>Te respondemos en menos de 30 minutos</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Shield className="w-4 h-4 text-[#6B7D5C]" />
                    <span>Coordinacion rapida por WhatsApp</span>
                  </div>
                </div>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
