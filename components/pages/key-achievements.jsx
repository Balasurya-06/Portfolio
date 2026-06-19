"use client"
import { motion } from "framer-motion"
import { Users, Calendar, Presentation, Trophy, Crown, Award } from "lucide-react"

export default function KeyAchievements() {
  const achievements = [
    {
      number: "4,000+",
      title: "Applicants Managed",
      description: "Successfully coordinated registration, communication, and operational workflows for HackSprint 2.0 participants.",
      icon: Users,
      color: "bg-blue-400"
    },
    {
      number: "400+",
      title: "Onsite Participants Coordinated",
      description: "Managed logistics, scheduling, and execution for final-round hackathon participants.",
      icon: Calendar,
      color: "bg-green-400"
    },
    {
      number: "5+",
      title: "Technical Workshops Organized",
      description: "Planned and executed technical workshops focused on innovation, technology, and skill development.",
      icon: Presentation,
      color: "bg-purple-400"
    },
    {
      number: "2",
      title: "Consecutive Symposiums Executed",
      description: "Coordinated event operations, participant engagement, and organizational activities across two years.",
      icon: Trophy,
      color: "bg-yellow-400"
    },
    {
      number: "1.5+",
      title: "Years as Metaverse Lead",
      description: "Led student teams, coordinated initiatives, and managed operations within the Metaverse Students Association.",
      icon: Crown,
      color: "bg-pink-400"
    },
    {
      number: "VP",
      title: "IEEE Student Branch Vice Chairperson",
      description: "Supported chapter operations, event planning, leadership activities, and community engagement.",
      icon: Award,
      color: "bg-orange-400"
    }
  ]

  return (
    <section id="key-achievements" className="py-20 bg-white text-[#1a1a1a] relative overflow-hidden">
      <div className="w-[90%] mx-auto px-6 lg:px-16 relative z-10">
        
        {/* Section Header */}
        <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col items-center justify-center mb-12 text-center"
        >
             <div className="relative inline-block mb-6">
                <div className="absolute inset-0 bg-yellow-400 transform -rotate-1 rounded-lg translate-y-2"></div>
                <h2 className="relative text-4xl md:text-6xl font-black uppercase tracking-tighter text-black px-6 py-2 bg-white border-4 border-black rounded-lg transform rotate-1">
                    Leadership & Impact
                </h2>
            </div>
            <p className="text-base md:text-lg font-medium text-gray-600 max-w-4xl leading-relaxed px-4">
                Beyond technology, I have led teams, managed large-scale events, secured industry partnerships, and coordinated operations that created measurable impact across student communities, startups, and innovation initiatives.
            </p>
        </motion.div>

        {/* Achievements Grid */}
        <div className="w-[85%] mx-auto grid md:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => (
                <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    className="bg-white border-4 border-black rounded-[2rem] p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-2 transition-all flex flex-col h-full"
                >
                    {/* Icon */}
                    <div className={`w-16 h-16 ${achievement.color} border-2 border-black rounded-2xl flex items-center justify-center mb-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]`}>
                        <achievement.icon className="w-8 h-8 text-black" />
                    </div>
                    
                    {/* Title & Number */}
                    <div className="mb-4">
                        <div className="inline-block px-3 py-1 bg-black text-white text-xs font-bold uppercase rounded-full mb-3">
                            Achievement
                        </div>
                        <h3 className="text-2xl font-black uppercase leading-tight mb-1">{achievement.title}</h3>
                        <p className="text-4xl font-black text-yellow-400">{achievement.number}</p>
                    </div>
                    
                    {/* Divider */}
                    <div className="border-t-2 border-dashed border-gray-300 my-4"></div>
                    
                    {/* Description */}
                    <p className="text-gray-700 font-medium leading-relaxed mb-6 flex-1">
                        {achievement.description}
                    </p>

                    {/* Bottom Badge */}
                    <div className="bg-gray-100 border-2 border-black rounded-xl p-3 text-center">
                        <span className="text-sm font-black uppercase tracking-wide">Leadership Impact</span>
                    </div>
                </motion.div>
            ))}
        </div>

        {/* Bottom Accent */}
        <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="mt-12 text-center"
        >
            <div className="inline-block px-6 py-3 bg-black text-white border-4 border-black rounded-full font-bold uppercase tracking-wider text-sm shadow-[4px_4px_0px_0px_rgba(250,204,21,1)]">
                Founder • Project Leader • AI Builder
            </div>
        </motion.div>

      </div>
    </section>
  )
}
