'use client'

export default function MapLocation() {
  return (
    <section className="w-full h-[500px] relative">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.9398823066627!2d77.6473!3d12.9139!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDU0JzUwLjEiTiA3N8KwMzgnNTAuMyJF!5e0!3m2!1sen!2sin!4v1639997001234!5m2!1sen!2sin"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="absolute inset-0"
      />
    </section>
  )
}

