'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { motion, useInView, AnimatePresence } from 'framer-motion'
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

// ─── Reusable fade-up hook ─────────────────────────────────────────────────────
function useFadeUp(threshold = 0.15) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: threshold })
  return { ref, inView }
}

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

// ─── Data ──────────────────────────────────────────────────────────────────────
const services = [
  { icon: Wind,       title: 'Dry Cleaning',    desc: 'Expert solvent-based cleaning for delicate fabrics, suits, sarees & more.',      bg: 'bg-blue-50',   iconColor: 'text-blue-500',   hoverBg: 'group-hover:bg-blue-500'   },
  { icon: Shirt,      title: 'Wash & Fold',     desc: 'Machine washed, neatly folded and returned fresh within 24 hours.',               bg: 'bg-orange-50', iconColor: 'text-orange-500', hoverBg: 'group-hover:bg-orange-500' },
  { icon: Flame,      title: 'Steam Ironing',   desc: 'Professional steam press for wrinkle-free, crisp clothes every time.',            bg: 'bg-red-50',    iconColor: 'text-red-500',    hoverBg: 'group-hover:bg-red-500'    },
  { icon: Sparkles,   title: 'Indian Wear Care',desc: 'Specialised care for sarees, lehengas, sherwanis & bridal outfits.',              bg: 'bg-purple-50', iconColor: 'text-purple-500', hoverBg: 'group-hover:bg-purple-500' },
  { icon: ShoppingBag,title: 'Bags & Shoes',    desc: 'Deep clean & restore your leather bags, sports shoes & more.',                    bg: 'bg-amber-50',  iconColor: 'text-amber-500',  hoverBg: 'group-hover:bg-amber-500'  },
  { icon: Home,       title: 'Home Linen',      desc: 'Bedsheets, curtains, quilts, pillow covers cleaned to perfection.',               bg: 'bg-green-50',  iconColor: 'text-green-500',  hoverBg: 'group-hover:bg-green-500'  },
]

const howItWorks = [
  { step: '01', title: 'Schedule Pickup',  desc: 'Book via WhatsApp or call us. We come to your doorstep at your convenience.',                          icon: Phone    },
  { step: '02', title: 'We Clean & Care', desc: 'Expert cleaning with the right method for each fabric type — dry clean, wash, or steam.',              icon: Sparkles },
  { step: '03', title: 'Fresh Delivery',  desc: 'Clean, pressed and neatly packed clothes delivered back to your door.',                                  icon: Truck    },
]

const whyUs = [
  { icon: Clock,        title: '24-Hour Turnaround',  desc: 'Fast service without compromising quality.'            },
  { icon: Shield,       title: 'Safe Fabric Handling',desc: 'Right method for every fabric — no damage, ever.'     },
  { icon: Leaf,         title: 'Eco-Friendly',         desc: 'Environmentally safe products for every wash.'        },
  { icon: Truck,        title: 'Free Pickup & Delivery',desc:'Doorstep service across Surat at no extra charge.'},
  { icon: CheckCircle2, title: 'Transparent Pricing',  desc: 'No hidden charges. What you see is what you pay.'    },
  { icon: Star,         title: '500+ Happy Customers', desc: 'Trusted by families and professionals in Surat.' },
]

const testimonials = [
  { name: 'Priya Mehta',  location: 'Adajan, Surat',       review: 'My bridal lehenga came back looking absolutely stunning. The care they took was exceptional. Highly recommend Quick Laundry Zone!', rating: 5, initials: 'PM', color: 'bg-purple-500' },
  { name: 'Rahul Shah',   location: 'Katargam, Surat',     review: 'Doorstep pickup and delivery is a game changer. Clothes come back perfectly ironed. Been using them for 3 months now.',            rating: 5, initials: 'RS', color: 'bg-blue-500'   },
  { name: 'Anjali Patel', location: 'Mota Varachha, Surat',review: 'Very affordable prices and professional service. My curtains and bedsheets are sparkling clean. Will definitely use again!',        rating: 5, initials: 'AP', color: 'bg-orange-500' },
]

const stats = [
  { value: '500+', label: 'Happy Customers' },
  { value: '3',    label: 'Expert Services' },
  { value: '24h',  label: 'Turnaround Time' },
  { value: '100%', label: 'Satisfaction Rate'},
]

