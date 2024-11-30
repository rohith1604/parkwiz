'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Quote } from 'lucide-react'
import { Card, CardContent } from "@/components/ui/card"

const testimonials = [
  {
    quote: "Quisque ullamcorper odio a nisl lacinia dictum. Vestibulum malesuada ipsum in turpis finibus, ut sagittis erat scelerisque. Curabitur non risus fringilla libero accumsan molestie et quis justo.",
    name: "George Rich",
    role: "Marketing Head",
    image: "/placeholder.svg?height=100&width=100"
  },
  {
    quote: "Suspendisse magna mauris, convallis vel finibus eget, lobortis dictum neque. Nam tincidunt metus nec eros dignissim consectetur.",
    name: "John Henry",
    role: "Art Director",
    image: "/placeholder.svg?height=100&width=100"
  },
  {
    quote: "Aenean semper aliquam est ut maximus. Fusce id diam eget orci lobortis ultricies at ac velit. Curabitur laoreet massa et fringilla sagittis.",
    name: "Danny Cute",
    role: "Founder",
    image: "/placeholder.svg?height=100&width=100"
  },
  {
    quote: "Maecenas eu odio pharetra, elementum lorem eget, efficitur erat. Duis eget justo non nisi iaculis vestibulum. Aliquam erat volutpat.",
    name: "Richard Beal",
    role: "Senior Developer",
    image: "/placeholder.svg?height=100&width=100"
  }
]

export default function TeamTestimonials() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="py-24 bg-yellow-100">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-16">Our Team</h2>
          <div className="relative h-[300px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0"
              >
                <Card className="bg-white/90 backdrop-blur-sm shadow-lg">
                  <CardContent className="p-8">
                    <Quote className="w-12 h-12 mx-auto mb-6 text-yellow-500 opacity-50" />
                    <blockquote className="text-xl italic text-gray-700 mb-8">
                      &quot;{testimonials[current].quote}&quot;
                    </blockquote>
                    <div className="space-y-2">
                      <h3 className="text-xl font-semibold">{testimonials[current].name}</h3>
                      <p className="text-gray-500">{testimonials[current].role}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </AnimatePresence>
          </div>
          <div className="flex justify-center space-x-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                  index === current ? 'bg-yellow-500' : 'bg-yellow-200'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

