// Medición de consultas para Google Analytics y Google Ads.
// - generate_lead: alguien envió un formulario de cotización/contacto.
// - contact_whatsapp: alguien tocó un botón de WhatsApp.
// Para que Google Ads cuente la conversión directo, cargar en Vercel la variable
// NEXT_PUBLIC_GOOGLE_ADS_CONVERSION_LABEL con la etiqueta de la conversión (la parte después de "AW-xxxx/").
// Si no está cargada, igual se puede importar el evento generate_lead de Analytics como conversión en Google Ads.

const ADS_ID = "AW-18149304102"
// Conversión "Consulta web (formulario o WhatsApp)" creada en Google Ads el 19/11/2026
const ADS_LABEL = process.env.NEXT_PUBLIC_GOOGLE_ADS_CONVERSION_LABEL || "YtDVCIKmobsdEKbOoc5D"

function conversion() {
  gtag("event", "conversion", { send_to: `${ADS_ID}/${ADS_LABEL}` })
}

type Gtag = (...args: unknown[]) => void

function gtag(...args: unknown[]) {
  if (typeof window === "undefined") return
  const g = (window as unknown as { gtag?: Gtag }).gtag
  if (typeof g === "function") g(...args)
}

export function trackLead(formulario: string) {
  gtag("event", "generate_lead", { form_name: formulario, page_path: window.location.pathname })
  conversion()
}

export function trackWhatsApp() {
  gtag("event", "contact_whatsapp", { page_path: typeof window !== "undefined" ? window.location.pathname : "" })
  conversion()
}
