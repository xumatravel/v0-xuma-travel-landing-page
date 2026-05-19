"use client"

import Link from "next/link"
import { Instagram, Facebook, Mail, Phone, Snowflake } from "lucide-react"
import { useI18n } from "@/lib/i18n"
import { COMPANY_CONFIG, WHATSAPP_CONFIG } from "@/lib/config"

export function PaquetesFooter() {
  const { t } = useI18n()
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-[#0B0B0B] py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link href="/" className="inline-flex items-center gap-2 mb-4">
              <Snowflake className="w-6 h-6 text-[#C8A96A]" />
              <span className="font-serif text-2xl font-bold text-white">
                XUMA<span className="text-[#C8A96A]">.</span>TRAVEL
              </span>
            </Link>
            <p className="text-white/60 leading-relaxed mb-6 max-w-md">
              {t("paquetesPage.footer.description")}
            </p>
            <div className="flex items-center gap-4">
              <a
                href={COMPANY_CONFIG.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white/60 hover:bg-white/20 hover:text-white transition-colors"
              >
                <Instagram className="w-5 h-5" />
                <span className="sr-only">Instagram</span>
              </a>
              <a
                href={COMPANY_CONFIG.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white/60 hover:bg-white/20 hover:text-white transition-colors"
              >
                <Facebook className="w-5 h-5" />
                <span className="sr-only">Facebook</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-white mb-4">{t("lasLenasPage.footer.links")}</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-white/60 hover:text-white transition-colors">
                  {t("lasLenasPage.footer.backToHome")}
                </Link>
              </li>
              <li>
                <Link href="/traslados-las-lenas" className="text-white/60 hover:text-white transition-colors">
                  Traslados Las Leñas
                </Link>
              </li>
              <li>
                <Link href="#cotizador" className="text-white/60 hover:text-white transition-colors">
                  {t("paquetesPage.header.quote")}
                </Link>
              </li>
              <li>
                <Link href="#hoteles" className="text-white/60 hover:text-white transition-colors">
                  {t("paquetesPage.header.hotels")}
                </Link>
              </li>
              <li>
                <Link href="#faq" className="text-white/60 hover:text-white transition-colors">
                  {t("paquetesPage.header.faq")}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-white mb-4">{t("lasLenasPage.footer.contact")}</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href={WHATSAPP_CONFIG.buildUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-white/60 hover:text-white transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  <span>+54 9 260 402-3087</span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${COMPANY_CONFIG.email}`}
                  className="flex items-center gap-2 text-white/60 hover:text-white transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  <span>{COMPANY_CONFIG.email}</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-white/10">
          <p className="text-center text-white/40 text-sm">
            &copy; {currentYear} {COMPANY_CONFIG.name}. {t("lasLenasPage.footer.rights")}
          </p>
        </div>
      </div>
    </footer>
  )
}
