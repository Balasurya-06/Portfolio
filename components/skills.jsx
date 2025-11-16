"use client"
import { motion } from "framer-motion"
import { Code, Database, Server, GitBranch, Layout, FileCode, PenTool, Cpu, Sparkles, Zap } from "lucide-react"
import AnimatedText from "@/components/animated-text"

export default function Skills() {
  const skills = [
    // Row 1
    { name: "HTML5", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg", color: "orange" },
    { name: "CSS3", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg", color: "blue" },
    { name: "JavaScript", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", color: "yellow" },
    { name: "Tailwind", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg", color: "cyan" },
    { name: "Material UI", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg", color: "blue" },
    { name: "React", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", color: "cyan" },
    { name: "Redux", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg", color: "purple" },
    { name: "Angular", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg", color: "red" },
    { name: "TypeScript", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg", color: "blue" },
    { name: "PowerShell", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/powershell/powershell-original.svg", color: "blue" },
    
    // Row 2
    { name: "Node.js", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg", color: "green" },
    { name: "Express", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg", color: "gray" },
    { name: "MongoDB", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg", color: "green" },
    { name: "Firebase", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg", color: "yellow" },
    { name: "Prisma", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prisma/prisma-original.svg", color: "gray" },
    { name: "Next.js", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg", color: "gray" },
    { name: "Nuxt.js", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nuxtjs/nuxtjs-original.svg", color: "green" },
    { name: "GraphQL", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg", color: "pink" },
    
    // Row 3
    { name: "React Native", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", color: "cyan" },
    { name: "GitHub", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg", color: "gray" },
    { name: "Docker", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg", color: "blue" },
    { name: "Figma", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg", color: "purple" },
  ]



  return (
    <section id="skills" className="py-20 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 0],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ duration: 20, repeat: Infinity }}
          className="absolute -top-40 -left-40 w-80 h-80 bg-orange-500/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, -90, 0],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ duration: 25, repeat: Infinity }}
          className="absolute -bottom-40 -right-40 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"
        />
      </div>

      <div className="container mx-auto px-6 lg:px-16 relative z-10">
        {/* Header with decorative elements */}
        <div className="relative mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-orange-500/20 border border-orange-500/30 rounded-full mb-4"
            >
              <Sparkles className="h-4 w-4 text-orange-500" />
              <span className="text-orange-500 font-semibold text-sm">Technical Expertise</span>
            </motion.div>
            
            <h2 className="text-5xl lg:text-6xl font-black text-white mb-4">
              My <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-600">Skills</span>
            </h2>
            
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Proficient in modern technologies and frameworks to build scalable applications
            </p>
          </motion.div>

          {/* Decorative lines */}
          <div className="absolute top-1/2 left-0 right-0 flex items-center justify-center -z-10">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="h-px bg-gradient-to-r from-transparent via-orange-500/30 to-transparent"
            />
          </div>
        </div>

        {/* Skills Display */}
        <div className="max-w-6xl mx-auto">
          {/* Floating Tech Icons */}
          <div className="flex flex-wrap justify-center items-center gap-8 min-h-[600px] relative">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                className="group cursor-pointer relative"
                initial={{ 
                  opacity: 0, 
                  scale: 0,
                  y: -50
                }}
                whileInView={{ 
                  opacity: 1, 
                  scale: 1,
                  y: 0
                }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.05,
                  type: "spring",
                  stiffness: 200
                }}
                animate={{
                  y: [0, -15, 0],
                }}
                transition={{
                  y: {
                    duration: 3 + (index % 5) * 0.5,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }
                }}
                whileHover={{ 
                  scale: 1.3,
                  y: -20,
                  transition: { duration: 0.3 }
                }}
              >
                {/* Glow effect */}
                <motion.div
                  className="absolute inset-0 rounded-2xl bg-orange-500/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ transform: "translate(-10%, -10%) scale(1.2)" }}
                />

                {/* Skill Card */}
                <div className="relative backdrop-blur-xl bg-white/5 border-2 border-white/10 group-hover:border-orange-500/50 rounded-2xl p-6 transition-all duration-300 shadow-lg group-hover:shadow-2xl group-hover:shadow-orange-500/20">
                  {/* Icon */}
                  <motion.div
                    className="w-20 h-20 flex items-center justify-center"
                    whileHover={{
                      rotate: [0, -10, 10, -10, 0],
                      transition: { duration: 0.5 }
                    }}
                  >
                    <img 
                      src={skill.image} 
                      alt={skill.name}
                      className="w-full h-full object-contain filter drop-shadow-lg"
                    />
                  </motion.div>

                  {/* Skill Name (appears on hover) */}
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    whileHover={{ opacity: 1, height: "auto" }}
                    className="mt-3 text-center overflow-hidden"
                  >
                    <p className="text-white font-bold text-sm whitespace-nowrap">
                      {skill.name}
                    </p>
                  </motion.div>

                  {/* Particle effects */}
                  {[...Array(4)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-1 h-1 bg-orange-500 rounded-full opacity-0 group-hover:opacity-100"
                      style={{
                        left: `${50 + Math.cos((i * 90) * Math.PI / 180) * 50}%`,
                        top: `${50 + Math.sin((i * 90) * Math.PI / 180) * 50}%`,
                      }}
                      animate={{
                        scale: [0, 2, 0],
                        opacity: [0, 1, 0],
                      }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        delay: i * 0.2,
                      }}
                    />
                  ))}
                </div>
              </motion.div>
            ))}

          </div>

          {/* Section Title Above Icons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16 -mt-8"
          >
            <motion.h3 
              className="text-3xl lg:text-4xl font-bold text-white mb-4"
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{ duration: 5, repeat: Infinity }}
            >
              Making apps with <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-purple-500 to-orange-500 bg-[length:200%_auto]">modern technologies</span>
            </motion.h3>
            <p className="text-gray-400 text-lg italic font-handwriting">
              Never miss a task, deadline or idea
            </p>
          </motion.div>

          {/* Stats Summary */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto mt-16"
          >
            {[
              { label: "Technologies", value: "25+", icon: Code },
              { label: "Frameworks", value: "15+", icon: Zap },
              { label: "Years Experience", value: "2+", icon: Sparkles },
              { label: "Projects Built", value: "20+", icon: Database },
            ].map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, type: "spring", bounce: 0.4 }}
                whileHover={{ scale: 1.1, y: -5 }}
                className="backdrop-blur-xl bg-white/5 border border-orange-500/30 rounded-2xl p-6 text-center hover:bg-orange-500/10 transition-all duration-300 group cursor-pointer"
              >
                <stat.icon className="h-8 w-8 text-orange-500 mx-auto mb-3 group-hover:scale-110 transition-transform" />
                <h4 className="text-3xl font-black text-white mb-1 group-hover:text-orange-500 transition-colors">
                  {stat.value}
                </h4>
                <p className="text-gray-400 text-sm font-semibold">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
