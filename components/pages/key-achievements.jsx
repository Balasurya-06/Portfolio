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
      color: "bg-blue-500"
    },
    {
      number: "400+",
      title: "Onsite Participants Coordinated",
      description: "Managed logistics, scheduling, and execution for final-round hackathon participants.",
      icon: Calendar,
      color: "bg-green-500"
    },
    {
      number: "5+",
      title: "Technical Workshops Organized",
      description: "Planned and executed technical workshops focused on innovation, technology, and skill development.",
      icon: Presentation,
      color: "bg-purple-500"
    },
    {
      number: "2",
      title: "Consecutive Symposiums Executed",
      description: "Coordinated event operations, participant engagement, and organizational activities across two years.",
      icon: Trophy,
      color: "bg-yellow-500"
    },
    {
      number: "1.5+",
      title: "Years as Metaverse Lead",
      description: "Led student teams, coordinated initiatives, and managed operations within the Metaverse Students Association.",
      icon: Crown,
      color: "bg-pink-500"
    },
    {
      number: "VP",
      title: "IEEE Student Branch Vice Chairperson",
      description: "Supported chapter operations, event planning, leadership activities, and community engagement.",
      icon: Award,
      color: "bg-[#FF8C42]"
    }
  ]

  return (
    <section id="key-achievements" className="relative bg-[#E8E4DC] text-[#1a1a1a] py-24 px-6">
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
            ACHIEVEMENTS
          </motion.h2>
          <h3 className="text-5xl md:text-6xl lg:text-7xl font-black mb-6 uppercase tracking-tight leading-[0.9]">
            LEADERSHIP & <span className="text-[#FF8C42]">IMPACT</span>
          </h3>
          <p className="text-xl text-gray-600 leading-relaxed max-w-3xl">
            Beyond technology, I have led teams, managed large-scale events, secured industry partnerships, and coordinated operations that created measurable impact across student communities, startups, and innovation initiatives.
          </p>
        </motion.div>

        {/* Achievements Grid - 3 Columns */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all group"
            >
              {/* Icon */}
              <div className={`w-16 h-16 ${achievement.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                <achievement.icon className="w-8 h-8 text-white" />
              </div>
              
              {/* Number */}
              <div className="text-5xl font-black mb-3 group-hover:text-[#FF8C42] transition-colors">
                {achievement.number}
              </div>
              
              {/* Title */}
              <h4 className="text-xl font-black uppercase mb-4 leading-tight">
                {achievement.title}
              </h4>
              
              {/* Description */}
              <p className="text-gray-600 leading-relaxed text-sm">
                {achievement.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Bottom Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="inline-flex items-center gap-3 px-8 py-4 bg-[#1a1a1a] text-white rounded-full font-bold uppercase tracking-wider text-sm shadow-xl">
            <span className="w-2 h-2 bg-[#FF8C42] rounded-full animate-pulse"></span>
            Founder • Project Leader • AI Builder
          </div>
        </motion.div>

      </div>
    </section>
  )
}
