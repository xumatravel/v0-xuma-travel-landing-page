"use client"

import { useI18n } from "@/lib/i18n"

// Pregunta "¿Cómo nos conociste?" — se guarda en XUMA OS (consultas.como_nos_conocio)
// para medir de dónde vienen los clientes (Las Leñas, recomendaciones, redes, Google, etc.).
// Los valores se guardan siempre en español; solo cambia el texto que ve el cliente.

const OPTIONS: { value: string; es: string; pt: string; en: string }[] = [
  { value: "Las Leñas (me recomendaron desde Las Leñas)", es: "Me recomendaron desde Las Leñas", pt: "Indicação de Las Leñas", en: "Recommended by Las Leñas" },
  { value: "Ya viajé con XUMA", es: "Ya viajé con XUMA", pt: "Já viajei com a XUMA", en: "I've traveled with XUMA before" },
  { value: "Recomendación de un amigo/familiar", es: "Me lo recomendó un amigo o familiar", pt: "Indicação de amigo ou familiar", en: "A friend or family member" },
  { value: "Instagram", es: "Instagram", pt: "Instagram", en: "Instagram" },
  { value: "Google", es: "Google / búsqueda en internet", pt: "Google / pesquisa na internet", en: "Google / web search" },
  { value: "Agencia u operador", es: "Mi agencia u operador", pt: "Minha agência ou operadora", en: "My travel agency or tour operator" },
  { value: "Hotel / alojamiento", es: "Mi hotel o alojamiento", pt: "Meu hotel ou hospedagem", en: "My hotel or accommodation" },
  { value: "Evento / productora", es: "Un evento o productora", pt: "Um evento ou produtora", en: "An event or organizer" },
  { value: "Otro", es: "Otro", pt: "Outro", en: "Other" },
]

const LABEL = { es: "¿Cómo nos conociste?", pt: "Como você nos conheceu?", en: "How did you hear about us?" }
const PLACEHOLDER = { es: "Elegí una opción", pt: "Escolha uma opção", en: "Choose an option" }

export function ComoNosConociste({
  value,
  onChange,
  dark = false,
}: {
  value: string
  onChange: (v: string) => void
  dark?: boolean
}) {
  const { locale } = useI18n()
  const l = (["es", "pt", "en"].includes(locale) ? locale : "es") as "es" | "pt" | "en"
  return (
    <div className="space-y-2">
      <label htmlFor="como-nos-conociste" className={`block text-sm font-medium ${dark ? "text-white/80" : "text-[#0B0B0B]/80"}`}>
        {LABEL[l]}
      </label>
      <select
        id="como-nos-conociste"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={`w-full rounded-lg border px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#6B7D5C] ${
          dark ? "bg-white/5 border-white/20 text-white [&>option]:text-[#0B0B0B]" : "bg-white border-[#0B0B0B]/15 text-[#0B0B0B]"
        }`}
      >
        <option value="">{PLACEHOLDER[l]}</option>
        {OPTIONS.map((o) => (
          <option key={o.value} value={o.value}>
            {o[l]}
          </option>
        ))}
      </select>
    </div>
  )
}
