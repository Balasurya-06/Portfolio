"use client"
import { useEffect } from "react"
import { motion } from "framer-motion"
import Navbar from "@/components/navbar"
import Hero from "@/components/hero"
import About from "@/components/about"
import Skills from "@/components/skills"
import Projects from "@/components/projects"
import Education from "@/components/education"
import Contact from "@/components/contact"
import Footer from "@/components/footer"
import CustomCursor from "@/components/custom-cursor"
import DynamicBackground from "@/components/dynamic-background"

export default function Home() {
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
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      <CustomCursor />
      <DynamicBackground />

      <div className="relative z-10">
        <Navbar />
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
            <Skills />
          </motion.div>

          <motion.div
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
            <Education />
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={sectionVariants}
          >
            <Contact />
          </motion.div>
        </main>
        <Footer />
      </div>
    </div>
  )
}
