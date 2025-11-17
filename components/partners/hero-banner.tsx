export function HeroBanner() {
  return (
    <section className="relative h-[450px] md:h-[500px] w-full overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=1920&h=1080&fit=crop')"
        }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-navy/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center justify-center">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-cream mb-4 font-heading leading-tight">
            Partner With India's
            <br />
            Leading Logistics Network
          </h1>
          <p className="text-lg md:text-xl text-cream/90 max-w-3xl mx-auto">
            Join our trusted network of transport partners and grow your business with guaranteed
            workflows, transparent operations, and on-time payments
          </p>
        </div>
      </div>
    </section>
  )
}
