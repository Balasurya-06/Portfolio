"use client"
import { useEffect } from "react"
import { motion } from "framer-motion"
import Hero from "@/components/pages/hero"
import About from "@/components/pages/about"
import KeyAchievements from "@/components/pages/key-achievements"

import Projects from "@/components/pages/projects"
import Contact from "@/components/pages/contact"
import Footer from "@/components/footer"
import CustomCursor from "@/components/custom-cursor"

import HonorsAwards from "@/components/pages/honors-awards"
import OfficialPartners from "@/components/pages/official-partners"
import CareerFit from "@/components/pages/career-fit"
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

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={sectionVariants}
          >
            <KeyAchievements />
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

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={sectionVariants}
          >
            <CareerFit />
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

          {/* Contact Section */}
          <motion.div
            id="contact"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={sectionVariants}
          >
            <Contact />
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
