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
    "hero.headline": "Viajes Premium en Mendoza — Ski, Vino y Experiencias Todo en Uno",
    "hero.subheadline": "Transporte oficial a Las Leñas. Integramos logística y experiencias para agencias y viajeros internacionales.",
    "hero.trust1": "30+ años de experiencia (empresa familiar)",
    "hero.trust2": "Proveedor oficial de transporte al Valle de Las Leñas",
    "hero.cta.primary": "Recibí tu propuesta en minutos",
    "hero.cta.secondary": "Hablar por WhatsApp",

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
    "products.transfers.subtitle": "TU PUERTA DE ENTRADA",
    "products.transfers.description": "Tu puerta de entrada a una experiencia completa en Mendoza.",
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
    "b2b.subtitle": "Nos convertimos en tu equipo local en Mendoza",
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
    "contact.subtitle": "Recibí tu propuesta en minutos por WhatsApp",
    "contact.form.name": "Nombre completo",
    "contact.form.email": "Email",
    "contact.form.phone": "Teléfono (WhatsApp)",
    "contact.form.country": "País",
    "contact.form.arrivalDate": "Fecha de llegada",
    "contact.form.departureDate": "Fecha de regreso (opcional)",
    "contact.form.passengers": "Cantidad de pasajeros",
    "contact.form.interest": "Me interesa...",
    "contact.form.interest.ski": "Ski en Las Leñas",
    "contact.form.interest.experience": "Experiencia Mendoza (vino + montaña)",
    "contact.form.interest.transfer": "Solo Transfer",
    "contact.form.interest.agency": "Soy Agencia de Viajes",
    "contact.form.message": "Detalles adicionales",
    "contact.form.messagePlaceholder": "Contanos sobre tus planes de viaje...",
    "contact.form.submit": "Enviar consulta",
    "contact.whatsapp.title": "Respuesta Inmediata",
    "contact.whatsapp.description": "Recibí tu propuesta en minutos por WhatsApp",
    "contact.whatsapp.cta": "Chatear ahora",

    // Testimonials
    "testimonials.title": "Lo Que Dicen Nuestros Clientes",
    "testimonials.subtitle": "+5000 pasajeros por temporada",
    "testimonials.items": [
      {
        "text": "Excelente servicio. Nos coordinaron todo el viaje a Las Leñas sin ningún problema. 100% recomendado.",
        "author": "María González",
        "role": "Viajera desde Brasil"
      },
      {
        "text": "Trabajamos con XUMA hace 3 temporadas. Son nuestro equipo local en Mendoza, siempre confiables.",
        "author": "Carlos Pereira",
        "role": "Agencia de Viajes - São Paulo"
      },
      {
        "text": "La atención personalizada marca la diferencia. Saben exactamente lo que necesitamos.",
        "author": "Ana Rodríguez",
        "role": "Tour Operator - Chile"
      }
    ],

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
        "answer": "Nuestros paquetes incluyen traslados desde Mendoza y San Rafael, alojamiento en Las Leñas, ski pass, y coordinación completa del viaje. Podemos personalizar cada paquete según tus necesidades."
      },
      {
        "question": "¿Trabajan con agencias de viaje?",
        "answer": "Sí, somos socios de agencias de todo el mundo. Ofrecemos tarifas especiales, respuesta rápida, y flexibilidad operativa para grupos de cualquier tamaño."
      },
      {
        "question": "¿Cuánto dura el viaje a Las Leñas?",
        "answer": "Desde Mendoza a Las Leñas son entre 4 y 5 horas de viaje. Desde San Rafael a Las Leñas el viaje es más corto, entre 2:30 y 3 horas. Nuestros vehículos son cómodos y seguros, con conductores expertos en la ruta de montaña."
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

    // Las Lenas Page
    "lasLenasPage.badge": "+500 Transfers a Las Leñas en 2024",
    "lasLenasPage.hero.title1": "Traslados Privados",
    "lasLenasPage.hero.title2": "a Las Leñas",
    "lasLenasPage.hero.subtitle": "Viajes seguros, directos y con horarios a tu medida desde Mendoza y San Rafael",
    "lasLenasPage.hero.trust1": "Servicio puerta a puerta",
    "lasLenasPage.hero.trust2": "Camino de montaña con choferes profesionales",
    "lasLenasPage.hero.trust3": "Vehículos habilitados",
    "lasLenasPage.hero.cta1": "Cotizar mi Traslado",
    "lasLenasPage.hero.cta2": "Consultar Disponibilidad",
    "lasLenasPage.hero.response": "Te respondemos en menos de 30 minutos",

    // Trust Stats
    "lasLenasPage.trust.transfers": "Transfers realizados",
    "lasLenasPage.trust.safe": "Llegadas seguras",
    "lasLenasPage.trust.service": "Servicio disponible",
    "lasLenasPage.trust.satisfaction": "Clientes satisfechos",

    // Quote Form
    "lasLenasPage.form.badge": "Cotizador de Traslados",
    "lasLenasPage.form.title": "Cotiza tu Traslado en Minutos",
    "lasLenasPage.form.subtitle": "Completa el formulario y te enviaremos la cotización por WhatsApp al instante.",
    "lasLenasPage.form.step1": "Tipo de Servicio",
    "lasLenasPage.form.private": "Privado",
    "lasLenasPage.form.privateDesc": "Todos los días, horario a elección, puerta a puerta",
    "lasLenasPage.form.shared": "Compartido",
    "lasLenasPage.form.sharedDesc": "Solo San Rafael, sábados y lunes, por butaca",
    "lasLenasPage.form.step2": "Vehículo y Pasajeros",
    "lasLenasPage.form.vehicleType": "Tipo de vehículo",
    "lasLenasPage.form.passengers": "Cantidad de pasajeros",
    "lasLenasPage.form.passenger": "pasajero",
    "lasLenasPage.form.passengersPlural": "pasajeros",
    "lasLenasPage.form.vehicle.auto": "Auto (4 pax con poco equipaje)",
    "lasLenasPage.form.vehicle.pickup": "Camioneta (4 pax c/eq deportivo)",
    "lasLenasPage.form.vehicle.minibus9": "Minibus 9 pax",
    "lasLenasPage.form.vehicle.minibus14": "Minibus 14 pax",
    "lasLenasPage.form.vehicle.group": "Grupo grande (consultar)",
    "lasLenasPage.form.step3": "Origen y Destino",
    "lasLenasPage.form.origin": "Origen",
    "lasLenasPage.form.destination": "Destino",
    "lasLenasPage.form.sharedNote": "Servicio compartido solo disponible desde San Rafael",
    "lasLenasPage.form.otherDestination": "Otro (especificar)",
    "lasLenasPage.form.specifyDestination": "Especifica el destino...",
    "lasLenasPage.form.step4": "Fechas de Viaje",
    "lasLenasPage.form.roundTrip": "Ida y vuelta",
    "lasLenasPage.form.roundTripDesc": "Activa esta opción si necesitas regreso",
    "lasLenasPage.form.departureDate": "Fecha de ida",
    "lasLenasPage.form.returnDate": "Fecha de regreso",
    "lasLenasPage.form.selectDate": "Selecciona fecha",
    "lasLenasPage.form.step5": "Datos de Contacto",
    "lasLenasPage.form.fullName": "Nombre completo",
    "lasLenasPage.form.fullNamePlaceholder": "Tu nombre completo",
    "lasLenasPage.form.email": "Email",
    "lasLenasPage.form.emailPlaceholder": "tu@email.com",
    "lasLenasPage.form.whatsapp": "WhatsApp",
    "lasLenasPage.form.whatsappPlaceholder": "+54 9 11 1234-5678",
    "lasLenasPage.form.submit": "Enviar Cotización por WhatsApp",
    "lasLenasPage.form.submitting": "Abriendo WhatsApp...",
    "lasLenasPage.form.responseTime": "Te respondemos en menos de 30 minutos",
    "lasLenasPage.form.quickCoordination": "Coordinación rápida por WhatsApp",
    "lasLenasPage.form.noCommitment": "Sin compromiso",
    "lasLenasPage.form.immediateResponse": "Respuesta inmediata",
    "lasLenasPage.form.freeQuote": "Cotización sin costo",

    // WhatsApp Message
    "lasLenasPage.whatsapp.greeting": "Hola, quiero solicitar una cotización de traslado a Las Leñas:",
    "lasLenasPage.whatsapp.serviceType": "Tipo de servicio",
    "lasLenasPage.whatsapp.vehicle": "Vehículo",
    "lasLenasPage.whatsapp.passengersCount": "Cantidad de pasajeros",
    "lasLenasPage.whatsapp.origin": "Origen",
    "lasLenasPage.whatsapp.destination": "Destino",
    "lasLenasPage.whatsapp.departureDate": "Fecha de ida",
    "lasLenasPage.whatsapp.returnDate": "Fecha de regreso",
    "lasLenasPage.whatsapp.notSpecified": "No especificada",
    "lasLenasPage.whatsapp.notApplicable": "No aplica",
    "lasLenasPage.whatsapp.myName": "Mi nombre es",

    // Services
    "lasLenasPage.services.badge": "Opciones de Servicio",
    "lasLenasPage.services.title": "Elige el Traslado que Necesitas",
    "lasLenasPage.services.subtitle": "Ofrecemos distintos tipos de servicios y vehículos para adaptarnos a tus necesidades. Conductores expertos y la tranquilidad de viajar con profesionales.",
    "lasLenasPage.services.private.title": "Transfer Privado",
    "lasLenasPage.services.private.availability": "Todos los días",
    "lasLenasPage.services.private.schedule": "Horario a tu elección",
    "lasLenasPage.services.private.routes": "Rutas disponibles:",
    "lasLenasPage.services.private.features": ["Vehículo exclusivo para tu grupo", "Pickup en hotel, aeropuerto o dirección", "Horarios 100% a tu elección", "Conductores expertos en montaña", "Cadenas y equipamiento incluido", "Espacio amplio para equipaje de ski", "Paradas en ruta si las necesitas"],
    "lasLenasPage.services.shared.title": "Transfer Compartido",
    "lasLenasPage.services.shared.availability": "Sábados y Lunes",
    "lasLenasPage.services.shared.schedule": "Horarios fijos de salida",
    "lasLenasPage.services.shared.features": ["Servicio por butaca", "Puntos de encuentro en San Rafael", "Equipamiento de seguridad incluido", "Espacio para equipaje de ski", "Ideal para viajeros solos o parejas", "Sujeto a disponibilidad"],
    "lasLenasPage.services.mostPopular": "Más Popular",
    "lasLenasPage.services.quote": "Cotizar mi Traslado",
    "lasLenasPage.services.checkAvailability": "Consultar Disponibilidad",
    "lasLenasPage.services.vehicleTypes": "Tipos de Vehículos",
    "lasLenasPage.services.vehicleTypesDesc": "Contamos con diferentes tipos de vehículos para adaptarnos a tu grupo y equipaje.",
    "lasLenasPage.services.customQuote": "Solicitar Cotización Personalizada",
    "lasLenasPage.services.customNote": "Consulta por grupos grandes o servicios personalizados",

    // Why Us
    "lasLenasPage.whyUs.badge": "Sobre Nosotros",
    "lasLenasPage.whyUs.title": "Operadores en Mendoza, Especialistas en Las Leñas",
    "lasLenasPage.whyUs.description": "Somos un equipo local con años de experiencia en logística de montaña. Conocemos cada kilómetro del camino a Las Leñas y nos especializamos en brindar traslados seguros, puntuales y confortables.",
    "lasLenasPage.whyUs.quote": "Viví Mendoza sin preocuparte por nada. Nosotros coordinamos todo.",
    "lasLenasPage.whyUs.differentials": "Nuestros Diferenciales",
    "lasLenasPage.whyUs.differentialsTitle": "Por Qué Somos la Mejor Opción",
    "lasLenasPage.whyUs.diff1.title": "Transporte Oficial a Las Leñas",
    "lasLenasPage.whyUs.diff1.desc": "Operador autorizado con todos los permisos y habilitaciones al día.",
    "lasLenasPage.whyUs.diff2.title": "Choferes Profesionales",
    "lasLenasPage.whyUs.diff2.desc": "Conductores expertos con más de 10 años en rutas de montaña.",
    "lasLenasPage.whyUs.diff3.title": "Vehículos Habilitados",
    "lasLenasPage.whyUs.diff3.desc": "Flota completa con seguros, VTV y equipamiento de seguridad.",
    "lasLenasPage.whyUs.diff4.title": "Experiencia en Montaña",
    "lasLenasPage.whyUs.diff4.desc": "Conocemos cada curva del camino. Viaja tranquilo.",
    "lasLenasPage.whyUs.stats.trips": "Viajes/Temporada",
    "lasLenasPage.whyUs.stats.exp": "Años Exp.",
    "lasLenasPage.whyUs.stats.satisfaction": "Satisfacción",

    // Route Info
    "lasLenasPage.route.badge": "Información del viaje",
    "lasLenasPage.route.title": "Todo lo que necesitas saber",
    "lasLenasPage.route.duration": "Duración del viaje",
    "lasLenasPage.route.fromSanRafael": "Desde San Rafael",
    "lasLenasPage.route.fromMendoza": "Desde Mendoza",
    "lasLenasPage.route.roadType": "Tipo de camino",
    "lasLenasPage.route.mountainRoad": "Ruta de montaña",
    "lasLenasPage.route.asphaltGravel": "Asfalto + ripio",
    "lasLenasPage.route.conditions": "Condiciones",
    "lasLenasPage.route.snowWinter": "Nieve en invierno",
    "lasLenasPage.route.schedules": "Horarios",
    "lasLenasPage.route.private": "Privado",
    "lasLenasPage.route.passengerChoice": "A elección del pasajero",
    "lasLenasPage.route.shared": "Compartido",
    "lasLenasPage.route.satMon": "Sábados y Lunes",
    "lasLenasPage.route.serviceType": "Tipo de servicio",
    "lasLenasPage.route.exclusive": "100% exclusivo",
    "lasLenasPage.route.byAvailability": "Según disponibilidad",

    // Testimonials
    "lasLenasPage.testimonials.badge": "Testimonios",
    "lasLenasPage.testimonials.title": "Lo Que Dicen Nuestros Pasajeros",
    "lasLenasPage.testimonials.subtitle": "Más de 500 viajeros ya confiaron en nosotros para llegar a Las Leñas. Esto es lo que opinan de su experiencia.",

    // CTA Section
    "lasLenasPage.cta.title": "¿Listo para Reservar tu Traslado?",
    "lasLenasPage.cta.subtitle": "Completa el formulario y recibe tu cotización por WhatsApp en minutos.",
    "lasLenasPage.cta.quote": "Cotizar mi Traslado",
    "lasLenasPage.cta.check": "Consultar Disponibilidad",
    "lasLenasPage.cta.response": "Respuesta en menos de 30 min",
    "lasLenasPage.cta.noCommitment": "Sin compromiso",

    // FAQ
    "lasLenasPage.faq.badge": "Preguntas Frecuentes",
    "lasLenasPage.faq.title": "¿Tienes Dudas?",
    "lasLenasPage.faq.subtitle": "Aquí respondemos las preguntas más comunes sobre nuestro servicio de transfers a Las Leñas.",

    // Contact
    "lasLenasPage.contact.badge": "Contacto Directo",
    "lasLenasPage.contact.title": "¿Listo para Viajar a Las Leñas?",
    "lasLenasPage.contact.subtitle": "Contactanos por WhatsApp y reserva tu transfer en minutos. Respondemos rápido y te confirmamos disponibilidad al instante.",
    "lasLenasPage.contact.quote": "Cotizar mi Traslado",
    "lasLenasPage.contact.check": "Consultar Disponibilidad",
    "lasLenasPage.contact.phone": "WhatsApp",
    "lasLenasPage.contact.email": "Email",
    "lasLenasPage.contact.hours": "Horario",
    "lasLenasPage.contact.hoursValue": "Lunes a Domingo, 8-22hs",
    "lasLenasPage.contact.trustNote": "Sin compromisos. Consulta sin costo y reserva solo cuando estés seguro.",

    // Footer
    "lasLenasPage.footer.description": "Transfers privados y seguros a Las Leñas. Vehículos equipados para montaña y conductores expertos.",
    "lasLenasPage.footer.links": "Enlaces",
    "lasLenasPage.footer.contact": "Contacto",
    "lasLenasPage.footer.backToHome": "Volver a XUMA Travel",
    "lasLenasPage.footer.rights": "Todos los derechos reservados.",

    // Header
    "lasLenasPage.header.quote": "Cotizar",
    "lasLenasPage.header.services": "Servicios",
    "lasLenasPage.header.whyUs": "Por Qué Nosotros",
    "lasLenasPage.header.testimonials": "Testimonios",
    "lasLenasPage.header.contact": "Contacto",
    "lasLenasPage.header.bookNow": "Reservar Ahora",
    "lasLenasPage.header.whatsappMsg": "Hola! Me interesa reservar un transfer a Las Leñas",
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
    "hero.headline": "Viagens Premium em Mendoza — Ski, Vinho e Experiências Tudo em Um",
    "hero.subheadline": "Transporte oficial para Las Leñas. Integramos logística e experiências para agências e viajantes internacionais.",
    "hero.trust1": "30+ anos de experiência (empresa familiar)",
    "hero.trust2": "Fornecedor oficial de transporte para o Vale de Las Leñas",
    "hero.cta.primary": "Receba sua proposta em minutos",
    "hero.cta.secondary": "Falar no WhatsApp",

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
    "products.transfers.subtitle": "SUA PORTA DE ENTRADA",
    "products.transfers.description": "Sua porta de entrada para uma experiência completa em Mendoza.",
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
    "b2b.subtitle": "Somos sua equipe local em Mendoza",
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
    "contact.subtitle": "Receba sua proposta em minutos pelo WhatsApp",
    "contact.form.name": "Nome completo",
    "contact.form.email": "Email",
    "contact.form.phone": "Telefone (WhatsApp)",
    "contact.form.country": "País",
    "contact.form.arrivalDate": "Data de chegada",
    "contact.form.departureDate": "Data de retorno (opcional)",
    "contact.form.passengers": "Quantidade de passageiros",
    "contact.form.interest": "Tenho interesse em...",
    "contact.form.interest.ski": "Ski em Las Leñas",
    "contact.form.interest.experience": "Experiência Mendoza (vinho + montanha)",
    "contact.form.interest.transfer": "Apenas Transfer",
    "contact.form.interest.agency": "Sou Agência de Viagem",
    "contact.form.message": "Detalhes adicionais",
    "contact.form.messagePlaceholder": "Conte-nos sobre seus planos de viagem...",
    "contact.form.submit": "Enviar consulta",
    "contact.whatsapp.title": "Resposta Imediata",
    "contact.whatsapp.description": "Receba sua proposta em minutos pelo WhatsApp",
    "contact.whatsapp.cta": "Conversar agora",

    // Testimonials
    "testimonials.title": "O Que Nossos Clientes Dizem",
    "testimonials.subtitle": "+5000 passageiros por temporada",
    "testimonials.items": [
      {
        "text": "Serviço excelente. Coordenaram toda nossa viagem a Las Leñas sem nenhum problema. 100% recomendado.",
        "author": "Maria González",
        "role": "Viajante do Brasil"
      },
      {
        "text": "Trabalhamos com a XUMA há 3 temporadas. São nossa equipe local em Mendoza, sempre confiáveis.",
        "author": "Carlos Pereira",
        "role": "Agência de Viagens - São Paulo"
      },
      {
        "text": "O atendimento personalizado faz toda a diferença. Sabem exatamente o que precisamos.",
        "author": "Ana Rodríguez",
        "role": "Tour Operator - Chile"
      }
    ],

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
        "answer": "Nossos pacotes incluem traslados desde Mendoza e San Rafael, hospedagem em Las Leñas, ski pass, e coordenação completa da viagem. Podemos personalizar cada pacote de acordo com suas necessidades."
      },
      {
        "question": "Vocês trabalham com agências de viagem?",
        "answer": "Sim, somos parceiros de agências de todo o mundo. Oferecemos tarifas especiais, resposta rápida, e flexibilidade operacional para grupos de qualquer tamanho."
      },
      {
        "question": "Quanto tempo dura a viagem até Las Leñas?",
        "answer": "De Mendoza a Las Leñas são entre 4 e 5 horas de viagem. De San Rafael a Las Leñas a viagem é mais curta, entre 2:30 e 3 horas. Nossos veículos são confortáveis e seguros, com motoristas experientes na rota de montanha."
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

    // Las Lenas Page
    "lasLenasPage.badge": "+500 Transfers para Las Leñas em 2024",
    "lasLenasPage.hero.title1": "Transfers Privados",
    "lasLenasPage.hero.title2": "para Las Leñas",
    "lasLenasPage.hero.subtitle": "Viagens seguras, diretas e com horários à sua escolha de Mendoza e San Rafael",
    "lasLenasPage.hero.trust1": "Serviço porta a porta",
    "lasLenasPage.hero.trust2": "Estrada de montanha com motoristas profissionais",
    "lasLenasPage.hero.trust3": "Veículos habilitados",
    "lasLenasPage.hero.cta1": "Cotar meu Transfer",
    "lasLenasPage.hero.cta2": "Verificar Disponibilidade",
    "lasLenasPage.hero.response": "Respondemos em menos de 30 minutos",

    // Trust Stats
    "lasLenasPage.trust.transfers": "Transfers realizados",
    "lasLenasPage.trust.safe": "Chegadas seguras",
    "lasLenasPage.trust.service": "Serviço disponível",
    "lasLenasPage.trust.satisfaction": "Clientes satisfeitos",

    // Quote Form
    "lasLenasPage.form.badge": "Cotador de Transfers",
    "lasLenasPage.form.title": "Cote seu Transfer em Minutos",
    "lasLenasPage.form.subtitle": "Preencha o formulário e enviaremos a cotação por WhatsApp instantaneamente.",
    "lasLenasPage.form.step1": "Tipo de Serviço",
    "lasLenasPage.form.private": "Privado",
    "lasLenasPage.form.privateDesc": "Todos os dias, horário à escolha, porta a porta",
    "lasLenasPage.form.shared": "Compartilhado",
    "lasLenasPage.form.sharedDesc": "Apenas San Rafael, sábados e segundas, por assento",
    "lasLenasPage.form.step2": "Veículo e Passageiros",
    "lasLenasPage.form.vehicleType": "Tipo de veículo",
    "lasLenasPage.form.passengers": "Quantidade de passageiros",
    "lasLenasPage.form.passenger": "passageiro",
    "lasLenasPage.form.passengersPlural": "passageiros",
    "lasLenasPage.form.vehicle.auto": "Carro (4 pax com pouca bagagem)",
    "lasLenasPage.form.vehicle.pickup": "Pickup (4 pax c/eq esportivo)",
    "lasLenasPage.form.vehicle.minibus9": "Minibus 9 pax",
    "lasLenasPage.form.vehicle.minibus14": "Minibus 14 pax",
    "lasLenasPage.form.vehicle.group": "Grupo grande (consultar)",
    "lasLenasPage.form.step3": "Origem e Destino",
    "lasLenasPage.form.origin": "Origem",
    "lasLenasPage.form.destination": "Destino",
    "lasLenasPage.form.sharedNote": "Serviço compartilhado apenas disponível de San Rafael",
    "lasLenasPage.form.otherDestination": "Outro (especificar)",
    "lasLenasPage.form.specifyDestination": "Especifique o destino...",
    "lasLenasPage.form.step4": "Datas da Viagem",
    "lasLenasPage.form.roundTrip": "Ida e volta",
    "lasLenasPage.form.roundTripDesc": "Ative esta opção se precisar de retorno",
    "lasLenasPage.form.departureDate": "Data de ida",
    "lasLenasPage.form.returnDate": "Data de retorno",
    "lasLenasPage.form.selectDate": "Selecione a data",
    "lasLenasPage.form.step5": "Dados de Contato",
    "lasLenasPage.form.fullName": "Nome completo",
    "lasLenasPage.form.fullNamePlaceholder": "Seu nome completo",
    "lasLenasPage.form.email": "Email",
    "lasLenasPage.form.emailPlaceholder": "seu@email.com",
    "lasLenasPage.form.whatsapp": "WhatsApp",
    "lasLenasPage.form.whatsappPlaceholder": "+55 11 91234-5678",
    "lasLenasPage.form.submit": "Enviar Cotação por WhatsApp",
    "lasLenasPage.form.submitting": "Abrindo WhatsApp...",
    "lasLenasPage.form.responseTime": "Respondemos em menos de 30 minutos",
    "lasLenasPage.form.quickCoordination": "Coordenação rápida por WhatsApp",
    "lasLenasPage.form.noCommitment": "Sem compromisso",
    "lasLenasPage.form.immediateResponse": "Resposta imediata",
    "lasLenasPage.form.freeQuote": "Cotação gratuita",

    // WhatsApp Message
    "lasLenasPage.whatsapp.greeting": "Olá, quero solicitar uma cotação de transfer para Las Leñas:",
    "lasLenasPage.whatsapp.serviceType": "Tipo de serviço",
    "lasLenasPage.whatsapp.vehicle": "Veículo",
    "lasLenasPage.whatsapp.passengersCount": "Quantidade de passageiros",
    "lasLenasPage.whatsapp.origin": "Origem",
    "lasLenasPage.whatsapp.destination": "Destino",
    "lasLenasPage.whatsapp.departureDate": "Data de ida",
    "lasLenasPage.whatsapp.returnDate": "Data de retorno",
    "lasLenasPage.whatsapp.notSpecified": "Não especificada",
    "lasLenasPage.whatsapp.notApplicable": "Não se aplica",
    "lasLenasPage.whatsapp.myName": "Meu nome é",

    // Services
    "lasLenasPage.services.badge": "Opções de Serviço",
    "lasLenasPage.services.title": "Escolha o Transfer que Você Precisa",
    "lasLenasPage.services.subtitle": "Oferecemos diferentes tipos de serviços e veículos para atender às suas necessidades. Motoristas experientes e a tranquilidade de viajar com profissionais.",
    "lasLenasPage.services.private.title": "Transfer Privado",
    "lasLenasPage.services.private.availability": "Todos os dias",
    "lasLenasPage.services.private.schedule": "Horário à sua escolha",
    "lasLenasPage.services.private.routes": "Rotas disponíveis:",
    "lasLenasPage.services.private.features": ["Veículo exclusivo para seu grupo", "Pickup no hotel, aeroporto ou endereço", "Horários 100% à sua escolha", "Motoristas experientes em montanha", "Correntes e equipamento incluídos", "Espaço amplo para equipamento de ski", "Paradas na rota se precisar"],
    "lasLenasPage.services.shared.title": "Transfer Compartilhado",
    "lasLenasPage.services.shared.availability": "Sábados e Segundas",
    "lasLenasPage.services.shared.schedule": "Horários fixos de saída",
    "lasLenasPage.services.shared.features": ["Serviço por assento", "Pontos de encontro em San Rafael", "Equipamento de segurança incluído", "Espaço para equipamento de ski", "Ideal para viajantes solo ou casais", "Sujeito a disponibilidade"],
    "lasLenasPage.services.mostPopular": "Mais Popular",
    "lasLenasPage.services.quote": "Cotar meu Transfer",
    "lasLenasPage.services.checkAvailability": "Verificar Disponibilidade",
    "lasLenasPage.services.vehicleTypes": "Tipos de Veículos",
    "lasLenasPage.services.vehicleTypesDesc": "Temos diferentes tipos de veículos para atender seu grupo e bagagem.",
    "lasLenasPage.services.customQuote": "Solicitar Cotação Personalizada",
    "lasLenasPage.services.customNote": "Consulte para grupos grandes ou serviços personalizados",

    // Why Us
    "lasLenasPage.whyUs.badge": "Sobre Nós",
    "lasLenasPage.whyUs.title": "Operadores em Mendoza, Especialistas em Las Leñas",
    "lasLenasPage.whyUs.description": "Somos uma equipe local com anos de experiência em logística de montanha. Conhecemos cada quilômetro do caminho para Las Leñas e nos especializamos em oferecer transfers seguros, pontuais e confortáveis.",
    "lasLenasPage.whyUs.quote": "Viva Mendoza sem se preocupar com nada. Nós coordenamos tudo.",
    "lasLenasPage.whyUs.differentials": "Nossos Diferenciais",
    "lasLenasPage.whyUs.differentialsTitle": "Por Que Somos a Melhor Opção",
    "lasLenasPage.whyUs.diff1.title": "Transporte Oficial para Las Leñas",
    "lasLenasPage.whyUs.diff1.desc": "Operador autorizado com todas as licenças e habilitações em dia.",
    "lasLenasPage.whyUs.diff2.title": "Motoristas Profissionais",
    "lasLenasPage.whyUs.diff2.desc": "Motoristas experientes com mais de 10 anos em rotas de montanha.",
    "lasLenasPage.whyUs.diff3.title": "Veículos Habilitados",
    "lasLenasPage.whyUs.diff3.desc": "Frota completa com seguros, inspeção e equipamento de segurança.",
    "lasLenasPage.whyUs.diff4.title": "Experiência em Montanha",
    "lasLenasPage.whyUs.diff4.desc": "Conhecemos cada curva do caminho. Viaje tranquilo.",
    "lasLenasPage.whyUs.stats.trips": "Viagens/Temporada",
    "lasLenasPage.whyUs.stats.exp": "Anos Exp.",
    "lasLenasPage.whyUs.stats.satisfaction": "Satisfação",

    // Route Info
    "lasLenasPage.route.badge": "Informação da viagem",
    "lasLenasPage.route.title": "Tudo o que você precisa saber",
    "lasLenasPage.route.duration": "Duração da viagem",
    "lasLenasPage.route.fromSanRafael": "De San Rafael",
    "lasLenasPage.route.fromMendoza": "De Mendoza",
    "lasLenasPage.route.roadType": "Tipo de estrada",
    "lasLenasPage.route.mountainRoad": "Rota de montanha",
    "lasLenasPage.route.asphaltGravel": "Asfalto + cascalho",
    "lasLenasPage.route.conditions": "Condições",
    "lasLenasPage.route.snowWinter": "Neve no inverno",
    "lasLenasPage.route.schedules": "Horários",
    "lasLenasPage.route.private": "Privado",
    "lasLenasPage.route.passengerChoice": "À escolha do passageiro",
    "lasLenasPage.route.shared": "Compartilhado",
    "lasLenasPage.route.satMon": "Sábados e Segundas",
    "lasLenasPage.route.serviceType": "Tipo de serviço",
    "lasLenasPage.route.exclusive": "100% exclusivo",
    "lasLenasPage.route.byAvailability": "Conforme disponibilidade",

    // Testimonials
    "lasLenasPage.testimonials.badge": "Depoimentos",
    "lasLenasPage.testimonials.title": "O Que Nossos Passageiros Dizem",
    "lasLenasPage.testimonials.subtitle": "Mais de 500 viajantes já confiaram em nós para chegar a Las Leñas. Isso é o que eles acham da experiência.",

    // CTA Section
    "lasLenasPage.cta.title": "Pronto para Reservar seu Transfer?",
    "lasLenasPage.cta.subtitle": "Preencha o formulário e receba sua cotação por WhatsApp em minutos.",
    "lasLenasPage.cta.quote": "Cotar meu Transfer",
    "lasLenasPage.cta.check": "Verificar Disponibilidade",
    "lasLenasPage.cta.response": "Resposta em menos de 30 min",
    "lasLenasPage.cta.noCommitment": "Sem compromisso",

    // FAQ
    "lasLenasPage.faq.badge": "Perguntas Frequentes",
    "lasLenasPage.faq.title": "Tem Dúvidas?",
    "lasLenasPage.faq.subtitle": "Aqui respondemos as perguntas mais comuns sobre nosso serviço de transfers para Las Leñas.",

    // Contact
    "lasLenasPage.contact.badge": "Contato Direto",
    "lasLenasPage.contact.title": "Pronto para Viajar para Las Leñas?",
    "lasLenasPage.contact.subtitle": "Entre em contato conosco pelo WhatsApp e reserve seu transfer em minutos. Respondemos rápido e confirmamos disponibilidade na hora.",
    "lasLenasPage.contact.quote": "Cotar meu Transfer",
    "lasLenasPage.contact.check": "Verificar Disponibilidade",
    "lasLenasPage.contact.phone": "WhatsApp",
    "lasLenasPage.contact.email": "Email",
    "lasLenasPage.contact.hours": "Horário",
    "lasLenasPage.contact.hoursValue": "Segunda a Domingo, 8-22hs",
    "lasLenasPage.contact.trustNote": "Sem compromisso. Consulta gratuita e reserve apenas quando tiver certeza.",

    // Footer
    "lasLenasPage.footer.description": "Transfers privados e seguros para Las Leñas. Veículos equipados para montanha e motoristas experientes.",
    "lasLenasPage.footer.links": "Links",
    "lasLenasPage.footer.contact": "Contato",
    "lasLenasPage.footer.backToHome": "Voltar para XUMA Travel",
    "lasLenasPage.footer.rights": "Todos os direitos reservados.",

    // Header
    "lasLenasPage.header.quote": "Cotar",
    "lasLenasPage.header.services": "Serviços",
    "lasLenasPage.header.whyUs": "Por Que Nós",
    "lasLenasPage.header.testimonials": "Depoimentos",
    "lasLenasPage.header.contact": "Contato",
    "lasLenasPage.header.bookNow": "Reservar Agora",
    "lasLenasPage.header.whatsappMsg": "Olá! Tenho interesse em reservar um transfer para Las Leñas",
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
    "hero.headline": "Premium Travel in Mendoza — Ski, Wine & Experiences All in One",
    "hero.subheadline": "Official transportation to Las Leñas. We integrate logistics and experiences for agencies and international travelers.",
    "hero.trust1": "30+ years of experience (family business)",
    "hero.trust2": "Official transportation provider to Valle de Las Leñas",
    "hero.cta.primary": "Get your proposal in minutes",
    "hero.cta.secondary": "Chat on WhatsApp",

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
    "products.transfers.subtitle": "YOUR GATEWAY",
    "products.transfers.description": "Your gateway to a complete Mendoza experience.",
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
    "b2b.subtitle": "We become your local team in Mendoza",
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
    "contact.subtitle": "Get your proposal in minutes via WhatsApp",
    "contact.form.name": "Full name",
    "contact.form.email": "Email",
    "contact.form.phone": "Phone (WhatsApp)",
    "contact.form.country": "Country",
    "contact.form.arrivalDate": "Arrival date",
    "contact.form.departureDate": "Return date (optional)",
    "contact.form.passengers": "Number of passengers",
    "contact.form.interest": "I'm interested in...",
    "contact.form.interest.ski": "Ski in Las Leñas",
    "contact.form.interest.experience": "Mendoza Experience (wine + mountain)",
    "contact.form.interest.transfer": "Transfer Only",
    "contact.form.interest.agency": "I'm a Travel Agency",
    "contact.form.message": "Additional details",
    "contact.form.messagePlaceholder": "Tell us about your travel plans...",
    "contact.form.submit": "Send inquiry",
    "contact.whatsapp.title": "Immediate Response",
    "contact.whatsapp.description": "Get your proposal in minutes via WhatsApp",
    "contact.whatsapp.cta": "Chat now",

    // Testimonials
    "testimonials.title": "What Our Clients Say",
    "testimonials.subtitle": "+5000 passengers per season",
    "testimonials.items": [
      {
        "text": "Excellent service. They coordinated our entire trip to Las Leñas without any issues. 100% recommended.",
        "author": "María González",
        "role": "Traveler from Brazil"
      },
      {
        "text": "We've worked with XUMA for 3 seasons. They're our local team in Mendoza, always reliable.",
        "author": "Carlos Pereira",
        "role": "Travel Agency - São Paulo"
      },
      {
        "text": "The personalized attention makes all the difference. They know exactly what we need.",
        "author": "Ana Rodríguez",
        "role": "Tour Operator - Chile"
      }
    ],

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
        "answer": "Our packages include transfers from Mendoza and San Rafael, accommodation in Las Leñas, ski pass, and complete trip coordination. We can customize each package to your needs."
      },
      {
        "question": "Do you work with travel agencies?",
        "answer": "Yes, we partner with agencies worldwide. We offer special rates, fast response, and operational flexibility for groups of any size."
      },
      {
        "question": "How long is the trip to Las Leñas?",
        "answer": "From Mendoza to Las Leñas it takes between 4 and 5 hours. From San Rafael to Las Leñas the trip is shorter, between 2:30 and 3 hours. Our vehicles are comfortable and safe, with drivers experienced in mountain routes."
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

    // Las Lenas Page
    "lasLenasPage.badge": "+500 Transfers to Las Leñas in 2024",
    "lasLenasPage.hero.title1": "Private Transfers",
    "lasLenasPage.hero.title2": "to Las Leñas",
    "lasLenasPage.hero.subtitle": "Safe, direct trips with schedules tailored to you from Mendoza and San Rafael",
    "lasLenasPage.hero.trust1": "Door-to-door service",
    "lasLenasPage.hero.trust2": "Mountain road with professional drivers",
    "lasLenasPage.hero.trust3": "Licensed vehicles",
    "lasLenasPage.hero.cta1": "Quote my Transfer",
    "lasLenasPage.hero.cta2": "Check Availability",
    "lasLenasPage.hero.response": "We respond in less than 30 minutes",

    // Trust Stats
    "lasLenasPage.trust.transfers": "Transfers completed",
    "lasLenasPage.trust.safe": "Safe arrivals",
    "lasLenasPage.trust.service": "Service available",
    "lasLenasPage.trust.satisfaction": "Satisfied customers",

    // Quote Form
    "lasLenasPage.form.badge": "Transfer Quote",
    "lasLenasPage.form.title": "Quote Your Transfer in Minutes",
    "lasLenasPage.form.subtitle": "Fill out the form and we'll send you the quote via WhatsApp instantly.",
    "lasLenasPage.form.step1": "Service Type",
    "lasLenasPage.form.private": "Private",
    "lasLenasPage.form.privateDesc": "Every day, schedule of your choice, door to door",
    "lasLenasPage.form.shared": "Shared",
    "lasLenasPage.form.sharedDesc": "San Rafael only, Saturdays and Mondays, per seat",
    "lasLenasPage.form.step2": "Vehicle and Passengers",
    "lasLenasPage.form.vehicleType": "Vehicle type",
    "lasLenasPage.form.passengers": "Number of passengers",
    "lasLenasPage.form.passenger": "passenger",
    "lasLenasPage.form.passengersPlural": "passengers",
    "lasLenasPage.form.vehicle.auto": "Car (4 pax with little luggage)",
    "lasLenasPage.form.vehicle.pickup": "Pickup (4 pax w/sports equipment)",
    "lasLenasPage.form.vehicle.minibus9": "Minibus 9 pax",
    "lasLenasPage.form.vehicle.minibus14": "Minibus 14 pax",
    "lasLenasPage.form.vehicle.group": "Large group (inquire)",
    "lasLenasPage.form.step3": "Origin and Destination",
    "lasLenasPage.form.origin": "Origin",
    "lasLenasPage.form.destination": "Destination",
    "lasLenasPage.form.sharedNote": "Shared service only available from San Rafael",
    "lasLenasPage.form.otherDestination": "Other (specify)",
    "lasLenasPage.form.specifyDestination": "Specify destination...",
    "lasLenasPage.form.step4": "Travel Dates",
    "lasLenasPage.form.roundTrip": "Round trip",
    "lasLenasPage.form.roundTripDesc": "Enable this option if you need return",
    "lasLenasPage.form.departureDate": "Departure date",
    "lasLenasPage.form.returnDate": "Return date",
    "lasLenasPage.form.selectDate": "Select date",
    "lasLenasPage.form.step5": "Contact Information",
    "lasLenasPage.form.fullName": "Full name",
    "lasLenasPage.form.fullNamePlaceholder": "Your full name",
    "lasLenasPage.form.email": "Email",
    "lasLenasPage.form.emailPlaceholder": "your@email.com",
    "lasLenasPage.form.whatsapp": "WhatsApp",
    "lasLenasPage.form.whatsappPlaceholder": "+1 555 123-4567",
    "lasLenasPage.form.submit": "Send Quote via WhatsApp",
    "lasLenasPage.form.submitting": "Opening WhatsApp...",
    "lasLenasPage.form.responseTime": "We respond in less than 30 minutes",
    "lasLenasPage.form.quickCoordination": "Quick coordination via WhatsApp",
    "lasLenasPage.form.noCommitment": "No commitment",
    "lasLenasPage.form.immediateResponse": "Immediate response",
    "lasLenasPage.form.freeQuote": "Free quote",

    // WhatsApp Message
    "lasLenasPage.whatsapp.greeting": "Hi, I would like to request a quote for a transfer to Las Leñas:",
    "lasLenasPage.whatsapp.serviceType": "Service type",
    "lasLenasPage.whatsapp.vehicle": "Vehicle",
    "lasLenasPage.whatsapp.passengersCount": "Number of passengers",
    "lasLenasPage.whatsapp.origin": "Origin",
    "lasLenasPage.whatsapp.destination": "Destination",
    "lasLenasPage.whatsapp.departureDate": "Departure date",
    "lasLenasPage.whatsapp.returnDate": "Return date",
    "lasLenasPage.whatsapp.notSpecified": "Not specified",
    "lasLenasPage.whatsapp.notApplicable": "Not applicable",
    "lasLenasPage.whatsapp.myName": "My name is",

    // Services
    "lasLenasPage.services.badge": "Service Options",
    "lasLenasPage.services.title": "Choose the Transfer You Need",
    "lasLenasPage.services.subtitle": "We offer different types of services and vehicles to fit your needs. Expert drivers and the peace of mind of traveling with professionals.",
    "lasLenasPage.services.private.title": "Private Transfer",
    "lasLenasPage.services.private.availability": "Every day",
    "lasLenasPage.services.private.schedule": "Schedule of your choice",
    "lasLenasPage.services.private.routes": "Available routes:",
    "lasLenasPage.services.private.features": ["Exclusive vehicle for your group", "Pickup at hotel, airport or address", "100% flexible schedules", "Mountain-experienced drivers", "Chains and equipment included", "Ample space for ski gear", "Route stops if needed"],
    "lasLenasPage.services.shared.title": "Shared Transfer",
    "lasLenasPage.services.shared.availability": "Saturdays and Mondays",
    "lasLenasPage.services.shared.schedule": "Fixed departure times",
    "lasLenasPage.services.shared.features": ["Per-seat service", "Meeting points in San Rafael", "Safety equipment included", "Space for ski gear", "Ideal for solo travelers or couples", "Subject to availability"],
    "lasLenasPage.services.mostPopular": "Most Popular",
    "lasLenasPage.services.quote": "Quote my Transfer",
    "lasLenasPage.services.checkAvailability": "Check Availability",
    "lasLenasPage.services.vehicleTypes": "Vehicle Types",
    "lasLenasPage.services.vehicleTypesDesc": "We have different vehicle types to fit your group and luggage.",
    "lasLenasPage.services.customQuote": "Request Custom Quote",
    "lasLenasPage.services.customNote": "Ask about large groups or custom services",

    // Why Us
    "lasLenasPage.whyUs.badge": "About Us",
    "lasLenasPage.whyUs.title": "Operators in Mendoza, Specialists in Las Leñas",
    "lasLenasPage.whyUs.description": "We are a local team with years of experience in mountain logistics. We know every kilometer of the road to Las Leñas and specialize in providing safe, punctual, and comfortable transfers.",
    "lasLenasPage.whyUs.quote": "Experience Mendoza worry-free. We coordinate everything.",
    "lasLenasPage.whyUs.differentials": "Our Differentials",
    "lasLenasPage.whyUs.differentialsTitle": "Why We Are the Best Choice",
    "lasLenasPage.whyUs.diff1.title": "Official Transport to Las Leñas",
    "lasLenasPage.whyUs.diff1.desc": "Authorized operator with all permits and licenses up to date.",
    "lasLenasPage.whyUs.diff2.title": "Professional Drivers",
    "lasLenasPage.whyUs.diff2.desc": "Experienced drivers with over 10 years on mountain routes.",
    "lasLenasPage.whyUs.diff3.title": "Licensed Vehicles",
    "lasLenasPage.whyUs.diff3.desc": "Complete fleet with insurance, inspection and safety equipment.",
    "lasLenasPage.whyUs.diff4.title": "Mountain Experience",
    "lasLenasPage.whyUs.diff4.desc": "We know every curve of the road. Travel with peace of mind.",
    "lasLenasPage.whyUs.stats.trips": "Trips/Season",
    "lasLenasPage.whyUs.stats.exp": "Years Exp.",
    "lasLenasPage.whyUs.stats.satisfaction": "Satisfaction",

    // Route Info
    "lasLenasPage.route.badge": "Trip Information",
    "lasLenasPage.route.title": "Everything you need to know",
    "lasLenasPage.route.duration": "Trip duration",
    "lasLenasPage.route.fromSanRafael": "From San Rafael",
    "lasLenasPage.route.fromMendoza": "From Mendoza",
    "lasLenasPage.route.roadType": "Road type",
    "lasLenasPage.route.mountainRoad": "Mountain route",
    "lasLenasPage.route.asphaltGravel": "Asphalt + gravel",
    "lasLenasPage.route.conditions": "Conditions",
    "lasLenasPage.route.snowWinter": "Snow in winter",
    "lasLenasPage.route.schedules": "Schedules",
    "lasLenasPage.route.private": "Private",
    "lasLenasPage.route.passengerChoice": "Passenger's choice",
    "lasLenasPage.route.shared": "Shared",
    "lasLenasPage.route.satMon": "Saturdays and Mondays",
    "lasLenasPage.route.serviceType": "Service type",
    "lasLenasPage.route.exclusive": "100% exclusive",
    "lasLenasPage.route.byAvailability": "Subject to availability",

    // Testimonials
    "lasLenasPage.testimonials.badge": "Testimonials",
    "lasLenasPage.testimonials.title": "What Our Passengers Say",
    "lasLenasPage.testimonials.subtitle": "Over 500 travelers have already trusted us to reach Las Leñas. This is what they think of their experience.",

    // CTA Section
    "lasLenasPage.cta.title": "Ready to Book Your Transfer?",
    "lasLenasPage.cta.subtitle": "Fill out the form and receive your quote via WhatsApp in minutes.",
    "lasLenasPage.cta.quote": "Quote my Transfer",
    "lasLenasPage.cta.check": "Check Availability",
    "lasLenasPage.cta.response": "Response in less than 30 min",
    "lasLenasPage.cta.noCommitment": "No commitment",

    // FAQ
    "lasLenasPage.faq.badge": "Frequently Asked Questions",
    "lasLenasPage.faq.title": "Have Questions?",
    "lasLenasPage.faq.subtitle": "Here we answer the most common questions about our transfer service to Las Leñas.",

    // Contact
    "lasLenasPage.contact.badge": "Direct Contact",
    "lasLenasPage.contact.title": "Ready to Travel to Las Leñas?",
    "lasLenasPage.contact.subtitle": "Contact us via WhatsApp and book your transfer in minutes. We respond quickly and confirm availability instantly.",
    "lasLenasPage.contact.quote": "Quote my Transfer",
    "lasLenasPage.contact.check": "Check Availability",
    "lasLenasPage.contact.phone": "WhatsApp",
    "lasLenasPage.contact.email": "Email",
    "lasLenasPage.contact.hours": "Hours",
    "lasLenasPage.contact.hoursValue": "Monday to Sunday, 8am-10pm",
    "lasLenasPage.contact.trustNote": "No commitment. Free consultation and book only when you're sure.",

    // Footer
    "lasLenasPage.footer.description": "Private and safe transfers to Las Leñas. Mountain-equipped vehicles and expert drivers.",
    "lasLenasPage.footer.links": "Links",
    "lasLenasPage.footer.contact": "Contact",
    "lasLenasPage.footer.backToHome": "Back to XUMA Travel",
    "lasLenasPage.footer.rights": "All rights reserved.",

    // Header
    "lasLenasPage.header.quote": "Quote",
    "lasLenasPage.header.services": "Services",
    "lasLenasPage.header.whyUs": "Why Us",
    "lasLenasPage.header.testimonials": "Testimonials",
    "lasLenasPage.header.contact": "Contact",
    "lasLenasPage.header.bookNow": "Book Now",
    "lasLenasPage.header.whatsappMsg": "Hi! I'm interested in booking a transfer to Las Leñas",
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
