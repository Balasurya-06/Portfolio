"use client"
import { motion } from "framer-motion"
import { Briefcase, Users, Code, BarChart, CheckCircle } from "lucide-react"

export default function CareerFit() {

  const positions = [
    {
      title: "Business Operations Associate",
      category: "Business Operations",
      icon: Briefcase,
      fit: "Led business operations, stakeholder communication, and project execution as Founder & CEO of Vygron while managing teams, client relationships, and organizational workflows.",
      color: "bg-blue-500"
    },
    {
      title: "Project Coordinator",
      category: "Project Management",
      icon: Users,
      fit: "Coordinated large-scale initiatives including HackSprint 2.0, managing operations for 4,000+ applicants and 400+ onsite participants while ensuring smooth execution across multiple teams.",
      color: "bg-green-500"
    },
    {
      title: "Technical Project Coordinator",
      category: "Project Management",
      icon: Code,
      fit: "Combined technical expertise with project leadership experience to coordinate developers, stakeholders, timelines, and deliverables across startup and academic initiatives.",
      color: "bg-purple-500"
    },
    {
      title: "Business Analyst",
      category: "Business Analysis",
      icon: BarChart,
      fit: "Experienced in understanding requirements, improving processes, managing stakeholders, and developing solutions that align business needs with technology outcomes.",
      color: "bg-yellow-500"
    },
    {
      title: "PMO Analyst",
      category: "Project Management",
      icon: Briefcase,
      fit: "Skilled in project planning, documentation, resource allocation, progress tracking, and stakeholder coordination through leadership roles and startup management.",
      color: "bg-red-500"
    },
    {
      title: "Data Analyst",
      category: "Data & Analytics",
      icon: BarChart,
      fit: "Experienced in tracking project metrics, analyzing participant and operational data, and using insights to improve planning, execution, and decision-making.",
      color: "bg-indigo-500"
    },
    {
      title: "Agentic AI Engineer",
      category: "Technology",
      icon: Code,
      fit: "Built AI-driven solutions and automation workflows while exploring intelligent systems that improve operational efficiency and business processes.",
      color: "bg-cyan-500"
    },
    {
      title: "Software Developer",
      category: "Technology",
      icon: Code,
      fit: "Developed web applications, automation systems, and software platforms while leading end-to-end development, deployment, and project delivery initiatives.",
      color: "bg-pink-500"
    },
    {
      title: "Frontend Developer",
      category: "Technology",
      icon: Code,
      fit: "Designed and developed responsive user interfaces and modern web applications focused on usability, performance, and user experience.",
      color: "bg-[#FF8C42]"
    },
    {
      title: "Software Test Engineer (QA)",
      category: "Quality Assurance",
      icon: CheckCircle,
      fit: "Experienced in validating software functionality, identifying issues, testing workflows, and ensuring reliable delivery of applications through structured project execution and quality-focused development practices.",
      color: "bg-teal-500"
    }
  ]

  return (
    <section id="career-fit" className="relative bg-[#E8E4DC] text-[#1a1a1a] py-24 px-6">
      <div className="w-[95%] max-w-[1800px] mx-auto">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-xs font-bold text-gray-500 uppercase tracking-[0.3em] mb-6 flex items-center gap-3"
          >
            <span className="w-12 h-0.5 bg-[#FF8C42]"></span>
            OPPORTUNITIES
          </motion.h2>
          <h3 className="text-5xl md:text-6xl lg:text-7xl font-black mb-6 uppercase tracking-tight leading-[0.9]">
            OPEN TO <span className="text-[#FF8C42]">OPPORTUNITIES</span>
          </h3>
          <p className="text-xl text-gray-600 leading-relaxed max-w-3xl">
            I am open to opportunities that combine technology, business, operations, problem-solving, and leadership. I enjoy working across projects, products, operations, analytics, and AI-driven solutions.
          </p>
        </motion.div>

        {/* Positions Grid - Simple Role Pills */}
        <div className="flex flex-wrap justify-center gap-4 max-w-5xl mx-auto">
          {positions.map((position, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="px-8 py-4 bg-white rounded-full text-base font-bold shadow-md hover:shadow-xl hover:scale-105 transition-all cursor-default"
            >
              {position.title}
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
