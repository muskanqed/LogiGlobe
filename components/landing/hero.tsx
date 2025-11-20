"use client"


export function Hero() {
  return (
    <section className="relative min-h-[85vh] sm:min-h-[90vh] flex items-center justify-center overflow-hidden bg-cream">
      {/* Background Image with Navy Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/modern-navy-blue-logistics-truck-on-highway--minim.jpg"
          alt="Rolo Fleet Logistics"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy/95 via-navy/85 sm:via-navy/75 to-navy/60 sm:to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 md:px-12 lg:px-20 py-12 sm:py-16 md:py-20">
        <div className="max-w-3xl">
          <div className="w-16 sm:w-24 h-1 bg-cream mb-6 sm:mb-8" />

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-black text-cream mb-4 sm:mb-6 leading-[1.15] sm:leading-[1.1] tracking-tight font-heading">
            India's Most Trusted
            <br />
            <span className="text-gradient-light">Logistics Partner</span>
          </h1>

          <p className="text-lg sm:text-xl md:text-2xl text-cream/90 mb-3 sm:mb-4 font-semibold leading-snug">
            Deliver Anywhere. Anytime. On Budget.
          </p>

          <p className="text-sm sm:text-base md:text-lg text-cream/80 sm:text-cream/70 mb-8 sm:mb-10 max-w-2xl leading-relaxed">
            40+ years of proven excellence. 500+ vendor partners. 20,000+ monthly shipments.
            Get real-time tracking, transparent pricing, and guaranteed on-time delivery across India.
          </p>

          {/* <div className="flex flex-col sm:flex-row gap-4">
            <Button
              asChild
              size="lg"
              className="bg-cream hover:bg-white text-navy font-bold text-lg px-12 py-6 rounded-md shadow-2xl hover:shadow-cream/50 hover:scale-105 transition-all duration-300"
            >
              <Link href="/#contact">Get Instant Quote →</Link>
            </Button>
          </div> */}

          <div className="mt-6 sm:mt-10 flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-6 text-cream/80 text-xs sm:text-sm">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span>Available 24/7</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span>95% On-Time Delivery</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
