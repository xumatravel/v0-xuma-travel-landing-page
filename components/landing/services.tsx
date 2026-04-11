import Image from "next/image"
import { Users, Plane, Clock, Briefcase, MapPin } from "lucide-react"

const features = [
  {
    icon: Users,
    title: "Private & Group Transfers",
    description: "Flexible options for individuals, families, and groups of any size",
  },
  {
    icon: Plane,
    title: "Airport Pickup",
    description: "Direct transfers from Mendoza airport with flight tracking",
  },
  {
    icon: Clock,
    title: "Flexible Scheduling",
    description: "Departure times coordinated with your flights and preferences",
  },
  {
    icon: Briefcase,
    title: "Ski Equipment Space",
    description: "Ample room for all your ski and snowboard gear",
  },
  {
    icon: MapPin,
    title: "Door-to-Door Service",
    description: "From your accommodation in Mendoza to your resort lodge",
  },
]

export function Services() {
  return (
    <section id="services" className="py-20 md:py-28 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <div className="relative order-2 lg:order-1">
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-2xl">
              <Image
                src="/transfer-van.jpg"
                alt="Premium transfer vehicle"
                fill
                className="object-cover"
              />
            </div>
            {/* Accent box */}
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-[#6B7D5C]/10 rounded-lg -z-10" />
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-[#C8A96A]/10 rounded-lg -z-10" />
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <p className="text-[#6B7D5C] font-medium tracking-wider uppercase text-sm mb-3">
              Our Services
            </p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-[#0B0B0B] mb-6 text-balance">
              Las Leñas Transfers
            </h2>
            <p className="text-[#0B0B0B]/70 text-lg leading-relaxed mb-10">
              Experience premium transportation to one of South America&apos;s most spectacular ski resorts. 
              We handle every detail so you can focus on enjoying your mountain adventure.
            </p>

            <div className="space-y-6">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex gap-4 p-4 rounded-lg hover:bg-[#F8F6F3] transition-colors duration-300 group"
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-[#6B7D5C]/10 flex items-center justify-center group-hover:bg-[#6B7D5C] transition-colors duration-300">
                    <feature.icon className="w-6 h-6 text-[#6B7D5C] group-hover:text-white transition-colors duration-300" />
                  </div>
                  <div>
                    <h3 className="font-serif font-semibold text-[#0B0B0B] mb-1">
                      {feature.title}
                    </h3>
                    <p className="text-[#0B0B0B]/60 text-sm">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
