"use client"

// Formulario de cotización completo, compartido por /mendoza y /san-rafael-malargue.
// Pide todo lo que XUMA necesita para cotizar sin ida y vuelta:
// varios servicios juntos, fechas de llegada y regreso, adultos y menores, alojamiento,
// idioma, y datos extra según el servicio (vuelo, evento, empresa).
// Todo queda en XUMA OS (consultas) y se abre WhatsApp con el resumen.

import { useEffect, useState } from "react"
import { Check, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { WHATSAPP_CONFIG } from "@/lib/config"
import { trackLead } from "@/lib/track"
import { useI18n } from "@/lib/i18n"
import { ComoNosConociste } from "@/components/como-nos-conociste"

type L = "es" | "pt" | "en"
export type Kind = "aeropuerto" | "evento" | "ejecutivo" | "grupo" | "otro" | undefined
export type Servicio = { es: string; pt: string; en: string; kind?: Kind }

const TX = {
  es: {
    services: "¿Qué querés hacer? (podés elegir varios) *",
    arrival: "Llegada / primer servicio *",
    departure: "Regreso / último servicio",
    time: "Horario aproximado",
    from: "¿Dónde te alojás o desde dónde salís? *",
    to: "Destino o lugares que querés visitar",
    adults: "Adultos *",
    kids: "Menores",
    kidsAges: "Edades de los menores",
    kidsAgesPh: "Ej: 4 y 9 (para sillas de auto)",
    luggage: "Equipaje",
    luggageOpts: ["Normal", "Mucho equipaje / bolsos grandes", "Equipo de ski o bicicletas"],
    lodging: "¿Necesitás alojamiento?",
    lodgingOpts: ["No, ya tengo", "Sí, hotel", "Sí, departamento o cabaña", "Sí, asesorame"],
    lang: "Idioma del chofer / guía",
    langOpts: ["Español", "Português", "English"],
    flight: "Vuelo o bus (número y horario)",
    flightPh: "Ej: AR 1234, llega 14:30",
    event: "Nombre del evento y lugar",
    eventPh: "Ej: fiesta en Chacras de Coria",
    trip: "Recorrido",
    tripOpts: ["Ida y vuelta", "Solo ida", "Solo vuelta"],
    company: "Empresa / razón social",
    invoice: "¿Necesitás factura?",
    invoiceOpts: ["No", "Sí, factura A (con CUIT)", "Sí, factura B"],
    freq: "¿Es un viaje puntual o frecuente?",
    freqOpts: ["Puntual", "Frecuente (semanal / mensual)"],
    name: "Nombre y apellido *",
    wa: "WhatsApp *",
    email: "Email",
    comments: "Comentarios",
    submit: "Enviar consulta por WhatsApp",
    hint: "Respondemos en el día. No pagás nada hasta confirmar.",
    sent: "¡Listo! Si no se abrió WhatsApp, escribinos al +54 9 260 402-3087.",
    pick: "Elegí al menos un servicio",
    l: { services: "Servicios", dates: "Fechas", to: "al", time: "Horario", from: "Alojamiento / salida", dest: "Destino", pax: "Pasajeros", adults: "adultos", kids: "menores", ages: "edades", luggage: "Equipaje", lodging: "Alojamiento", lang: "Idioma", flight: "Vuelo/bus", event: "Evento", trip: "Recorrido", company: "Empresa", invoice: "Factura", freq: "Frecuencia", name: "Nombre", email: "Email", comments: "Comentarios" },
  },
  pt: {
    services: "O que você quer fazer? (pode escolher vários) *",
    arrival: "Chegada / primeiro serviço *",
    departure: "Retorno / último serviço",
    time: "Horário aproximado",
    from: "Onde você vai se hospedar ou de onde sai? *",
    to: "Destino ou lugares que quer visitar",
    adults: "Adultos *",
    kids: "Menores",
    kidsAges: "Idades dos menores",
    kidsAgesPh: "Ex: 4 e 9 (para cadeirinhas)",
    luggage: "Bagagem",
    luggageOpts: ["Normal", "Muita bagagem / malas grandes", "Equipamento de ski ou bicicletas"],
    lodging: "Precisa de hospedagem?",
    lodgingOpts: ["Não, já tenho", "Sim, hotel", "Sim, apartamento ou cabana", "Sim, me orientem"],
    lang: "Idioma do motorista / guia",
    langOpts: ["Español", "Português", "English"],
    flight: "Voo ou ônibus (número e horário)",
    flightPh: "Ex: G3 1234, chega 14:30",
    event: "Nome do evento e local",
    eventPh: "Ex: festa em Chacras de Coria",
    trip: "Trajeto",
    tripOpts: ["Ida e volta", "Só ida", "Só volta"],
    company: "Empresa",
    invoice: "Precisa de nota fiscal?",
    invoiceOpts: ["Não", "Sim, fatura A (com CUIT)", "Sim, fatura B"],
    freq: "É uma viagem pontual ou frequente?",
    freqOpts: ["Pontual", "Frequente (semanal / mensal)"],
    name: "Nome e sobrenome *",
    wa: "WhatsApp *",
    email: "E-mail",
    comments: "Comentários",
    submit: "Enviar pelo WhatsApp",
    hint: "Respondemos no mesmo dia. Você não paga nada até confirmar.",
    sent: "Pronto! Se o WhatsApp não abriu, escreva para +54 9 260 402-3087.",
    pick: "Escolha pelo menos um serviço",
    l: { services: "Serviços", dates: "Datas", to: "a", time: "Horário", from: "Hospedagem / saída", dest: "Destino", pax: "Passageiros", adults: "adultos", kids: "menores", ages: "idades", luggage: "Bagagem", lodging: "Hospedagem", lang: "Idioma", flight: "Voo/ônibus", event: "Evento", trip: "Trajeto", company: "Empresa", invoice: "Fatura", freq: "Frequência", name: "Nome", email: "E-mail", comments: "Comentários" },
  },
  en: {
    services: "What would you like to do? (choose as many as you want) *",
    arrival: "Arrival / first service *",
    departure: "Return / last service",
    time: "Approximate time",
    from: "Where are you staying or leaving from? *",
    to: "Destination or places you want to visit",
    adults: "Adults *",
    kids: "Children",
    kidsAges: "Children's ages",
    kidsAgesPh: "E.g. 4 and 9 (for car seats)",
    luggage: "Luggage",
    luggageOpts: ["Regular", "Lots of luggage / large bags", "Ski equipment or bikes"],
    lodging: "Do you need accommodation?",
    lodgingOpts: ["No, I already have it", "Yes, hotel", "Yes, apartment or cabin", "Yes, please advise"],
    lang: "Driver / guide language",
    langOpts: ["Español", "Português", "English"],
    flight: "Flight or bus (number and time)",
    flightPh: "E.g. AA 1234, lands 14:30",
    event: "Event name and venue",
    eventPh: "E.g. party in Chacras de Coria",
    trip: "Trip",
    tripOpts: ["Round trip", "One way (there)", "One way (back)"],
    company: "Company",
    invoice: "Do you need an invoice?",
    invoiceOpts: ["No", "Yes, type A invoice (CUIT)", "Yes, type B invoice"],
    freq: "One-time or recurring?",
    freqOpts: ["One-time", "Recurring (weekly / monthly)"],
    name: "Full name *",
    wa: "WhatsApp *",
    email: "Email",
    comments: "Comments",
    submit: "Send via WhatsApp",
    hint: "We reply the same day. You pay nothing until you confirm.",
    sent: "Done! If WhatsApp didn't open, write to +54 9 260 402-3087.",
    pick: "Choose at least one service",
    l: { services: "Services", dates: "Dates", to: "to", time: "Time", from: "Staying at / leaving from", dest: "Destination", pax: "Passengers", adults: "adults", kids: "children", ages: "ages", luggage: "Luggage", lodging: "Accommodation", lang: "Language", flight: "Flight/bus", event: "Event", trip: "Trip", company: "Company", invoice: "Invoice", freq: "Frequency", name: "Name", email: "Email", comments: "Comments" },
  },
}

const fmt = (d: string) => (d ? d.split("-").reverse().join("/") : "")

export function Cotizador({
  formulario,
  zona,
  servicios,
  selected,
  kicker,
  title,
  sub,
  msgTitle,
  fromPh,
  toPh,
  commentsPh,
  accent = "#6B7D5C",
}: {
  formulario: string
  zona: string
  servicios: Servicio[]
  selected: number
  kicker: string
  title: string
  sub: string
  msgTitle: string
  fromPh: string
  toPh: string
  commentsPh: string
  accent?: string
}) {
  const { locale } = useI18n()
  const l = (["es", "pt", "en"].includes(locale) ? locale : "es") as L
  const t = TX[l]

  const [sel, setSel] = useState<number[]>([selected])
  useEffect(() => {
    setSel((p) => (p.includes(selected) ? p : [...p, selected]))
  }, [selected])

  const [f, setF] = useState({
    llegada: "",
    regreso: "",
    hora: "",
    desde: "",
    hacia: "",
    adultos: "2",
    menores: "0",
    edades: "",
    equipaje: "0",
    alojamiento: "0",
    idioma: l === "pt" ? "1" : l === "en" ? "2" : "0",
    vuelo: "",
    evento: "",
    recorrido: "0",
    empresa: "",
    factura: "0",
    frecuencia: "0",
    nombre: "",
    whatsapp: "",
    email: "",
    comentarios: "",
  })
  const [conocio, setConocio] = useState("")
  const [sent, setSent] = useState(false)
  const up =
    (k: keyof typeof f) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
      setF((p) => ({ ...p, [k]: e.target.value }))

  const toggle = (i: number) => setSel((p) => (p.includes(i) ? p.filter((x) => x !== i) : [...p, i].sort((a, b) => a - b)))
  const kinds = new Set(sel.map((i) => servicios[i]?.kind))
  const has = (k: Kind) => kinds.has(k)

  const menores = parseInt(f.menores || "0", 10) || 0
  const adultos = parseInt(f.adultos || "0", 10) || 0
  const valid = Boolean(sel.length && f.nombre.trim() && f.whatsapp.trim() && f.llegada && f.desde.trim() && adultos > 0)

  // Arma el mensaje en el idioma del cliente (WhatsApp) y en español (XUMA OS)
  const build = (lang: L) => {
    const x = TX[lang]
    const lb = x.l
    const lines: string[] = []
    lines.push(`*${lang === l ? msgTitle : `Consulta ${zona}`}*`, "")
    lines.push(`*${lb.services}:* ${sel.map((i) => servicios[i][lang]).join(", ")}`)
    lines.push(`*${lb.dates}:* ${fmt(f.llegada)}${f.regreso ? ` ${lb.to} ${fmt(f.regreso)}` : ""}`)
    if (f.hora) lines.push(`*${lb.time}:* ${f.hora}`)
    lines.push(`*${lb.from}:* ${f.desde}`)
    if (f.hacia.trim()) lines.push(`*${lb.dest}:* ${f.hacia}`)
    lines.push(
      `*${lb.pax}:* ${adultos} ${lb.adults}${menores ? ` + ${menores} ${lb.kids}${f.edades.trim() ? ` (${lb.ages} ${f.edades})` : ""}` : ""}`,
    )
    if (f.equipaje !== "0") lines.push(`*${lb.luggage}:* ${x.luggageOpts[+f.equipaje]}`)
    if (f.alojamiento !== "0") lines.push(`*${lb.lodging}:* ${x.lodgingOpts[+f.alojamiento]}`)
    lines.push(`*${lb.lang}:* ${x.langOpts[+f.idioma]}`)
    if (has("aeropuerto") && f.vuelo.trim()) lines.push(`*${lb.flight}:* ${f.vuelo}`)
    if (has("evento")) {
      if (f.evento.trim()) lines.push(`*${lb.event}:* ${f.evento}`)
      lines.push(`*${lb.trip}:* ${x.tripOpts[+f.recorrido]}`)
    }
    if (has("ejecutivo")) {
      if (f.empresa.trim()) lines.push(`*${lb.company}:* ${f.empresa}`)
      lines.push(`*${lb.invoice}:* ${x.invoiceOpts[+f.factura]}`)
      lines.push(`*${lb.freq}:* ${x.freqOpts[+f.frecuencia]}`)
    }
    lines.push(`*${lb.name}:* ${f.nombre}`, `*WhatsApp:* ${f.whatsapp}`)
    if (f.email.trim()) lines.push(`*${lb.email}:* ${f.email}`)
    if (f.comentarios.trim()) lines.push(`*${lb.comments}:* ${f.comentarios}`)
    return lines.join("\n")
  }

  const submit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!valid) return
    WHATSAPP_CONFIG.open(build(l))
    trackLead(formulario, { email: f.email, telefono: f.whatsapp })
    const interes = `${zona}: ${sel.map((i) => servicios[i].es).join(" + ")}`
    fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        formulario,
        language: locale,
        comoNosConocio: conocio,
        name: f.nombre,
        phone: f.whatsapp,
        email: f.email,
        arrivalDate: f.llegada,
        departureDate: f.regreso || null,
        passengers: adultos + menores,
        interest: interes,
        interestLabel: interes,
        message: build("es"),
      }),
    }).catch(() => {})
    setSent(true)
  }

  const input = `w-full rounded-lg border border-[#0B0B0B]/15 bg-white px-4 py-3 text-[#0B0B0B] focus:outline-none focus:ring-2`
  const label = "block text-sm font-medium text-[#0B0B0B] mb-2"
  const ring = { ["--tw-ring-color" as string]: accent } as React.CSSProperties

  return (
    <section id="cotizar" className="py-20 md:py-28 bg-[#F8F6F3]">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <p className="font-medium tracking-wider uppercase text-sm mb-3" style={{ color: accent }}>{kicker}</p>
            <h2 className="font-serif text-3xl md:text-5xl font-bold text-[#0B0B0B] mb-4">{title}</h2>
            <p className="text-[#0B0B0B]/70 text-lg">{sub}</p>
          </div>
          <form onSubmit={submit} style={ring} className="bg-white rounded-2xl shadow-xl p-6 md:p-10 grid md:grid-cols-2 gap-6">
            <div className="md:col-span-2">
              <p className={label}>{t.services}</p>
              <div className="flex flex-wrap gap-2">
                {servicios.map((s, i) => {
                  const on = sel.includes(i)
                  return (
                    <button
                      type="button"
                      key={s.es}
                      onClick={() => toggle(i)}
                      aria-pressed={on}
                      className={`inline-flex items-center gap-1.5 rounded-full border px-4 py-2 text-sm transition-colors ${
                        on ? "text-white border-transparent" : "bg-white text-[#0B0B0B] border-[#0B0B0B]/15 hover:border-[#0B0B0B]/40"
                      }`}
                      style={on ? { backgroundColor: accent } : undefined}
                    >
                      {on && <Check className="w-4 h-4" />}
                      {s[l]}
                    </button>
                  )
                })}
              </div>
              {!sel.length && <p className="text-sm text-red-600 mt-2">{t.pick}</p>}
            </div>

            <div>
              <label className={label}>{t.arrival}</label>
              <input type="date" required value={f.llegada} onChange={up("llegada")} className={input} />
            </div>
            <div>
              <label className={label}>{t.departure}</label>
              <input type="date" min={f.llegada || undefined} value={f.regreso} onChange={up("regreso")} className={input} />
            </div>
            <div>
              <label className={label}>{t.from}</label>
              <input placeholder={fromPh} required value={f.desde} onChange={up("desde")} className={input} />
            </div>
            <div>
              <label className={label}>{t.time}</label>
              <input type="time" value={f.hora} onChange={up("hora")} className={input} />
            </div>
            <div className="md:col-span-2">
              <label className={label}>{t.to}</label>
              <input placeholder={toPh} value={f.hacia} onChange={up("hacia")} className={input} />
            </div>

            <div>
              <label className={label}>{t.adults}</label>
              <input type="number" min={1} max={60} required value={f.adultos} onChange={up("adultos")} className={input} />
            </div>
            <div>
              <label className={label}>{t.kids}</label>
              <input type="number" min={0} max={30} value={f.menores} onChange={up("menores")} className={input} />
            </div>
            {menores > 0 && (
              <div className="md:col-span-2">
                <label className={label}>{t.kidsAges}</label>
                <input placeholder={t.kidsAgesPh} value={f.edades} onChange={up("edades")} className={input} />
              </div>
            )}

            {has("aeropuerto") && (
              <div className="md:col-span-2">
                <label className={label}>{t.flight}</label>
                <input placeholder={t.flightPh} value={f.vuelo} onChange={up("vuelo")} className={input} />
              </div>
            )}
            {has("evento") && (
              <>
                <div>
                  <label className={label}>{t.event}</label>
                  <input placeholder={t.eventPh} value={f.evento} onChange={up("evento")} className={input} />
                </div>
                <div>
                  <label className={label}>{t.trip}</label>
                  <select value={f.recorrido} onChange={up("recorrido")} className={input}>
                    {t.tripOpts.map((o, i) => <option key={o} value={i}>{o}</option>)}
                  </select>
                </div>
              </>
            )}
            {has("ejecutivo") && (
              <>
                <div className="md:col-span-2">
                  <label className={label}>{t.company}</label>
                  <input value={f.empresa} onChange={up("empresa")} className={input} />
                </div>
                <div>
                  <label className={label}>{t.invoice}</label>
                  <select value={f.factura} onChange={up("factura")} className={input}>
                    {t.invoiceOpts.map((o, i) => <option key={o} value={i}>{o}</option>)}
                  </select>
                </div>
                <div>
                  <label className={label}>{t.freq}</label>
                  <select value={f.frecuencia} onChange={up("frecuencia")} className={input}>
                    {t.freqOpts.map((o, i) => <option key={o} value={i}>{o}</option>)}
                  </select>
                </div>
              </>
            )}

            <div>
              <label className={label}>{t.luggage}</label>
              <select value={f.equipaje} onChange={up("equipaje")} className={input}>
                {t.luggageOpts.map((o, i) => <option key={o} value={i}>{o}</option>)}
              </select>
            </div>
            <div>
              <label className={label}>{t.lodging}</label>
              <select value={f.alojamiento} onChange={up("alojamiento")} className={input}>
                {t.lodgingOpts.map((o, i) => <option key={o} value={i}>{o}</option>)}
              </select>
            </div>
            <div>
              <label className={label}>{t.lang}</label>
              <select value={f.idioma} onChange={up("idioma")} className={input}>
                {t.langOpts.map((o, i) => <option key={o} value={i}>{o}</option>)}
              </select>
            </div>
            <div>
              <label className={label}>{t.name}</label>
              <input required value={f.nombre} onChange={up("nombre")} className={input} />
            </div>
            <div>
              <label className={label}>{t.wa}</label>
              <input type="tel" placeholder="+54 9 ..." required value={f.whatsapp} onChange={up("whatsapp")} className={input} />
            </div>
            <div>
              <label className={label}>{t.email}</label>
              <input type="email" value={f.email} onChange={up("email")} className={input} />
            </div>
            <div className="md:col-span-2">
              <ComoNosConociste value={conocio} onChange={setConocio} />
            </div>
            <div className="md:col-span-2">
              <label className={label}>{t.comments}</label>
              <textarea rows={3} placeholder={commentsPh} value={f.comentarios} onChange={up("comentarios")} className={input} />
            </div>
            <div className="md:col-span-2">
              <Button
                type="submit"
                disabled={!valid}
                size="lg"
                className="w-full bg-[#25D366] hover:bg-[#20bd5a] text-white py-7 text-lg font-semibold rounded-lg disabled:opacity-50"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                {t.submit}
              </Button>
              <p className="text-center text-sm text-[#0B0B0B]/60 mt-3">{sent ? t.sent : t.hint}</p>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
