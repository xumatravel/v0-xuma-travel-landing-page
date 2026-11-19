"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import {
  ArrowDown,
  Car,
  Check,
  Clock,
  MapPin,
  MessageCircle,
  Mountain,
  Plane,
  Shield,
  Waves,
  Flame,
  Compass,
  Wine,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Footer } from "@/components/landing/footer"
import { WhatsAppButton } from "@/components/landing/whatsapp-button"
import { BackToHomeButton } from "@/components/las-lenas/back-to-home"
import { WHATSAPP_CONFIG } from "@/lib/config"
import { useI18n, LanguageSwitcher } from "@/lib/i18n"

type L = "es" | "pt" | "en"

const T = {
  es: {
    wa: "Hola! Quiero consultar por un traslado o excursión en San Rafael / Malargüe",
    nav: { services: "Excursiones", quote: "Cotizar", faq: "Preguntas" },
    hero: {
      kicker: "Sur de Mendoza · San Rafael y Malargüe",
      title1: "Cañones. Volcanes.",
      title2: "Y la nieve más alta.",
      sub: "Somos de San Rafael. Te llevamos a los lugares que conocemos de toda la vida, del Cañón del Atuel a los volcanes de Malargüe.",
      cta1: "Pedí tu traslado",
      cta2: "Escribinos por WhatsApp",
      trust: ["Base en San Rafael, más de 30 años", "Choferes que conocen cada camino", "Autos, pick-ups, combis y minibuses"],
    },
    services: { kicker: "¿Qué querés conocer?", title: "Todo el sur, con chofer", sub: "Traslados privados y excursiones en San Rafael, Malargüe y Las Leñas.", cta: "Consultar" },
    items: [
      { kicker: "San Rafael", title: "Cañón del Atuel y Valle Grande", text: "El clásico del sur: el camino del cañón entre formaciones de colores, el dique Valle Grande y los miradores. Vamos a tu ritmo, parando donde quieras sacar fotos.", points: ["Día completo o medio día", "Paradas en miradores y diques", "Combinable con rafting y actividades"] },
      { kicker: "San Rafael", title: "Bodegas y Laberinto de Borges", text: "Bodegas familiares y clásicas de San Rafael, más el Laberinto de Borges en Finca Los Álamos. Vos degustás, nosotros manejamos.", points: ["Una o varias bodegas", "Laberinto de Borges", "City tour por San Rafael"] },
      { kicker: "San Rafael", title: "Los Reyunos, El Nihuil y El Cable", text: "Lagos y diques para pasar el día: Los Reyunos, El Nihuil y el wakepark El Cable. Te llevamos y te buscamos a la hora que quieras.", points: ["Ida y vuelta coordinada", "Ideal para grupos y familias", "Verano y todo el año"] },
      { kicker: "Malargüe", title: "Volcanes y la Caverna de las Brujas", text: "La Payunia, el volcán Malacara, la Caverna de las Brujas y la Laguna de Llancanelo con sus flamencos. Paisajes que no vas a ver en otro lugar.", points: ["Volcán Malacara (visita guiada)", "Caverna de las Brujas (con turno, sujeta a habilitación)", "Avistaje de flamencos en Llancanelo"] },
      { kicker: "San Rafael · Malargüe · Las Leñas", title: "Cabalgatas", text: "Cabalgatas por la montaña y el campo, en San Rafael, Malargüe y Las Leñas. Te llevamos hasta el punto de salida y te traemos de vuelta.", points: ["Medio día o día completo", "Para todos los niveles", "Coordinamos con prestadores locales"] },
      { kicker: "Aeropuertos y Las Leñas", title: "Traslados", text: "Aeropuertos de San Rafael y Malargüe, terminales y hoteles. Y por supuesto, Las Leñas: somos el traslado de siempre a la nieve.", points: ["Seguimiento del vuelo y cartel", "Lugar para valijas y equipos de ski", "San Rafael · Malargüe · Las Leñas · Mendoza"] },
    ],
    gallery: { kicker: "Somos de acá", title: "El sur de Mendoza, de la mano de los que lo conocen.", p1: "XUMA nació en San Rafael. Hace más de 30 años que recorremos estos caminos: el Cañón del Atuel, los diques, las bodegas, la ruta 40 hasta Malargüe y la subida a Las Leñas.", p2: "Contanos qué querés conocer y te armamos el recorrido. Vos disfrutá el paisaje: nosotros manejamos." },
    form: {
      kicker: "Cotizá en 1 minuto", title: "Pedí tu traslado o excursión", sub: "Completá los datos y te respondemos por WhatsApp con la propuesta.",
      service: "¿Qué necesitás?", date: "Fecha *", time: "Horario", from: "Desde *", fromPh: "Hotel, aeropuerto, ciudad", to: "Hacia", toPh: "Cañón del Atuel, bodega, Malargüe…",
      pax: "Pasajeros", name: "Nombre y apellido *", wa: "WhatsApp *", email: "Email", comments: "Comentarios", commentsPh: "Lugares que querés conocer, vuelo, cantidad de días…",
      submit: "Enviar consulta por WhatsApp", hint: "Respondemos en el día. No pagás nada hasta confirmar.", sent: "¡Listo! Si no se abrió WhatsApp, escribinos al +54 9 260 402-3087.",
      options: ["Cañón del Atuel / Valle Grande", "Bodegas / Laberinto de Borges", "Los Reyunos / El Nihuil / El Cable", "Malargüe: volcanes y caverna", "Cabalgata", "Traslado aeropuerto / Las Leñas", "Otro"],
      msgTitle: "Consulta sur de Mendoza (San Rafael / Malargüe)", lService: "Servicio", lDate: "Fecha", lTime: "Horario", lFrom: "Desde", lTo: "Hacia", lPax: "Pasajeros", lName: "Nombre", lEmail: "Email", lComments: "Comentarios",
    },
    faqTitle: "Preguntas frecuentes",
    faqs: [
      { q: "¿Las excursiones incluyen las entradas?", a: "Nosotros nos encargamos del traslado y te coordinamos con los prestadores. Las entradas a reservas o actividades se pagan aparte; te avisamos cuáles necesitan turno." },
      { q: "¿Se puede visitar la Caverna de las Brujas?", a: "Se visita con turno previo y puede cerrar por nieve o decisiones de la reserva. Antes de confirmar te avisamos si está habilitada." },
      { q: "¿Hacen traslados a Las Leñas desde San Rafael y Malargüe?", a: "Sí, es nuestra especialidad. Mirá también nuestra página de traslados a Las Leñas." },
      { q: "¿Pueden armar varios días?", a: "Sí. Combinamos Cañón del Atuel, bodegas, Malargüe y Las Leñas en un mismo viaje, con el mismo chofer si querés." },
      { q: "¿Trabajan con grupos y agencias?", a: "Sí, tenemos combis y minibuses para grupos, y trabajamos con agencias y operadores." },
    ],
    lasLenas: "¿Vas a Las Leñas? Mirá nuestros traslados a la nieve →",
    cross: "¿Vas a Mendoza capital o Valle de Uco? Mirá traslados en Mendoza →",
  },
  pt: {
    wa: "Olá! Quero consultar sobre um transfer ou passeio em San Rafael / Malargüe",
    nav: { services: "Passeios", quote: "Cotar", faq: "Perguntas" },
    hero: {
      kicker: "Sul de Mendoza · San Rafael e Malargüe",
      title1: "Cânions. Vulcões.",
      title2: "E a neve mais alta.",
      sub: "Somos de San Rafael. Levamos você aos lugares que conhecemos a vida toda, do Cânion do Atuel aos vulcões de Malargüe.",
      cta1: "Peça seu transfer",
      cta2: "Fale pelo WhatsApp",
      trust: ["Base em San Rafael, mais de 30 anos", "Motoristas que conhecem cada estrada", "Carros, picapes, vans e micro-ônibus"],
    },
    services: { kicker: "O que você quer conhecer?", title: "Todo o sul, com motorista", sub: "Transfers privados e passeios em San Rafael, Malargüe e Las Leñas.", cta: "Consultar" },
    items: [
      { kicker: "San Rafael", title: "Cânion do Atuel e Valle Grande", text: "O clássico do sul: a estrada do cânion entre formações coloridas, a represa Valle Grande e os mirantes. No seu ritmo, parando onde quiser tirar fotos.", points: ["Dia inteiro ou meio dia", "Paradas em mirantes e represas", "Combinável com rafting e atividades"] },
      { kicker: "San Rafael", title: "Vinícolas e Labirinto de Borges", text: "Vinícolas familiares e clássicas de San Rafael, mais o Labirinto de Borges na Finca Los Álamos. Você degusta, nós dirigimos.", points: ["Uma ou várias vinícolas", "Labirinto de Borges", "City tour por San Rafael"] },
      { kicker: "San Rafael", title: "Los Reyunos, El Nihuil e El Cable", text: "Lagos e represas para passar o dia: Los Reyunos, El Nihuil e o wakepark El Cable. Levamos e buscamos você na hora que quiser.", points: ["Ida e volta coordenadas", "Ideal para grupos e famílias", "Verão e o ano todo"] },
      { kicker: "Malargüe", title: "Vulcões e a Caverna das Bruxas", text: "La Payunia, o vulcão Malacara, a Caverna de las Brujas e a Laguna de Llancanelo com seus flamingos. Paisagens que você não vê em nenhum outro lugar.", points: ["Vulcão Malacara (visita guiada)", "Caverna de las Brujas (com reserva, sujeita a abertura)", "Observação de flamingos em Llancanelo"] },
      { kicker: "San Rafael · Malargüe · Las Leñas", title: "Cavalgadas", text: "Cavalgadas pela montanha e pelo campo, em San Rafael, Malargüe e Las Leñas. Levamos você até o ponto de saída e trazemos de volta.", points: ["Meio dia ou dia inteiro", "Para todos os níveis", "Coordenamos com prestadores locais"] },
      { kicker: "Aeroportos e Las Leñas", title: "Transfers", text: "Aeroportos de San Rafael e Malargüe, rodoviárias e hotéis. E, claro, Las Leñas: somos o transfer de sempre para a neve.", points: ["Acompanhamento do voo e placa", "Espaço para malas e equipamentos de ski", "San Rafael · Malargüe · Las Leñas · Mendoza"] },
    ],
    gallery: { kicker: "Somos daqui", title: "O sul de Mendoza, com quem conhece.", p1: "A XUMA nasceu em San Rafael. Há mais de 30 anos percorremos estas estradas: o Cânion do Atuel, as represas, as vinícolas, a rota 40 até Malargüe e a subida a Las Leñas.", p2: "Conte o que quer conhecer e montamos o roteiro. Aproveite a paisagem: nós dirigimos." },
    form: {
      kicker: "Cote em 1 minuto", title: "Peça seu transfer ou passeio", sub: "Preencha os dados e respondemos pelo WhatsApp com a proposta.",
      service: "Do que você precisa?", date: "Data *", time: "Horário", from: "De *", fromPh: "Hotel, aeroporto, cidade", to: "Para", toPh: "Cânion do Atuel, vinícola, Malargüe…",
      pax: "Passageiros", name: "Nome e sobrenome *", wa: "WhatsApp *", email: "E-mail", comments: "Comentários", commentsPh: "Lugares que quer conhecer, voo, quantidade de dias…",
      submit: "Enviar pelo WhatsApp", hint: "Respondemos no mesmo dia. Você não paga nada até confirmar.", sent: "Pronto! Se o WhatsApp não abriu, escreva para +54 9 260 402-3087.",
      options: ["Cânion do Atuel / Valle Grande", "Vinícolas / Labirinto de Borges", "Los Reyunos / El Nihuil / El Cable", "Malargüe: vulcões e caverna", "Cavalgada", "Transfer aeroporto / Las Leñas", "Outro"],
      msgTitle: "Consulta sul de Mendoza (San Rafael / Malargüe)", lService: "Serviço", lDate: "Data", lTime: "Horário", lFrom: "De", lTo: "Para", lPax: "Passageiros", lName: "Nome", lEmail: "E-mail", lComments: "Comentários",
    },
    faqTitle: "Perguntas frequentes",
    faqs: [
      { q: "Os passeios incluem os ingressos?", a: "Cuidamos do transfer e coordenamos com os prestadores. Os ingressos das reservas ou atividades são pagos à parte; avisamos quais precisam de reserva." },
      { q: "Dá para visitar a Caverna de las Brujas?", a: "A visita é com reserva prévia e pode fechar por neve ou decisões da reserva. Antes de confirmar, avisamos se está aberta." },
      { q: "Fazem transfers para Las Leñas desde San Rafael e Malargüe?", a: "Sim, é a nossa especialidade. Veja também nossa página de transfers para Las Leñas." },
      { q: "Podem montar vários dias?", a: "Sim. Combinamos Cânion do Atuel, vinícolas, Malargüe e Las Leñas na mesma viagem, com o mesmo motorista se quiser." },
      { q: "Trabalham com grupos e agências?", a: "Sim, temos vans e micro-ônibus para grupos e trabalhamos com agências e operadoras." },
    ],
    lasLenas: "Vai para Las Leñas? Veja nossos transfers para a neve →",
    cross: "Vai para Mendoza capital ou Valle de Uco? Veja transfers em Mendoza →",
  },
  en: {
    wa: "Hi! I'd like to ask about a transfer or excursion in San Rafael / Malargüe",
    nav: { services: "Excursions", quote: "Get a quote", faq: "FAQ" },
    hero: {
      kicker: "Southern Mendoza · San Rafael & Malargüe",
      title1: "Canyons. Volcanoes.",
      title2: "And the highest snow.",
      sub: "We're from San Rafael. We take you to the places we've known all our lives, from the Atuel Canyon to the volcanoes of Malargüe.",
      cta1: "Book your transfer",
      cta2: "Message us on WhatsApp",
      trust: ["Based in San Rafael, 30+ years", "Drivers who know every road", "Cars, pick-ups, vans and minibuses"],
    },
    services: { kicker: "What do you want to see?", title: "The whole south, with a driver", sub: "Private transfers and excursions in San Rafael, Malargüe and Las Leñas.", cta: "Ask now" },
    items: [
      { kicker: "San Rafael", title: "Atuel Canyon & Valle Grande", text: "The classic of the south: the canyon road among colorful rock formations, the Valle Grande dam and the viewpoints. At your pace, stopping wherever you want for photos.", points: ["Full or half day", "Stops at viewpoints and dams", "Can be combined with rafting"] },
      { kicker: "San Rafael", title: "Wineries & Borges Labyrinth", text: "Family-run and classic wineries in San Rafael, plus the Borges Labyrinth at Finca Los Álamos. You taste, we drive.", points: ["One or several wineries", "Borges Labyrinth", "San Rafael city tour"] },
      { kicker: "San Rafael", title: "Los Reyunos, El Nihuil & El Cable", text: "Lakes and dams to spend the day: Los Reyunos, El Nihuil and the El Cable wakepark. We drop you off and pick you up whenever you want.", points: ["Coordinated round trip", "Great for groups and families", "Summer and all year"] },
      { kicker: "Malargüe", title: "Volcanoes & the Witches' Cave", text: "La Payunia, the Malacara volcano, the Caverna de las Brujas and Llancanelo Lagoon with its flamingos. Landscapes you won't see anywhere else.", points: ["Malacara volcano (guided visit)", "Caverna de las Brujas (booking required, subject to opening)", "Flamingo watching at Llancanelo"] },
      { kicker: "San Rafael · Malargüe · Las Leñas", title: "Horseback riding", text: "Rides through mountains and countryside in San Rafael, Malargüe and Las Leñas. We take you to the starting point and bring you back.", points: ["Half or full day", "All levels", "We coordinate with local guides"] },
      { kicker: "Airports & Las Leñas", title: "Transfers", text: "San Rafael and Malargüe airports, bus terminals and hotels. And of course, Las Leñas: we've always been the ride to the snow.", points: ["Flight tracking and name sign", "Room for luggage and ski gear", "San Rafael · Malargüe · Las Leñas · Mendoza"] },
    ],
    gallery: { kicker: "We're local", title: "Southern Mendoza, with the people who know it.", p1: "XUMA was born in San Rafael. For more than 30 years we've driven these roads: the Atuel Canyon, the dams, the wineries, Route 40 down to Malargüe and the climb up to Las Leñas.", p2: "Tell us what you want to see and we'll plan the route. You enjoy the views: we drive." },
    form: {
      kicker: "Quote in 1 minute", title: "Book your transfer or excursion", sub: "Fill in the details and we'll reply on WhatsApp with a proposal.",
      service: "What do you need?", date: "Date *", time: "Time", from: "From *", fromPh: "Hotel, airport, city", to: "To", toPh: "Atuel Canyon, winery, Malargüe…",
      pax: "Passengers", name: "Full name *", wa: "WhatsApp *", email: "Email", comments: "Comments", commentsPh: "Places you'd like to see, flight, number of days…",
      submit: "Send via WhatsApp", hint: "We reply the same day. You pay nothing until you confirm.", sent: "Done! If WhatsApp didn't open, message us at +54 9 260 402-3087.",
      options: ["Atuel Canyon / Valle Grande", "Wineries / Borges Labyrinth", "Los Reyunos / El Nihuil / El Cable", "Malargüe: volcanoes & cave", "Horseback riding", "Airport / Las Leñas transfer", "Other"],
      msgTitle: "Southern Mendoza request (San Rafael / Malargüe)", lService: "Service", lDate: "Date", lTime: "Time", lFrom: "From", lTo: "To", lPax: "Passengers", lName: "Name", lEmail: "Email", lComments: "Comments",
    },
    faqTitle: "Frequently asked questions",
    faqs: [
      { q: "Do excursions include entrance fees?", a: "We take care of the transport and coordinate with local providers. Reserve or activity tickets are paid separately; we'll tell you which ones need booking." },
      { q: "Can I visit the Caverna de las Brujas?", a: "Visits require booking and the reserve may close due to snow or park decisions. We'll check it's open before you confirm." },
      { q: "Do you do transfers to Las Leñas from San Rafael and Malargüe?", a: "Yes, it's our specialty. See also our Las Leñas transfers page." },
      { q: "Can you plan several days?", a: "Yes. We combine Atuel Canyon, wineries, Malargüe and Las Leñas in one trip, with the same driver if you like." },
      { q: "Do you work with groups and agencies?", a: "Yes, we have vans and minibuses for groups, and we work with agencies and tour operators." },
    ],
    lasLenas: "Going to Las Leñas? See our snow transfers →",
    cross: "Going to Mendoza city or Uco Valley? See Mendoza transfers →",
  },
}

