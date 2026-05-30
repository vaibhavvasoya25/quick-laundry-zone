'use client'

import { useState, useRef } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import {
  Shirt,
  Wind,
  Flame,
  ShoppingBag,
  Home,
  Sparkles,
  ArrowRight,
  Info,
  Check,
} from 'lucide-react'
import Image from 'next/image'

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

// ─── Types ────────────────────────────────────────────────────────────────────
type SimpleRow = { item: string; dryClean: string; steamPress: string }
type IndianRow = {
  item: string
  cotton: string
  special: string
  ornamental: string
  steamPress: string
}
type SizeRow = { item: string; medium: string; large: string }
type SingleRow = { item: string; price: string }

// ─── Pricing Data ──────────────────────────────────────────────────────────────
const topWear: SimpleRow[] = [
  { item: 'T-Shirt', dryClean: '₹105', steamPress: '₹60' },
  { item: 'Cotton Shirt', dryClean: '₹110', steamPress: '₹60' },
  { item: 'Cotton Ladies Top', dryClean: '₹120', steamPress: '₹60' },
  { item: 'Short Dress', dryClean: '₹200', steamPress: '₹80' },
  { item: 'Long Dress', dryClean: '₹300', steamPress: '₹105' },
  { item: 'Sweater / Cardigan', dryClean: '₹240', steamPress: '₹70' },
  { item: 'Formal Jacket / Blazer', dryClean: '₹359', steamPress: '₹150' },
  { item: 'Leather Jacket (Female)', dryClean: '₹695', steamPress: '—' },
  { item: 'Leather Jacket (Male)', dryClean: '₹595', steamPress: '—' },
]

const bottomWear: SimpleRow[] = [
  { item: 'Shorts / Skirt', dryClean: '₹115', steamPress: '₹60' },
  { item: 'Long Skirt', dryClean: '₹165', steamPress: '₹70' },
  { item: 'Jeans / Casual Trouser', dryClean: '₹130', steamPress: '₹80' },
  { item: 'Formal Trouser', dryClean: '₹130', steamPress: '₹80' },
  { item: 'Leather Trouser', dryClean: '—', steamPress: '—' },
]

const indianWear: IndianRow[] = [
  { item: 'Blouse', cotton: '₹110', special: '₹145', ornamental: '₹200', steamPress: '₹60' },
  { item: 'Saree', cotton: '₹280', special: '₹325', ornamental: '₹425', steamPress: '₹105' },
  { item: 'Short Kurta', cotton: '₹110', special: '₹135', ornamental: '₹250', steamPress: '₹60' },
  { item: 'Long Kurta / Kameez', cotton: '₹199', special: '₹259', ornamental: '₹352', steamPress: '₹80' },
  { item: 'Anarkali', cotton: '₹280', special: '₹310', ornamental: '—', steamPress: '₹115' },
  { item: 'Dupatta', cotton: '₹120', special: '₹155', ornamental: '₹178', steamPress: '₹60' },
  { item: 'Salwar / Chudidar', cotton: '₹125', special: '₹130', ornamental: '₹195', steamPress: '₹60' },
  { item: 'Lahenga', cotton: '₹450', special: '₹770', ornamental: '₹1125', steamPress: '₹150' },
  { item: 'Sherwani', cotton: '₹406', special: '₹1100', ornamental: '₹1400', steamPress: '₹115' },
  { item: 'Bridal Dress', cotton: '₹1100', special: '₹1500', ornamental: '₹1750', steamPress: '—' },
]

const bagsShoes: SingleRow[] = [
  { item: 'Fabric Hand Bag', price: '₹215' },
  { item: 'Leather Hand Bag', price: '—' },
  { item: 'Sports Shoes', price: '₹260' },
  { item: 'Leather Shoes', price: '₹525' },
]

const accessories: SingleRow[] = [
  { item: 'Scarf', price: '—' },
  { item: 'Neck Tie', price: '₹250' },
  { item: 'Shawl', price: '₹51' },
  { item: 'Shocks (Pair)', price: '₹110' },
  { item: 'Cap', price: '—' },
  { item: 'Stuff Toy (Small)', price: '—' },
]

const curtainCarpet: SingleRow[] = [
  { item: 'Single Layer Curtains', price: '₹10 / sq.ft' },
  { item: 'Double Layer Curtains', price: '₹15 / sq.ft' },
  { item: 'Heavy Fabric Curtains', price: '₹25 / sq.ft' },
  { item: 'Carpet', price: '₹55 / sq.ft' },
]

