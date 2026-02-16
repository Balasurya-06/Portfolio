"use client"
import { motion } from "framer-motion"
import { Download } from "lucide-react"
import Education from "@/components/pages/education"
import Skills from "@/components/pages/skills"

import WorkTogether from "@/components/pages/work-together"

export default function About() {
  return (
    <section id="about" className="py-20 bg-[#e6e6e6] text-[#1a1a1a] relative overflow-hidden">
      <div className="w-[90%] mx-auto px-6 lg:px-16">
        
        {/* Header - HELLO */}
        <div className="flex items-center justify-center lg:justify-start mb-12">
            <span className="text-yellow-400 text-6xl mr-4">"</span>
            <h2 className="text-4xl lg:text-6xl font-black uppercase tracking-wider">Hello.</h2>
        </div>

        <div className="grid lg:grid-cols-12 gap-12">
          
          {/* Left Side: Photo & Resume (Mobile: Top, Desktop: Left Col 4) */}
          <div className="lg:col-span-4 flex justify-center h-fit">
            <div className="lg:sticky top-24 w-full max-w-sm space-y-10">
                
                {/* Photo */}
                <div className="relative block">
                    <div className="absolute inset-0 bg-yellow-400 rounded-[2rem] transform translate-x-4 translate-y-4"></div>
                    <img 
                        src="/surya-founder.jpg" 
                        alt="Bala Surya – Founder of Vygron Technology in Paruvai, Palladam, Tirupur" 
                        className="relative w-full h-[300px] lg:h-[450px] object-cover rounded-[2rem] grayscale z-10 shadow-xl"
                    />
                </div>

                {/* Download Resume Button */}
                <div className="flex justify-center">
                     <a 
                        href="/resume.pdf" 
                        download="Bala_Surya_Resume.pdf"
                        className="inline-flex items-center gap-3 bg-yellow-400 text-black border-2 border-black px-8 py-3 font-black text-xl uppercase tracking-wider transform -rotate-2 hover:rotate-0 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all duration-300"
                    >
                        <Download className="w-6 h-6" />
                        Download Resume
                    </a>
                </div>

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
                 <p className="text-lg leading-relaxed text-gray-800 mb-6">
                    I'm <span className="font-bold text-black">Bala Surya</span>, a passionate Full Stack Developer, Hackathon Leader, and IEEE Vice Chairperson from <span className="font-semibold">Paruvai, Palladam, Tirupur, Tamil Nadu</span>. 
                    I specialize in building production-ready solutions using <span className="font-semibold">Next.js, MERN Stack, and Agentic AI</span>. 
                    Currently, I lead <span className="font-bold text-black">Vygron Technology</span>, focusing on AI-powered automation and event-tech platforms tailored for startups and institutions in South India.
                 </p>
                 
                 <p className="text-lg leading-relaxed text-gray-800 mb-6">
                    As the founder of <span className="font-bold text-black">Vygron Technology</span> (based in Paruvai, Palladam), 
                    I deliver scalable web applications and AI prototypes. My expertise spans the complete product lifecycle—from UX-focused frontends to robust Python/Node.js backends.
                    My daily stack includes Next.js, Docker, Redis, and modern AI frameworks like TensorFlow and PyTorch.
                 </p>

                 <p className="text-lg leading-relaxed text-gray-800">
                    Beyond code, I actively contribute to the tech community as the <span className="font-semibold">IEEE Student Branch Vice Chairperson</span> at Karpagam Academy of Higher Education. 
                    I’ve led events like <span className="font-semibold">HackSprint 2.0</span>, bridging the gap between technical depth and community leadership.
                 </p>



             </motion.div>


             {/* Education & Skills Grid */}
             <div className="grid md:grid-cols-2 gap-12">
                <Education />
                <Skills />
             </div>

          </div>
        </div>

        {/* Experience Section - Full Width */}




      </div>
    </section>
  )
}
