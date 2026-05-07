"use client"

import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export function BackToHomeButton() {
  return (
    <Link
      href="/"
      className="hidden md:flex fixed bottom-8 left-6 z-50 bg-white/90 backdrop-blur-sm text-[#0B0B0B] px-4 py-3 rounded-full shadow-lg hover:bg-white hover:shadow-xl transition-all duration-300 items-center gap-2 text-sm font-medium"
    >
      <ArrowLeft className="w-4 h-4" />
      Volver al inicio
    </Link>
  )
}
