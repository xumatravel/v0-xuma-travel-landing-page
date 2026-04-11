import { Header } from "@/components/landing/header"
import { Hero } from "@/components/landing/hero"
import { Trust } from "@/components/landing/trust"
import { WhatWeDo } from "@/components/landing/what-we-do"
import { Products } from "@/components/landing/products"
import { LasLenas } from "@/components/landing/las-lenas"
import { Upsell } from "@/components/landing/upsell"
import { Agencies } from "@/components/landing/agencies"
import { Brand } from "@/components/landing/brand"
import { About } from "@/components/landing/about"
import { Contact } from "@/components/landing/contact"
import { FAQ } from "@/components/landing/faq"
import { Footer } from "@/components/landing/footer"
import { WhatsAppButton } from "@/components/landing/whatsapp-button"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Trust />
      <WhatWeDo />
      <Products />
      <LasLenas />
      <Upsell />
      <Agencies />
      <Brand />
      <About />
      <Contact />
      <FAQ />
      <Footer />
      <WhatsAppButton />
    </main>
  )
}
