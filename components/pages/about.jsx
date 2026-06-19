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
                        src="/red-blazer.png" 
                        alt="Bala Surya – Founder of Vygron Technology in Paruvai, Palladam, Tirupur" 
                        className="relative w-full h-[300px] lg:h-[450px] object-cover rounded-[2rem] z-10 shadow-xl"
                    />
                </div>

                {/* Download Resume Button */}
                <div className="flex justify-center">
                     <a 
                        href="/Balasurya_cv.pdf" 
                        download="Bala_Surya_Balasurya_cv.pdf"
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
                    I'm <span className="font-bold text-black">Bala Surya</span>, <span className="font-bold text-black">Founder & CEO of Vygron Technology</span>, a Project Leader, and Technology Professional from <span className="font-semibold">Paruvai, Palladam, Tirupur, Tamil Nadu</span>. 
                    I combine <span className="font-semibold">leadership, operations management, and technology expertise</span> to build AI-powered solutions, coordinate large-scale projects, and drive business impact through strategic execution.
                 </p>
                 
                 <p className="text-lg leading-relaxed text-gray-800 mb-6">
                    As the <span className="font-bold text-black">Founder of Vygron Technology</span>, I lead project delivery, manage stakeholder relationships, coordinate cross-functional teams, and oversee operational planning. 
                    My expertise spans <span className="font-semibold">project management, business operations, AI automation, and full-stack development</span> using Next.js, Django, MERN Stack, and modern AI frameworks.
                 </p>

                 <p className="text-lg leading-relaxed text-gray-800">
                    Beyond technology, I've led <span className="font-semibold">4,000+ participant registrations for HackSprint 2.0</span>, coordinated operations for 400+ onsite participants, and served as <span className="font-semibold">IEEE Student Branch Vice Chairperson</span> at Karpagam Academy of Higher Education. 
                    I excel at combining technical depth with leadership, operations, and strategic thinking to create measurable impact.
                 </p>



             </motion.div>


             {/* Education Only */}
             <Education />

          </div>
        </div>

        {/* Skills Section - Full Width Below */}
        <div className="mt-16">
          <Skills />
        </div>

        {/* Experience Section - Full Width */}




      </div>
    </section>
  )
}
