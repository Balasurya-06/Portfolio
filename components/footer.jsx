"use client"
import { motion } from "framer-motion"
import { GithubIcon, LinkedinIcon, WhatsappIcon } from "@/components/social-icons"
import { Mail, MapPin, Briefcase } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { icon: <GithubIcon className="h-5 w-5" />, url: "https://github.com/balasurya", label: "GitHub" },
    { icon: <LinkedinIcon className="h-5 w-5" />, url: "https://linkedin.com/in/balasurya", label: "LinkedIn" },
    { icon: <WhatsappIcon className="h-5 w-5" />, url: "https://wa.me/919597075831", label: "WhatsApp" },
    { icon: <Mail className="h-5 w-5" />, url: "mailto:balasurya9597@gmail.com", label: "Email" },
  ]

  // Xyndrix Logo Component for Footer
  const XyndrixLogo = () => (
    <div className="flex items-center gap-2">
      <div className="w-6 h-6 bg-gradient-to-r from-purple-500 to-pink-500 rounded-md flex items-center justify-center p-0.5">
        <img
          src="/xyndrix.png"
          alt="Xyndrix Logo"
          className="w-full h-full object-contain"
        />
      </div>
      <span className="text-lg font-semibold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">
        Xyndrix
      </span>
    </div>
  )

  return (
    <footer className="bg-gray-900 text-white py-16 border-t border-purple-900/20">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {/* Personal Info */}
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
              Bala Surya S
            </h2>
            
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-gray-300">
                <Briefcase className="h-4 w-4 text-purple-400" />
                <span>Full Stack Developer</span>
              </div>
              
              <div className="flex items-center gap-2 text-gray-300">
                <MapPin className="h-4 w-4 text-purple-400" />
                <span>Tamil Nadu, India</span>
              </div>
            </div>

            <p className="text-gray-400 text-sm leading-relaxed">
              Passionate about creating innovative digital solutions with expertise in React, Django, and Python. 
              Always exploring new technologies and building meaningful projects.
            </p>
          </motion.div>

          {/* Company Info */}
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="space-y-3">
              <XyndrixLogo />
              <p className="text-gray-300 text-sm">Software Company</p>
              <p className="text-gray-400 text-sm leading-relaxed">
                Co-Founder, CFO & CMO at Xyndrix - Transforming ideas into digital reality through 
                innovative software solutions and cutting-edge technology.
              </p>
            </div>

            <div className="space-y-2">
              <h4 className="text-white font-medium">Services</h4>
              <ul className="text-gray-400 text-sm space-y-1">
                <li>• Web Development</li>
                <li>• Mobile Applications</li>
                <li>• AI/ML Solutions</li>
                <li>• Cloud Services</li>
              </ul>
            </div>
          </motion.div>

          {/* Contact & Social */}
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
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
                  className="bg-gray-800 p-3 rounded-full hover:bg-purple-900/50 transition-all duration-300 hover-target group"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  whileHover={{ y: -5, scale: 1.1 }}
                >
                  <div className="group-hover:text-purple-400 transition-colors">
                    {link.icon}
                  </div>
                </motion.a>
              ))}
            </div>

            <div className="pt-4">
              <motion.a
                href="mailto:balasurya9597@gmail.com"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-300 text-sm font-medium"
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
          className="border-t border-gray-800 pt-8"
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
              <span>Built with ❤️ using React & Next.js</span>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
