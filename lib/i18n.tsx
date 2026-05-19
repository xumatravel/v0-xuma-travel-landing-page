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
    "nav.packagesLasLenas": "Paquetes Las Leñas",
    "nav.packagesShort": "Paquetes",
    "nav.transfersShort": "Transfers",
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
    "hero.trust1": "40+ años de experiencia (empresa familiar, 2da generación)",
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
    "products.ski.titleFull": "Paquetes de Ski en Las Leñas",
    "products.ski.subtitle": "PRODUCTO PRINCIPAL",
    "products.ski.description": "Transporte + hotel + ski pass. La experiencia completa en Las Leñas.",
    "products.ski.features": ["Transfers premium", "Hospedaje seleccionado", "Ski pass incluido", "Coordinación total"],
    "products.ski.cta": "Ver Paquetes de Ski",
    
    "products.experience.title": "Experiencia Mendoza",
    "products.experience.subtitle": "2-4 DÍAS",
    "products.experience.description": "Paquetes de vino + montaña. Descubre lo mejor de la región.",
    "products.experience.features": ["Tours de bodegas", "Alta montaña", "Gastronomía", "Guías expertos"],
    
    "products.transfers.title": "Transfers Premium",
    "products.transfers.subtitle": "TU PUERTA DE ENTRADA",
    "products.transfers.description": "Tu puerta de entrada a una experiencia completa en Mendoza.",
    "products.transfers.features": ["Vehículos premium", "Conductores bilingües", "Puntualidad garantizada", "Servicio puerta a puerta"],
    "products.transfers.cta": "Ver Transfers",

    "products.note": "Los transfers son tu punto de entrada, no el destino final.",

    // Las Leñas Section
    "lasLenas.title": "Las Leñas: Nuestro Expertise",
    "lasLenas.subtitle": "Proveedor Oficial de Transporte",
    "lasLenas.description": "Con más de 40 años de experiencia, somos el socio de transporte más confiable para el Valle de Las Leñas. Empresa familiar de segunda generación, expertos en las condiciones de la ruta y las necesidades de los viajeros.",
    "lasLenas.badge": "Proveedor Oficial",
    "lasLenas.cta": "Descubre nuestros paquetes de ski",
    "lasLenas.ctaTransfers": "Descubre nuestros traslados",
    "lasLenas.stats.trips": "Miles de viajes",
    "lasLenas.stats.experience": "40+ años",
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
    "upsell.viewMore": "Ver más",

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
    "trust.passengers": "Pasajeros por temporada",
    "trust.years": "Años de experiencia (empresa familiar)",
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
    "testimonials.subtitle": "+1000 pasajeros por temporada",
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
    "about.description": "Somos una empresa familiar con más de 40 años coordinando viajes premium en Mendoza. Segunda generación al servicio del turismo. Nuestra misión es simple: hacer que cada viaje sea impecable, desde el primer contacto hasta el regreso a casa.",
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
    "lasLenasPage.form.otherOrigin": "Otro (especificar)",
    "lasLenasPage.form.specifyOrigin": "Especifica el origen...",
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
    "lasLenasPage.form.step6": "Observaciones (opcional)",
    "lasLenasPage.form.observationsLabel": "Comentarios adicionales",
    "lasLenasPage.form.observationsPlaceholder": "Información adicional sobre tu viaje, requerimientos especiales, etc.",
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
    "lasLenasPage.whatsapp.observations": "Observaciones",
    "ll.quote.msg.language": "Prefiero comunicarme en Español",

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

    // New Hero translations
    "hero.title.line1": "Ski y Experiencias Premium",
    "hero.title.line2": "en Mendoza",
    "hero.subheadline": "Especialistas en ski, montaña, vino y experiencias premium en Mendoza y Las Leñas.",
    "hero.trustDoorToDoor": "Servicio puerta a puerta",
    "hero.trustSki": "Expertos en ski",
    "hero.cta.transfer": "Cotizar Traslado",
    "hero.cta.skiPackage": "Cotizar Paquete Ski",

    // Ski Packages Section (Home)
    "skiPackages.badge": "Temporada de Ski",
    "skiPackages.title": "Paquetes Ski en Las Leñas",
    "skiPackages.subtitle": "Hoteles, departamentos, pases y transfers coordinados en un solo lugar.",
    "skiPackages.hotels.title": "Hoteles en Las Leñas",
    "skiPackages.hotels.features": ["Skiweek / Miniweek / Extraweek", "Media pensión incluida", "Pases de ski opcionales", "Ubicación privilegiada"],
    "skiPackages.hotels.cta": "Cotizar Hotel",
    "skiPackages.apartments.title": "Departamentos",
    "skiPackages.apartments.features": ["Equipados con ropa blanca", "Ideal para grupos y familias", "Desayuno incluido", "Cocina completa"],
    "skiPackages.apartments.cta": "Cotizar Departamento",
    "skiPackages.info.skiPass": "Pases de ski opcionales",
    "skiPackages.info.transfers": "Transfers coordinados",
    "skiPackages.info.halfBoard": "Media pensión disponible",

    // Paquetes Las Lenas Page
    "paquetesPage.meta.title": "Paquetes Ski & Hotelería en Las Leñas | XUMA TRAVEL",
    "paquetesPage.meta.description": "Paquetes de ski completos en Las Leñas. Hoteles, departamentos, pases y transfers coordinados. Skiweek, Miniweek y Extraweek. Cotiza ahora.",
    
    // Paquetes Hero
    "paquetesPage.badge": "Temporada Ski 2025",
    "paquetesPage.hero.title": "Paquetes Ski & Hotelería en Las Leñas",
    "paquetesPage.hero.subtitle": "Coordinamos tu viaje completo: hotel, pases, transfers y experiencias de nieve.",
    "paquetesPage.hero.trust1": "Hoteles oficiales",
    "paquetesPage.hero.trust2": "Pases de ski",
    "paquetesPage.hero.trust3": "Transfers incluidos",
    "paquetesPage.hero.cta1": "Cotizar Paquete",
    "paquetesPage.hero.cta2": "Consultar por WhatsApp",
    "paquetesPage.hero.response": "Te respondemos en minutos",

    // Package Types
    "paquetesPage.types.badge": "Tipos de Paquetes",
    "paquetesPage.types.title": "Elige tu Experiencia de Ski",
    "paquetesPage.types.subtitle": "Diferentes opciones para que disfrutes Las Leñas a tu manera.",
    "paquetesPage.types.skiweek.title": "Skiweek",
    "paquetesPage.types.skiweek.duration": "7 noches",
    "paquetesPage.types.skiweek.schedule": "Sábado a sábado",
    "paquetesPage.types.skiweek.desc": "Ideal semana completa de ski",
    "paquetesPage.types.miniweek.title": "Miniweek",
    "paquetesPage.types.miniweek.duration": "2 noches",
    "paquetesPage.types.miniweek.schedule": "Sábado a lunes",
    "paquetesPage.types.miniweek.desc": "Ideal fin de semana",
    "paquetesPage.types.extraweek.title": "Extraweek",
    "paquetesPage.types.extraweek.duration": "5 noches",
    "paquetesPage.types.extraweek.schedule": "Lunes a sábado",
    "paquetesPage.types.extraweek.desc": "Perfecto escapada larga",
    "paquetesPage.types.passNote": "Los pases de ski incluyen 1 día extra respecto a las noches. Ej: 5 noches = 6 días de pase.",

    // Hotels
    "paquetesPage.hotels.badge": "Alojamiento",
    "paquetesPage.hotels.title": "Hoteles en Las Leñas",
    "paquetesPage.hotels.subtitle": "Todos los hoteles oficiales del centro de ski con media pensión incluida.",
    "paquetesPage.hotels.piscis.name": "Hotel Piscis",
    "paquetesPage.hotels.piscis.category": "Media/Alta",
    "paquetesPage.hotels.piscis.desc": "Familiar, excelente ubicación, muy elegido por familias",
    "paquetesPage.hotels.aries.name": "Hotel Aries",
    "paquetesPage.hotels.aries.category": "Media",
    "paquetesPage.hotels.aries.desc": "Familiar, cómodo y práctico",
    "paquetesPage.hotels.acuario.name": "Hotel Acuario",
    "paquetesPage.hotels.acuario.category": "Media",
    "paquetesPage.hotels.acuario.desc": "Excelente relación precio/calidad",
    "paquetesPage.hotels.scorpio.name": "Hotel Scorpio",
    "paquetesPage.hotels.scorpio.category": "Económico",
    "paquetesPage.hotels.scorpio.desc": "Opción económica, desayuno incluido (sin cena)",
    "paquetesPage.hotels.virgo.name": "Hotel Virgo",
    "paquetesPage.hotels.virgo.category": "Alta",
    "paquetesPage.hotels.virgo.desc": "Opciones premium y de alta categoría",
    "paquetesPage.hotels.halfBoard": "Media pensión incluida",
    "paquetesPage.hotels.breakfastOnly": "Solo desayuno",
    "paquetesPage.hotels.cta": "Cotizar Hotel",

    // Apartments
    "paquetesPage.apartments.badge": "Alojamiento Alternativo",
    "paquetesPage.apartments.title": "Departamentos en Las Leñas",
    "paquetesPage.apartments.subtitle": "Ideal para familias y grupos que buscan más espacio y comodidad.",
    "paquetesPage.apartments.features": ["Ropa blanca incluida", "Totalmente equipados", "Cocina completa", "Desayuno incluido", "Ideal familias y grupos"],
    "paquetesPage.apartments.cta": "Cotizar Departamento",

    // Charter Bus
    "paquetesPage.charter.badge": "Transporte Grupal",
    "paquetesPage.charter.title": "Charter Bus desde Buenos Aires",
    "paquetesPage.charter.subtitle": "Servicio de charter coordinado con las semanas oficiales de Las Leñas.",
    "paquetesPage.charter.features": ["Disponible solo desde Buenos Aires", "Coordinado con semanas oficiales", "Ideal pasajeros sin auto", "Servicio grupal económico"],
    "paquetesPage.charter.cta": "Consultar Disponibilidad",

    // Quote Form
    "paquetesPage.form.badge": "Cotizador de Paquetes",
    "paquetesPage.form.title": "Cotiza tu Paquete Ski",
    "paquetesPage.form.subtitle": "Completa el formulario y te enviamos la cotización por WhatsApp.",
    "paquetesPage.form.step1": "Tipo de Viaje",
    "paquetesPage.form.tripType": "Selecciona tipo",
    "paquetesPage.form.step2": "Alojamiento",
    "paquetesPage.form.lodgingType": "Tipo de alojamiento",
    "paquetesPage.form.hotel": "Hotel",
    "paquetesPage.form.apartment": "Departamento",
    "paquetesPage.form.selectHotel": "Selecciona hotel",
    "paquetesPage.form.step3": "Fechas",
    "paquetesPage.form.checkIn": "Check-in",
    "paquetesPage.form.checkOut": "Check-out",
    "paquetesPage.form.step4": "Pasajeros",
    "paquetesPage.form.totalPassengers": "Cantidad de pasajeros",
    "paquetesPage.form.adults": "Adultos",
    "paquetesPage.form.children": "Menores",
    "paquetesPage.form.infants": "Infantes",
    "paquetesPage.form.step5": "Servicios Adicionales",
    "paquetesPage.form.skiPass": "¿Desean pases de ski?",
    "paquetesPage.form.needTransfer": "¿Necesitan traslado?",
    "paquetesPage.form.needCharter": "¿Necesitan charter bus?",
    "paquetesPage.form.yes": "Sí",
    "paquetesPage.form.no": "No",
    "paquetesPage.form.step6": "Datos de Contacto",
    "paquetesPage.form.originCity": "Ciudad de origen",
    "paquetesPage.form.originCityPlaceholder": "Ej: Buenos Aires, Córdoba...",
    "paquetesPage.form.fullName": "Nombre completo",
    "paquetesPage.form.whatsapp": "WhatsApp",
    "paquetesPage.form.submit": "Enviar Cotización por WhatsApp",
    "paquetesPage.form.submitting": "Abriendo WhatsApp...",
    "paquetesPage.form.priceHigh": "Precio Alto",
    "paquetesPage.form.priceMediumHigh": "Precio Medio-Alto",
    "paquetesPage.form.priceMedium": "Precio Medio",
    "paquetesPage.form.priceMediumLow": "Precio Medio-Bajo",
    "paquetesPage.form.familyHotel": "Hotel Familiar",
    "paquetesPage.form.passenger": "pasajero",
    "paquetesPage.form.passengersPlural": "pasajeros",
    "paquetesPage.form.passengerAges": "Edad de cada pasajero",
    "paquetesPage.form.passengerNumber": "Pasajero",
    "paquetesPage.form.agePlaceholder": "Edad",
    "paquetesPage.form.agesAtTravel": "a la hora del viaje",
    "paquetesPage.form.step5Title": "Pases, Transfers y Experiencias de Nieve",
    "paquetesPage.form.skiEquipment": "Alquiler de equipos de ski",
    "paquetesPage.form.step7": "Observaciones",
    "paquetesPage.form.observationsLabel": "Observaciones o comentarios adicionales",
    "paquetesPage.form.observationsPlaceholder": "Escribe aquí cualquier detalle adicional sobre tu viaje...",

    // WhatsApp Message
    "paquetesPage.whatsapp.greeting": "NUEVA CONSULTA PAQUETE SKI",
    "paquetesPage.whatsapp.type": "Tipo",
    "paquetesPage.whatsapp.lodging": "Alojamiento",
    "paquetesPage.whatsapp.hotel": "Hotel",
    "paquetesPage.whatsapp.checkIn": "Check-in",
    "paquetesPage.whatsapp.checkOut": "Check-out",
    "paquetesPage.whatsapp.passengers": "Pasajeros",
    "paquetesPage.whatsapp.ages": "Edades",
    "paquetesPage.whatsapp.withPasses": "Con pases",
    "paquetesPage.whatsapp.transfers": "Traslados",
    "paquetesPage.whatsapp.charter": "Charter Bus",
    "paquetesPage.whatsapp.skiEquipment": "Alquiler equipos",
    "paquetesPage.whatsapp.observations": "Observaciones",
    "paquetesPage.whatsapp.originCity": "Ciudad origen",
    "paquetesPage.whatsapp.name": "Nombre",

    // FAQ
    "paquetesPage.faq.badge": "Preguntas Frecuentes",
    "paquetesPage.faq.title": "¿Tienes Dudas?",
    "paquetesPage.faq.subtitle": "Aquí respondemos las preguntas más comunes sobre nuestros paquetes de ski.",
    "paquetesPage.faq.items": [
      {
        "question": "¿Qué es un Skiweek, Miniweek y Extraweek?",
        "answer": "Skiweek es un paquete de 7 noches (sábado a sábado), Miniweek de 2 noches (sábado a lunes), y Extraweek de 5 noches (lunes a sábado). Cada uno está pensado para diferentes necesidades de tiempo."
      },
      {
        "question": "¿Los pases de ski están incluidos?",
        "answer": "Los pases de ski se cotizan por separado y son opcionales. Incluyen 1 día extra respecto a las noches de alojamiento. Por ejemplo: 5 noches = 6 días de pase."
      },
      {
        "question": "¿Qué incluye la media pensión?",
        "answer": "La media pensión incluye desayuno y cena en todos los hoteles, excepto Hotel Scorpio que solo incluye desayuno."
      },
      {
        "question": "¿Pueden coordinar el traslado?",
        "answer": "Sí, coordinamos traslados privados desde Mendoza y San Rafael, y también charter bus desde Buenos Aires durante las semanas oficiales."
      },
      {
        "question": "¿Cuál hotel me recomiendan?",
        "answer": "Depende de tu presupuesto y preferencias. Hotel Piscis es muy elegido por familias, Acuario tiene excelente relación precio/calidad, y Scorpio es la opción más económica."
      }
    ],

    // CTA Section
    "paquetesPage.cta.title": "¿Listo para tu Aventura en Las Leñas?",
    "paquetesPage.cta.subtitle": "Cotiza tu paquete completo y vive la mejor experiencia de ski.",
    "paquetesPage.cta.quote": "Cotizar Paquete",
    "paquetesPage.cta.whatsapp": "Consultar por WhatsApp",

    // Contact
    "paquetesPage.contact.badge": "Contacto Directo",
    "paquetesPage.contact.title": "¿Listo para tu Viaje de Ski?",
    "paquetesPage.contact.subtitle": "Contactanos por WhatsApp y armamos tu paquete personalizado.",

    // Footer
    "paquetesPage.footer.description": "Paquetes de ski completos en Las Leñas. Hoteles, departamentos, pases y transfers.",

    // Header
    "paquetesPage.header.quote": "Cotizar",
    "paquetesPage.header.packages": "Paquetes",
    "paquetesPage.header.hotels": "Hoteles",
    "paquetesPage.header.faq": "FAQ",
    "paquetesPage.header.whatsappMsg": "Hola! Me interesa cotizar un paquete de ski en Las Leñas",
  },

  pt: {
    // Navigation
    "nav.packages": "Pacotes",
    "nav.packagesLasLenas": "Pacotes Las Leñas",
    "nav.packagesShort": "Pacotes",
    "nav.transfersShort": "Transfers",
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
    "hero.trust1": "40+ anos de experiência (empresa familiar, 2ª geração)",
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
    "products.ski.titleFull": "Pacotes de Ski em Las Leñas",
    "products.ski.subtitle": "PRODUTO PRINCIPAL",
    "products.ski.description": "Transporte + hotel + ski pass. A experiência completa em Las Leñas.",
    "products.ski.features": ["Transfers premium", "Hospedagem selecionada", "Ski pass incluído", "Coordenação total"],
    "products.ski.cta": "Ver Pacotes de Ski",
    
    "products.experience.title": "Experiência Mendoza",
    "products.experience.subtitle": "2-4 DIAS",
    "products.experience.description": "Pacotes de vinho + montanha. Descubra o melhor da região.",
    "products.experience.features": ["Tours de vinícolas", "Alta montanha", "Gastronomia", "Guias experientes"],
    
    "products.transfers.title": "Transfers Premium",
    "products.transfers.subtitle": "SUA PORTA DE ENTRADA",
    "products.transfers.description": "Sua porta de entrada para uma experiência completa em Mendoza.",
    "products.transfers.features": ["Veículos premium", "Motoristas bilíngues", "Pontualidade garantida", "Serviço porta a porta"],
    "products.transfers.cta": "Ver Transfers",

    "products.note": "Os transfers são seu ponto de entrada, não o destino final.",

    // Las Leñas Section
    "lasLenas.title": "Las Leñas: Nossa Especialidade",
    "lasLenas.subtitle": "Fornecedor Oficial de Transporte",
    "lasLenas.description": "Com mais de 30 anos de experiência, somos o parceiro de transporte mais confiável para o Vale de Las Leñas. Nossa trajetória nos torna especialistas nas condições da estrada e nas necessidades dos viajantes.",
    "lasLenas.badge": "Fornecedor Oficial",
    "lasLenas.cta": "Descubra nossos pacotes de ski",
    "lasLenas.ctaTransfers": "Descubra nossos transfers",
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
    "upsell.viewMore": "Ver mais",

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
    "trust.passengers": "Passageiros por temporada",
    "trust.years": "Anos de experiência (empresa familiar)",
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
    "testimonials.subtitle": "+1000 passageiros por temporada",
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
    "lasLenasPage.form.otherOrigin": "Outro (especificar)",
    "lasLenasPage.form.specifyOrigin": "Especifique a origem...",
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
    "lasLenasPage.form.step6": "Observações (opcional)",
    "lasLenasPage.form.observationsLabel": "Comentários adicionais",
    "lasLenasPage.form.observationsPlaceholder": "Informações adicionais sobre sua viagem, requisitos especiais, etc.",
    "lasLenasPage.form.submit": "Enviar Cotação por WhatsApp",
    "lasLenasPage.form.submitting": "Abrindo WhatsApp...",
    "lasLenasPage.form.responseTime": "Respondemos em menos de 30 minutos",
    "lasLenasPage.form.quickCoordination": "Coordenação rápida por WhatsApp",
    "lasLenasPage.form.noCommitment": "Sem compromisso",
    "lasLenasPage.form.immediateResponse": "Resposta imediata",
    "lasLenasPage.form.freeQuote": "Cotação gratuita",

    // WhatsApp Message
    "lasLenasPage.whatsapp.greeting": "Olá, quero solicitar uma cotação de transfer para Las Le��as:",
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
    "lasLenasPage.whatsapp.observations": "Observações",
    "ll.quote.msg.language": "Prefiro me comunicar em Português",
  
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

    // New Hero translations
    "hero.title.line1": "Ski e Experiências Premium",
    "hero.title.line2": "em Mendoza",
    "hero.subheadline": "Especialistas em ski, montanha, vinho e experiências premium em Mendoza e Las Leñas.",
    "hero.trustDoorToDoor": "Serviço porta a porta",
    "hero.trustSki": "Especialistas em ski",
    "hero.cta.transfer": "Cotação Transfer",
    "hero.cta.skiPackage": "Cotação Pacote Ski",

    // Ski Packages Section (Home)
    "skiPackages.badge": "Temporada de Ski",
    "skiPackages.title": "Pacotes Ski em Las Leñas",
    "skiPackages.subtitle": "Hotéis, apartamentos, passes e transfers coordenados em um só lugar.",
    "skiPackages.hotels.title": "Hotéis em Las Leñas",
    "skiPackages.hotels.features": ["Skiweek / Miniweek / Extraweek", "Meia pensão incluída", "Passes de ski opcionais", "Localização privilegiada"],
    "skiPackages.hotels.cta": "Cotação Hotel",
    "skiPackages.apartments.title": "Apartamentos",
    "skiPackages.apartments.features": ["Equipados com roupa de cama", "Ideal para grupos e famílias", "Café da manhã incluído", "Cozinha completa"],
    "skiPackages.apartments.cta": "Cotação Apartamento",
    "skiPackages.info.skiPass": "Passes de ski opcionais",
    "skiPackages.info.transfers": "Transfers coordenados",
    "skiPackages.info.halfBoard": "Meia pensão disponível",

    // Paquetes Las Lenas Page
    "paquetesPage.meta.title": "Pacotes Ski & Hotelaria em Las Leñas | XUMA TRAVEL",
    "paquetesPage.meta.description": "Pacotes de ski completos em Las Leñas. Hotéis, apartamentos, passes e transfers coordenados. Skiweek, Miniweek e Extraweek. Solicite cotação.",
    
    // Paquetes Hero
    "paquetesPage.badge": "Temporada Ski 2025",
    "paquetesPage.hero.title": "Pacotes Ski & Hotelaria em Las Leñas",
    "paquetesPage.hero.subtitle": "Coordenamos sua viagem completa: hotel, passes, transfers e experiências de neve.",
    "paquetesPage.hero.trust1": "Hotéis oficiais",
    "paquetesPage.hero.trust2": "Passes de ski",
    "paquetesPage.hero.trust3": "Transfers incluídos",
    "paquetesPage.hero.cta1": "Cotação Pacote",
    "paquetesPage.hero.cta2": "Consultar no WhatsApp",
    "paquetesPage.hero.response": "Respondemos em minutos",

    // Package Types
    "paquetesPage.types.badge": "Tipos de Pacotes",
    "paquetesPage.types.title": "Escolha sua Experiência de Ski",
    "paquetesPage.types.subtitle": "Diferentes opções para você aproveitar Las Leñas do seu jeito.",
    "paquetesPage.types.skiweek.title": "Skiweek",
    "paquetesPage.types.skiweek.duration": "7 noites",
    "paquetesPage.types.skiweek.schedule": "Sábado a sábado",
    "paquetesPage.types.skiweek.desc": "Ideal semana completa de ski",
    "paquetesPage.types.miniweek.title": "Miniweek",
    "paquetesPage.types.miniweek.duration": "2 noites",
    "paquetesPage.types.miniweek.schedule": "Sábado a segunda",
    "paquetesPage.types.miniweek.desc": "Ideal fim de semana",
    "paquetesPage.types.extraweek.title": "Extraweek",
    "paquetesPage.types.extraweek.duration": "5 noites",
    "paquetesPage.types.extraweek.schedule": "Segunda a sábado",
    "paquetesPage.types.extraweek.desc": "Perfeito para escapada longa",
    "paquetesPage.types.passNote": "Os passes de ski incluem 1 dia extra em relação às noites. Ex: 5 noites = 6 dias de passe.",

    // Hotels
    "paquetesPage.hotels.badge": "Hospedagem",
    "paquetesPage.hotels.title": "Hotéis em Las Leñas",
    "paquetesPage.hotels.subtitle": "Todos os hotéis oficiais do centro de ski com meia pensão incluída.",
    "paquetesPage.hotels.piscis.name": "Hotel Piscis",
    "paquetesPage.hotels.piscis.category": "Média/Alta",
    "paquetesPage.hotels.piscis.desc": "Familiar, excelente localização, muito escolhido por famílias",
    "paquetesPage.hotels.aries.name": "Hotel Aries",
    "paquetesPage.hotels.aries.category": "Média",
    "paquetesPage.hotels.aries.desc": "Familiar, confortável e prático",
    "paquetesPage.hotels.acuario.name": "Hotel Acuario",
    "paquetesPage.hotels.acuario.category": "Média",
    "paquetesPage.hotels.acuario.desc": "Excelente custo-benefício",
    "paquetesPage.hotels.scorpio.name": "Hotel Scorpio",
    "paquetesPage.hotels.scorpio.category": "Econômico",
    "paquetesPage.hotels.scorpio.desc": "Opção econômica, café da manhã incluído (sem jantar)",
    "paquetesPage.hotels.virgo.name": "Hotel Virgo",
    "paquetesPage.hotels.virgo.category": "Alta",
    "paquetesPage.hotels.virgo.desc": "Opções premium e de alta categoria",
    "paquetesPage.hotels.halfBoard": "Meia pensão incluída",
    "paquetesPage.hotels.breakfastOnly": "Apenas café da manhã",
    "paquetesPage.hotels.cta": "Cotação Hotel",

    // Apartments
    "paquetesPage.apartments.badge": "Hospedagem Alternativa",
    "paquetesPage.apartments.title": "Apartamentos em Las Leñas",
    "paquetesPage.apartments.subtitle": "Ideal para famílias e grupos que buscam mais espaço e conforto.",
    "paquetesPage.apartments.features": ["Roupa de cama incluída", "Totalmente equipados", "Cozinha completa", "Café da manhã incluído", "Ideal famílias e grupos"],
    "paquetesPage.apartments.cta": "Cotação Apartamento",

    // Charter Bus
    "paquetesPage.charter.badge": "Transporte em Grupo",
    "paquetesPage.charter.title": "Charter Bus desde Buenos Aires",
    "paquetesPage.charter.subtitle": "Serviço de charter coordenado com as semanas oficiais de Las Leñas.",
    "paquetesPage.charter.features": ["Disponível apenas de Buenos Aires", "Coordenado com semanas oficiais", "Ideal passageiros sem carro", "Serviço em grupo econômico"],
    "paquetesPage.charter.cta": "Consultar Disponibilidade",

    // Quote Form
    "paquetesPage.form.badge": "Cotador de Pacotes",
    "paquetesPage.form.title": "Cotação do seu Pacote Ski",
    "paquetesPage.form.subtitle": "Preencha o formulário e enviamos a cotação por WhatsApp.",
    "paquetesPage.form.step1": "Tipo de Viagem",
    "paquetesPage.form.tripType": "Selecione tipo",
    "paquetesPage.form.step2": "Hospedagem",
    "paquetesPage.form.lodgingType": "Tipo de hospedagem",
    "paquetesPage.form.hotel": "Hotel",
    "paquetesPage.form.apartment": "Apartamento",
    "paquetesPage.form.selectHotel": "Selecione hotel",
    "paquetesPage.form.step3": "Datas",
    "paquetesPage.form.checkIn": "Check-in",
    "paquetesPage.form.checkOut": "Check-out",
    "paquetesPage.form.step4": "Passageiros",
    "paquetesPage.form.totalPassengers": "Quantidade de passageiros",
    "paquetesPage.form.adults": "Adultos",
    "paquetesPage.form.children": "Crianças",
    "paquetesPage.form.infants": "Bebês",
    "paquetesPage.form.step5": "Serviços Adicionais",
    "paquetesPage.form.skiPass": "Desejam passes de ski?",
    "paquetesPage.form.needTransfer": "Precisam de transfer?",
    "paquetesPage.form.needCharter": "Precisam de charter bus?",
    "paquetesPage.form.yes": "Sim",
    "paquetesPage.form.no": "Não",
    "paquetesPage.form.step6": "Dados de Contato",
    "paquetesPage.form.originCity": "Cidade de origem",
    "paquetesPage.form.originCityPlaceholder": "Ex: São Paulo, Rio...",
    "paquetesPage.form.fullName": "Nome completo",
    "paquetesPage.form.whatsapp": "WhatsApp",
    "paquetesPage.form.submit": "Enviar Cotação por WhatsApp",
    "paquetesPage.form.submitting": "Abrindo WhatsApp...",
    "paquetesPage.form.priceHigh": "Preço Alto",
    "paquetesPage.form.priceMediumHigh": "Preço Médio-Alto",
    "paquetesPage.form.priceMedium": "Preço Médio",
    "paquetesPage.form.priceMediumLow": "Preço Médio-Baixo",
    "paquetesPage.form.familyHotel": "Hotel Familiar",
    "paquetesPage.form.passenger": "passageiro",
    "paquetesPage.form.passengersPlural": "passageiros",
    "paquetesPage.form.passengerAges": "Idade de cada passageiro",
    "paquetesPage.form.passengerNumber": "Passageiro",
    "paquetesPage.form.agePlaceholder": "Idade",
    "paquetesPage.form.agesAtTravel": "na hora da viagem",
    "paquetesPage.form.step5Title": "Passes, Transfers e Experiencias de Neve",
    "paquetesPage.form.skiEquipment": "Aluguel de equipamentos de ski",
    "paquetesPage.form.step7": "Observacoes",
    "paquetesPage.form.observationsLabel": "Observacoes ou comentarios adicionais",
    "paquetesPage.form.observationsPlaceholder": "Escreva aqui qualquer detalhe adicional sobre sua viagem...",

    // WhatsApp Message
    "paquetesPage.whatsapp.greeting": "NOVA CONSULTA PACOTE SKI",
    "paquetesPage.whatsapp.type": "Tipo",
    "paquetesPage.whatsapp.lodging": "Hospedagem",
    "paquetesPage.whatsapp.hotel": "Hotel",
    "paquetesPage.whatsapp.checkIn": "Check-in",
    "paquetesPage.whatsapp.checkOut": "Check-out",
    "paquetesPage.whatsapp.passengers": "Passageiros",
    "paquetesPage.whatsapp.ages": "Idades",
    "paquetesPage.whatsapp.withPasses": "Com passes",
    "paquetesPage.whatsapp.transfers": "Transfers",
    "paquetesPage.whatsapp.charter": "Charter Bus",
    "paquetesPage.whatsapp.skiEquipment": "Aluguel equipamentos",
    "paquetesPage.whatsapp.observations": "Observacoes",
    "paquetesPage.whatsapp.originCity": "Cidade origem",
    "paquetesPage.whatsapp.name": "Nome",

    // FAQ
    "paquetesPage.faq.badge": "Perguntas Frequentes",
    "paquetesPage.faq.title": "Tem Dúvidas?",
    "paquetesPage.faq.subtitle": "Aqui respondemos as perguntas mais comuns sobre nossos pacotes de ski.",
    "paquetesPage.faq.items": [
      {
        "question": "O que é um Skiweek, Miniweek e Extraweek?",
        "answer": "Skiweek é um pacote de 7 noites (sábado a sábado), Miniweek de 2 noites (sábado a segunda), e Extraweek de 5 noites (segunda a sábado). Cada um é pensado para diferentes necessidades de tempo."
      },
      {
        "question": "Os passes de ski estão incluídos?",
        "answer": "Os passes de ski são cotados separadamente e são opcionais. Incluem 1 dia extra em relação às noites de hospedagem. Por exemplo: 5 noites = 6 dias de passe."
      },
      {
        "question": "O que inclui a meia pensão?",
        "answer": "A meia pensão inclui café da manhã e jantar em todos os hotéis, exceto Hotel Scorpio que inclui apenas café da manhã."
      },
      {
        "question": "Podem coordenar o transfer?",
        "answer": "Sim, coordenamos transfers privados desde Mendoza e San Rafael, e também charter bus desde Buenos Aires durante as semanas oficiais."
      },
      {
        "question": "Qual hotel vocês recomendam?",
        "answer": "Depende do seu orçamento e preferências. Hotel Piscis é muito escolhido por famílias, Acuario tem excelente custo-benefício, e Scorpio é a opção mais econômica."
      }
    ],

    // CTA Section
    "paquetesPage.cta.title": "Pronto para sua Aventura em Las Leñas?",
    "paquetesPage.cta.subtitle": "Solicite cotação do seu pacote completo e viva a melhor experiência de ski.",
    "paquetesPage.cta.quote": "Cotação Pacote",
    "paquetesPage.cta.whatsapp": "Consultar no WhatsApp",

    // Contact
    "paquetesPage.contact.badge": "Contato Direto",
    "paquetesPage.contact.title": "Pronto para sua Viagem de Ski?",
    "paquetesPage.contact.subtitle": "Entre em contato pelo WhatsApp e montamos seu pacote personalizado.",

    // Footer
    "paquetesPage.footer.description": "Pacotes de ski completos em Las Leñas. Hotéis, apartamentos, passes e transfers.",

    // Header
    "paquetesPage.header.quote": "Cotação",
    "paquetesPage.header.packages": "Pacotes",
    "paquetesPage.header.hotels": "Hotéis",
    "paquetesPage.header.faq": "FAQ",
    "paquetesPage.header.whatsappMsg": "Olá! Tenho interesse em cotar um pacote de ski em Las Leñas",
  },

  en: {
    // Navigation
    "nav.packages": "Packages",
    "nav.packagesLasLenas": "Las Leñas Packages",
    "nav.packagesShort": "Packages",
    "nav.transfersShort": "Transfers",
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
    "hero.trust1": "40+ years of experience (family business, 2nd generation)",
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
    "products.ski.titleFull": "Ski Packages in Las Leñas",
    "products.ski.subtitle": "MAIN PRODUCT",
    "products.ski.description": "Transport + hotel + ski pass. The complete Las Leñas experience.",
    "products.ski.features": ["Premium transfers", "Selected lodging", "Ski pass included", "Full coordination"],
    "products.ski.cta": "View Ski Packages",
    
    "products.experience.title": "Mendoza Experience",
    "products.experience.subtitle": "2-4 DAYS",
    "products.experience.description": "Wine + mountain packages. Discover the best of the region.",
    "products.experience.features": ["Winery tours", "High mountain", "Gastronomy", "Expert guides"],
    
    "products.transfers.title": "Premium Transfers",
    "products.transfers.subtitle": "YOUR GATEWAY",
    "products.transfers.description": "Your gateway to a complete Mendoza experience.",
    "products.transfers.features": ["Premium vehicles", "Bilingual drivers", "Guaranteed punctuality", "Door-to-door service"],
    "products.transfers.cta": "View Transfers",

    "products.note": "Transfers are your entry point, not the final destination.",

    // Las Leñas Section
    "lasLenas.title": "Las Leñas: Our Expertise",
    "lasLenas.subtitle": "Official Transportation Provider",
    "lasLenas.description": "With over 30 years of experience, we are the most trusted transportation partner for Valle de Las Leñas. Our track record makes us experts in road conditions and traveler needs.",
    "lasLenas.badge": "Official Provider",
    "lasLenas.cta": "Discover our ski packages",
    "lasLenas.ctaTransfers": "Discover our transfers",
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
    "upsell.viewMore": "View more",

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
    "trust.passengers": "Passengers per season",
    "trust.years": "Years of experience (family business)",
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
    "testimonials.subtitle": "+1000 passengers per season",
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
    "lasLenasPage.form.otherOrigin": "Other (specify)",
    "lasLenasPage.form.specifyOrigin": "Specify origin...",
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
    "lasLenasPage.form.step6": "Observations (optional)",
    "lasLenasPage.form.observationsLabel": "Additional comments",
    "lasLenasPage.form.observationsPlaceholder": "Additional information about your trip, special requirements, etc.",
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
    "lasLenasPage.whatsapp.observations": "Observations",
    "ll.quote.msg.language": "I prefer to communicate in English",
  
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

    // New Hero translations
    "hero.title.line1": "Premium Ski & Experiences",
    "hero.title.line2": "in Mendoza",
    "hero.subheadline": "Ski, mountain, wine, and premium experience specialists in Mendoza and Las Leñas.",
    "hero.trustDoorToDoor": "Door-to-door service",
    "hero.trustSki": "Ski experts",
    "hero.cta.transfer": "Get Transfer Quote",
    "hero.cta.skiPackage": "Get Ski Package Quote",

    // Ski Packages Section (Home)
    "skiPackages.badge": "Ski Season",
    "skiPackages.title": "Ski Packages in Las Leñas",
    "skiPackages.subtitle": "Hotels, apartments, passes and transfers coordinated in one place.",
    "skiPackages.hotels.title": "Hotels in Las Leñas",
    "skiPackages.hotels.features": ["Skiweek / Miniweek / Extraweek", "Half board included", "Optional ski passes", "Prime location"],
    "skiPackages.hotels.cta": "Quote Hotel",
    "skiPackages.apartments.title": "Apartments",
    "skiPackages.apartments.features": ["Fully equipped with linens", "Ideal for groups and families", "Breakfast included", "Full kitchen"],
    "skiPackages.apartments.cta": "Quote Apartment",
    "skiPackages.info.skiPass": "Optional ski passes",
    "skiPackages.info.transfers": "Coordinated transfers",
    "skiPackages.info.halfBoard": "Half board available",

    // Paquetes Las Lenas Page
    "paquetesPage.meta.title": "Ski Packages & Hotels in Las Leñas | XUMA TRAVEL",
    "paquetesPage.meta.description": "Complete ski packages in Las Leñas. Hotels, apartments, passes and transfers coordinated. Skiweek, Miniweek and Extraweek. Get a quote now.",
    
    // Paquetes Hero
    "paquetesPage.badge": "Ski Season 2025",
    "paquetesPage.hero.title": "Ski Packages & Hotels in Las Leñas",
    "paquetesPage.hero.subtitle": "We coordinate your complete trip: hotel, passes, transfers and snow experiences.",
    "paquetesPage.hero.trust1": "Official hotels",
    "paquetesPage.hero.trust2": "Ski passes",
    "paquetesPage.hero.trust3": "Transfers included",
    "paquetesPage.hero.cta1": "Get Package Quote",
    "paquetesPage.hero.cta2": "Ask on WhatsApp",
    "paquetesPage.hero.response": "We respond in minutes",

    // Package Types
    "paquetesPage.types.badge": "Package Types",
    "paquetesPage.types.title": "Choose Your Ski Experience",
    "paquetesPage.types.subtitle": "Different options for you to enjoy Las Leñas your way.",
    "paquetesPage.types.skiweek.title": "Skiweek",
    "paquetesPage.types.skiweek.duration": "7 nights",
    "paquetesPage.types.skiweek.schedule": "Saturday to Saturday",
    "paquetesPage.types.skiweek.desc": "Ideal for a full week of ski",
    "paquetesPage.types.miniweek.title": "Miniweek",
    "paquetesPage.types.miniweek.duration": "2 nights",
    "paquetesPage.types.miniweek.schedule": "Saturday to Monday",
    "paquetesPage.types.miniweek.desc": "Ideal weekend trip",
    "paquetesPage.types.extraweek.title": "Extraweek",
    "paquetesPage.types.extraweek.duration": "5 nights",
    "paquetesPage.types.extraweek.schedule": "Monday to Saturday",
    "paquetesPage.types.extraweek.desc": "Perfect for a long getaway",
    "paquetesPage.types.passNote": "Ski passes include 1 extra day compared to nights. E.g.: 5 nights = 6 days pass.",

    // Hotels
    "paquetesPage.hotels.badge": "Accommodation",
    "paquetesPage.hotels.title": "Hotels in Las Leñas",
    "paquetesPage.hotels.subtitle": "All official ski resort hotels with half board included.",
    "paquetesPage.hotels.piscis.name": "Hotel Piscis",
    "paquetesPage.hotels.piscis.category": "Mid/High",
    "paquetesPage.hotels.piscis.desc": "Family-friendly, excellent location, very popular with families",
    "paquetesPage.hotels.aries.name": "Hotel Aries",
    "paquetesPage.hotels.aries.category": "Mid",
    "paquetesPage.hotels.aries.desc": "Family-friendly, comfortable and practical",
    "paquetesPage.hotels.acuario.name": "Hotel Acuario",
    "paquetesPage.hotels.acuario.category": "Mid",
    "paquetesPage.hotels.acuario.desc": "Excellent value for money",
    "paquetesPage.hotels.scorpio.name": "Hotel Scorpio",
    "paquetesPage.hotels.scorpio.category": "Budget",
    "paquetesPage.hotels.scorpio.desc": "Budget option, breakfast included (no dinner)",
    "paquetesPage.hotels.virgo.name": "Hotel Virgo",
    "paquetesPage.hotels.virgo.category": "High",
    "paquetesPage.hotels.virgo.desc": "Premium and high-end options",
    "paquetesPage.hotels.halfBoard": "Half board included",
    "paquetesPage.hotels.breakfastOnly": "Breakfast only",
    "paquetesPage.hotels.cta": "Quote Hotel",

    // Apartments
    "paquetesPage.apartments.badge": "Alternative Accommodation",
    "paquetesPage.apartments.title": "Apartments in Las Leñas",
    "paquetesPage.apartments.subtitle": "Ideal for families and groups looking for more space and comfort.",
    "paquetesPage.apartments.features": ["Linens included", "Fully equipped", "Full kitchen", "Breakfast included", "Ideal for families and groups"],
    "paquetesPage.apartments.cta": "Quote Apartment",

    // Charter Bus
    "paquetesPage.charter.badge": "Group Transportation",
    "paquetesPage.charter.title": "Charter Bus from Buenos Aires",
    "paquetesPage.charter.subtitle": "Charter service coordinated with official Las Leñas weeks.",
    "paquetesPage.charter.features": ["Available only from Buenos Aires", "Coordinated with official weeks", "Ideal for passengers without car", "Affordable group service"],
    "paquetesPage.charter.cta": "Check Availability",

    // Quote Form
    "paquetesPage.form.badge": "Package Quote",
    "paquetesPage.form.title": "Get Your Ski Package Quote",
    "paquetesPage.form.subtitle": "Fill out the form and we'll send you the quote via WhatsApp.",
    "paquetesPage.form.step1": "Trip Type",
    "paquetesPage.form.tripType": "Select type",
    "paquetesPage.form.step2": "Accommodation",
    "paquetesPage.form.lodgingType": "Accommodation type",
    "paquetesPage.form.hotel": "Hotel",
    "paquetesPage.form.apartment": "Apartment",
    "paquetesPage.form.selectHotel": "Select hotel",
    "paquetesPage.form.step3": "Dates",
    "paquetesPage.form.checkIn": "Check-in",
    "paquetesPage.form.checkOut": "Check-out",
    "paquetesPage.form.step4": "Passengers",
    "paquetesPage.form.totalPassengers": "Number of passengers",
    "paquetesPage.form.adults": "Adults",
    "paquetesPage.form.children": "Children",
    "paquetesPage.form.infants": "Infants",
    "paquetesPage.form.step5": "Additional Services",
    "paquetesPage.form.skiPass": "Do you need ski passes?",
    "paquetesPage.form.needTransfer": "Do you need transfers?",
    "paquetesPage.form.needCharter": "Do you need charter bus?",
    "paquetesPage.form.yes": "Yes",
    "paquetesPage.form.no": "No",
    "paquetesPage.form.step6": "Contact Information",
    "paquetesPage.form.originCity": "City of origin",
    "paquetesPage.form.originCityPlaceholder": "E.g.: New York, Miami...",
    "paquetesPage.form.fullName": "Full name",
    "paquetesPage.form.whatsapp": "WhatsApp",
    "paquetesPage.form.submit": "Send Quote via WhatsApp",
    "paquetesPage.form.submitting": "Opening WhatsApp...",
    "paquetesPage.form.priceHigh": "High Price",
    "paquetesPage.form.priceMediumHigh": "Medium-High Price",
    "paquetesPage.form.priceMedium": "Medium Price",
    "paquetesPage.form.priceMediumLow": "Medium-Low Price",
    "paquetesPage.form.familyHotel": "Family Hotel",
    "paquetesPage.form.passenger": "passenger",
    "paquetesPage.form.passengersPlural": "passengers",
    "paquetesPage.form.passengerAges": "Age of each passenger",
    "paquetesPage.form.passengerNumber": "Passenger",
    "paquetesPage.form.agePlaceholder": "Age",
    "paquetesPage.form.agesAtTravel": "at the time of travel",
    "paquetesPage.form.step5Title": "Passes, Transfers & Snow Experiences",
    "paquetesPage.form.skiEquipment": "Ski equipment rental",
    "paquetesPage.form.step7": "Observations",
    "paquetesPage.form.observationsLabel": "Additional observations or comments",
    "paquetesPage.form.observationsPlaceholder": "Write here any additional details about your trip...",

    // WhatsApp Message
    "paquetesPage.whatsapp.greeting": "NEW SKI PACKAGE INQUIRY",
    "paquetesPage.whatsapp.type": "Type",
    "paquetesPage.whatsapp.lodging": "Accommodation",
    "paquetesPage.whatsapp.hotel": "Hotel",
    "paquetesPage.whatsapp.checkIn": "Check-in",
    "paquetesPage.whatsapp.checkOut": "Check-out",
    "paquetesPage.whatsapp.passengers": "Passengers",
    "paquetesPage.whatsapp.ages": "Ages",
    "paquetesPage.whatsapp.withPasses": "With passes",
    "paquetesPage.whatsapp.transfers": "Transfers",
    "paquetesPage.whatsapp.charter": "Charter Bus",
    "paquetesPage.whatsapp.skiEquipment": "Equipment rental",
    "paquetesPage.whatsapp.observations": "Observations",
    "paquetesPage.whatsapp.originCity": "Origin city",
    "paquetesPage.whatsapp.name": "Name",

    // FAQ
    "paquetesPage.faq.badge": "Frequently Asked Questions",
    "paquetesPage.faq.title": "Have Questions?",
    "paquetesPage.faq.subtitle": "Here we answer the most common questions about our ski packages.",
    "paquetesPage.faq.items": [
      {
        "question": "What is a Skiweek, Miniweek and Extraweek?",
        "answer": "Skiweek is a 7-night package (Saturday to Saturday), Miniweek is 2 nights (Saturday to Monday), and Extraweek is 5 nights (Monday to Saturday). Each is designed for different time needs."
      },
      {
        "question": "Are ski passes included?",
        "answer": "Ski passes are quoted separately and are optional. They include 1 extra day compared to accommodation nights. For example: 5 nights = 6 days pass."
      },
      {
        "question": "What does half board include?",
        "answer": "Half board includes breakfast and dinner at all hotels, except Hotel Scorpio which only includes breakfast."
      },
      {
        "question": "Can you coordinate the transfer?",
        "answer": "Yes, we coordinate private transfers from Mendoza and San Rafael, and also charter bus from Buenos Aires during official weeks."
      },
      {
        "question": "Which hotel do you recommend?",
        "answer": "It depends on your budget and preferences. Hotel Piscis is very popular with families, Acuario has excellent value, and Scorpio is the most budget-friendly option."
      }
    ],

    // CTA Section
    "paquetesPage.cta.title": "Ready for Your Las Leñas Adventure?",
    "paquetesPage.cta.subtitle": "Get your complete package quote and live the best ski experience.",
    "paquetesPage.cta.quote": "Get Package Quote",
    "paquetesPage.cta.whatsapp": "Ask on WhatsApp",

    // Contact
    "paquetesPage.contact.badge": "Direct Contact",
    "paquetesPage.contact.title": "Ready for Your Ski Trip?",
    "paquetesPage.contact.subtitle": "Contact us via WhatsApp and we'll build your personalized package.",

    // Footer
    "paquetesPage.footer.description": "Complete ski packages in Las Leñas. Hotels, apartments, passes and transfers.",

    // Header
    "paquetesPage.header.quote": "Quote",
    "paquetesPage.header.packages": "Packages",
    "paquetesPage.header.hotels": "Hotels",
    "paquetesPage.header.faq": "FAQ",
    "paquetesPage.header.whatsappMsg": "Hi! I'm interested in getting a quote for a ski package in Las Leñas",
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
