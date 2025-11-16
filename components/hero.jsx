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

  const scrollToContact = () => {
    const element = document.getElementById("contact")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="container mx-auto px-6 lg:px-16 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center max-w-7xl mx-auto">
          {/* Left Side - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Hello Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <div className="flex items-center gap-4 mb-6">
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white">
                  Hello<span className="text-orange-500">.</span>
                </h1>
              </div>
              
              <div className="relative inline-block">
                <div className="absolute -left-4 top-1/2 w-16 h-0.5 bg-orange-500"></div>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-white mb-2">
                  I'm <span className="font-semibold">Bala Surya</span>
                </h2>
              </div>
            </motion.div>

            {/* Title */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <h3 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
                Software Developer
              </h3>
            </motion.div>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 pt-4"
            >
              <Button
                size="lg"
                onClick={scrollToContact}
                className="bg-orange-500 hover:bg-orange-600 text-white border-none shadow-lg hover:shadow-xl transition-all hover-target px-8 py-6 text-base font-semibold"
              >
                Contact Us
              </Button>

              <Button
                size="lg"
                onClick={() => window.open('/Resume.pdf', '_blank')}
                className="bg-transparent hover:bg-white/10 border-2 border-white text-white hover:border-orange-500 hover:text-orange-500 transition-all hover-target px-8 py-6 text-base font-semibold"
              >
                My resume
              </Button>
            </motion.div>

          </motion.div>

          {/* Right Side - Image with Circle Frame */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative flex items-center justify-center lg:justify-end"
          >
            {/* Decorative Elements */}
            <div className="absolute inset-0 flex items-center justify-center">
              {/* Chevron Left */}
              <motion.div
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-8"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 0.3, x: 0 }}
                transition={{ delay: 0.8, duration: 0.8 }}
              >
                <svg width="100" height="180" viewBox="0 0 100 180" fill="none" className="text-orange-500/30">
                  <path d="M80 20 L20 90 L80 160" stroke="currentColor" strokeWidth="3" fill="none"/>
                </svg>
              </motion.div>
              
              {/* Chevron Right */}
              <motion.div
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-8"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 0.3, x: 0 }}
                transition={{ delay: 0.8, duration: 0.8 }}
              >
                <svg width="100" height="180" viewBox="0 0 100 180" fill="none" className="text-orange-500/30">
                  <path d="M20 20 L80 90 L20 160" stroke="currentColor" strokeWidth="3" fill="none"/>
                </svg>
              </motion.div>
            </div>

            {/* Circle Frame with Image */}
            <div className="relative z-10">
              {/* Rotating Outer Ring */}
              <motion.div
                className="absolute inset-0 rounded-full border-2 border-dashed border-orange-500/30"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                style={{ width: "440px", height: "440px", left: "-20px", top: "-20px" }}
              />

              {/* Pulsing Glow Ring */}
              <motion.div
                className="absolute inset-0 rounded-full"
                animate={{
                  boxShadow: [
                    "0 0 20px rgba(251, 146, 60, 0.3)",
                    "0 0 60px rgba(251, 146, 60, 0.6)",
                    "0 0 20px rgba(251, 146, 60, 0.3)"
                  ]
                }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                style={{ width: "400px", height: "400px" }}
              />

              {/* Orange Circle */}
              <motion.div
                className="absolute inset-0 rounded-full border-8 border-orange-500"
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ delay: 0.5, duration: 0.8, type: "spring", bounce: 0.4 }}
                style={{ width: "400px", height: "400px" }}
              />

              {/* Floating Particles */}
              {[...Array(8)].map((_, i) => {
                const angle = (i * 360) / 8
                const radius = 220
                return (
                  <motion.div
                    key={i}
                    className="absolute w-2 h-2 bg-orange-500 rounded-full"
                    style={{
                      left: `calc(50% + ${Math.cos((angle * Math.PI) / 180) * radius}px)`,
                      top: `calc(50% + ${Math.sin((angle * Math.PI) / 180) * radius}px)`,
                    }}
                    animate={{
                      scale: [1, 1.5, 1],
                      opacity: [0.4, 1, 0.4],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: i * 0.2,
                    }}
                  />
                )
              })}
              
              {/* Profile Image */}
              <motion.div 
                className="relative w-[400px] h-[400px] rounded-full overflow-hidden"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.7, duration: 0.6 }}
                whileHover={{ scale: 1.05 }}
              >
                <motion.img
                  src="/surya4.png"
                  alt="Bala Surya S"
                  className="w-full h-full object-cover"
                  initial={{ scale: 1.3 }}
                  animate={{ scale: 1.1 }}
                  transition={{ delay: 0.9, duration: 0.8 }}
                  whileHover={{ scale: 1.15 }}
                />
                
                {/* Gradient Overlay */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-orange-500/20 to-transparent"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1, duration: 0.5 }}
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{
          opacity: { delay: 1, duration: 0.5 },
          y: { duration: 2, repeat: Infinity, ease: "easeInOut" }
        }}
      >
        <ArrowDown className="h-6 w-6 text-orange-500" />
      </motion.div>
    </section>
  )
}

