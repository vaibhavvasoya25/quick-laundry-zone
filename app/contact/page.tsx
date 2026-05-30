'use client'

import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  CheckCircle2,
  ArrowRight,
  MessageCircle,
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

// ─── Services dropdown options ─────────────────────────────────────────────────
const serviceOptions = [
  'Select a service',
  'Dry Cleaning',
  'Wash & Fold',
  'Steam Ironing',
  'Indian Wear Care',
  'Bags & Shoes Cleaning',
  'Home Linen & Curtains',
  'Other / General Query',
]

// ─── Contact info cards ────────────────────────────────────────────────────────
const contactInfo = [
  {
    icon: Phone,
    title: 'Call / WhatsApp',
    lines: ['+91 93279 20057'],
    sub: 'Mon – Sun, 9 AM – 8 PM',
    href: 'tel:+919327920057',
    color: 'bg-orange-50',
    iconColor: 'text-orange-500',
    borderColor: 'border-orange-100',
  },
  {
    icon: Mail,
    title: 'Email Us',
    lines: ['vaibhavvasoya2510@gmail.com'],
    sub: 'We reply within a few hours',
    href: 'mailto:vaibhavvasoya2510@gmail.com',
    color: 'bg-blue-50',
    iconColor: 'text-blue-500',
    borderColor: 'border-blue-100',
  },
  {
    icon: MapPin,
    title: 'Our Location',
    lines: ['Surat, Gujarat', 'India'],
    sub: 'Serving the whole city',
    href: 'https://maps.app.goo.gl/MLKhnxSZd7faXXmx6',
    color: 'bg-green-50',
    iconColor: 'text-green-500',
    borderColor: 'border-green-100',
  },
  {
    icon: Clock,
    title: 'Working Hours',
    lines: ['Monday – Sunday'],
    sub: '9:00 AM – 8:00 PM',
    href: null,
    color: 'bg-purple-50',
    iconColor: 'text-purple-500',
    borderColor: 'border-purple-100',
  },
]

