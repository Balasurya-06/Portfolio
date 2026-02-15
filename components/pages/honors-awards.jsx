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
      color: "bg-yellow-400",
      textColor: "text-black"
    },
    {
      title: "Hackspora",
      subtitle: "3rd Place",
      description: "Developed an AI-powered Automatic Reels Creation system.",
      icon: Award,
      color: "bg-black",
      textColor: "text-white"
    }
  ]

  return (
    <section className="py-20 bg-[#e6e6e6] text-[#1a1a1a] relative overflow-hidden">
      <div className="w-[90%] mx-auto px-6 lg:px-16 relative z-10">
        
        {/* Section Header */}
        <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col items-center justify-center mb-16"
        >
            <div className="relative inline-block mb-4">
                <div className="absolute inset-0 bg-yellow-400 transform rotate-2 rounded-lg translate-y-2"></div>
                <h2 className="relative text-4xl md:text-6xl font-black uppercase tracking-tighter text-black px-6 py-2 bg-white border-4 border-black rounded-lg transform -rotate-2">
                    Honors & Awards
                </h2>
            </div>
            <p className="font-bold text-gray-500 uppercase tracking-widest mt-4">Recognition & Achievements</p>
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
                    className="group bg-white border-4 border-black rounded-[2rem] p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-2 transition-all duration-300 flex flex-col items-start relative overflow-hidden"
                >
                    {/* Decorative Background Icon */}
                    <award.icon className="absolute -right-6 -bottom-6 w-32 h-32 text-gray-100 transform rotate-12 group-hover:rotate-0 transition-transform duration-500" />
                    
                    <div className="relative z-10 w-full">
                        <div className="flex justify-between items-start mb-6">
                            <div className={`w-14 h-14 ${award.color} ${award.textColor} border-2 border-black rounded-xl flex items-center justify-center shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]`}>
                                <award.icon className="w-8 h-8" />
                            </div>
                            <div className="flex items-center gap-2 px-4 py-1 bg-yellow-400 text-black rounded-full border-2 border-black">
                                <Star className="w-3 h-3 text-black fill-black" />
                                <span className="text-xs font-bold uppercase tracking-wider">{award.subtitle}</span>
                            </div>
                        </div>

                        <h3 className="text-2xl font-black uppercase leading-tight mb-3">
                            {award.title}
                        </h3>
                        
                        <div className="w-12 h-1 bg-yellow-400 mb-4"></div>

                        <p className="text-lg font-medium text-gray-700 leading-relaxed">
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
