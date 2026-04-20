"use client"

import Link from "next/link"
import { useI18n } from "@/lib/i18n"
import { MessageCircle, Mail, MapPin, Instagram } from "lucide-react"
import { WHATSAPP_CONFIG } from "@/lib/config"

export function Footer() {
  const { t } = useI18n()

  const quickLinks = [
    { href: "#products", label: t("nav.packages") },
    { href: "#las-lenas", label: t("nav.lasLenas") },
    { href: "#agencies", label: t("nav.agencies") },
    { href: "#about", label: t("nav.about") },
    { href: "#contact", label: t("nav.contact") },
  ]

  return (
    <footer className="bg-[#0B0B0B] border-t border-white/10">
      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block mb-4">
              <span className="font-serif text-2xl font-bold text-white tracking-tight">
                XUMA<span className="text-[#C8A96A]">.</span>TRAVEL
              </span>
            </Link>
            <p className="text-white/60 leading-relaxed max-w-md mb-6">
              {t("footer.tagline")}
            </p>
            <div className="flex items-center gap-4">
              <a
                href="https://instagram.com/xumatravel"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#6B7D5C] transition-colors duration-300"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5 text-white" />
              </a>
              <a
                href={WHATSAPP_CONFIG.buildUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#6B7D5C] transition-colors duration-300"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-5 h-5 text-white" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-serif font-semibold text-white mb-4">{t("footer.quickLinks")}</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/60 hover:text-white text-sm transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-serif font-semibold text-white mb-4">{t("footer.contact")}</h3>
            <ul className="space-y-4">
              <li>
                <a
                  href={WHATSAPP_CONFIG.buildUrl()}
                  className="flex items-center gap-3 text-white/60 hover:text-white text-sm transition-colors duration-200"
                >
                  <MessageCircle className="w-4 h-4 text-[#6B7D5C]" />
                  +54 260 402 3087
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@xuma.com.ar"
                  className="flex items-center gap-3 text-white/60 hover:text-white text-sm transition-colors duration-200"
                >
                  <Mail className="w-4 h-4 text-[#6B7D5C]" />
                  info@xuma.com.ar
                </a>
              </li>
              <li>
                <span className="flex items-center gap-3 text-white/60 text-sm">
                  <MapPin className="w-4 h-4 text-[#6B7D5C]" />
                  Mendoza, Argentina
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-sm">
            © {new Date().getFullYear()} XUMA TRAVEL. {t("footer.rights")}
          </p>
        </div>
      </div>
    </footer>
  )
}
