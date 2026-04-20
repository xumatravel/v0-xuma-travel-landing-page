/**
 * XUMA Travel Contact Configuration
 * 
 * Centralized configuration for contact form functionality.
 * Easy to maintain and scale for future CRM/Google Sheets integrations.
 */

// WhatsApp Configuration
export const WHATSAPP_CONFIG = {
  // Phone number with country code (Argentina: 54, area code: 260)
  phoneNumber: "5492604023087",
  // Default message when no form data is available
  defaultMessage: "Hola! Estoy interesado en planificar mi experiencia en Mendoza",
} as const

// Interest options mapping
export const INTEREST_OPTIONS = {
  ski: "Ski en Las Leñas",
  experience: "Experiencia Mendoza (vino + montaña)",
  transfer: "Transfers",
  agency: "Soy Agencia de Viajes",
} as const

// Form data interface for type safety
export interface ContactFormData {
  name: string
  email: string
  phone: string
  country: string
  arrivalDate: string
  departureDate: string
  passengers: string
  interest: string
  message: string
}

// Initial form state
export const INITIAL_FORM_DATA: ContactFormData = {
  name: "",
  email: "",
  phone: "",
  country: "",
  arrivalDate: "",
  departureDate: "",
  passengers: "",
  interest: "",
  message: "",
}

/**
 * Build WhatsApp message from form data
 * Format designed for easy reading and professional appearance
 */
export function buildWhatsAppMessage(formData: ContactFormData): string {
  const interest = INTEREST_OPTIONS[formData.interest as keyof typeof INTEREST_OPTIONS] || formData.interest || "-"
  
  let message = `*Nueva Consulta XUMA TRAVEL*\n\n`
  message += `*Nombre:* ${formData.name || "-"}\n`
  message += `*País:* ${formData.country || "-"}\n`
  message += `*Email:* ${formData.email || "-"}\n`
  message += `*Teléfono:* ${formData.phone || "-"}\n`
  message += `*Fecha de llegada:* ${formData.arrivalDate || "-"}\n`
  message += `*Fecha de regreso:* ${formData.departureDate || "-"}\n`
  message += `*Pasajeros:* ${formData.passengers || "-"}\n`
  message += `*Interés:* ${interest}\n`
  
  if (formData.message) {
    message += `*Mensaje:* ${formData.message}\n`
  }

  return message
}

/**
 * Generate WhatsApp URL with encoded message
 */
export function getWhatsAppUrl(message?: string): string {
  const text = message || WHATSAPP_CONFIG.defaultMessage
  return `https://wa.me/${WHATSAPP_CONFIG.phoneNumber}?text=${encodeURIComponent(text)}`
}

/**
 * Open WhatsApp with optional form data
 * Returns true if WhatsApp was opened successfully
 */
export function openWhatsApp(formData?: ContactFormData): boolean {
  try {
    const message = formData && hasFormData(formData) 
      ? buildWhatsAppMessage(formData) 
      : WHATSAPP_CONFIG.defaultMessage
    
    const url = getWhatsAppUrl(message)
    
    // Try to open WhatsApp
    const newWindow = window.open(url, "_blank")
    
    // Check if popup was blocked
    if (!newWindow || newWindow.closed || typeof newWindow.closed === "undefined") {
      // Fallback: redirect current window
      window.location.href = url
    }
    
    return true
  } catch (error) {
    console.error("Error opening WhatsApp:", error)
    return false
  }
}

/**
 * Check if form has meaningful data
 */
export function hasFormData(formData: ContactFormData): boolean {
  return !!(formData.name || formData.interest || formData.arrivalDate || formData.email)
}

/**
 * Validate required form fields
 */
export function validateForm(formData: ContactFormData): { valid: boolean; errors: string[] } {
  const errors: string[] = []
  
  if (!formData.name.trim()) {
    errors.push("Nombre es requerido")
  }
  
  if (!formData.country.trim()) {
    errors.push("País es requerido")
  }
  
  if (!formData.email.trim()) {
    errors.push("Email es requerido")
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
    errors.push("Email no es válido")
  }
  
  if (!formData.arrivalDate) {
    errors.push("Fecha de llegada es requerida")
  }
  
  if (!formData.interest) {
    errors.push("Interés es requerido")
  }
  
  return {
    valid: errors.length === 0,
    errors,
  }
}

// ============================================
// FUTURE INTEGRATIONS (Ready to implement)
// ============================================

/**
 * TODO: CRM Integration
 * 
 * export async function sendToCRM(formData: ContactFormData): Promise<boolean> {
 *   // Integration with HubSpot, Salesforce, Pipedrive, etc.
 *   const response = await fetch(process.env.CRM_WEBHOOK_URL, {
 *     method: 'POST',
 *     headers: { 'Content-Type': 'application/json' },
 *     body: JSON.stringify({
 *       ...formData,
 *       source: 'website',
 *       timestamp: new Date().toISOString(),
 *     }),
 *   })
 *   return response.ok
 * }
 */

/**
 * TODO: Google Sheets Backup
 * 
 * export async function backupToGoogleSheets(formData: ContactFormData): Promise<boolean> {
 *   // Using Google Sheets API or Apps Script webhook
 *   const response = await fetch(process.env.GOOGLE_SHEETS_WEBHOOK_URL, {
 *     method: 'POST',
 *     headers: { 'Content-Type': 'application/json' },
 *     body: JSON.stringify({
 *       ...formData,
 *       timestamp: new Date().toISOString(),
 *     }),
 *   })
 *   return response.ok
 * }
 */
