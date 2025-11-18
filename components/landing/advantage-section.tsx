export function AdvantageSection() {
  return (
    <section className="py-24 bg-white" id="about">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Text Content */}
          <div>
            <div className="w-16 h-[3px] bg-navy mb-6" />
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-6 leading-tight text-navy font-heading">
              The ROLO FLEETS
              <br />
              <span className="text-gradient">Advantage</span>
            </h2>
            <p className="text-lg text-gray mb-6 leading-relaxed">
              ROLO Fleets carries forward a legacy of over four decades, originally founded by the grandfather of our
              current generation of leaders. Now led by the third generation, we combine real-world experience with
              modern intelligence to build a transparent, technology-integrated logistics ecosystem for the future.
            </p>
            <p className="text-base text-gray leading-relaxed">
              <strong className="text-navy">Our Purpose:</strong> We've studied the majority of real-world use cases,
              loopholes, and inefficiencies across the logistics industry — and we're committed to bridging those gaps
              through innovation, organization, and accountability.
            </p>

            <div className="grid sm:grid-cols-2 gap-6 mt-10">
              <div className="border-l-4 border-navy pl-4">
                <h3 className="font-bold text-lg mb-2 text-navy font-heading">Mission</h3>
                <p className="text-sm text-gray leading-relaxed">
                  To bridge traditional logistics with modern intelligence.
                </p>
              </div>
              <div className="border-l-4 border-navy pl-4">
                <h3 className="font-bold text-lg mb-2 text-navy font-heading">Vision</h3>
                <p className="text-sm text-gray leading-relaxed">
                  To be India's most trusted and organized logistics ecosystem.
                </p>
              </div>
            </div>
          </div>

          {/* Right: Image */}
          <div className="relative">
            <div className="aspect-[4/3] overflow-hidden rounded-md border border-gray-200 shadow-sm">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-BOjhQ6fXRSzBeWYWsBMNz8EH6Kx911.png"
                alt="Rolo Fleets Legacy - Vintage trucks"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-navy/10 rounded-md -z-10" />
          </div>
        </div>
      </div>
    </section>
  )
}
