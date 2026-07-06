"use client"
import { motion } from "framer-motion"
import { Mail, Linkedin, Github, CheckCircle } from "lucide-react"
import Image from "next/image"

export default function About() {
  return (
    <section id="about" className="relative bg-[#1a1a1a] text-white py-24 px-6">
      <div className="w-[95%] max-w-[1800px] mx-auto">
        
        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-20 items-center mb-20">
          
          {/* Left - Photo with decorative element */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative w-full max-w-lg mx-auto lg:mx-0">
              <div className="relative aspect-[3/4] rounded-[2.5rem] overflow-hidden shadow-2xl">
                <Image 
                  src="/red-blazer.png"
                  alt="Balasurya S"
                  fill
                  className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
                />
              </div>
              
              {/* Decorative corner accents */}
              <div className="absolute -top-8 -right-8 w-16 h-16">
                <div className="absolute top-0 right-0 w-16 h-1.5 bg-[#FF8C42] rounded-full"></div>
                <div className="absolute top-0 right-0 w-1.5 h-16 bg-[#FF8C42] rounded-full"></div>
              </div>
              <div className="absolute -bottom-8 -left-8 w-16 h-16">
                <div className="absolute bottom-0 left-0 w-16 h-1.5 bg-[#FF8C42] rounded-full"></div>
                <div className="absolute bottom-0 left-0 w-1.5 h-16 bg-[#FF8C42] rounded-full"></div>
              </div>
            </div>
          </motion.div>

          {/* Right - Text & Stats */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-10"
          >
            <div>
              <motion.h2 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="text-xs font-bold text-gray-400 uppercase tracking-[0.3em] mb-6 flex items-center gap-3"
              >
                <span className="w-12 h-0.5 bg-[#FF8C42]"></span>
                HELLO
              </motion.h2>
              <h3 className="text-5xl md:text-6xl lg:text-7xl font-black mb-8 uppercase tracking-tight leading-[0.9]">
                I'M <span className="text-[#FF8C42]">BALASURYA</span>
              </h3>
            </div>
            
            <p className="text-gray-300 text-xl leading-relaxed max-w-2xl">
              Founder & CEO of Vygron Technologies. Final Year Computer Science student dedicated to building AI-powered solutions, leading teams, and managing operations. I transform ideas into impactful products through technology, leadership, and strategic execution.
            </p>

            {/* Stats with Check Icons */}
            <div className="space-y-8 pt-6">
              {[
                { number: "4190+", label: "Participants Managed" },
                { number: "400+", label: "Finalists Coordinated" },
                { number: "12K+", label: "Platform Activities" }
              ].map((stat, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-5 group"
                >
                  <div className="flex-shrink-0 mt-2">
                    <CheckCircle className="w-7 h-7 text-[#FF8C42] group-hover:scale-110 transition-transform" />
                  </div>
                  <div>
                    <div className="text-5xl font-black text-white mb-2 group-hover:text-[#FF8C42] transition-colors">{stat.number}</div>
                    <div className="text-sm text-gray-400 font-bold uppercase tracking-wide">{stat.label}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Experience, Education, Contact Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          
          {/* Experience Card */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 hover:bg-white/10 transition-all border border-white/10"
          >
            <h3 className="text-2xl font-black uppercase mb-8 text-[#FF8C42]">Experience</h3>

            <div className="space-y-8">
              <div>
                <h4 className="font-black text-xl mb-2">Founder & CEO</h4>
                <p className="text-[#FF8C42] font-bold mb-1">Vygron Technologies</p>
                <p className="text-sm text-gray-400 uppercase tracking-wide">Aug 2024 - Present</p>
              </div>

              <div className="border-t border-white/10 pt-8">
                <h4 className="font-black text-xl mb-2">Project Leader</h4>
                <p className="text-[#FF8C42] font-bold mb-2">HackSprint 2.0</p>
                <p className="text-sm text-gray-300 leading-relaxed mb-2">
                  Led 4-member team, 4,190+ participants, 400 finalists, Cognizant partnership.
                </p>
                <p className="text-xs text-gray-400 uppercase tracking-wide">Metaverse Association</p>
              </div>

              <div className="border-t border-white/10 pt-8">
                <h4 className="font-black text-xl mb-2">Vice Chairperson</h4>
                <p className="text-[#FF8C42] font-bold mb-1">IEEE Student Branch</p>
                <p className="text-sm text-gray-400 uppercase tracking-wide">KAHE • 2023 - Present</p>
              </div>
            </div>
          </motion.div>

          {/* Education & Leadership Card */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 hover:bg-white/10 transition-all border border-white/10"
          >
            <h3 className="text-2xl font-black uppercase mb-8 text-[#FF8C42]">Education</h3>

            <div className="space-y-8">
              <div>
                <h4 className="font-black text-xl mb-2">B.Tech Computer Science</h4>
                <p className="text-[#FF8C42] font-bold mb-1">Karpagam Academy</p>
                <p className="text-sm text-gray-400 uppercase tracking-wide">2023 - 2027</p>
              </div>

              <div className="border-t border-white/10 pt-8">
                <h3 className="text-2xl font-black uppercase mb-6 text-[#FF8C42]">Leadership</h3>
                <div>
                  <h4 className="font-black text-xl mb-2">Leading Member</h4>
                  <p className="text-[#FF8C42] font-bold mb-1">Metaverse Association</p>
                  <p className="text-sm text-gray-400 uppercase tracking-wide">1.5+ Years</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact & Skills Card */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 hover:bg-white/10 transition-all border border-white/10"
          >
            <h3 className="text-2xl font-black uppercase mb-8 text-[#FF8C42]">Contact</h3>

            <div className="space-y-4 mb-10">
              <a href="https://www.linkedin.com/in/balasurya-s-765798289" target="_blank" rel="noreferrer" 
                className="flex items-center gap-3 p-4 bg-[#0077B5] rounded-2xl hover:scale-105 transition-all shadow-lg">
                <Linkedin className="w-6 h-6 fill-current" />
                <span className="text-sm font-bold">LinkedIn</span>
              </a>
              
              <a href="mailto:balasurya@vygron.com" 
                className="flex items-center gap-3 p-4 bg-[#FF8C42] rounded-2xl hover:scale-105 transition-all shadow-lg">
                <Mail className="w-6 h-6" />
                <span className="text-sm font-bold">Email</span>
              </a>
              
              <a href="https://github.com/balasurya-06" target="_blank" rel="noreferrer" 
                className="flex items-center gap-3 p-4 bg-white text-black rounded-2xl hover:scale-105 transition-all shadow-lg">
                <Github className="w-6 h-6 fill-current" />
                <span className="text-sm font-bold">GitHub</span>
              </a>
            </div>

            <div className="border-t border-white/10 pt-8">
              <h3 className="text-2xl font-black uppercase mb-6 text-[#FF8C42]">Tech Stack</h3>

              <div className="flex flex-wrap gap-3">
                {["React", "Next.js", "Node.js", "Python", "Firebase"].map((tech, i) => (
                  <span key={i} className="px-4 py-2 bg-white/10 text-sm font-bold rounded-xl hover:bg-[#FF8C42] hover:text-black transition-all cursor-default">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
