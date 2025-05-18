"use client"
import { useState, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Mail, Phone, Send, MapPin, CheckCircle, AlertCircle, Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import AnimatedText from "@/components/animated-text"
import { GithubIcon, LinkedinIcon, WhatsappIcon } from "@/components/social-icons"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const [formErrors, setFormErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)
  const formRef = useRef(null)

  const validateForm = () => {
    const errors = {}
    if (!formData.name.trim()) errors.name = "Name is required"
    if (!formData.email.trim()) errors.email = "Email is required"
    else if (!/\S+@\S+\.\S+/.test(formData.email)) errors.email = "Email is invalid"
    if (!formData.message.trim()) errors.message = "Message is required"
    return errors
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))

    // Clear error when user types
    if (formErrors[name]) {
      setFormErrors((prev) => ({ ...prev, [name]: undefined }))
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    // Validate form
    const errors = validateForm()
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors)
      return
    }

    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitStatus("success")
      setFormData({ name: "", email: "", subject: "", message: "" })

      // Reset status after 5 seconds
      setTimeout(() => setSubmitStatus(null), 5000)
    }, 1500)
  }

  const openWhatsApp = () => {
    const phoneNumber = "919597075831" // Your phone number with country code
    const message = "Hello Bala, I'd like to connect with you!"
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, "_blank")
  }

  return (
    <section id="contact" className="py-20 bg-black relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-20 left-20 w-64 h-64 bg-purple-900/20 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
      <div className="absolute bottom-20 right-20 w-64 h-64 bg-pink-900/20 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>

      <div className="container mx-auto px-4 relative z-10">
        <AnimatedText
          text="Get In Touch"
          className="text-3xl font-bold text-center mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500"
        />

        <div className="text-center mb-12">
          <p className="text-gray-300 max-w-2xl mx-auto">
            Feel free to reach out to me for any inquiries, collaboration opportunities, or just to say hello. I'm
            always open to discussing new projects and ideas.
          </p>
        </div>

        <div className="grid md:grid-cols-12 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <motion.div
            className="md:col-span-5"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
          >
            <Card className="bg-gray-900/50 border-purple-900/30 shadow-lg backdrop-blur-sm h-full">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-6 text-white">Contact Information</h3>

                <div className="space-y-8">
                  <motion.div
                    className="flex items-start gap-4"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    whileHover={{ x: 5 }}
                  >
                    <div className="bg-purple-900/30 p-3 rounded-full">
                      <Mail className="h-6 w-6 text-purple-400" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">Email</p>
                      <a
                        href="mailto:balasurya9597@gmail.com"
                        className="font-medium text-white hover:text-purple-400 transition-colors hover-target"
                      >
                        balasurya9597@gmail.com
                      </a>
                    </div>
                  </motion.div>

                  <motion.div
                    className="flex items-start gap-4"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    whileHover={{ x: 5 }}
                  >
                    <div className="bg-purple-900/30 p-3 rounded-full">
                      <Phone className="h-6 w-6 text-purple-400" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">Phone</p>
                      <a
                        href="tel:+919597075831"
                        className="font-medium text-white hover:text-purple-400 transition-colors hover-target"
                      >
                        +91 9597075831
                      </a>
                    </div>
                  </motion.div>

                  <motion.div
                    className="flex items-start gap-4"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    whileHover={{ x: 5 }}
                  >
                    <div className="bg-purple-900/30 p-3 rounded-full">
                      <MapPin className="h-6 w-6 text-purple-400" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">Location</p>
                      <p className="font-medium text-white">Tamil Nadu, India</p>
                    </div>
                  </motion.div>
                </div>

                <div className="mt-12">
                  <h4 className="text-lg font-medium text-white mb-4">Connect With Me</h4>
                  <div className="flex gap-3">
                    <motion.a
                      href="https://github.com/balasurya"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-gray-800 p-3 rounded-full hover:bg-gray-700 text-white hover:text-purple-400 transition-all duration-300 hover-target"
                      whileHover={{ y: -5, scale: 1.1 }}
                    >
                      <GithubIcon className="h-5 w-5" />
                    </motion.a>
                    <motion.a
                      href="https://linkedin.com/in/balasurya"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-gray-800 p-3 rounded-full hover:bg-gray-700 text-white hover:text-purple-400 transition-all duration-300 hover-target"
                      whileHover={{ y: -5, scale: 1.1 }}
                    >
                      <LinkedinIcon className="h-5 w-5" />
                    </motion.a>
                    <motion.button
                      onClick={openWhatsApp}
                      className="bg-gray-800 p-3 rounded-full hover:bg-green-700 text-white transition-all duration-300 hover-target"
                      whileHover={{ y: -5, scale: 1.1 }}
                    >
                      <WhatsappIcon className="h-5 w-5" />
                    </motion.button>
                  </div>
                </div>

                <div className="mt-12 p-6 bg-gradient-to-br from-purple-900/30 to-pink-900/30 rounded-lg border border-purple-900/30">
                  <h4 className="text-lg font-medium text-white mb-2">Let's Work Together</h4>
                  <p className="text-gray-300 mb-4">
                    Have a project in mind? I'm available for freelance work and collaborations.
                  </p>
                  <Button
                    onClick={openWhatsApp}
                    className="bg-green-600 hover:bg-green-700 text-white border-none hover-target w-full"
                  >
                    <WhatsappIcon className="h-4 w-4 mr-2" />
                    Message on WhatsApp
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            className="md:col-span-7"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
          >
            <Card className="bg-gray-900/50 border-purple-900/30 shadow-lg backdrop-blur-sm">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-6 text-white">Send Me a Message</h3>

                <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="block text-sm font-medium text-gray-300">
                        Your Name <span className="text-red-500">*</span>
                      </label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className={`bg-gray-800/50 border-gray-700 text-white focus:border-purple-500 focus:ring-purple-500 ${
                          formErrors.name ? "border-red-500" : ""
                        }`}
                      />
                      {formErrors.name && (
                        <p className="text-red-500 text-xs mt-1 flex items-center">
                          <AlertCircle className="h-3 w-3 mr-1" />
                          {formErrors.name}
                        </p>
                      )}
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="email" className="block text-sm font-medium text-gray-300">
                        Your Email <span className="text-red-500">*</span>
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={`bg-gray-800/50 border-gray-700 text-white focus:border-purple-500 focus:ring-purple-500 ${
                          formErrors.email ? "border-red-500" : ""
                        }`}
                      />
                      {formErrors.email && (
                        <p className="text-red-500 text-xs mt-1 flex items-center">
                          <AlertCircle className="h-3 w-3 mr-1" />
                          {formErrors.email}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-300">
                      Subject
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="bg-gray-800/50 border-gray-700 text-white focus:border-purple-500 focus:ring-purple-500"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="block text-sm font-medium text-gray-300">
                      Message <span className="text-red-500">*</span>
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      className={`bg-gray-800/50 border-gray-700 text-white focus:border-purple-500 focus:ring-purple-500 ${
                        formErrors.message ? "border-red-500" : ""
                      }`}
                    />
                    {formErrors.message && (
                      <p className="text-red-500 text-xs mt-1 flex items-center">
                        <AlertCircle className="h-3 w-3 mr-1" />
                        {formErrors.message}
                      </p>
                    )}
                  </div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                  >
                    <Button
                      type="submit"
                      className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white border-none hover-target"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <span className="flex items-center">
                          <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                          Sending...
                        </span>
                      ) : (
                        <span className="flex items-center">
                          <Send className="h-4 w-4 mr-2" />
                          Send Message
                        </span>
                      )}
                    </Button>
                  </motion.div>

                  <AnimatePresence>
                    {submitStatus === "success" && (
                      <motion.div
                        className="bg-green-900/50 border border-green-500/30 text-green-400 p-4 rounded-lg flex items-center"
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                      >
                        <CheckCircle className="h-5 w-5 mr-2" />
                        <span>Your message has been sent successfully! I'll get back to you soon.</span>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
