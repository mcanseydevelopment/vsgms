"use client"

import { useEffect, useState } from "react"
import { Phone } from "lucide-react"

export default function CTA() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section id="contact" className="py-20 bg-gradient-to-r from-primary via-primary/80 to-accent">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2
          className={`text-4xl sm:text-5xl font-bold text-white mb-6 transition-all duration-700 ${
            isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
          }`}
        >
          Ready to Transform Your Business?
        </h2>
        <p
          className={`text-xl text-white/90 mb-10 leading-relaxed transition-all duration-700 delay-100 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
          }`}
        >
          Let's work together to create a digital marketing strategy that delivers results. Get in touch with our team
          today.
        </p>

        <div
          className={`flex flex-col sm:flex-row gap-4 justify-center transition-all duration-700 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
          }`}
        >
          <a
            href="tel:9137182658"
            className="bg-white text-primary px-8 py-4 rounded-lg font-bold hover:bg-white/90 transition transform hover:scale-105 flex items-center justify-center space-x-2 group"
          >
            <Phone size={20} />
            <span>Call: +91 913-718-2658</span>
          </a>
          <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold hover:bg-white/10 transition">
            Schedule Consultation
          </button>
        </div>
      </div>
    </section>
  )
}
