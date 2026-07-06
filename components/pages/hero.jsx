"use client"
import { motion } from "framer-motion"
import { CheckCircle } from "lucide-react"
import Image from "next/image"

export default function Hero() {
  return (
    <section className="relative bg-[#E8E4DC] overflow-hidden">
      {/* Main Hero Section */}
      <div className="relative w-full min-h-screen flex items-center justify-center pt-20">
        
        {/* Text Layer - BEHIND photo - Full Width Edge to Edge */}
        <div className="absolute inset-0 z-[1] flex items-center justify-start">
          <div className="w-full pl-[4vw] pr-[4vw]">
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-[12vw] md:text-[11.5vw] lg:text-[11vw] font-black uppercase leading-[0.85] tracking-[-0.03em]"
              style={{ fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, sans-serif' }}
            >
              {/* Line 1: I'M A FOUNDER (with orange background) */}
              <div className="block">
                I'M A 
                <span className="relative inline-block ml-[0.3em]">
                  <span className="relative z-10">FOUNDER</span>
                  {/* Orange rectangle behind FOUNDER */}
                  <motion.div 
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ delay: 0.5, duration: 0.6 }}
                    className="absolute bottom-[12%] left-[-1%] w-[102%] h-[42%] bg-[#FF8C42] origin-left"
                    style={{ zIndex: -1 }}
                  />
                </span>
              </div>
              
              {/* Line 2: DEVELO (outline) + PER AND */}
              <div className="block">
                <span 
                  style={{
                    color: 'transparent',
                    WebkitTextStroke: '2.8px #1a1a1a',
                    WebkitTextFillColor: 'transparent'
                  }}
                >
                  DEVELO
                </span>
                <span className="ml-[-0.02em]">PER AND</span>
              </div>

              {/* Line 3: PROJ (outline) + ECT */}
              <div className="block">
                <span 
                  style={{
                    color: 'transparent',
                    WebkitTextStroke: '2.8px #1a1a1a',
                    WebkitTextFillColor: 'transparent'
                  }}
                >
                  PROJ
                </span>
                <span className="ml-[-0.02em]">ECT</span>
              </div>

              {/* Line 4: COORDIN (with orange) + ATOR */}
              <div className="block">
                <span className="relative inline-block">
                  <span className="relative z-10">COORDIN</span>
                  {/* Orange rectangle behind COORDIN */}
                  <motion.div 
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ delay: 0.7, duration: 0.6 }}
                    className="absolute bottom-[12%] left-[-1%] w-[102%] h-[42%] bg-[#FF8C42] origin-left"
                    style={{ zIndex: -1 }}
                  />
                </span>
                <span className="ml-[-0.02em]">ATOR</span>
              </div>
            </motion.h1>
          </div>
        </div>

        {/* Orange Geometric Arrow Shape - MIDDLE layer, left side */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="absolute z-[5] left-[10%] top-1/2 -translate-y-1/2"
        >
          <svg width="300" height="380" viewBox="0 0 300 380" fill="none">
            <path 
              d="M150 40 L250 140 L200 190 L250 240 L150 340 L100 290 L150 240 L100 190 Z" 
              fill="#FF8C42"
              opacity="0.95"
            />
          </svg>
        </motion.div>

        {/* Centered Grayscale Photo - ON TOP of text */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="absolute z-[10] inset-0 flex items-center justify-center"
        >
          <div className="relative w-[450px] h-[82vh] max-h-[750px]">
            <Image 
              src="/red-blazer.png"
              alt="Balasurya S"
              fill
              className="object-contain grayscale"
              priority
            />
          </div>
        </motion.div>

        {/* Circular Orange Badge - TOP layer, bottom center */}
        <motion.div 
          initial={{ opacity: 0, scale: 0, rotate: -180 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ delay: 0.8, type: "spring", stiffness: 200 }}
          className="absolute z-[20] bottom-[10vh] left-1/2 -translate-x-1/2 w-[150px] h-[150px] rounded-full bg-[#FF8C42] flex flex-col items-center justify-center shadow-[0_20px_60px_rgba(255,140,66,0.4)]"
        >
          <div className="text-white text-center">
            <div className="text-6xl font-black leading-none mb-2">2+</div>
            <div className="text-[11px] font-bold uppercase tracking-[0.2em]">YEARS</div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
