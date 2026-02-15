"use client"
import { motion } from "framer-motion"
import { ArrowLeft } from "lucide-react"

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
    <section className="py-20 bg-[#e6e6e6] text-[#1a1a1a] relative overflow-hidden">
      
       {/* Background Elements */}
       <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-yellow-400 rounded-bl-full z-0 opacity-10" />
       <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-gray-200 rounded-tr-full z-0" />

      <div className="w-[90%] mx-auto px-6 lg:px-16 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row items-center justify-between mb-16 gap-8">
            <motion.div 
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                className="flex flex-col items-start"
            >
                <div className="relative inline-block">
                    <div className="absolute inset-0 bg-yellow-400 transform rotate-1 rounded-lg translate-y-2"></div>
                    <h1 className="relative text-5xl md:text-7xl font-black uppercase tracking-tighter text-black px-6 py-2 bg-white border-4 border-black rounded-lg transform -rotate-1">
                        Gallery
                    </h1>
                </div>
            </motion.div>
            
            <motion.p 
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="text-xl font-medium text-gray-500 max-w-md text-center md:text-right"
            >
                A visual journey through my events, workshops, and memorable moments.
            </motion.p>
        </div>

        {/* Masonry Grid with CSS Columns - Smaller Images */}
        <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
            {images.map((img, i) => (
                <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="relative group overflow-hidden rounded-2xl border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 transition-all duration-300 bg-white break-inside-avoid"
                >
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 z-10" />
                    <img 
                        src={img.src} 
                        alt={img.alt} 
                        className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                    />
                    
                    {/* Hover Overlay */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 pointer-events-none">
                        <div className="bg-white border-2 border-black px-4 py-2 rounded-full transform rotate-3 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                            <span className="font-bold text-black text-sm uppercase">View</span>
                        </div>
                    </div>
                </motion.div>
            ))}
        </div>

      </div>
    </section>
  )
}
