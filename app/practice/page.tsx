import RomanColumnIcon from "@/components/RomanColumnIcon";

const pillars = [
  {
    roman: "I",
    title: "Litigation",
    description:
      "Representation in complex commercial, civil, and regulatory disputes before courts and tribunals.",
  },
  {
    roman: "II",
    title: "Fintech",
    description:
      "Advisory on digital payments, lending, regulatory compliance, and emerging financial technologies.",
  },
  {
    roman: "III",
    title: "Real Estate",
    description:
      "Legal support across acquisitions, leasing, development, and real estate due diligence.",
  },
  {
    roman: "IV",
    title: "Mergers & Acquisitions",
    description:
      "End-to-end transaction support including structuring, negotiation, and execution of deals.",
  },
];

export default function PracticePage() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-24">
      {/* Heading */}
      <div className="max-w-3xl mb-20">
        <h1 className="text-4xl mb-6">Our Pillars of Practice</h1>
        <p className="text-lg text-gray-600 leading-relaxed">
          Our firm is built on four foundational areas of practice that define
          the depth, precision, and integrity of our legal advisory.
        </p>
      </div>

      {/* Pillar Cards */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {pillars.map((pillar) => (
          <div
            key={pillar.title}
            className="
              group relative aspect-square
              border border-[rgb(var(--color-accent))]
              bg-white p-8
              flex flex-col items-center justify-center text-center
              transition-all duration-300
              hover:-translate-y-1 hover:shadow-lg
              hover:bg-[rgba(197,160,89,0.04)]
            "
          >
            {/* Roman numeral */}
            <div
              className="
                absolute top-6 left-6
                text-sm tracking-widest
                text-[rgb(var(--color-secondary))]
                font-medium
              "
            >
              {pillar.roman}
            </div>

            {/* Icon */}
            <RomanColumnIcon
              className="
                h-14 w-14 mb-6
                text-[rgb(var(--color-secondary))]
                fill-current
              "
            />

            {/* Title */}
            <h3 className="text-xl mb-4 group-hover:text-[rgb(var(--color-secondary))] transition-colors">
              {pillar.title}
            </h3>

            {/* Description */}
            <p className="text-gray-600 text-sm leading-relaxed">
              {pillar.description}
            </p>

            {/* Bottom accent line */}
            <div
              className="
                absolute bottom-0 left-0 h-[2px] w-0
                bg-[rgb(var(--color-secondary))]
                transition-all duration-300
                group-hover:w-full
              "
            />
          </div>
        ))}
      </div>
    </section>
  );
}