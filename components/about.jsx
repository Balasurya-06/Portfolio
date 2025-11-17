"use client"
import { motion } from "framer-motion"
import { Code, Smartphone, Server } from "lucide-react"
import AnimatedCounter from "@/components/animated-counter"

export default function About() {
  const services = [
    {
      icon: Code,
      title: "Website Development",
      description: "Building responsive and modern websites"
    },
    {
      icon: Smartphone,
      title: "App Development",
      description: "Creating mobile applications for iOS and Android"
    },
    {
      icon: Server,
      title: "Website Hosting",
      description: "Reliable hosting solutions for your projects"
    }
  ]

  const stats = [
    { value: 20, label: "Completed Projects", suffix: "+" },
    { value: 95, label: "Client satisfaction", suffix: "%" },
    { value: 2, label: "Years of experience", suffix: "+" }
  ]

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-6 lg:px-16 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center max-w-7xl mx-auto">
          {/* Left Side - Services with Vertical Line */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Vertical Line with Dots */}
            <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gradient-to-b from-orange-500 via-orange-500 to-transparent">
              {/* Orange Dots */}
              <div className="absolute top-0 -left-1.5 w-3 h-3 bg-orange-500 rounded-full"></div>
              <div className="absolute top-1/3 -left-1.5 w-3 h-3 bg-orange-500 rounded-full"></div>
              <div className="absolute top-2/3 -left-1.5 w-3 h-3 bg-orange-500 rounded-full"></div>
            </div>

            {/* Services List */}
            <div className="pl-12 space-y-10">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2, duration: 0.6 }}
                  className="flex items-start gap-4 group cursor-pointer"
                >
                  <div className="p-3 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 group-hover:border-orange-500/50 group-hover:bg-orange-500/10 transition-all duration-300">
                    <service.icon className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-1 group-hover:text-orange-500 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-gray-400 text-sm">{service.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Side - About Text and Stats */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Title */}
            <div>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-4xl lg:text-5xl font-bold text-white mb-6"
              >
                About me
              </motion.h2>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="text-gray-300 text-lg leading-relaxed"
              >
                I'm Bala Surya, born on 2 July 2006 in Paruvai, a quiet agriculture-based village that shaped my values of discipline, patience, and hard work. My interest in technology began early during my schooling at Literacy Mission Matric Hr. Sec. School, where I completed LKG to 10th, followed by Thamarai Matric Hr. Sec. School for 11th and 12th, which further strengthened my passion for computers, coding, and creativity. Today, I'm pursuing B.E. CSE at Karpagam Academy of Higher Education (2023–2027), where I discovered my purpose — building technology that blends innovation with real-world impact. I am now the Founder of Vygron and Co-Founder of Xyndrix, working on practical, modern, and powerful software solutions while also serving as a Lead in the Metaverse Association, exploring immersive 3D experiences and futuristic technologies. From a small village dreamer to an emerging tech innovator, I'm driven by the vision to create meaningful products and prove that innovation has no boundaries.
              </motion.p>
            </div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="grid grid-cols-3 gap-8 pt-8"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.8 + index * 0.1, duration: 0.5 }}
                  className="text-center"
                >
                  <div className="flex items-start justify-center mb-2">
                    <AnimatedCounter 
                      from={0} 
                      to={stat.value} 
                      className="text-4xl lg:text-5xl font-bold text-white"
                    />
                    <span className="text-3xl lg:text-4xl font-bold text-orange-500 ml-1">
                      {stat.suffix}
                    </span>
                  </div>
                  <p className="text-gray-400 text-sm">{stat.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