const homeLinen: SizeRow[] = [
  { item: 'Cushion', medium: '—', large: '—' },
  { item: 'Pillow', medium: '—', large: '—' },
  { item: 'Pillow Cover', medium: '₹80', large: '₹90' },
  { item: 'Cushion Cover', medium: '—', large: '—' },
  { item: 'Towel (Face / Bath)', medium: '₹110', large: '₹110' },
  { item: 'Bath Robe', medium: '—', large: '—' },
  { item: 'Bedsheet', medium: '₹130', large: '₹220' },
  { item: 'Fitted Sheet', medium: '—', large: '—' },
  { item: 'Cotton Quilt Cover', medium: '₹225', large: '₹300' },
  { item: 'Quilt / Duvet', medium: '₹350', large: '₹495' },
]

// ─── Tab config ───────────────────────────────────────────────────────────────
const tabs = [
  { id: 'topwear', label: 'Top Wear', icon: Shirt, color: 'blue' },
  { id: 'bottomwear', label: 'Bottom Wear', icon: Wind, color: 'indigo' },
  { id: 'indianwear', label: 'Indian Wear', icon: Sparkles, color: 'purple' },
  { id: 'bagsshoes', label: 'Bags & Shoes', icon: ShoppingBag, color: 'amber' },
  { id: 'homelinen', label: 'Home Linen', icon: Home, color: 'green' },
  { id: 'curtain', label: 'Curtain & Carpet', icon: Flame, color: 'orange' },
]

const colorMap: Record<string, { bg: string; text: string; border: string; activeBg: string; activeText: string; pill: string }> = {
  blue: { bg: 'bg-blue-50', text: 'text-blue-600', border: 'border-blue-200', activeBg: 'bg-blue-600', activeText: 'text-white', pill: 'bg-blue-100 text-blue-700' },
  indigo: { bg: 'bg-indigo-50', text: 'text-indigo-600', border: 'border-indigo-200', activeBg: 'bg-indigo-600', activeText: 'text-white', pill: 'bg-indigo-100 text-indigo-700' },
  purple: { bg: 'bg-purple-50', text: 'text-purple-600', border: 'border-purple-200', activeBg: 'bg-purple-600', activeText: 'text-white', pill: 'bg-purple-100 text-purple-700' },
  amber: { bg: 'bg-amber-50', text: 'text-amber-600', border: 'border-amber-200', activeBg: 'bg-amber-500', activeText: 'text-white', pill: 'bg-amber-100 text-amber-700' },
  green: { bg: 'bg-green-50', text: 'text-green-600', border: 'border-green-200', activeBg: 'bg-green-600', activeText: 'text-white', pill: 'bg-green-100 text-green-700' },
  orange: { bg: 'bg-orange-50', text: 'text-orange-600', border: 'border-orange-200', activeBg: 'bg-orange-500', activeText: 'text-white', pill: 'bg-orange-100 text-orange-700' },
}

// ─── Table row component ──────────────────────────────────────────────────────
function TableRow({
  cells,
  isHeader = false,
  highlight = false,
  delay = 0,
}: {
  cells: string[]
  isHeader?: boolean
  highlight?: boolean
  delay?: number
}) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.5 })

  if (isHeader) {
    return (
      <div
        className={`grid gap-0 border-b border-gray-200`}
        style={{ gridTemplateColumns: `repeat(${cells.length}, 1fr)` }}
      >
        {cells.map((cell, i) => (
          <div
            key={i}
            className={`px-4 py-3 text-xs font-bold uppercase tracking-wider text-gray-500
                        ${i === 0 ? 'text-left' : 'text-center'}`}
          >
            {cell}
          </div>
        ))}
      </div>
    )
  }

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -10 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.35, delay }}
      className={`grid gap-0 border-b border-gray-50 last:border-0 group
                  hover:bg-orange-50/60 transition-colors duration-200
                  ${highlight ? 'bg-orange-50/30' : ''}`}
      style={{ gridTemplateColumns: `repeat(${cells.length}, 1fr)` }}
    >
      {cells.map((cell, i) => (
        <div
          key={i}
          className={`px-4 py-3.5 text-sm
            ${i === 0
              ? 'font-medium text-gray-800 text-left'
              : `text-center font-semibold ${cell === '—'
                ? 'text-gray-300'
                : 'text-orange-600'
              }`
            }`}
        >
          {cell}
        </div>
      ))}
    </motion.div>
  )
}

