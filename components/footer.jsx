"use client"
import { motion } from "framer-motion"
import { GithubIcon, LinkedinIcon, WhatsappIcon } from "@/components/social-icons"
import { Mail, MapPin, Briefcase } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { icon: <GithubIcon className="h-5 w-5" />, url: "https://github.com/Balasurya-06/", label: "GitHub" },
    { icon: <LinkedinIcon className="h-5 w-5" />, url: "https://linkedin.com/in/balasurya", label: "LinkedIn" },
    { icon: <WhatsappIcon className="h-5 w-5" />, url: "https://wa.me/919597075831", label: "WhatsApp" },
    { icon: <Mail className="h-5 w-5" />, url: "mailto:balasurya9597@gmail.com", label: "Email" },
  ]

  return (
    <footer className="relative overflow-hidden text-white py-16 border-t border-white/10 backdrop-blur-sm">
      <div className="container mx-auto px-6 lg:px-16">
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Personal Info */}
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold bg-gradient-to-r from-orange-500 to-orange-500 bg-clip-text text-transparent">
              Bala Surya S
            </h2>
            
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-gray-300">
                <Briefcase className="h-4 w-4 text-orange-500" />
                <span>Full Stack Developer</span>
              </div>
              
              <div className="flex items-center gap-2 text-gray-300">
                <MapPin className="h-4 w-4 text-orange-500" />
                <span>Tamil Nadu, India</span>
              </div>
            </div>

            <p className="text-gray-400 text-sm leading-relaxed">
              Passionate about creating innovative digital solutions with expertise in React, Django, and Python. 
              Always exploring new technologies and building meaningful projects.
            </p>
          </motion.div>

          {/* Contact & Social */}
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="text-xl font-semibold text-white">Let's Connect</h3>
            
            <p className="text-gray-400 text-sm">
              Have a project in mind? Let's discuss how we can bring your ideas to life.
            </p>

            <div className="flex flex-wrap gap-3">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  className="backdrop-blur-sm bg-white/5 border border-white/10 p-3 rounded-xl hover:bg-orange-500/20 hover:border-orange-500/50 transition-all duration-300 hover-target group"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  whileHover={{ y: -5, scale: 1.1 }}
                >
                  <div className="group-hover:text-orange-500 transition-colors">
                    {link.icon}
                  </div>
                </motion.a>
              ))}
            </div>

            <div className="pt-4">
              <motion.a
                href="mailto:balasurya9597@gmail.com"
                className="inline-flex items-center gap-2 bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-orange-600 transition-all duration-300 text-sm font-semibold shadow-lg shadow-orange-500/30"
                whileHover={{ scale: 1.05 }}
              >
                <Mail className="h-4 w-4" />
                Get In Touch
              </motion.a>
            </div>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          className="border-t border-white/10 pt-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              &copy; {currentYear} Bala Surya S. All rights reserved.
            </p>
            
            <div className="flex items-center gap-4 text-gray-400 text-sm">
              <span>Vygron Technologies</span>
              <span>/</span>
              <span>Xyndrix</span>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
