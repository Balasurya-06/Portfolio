"use client"
import { motion } from "framer-motion"
import { GithubIcon, LinkedinIcon, WhatsappIcon } from "@/components/social-icons"
import { Mail } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { icon: <GithubIcon className="h-5 w-5" />, url: "https://github.com/balasurya", label: "GitHub" },
    { icon: <LinkedinIcon className="h-5 w-5" />, url: "https://linkedin.com/in/balasurya", label: "LinkedIn" },
    { icon: <WhatsappIcon className="h-5 w-5" />, url: "https://wa.me/919597075831", label: "WhatsApp" },
    { icon: <Mail className="h-5 w-5" />, url: "mailto:balasurya9597@gmail.com", label: "Email" },
  ]

  return (
    <footer className="bg-gray-900 text-white py-12 border-t border-purple-900/20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <motion.div
            className="mb-6 md:mb-0"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
              Bala Surya S
            </h2>
            <p className="text-gray-400 mt-2">Full Stack Developer</p>
          </motion.div>

          <div className="flex space-x-4">
            {socialLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
                className="bg-gray-800 p-2 rounded-full hover:bg-purple-900/50 transition-colors hover-target"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5, scale: 1.1 }}
              >
                {link.icon}
              </motion.a>
            ))}
          </div>
        </div>

        <motion.div
          className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <p>&copy; {currentYear} Bala Surya S. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  )
}
