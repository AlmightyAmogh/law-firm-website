import Link from "next/link";
import Image from "next/image"; 
import {FaLinkedin} from 'react-icons/fa';



const Header = () => {
  return (
     <header className="bg-[rgb(var(--color-primary))] text-white border-b border-[rgb(var(--color-accent))]/20">
      <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/logo.png"
            alt="Law Firm Logo"
            width={42}
            height={42}
          />
          <span className="text-xl tracking-wide">
            Law Firm Name
          </span>
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-10 text-sm tracking-wide">
          {[
            { label: "Home", href: "/" },
            { label: "About Us", href: "/about" },
            { label: "Areas of Practice", href: "/practice" },
            { label: "Careers", href: "/careers" },
            { label: "Contact Us", href: "/contact" },
          ].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="hover:text-[rgb(var(--color-secondary))] transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-xl hover:text-[rgb(var(--color-secondary))] transition-colors"
        >
          <FaLinkedin />
        </a>
      </div>
    </header>
  )
}

export default Header