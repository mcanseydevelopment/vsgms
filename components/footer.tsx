"use client"

import Link from "next/link"
import { Mail, Phone } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-foreground text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">VS</span>
              </div>
              <span className="font-bold text-xl">VSGMS</span>
            </div>
            <p className="text-white/70">Elevating digital presence across industries</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#services" className="text-white/70 hover:text-white transition">
                  Services
                </Link>
              </li>
              <li>
                <Link href="#portfolio" className="text-white/70 hover:text-white transition">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="#team" className="text-white/70 hover:text-white transition">
                  Team
                </Link>
              </li>
              <li>
                <Link href="#testimonials" className="text-white/70 hover:text-white transition">
                  Testimonials
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold mb-4">Services</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-white/70 hover:text-white transition">
                  SEO Optimization
                </a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-white transition">
                  Social Media
                </a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-white transition">
                  PPC Advertising
                </a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-white transition">
                  Brand Strategy
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <Phone size={18} />
                <a href="tel:9137182658" className="text-white/70 hover:text-white transition">
                  +91 913-718-2658
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={18} />
                <a href="mailto:contact@vsgms.com" className="text-white/70 hover:text-white transition">
                  contact@vsgms.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 text-center text-white/60">
          <p>&copy; 2025 VSGMS. All rights reserved. | Digital Marketing Excellence</p>
        </div>
      </div>
    </footer>
  )
}
