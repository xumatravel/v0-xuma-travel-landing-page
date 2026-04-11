"use client"

import { MessageCircle } from "lucide-react"

export function WhatsAppButton() {
  const handleClick = () => {
    window.open("https://wa.me/5492604023087?text=Hola!%20Estoy%20interesado%20en%20planificar%20mi%20viaje%20a%20Mendoza", "_blank")
  }

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#20bd5a] shadow-lg hover:shadow-xl flex items-center justify-center"
      aria-label="Contact us on WhatsApp"
    >
      <MessageCircle className="w-7 h-7 text-white" />

      <span className="absolute right-full mr-3 px-3 py-2 bg-[#0B0B0B] text-white text-sm font-medium rounded-lg opacity-0 group-hover:opacity-100 transition">
        Chat with us
      </span>

      <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-25" />
    </button>
  )
}