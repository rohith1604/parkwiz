'use client'

import { useState } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const products = [
  {
    title: "MANUAL TICKET DISPENSER",
    description: "Efficient manual ticketing solution for various parking environments.",
    image: "/placeholder.svg?height=300&width=200"
  },
  {
    title: "SEMI AUTO CASHIER EXIT",
    description: "Streamlined exit process with semi-automated cashier capabilities.",
    image: "/placeholder.svg?height=300&width=200"
  },
  {
    title: "ENTRY PAID POS",
    description: "Advanced point of sale system for entry payments.",
    image: "/placeholder.svg?height=300&width=200"
  },
  {
    title: "AUTOMATED PARKING PAY STATION",
    description: "Fully automated payment solution for seamless parking operations.",
    image: "/placeholder.svg?height=300&width=200"
  },
  {
    title: "HANDHELD POS",
    description: "Portable point of sale device for flexible parking management.",
    image: "/placeholder.svg?height=300&width=200"
  },
  {
    title: "RAPID EXIT",
    description: "High-speed exit system for improved traffic flow.",
    image: "/placeholder.svg?height=300&width=200"
  },
  {
    title: "MOBILE APPLICATION",
    description: "User-friendly mobile app for convenient parking management.",
    image: "/placeholder.svg?height=300&width=200"
  },
  {
    title: "FASTAG",
    description: "Electronic toll collection system for seamless transit.",
    image: "/placeholder.svg?height=300&width=200"
  },
  {
    title: "ANPR",
    description: "Automatic Number Plate Recognition for enhanced security and tracking.",
    image: "/placeholder.svg?height=300&width=200"
  },
  {
    title: "CENTRAL CONTROL SYSTEM",
    description: "Comprehensive centralized management system for parking control.",
    image: "/placeholder.svg?height=300&width=200"
  }
]

export default function ProductShowcase() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % products.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + products.length) % products.length)
  }

  return (
    <section className="py-24 relative">
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1609619385002-f40f1df9b7eb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
          alt="Smart parking technology background"
          layout="fill"
          objectFit="cover"
          quality={100}
        />
        <div className="absolute inset-0 bg-gray-900/75 backdrop-blur-sm"></div>
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <h1 className="text-4xl font-bold text-center mb-12 text-white">Our Products</h1>
        <div className="relative">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-300 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {products.map((product, index) => (
                <div key={index} className="w-full flex-shrink-0">
                  <Card className="mx-auto max-w-sm bg-white shadow-lg">
                    <CardHeader>
                      <CardTitle className="text-xl font-bold text-gray-800">{product.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <Image
                        src={product.image}
                        alt={product.title}
                        width={200}
                        height={300}
                        className="mx-auto rounded-lg"
                      />
                      <CardDescription className="mt-4 text-gray-600">{product.description}</CardDescription>
                    </CardContent>
                    <CardFooter>
                      <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">Learn More</Button>
                    </CardFooter>
                  </Card>
                </div>
              ))}
            </div>
          </div>
          <Button
            variant="outline"
            size="icon"
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white text-gray-800"
            onClick={prevSlide}
          >
            <ChevronLeft className="h-6 w-6" />
            <span className="sr-only">Previous product</span>
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white text-gray-800"
            onClick={nextSlide}
          >
            <ChevronRight className="h-6 w-6" />
            <span className="sr-only">Next product</span>
          </Button>
        </div>
        <div className="mt-8 flex justify-center space-x-2">
          {products.map((_, index) => (
            <Button
              key={index}
              variant="ghost"
              size="sm"
              className={`w-3 h-3 rounded-full p-0 ${
                index === currentIndex ? 'bg-blue-600' : 'bg-gray-300'
              }`}
              onClick={() => setCurrentIndex(index)}
            >
              <span className="sr-only">Go to product {index + 1}</span>
            </Button>
          ))}
        </div>
      </div>
    </section>
  )
}

