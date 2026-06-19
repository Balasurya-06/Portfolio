"use client"
import { motion } from "framer-motion"
import { Users, Target, Briefcase, TrendingUp, Lightbulb, CheckCircle, Layers, MessageSquare } from "lucide-react"

// Simple SVG Icons for Technical Skills
const Icons = {
  React: (props) => (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <circle cx="12" cy="12" r="2" />
      <g stroke="currentColor" strokeWidth="1.5" fill="none">
        <ellipse rx="10" ry="4.5" cx="12" cy="12" />
        <ellipse rx="10" ry="4.5" cx="12" cy="12" transform="rotate(60 12 12)" />
        <ellipse rx="10" ry="4.5" cx="12" cy="12" transform="rotate(120 12 12)" />
      </g>
    </svg>
  ),
  Next: (props) => (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
       <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.65 14.85L10 10.2V16h-2V8h2.15l6.5 6.5V8H18v8.85h-1.35z" />
    </svg>
  ),
  Node: (props) => (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
       <path d="M12 2L2 7v10l10 5 10-5V7L12 2zm0 2.2L19.5 8 12 11.5 4.5 8 12 4.2zM4 9.2l7 3.3v7.3l-7-3.5V9.2zm9 10.6v-7.3l7-3.3v7.1l-7 3.5z"/>
    </svg>
  ),
  Django: (props) => (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M11.5 2v8.5c0 2-1.5 3.5-3.5 3.5S4.5 12.5 4.5 10.5V2H2v8.5C2 14 4.5 16.5 8 16.5s6-2.5 6-5.5V2h-2.5zM16 2v14.5h2.5V2H16zm5.5 4.5V2H19v4.5h2.5z"/>
    </svg>
  ),
  Python: (props) => (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M9.585 11.692h4.328s2.432.039 2.432-2.35V5.391S16.714 3 11.936 3C7.362 3 7.647 3 7.647 3l-.006 2.347h4.363v.645H5.816s-2.467-.247-2.467 4.327c0 4.573 2.148 4.573 2.148 4.573h1.28V12.65s-.07-2.148 2.104-2.148m.281-4.975c-.42 0-.761-.346-.761-.771s.341-.77.761-.77c.42 0 .762.345.762.77s-.342.771-.762.771m4.254 13.283h-4.328s-2.432-.039-2.432 2.35v3.951S7.286 28 12.064 28c4.574 0 4.289 0 4.289 0l.006-2.347h-4.363v-.645h6.188s2.467.247 2.467-4.327c0-4.573-2.148-4.573-2.148-4.573h-1.28v2.242s.07 2.148-2.104 2.148m-.281 4.975c.42 0 .761.346.761.771s-.341.77-.761.77c-.42 0-.762-.345-.762-.77s.342-.771.762-.771"/>
    </svg>
  ),
  Firebase: (props) => (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
        <path d="M3.89 15.67L6.5 4.6l2.13 4.19-4.74 6.88zM20.11 15.67l-2.66-13.8L12 12.16l8.11 3.51zM10.37 11.23L12 2l1.63 9.23L12 12.16l-1.63-.93zM12 13.91l-6.84-3.79-1.6 9.4 8.44 4.75 8.44-4.75-1.6-9.4L12 13.91z"/>
    </svg>
  ),
  AgenticAI: (props) => (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M12 2L2 7v10l10 5 10-5V7L12 2zm0 2.2L19.5 8 12 11.5 4.5 8 12 4.2zM4 9.2l7 3.3v7.3l-7-3.5V9.2zm9 10.6v-7.3l7-3.3v7.1l-7 3.5z"/>
      <circle cx="12" cy="12" r="3" fill="white"/>
      <path d="M12 10v4M10 12h4" stroke="white" strokeWidth="1" fill="none"/>
    </svg>
  ),
  DataAnalytics: (props) => (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M3 3v18h18v-2H5V3H3zm4 14h2V9H7v8zm4 0h2V5h-2v12zm4 0h2v-6h-2v6zm4 0h2v-4h-2v4z"/>
    </svg>
  )
}


