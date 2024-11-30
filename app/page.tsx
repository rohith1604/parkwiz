import Image from 'next/image'
import Header from '../components/Header'
import Hero from '../components/Hero'
import ServicesSection from '../components/ServicesSection'
import ProductShowcase from '../components/ProductShowcase'
import ClientShowcase from '../components/ClientShowcase'
import TeamTestimonials from '../components/TeamTestimonials'
import ContactSection from '../components/ContactSection'
import MapLocation from '../components/MapLocation'
import Footer from '../components/Footer'
import Chatbot from '../components/Chatbot'

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="fixed inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1573108724029-4c46571d6490?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
          alt="City background"
          layout="fill"
          objectFit="cover"
          quality={100}
        />
      </div>
      <div className="relative z-10 flex-grow">
        <Header />
        <main>
          <section id="home">
            <Hero />
          </section>
          <section id="about">
            <ServicesSection />
          </section>
          <section id="portfolio">
            <ProductShowcase />
            <ClientShowcase />
            <TeamTestimonials />
          </section>
          <section id="contact">
            <ContactSection />
            <MapLocation />
          </section>
        </main>
        <Footer />
      </div>
      <Chatbot />
    </div>
  )
}