// ─── Cinematic SVG scene ───────────────────────────────────────────────────────
function LaundryScene() {
  return (
    <div className="relative w-full h-full select-none pointer-events-none">
      <style>{`
        @keyframes drumSpin {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }
        @keyframes drumSpinSlow {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }
        @keyframes steamRise {
          0%   { opacity: 0;   transform: translateY(0px)   scaleX(1); }
          30%  { opacity: 0.55; }
          70%  { opacity: 0.3; }
          100% { opacity: 0;   transform: translateY(-80px) scaleX(1.6); }
        }
        @keyframes floatShirt {
          0%, 100% { transform: translateY(0px) rotate(-3deg); }
          50%       { transform: translateY(-14px) rotate(2deg); }
        }
        @keyframes floatSaree {
          0%, 100% { transform: translateY(0px) rotate(4deg); }
          50%       { transform: translateY(-10px) rotate(-2deg); }
        }
        @keyframes floatJacket {
          0%, 100% { transform: translateY(0px) rotate(-5deg); }
          60%       { transform: translateY(-12px) rotate(3deg); }
        }
        @keyframes bubbleFloat {
          0%   { transform: translateY(0px);   opacity: 0.5; }
          100% { transform: translateY(-60px); opacity: 0;   }
        }
        @keyframes sparkle {
          0%, 100% { opacity: 0;   transform: scale(0.6); }
          50%       { opacity: 0.9; transform: scale(1.2); }
        }
        @keyframes waveRoll {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes doorGlow {
          0%, 100% { filter: drop-shadow(0 0 8px rgba(251,146,60,0.4)); }
          50%       { filter: drop-shadow(0 0 20px rgba(251,146,60,0.8)); }
        }
        @keyframes ironSlide {
          0%, 100% { transform: translateX(0px); }
          40%       { transform: translateX(44px); }
          60%       { transform: translateX(44px); }
        }
        @keyframes steamIron {
          0%   { opacity: 0; transform: translateY(0) translateX(0); }
          40%  { opacity: 0.5; }
          100% { opacity: 0; transform: translateY(-22px) translateX(6px); }
        }
        .drum-spin    { transform-origin: 50% 50%; animation: drumSpin 4s linear infinite; }
        .drum-slow    { transform-origin: 50% 50%; animation: drumSpinSlow 12s linear infinite reverse; }
        .float-shirt  { animation: floatShirt 5s ease-in-out infinite; }
        .float-saree  { animation: floatSaree 6.5s ease-in-out infinite 1s; }
        .float-jacket { animation: floatJacket 7s ease-in-out infinite 0.5s; }
        .iron-slide   { animation: ironSlide 3.5s ease-in-out infinite; }
      `}</style>

      <svg viewBox="0 0 700 480" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">

        {/* ── background floor line ── */}
        <line x1="40" y1="420" x2="660" y2="420" stroke="rgba(255,255,255,0.05)" strokeWidth="1"/>

        {/* ══════════════════════════════════
            WASHING MACHINE (left)
        ══════════════════════════════════ */}
        {/* Cabinet body */}
        <rect x="60" y="200" width="180" height="220" rx="16" fill="rgba(30,30,40,0.85)" stroke="rgba(255,255,255,0.12)" strokeWidth="1.5"/>
        {/* Top control panel */}
        <rect x="60" y="200" width="180" height="42" rx="16" fill="rgba(40,40,55,0.9)" stroke="rgba(255,255,255,0.08)" strokeWidth="1"/>
        <rect x="60" y="228" width="180" height="14" fill="rgba(40,40,55,0.9)"/>
        {/* Control knobs */}
        <circle cx="96"  cy="220" r="8"  fill="rgba(249,115,22,0.85)" stroke="rgba(255,255,255,0.2)" strokeWidth="1"/>
        <circle cx="204" cy="220" r="8"  fill="rgba(99,102,241,0.7)"  stroke="rgba(255,255,255,0.2)" strokeWidth="1"/>
        <circle cx="150" cy="220" r="5"  fill="rgba(255,255,255,0.15)"/>
        <circle cx="168" cy="220" r="5"  fill="rgba(255,255,255,0.15)"/>
        {/* Small LED */}
        <circle cx="132" cy="220" r="3" fill="rgba(34,197,94,0.9)"/>

        {/* Door ring / bezel */}
        <circle cx="150" cy="330" r="74" fill="rgba(20,20,30,0.6)" stroke="rgba(255,255,255,0.15)" strokeWidth="2.5"/>
        <circle cx="150" cy="330" r="68" fill="rgba(15,15,25,0.9)" stroke="rgba(255,255,255,0.07)" strokeWidth="1"/>

        {/* Door glass — animated glow */}
        <circle cx="150" cy="330" r="58" fill="rgba(10,10,20,0.95)" stroke="rgba(249,115,22,0.35)" strokeWidth="2" style={{animation:'doorGlow 3s ease-in-out infinite'}}/>

        {/* Drum visible through glass */}
        <clipPath id="glassClip">
          <circle cx="150" cy="330" r="56"/>
        </clipPath>
        <g clipPath="url(#glassClip)">
          {/* Water/soap wash backdrop */}
          <rect x="94" y="274" width="112" height="112" fill="rgba(14,116,144,0.25)"/>
          {/* Animated wave */}
          <g style={{animation:'waveRoll 2.5s linear infinite'}}>
            <path d="M72 345 Q94 338 116 345 Q138 352 160 345 Q182 338 204 345 Q226 352 248 345 Q270 338 292 345 Q314 352 336 345 V390 H72Z" fill="rgba(14,116,144,0.35)"/>
          </g>
          {/* Drum inner ring spinning */}
          <g className="drum-spin">
            <circle cx="150" cy="330" r="50" fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="8"/>
            {/* Drum lifters */}
            {[0,60,120,180,240,300].map((angle) => {
              const rad = (angle * Math.PI) / 180
              const x1  = 150 + 36 * Math.cos(rad)
              const y1  = 330 + 36 * Math.sin(rad)
              const x2  = 150 + 50 * Math.cos(rad)
              const y2  = 330 + 50 * Math.sin(rad)
              return <line key={angle} x1={x1} y1={y1} x2={x2} y2={y2} stroke="rgba(255,255,255,0.12)" strokeWidth="3" strokeLinecap="round"/>
            })}
            {/* Clothes suggestion inside drum */}
            <ellipse cx="140" cy="322" rx="16" ry="9" fill="rgba(249,115,22,0.45)" transform="rotate(-20,140,322)"/>
            <ellipse cx="162" cy="340" rx="12" ry="7" fill="rgba(99,102,241,0.5)" transform="rotate(15,162,340)"/>
            <ellipse cx="150" cy="310" rx="10" ry="6" fill="rgba(255,255,255,0.2)" transform="rotate(5,150,310)"/>
          </g>
          {/* Bubbles floating up inside drum */}
          {[130,145,158,168,136].map((x, i) => (
            <circle key={i} cx={x} cy={310 - i*4} r={2 + (i%2)} fill="rgba(255,255,255,0.3)"
              style={{animation:`bubbleFloat ${1.8 + i*0.4}s ease-in infinite ${i*0.6}s`}}/>
          ))}
        </g>

        {/* Door handle */}
        <rect x="194" y="324" width="6" height="12" rx="3" fill="rgba(255,255,255,0.2)" stroke="rgba(255,255,255,0.1)" strokeWidth="1"/>

        {/* Bottom panel vents */}
        {[80,100,120,140,160,180,200,220].map((x, i) => (
          <rect key={i} x={x} y="404" width="6" height="12" rx="1" fill="rgba(255,255,255,0.06)"/>
        ))}

        {/* Steam from machine top */}
        {[110,135,160,185,210].map((x, i) => (
          <ellipse key={i} cx={x} cy={190} rx={5 + i} ry={3}
            fill="rgba(255,255,255,0.18)"
            style={{animation:`steamRise ${2 + i*0.3}s ease-out infinite ${i*0.45}s`}}/>
        ))}

        {/* ══════════════════════════════════
            IRONING BOARD (centre-right)
        ══════════════════════════════════ */}
        {/* Board surface */}
        <path d="M320 310 Q340 304 520 308 L524 324 Q340 328 320 322 Z" fill="rgba(40,42,58,0.9)" stroke="rgba(255,255,255,0.1)" strokeWidth="1"/>
        {/* Board leg left */}
        <line x1="360" y1="322" x2="340" y2="418" stroke="rgba(255,255,255,0.12)" strokeWidth="3" strokeLinecap="round"/>
        {/* Board leg right */}
        <line x1="480" y1="322" x2="500" y2="418" stroke="rgba(255,255,255,0.12)" strokeWidth="3" strokeLinecap="round"/>
        {/* Shirt on board */}
        <path d="M330 312 Q370 300 430 304 Q460 302 490 308 L492 322 Q460 318 430 320 Q370 316 332 324 Z"
          fill="rgba(255,255,255,0.1)" stroke="rgba(255,255,255,0.15)" strokeWidth="0.5"/>

        {/* Iron */}
        <g className="iron-slide">
          <path d="M350 290 Q366 282 420 284 L424 306 L346 308 Z" fill="rgba(60,62,80,0.95)" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5"/>
          {/* Iron sole */}
          <path d="M348 305 Q366 308 420 306 L422 308 Q366 312 348 309 Z" fill="rgba(180,185,200,0.5)"/>
          {/* Iron cord */}
          <path d="M424 294 Q440 288 450 270 Q456 258 440 252" fill="none" stroke="rgba(255,255,255,0.15)" strokeWidth="2" strokeLinecap="round"/>
          {/* Iron steam holes */}
          {[370,390,410].map((x, i) => (
            <ellipse key={i} cx={x} cy={307} rx={2} ry={1} fill="rgba(0,0,0,0.4)"/>
          ))}
          {/* Steam puffs from iron */}
          {[365,385,408].map((x, i) => (
            <ellipse key={i} cx={x} cy={298} rx={4} ry={3}
              fill="rgba(255,255,255,0.22)"
              style={{animation:`steamIron ${1.2 + i*0.2}s ease-out infinite ${i*0.35}s`}}/>
          ))}
        </g>

        {/* ══════════════════════════════════
            FLOATING GARMENTS (top area)
        ══════════════════════════════════ */}
        {/* Shirt — left float */}
        <g className="float-shirt" style={{transformOrigin:'240px 120px'}}>
          {/* Shirt body */}
          <path d="M210 110 L224 100 Q240 94 256 100 L270 110 L264 126 L258 120 L258 162 L222 162 L222 120 L216 126 Z"
            fill="rgba(249,115,22,0.25)" stroke="rgba(249,115,22,0.6)" strokeWidth="1.5" strokeLinejoin="round"/>
          {/* Collar */}
          <path d="M232 100 Q240 108 248 100" fill="none" stroke="rgba(249,115,22,0.7)" strokeWidth="1.5"/>
          {/* Hanger hook */}
          <path d="M240 94 Q240 82 252 78 Q260 76 262 82" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="2" strokeLinecap="round"/>
          {/* Sparkles around shirt */}
          <g style={{animation:'sparkle 2s ease-in-out infinite 0.3s'}}>
            <path d="M195 95 L198 90 L201 95 L198 100 Z" fill="rgba(249,115,22,0.8)"/>
          </g>
          <g style={{animation:'sparkle 2.5s ease-in-out infinite 1.1s'}}>
            <path d="M278 108 L281 103 L284 108 L281 113 Z" fill="rgba(249,115,22,0.6)"/>
          </g>
        </g>

        {/* Saree / dupatta — centre top */}
        <g className="float-saree" style={{transformOrigin:'390px 90px'}}>
          <path d="M340 60 Q370 44 400 58 Q420 66 440 56 Q450 52 452 62 Q440 72 420 68 Q400 76 372 68 Q356 76 344 72 Q338 68 340 60Z"
            fill="rgba(168,85,247,0.3)" stroke="rgba(168,85,247,0.65)" strokeWidth="1.5"/>
          {/* Flowing tail */}
          <path d="M340 68 Q350 100 338 130 Q330 148 340 158" fill="none" stroke="rgba(168,85,247,0.4)" strokeWidth="2" strokeLinecap="round"/>
          <path d="M452 62 Q456 90 448 115 Q442 130 450 145" fill="none" stroke="rgba(168,85,247,0.4)" strokeWidth="2" strokeLinecap="round"/>
          {/* Decorative border dots */}
          {[0,1,2,3,4].map((i) => (
            <circle key={i} cx={352 + i*18} cy={68} r={2} fill="rgba(168,85,247,0.8)"/>
          ))}
          {/* Hanger */}
          <path d="M390 44 Q390 32 402 28 Q410 26 412 32" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="2" strokeLinecap="round"/>
          <g style={{animation:'sparkle 3s ease-in-out infinite 0.7s'}}>
            <path d="M328 80 L331 75 L334 80 L331 85 Z" fill="rgba(168,85,247,0.9)"/>
          </g>
        </g>

        {/* Jacket — right float */}
        <g className="float-jacket" style={{transformOrigin:'570px 110px'}}>
          <path d="M536 100 L548 88 Q556 82 564 88 Q572 82 580 88 L592 100 L586 118 L580 110 L580 158 L548 158 L548 110 L542 118 Z"
            fill="rgba(99,102,241,0.25)" stroke="rgba(99,102,241,0.65)" strokeWidth="1.5" strokeLinejoin="round"/>
          {/* Lapels */}
          <path d="M556 90 Q562 102 564 88 Q566 102 572 90" fill="none" stroke="rgba(99,102,241,0.7)" strokeWidth="1.5"/>
          {/* Pocket */}
          <rect x="550" y="132" width="12" height="8" rx="2" fill="none" stroke="rgba(99,102,241,0.5)" strokeWidth="1"/>
          {/* Hanger */}
          <path d="M564 82 Q564 70 576 66 Q584 64 586 70" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="2" strokeLinecap="round"/>
          <g style={{animation:'sparkle 2.2s ease-in-out infinite 1.5s'}}>
            <path d="M524 115 L527 110 L530 115 L527 120 Z" fill="rgba(99,102,241,0.8)"/>
          </g>
          <g style={{animation:'sparkle 1.8s ease-in-out infinite 0.4s'}}>
            <path d="M598 98 L601 93 L604 98 L601 103 Z" fill="rgba(99,102,241,0.6)"/>
          </g>
        </g>

        {/* ══════════════════════════════════
            AMBIENT PARTICLES / DUST
        ══════════════════════════════════ */}
        {[
          {cx:420, cy:180, r:2, delay:'0s',   dur:'3.2s'},
          {cx:480, cy:210, r:1.5,delay:'1.1s',dur:'2.8s'},
          {cx:300, cy:240, r:1, delay:'0.5s', dur:'4s'  },
          {cx:530, cy:170, r:2, delay:'2s',   dur:'3.5s'},
          {cx:350, cy:200, r:1.5,delay:'1.7s',dur:'2.5s'},
          {cx:460, cy:140, r:1, delay:'0.2s', dur:'3.8s'},
          {cx:290, cy:160, r:2, delay:'3s',   dur:'2.9s'},
        ].map((p, i) => (
          <circle key={i} cx={p.cx} cy={p.cy} r={p.r} fill="rgba(249,115,22,0.5)"
            style={{animation:`sparkle ${p.dur} ease-in-out infinite ${p.delay}`}}/>
        ))}

        {/* ── Fine dotted line — floor detail ── */}
        {[...Array(20)].map((_, i) => (
          <rect key={i} x={60 + i*30} y="420" width="14" height="1" rx="0.5" fill="rgba(255,255,255,0.04)"/>
        ))}
      </svg>
    </div>
  )
}

