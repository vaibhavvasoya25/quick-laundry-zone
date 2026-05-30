'use client'

import { useRef } from 'react'
import Link from 'next/link'
import { motion, useInView } from 'framer-motion'
import {
  Wind,
  Shirt,
  Flame,
  Sparkles,
  ShoppingBag,
  Home,
  ArrowRight,
  Check,
  Clock,
  Shield,
  Truck,
} from 'lucide-react'

// ─── Fade-up helper ────────────────────────────────────────────────────────────
function FadeUp({
  children,
  delay = 0,
  className = '',
}: {
  children: React.ReactNode
  delay?: number
  className?: string
}) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.1 })
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 36 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

// ─── Data ─────────────────────────────────────────────────────────────────────
const services = [
  {
    id: 'dry-cleaning',
    icon: Wind,
    title: 'Dry Cleaning',
    tagline: 'Solvent care for your finest garments',
    description:
      'Our professional dry cleaning uses premium solvents to deep-clean delicate fabrics that water would damage. From formal suits to silk sarees — we treat every garment with expert care and return it looking brand new.',
    highlights: [
      'Safe for silk, wool, linen & delicates',
      'Removes tough stains without fabric damage',
      'Professionally finished & pressed',
      'Packaged in breathable garment covers',
    ],
    items: ['Shirts & T-Shirts', 'Suits & Blazers', 'Dresses', 'Sarees', 'Leather Jackets', 'Sweaters'],
    gradient: 'from-blue-600 to-blue-800',
    accentLight: 'bg-blue-50',
    accentBorder: 'border-blue-100',
    accentText: 'text-blue-600',
    accentBtn: 'bg-blue-600 hover:bg-blue-700',
    badgeBg: 'bg-blue-100 text-blue-700',
    iconBg: 'bg-blue-100',
    iconColor: 'text-blue-600',
    waText: 'Hi%2C%20I%20want%20to%20book%20Dry%20Cleaning%20service',
    startingFrom: '₹60',
    startingLabel: 'Steam Press',
  },
  {
    id: 'wash-fold',
    icon: Shirt,
    title: 'Wash & Fold',
    tagline: 'Fresh, clean & neatly folded every time',
    description:
      'Our wash & fold service handles your everyday laundry. Machine washed with the right detergent for each fabric, thoroughly dried, neatly folded and returned to your door — fresh and ready to wear.',
    highlights: [
      'Separated by colour & fabric type',
      'Premium eco-friendly detergents',
      'Neatly folded & packed',
      '24-hour turnaround available',
    ],
    items: ['Casuals & Everyday Wear', 'Innerwear & Socks', 'Kids Clothing', 'Sports Wear', 'Work Shirts', 'Cotton Kurtas'],
    gradient: 'from-orange-500 to-orange-700',
    accentLight: 'bg-orange-50',
    accentBorder: 'border-orange-100',
    accentText: 'text-orange-500',
    accentBtn: 'bg-orange-500 hover:bg-orange-600',
    badgeBg: 'bg-orange-100 text-orange-700',
    iconBg: 'bg-orange-100',
    iconColor: 'text-orange-500',
    waText: 'Hi%2C%20I%20want%20to%20book%20Wash%20and%20Fold%20service',
    startingFrom: '₹60',
    startingLabel: 'T-Shirt Steam Press',
  },
  {
    id: 'steam-ironing',
    icon: Flame,
    title: 'Steam Ironing',
    tagline: 'Crisp, wrinkle-free clothes every morning',
    description:
      'Look sharp every single day. Our professional steam ironing gives your clothes that crisp, freshly pressed finish — whether it\'s a formal shirt for work or a kurta for a function. Delivered hung and ready to wear.',
    highlights: [
      'Industrial steam press for perfect finish',
      'Gentle on all fabric types',
      'Hung & delivered ready-to-wear',
      'Same-day service available',
    ],
    items: ['Formal Shirts', 'Trousers', 'Kurtas & Kurtis', 'Sarees & Dupattas', 'School Uniforms', 'Suits'],
    gradient: 'from-red-500 to-red-700',
    accentLight: 'bg-red-50',
    accentBorder: 'border-red-100',
    accentText: 'text-red-500',
    accentBtn: 'bg-red-500 hover:bg-red-600',
    badgeBg: 'bg-red-100 text-red-700',
    iconBg: 'bg-red-100',
    iconColor: 'text-red-500',
    waText: 'Hi%2C%20I%20want%20to%20book%20Steam%20Ironing%20service',
    startingFrom: '₹60',
    startingLabel: 'Per garment',
  },
  {
    id: 'indian-wear',
    icon: Sparkles,
    title: 'Indian Wear Care',
    tagline: 'Specialised care for your precious Indian outfits',
    description:
      'Indian fabrics need special attention — especially embroidered, zari, or ornamental work. We understand the delicacy of sarees, lehengas, sherwanis and bridal wear and use the right cleaning method for each fabric type: cotton, special fabric, or ornamental.',
    highlights: [
      'Separate method for cotton, silk & ornamental',
      'Safe zari & embroidery preservation',
      'Bridal wear handled with extra care',
      'Proper folding & packaging for storage',
    ],
    items: ['Sarees', 'Lehengas', 'Anarkali', 'Sherwani', 'Bridal Dress', 'Salwar Kameez', 'Blouse', 'Dupatta'],
    gradient: 'from-purple-600 to-purple-800',
    accentLight: 'bg-purple-50',
    accentBorder: 'border-purple-100',
    accentText: 'text-purple-600',
    accentBtn: 'bg-purple-600 hover:bg-purple-700',
    badgeBg: 'bg-purple-100 text-purple-700',
    iconBg: 'bg-purple-100',
    iconColor: 'text-purple-600',
    waText: 'Hi%2C%20I%20want%20to%20book%20Indian%20Wear%20Care%20service',
    startingFrom: '₹51',
    startingLabel: 'Shawl cleaning',
  },
  {
    id: 'bags-shoes',
    icon: ShoppingBag,
    title: 'Bags & Shoes',
    tagline: 'Deep clean & restore your accessories',
    description:
      'Your bags and shoes deserve as much care as your clothes. We professionally clean fabric handbags, sports shoes and leather footwear — removing dirt, odour and stains to restore them as close to new as possible.',
    highlights: [
      'Safe cleaning for fabric & leather',
      'Odour removal treatment',
      'Shoe shape maintained during cleaning',
      'Careful drying to avoid damage',
    ],
    items: ['Fabric Handbags', 'Sports Shoes', 'Leather Shoes', 'Canvas Sneakers', 'Formal Shoes'],
    gradient: 'from-amber-500 to-amber-700',
    accentLight: 'bg-amber-50',
    accentBorder: 'border-amber-100',
    accentText: 'text-amber-600',
    accentBtn: 'bg-amber-500 hover:bg-amber-600',
    badgeBg: 'bg-amber-100 text-amber-700',
    iconBg: 'bg-amber-100',
    iconColor: 'text-amber-600',
    waText: 'Hi%2C%20I%20want%20to%20book%20Bag%20and%20Shoe%20cleaning',
    startingFrom: '₹215',
    startingLabel: 'Fabric Handbag',
  },
  {
    id: 'home-linen',
    icon: Home,
    title: 'Home Linen & Curtains',
    tagline: 'Fresh home, fresh linen — every time',
    description:
      'Heavy home items like bedsheets, quilts, curtains and carpets need professional cleaning that home machines can\'t handle. We collect, clean, and deliver them back fresh — with curtain and carpet pricing calculated fairly by square foot.',
    highlights: [
      'Handles large & heavy items easily',
      'Curtains & carpets priced per sq.ft',
      'Bedsheets, quilts & pillow covers',
      'Free measurement at pickup',
    ],
    items: ['Bedsheets', 'Quilts & Duvets', 'Pillow Covers', 'Single Layer Curtains', 'Double Layer Curtains', 'Carpets', 'Towels'],
    gradient: 'from-green-600 to-green-800',
    accentLight: 'bg-green-50',
    accentBorder: 'border-green-100',
    accentText: 'text-green-600',
    accentBtn: 'bg-green-600 hover:bg-green-700',
    badgeBg: 'bg-green-100 text-green-700',
    iconBg: 'bg-green-100',
    iconColor: 'text-green-600',
    waText: 'Hi%2C%20I%20want%20to%20book%20Home%20Linen%20and%20Curtain%20cleaning',
    startingFrom: '₹10',
    startingLabel: 'Curtain per sq.ft',
  },
]

