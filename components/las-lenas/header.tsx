"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, MessageCircle, X } from "lucide-react"
import Link from "next/link"
import { WHATSAPP_CONFIG } from "@/lib/config"

export function LasLenasHeader() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  const navLinks = [
    { href: "#cotizador", label: "Cotizar" },
    { href: "#servicios", label: "Servicios" },
    { href: "#por-que-nosotros", label: "Por Qué Nosotros" },
    { href: "#testimonios", label: "Testimonios" },
    { href: "#contacto", label: "Contacto" },
  ]

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleWhatsApp = () => {
    WHATSAPP_CONFIG.open("Hola! Me interesa reservar un transfer a Las Leñas")
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#0B0B0B]/95 backdrop-blur-md shadow-lg py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-6">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <span className="font-serif text-xl md:text-2xl font-bold text-white tracking-tight">
              XUMA<span className="text-[#C8A96A]">.</span>TRAVEL
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-white/80 hover:text-white text-sm font-medium transition-colors duration-200"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <Button
              onClick={handleWhatsApp}
              size="sm"
              className="bg-[#6B7D5C] hover:bg-[#5a6b4d] text-white font-medium"
            >
              <MessageCircle className="w-4 h-4 mr-2" />
              Reservar Ahora
            </Button>
          </div>

          {/* Mobile Menu */}
          <div className="flex lg:hidden items-center gap-3">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="text-white hover:bg-white/10">
                  <Menu className="w-6 h-6" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="bg-[#0B0B0B] border-[#0B0B0B] w-full sm:w-80">
                <div className="flex flex-col h-full">
                  <div className="flex items-center justify-between mb-8">
                    <span className="font-serif text-xl font-bold text-white">
                      XUMA<span className="text-[#C8A96A]">.</span>TRAVEL
                    </span>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => setIsOpen(false)}
                      className="text-white hover:bg-white/10"
                    >
                      <X className="w-5 h-5" />
                    </Button>
                  </div>

                  <nav className="flex flex-col gap-4">
                    {navLinks.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        onClick={() => setIsOpen(false)}
                        className="text-white/80 hover:text-white text-lg font-medium py-2 transition-colors duration-200"
                      >
                        {link.label}
                      </Link>
                    ))}
                  </nav>

                  <div className="mt-auto pt-8">
                    <Button
                      onClick={() => {
                        handleWhatsApp()
                        setIsOpen(false)
                      }}
                      size="lg"
                      className="w-full bg-[#6B7D5C] hover:bg-[#5a6b4d] text-white font-medium"
                    >
                      <MessageCircle className="w-5 h-5 mr-2" />
                      Reservar Ahora
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </nav>
      </div>
    </header>
  )
}
