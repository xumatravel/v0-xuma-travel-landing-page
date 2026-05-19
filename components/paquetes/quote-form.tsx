"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { MessageCircle, CalendarIcon, Users, Hotel, MapPin, Snowflake, Bus, Check, Clock, Shield } from "lucide-react"
import { format } from "date-fns"
import { es, ptBR, enUS } from "date-fns/locale"
import { WHATSAPP_CONFIG } from "@/lib/config"
import { useI18n, type Locale } from "@/lib/i18n"

type TripType = "skiweek" | "miniweek" | "extraweek"
type LodgingType = "hotel" | "apartment"
type HotelName = "piscis" | "aries" | "acuario" | "scorpio" | "virgo"

interface FormData {
  tripType: TripType
  lodgingType: LodgingType
  hotel: HotelName
  checkIn: Date | undefined
  checkOut: Date | undefined
  totalPassengers: number
  passengerAges: string[]
  wantSkiPass: boolean
  needTransfer: boolean
  needCharter: boolean
  originCity: string
  fullName: string
  whatsapp: string
}

const getDateLocale = (locale: Locale) => {
  switch (locale) {
    case "pt": return ptBR
    case "en": return enUS
    default: return es
  }
}

export function PaquetesQuoteForm() {
  const { t, locale } = useI18n()
  const dateLocale = getDateLocale(locale)

  const [formData, setFormData] = useState<FormData>({
    tripType: "skiweek",
    lodgingType: "hotel",
    hotel: "piscis",
    checkIn: undefined,
    checkOut: undefined,
    totalPassengers: 2,
    passengerAges: ["", ""],
    wantSkiPass: true,
    needTransfer: true,
    needCharter: false,
    originCity: "",
    fullName: "",
    whatsapp: ""
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  const tripTypeLabels: Record<TripType, string> = {
    skiweek: t("paquetesPage.types.skiweek.title"),
    miniweek: t("paquetesPage.types.miniweek.title"),
    extraweek: t("paquetesPage.types.extraweek.title"),
  }

  const tripTypeSubtitles: Record<TripType, string> = {
    skiweek: `${t("paquetesPage.types.skiweek.duration")} | ${t("paquetesPage.types.skiweek.schedule")}`,
    miniweek: `${t("paquetesPage.types.miniweek.duration")} | ${t("paquetesPage.types.miniweek.schedule")}`,
    extraweek: `${t("paquetesPage.types.extraweek.duration")} | ${t("paquetesPage.types.extraweek.schedule")}`,
  }

  const hotelLabels: Record<HotelName, string> = {
    piscis: t("paquetesPage.hotels.piscis.name"),
    aries: t("paquetesPage.hotels.aries.name"),
    acuario: t("paquetesPage.hotels.acuario.name"),
    scorpio: t("paquetesPage.hotels.scorpio.name"),
    virgo: t("paquetesPage.hotels.virgo.name"),
  }

  const hotelPriceLabels: Record<HotelName, string> = {
    virgo: t("paquetesPage.form.priceHigh"),
    piscis: t("paquetesPage.form.priceMediumHigh"),
    aries: t("paquetesPage.form.priceMedium"),
    acuario: t("paquetesPage.form.priceMedium"),
    scorpio: t("paquetesPage.form.priceMediumLow"),
  }

  const familyHotels: HotelName[] = ["piscis", "aries", "virgo"]

  const updateForm = <K extends keyof FormData>(key: K, value: FormData[K]) => {
    setFormData(prev => ({ ...prev, [key]: value }))
  }

  const updatePassengerCount = (count: number) => {
    const newAges = [...formData.passengerAges]
    if (count > newAges.length) {
      // Add empty ages for new passengers
      while (newAges.length < count) {
        newAges.push("")
      }
    } else {
      // Remove excess ages
      newAges.splice(count)
    }
    setFormData(prev => ({ ...prev, totalPassengers: count, passengerAges: newAges }))
  }

  const updatePassengerAge = (index: number, age: string) => {
    const newAges = [...formData.passengerAges]
    newAges[index] = age
    setFormData(prev => ({ ...prev, passengerAges: newAges }))
  }

  const buildWhatsAppMessage = (): string => {
    const tripLabel = tripTypeLabels[formData.tripType]
    const lodgingLabel = formData.lodgingType === "hotel" ? t("paquetesPage.form.hotel") : t("paquetesPage.form.apartment")
    const hotelLabel = formData.lodgingType === "hotel" ? hotelLabels[formData.hotel] : "-"
    const checkInLabel = formData.checkIn ? format(formData.checkIn, "dd/MM/yyyy", { locale: dateLocale }) : "-"
    const checkOutLabel = formData.checkOut ? format(formData.checkOut, "dd/MM/yyyy", { locale: dateLocale }) : "-"
    const agesLabel = formData.passengerAges.filter(a => a.trim() !== "").join(", ") || "-"
    const skiPassLabel = formData.wantSkiPass ? t("paquetesPage.form.yes") : t("paquetesPage.form.no")
    const transferLabel = formData.needTransfer ? t("paquetesPage.form.yes") : t("paquetesPage.form.no")
    const charterLabel = formData.needCharter ? t("paquetesPage.form.yes") : t("paquetesPage.form.no")

    return `*${t("paquetesPage.whatsapp.greeting")}*

${t("paquetesPage.whatsapp.type")}: ${tripLabel}
${t("paquetesPage.whatsapp.lodging")}: ${lodgingLabel}
${t("paquetesPage.whatsapp.hotel")}: ${hotelLabel}
${t("paquetesPage.whatsapp.checkIn")}: ${checkInLabel}
${t("paquetesPage.whatsapp.checkOut")}: ${checkOutLabel}
${t("paquetesPage.whatsapp.passengers")}: ${formData.totalPassengers}
${t("paquetesPage.whatsapp.ages")}: ${agesLabel}
${t("paquetesPage.whatsapp.withPasses")}: ${skiPassLabel}
${t("paquetesPage.whatsapp.transfers")}: ${transferLabel}
${t("paquetesPage.whatsapp.charter")}: ${charterLabel}
${t("paquetesPage.whatsapp.originCity")}: ${formData.originCity}
${t("paquetesPage.whatsapp.name")}: ${formData.fullName}
WhatsApp: ${formData.whatsapp}`
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    const message = buildWhatsAppMessage()
    WHATSAPP_CONFIG.open(message)
    
    setTimeout(() => setIsSubmitting(false), 1000)
  }

  const isFormValid = 
    formData.fullName.trim() !== "" &&
    formData.whatsapp.trim() !== "" &&
    formData.checkIn !== undefined &&
    formData.checkOut !== undefined &&
    formData.originCity.trim() !== ""

  return (
    <section id="cotizador" className="py-20 md:py-28 bg-[#F8F6F3]">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <div className="text-center mb-10">
            <p className="text-[#6B7D5C] font-medium tracking-wider uppercase text-sm mb-3">
              {t("paquetesPage.form.badge")}
            </p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-[#0B0B0B] mb-4 text-balance">
              {t("paquetesPage.form.title")}
            </h2>
            <p className="text-[#0B0B0B]/70 text-lg leading-relaxed max-w-xl mx-auto">
              {t("paquetesPage.form.subtitle")}
            </p>
          </div>

          {/* Form Card */}
          <Card className="border-0 shadow-xl bg-white overflow-hidden">
            <CardContent className="p-0">
              <form onSubmit={handleSubmit}>
                {/* Section 1: Trip Type */}
                <div className="p-6 md:p-8 border-b border-[#0B0B0B]/10">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-8 h-8 rounded-full bg-[#6B7D5C] text-white flex items-center justify-center text-sm font-bold">
                      1
                    </div>
                    <h3 className="font-semibold text-[#0B0B0B] text-lg">{t("paquetesPage.form.step1")}</h3>
                  </div>
                  
                  <RadioGroup
                    value={formData.tripType}
                    onValueChange={(value: TripType) => updateForm("tripType", value)}
                    className="grid grid-cols-1 sm:grid-cols-3 gap-4"
                  >
                    {(["skiweek", "miniweek", "extraweek"] as TripType[]).map((type) => (
                      <Label
                        key={type}
                        htmlFor={type}
                        className={`flex flex-col items-center gap-1 p-4 rounded-xl border-2 cursor-pointer transition-all text-center ${
                          formData.tripType === type
                            ? "border-[#6B7D5C] bg-[#6B7D5C]/5"
                            : "border-[#0B0B0B]/10 hover:border-[#6B7D5C]/50"
                        }`}
                      >
                        <RadioGroupItem value={type} id={type} className="sr-only" />
                        <span className="font-semibold text-[#0B0B0B]">{tripTypeLabels[type]}</span>
                        <span className="text-xs text-[#0B0B0B]/60">{tripTypeSubtitles[type]}</span>
                      </Label>
                    ))}
                  </RadioGroup>
                </div>

                {/* Section 2: Lodging */}
                <div className="p-6 md:p-8 border-b border-[#0B0B0B]/10">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-8 h-8 rounded-full bg-[#6B7D5C] text-white flex items-center justify-center text-sm font-bold">
                      2
                    </div>
                    <h3 className="font-semibold text-[#0B0B0B] text-lg">{t("paquetesPage.form.step2")}</h3>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="lodgingType" className="text-[#0B0B0B]/80 flex items-center gap-2">
                        <Hotel className="w-4 h-4" />
                        {t("paquetesPage.form.lodgingType")}
                      </Label>
                      <Select
                        value={formData.lodgingType}
                        onValueChange={(value: LodgingType) => updateForm("lodgingType", value)}
                      >
                        <SelectTrigger id="lodgingType" className="h-12 bg-white">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="hotel">{t("paquetesPage.form.hotel")}</SelectItem>
                          <SelectItem value="apartment">{t("paquetesPage.form.apartment")}</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    {formData.lodgingType === "hotel" && (
                      <div className="space-y-2">
                        <Label htmlFor="hotel" className="text-[#0B0B0B]/80">
                          {t("paquetesPage.form.selectHotel")}
                        </Label>
                        <Select
                          value={formData.hotel}
                          onValueChange={(value: HotelName) => updateForm("hotel", value)}
                        >
                          <SelectTrigger id="hotel" className="h-12 bg-white">
                            <SelectValue />
                          </SelectTrigger>
                        <SelectContent>
                          {(["virgo", "piscis", "aries", "acuario", "scorpio"] as HotelName[]).map((hotel) => (
                            <SelectItem key={hotel} value={hotel}>
                              <span className="flex items-center gap-2">
                                {hotelLabels[hotel]}
                                <span className="text-xs text-[#0B0B0B]/50">
                                  ({hotelPriceLabels[hotel]})
                                  {familyHotels.includes(hotel) && ` - ${t("paquetesPage.form.familyHotel")}`}
                                </span>
                              </span>
                            </SelectItem>
                          ))}
                        </SelectContent>
                        </Select>
                      </div>
                    )}
                  </div>
                </div>

                {/* Section 3: Dates */}
                <div className="p-6 md:p-8 border-b border-[#0B0B0B]/10">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-8 h-8 rounded-full bg-[#6B7D5C] text-white flex items-center justify-center text-sm font-bold">
                      3
                    </div>
                    <h3 className="font-semibold text-[#0B0B0B] text-lg">{t("paquetesPage.form.step3")}</h3>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label className="text-[#0B0B0B]/80 flex items-center gap-2">
                        <CalendarIcon className="w-4 h-4" />
                        {t("paquetesPage.form.checkIn")} *
                      </Label>
                      <Popover>
                        <PopoverTrigger asChild>
                          <Button
                            variant="outline"
                            className={`w-full h-12 justify-start text-left font-normal ${
                              !formData.checkIn && "text-muted-foreground"
                            }`}
                          >
                            <CalendarIcon className="mr-2 h-4 w-4" />
                            {formData.checkIn
                              ? format(formData.checkIn, "PPP", { locale: dateLocale })
                              : t("lasLenasPage.form.selectDate")}
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0" align="start">
                          <Calendar
                            mode="single"
                            selected={formData.checkIn}
                            onSelect={(date) => updateForm("checkIn", date)}
                            disabled={(date) => date < new Date()}
                            initialFocus
                          />
                        </PopoverContent>
                      </Popover>
                    </div>
                    
                    <div className="space-y-2">
                      <Label className="text-[#0B0B0B]/80 flex items-center gap-2">
                        <CalendarIcon className="w-4 h-4" />
                        {t("paquetesPage.form.checkOut")} *
                      </Label>
                      <Popover>
                        <PopoverTrigger asChild>
                          <Button
                            variant="outline"
                            className={`w-full h-12 justify-start text-left font-normal ${
                              !formData.checkOut && "text-muted-foreground"
                            }`}
                          >
                            <CalendarIcon className="mr-2 h-4 w-4" />
                            {formData.checkOut
                              ? format(formData.checkOut, "PPP", { locale: dateLocale })
                              : t("lasLenasPage.form.selectDate")}
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0" align="start">
                          <Calendar
                            mode="single"
                            selected={formData.checkOut}
                            onSelect={(date) => updateForm("checkOut", date)}
                            disabled={(date) => 
                              date < new Date() || 
                              (formData.checkIn && date <= formData.checkIn)
                            }
                            initialFocus
                          />
                        </PopoverContent>
                      </Popover>
                    </div>
                  </div>
                </div>

                {/* Section 4: Passengers */}
                <div className="p-6 md:p-8 border-b border-[#0B0B0B]/10">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-8 h-8 rounded-full bg-[#6B7D5C] text-white flex items-center justify-center text-sm font-bold">
                      4
                    </div>
                    <h3 className="font-semibold text-[#0B0B0B] text-lg">{t("paquetesPage.form.step4")}</h3>
                  </div>
                  
                  <div className="space-y-6">
                    {/* Total Passengers */}
                    <div className="space-y-2">
                      <Label htmlFor="totalPassengers" className="text-[#0B0B0B]/80 flex items-center gap-2">
                        <Users className="w-4 h-4" />
                        {t("paquetesPage.form.totalPassengers")}
                      </Label>
                      <Select
                        value={String(formData.totalPassengers)}
                        onValueChange={(value) => updatePassengerCount(parseInt(value))}
                      >
                        <SelectTrigger id="totalPassengers" className="h-12 bg-white max-w-[200px]">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(num => (
                            <SelectItem key={num} value={String(num)}>
                              {num} {num === 1 ? t("paquetesPage.form.passenger") : t("paquetesPage.form.passengersPlural")}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    {/* Passenger Ages */}
                    {formData.totalPassengers > 0 && (
                      <div className="space-y-3">
                        <Label className="text-[#0B0B0B]/80">
                          {t("paquetesPage.form.passengerAges")}
                        </Label>
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
                          {formData.passengerAges.map((age, index) => (
                            <div key={index} className="space-y-1">
                              <Label htmlFor={`age-${index}`} className="text-xs text-[#0B0B0B]/60">
                                {t("paquetesPage.form.passengerNumber")} {index + 1}
                              </Label>
                              <Input
                                id={`age-${index}`}
                                type="number"
                                min="0"
                                max="120"
                                placeholder={t("paquetesPage.form.agePlaceholder")}
                                value={age}
                                onChange={(e) => updatePassengerAge(index, e.target.value)}
                                className="h-10 bg-white"
                              />
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {/* Section 5: Additional Services */}
                <div className="p-6 md:p-8 border-b border-[#0B0B0B]/10">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-8 h-8 rounded-full bg-[#6B7D5C] text-white flex items-center justify-center text-sm font-bold">
                      5
                    </div>
                    <h3 className="font-semibold text-[#0B0B0B] text-lg">{t("paquetesPage.form.step5")}</h3>
                  </div>
                  
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="space-y-2">
                      <Label className="text-[#0B0B0B]/80 flex items-center gap-2">
                        <Snowflake className="w-4 h-4" />
                        {t("paquetesPage.form.skiPass")}
                      </Label>
                      <RadioGroup
                        value={formData.wantSkiPass ? "yes" : "no"}
                        onValueChange={(value) => updateForm("wantSkiPass", value === "yes")}
                        className="flex gap-4"
                      >
                        <Label
                          htmlFor="skipass-yes"
                          className={`flex items-center gap-2 px-4 py-3 rounded-lg border-2 cursor-pointer transition-all ${
                            formData.wantSkiPass
                              ? "border-[#6B7D5C] bg-[#6B7D5C]/5"
                              : "border-[#0B0B0B]/10"
                          }`}
                        >
                          <RadioGroupItem value="yes" id="skipass-yes" />
                          <span>{t("paquetesPage.form.yes")}</span>
                        </Label>
                        <Label
                          htmlFor="skipass-no"
                          className={`flex items-center gap-2 px-4 py-3 rounded-lg border-2 cursor-pointer transition-all ${
                            !formData.wantSkiPass
                              ? "border-[#6B7D5C] bg-[#6B7D5C]/5"
                              : "border-[#0B0B0B]/10"
                          }`}
                        >
                          <RadioGroupItem value="no" id="skipass-no" />
                          <span>{t("paquetesPage.form.no")}</span>
                        </Label>
                      </RadioGroup>
                    </div>
                    
                    <div className="space-y-2">
                      <Label className="text-[#0B0B0B]/80 flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        {t("paquetesPage.form.needTransfer")}
                      </Label>
                      <RadioGroup
                        value={formData.needTransfer ? "yes" : "no"}
                        onValueChange={(value) => updateForm("needTransfer", value === "yes")}
                        className="flex gap-4"
                      >
                        <Label
                          htmlFor="transfer-yes"
                          className={`flex items-center gap-2 px-4 py-3 rounded-lg border-2 cursor-pointer transition-all ${
                            formData.needTransfer
                              ? "border-[#6B7D5C] bg-[#6B7D5C]/5"
                              : "border-[#0B0B0B]/10"
                          }`}
                        >
                          <RadioGroupItem value="yes" id="transfer-yes" />
                          <span>{t("paquetesPage.form.yes")}</span>
                        </Label>
                        <Label
                          htmlFor="transfer-no"
                          className={`flex items-center gap-2 px-4 py-3 rounded-lg border-2 cursor-pointer transition-all ${
                            !formData.needTransfer
                              ? "border-[#6B7D5C] bg-[#6B7D5C]/5"
                              : "border-[#0B0B0B]/10"
                          }`}
                        >
                          <RadioGroupItem value="no" id="transfer-no" />
                          <span>{t("paquetesPage.form.no")}</span>
                        </Label>
                      </RadioGroup>
                    </div>
                    
                    <div className="space-y-2">
                      <Label className="text-[#0B0B0B]/80 flex items-center gap-2">
                        <Bus className="w-4 h-4" />
                        {t("paquetesPage.form.needCharter")}
                      </Label>
                      <RadioGroup
                        value={formData.needCharter ? "yes" : "no"}
                        onValueChange={(value) => updateForm("needCharter", value === "yes")}
                        className="flex gap-4"
                      >
                        <Label
                          htmlFor="charter-yes"
                          className={`flex items-center gap-2 px-4 py-3 rounded-lg border-2 cursor-pointer transition-all ${
                            formData.needCharter
                              ? "border-[#6B7D5C] bg-[#6B7D5C]/5"
                              : "border-[#0B0B0B]/10"
                          }`}
                        >
                          <RadioGroupItem value="yes" id="charter-yes" />
                          <span>{t("paquetesPage.form.yes")}</span>
                        </Label>
                        <Label
                          htmlFor="charter-no"
                          className={`flex items-center gap-2 px-4 py-3 rounded-lg border-2 cursor-pointer transition-all ${
                            !formData.needCharter
                              ? "border-[#6B7D5C] bg-[#6B7D5C]/5"
                              : "border-[#0B0B0B]/10"
                          }`}
                        >
                          <RadioGroupItem value="no" id="charter-no" />
                          <span>{t("paquetesPage.form.no")}</span>
                        </Label>
                      </RadioGroup>
                    </div>
                  </div>
                </div>

                {/* Section 6: Contact */}
                <div className="p-6 md:p-8 border-b border-[#0B0B0B]/10">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-8 h-8 rounded-full bg-[#6B7D5C] text-white flex items-center justify-center text-sm font-bold">
                      6
                    </div>
                    <h3 className="font-semibold text-[#0B0B0B] text-lg">{t("paquetesPage.form.step6")}</h3>
                  </div>
                  
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="originCity" className="text-[#0B0B0B]/80">
                        {t("paquetesPage.form.originCity")} *
                      </Label>
                      <Input
                        id="originCity"
                        placeholder={t("paquetesPage.form.originCityPlaceholder")}
                        value={formData.originCity}
                        onChange={(e) => updateForm("originCity", e.target.value)}
                        className="h-12"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="fullName" className="text-[#0B0B0B]/80">
                        {t("paquetesPage.form.fullName")} *
                      </Label>
                      <Input
                        id="fullName"
                        placeholder={t("lasLenasPage.form.fullNamePlaceholder")}
                        value={formData.fullName}
                        onChange={(e) => updateForm("fullName", e.target.value)}
                        className="h-12"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="whatsapp" className="text-[#0B0B0B]/80">
                        {t("paquetesPage.form.whatsapp")} *
                      </Label>
                      <Input
                        id="whatsapp"
                        placeholder={t("lasLenasPage.form.whatsappPlaceholder")}
                        value={formData.whatsapp}
                        onChange={(e) => updateForm("whatsapp", e.target.value)}
                        className="h-12"
                      />
                    </div>
                  </div>
                </div>

                {/* Submit */}
                <div className="p-6 md:p-8 bg-[#0B0B0B]/5">
                  <Button
                    type="submit"
                    disabled={!isFormValid || isSubmitting}
                    className="w-full bg-[#6B7D5C] hover:bg-[#5a6b4d] text-white py-7 text-lg font-semibold transition-all duration-300 rounded-lg disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2" />
                        {t("paquetesPage.form.submitting")}
                      </>
                    ) : (
                      <>
                        <MessageCircle className="w-5 h-5 mr-2" />
                        {t("paquetesPage.form.submit")}
                      </>
                    )}
                  </Button>

                  {/* Trust signals */}
                  <div className="flex flex-wrap items-center justify-center gap-6 mt-6 text-[#0B0B0B]/60 text-sm">
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-[#6B7D5C]" />
                      <span>{t("lasLenasPage.form.immediateResponse")}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Shield className="w-4 h-4 text-[#6B7D5C]" />
                      <span>{t("lasLenasPage.form.noCommitment")}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-[#6B7D5C]" />
                      <span>{t("lasLenasPage.form.freeQuote")}</span>
                    </div>
                  </div>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
