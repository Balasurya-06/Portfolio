"use client"
import { motion } from "framer-motion"
import { Mail, Phone, Instagram, Linkedin, Github } from "lucide-react"

export default function WorkTogether() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="mt-20 bg-yellow-400 rounded-3xl p-8 lg:p-12 flex flex-col lg:flex-row items-center justify-between gap-8 relative overflow-hidden shadow-xl"
    >
      <div className="absolute right-0 top-0 w-64 h-64 bg-white opacity-10 rounded-full translate-x-1/3 -translate-y-1/3"></div>

      <div className="z-10 text-center lg:text-left">
        <div className="bg-black text-white px-4 py-1 rounded-full text-sm font-bold inline-block mb-6">
          Let's Work Together :
        </div>
        <div className="space-y-4">
          
          {/* Email */}
          <div className="flex items-center gap-4 justify-center lg:justify-start">
            <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center text-white">
              <Mail className="w-5 h-5" />
            </div>
            <a href="mailto:balasurya9597@gmail.com" className="font-bold text-lg hover:underline decoration-2 underline-offset-4">
                balasurya9597@gmail.com
            </a>
          </div>

          {/* Phone */}
          <div className="flex items-center gap-4 justify-center lg:justify-start">
            <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center text-white">
              <Phone className="w-5 h-5" />
            </div>
             <a href="tel:+919597075831" className="font-bold text-lg hover:underline decoration-2 underline-offset-4">
                +91 95970 75831
            </a>
          </div>

           {/* Socials Divider */}
           <div className="w-full h-px bg-black/10 my-4"></div>

           {/* Social Links */}
           <div className="flex items-center gap-3 justify-center lg:justify-start">
                <a 
                    href="https://www.instagram.com/balasurya_06" 
                    target="_blank" 
                    className="w-10 h-10 bg-black rounded-full flex items-center justify-center text-white hover:bg-white hover:text-black transition-colors duration-300"
                >
                    <Instagram className="w-5 h-5" />
                </a>
                <a 
                    href="https://linkedin.com/in/balasurya-s" 
                    target="_blank" 
                    className="w-10 h-10 bg-black rounded-full flex items-center justify-center text-white hover:bg-white hover:text-black transition-colors duration-300"
                >
                    <Linkedin className="w-5 h-5" />
                </a>
                 <a 
                    href="https://github.com/Balasurya-06" 
                    target="_blank" 
                    className="w-10 h-10 bg-black rounded-full flex items-center justify-center text-white hover:bg-white hover:text-black transition-colors duration-300"
                >
                    <Github className="w-5 h-5" />
                </a>
           </div>

        </div>
      </div>

      <div className="bg-white p-4 rounded-xl shadow-lg z-10 transform hover:scale-105 transition-transform duration-300">
        <a href="https://balasurya.me" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-2">
          <img
            src="https://api.qrserver.com/v1/create-qr-code/?size=120x120&data=https://balasurya.me"
            alt="QR Code"
            className="w-28 h-28"
          />
          <span className="text-xs font-bold text-black opacity-60">balasurya.me</span>
        </a>
      </div>
    </motion.div>
  )
}
