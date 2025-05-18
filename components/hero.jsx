"use client"
import { motion } from "framer-motion"
import { ArrowDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import AnimatedText from "@/components/animated-text"
import { WhatsappIcon } from "@/components/social-icons"

export default function Hero() {
  const openWhatsApp = () => {
    const phoneNumber = "919597075831" // Your phone number with country code
    const message = "Hello Bala, I'd like to connect with you!"
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, "_blank")
  }

  const scrollToProjects = () => {
    const element = document.getElementById("projects")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden py-20">
      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="flex flex-col items-center justify-center">
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
            className="mb-8"
          >
            <div className="relative w-40 h-40 rounded-full overflow-hidden border-4 border-purple-500 p-1 bg-gradient-to-r from-purple-500 to-pink-500">
              <img
                src="/surya4.jpg"
                alt="Bala Surya S"
                className="rounded-full w-full h-full object-cover"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-4 inline-block"
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500 text-lg font-medium">
              Hello, I'm
            </span>
          </motion.div>

          <AnimatedText
            text="Bala Surya S"
            className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600"
            delay={0.2}
          />

          <AnimatedText
            text="A passionate developer specializing in Django, React, and Python. Building innovative solutions for real-world problems."
            className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto"
            delay={0.4}
          />

          <motion.div
            className="flex flex-col sm:flex-row justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <Button
              size="lg"
              onClick={scrollToProjects}
              className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white border-none hover-target"
              whileHover={{ scale: 1.05 }}
            >
              View My Work
            </Button>

            <Button
              size="lg"
              onClick={openWhatsApp}
              className="bg-green-600 hover:bg-green-700 text-white border-none hover-target flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
            >
              <WhatsappIcon className="h-5 w-5" />
              Get in Touch
            </Button>
          </motion.div>

          {/* Social Links */}
          <motion.div
            className="flex justify-center gap-4 mt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1 }}
          >
            <SocialButton href="https://github.com/balasurya" icon="github" label="GitHub" delay={0} />
            <SocialButton href="https://linkedin.com/in/balasurya" icon="linkedin" label="LinkedIn" delay={0.1} />
          </motion.div>
        </div>
      </div>

      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.5,
          delay: 1.2,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
          repeatDelay: 0.5,
        }}
      >
        <ArrowDown className="h-8 w-8 text-purple-400 hover-target" />
      </motion.div>
    </section>
  )
}

function SocialButton({ href, icon, label, delay = 0 }) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="p-3 rounded-full bg-gray-800 hover:bg-gray-700 text-white hover:text-purple-400 transition-all duration-300 hover-target"
      whileHover={{ y: -5, scale: 1.1 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay }}
    >
      {icon === "github" && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-6 w-6"
        >
          <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
        </svg>
      )}
      {icon === "linkedin" && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-6 w-6"
        >
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
          <rect x="2" y="9" width="4" height="12"></rect>
          <circle cx="4" cy="4" r="2"></circle>
        </svg>
      )}
      <span className="sr-only">{label}</span>
    </motion.a>
  )
}
