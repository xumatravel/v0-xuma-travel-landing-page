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
    "ll.nav.quote": "Cotizar",
    "ll.nav.services": "Servicios",
    "ll.nav.whyUs": "Por Qué Nosotros",
    "ll.nav.testimonials": "Testimonios",
    "ll.nav.contact": "Contacto",
    "ll.nav.bookNow": "Reservar Ahora",

    "ll.hero.badge": "+500 Transfers a Las Leñas en 2024",
    "ll.hero.title1": "Traslados Privados",
    "ll.hero.title2": "a Las Leñas",
    "ll.hero.subtitle": "Viajes seguros, directos y con horarios a tu medida desde Mendoza y San Rafael",
    "ll.hero.trust1": "Servicio puerta a puerta",
    "ll.hero.trust2": "Camino de montaña con choferes profesionales",
    "ll.hero.trust3": "Vehículos habilitados",
    "ll.hero.cta1": "Cotizar mi Traslado",
    "ll.hero.cta2": "Consultar Disponibilidad",
    "ll.hero.response": "Te respondemos en menos de 30 minutos",

    "ll.trust.transfers": "Transfers realizados",
    "ll.trust.safe": "Llegadas seguras",
    "ll.trust.service": "Servicio disponible",
    "ll.trust.satisfied": "Clientes satisfechos",

    "ll.services.label": "Opciones de Servicio",
    "ll.services.title": "Elige el Traslado que Necesitas",
    "ll.services.subtitle": "Ofrecemos distintos tipos de servicios y vehículos para adaptarnos a tus necesidades. Conductores expertos y la tranquilidad de viajar con profesionales.",
    "ll.services.private": "Transfer Privado",
    "ll.services.shared": "Transfer Compartido",
    "ll.services.popular": "Más Popular",
    "ll.services.allDays": "Todos los días",
    "ll.services.satMon": "Sábados y Lunes",
    "ll.services.yourSchedule": "Horario a tu elección",
    "ll.services.fixedSchedule": "Horarios fijos de salida",
    "ll.services.availableRoutes": "Rutas disponibles:",
    "ll.services.private.features": ["Vehículo exclusivo para tu grupo", "Pickup en hotel, aeropuerto o dirección", "Horarios 100% a tu elección", "Conductores expertos en montaña", "Cadenas y equipamiento incluido", "Espacio amplio para equipaje de ski", "Paradas en ruta si las necesitas"],
    "ll.services.shared.features": ["Servicio por butaca", "Puntos de encuentro en San Rafael", "Equipamiento de seguridad incluido", "Espacio para equipaje de ski", "Ideal para viajeros solos o parejas", "Sujeto a disponibilidad"],
    "ll.services.quoteBtn": "Cotizar mi Traslado",
    "ll.services.checkAvail": "Consultar Disponibilidad",
    "ll.services.vehicleTypes": "Tipos de Vehículos",
    "ll.services.vehicleTypesSubtitle": "Contamos con diferentes tipos de vehículos para adaptarnos a tu grupo y equipaje.",
    "ll.services.car": "Auto",
    "ll.services.carCapacity": "Hasta 4 pasajeros",
    "ll.services.carLuggage": "Poco equipaje",
    "ll.services.carDesc": "Ideal para parejas o grupos pequeños con equipaje liviano",
    "ll.services.pickup": "Pickup",
    "ll.services.pickupCapacity": "Hasta 4 pasajeros",
    "ll.services.pickupLuggage": "Equipaje deportivo / ski",
    "ll.services.pickupDesc": "Perfecto para llevar esquíes, tablas y equipaje de montaña",
    "ll.services.van": "Van / Minibus 9",
    "ll.services.vanCapacity": "Hasta 9 pasajeros",
    "ll.services.vanLuggage": "Equipaje mediano",
    "ll.services.vanDesc": "Para grupos medianos con espacio para todo el equipaje",
    "ll.services.minibus": "Minibus 14",
    "ll.services.minibusCapacity": "Hasta 14 pasajeros",
    "ll.services.minibusLuggage": "Equipaje grande",
    "ll.services.minibusDesc": "Para grupos grandes, familias o viajes corporativos",
    "ll.services.group": "Grupo Grande",
    "ll.services.groupCapacity": "15+ pasajeros",
    "ll.services.groupLuggage": "A convenir",
    "ll.services.groupDesc": "Coordinamos múltiples vehículos para grupos grandes",
    "ll.services.customQuote": "Consulta por grupos grandes o servicios personalizados",
    "ll.services.customQuoteBtn": "Solicitar Cotización Personalizada",

    "ll.route.label": "Información del viaje",
    "ll.route.title": "Todo lo que necesitas saber",
    "ll.route.duration": "Duración del viaje",
    "ll.route.fromSanRafael": "Desde San Rafael",
    "ll.route.fromMendoza": "Desde Mendoza",
    "ll.route.roadType": "Tipo de camino",
    "ll.route.mountainRoad": "Ruta de montaña",
    "ll.route.asphaltGravel": "Asfalto + ripio",
    "ll.route.conditions": "Condiciones",
    "ll.route.snowWinter": "Nieve en invierno",
    "ll.route.schedules": "Horarios",
    "ll.route.private": "Privado",
    "ll.route.passengerChoice": "A elección del pasajero",
    "ll.route.shared": "Compartido",
    "ll.route.satMon": "Sábados y Lunes",
    "ll.route.serviceType": "Tipo de servicio",
    "ll.route.exclusive": "100% exclusivo",
    "ll.route.asAvailable": "Según disponibilidad",

    "ll.quote.label": "Cotizador de Traslados",
    "ll.quote.title": "Cotiza tu Traslado en Minutos",
    "ll.quote.subtitle": "Completa el formulario y te enviaremos la cotización por WhatsApp al instante.",
    "ll.quote.step1": "Tipo de Servicio",
    "ll.quote.private": "Privado",
    "ll.quote.privateDesc": "Todos los días, horario a elección, puerta a puerta",
    "ll.quote.shared": "Compartido",
    "ll.quote.sharedDesc": "Solo San Rafael, sábados y lunes, por butaca",
    "ll.quote.step2": "Vehículo y Pasajeros",
    "ll.quote.vehicleType": "Tipo de vehículo",
    "ll.quote.passengers": "Cantidad de pasajeros",
    "ll.quote.passenger": "pasajero",
    "ll.quote.passengersPlural": "pasajeros",
    "ll.quote.step3": "Origen y Destino",
    "ll.quote.origin": "Origen",
    "ll.quote.destination": "Destino",
    "ll.quote.other": "Otro (especificar)",
    "ll.quote.specifyDest": "Especifica el destino...",
    "ll.quote.sharedOnlySR": "Servicio compartido solo disponible desde San Rafael",
    "ll.quote.step4": "Fechas de Viaje",
    "ll.quote.roundTrip": "Ida y vuelta",
    "ll.quote.roundTripDesc": "Activa esta opción si necesitas regreso",
    "ll.quote.departureDate": "Fecha de ida *",
    "ll.quote.returnDate": "Fecha de regreso *",
    "ll.quote.selectDate": "Selecciona fecha",
    "ll.quote.step5": "Datos de Contacto",
    "ll.quote.fullName": "Nombre completo *",
    "ll.quote.fullNamePlaceholder": "Tu nombre completo",
    "ll.quote.email": "Email *",
    "ll.quote.emailPlaceholder": "tu@email.com",
    "ll.quote.whatsapp": "WhatsApp *",
    "ll.quote.whatsappPlaceholder": "+54 9 261 XXX XXXX",
    "ll.quote.submit": "Enviar Cotización por WhatsApp",
    "ll.quote.sending": "Enviando...",
    "ll.quote.benefits.instant": "Respuesta instantánea",
    "ll.quote.benefits.noCommit": "Sin compromiso",
    "ll.quote.benefits.bestPrice": "Mejor precio garantizado",
    "ll.quote.vehicle.car": "Auto (4 pax con poco equipaje)",
    "ll.quote.vehicle.pickup": "Camioneta (4 pax c/eq deportivo)",
    "ll.quote.vehicle.minibus9": "Minibus 9 pax",
    "ll.quote.vehicle.minibus14": "Minibus 14 pax",
    "ll.quote.vehicle.group": "Grupo grande (consultar)",
    "ll.quote.msg.greeting": "Hola, quiero solicitar una cotización de traslado a Las Leñas:",
    "ll.quote.msg.serviceType": "Tipo de servicio",
    "ll.quote.msg.vehicle": "Vehículo",
    "ll.quote.msg.passengers": "Cantidad de pasajeros",
    "ll.quote.msg.origin": "Origen",
    "ll.quote.msg.destination": "Destino",
    "ll.quote.msg.departureDate": "Fecha de ida",
    "ll.quote.msg.returnDate": "Fecha de regreso",
    "ll.quote.msg.notSpecified": "No especificada",
    "ll.quote.msg.notApplicable": "No aplica",
    "ll.quote.msg.myName": "Mi nombre es",
    "ll.quote.msg.language": "Idioma preferido: Español",

    "ll.whyUs.label": "Sobre Nosotros",
    "ll.whyUs.title": "Operadores en Mendoza, Especialistas en Las Leñas",
    "ll.whyUs.subtitle": "Somos un equipo local con años de experiencia en logística de montaña. Conocemos cada kilómetro del camino a Las Leñas y nos especializamos en brindar traslados seguros, puntuales y confortables.",
    "ll.whyUs.quote": "Viví Mendoza sin preocuparte por nada. Nosotros coordinamos todo.",
    "ll.whyUs.diffLabel": "Nuestros Diferenciales",
    "ll.whyUs.diffTitle": "Por Qué Somos la Mejor Opción",
    "ll.whyUs.diff1.title": "Transporte Oficial a Las Leñas",
    "ll.whyUs.diff1.desc": "Operador autorizado con todos los permisos y habilitaciones al día.",
    "ll.whyUs.diff2.title": "Choferes Profesionales",
    "ll.whyUs.diff2.desc": "Conductores expertos con más de 10 años en rutas de montaña.",
    "ll.whyUs.diff3.title": "Vehículos Habilitados",
    "ll.whyUs.diff3.desc": "Flota completa con seguros, VTV y equipamiento de seguridad.",
    "ll.whyUs.diff4.title": "Experiencia en Montaña",
    "ll.whyUs.diff4.desc": "Conocemos cada curva del camino. Viaja tranquilo.",
    "ll.whyUs.stats.trips": "Viajes/Temporada",
    "ll.whyUs.stats.exp": "Años Exp.",
    "ll.whyUs.stats.satisfaction": "Satisfacción",

    "ll.testimonials.label": "Testimonios",
    "ll.testimonials.title": "Lo Que Dicen Nuestros Pasajeros",
    "ll.testimonials.subtitle": "Más de 500 viajeros ya confiaron en nosotros para llegar a Las Leñas. Esto es lo que opinan de su experiencia.",

    "ll.cta.title": "¿Listo para Reservar tu Traslado?",
    "ll.cta.subtitle": "Completa el formulario y recibe tu cotización por WhatsApp en minutos.",
    "ll.cta.quoteBtn": "Cotizar mi Traslado",
    "ll.cta.checkAvail": "Consultar Disponibilidad",
    "ll.cta.response": "Respuesta en menos de 30 min",
    "ll.cta.noCommit": "Sin compromiso",

    "ll.faq.label": "Preguntas Frecuentes",
    "ll.faq.title": "¿Tienes Dudas?",
    "ll.faq.subtitle": "Aquí respondemos las preguntas más comunes sobre nuestro servicio de transfers a Las Leñas.",
    "ll.faq.items": [
      { "question": "¿Cuánto dura el viaje de Mendoza a Las Leñas?", "answer": "El viaje dura aproximadamente 5 horas dependiendo de las condiciones climáticas y del camino. La distancia es de unos 450 km y el último tramo es de montaña, lo que requiere precaución especialmente en invierno." },
      { "question": "¿Qué tipo de vehículos utilizan?", "answer": "Utilizamos diferentes tipos de vehículos según las necesidades: autos, pickups, vans y minibuses. Todos equipados con cadenas para nieve cuando es necesario, calefacción potente y espacio amplio para equipaje de ski." },
      { "question": "¿Pueden buscarme en el aeropuerto de Mendoza?", "answer": "Sí, ofrecemos servicio de pickup tanto en el aeropuerto como en cualquier hotel de Mendoza ciudad. Coordinamos el horario según tu vuelo con margen para retrasos." },
      { "question": "¿Qué pasa si hay mal tiempo o se cierra el camino?", "answer": "Monitoreamos constantemente las condiciones climáticas y viales. Si el camino está cerrado, reprogramamos el viaje sin costo adicional. Tu seguridad es nuestra prioridad." },
      { "question": "¿Cuánto equipaje puedo llevar?", "answer": "Nuestros vehículos tienen amplio espacio para equipaje de ski (esquíes, tablas de snowboard, botas, etc.) además de valijas. Si tienes equipaje especial, avísanos al reservar." },
      { "question": "¿Cómo es el pago?", "answer": "Aceptamos transferencia bancaria, efectivo (pesos argentinos o dólares) y tarjetas de crédito. Se requiere una seña del 30% para confirmar la reserva." },
      { "question": "¿Ofrecen servicio de ida y vuelta?", "answer": "Sí, ofrecemos transfer de ida, de vuelta, o ambos. Al reservar ida y vuelta juntos obtienes un 10% de descuento sobre el total." },
      { "question": "¿Puedo hacer paradas en el camino?", "answer": "Por supuesto. Podemos hacer paradas para fotos, baño o comida durante el trayecto. Solo coordínalo con tu conductor." }
    ],

    "ll.contact.label": "Contacto Directo",
    "ll.contact.title": "¿Listo para Viajar a Las Leñas?",
    "ll.contact.subtitle": "Contactanos por WhatsApp y reserva tu transfer en minutos. Respondemos rápido y te confirmamos disponibilidad al instante.",
    "ll.contact.quoteBtn": "Cotizar mi Traslado",
    "ll.contact.checkAvail": "Consultar Disponibilidad",
    "ll.contact.whatsapp": "WhatsApp",
    "ll.contact.email": "Email",
    "ll.contact.hours": "Horario",
    "ll.contact.hoursValue": "Lunes a Domingo, 8-22hs",
    "ll.contact.noCommit": "Sin compromisos. Consulta sin costo y reserva solo cuando estés seguro.",

    "ll.footer.description": "Transfers privados y seguros a Las Leñas. Vehículos equipados para montaña y conductores expertos.",
    "ll.footer.backHome": "Volver a XUMA Travel",
    "ll.footer.links": "Enlaces",
    "ll.footer.contact": "Contacto",
    "ll.footer.rights": "Todos los derechos reservados.",
    "ll.footer.services": "Servicios",
    "ll.footer.howItWorks": "Cómo Funciona",
    "ll.footer.whyUs": "Por Qué Nosotros",
    "ll.footer.testimonials": "Testimonios",

    "ll.backHome": "Volver al inicio",
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
    "ll.nav.quote": "Orçamento",
    "ll.nav.services": "Serviços",
    "ll.nav.whyUs": "Por Que Nós",
    "ll.nav.testimonials": "Depoimentos",
    "ll.nav.contact": "Contato",
    "ll.nav.bookNow": "Reservar Agora",

    "ll.hero.badge": "+500 Transfers para Las Leñas em 2024",
    "ll.hero.title1": "Transfers Privados",
    "ll.hero.title2": "para Las Leñas",
    "ll.hero.subtitle": "Viagens seguras, diretas e com horários flexíveis saindo de Mendoza e San Rafael",
    "ll.hero.trust1": "Serviço porta a porta",
    "ll.hero.trust2": "Estrada de montanha com motoristas profissionais",
    "ll.hero.trust3": "Veículos habilitados",
    "ll.hero.cta1": "Solicitar Orçamento",
    "ll.hero.cta2": "Consultar Disponibilidade",
    "ll.hero.response": "Respondemos em menos de 30 minutos",

    "ll.trust.transfers": "Transfers realizados",
    "ll.trust.safe": "Chegadas seguras",
    "ll.trust.service": "Serviço disponível",
    "ll.trust.satisfied": "Clientes satisfeitos",

    "ll.services.label": "Opções de Serviço",
    "ll.services.title": "Escolha o Transfer que Você Precisa",
    "ll.services.subtitle": "Oferecemos diferentes tipos de serviços e veículos para nos adaptar às suas necessidades. Motoristas experientes e a tranquilidade de viajar com profissionais.",
    "ll.services.private": "Transfer Privado",
    "ll.services.shared": "Transfer Compartilhado",
    "ll.services.popular": "Mais Popular",
    "ll.services.allDays": "Todos os dias",
    "ll.services.satMon": "Sábados e Segundas",
    "ll.services.yourSchedule": "Horário à sua escolha",
    "ll.services.fixedSchedule": "Horários fixos de saída",
    "ll.services.availableRoutes": "Rotas disponíveis:",
    "ll.services.private.features": ["Veículo exclusivo para seu grupo", "Pickup no hotel, aeroporto ou endereço", "Horários 100% à sua escolha", "Motoristas experientes em montanha", "Correntes e equipamento incluídos", "Espaço amplo para bagagem de ski", "Paradas na rota se precisar"],
    "ll.services.shared.features": ["Serviço por assento", "Pontos de encontro em San Rafael", "Equipamento de segurança incluído", "Espaço para bagagem de ski", "Ideal para viajantes sozinhos ou casais", "Sujeito à disponibilidade"],
    "ll.services.quoteBtn": "Solicitar Orçamento",
    "ll.services.checkAvail": "Consultar Disponibilidade",
    "ll.services.vehicleTypes": "Tipos de Veículos",
    "ll.services.vehicleTypesSubtitle": "Temos diferentes tipos de veículos para nos adaptar ao seu grupo e bagagem.",
    "ll.services.car": "Carro",
    "ll.services.carCapacity": "Até 4 passageiros",
    "ll.services.carLuggage": "Pouca bagagem",
    "ll.services.carDesc": "Ideal para casais ou grupos pequenos com bagagem leve",
    "ll.services.pickup": "Pickup",
    "ll.services.pickupCapacity": "Até 4 passageiros",
    "ll.services.pickupLuggage": "Bagagem esportiva / ski",
    "ll.services.pickupDesc": "Perfeito para levar esquis, pranchas e bagagem de montanha",
    "ll.services.van": "Van / Minibus 9",
    "ll.services.vanCapacity": "Até 9 passageiros",
    "ll.services.vanLuggage": "Bagagem média",
    "ll.services.vanDesc": "Para grupos médios com espaço para toda bagagem",
    "ll.services.minibus": "Minibus 14",
    "ll.services.minibusCapacity": "Até 14 passageiros",
    "ll.services.minibusLuggage": "Bagagem grande",
    "ll.services.minibusDesc": "Para grupos grandes, famílias ou viagens corporativas",
    "ll.services.group": "Grupo Grande",
    "ll.services.groupCapacity": "15+ passageiros",
    "ll.services.groupLuggage": "A combinar",
    "ll.services.groupDesc": "Coordenamos múltiplos veículos para grupos grandes",
    "ll.services.customQuote": "Consulte para grupos grandes ou serviços personalizados",
    "ll.services.customQuoteBtn": "Solicitar Orçamento Personalizado",

    "ll.route.label": "Informações da viagem",
    "ll.route.title": "Tudo que você precisa saber",
    "ll.route.duration": "Duração da viagem",
    "ll.route.fromSanRafael": "De San Rafael",
    "ll.route.fromMendoza": "De Mendoza",
    "ll.route.roadType": "Tipo de estrada",
    "ll.route.mountainRoad": "Rota de montanha",
    "ll.route.asphaltGravel": "Asfalto + cascalho",
    "ll.route.conditions": "Condições",
    "ll.route.snowWinter": "Neve no inverno",
    "ll.route.schedules": "Horários",
    "ll.route.private": "Privado",
    "ll.route.passengerChoice": "À escolha do passageiro",
    "ll.route.shared": "Compartilhado",
    "ll.route.satMon": "Sábados e Segundas",
    "ll.route.serviceType": "Tipo de serviço",
    "ll.route.exclusive": "100% exclusivo",
    "ll.route.asAvailable": "Conforme disponibilidade",

    "ll.quote.label": "Cotador de Transfers",
    "ll.quote.title": "Solicite seu Orçamento em Minutos",
    "ll.quote.subtitle": "Preencha o formulário e enviaremos o orçamento pelo WhatsApp instantaneamente.",
    "ll.quote.step1": "Tipo de Serviço",
    "ll.quote.private": "Privado",
    "ll.quote.privateDesc": "Todos os dias, horário à escolha, porta a porta",
    "ll.quote.shared": "Compartilhado",
    "ll.quote.sharedDesc": "Apenas San Rafael, sábados e segundas, por assento",
    "ll.quote.step2": "Veículo e Passageiros",
    "ll.quote.vehicleType": "Tipo de veículo",
    "ll.quote.passengers": "Quantidade de passageiros",
    "ll.quote.passenger": "passageiro",
    "ll.quote.passengersPlural": "passageiros",
    "ll.quote.step3": "Origem e Destino",
    "ll.quote.origin": "Origem",
    "ll.quote.destination": "Destino",
    "ll.quote.other": "Outro (especificar)",
    "ll.quote.specifyDest": "Especifique o destino...",
    "ll.quote.sharedOnlySR": "Serviço compartilhado disponível apenas de San Rafael",
    "ll.quote.step4": "Datas da Viagem",
    "ll.quote.roundTrip": "Ida e volta",
    "ll.quote.roundTripDesc": "Ative esta opção se precisar de retorno",
    "ll.quote.departureDate": "Data de ida *",
    "ll.quote.returnDate": "Data de retorno *",
    "ll.quote.selectDate": "Selecione a data",
    "ll.quote.step5": "Dados de Contato",
    "ll.quote.fullName": "Nome completo *",
    "ll.quote.fullNamePlaceholder": "Seu nome completo",
    "ll.quote.email": "Email *",
    "ll.quote.emailPlaceholder": "seu@email.com",
    "ll.quote.whatsapp": "WhatsApp *",
    "ll.quote.whatsappPlaceholder": "+55 11 XXXXX XXXX",
    "ll.quote.submit": "Enviar Orçamento por WhatsApp",
    "ll.quote.sending": "Enviando...",
    "ll.quote.benefits.instant": "Resposta instantânea",
    "ll.quote.benefits.noCommit": "Sem compromisso",
    "ll.quote.benefits.bestPrice": "Melhor preço garantido",
    "ll.quote.vehicle.car": "Carro (4 pax com pouca bagagem)",
    "ll.quote.vehicle.pickup": "Caminhonete (4 pax c/eq esportivo)",
    "ll.quote.vehicle.minibus9": "Minibus 9 pax",
    "ll.quote.vehicle.minibus14": "Minibus 14 pax",
    "ll.quote.vehicle.group": "Grupo grande (consultar)",
    "ll.quote.msg.greeting": "Olá, quero solicitar um orçamento de transfer para Las Leñas:",
    "ll.quote.msg.serviceType": "Tipo de serviço",
    "ll.quote.msg.vehicle": "Veículo",
    "ll.quote.msg.passengers": "Quantidade de passageiros",
    "ll.quote.msg.origin": "Origem",
    "ll.quote.msg.destination": "Destino",
    "ll.quote.msg.departureDate": "Data de ida",
    "ll.quote.msg.returnDate": "Data de retorno",
    "ll.quote.msg.notSpecified": "Não especificada",
    "ll.quote.msg.notApplicable": "Não aplicável",
    "ll.quote.msg.myName": "Meu nome é",
    "ll.quote.msg.language": "Idioma preferido: Português",

    "ll.whyUs.label": "Sobre Nós",
    "ll.whyUs.title": "Operadores em Mendoza, Especialistas em Las Leñas",
    "ll.whyUs.subtitle": "Somos uma equipe local com anos de experiência em logística de montanha. Conhecemos cada quilômetro do caminho para Las Leñas e nos especializamos em oferecer transfers seguros, pontuais e confortáveis.",
    "ll.whyUs.quote": "Viva Mendoza sem se preocupar com nada. Nós coordenamos tudo.",
    "ll.whyUs.diffLabel": "Nossos Diferenciais",
    "ll.whyUs.diffTitle": "Por Que Somos a Melhor Opção",
    "ll.whyUs.diff1.title": "Transporte Oficial para Las Leñas",
    "ll.whyUs.diff1.desc": "Operador autorizado com todas as permissões e habilitações em dia.",
    "ll.whyUs.diff2.title": "Motoristas Profissionais",
    "ll.whyUs.diff2.desc": "Motoristas experientes com mais de 10 anos em rotas de montanha.",
    "ll.whyUs.diff3.title": "Veículos Habilitados",
    "ll.whyUs.diff3.desc": "Frota completa com seguros, inspeção e equipamentos de segurança.",
    "ll.whyUs.diff4.title": "Experiência em Montanha",
    "ll.whyUs.diff4.desc": "Conhecemos cada curva do caminho. Viaje tranquilo.",
    "ll.whyUs.stats.trips": "Viagens/Temporada",
    "ll.whyUs.stats.exp": "Anos Exp.",
    "ll.whyUs.stats.satisfaction": "Satisfação",

    "ll.testimonials.label": "Depoimentos",
    "ll.testimonials.title": "O Que Dizem Nossos Passageiros",
    "ll.testimonials.subtitle": "Mais de 500 viajantes já confiaram em nós para chegar a Las Leñas. Veja o que eles acham da experiência.",

    "ll.cta.title": "Pronto para Reservar seu Transfer?",
    "ll.cta.subtitle": "Preencha o formulário e receba seu orçamento pelo WhatsApp em minutos.",
    "ll.cta.quoteBtn": "Solicitar Orçamento",
    "ll.cta.checkAvail": "Consultar Disponibilidade",
    "ll.cta.response": "Resposta em menos de 30 min",
    "ll.cta.noCommit": "Sem compromisso",

    "ll.faq.label": "Perguntas Frequentes",
    "ll.faq.title": "Tem Dúvidas?",
    "ll.faq.subtitle": "Aqui respondemos as perguntas mais comuns sobre nosso serviço de transfers para Las Leñas.",
    "ll.faq.items": [
      { "question": "Quanto tempo dura a viagem de Mendoza a Las Leñas?", "answer": "A viagem dura aproximadamente 5 horas dependendo das condições climáticas e da estrada. A distância é de cerca de 450 km e o último trecho é de montanha, o que requer precaução especialmente no inverno." },
      { "question": "Que tipo de veículos vocês usam?", "answer": "Usamos diferentes tipos de veículos conforme as necessidades: carros, pickups, vans e minibus. Todos equipados com correntes para neve quando necessário, aquecimento potente e espaço amplo para bagagem de ski." },
      { "question": "Vocês podem me buscar no aeroporto de Mendoza?", "answer": "Sim, oferecemos serviço de pickup tanto no aeroporto quanto em qualquer hotel de Mendoza cidade. Coordenamos o horário de acordo com seu voo com margem para atrasos." },
      { "question": "O que acontece se o tempo estiver ruim ou a estrada fechar?", "answer": "Monitoramos constantemente as condições climáticas e da estrada. Se a estrada estiver fechada, reprogramamos a viagem sem custo adicional. Sua segurança é nossa prioridade." },
      { "question": "Quanta bagagem posso levar?", "answer": "Nossos veículos têm amplo espaço para bagagem de ski (esquis, pranchas de snowboard, botas, etc.) além de malas. Se tiver bagagem especial, avise-nos ao reservar." },
      { "question": "Como é o pagamento?", "answer": "Aceitamos transferência bancária, dinheiro (pesos argentinos ou dólares) e cartões de crédito. É necessário um sinal de 30% para confirmar a reserva." },
      { "question": "Vocês oferecem serviço de ida e volta?", "answer": "Sim, oferecemos transfer de ida, de volta, ou ambos. Ao reservar ida e volta juntos você obtém 10% de desconto no total." },
      { "question": "Posso fazer paradas no caminho?", "answer": "Com certeza. Podemos fazer paradas para fotos, banheiro ou comida durante o trajeto. Basta coordenar com seu motorista." }
    ],

    "ll.contact.label": "Contato Direto",
    "ll.contact.title": "Pronto para Viajar a Las Leñas?",
    "ll.contact.subtitle": "Entre em contato pelo WhatsApp e reserve seu transfer em minutos. Respondemos rápido e confirmamos disponibilidade na hora.",
    "ll.contact.quoteBtn": "Solicitar Orçamento",
    "ll.contact.checkAvail": "Consultar Disponibilidade",
    "ll.contact.whatsapp": "WhatsApp",
    "ll.contact.email": "Email",
    "ll.contact.hours": "Horário",
    "ll.contact.hoursValue": "Segunda a Domingo, 8-22h",
    "ll.contact.noCommit": "Sem compromisso. Consulte sem custo e reserve só quando tiver certeza.",

    "ll.footer.description": "Transfers privados e seguros para Las Leñas. Veículos equipados para montanha e motoristas experientes.",
    "ll.footer.backHome": "Voltar para XUMA Travel",
    "ll.footer.links": "Links",
    "ll.footer.contact": "Contato",
    "ll.footer.rights": "Todos os direitos reservados.",
    "ll.footer.services": "Serviços",
    "ll.footer.howItWorks": "Como Funciona",
    "ll.footer.whyUs": "Por Que Nós",
    "ll.footer.testimonials": "Depoimentos",

    "ll.backHome": "Voltar ao início",
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
    "ll.nav.quote": "Quote",
    "ll.nav.services": "Services",
    "ll.nav.whyUs": "Why Us",
    "ll.nav.testimonials": "Testimonials",
    "ll.nav.contact": "Contact",
    "ll.nav.bookNow": "Book Now",

    "ll.hero.badge": "+500 Transfers to Las Leñas in 2024",
    "ll.hero.title1": "Private Transfers",
    "ll.hero.title2": "to Las Leñas",
    "ll.hero.subtitle": "Safe, direct trips with flexible schedules from Mendoza and San Rafael",
    "ll.hero.trust1": "Door-to-door service",
    "ll.hero.trust2": "Mountain road with professional drivers",
    "ll.hero.trust3": "Licensed vehicles",
    "ll.hero.cta1": "Get a Quote",
    "ll.hero.cta2": "Check Availability",
    "ll.hero.response": "We respond in less than 30 minutes",

    "ll.trust.transfers": "Transfers completed",
    "ll.trust.safe": "Safe arrivals",
    "ll.trust.service": "Service available",
    "ll.trust.satisfied": "Satisfied clients",

    "ll.services.label": "Service Options",
    "ll.services.title": "Choose the Transfer You Need",
    "ll.services.subtitle": "We offer different types of services and vehicles to adapt to your needs. Expert drivers and the peace of mind of traveling with professionals.",
    "ll.services.private": "Private Transfer",
    "ll.services.shared": "Shared Transfer",
    "ll.services.popular": "Most Popular",
    "ll.services.allDays": "Every day",
    "ll.services.satMon": "Saturdays and Mondays",
    "ll.services.yourSchedule": "Schedule of your choice",
    "ll.services.fixedSchedule": "Fixed departure times",
    "ll.services.availableRoutes": "Available routes:",
    "ll.services.private.features": ["Exclusive vehicle for your group", "Pickup at hotel, airport or address", "100% flexible schedules", "Mountain expert drivers", "Chains and equipment included", "Ample space for ski gear", "Stops along the way if needed"],
    "ll.services.shared.features": ["Per-seat service", "Meeting points in San Rafael", "Safety equipment included", "Space for ski gear", "Ideal for solo travelers or couples", "Subject to availability"],
    "ll.services.quoteBtn": "Get a Quote",
    "ll.services.checkAvail": "Check Availability",
    "ll.services.vehicleTypes": "Vehicle Types",
    "ll.services.vehicleTypesSubtitle": "We have different types of vehicles to adapt to your group and luggage.",
    "ll.services.car": "Car",
    "ll.services.carCapacity": "Up to 4 passengers",
    "ll.services.carLuggage": "Light luggage",
    "ll.services.carDesc": "Ideal for couples or small groups with light luggage",
    "ll.services.pickup": "Pickup",
    "ll.services.pickupCapacity": "Up to 4 passengers",
    "ll.services.pickupLuggage": "Sports gear / ski",
    "ll.services.pickupDesc": "Perfect for carrying skis, boards and mountain gear",
    "ll.services.van": "Van / Minibus 9",
    "ll.services.vanCapacity": "Up to 9 passengers",
    "ll.services.vanLuggage": "Medium luggage",
    "ll.services.vanDesc": "For medium groups with space for all luggage",
    "ll.services.minibus": "Minibus 14",
    "ll.services.minibusCapacity": "Up to 14 passengers",
    "ll.services.minibusLuggage": "Large luggage",
    "ll.services.minibusDesc": "For large groups, families or corporate trips",
    "ll.services.group": "Large Group",
    "ll.services.groupCapacity": "15+ passengers",
    "ll.services.groupLuggage": "To be arranged",
    "ll.services.groupDesc": "We coordinate multiple vehicles for large groups",
    "ll.services.customQuote": "Ask about large groups or custom services",
    "ll.services.customQuoteBtn": "Request Custom Quote",

    "ll.route.label": "Trip Information",
    "ll.route.title": "Everything You Need to Know",
    "ll.route.duration": "Trip duration",
    "ll.route.fromSanRafael": "From San Rafael",
    "ll.route.fromMendoza": "From Mendoza",
    "ll.route.roadType": "Road type",
    "ll.route.mountainRoad": "Mountain route",
    "ll.route.asphaltGravel": "Asphalt + gravel",
    "ll.route.conditions": "Conditions",
    "ll.route.snowWinter": "Snow in winter",
    "ll.route.schedules": "Schedules",
    "ll.route.private": "Private",
    "ll.route.passengerChoice": "Passenger's choice",
    "ll.route.shared": "Shared",
    "ll.route.satMon": "Saturdays and Mondays",
    "ll.route.serviceType": "Service type",
    "ll.route.exclusive": "100% exclusive",
    "ll.route.asAvailable": "Subject to availability",

    "ll.quote.label": "Transfer Quote",
    "ll.quote.title": "Get Your Quote in Minutes",
    "ll.quote.subtitle": "Fill out the form and we'll send you the quote via WhatsApp instantly.",
    "ll.quote.step1": "Service Type",
    "ll.quote.private": "Private",
    "ll.quote.privateDesc": "Every day, flexible schedule, door to door",
    "ll.quote.shared": "Shared",
    "ll.quote.sharedDesc": "San Rafael only, Saturdays and Mondays, per seat",
    "ll.quote.step2": "Vehicle and Passengers",
    "ll.quote.vehicleType": "Vehicle type",
    "ll.quote.passengers": "Number of passengers",
    "ll.quote.passenger": "passenger",
    "ll.quote.passengersPlural": "passengers",
    "ll.quote.step3": "Origin and Destination",
    "ll.quote.origin": "Origin",
    "ll.quote.destination": "Destination",
    "ll.quote.other": "Other (specify)",
    "ll.quote.specifyDest": "Specify destination...",
    "ll.quote.sharedOnlySR": "Shared service only available from San Rafael",
    "ll.quote.step4": "Travel Dates",
    "ll.quote.roundTrip": "Round trip",
    "ll.quote.roundTripDesc": "Enable this option if you need a return trip",
    "ll.quote.departureDate": "Departure date *",
    "ll.quote.returnDate": "Return date *",
    "ll.quote.selectDate": "Select date",
    "ll.quote.step5": "Contact Information",
    "ll.quote.fullName": "Full name *",
    "ll.quote.fullNamePlaceholder": "Your full name",
    "ll.quote.email": "Email *",
    "ll.quote.emailPlaceholder": "your@email.com",
    "ll.quote.whatsapp": "WhatsApp *",
    "ll.quote.whatsappPlaceholder": "+1 XXX XXX XXXX",
    "ll.quote.submit": "Send Quote via WhatsApp",
    "ll.quote.sending": "Sending...",
    "ll.quote.benefits.instant": "Instant response",
    "ll.quote.benefits.noCommit": "No commitment",
    "ll.quote.benefits.bestPrice": "Best price guaranteed",
    "ll.quote.vehicle.car": "Car (4 pax light luggage)",
    "ll.quote.vehicle.pickup": "Pickup truck (4 pax w/sports gear)",
    "ll.quote.vehicle.minibus9": "Minibus 9 pax",
    "ll.quote.vehicle.minibus14": "Minibus 14 pax",
    "ll.quote.vehicle.group": "Large group (inquire)",
    "ll.quote.msg.greeting": "Hello, I would like to request a quote for a transfer to Las Leñas:",
    "ll.quote.msg.serviceType": "Service type",
    "ll.quote.msg.vehicle": "Vehicle",
    "ll.quote.msg.passengers": "Number of passengers",
    "ll.quote.msg.origin": "Origin",
    "ll.quote.msg.destination": "Destination",
    "ll.quote.msg.departureDate": "Departure date",
    "ll.quote.msg.returnDate": "Return date",
    "ll.quote.msg.notSpecified": "Not specified",
    "ll.quote.msg.notApplicable": "Not applicable",
    "ll.quote.msg.myName": "My name is",
    "ll.quote.msg.language": "Preferred language: English",

    "ll.whyUs.label": "About Us",
    "ll.whyUs.title": "Mendoza Operators, Las Leñas Specialists",
    "ll.whyUs.subtitle": "We are a local team with years of experience in mountain logistics. We know every kilometer of the road to Las Leñas and specialize in providing safe, punctual and comfortable transfers.",
    "ll.whyUs.quote": "Experience Mendoza worry-free. We coordinate everything.",
    "ll.whyUs.diffLabel": "Our Differentiators",
    "ll.whyUs.diffTitle": "Why We're the Best Choice",
    "ll.whyUs.diff1.title": "Official Las Leñas Transport",
    "ll.whyUs.diff1.desc": "Authorized operator with all permits and licenses up to date.",
    "ll.whyUs.diff2.title": "Professional Drivers",
    "ll.whyUs.diff2.desc": "Expert drivers with 10+ years on mountain routes.",
    "ll.whyUs.diff3.title": "Licensed Vehicles",
    "ll.whyUs.diff3.desc": "Complete fleet with insurance, inspection and safety equipment.",
    "ll.whyUs.diff4.title": "Mountain Experience",
    "ll.whyUs.diff4.desc": "We know every curve of the road. Travel with peace of mind.",
    "ll.whyUs.stats.trips": "Trips/Season",
    "ll.whyUs.stats.exp": "Years Exp.",
    "ll.whyUs.stats.satisfaction": "Satisfaction",

    "ll.testimonials.label": "Testimonials",
    "ll.testimonials.title": "What Our Passengers Say",
    "ll.testimonials.subtitle": "Over 500 travelers have trusted us to get to Las Leñas. Here's what they think of their experience.",

    "ll.cta.title": "Ready to Book Your Transfer?",
    "ll.cta.subtitle": "Fill out the form and receive your quote via WhatsApp in minutes.",
    "ll.cta.quoteBtn": "Get a Quote",
    "ll.cta.checkAvail": "Check Availability",
    "ll.cta.response": "Response in less than 30 min",
    "ll.cta.noCommit": "No commitment",

    "ll.faq.label": "Frequently Asked Questions",
    "ll.faq.title": "Have Questions?",
    "ll.faq.subtitle": "Here we answer the most common questions about our Las Leñas transfer service.",
    "ll.faq.items": [
      { "question": "How long is the trip from Mendoza to Las Leñas?", "answer": "The trip takes approximately 5 hours depending on weather and road conditions. The distance is about 450 km and the last stretch is mountain road, which requires caution especially in winter." },
      { "question": "What type of vehicles do you use?", "answer": "We use different types of vehicles according to needs: cars, pickups, vans and minibuses. All equipped with snow chains when necessary, powerful heating and ample space for ski gear." },
      { "question": "Can you pick me up at Mendoza airport?", "answer": "Yes, we offer pickup service both at the airport and at any hotel in Mendoza city. We coordinate the schedule according to your flight with margin for delays." },
      { "question": "What happens if there's bad weather or the road closes?", "answer": "We constantly monitor weather and road conditions. If the road is closed, we reschedule the trip at no additional cost. Your safety is our priority." },
      { "question": "How much luggage can I bring?", "answer": "Our vehicles have ample space for ski gear (skis, snowboards, boots, etc.) plus suitcases. If you have special luggage, let us know when booking." },
      { "question": "How does payment work?", "answer": "We accept bank transfer, cash (Argentine pesos or dollars) and credit cards. A 30% deposit is required to confirm the reservation." },
      { "question": "Do you offer round trip service?", "answer": "Yes, we offer one-way, return, or both. When booking round trip together you get a 10% discount on the total." },
      { "question": "Can I make stops along the way?", "answer": "Of course. We can make stops for photos, restroom or food during the trip. Just coordinate with your driver." }
    ],

    "ll.contact.label": "Direct Contact",
    "ll.contact.title": "Ready to Travel to Las Leñas?",
    "ll.contact.subtitle": "Contact us via WhatsApp and book your transfer in minutes. We respond quickly and confirm availability instantly.",
    "ll.contact.quoteBtn": "Get a Quote",
    "ll.contact.checkAvail": "Check Availability",
    "ll.contact.whatsapp": "WhatsApp",
    "ll.contact.email": "Email",
    "ll.contact.hours": "Hours",
    "ll.contact.hoursValue": "Monday to Sunday, 8am-10pm",
    "ll.contact.noCommit": "No commitment. Free consultation and book only when you're sure.",

    "ll.footer.description": "Private and safe transfers to Las Leñas. Mountain-equipped vehicles and expert drivers.",
    "ll.footer.backHome": "Back to XUMA Travel",
    "ll.footer.links": "Links",
    "ll.footer.contact": "Contact",
    "ll.footer.rights": "All rights reserved.",
    "ll.footer.services": "Services",
    "ll.footer.howItWorks": "How It Works",
    "ll.footer.whyUs": "Why Us",
    "ll.footer.testimonials": "Testimonials",

    "ll.backHome": "Back to home",
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
