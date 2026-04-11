import Image from "next/image"
import { Wine, Mountain, Building } from "lucide-react"

const services = [
  {
    icon: Wine,
    title: "Wine Tours",
    description: "Discover Mendoza's world-renowned wineries with private transportation",
    image: "/wine-tour.jpg",
  },
  {
    icon: Mountain,
    title: "High Mountain Tours",
    description: "Explore Aconcagua and the breathtaking Andean landscapes",
    image: "/high-mountain.jpg",
  },
  {
    icon: Building,
    title: "City Tours",
    description: "Experience the charm of Mendoza city with expert local guidance",
    image: "/ski-resort.jpg",
  },
]

export function SecondaryServices() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <p className="text-[#6B7D5C] font-medium tracking-wider uppercase text-sm mb-3">
            Beyond Las Leñas
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-[#0B0B0B] mb-6 text-balance">
            Explore more of Mendoza
          </h2>
          <p className="text-[#0B0B0B]/70 text-lg">
            While transfers to Las Leñas are our specialty, we also offer premium transportation for other Mendoza experiences.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-xl aspect-[3/4] cursor-pointer"
            >
              <Image
                src={service.image}
                alt={service.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0B] via-[#0B0B0B]/30 to-transparent" />
              
              <div className="absolute inset-x-0 bottom-0 p-6">
                <div className="w-12 h-12 rounded-lg bg-[#6B7D5C]/20 backdrop-blur-sm flex items-center justify-center mb-4 group-hover:bg-[#6B7D5C] transition-colors duration-300">
                  <service.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-serif font-semibold text-white text-xl mb-2">
                  {service.title}
                </h3>
                <p className="text-white/70 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
