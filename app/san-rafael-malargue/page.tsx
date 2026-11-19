import type { Metadata } from "next"
import { SurPage } from "@/components/sur/sur-page"

export const metadata: Metadata = {
  title: "Excursiones y traslados en San Rafael y Malargüe | Cañón del Atuel, volcanes, Las Leñas | XUMA TRAVEL",
  description:
    "Traslados privados y excursiones en el sur de Mendoza: Cañón del Atuel, Valle Grande, bodegas y Laberinto de Borges, Los Reyunos, El Nihuil, volcanes de Malargüe, Caverna de las Brujas, cabalgatas y traslados a Las Leñas. Empresa de San Rafael con más de 30 años.",
  keywords:
    "excursiones San Rafael, Cañón del Atuel, Valle Grande, traslado aeropuerto San Rafael, Malargüe excursiones, Caverna de las Brujas, volcán Malacara, cabalgatas San Rafael, Laberinto de Borges, traslado Las Leñas",
  openGraph: {
    title: "San Rafael y Malargüe: excursiones y traslados | XUMA TRAVEL",
    description: "Cañones, volcanes y la nieve más alta. Te llevamos por el sur de Mendoza.",
    type: "website",
    locale: "es_AR",
    images: ["/sur/canon-atuel.jpg"],
  },
}

export default function Page() {
  return <SurPage />
}
