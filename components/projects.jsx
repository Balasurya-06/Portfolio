"use client"
import { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ExternalLink, Github, X, ChevronLeft, ChevronRight, Filter, Code, Eye, Layers, Star, Award, Users, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import AnimatedText from "@/components/animated-text"

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null)
  const [activeIndex, setActiveIndex] = useState(0)
  const [filter, setFilter] = useState("all")
  const [modalTab, setModalTab] = useState("overview")
  const carouselRef = useRef(null)
  const [isHovering, setIsHovering] = useState(null)

  const projects = [
    {
      title: "Hospital Management System",
      description:
        "A comprehensive system for managing hospital operations, patient records, appointments, and billing. Built with Django and React.",
      longDescription:
        "The Hospital Management System is a full-stack application designed to streamline hospital operations. It includes modules for patient management, appointment scheduling, doctor assignments, billing, and inventory management. The system features role-based access control, real-time notifications, and comprehensive reporting capabilities.",
      image: "/hms.png",
      tags: ["Django", "React", "Python", "Database"],
      category: "fullstack",
      links: {
        demo: "#",
        github: "#",
      },
      features: [
        "Patient records management",
        "Appointment scheduling",
        "Billing and invoicing",
        "Inventory management",
        "Staff management",
        "Reporting and analytics",
      ],
      technologies: [
        "Frontend: React, Redux, Tailwind CSS",
        "Backend: Django, Django REST Framework",
        "Database: PostgreSQL",
        "Authentication: JWT",
        "Deployment: Docker, AWS",
      ],
      gallery: [
        "/placeholder.svg?height=300&width=500",
        "/placeholder.svg?height=300&width=500",
        "/placeholder.svg?height=300&width=500",
      ],
    },
    {
      title: "Tint Clothing Website",
      description:
        "An e-commerce platform for a clothing brand with product catalog, shopping cart, and payment integration. Responsive design for all devices.",
      longDescription:
        "Tint is a modern e-commerce platform built for a clothing brand. The application features a dynamic product catalog with filtering and search capabilities, user accounts, wishlist functionality, shopping cart, and secure payment processing. The responsive design ensures a seamless shopping experience across all devices.",
      image: "/tint.png",
      tags: ["React", "CSS", "JavaScript", "API Integration"],
      category: "frontend",
      links: {
        demo: "#",
        github: "#",
      },
      features: [
        "Product catalog with categories",
        "User authentication and profiles",
        "Shopping cart functionality",
        "Wishlist management",
        "Secure payment processing",
        "Order tracking",
      ],
      technologies: [
        "Frontend: React, Context API, Styled Components",
        "Payment Integration: Stripe",
        "Authentication: Firebase Auth",
        "Hosting: Vercel",
      ],
      gallery: [
        "/placeholder.svg?height=300&width=500",
        "/placeholder.svg?height=300&width=500",
        "/placeholder.svg?height=300&width=500",
      ],
    },
    {
      title: "X-ray Image Analysis",
      description:
        "A machine learning application that analyzes X-ray images to detect abnormalities. Implemented using Python and deep learning frameworks.",
      longDescription:
        "This project leverages deep learning to analyze X-ray images and detect potential abnormalities. The system uses convolutional neural networks trained on a large dataset of labeled X-ray images. It provides a user-friendly interface for medical professionals to upload images and receive detailed analysis reports with highlighted areas of concern.",
      image: "/x-ray.png",
      tags: ["Python", "Machine Learning", "Image Processing"],
      category: "ml",
      links: {
        demo: "#",
        github: "#",
      },
      features: [
        "X-ray image upload and processing",
        "Abnormality detection using CNN",
        "Detailed analysis reports",
        "Visualization of detected areas",
        "Export functionality for reports",
      ],
      technologies: [
        "Python",
        "TensorFlow / Keras",
        "OpenCV for image processing",
        "Flask for web interface",
        "Docker for deployment",
      ],
      gallery: [
        "/placeholder.svg?height=300&width=500",
        "/placeholder.svg?height=300&width=500",
        "/placeholder.svg?height=300&width=500",
      ],
    },
    {
      title: "Portfolio Website",
      description:
        "A personal portfolio website showcasing skills, projects, and contact information. Built with React and Tailwind CSS.",
      longDescription:
        "This portfolio website serves as a digital resume and project showcase. It features a modern, responsive design with smooth animations and interactive elements. The site includes sections for personal information, skills, project details, education history, and contact information. It's built with React and styled using Tailwind CSS.",
      image: "/portfolio.png",
      tags: ["React", "Tailwind CSS", "JavaScript"],
      category: "frontend",
      links: {
        demo: "#",
        github: "#",
      },
      features: [
        "Responsive design for all devices",
        "Interactive UI with animations",
        "Project showcase with filtering",
        "Contact form with validation",
        "Dark mode support",
      ],
      technologies: [
        "React",
        "Tailwind CSS",
        "Framer Motion for animations",
        "React Hook Form for form handling",
        "Vercel for hosting",
      ],
      gallery: [
        "/placeholder.svg?height=300&width=500",
        "/placeholder.svg?height=300&width=500",
        "/placeholder.svg?height=300&width=500",
      ],
    },
  ]

  const filteredProjects = filter === "all" ? projects : projects.filter((project) => project.category === filter)

  const openProject = (project) => {
    setSelectedProject(project)
    setModalTab("overview")
    document.body.style.overflow = "hidden"
  }

  const closeProject = () => {
    setSelectedProject(null)
    document.body.style.overflow = "auto"
  }

  const nextProject = () => {
    setActiveIndex((prev) => (prev + 1) % projects.length)
  }

  const prevProject = () => {
    setActiveIndex((prev) => (prev - 1 + projects.length) % projects.length)
  }

  // Auto-rotate carousel
  useEffect(() => {
    if (!isHovering) {
      const interval = setInterval(() => {
        nextProject()
      }, 5000)
      return () => clearInterval(interval)
    }
  }, [isHovering, projects.length])

  const getCategoryLabel = (category) => {
    switch (category) {
      case "frontend":
        return "Frontend"
      case "fullstack":
        return "Full Stack"
      case "ml":
        return "Machine Learning"
      default:
        return category
    }
  }

  const getCategoryColor = (category) => {
    switch (category) {
      case "frontend":
        return "bg-blue-900/30 text-blue-300 border-blue-500/30"
      case "fullstack":
        return "bg-purple-900/30 text-purple-300 border-purple-500/30"
      case "ml":
        return "bg-green-900/30 text-green-300 border-green-500/30"
      default:
        return "bg-gray-800 text-gray-300 border-gray-600"
    }
  }

  // Xyndrix Logo Component
  const XyndrixLogo = ({ size = "default" }) => {
    const sizeClasses = {
      small: "w-8 h-8",
      default: "w-12 h-12",
      large: "w-16 h-16"
    }
    
    const textSizeClasses = {
      small: "text-lg",
      default: "text-2xl",
      large: "text-3xl"
    }

    return (
      <div className="flex items-center gap-3">
        <div className={`${sizeClasses[size]} bg-gradient-to-r rounded-lg flex items-center justify-center p-1 shadow-lg`}>
          <img
            src="/xyndrix.png"
            alt="Xyndrix Logo"
            className="w-full h-full object-contain"
          />
        </div>
        <span className={`${textSizeClasses[size]} font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500`}>
          Xyndrix
        </span>
      </div>
    )
  }

  // Company Statistics
  const companyStats = [
    { icon: Users, value: "15+", label: "Happy Clients" },
    { icon: Award, value: "5+", label: "Projects Delivered" },
    { icon: Star, value: "4.9", label: "Client Rating" },
    { icon: Zap, value: "99%", label: "Success Rate" }
  ]

  return (
    <section className="relative min-h-screen bg-black overflow-hidden">
      {/* Animated Background Gradients */}
      <div className="absolute inset-0">
        <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-900 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute top-0 -right-4 w-72 h-72 bg-pink-900 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-blue-900 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]"></div>

      {/* Content */}
      <div className="relative z-10">
        {/* Xyndrix Brand Marquee */}
        <div className="relative overflow-hidden py-8 border-b border-gray-800/50 bg-gradient-to-r from-gray-900/50 to-gray-800/50 backdrop-blur-sm">
          <div className="flex animate-marquee whitespace-nowrap">
            {/* First set of items */}
            <div className="flex items-center space-x-16 mx-8">
              {Array.from({ length: 8 }, (_, i) => (
                <div key={i} className="flex items-center space-x-16">
                  <XyndrixLogo />
                  <span className="text-gray-500 text-lg">•</span>
                </div>
              ))}
            </div>
            {/* Duplicate set for seamless loop */}
            <div className="flex items-center space-x-16 mx-8">
              {Array.from({ length: 8 }, (_, i) => (
                <div key={i} className="flex items-center space-x-16">
                  <XyndrixLogo />
                  <span className="text-gray-500 text-lg">•</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Company Advertisement Section */}
        <div className="container mx-auto px-4 py-20">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gray-900/50 backdrop-blur-sm rounded-3xl p-8 lg:p-12 border border-gray-800/50 shadow-2xl"
          >
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              {/* Left Side - Company Info */}
              <div className="text-center lg:text-left">
                <XyndrixLogo size="large" />
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="text-3xl lg:text-4xl font-bold text-white mt-6 mb-4"
                >
                  Software Company
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="text-gray-400 text-lg mb-6 leading-relaxed"
                >
                  Transforming ideas into digital reality. We specialize in full-stack development, 
                  machine learning solutions, and cutting-edge software applications that drive business growth.
                </motion.p>
                
                {/* Services */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  className="flex flex-wrap gap-3 justify-center lg:justify-start mb-8"
                >
                  {["Web Development", "Mobile Apps", "AI/ML Solutions", "Cloud Services"].map((service, index) => (
                    <span
                      key={index}
                      className="bg-gray-800/50 text-gray-300 px-4 py-2 rounded-full text-sm border border-gray-700/50 hover:border-purple-500/50 transition-colors"
                    >
                      {service}
                    </span>
                  ))}
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
                >
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white border-none hover:scale-105 transition-all duration-300"
                  >
                    Start Your Project
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-gray-700 text-gray-300 hover:bg-gray-800 hover:text-white transition-colors"
                  >
                    Learn More
                  </Button>
                </motion.div>
              </div>

              {/* Right Side - Company Stats */}
              <div className="grid grid-cols-2 gap-6">
                {companyStats.map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-gray-800/30 backdrop-blur-sm p-6 rounded-xl border border-gray-700/50 text-center hover:border-purple-500/50 transition-all duration-300 hover:scale-105"
                  >
                    <stat.icon className="h-8 w-8 text-purple-400 mx-auto mb-3" />
                    <h3 className="text-2xl font-bold text-white mb-1">{stat.value}</h3>
                    <p className="text-gray-400 text-sm">{stat.label}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* CSS for animations */}
      <style jsx>{`
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        .bg-grid-white\\/\\[0\\.02\\] {
          background-image: radial-gradient(circle, rgba(255, 255, 255, 0.02) 1px, transparent 1px);
        }
      `}</style>
    </section>
  )
}