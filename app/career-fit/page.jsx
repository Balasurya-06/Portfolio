"use client"
import { motion } from "framer-motion"
import { Briefcase, CheckCircle, ArrowLeft } from "lucide-react"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const positions = [
  {
    title: "Business Operations Associate",
    category: "Business Operations",
    fit: "Led business operations, stakeholder communication, and project execution as Founder & CEO of Vygron while managing teams, client relationships, and organizational workflows.",
    tags: ["Operations", "Leadership", "Stakeholder Management"]
  },
  {
    title: "Project Coordinator",
    category: "Project Management",
    fit: "Coordinated large-scale initiatives including HackSprint 2.0, managing operations for 4,000+ applicants and 400+ onsite participants while ensuring smooth execution across multiple teams.",
    tags: ["Event Management", "Team Coordination", "Large-scale Projects"]
  },
  {
    title: "Technical Project Coordinator",
    category: "Project Management",
    fit: "Combined technical expertise with project leadership experience to coordinate developers, stakeholders, timelines, and deliverables across startup and academic initiatives.",
    tags: ["Technical Leadership", "Agile", "Cross-functional Teams"]
  },
  {
    title: "Business Analyst",
    category: "Business Analysis",
    fit: "Experienced in understanding requirements, improving processes, managing stakeholders, and developing solutions that align business needs with technology outcomes.",
    tags: ["Requirements Analysis", "Process Improvement", "Stakeholder Management"]
  },
  {
    title: "PMO Analyst",
    category: "Project Management",
    fit: "Skilled in project planning, documentation, resource allocation, progress tracking, and stakeholder coordination through leadership roles and startup management.",
    tags: ["Planning", "Documentation", "Resource Management"]
  },
  {
    title: "Data Analyst",
    category: "Data & Analytics",
    fit: "Experienced in tracking project metrics, analyzing participant and operational data, and using insights to improve planning, execution, and decision-making.",
    tags: ["Data Analysis", "Metrics", "Decision Support"]
  },
  {
    title: "Agentic AI Engineer",
    category: "Technology",
    fit: "Built AI-driven solutions and automation workflows while exploring intelligent systems that improve operational efficiency and business processes.",
    tags: ["AI/ML", "Automation", "Innovation"]
  },
  {
    title: "Software Developer",
    category: "Technology",
    fit: "Developed web applications, automation systems, and software platforms while leading end-to-end development, deployment, and project delivery initiatives.",
    tags: ["Full-stack", "System Design", "Deployment"]
  },
  {
    title: "Frontend Developer",
    category: "Technology",
    fit: "Designed and developed responsive user interfaces and modern web applications focused on usability, performance, and user experience.",
    tags: ["React", "UI/UX", "Responsive Design"]
  },
  {
    title: "Software Test Engineer (QA)",
    category: "Quality Assurance",
    fit: "Experienced in validating software functionality, identifying issues, testing workflows, and ensuring reliable delivery of applications through structured project execution and quality-focused development practices.",
    tags: ["Testing", "Quality Assurance", "Process Validation"]
  }
]

const categories = [...new Set(positions.map(p => p.category))]

export default function CareerFitPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      {/* Header */}
      <section className="relative bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800">
        <div className="container mx-auto px-6 py-20">
          <Link 
            href="/"
            className="inline-flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <Briefcase className="w-10 h-10 text-yellow-400" />
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
                Career Fit Profile
              </h1>
            </div>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl">
              Explore the roles I'm qualified for and discover how my experience, skills, and leadership align with various positions across technology, operations, and project management.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Categories Summary */}
      <section className="container mx-auto px-6 py-8">
        <div className="flex flex-wrap gap-3">
          {categories.map((category, idx) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.1 }}
            >
              <Badge variant="outline" className="px-4 py-2 text-sm">
                {category} ({positions.filter(p => p.category === category).length})
              </Badge>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Positions Grid */}
      <section className="container mx-auto px-6 py-12 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {positions.map((position, idx) => (
            <motion.div
              key={position.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.05, duration: 0.5 }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow duration-300 border-2 hover:border-yellow-400">
                <CardHeader>
                  <div className="flex items-start justify-between gap-4 mb-2">
                    <CardTitle className="text-xl font-bold text-gray-900 dark:text-white">
                      {position.title}
                    </CardTitle>
                    <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
                  </div>
                  <CardDescription className="text-sm font-medium text-yellow-600 dark:text-yellow-400">
                    {position.category}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                    <span className="font-semibold text-gray-900 dark:text-white">Why I'm a Fit: </span>
                    {position.fit}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {position.tags.map(tag => (
                      <Badge key={tag} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-6 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-yellow-400 rounded-2xl p-8 md:p-12 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Ready to Work Together?
          </h2>
          <p className="text-lg text-gray-800 mb-6 max-w-2xl mx-auto">
            I bring versatile expertise across multiple domains. Let's discuss how I can contribute to your team.
          </p>
          <Link
            href="/#contact"
            className="inline-flex items-center gap-2 bg-gray-900 text-white px-8 py-3 rounded-full font-semibold hover:bg-gray-800 transition-colors"
          >
            Get in Touch
          </Link>
        </motion.div>
      </section>
    </div>
  )
}
