

const Footer = () => {
  return (
     <footer className="bg-[rgb(var(--color-primary))] text-gray-300 mt-20">
      <div className="max-w-7xl mx-auto px-6 py-14 grid md:grid-cols-3 gap-10 text-sm">

        <div>
          <p className="text-white text-lg mb-4">
            Law Firm Name
          </p>
          <p>
            Trusted legal counsel in Litigation, Fintech, Real Estate, and M&A.
          </p>
        </div>

        <div>
          <p className="text-white mb-4">
            Contact
          </p>
          <p>contact@lawfirm.com</p>
          <p>+91 XXXXX XXXXX</p>
        </div>

        <div>
          <p className="text-white mb-4">
            Legal
          </p>
          <p className="text-gray-400">
            © {new Date().getFullYear()} Law Firm Name
          </p>
          <p className="text-gray-400">
            All rights reserved.
          </p>
        </div>

      </div>

      <div className="border-t border-[rgb(var(--color-accent))]/20 text-center py-4 text-xs text-gray-400">
        Designed with discretion and integrity.
      </div>
    </footer>
  )
}

export default Footer