"use client"
import { motion } from "framer-motion"
import { GraduationCap, Calendar } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import AnimatedText from "@/components/animated-text"

export default function Education() {
  return (
    <section id="education" className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="container mx-auto px-4">
        <AnimatedText
          text="Education"
          className="text-3xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500"
        />

        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
          >
            <Card className="bg-gray-900/50 border-purple-900/30 shadow-lg hover:shadow-purple-500/10 transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-start gap-6">
                  <motion.div
                    className="bg-purple-900/30 p-4 rounded-full hidden sm:block"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      type: "spring",
                      stiffness: 260,
                      damping: 20,
                      delay: 0.2,
                    }}
                  >
                    <GraduationCap className="h-8 w-8 text-purple-400" />
                  </motion.div>

                  <div>
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.3 }}
                    >
                      <h3 className="text-xl font-bold text-white">Bachelor of Engineering in Computer Science</h3>
                      <p className="text-lg text-purple-400 mb-2">Karpagam Academy of Higher Education</p>
                    </motion.div>

                    <motion.div
                      className="flex items-center text-gray-400 mb-4"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.4 }}
                    >
                      <Calendar className="h-4 w-4 mr-2" />
                      <span>2023 - 2027</span>
                    </motion.div>

                    <motion.p
                      className="text-gray-300"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.5 }}
                    >
                      Currently pursuing a degree in Computer Science Engineering with a focus on web development,
                      software engineering, and data structures. Participating in various technical events and projects
                      to enhance practical knowledge and skills.
                    </motion.p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
