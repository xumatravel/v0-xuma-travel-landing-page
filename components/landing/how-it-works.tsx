import { MessageSquare, ListChecks, CreditCard, Calendar, Mountain } from "lucide-react"

const steps = [
  {
    number: "01",
    icon: MessageSquare,
    title: "Contact Us",
    description: "Reach out via WhatsApp or our contact form with your travel details",
  },
  {
    number: "02",
    icon: ListChecks,
    title: "Receive Options",
    description: "Get a personalized quote with available dates and vehicle options",
  },
  {
    number: "03",
    icon: CreditCard,
    title: "Confirm Booking",
    description: "Secure your reservation with a simple confirmation process",
  },
  {
    number: "04",
    icon: Calendar,
    title: "Coordinate Details",
    description: "We finalize pickup times, locations, and any special requirements",
  },
  {
    number: "05",
    icon: Mountain,
    title: "Enjoy Your Trip",
    description: "Relax and enjoy the scenic journey to Las Leñas",
  },
]

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 md:py-28 bg-[#0B0B0B]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-[#C8A96A] font-medium tracking-wider uppercase text-sm mb-3">
            Simple Process
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-white text-balance">
            How it works
          </h2>
        </div>

        <div className="grid md:grid-cols-5 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative group"
            >
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-10 left-1/2 w-full h-px bg-[#6B7D5C]/30" />
              )}
              
              <div className="relative flex flex-col items-center text-center">
                {/* Number badge */}
                <div className="relative mb-4">
                  <div className="w-20 h-20 rounded-full bg-[#6B7D5C]/10 flex items-center justify-center group-hover:bg-[#6B7D5C]/20 transition-colors duration-300">
                    <step.icon className="w-8 h-8 text-[#6B7D5C]" />
                  </div>
                  <span className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-[#5A1E2A] flex items-center justify-center text-white text-xs font-bold">
                    {step.number}
                  </span>
                </div>
                
                <h3 className="font-serif font-semibold text-white text-lg mb-2">
                  {step.title}
                </h3>
                <p className="text-white/60 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
