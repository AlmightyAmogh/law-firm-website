'use client';

export default function ContactPage() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-24">
      <div className="grid lg:grid-cols-2 gap-20">
        {/* Contact Details */}
        <div>
          <h1 className="text-4xl mb-8">Contact Us</h1>

          <p className="text-lg text-gray-600 leading-relaxed mb-12">
            For general inquiries, advisory discussions, or engagement
            opportunities, please reach out using the details below or submit
            the contact form.
          </p>

          <div className="space-y-8 text-gray-700">
            {/* Address */}
            <div>
              <h3 className="text-lg mb-2">Office Address</h3>
              <p className="leading-relaxed">
                [Firm Name]<br />
                5th Floor, Prestige Tower<br />
                Business District<br />
                Mumbai – 400001, India
              </p>
            </div>

            {/* Phone */}
            <div>
              <h3 className="text-lg mb-2">Telephone</h3>
              <p>+91 22 0000 0000</p>
            </div>

            {/* Email */}
            <div>
              <h3 className="text-lg mb-2">Email</h3>
              <p>contact@firmname.com</p>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <form
          className="space-y-6 border border-[rgb(var(--color-accent))] p-10"
          onSubmit={(e) => e.preventDefault()}
        >
          {/* Name */}
          <div>
            <label className="block text-sm mb-2">Full Name *</label>
            <input
              type="text"
              required
              className="w-full border border-[rgb(var(--color-accent))] px-4 py-3 focus:outline-none focus:border-[rgb(var(--color-secondary))]"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm mb-2">Email Address *</label>
            <input
              type="email"
              required
              className="w-full border border-[rgb(var(--color-accent))] px-4 py-3 focus:outline-none focus:border-[rgb(var(--color-secondary))]"
            />
          </div>

          {/* Subject */}
          <div>
            <label className="block text-sm mb-2">Subject</label>
            <input
              type="text"
              className="w-full border border-[rgb(var(--color-accent))] px-4 py-3 focus:outline-none focus:border-[rgb(var(--color-secondary))]"
            />
          </div>

          {/* Message */}
          <div>
            <label className="block text-sm mb-2">Message *</label>
            <textarea
              rows={5}
              required
              className="w-full border border-[rgb(var(--color-accent))] px-4 py-3 focus:outline-none focus:border-[rgb(var(--color-secondary))]"
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="
              mt-4 w-full
              bg-[rgb(var(--color-primary))]
              text-white
              py-3
              hover:bg-black
              transition-colors
            "
          >
            Send Message
          </button>

          <p className="text-xs text-gray-500 mt-2">
            Please do not include confidential or sensitive information in this
            form.
          </p>
        </form>
      </div>
    </section>
  );
}
