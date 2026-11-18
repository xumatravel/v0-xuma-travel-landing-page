"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import {
  ArrowDown,
  Briefcase,
  Car,
  Check,
  Clock,
  MapPin,
  MessageCircle,
  Mountain,
  Music,
  Plane,
  Shield,
  Users,
  Wine,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Footer } from "@/components/landing/footer"
import { WhatsAppButton } from "@/components/landing/whatsapp-button"
import { BackToHomeButton } from "@/components/las-lenas/back-to-home"
import { WHATSAPP_CONFIG } from "@/lib/config"

const WA_DEFAULT = "Hola! Quiero consultar por un traslado en Mendoza"

const SERVICES = [
  {
    id: "bodegas",
    icon: Wine,
    title: "Bodegas",
    kicker: "Vos brindá",
    text: "Valle de Uco, Luján de Cuyo y Maipú. Te buscamos por tu hotel, te esperamos en cada bodega y te traemos de vuelta. Full day, una sola bodega o el camino del vino completo.",
    image: "/mendoza/malbec.jpg",
    points: ["Chofer que espera mientras degustás", "Armamos el recorrido con vos", "Privado o en grupo"],
  },
  {
    id: "eventos",
    icon: Music,
    title: "Eventos y fiestas",
    kicker: "Volvé seguro",
    text: "Fiestas, casamientos, recitales y festivales. Ida y vuelta coordinada, a la hora que termine. Somos transporte oficial de producciones y eventos en Mendoza.",
    image: "/mendoza/mendoza-noche.jpg",
    points: ["Salidas desde el centro y Chacras", "Lugar asegurado a la vuelta", "Logística para productoras y artistas"],
  },
  {
    id: "aeropuerto",
    icon: Plane,
    title: "Aeropuerto",
    kicker: "Llegá tranquilo",
    text: "Aeropuerto El Plumerillo (MDZ) ⇄ tu hotel, en Mendoza, Chacras, Valle de Uco o donde estés. Seguimos tu vuelo y te esperamos con un cartel a tu nombre.",
    image: "/mendoza/potrerillos.jpg",
    points: ["Seguimiento del vuelo", "Recepción con cartel", "Lugar para valijas y equipos"],
  },
  {
    id: "ejecutivos",
    icon: Briefcase,
    title: "Ejecutivos y empresas",
    kicker: "Puntuales, siempre",
    text: "Traslados para auditores, equipos de trabajo y visitas corporativas: aeropuerto, hoteles, plantas industriales y oficinas. Servicio diario o por semana, con factura y un solo contacto que coordina todo.",
    image: "/transfer-van.jpg",
    points: ["Choferes profesionales", "Factura A o B", "Servicio por día o por semana"],
  },
  {
    id: "excursiones",
    icon: Mountain,
    title: "Excursiones",
    kicker: "Mendoza de verdad",
    text: "Potrerillos, alta montaña, Cacheuta, cabalgatas y San Rafael con el Cañón del Atuel. Te llevamos a los lugares que conocemos de toda la vida.",
    image: "/mendoza/termas.jpg",
    points: ["Potrerillos y alta montaña", "Cabalgatas en Mendoza y San Rafael", "Cañón del Atuel y Valle Grande"],
  },
  {
    id: "grupos",
    icon: Users,
    title: "Grupos",
    kicker: "Todos juntos",
    text: "Combis y minibuses para grupos de amigos, familias, egresados y contingentes. Un solo vehículo, un solo plan, nadie maneja.",
    image: "/mendoza/bodega-grupo.jpg",
    points: ["Autos, pick-ups, combis y minibuses", "De 1 a 45 pasajeros", "Recorridos a medida"],
  },
]

const FAQS = [
  {
    q: "¿Cómo reservo?",
    a: "Completá el formulario o escribinos por WhatsApp con la fecha, el horario, desde dónde y hacia dónde vas y cuántos son. Te respondemos con la propuesta y confirmás.",
  },
  {
    q: "¿Los traslados son privados?",
    a: "Sí, la mayoría son privados: el vehículo es solo para tu grupo. Para algunos eventos ofrecemos salidas compartidas con lugar asegurado.",
  },
  {
    q: "¿Qué pasa si se demora mi vuelo?",
    a: "Seguimos el vuelo y te esperamos. No tenés que avisarnos nada.",
  },
  {
    q: "¿Pueden facturar a mi empresa?",
    a: "Sí. Emitimos factura A o B y coordinamos servicios diarios o por semana para equipos de trabajo.",
  },
  {
    q: "¿Hacen viajes fuera de Mendoza capital?",
    a: "Sí: Valle de Uco, Potrerillos, alta montaña, San Rafael, Malargüe y Las Leñas, entre otros destinos.",
  },
]

