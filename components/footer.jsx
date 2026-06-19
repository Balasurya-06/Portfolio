"use client"
import { motion } from "framer-motion"
import { Github, Linkedin, Instagram, ArrowUp, Sparkles, Rocket, Code2 } from "lucide-react"
import Image from "next/image"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const socialLinks = [
    { icon: Github, href: "https://github.com/Balasurya-06", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/balasurya06/", label: "LinkedIn" },
    { icon: Instagram, href: "https://www.instagram.com/surya.007._", label: "Instagram" },
  ]

  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/#about" },
    { name: "Projects", href: "/#projects" },
    { name: "Contact", href: "/#contact" },
  ]

  return (
    <footer className="relative bg-black text-white overflow-hidden">
      
      {/* Main Footer Content */}
      <div className="relative">
        
        {/* Bottom Navigation & Info */}
        <div className="bg-black border-t border-white/10 py-12">
          <div className="w-[90%] mx-auto px-6 lg:px-16">
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              
              {/* Logo/Brand with Photo */}
              <div className="space-y-4">
                <div className="flex items-center gap-6">
                  {/* Clean Photo - Larger and more visible */}
                  <div className="w-32 h-32 rounded-3xl overflow-hidden flex-shrink-0">
                    <Image
                      src="/surya.png"
                      alt="Bala Surya"
                      width={128}
                      height={128}
                      // className="object-cover w-full h-full"
                    />
                  </div>
                  <div>
                    <h3 className="text-3xl font-black text-white">Bala Surya</h3>
                    <p className="text-base text-gray-400 font-medium">Founder & Technology Leader</p>
                  </div>
                </div>
              </div>

              {/* Quick Links */}
              <div>
                <h4 className="text-sm font-black uppercase text-gray-400 mb-4 tracking-wider">Quick Links</h4>
                <ul className="space-y-2">
                  {quickLinks.map((link, idx) => (
                    <li key={idx}>
                      <a 
                        href={link.href}
                        className="text-white hover:text-yellow-400 transition-colors font-medium text-sm flex items-center gap-2 group"
                      >
                        <span className="w-1.5 h-1.5 bg-yellow-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Social Links */}
              <div>
                <h4 className="text-sm font-black uppercase text-gray-400 mb-4 tracking-wider">Connect</h4>
                <div className="flex gap-3">
                  {socialLinks.map((social, idx) => (
                    <motion.a
                      key={idx}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ y: -3, scale: 1.1 }}
                      className="w-10 h-10 bg-white/10 hover:bg-white border-2 border-white/20 hover:border-white rounded-lg flex items-center justify-center transition-all group"
                      aria-label={social.label}
                    >
                      <social.icon className="w-5 h-5 text-white group-hover:text-black transition-colors" />
                    </motion.a>
                  ))}
                </div>
              </div>

            </div>

            {/* Copyright Bar */}
            <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-gray-400 text-sm">
                © Copyright {currentYear} Bala Surya. All rights reserved.
              </p>
              
              <motion.button
                onClick={scrollToTop}
                whileHover={{ y: -3 }}
                className="flex items-center gap-2 bg-white/10 hover:bg-yellow-400 border-2 border-white/20 hover:border-yellow-400 px-4 py-2 rounded-lg text-white hover:text-black transition-all font-bold text-sm"
              >
                Back to Top
                <ArrowUp className="w-4 h-4" />
              </motion.button>
            </div>

          </div>
        </div>

      </div>

    </footer>
  )
}