const ICONS = [Mountain, Wine, Waves, Flame, Compass, Plane]
const IMAGES = ["/sur/canon-atuel.jpg", "/sur/bodega-borges.jpg", "/sur/dique.jpg", "/mendoza/hero-volcan.jpg", "/sur/canon-colores.jpg", "/sur/excursion-amarok.jpg"]

function useT() {
  const { locale } = useI18n()
  const l = (["es", "pt", "en"].includes(locale) ? locale : "es") as L
  return { tr: T[l], locale: l }
}

function Header() {
  const { tr } = useT()
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
      <div className="container mx-auto px-6 flex items-center justify-between gap-4">
        <Link href="/" className="font-serif text-xl md:text-2xl font-bold text-white tracking-tight">
          XUMA<span className="text-[#C8A96A]">.</span>TRAVEL
        </Link>
        <nav className="hidden lg:flex items-center gap-8">
          {[
            ["#servicios", tr.nav.services],
            ["#cotizar", tr.nav.quote],
            ["#faq", tr.nav.faq],
          ].map(([href, label]) => (
            <a key={href} href={href} className="text-white/80 hover:text-white text-sm font-medium transition-colors">
              {label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <LanguageSwitcher />
          <Button
            onClick={() => WHATSAPP_CONFIG.open(tr.wa)}
            size="sm"
            className="hidden sm:inline-flex bg-[#6B7D5C] hover:bg-[#5a6b4d] text-white font-medium"
          >
            <MessageCircle className="w-4 h-4 mr-2" />
            WhatsApp
          </Button>
        </div>
      </div>
    </header>
  )
}

function Hero() {
  const { tr } = useT()
  const trustIcons = [Shield, Clock, Car]
  return (
    <section className="relative min-h-screen flex items-end overflow-hidden">
      <Image src="/mendoza/pico-atardecer.jpg" alt="Atardecer en la cordillera, sur de Mendoza" fill priority sizes="100vw" quality={85} className="object-cover" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#0B0B0B]/60 via-[#0B0B0B]/10 to-[#0B0B0B]/90" />
      <div className="relative z-10 container mx-auto px-6 pb-24 pt-32">
        <p className="text-[#C8A96A] font-semibold tracking-[0.3em] uppercase text-sm mb-4">{tr.hero.kicker}</p>
        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-[0.95] mb-6 max-w-4xl">
          {tr.hero.title1}
          <br />
          {tr.hero.title2}
        </h1>
        <p className="text-white/90 text-xl md:text-2xl font-light max-w-2xl mb-10">{tr.hero.sub}</p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Button
            onClick={() => document.getElementById("cotizar")?.scrollIntoView({ behavior: "smooth" })}
            size="lg"
            className="bg-[#6B7D5C] hover:bg-[#5a6b4d] text-white px-10 py-7 text-lg font-semibold rounded-lg group"
          >
            {tr.hero.cta1}
            <ArrowDown className="w-5 h-5 ml-2 group-hover:translate-y-1 transition-transform" />
          </Button>
          <Button
            onClick={() => WHATSAPP_CONFIG.open(tr.wa)}
            size="lg"
            className="bg-white/10 backdrop-blur-sm text-white hover:bg-white hover:text-gray-800 border border-white/20 px-10 py-7 text-lg rounded-lg"
          >
            <MessageCircle className="w-5 h-5 mr-2" />
            {tr.hero.cta2}
          </Button>
        </div>
        <div className="flex flex-wrap gap-4 mt-10">
          {tr.hero.trust.map((label, i) => {
            const I = trustIcons[i]
            return (
              <div key={label} className="flex items-center gap-2 text-white/90 bg-white/10 px-4 py-2 rounded-full">
                <I className="w-5 h-5 text-[#C8A96A]" />
                <span className="text-sm">{label}</span>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

function Services({ onPick }: { onPick: (i: number) => void }) {
  const { tr } = useT()
  return (
    <section id="servicios" className="py-20 md:py-28 bg-[#F8F6F3]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-[#6B7D5C] font-medium tracking-wider uppercase text-sm mb-3">{tr.services.kicker}</p>
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-[#0B0B0B] mb-4">{tr.services.title}</h2>
          <p className="text-[#0B0B0B]/70 text-lg max-w-2xl mx-auto">{tr.services.sub}</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tr.items.map((s, i) => {
            const Icon = ICONS[i]
            return (
              <div key={s.title} className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 flex flex-col">
                <div className="relative h-56">
                  <Image src={IMAGES[i]} alt={s.title} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0B]/70 to-transparent" />
                  <div className="absolute bottom-4 left-5 flex items-center gap-2 text-white">
                    <Icon className="w-5 h-5 text-[#C8A96A]" />
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
                    onClick={() => onPick(i)}
                    variant="outline"
                    className="mt-auto border-[#6B7D5C] text-[#6B7D5C] hover:bg-[#6B7D5C] hover:text-white"
                  >
                    {tr.services.cta}
                  </Button>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

function Gallery() {
  const { tr } = useT()
  const imgs = ["/sur/canon-colores.jpg", "/sur/valle-grande.jpg", "/sur/bodega-borges.jpg", "/sur/dique.jpg"]
  return (
    <section className="bg-[#0B0B0B] py-20">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-[#C8A96A] tracking-[0.3em] uppercase text-sm mb-4">{tr.gallery.kicker}</p>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-white mb-6">{tr.gallery.title}</h2>
            <p className="text-white/70 text-lg leading-relaxed mb-4">{tr.gallery.p1}</p>
            <p className="text-white/70 text-lg leading-relaxed">{tr.gallery.p2}</p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {imgs.map((src, i) => (
              <div key={src} className={`relative rounded-xl overflow-hidden h-56 ${i % 2 ? "mt-10" : ""}`}>
                <Image src={src} alt="San Rafael y Malargüe" fill sizes="(max-width: 1024px) 50vw, 25vw" className="object-cover" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function QuoteForm({ service, setService }: { service: number; setService: (i: number) => void }) {
  const { tr, locale } = useT()
  const [f, setF] = useState({
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
  const up =
    (k: keyof typeof f) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
      setF((p) => ({ ...p, [k]: e.target.value }))

  const valid = Boolean(f.nombre.trim() && f.whatsapp.trim() && f.fecha && f.desde.trim())
  const fl = tr.form

  const submit = (e: React.FormEvent) => {
    e.preventDefault()
    const servicio = fl.options[service]
    const servicioEs = T.es.form.options[service]
    const fechaTxt = f.fecha ? f.fecha.split("-").reverse().join("/") : "-"
    let msg = `*${fl.msgTitle}*\n\n`
    msg += `*${fl.lService}:* ${servicio}\n`
    msg += `*${fl.lDate}:* ${fechaTxt}\n`
    msg += `*${fl.lTime}:* ${f.hora || "-"}\n`
    msg += `*${fl.lFrom}:* ${f.desde || "-"}\n`
    msg += `*${fl.lTo}:* ${f.hacia || "-"}\n`
    msg += `*${fl.lPax}:* ${f.pasajeros || "-"}\n`
    msg += `*${fl.lName}:* ${f.nombre}\n`
    msg += `*WhatsApp:* ${f.whatsapp}\n`
    if (f.email.trim()) msg += `*${fl.lEmail}:* ${f.email}\n`
    if (f.comentarios.trim()) msg += `*${fl.lComments}:* ${f.comentarios}\n`

    WHATSAPP_CONFIG.open(msg)

    // Registro en XUMA OS + mail a info@ (en segundo plano, no bloquea WhatsApp)
    fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        formulario: "sur",
        language: locale,
        name: f.nombre,
        phone: f.whatsapp,
        email: f.email,
        arrivalDate: f.fecha,
        passengers: f.pasajeros,
        interest: `Sur: ${servicioEs}`,
        interestLabel: `Sur: ${servicioEs}`,
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
            <p className="text-[#6B7D5C] font-medium tracking-wider uppercase text-sm mb-3">{fl.kicker}</p>
            <h2 className="font-serif text-3xl md:text-5xl font-bold text-[#0B0B0B] mb-4">{fl.title}</h2>
            <p className="text-[#0B0B0B]/70 text-lg">{fl.sub}</p>
          </div>
          <form onSubmit={submit} className="bg-white rounded-2xl shadow-xl p-6 md:p-10 grid md:grid-cols-2 gap-6">
            <div className="md:col-span-2">
              <label htmlFor="servicio" className={label}>{fl.service}</label>
              <select id="servicio" value={service} onChange={(e) => setService(Number(e.target.value))} className={input}>
                {fl.options.map((o, i) => (
                  <option key={o} value={i}>{o}</option>
                ))}
              </select>
            </div>
            <div>
              <label className={label}>{fl.date}</label>
              <input type="date" required value={f.fecha} onChange={up("fecha")} className={input} />
            </div>
            <div>
              <label className={label}>{fl.time}</label>
              <input type="time" value={f.hora} onChange={up("hora")} className={input} />
            </div>
            <div>
              <label className={label}>{fl.from}</label>
              <input placeholder={fl.fromPh} required value={f.desde} onChange={up("desde")} className={input} />
            </div>
            <div>
              <label className={label}>{fl.to}</label>
              <input placeholder={fl.toPh} value={f.hacia} onChange={up("hacia")} className={input} />
            </div>
            <div>
              <label className={label}>{fl.pax}</label>
              <input type="number" min={1} max={60} value={f.pasajeros} onChange={up("pasajeros")} className={input} />
            </div>
            <div>
              <label className={label}>{fl.name}</label>
              <input required value={f.nombre} onChange={up("nombre")} className={input} />
            </div>
            <div>
              <label className={label}>{fl.wa}</label>
              <input type="tel" placeholder="+54 9 ..." required value={f.whatsapp} onChange={up("whatsapp")} className={input} />
            </div>
            <div>
              <label className={label}>{fl.email}</label>
              <input type="email" value={f.email} onChange={up("email")} className={input} />
            </div>
            <div className="md:col-span-2">
              <label className={label}>{fl.comments}</label>
              <textarea rows={3} placeholder={fl.commentsPh} value={f.comentarios} onChange={up("comentarios")} className={input} />
            </div>
            <div className="md:col-span-2">
              <Button
                type="submit"
                disabled={!valid}
                size="lg"
                className="w-full bg-[#25D366] hover:bg-[#20bd5a] text-white py-7 text-lg font-semibold rounded-lg disabled:opacity-50"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                {fl.submit}
              </Button>
              <p className="text-center text-sm text-[#0B0B0B]/60 mt-3">{sent ? fl.sent : fl.hint}</p>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

function FAQ() {
  const { tr } = useT()
  return (
    <section id="faq" className="py-20 bg-white">
      <div className="container mx-auto px-6 max-w-3xl">
        <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#0B0B0B] text-center mb-10">{tr.faqTitle}</h2>
        <div className="space-y-4">
          {tr.faqs.map((x) => (
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
            <MapPin className="w-4 h-4" /> San Rafael · Malargüe · Las Leñas
          </p>
          <Link href="/traslados-las-lenas" className="text-[#6B7D5C] font-medium hover:underline">
            {tr.lasLenas}
          </Link>
          <br />
          <Link href="/mendoza" className="inline-block mt-3 text-[#5A1E2A] font-medium hover:underline">
            {tr.cross}
          </Link>
        </div>
      </div>
    </section>
  )
}

export function SurPage() {
  const [service, setService] = useState(0)
  const pick = (i: number) => {
    setService(i)
    document.getElementById("cotizar")?.scrollIntoView({ behavior: "smooth" })
  }
  return (
    <main className="min-h-screen scroll-smooth">
      <Header />
      <Hero />
      <Services onPick={pick} />
      <Gallery />
      <QuoteForm service={service} setService={setService} />
      <FAQ />
      <Footer />
      <WhatsAppButton />
      <BackToHomeButton />
    </main>
  )
}
