"use client"
import { motion } from "framer-motion"
import { ArrowUpRight, Users, Trophy, Box } from "lucide-react"
import Image from "next/image"

export default function Projects() {
  return (
    <section id="projects" className="relative bg-[#1a1a1a] text-white py-24 px-6">
      <div className="w-[95%] max-w-[1800px] mx-auto">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-xs font-bold text-gray-400 uppercase tracking-[0.3em] mb-6 flex items-center gap-3"
          >
            <span className="w-12 h-0.5 bg-[#FF8C42]"></span>
            PORTFOLIO
          </motion.h2>
          <h3 className="text-5xl md:text-6xl lg:text-7xl font-black mb-6 uppercase tracking-tight leading-[0.9]">
            FEATURED <span className="text-[#FF8C42]">PROJECT</span>
          </h3>
        </motion.div>

        {/* Vygron Main Project Card */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white/5 backdrop-blur-sm rounded-[2.5rem] p-8 md:p-12 mb-16 border border-white/10 hover:bg-white/10 transition-all"
        >
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            {/* Left - Project Image */}
            <div className="relative aspect-video rounded-2xl overflow-hidden bg-white/10 group">
              <Image 
                src="/portfolio.png"
                alt="Vygron Project"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>

            {/* Right - Project Content */}
            <div className="space-y-6">
              {/* Logo */}
              <div className="mb-6">
                <Image 
                  src="/vygron.png"
                  alt="Vygron"
                  width={200}
                  height={70}
                  className="object-contain"
                />
              </div>

              <h4 className="text-4xl font-black uppercase tracking-tight">
                Vygron Technologies
              </h4>
              
              <p className="text-gray-300 text-lg leading-relaxed">
                As Founder & CEO, I lead project delivery, stakeholder management, and cross-functional teams while building AI-powered and software-based solutions. Focus on startup leadership, business operations, and technology innovation.
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-3">
                {["Project Management", "AI Automation", "Web Development", "Business Operations"].map((tag, i) => (
                  <span key={i} className="px-4 py-2 bg-white/10 text-sm font-bold rounded-xl hover:bg-[#FF8C42] hover:text-black transition-all cursor-default">
                    {tag}
                  </span>
                ))}
              </div>

              {/* Role Badge */}
              <div className="inline-block px-6 py-3 bg-[#FF8C42] text-black rounded-full font-black uppercase text-sm">
                Founder & CEO
              </div>

              {/* Visit Button */}
              <a 
                href="https://www.vygron.co.in/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 bg-white text-black rounded-full font-bold hover:bg-[#FF8C42] transition-all mt-4 shadow-lg hover:shadow-xl"
              >
                Visit Website
                <ArrowUpRight className="w-5 h-5" />
              </a>
            </div>
          </div>
        </motion.div>

        {/* Leadership & Community Section */}
        <div className="mb-12">
          <h4 className="text-3xl font-black uppercase mb-8 text-gray-400">Leadership & Community</h4>
        </div>

        {/* 3 Initiative Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          
          {/* HackSprint 2.0 */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10 hover:bg-white/10 transition-all group"
          >
            <div className="w-16 h-16 bg-[#FF8C42] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Trophy className="w-8 h-8 text-white" />
            </div>
            
            <h5 className="text-2xl font-black uppercase mb-3">HackSprint 2.0</h5>
            <p className="text-sm text-gray-400 font-bold mb-4 uppercase">India's Biggest Hackathon</p>
            
            <p className="text-gray-300 leading-relaxed mb-6">
              Orchestrated a 36-hour hackathon with 4,190+ online participants and 400 finalists. Secured Cognizant as technical partner.
            </p>
            
            <div className="text-4xl font-black text-[#FF8C42]">36 Hours</div>
          </motion.div>

          {/* IEEE */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10 hover:bg-white/10 transition-all group"
          >
            <div className="w-16 h-16 bg-blue-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Users className="w-8 h-8 text-white" />
            </div>
            
            <h5 className="text-2xl font-black uppercase mb-3">IEEE Student Branch</h5>
            <p className="text-sm text-gray-400 font-bold mb-4 uppercase">KAHE</p>
            
            <p className="text-gray-300 leading-relaxed mb-6">
              Leading technical workshops and community growth as Vice Chairperson.
            </p>
            
            <div className="text-4xl font-black text-blue-500">Leadership</div>
          </motion.div>

          {/* Metaverse */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10 hover:bg-white/10 transition-all group"
          >
            <div className="w-16 h-16 bg-purple-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Box className="w-8 h-8 text-white" />
            </div>
            
            <h5 className="text-2xl font-black uppercase mb-3">Metaverse Association</h5>
            <p className="text-sm text-gray-400 font-bold mb-4 uppercase">Immersive Tech</p>
            
            <p className="text-gray-300 leading-relaxed mb-6">
              Spearheading AR/VR research and innovation as Metaverse Lead.
            </p>
            
            <div className="text-4xl font-black text-purple-500">Innovation</div>
          </motion.div>

        </div>

      </div>
    </section>
  )
}
