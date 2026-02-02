"use client"
import { motion } from "framer-motion"
import Education from "@/components/education"
import Skills from "@/components/skills"
import Experience from "@/components/experience"
import WorkTogether from "@/components/work-together"

export default function About() {
  return (
    <section id="about" className="py-20 bg-[#e6e6e6] text-[#1a1a1a] relative overflow-hidden">
      <div className="container mx-auto px-6 lg:px-16">
        
        {/* Header - HELLO */}
        <div className="flex items-center justify-center lg:justify-start mb-12">
            <span className="text-yellow-400 text-6xl mr-4">"</span>
            <h2 className="text-6xl font-black uppercase tracking-wider">Hello.</h2>
        </div>

        <div className="grid lg:grid-cols-12 gap-12">
          
          {/* Left Side: Photo (Mobile: Top, Desktop: Left Col 4) */}
          <div className="lg:col-span-4 flex items-start justify-center">
            <div className="relative w-full max-w-sm sticky top-24">
                <div className="absolute inset-0 bg-yellow-400 rounded-[2rem] transform translate-x-4 translate-y-4"></div>
                <img 
                    src="/surya-founder.jpg" 
                    alt="Bala Surya" 
                    className="relative w-full h-[450px] object-cover rounded-[2rem] grayscale z-10 shadow-xl"
                />
            </div>
          </div>

          {/* Right Side: Content (Desktop: Col 8) */}
          <div className="lg:col-span-8 space-y-12">
             
             {/* Bio */}
             <motion.div
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
             >
                 <p className="text-xl font-medium leading-relaxed mb-6">
                    I'm <span className="font-bold">Bala Surya</span>, a passionate software developer & entrepreneur with over 2 years of experience.
                    I love building web applications that don't just work well — they feel great to use.
                    From full-stack development to immersive experiences, I enjoy bringing ideas to life.
                 </p>
                 <p className="text-gray-600">
                    I also explore photography and leadership to add more depth to my work.
                    For me, coding is all about connecting innovative ideas with people in a creative way.
                 </p>
             </motion.div>

             {/* Education & Skills Grid */}
             <div className="grid md:grid-cols-2 gap-12">
                <Education />
                <Skills />
             </div>

             {/* Experience */}
             <Experience />

          </div>
        </div>

        {/* Contact Strip */}
        <WorkTogether />

      </div>
    </section>
  )
}
