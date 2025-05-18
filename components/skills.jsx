"use client"
import { motion } from "framer-motion"
import { Code, Database, Server, GitBranch, Layout, FileCode, PenTool, Cpu } from "lucide-react"
import AnimatedText from "@/components/animated-text"

export default function Skills() {
  const skills = [
    {
      name: "Django",
      icon: <Server className="h-8 w-8" />,
      color: "bg-green-900/20 text-green-400 border-green-500/20",
    },
    { name: "React", icon: <Code className="h-8 w-8" />, color: "bg-blue-900/20 text-blue-400 border-blue-500/20" },
    {
      name: "HTML",
      icon: <Layout className="h-8 w-8" />,
      color: "bg-orange-900/20 text-orange-400 border-orange-500/20",
    },
    {
      name: "CSS",
      icon: <PenTool className="h-8 w-8" />,
      color: "bg-purple-900/20 text-purple-400 border-purple-500/20",
    },
    {
      name: "JavaScript",
      icon: <FileCode className="h-8 w-8" />,
      color: "bg-yellow-900/20 text-yellow-400 border-yellow-500/20",
    },
    { name: "Python", icon: <Code className="h-8 w-8" />, color: "bg-blue-900/20 text-blue-400 border-blue-500/20" },
    { name: "Git", icon: <GitBranch className="h-8 w-8" />, color: "bg-red-900/20 text-red-400 border-red-500/20" },
    { name: "Microservices", icon: <Cpu className="h-8 w-8" />, color: "bg-gray-800/50 text-gray-300 border-gray-700" },
    {
      name: "Database",
      icon: <Database className="h-8 w-8" />,
      color: "bg-indigo-900/20 text-indigo-400 border-indigo-500/20",
    },
  ]

  return (
    <section id="skills" className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-4">
        <AnimatedText
          text="My Skills"
          className="text-3xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500"
        />

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className={`${skill.color} p-6 rounded-lg border backdrop-blur-sm flex flex-col items-center justify-center hover-target`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{
                y: -5,
                boxShadow: "0 10px 25px -5px rgba(145, 92, 255, 0.4)",
                transition: { duration: 0.2 },
              }}
            >
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  type: "spring",
                  stiffness: 260,
                  damping: 20,
                  delay: 0.1 + index * 0.1,
                }}
              >
                {skill.icon}
              </motion.div>
              <h3 className="mt-4 font-medium text-lg">{skill.name}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
