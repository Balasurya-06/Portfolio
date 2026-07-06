"use client"
import { motion } from "framer-motion"
import { Trophy, Award, Star } from "lucide-react"

export default function HonorsAwards() {
  const awards = [
    {
      title: "Void Hackathon Finalist",
      subtitle: "Top 5",
      description: "Built a Multi-Agentic Answer Sheet Evaluation system.",
      icon: Trophy,
      color: "bg-yellow-500"
    },
    {
      title: "Hackspora",
      subtitle: "3rd Place",
      description: "Developed an AI-powered Automatic Reels Creation system.",
      icon: Award,
      color: "bg-[#FF8C42]"
    }
  ]

  return (
    <section className="relative bg-[#E8E4DC] text-[#1a1a1a] py-24 px-6">
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
            className="text-xs font-bold text-gray-500 uppercase tracking-[0.3em] mb-6 flex items-center gap-3"
          >
            <span className="w-12 h-0.5 bg-[#FF8C42]"></span>
            RECOGNITION
          </motion.h2>
          <h3 className="text-5xl md:text-6xl lg:text-7xl font-black mb-6 uppercase tracking-tight leading-[0.9]">
            HONORS & <span className="text-[#FF8C42]">AWARDS</span>
          </h3>
          <p className="text-xl text-gray-600 leading-relaxed max-w-3xl">
            Recognition and achievements in hackathons, competitions, and innovation challenges.
          </p>
        </motion.div>

        {/* Awards Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {awards.map((award, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-white rounded-3xl p-10 shadow-lg hover:shadow-2xl transition-all group relative overflow-hidden"
            >
              {/* Decorative Background Icon */}
              <award.icon className="absolute -right-8 -bottom-8 w-40 h-40 text-gray-50 transform rotate-12 group-hover:rotate-0 transition-transform duration-500" />
              
              <div className="relative z-10">
                {/* Icon & Badge */}
                <div className="flex justify-between items-start mb-8">
                  <div className={`w-16 h-16 ${award.color} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform`}>
                    <award.icon className="w-9 h-9 text-white" />
                  </div>
                  <div className="flex items-center gap-2 px-4 py-2 bg-[#FF8C42] text-white rounded-full">
                    <Star className="w-4 h-4 fill-current" />
                    <span className="text-xs font-bold uppercase tracking-wider">{award.subtitle}</span>
                  </div>
                </div>

                {/* Title */}
                <h4 className="text-3xl font-black uppercase leading-tight mb-4 group-hover:text-[#FF8C42] transition-colors">
                  {award.title}
                </h4>
                
                {/* Divider */}
                <div className="w-16 h-1 bg-[#FF8C42] mb-6"></div>

                {/* Description */}
                <p className="text-lg text-gray-600 leading-relaxed">
                  {award.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