// ─── Main Page ────────────────────────────────────────────────────────────────
export default function PricingPage() {
  const [activeTab, setActiveTab] = useState('topwear')

  const activeTabData = tabs.find((t) => t.id === activeTab)!
  const colors = colorMap[activeTabData.color]

  return (
    <>
      {/* ── Hero banner ───────────────────────────────────────────── */}
      <section className="relative bg-[#0A0A0A] pt-28 pb-20 overflow-hidden">
        {/* Blobs */}
        <div className="absolute -top-20 -right-20 w-96 h-96 bg-orange-500/15 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute -bottom-20 -left-20 w-72 h-72 bg-orange-600/10 rounded-full blur-[80px] pointer-events-none" />
        {/* Grid */}
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
            All prices are in INR
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white
                       leading-tight mb-5"
          >
            Transparent{' '}
            <span className="bg-gradient-to-r from-orange-400 to-orange-500 bg-clip-text text-transparent">
              Pricing
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.2 }}
            className="text-gray-400 text-sm sm:text-base max-w-xl mx-auto mb-10"
          >
            No hidden charges, no surprises. Every item, every service — clear upfront.
            What you see is exactly what you pay.
          </motion.p>

          {/* Trust pills */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.35 }}
            className="flex flex-wrap justify-center gap-3"
          >
            {[
              'Free Pickup & Delivery',
              'No Hidden Charges',
              '24hr Turnaround',
              'Expert Care',
            ].map((t) => (
              <span
                key={t}
                className="inline-flex items-center gap-1.5 bg-white/5 border
                           border-white/10 text-gray-300 text-xs px-4 py-2 rounded-full"
              >
                <Check size={11} className="text-orange-400" />
                {t}
              </span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Main pricing section ──────────────────────────────────── */}
      <section className="py-16 lg:py-24 bg-[#FFF7F0]">
        <div className="container-max section-padding">

          {/* ── Tab bar ─────────────────────────────────────────── */}
          <FadeUp className="mb-10">
            {/* Mobile: horizontal scroll */}
            <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide snap-x snap-mandatory">
              {tabs.map((tab) => {
                const Icon = tab.icon
                const c = colorMap[tab.color]
                const isActive = activeTab === tab.id
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`snap-start shrink-0 flex items-center gap-2 px-4 py-2.5
                                rounded-xl text-sm font-semibold transition-all duration-300
                                border whitespace-nowrap
                                ${isActive
                        ? `${c.activeBg} ${c.activeText} border-transparent shadow-md`
                        : `bg-white text-gray-600 border-gray-200
                                     hover:border-gray-300 hover:text-gray-800`
                      }`}
                  >
                    <Icon size={15} />
                    {tab.label}
                  </button>
                )
              })}
            </div>
          </FadeUp>

          {/* ── Tab content ─────────────────────────────────────── */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            >

              {/* ─── TOP WEAR ─────────────────────────────────────── */}
              {activeTab === 'topwear' && (
                <div className="grid lg:grid-cols-3 gap-6 items-start">
                  {/* Image card */}
                  <div className="lg:col-span-1">
                    <div className="bg-gradient-to-br from-blue-600 to-blue-800
                                    rounded-3xl overflow-hidden relative h-64 lg:h-auto
                                    lg:min-h-[420px] flex flex-col justify-end p-6">
                      {/* Decorative circles */}
                      <div className="absolute top-4 right-4 w-32 h-32 bg-white/10
                                      rounded-full blur-2xl" />
                      <div className="absolute top-10 left-6 w-16 h-16 bg-white/5
                                      rounded-full" />
                      {/* Background image */}
                      <div className="absolute inset-0">
                        <Image
                          src="/images/pricing/top-wear.jpg"
                          alt="Top Wear"
                          fill
                          className="object-cover opacity-20"
                        />
                      </div>
                      <div className="relative z-10">
                        <span className="inline-block bg-white/20 text-white text-xs
                                         font-bold tracking-widest uppercase px-3 py-1
                                         rounded-full mb-3">
                          Top Wear
                        </span>
                        <h3 className="text-white font-extrabold text-2xl leading-tight mb-2">
                          Shirts, Dresses<br />& Jackets
                        </h3>
                        <p className="text-blue-100 text-xs leading-relaxed">
                          Expert dry cleaning and steam pressing for all top wear,
                          from casual tees to leather jackets.
                        </p>
                      </div>
                    </div>

                    {/* Starting from card */}
                    <div className="mt-4 bg-white rounded-2xl p-5 border border-blue-100
                                    shadow-sm">
                      <p className="text-xs text-gray-500 mb-1">Starting from</p>
                      <p className="text-3xl font-extrabold text-blue-600">₹60</p>
                      <p className="text-xs text-gray-400 mt-1">Steam Press — T-Shirt</p>
                      <a
                        href="https://wa.me/9327920057?text=Hi%2C%20I%20want%20to%20book%20Top%20Wear%20cleaning"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-4 flex items-center justify-center gap-2
                                   bg-blue-600 hover:bg-blue-700 text-white text-sm
                                   font-semibold py-3 px-5 rounded-xl transition-colors
                                   duration-300 active:scale-95"
                      >
                        Book This Service <ArrowRight size={14} />
                      </a>
                    </div>
                  </div>

                  {/* Table card */}
                  <div className="lg:col-span-2 bg-white rounded-3xl border
                                  border-gray-100 shadow-sm overflow-hidden">
                    <div className="bg-blue-600 px-6 py-4 flex items-center
                                    justify-between">
                      <div>
                        <h2 className="text-white font-bold text-lg">Top Wear</h2>
                        <p className="text-blue-100 text-xs mt-0.5">
                          All prices in INR
                        </p>
                      </div>
                      <Shirt size={24} className="text-blue-200" />
                    </div>
                    <div className="p-2">
                      <TableRow
                        cells={['Item', 'Dry Clean', 'Steam Press']}
                        isHeader
                      />
                      {topWear.map((row, i) => (
                        <TableRow
                          key={row.item}
                          cells={[row.item, row.dryClean, row.steamPress]}
                          highlight={i % 2 === 0}
                          delay={i * 0.04}
                        />
                      ))}
                    </div>
                    <div className="px-4 py-3 bg-blue-50 flex items-start gap-2">
                      <Info size={13} className="text-blue-400 shrink-0 mt-0.5" />
                      <p className="text-xs text-blue-600">
                        — indicates service not available for this item.
                        Prices may vary for heavily soiled garments.
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* ─── BOTTOM WEAR ──────────────────────────────────── */}
              {activeTab === 'bottomwear' && (
                <div className="grid lg:grid-cols-3 gap-6 items-start">
                  <div className="lg:col-span-1">
                    <div className="bg-gradient-to-br from-indigo-600 to-indigo-800
                                    rounded-3xl overflow-hidden relative h-64 lg:min-h-[420px]
                                    flex flex-col justify-end p-6">
                      <div className="absolute top-4 right-4 w-32 h-32 bg-white/10
                                      rounded-full blur-2xl" />
                      {/* Background image */}
                      <div className="absolute inset-0">
                        <Image
                          src="/images/pricing/bottom-wear.jpg"
                          alt="Bottom Wear"
                          fill
                          className="object-cover opacity-20"
                        />
                      </div>
                      <div className="relative z-10">
                        <span className="inline-block bg-white/20 text-white text-xs
                                         font-bold tracking-widest uppercase px-3 py-1
                                         rounded-full mb-3">
                          Bottom Wear
                        </span>
                        <h3 className="text-white font-extrabold text-2xl leading-tight mb-2">
                          Trousers, Jeans<br />& Skirts
                        </h3>
                        <p className="text-indigo-100 text-xs leading-relaxed">
                          Careful cleaning for all bottom wear — from casual jeans
                          to formal trousers.
                        </p>
                      </div>
                    </div>
                    <div className="mt-4 bg-white rounded-2xl p-5 border
                                    border-indigo-100 shadow-sm">
                      <p className="text-xs text-gray-500 mb-1">Starting from</p>
                      <p className="text-3xl font-extrabold text-indigo-600">₹60</p>
                      <p className="text-xs text-gray-400 mt-1">
                        Steam Press — Shorts / Skirt
                      </p>
                      <a
                        href="https://wa.me/9327920057?text=Hi%2C%20I%20want%20to%20book%20Bottom%20Wear%20cleaning"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-4 flex items-center justify-center gap-2
                                   bg-indigo-600 hover:bg-indigo-700 text-white text-sm
                                   font-semibold py-3 px-5 rounded-xl transition-colors
                                   duration-300 active:scale-95"
                      >
                        Book This Service <ArrowRight size={14} />
                      </a>
                    </div>
                  </div>

                  <div className="lg:col-span-2 bg-white rounded-3xl border
                                  border-gray-100 shadow-sm overflow-hidden">
                    <div className="bg-indigo-600 px-6 py-4 flex items-center
                                    justify-between">
                      <div>
                        <h2 className="text-white font-bold text-lg">Bottom Wear</h2>
                        <p className="text-indigo-100 text-xs mt-0.5">
                          All prices in INR
                        </p>
                      </div>
                      <Wind size={24} className="text-indigo-200" />
                    </div>
                    <div className="p-2">
                      <TableRow
                        cells={['Item', 'Dry Clean', 'Steam Press']}
                        isHeader
                      />
                      {bottomWear.map((row, i) => (
                        <TableRow
                          key={row.item}
                          cells={[row.item, row.dryClean, row.steamPress]}
                          highlight={i % 2 === 0}
                          delay={i * 0.05}
                        />
                      ))}
                    </div>
                    <div className="px-4 py-3 bg-indigo-50 flex items-start gap-2">
                      <Info size={13} className="text-indigo-400 shrink-0 mt-0.5" />
                      <p className="text-xs text-indigo-600">
                        — indicates service not available for this item.
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* ─── INDIAN WEAR ──────────────────────────────────── */}
              {activeTab === 'indianwear' && (
                <div className="space-y-6">
                  {/* Hero card */}
                  <div className="bg-gradient-to-r from-purple-700 to-purple-900
                                  rounded-3xl p-6 sm:p-8 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-white/5
                                    rounded-full blur-3xl" />
                    <div className="absolute inset-0">
                      <Image
                        src="/images/pricing/indian-wear.jpg"
                        alt="Indian Wear"
                        fill
                        className="object-cover opacity-15 rounded-3xl"
                      />
                    </div>
                    <div className="relative z-10 flex flex-col sm:flex-row
                                    sm:items-center justify-between gap-5">
                      <div>
                        <span className="inline-block bg-white/20 text-white text-xs
                                         font-bold tracking-widest uppercase px-3 py-1
                                         rounded-full mb-3">
                          Indian Wear
                        </span>
                        <h3 className="text-white font-extrabold text-2xl sm:text-3xl
                                       leading-tight mb-2">
                          Sarees, Kurtas & Bridal Wear
                        </h3>
                        <p className="text-purple-200 text-sm">
                          Specialised care for every type of Indian fabric —
                          cotton, special fabric & ornamental.
                        </p>
                      </div>
                      <div className="shrink-0 flex gap-2 flex-wrap">
                        {['Cotton', 'Special Fabric', 'Ornamental'].map((t) => (
                          <span
                            key={t}
                            className="bg-white/15 text-white text-xs font-semibold
                                       px-3 py-1.5 rounded-full border border-white/20"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Info note */}
                  <div className="bg-purple-50 border border-purple-100 rounded-2xl
                                  px-5 py-4 flex items-start gap-3">
                    <Info size={15} className="text-purple-500 shrink-0 mt-0.5" />
                    <p className="text-sm text-purple-700">
                      Indian Wear prices vary by fabric type.{' '}
                      <strong>Cotton Dry Clean</strong> is for regular cotton fabrics.{' '}
                      <strong>Special Fabric</strong> for silk, chiffon, georgette etc.{' '}
                      <strong>Ornamental</strong> for heavily embroidered / zari work.{' '}
                      <strong>Steam Press</strong> is available separately for all.
                    </p>
                  </div>

                  {/* Table — scrollable on mobile */}
                  <div className="bg-white rounded-3xl border border-gray-100
                                  shadow-sm overflow-hidden">
                    <div className="bg-purple-600 px-6 py-4 flex items-center
                                    justify-between">
                      <div>
                        <h2 className="text-white font-bold text-lg">Indian Wear</h2>
                        <p className="text-purple-100 text-xs mt-0.5">
                          All prices in INR
                        </p>
                      </div>
                      <Sparkles size={24} className="text-purple-200" />
                    </div>

                    {/* Horizontal scroll wrapper for this wide table */}
                    <div className="overflow-x-auto">
                      <div className="min-w-[560px] p-2">
                        {/* Header */}
                        <div className="grid border-b border-gray-200"
                          style={{ gridTemplateColumns: '2fr 1fr 1fr 1fr 1fr' }}>
                          {['Item', 'Cotton DC', 'Special DC', 'Ornamental DC', 'Steam Press'].map(
                            (h, i) => (
                              <div
                                key={h}
                                className={`px-4 py-3 text-xs font-bold uppercase
                                            tracking-wider text-gray-500
                                            ${i === 0 ? 'text-left' : 'text-center'}`}
                              >
                                {h}
                              </div>
                            )
                          )}
                        </div>

                        {indianWear.map((row, i) => (
                          <motion.div
                            key={row.item}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.35, delay: i * 0.04 }}
                            className={`grid border-b border-gray-50 last:border-0
                                        hover:bg-orange-50/60 transition-colors
                                        duration-200
                                        ${i % 2 === 0 ? 'bg-orange-50/20' : ''}`}
                            style={{ gridTemplateColumns: '2fr 1fr 1fr 1fr 1fr' }}
                          >
                            <div className="px-4 py-3.5 text-sm font-medium text-gray-800">
                              {row.item}
                            </div>
                            {[row.cotton, row.special, row.ornamental, row.steamPress].map(
                              (val, vi) => (
                                <div
                                  key={vi}
                                  className={`px-4 py-3.5 text-sm text-center font-semibold
                                              ${val === '—' ? 'text-gray-300' : 'text-orange-600'}`}
                                >
                                  {val}
                                </div>
                              )
                            )}
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    <div className="px-4 py-3 bg-purple-50 flex items-start gap-2">
                      <Info size={13} className="text-purple-400 shrink-0 mt-0.5" />
                      <p className="text-xs text-purple-600">
                        — indicates service not available. Bridal & ornamental wear
                        pricing includes extra care handling. Scroll horizontally on
                        mobile to see all columns.
                      </p>
                    </div>
                  </div>

                  {/* CTA */}
                  <div className="flex justify-center">
                    <a
                      href="https://wa.me/9327920057?text=Hi%2C%20I%20want%20to%20book%20Indian%20Wear%20cleaning"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-purple-600
                                 hover:bg-purple-700 text-white font-semibold
                                 px-8 py-3.5 rounded-full transition-all duration-300
                                 hover:shadow-lg active:scale-95 text-sm"
                    >
                      Book Indian Wear Cleaning <ArrowRight size={15} />
                    </a>
                  </div>
                </div>
              )}

              {/* ─── BAGS & SHOES + ACCESSORIES ───────────────────── */}
              {activeTab === 'bagsshoes' && (
                <div className="grid lg:grid-cols-2 gap-6">
                  {/* Bags & Shoes */}
                  <div className="space-y-4">
                    <div className="bg-gradient-to-br from-amber-500 to-amber-700
                                    rounded-3xl p-6 relative overflow-hidden">
                      <div className="absolute inset-0">
                        <Image
                          src="/images/pricing/bags-shoes.jpg"
                          alt="Bags and Shoes"
                          fill
                          className="object-cover opacity-20"
                        />
                      </div>
                      <div className="relative z-10">
                        <span className="inline-block bg-white/20 text-white text-xs
                                         font-bold tracking-widest uppercase px-3 py-1
                                         rounded-full mb-3">
                          Bags & Shoes
                        </span>
                        <h3 className="text-white font-extrabold text-xl mb-1">
                          Premium Cleaning
                        </h3>
                        <p className="text-amber-100 text-xs">
                          Deep clean & restore your bags and footwear
                        </p>
                      </div>
                    </div>

                    <div className="bg-white rounded-3xl border border-gray-100
                                    shadow-sm overflow-hidden">
                      <div className="bg-amber-500 px-6 py-4 flex items-center
                                      justify-between">
                        <h2 className="text-white font-bold">Bags & Shoes</h2>
                        <ShoppingBag size={20} className="text-amber-100" />
                      </div>
                      <div className="p-2">
                        <TableRow cells={['Item', 'Dry Clean Price']} isHeader />
                        {bagsShoes.map((row, i) => (
                          <TableRow
                            key={row.item}
                            cells={[row.item, row.price]}
                            highlight={i % 2 === 0}
                            delay={i * 0.06}
                          />
                        ))}
                      </div>
                      <a
                        href="https://wa.me/9327920057?text=Hi%2C%20I%20want%20to%20book%20Bag%20or%20Shoe%20cleaning"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mx-4 mb-4 mt-2 flex items-center justify-center gap-2
                                   bg-amber-500 hover:bg-amber-600 text-white text-sm
                                   font-semibold py-3 px-5 rounded-xl transition-colors
                                   duration-300 active:scale-95"
                      >
                        Book Now <ArrowRight size={14} />
                      </a>
                    </div>
                  </div>

                  {/* Accessories */}
                  <div className="space-y-4">
                    <div className="bg-gradient-to-br from-rose-500 to-rose-700
                                    rounded-3xl p-6 relative overflow-hidden">
                      <div className="absolute inset-0">
                        <Image
                          src="/images/pricing/accessories.jpg"
                          alt="Accessories"
                          fill
                          className="object-cover opacity-20"
                        />
                      </div>
                      <div className="relative z-10">
                        <span className="inline-block bg-white/20 text-white text-xs
                                         font-bold tracking-widest uppercase px-3 py-1
                                         rounded-full mb-3">
                          Accessories
                        </span>
                        <h3 className="text-white font-extrabold text-xl mb-1">
                          Small Items
                        </h3>
                        <p className="text-rose-100 text-xs">
                          Ties, shawls, scarves & other accessories
                        </p>
                      </div>
                    </div>

                    <div className="bg-white rounded-3xl border border-gray-100
                                    shadow-sm overflow-hidden">
                      <div className="bg-rose-500 px-6 py-4 flex items-center
                                      justify-between">
                        <h2 className="text-white font-bold">Accessories</h2>
                        <Sparkles size={20} className="text-rose-100" />
                      </div>
                      <div className="p-2">
                        <TableRow cells={['Item', 'Price']} isHeader />
                        {accessories.map((row, i) => (
                          <TableRow
                            key={row.item}
                            cells={[row.item, row.price]}
                            highlight={i % 2 === 0}
                            delay={i * 0.06}
                          />
                        ))}
                      </div>
                      <a
                        href="https://wa.me/9327920057?text=Hi%2C%20I%20want%20to%20book%20Accessories%20cleaning"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mx-4 mb-4 mt-2 flex items-center justify-center gap-2
                                   bg-rose-500 hover:bg-rose-600 text-white text-sm
                                   font-semibold py-3 px-5 rounded-xl transition-colors
                                   duration-300 active:scale-95"
                      >
                        Book Now <ArrowRight size={14} />
                      </a>
                    </div>
                  </div>
                </div>
              )}

              {/* ─── HOME LINEN ───────────────────────────────────── */}
              {activeTab === 'homelinen' && (
                <div className="grid lg:grid-cols-3 gap-6 items-start">
                  <div className="lg:col-span-1">
                    <div className="bg-gradient-to-br from-green-600 to-green-800
                                    rounded-3xl overflow-hidden relative h-64
                                    lg:min-h-[420px] flex flex-col justify-end p-6">
                      <div className="absolute top-4 right-4 w-32 h-32 bg-white/10
                                      rounded-full blur-2xl" />
                      <div className="absolute inset-0">
                        <Image
                          src="/images/pricing/home-linen.jpg"
                          alt="Home Linen"
                          fill
                          className="object-cover opacity-20"
                        />
                      </div>
                      <div className="relative z-10">
                        <span className="inline-block bg-white/20 text-white text-xs
                                         font-bold tracking-widest uppercase px-3 py-1
                                         rounded-full mb-3">
                          Home Linen
                        </span>
                        <h3 className="text-white font-extrabold text-2xl leading-tight mb-2">
                          Bedsheets, Quilts<br />& More
                        </h3>
                        <p className="text-green-100 text-xs leading-relaxed">
                          Professional cleaning for all your home linen items —
                          medium and large sizes.
                        </p>
                      </div>
                    </div>
                    <div className="mt-4 bg-white rounded-2xl p-5 border
                                    border-green-100 shadow-sm">
                      <p className="text-xs text-gray-500 mb-1">Starting from</p>
                      <p className="text-3xl font-extrabold text-green-600">₹80</p>
                      <p className="text-xs text-gray-400 mt-1">Pillow Cover — Medium</p>
                      <a
                        href="https://wa.me/9327920057?text=Hi%2C%20I%20want%20to%20book%20Home%20Linen%20cleaning"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-4 flex items-center justify-center gap-2
                                   bg-green-600 hover:bg-green-700 text-white text-sm
                                   font-semibold py-3 px-5 rounded-xl transition-colors
                                   duration-300 active:scale-95"
                      >
                        Book This Service <ArrowRight size={14} />
                      </a>
                    </div>
                  </div>

                  <div className="lg:col-span-2 bg-white rounded-3xl border
                                  border-gray-100 shadow-sm overflow-hidden">
                    <div className="bg-green-600 px-6 py-4 flex items-center
                                    justify-between">
                      <div>
                        <h2 className="text-white font-bold text-lg">Home Linen</h2>
                        <p className="text-green-100 text-xs mt-0.5">All prices in INR</p>
                      </div>
                      <Home size={24} className="text-green-200" />
                    </div>
                    <div className="p-2">
                      <TableRow cells={['Item', 'Medium', 'Large']} isHeader />
                      {homeLinen.map((row, i) => (
                        <TableRow
                          key={row.item}
                          cells={[row.item, row.medium, row.large]}
                          highlight={i % 2 === 0}
                          delay={i * 0.04}
                        />
                      ))}
                    </div>
                    <div className="px-4 py-3 bg-green-50 flex items-start gap-2">
                      <Info size={13} className="text-green-400 shrink-0 mt-0.5" />
                      <p className="text-xs text-green-600">
                        — indicates pricing not listed. Contact us for bulk linen
                        orders — special rates available.
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* ─── CURTAIN & CARPET ─────────────────────────────── */}
              {activeTab === 'curtain' && (
                <div className="grid lg:grid-cols-3 gap-6 items-start">
                  <div className="lg:col-span-1">
                    <div className="bg-gradient-to-br from-orange-500 to-orange-700
                                    rounded-3xl overflow-hidden relative h-64
                                    lg:min-h-[380px] flex flex-col justify-end p-6">
                      <div className="absolute top-4 right-4 w-32 h-32 bg-white/10
                                      rounded-full blur-2xl" />
                      <div className="absolute inset-0">
                        <Image
                          src="/images/pricing/curtain-carpet.jpg"
                          alt="Curtain and Carpet"
                          fill
                          className="object-cover opacity-20"
                        />
                      </div>
                      <div className="relative z-10">
                        <span className="inline-block bg-white/20 text-white text-xs
                                         font-bold tracking-widest uppercase px-3 py-1
                                         rounded-full mb-3">
                          Curtain & Carpet
                        </span>
                        <h3 className="text-white font-extrabold text-2xl leading-tight mb-2">
                          Priced Per<br />Square Foot
                        </h3>
                        <p className="text-orange-100 text-xs leading-relaxed">
                          Fair, transparent pricing based on fabric type and area.
                        </p>
                      </div>
                    </div>
                    <div className="mt-4 bg-white rounded-2xl p-5 border
                                    border-orange-100 shadow-sm">
                      <p className="text-xs text-gray-500 mb-1">Starting from</p>
                      <p className="text-3xl font-extrabold text-orange-500">₹10</p>
                      <p className="text-xs text-gray-400 mt-1">
                        Single Layer Curtain — per sq.ft
                      </p>
                      <a
                        href="https://wa.me/9327920057?text=Hi%2C%20I%20want%20to%20book%20Curtain%20or%20Carpet%20cleaning"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-4 flex items-center justify-center gap-2
                                   bg-orange-500 hover:bg-orange-600 text-white text-sm
                                   font-semibold py-3 px-5 rounded-xl transition-colors
                                   duration-300 active:scale-95"
                      >
                        Book This Service <ArrowRight size={14} />
                      </a>
                    </div>
                  </div>

                  <div className="lg:col-span-2 space-y-4">
                    <div className="bg-white rounded-3xl border border-gray-100
                                    shadow-sm overflow-hidden">
                      <div className="bg-orange-500 px-6 py-4 flex items-center
                                      justify-between">
                        <div>
                          <h2 className="text-white font-bold text-lg">
                            Curtain & Carpet
                          </h2>
                          <p className="text-orange-100 text-xs mt-0.5">
                            Price per square foot
                          </p>
                        </div>
                        <Flame size={24} className="text-orange-200" />
                      </div>
                      <div className="p-2">
                        <TableRow cells={['Type', 'Price per sq.ft']} isHeader />
                        {curtainCarpet.map((row, i) => (
                          <TableRow
                            key={row.item}
                            cells={[row.item, row.price]}
                            highlight={i % 2 === 0}
                            delay={i * 0.08}
                          />
                        ))}
                      </div>
                    </div>

                    {/* Explainer cards */}
                    <div className="grid sm:grid-cols-2 gap-4">
                      {[
                        {
                          title: 'How is area calculated?',
                          desc: 'We measure the length × width of your curtain or carpet in feet. Final price = area × rate per sq.ft.',
                        },
                        {
                          title: 'Free measurement on pickup',
                          desc: 'Our team measures your curtains or carpet at pickup — you always know the price before we proceed.',
                        },
                      ].map((card) => (
                        <div
                          key={card.title}
                          className="bg-orange-50 rounded-2xl p-5 border
                                     border-orange-100"
                        >
                          <div className="w-8 h-8 bg-orange-500 rounded-lg flex
                                          items-center justify-center mb-3">
                            <Info size={14} className="text-white" />
                          </div>
                          <h4 className="font-bold text-gray-800 text-sm mb-1.5">
                            {card.title}
                          </h4>
                          <p className="text-gray-500 text-xs leading-relaxed">
                            {card.desc}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* ── Bottom CTA ───────────────────────────────────────────── */}
      <section className="py-16 bg-[#0A0A0A] relative overflow-hidden">
        <div className="absolute -top-16 left-1/2 -translate-x-1/2 w-96 h-96
                        bg-orange-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="relative container-max section-padding text-center">
          <FadeUp>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-3">
              Not sure what you need?
            </h2>
            <p className="text-gray-400 text-sm mb-8 max-w-md mx-auto">
              Send us a WhatsApp message, describe your garment, and we&apos;ll
              give you an exact quote before pickup.
            </p>
            <a
              href="https://wa.me/9327920057?text=Hi%2C%20I%20have%20a%20pricing%20query"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600
                         text-white font-bold px-8 py-4 rounded-full transition-all
                         duration-300 hover:shadow-xl hover:shadow-orange-500/30
                         active:scale-95 text-sm sm:text-base"
            >
              📲 Ask Us on WhatsApp
            </a>
          </FadeUp>
        </div>
      </section>
    </>
  )
}