// ─── Main Component ────────────────────────────────────────────────────────────
export default function HomePage() {
  const [activeTestimonial, setActiveTestimonial] = useState(0)
  const [mouseX, setMouseX] = useState(0)
  const [mouseY, setMouseY] = useState(0)

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      setMouseX((e.clientX / window.innerWidth  - 0.5) * 20)
      setMouseY((e.clientY / window.innerHeight - 0.5) * 10)
    }
    window.addEventListener('mousemove', onMove)
    return () => window.removeEventListener('mousemove', onMove)
  }, [])

  useEffect(() => {
    const t = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 4000)
    return () => clearInterval(t)
  }, [])

  return (
    <>
      {/* ╔══════════════════════════════════════════════════════════════
          ║  HERO — CINEMATIC
          ╚══════════════════════════════════════════════════════════════ */}
      <section className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-[#07070f]">

        {/* ── Deep space gradient base ── */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#07070f] via-[#0d0d1a] to-[#070710]" />

        {/* ── Slow parallax blobs (mouse-tracked) ── */}
        <motion.div
          className="absolute inset-0 pointer-events-none"
          style={{ x: mouseX * 0.4, y: mouseY * 0.4 }}
          transition={{ type: 'spring', stiffness: 30, damping: 30 }}
        >
          <div className="absolute top-[-20%] left-[30%] w-[700px] h-[700px] rounded-full bg-orange-500/[0.07] blur-[160px]"/>
          <div className="absolute top-[20%] right-[-10%] w-[500px] h-[500px] rounded-full bg-violet-600/[0.05] blur-[140px]"/>
          <div className="absolute bottom-[-10%] left-[-10%] w-[400px] h-[400px] rounded-full bg-orange-600/[0.06] blur-[120px]"/>
        </motion.div>

        {/* ── Subtle noise / film-grain overlay ── */}
        <div className="absolute inset-0 opacity-[0.025] pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E")`,
            backgroundSize: '160px 160px',
          }}
        />

        {/* ── Micro grid ── */}
        <div className="absolute inset-0 opacity-[0.025] pointer-events-none"
          style={{
            backgroundImage: 'linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)',
            backgroundSize: '80px 80px',
          }}
        />

        {/* ── Horizontal scan line (top) ── */}
        <motion.div
          className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-orange-500/40 to-transparent"
          animate={{ opacity: [0.2, 0.6, 0.2] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        />

        {/* ════════════════════════════════════════
            CONTENT GRID
        ════════════════════════════════════════ */}
        <div className="relative z-10 container-max section-padding w-full pt-28 pb-10 lg:pt-32">
          <div className="grid lg:grid-cols-2 gap-0 lg:gap-12 items-center min-h-[80vh]">

            {/* ── LEFT — Text column ── */}
            <div className="flex flex-col justify-center order-2 lg:order-1 pb-8 lg:pb-0">

              {/* Eyebrow badge */}
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="inline-flex items-center gap-2.5 self-start mb-8"
              >
                <span className="flex items-center gap-2 bg-orange-500/10 border border-orange-500/25 text-orange-400 text-[11px] font-bold tracking-[0.22em] uppercase px-4 py-2 rounded-full">
                  <span className="w-1.5 h-1.5 rounded-full bg-orange-400 animate-pulse" />
                  Surat&apos;s Trusted Laundry
                </span>
              </motion.div>

              {/* Main headline — large typographic statement */}
              <div className="overflow-hidden mb-5">
                <motion.h1
                  initial={{ opacity: 0, y: 60 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.85, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                  className="text-[2.6rem] sm:text-[3.2rem] lg:text-[3.6rem] xl:text-[4.2rem] font-black text-white leading-[1.0] tracking-[-0.02em]"
                >
                  Clean
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-orange-300 to-amber-400">
                    Clothes.
                  </span>
                  <span className="block text-[1.8rem] sm:text-[2.2rem] lg:text-[2.4rem] font-light text-white/60 tracking-normal mt-1">
                    Zero Hassle.
                  </span>
                </motion.h1>
              </div>

              {/* Ruled divider */}
              <motion.div
                initial={{ scaleX: 0, opacity: 0 }}
                animate={{ scaleX: 1, opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.7 }}
                style={{ originX: 0 }}
                className="h-px w-24 bg-gradient-to-r from-orange-500 to-transparent mb-6"
              />

              {/* Sub-copy */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.55 }}
                className="text-gray-400 text-[15px] sm:text-base leading-[1.75] max-w-md mb-8"
              >
                Professional dry cleaning, laundry &amp; steam ironing — picked up from
                your door and returned spotless. Transparent prices, no surprises.
              </motion.p>

              {/* CTA row */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.65 }}
                className="flex flex-wrap gap-3 mb-10"
              >
                <a
                  href="https://wa.me/919327920057?text=Hi%2C%20I%20want%20to%20book%20a%20laundry%20service"
                  target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 bg-orange-500 hover:bg-orange-400 text-white font-bold text-sm px-7 py-3.5 rounded-full transition-all duration-300 hover:shadow-xl hover:shadow-orange-500/30 active:scale-95"
                >
                  <span>📲</span> Book Now
                </a>
                <Link
                  href="/pricing"
                  className="inline-flex items-center gap-2 text-white/70 hover:text-white border border-white/10 hover:border-white/25 font-semibold text-sm px-7 py-3.5 rounded-full transition-all duration-300 backdrop-blur-sm"
                >
                  View Pricing <ArrowRight size={14} />
                </Link>
              </motion.div>

              {/* Trust strip */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="flex flex-wrap gap-5"
              >
                {['Free Pickup & Delivery', '24hr Turnaround', 'Eco-Friendly'].map((t) => (
                  <span key={t} className="flex items-center gap-1.5 text-[12px] text-gray-500 font-medium">
                    <CheckCircle2 size={12} className="text-orange-500 shrink-0" />
                    {t}
                  </span>
                ))}
              </motion.div>
            </div>

            {/* ── RIGHT — Cinematic scene ── */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="order-1 lg:order-2 relative"
              style={{ x: mouseX * 0.15, y: mouseY * 0.08 }}
            >
              {/* Scene container */}
              <div className="relative h-[340px] sm:h-[400px] lg:h-[480px] w-full">

                {/* Vignette glow behind scene */}
                <div className="absolute inset-0 bg-radial-[ellipse_at_center] from-orange-500/8 via-transparent to-transparent rounded-3xl" />

                {/* The SVG scene */}
                <LaundryScene />

                {/* ── Floating stat cards ── */}
                {/* Card: Customers */}
                <motion.div
                  animate={{ y: [-4, 4, -4] }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                  className="absolute top-4 right-4 sm:right-8 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl px-4 py-3 shadow-2xl"
                >
                  <p className="text-orange-400 font-black text-xl leading-none">500+</p>
                  <p className="text-gray-400 text-[11px] mt-0.5 font-medium">Happy Customers</p>
                </motion.div>

                {/* Card: Free pickup */}
                <motion.div
                  animate={{ y: [4, -4, 4] }}
                  transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 0.8 }}
                  className="absolute bottom-10 left-2 sm:left-4 bg-orange-500 rounded-2xl px-4 py-3 shadow-xl shadow-orange-500/30"
                >
                  <p className="text-white text-xs font-bold">🛵 Free Pickup</p>
                  <p className="text-orange-100 text-[10px] mt-0.5">Across Surat</p>
                </motion.div>

                {/* Card: review */}
                <motion.div
                  animate={{ y: [-3, 5, -3] }}
                  transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }}
                  className="absolute bottom-10 right-4 sm:right-8 bg-white rounded-xl px-4 py-3 shadow-2xl flex items-center gap-3 max-w-[190px]"
                >
                  <div className="w-8 h-8 rounded-full bg-orange-500 flex items-center justify-center shrink-0">
                    <span className="text-white text-[10px] font-black">PM</span>
                  </div>
                  <div>
                    <div className="flex gap-px mb-0.5">
                      {[1,2,3,4,5].map((s) => <Star key={s} size={8} className="fill-amber-400 text-amber-400"/>)}
                    </div>
                    <p className="text-gray-800 text-[10px] font-semibold leading-snug">&ldquo;Excellent service!&rdquo;</p>
                    <p className="text-gray-400 text-[9px]">Priya M. — Surat</p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>

          {/* ── Bottom stats strip ── */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.9 }}
            className="grid grid-cols-2 sm:grid-cols-4 gap-px bg-white/5 rounded-2xl overflow-hidden mt-6 lg:mt-10 border border-white/5"
          >
            {stats.map((s, i) => (
              <div key={s.label} className="bg-[#07070f]/80 backdrop-blur-sm px-5 py-5 text-center hover:bg-white/[0.03] transition-colors duration-300">
                <p className="text-2xl font-black text-orange-400">{s.value}</p>
                <p className="text-[11px] text-gray-500 mt-0.5 font-medium tracking-wide">{s.label}</p>
              </div>
            ))}
          </motion.div>
        </div>

        {/* ── Scroll indicator ── */}
        <motion.div
          className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 z-10"
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <p className="text-[9px] tracking-[0.3em] uppercase text-gray-700">Scroll</p>
          <ChevronDown size={12} className="text-gray-700" />
        </motion.div>
      </section>

      {/* ╔══════════════════════════════════════════════════════════════
          ║  SERVICES SECTION  (unchanged)
          ╚══════════════════════════════════════════════════════════════ */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="container-max section-padding">
          <FadeUp className="text-center mb-14">
            <span className="section-tag">What We Do</span>
            <h2 className="section-title">Every Fabric, <span className="gradient-text">Expert Care</span></h2>
            <p className="text-gray-500 mt-4 max-w-xl mx-auto text-sm sm:text-base">
              From delicate sarees to everyday casuals — we have the right cleaning method for every garment.
            </p>
          </FadeUp>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
            {services.map((service, i) => {
              const Icon = service.icon
              return (
                <FadeUp key={service.title} delay={i * 0.08}>
                  <Link href="/services"
                    className="group block bg-white rounded-2xl p-6 border border-gray-100 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-gray-100/80 cursor-pointer">
                    <div className={`w-12 h-12 ${service.bg} rounded-xl flex items-center justify-center mb-4 transition-colors duration-300 ${service.hoverBg}`}>
                      <Icon size={22} className={`${service.iconColor} transition-colors duration-300 group-hover:text-white`}/>
                    </div>
                    <h3 className="font-bold text-gray-900 text-base mb-2 group-hover:text-orange-500 transition-colors duration-300">{service.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed mb-4">{service.desc}</p>
                    <span className="inline-flex items-center gap-1.5 text-orange-500 text-xs font-bold tracking-wide opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-300">
                      Learn more <ArrowRight size={12} />
                    </span>
                  </Link>
                </FadeUp>
              )
            })}
          </div>
          <FadeUp delay={0.3} className="text-center mt-10">
            <Link href="/services" className="btn-outline">View All Services <ArrowRight size={16} /></Link>
          </FadeUp>
        </div>
      </section>

      {/* ╔══════════════════════════════════════════════════════════════
          ║  HOW IT WORKS  (unchanged)
          ╚══════════════════════════════════════════════════════════════ */}
      <section className="py-20 lg:py-28 bg-[#0A0A0A] overflow-hidden">
        <div className="container-max section-padding">
          <FadeUp className="text-center mb-14">
            <span className="inline-block text-orange-400 text-xs font-bold tracking-[0.2em] uppercase mb-3">How It Works</span>
            <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-bold text-white leading-tight">
              Laundry in <span className="gradient-text">3 Simple Steps</span>
            </h2>
            <p className="text-gray-400 mt-4 max-w-lg mx-auto text-sm sm:text-base">We make laundry completely effortless for you — from your door and back.</p>
          </FadeUp>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10 relative">
            <div className="hidden md:block absolute top-10 left-[calc(16.67%+1rem)] right-[calc(16.67%+1rem)] h-px bg-gradient-to-r from-transparent via-orange-500/40 to-transparent z-0"/>
            {howItWorks.map((step, i) => {
              const Icon = step.icon
              return (
                <FadeUp key={step.step} delay={i * 0.15}>
                  <div className="relative z-10 flex flex-col items-center text-center">
                    <div className="w-20 h-20 rounded-full border-2 border-orange-500/30 bg-orange-500/10 flex items-center justify-center mb-6 relative">
                      <Icon size={28} className="text-orange-400"/>
                      <span className="absolute -top-1 -right-1 w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center text-white text-[10px] font-extrabold">{i + 1}</span>
                    </div>
                    <h3 className="text-white font-bold text-lg mb-3">{step.title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed max-w-xs">{step.desc}</p>
                  </div>
                </FadeUp>
              )
            })}
          </div>
          <FadeUp delay={0.4} className="text-center mt-14">
            <a href="https://wa.me/919327920057?text=Hi%2C%20I%20want%20to%20book%20a%20laundry%20pickup" target="_blank" rel="noopener noreferrer" className="btn-primary px-8 py-4 text-base">
              📲 Schedule a Pickup Now
            </a>
          </FadeUp>
        </div>
      </section>

      {/* ╔══════════════════════════════════════════════════════════════
          ║  PRICING TEASER  (unchanged)
          ╚══════════════════════════════════════════════════════════════ */}
      <section className="py-20 lg:py-24 bg-gradient-to-br from-orange-50 to-[#FFF7F0]">
        <div className="container-max section-padding">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <FadeUp>
              <span className="section-tag">Transparent Pricing</span>
              <h2 className="section-title mb-5">No Hidden Costs. <span className="gradient-text">Ever.</span></h2>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-8">We believe in total transparency. Every service has a clear, upfront price — no surprises when it&apos;s time to pay.</p>
              <div className="space-y-3 mb-8">
                {[
                  { item: 'T-Shirt (Dry Clean)',        price: '₹105' },
                  { item: 'Saree (Dry Clean)',           price: '₹280' },
                  { item: 'Formal Jacket (Dry Clean)',   price: '₹359' },
                  { item: 'Bedsheet (Large)',            price: '₹220' },
                ].map((p) => (
                  <div key={p.item} className="flex items-center justify-between bg-white rounded-xl px-5 py-3.5 border border-orange-100 shadow-sm">
                    <span className="text-sm font-medium text-gray-700">{p.item}</span>
                    <span className="text-sm font-bold text-orange-500">{p.price}</span>
                  </div>
                ))}
              </div>
              <Link href="/pricing" className="btn-primary">See Full Price List <ArrowRight size={16} /></Link>
            </FadeUp>
            <FadeUp delay={0.15}>
              <div className="bg-white rounded-3xl p-8 shadow-xl border border-orange-100 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-40 h-40 bg-orange-500/5 rounded-bl-[100px]"/>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-orange-500 rounded-xl flex items-center justify-center">
                    <Sparkles size={18} className="text-white"/>
                  </div>
                  <div>
                    <p className="font-bold text-gray-900 text-sm">Quick Laundry Zone</p>
                    <p className="text-gray-400 text-xs">Starting from just ₹51</p>
                  </div>
                </div>
                <div className="space-y-4">
                  {[
                    { cat: 'Top Wear',    from: '₹60',       type: 'Steam Press'    },
                    { cat: 'Indian Wear', from: '₹105',      type: 'Dry Clean'      },
                    { cat: 'Bags & Shoes',from: '₹215',      type: 'Dry Clean'      },
                    { cat: 'Home Linen',  from: '₹80',       type: 'Medium'         },
                    { cat: 'Curtains',    from: '₹10/sq.ft', type: 'Single Layer'   },
                  ].map((cat) => (
                    <div key={cat.cat} className="flex items-center justify-between py-3 border-b border-gray-50 last:border-0">
                      <div>
                        <p className="text-sm font-semibold text-gray-800">{cat.cat}</p>
                        <p className="text-xs text-gray-400">{cat.type}</p>
                      </div>
                      <span className="text-orange-500 font-bold text-sm">from {cat.from}</span>
                    </div>
                  ))}
                </div>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ╔══════════════════════════════════════════════════════════════
          ║  WHY CHOOSE US  (unchanged)
          ╚══════════════════════════════════════════════════════════════ */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="container-max section-padding">
          <FadeUp className="text-center mb-14">
            <span className="section-tag">Why Choose Us</span>
            <h2 className="section-title">The Quick Laundry Zone <span className="gradient-text">Difference</span></h2>
          </FadeUp>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
            {whyUs.map((item, i) => {
              const Icon = item.icon
              return (
                <FadeUp key={item.title} delay={i * 0.07}>
                  <div className="flex items-start gap-4 bg-gray-50 rounded-2xl p-6 border border-gray-100 hover:border-orange-200 hover:bg-orange-50/40 transition-all duration-300 group">
                    <div className="w-10 h-10 bg-orange-100 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-orange-500 transition-colors duration-300">
                      <Icon size={18} className="text-orange-500 group-hover:text-white transition-colors duration-300"/>
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 text-sm mb-1">{item.title}</h3>
                      <p className="text-gray-500 text-xs leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                </FadeUp>
              )
            })}
          </div>
        </div>
      </section>

      {/* ╔══════════════════════════════════════════════════════════════
          ║  TESTIMONIALS  (unchanged)
          ╚══════════════════════════════════════════════════════════════ */}
      <section className="py-20 lg:py-28 bg-[#0A0A0A] overflow-hidden">
        <div className="container-max section-padding">
          <FadeUp className="text-center mb-14">
            <span className="inline-block text-orange-400 text-xs font-bold tracking-[0.2em] uppercase mb-3">Customer Love</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">What Surat Says <span className="gradient-text">About Us</span></h2>
          </FadeUp>
          <div className="relative max-w-2xl mx-auto">
            <AnimatePresence mode="wait">
              <motion.div key={activeTestimonial} initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -30 }} transition={{ duration: 0.5 }}
                className="bg-gray-900 rounded-3xl p-8 sm:p-10 border border-gray-700">
                <div className="flex gap-1 mb-5">
                  {[1,2,3,4,5].map((s) => <Star key={s} size={16} className="fill-amber-400 text-amber-400"/>)}
                </div>
                <p className="text-gray-300 text-base sm:text-lg leading-relaxed mb-8 italic">&ldquo;{testimonials[activeTestimonial].review}&rdquo;</p>
                <div className="flex items-center gap-4">
                  <div className={`w-12 h-12 ${testimonials[activeTestimonial].color} rounded-full flex items-center justify-center shrink-0`}>
                    <span className="text-white font-bold text-sm">{testimonials[activeTestimonial].initials}</span>
                  </div>
                  <div>
                    <p className="text-white font-bold text-sm">{testimonials[activeTestimonial].name}</p>
                    <p className="text-gray-500 text-xs">{testimonials[activeTestimonial].location}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
            <div className="flex justify-center gap-2 mt-6">
              {testimonials.map((_, i) => (
                <button key={i} onClick={() => setActiveTestimonial(i)}
                  className={`transition-all duration-300 rounded-full ${i === activeTestimonial ? 'w-8 h-2 bg-orange-500' : 'w-2 h-2 bg-gray-600 hover:bg-gray-400'}`}
                  aria-label={`View testimonial ${i + 1}`}/>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ╔══════════════════════════════════════════════════════════════
          ║  FINAL CTA  (unchanged)
          ╚══════════════════════════════════════════════════════════════ */}
      <section className="py-20 lg:py-24 bg-orange-500 overflow-hidden relative">
        <div className="absolute top-0 right-0 w-64 h-64 bg-orange-400/30 rounded-full blur-3xl pointer-events-none"/>
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-orange-600/30 rounded-full blur-3xl pointer-events-none"/>
        <div className="relative container-max section-padding text-center">
          <FadeUp>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-5 leading-tight">Ready for Fresh, Clean Clothes?</h2>
            <p className="text-orange-100 text-sm sm:text-base mb-8 max-w-lg mx-auto">Book a pickup right now on WhatsApp. We&apos;ll handle the rest.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="https://wa.me/919327920057?text=Hi%2C%20I%20want%20to%20book%20a%20laundry%20service" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white text-orange-500 hover:bg-orange-50 font-bold px-8 py-4 rounded-full transition-all duration-300 hover:shadow-2xl active:scale-95 text-sm sm:text-base">
                📲 Book on WhatsApp
              </a>
              <a href="tel:+919327920057"
                className="inline-flex items-center gap-2 bg-black/30 hover:bg-black/60 text-white border border-white/30 font-bold px-8 py-4 rounded-full transition-all duration-300 active:scale-95 text-sm sm:text-base">
                <Phone size={16} /> Call Us
              </a>
            </div>
          </FadeUp>
        </div>
      </section>
    </>
  )
}