// components/Header.tsx

'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import { Button } from "@/components/ui/button"

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('')

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  const menuItems = [
    { name: 'Home', id: 'home' },
    { name: 'About Us', id: 'about' },
    { name: 'Portfolio', id: 'portfolio' },
    { name: 'Contact Us', id: 'contact' }
  ]

  useEffect(() => {
    const handleScroll = () => {
      const sections = menuItems.map(item => document.getElementById(item.id))
      const scrollPosition = window.scrollY + 100 // Offset for header height

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i]
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(menuItems[i].id)
          break
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMenuOpen(false)
  }

  return (
    <header className="fixed w-full z-50 bg-gray-900/80 backdrop-blur-sm">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center space-x-2 group">
            <div className="w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center group-hover:bg-yellow-300 transition-colors">
              <span className="text-gray-900 text-xl font-semibold">P</span>
            </div>
            <span className="text-2xl font-semibold text-white group-hover:text-yellow-300 transition-colors">
              PARK<span className="text-yellow-400 group-hover:text-yellow-300">WIZ</span>
            </span>
          </Link>
          <div className="hidden md:flex space-x-6">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`text-white hover:text-yellow-400 transition-colors text-sm font-medium ${
                  activeSection === item.id ? 'text-yellow-400' : ''
                }`}
              >
                {item.name}
              </button>
            ))}
          </div>
          <Button
            className="md:hidden"
            variant="ghost"
            size="icon"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            onClick={toggleMenu}
          >
            {isMenuOpen ? <X className="h-6 w-6 text-white" /> : <Menu className="h-6 w-6 text-white" />}
          </Button>
        </div>
        {isMenuOpen && (
          <div className="mt-4 md:hidden">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`block py-2 text-white hover:text-yellow-400 transition-colors text-sm font-medium ${
                  activeSection === item.id ? 'text-yellow-400' : ''
                }`}
              >
                {item.name}
              </button>
            ))}
          </div>
        )}
      </nav>
    </header>
  )
}

export default Header