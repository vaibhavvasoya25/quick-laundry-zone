'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'

export default function WhatsAppButton() {
  const [visible, setVisible]     = useState(false)
  const [showTooltip, setShowTooltip] = useState(false)
  const [dismissed, setDismissed] = useState(false)

  // Appear after 2.5s
  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 2500)
    return () => clearTimeout(t)
  }, [])

  // Show tooltip bubble after button appears (4s total), only once
  useEffect(() => {
    if (!visible || dismissed) return
    const t = setTimeout(() => setShowTooltip(true), 1500)
    // Auto-hide tooltip after 5s
    const t2 = setTimeout(() => setShowTooltip(false), 6500)
    return () => { clearTimeout(t); clearTimeout(t2) }
  }, [visible, dismissed])

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">

      {/* Tooltip bubble */}
      <AnimatePresence>
        {showTooltip && !dismissed && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.9 }}
            animate={{ opacity: 1, y: 0,  scale: 1   }}
            exit={{   opacity: 0, y: 10,  scale: 0.9 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="relative bg-white rounded-2xl shadow-2xl shadow-black/15
                       px-4 py-3 max-w-[200px] border border-gray-100"
          >
            {/* Dismiss X */}
            <button
              onClick={() => { setShowTooltip(false); setDismissed(true) }}
              className="absolute -top-2 -right-2 w-5 h-5 bg-gray-800 rounded-full
                         flex items-center justify-center hover:bg-gray-700
                         transition-colors duration-200"
              aria-label="Dismiss"
            >
              <X size={10} className="text-white" />
            </button>

            <p className="text-gray-900 text-xs font-bold mb-0.5">
              👋 Need laundry help?
            </p>
            <p className="text-gray-500 text-[11px] leading-relaxed">
              Chat with us on WhatsApp — we reply quickly!
            </p>

            {/* Triangle pointer */}
            <div className="absolute -bottom-2 right-5 w-4 h-4 bg-white
                            border-r border-b border-gray-100
                            rotate-45 shadow-sm" />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main WhatsApp button */}
      <AnimatePresence>
        {visible && (
          <motion.a
            href="https://wa.me/9327920057?text=Hi%2C%20I%20want%20to%20book%20a%20laundry%20service"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat on WhatsApp"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{   scale: 0, opacity: 0 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{   scale: 0.95 }}
            transition={{ type: 'spring', stiffness: 260, damping: 20 }}
            className="relative w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#20BB5A]
                       shadow-lg shadow-green-500/30 hover:shadow-xl
                       hover:shadow-green-500/40 flex items-center justify-center
                       transition-colors duration-300"
          >
            {/* Pulse ring */}
            <span className="absolute inset-0 rounded-full bg-[#25D366]
                             animate-ping opacity-25" />

            {/* WhatsApp SVG */}
            <svg
              viewBox="0 0 32 32"
              className="w-7 h-7 fill-white relative z-10"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M16.002 2C8.274 2 2 8.273 2 16c0 2.43.643 4.71 1.768 6.687L2 30l7.525-1.743A13.95 13.95 0 0016.002 30C23.728 30 30 23.727 30 16S23.728 2 16.002 2zm0 25.438c-2.1 0-4.1-.565-5.828-1.55l-.418-.245-4.463 1.033 1.062-4.34-.275-.44A11.437 11.437 0 014.562 16c0-6.317 5.123-11.438 11.44-11.438S27.44 9.683 27.44 16c0 6.318-5.122 11.438-11.438 11.438zm6.27-8.565c-.343-.172-2.03-1.002-2.346-1.117-.314-.115-.544-.172-.773.172-.23.344-.888 1.117-1.088 1.346-.2.23-.4.258-.743.086-.344-.172-1.452-.535-2.766-1.707-1.022-.91-1.71-2.035-1.912-2.379-.2-.343-.02-.53.15-.7.154-.154.344-.4.516-.602.172-.2.23-.343.344-.572.115-.23.058-.43-.029-.602-.086-.172-.772-1.862-1.058-2.55-.28-.671-.563-.58-.773-.59l-.658-.01c-.23 0-.6.086-.916.43-.314.343-1.2 1.17-1.2 2.853 0 1.683 1.228 3.31 1.4 3.54.172.23 2.42 3.695 5.863 5.18.82.354 1.46.565 1.958.722.823.26 1.572.224 2.164.136.66-.1 2.03-.829 2.317-1.63.287-.8.287-1.487.2-1.63-.086-.143-.314-.23-.657-.4z" />
            </svg>
          </motion.a>
        )}
      </AnimatePresence>
    </div>
  )
}