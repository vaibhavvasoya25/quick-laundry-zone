'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion, useInView, useAnimation, AnimatePresence } from 'framer-motion'
import {
  ArrowRight,
  Star,
  CheckCircle2,
  Shirt,
  Wind,
  Sparkles,
  ShoppingBag,
  Home,
  Flame,
  Phone,
  ChevronDown,
  Clock,
  Shield,
  Leaf,
  Truck,
} from 'lucide-react'

// ─── Reusable fade-up hook ────────────────────────────────────────────────────
function useFadeUp(threshold = 0.15) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: threshold })
  return { ref, inView }
}

// ─── Section wrapper with fade-up animation ──────────────────────────────────
function FadeUp({
  children,
  delay = 0,
  className = '',
}: {
  children: React.ReactNode
  delay?: number
  className?: string
}) {
  const { ref, inView } = useFadeUp()
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

// ─── Data ─────────────────────────────────────────────────────────────────────

const services = [
  {
    icon: Wind,
    title: 'Dry Cleaning',
    desc: 'Expert solvent-based cleaning for delicate fabrics, suits, sarees & more.',
    bg: 'bg-blue-50',
    iconColor: 'text-blue-500',
    hoverBg: 'group-hover:bg-blue-500',
  },
  {
    icon: Shirt,
    title: 'Wash & Fold',
    desc: 'Machine washed, neatly folded and returned fresh within 24 hours.',
    bg: 'bg-orange-50',
    iconColor: 'text-orange-500',
    hoverBg: 'group-hover:bg-orange-500',
  },
  {
    icon: Flame,
    title: 'Steam Ironing',
    desc: 'Professional steam press for wrinkle-free, crisp clothes every time.',
    bg: 'bg-red-50',
    iconColor: 'text-red-500',
    hoverBg: 'group-hover:bg-red-500',
  },
  {
    icon: Sparkles,
    title: 'Indian Wear Care',
    desc: 'Specialised care for sarees, lehengas, sherwanis & bridal outfits.',
    bg: 'bg-purple-50',
    iconColor: 'text-purple-500',
    hoverBg: 'group-hover:bg-purple-500',
  },
  {
    icon: ShoppingBag,
    title: 'Bags & Shoes',
    desc: 'Deep clean & restore your leather bags, sports shoes & more.',
    bg: 'bg-amber-50',
    iconColor: 'text-amber-500',
    hoverBg: 'group-hover:bg-amber-500',
  },
  {
    icon: Home,
    title: 'Home Linen',
    desc: 'Bedsheets, curtains, quilts, pillow covers cleaned to perfection.',
    bg: 'bg-green-50',
    iconColor: 'text-green-500',
    hoverBg: 'group-hover:bg-green-500',
  },
]

const howItWorks = [
  {
    step: '01',
    title: 'Schedule Pickup',
    desc: 'Book via WhatsApp or call us. We come to your doorstep at your convenience.',
    icon: Phone,
  },
  {
    step: '02',
    title: 'We Clean & Care',
    desc: 'Expert cleaning with the right method for each fabric type — dry clean, wash, or steam.',
    icon: Sparkles,
  },
  {
    step: '03',
    title: 'Fresh Delivery',
    desc: 'Clean, pressed and neatly packed clothes delivered back to your door.',
    icon: Truck,
  },
]

const whyUs = [
  {
    icon: Clock,
    title: '24-Hour Turnaround',
    desc: 'Fast service without compromising quality.',
  },
  {
    icon: Shield,
    title: 'Safe Fabric Handling',
    desc: 'Right method for every fabric — no damage, ever.',
  },
  {
    icon: Leaf,
    title: 'Eco-Friendly',
    desc: 'Environmentally safe products for every wash.',
  },
  {
    icon: Truck,
    title: 'Free Pickup & Delivery',
    desc: 'Doorstep service across Surat at no extra charge.',
  },
  {
    icon: CheckCircle2,
    title: 'Transparent Pricing',
    desc: 'No hidden charges. What you see is what you pay.',
  },
  {
    icon: Star,
    title: '500+ Happy Customers',
    desc: 'Trusted by families and professionals in Surat.',
  },
]

const testimonials = [
  {
    name: 'Priya Mehta',
    location: 'Adajan, Surat',
    review:
      'My bridal lehenga came back looking absolutely stunning. The care they took was exceptional. Highly recommend Quick Laundry Zone!',
    rating: 5,
    initials: 'PM',
    color: 'bg-purple-500',
  },
  {
    name: 'Rahul Shah',
    location: 'Katargam, Surat',
    review:
      'Doorstep pickup and delivery is a game changer. Clothes come back perfectly ironed. Been using them for 3 months now.',
    rating: 5,
    initials: 'RS',
    color: 'bg-blue-500',
  },
  {
    name: 'Anjali Patel',
    location: 'Mota varachha, Surat',
    review:
      'Very affordable prices and professional service. My curtains and bedsheets are sparkling clean. Will definitely use again!',
    rating: 5,
    initials: 'AP',
    color: 'bg-orange-500',
  },
]

const stats = [
  { value: '500+', label: 'Happy Customers' },
  { value: '3', label: 'Expert Services' },
  { value: '24h', label: 'Turnaround Time' },
  { value: '100%', label: 'Satisfaction Rate' },
]

// ─── Main Component ───────────────────────────────────────────────────────────

export default function HomePage() {
  const [activeTestimonial, setActiveTestimonial] = useState(0)
  const [scrollY, setScrollY] = useState(0)

  // Parallax on hero
  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Auto-rotate testimonials
  useEffect(() => {
    const t = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 4000)
    return () => clearInterval(t)
  }, [])

  return (
    <>
      {/* ═══════════════════════════════════════════════════
    HERO SECTION — paste this replacing your existing hero
═══════════════════════════════════════════════════ */}
      <section className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-[#0A0A0A]">

        {/* ── Background image at low opacity ── */}
        <div className="absolute inset-0 pointer-events-none">
          <Image
            src="/hero-bg.jpg"
            alt=""
            fill
            className="object-cover opacity-[0.08]"
            priority
          />
          {/* Dark gradient overlay so image never competes with text */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A]/60 via-transparent to-[#0A0A0A]/80" />
        </div>

        {/* ── Animated colour blobs ── */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            className="absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[400px]
                 rounded-full bg-orange-500/15 blur-[140px]"
            animate={{ opacity: [0.2, 0.4, 0.2], scale: [1, 1.08, 1] }}
            transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
          />
          <motion.div
            className="absolute bottom-0 -left-32 w-[400px] h-[400px] rounded-full
                 bg-orange-600/10 blur-[100px]"
            animate={{ opacity: [0.15, 0.3, 0.15] }}
            transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
          />
          <motion.div
            className="absolute bottom-0 -right-32 w-[350px] h-[350px] rounded-full
                 bg-orange-500/10 blur-[100px]"
            animate={{ opacity: [0.1, 0.25, 0.1] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
          />
        </div>

        {/* ── Subtle grid ── */}
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />

        {/* ── Main content ── */}
        <div className="relative z-10 container-max section-padding w-full pt-32 pb-16">

          {/* ── TOP: Centred text block ── */}
          <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">

            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="inline-flex items-center gap-2 bg-orange-500/10 border
                   border-orange-500/30 text-orange-400 text-xs font-bold
                   tracking-widest uppercase px-4 py-2 rounded-full mb-7"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-orange-400 animate-pulse" />
              Surat&apos;s Trusted Laundry Service
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="text-4xl sm:text-5xl lg:text-[3.5rem] xl:text-6xl font-extrabold
                   text-white leading-[1.08] tracking-tight mb-6"
            >
              Clean Clothes,{' '}
              <span className="relative inline-block">
                <span className="gradient-text">Zero Hassle.</span>
                <motion.span
                  className="absolute -bottom-1 left-0 h-[3px] bg-gradient-to-r
                       from-orange-500 to-orange-300 rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: '100%' }}
                  transition={{ duration: 0.8, delay: 1 }}
                />
              </span>
            </motion.h1>

            {/* Subtext */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="text-gray-400 text-base sm:text-lg leading-relaxed mb-9 max-w-xl mx-auto"
            >
              Professional dry cleaning, laundry &amp; steam ironing in Surat.
              Doorstep pickup &amp; delivery — at transparent, honest prices.
            </motion.p>

            {/* CTA buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="flex flex-wrap justify-center gap-4 mb-10"
            >
              <a
                href="https://wa.me/919327920057?text=Hi%2C%20I%20want%20to%20book%20a%20laundry%20service"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-sm sm:text-base px-8 py-4"
              >
                📲 Book Now on WhatsApp
              </a>
              <Link
                href="/pricing"
                className="btn-outline border-white/20 text-white hover:bg-white
                     hover:text-gray-900 hover:border-white text-sm sm:text-base
                     px-8 py-4"
              >
                View Pricing <ArrowRight size={16} />
              </Link>
            </motion.div>

            {/* Trust strip */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-wrap justify-center items-center gap-5 sm:gap-8"
            >
              {['Free Pickup & Delivery', '24hr Turnaround', 'Eco-Friendly'].map((t) => (
                <span key={t} className="flex items-center gap-2 text-xs text-gray-400">
                  <CheckCircle2 size={13} className="text-orange-400 shrink-0" />
                  {t}
                </span>
              ))}
            </motion.div>
          </div>

          {/* ── BOTTOM: Cards row ── */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
          >

            {/* Card 1 — Stats */}
            <div className="sm:col-span-2 bg-gradient-to-br from-gray-800/80 to-gray-900/80
                      backdrop-blur-sm rounded-3xl p-6 border border-gray-700/60
                      relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/10
                        rounded-full blur-2xl pointer-events-none" />
              <div className="flex items-center gap-3 mb-5">
                <div className="w-9 h-9 relative shrink-0">
                  <Image src="/logo.png" alt="Quick Laundry Zone" fill className="object-contain" />
                </div>
                <div>
                  <p className="text-white font-bold text-sm leading-tight">Quick Laundry Zone</p>
                  <p className="text-gray-400 text-xs">Surat, Gujarat</p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {stats.map((s) => (
                  <div key={s.label}
                    className="bg-gray-800/70 rounded-2xl p-4 border border-gray-700/60">
                    <p className="text-2xl font-extrabold text-orange-400">{s.value}</p>
                    <p className="text-xs text-gray-400 mt-0.5">{s.label}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Card 2 — Services chips */}
            <div className="bg-gray-800/60 backdrop-blur-sm rounded-3xl p-6
                      border border-gray-700/60">
              <p className="text-gray-400 text-xs font-bold tracking-widest uppercase mb-4">
                We Clean
              </p>
              <div className="flex flex-wrap gap-2">
                {['Dry Cleaning', 'Steam Iron', 'Wash & Fold', 'Indian Wear', 'Bags & Shoes', 'Home Linen'].map((s) => (
                  <span key={s}
                    className="text-xs font-medium px-3 py-1.5 bg-gray-700/80
                             text-gray-300 rounded-full border border-gray-600/60">
                    {s}
                  </span>
                ))}
              </div>
              <div className="mt-5 pt-4 border-t border-gray-700/60">
                <Link href="/services"
                  className="text-orange-400 text-xs font-bold flex items-center gap-1
                           hover:gap-2 transition-all duration-200">
                  See all services <ArrowRight size={12} />
                </Link>
              </div>
            </div>

            {/* Card 3 — Review card */}
            <div className="bg-white rounded-3xl p-6 flex flex-col justify-between">
              {/* Stars */}
              <div className="flex gap-0.5 mb-3">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} size={14} className="fill-amber-400 text-amber-400" />
                ))}
              </div>
              <p className="text-gray-800 text-sm font-semibold leading-relaxed flex-1 mb-4">
                &ldquo;Clothes came back perfectly clean and ironed. Free pickup made it so easy!&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-orange-500 flex items-center
                          justify-center shrink-0">
                  <span className="text-white text-xs font-bold">PM</span>
                </div>
                <div>
                  <p className="text-gray-900 text-xs font-bold">Priya M.</p>
                  <p className="text-gray-400 text-[11px]">Surat</p>
                </div>
                <div className="ml-auto">
                  <span className="text-[10px] font-bold text-green-500 bg-green-50
                             px-2 py-1 rounded-full">
                    ✓ Verified
                  </span>
                </div>
              </div>
            </div>

          </motion.div>

          {/* ── Floating pickup badge — visible only lg+ ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1, duration: 0.5, type: 'spring', stiffness: 200 }}
            className="hidden lg:block"
          >
            <motion.div
              animate={{ y: [-4, 4, -4] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute top-[38%] -right-4 xl:right-8 bg-orange-500 rounded-2xl
                   px-5 py-3.5 shadow-2xl shadow-orange-500/40 z-20"
            >
              <p className="text-white text-sm font-bold">🛵 Free Pickup</p>
              <p className="text-orange-100 text-xs mt-0.5">Across Surat</p>
            </motion.div>
          </motion.div>

        </div>

        {/* ── Scroll indicator ── */}
        <motion.div
          className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col
               items-center gap-1 text-gray-600 z-10"
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <p className="text-[10px] tracking-widest uppercase">Scroll</p>
          <ChevronDown size={14} />
        </motion.div>

      </section>

      {/* ═══════════════════════════════════════════════════
          SERVICES SECTION
      ═══════════════════════════════════════════════════ */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="container-max section-padding">
          <FadeUp className="text-center mb-14">
            <span className="section-tag">What We Do</span>
            <h2 className="section-title">
              Every Fabric, <span className="gradient-text">Expert Care</span>
            </h2>
            <p className="text-gray-500 mt-4 max-w-xl mx-auto text-sm sm:text-base">
              From delicate sarees to everyday casuals — we have the right cleaning
              method for every garment.
            </p>
          </FadeUp>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
            {services.map((service, i) => {
              const Icon = service.icon
              return (
                <FadeUp key={service.title} delay={i * 0.08}>
                  <Link
                    href="/services"
                    className={`group block bg-white rounded-2xl p-6 border border-gray-100
                                transition-all duration-300 hover:-translate-y-1
                                hover:shadow-xl hover:shadow-gray-100/80 cursor-pointer`}
                  >
                    <div
                      className={`w-12 h-12 ${service.bg} rounded-xl flex items-center
                                  justify-center mb-4 transition-colors duration-300
                                  ${service.hoverBg}`}
                    >
                      <Icon
                        size={22}
                        className={`${service.iconColor} transition-colors duration-300
                                    group-hover:text-white`}
                      />
                    </div>
                    <h3
                      className="font-bold text-gray-900 text-base mb-2
                                  group-hover:text-orange-500 transition-colors duration-300"
                    >
                      {service.title}
                    </h3>
                    <p className="text-gray-500 text-sm leading-relaxed mb-4">
                      {service.desc}
                    </p>
                    <span
                      className="inline-flex items-center gap-1.5 text-orange-500 text-xs
                                  font-bold tracking-wide opacity-0 group-hover:opacity-100
                                  -translate-x-2 group-hover:translate-x-0
                                  transition-all duration-300"
                    >
                      Learn more <ArrowRight size={12} />
                    </span>
                  </Link>
                </FadeUp>
              )
            })}
          </div>

          <FadeUp delay={0.3} className="text-center mt-10">
            <Link href="/services" className="btn-outline">
              View All Services <ArrowRight size={16} />
            </Link>
          </FadeUp>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          HOW IT WORKS
      ═══════════════════════════════════════════════════ */}
      <section className="py-20 lg:py-28 bg-[#0A0A0A] overflow-hidden">
        <div className="container-max section-padding">
          <FadeUp className="text-center mb-14">
            <span className="inline-block text-orange-400 text-xs font-bold tracking-[0.2em] uppercase mb-3">
              How It Works
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-bold text-white leading-tight">
              Laundry in{' '}
              <span className="gradient-text">3 Simple Steps</span>
            </h2>
            <p className="text-gray-400 mt-4 max-w-lg mx-auto text-sm sm:text-base">
              We make laundry completely effortless for you — from your door and back.
            </p>
          </FadeUp>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10 relative">
            {/* Connecting line (desktop) */}
            <div
              className="hidden md:block absolute top-10 left-[calc(16.67%+1rem)]
                          right-[calc(16.67%+1rem)] h-px bg-gradient-to-r
                          from-transparent via-orange-500/40 to-transparent z-0"
            />

            {howItWorks.map((step, i) => {
              const Icon = step.icon
              return (
                <FadeUp key={step.step} delay={i * 0.15}>
                  <div className="relative z-10 flex flex-col items-center text-center">
                    {/* Step number circle */}
                    <div
                      className="w-20 h-20 rounded-full border-2 border-orange-500/30
                                  bg-orange-500/10 flex items-center justify-center mb-6
                                  relative"
                    >
                      <Icon size={28} className="text-orange-400" />
                      <span
                        className="absolute -top-1 -right-1 w-6 h-6 bg-orange-500
                                    rounded-full flex items-center justify-center
                                    text-white text-[10px] font-extrabold"
                      >
                        {i + 1}
                      </span>
                    </div>
                    <h3 className="text-white font-bold text-lg mb-3">{step.title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
                      {step.desc}
                    </p>
                  </div>
                </FadeUp>
              )
            })}
          </div>

          {/* CTA */}
          <FadeUp delay={0.4} className="text-center mt-14">
            <a
              href="https://wa.me/9327920057?text=Hi%2C%20I%20want%20to%20book%20a%20laundry%20pickup"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary px-8 py-4 text-base"
            >
              📲 Schedule a Pickup Now
            </a>
          </FadeUp>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          PRICING TEASER
      ═══════════════════════════════════════════════════ */}
      <section className="py-20 lg:py-24 bg-gradient-to-br from-orange-50 to-[#FFF7F0]">
        <div className="container-max section-padding">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <FadeUp>
              <span className="section-tag">Transparent Pricing</span>
              <h2 className="section-title mb-5">
                No Hidden Costs.{' '}
                <span className="gradient-text">Ever.</span>
              </h2>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-8">
                We believe in total transparency. Every service has a clear, upfront price —
                no surprises when it&apos;s time to pay.
              </p>

              {/* Sample prices */}
              <div className="space-y-3 mb-8">
                {[
                  { item: 'T-Shirt (Dry Clean)', price: '₹105' },
                  { item: 'Saree (Dry Clean)', price: '₹280' },
                  { item: 'Formal Jacket (Dry Clean)', price: '₹359' },
                  { item: 'Bedsheet (Large)', price: '₹220' },
                ].map((p) => (
                  <div
                    key={p.item}
                    className="flex items-center justify-between bg-white rounded-xl
                               px-5 py-3.5 border border-orange-100 shadow-sm"
                  >
                    <span className="text-sm font-medium text-gray-700">{p.item}</span>
                    <span className="text-sm font-bold text-orange-500">{p.price}</span>
                  </div>
                ))}
              </div>

              <Link href="/pricing" className="btn-primary">
                See Full Price List <ArrowRight size={16} />
              </Link>
            </FadeUp>

            {/* Right — decorative card */}
            <FadeUp delay={0.15}>
              <div
                className="bg-white rounded-3xl p-8 shadow-xl border border-orange-100
                            relative overflow-hidden"
              >
                {/* Orange corner accent */}
                <div
                  className="absolute top-0 right-0 w-40 h-40 bg-orange-500/5
                              rounded-bl-[100px]"
                />

                <div className="flex items-center gap-3 mb-6">
                  <div
                    className="w-10 h-10 bg-orange-500 rounded-xl flex items-center
                                justify-center"
                  >
                    <Sparkles size={18} className="text-white" />
                  </div>
                  <div>
                    <p className="font-bold text-gray-900 text-sm">Quick Laundry Zone</p>
                    <p className="text-gray-400 text-xs">Starting from just ₹51</p>
                  </div>
                </div>

                <div className="space-y-4">
                  {[
                    { cat: 'Top Wear', from: '₹60', type: 'Steam Press' },
                    { cat: 'Indian Wear', from: '₹105', type: 'Dry Clean' },
                    { cat: 'Bags & Shoes', from: '₹215', type: 'Dry Clean' },
                    { cat: 'Home Linen', from: '₹80', type: 'Medium' },
                    { cat: 'Curtains', from: '₹10/sq.ft', type: 'Single Layer' },
                  ].map((cat) => (
                    <div
                      key={cat.cat}
                      className="flex items-center justify-between py-3
                                  border-b border-gray-50 last:border-0"
                    >
                      <div>
                        <p className="text-sm font-semibold text-gray-800">{cat.cat}</p>
                        <p className="text-xs text-gray-400">{cat.type}</p>
                      </div>
                      <span className="text-orange-500 font-bold text-sm">
                        from {cat.from}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          WHY CHOOSE US
      ═══════════════════════════════════════════════════ */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="container-max section-padding">
          <FadeUp className="text-center mb-14">
            <span className="section-tag">Why Choose Us</span>
            <h2 className="section-title">
              The Quick Laundry Zone{' '}
              <span className="gradient-text">Difference</span>
            </h2>
          </FadeUp>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
            {whyUs.map((item, i) => {
              const Icon = item.icon
              return (
                <FadeUp key={item.title} delay={i * 0.07}>
                  <div
                    className="flex items-start gap-4 bg-gray-50 rounded-2xl p-6
                                border border-gray-100 hover:border-orange-200
                                hover:bg-orange-50/40 transition-all duration-300
                                group"
                  >
                    <div
                      className="w-10 h-10 bg-orange-100 rounded-xl flex items-center
                                  justify-center shrink-0 group-hover:bg-orange-500
                                  transition-colors duration-300"
                    >
                      <Icon
                        size={18}
                        className="text-orange-500 group-hover:text-white
                                   transition-colors duration-300"
                      />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 text-sm mb-1">
                        {item.title}
                      </h3>
                      <p className="text-gray-500 text-xs leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                </FadeUp>
              )
            })}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          TESTIMONIALS
      ═══════════════════════════════════════════════════ */}
      <section className="py-20 lg:py-28 bg-[#0A0A0A] overflow-hidden">
        <div className="container-max section-padding">
          <FadeUp className="text-center mb-14">
            <span className="inline-block text-orange-400 text-xs font-bold
                             tracking-[0.2em] uppercase mb-3">
              Customer Love
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">
              What Surat Says <span className="gradient-text">About Us</span>
            </h2>
          </FadeUp>

          {/* Testimonial cards */}
          <div className="relative max-w-2xl mx-auto">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTestimonial}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.5 }}
                className="bg-gray-900 rounded-3xl p-8 sm:p-10 border border-gray-700"
              >
                {/* Stars */}
                <div className="flex gap-1 mb-5">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <Star key={s} size={16} className="fill-amber-400 text-amber-400" />
                  ))}
                </div>

                {/* Review text */}
                <p className="text-gray-300 text-base sm:text-lg leading-relaxed mb-8
                               italic">
                  &ldquo;{testimonials[activeTestimonial].review}&rdquo;
                </p>

                {/* Author */}
                <div className="flex items-center gap-4">
                  <div
                    className={`w-12 h-12 ${testimonials[activeTestimonial].color}
                                rounded-full flex items-center justify-center shrink-0`}
                  >
                    <span className="text-white font-bold text-sm">
                      {testimonials[activeTestimonial].initials}
                    </span>
                  </div>
                  <div>
                    <p className="text-white font-bold text-sm">
                      {testimonials[activeTestimonial].name}
                    </p>
                    <p className="text-gray-500 text-xs">
                      {testimonials[activeTestimonial].location}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Dot indicators */}
            <div className="flex justify-center gap-2 mt-6">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveTestimonial(i)}
                  className={`transition-all duration-300 rounded-full
                    ${i === activeTestimonial
                      ? 'w-8 h-2 bg-orange-500'
                      : 'w-2 h-2 bg-gray-600 hover:bg-gray-400'
                    }`}
                  aria-label={`View testimonial ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          FINAL CTA BANNER
      ═══════════════════════════════════════════════════ */}
      <section className="py-20 lg:py-24 bg-orange-500 overflow-hidden relative">
        {/* Decorative blobs */}
        <div
          className="absolute top-0 right-0 w-64 h-64 bg-orange-400/30
                      rounded-full blur-3xl pointer-events-none"
        />
        <div
          className="absolute bottom-0 left-0 w-48 h-48 bg-orange-600/30
                      rounded-full blur-3xl pointer-events-none"
        />

        <div className="relative container-max section-padding text-center">
          <FadeUp>
            <h2
              className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white
                          mb-5 leading-tight"
            >
              Ready for Fresh, Clean Clothes?
            </h2>
            <p className="text-orange-100 text-sm sm:text-base mb-8 max-w-lg mx-auto">
              Book a pickup right now on WhatsApp. We&apos;ll handle the rest.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="https://wa.me/9327920057?text=Hi%2C%20I%20want%20to%20book%20a%20laundry%20service"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white text-orange-500
                           hover:bg-orange-50 font-bold px-8 py-4 rounded-full
                           transition-all duration-300 hover:shadow-2xl
                           active:scale-95 text-sm sm:text-base"
              >
                📲 Book on WhatsApp
              </a>
              <a
                href="tel:+9327920057"
                className="inline-flex items-center gap-2 bg-black/30
                           hover:bg-black/60 text-white border border-white/30
                           font-bold px-8 py-4 rounded-full transition-all duration-300
                           active:scale-95 text-sm sm:text-base"
              >
                <Phone size={16} /> Call Us
              </a>
            </div>
          </FadeUp>
        </div>
      </section>
    </>
  )
}