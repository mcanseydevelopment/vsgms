"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          {/* <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-lg">VS</span>
          </div> */}
          <img src="/logo.png" alt="VSGMS logo" className="w-40 h-15 rounded-lg object-cover" />
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link href="#services" className="text-foreground hover:text-primary transition">
            Services
          </Link>
          <Link href="#portfolio" className="text-foreground hover:text-primary transition">
            Portfolio
          </Link>
          <Link href="#team" className="text-foreground hover:text-primary transition">
            Team
          </Link>
          <Link href="#testimonials" className="text-foreground hover:text-primary transition">
            Testimonials
          </Link>
          <a href="tel:9137182658" className="bg-primary text-primary-foreground px-6 py-2 rounded-lg hover:bg-primary/90 transition font-semibold">
            Contact
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button className="md:hidden p-2" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <nav className="md:hidden bg-white border-t border-border">
          <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col space-y-3">
            <Link href="#services" className="text-foreground hover:text-primary py-2">
              Services
            </Link>
            <Link href="#portfolio" className="text-foreground hover:text-primary py-2">
              Portfolio
            </Link>
            <Link href="#team" className="text-foreground hover:text-primary py-2">
              Team
            </Link>
            <Link href="#testimonials" className="text-foreground hover:text-primary py-2">
              Testimonials
            </Link>
            <button className="bg-primary text-primary-foreground px-6 py-2 rounded-lg w-full font-semibold">
              Contact
            </button>
          </div>
        </nav>
      )}
    </header>
  )
}
