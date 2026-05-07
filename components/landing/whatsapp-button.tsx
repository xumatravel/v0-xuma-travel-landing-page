"use client"

import { MessageCircle } from "lucide-react"
import { WHATSAPP_CONFIG } from "@/lib/config"

export function WhatsAppButton() {
  const handleClick = () => {
    WHATSAPP_CONFIG.open()
  }

  return (
    <>
      {/* Mobile: Full width sticky button at bottom */}
      <button
        onClick={handleClick}
        className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-[#25D366] hover:bg-[#20bd5a] text-white py-4 px-6 flex items-center justify-center gap-2 shadow-[0_-4px_20px_rgba(0,0,0,0.2)] font-semibold text-lg"
        aria-label="Consultar por WhatsApp"
      >
        <MessageCircle className="w-6 h-6" />
        Consultar por WhatsApp
      </button>

      {/* Desktop: Floating button */}
      <button
        onClick={handleClick}
        className="hidden md:flex group fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#20bd5a] shadow-lg hover:shadow-xl items-center justify-center transition-all duration-300 hover:scale-110"
        aria-label="Contact us on WhatsApp"
      >
        <MessageCircle className="w-7 h-7 text-white" />

        <span className="absolute right-full mr-3 px-3 py-2 bg-[#0B0B0B] text-white text-sm font-medium rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
          Chatea con nosotros
        </span>

        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-25" />
      </button>
    </>
  )
}
