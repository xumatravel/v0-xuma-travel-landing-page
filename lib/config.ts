/**
 * ============================================================================
 * CONFIGURACION CENTRALIZADA DE XUMA TRAVEL
 * ============================================================================
 * 
 * Este archivo centraliza toda la configuracion del sitio para facilitar:
 * - Mantenimiento: Un solo lugar para actualizar valores
 * - Escalabilidad: Preparado para integraciones futuras (CRM, Google Sheets)
 * - Consistencia: Mismo numero/datos en toda la web
 * 
 * INSTRUCCIONES DE USO:
 * import { WHATSAPP_CONFIG, COMPANY_CONFIG } from "@/lib/config"
 */

// ============================================================================
// CONFIGURACION DE WHATSAPP
// ============================================================================
export const WHATSAPP_CONFIG = {
  // Numero comercial de XUMA TRAVEL (con codigo de pais, sin +)
  number: "5492604023087",
  
  // Mensaje por defecto cuando no hay formulario
  defaultMessage: "Hola! Estoy interesado en planificar mi viaje a Mendoza",
  
  // Mensaje para agencias
  agencyMessage: "Hola! Soy una agencia de viajes interesada en ser partner de XUMA TRAVEL",
  
  // Construir URL de WhatsApp
  buildUrl: (message?: string) => {
    const text = message || WHATSAPP_CONFIG.defaultMessage
    return `https://wa.me/${WHATSAPP_CONFIG.number}?text=${encodeURIComponent(text)}`
  },
  
  // Abrir WhatsApp con fallback robusto
  open: (message?: string) => {
    const url = WHATSAPP_CONFIG.buildUrl(message)
    
    try {
      const newWindow = window.open(url, "_blank", "noopener,noreferrer")
      // Fallback si el popup fue bloqueado
      if (!newWindow || newWindow.closed || typeof newWindow.closed === "undefined") {
        window.location.href = url
      }
      return true
    } catch {
      // Fallback final
      window.location.href = url
      return true
    }
  }
}

// ============================================================================
// CONFIGURACION DE LA EMPRESA
// ============================================================================
export const COMPANY_CONFIG = {
  name: "XUMA TRAVEL",
  email: "info@xuma.com.ar",
  website: "xumatravel.com",
  
  // Redes sociales
  social: {
    instagram: "https://instagram.com/xumatravel",
    facebook: "https://facebook.com/xumatravel",
  }
}

// ============================================================================
// CONFIGURACION DE INTEGRACIONES (FUTURAS)
// ============================================================================
export const INTEGRATIONS_CONFIG = {
  // Email backup via Resend
  email: {
    enabled: true,
    from: "XUMA Travel <noreply@xuma.com.ar>",
    to: ["info@xuma.com.ar"],
  },
  
  // Google Sheets backup (futuro)
  googleSheets: {
    enabled: false,
    spreadsheetId: "", // TODO: Agregar cuando se conecte
  },
  
  // CRM sync (futuro)
  crm: {
    enabled: false,
    provider: "", // "hubspot" | "pipedrive" | "salesforce"
    apiKey: "", // TODO: Usar variable de entorno
  }
}

// ============================================================================
// MAPEO DE INTERESES
// ============================================================================
export const INTEREST_MAP: Record<string, string> = {
  ski: "Ski en Las Leñas",
  experience: "Experiencia Mendoza (vino + montaña)",
  transfer: "Transfers",
  agency: "Soy Agencia de Viajes"
}

// ============================================================================
// UTILIDADES PARA LEADS
// ============================================================================

/**
 * Construye un mensaje de WhatsApp formateado con los datos del formulario
 */
export function buildWhatsAppMessage(data: {
  name?: string
  country?: string
  email?: string
  phone?: string
  arrivalDate?: string
  departureDate?: string
  passengers?: string
  interest?: string
  message?: string
}): string {
  const interestLabel = INTEREST_MAP[data.interest || ""] || data.interest || "-"
  
  let msg = `*Nueva consulta desde XUMA TRAVEL*\n\n`
  msg += `*Nombre completo:* ${data.name || "-"}\n`
  msg += `*País:* ${data.country || "-"}\n`
  msg += `*Email:* ${data.email || "-"}\n`
  msg += `*Teléfono:* ${data.phone || "-"}\n`
  msg += `*Fecha de llegada:* ${data.arrivalDate || "-"}\n`
  msg += `*Fecha de regreso:* ${data.departureDate || "-"}\n`
  msg += `*Cantidad de pasajeros:* ${data.passengers || "1"}\n`
  msg += `*Interés:* ${interestLabel}\n`
  
  if (data.message) {
    msg += `*Detalles adicionales:* ${data.message}\n`
  }

  return msg
}

/**
 * Prepara los datos del lead para envio a backend/integraciones
 */
export function prepareLeadData(formData: {
  name: string
  email: string
  phone: string
  country: string
  arrivalDate: string
  departureDate: string
  passengers: string
  interest: string
  message: string
}) {
  return {
    // Datos del contacto
    name: formData.name.trim(),
    email: formData.email.trim().toLowerCase(),
    phone: formData.phone.trim(),
    country: formData.country.trim(),
    
    // Datos del viaje
    arrivalDate: formData.arrivalDate,
    departureDate: formData.departureDate || null,
    passengers: formData.passengers || "1",
    interest: formData.interest,
    interestLabel: INTEREST_MAP[formData.interest] || formData.interest,
    
    // Mensaje adicional
    message: formData.message.trim() || null,
    
    // Metadata
    source: "landing_page_form",
    timestamp: new Date().toISOString(),
    userAgent: typeof window !== "undefined" ? window.navigator.userAgent : null,
  }
}
