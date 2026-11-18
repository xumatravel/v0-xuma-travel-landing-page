import type { Metadata } from "next"
import { MendozaPage } from "@/components/mendoza/mendoza-page"

export const metadata: Metadata = {
  title: "Traslados y experiencias en Mendoza | Bodegas, eventos, aeropuerto | XUMA TRAVEL",
  description:
    "Traslados privados en Mendoza todo el año: bodegas en Valle de Uco, Luján de Cuyo y Maipú, eventos y fiestas, aeropuerto, ejecutivos y empresas, excursiones a Potrerillos y alta montaña. Más de 30 años de experiencia.",
  keywords:
    "traslados Mendoza, transfer aeropuerto Mendoza, tour bodegas Mendoza, Valle de Uco traslado, traslado eventos Mendoza, transporte ejecutivo Mendoza, Potrerillos excursión, receptivo Mendoza",
  openGraph: {
    title: "Traslados y experiencias en Mendoza | XUMA TRAVEL",
    description: "Te llevamos y te traemos. Bodegas, eventos, aeropuerto, empresas y excursiones en Mendoza.",
    type: "website",
    locale: "es_AR",
    images: ["/mendoza/potrerillos.jpg"],
  },
}

export default function Page() {
  return <MendozaPage />
}
