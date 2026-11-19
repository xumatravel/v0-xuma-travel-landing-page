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
import { trackLead } from "@/lib/track"
import { useI18n, LanguageSwitcher } from "@/lib/i18n"
import { ComoNosConociste } from "@/components/como-nos-conociste"

type L = "es" | "pt" | "en"

const T = {
  es: {
    wa: "Hola! Quiero consultar por un traslado en Mendoza",
    nav: { services: "Servicios", quote: "Cotizar", faq: "Preguntas" },
    hero: {
      kicker: "Mendoza · todo el año",
      title1: "Montañas. Malbec.",
      title2: "Noches que no terminan.",
      sub: "Mendoza se vive mejor cuando alguien más maneja. Te llevamos y te traemos: vos disfrutá.",
      cta1: "Pedí tu traslado",
      cta2: "Escribinos por WhatsApp",
      trust: ["Más de 30 años de experiencia", "Puntualidad garantizada", "Autos, pick-ups, combis y minibuses"],
    },
    services: { kicker: "¿A dónde vas?", title: "Todo Mendoza, con chofer", sub: "Traslados privados y experiencias para turistas, grupos y empresas.", cta: "Consultar" },
    items: [
      { kicker: "Vos brindá", title: "Bodegas", text: "Valle de Uco, Luján de Cuyo y Maipú. Te buscamos por tu hotel, te esperamos en cada bodega y te traemos de vuelta. Full day, una sola bodega o el camino del vino completo.", points: ["Chofer que espera mientras degustás", "Armamos el recorrido con vos", "Privado o en grupo"] },
      { kicker: "Volvé seguro", title: "Eventos y fiestas", text: "Fiestas, casamientos, recitales y festivales. Ida y vuelta coordinada, a la hora que termine. Somos transporte oficial de producciones y eventos en Mendoza.", points: ["Salidas desde el centro y Chacras", "Lugar asegurado a la vuelta", "Logística para productoras y artistas"] },
      { kicker: "Llegá tranquilo", title: "Aeropuerto", text: "Aeropuerto El Plumerillo (MDZ) ⇄ tu hotel, en Mendoza, Chacras, Valle de Uco o donde estés. Seguimos tu vuelo y te esperamos con un cartel a tu nombre.", points: ["Seguimiento del vuelo", "Recepción con cartel", "Lugar para valijas y equipos"] },
      { kicker: "Puntuales, siempre", title: "Ejecutivos y empresas", text: "Traslados para auditores, equipos de trabajo y visitas corporativas: aeropuerto, hoteles, plantas industriales y oficinas. Servicio diario o por semana, con factura y un solo contacto que coordina todo.", points: ["Choferes profesionales", "Factura A o B", "Servicio por día o por semana"] },
      { kicker: "Mendoza de verdad", title: "Excursiones", text: "Potrerillos, alta montaña, Cacheuta, cabalgatas y San Rafael con el Cañón del Atuel. Te llevamos a los lugares que conocemos de toda la vida.", points: ["Potrerillos y alta montaña", "Cabalgatas en Mendoza y San Rafael", "Cañón del Atuel y Valle Grande"] },
      { kicker: "Todos juntos", title: "Grupos", text: "Combis y minibuses para grupos de amigos, familias, egresados y contingentes. Un solo vehículo, un solo plan, nadie maneja.", points: ["Autos, pick-ups, combis y minibuses", "De 1 a 45 pasajeros", "Recorridos a medida"] },
    ],
    gallery: { kicker: "Más de 30 años", title: "Vos disfrutá. Nosotros manejamos.", p1: "Somos una empresa familiar de San Rafael. Hace más de 30 años que movemos gente por Mendoza: a la nieve, a las bodegas, a las fiestas y al aeropuerto.", p2: "Brindá en Valle de Uco sin mirar el reloj. Bailá hasta que salga el sol y volvé seguro. Bajá del avión y encontrá tu nombre en un cartel." },
    form: {
      kicker: "Cotizá en 1 minuto", title: "Pedí tu traslado", sub: "Completá los datos y te respondemos por WhatsApp con la propuesta.",
      service: "¿Qué necesitás?", date: "Fecha *", time: "Horario", from: "Desde *", fromPh: "Hotel, aeropuerto, dirección", to: "Hacia", toPh: "Bodega, evento, hotel",
      pax: "Pasajeros", name: "Nombre y apellido *", wa: "WhatsApp *", email: "Email", comments: "Comentarios", commentsPh: "Bodegas que querés visitar, vuelo, cantidad de valijas, nombre del evento…",
      submit: "Enviar consulta por WhatsApp", hint: "Respondemos en el día. No pagás nada hasta confirmar.", sent: "¡Listo! Si no se abrió WhatsApp, escribinos al +54 9 260 402-3087.",
      options: ["Bodegas", "Evento o fiesta", "Aeropuerto", "Ejecutivo / empresa", "Excursión", "Grupo", "Otro"],
      msgTitle: "Consulta de traslado en Mendoza", lService: "Servicio", lDate: "Fecha", lTime: "Horario", lFrom: "Desde", lTo: "Hacia", lPax: "Pasajeros", lName: "Nombre", lEmail: "Email", lComments: "Comentarios",
    },
    faqTitle: "Preguntas frecuentes",
    faqs: [
      { q: "¿Cómo reservo?", a: "Completá el formulario o escribinos por WhatsApp con la fecha, el horario, desde dónde y hacia dónde vas y cuántos son. Te respondemos con la propuesta y confirmás." },
      { q: "¿Los traslados son privados?", a: "Sí, la mayoría son privados: el vehículo es solo para tu grupo. Para algunos eventos ofrecemos salidas compartidas con lugar asegurado." },
      { q: "¿Qué pasa si se demora mi vuelo?", a: "Seguimos el vuelo y te esperamos. No tenés que avisarnos nada." },
      { q: "¿Pueden facturar a mi empresa?", a: "Sí. Emitimos factura A o B y coordinamos servicios diarios o por semana para equipos de trabajo." },
      { q: "¿Hacen viajes fuera de Mendoza capital?", a: "Sí: Valle de Uco, Potrerillos, alta montaña, San Rafael, Malargüe y Las Leñas, entre otros destinos." },
    ],
    lasLenas: "¿Vas a Las Leñas? Mirá nuestros traslados a la nieve →",
    cross: "¿Vas al sur? Excursiones en San Rafael y Malargüe →",
  },
  pt: {
    wa: "Olá! Quero consultar sobre um transfer em Mendoza",
    nav: { services: "Serviços", quote: "Cotar", faq: "Perguntas" },
    hero: {
      kicker: "Mendoza · o ano todo",
      title1: "Montanhas. Malbec.",
      title2: "Noites que não acabam.",
      sub: "Mendoza se vive melhor quando outra pessoa dirige. Levamos e trazemos você: é só aproveitar.",
      cta1: "Peça seu transfer",
      cta2: "Fale pelo WhatsApp",
      trust: ["Mais de 30 anos de experiência", "Pontualidade garantida", "Carros, picapes, vans e micro-ônibus"],
    },
    services: { kicker: "Para onde você vai?", title: "Toda Mendoza, com motorista", sub: "Transfers privados e experiências para turistas, grupos e empresas.", cta: "Consultar" },
    items: [
      { kicker: "Você brinda", title: "Vinícolas", text: "Valle de Uco, Luján de Cuyo e Maipú. Buscamos você no hotel, esperamos em cada vinícola e trazemos de volta. Dia inteiro, uma só vinícola ou o caminho do vinho completo.", points: ["Motorista espera enquanto você degusta", "Montamos o roteiro com você", "Privado ou em grupo"] },
      { kicker: "Volte com segurança", title: "Eventos e festas", text: "Festas, casamentos, shows e festivais. Ida e volta coordenadas, na hora em que terminar. Somos transporte oficial de produções e eventos em Mendoza.", points: ["Saídas do centro e de Chacras", "Lugar garantido na volta", "Logística para produtoras e artistas"] },
      { kicker: "Chegue tranquilo", title: "Aeroporto", text: "Aeroporto El Plumerillo (MDZ) ⇄ seu hotel, em Mendoza, Chacras, Valle de Uco ou onde estiver. Acompanhamos seu voo e esperamos com uma placa com seu nome.", points: ["Acompanhamento do voo", "Recepção com placa", "Espaço para malas e equipamentos"] },
      { kicker: "Pontuais, sempre", title: "Executivos e empresas", text: "Transfers para auditores, equipes de trabalho e visitas corporativas: aeroporto, hotéis, plantas industriais e escritórios. Serviço diário ou semanal, com nota fiscal e um único contato que coordena tudo.", points: ["Motoristas profissionais", "Nota fiscal (factura A ou B)", "Serviço por dia ou por semana"] },
      { kicker: "Mendoza de verdade", title: "Passeios", text: "Potrerillos, alta montanha, Cacheuta, cavalgadas e San Rafael com o Cânion do Atuel. Levamos você aos lugares que conhecemos a vida toda.", points: ["Potrerillos e alta montanha", "Cavalgadas em Mendoza e San Rafael", "Cânion do Atuel e Valle Grande"] },
      { kicker: "Todos juntos", title: "Grupos", text: "Vans e micro-ônibus para grupos de amigos, famílias, formandos e excursões. Um só veículo, um só plano, ninguém dirige.", points: ["Carros, picapes, vans e micro-ônibus", "De 1 a 45 passageiros", "Roteiros sob medida"] },
    ],
    gallery: { kicker: "Mais de 30 anos", title: "Você aproveita. Nós dirigimos.", p1: "Somos uma empresa familiar de San Rafael. Há mais de 30 anos levamos pessoas por Mendoza: para a neve, as vinícolas, as festas e o aeroporto.", p2: "Brinde no Valle de Uco sem olhar o relógio. Dance até o sol nascer e volte com segurança. Desça do avião e encontre seu nome em uma placa." },
    form: {
      kicker: "Cote em 1 minuto", title: "Peça seu transfer", sub: "Preencha os dados e respondemos pelo WhatsApp com a proposta.",
      service: "Do que você precisa?", date: "Data *", time: "Horário", from: "De *", fromPh: "Hotel, aeroporto, endereço", to: "Para", toPh: "Vinícola, evento, hotel",
      pax: "Passageiros", name: "Nome e sobrenome *", wa: "WhatsApp *", email: "E-mail", comments: "Comentários", commentsPh: "Vinícolas que quer visitar, voo, quantidade de malas, nome do evento…",
      submit: "Enviar pelo WhatsApp", hint: "Respondemos no mesmo dia. Você não paga nada até confirmar.", sent: "Pronto! Se o WhatsApp não abriu, escreva para +54 9 260 402-3087.",
      options: ["Vinícolas", "Evento ou festa", "Aeroporto", "Executivo / empresa", "Passeio", "Grupo", "Outro"],
      msgTitle: "Consulta de transfer em Mendoza", lService: "Serviço", lDate: "Data", lTime: "Horário", lFrom: "De", lTo: "Para", lPax: "Passageiros", lName: "Nome", lEmail: "E-mail", lComments: "Comentários",
    },
    faqTitle: "Perguntas frequentes",
    faqs: [
      { q: "Como reservo?", a: "Preencha o formulário ou escreva pelo WhatsApp com a data, o horário, de onde e para onde vai e quantas pessoas são. Respondemos com a proposta e você confirma." },
      { q: "Os transfers são privados?", a: "Sim, a maioria é privada: o veículo é só para o seu grupo. Para alguns eventos oferecemos saídas compartilhadas com lugar garantido." },
      { q: "E se meu voo atrasar?", a: "Acompanhamos o voo e esperamos você. Não precisa nos avisar." },
      { q: "Vocês emitem nota fiscal para empresas?", a: "Sim. Emitimos factura A ou B e coordenamos serviços diários ou semanais para equipes de trabalho." },
      { q: "Fazem viagens fora de Mendoza capital?", a: "Sim: Valle de Uco, Potrerillos, alta montanha, San Rafael, Malargüe e Las Leñas, entre outros destinos." },
    ],
    lasLenas: "Vai para Las Leñas? Veja nossos transfers para a neve →",
    cross: "Vai para o sul? Passeios em San Rafael e Malargüe →",
  },
  en: {
    wa: "Hi! I'd like to ask about a transfer in Mendoza",
    nav: { services: "Services", quote: "Get a quote", faq: "FAQ" },
    hero: {
      kicker: "Mendoza · all year round",
      title1: "Mountains. Malbec.",
      title2: "Nights that never end.",
      sub: "Mendoza is better when someone else drives. We take you there and bring you back: you just enjoy.",
      cta1: "Book your transfer",
      cta2: "Message us on WhatsApp",
      trust: ["30+ years of experience", "Guaranteed punctuality", "Cars, pick-ups, vans and minibuses"],
    },
    services: { kicker: "Where are you going?", title: "All of Mendoza, with a driver", sub: "Private transfers and experiences for travelers, groups and companies.", cta: "Ask now" },
    items: [
      { kicker: "You raise the glass", title: "Wineries", text: "Uco Valley, Luján de Cuyo and Maipú. We pick you up at your hotel, wait at every winery and bring you back. Full day, a single winery or the full wine route.", points: ["Driver waits while you taste", "We plan the route with you", "Private or shared"] },
      { kicker: "Get home safe", title: "Events & parties", text: "Parties, weddings, concerts and festivals. Coordinated round trip, whenever it ends. We are the official transport for events and productions in Mendoza.", points: ["Departures from downtown and Chacras", "Guaranteed seat back", "Logistics for producers and artists"] },
      { kicker: "Arrive relaxed", title: "Airport", text: "El Plumerillo Airport (MDZ) ⇄ your hotel in Mendoza, Chacras, Uco Valley or wherever you stay. We track your flight and wait with a sign with your name.", points: ["Flight tracking", "Meet & greet with sign", "Room for luggage and gear"] },
      { kicker: "Always on time", title: "Executive & corporate", text: "Transfers for auditors, work teams and corporate visits: airport, hotels, industrial plants and offices. Daily or weekly service, with invoice and one contact who coordinates everything.", points: ["Professional drivers", "Official invoice", "Daily or weekly service"] },
      { kicker: "The real Mendoza", title: "Excursions", text: "Potrerillos, high mountains, Cacheuta, horseback riding and San Rafael with the Atuel Canyon. We take you to the places we've known all our lives.", points: ["Potrerillos and high mountains", "Horseback riding in Mendoza and San Rafael", "Atuel Canyon and Valle Grande"] },
      { kicker: "All together", title: "Groups", text: "Vans and minibuses for friends, families, students and tour groups. One vehicle, one plan, nobody drives.", points: ["Cars, pick-ups, vans and minibuses", "From 1 to 45 passengers", "Tailor-made routes"] },
    ],
    gallery: { kicker: "30+ years", title: "You enjoy. We drive.", p1: "We are a family business from San Rafael. For more than 30 years we've been moving people around Mendoza: to the snow, the wineries, the parties and the airport.", p2: "Toast in the Uco Valley without watching the clock. Dance until sunrise and get home safe. Step off the plane and find your name on a sign." },
    form: {
      kicker: "Quote in 1 minute", title: "Book your transfer", sub: "Fill in the details and we'll reply on WhatsApp with a proposal.",
      service: "What do you need?", date: "Date *", time: "Time", from: "From *", fromPh: "Hotel, airport, address", to: "To", toPh: "Winery, event, hotel",
      pax: "Passengers", name: "Full name *", wa: "WhatsApp *", email: "Email", comments: "Comments", commentsPh: "Wineries you'd like to visit, flight, luggage, event name…",
      submit: "Send via WhatsApp", hint: "We reply the same day. You pay nothing until you confirm.", sent: "Done! If WhatsApp didn't open, message us at +54 9 260 402-3087.",
      options: ["Wineries", "Event or party", "Airport", "Executive / corporate", "Excursion", "Group", "Other"],
      msgTitle: "Mendoza transfer request", lService: "Service", lDate: "Date", lTime: "Time", lFrom: "From", lTo: "To", lPax: "Passengers", lName: "Name", lEmail: "Email", lComments: "Comments",
    },
    faqTitle: "Frequently asked questions",
    faqs: [
      { q: "How do I book?", a: "Fill in the form or message us on WhatsApp with the date, time, where from and where to, and how many people. We'll reply with a proposal for you to confirm." },
      { q: "Are transfers private?", a: "Yes, most are private: the vehicle is only for your group. For some events we offer shared departures with a guaranteed seat." },
      { q: "What if my flight is delayed?", a: "We track your flight and wait for you. No need to let us know." },
      { q: "Can you invoice my company?", a: "Yes. We issue official invoices and coordinate daily or weekly services for work teams." },
      { q: "Do you go outside Mendoza city?", a: "Yes: Uco Valley, Potrerillos, high mountains, San Rafael, Malargüe and Las Leñas, among others." },
    ],
    lasLenas: "Going to Las Leñas? See our snow transfers →",
    cross: "Heading south? Excursions in San Rafael & Malargüe →",
  },
}

