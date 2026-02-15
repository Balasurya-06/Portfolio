"use client"
import { motion } from "framer-motion"

// Simple SVG Icons for Skills
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
  Tailwind: (props) => (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M12.001 12c-5.895 2.766-4.505 8.358-10.45 8.358-1.077 0-1.954-.262-1.551-2.906.638-4.212 5.395-4.47 5.92-8.529C6.46 6.157 5.07 3.447 2.057 3.447c-1.154 0-1.859.349-1.36 2.658.742 3.468 4.743 3.618 5.753 6.912 3.033.456 4.343-4.542 10.686-4.542 1.076 0 2.126.15 1.55 2.906-.637 3.033-5.394 4.093-5.92 8.53-.54 2.765.85 5.47 3.863 5.47 1.155 0 2.096-.285 1.36-2.659-.741-2.396-4.742-5.462-5.99-10.722z"/>
    </svg>
  ),
   JS: (props) => (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M3 3h18v18H3V3zm13.1 14.1c1.3 0 2.4-.6 2.9-1.7l-1.5-.9c-.3.5-.8.9-1.4.9-.9 0-1.3-.6-1.3-1.5s.4-1.5 1.3-1.5c.6 0 1 .3 1.3.8l1.6-.9c-.6-1.1-1.7-1.7-2.9-1.7-2.2 0-3.6 1.6-3.6 3.4s1.4 3.1 3.6 3.1zm-5.4-3.1h-2v3h2c1.2 0 1.9-.7 1.9-1.6 0-.8-.7-1.4-1.9-1.4z m-2-1.8h2c1.2 0 1.9-.7 1.9-1.5 0-1-.7-1.5-1.9-1.5h-2v3z" />
      <text x="6" y="16" fontSize="10" fontWeight="bold">JS</text>
    </svg>
  ),
   TS: (props) => (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <rect x="2" y="2" width="20" height="20" rx="4" />
      <path d="M12 18h2v-7h-2v7zm-5-9v2h3v7h2v-7h3V9H7zm11 9h-2v-2h2v2zm0-4h-2v-2h2v2z" fill="white" />
      <text x="12" y="15" fontSize="8" fontWeight="bold" fill="white" textAnchor="middle">TS</text>
    </svg>
  ),
  Firebase: (props) => (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
        <path d="M3.89 15.67L6.5 4.6l2.13 4.19-4.74 6.88zM20.11 15.67l-2.66-13.8L12 12.16l8.11 3.51zM10.37 11.23L12 2l1.63 9.23L12 12.16l-1.63-.93zM12 13.91l-6.84-3.79-1.6 9.4 8.44 4.75 8.44-4.75-1.6-9.4L12 13.91z"/>
    </svg>
  ),
  Figma: (props) => (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
        <path d="M12 2v6H8.5a3.5 3.5 0 1 1 3.5-3.5zm0 12v-6h3.5a3.5 3.5 0 1 1-3.5 3.5zm0 0v-6h-3.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 3.5-1zm7-12h-3.5v6H19a3.5 3.5 0 1 0 0-3.5zm-7 6v6h-3.5a3.5 3.5 0 0 0 0-7H12z"/>
    </svg>
  )
}


export default function Skills() {
  const skills = [
    { name: "React", bg: "bg-[#61DAFB]", text: "text-black", icon: Icons.React },
    { name: "Next.js", bg: "bg-white", text: "text-black", icon: Icons.Next },
    { name: "Node.js", bg: "bg-[#339933]", text: "text-white", icon: Icons.Node },
    { name: "Tailwind", bg: "bg-[#06B6D4]", text: "text-white", icon: Icons.Tailwind },
    { name: "JS", bg: "bg-[#F7DF1E]", text: "text-black", icon: Icons.JS },
    { name: "TS", bg: "bg-[#3178C6]", text: "text-white", icon: Icons.TS },
    { name: "Firebase", bg: "bg-[#FFCA28]", text: "text-black", icon: Icons.Firebase },
    { name: "Figma", bg: "bg-[#F24E1E]", text: "text-white", icon: Icons.Figma },
  ]

  return (
    <div className="w-full">
      <h3 className="text-2xl font-bold bg-yellow-200 inline-block px-2 mb-6 border border-black transform -rotate-1 rounded-sm">
        Software Skills
      </h3>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {skills.map((skill, i) => (
          <motion.div
            key={i}
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
            whileHover={{ scale: 1.05, rotate: 2 }}
            className={`aspect-square rounded-[2rem] ${skill.bg} ${skill.text} flex flex-col items-center justify-center gap-2 font-bold text-sm shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 transition-all cursor-default border-2 border-black`}
          >
            <skill.icon className="w-8 h-8 sm:w-10 sm:h-10" />
            <span>{skill.name}</span>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
