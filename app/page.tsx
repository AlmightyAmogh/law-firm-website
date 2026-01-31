import Image from "next/image";

export default function HomePage() {
  return (
    <section className="relative h-[90vh] w-full overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/law.avif')",
        }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-[rgba(10,25,47,0.6)]" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto h-full px-6 flex items-center">
        <div className="max-w-3xl text-white">
          <h1 className="text-4xl md:text-5xl leading-tight mb-6">
            Trusted Legal Counsel
            <br />
            Across Complex Matters
          </h1>

          <p className="text-lg md:text-xl text-gray-200 leading-relaxed mb-10">
            We are a full-service law firm advising clients across litigation,
            financial technology, real estate, and mergers & acquisitions.
            Our approach combines legal precision with commercial insight.
          </p>

          <div className="flex gap-6">
            <a
              href="/practice"
              className="
                inline-block
                bg-[rgb(var(--color-secondary))]
                text-black
                px-8 py-3
                font-medium
                hover:bg-white
                transition-colors
              "
            >
              Our Practice
            </a>

            <a
              href="/contact"
              className="
                inline-block
                border border-white
                px-8 py-3
                hover:bg-white hover:text-black
                transition-colors
              "
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
