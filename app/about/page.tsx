import Image from "next/image";

const founders = [
  {
    name: "Founder One",
    role: "Managing Partner",
    description:
      "Founder One has over a decade of experience advising clients on complex commercial litigation and regulatory matters across multiple jurisdictions.",
    image: "/logo.png",
  },
  {
    name: "Founder Two",
    role: "Partner",
    description:
      "Founder Two specializes in fintech, corporate transactions, and real estate advisory, with a strong focus on emerging businesses and financial institutions.",
    image: "/logo.png",
  },
];

export default function AboutPage() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20">
      {/* Intro */}
      <div className="max-w-3xl mb-20">
        <h1 className="text-4xl mb-6">About Us</h1>
        <p className="text-lg text-gray-600 leading-relaxed">
          We are a boutique law firm built on principles of integrity,
          discretion, and legal precision. Our approach combines rigorous legal
          analysis with commercial insight to deliver results that matter.
        </p>
      </div>

      {/* Founders */}
      <div className="grid md:grid-cols-2 gap-12">
        {founders.map((founder) => (
          <div
            key={founder.name}
            className="group border border-[rgb(var(--color-accent))] bg-white transition-all duration-300 hover:shadow-lg"
          >
            {/* Image */}
            <div className="relative h-80 w-full overflow-hidden">
              <Image
                src={founder.image}
                alt={founder.name}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>

            {/* Content */}
            <div className="p-8">
              <h3 className="text-2xl mb-1">
                {founder.name}
              </h3>
              <p className="text-[rgb(var(--color-secondary))] mb-4">
                {founder.role}
              </p>
              <p className="text-gray-600 leading-relaxed">
                {founder.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}