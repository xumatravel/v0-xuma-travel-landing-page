"use client"

import { Check, Car, Truck, Bus, Users } from "lucide-react"
import { cn } from "@/lib/utils"

interface VehicleSelectorProps {
  selected: string
  onSelect: (vehicle: string) => void
  serviceType: "privado" | "compartido"
}

export function VehicleSelector({ selected, onSelect, serviceType }: VehicleSelectorProps) {
  const vehicles = [
    {
      id: "auto",
      icon: Car,
      title: "Auto",
      capacity: "Hasta 4 pasajeros",
      description: "Poco equipaje",
      forPrivate: true,
    },
    {
      id: "pickup",
      icon: Truck,
      title: "Pickup",
      capacity: "Hasta 4 pasajeros",
      description: "Ideal equipaje deportivo (ski)",
      forPrivate: true,
    },
    {
      id: "minibus-9",
      icon: Bus,
      title: "Minibus 9 pax",
      capacity: "Hasta 9 pasajeros",
      description: "Grupos medianos",
      forPrivate: true,
    },
    {
      id: "minibus-14",
      icon: Bus,
      title: "Minibus 14 pax",
      capacity: "Hasta 14 pasajeros",
      description: "Grupos grandes",
      forPrivate: true,
    },
    {
      id: "grupo-grande",
      icon: Users,
      title: "Grupo grande",
      capacity: "15+ pasajeros",
      description: "Consultar tarifa",
      forPrivate: true,
    },
    {
      id: "butaca",
      icon: Users,
      title: "Por butaca",
      capacity: "Precio por persona",
      description: "Compartís el vehículo",
      forShared: true,
    },
  ]

  const filteredVehicles = vehicles.filter((v) =>
    serviceType === "compartido" ? v.forShared : v.forPrivate
  )

  if (serviceType === "compartido") {
    return null // No vehicle selector for shared service
  }

  return (
    <section className="py-20 bg-[#111111]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-4">
            Seleccioná tu Vehículo
          </h2>
          <p className="text-white/60 max-w-xl mx-auto">
            Elegí el vehículo que mejor se adapte a tu grupo y equipaje
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 max-w-5xl mx-auto">
          {filteredVehicles.map((vehicle) => (
            <button
              key={vehicle.id}
              onClick={() => onSelect(vehicle.id)}
              className={cn(
                "relative p-5 rounded-xl border-2 text-center transition-all duration-300",
                selected === vehicle.id
                  ? "border-[#C8A96A] bg-[#C8A96A]/10"
                  : "border-white/10 bg-white/5 hover:border-white/30"
              )}
            >
              {/* Selection indicator */}
              {selected === vehicle.id && (
                <div className="absolute top-3 right-3 w-5 h-5 rounded-full bg-[#C8A96A] flex items-center justify-center">
                  <Check className="w-3 h-3 text-[#0B0B0B]" />
                </div>
              )}

              <vehicle.icon className={cn(
                "w-10 h-10 mx-auto mb-3",
                selected === vehicle.id ? "text-[#C8A96A]" : "text-white/60"
              )} />

              <h3 className="text-lg font-semibold text-white mb-1">
                {vehicle.title}
              </h3>

              <p className="text-sm text-[#C8A96A] mb-1">
                {vehicle.capacity}
              </p>

              <p className="text-xs text-white/50">
                {vehicle.description}
              </p>
            </button>
          ))}
        </div>

        <p className="text-center text-white/40 text-sm mt-6">
          ¿Necesitás algo especial? Consultá por tarifa personalizada
        </p>
      </div>
    </section>
  )
}