export default function Skills() {
  const leadershipSkills = [
    { name: "Project Management", icon: Target, color: "bg-blue-400", description: "Planning, execution & delivery" },
    { name: "Team Leadership", icon: Users, color: "bg-green-400", description: "Leading cross-functional teams" },
    { name: "Business Operations", icon: Briefcase, color: "bg-purple-400", description: "Operational excellence" },
    { name: "Stakeholder Management", icon: MessageSquare, color: "bg-orange-400", description: "Communication & alignment" },
    { name: "Strategic Planning", icon: Lightbulb, color: "bg-yellow-400", description: "Vision & roadmap creation" },
    { name: "Process Improvement", icon: CheckCircle, color: "bg-pink-400", description: "Optimization & efficiency" },
    { name: "Program Coordination", icon: Layers, color: "bg-cyan-400", description: "Multi-project oversight" },
    { name: "Problem Solving", icon: TrendingUp, color: "bg-indigo-400", description: "Analytical decision-making" },
  ]

  const technicalSkills = [
    { name: "React", bg: "bg-[#61DAFB]", icon: Icons.React, description: "Frontend UI development" },
    { name: "Next.js", bg: "bg-black", icon: Icons.Next, description: "Full-stack React framework" },
    { name: "Node.js", bg: "bg-[#339933]", icon: Icons.Node, description: "Backend JavaScript runtime" },
    { name: "Django", bg: "bg-[#0C4B33]", icon: Icons.Django, description: "Python web framework" },
    { name: "Python", bg: "bg-[#3776AB]", icon: Icons.Python, description: "Backend & AI development" },
    { name: "Firebase", bg: "bg-[#FFCA28]", icon: Icons.Firebase, description: "Cloud & real-time database" },
    { name: "Agentic AI", bg: "bg-[#FF6F00]", icon: Icons.AgenticAI, description: "AI agents & automation" },
    { name: "Data Analytics", bg: "bg-[#4A90E2]", icon: Icons.DataAnalytics, description: "Insights & visualization" },
  ]

  return (
    <div className="grid lg:grid-cols-2 gap-12">
      {/* Leadership & Operations Skills - LEFT */}
      <div>
        <div className="relative inline-block mb-6">
          <div className="absolute inset-0 bg-yellow-400 transform -rotate-1 rounded-lg"></div>
          <h3 className="relative text-2xl md:text-3xl font-black uppercase bg-white border-4 border-black px-4 py-2 rounded-lg transform rotate-1 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            Leadership & Operations
          </h3>
        </div>
        
        <div className="grid grid-cols-1 gap-4">
          {leadershipSkills.map((skill, i) => (
            <motion.div
              key={i}
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              whileHover={{ scale: 1.02, y: -2 }}
              className={`${skill.color} rounded-2xl p-4 flex items-start gap-3 border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all cursor-default`}
            >
              <div className="flex-shrink-0 w-12 h-12 bg-white border-2 border-black rounded-xl flex items-center justify-center shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                <skill.icon className="w-6 h-6 text-black" />
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="font-black text-black text-base leading-tight mb-1">{skill.name}</h4>
                <p className="text-xs font-bold text-black/70 leading-snug">{skill.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Technical Skills - RIGHT */}
      <div>
        <div className="relative inline-block mb-6">
          <div className="absolute inset-0 bg-blue-400 transform rotate-1 rounded-lg"></div>
          <h3 className="relative text-2xl md:text-3xl font-black uppercase bg-white border-4 border-black px-4 py-2 rounded-lg transform -rotate-1 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            Technical Skills
          </h3>
        </div>
        
        <div className="grid grid-cols-1 gap-4">
          {technicalSkills.map((skill, i) => (
            <motion.div
              key={i}
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              whileHover={{ scale: 1.02, y: -2 }}
              className={`${skill.bg} rounded-2xl p-4 flex items-start gap-3 border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all cursor-default`}
            >
              <div className="flex-shrink-0 w-12 h-12 bg-white border-2 border-black rounded-xl flex items-center justify-center shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                <skill.icon className="w-6 h-6 text-black" />
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="font-black text-white text-base leading-tight mb-1">{skill.name}</h4>
                <p className="text-xs font-bold text-white/80 leading-snug">{skill.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
