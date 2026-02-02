"use client"
import { motion } from "framer-motion"
import { Briefcase, Calendar } from "lucide-react"

export default function Experience() {
  const experiences = [
    {
      role: "Founder & CEO",
      company: "Vygron",
      period: "Present",
      desc: "Leading innovative software solutions and product development.",
      color: "bg-black",
      textColor: "text-white"
    },
    {
      role: "Vice Chair Person",
      company: "IEEE Students Branch KAHE",
      period: "Present",
      desc: "Leading student activities and technical initiatives.",
      color: "bg-blue-600",
      textColor: "text-white"
    },
    {
      role: "Lead Organizer",
      company: "HackSprint 2.0",
      period: "2026",
      desc: "Organized India's biggest 36hrs National Level Hackathon.",
      color: "bg-yellow-400",
      textColor: "text-black"
    },
    {
      role: "Metaverse Lead",
      company: "Metaverse Association",
      period: "2023 - Present",
      desc: "Spearheading immersive technology projects and research.",
      color: "bg-purple-500",
      textColor: "text-white"
    },
  ]

  return (
    <div className="w-full">
      <h3 className="text-2xl font-black bg-yellow-400 border-2 border-black inline-block px-4 py-1 mb-8 transform -rotate-2">
        Working Experience
      </h3>
      <div className="grid md:grid-cols-2 gap-6">
        {experiences.map((exp, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="group bg-white p-6 rounded-2xl border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 transition-all duration-300"
          >
             <div className="flex justify-between items-start mb-4">
                <div className={`p-3 rounded-xl border-2 border-black ${exp.color} ${exp.textColor}`}>
                    <Briefcase className="w-5 h-5" />
                </div>
                <div className="flex items-center gap-1.5 px-3 py-1 bg-gray-100 border border-black rounded-full">
                    <Calendar className="w-3 h-3 text-gray-600" />
                    <span className="text-xs font-bold text-black">{exp.period}</span>
                </div>
             </div>

            <h4 className="font-black text-xl mb-1 leading-tight">{exp.role}</h4>
            <p className="font-bold text-gray-500 mb-3 text-sm uppercase tracking-wide">
              {exp.company}
            </p>
            
            <div className="w-full h-px bg-gray-200 my-3"></div>
            
            <p className="text-sm font-medium text-black leading-relaxed">
                {exp.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
