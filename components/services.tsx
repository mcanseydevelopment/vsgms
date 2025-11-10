"use client"

import { useEffect, useRef, useState } from "react"
import { Zap, TrendingUp, Users, Smartphone, BarChart3, Mail } from "lucide-react"

const services = [
  {
    icon: <TrendingUp className="w-8 h-8" />,
    title: "SEO Optimization",
    description:
      "Dominate search rankings with our proven SEO strategies that drive organic traffic and sustainable growth.",
  },
  {
    icon: <Smartphone className="w-8 h-8" />,
    title: "Social Media Marketing",
    description: "Build meaningful connections with your audience through strategic social media campaigns.",
  },
  {
    icon: <Mail className="w-8 h-8" />,
    title: "Email Campaigns",
    description: "Create impactful email marketing campaigns that convert and nurture customer relationships.",
  },
  {
    icon: <BarChart3 className="w-8 h-8" />,
    title: "Data Analytics",
    description: "Unlock actionable insights with comprehensive analytics and performance tracking.",
  },
  {
    icon: <Zap className="w-8 h-8" />,
    title: "PPC Advertising",
    description: "Maximize ROI with targeted pay-per-click campaigns across all major platforms.",
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: "Brand Strategy",
    description: "Develop a compelling brand identity that resonates with your target audience.",
  },
]

export default function Services() {
  const [visibleIndices, setVisibleIndices] = useState<number[]>([])
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisibleIndices([0, 1, 2, 3, 4, 5])
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="services" ref={sectionRef} className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">Our Services</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive digital marketing solutions tailored to drive your business forward
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`group bg-gradient-to-br from-white to-muted p-8 rounded-xl border border-border hover:border-primary hover:shadow-2xl transition-all duration-500 transform ${
                visibleIndices.includes(index) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="w-14 h-14 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center text-white mb-6 group-hover:scale-110 transition">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">{service.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
