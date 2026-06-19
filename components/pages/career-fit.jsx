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
      color: "bg-blue-400"
    },
    {
      title: "Project Coordinator",
      category: "Project Management",
      icon: Users,
      fit: "Coordinated large-scale initiatives including HackSprint 2.0, managing operations for 4,000+ applicants and 400+ onsite participants while ensuring smooth execution across multiple teams.",
      color: "bg-green-400"
    },
    {
      title: "Technical Project Coordinator",
      category: "Project Management",
      icon: Code,
      fit: "Combined technical expertise with project leadership experience to coordinate developers, stakeholders, timelines, and deliverables across startup and academic initiatives.",
      color: "bg-purple-400"
    },
    {
      title: "Business Analyst",
      category: "Business Analysis",
      icon: BarChart,
      fit: "Experienced in understanding requirements, improving processes, managing stakeholders, and developing solutions that align business needs with technology outcomes.",
      color: "bg-yellow-400"
    },
    {
      title: "PMO Analyst",
      category: "Project Management",
      icon: Briefcase,
      fit: "Skilled in project planning, documentation, resource allocation, progress tracking, and stakeholder coordination through leadership roles and startup management.",
      color: "bg-red-400"
    },
    {
      title: "Data Analyst",
      category: "Data & Analytics",
      icon: BarChart,
      fit: "Experienced in tracking project metrics, analyzing participant and operational data, and using insights to improve planning, execution, and decision-making.",
      color: "bg-indigo-400"
    },
    {
      title: "Agentic AI Engineer",
      category: "Technology",
      icon: Code,
      fit: "Built AI-driven solutions and automation workflows while exploring intelligent systems that improve operational efficiency and business processes.",
      color: "bg-cyan-400"
    },
    {
      title: "Software Developer",
      category: "Technology",
      icon: Code,
      fit: "Developed web applications, automation systems, and software platforms while leading end-to-end development, deployment, and project delivery initiatives.",
      color: "bg-pink-400"
    },
    {
      title: "Frontend Developer",
      category: "Technology",
      icon: Code,
      fit: "Designed and developed responsive user interfaces and modern web applications focused on usability, performance, and user experience.",
      color: "bg-orange-400"
    },
    {
      title: "Software Test Engineer (QA)",
      category: "Quality Assurance",
      icon: CheckCircle,
      fit: "Experienced in validating software functionality, identifying issues, testing workflows, and ensuring reliable delivery of applications through structured project execution and quality-focused development practices.",
      color: "bg-teal-400"
    }
  ]

  return (
    <section id="career-fit" className="py-20 bg-[#e6e6e6] text-[#1a1a1a] relative overflow-hidden">
      <div className="w-[90%] mx-auto px-6 lg:px-16 relative z-10">
        
        {/* Section Header */}
        <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col items-center justify-center mb-16"
        >
             <div className="relative inline-block mb-4">
                <div className="absolute inset-0 bg-yellow-400 transform -rotate-1 rounded-lg translate-y-2"></div>
                <h2 className="relative text-4xl md:text-6xl font-black uppercase tracking-tighter text-black px-6 py-2 bg-white border-4 border-black rounded-lg transform rotate-1">
                    Open to Opportunities
                </h2>
            </div>
            <p className="font-bold text-gray-600 text-center max-w-3xl mt-4 leading-relaxed px-4">
                I am open to opportunities that combine technology, business, operations, problem-solving, and leadership. I enjoy working across projects, products, operations, analytics, and AI-driven solutions.
            </p>
        </motion.div>

        {/* Positions Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {positions.map((position, index) => (
                <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    className="group bg-white border-4 border-black rounded-3xl p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-2 transition-all duration-300 flex flex-col h-full"
                >
                    {/* Icon */}
                    <div className={`w-16 h-16 ${position.color} border-2 border-black rounded-2xl flex items-center justify-center mb-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] group-hover:scale-105 transition-transform duration-300`}>
                        <position.icon className="w-8 h-8 text-black" />
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-black uppercase leading-tight mb-2">
                        {position.title}
                    </h3>
                    
                    {/* Category Badge */}
                    <div className="inline-block self-start px-3 py-1 bg-gray-100 border border-black rounded-full text-xs font-bold uppercase tracking-wider mb-4">
                        {position.category}
                    </div>

                    {/* Fit Description */}
                    <p className="text-sm font-medium text-gray-600 leading-relaxed flex-grow">
                        <span className="font-black text-black">Why I'm a Fit: </span>
                        {position.fit}
                    </p>
                </motion.div>
            ))}
        </div>

      </div>
    </section>
  )
}
