"use client"

import Link from 'next/link'
import Image from 'next/image'
import { Phone, Mail, MapPin } from 'lucide-react'
import { FaFacebookF, FaInstagram } from 'react-icons/fa'
const services = [
  { label: 'Dry Cleaning',   href: '/services' },
  { label: 'Wash & Fold',    href: '/services' },
  { label: 'Steam Ironing',  href: '/services' },
  { label: 'Shoe Cleaning',  href: '/services' },
  { label: 'Indian Wear',    href: '/services' },
  { label: 'Home Linen',     href: '/services' },
]

const quickLinks = [
  { label: 'Home',     href: '/'        },
  { label: 'Services', href: '/services' },
  { label: 'Pricing',  href: '/pricing'  },
  { label: 'About Us', href: '/about'    },
  { label: 'Contact',  href: '/contact'  },
]

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* CTA strip */}
      <div className="bg-orange-500">
        <div className="container-max section-padding py-10 flex flex-col sm:flex-row
                        items-center justify-between gap-4">
          <div>
            <p className="text-white font-bold text-xl lg:text-2xl">
              Ready for fresh, clean clothes?
            </p>
            <p className="text-orange-100 text-sm mt-1">
              Book a pickup — we deliver back to your doorstep.
            </p>
          </div>
          <a
            href="https://wa.me/9327920057?text=Hi%2C%20I%20want%20to%20book%20a%20laundry%20service"
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 bg-white text-orange-500 hover:bg-orange-50
                       font-bold px-8 py-3 rounded-full transition-all
                       duration-300 hover:shadow-lg active:scale-95 text-sm"
          >
            📲 Book on WhatsApp
          </a>
        </div>
      </div>

      {/* Main footer */}
      <div className="container-max section-padding py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand col */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 relative">
                <Image src="/logo.png" alt="Quick Laundry Zone" fill className="object-contain" />
              </div>
              <div className="leading-tight">
                <p className="font-extrabold text-white text-sm">Quick Laundry</p>
                <p className="font-extrabold text-orange-400 text-sm -mt-0.5">Zone</p>
              </div>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-5">
              Surat's trusted laundry service. Professional dry cleaning,
              steam ironing & wash-and-fold with doorstep pickup & delivery.
            </p>
            <div className="flex gap-3">
              <a href="#" aria-label="Instagram"
                 className="w-9 h-9 rounded-full bg-gray-800 hover:bg-orange-500
                            flex items-center justify-center transition-colors duration-300">
                <FaInstagram size={16} />
              </a>
              <a href="#" aria-label="Facebook"
                 className="w-9 h-9 rounded-full bg-gray-800 hover:bg-orange-500
                            flex items-center justify-center transition-colors duration-300">
                <FaFacebookF size={16} />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <p className="text-white font-bold mb-4 text-sm tracking-wide uppercase">
              Our Services
            </p>
            <ul className="space-y-2.5">
              {services.map((s) => (
                <li key={s.label}>
                  <Link href={s.href}
                        className="text-gray-400 text-sm hover:text-orange-400
                                   transition-colors duration-200">
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick links */}
          <div>
            <p className="text-white font-bold mb-4 text-sm tracking-wide uppercase">
              Quick Links
            </p>
            <ul className="space-y-2.5">
              {quickLinks.map((l) => (
                <li key={l.label}>
                  <Link href={l.href}
                        className="text-gray-400 text-sm hover:text-orange-400
                                   transition-colors duration-200">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-white font-bold mb-4 text-sm tracking-wide uppercase">
              Contact
            </p>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm text-gray-400">
                <MapPin size={15} className="text-orange-400 shrink-0 mt-0.5" />
                <span>Surat, Gujarat, India</span>
              </li>
              <li>
                <a href="tel:+9327920057"
                   className="flex items-center gap-3 text-sm text-gray-400
                              hover:text-orange-400 transition-colors">
                  <Phone size={15} className="text-orange-400 shrink-0" />
                  +91 9327920057
                </a>
              </li>
              <li>
                <a href="mailto:hello@quicklaundryzone.in"
                   className="flex items-center gap-3 text-sm text-gray-400
                              hover:text-orange-400 transition-colors">
                  <Mail size={15} className="text-orange-400 shrink-0" />
                  hello@quicklaundryzone.in
                </a>
              </li>
            </ul>
            <div className="mt-5 text-xs text-gray-500">
              <p>Mon – Sun: 9:00 AM – 8:00 PM</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-800">
        <div className="container-max section-padding py-5 flex flex-col sm:flex-row
                        items-center justify-between gap-3 text-xs text-gray-500">
          <p>© {new Date().getFullYear()} Quick Laundry Zone. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="/privacy" className="hover:text-orange-400 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-orange-400 transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}