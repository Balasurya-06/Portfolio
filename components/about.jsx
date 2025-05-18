"use client"
import { useState } from "react"
import { motion } from "framer-motion"
import { User, Mail, Phone, Download, Award, Calendar, MapPin } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import AnimatedText from "@/components/animated-text"
import AnimatedCounter from "@/components/animated-counter"

export default function About() {
  const [activeTab, setActiveTab] = useState("about")

  const stats = [
    { value: 10, label: "Projects Completed" },
    { value: 3, label: "Years Experience" },
    { value: 5, label: "Technologies" },
    { value: 15, label: "Happy Clients" },
  ]

  const experiences = [
    {
      title: "Full Stack Developer",
      company: "Tech Solutions Inc.",
      period: "2022 - Present",
      description:
        "Developing full-stack web applications using React, Django, and Python. Implementing responsive designs and integrating RESTful APIs.",
    },
    {
      title: "Frontend Developer Intern",
      company: "Web Innovators",
      period: "2021 - 2022",
      description:
        "Assisted in developing user interfaces using HTML, CSS, and JavaScript. Collaborated with senior developers on various projects.",
    },
  ]

  const education = [
    {
      degree: "Bachelor of Engineering in Computer Science",
      institution: "Karpagam Academy of Higher Education",
      period: "2023 - 2027",
      description:
        "Currently pursuing a degree in Computer Science Engineering with a focus on web development, software engineering, and data structures.",
    },
    {
      degree: "Higher Secondary Education",
      institution: "St. Joseph's Higher Secondary School",
      period: "2021 - 2023",
      description: "Completed higher secondary education with a focus on Computer Science and Mathematics.",
    },
  ]

  const downloadResume = () => {
    // Replace with actual resume download logic
    alert("Resume download functionality will be implemented here")
    // Alternatively, you can use a direct link to a PDF file:
    // window.open("/path-to-your-resume.pdf", "_blank")
  }

  return (
    <section id="about" className="py-20 bg-black/50 backdrop-blur-sm relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-20 right-20 w-64 h-64 bg-purple-900/20 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
      <div className="absolute bottom-20 left-20 w-64 h-64 bg-pink-900/20 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>

      <div className="container mx-auto px-4 relative z-10">
        <AnimatedText
          text="About Me"
          className="text-3xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500"
        />

        <Tabs defaultValue="about" className="w-full" onValueChange={setActiveTab}>
          <div className="flex justify-center mb-8">
            <TabsList className="bg-gray-900/50 border border-purple-900/30">
              <TabsTrigger
                value="about"
                className="data-[state=active]:bg-purple-900/30 data-[state=active]:text-purple-300"
              >
                About Me
              </TabsTrigger>
              <TabsTrigger
                value="experience"
                className="data-[state=active]:bg-purple-900/30 data-[state=active]:text-purple-300"
              >
                Experience
              </TabsTrigger>
              <TabsTrigger
                value="education"
                className="data-[state=active]:bg-purple-900/30 data-[state=active]:text-purple-300"
              >
                Education
              </TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="about" className="mt-0">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6 }}
              >
                <div className="space-y-6">
                  <div className="relative">
                    <div className="absolute -left-4 top-0 h-full w-1 bg-gradient-to-b from-purple-500 to-pink-500 rounded-full"></div>
                    <div className="pl-6">
                      <h3 className="text-2xl font-bold text-white mb-4">Who I Am</h3>
                      <p className="text-gray-300 mb-4">
                        I'm Bala Surya S, a passionate Full Stack Developer with expertise in Django, React, and Python.
                        I specialize in building responsive web applications that deliver exceptional user experiences
                        while maintaining robust functionality.
                      </p>
                      <p className="text-gray-300">
                        With a strong foundation in both frontend and backend technologies, I enjoy solving complex
                        problems and turning ideas into reality through code. I'm constantly learning and exploring new
                        technologies to stay at the forefront of web development.
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4 mt-8">
                    {stats.map((stat, index) => (
                      <Card
                        key={index}
                        className="bg-gray-900/50 border-purple-900/30 backdrop-blur-sm hover:border-purple-500/50 transition-all duration-300"
                      >
                        <CardContent className="p-4 text-center">
                          <AnimatedCounter from={0} to={stat.value} className="text-3xl font-bold text-purple-400" />
                          <p className="text-gray-400 text-sm mt-1">{stat.label}</p>
                        </CardContent>
                      </Card>
                    ))}
                  </div>

                  <div className="mt-8">
                    <Button
                      onClick={downloadResume}
                      className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white border-none hover-target"
                    >
                      <Download className="h-4 w-4 mr-2" />
                      Download Resume
                    </Button>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6 }}
              >
                <Card className="bg-gray-900/50 border-purple-900/30 backdrop-blur-sm shadow-xl hover:shadow-purple-500/10 transition-all duration-300">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-6 text-white">Personal Information</h3>

                    <div className="space-y-6">
                      <motion.div
                        className="flex items-center gap-4"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                      >
                        <div className="bg-purple-900/30 p-3 rounded-full">
                          <User className="h-5 w-5 text-purple-400" />
                        </div>
                        <div>
                          <p className="text-sm text-gray-400">Full Name</p>
                          <p className="font-medium text-white">Bala Surya S</p>
                        </div>
                      </motion.div>

                      <motion.div
                        className="flex items-center gap-4"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                      >
                        <div className="bg-purple-900/30 p-3 rounded-full">
                          <Mail className="h-5 w-5 text-purple-400" />
                        </div>
                        <div>
                          <p className="text-sm text-gray-400">Email</p>
                          <p className="font-medium text-white">balasurya9597@gmail.com</p>
                        </div>
                      </motion.div>

                      <motion.div
                        className="flex items-center gap-4"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                      >
                        <div className="bg-purple-900/30 p-3 rounded-full">
                          <Phone className="h-5 w-5 text-purple-400" />
                        </div>
                        <div>
                          <p className="text-sm text-gray-400">Phone</p>
                          <p className="font-medium text-white">+91 9597075831</p>
                        </div>
                      </motion.div>

                      <motion.div
                        className="flex items-center gap-4"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                      >
                        <div className="bg-purple-900/30 p-3 rounded-full">
                          <MapPin className="h-5 w-5 text-purple-400" />
                        </div>
                        <div>
                          <p className="text-sm text-gray-400">Location</p>
                          <p className="font-medium text-white">Tamil Nadu, India</p>
                        </div>
                      </motion.div>

                      <motion.div
                        className="flex items-center gap-4"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.5 }}
                      >
                        <div className="bg-purple-900/30 p-3 rounded-full">
                          <Award className="h-5 w-5 text-purple-400" />
                        </div>
                        <div>
                          <p className="text-sm text-gray-400">Interests</p>
                          <p className="font-medium text-white">Web Development, Machine Learning, UI/UX Design</p>
                        </div>
                      </motion.div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </TabsContent>

          <TabsContent value="experience" className="mt-0">
            <div className="max-w-3xl mx-auto">
              <div className="relative border-l-2 border-purple-500/50 pl-8 ml-4 space-y-10">
                {experiences.map((exp, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="relative"
                  >
                    <div className="absolute -left-[41px] top-0 h-7 w-7 rounded-full bg-purple-500 border-4 border-gray-900 z-10"></div>
                    <Card className="bg-gray-900/50 border-purple-900/30 backdrop-blur-sm hover:border-purple-500/50 transition-all duration-300">
                      <CardContent className="p-6">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                          <div>
                            <h3 className="text-xl font-bold text-white">{exp.title}</h3>
                            <p className="text-purple-400">{exp.company}</p>
                          </div>
                          <div className="flex items-center mt-2 md:mt-0">
                            <Calendar className="h-4 w-4 text-gray-400 mr-2" />
                            <span className="text-gray-400 text-sm">{exp.period}</span>
                          </div>
                        </div>
                        <p className="text-gray-300">{exp.description}</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </TabsContent>

          <TabsContent value="education" className="mt-0">
            <div className="max-w-3xl mx-auto">
              <div className="relative border-l-2 border-purple-500/50 pl-8 ml-4 space-y-10">
                {education.map((edu, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="relative"
                  >
                    <div className="absolute -left-[41px] top-0 h-7 w-7 rounded-full bg-purple-500 border-4 border-gray-900 z-10"></div>
                    <Card className="bg-gray-900/50 border-purple-900/30 backdrop-blur-sm hover:border-purple-500/50 transition-all duration-300">
                      <CardContent className="p-6">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                          <div>
                            <h3 className="text-xl font-bold text-white">{edu.degree}</h3>
                            <p className="text-purple-400">{edu.institution}</p>
                          </div>
                          <div className="flex items-center mt-2 md:mt-0">
                            <Calendar className="h-4 w-4 text-gray-400 mr-2" />
                            <span className="text-gray-400 text-sm">{edu.period}</span>
                          </div>
                        </div>
                        <p className="text-gray-300">{edu.description}</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
}
