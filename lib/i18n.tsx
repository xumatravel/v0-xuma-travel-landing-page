"use client"

import { createContext, useContext, useState, useCallback, type ReactNode } from "react"

export type Locale = "es" | "pt" | "en"

type TranslationValue = string | string[] | Record<string, unknown>

interface I18nContextType {
  locale: Locale
  setLocale: (locale: Locale) => void
  t: (key: string) => string
  tArray: (key: string) => string[]
  tObject: <T>(key: string) => T
}

const I18nContext = createContext<I18nContextType | undefined>(undefined)

// Translations
const translations: Record<Locale, Record<string, TranslationValue>> = {
  es: {
    // Navigation
    "nav.packages": "Paquetes",
    "nav.services": "Servicios",
    "nav.lasLenas": "Las Leñas",
    "nav.agencies": "Agencias",
    "nav.about": "Nosotros",
    "nav.contact": "Contacto",
    "nav.whatsapp": "WhatsApp",
    "nav.planExperience": "Planifica tu experiencia",

    // Hero
    "hero.headline": "Viajes Premium y Transfers a Las Leñas — Todo en Un Solo Lugar",
    "hero.subheadline": "Integramos transporte, logística y experiencias en Mendoza para agencias y viajeros internacionales.",
    "hero.trust1": "30+ años de experiencia (empresa familiar)",
    "hero.trust2": "Proveedor oficial de transporte al Valle de Las Leñas",
    "hero.cta.primary": "Planifica tu experiencia completa",
    "hero.cta.secondary": "Habla con nosotros",

    // What We Really Do
    "whatWeDo.title": "Lo Que Realmente Hacemos",
    "whatWeDo.subtitle": "XUMA TRAVEL es un operador receptivo que:",
    "whatWeDo.point1": "Coordina viajes completos",
    "whatWeDo.point2": "Integra transporte + hoteles + experiencias",
    "whatWeDo.point3": "Trabaja con agencias y clientes internacionales",
    "whatWeDo.description": "Coordinamos todo tu viaje en Mendoza, con estándar premium y sin fricciones.",

    // Core Products
    "products.title": "Nuestros Productos",
    "products.subtitle": "Tres formas de vivir Mendoza con estándar premium",
    
    "products.ski.title": "Paquetes de Ski",
    "products.ski.subtitle": "PRODUCTO PRINCIPAL",
    "products.ski.description": "Transporte + hotel + ski pass. La experiencia completa en Las Leñas.",
    "products.ski.features": ["Transfers premium", "Hospedaje seleccionado", "Ski pass incluido", "Coordinación total"],
    
    "products.experience.title": "Experiencia Mendoza",
    "products.experience.subtitle": "2-4 DÍAS",
    "products.experience.description": "Paquetes de vino + montaña. Descubre lo mejor de la región.",
    "products.experience.features": ["Tours de bodegas", "Alta montaña", "Gastronomía", "Guías expertos"],
    
    "products.transfers.title": "Transfers Premium",
    "products.transfers.subtitle": "PUNTO DE ENTRADA",
    "products.transfers.description": "Aeropuerto / bodegas / Las Leñas. Tu puerta de entrada a Mendoza.",
    "products.transfers.features": ["Vehículos premium", "Conductores bilingües", "Puntualidad garantizada", "Servicio puerta a puerta"],

    "products.note": "Los transfers son tu punto de entrada, no el destino final.",

    // Las Leñas Section
    "lasLenas.title": "Las Leñas: Nuestro Expertise",
    "lasLenas.subtitle": "Proveedor Oficial de Transporte",
    "lasLenas.description": "Con más de 30 años de experiencia, somos el socio de transporte más confiable para el Valle de Las Leñas. Nuestra trayectoria nos convierte en expertos en las condiciones de la ruta y las necesidades de los viajeros.",
    "lasLenas.badge": "Proveedor Oficial",
    "lasLenas.cta": "Descubre nuestros paquetes de ski",
    "lasLenas.stats.trips": "Miles de viajes",
    "lasLenas.stats.experience": "30+ años",
    "lasLenas.stats.satisfaction": "99% satisfacción",

    // Upsell Section
    "upsell.title": "Transforma tu Transfer en una Experiencia Completa",
    "upsell.subtitle": "De un simple traslado a una coordinación de viaje completa",
    "upsell.step1.title": "Transfer Básico",
    "upsell.step1.description": "Aeropuerto → Destino",
    "upsell.step2.title": "Agregar Experiencias",
    "upsell.step2.description": "Bodegas + Tours",
    "upsell.step3.title": "Paquete Completo",
    "upsell.step3.description": "Viaje sin fricciones",
    "upsell.cta": "Mejora tu experiencia",

    // B2B Section
    "b2b.title": "Para Agencias de Viaje",
    "b2b.subtitle": "Tu socio local de confianza en Mendoza",
    "b2b.description": "Trabajamos con agencias de todo el mundo para ofrecer servicios receptivos de primera clase.",
    "b2b.benefits": [
      "Respuesta rápida y eficiente",
      "Flexibilidad operativa",
      "Soluciones escalables para grupos",
      "Tarifas competitivas para mayoristas",
      "Soporte 24/7 en español, portugués e inglés"
    ],
    "b2b.cta": "Conviértete en socio",

    // Brand Positioning
    "brand.title": "Más que Transporte",
    "brand.subtitle": "Una experiencia premium sin fricciones",
    "brand.transport": "Transporte",
    "brand.logistics": "Logística",
    "brand.experiences": "Experiencias",
    "brand.result": "Experiencia premium sin fricciones en Mendoza",

    // Trust Stats
    "trust.passengers": "Pasajeros transportados",
    "trust.years": "Años de experiencia",
    "trust.satisfaction": "Satisfacción",
    "trust.support": "Soporte",
    "trust.supportValue": "24/7",

    // Contact
    "contact.title": "Planifica tu Experiencia en Mendoza",
    "contact.subtitle": "Contáctanos y diseñaremos el viaje perfecto para ti",
    "contact.form.name": "Nombre completo",
    "contact.form.email": "Email",
    "contact.form.phone": "Teléfono (WhatsApp)",
    "contact.form.interest": "Me interesa...",
    "contact.form.interest.ski": "Paquetes de Ski",
    "contact.form.interest.experience": "Experiencia Mendoza",
    "contact.form.interest.transfer": "Solo Transfer",
    "contact.form.interest.agency": "Soy Agencia de Viajes",
    "contact.form.message": "Mensaje",
    "contact.form.submit": "Enviar consulta",
    "contact.whatsapp.title": "Prefiere WhatsApp?",
    "contact.whatsapp.description": "Respuesta inmediata en horario comercial",
    "contact.whatsapp.cta": "Chatea con nosotros",

    // About
    "about.title": "Sobre XUMA TRAVEL",
    "about.description": "Somos una empresa familiar con más de 30 años coordinando viajes premium en Mendoza. Nuestra misión es simple: hacer que cada viaje sea impecable, desde el primer contacto hasta el regreso a casa.",
    "about.values.title": "Nuestros Valores",
    "about.values.items": ["Excelencia en servicio", "Atención personalizada", "Compromiso con la seguridad", "Pasión por Mendoza"],

    // FAQ
    "faq.title": "Preguntas Frecuentes",
    "faq.items": [
      {
        "question": "¿Qué incluyen los paquetes de ski?",
        "answer": "Nuestros paquetes incluyen transfers premium desde Mendoza, alojamiento en el Valle de Las Leñas o San Rafael, ski pass, y coordinación completa del viaje. Podemos personalizar cada paquete según tus necesidades."
      },
      {
        "question": "¿Trabajan con agencias de viaje?",
        "answer": "Sí, somos socios de agencias de todo el mundo. Ofrecemos tarifas especiales, respuesta rápida, y flexibilidad operativa para grupos de cualquier tamaño."
      },
      {
        "question": "¿Cuánto dura el viaje a Las Leñas?",
        "answer": "El viaje desde Mendoza capital dura aproximadamente 4.5-5 horas. Nuestros vehículos son cómodos y seguros, con conductores expertos en la ruta de montaña."
      },
      {
        "question": "¿Qué idiomas hablan?",
        "answer": "Nuestro equipo habla español, portugués e inglés fluidamente. Atendemos a clientes de todo el mundo."
      },
      {
        "question": "¿Pueden coordinar todo mi viaje?",
        "answer": "¡Por supuesto! Eso es exactamente lo que hacemos mejor. Desde el aeropuerto hasta experiencias gastronómicas, bodegas, ski, y más. Coordinamos todo para que solo te preocupes por disfrutar."
      }
    ],

    // Footer
    "footer.tagline": "Tu operador receptivo premium en Mendoza",
    "footer.contact": "Contacto",
    "footer.quickLinks": "Enlaces Rápidos",
    "footer.followUs": "Síguenos",
    "footer.rights": "Todos los derechos reservados.",
  },

  pt: {
    // Navigation
    "nav.packages": "Pacotes",
    "nav.services": "Serviços",
    "nav.lasLenas": "Las Leñas",
    "nav.agencies": "Agências",
    "nav.about": "Sobre Nós",
    "nav.contact": "Contato",
    "nav.whatsapp": "WhatsApp",
    "nav.planExperience": "Planeje sua experiência",

    // Hero
    "hero.headline": "Viagens Premium e Transfers para Las Leñas — Tudo em Um Só Lugar",
    "hero.subheadline": "Integramos transporte, logística e experiências em Mendoza para agências e viajantes internacionais.",
    "hero.trust1": "30+ anos de experiência (empresa familiar)",
    "hero.trust2": "Fornecedor oficial de transporte para o Vale de Las Leñas",
    "hero.cta.primary": "Planeje sua experiência completa",
    "hero.cta.secondary": "Fale conosco",

    // What We Really Do
    "whatWeDo.title": "O Que Realmente Fazemos",
    "whatWeDo.subtitle": "XUMA TRAVEL é uma operadora receptiva que:",
    "whatWeDo.point1": "Coordena viagens completas",
    "whatWeDo.point2": "Integra transporte + hotéis + experiências",
    "whatWeDo.point3": "Trabalha com agências e clientes internacionais",
    "whatWeDo.description": "Coordenamos toda a sua viagem em Mendoza, com padrão premium e sem atritos.",

    // Core Products
    "products.title": "Nossos Produtos",
    "products.subtitle": "Três formas de viver Mendoza com padrão premium",
    
    "products.ski.title": "Pacotes de Ski",
    "products.ski.subtitle": "PRODUTO PRINCIPAL",
    "products.ski.description": "Transporte + hotel + ski pass. A experiência completa em Las Leñas.",
    "products.ski.features": ["Transfers premium", "Hospedagem selecionada", "Ski pass incluído", "Coordenação total"],
    
    "products.experience.title": "Experiência Mendoza",
    "products.experience.subtitle": "2-4 DIAS",
    "products.experience.description": "Pacotes de vinho + montanha. Descubra o melhor da região.",
    "products.experience.features": ["Tours de vinícolas", "Alta montanha", "Gastronomia", "Guias experientes"],
    
    "products.transfers.title": "Transfers Premium",
    "products.transfers.subtitle": "PONTO DE ENTRADA",
    "products.transfers.description": "Aeroporto / vinícolas / Las Leñas. Sua porta de entrada para Mendoza.",
    "products.transfers.features": ["Veículos premium", "Motoristas bilíngues", "Pontualidade garantida", "Serviço porta a porta"],

    "products.note": "Os transfers são seu ponto de entrada, não o destino final.",

    // Las Leñas Section
    "lasLenas.title": "Las Leñas: Nossa Especialidade",
    "lasLenas.subtitle": "Fornecedor Oficial de Transporte",
    "lasLenas.description": "Com mais de 30 anos de experiência, somos o parceiro de transporte mais confiável para o Vale de Las Leñas. Nossa trajetória nos torna especialistas nas condições da estrada e nas necessidades dos viajantes.",
    "lasLenas.badge": "Fornecedor Oficial",
    "lasLenas.cta": "Descubra nossos pacotes de ski",
    "lasLenas.stats.trips": "Milhares de viagens",
    "lasLenas.stats.experience": "30+ anos",
    "lasLenas.stats.satisfaction": "99% satisfação",

    // Upsell Section
    "upsell.title": "Transforme seu Transfer em uma Experiência Completa",
    "upsell.subtitle": "De um simples traslado para uma coordenação de viagem completa",
    "upsell.step1.title": "Transfer Básico",
    "upsell.step1.description": "Aeroporto → Destino",
    "upsell.step2.title": "Adicionar Experiências",
    "upsell.step2.description": "Vinícolas + Tours",
    "upsell.step3.title": "Pacote Completo",
    "upsell.step3.description": "Viagem sem atritos",
    "upsell.cta": "Melhore sua experiência",

    // B2B Section
    "b2b.title": "Para Agências de Viagem",
    "b2b.subtitle": "Seu parceiro local de confiança em Mendoza",
    "b2b.description": "Trabalhamos com agências de todo o mundo para oferecer serviços receptivos de primeira classe.",
    "b2b.benefits": [
      "Resposta rápida e eficiente",
      "Flexibilidade operacional",
      "Soluções escaláveis para grupos",
      "Tarifas competitivas para operadoras",
      "Suporte 24/7 em espanhol, português e inglês"
    ],
    "b2b.cta": "Torne-se parceiro",

    // Brand Positioning
    "brand.title": "Mais que Transporte",
    "brand.subtitle": "Uma experiência premium sem atritos",
    "brand.transport": "Transporte",
    "brand.logistics": "Logística",
    "brand.experiences": "Experiências",
    "brand.result": "Experiência premium sem atritos em Mendoza",

    // Trust Stats
    "trust.passengers": "Passageiros transportados",
    "trust.years": "Anos de experiência",
    "trust.satisfaction": "Satisfação",
    "trust.support": "Suporte",
    "trust.supportValue": "24/7",

    // Contact
    "contact.title": "Planeje sua Experiência em Mendoza",
    "contact.subtitle": "Entre em contato e desenharemos a viagem perfeita para você",
    "contact.form.name": "Nome completo",
    "contact.form.email": "Email",
    "contact.form.phone": "Telefone (WhatsApp)",
    "contact.form.interest": "Tenho interesse em...",
    "contact.form.interest.ski": "Pacotes de Ski",
    "contact.form.interest.experience": "Experiência Mendoza",
    "contact.form.interest.transfer": "Apenas Transfer",
    "contact.form.interest.agency": "Sou Agência de Viagem",
    "contact.form.message": "Mensagem",
    "contact.form.submit": "Enviar consulta",
    "contact.whatsapp.title": "Prefere WhatsApp?",
    "contact.whatsapp.description": "Resposta imediata em horário comercial",
    "contact.whatsapp.cta": "Converse conosco",

    // About
    "about.title": "Sobre a XUMA TRAVEL",
    "about.description": "Somos uma empresa familiar com mais de 30 anos coordenando viagens premium em Mendoza. Nossa missão é simples: fazer com que cada viagem seja impecável, desde o primeiro contato até a volta para casa.",
    "about.values.title": "Nossos Valores",
    "about.values.items": ["Excelência em serviço", "Atendimento personalizado", "Compromisso com a segurança", "Paixão por Mendoza"],

    // FAQ
    "faq.title": "Perguntas Frequentes",
    "faq.items": [
      {
        "question": "O que incluem os pacotes de ski?",
        "answer": "Nossos pacotes incluem transfers premium desde Mendoza, hospedagem no Vale de Las Leñas ou San Rafael, ski pass, e coordenação completa da viagem. Podemos personalizar cada pacote de acordo com suas necessidades."
      },
      {
        "question": "Vocês trabalham com agências de viagem?",
        "answer": "Sim, somos parceiros de agências de todo o mundo. Oferecemos tarifas especiais, resposta rápida, e flexibilidade operacional para grupos de qualquer tamanho."
      },
      {
        "question": "Quanto tempo dura a viagem até Las Leñas?",
        "answer": "A viagem desde a capital Mendoza dura aproximadamente 4,5-5 horas. Nossos veículos são confortáveis e seguros, com motoristas experientes na rota de montanha."
      },
      {
        "question": "Que idiomas vocês falam?",
        "answer": "Nossa equipe fala espanhol, português e inglês fluentemente. Atendemos clientes de todo o mundo."
      },
      {
        "question": "Vocês podem coordenar toda a minha viagem?",
        "answer": "Com certeza! É exatamente isso que fazemos de melhor. Desde o aeroporto até experiências gastronômicas, vinícolas, ski e muito mais. Coordenamos tudo para que você só se preocupe em aproveitar."
      }
    ],

    // Footer
    "footer.tagline": "Sua operadora receptiva premium em Mendoza",
    "footer.contact": "Contato",
    "footer.quickLinks": "Links Rápidos",
    "footer.followUs": "Siga-nos",
    "footer.rights": "Todos os direitos reservados.",
  },

  en: {
    // Navigation
    "nav.packages": "Packages",
    "nav.services": "Services",
    "nav.lasLenas": "Las Leñas",
    "nav.agencies": "Agencies",
    "nav.about": "About",
    "nav.contact": "Contact",
    "nav.whatsapp": "WhatsApp",
    "nav.planExperience": "Plan your experience",

    // Hero
    "hero.headline": "Premium Travel & Transfers to Las Leñas — All in One Place",
    "hero.subheadline": "We integrate transportation, logistics, and experiences in Mendoza for agencies and international travelers.",
    "hero.trust1": "30+ years of experience (family business)",
    "hero.trust2": "Official transportation provider to Valle de Las Leñas",
    "hero.cta.primary": "Plan your full experience",
    "hero.cta.secondary": "Talk to us",

    // What We Really Do
    "whatWeDo.title": "What We Really Do",
    "whatWeDo.subtitle": "XUMA TRAVEL is a receptive operator that:",
    "whatWeDo.point1": "Coordinates full trips",
    "whatWeDo.point2": "Integrates transport + hotels + experiences",
    "whatWeDo.point3": "Works with agencies and international clients",
    "whatWeDo.description": "We coordinate your entire trip in Mendoza, with premium standards and zero friction.",

    // Core Products
    "products.title": "Our Products",
    "products.subtitle": "Three ways to experience Mendoza with premium standards",
    
    "products.ski.title": "Ski Packages",
    "products.ski.subtitle": "MAIN PRODUCT",
    "products.ski.description": "Transport + hotel + ski pass. The complete Las Leñas experience.",
    "products.ski.features": ["Premium transfers", "Selected lodging", "Ski pass included", "Full coordination"],
    
    "products.experience.title": "Mendoza Experience",
    "products.experience.subtitle": "2-4 DAYS",
    "products.experience.description": "Wine + mountain packages. Discover the best of the region.",
    "products.experience.features": ["Winery tours", "High mountain", "Gastronomy", "Expert guides"],
    
    "products.transfers.title": "Premium Transfers",
    "products.transfers.subtitle": "ENTRY POINT",
    "products.transfers.description": "Airport / wineries / Las Leñas. Your gateway to Mendoza.",
    "products.transfers.features": ["Premium vehicles", "Bilingual drivers", "Guaranteed punctuality", "Door-to-door service"],

    "products.note": "Transfers are your entry point, not the final destination.",

    // Las Leñas Section
    "lasLenas.title": "Las Leñas: Our Expertise",
    "lasLenas.subtitle": "Official Transportation Provider",
    "lasLenas.description": "With over 30 years of experience, we are the most trusted transportation partner for Valle de Las Leñas. Our track record makes us experts in road conditions and traveler needs.",
    "lasLenas.badge": "Official Provider",
    "lasLenas.cta": "Discover our ski packages",
    "lasLenas.stats.trips": "Thousands of trips",
    "lasLenas.stats.experience": "30+ years",
    "lasLenas.stats.satisfaction": "99% satisfaction",

    // Upsell Section
    "upsell.title": "Turn Your Transfer into a Complete Mendoza Experience",
    "upsell.subtitle": "From simple transfer to full travel coordination",
    "upsell.step1.title": "Basic Transfer",
    "upsell.step1.description": "Airport → Destination",
    "upsell.step2.title": "Add Experiences",
    "upsell.step2.description": "Wineries + Tours",
    "upsell.step3.title": "Full Package",
    "upsell.step3.description": "Frictionless travel",
    "upsell.cta": "Upgrade your experience",

    // B2B Section
    "b2b.title": "For Travel Agencies",
    "b2b.subtitle": "Your trusted local partner in Mendoza",
    "b2b.description": "We work with agencies worldwide to deliver first-class receptive services.",
    "b2b.benefits": [
      "Fast and efficient response",
      "Operational flexibility",
      "Scalable group solutions",
      "Competitive wholesale rates",
      "24/7 support in Spanish, Portuguese & English"
    ],
    "b2b.cta": "Become a partner",

    // Brand Positioning
    "brand.title": "More Than Transportation",
    "brand.subtitle": "A frictionless premium experience",
    "brand.transport": "Transportation",
    "brand.logistics": "Logistics",
    "brand.experiences": "Experiences",
    "brand.result": "Frictionless premium experience in Mendoza",

    // Trust Stats
    "trust.passengers": "Passengers transported",
    "trust.years": "Years of experience",
    "trust.satisfaction": "Satisfaction",
    "trust.support": "Support",
    "trust.supportValue": "24/7",

    // Contact
    "contact.title": "Plan Your Mendoza Experience",
    "contact.subtitle": "Contact us and we'll design the perfect trip for you",
    "contact.form.name": "Full name",
    "contact.form.email": "Email",
    "contact.form.phone": "Phone (WhatsApp)",
    "contact.form.interest": "I'm interested in...",
    "contact.form.interest.ski": "Ski Packages",
    "contact.form.interest.experience": "Mendoza Experience",
    "contact.form.interest.transfer": "Transfer Only",
    "contact.form.interest.agency": "I'm a Travel Agency",
    "contact.form.message": "Message",
    "contact.form.submit": "Send inquiry",
    "contact.whatsapp.title": "Prefer WhatsApp?",
    "contact.whatsapp.description": "Immediate response during business hours",
    "contact.whatsapp.cta": "Chat with us",

    // About
    "about.title": "About XUMA TRAVEL",
    "about.description": "We are a family business with over 30 years coordinating premium trips in Mendoza. Our mission is simple: make every trip flawless, from first contact to returning home.",
    "about.values.title": "Our Values",
    "about.values.items": ["Service excellence", "Personalized attention", "Safety commitment", "Passion for Mendoza"],

    // FAQ
    "faq.title": "Frequently Asked Questions",
    "faq.items": [
      {
        "question": "What do the ski packages include?",
        "answer": "Our packages include premium transfers from Mendoza, lodging in Valle de Las Leñas or San Rafael, ski pass, and complete trip coordination. We can customize each package to your needs."
      },
      {
        "question": "Do you work with travel agencies?",
        "answer": "Yes, we partner with agencies worldwide. We offer special rates, fast response, and operational flexibility for groups of any size."
      },
      {
        "question": "How long is the trip to Las Leñas?",
        "answer": "The trip from Mendoza city takes approximately 4.5-5 hours. Our vehicles are comfortable and safe, with drivers experienced in mountain routes."
      },
      {
        "question": "What languages do you speak?",
        "answer": "Our team speaks Spanish, Portuguese, and English fluently. We serve clients from around the world."
      },
      {
        "question": "Can you coordinate my entire trip?",
        "answer": "Absolutely! That's exactly what we do best. From the airport to gastronomic experiences, wineries, skiing, and more. We coordinate everything so you only worry about enjoying."
      }
    ],

    // Footer
    "footer.tagline": "Your premium receptive operator in Mendoza",
    "footer.contact": "Contact",
    "footer.quickLinks": "Quick Links",
    "footer.followUs": "Follow Us",
    "footer.rights": "All rights reserved.",
  },
}