// ─── Main Page ────────────────────────────────────────────────────────────────
export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: 'Select a service',
    message: '',
  })
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  async function handleSubmit(e: React.MouseEvent<HTMLButtonElement>) {
  e.preventDefault()

  if (!formData.name.trim() || !formData.phone.trim() || !formData.message.trim()) {
    return
  }
  if (formData.service === 'Select a service') {
    return
  }

  setStatus('sending')

  try {
    const body = new FormData()
    body.append('name',    formData.name)
    body.append('phone',   formData.phone)
    body.append('email',   formData.email || 'Not provided')
    body.append('service', formData.service)
    body.append('message', formData.message)
    body.append('_subject', `New Enquiry — ${formData.service} | Quick Laundry Zone`)
    body.append('_replyto', formData.email || '')
    // This tells Formspree which email to forward to
    // (already configured in your Formspree dashboard)

    const res = await fetch('https://formspree.io/f/mzdwvwll', {
      method: 'POST',
      body,
      headers: { Accept: 'application/json' },
      // Do NOT set Content-Type manually when using FormData
      // Browser sets it automatically with the correct boundary
    })

    const data = await res.json()
    console.log('Formspree response:', data)

    if (res.ok) {
      setStatus('success')
      setFormData({
        name: '',
        phone: '',
        email: '',
        service: 'Select a service',
        message: '',
      })
    } else {
      console.error('Formspree error:', data)
      setStatus('error')
    }
  } catch (err) {
    console.error('Network error:', err)
    setStatus('error')
  }
}

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
            Get In Touch
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white
                       leading-tight mb-5"
          >
            We&apos;re Here to{' '}
            <span className="bg-gradient-to-r from-orange-400 to-orange-500
                             bg-clip-text text-transparent">
              Help
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.2 }}
            className="text-gray-400 text-sm sm:text-base max-w-xl mx-auto"
          >
            Have a question, want a quote, or ready to book? Reach out via the form,
            WhatsApp, or give us a call — we respond quickly.
          </motion.p>
        </div>
      </section>

      {/* ── Contact info cards ────────────────────────────────────── */}
      <section className="py-14 bg-[#FFF7F0]">
        <div className="container-max section-padding">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5">
            {contactInfo.map((info, i) => {
              const Icon = info.icon
              const cardClassName = `block bg-white rounded-2xl p-6 border ${info.borderColor}
                                shadow-sm hover:shadow-md transition-all duration-300
                                hover:-translate-y-0.5 group`

              const cardContent = (
                <>
                  <div className={`w-11 h-11 ${info.color} rounded-xl flex items-center
                                    justify-center mb-4`}>
                    <Icon size={20} className={info.iconColor} />
                  </div>
                  <p className="font-bold text-gray-900 text-sm mb-1">{info.title}</p>
                  {info.lines.map((line) => (
                    <p key={line} className="text-gray-700 text-sm font-medium break-all">
                      {line}
                    </p>
                  ))}
                  <p className="text-gray-400 text-xs mt-1">{info.sub}</p>
                </>
              )

              return (
                <FadeUp key={info.title} delay={i * 0.08}>
                  {info.href ? (
                    <a
                      href={info.href}
                      target={info.href.startsWith('http') ? '_blank' : undefined}
                      rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className={cardClassName}
                    >
                      {cardContent}
                    </a>
                  ) : (
                    <div className={cardClassName}>
                      {cardContent}
                    </div>
                  )}
                </FadeUp>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── Form + Map ───────────────────────────────────────────── */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container-max section-padding">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16">

            {/* ── Contact Form ── */}
            <FadeUp>
              <div className="bg-white rounded-3xl border border-gray-100 shadow-xl
                              shadow-gray-100/50 overflow-hidden">
                {/* Form header */}
                <div className="bg-gradient-to-r from-orange-500 to-orange-600 px-7 py-6">
                  <h2 className="text-white font-extrabold text-xl mb-1">
                    Send Us a Message
                  </h2>
                  <p className="text-orange-100 text-xs">
                    Fill in your details and we&apos;ll get back to you shortly.
                  </p>
                </div>

                <div className="p-7 space-y-5">
                  {/* Success state */}
                  {status === 'success' && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="bg-green-50 border border-green-200 rounded-2xl p-6
                                 text-center"
                    >
                      <CheckCircle2 size={40} className="text-green-500 mx-auto mb-3" />
                      <p className="font-bold text-green-800 text-base mb-1">
                        Message Sent!
                      </p>
                      <p className="text-green-600 text-sm">
                        We&apos;ve received your enquiry and will get back to you soon.
                      </p>
                      <button
                        onClick={() => setStatus('idle')}
                        className="mt-4 text-xs text-green-600 underline underline-offset-2"
                      >
                        Send another message
                      </button>
                    </motion.div>
                  )}

                  {status !== 'success' && (
                    <>
                      {/* Name */}
                      <div>
                        <label className="block text-xs font-bold text-gray-700 mb-1.5
                                          tracking-wide uppercase">
                          Your Name <span className="text-orange-500">*</span>
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Enter your full name"
                          className="w-full bg-gray-50 border border-gray-200 rounded-xl
                                     px-4 py-3 text-sm text-gray-800 placeholder-gray-400
                                     focus:outline-none focus:ring-2 focus:ring-orange-400
                                     focus:border-transparent transition-all duration-200"
                        />
                      </div>

                      {/* Phone + Email row */}
                      <div className="grid sm:grid-cols-2 gap-5">
                        <div>
                          <label className="block text-xs font-bold text-gray-700 mb-1.5
                                            tracking-wide uppercase">
                            Phone <span className="text-orange-500">*</span>
                          </label>
                          <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="+91 XXXXX XXXXX"
                            className="w-full bg-gray-50 border border-gray-200 rounded-xl
                                       px-4 py-3 text-sm text-gray-800 placeholder-gray-400
                                       focus:outline-none focus:ring-2 focus:ring-orange-400
                                       focus:border-transparent transition-all duration-200"
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-bold text-gray-700 mb-1.5
                                            tracking-wide uppercase">
                            Email <span className="text-gray-400 font-normal">(optional)</span>
                          </label>
                          <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="your@email.com"
                            className="w-full bg-gray-50 border border-gray-200 rounded-xl
                                       px-4 py-3 text-sm text-gray-800 placeholder-gray-400
                                       focus:outline-none focus:ring-2 focus:ring-orange-400
                                       focus:border-transparent transition-all duration-200"
                          />
                        </div>
                      </div>

                      {/* Service dropdown */}
                      <div>
                        <label className="block text-xs font-bold text-gray-700 mb-1.5
                                          tracking-wide uppercase">
                          Service Interested In <span className="text-orange-500">*</span>
                        </label>
                        <select
                          name="service"
                          value={formData.service}
                          onChange={handleChange}
                          className="w-full bg-gray-50 border border-gray-200 rounded-xl
                                     px-4 py-3 text-sm text-gray-800
                                     focus:outline-none focus:ring-2 focus:ring-orange-400
                                     focus:border-transparent transition-all duration-200
                                     cursor-pointer"
                        >
                          {serviceOptions.map((opt) => (
                            <option
                              key={opt}
                              value={opt}
                              disabled={opt === 'Select a service'}
                            >
                              {opt}
                            </option>
                          ))}
                        </select>
                      </div>

                      {/* Message */}
                      <div>
                        <label className="block text-xs font-bold text-gray-700 mb-1.5
                                          tracking-wide uppercase">
                          Message <span className="text-orange-500">*</span>
                        </label>
                        <textarea
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          rows={4}
                          placeholder="Tell us what you need — number of items, special instructions, preferred pickup time, etc."
                          className="w-full bg-gray-50 border border-gray-200 rounded-xl
                                     px-4 py-3 text-sm text-gray-800 placeholder-gray-400
                                     focus:outline-none focus:ring-2 focus:ring-orange-400
                                     focus:border-transparent transition-all duration-200
                                     resize-none"
                        />
                      </div>

                      {/* Error message */}
                      {status === 'error' && (
                        <p className="text-red-500 text-xs bg-red-50 border border-red-200
                                      rounded-xl px-4 py-3">
                          Something went wrong. Please try WhatsApp or call us directly.
                        </p>
                      )}

                      {/* Submit button */}
                      <button
                        onClick={handleSubmit}
                        disabled={status === 'sending'}
                        className="w-full btn-primary justify-center py-3.5 text-sm
                                   disabled:opacity-60 disabled:cursor-not-allowed"
                      >
                        {status === 'sending' ? (
                          <>
                            <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
                            </svg>
                            Sending...
                          </>
                        ) : (
                          <>
                            <Send size={15} /> Send Message
                          </>
                        )}
                      </button>

                      {/* WhatsApp alternative */}
                      <div className="flex items-center gap-3">
                        <div className="flex-1 h-px bg-gray-100" />
                        <span className="text-xs text-gray-400">or reach us faster</span>
                        <div className="flex-1 h-px bg-gray-100" />
                      </div>

                      <a
                        href="https://wa.me/9327920057?text=Hi%2C%20I%20have%20a%20query%20about%20Quick%20Laundry%20Zone"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full flex items-center justify-center gap-2
                                   bg-[#25D366] hover:bg-[#20BB5A] text-white font-semibold
                                   py-3.5 px-6 rounded-full transition-all duration-300
                                   active:scale-95 text-sm"
                      >
                        <MessageCircle size={16} />
                        Chat on WhatsApp
                      </a>
                    </>
                  )}
                </div>
              </div>
            </FadeUp>

            {/* ── Map + extra info ── */}
            <FadeUp delay={0.15}>
              <div className="space-y-5">
                {/* Map embed */}
                <div className="rounded-3xl overflow-hidden border border-gray-200
                                shadow-sm h-80 lg:h-96 w-full">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.5!2d72.5!3d23.02!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDAxJzEyLjAiTiA3MsKwMzAnMDAuMCJF!5e0!3m2!1sen!2sin!4v1234567890!5m2!1sen!2sin&q=Quick+Laundry+Zone+Surat"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Quick Laundry Zone Location"
                  />
                </div>

                {/* Open in maps button */}
                <a
                  href="https://maps.app.goo.gl/MLKhnxSZd7faXXmx6"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-white border-2
                             border-orange-500 text-orange-500 hover:bg-orange-500
                             hover:text-white font-semibold py-3 px-6 rounded-full
                             transition-all duration-300 active:scale-95 text-sm w-full"
                >
                  <MapPin size={16} />
                  Open in Google Maps
                  <ArrowRight size={14} />
                </a>

                {/* Business hours card */}
                <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-9 h-9 bg-orange-100 rounded-xl flex items-center
                                    justify-center">
                      <Clock size={16} className="text-orange-500" />
                    </div>
                    <p className="font-bold text-gray-900 text-sm">Business Hours</p>
                  </div>
                  <div className="space-y-2">
                    {[
                      { day: 'Monday – Friday', time: '9:00 AM – 8:00 PM' },
                      { day: 'Saturday',        time: '9:00 AM – 8:00 PM' },
                      { day: 'Sunday',          time: '9:00 AM – 8:00 PM' },
                    ].map((row) => (
                      <div key={row.day} className="flex items-center justify-between
                                                     text-sm py-1.5 border-b border-gray-100
                                                     last:border-0">
                        <span className="text-gray-600 font-medium">{row.day}</span>
                        <span className="text-orange-500 font-bold">{row.time}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-4 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                    <span className="text-green-600 text-xs font-semibold">
                      We&apos;re open right now
                    </span>
                  </div>
                </div>

                {/* Quick actions */}
                <div className="grid grid-cols-2 gap-3">
                  <a
                    href="tel:+919327920057"
                    className="flex items-center justify-center gap-2 bg-white
                               border border-gray-200 hover:border-orange-300
                               hover:bg-orange-50 text-gray-700 hover:text-orange-600
                               font-semibold py-3 px-4 rounded-xl transition-all
                               duration-300 text-sm"
                  >
                    <Phone size={15} /> Call Now
                  </a>
                  <a
                    href="mailto:vaibhavvasoya2510@gmail.com"
                    className="flex items-center justify-center gap-2 bg-white
                               border border-gray-200 hover:border-blue-300
                               hover:bg-blue-50 text-gray-700 hover:text-blue-600
                               font-semibold py-3 px-4 rounded-xl transition-all
                               duration-300 text-sm"
                  >
                    <Mail size={15} /> Email Us
                  </a>
                </div>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ── Bottom CTA ───────────────────────────────────────────── */}
      <section className="py-16 bg-[#0A0A0A] relative overflow-hidden">
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2
                        w-96 h-96 bg-orange-500/8 rounded-full blur-3xl pointer-events-none" />
        <div className="relative container-max section-padding text-center">
          <FadeUp>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-3">
              Prefer WhatsApp?
            </h2>
            <p className="text-gray-400 text-sm mb-8 max-w-sm mx-auto">
              Most customers find it easiest to just send us a message on WhatsApp.
              We reply fast.
            </p>
            <a
              href="https://wa.me/9327920057?text=Hi%2C%20I%20want%20to%20book%20a%20laundry%20service"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20BB5A]
                         text-white font-bold px-8 py-4 rounded-full transition-all
                         duration-300 hover:shadow-xl hover:shadow-green-500/20
                         active:scale-95 text-sm sm:text-base"
            >
              <MessageCircle size={18} />
              Chat on WhatsApp Now
            </a>
          </FadeUp>
        </div>
      </section>
    </>
  )
}