const ICONS = [Wine, Music, Plane, Briefcase, Mountain, Users]
const IMAGES = ["/mendoza/malbec.jpg", "/mendoza/mendoza-noche.jpg", "/mendoza/potrerillos.jpg", "/transfer-van.jpg", "/mendoza/termas.jpg", "/mendoza/bodega-grupo.jpg"]

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
      <Image src="/mendoza/hero-volcan.jpg" alt="Atardecer en la cordillera, Mendoza" fill priority sizes="100vw" quality={85} className="object-cover" />
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
  const imgs = ["/mendoza/vinedos.jpg", "/mendoza/barricas.jpg", "/mendoza/bodega-mesa.jpg", "/mendoza/potrerillos.jpg"]
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
                <Image src={src} alt="Mendoza" fill sizes="(max-width: 1024px) 50vw, 25vw" className="object-cover" />
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
  const [conocio, setConocio] = useState("")
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
    trackLead("mendoza")
    fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        formulario: "mendoza",
        language: locale,
        comoNosConocio: conocio,
        name: f.nombre,
        phone: f.whatsapp,
        email: f.email,
        arrivalDate: f.fecha,
        passengers: f.pasajeros,
        interest: `Mendoza: ${servicioEs}`,
        interestLabel: `Mendoza: ${servicioEs}`,
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
              <ComoNosConociste value={conocio} onChange={setConocio} />
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
            <MapPin className="w-4 h-4" /> Mendoza · San Rafael · Las Leñas
          </p>
          <Link href="/traslados-las-lenas" className="text-[#6B7D5C] font-medium hover:underline">
            {tr.lasLenas}
          </Link>
          <br />
          <Link href="/san-rafael-malargue" className="inline-block mt-3 text-[#5A1E2A] font-medium hover:underline">
            {tr.cross}
          </Link>
        </div>
      </div>
    </section>
  )
}

export function MendozaPage() {
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
