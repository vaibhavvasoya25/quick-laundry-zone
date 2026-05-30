'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X, Phone } from 'lucide-react'

const navLinks = [
  { label: 'Home',     href: '/'         },
  { label: 'Services', href: '/services'  },
  { label: 'Pricing',  href: '/pricing'   },
  { label: 'About',    href: '/about'     },
  { label: 'Contact',  href: '/contact'   },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500
        ${scrolled
          ? 'bg-black/20'
          : 'bg-transparent'
        }`}
    >
      <div className="container-max section-padding">
        <div className="flex items-center justify-between h-16 lg:h-20">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 shrink-0">
            <div className="w-10 h-10 lg:w-12 lg:h-12 relative rounded-full overflow-hidden">
              <Image
                src="/logo.png"
                alt="Quick Laundry Zone Logo"
                fill
                className="object-contain scale-140"
                priority
              />
            </div>
            <div className="leading-tight">
              <p className="font-extrabold text-sm lg:text-base tracking-tight text-white">
                Quick Laundry
              </p>
              <p className="font-extrabold text-sm lg:text-base text-orange-400 tracking-tight -mt-0.5">
                Zone
              </p>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="nav-link text-sm font-semibold text-white hover:text-orange-400
                           transition-colors duration-200 pb-0.5"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTAs */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="tel:+9327920057"
              className="flex items-center gap-2 text-sm font-semibold text-white
                         hover:text-orange-400 transition-colors duration-200"
            >
              <Phone size={15} />
              Call Us
            </a>
            <a
              href="https://wa.me/9327920057?text=Hi%2C%20I%20want%20to%20book%20a%20laundry%20service"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-sm py-2.5 px-5"
            >
              Book Now
            </a>
          </div>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden p-2 rounded-lg text-white hover:bg-white/10
                       transition-colors duration-200"
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu — full screen overlay */}
      <div
        className={`lg:hidden fixed inset-0 top-16 bg-[#0A0A0A]/95 backdrop-blur-md
                    z-40 transition-all duration-300 flex flex-col
                    ${menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
      >
        <div className="flex flex-col section-padding pt-6 pb-10 flex-1 overflow-y-auto">
          {/* Nav links */}
          <nav className="flex flex-col gap-1">
            {navLinks.map((link, i) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-2xl font-bold text-white hover:text-orange-400 py-4
                           border-b border-white/10 transition-colors duration-200"
                style={{
                  transitionDelay: menuOpen ? `${i * 50}ms` : '0ms',
                  opacity: menuOpen ? 1 : 0,
                  transform: menuOpen ? 'translateX(0)' : 'translateX(-10px)',
                }}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Mobile CTAs */}
          <div className="flex flex-col gap-3 mt-8">
            <a
              href="https://wa.me/9327920057?text=Hi%2C%20I%20want%20to%20book%20a%20laundry%20service"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMenuOpen(false)}
              className="btn-primary justify-center text-base py-4"
            >
              📲 Book on WhatsApp
            </a>
            <a
              href="tel:+9327920057"
              onClick={() => setMenuOpen(false)}
              className="btn-outline justify-center text-base py-4 border-white/30
                         text-white hover:bg-white hover:text-gray-900"
            >
              <Phone size={18} /> Call Us Now
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}