// Registro de consultas en XUMA OS (Supabase).
// Usa la clave "publishable" (pública por diseño): la base solo le permite AGREGAR consultas nuevas,
// no leer ni modificar nada (regla "formulario web" de la tabla consultas).

const SUPABASE_URL = process.env.XUMA_OS_SUPABASE_URL || "https://cdtfrojekxjkbrhooifa.supabase.co"
const SUPABASE_KEY = process.env.XUMA_OS_SUPABASE_KEY || "sb_publishable_F9iHwZMfnjrbNtqvYZJwjw_fT-dLFAj"

const corto = (v: unknown, max: number): string | null => {
  if (v === null || v === undefined) return null
  const s = String(v).trim()
  return s ? s.slice(0, max) : null
}

const fecha = (v: unknown): string | null => {
  const s = corto(v, 10)
  return s && /^\d{4}-\d{2}-\d{2}$/.test(s) ? s : null
}

const numero = (v: unknown): number | null => {
  const n = parseInt(String(v ?? ""), 10)
  return Number.isFinite(n) && n >= 0 && n <= 500 ? n : null
}

export interface ConsultaWeb {
  formulario: string
  name?: string
  email?: string
  phone?: string
  country?: string
  language?: string
  arrivalDate?: string
  departureDate?: string | null
  passengers?: string | number
  interest?: string
  interestLabel?: string
  message?: string
  comoNosConocio?: string
}

/** Guarda la consulta en XUMA OS. Nunca tira error: si falla, lo deja en el log y sigue. */
export async function guardarConsultaEnXumaOS(c: ConsultaWeb): Promise<boolean> {
  try {
    const idioma = ["es", "pt", "en"].includes(String(c.language)) ? c.language : null
    const res = await fetch(`${SUPABASE_URL}/rest/v1/consultas`, {
      method: "POST",
      headers: {
        apikey: SUPABASE_KEY,
        Authorization: `Bearer ${SUPABASE_KEY}`,
        "Content-Type": "application/json",
        Prefer: "return=minimal",
      },
      body: JSON.stringify({
        canal: "web",
        formulario: corto(c.formulario, 60),
        nombre: corto(c.name, 200),
        email: corto(c.email, 200),
        telefono: corto(c.phone, 60),
        pais: corto(c.country, 80),
        idioma,
        interes: corto(c.interestLabel || c.interest, 120),
        fecha_llegada: fecha(c.arrivalDate),
        fecha_regreso: fecha(c.departureDate),
        pasajeros: numero(c.passengers),
        mensaje: corto(c.message, 4000),
        como_nos_conocio: corto(c.comoNosConocio, 120),
      }),
    })
    if (!res.ok) {
      console.error("XUMA OS: no se pudo guardar la consulta", res.status, await res.text())
      return false
    }
    return true
  } catch (error) {
    console.error("XUMA OS: error guardando la consulta", error)
    return false
  }
}
