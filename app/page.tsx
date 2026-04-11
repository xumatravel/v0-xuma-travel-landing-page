import { Header } from "@/components/landing/header"
import { Hero } from "@/components/landing/hero"
import { Trust } from "@/components/landing/trust"
import { Services } from "@/components/landing/services"
import { HowItWorks } from "@/components/landing/how-it-works"
import { WhyChooseUs } from "@/components/landing/why-choose-us"
import { Agencies } from "@/components/landing/agencies"
import { SecondaryServices } from "@/components/landing/secondary-services"
import { Contact } from "@/components/landing/contact"
import { About } from "@/components/landing/about"
import { FAQ } from "@/components/landing/faq"
import { Footer } from "@/components/landing/footer"
import { WhatsAppButton } from "@/components/landing/whatsapp-button"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Trust />
      <Services />
      <HowItWorks />
      <WhyChooseUs />
      <Agencies />
      <SecondaryServices />
      <Contact />
      <About />
      <FAQ />
      <Footer />
      <WhatsAppButton />
    </main>
  )
}