const SERVICE_OPTIONS = [
  "Bodegas",
  "Evento o fiesta",
  "Aeropuerto",
  "Ejecutivo / empresa",
  "Excursión",
  "Grupo",
  "Otro",
]

function Header() {
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])
  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-[#0B0B0B]/95 backdrop-blur-md shadow-lg py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <Link href="/" className="font-serif text-xl md:text-2xl font-bold text-white tracking-tight">
          XUMA<span className="text-[#C8A96A]">.</span>TRAVEL
        </Link>
        <nav className="hidden lg:flex items-center gap-8">
          {[
            ["#servicios", "Servicios"],
            ["#cotizar", "Cotizar"],
            ["#faq", "Preguntas"],
          ].map(([href, label]) => (
            <a key={href} href={href} className="text-white/80 hover:text-white text-sm font-medium transition-colors">
              {label}
            </a>
          ))}
        </nav>
        <Button
          onClick={() => WHATSAPP_CONFIG.open(WA_DEFAULT)}
          size="sm"
          className="bg-[#6B7D5C] hover:bg-[#5a6b4d] text-white font-medium"
        >
          <MessageCircle className="w-4 h-4 mr-2" />
          WhatsApp
        </Button>
      </div>
    </header>
  )
}

function Hero() {
  return (
    <section className="relative min-h-screen flex items-end overflow-hidden">
      <Image src="/mendoza/potrerillos.jpg" alt="Dique Potrerillos, Mendoza" fill priority className="object-cover" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#0B0B0B]/60 via-[#0B0B0B]/20 to-[#0B0B0B]/90" />
      <div className="relative z-10 container mx-auto px-6 pb-24 pt-32">
        <p className="text-[#C8A96A] font-semibold tracking-[0.3em] uppercase text-sm mb-4">Mendoza · todo el año</p>
        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-[0.95] mb-6 max-w-4xl">
          Montañas. Malbec.
          <br />
          Noches que no terminan.
        </h1>
        <p className="text-white/90 text-xl md:text-2xl font-light max-w-2xl mb-10">
          Mendoza se vive mejor cuando alguien más maneja. Te llevamos y te traemos: vos disfrutá.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Button
            onClick={() => document.getElementById("cotizar")?.scrollIntoView({ behavior: "smooth" })}
            size="lg"
            className="bg-[#6B7D5C] hover:bg-[#5a6b4d] text-white px-10 py-7 text-lg font-semibold rounded-lg group"
          >
            Pedí tu traslado
            <ArrowDown className="w-5 h-5 ml-2 group-hover:translate-y-1 transition-transform" />
          </Button>
          <Button
            onClick={() => WHATSAPP_CONFIG.open(WA_DEFAULT)}
            size="lg"
            className="bg-white/10 backdrop-blur-sm text-white hover:bg-white hover:text-gray-800 border border-white/20 px-10 py-7 text-lg rounded-lg"
          >
            <MessageCircle className="w-5 h-5 mr-2" />
            Escribinos por WhatsApp
          </Button>
        </div>
        <div className="flex flex-wrap gap-4 mt-10">
          {[
            [Shield, "Más de 30 años de experiencia"],
            [Clock, "Puntualidad garantizada"],
            [Car, "Autos, pick-ups, combis y minibuses"],
          ].map(([Icon, label], i) => {
            const I = Icon as typeof Shield
            return (
              <div key={i} className="flex items-center gap-2 text-white/90 bg-white/10 px-4 py-2 rounded-full">
                <I className="w-5 h-5 text-[#C8A96A]" />
                <span className="text-sm">{label as string}</span>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

function Services() {
  return (
    <section id="servicios" className="py-20 md:py-28 bg-[#F8F6F3]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-[#6B7D5C] font-medium tracking-wider uppercase text-sm mb-3">¿A dónde vas?</p>
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-[#0B0B0B] mb-4">Todo Mendoza, con chofer</h2>
          <p className="text-[#0B0B0B]/70 text-lg max-w-2xl mx-auto">
            Traslados privados y experiencias para turistas, grupos y empresas.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((s) => (
            <div key={s.id} className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 flex flex-col">
              <div className="relative h-56">
                <Image src={s.image} alt={s.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0B]/70 to-transparent" />
                <div className="absolute bottom-4 left-5 flex items-center gap-2 text-white">
                  <s.icon className="w-5 h-5 text-[#C8A96A]" />
                  <span className="text-xs tracking-[0.2em] uppercase font-semibold">{s.kicker}</span>
                </div>
              </div>
              <div className="p-6 flex flex-col flex-1">
                <h3 className="font-serif text-2xl font-bold text-[#0B0B0B] mb-3">{s.title}</h3>
                <p className="text-[#0B0B0B]/70 leading-relaxed mb-4">{s.text}</p>
                <ul className="space-y-2 mb-6">
                  {s.points.map((p) => (
                    <li key={p} className="flex items-start gap-2 text-sm text-[#0B0B0B]/80">
                      <Check className="w-4 h-4 text-[#6B7D5C] mt-0.5 shrink-0" />
                      {p}
                    </li>
                  ))}
                </ul>
                <Button
                  onClick={() => {
                    const el = document.getElementById("servicio") as HTMLSelectElement | null
                    if (el) el.value = s.title === "Ejecutivos y empresas" ? "Ejecutivo / empresa" : s.title === "Eventos y fiestas" ? "Evento o fiesta" : s.title === "Excursiones" ? "Excursión" : s.title
                    document.getElementById("cotizar")?.scrollIntoView({ behavior: "smooth" })
                  }}
                  variant="outline"
                  className="mt-auto border-[#6B7D5C] text-[#6B7D5C] hover:bg-[#6B7D5C] hover:text-white"
                >
                  Consultar
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Gallery() {
  const imgs = ["/mendoza/vinedos.jpg", "/mendoza/barricas.jpg", "/mendoza/bodega-mesa.jpg", "/mendoza/potrerillos.jpg"]
  return (
    <section className="bg-[#0B0B0B] py-20">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-[#C8A96A] tracking-[0.3em] uppercase text-sm mb-4">Más de 30 años</p>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-white mb-6">Vos disfrutá. Nosotros manejamos.</h2>
            <p className="text-white/70 text-lg leading-relaxed mb-4">
              Somos una empresa familiar de San Rafael. Hace más de 30 años que movemos gente por Mendoza: a la nieve, a las bodegas, a
              las fiestas y al aeropuerto.
            </p>
            <p className="text-white/70 text-lg leading-relaxed">
              Brindá en Valle de Uco sin mirar el reloj. Bailá hasta que salga el sol y volvé seguro. Bajá del avión y encontrá tu
              nombre en un cartel.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {imgs.map((src, i) => (
              <div key={src} className={`relative rounded-xl overflow-hidden ${i % 2 ? "h-56 mt-10" : "h-56"}`}>
                <Image src={src} alt="Mendoza" fill className="object-cover" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function QuoteForm() {
  const [f, setF] = useState({
    servicio: "Bodegas",
    fecha: "",
    hora: "",
    desde: "",
    hacia: "",
    pasajeros: "2",
    nombre: "",
    whatsapp: "",
    email: "",
    comentarios: "",
  })
  const [sent, setSent] = useState(false)
  const up = (k: keyof typeof f) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
    setF((p) => ({ ...p, [k]: e.target.value }))

  const valid = f.nombre.trim() && f.whatsapp.trim() && f.fecha && f.desde.trim()

  const submit = (e: React.FormEvent) => {
    e.preventDefault()
    const servicio = (document.getElementById("servicio") as HTMLSelectElement | null)?.value || f.servicio
    const fechaTxt = f.fecha ? f.fecha.split("-").reverse().join("/") : "-"
    let msg = `*Consulta de traslado en Mendoza*\n\n`
    msg += `*Servicio:* ${servicio}\n`
    msg += `*Fecha:* ${fechaTxt}\n`
    msg += `*Horario:* ${f.hora || "-"}\n`
    msg += `*Desde:* ${f.desde || "-"}\n`
    msg += `*Hacia:* ${f.hacia || "-"}\n`
    msg += `*Pasajeros:* ${f.pasajeros || "-"}\n`
    msg += `*Nombre:* ${f.nombre}\n`
    msg += `*WhatsApp:* ${f.whatsapp}\n`
    if (f.email.trim()) msg += `*Email:* ${f.email}\n`
    if (f.comentarios.trim()) msg += `*Comentarios:* ${f.comentarios}\n`

    WHATSAPP_CONFIG.open(msg)

    // Registro en XUMA OS + mail a info@ (en segundo plano, no bloquea WhatsApp)
    fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        formulario: "mendoza",
        language: "es",
        name: f.nombre,
        phone: f.whatsapp,
        email: f.email,
        arrivalDate: f.fecha,
        passengers: f.pasajeros,
        interest: `Mendoza: ${servicio}`,
        interestLabel: `Mendoza: ${servicio}`,
        message: msg,
      }),
    }).catch(() => {})
    setSent(true)
  }

  const input =
    "w-full rounded-lg border border-[#0B0B0B]/15 bg-white px-4 py-3 text-[#0B0B0B] focus:outline-none focus:ring-2 focus:ring-[#6B7D5C]"
  const label = "block text-sm font-medium text-[#0B0B0B] mb-2"

  return (
    <section id="cotizar" className="py-20 md:py-28 bg-[#F8F6F3]">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <p className="text-[#6B7D5C] font-medium tracking-wider uppercase text-sm mb-3">Cotizá en 1 minuto</p>
            <h2 className="font-serif text-3xl md:text-5xl font-bold text-[#0B0B0B] mb-4">Pedí tu traslado</h2>
            <p className="text-[#0B0B0B]/70 text-lg">Completá los datos y te respondemos por WhatsApp con la propuesta.</p>
          </div>
          <form onSubmit={submit} className="bg-white rounded-2xl shadow-xl p-6 md:p-10 grid md:grid-cols-2 gap-6">
            <div className="md:col-span-2">
              <label htmlFor="servicio" className={label}>¿Qué necesitás?</label>
              <select id="servicio" defaultValue="Bodegas" onChange={up("servicio")} className={input}>
                {SERVICE_OPTIONS.map((o) => (
                  <option key={o}>{o}</option>
                ))}
              </select>
            </div>
            <div>
              <label className={label}>Fecha *</label>
              <input type="date" required value={f.fecha} onChange={up("fecha")} className={input} />
            </div>
            <div>
              <label className={label}>Horario</label>
              <input type="time" value={f.hora} onChange={up("hora")} className={input} />
            </div>
            <div>
              <label className={label}>Desde *</label>
              <input placeholder="Hotel, aeropuerto, dirección" required value={f.desde} onChange={up("desde")} className={input} />
            </div>
            <div>
              <label className={label}>Hacia</label>
              <input placeholder="Bodega, evento, hotel" value={f.hacia} onChange={up("hacia")} className={input} />
            </div>
            <div>
              <label className={label}>Pasajeros</label>
              <input type="number" min={1} max={60} value={f.pasajeros} onChange={up("pasajeros")} className={input} />
            </div>
            <div>
              <label className={label}>Nombre y apellido *</label>
              <input required value={f.nombre} onChange={up("nombre")} className={input} />
            </div>
            <div>
              <label className={label}>WhatsApp *</label>
              <input type="tel" placeholder="+54 9 ..." required value={f.whatsapp} onChange={up("whatsapp")} className={input} />
            </div>
            <div>
              <label className={label}>Email</label>
              <input type="email" value={f.email} onChange={up("email")} className={input} />
            </div>
            <div className="md:col-span-2">
              <label className={label}>Comentarios</label>
              <textarea
                rows={3}
                placeholder="Bodegas que querés visitar, vuelo, cantidad de valijas, nombre del evento…"
                value={f.comentarios}
                onChange={up("comentarios")}
                className={input}
              />
            </div>
            <div className="md:col-span-2">
              <Button
                type="submit"
                disabled={!valid}
                size="lg"
                className="w-full bg-[#25D366] hover:bg-[#20bd5a] text-white py-7 text-lg font-semibold rounded-lg disabled:opacity-50"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Enviar consulta por WhatsApp
              </Button>
              <p className="text-center text-sm text-[#0B0B0B]/60 mt-3">
                {sent ? "¡Listo! Si no se abrió WhatsApp, escribinos al +54 9 260 402-3087." : "Respondemos en el día. No pagás nada hasta confirmar."}
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

function FAQ() {
  return (
    <section id="faq" className="py-20 bg-white">
      <div className="container mx-auto px-6 max-w-3xl">
        <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#0B0B0B] text-center mb-10">Preguntas frecuentes</h2>
        <div className="space-y-4">
          {FAQS.map((x) => (
            <details key={x.q} className="group border border-[#0B0B0B]/10 rounded-xl p-5 open:shadow-md">
              <summary className="cursor-pointer font-semibold text-[#0B0B0B] list-none flex justify-between items-center">
                {x.q}
                <span className="text-[#6B7D5C] group-open:rotate-45 transition-transform text-2xl leading-none">+</span>
              </summary>
              <p className="text-[#0B0B0B]/70 mt-3 leading-relaxed">{x.a}</p>
            </details>
          ))}
        </div>
        <div className="text-center mt-12">
          <p className="text-[#0B0B0B]/70 mb-4 flex items-center justify-center gap-2">
            <MapPin className="w-4 h-4" /> Mendoza · San Rafael · Las Leñas
          </p>
          <Link href="/traslados-las-lenas" className="text-[#6B7D5C] font-medium hover:underline">
            ¿Vas a Las Leñas? Mirá nuestros traslados a la nieve →
          </Link>
        </div>
      </div>
    </section>
  )
}

export function MendozaPage() {
  return (
    <main className="min-h-screen scroll-smooth">
      <Header />
      <Hero />
      <Services />
      <Gallery />
      <QuoteForm />
      <FAQ />
      <Footer />
      <WhatsAppButton />
      <BackToHomeButton />
    </main>
  )
}
