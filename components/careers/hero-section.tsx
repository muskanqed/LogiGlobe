export function HeroSection() {
  return (
    <section className="relative h-[600px] w-full overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1920&h=1080&fit=crop')"
        }}
      >
        {/* Hexagonal Pattern Overlay */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0l25.98 15v30L30 60 4.02 45V15z' fill='%23003764' fill-opacity='0.4' fill-rule='evenodd'/%3E%3C/svg%3E")`
          }}
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#003764]/90 to-[#005EB8]/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center justify-center">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 text-center">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white mb-6 font-heading">
            Join Our Team
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
            Build a future with us in logistics and innovation
          </p>
        </div>
      </div>
    </section>
  )
}
