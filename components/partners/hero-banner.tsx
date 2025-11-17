export function HeroBanner() {
  return (
    <section className="relative h-[400px] w-full overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1494412651409-8963ce7935a7?w=1920&h=1080&fit=crop')"
        }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-navy/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-start justify-between max-w-7xl mx-auto px-6 md:px-12 lg:px-20 pt-24">
        {/* Top Left Text */}
        <div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-cream font-heading">
            PARTNERS.
          </h1>
        </div>

        {/* Top Right Text */}
        <div className="text-right">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-cream font-heading">
            WE DESIGN
            <br />
            LOGISTICS.
          </h2>
        </div>
      </div>
    </section>
  )
}
