'use client'

import { useState } from 'react'
import { MapPin, Mail, Send } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog"
import { Input } from "@/components/ui/input"
import { Textarea } from "./ui/textarea"
import { Label } from "./ui/label"
import Link from 'next/link'

const locations = [
  {
    city: "BANGALORE",
    address: "#1207/343/1, 9th Main, 7th Sector, HSR Layout",
    postalCode: "Bangalore, India, 560102",
    status: "active",
    mapUrl: "https://maps.app.goo.gl/mFR48sarG52ezAjN9"
  },
  {
    city: "CHENNAI",
    address: "Coming soon..",
    status: "coming-soon",
    mapUrl: ""
  },
  {
    city: "MUMBAI",
    address: "Coming soon..",
    status: "coming-soon",
    mapUrl: ""
  },
  {
    city: "KOLKATA",
    address: "Tollygung, Royal Line",
    postalCode: "Kolkata-700068",
    status: "active",
    mapUrl: "https://maps.app.goo.gl/hkp7nfo5VkrmwhLYA"
  }
]

type FormData = {
  name: string
  email: string
  phone: string
  location: string
  message: string
}

export default function ContactSection() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    location: '',
    message: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSuccess(true)
      
      // Reset form after 2 seconds
      setTimeout(() => {
        setIsSuccess(false)
        setFormData({
          name: '',
          email: '',
          phone: '',
          location: '',
          message: ''
        })
      }, 2000)
    }, 1500)
  }

  return (
    <section className="py-24 bg-gray-900 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-yellow-400 mb-4">CONTACT US</h2>
          <p className="text-white text-lg">
            PARKWIZ IS AVAILABLE FOR YOU AT THESE LOCATIONS:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {locations.map((location) => (
            <Card key={location.city} className="bg-gray-800 border-gray-700">
              <CardContent className="p-6 text-center">
                {location.status === 'active' ? (
                  <Link href={location.mapUrl} target="_blank" rel="noopener noreferrer" className="no-hover">
                    <MapPin className="w-8 h-8 mx-auto mb-4 text-yellow-400 hover:text-yellow-300 transition-colors cursor-pointer" />
                  </Link>
                ) : (
                  <MapPin className="w-8 h-8 mx-auto mb-4 text-yellow-400" />
                )}
                <h3 className="text-xl font-bold text-white mb-2">{location.city}</h3>
                <p className={`text-sm ${location.status === 'coming-soon' ? 'text-yellow-400' : 'text-gray-300'}`}>
                  {location.address}
                </p>
                {location.postalCode && (
                  <p className="text-sm text-gray-300">{location.postalCode}</p>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="flex justify-center">
          <Dialog>
            <DialogTrigger asChild>
              <Button className="bg-sky-400 hover:bg-sky-500 text-white font-semibold px-8 py-6 rounded-full text-lg">
                <Mail className="mr-2 h-5 w-5" />
                SEND US A MESSAGE
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px] bg-gray-800 text-white">
              <DialogHeader>
                <DialogTitle>Send us a message</DialogTitle>
                <DialogDescription className="text-gray-400">
                  Fill out the form below and we&apos;ll get back to you as soon as possible.
                </DialogDescription>
              </DialogHeader>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="Your name"
                    className="bg-gray-700 border-gray-600"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Your email"
                    className="bg-gray-700 border-gray-600"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="Your phone number"
                    className="bg-gray-700 border-gray-600"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="location">Your Location</Label>
                  <Input
                    id="location"
                    type="text"
                    placeholder="Your city/location"
                    className="bg-gray-700 border-gray-600"
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    placeholder="Your message"
                    className="bg-gray-700 border-gray-600"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                  />
                </div>
                <Button 
                  type="submit" 
                  className="w-full bg-sky-400 hover:bg-sky-500 relative"
                  disabled={isSubmitting || isSuccess}
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </span>
                  ) : isSuccess ? (
                    <span className="flex items-center justify-center text-white">
                      <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      Sent Successfully!
                    </span>
                  ) : (
                    <>
                      <Send className="mr-2 h-4 w-4" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </section>
  )
}

