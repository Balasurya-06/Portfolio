"use client"
import { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ExternalLink, Github, X, ChevronLeft, ChevronRight, Filter, Code, Eye, Layers } from "lucide-react"
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

  return (
    <section id="projects" className="py-20 bg-black relative overflow-hidden" style={{colorScheme:"dark"}}>
      {/* Background elements */}
      <div className="absolute top-20 left-20 w-64 h-64 bg-purple-900/20 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
      <div className="absolute bottom-20 right-20 w-64 h-64 bg-pink-900/20 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>

      <div className="container mx-auto px-4 relative z-10">
        <AnimatedText
          text="My Projects"
          className="text-3xl font-bold text-center mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500"
        />

        <div className="text-center mb-12">
          <p className="text-gray-300 max-w-2xl mx-auto">
            Explore my latest projects showcasing my skills in web development, machine learning, and more. Each project
            represents my passion for creating innovative solutions.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex justify-center mb-12 flex-wrap gap-2">
          <Button
            variant={filter === "all" ? "default" : "outline"}
            onClick={() => setFilter("all")}
            className={`${
              filter === "all"
                ? "bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white"
                : "border-purple-500/50 text-purple-400 hover:bg-purple-500/10"
            } hover-target`}
          >
            <Layers className="h-4 w-4 mr-2" />
            All Projects
          </Button>
          <Button
            variant={filter === "frontend" ? "default" : "outline"}
            onClick={() => setFilter("frontend")}
            className={`${
              filter === "frontend"
                ? "bg-blue-600 hover:bg-blue-700 text-white"
                : "border-blue-500/50 text-blue-400 hover:bg-blue-500/10"
            } hover-target`}
          >
            <Eye className="h-4 w-4 mr-2" />
            Frontend
          </Button>
          <Button
            variant={filter === "fullstack" ? "default" : "outline"}
            onClick={() => setFilter("fullstack")}
            className={`${
              filter === "fullstack"
                ? "bg-purple-600 hover:bg-purple-700 text-white"
                : "border-purple-500/50 text-purple-400 hover:bg-purple-500/10"
            } hover-target`}
          >
            <Code className="h-4 w-4 mr-2" />
            Full Stack
          </Button>
          <Button
            variant={filter === "ml" ? "default" : "outline"}
            onClick={() => setFilter("ml")}
            className={`${
              filter === "ml"
                ? "bg-green-600 hover:bg-green-700 text-white"
                : "border-green-500/50 text-green-400 hover:bg-green-500/10"
            } hover-target`}
          >
            <Filter className="h-4 w-4 mr-2" />
            Machine Learning
          </Button>
        </div>

        {/* Featured Project */}
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
            className="relative"
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
          >
            <div className="absolute top-1/2 left-4 transform -translate-y-1/2 z-10">
              <Button
                variant="ghost"
                size="icon"
                onClick={prevProject}
                className="rounded-full bg-black/50 hover:bg-black/70 text-white hover:text-purple-400 hover-target"
              >
                <ChevronLeft className="h-6 w-6" />
              </Button>
            </div>

            <div className="absolute top-1/2 right-4 transform -translate-y-1/2 z-10">
              <Button
                variant="ghost"
                size="icon"
                onClick={nextProject}
                className="rounded-full bg-black/50 hover:bg-black/70 text-white hover:text-purple-400 hover-target"
              >
                <ChevronRight className="h-6 w-6" />
              </Button>
            </div>

            <div ref={carouselRef} className="overflow-hidden rounded-xl">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="relative"
                >
                  <div className="aspect-[16/9] overflow-hidden">
                    <img
                      src={projects[activeIndex].image || "/placeholder.svg"}
                      alt={projects[activeIndex].title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent flex flex-col justify-end p-8">
                      <div className="mb-2">
                        <Badge
                          className={`${getCategoryColor(
                            projects[activeIndex].category,
                          )} border text-xs px-2 py-0.5 rounded-full`}
                        >
                          {getCategoryLabel(projects[activeIndex].category)}
                        </Badge>
                      </div>
                      <h3 className="text-3xl font-bold text-white mb-2">{projects[activeIndex].title}</h3>
                      <p className="text-gray-300 mb-4 max-w-2xl">{projects[activeIndex].description}</p>

                      <div className="flex flex-wrap gap-2 mb-4">
                        {projects[activeIndex].tags.map((tag, i) => (
                          <span key={i} className="bg-gray-800/80 text-gray-300 text-xs px-3 py-1 rounded-full">
                            {tag}
                          </span>
                        ))}
                      </div>

                      <div className="flex gap-3">
                        <Button
                          onClick={() => openProject(projects[activeIndex])}
                          className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white border-none hover-target"
                        >
                          View Details
                        </Button>
                        <Button
                          variant="outline"
                          onClick={() => window.open(projects[activeIndex].links.github, "_blank")}
                          className="border-purple-500/50 text-purple-400 hover:bg-purple-500/10 hover-target"
                        >
                          <Github className="h-4 w-4 mr-2" />
                          View Code
                        </Button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Pagination dots */}
            <div className="flex justify-center mt-4 gap-2">
              {projects.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === activeIndex ? "bg-purple-500 scale-125" : "bg-gray-600 hover:bg-gray-400"
                  }`}
                  aria-label={`Go to project ${index + 1}`}
                />
              ))}
            </div>
          </motion.div>
        </div>

        {/* Project Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group"
            >
              <div className="bg-gray-900/50 border border-purple-900/30 rounded-xl overflow-hidden shadow-lg hover:shadow-purple-500/10 transition-all duration-300 h-full flex flex-col hover-target">
                <div className="relative overflow-hidden">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <div className="flex gap-2">
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => window.open(project.links.github, "_blank")}
                        className="border-white/50 text-white hover:bg-white/10 hover-target"
                      >
                        <Github className="h-4 w-4" />
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => window.open(project.links.demo, "_blank")}
                        className="border-white/50 text-white hover:bg-white/10 hover-target"
                      >
                        <ExternalLink className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                  <div className="absolute top-2 left-2">
                    <Badge className={`${getCategoryColor(project.category)} border text-xs px-2 py-0.5 rounded-full`}>
                      {getCategoryLabel(project.category)}
                    </Badge>
                  </div>
                </div>

                <div className="p-5 flex-grow flex flex-col">
                  <h3 className="text-xl font-bold mb-2 text-white">{project.title}</h3>

                  <div className="flex flex-wrap gap-1 mb-3">
                    {project.tags.slice(0, 3).map((tag, i) => (
                      <span key={i} className="bg-gray-800 text-gray-300 text-xs px-2 py-0.5 rounded-full">
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > 3 && (
                      <span className="bg-gray-800 text-gray-400 text-xs px-2 py-0.5 rounded-full">
                        +{project.tags.length - 3}
                      </span>
                    )}
                  </div>

                  <p className="text-gray-400 text-sm mb-4 line-clamp-2">{project.description}</p>

                  <Button
                    variant="link"
                    onClick={() => openProject(project)}
                    className="text-purple-400 p-0 hover:text-purple-300 mt-auto self-start"
                  >
                    Learn more
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-400 text-lg">No projects found in this category.</p>
          </div>
        )}
      </div>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 overflow-y-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeProject}
          >
            <motion.div
              className="bg-gray-900 border border-purple-900/30 rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto my-8"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative">
                <img
                  src={selectedProject.image || "/placeholder.svg"}
                  alt={selectedProject.title}
                  className="w-full h-64 object-cover"
                />
                <button
                  onClick={closeProject}
                  className="absolute top-4 right-4 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 hover-target"
                >
                  <X className="h-5 w-5" />
                </button>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-6">
                  <Badge
                    className={`${getCategoryColor(
                      selectedProject.category,
                    )} border text-xs px-2 py-0.5 rounded-full mb-2`}
                  >
                    {getCategoryLabel(selectedProject.category)}
                  </Badge>
                  <h2 className="text-2xl font-bold text-white">{selectedProject.title}</h2>
                </div>
              </div>

              <div className="p-6">
                <Tabs defaultValue="overview" onValueChange={setModalTab}>
                  <TabsList className="bg-gray-800 border border-gray-700 mb-6">
                    <TabsTrigger
                      value="overview"
                      className="data-[state=active]:bg-purple-900/30 data-[state=active]:text-purple-300"
                    >
                      Overview
                    </TabsTrigger>
                    <TabsTrigger
                      value="features"
                      className="data-[state=active]:bg-purple-900/30 data-[state=active]:text-purple-300"
                    >
                      Features
                    </TabsTrigger>
                    <TabsTrigger
                      value="tech"
                      className="data-[state=active]:bg-purple-900/30 data-[state=active]:text-purple-300"
                    >
                      Technologies
                    </TabsTrigger>
                    <TabsTrigger
                      value="gallery"
                      className="data-[state=active]:bg-purple-900/30 data-[state=active]:text-purple-300"
                    >
                      Gallery
                    </TabsTrigger>
                  </TabsList>

                  <TabsContent value="overview" className="mt-0">
                    <div className="flex flex-wrap gap-2 mb-6">
                      {selectedProject.tags.map((tag, i) => (
                        <span key={i} className="bg-gray-800 text-gray-300 text-xs px-3 py-1 rounded-full">
                          {tag}
                        </span>
                      ))}
                    </div>

                    <p className="text-gray-300 mb-6">{selectedProject.longDescription}</p>

                    <div className="flex justify-end gap-3">
                      <Button
                        variant="outline"
                        onClick={() => window.open(selectedProject.links.github, "_blank")}
                        className="border-purple-500/50 text-purple-400 hover:bg-purple-500/10 hover-target"
                      >
                        <Github className="h-4 w-4 mr-2" />
                        View Code
                      </Button>
                      <Button
                        onClick={() => window.open(selectedProject.links.demo, "_blank")}
                        className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white border-none hover-target"
                      >
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Live Demo
                      </Button>
                    </div>
                  </TabsContent>

                  <TabsContent value="features" className="mt-0">
                    <h3 className="text-xl font-semibold text-white mb-4">Key Features</h3>
                    <ul className="space-y-2">
                      {selectedProject.features.map((feature, index) => (
                        <motion.li
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3, delay: index * 0.1 }}
                          className="flex items-start"
                        >
                          <div className="bg-purple-900/30 p-1 rounded-full mr-3 mt-1">
                            <div className="h-2 w-2 bg-purple-400 rounded-full"></div>
                          </div>
                          <span className="text-gray-300">{feature}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </TabsContent>

                  <TabsContent value="tech" className="mt-0">
                    <h3 className="text-xl font-semibold text-white mb-4">Technologies Used</h3>
                    <ul className="space-y-2">
                      {selectedProject.technologies.map((tech, index) => (
                        <motion.li
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3, delay: index * 0.1 }}
                          className="flex items-start"
                        >
                          <div className="bg-purple-900/30 p-1 rounded-full mr-3 mt-1">
                            <div className="h-2 w-2 bg-purple-400 rounded-full"></div>
                          </div>
                          <span className="text-gray-300">{tech}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </TabsContent>

                  <TabsContent value="gallery" className="mt-0">
                    <h3 className="text-xl font-semibold text-white mb-4">Project Gallery</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {selectedProject.gallery.map((image, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.3, delay: index * 0.1 }}
                          className="overflow-hidden rounded-lg"
                        >
                          <img
                            src={image || "/placeholder.svg"}
                            alt={`${selectedProject.title} screenshot ${index + 1}`}
                            className="w-full h-auto object-cover hover:scale-105 transition-transform duration-300"
                          />
                        </motion.div>
                      ))}
                    </div>
                  </TabsContent>
                </Tabs>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