const processSteps = [
  { icon: Truck,    step: '01', title: 'We Pickup',     desc: 'Schedule via WhatsApp or call. We come to your door.' },
  { icon: Sparkles, step: '02', title: 'We Clean',      desc: 'Right method for each garment — expert hands, every time.' },
  { icon: Shield,   step: '03', title: 'Quality Check', desc: 'Every item inspected before packing.' },
  { icon: Clock,    step: '04', title: 'We Deliver',    desc: 'Fresh, packed & back at your door within 24 hours.' },
]

// ─── Main Page ────────────────────────────────────────────────────────────────
export default function ServicesPage() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────────── */}
      <section className="relative bg-[#0A0A0A] pt-28 pb-20 overflow-hidden">
        <div className="absolute -top-24 -right-24 w-[500px] h-[500px] bg-orange-500/15 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 w-80 h-80 bg-orange-600/10 rounded-full blur-[100px] pointer-events-none" />
        <div
          className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />
        <div className="relative container-max section-padding text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-orange-500/10 border
                       border-orange-500/30 text-orange-400 text-xs font-bold
                       tracking-widest uppercase px-4 py-2 rounded-full mb-6"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-orange-400 animate-pulse" />
            What We Offer
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-5"
          >
            Every Fabric.{' '}
            <span className="bg-gradient-to-r from-orange-400 to-orange-500 bg-clip-text text-transparent">
              Expert Care.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.2 }}
            className="text-gray-400 text-sm sm:text-base max-w-xl mx-auto mb-10"
          >
            From everyday casuals to bridal lehengas — we have the right cleaning
            method for every garment, fabric and home item.
          </motion.p>

          {/* Quick jump pills */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.35 }}
            className="flex flex-wrap justify-center gap-2"
          >
            {services.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                className="inline-flex items-center gap-1.5 bg-white/5 border
                           border-white/10 text-gray-300 hover:text-white
                           hover:bg-white/10 text-xs px-4 py-2 rounded-full
                           transition-all duration-200"
              >
                {s.title}
              </a>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Services ─────────────────────────────────────────────── */}
      <section className="py-16 lg:py-24 bg-[#FFF7F0]">
        <div className="container-max section-padding space-y-16 lg:space-y-24">
          {services.map((service, index) => {
            const Icon = service.icon
            const isEven = index % 2 === 0

            return (
              <div key={service.id} id={service.id} className="scroll-mt-24">
                <div
                  className={`grid lg:grid-cols-2 gap-10 lg:gap-16 items-center
                               ${!isEven ? 'lg:[&>*:first-child]:order-2' : ''}`}
                >
                  {/* ── Visual card ── */}
                  <FadeUp delay={0.05}>
                    <div className={`bg-gradient-to-br ${service.gradient} rounded-3xl
                                    p-8 sm:p-10 relative overflow-hidden min-h-[380px]
                                    flex flex-col justify-between`}>
                      {/* Decorative blobs */}
                      <div className="absolute top-0 right-0 w-48 h-48 bg-white/10
                                      rounded-full blur-3xl pointer-events-none" />
                      <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-black/10
                                      rounded-full blur-2xl pointer-events-none" />

                      {/* Top row */}
                      <div className="relative z-10 flex items-start justify-between">
                        <div className="w-14 h-14 bg-white/20 rounded-2xl flex
                                        items-center justify-center">
                          <Icon size={28} className="text-white" />
                        </div>
                        <span className="text-white/40 font-black text-6xl leading-none
                                         select-none">
                          0{index + 1}
                        </span>
                      </div>

                      {/* Items grid */}
                      <div className="relative z-10 mt-8">
                        <p className="text-white/60 text-xs font-semibold tracking-widest
                                      uppercase mb-3">
                          We handle
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {service.items.map((item) => (
                            <span
                              key={item}
                              className="text-xs font-medium px-3 py-1.5 bg-white/15
                                         text-white rounded-full border border-white/20
                                         backdrop-blur-sm"
                            >
                              {item}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Bottom row */}
                      <div className="relative z-10 mt-8 flex items-end
                                      justify-between">
                        <div>
                          <p className="text-white/60 text-xs">Starting from</p>
                          <p className="text-white font-extrabold text-3xl">
                            {service.startingFrom}
                          </p>
                          <p className="text-white/50 text-xs mt-0.5">
                            {service.startingLabel}
                          </p>
                        </div>
                        <a
                          href={`https://wa.me/9327920057?text=${service.waText}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 bg-white/20
                                     hover:bg-white/30 text-white text-xs font-bold
                                     px-5 py-2.5 rounded-full border border-white/30
                                     transition-all duration-300 active:scale-95"
                        >
                          Book Now <ArrowRight size={13} />
                        </a>
                      </div>
                    </div>
                  </FadeUp>

                  {/* ── Text content ── */}
                  <FadeUp delay={0.15}>
                    <div>
                      {/* Tag */}
                      <span className={`inline-block ${service.badgeBg} text-xs font-bold
                                        tracking-widest uppercase px-3 py-1.5 rounded-full mb-4`}>
                        {service.title}
                      </span>

                      {/* Heading */}
                      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold
                                     text-gray-900 leading-tight mb-3">
                        {service.title}
                      </h2>
                      <p className={`${service.accentText} font-semibold text-sm mb-5`}>
                        {service.tagline}
                      </p>

                      {/* Description */}
                      <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-7">
                        {service.description}
                      </p>

                      {/* Highlights */}
                      <ul className="space-y-3 mb-8">
                        {service.highlights.map((h) => (
                          <li key={h} className="flex items-start gap-3">
                            <div className={`w-5 h-5 ${service.iconBg} rounded-full
                                            flex items-center justify-center shrink-0 mt-0.5`}>
                              <Check size={11} className={service.iconColor} />
                            </div>
                            <span className="text-gray-700 text-sm">{h}</span>
                          </li>
                        ))}
                      </ul>

                      {/* CTAs */}
                      <div className="flex flex-wrap gap-3">
                        <a
                          href={`https://wa.me/9327920057?text=${service.waText}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`inline-flex items-center gap-2 ${service.accentBtn}
                                      text-white font-semibold px-6 py-3 rounded-full
                                      transition-all duration-300 hover:shadow-lg
                                      active:scale-95 text-sm`}
                        >
                          📲 Book This Service
                        </a>
                        <Link
                          href="/pricing"
                          className={`inline-flex items-center gap-2 border-2
                                      ${service.accentBorder} ${service.accentText}
                                      hover:opacity-80 font-semibold px-6 py-3
                                      rounded-full transition-all duration-300
                                      active:scale-95 text-sm`}
                        >
                          See Pricing <ArrowRight size={14} />
                        </Link>
                      </div>
                    </div>
                  </FadeUp>
                </div>

                {/* Divider (not after last) */}
                {index < services.length - 1 && (
                  <div className="mt-16 lg:mt-24 border-t border-dashed border-gray-200" />
                )}
              </div>
            )
          })}
        </div>
      </section>

      {/* ── Process strip ─────────────────────────────────────────── */}
      <section className="py-20 lg:py-24 bg-[#0A0A0A] overflow-hidden">
        <div className="container-max section-padding">
          <FadeUp className="text-center mb-14">
            <span className="inline-block text-orange-400 text-xs font-bold
                             tracking-[0.2em] uppercase mb-3">
              Our Process
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight">
              From Your Door to{' '}
              <span className="bg-gradient-to-r from-orange-400 to-orange-500
                               bg-clip-text text-transparent">
                Spotlessly Clean
              </span>
            </h2>
          </FadeUp>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((step, i) => {
              const Icon = step.icon
              return (
                <FadeUp key={step.step} delay={i * 0.1}>
                  <div className="relative bg-gray-900 rounded-2xl p-6 border
                                  border-gray-800 hover:border-orange-500/40
                                  transition-all duration-300 group h-full">
                    {/* Step number */}
                    <span className="text-gray-800 font-black text-5xl absolute
                                     top-4 right-5 select-none leading-none
                                     group-hover:text-orange-500/20 transition-colors
                                     duration-300">
                      {step.step}
                    </span>

                    <div className="w-11 h-11 bg-orange-500/10 rounded-xl flex
                                    items-center justify-center mb-5 group-hover:bg-orange-500
                                    transition-colors duration-300">
                      <Icon size={20} className="text-orange-400 group-hover:text-white
                                                  transition-colors duration-300" />
                    </div>

                    <h3 className="text-white font-bold text-base mb-2">
                      {step.title}
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {step.desc}
                    </p>

                    {/* Connector arrow (not after last) */}
                    {i < processSteps.length - 1 && (
                      <div className="hidden lg:flex absolute -right-3 top-1/2
                                      -translate-y-1/2 z-10 w-6 h-6 bg-orange-500
                                      rounded-full items-center justify-center shadow-lg
                                      shadow-orange-500/30">
                        <ArrowRight size={11} className="text-white" />
                      </div>
                    )}
                  </div>
                </FadeUp>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── Bottom CTA ───────────────────────────────────────────── */}
      <section className="py-20 bg-orange-500 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-72 h-72 bg-orange-400/30
                        rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-56 h-56 bg-orange-600/30
                        rounded-full blur-3xl pointer-events-none" />
        <div className="relative container-max section-padding text-center">
          <FadeUp>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4 leading-tight">
              Ready to Book a Service?
            </h2>
            <p className="text-orange-100 text-sm sm:text-base mb-8 max-w-md mx-auto">
              Just send us a WhatsApp message. We&apos;ll confirm pickup time and
              have your clothes back fresh within 24 hours.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="https://wa.me/9327920057?text=Hi%2C%20I%20want%20to%20book%20a%20service"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white text-orange-500
                           hover:bg-orange-50 font-bold px-8 py-4 rounded-full
                           transition-all duration-300 hover:shadow-xl active:scale-95
                           text-sm sm:text-base"
              >
                📲 Book on WhatsApp
              </a>
              <Link
                href="/pricing"
                className="inline-flex items-center gap-2 bg-orange-600/40
                           hover:bg-orange-600/60 text-white border border-white/30
                           font-bold px-8 py-4 rounded-full transition-all duration-300
                           active:scale-95 text-sm sm:text-base"
              >
                View Full Pricing <ArrowRight size={16} />
              </Link>
            </div>
          </FadeUp>
        </div>
      </section>
    </>
  )
}