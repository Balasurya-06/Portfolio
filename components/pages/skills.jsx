"use client"
import { motion } from "framer-motion"

export default function Skills() {
  const skills = [
    { name: "React", bg: "bg-[#61DAFB]", text: "text-black" },
    { name: "Next.js", bg: "bg-black", text: "text-white" },
    { name: "Node.js", bg: "bg-[#339933]", text: "text-white" },
    { name: "Tailwind", bg: "bg-[#06B6D4]", text: "text-white" },
    { name: "JS", bg: "bg-[#F7DF1E]", text: "text-black" },
    { name: "TS", bg: "bg-[#3178C6]", text: "text-white" },
    { name: "Firebase", bg: "bg-[#FFCA28]", text: "text-black" },
    { name: "Figma", bg: "bg-[#F24E1E]", text: "text-white" },
  ]

  return (
    <div className="w-full">
      <h3 className="text-2xl font-bold bg-yellow-200 inline-block px-2 mb-6">
        Software Skill
      </h3>
      <div className="grid grid-cols-4 gap-4">
        {skills.map((skill, i) => (
          <motion.div
            key={i}
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
            className={`aspect-square rounded-xl ${skill.bg} ${skill.text} flex items-center justify-center font-bold text-xs sm:text-sm shadow-md hover:scale-110 transition-transform cursor-default`}
          >
            {skill.name}
          </motion.div>
        ))}
      </div>
    </div>
  )
}
