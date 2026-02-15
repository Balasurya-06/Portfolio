"use client"
import { useEffect } from "react"
import { motion } from "framer-motion"
import Hero from "@/components/pages/hero"
import About from "@/components/pages/about"

import Projects from "@/components/pages/projects"
import Contact from "@/components/pages/contact"
import Footer from "@/components/footer"
import CustomCursor from "@/components/custom-cursor"

import WorkTogether from "@/components/pages/work-together"
import HonorsAwards from "@/components/pages/honors-awards"
import OfficialPartners from "@/components/pages/official-partners"
import GalleryPage from "@/components/pages/gallery"

export default function HomePage() {
  // Disable default cursor
  useEffect(() => {
    document.body.classList.add("custom-cursor")
    return () => {
      document.body.classList.remove("custom-cursor")
    }
  }, [])

  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeInOut",
      },
    },
  }

  return (
    <div className="min-h-screen bg-[#e6e6e6] text-[#1a1a1a] relative overflow-hidden">
      <CustomCursor />
      
      {/* 
        NOTE: Aurora background removed as it clashes with the clean/grey 
        aesthetic of the reference image.
      */}

      <div className="relative z-10">
        <main>
          <Hero />

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={sectionVariants}
          >
            <About />
          </motion.div>



          {/* Existing Sections below the main "Image Match" content */}
          <motion.div
            id="projects"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={sectionVariants}
          >
            <Projects />
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={sectionVariants}
          >
            <HonorsAwards />
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={sectionVariants}
          >
            <OfficialPartners />
          </motion.div>

          {/* New Gallery Section directly in Home Page */}
           <motion.div
            id="gallery"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={sectionVariants}
          >
            <GalleryPage />
          </motion.div>

           <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={sectionVariants}
            className="w-[90%] mx-auto px-6 lg:px-16 mb-20 relative z-20"
          >
            <WorkTogether />
          </motion.div>

        </main>
        
        {/* Footer might need restyling or just keep it */}
        <div className="bg-[#1a1a1a] text-white">
             <Footer />
        </div>
      </div>
    </div>
  )
}
