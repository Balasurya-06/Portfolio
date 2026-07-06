"use client"
import { motion } from "framer-motion"
import Image from "next/image"

export default function GalleryPage() {
    // Real images from public/Gallery folder
    const images = [
        { src: "/Gallery/DSC08433.JPG", alt: "Event Photo 1" },
        { src: "/Gallery/WhatsApp Image 2026-02-15 at 10.20.49 PM.jpeg", alt: "Event Photo 4" },
        { src: "/Gallery/DSC08579.JPG", alt: "Event Photo 2" },
        { src: "/Gallery/WhatsApp Image 2026-02-15 at 10.20.50 PM.jpeg", alt: "Event Photo 5" },
        { src: "/Gallery/DSC08584.JPG", alt: "Event Photo 3" },
        { src: "/Gallery/WhatsApp Image 2026-02-15 at 10.20.51 PM.jpeg", alt: "Event Photo 6" },
        { src: "/Gallery/WhatsApp Image 2026-02-15 at 10.20.53 PM (1).jpeg", alt: "Event Photo 8" },
        { src: "/Gallery/WhatsApp Image 2026-02-15 at 10.20.53 PM.jpeg", alt: "Event Photo 9" },
    ]

  return (
    <section className="relative bg-[#1a1a1a] text-white py-24 px-6">
      <div className="w-[95%] max-w-[1800px] mx-auto">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-xs font-bold text-gray-400 uppercase tracking-[0.3em] mb-6 flex items-center gap-3"
          >
            <span className="w-12 h-0.5 bg-[#FF8C42]"></span>
            MEMORIES
          </motion.h2>
          <h3 className="text-5xl md:text-6xl lg:text-7xl font-black mb-6 uppercase tracking-tight leading-[0.9]">
            EVENT <span className="text-[#FF8C42]">GALLERY</span>
          </h3>
          <p className="text-xl text-gray-300 leading-relaxed max-w-3xl">
            A visual journey through my events, workshops, and memorable moments from leadership initiatives and community programs.
          </p>
        </motion.div>

        {/* Masonry Grid */}
        <div className="columns-2 md:columns-3 lg:columns-4 gap-6 space-y-6">
          {images.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="relative group overflow-hidden rounded-2xl break-inside-avoid bg-white/5 backdrop-blur-sm border border-white/10"
            >
              {/* Image */}
              <div className="relative w-full aspect-auto">
                <img 
                  src={img.src} 
                  alt={img.alt} 
                  className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
              </div>
              
              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <div className="text-white">
                  <p className="text-sm font-bold uppercase tracking-wide">{img.alt}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
