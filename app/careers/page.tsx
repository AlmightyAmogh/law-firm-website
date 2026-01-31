'use client';

export default function CareersPage() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-24">
      <div className="grid lg:grid-cols-2 gap-20">
        {/* Left Content */}
        <div>
          <h1 className="text-4xl mb-6">Careers</h1>
          <p className="text-lg text-gray-600 leading-relaxed mb-8">
            We are always interested in engaging with driven legal professionals
            who value intellectual rigor, integrity, and long-term impact.
          </p>

          <p className="text-gray-600 leading-relaxed">
            If you believe your experience aligns with our practice areas, we
            invite you to submit your profile for consideration.
          </p>
        </div>

        {/* Application Form */}
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

          {/* Phone */}
          <div>
            <label className="block text-sm mb-2">Phone Number *</label>
            <input
              type="tel"
              required
              className="w-full border border-[rgb(var(--color-accent))] px-4 py-3 focus:outline-none focus:border-[rgb(var(--color-secondary))]"
            />
          </div>

          {/* Resume Upload */}
          <div>
            <label className="block text-sm mb-2">
              Resume (PDF / DOC / DOCX)
            </label>
            <input
              type="file"
              accept=".pdf,.doc,.docx"
              className="w-full text-sm"
            />
            <p className="text-xs text-gray-500 mt-2">
              Max file size: 5MB
            </p>
          </div>

          {/* OR Drive Link */}
          <div>
            <label className="block text-sm mb-2">
              Resume Link (Google Drive / Dropbox)
            </label>
            <input
              type="url"
              placeholder="https://"
              className="w-full border border-[rgb(var(--color-accent))] px-4 py-3 focus:outline-none focus:border-[rgb(var(--color-secondary))]"
            />
          </div>

          {/* Message */}
          <div>
            <label className="block text-sm mb-2">
              Message (Optional)
            </label>
            <textarea
              rows={4}
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
            Submit Application
          </button>
        </form>
      </div>
    </section>
  );
}
