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
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden py-12 sm:py-16 lg:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center max-w-7xl mx-auto">
          {/* Left Side - Image and Name */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center lg:items-start text-center lg:text-left order-1 lg:order-1"
          >
            {/* Profile Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, type: "spring", stiffness: 100, delay: 0.2 }}
              className="mb-6 lg:mb-8"
            >
              <div className="relative w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 lg:w-72 lg:h-72 xl:w-80 xl:h-80 rounded-full overflow-hidden border-4 border-purple-500 p-1 bg-gradient-to-r  mx-auto lg:mx-0">
                <img
                  src="/surya4.jpg"
                  alt="Bala Surya S"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mb-3 sm:mb-4"
            >
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500 text-sm sm:text-base lg:text-lg font-medium">
                Hello, I'm
              </span>
            </motion.div>

            <AnimatedText
              text="Bala Surya S"
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600"
              delay={0.6}
            />

            {/* Social Links */}
            <motion.div
              className="flex justify-center lg:justify-start gap-3 sm:gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1 }}
            >
              <SocialButton href="https://github.com/balasurya" icon="github" label="GitHub" delay={0} />
              <SocialButton href="https://linkedin.com/in/balasurya" icon="linkedin" label="LinkedIn" delay={0.1} />
            </motion.div>
          </motion.div>

          {/* Right Side - Description and Actions */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col justify-center text-center lg:text-left order-2 lg:order-2 mt-8 lg:mt-0"
          >
            <AnimatedText
              text="Full Stack Developer"
              className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold mb-4 lg:mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500"
              delay={0.8}
            />

            <AnimatedText
              text="I'm Bala Surya, a full-stack developer and the Co-Founder, CFO, and CMO of Xyndrix Software Company.
Passionate about building smart, scalable solutions using React, Django, and Python.
Also a proud member of the Metaverse Students Association at Karpagam Academy of Higher Education.
Tech enthusiast, team leader, and always exploring new ways to innovate."
              className="text-sm sm:text-base lg:text-lg xl:text-xl text-gray-300 mb-6 lg:mb-8 leading-relaxed max-w-lg mx-auto lg:mx-0"
              delay={1}
            />

            <motion.div
              className="space-y-2 sm:space-y-3 lg:space-y-4 mb-6 lg:mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.2 }}
            >
              <div className="flex items-center justify-center lg:justify-start gap-2 sm:gap-3">
                <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-purple-500 rounded-full flex-shrink-0"></span>
                <span className="text-gray-300 text-xs sm:text-sm lg:text-base">Django & Python Backend Development</span>
              </div>
              <div className="flex items-center justify-center lg:justify-start gap-2 sm:gap-3">
                <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-blue-500 rounded-full flex-shrink-0"></span>
                <span className="text-gray-300 text-xs sm:text-sm lg:text-base">React & Frontend Technologies</span>
              </div>
              <div className="flex items-center justify-center lg:justify-start gap-2 sm:gap-3">
                <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-green-500 rounded-full flex-shrink-0"></span>
                <span className="text-gray-300 text-xs sm:text-sm lg:text-base">Machine Learning & Data Analysis</span>
              </div>
            </motion.div>

            <motion.div
              className="flex flex-col sm:flex-row justify-center lg:justify-start gap-3 lg:gap-4 max-w-md mx-auto lg:mx-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.4 }}
            >
              <Button
                size="lg"
                onClick={scrollToProjects}
                className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white border-none hover-target py-2.5 sm:py-3 px-4 sm:px-6 text-sm lg:text-base w-full sm:w-auto"
                whileHover={{ scale: 1.05 }}
              >
                View My Work
              </Button>

              <Button
                size="lg"
                onClick={openWhatsApp}
                className="bg-green-600 hover:bg-green-700 text-white border-none hover-target flex items-center justify-center gap-2 py-2.5 sm:py-3 px-4 sm:px-6 text-sm lg:text-base w-full sm:w-auto"
                whileHover={{ scale: 1.05 }}
              >
                <WhatsappIcon className="h-4 w-4 lg:h-5 lg:w-5" />
                Get in Touch
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <motion.div
        className="absolute bottom-6 sm:bottom-10 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.5,
          delay: 1.6,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
          repeatDelay: 0.5,
        }}
      >
        <ArrowDown className="h-5 w-5 sm:h-6 sm:w-6 lg:h-8 lg:w-8 text-purple-400 hover-target" />
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
      className="p-2 sm:p-3 rounded-full bg-gray-800 hover:bg-gray-700 text-white hover:text-purple-400 transition-all duration-300 hover-target"
      whileHover={{ y: -5, scale: 1.1 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay }}
    >
      {icon === "github" && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6"
        >
          <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
        </svg>
      )}
      {icon === "linkedin" && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6"
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