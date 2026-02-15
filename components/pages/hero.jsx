"use client"
import { motion } from "framer-motion"
import { ArrowRight, Camera, PenTool, Video, Laptop, Mail, Phone, Instagram, Linkedin, Github } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] bg-[#e6e6e6] text-[#1a1a1a] flex flex-col justify-center overflow-hidden pt-20">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-yellow-400 rounded-bl-full z-0 opacity-20" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-gray-200 rounded-tr-full z-0" />
      
      {/* Decorative Circles/Icons */}
      <motion.div 
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute top-20 left-20 text-gray-400 z-10"
      >
        <Camera className="w-12 h-12" />
      </motion.div>
      <motion.div 
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-40 right-1/4 text-gray-400 z-10"
      >
        <Video className="w-10 h-10" />
      </motion.div>

      <div className="w-[90%] mx-auto px-6 lg:px-16 relative z-10 h-full flex flex-col lg:flex-row items-center">
        
        {/* Left Content - Typography */}
        <div className="flex-1 relative z-20 pt-10 lg:pt-0 flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Badge */}
            <div className="absolute -top-8 left-0 bg-yellow-400 text-black font-black text-lg py-2 px-6 rounded-full transform -rotate-2 z-10 shadow-lg border-2 border-black">
              Software Developer
            </div>

            <h1 className="text-[16vw] lg:text-[200px] leading-[0.8] font-black tracking-tighter text-[#2a2a2a] relative uppercase">
              <span className="block">PORTO</span>
              <span className="block pl-10">FOLIO<span className="text-yellow-400">.</span></span>
            </h1>

            <div className="mt-10 flex items-center gap-6">
              <div className="w-16 h-16 rounded-full bg-black text-white flex items-center justify-center hover:scale-110 transition-transform duration-300">
                 <ArrowRight className="w-8 h-8" />
              </div>
              <div>
                  <p className="font-black text-2xl uppercase tracking-wide">Bala Surya</p>
                  <p className="text-gray-500 font-medium">Founder @ Vygron</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Right Content - Image */}
        <div className="flex-1 relative h-full flex items-end justify-end mt-10 lg:mt-0">
          <div className="relative w-full max-w-[500px] aspect-[4/5]">
             {/* Yellow Background Shape */}
             <div className="absolute top-10 right-0 w-3/4 h-3/4 bg-yellow-400 rounded-[3rem] -z-10" />
             <div className="absolute top-20 right-[-20px] w-full h-full border-2 border-gray-400 rounded-[3rem] -z-20" />
             
             {/* Star Badge */}
             <div className="absolute -top-14 -right-14 w-24 h-24 z-20 flex items-center justify-center animate-spin-slow">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full text-yellow-400 drop-shadow-md">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
             </div>

             <motion.img
               src="/surya-founder.jpg"
               alt="Bala Surya – Founder of Vygron Technology in Paruvai, Palladam, Tirupur"
               className="w-full h-full object-cover rounded-[2rem] grayscale hover:grayscale-0 transition-all duration-500"
               initial={{ opacity: 0, y: 50 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.8 }}
             />
          </div>
        </div>

      </div>
      
      {/* Side Text */}
      <div className="hidden lg:block absolute right-10 top-1/2 -translate-y-1/2 rotate-90 origin-right text-xs font-mono text-gray-500 tracking-widest">
        RANDY © 2025
      </div>
    </section>
  )
}
