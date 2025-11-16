"use client"
import { motion } from "framer-motion"
import { GraduationCap, Calendar } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import AnimatedText from "@/components/animated-text"

export default function Education() {
  return (
    <section id="education" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-6 lg:px-16 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl lg:text-5xl font-bold text-white mb-16 text-center"
        >
          My <span className="text-orange-500">Education</span>
        </motion.h2>

        <div className="max-w-3xl mx-auto space-y-8">
          {/* College Education */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
          >
            <Card className="backdrop-blur-sm bg-white/5 border border-white/10 hover:border-orange-500/50 shadow-lg hover:shadow-orange-500/20 transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex items-start gap-6">
                  <motion.div
                    className="bg-orange-500/20 p-4 rounded-full hidden sm:block border border-orange-500/30"
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
                    <GraduationCap className="h-8 w-8 text-orange-500" />
                  </motion.div>

                  <div>
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.3 }}
                    >
                      <h3 className="text-2xl font-bold text-white">Bachelor of Engineering in Computer Science</h3>
                      <p className="text-lg text-orange-500 mb-2 font-semibold">Karpagam Academy of Higher Education</p>
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

          {/* School Education */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card className="backdrop-blur-sm bg-white/5 border border-white/10 hover:border-orange-500/50 shadow-lg hover:shadow-orange-500/20 transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex items-start gap-6">
                  <motion.div
                    className="bg-orange-500/20 p-4 rounded-full hidden sm:block border border-orange-500/30"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      type: "spring",
                      stiffness: 260,
                      damping: 20,
                      delay: 0.4,
                    }}
                  >
                    <GraduationCap className="h-8 w-8 text-orange-500" />
                  </motion.div>

                  <div>
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.5 }}
                    >
                      <h3 className="text-2xl font-bold text-white">Higher Secondary Education</h3>
                      <p className="text-lg text-orange-500 mb-2 font-semibold">Thamarai Matric Higher Secondary School</p>
                    </motion.div>

                    <motion.div
                      className="flex items-center text-gray-400 mb-4"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.6 }}
                    >
                      <Calendar className="h-4 w-4 mr-2" />
                      <span>2021 - 2023</span>
                    </motion.div>

                    <motion.p
                      className="text-gray-300"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.7 }}
                    >
                      Completed higher secondary education with a focus on Computer Science and Mathematics.
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
