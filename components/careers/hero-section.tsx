export function HeroSection() {
  return (
    <section className="relative h-[500px] md:h-[600px] w-full overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1553413077-190dd305871c?w=1920&h=1080&fit=crop')"
        }}
      >
        {/* Large Hexagonal Grid Pattern */}
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M50 5 L86.6 27.5 L86.6 72.5 L50 95 L13.4 72.5 L13.4 27.5 Z' fill='none' stroke='%23ffffff' stroke-width='1' stroke-opacity='0.3'/%3E%3C/svg%3E")`,
            backgroundSize: "100px 100px"
          }}
        />

        {/* Dark Navy Overlay */}
        <div className="absolute inset-0 bg-navy/85" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center justify-center">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 text-center">
          {/* Main Title */}
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-black text-cream mb-6 font-heading tracking-tight">
            JOIN US
          </h1>

          {/* Subtitle Keywords */}
          <div className="flex flex-wrap justify-center gap-4 md:gap-8 text-cream/80 text-sm md:text-base font-medium uppercase tracking-wider">
            <span className="px-4 py-2 border border-cream/30 rounded-sm">Recruitment</span>
            <span className="px-4 py-2 border border-cream/30 rounded-sm">Career</span>
            <span className="px-4 py-2 border border-cream/30 rounded-sm">Business</span>
            <span className="px-4 py-2 border border-cream/30 rounded-sm">Opportunities</span>
          </div>
        </div>
      </div>
    </section>
  )
}
