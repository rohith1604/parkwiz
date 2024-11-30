'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

const clients = [
  {
    name: "VEGA CIRCLE MALL",
    description: "Premier shopping destination with state-of-the-art parking solutions",
    image: "https://parkwiz.in/img/Vega-Circle.png",
    location: "Strategic location serving thousands of visitors daily"
  },
  {
    name: "CITY CENTRE -RAIPUR",
    description: "Modern urban shopping complex with automated parking management",
    image: "https://www.ambujaneotia.com/storage/app/images/media/gallerydata/content_image/146357113065f590ab3d8605.3672879517105921712.webp",
    location: "Raipur's leading retail and entertainment destination"
  }
]

export default function ClientShowcase() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % clients.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + clients.length) % clients.length)
  }

  return (
    <section className="py-24 relative">
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
          alt="Modern city parking background"
          layout="fill"
          objectFit="cover"
          quality={100}
        />
        <div className="absolute inset-0 bg-gray-900/75 backdrop-blur-sm"></div>
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold mb-6 text-white">Our Clients</h2>
          <p className="text-lg text-gray-200">
            We take car park safety and that of our customers seriously. In order to keep our
            customers and staff safe, we are committed to using the best people, technology and
            systems.
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
          >
            <Card className="bg-white shadow-xl overflow-hidden">
              <CardContent className="p-0">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="relative h-[300px] md:h-[400px]">
                    <Image
                      src={clients[currentIndex].image}
                      alt={clients[currentIndex].name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-8 flex flex-col justify-center">
                    <h3 className="text-2xl font-bold mb-4">{clients[currentIndex].name}</h3>
                    <p className="text-gray-600 mb-4">{clients[currentIndex].description}</p>
                    <p className="text-sm text-gray-500">{clients[currentIndex].location}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 flex justify-between px-4">
            <Button
              variant="outline"
              size="icon"
              className="bg-white/80 backdrop-blur-sm hover:bg-white"
              onClick={prevSlide}
            >
              <ChevronLeft className="h-6 w-6" />
              <span className="sr-only">Previous client</span>
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="bg-white/80 backdrop-blur-sm hover:bg-white"
              onClick={nextSlide}
            >
              <ChevronRight className="h-6 w-6" />
              <span className="sr-only">Next client</span>
            </Button>
          </div>

          <div className="mt-8 flex justify-center gap-2">
            {clients.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2.5 h-2.5 rounded-full transition-colors ${
                  index === currentIndex ? 'bg-blue-600' : 'bg-gray-300'
                }`}
              >
                <span className="sr-only">Go to client {index + 1}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