function getNestedValue(obj: Record<string, TranslationValue>, key: string): TranslationValue | undefined {
  return obj[key]
}

export function I18nProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<Locale>("es")

  const t = useCallback(
    (key: string): string => {
      const value = getNestedValue(translations[locale], key)
      if (typeof value === "string") return value
      return key
    },
    [locale]
  )

  const tArray = useCallback(
    (key: string): string[] => {
      const value = getNestedValue(translations[locale], key)
      if (Array.isArray(value)) return value as string[]
      return []
    },
    [locale]
  )

  const tObject = useCallback(
    <T,>(key: string): T => {
      const value = getNestedValue(translations[locale], key)
      return value as T
    },
    [locale]
  )

  return (
    <I18nContext.Provider value={{ locale, setLocale, t, tArray, tObject }}>
      {children}
    </I18nContext.Provider>
  )
}

export function useI18n() {
  const context = useContext(I18nContext)
  if (!context) {
    throw new Error("useI18n must be used within an I18nProvider")
  }
  return context
}

export function LanguageSwitcher() {
  const { locale, setLocale } = useI18n()
  
  const languages: { code: Locale; label: string }[] = [
    { code: "es", label: "ES" },
    { code: "pt", label: "PT" },
    { code: "en", label: "EN" },
  ]

  return (
    <div className="flex items-center gap-1 bg-white/10 rounded-full p-1">
      {languages.map((lang) => (
        <button
          key={lang.code}
          onClick={() => setLocale(lang.code)}
          className={`px-3 py-1.5 text-xs font-medium rounded-full transition-all duration-200 ${
            locale === lang.code
              ? "bg-white text-[#0B0B0B]"
              : "text-white/70 hover:text-white hover:bg-white/10"
          }`}
        >
          {lang.label}
        </button>
      ))}
    </div>
  )
}
