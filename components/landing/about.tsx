export function About() {
  return (
    <section id="about" className="py-20 md:py-28 bg-[#F8F6F3]">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-[#6B7D5C] font-medium tracking-wider uppercase text-sm mb-3">
            About Us
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-[#0B0B0B] mb-8 text-balance">
            XUMA TRAVEL
          </h2>
          <div className="w-20 h-1 bg-[#C8A96A] mx-auto mb-8" />
          <p className="text-[#0B0B0B]/70 text-lg md:text-xl leading-relaxed">
            XUMA TRAVEL is a premium local operator focused on organized, reliable, and frictionless 
            travel experiences in Mendoza. We believe that getting to your destination should be as 
            enjoyable as the destination itself. That&apos;s why we&apos;ve built our service around 
            clear communication, punctuality, and personalized attention that makes every journey memorable.
          </p>
          <div className="mt-12 flex items-center justify-center gap-8 text-[#0B0B0B]/50">
            <div className="flex flex-col items-center">
              <span className="font-serif text-2xl font-bold text-[#6B7D5C]">Mendoza</span>
              <span className="text-sm">Based</span>
            </div>
            <div className="w-px h-12 bg-[#0B0B0B]/20" />
            <div className="flex flex-col items-center">
              <span className="font-serif text-2xl font-bold text-[#6B7D5C]">Premium</span>
              <span className="text-sm">Service</span>
            </div>
            <div className="w-px h-12 bg-[#0B0B0B]/20" />
            <div className="flex flex-col items-center">
              <span className="font-serif text-2xl font-bold text-[#6B7D5C]">Local</span>
              <span className="text-sm">Expertise</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
