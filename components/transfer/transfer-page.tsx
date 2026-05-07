"use client"

import { useState } from "react"
import { TransferHero } from "./hero"
import { ServiceSelector } from "./service-selector"
import { VehicleSelector } from "./vehicle-selector"
import { QuoteForm } from "./quote-form"
import { ServiceInfo } from "./service-info"
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
      <TransferHero />
      <ServiceSelector selected={serviceType} onSelect={handleServiceChange} />
      <VehicleSelector 
        selected={vehicle} 
        onSelect={setVehicle} 
        serviceType={serviceType} 
      />
      <QuoteForm serviceType={serviceType} vehicle={vehicle} />
      <ServiceInfo />
      <OtherServicesSection />
      <FinalCTA />
    </>
  )
}
