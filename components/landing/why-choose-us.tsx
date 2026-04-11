import { Shield, MessageCircle, Mountain, Heart, Award } from "lucide-react"

const reasons = [
  {
    icon: Shield,
    title: "Reliable Operation",
    description: "Punctual departures and professional drivers you can count on, every single trip.",
  },
  {
    icon: MessageCircle,
    title: "Clear Communication",
    description: "Fast response times and transparent updates throughout your booking process.",
  },
  {
    icon: Mountain,
    title: "Mountain Expertise",
    description: "Years of experience navigating Andean routes in all weather conditions.",
  },
  {
    icon: Heart,
    title: "Personalized Attention",
    description: "We treat every traveler as an individual, not just another booking number.",
  },
  {
    icon: Award,
    title: "Quality Over Volume",
    description: "We prioritize exceptional service over maximum capacity for a premium experience.",
  },
]

export function WhyChooseUs() {
  return (
    <section id="why-us" className="py-20 md:py-28 bg-[#F8F6F3]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <p className="text-[#6B7D5C] font-medium tracking-wider uppercase text-sm mb-3">
            The XUMA Difference
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-[#0B0B0B] mb-6 text-balance">
            Why choose us
          </h2>
          <p className="text-[#0B0B0B]/70 text-lg">
            We&apos;re not just a transfer service. We&apos;re your trusted partner for mountain travel in Argentina.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-8 shadow-sm hover:shadow-lg transition-shadow duration-300 group"
            >
              <div className="w-14 h-14 rounded-xl bg-[#6B7D5C]/10 flex items-center justify-center mb-6 group-hover:bg-[#6B7D5C] transition-colors duration-300">
                <reason.icon className="w-7 h-7 text-[#6B7D5C] group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="font-serif font-semibold text-xl text-[#0B0B0B] mb-3">
                {reason.title}
              </h3>
              <p className="text-[#0B0B0B]/60 leading-relaxed">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
