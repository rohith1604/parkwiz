'use client'

import { motion } from "framer-motion"
import { Car, Building2, Tag, DoorOpenIcon as Gate, ArrowUpToLine, LayersIcon, ShieldCheck, HeadphonesIcon } from 'lucide-react'
import { Card, CardContent } from "@/components/ui/card"

const services = [
  {
    icon: Car,
    title: "Smart Parking",
    description: "Parkwiz's advanced automation features for better traffic management, hassle-free operation, and intelligent mobility with centralized monitoring.",
  },
  {
    icon: Gate,
    title: "RFID Based Vehicle Access",
    description: "Automated RFID vehicle access system for apartments and hotels, controlling entry and exit for allowed vehicles.",
  },
  {
    icon: Tag,
    title: "FASTag",
    description: "Electronic parking fee collection using FASTag, reducing queues and paper use for a more environmentally friendly solution.",
  },
  {
    icon: Building2,
    title: "Toll Plaza Parking",
    description: "Complete toll management system installation and support for various fare structures and payment methods.",
  },
  {
    icon: ArrowUpToLine,
    title: "Parking Guidance System",
    description: "Real-time inventory and availability tracking using cost-effective sensors and customized vehicle guidance systems.",
  },
  {
    icon: LayersIcon,
    title: "Stack Parking (Hydraulic)",
    description: "Compact car storage solutions for above ground, below ground, or combined parking to maximize space utilization.",
  },
  {
    icon: ShieldCheck,
    title: "Safety Products",
    description: "High-quality safety products manufactured with advanced techniques to meet global quality standards.",
  },
  {
    icon: HeadphonesIcon,
    title: "Service and Operation",
    description: "Committed to delivering value and innovation to every aspect of your parking business, focusing on customer experience.",
  },
]

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
}

export default function ServicesSection() {
  return (
    <section className="py-24 bg-gray-900/80 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <motion.div 
          variants={container}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {services.map((service) => (
            <motion.div key={service.title} variants={item}>
              <Card className="bg-gray-800/50 border-gray-700 backdrop-blur-sm hover:bg-gray-800/70 transition-all duration-300 h-full">
                <CardContent className="pt-6 text-center flex-grow">
                  <div className="mb-6 relative">
                    <div className="w-20 h-20 bg-yellow-400 rounded-full mx-auto flex items-center justify-center">
                      <service.icon className="w-10 h-10 text-gray-900" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{service.title}</h3>
                  <p className="text-gray-300 text-sm leading-relaxed mb-6">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

