import Link from 'next/link'
import { Twitter, Facebook, Mail, Phone, Rss, Globe2 } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="relative z-20 bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <Link href="/" className="text-3xl font-bold text-yellow-400">
              PARKWIZ
            </Link>
            <p className="mt-4 text-sm">
              Copyright © {new Date().getFullYear()} Hamsha Parkwiz Tech Solutions Pvt. Ltd.
            </p>
            <p className="text-sm">Design: Parkwiz</p>
          </div>

          {/* Corporate Office */}
          <div>
            <h3 className="text-lg font-semibold mb-4">CORPORATE OFFICE</h3>
            <address className="not-italic">
              <p>BANGALORE: #1207/343/1, 9th Main,</p>
              <p>7th Sector, HSR Layout</p>
              <p>Bangalore, India, 560102</p>
            </address>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">GET IN TOUCH</h3>
            <div className="space-y-2">
              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <a href="tel:09693704790" className="hover:text-yellow-400 transition-colors">
                  09693704790
                </a>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <a href="mailto:info@parkwiz.in" className="hover:text-yellow-400 transition-colors">
                  info@parkwiz.in
                </a>
              </p>
            </div>

            {/* Social Links */}
            <div className="mt-6">
              <h4 className="text-sm font-semibold mb-3">GET SOCIAL WITH US</h4>
              <div className="flex gap-4">
                <Link href="#" className="hover:text-yellow-400 transition-colors">
                  <Twitter className="w-5 h-5" />
                  <span className="sr-only">Twitter</span>
                </Link>
                <Link href="#" className="hover:text-yellow-400 transition-colors">
                  <Facebook className="w-5 h-5" />
                  <span className="sr-only">Facebook</span>
                </Link>
                <Link href="#" className="hover:text-yellow-400 transition-colors">
                  <Globe2 className="w-5 h-5" />
                  <span className="sr-only">Website</span>
                </Link>
                <Link href="#" className="hover:text-yellow-400 transition-colors">
                  <Rss className="w-5 h-5" />
                  <span className="sr-only">RSS</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

