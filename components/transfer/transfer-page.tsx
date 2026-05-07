"use client"

import { useState } from "react"
import { TransferHero } from "./hero"
import { ServiceSelector } from "./service-selector"
import { VehicleSelector } from "./vehicle-selector"
import { QuoteForm } from "./quote-form"
import { ServiceInfo } from "./service-info"
import { AboutUs } from "./about-us"
import { Testimonials } from "./testimonials"
import { WhyChooseUs } from "./why-choose-us"
import { HowItWorks } from "./how-it-works"
import { CTABanner } from "./cta-banner"
import { OtherServicesSection } from "./other-services"
import { FinalCTA } from "./final-cta"

export function TransferPage() {
  const [serviceType, setServiceType] = useState<"privado" | "compartido">("privado")
  const [vehicle, setVehicle] = useState("pickup")

  const handleServiceChange = (service: "privado" | "compartido") => {
    setServiceType(service)
    // Reset vehicle when switching to shared
    if (service === "compartido") {
      setVehicle("butaca")
    } else if (vehicle === "butaca") {
      setVehicle("pickup")
    }
  }

  return (
    <>
      {/* Hero */}
      <TransferHero />
      
      {/* Service & Vehicle Selection */}
      <ServiceSelector selected={serviceType} onSelect={handleServiceChange} />
      <VehicleSelector 
        selected={vehicle} 
        onSelect={setVehicle} 
        serviceType={serviceType} 
      />
      
      {/* Quote Form */}
      <QuoteForm serviceType={serviceType} vehicle={vehicle} />
      
      {/* Key Info */}
      <ServiceInfo />
      
      {/* CTA Banner */}
      <CTABanner />
      
      {/* About Us */}
      <AboutUs />
      
      {/* Why Choose Us */}
      <WhyChooseUs />
      
      {/* How It Works */}
      <HowItWorks />
      
      {/* Testimonials */}
      <Testimonials />
      
      {/* Other Services */}
      <OtherServicesSection />
      
      {/* Final CTA */}
      <FinalCTA />
    </>
  )
}
