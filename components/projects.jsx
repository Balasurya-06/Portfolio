"use client"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Building2, TrendingUp, Users, Award, Star, Zap, ExternalLink, Rocket, Target, Briefcase, Code2, Globe, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import AnimatedText from "@/components/animated-text"

export default function Projects() {
  const [hoveredCompany, setHoveredCompany] = useState(null)
  const [selectedTab, setSelectedTab] = useState("vygron")

  const companies = [
    {
      name: "Vygron",
      tagline: "Innovating Digital Solutions",
      description: "A cutting-edge software company specializing in web development, mobile applications, and AI/ML solutions.",
      role: "Founder & CEO",
      founded: "2024",
      logo: "/vygron.png",
      website: "https://www.vygron.co.in/",
      services: [
        "Web Development",
        "Mobile Applications",
        "AI/ML Solutions",
        "Cloud Services",
        "UI/UX Design",
        "Digital Marketing"
      ],
      stats: [
        { icon: Users, value: "10+", label: "Happy Clients" },
        { icon: Award, value: "5+", label: "Projects Delivered" },
        { icon: Star, value: "4.9", label: "Client Rating" },
        { icon: TrendingUp, value: "150%", label: "Growth Rate" }
      ],
      achievements: [
        "Successfully delivered 15+ enterprise-level projects",
        "Built a team of skilled developers and designers",
        "Established partnerships with leading tech companies",
        "Recognized for innovative AI solutions in healthcare sector"
      ],
      technologies: ["React", "Node.js", "Python", "TensorFlow", "AWS", "MongoDB", "PostgreSQL"],
      color: "orange"
    },
    {
      name: "Xyndrix",
      tagline: "Transforming Ideas into Digital Reality",
      description: "A dynamic software company focused on full-stack development and enterprise solutions.",
      role: "Co-Founder & CFO",
      founded: "2023",
      logo: "/xyndrix.png",
      website: "https://www.xyndrix.tech/Home",
      services: [
        "Enterprise Software",
        "Full-Stack Development",
        "Microservices Architecture",
        "DevOps Solutions",
        "Consulting Services",
        "Technical Training"
      ],
      stats: [
        { icon: Users, value: "10+", label: "Happy Clients" },
        { icon: Award, value: "5+", label: "Projects Delivered" },
        { icon: Star, value: "4.8", label: "Client Rating" },
        { icon: Zap, value: "99%", label: "Success Rate" }
      ],
      achievements: [
        "Managed financial operations scaling from startup to profitable company",
        "Secured partnerships with Fortune 500 companies",
        "Implemented cost-effective infrastructure solutions",
        "Led successful funding rounds and investor relations"
      ],
      technologies: ["Django", "React", "Docker", "Kubernetes", "Azure", "Redis", "GraphQL"],
      color: "purple"
    }
  ]

  return (
    <section id="projects" className="relative py-20 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
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
        {/* Section Header with Split Line */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="flex items-center gap-6 mb-6">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "100px" }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="h-[2px] bg-gradient-to-r from-transparent to-orange-500"
            />
            <h2 className="text-5xl lg:text-6xl font-bold text-white whitespace-nowrap">
              Entrepreneurial <span className="text-orange-500">Ventures</span>
            </h2>
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="h-[2px] bg-gradient-to-r from-orange-500 to-transparent flex-1"
            />
          </div>
          <p className="text-gray-400 text-lg max-w-3xl">
            Pioneering digital innovation through strategic leadership and cutting-edge technology solutions
          </p>
        </motion.div>

        {/* Tab Selector */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-center gap-4 mb-16"
        >
          {companies.map((company, idx) => (
            <button
              key={idx}
              onClick={() => setSelectedTab(company.name.toLowerCase())}
              className={`relative px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-500 ${
                selectedTab === company.name.toLowerCase()
                  ? company.color === 'orange'
                    ? 'bg-gradient-to-r from-orange-500 to-orange-600 text-white shadow-2xl shadow-orange-500/50 scale-110'
                    : 'bg-gradient-to-r from-purple-500 to-purple-600 text-white shadow-2xl shadow-purple-500/50 scale-110'
                  : 'bg-white/5 text-gray-400 hover:bg-white/10 backdrop-blur-sm border border-white/10'
              }`}
            >
              <span className="relative z-10">{company.name}</span>
              {selectedTab === company.name.toLowerCase() && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute inset-0 rounded-2xl"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
            </button>
          ))}
        </motion.div>

        {/* Company Display */}
        <AnimatePresence mode="wait">
          {companies.map((company, index) => (
            selectedTab === company.name.toLowerCase() && (
              <motion.div
                key={company.name}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="max-w-7xl mx-auto"
              >
                {/* Hero Card */}
                <div className={`relative overflow-hidden rounded-3xl backdrop-blur-2xl bg-gradient-to-br ${
                  company.color === 'orange'
                    ? 'from-orange-900/30 via-gray-900/50 to-orange-900/20 border-2 border-orange-500/30'
                    : 'from-purple-900/30 via-gray-900/50 to-purple-900/20 border-2 border-purple-500/30'
                } p-8 lg:p-12 mb-8 shadow-2xl`}>
                  
                  {/* Floating Orbs */}
                  <div className="absolute inset-0 overflow-hidden">
                    <motion.div
                      animate={{ y: [0, -20, 0], x: [0, 10, 0] }}
                      transition={{ duration: 6, repeat: Infinity }}
                      className={`absolute top-10 right-10 w-32 h-32 ${
                        company.color === 'orange' ? 'bg-orange-500/20' : 'bg-purple-500/20'
                      } rounded-full blur-2xl`}
                    />
                    <motion.div
                      animate={{ y: [0, 20, 0], x: [0, -10, 0] }}
                      transition={{ duration: 8, repeat: Infinity }}
                      className={`absolute bottom-10 left-10 w-40 h-40 ${
                        company.color === 'orange' ? 'bg-orange-500/10' : 'bg-purple-500/10'
                      } rounded-full blur-3xl`}
                    />
                  </div>

                  <div className="relative grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left: Company Info */}
                    <div>
                      {/* Logo & Name */}
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: "spring", bounce: 0.5 }}
                        className="flex items-center gap-6 mb-8"
                      >
                        <div className={`relative w-24 h-24 rounded-2xl bg-gradient-to-br ${
                          company.color === 'orange' ? 'from-orange-500 to-orange-600' : 'from-purple-500 to-purple-600'
                        } flex items-center justify-center shadow-2xl ${
                          company.color === 'orange' ? 'shadow-orange-500/50' : 'shadow-purple-500/50'
                        } p-3`}>
                          <img
                            src={company.logo}
                            alt={`${company.name} Logo`}
                            className="w-full h-full object-contain"
                          />
                          <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                            className={`absolute inset-0 rounded-2xl border-2 ${
                              company.color === 'orange' ? 'border-orange-400/50' : 'border-purple-400/50'
                            } border-dashed`}
                          />
                        </div>
                        <div>
                          <h3 className={`text-5xl font-black ${
                            company.color === 'orange' ? 'text-orange-500' : 'text-purple-500'
                          } mb-2`}>
                            {company.name}
                          </h3>
                          <p className="text-gray-400 text-lg italic">{company.tagline}</p>
                        </div>
                      </motion.div>

                      {/* Role Badge */}
                      <motion.div
                        initial={{ x: -50, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className={`inline-flex items-center gap-3 px-6 py-3 rounded-2xl ${
                          company.color === 'orange'
                            ? 'bg-orange-500/20 border-2 border-orange-500/50'
                            : 'bg-purple-500/20 border-2 border-purple-500/50'
                        } mb-8 backdrop-blur-sm`}
                      >
                        <Briefcase className={`h-5 w-5 ${company.color === 'orange' ? 'text-orange-500' : 'text-purple-500'}`} />
                        <div>
                          <span className={`font-bold text-lg ${
                            company.color === 'orange' ? 'text-orange-500' : 'text-purple-500'
                          }`}>
                            {company.role}
                          </span>
                          <span className="text-gray-400 text-sm ml-3">Est. {company.founded}</span>
                        </div>
                      </motion.div>

                      {/* Description */}
                      <motion.p
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.3 }}
                        className="text-gray-300 text-lg leading-relaxed mb-8"
                      >
                        {company.description}
                      </motion.p>

                      {/* CTA Buttons */}
                      <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.4 }}
                        className="flex flex-wrap gap-4"
                      >
                        <Button
                          onClick={() => window.open(company.website, "_blank")}
                          className={`${
                            company.color === 'orange'
                              ? 'bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 shadow-lg shadow-orange-500/40'
                              : 'bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 shadow-lg shadow-purple-500/40'
                          } text-white border-none px-8 py-6 text-lg font-bold rounded-xl hover:scale-105 transition-all duration-300 flex items-center gap-2`}
                        >
                          <Globe className="h-5 w-5" />
                          Visit Website
                          <ChevronRight className="h-5 w-5" />
                        </Button>
                        <Button
                          className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white border-2 border-white/20 px-8 py-6 text-lg font-bold rounded-xl hover:scale-105 transition-all duration-300"
                        >
                          View Portfolio
                        </Button>
                      </motion.div>
                    </div>

                    {/* Right: Stats & Tech */}
                    <div className="space-y-6">
                      {/* Stats Cards */}
                      <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 0.3 }}
                        className="grid grid-cols-2 gap-4"
                      >
                        {company.stats.map((stat, idx) => (
                          <motion.div
                            key={idx}
                            whileHover={{ scale: 1.05, y: -5 }}
                            className={`relative overflow-hidden backdrop-blur-xl bg-white/5 border-2 ${
                              company.color === 'orange' ? 'border-orange-500/30 hover:border-orange-500/60' : 'border-purple-500/30 hover:border-purple-500/60'
                            } p-6 rounded-2xl text-center transition-all duration-300 group cursor-pointer`}
                          >
                            <div className={`absolute inset-0 bg-gradient-to-br ${
                              company.color === 'orange' ? 'from-orange-500/10 to-transparent' : 'from-purple-500/10 to-transparent'
                            } opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                            
                            <stat.icon className={`h-8 w-8 ${
                              company.color === 'orange' ? 'text-orange-500' : 'text-purple-500'
                            } mx-auto mb-3 relative z-10`} />
                            <h3 className="text-3xl font-black text-white mb-2 relative z-10">{stat.value}</h3>
                            <p className="text-gray-400 text-sm font-semibold relative z-10">{stat.label}</p>
                          </motion.div>
                        ))}
                      </motion.div>

                      {/* Technologies Showcase */}
                      <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.5 }}
                        className="backdrop-blur-xl bg-white/5 border-2 border-white/10 p-6 rounded-2xl"
                      >
                        <div className="flex items-center gap-3 mb-4">
                          <Code2 className={`h-5 w-5 ${company.color === 'orange' ? 'text-orange-500' : 'text-purple-500'}`} />
                          <h4 className="text-white font-bold text-lg">Tech Stack</h4>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {company.technologies.map((tech, idx) => (
                            <motion.span
                              key={idx}
                              initial={{ scale: 0 }}
                              animate={{ scale: 1 }}
                              transition={{ delay: 0.6 + idx * 0.05 }}
                              whileHover={{ scale: 1.1 }}
                              className={`px-4 py-2 rounded-lg ${
                                company.color === 'orange'
                                  ? 'bg-orange-500/20 text-orange-400 border border-orange-500/40'
                                  : 'bg-purple-500/20 text-purple-400 border border-purple-500/40'
                              } font-semibold text-sm cursor-pointer hover:shadow-lg transition-all duration-300`}
                            >
                              {tech}
                            </motion.span>
                          ))}
                        </div>
                      </motion.div>
                    </div>
                  </div>
                </div>

                {/* Services & Achievements Grid */}
                <div className="grid lg:grid-cols-2 gap-8">
                  {/* Services */}
                  <motion.div
                    initial={{ x: -50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.6 }}
                    className="backdrop-blur-xl bg-white/5 border-2 border-white/10 p-8 rounded-2xl hover:border-white/20 transition-all duration-300"
                  >
                    <div className="flex items-center gap-3 mb-6">
                      <Target className={`h-6 w-6 ${company.color === 'orange' ? 'text-orange-500' : 'text-purple-500'}`} />
                      <h4 className="text-2xl font-bold text-white">Services Offered</h4>
                    </div>
                    <div className="space-y-3">
                      {company.services.map((service, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ x: -20, opacity: 0 }}
                          animate={{ x: 0, opacity: 1 }}
                          transition={{ delay: 0.7 + idx * 0.05 }}
                          whileHover={{ x: 10 }}
                          className="flex items-center gap-3 p-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 transition-all duration-300 cursor-pointer group"
                        >
                          <div className={`w-2 h-2 rounded-full ${
                            company.color === 'orange' ? 'bg-orange-500' : 'bg-purple-500'
                          } group-hover:scale-150 transition-transform duration-300`} />
                          <span className="text-gray-300 group-hover:text-white font-medium transition-colors duration-300">
                            {service}
                          </span>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>

                  {/* Achievements */}
                  <motion.div
                    initial={{ x: 50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.6 }}
                    className="backdrop-blur-xl bg-white/5 border-2 border-white/10 p-8 rounded-2xl hover:border-white/20 transition-all duration-300"
                  >
                    <div className="flex items-center gap-3 mb-6">
                      <Rocket className={`h-6 w-6 ${company.color === 'orange' ? 'text-orange-500' : 'text-purple-500'}`} />
                      <h4 className="text-2xl font-bold text-white">Key Achievements</h4>
                    </div>
                    <div className="space-y-4">
                      {company.achievements.map((achievement, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ x: 20, opacity: 0 }}
                          animate={{ x: 0, opacity: 1 }}
                          transition={{ delay: 0.7 + idx * 0.05 }}
                          whileHover={{ scale: 1.02 }}
                          className="flex items-start gap-3 p-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 transition-all duration-300 cursor-pointer group"
                        >
                          <Award className={`h-5 w-5 ${
                            company.color === 'orange' ? 'text-orange-500' : 'text-purple-500'
                          } flex-shrink-0 mt-0.5 group-hover:rotate-12 transition-transform duration-300`} />
                          <span className="text-gray-300 group-hover:text-white leading-relaxed transition-colors duration-300">
                            {achievement}
                          </span>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            )
          ))}
        </AnimatePresence>
      </div>
    </section>
  )
}