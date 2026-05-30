'use client'

import { useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion, useInView } from 'framer-motion'
import {
  ArrowRight,
  Heart,
  Leaf,
  Shield,
  Clock,
  Star,
  Users,
  Sparkles,
  CheckCircle2,
  Phone,
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
const stats = [
  { value: '500+', label: 'Happy Customers',    icon: Users   },
  { value: '3',    label: 'Core Services',       icon: Sparkles},
  { value: '24h',  label: 'Turnaround Time',     icon: Clock   },
  { value: '100%', label: 'Satisfaction Rate',   icon: Star    },
]

const values = [
  {
    icon: Heart,
    title: 'Care in Every Step',
    desc: 'We treat every garment as if it were our own. From pickup to delivery, careful handling is non-negotiable.',
    color: 'bg-red-50',
    iconColor: 'text-red-500',
    hoverBg: 'group-hover:bg-red-500',
  },
  {
    icon: Leaf,
    title: 'Eco-Friendly Always',
    desc: 'We use environmentally responsible detergents and cleaning agents that are safe for your family and the planet.',
    color: 'bg-green-50',
    iconColor: 'text-green-500',
    hoverBg: 'group-hover:bg-green-500',
  },
  {
    icon: Shield,
    title: 'Honest & Transparent',
    desc: 'No hidden charges, no last-minute surprises. You always know what you pay before we even pick up.',
    color: 'bg-blue-50',
    iconColor: 'text-blue-500',
    hoverBg: 'group-hover:bg-blue-500',
  },
  {
    icon: Clock,
    title: 'Always On Time',
    desc: 'We respect your schedule. Pickups and deliveries happen on time — because your time matters to us.',
    color: 'bg-orange-50',
    iconColor: 'text-orange-500',
    hoverBg: 'group-hover:bg-orange-500',
  },
  {
    icon: Star,
    title: 'Quality First',
    desc: 'Every garment goes through a quality check before it is packed and returned to you.',
    color: 'bg-amber-50',
    iconColor: 'text-amber-500',
    hoverBg: 'group-hover:bg-amber-500',
  },
  {
    icon: Users,
    title: 'Community Rooted',
    desc: 'We are a Surat-based business, built for the people of Surat. Local, proud and here to stay.',
    color: 'bg-purple-50',
    iconColor: 'text-purple-500',
    hoverBg: 'group-hover:bg-purple-500',
  },
]

const services = [
  'Dry Cleaning',
  'Wash & Fold',
  'Steam Ironing',
  'Indian Wear Care',
  'Bags & Shoes Cleaning',
  'Home Linen & Curtains',
]

const promises = [
  'Free doorstep pickup & delivery across Surat',
  'Right cleaning method for every fabric type',
  'Transparent pricing — no hidden charges',
  'Careful handling of all delicate & precious garments',
  'Eco-friendly detergents safe for your family',
  '24-hour turnaround for everyday laundry',
]

// ─── Main Page ────────────────────────────────────────────────────────────────
export default function AboutPage() {
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

        <div className="relative container-max section-padding">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

            {/* Left — text */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 bg-orange-500/10 border
                           border-orange-500/30 text-orange-400 text-xs font-bold
                           tracking-widest uppercase px-4 py-2 rounded-full mb-6"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-orange-400 animate-pulse" />
                Our Story
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.65, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white
                           leading-tight mb-6"
              >
                Built for Surat.{' '}
                <span className="bg-gradient-to-r from-orange-400 to-orange-500
                                 bg-clip-text text-transparent">
                  Built with Love.
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.2 }}
                className="text-gray-400 text-sm sm:text-base leading-relaxed mb-8"
              >
                Quick Laundry Zone was born from a simple idea — that everyone deserves
                clean, fresh clothes without the hassle. We started as a small laundry
                service in Surat with one goal: make laundry completely effortless for
                busy families and professionals.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.3 }}
                className="flex flex-wrap gap-3"
              >
                <Link href="/services" className="btn-primary text-sm px-6 py-3">
                  Our Services <ArrowRight size={15} />
                </Link>
                <a
                  href="https://wa.me/9327920057?text=Hi%2C%20I%20want%20to%20know%20more%20about%20Quick%20Laundry%20Zone"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline border-white/30 text-white hover:bg-white
                             hover:text-gray-900 hover:border-white text-sm px-6 py-3"
                >
                  Chat with Us
                </a>
              </motion.div>
            </div>

            {/* Right — logo card */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
              className="hidden lg:flex items-center justify-center"
            >
              <div className="relative">
                {/* Outer glow ring */}
                <div className="absolute inset-0 bg-orange-500/20 rounded-full blur-3xl scale-110" />

                {/* Logo circle */}
                <div className="relative w-72 h-72 bg-gradient-to-br from-gray-800
                                to-gray-900 rounded-full border border-gray-700
                                flex items-center justify-center shadow-2xl">
                  <div className="w-48 h-48 lg:w-50 lg:h-50 relative rounded-full overflow-hidden">
                    <Image
                      src="/logo.png"
                      alt="Quick Laundry Zone"
                      fill
                      className="object-contain scale-135"
                    />
                  </div>
                </div>

                {/* Floating badge — top right */}
                <motion.div
                  animate={{ y: [-5, 5, -5] }}
                  transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                  className="absolute -top-4 -right-4 bg-orange-500 rounded-2xl
                             px-4 py-3 shadow-xl shadow-orange-500/30"
                >
                  <p className="text-white text-xs font-bold">🏆 Surat&apos;s Trusted</p>
                  <p className="text-orange-100 text-[10px]">Laundry Service</p>
                </motion.div>

                {/* Floating badge — bottom left */}
                <motion.div
                  animate={{ y: [5, -5, 5] }}
                  transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
                  className="absolute -bottom-4 -left-4 bg-white rounded-2xl px-4 py-3
                             shadow-xl flex items-center gap-2"
                >
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center
                                  justify-center shrink-0">
                    <CheckCircle2 size={14} className="text-white" />
                  </div>
                  <div>
                    <p className="text-gray-800 text-xs font-bold">500+ Customers</p>
                    <p className="text-gray-400 text-[10px]">Across Surat</p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Stats ────────────────────────────────────────────────── */}
      <section className="py-14 bg-orange-500">
        <div className="container-max section-padding">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {stats.map((stat, i) => {
              const Icon = stat.icon
              return (
                <FadeUp key={stat.label} delay={i * 0.08}>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center
                                    justify-center mx-auto mb-3">
                      <Icon size={22} className="text-white" />
                    </div>
                    <p className="text-4xl lg:text-5xl font-extrabold text-white mb-1">
                      {stat.value}
                    </p>
                    <p className="text-orange-100 text-sm font-medium">{stat.label}</p>
                  </div>
                </FadeUp>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── Our Story ────────────────────────────────────────────── */}
      <section className="py-20 lg:py-28 bg-[#FFF7F0]">
        <div className="container-max section-padding">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

            {/* Left — visual */}
            <FadeUp>
              <div className="relative">
                {/* Main card */}
                <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl
                                p-8 border border-gray-700 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-40 h-40 bg-orange-500/10
                                  rounded-full blur-3xl" />

                  {/* Services list */}
                  <p className="text-gray-400 text-xs font-bold tracking-widest uppercase mb-4">
                    What We Clean
                  </p>
                  <div className="space-y-3">
                    {services.map((s, i) => (
                      <motion.div
                        key={s}
                        initial={{ opacity: 0, x: -15 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: i * 0.07 }}
                        className="flex items-center gap-3 bg-gray-800/60 rounded-xl
                                   px-4 py-3 border border-gray-700"
                      >
                        <div className="w-2 h-2 rounded-full bg-orange-500 shrink-0" />
                        <span className="text-gray-200 text-sm font-medium">{s}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Bottom info card */}
                <div className="mt-4 grid grid-cols-2 gap-4">
                  <div className="bg-white rounded-2xl p-5 border border-orange-100
                                  shadow-sm text-center">
                    <p className="text-3xl font-extrabold text-orange-500 mb-1">₹51</p>
                    <p className="text-xs text-gray-500">Starting price</p>
                  </div>
                  <div className="bg-white rounded-2xl p-5 border border-orange-100
                                  shadow-sm text-center">
                    <p className="text-3xl font-extrabold text-gray-900 mb-1">Free</p>
                    <p className="text-xs text-gray-500">Pickup & delivery</p>
                  </div>
                </div>
              </div>
            </FadeUp>

            {/* Right — story text */}
            <FadeUp delay={0.15}>
              <span className="section-tag">Who We Are</span>
              <h2 className="section-title mb-5">
                Surat&apos;s Neighbourhood{' '}
                <span className="gradient-text">Laundry Expert</span>
              </h2>
              <div className="space-y-4 text-gray-600 text-sm sm:text-base leading-relaxed">
                <p>
                  Quick Laundry Zone started with a straightforward mission — bring
                  professional laundry and dry cleaning to every doorstep in Surat,
                  without the premium price tag or the inconvenience of dropping clothes
                  off at a shop.
                </p>
                <p>
                  We offer three core cleaning methods — <strong className="text-gray-900">dry cleaning</strong>,{' '}
                  <strong className="text-gray-900">wash & fold</strong>, and{' '}
                  <strong className="text-gray-900">steam ironing</strong> — each applied
                  using the right technique for each fabric type. From everyday casuals
                  to delicate bridal lehengas, every garment gets the individual care
                  it deserves.
                </p>
                <p>
                  We are proud to serve the families and professionals of Surat. Our
                  transparent pricing, free doorstep pickup and reliable 24-hour
                  turnaround have made us a trusted name for hundreds of customers
                  across the city.
                </p>
              </div>

              {/* Promises */}
              <div className="mt-7 space-y-3">
                {promises.map((p) => (
                  <div key={p} className="flex items-start gap-3">
                    <CheckCircle2 size={16} className="text-orange-500 shrink-0 mt-0.5" />
                    <span className="text-gray-700 text-sm">{p}</span>
                  </div>
                ))}
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ── Values ───────────────────────────────────────────────── */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="container-max section-padding">
          <FadeUp className="text-center mb-14">
            <span className="section-tag">Our Values</span>
            <h2 className="section-title">
              What We Stand{' '}
              <span className="gradient-text">For</span>
            </h2>
            <p className="text-gray-500 mt-4 max-w-lg mx-auto text-sm sm:text-base">
              These aren&apos;t just words — they&apos;re the principles behind every
              pickup, every wash, and every delivery.
            </p>
          </FadeUp>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
            {values.map((val, i) => {
              const Icon = val.icon
              return (
                <FadeUp key={val.title} delay={i * 0.07}>
                  <div className="group bg-gray-50 hover:bg-white rounded-2xl p-6
                                  border border-gray-100 hover:border-orange-100
                                  hover:shadow-xl hover:shadow-orange-50
                                  transition-all duration-300 h-full">
                    <div className={`w-12 h-12 ${val.color} rounded-xl flex items-center
                                    justify-center mb-4 transition-colors duration-300
                                    ${val.hoverBg}`}>
                      <Icon
                        size={22}
                        className={`${val.iconColor} transition-colors duration-300
                                    group-hover:text-white`}
                      />
                    </div>
                    <h3 className="font-bold text-gray-900 text-base mb-2
                                   group-hover:text-orange-500 transition-colors duration-300">
                      {val.title}
                    </h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{val.desc}</p>
                  </div>
                </FadeUp>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── Mission strip ─────────────────────────────────────────── */}
      <section className="py-20 lg:py-24 bg-[#0A0A0A] overflow-hidden">
        <div className="container-max section-padding">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

            <FadeUp>
              <span className="inline-block text-orange-400 text-xs font-bold
                               tracking-[0.2em] uppercase mb-4">
                Our Mission
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-bold
                             text-white leading-tight mb-6">
                Making Clean Clothes{' '}
                <span className="bg-gradient-to-r from-orange-400 to-orange-500
                                 bg-clip-text text-transparent">
                  Effortless
                </span>{' '}
                for Everyone
              </h2>
              <p className="text-gray-400 text-sm sm:text-base leading-relaxed mb-8">
                Our mission is simple — give every household in Surat access to
                professional fabric care at honest prices, with the convenience of
                doorstep service. No queues, no guesswork, no hidden costs.
                Just clean clothes delivered back to your home.
              </p>
              <a
                href="https://wa.me/9327920057?text=Hi%2C%20I%20want%20to%20book%20a%20laundry%20service"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-sm px-7 py-3.5"
              >
                📲 Book Your First Pickup
              </a>
            </FadeUp>

            {/* Right — mission cards */}
            <FadeUp delay={0.15}>
              <div className="space-y-4">
                {[
                  {
                    title: 'For Busy Families',
                    desc: 'No time for laundry? We handle everything — pickup, clean, deliver.',
                    emoji: '👨‍👩‍👧',
                    bg: 'bg-gray-900',
                    border: 'border-gray-800',
                  },
                  {
                    title: 'For Working Professionals',
                    desc: 'Crisp, pressed formals delivered 24 hours — ready for your next meeting.',
                    emoji: '💼',
                    bg: 'bg-gray-900',
                    border: 'border-gray-800',
                  },
                  {
                    title: 'For Special Occasions',
                    desc: 'Bridal wear, sherwanis, lehengas — handled with the utmost care for your big day.',
                    emoji: '✨',
                    bg: 'bg-orange-500/10',
                    border: 'border-orange-500/20',
                  },
                ].map((card, i) => (
                  <motion.div
                    key={card.title}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    className={`flex items-start gap-4 ${card.bg} rounded-2xl p-5
                                border ${card.border}`}
                  >
                    <span className="text-2xl shrink-0">{card.emoji}</span>
                    <div>
                      <h3 className="text-white font-bold text-sm mb-1">{card.title}</h3>
                      <p className="text-gray-400 text-xs leading-relaxed">{card.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────── */}
      <section className="py-20 bg-orange-500 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-72 h-72 bg-orange-400/30
                        rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-56 h-56 bg-orange-600/30
                        rounded-full blur-3xl pointer-events-none" />
        <div className="relative container-max section-padding">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <FadeUp>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight
                             text-center lg:text-left">
                Let&apos;s Take Care of Your Laundry
              </h2>
              <p className="text-orange-100 text-sm mt-3 max-w-md text-center
                            lg:text-left">
                Join hundreds of happy Surat customers. Book your first pickup today
                — it takes less than a minute on WhatsApp.
              </p>
            </FadeUp>
            <FadeUp delay={0.1} className="shrink-0 flex flex-col sm:flex-row gap-3">
              <a
                href="https://wa.me/9327920057?text=Hi%2C%20I%20want%20to%20book%20a%20laundry%20service"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-white
                           text-orange-500 hover:bg-orange-50 font-bold px-8 py-4
                           rounded-full transition-all duration-300 hover:shadow-xl
                           active:scale-95 text-sm whitespace-nowrap"
              >
                📲 Book on WhatsApp
              </a>
              <a
                href="tel:+9327920057"
                className="inline-flex items-center justify-center gap-2
                           bg-black/30 hover:bg-black/60 text-white
                           border border-white/30 font-bold px-8 py-4 rounded-full
                           transition-all duration-300 active:scale-95 text-sm
                           whitespace-nowrap"
              >
                <Phone size={16} /> Call Us
              </a>
            </FadeUp>
          </div>
        </div>
      </section>
    </>
  )
}