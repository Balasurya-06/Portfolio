"use client"
import { motion } from "framer-motion"
import { Linkedin, Github, Instagram, Mail, MapPin, Phone, ArrowUp } from "lucide-react"
import Image from "next/image"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { icon: Linkedin, href: "https://www.linkedin.com/in/balasurya06/", label: "LinkedIn", color: "hover:bg-[#0A66C2]" },
    { icon: Github, href: "https://github.com/Balasurya-06", label: "GitHub", color: "hover:bg-black" },
    { icon: Instagram, href: "https://www.instagram.com/surya.007._", label: "Instagram", color: "hover:bg-gradient-to-br hover:from-purple-500 hover:via-pink-500 hover:to-orange-500" }
  ]

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="relative bg-[#1a1a1a] text-white overflow-hidden">
      
      {/* Top Wave Decoration */}
      <div className="absolute top-0 left-0 right-0 h-20 bg-[#E8E4DC]">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="absolute bottom-0 w-full h-full">
          <path d="M0,0 C150,100 350,0 600,50 C850,100 1050,0 1200,50 L1200,120 L0,120 Z" fill="#1a1a1a"></path>
        </svg>
      </div>

      <div className="relative pt-32 pb-12">
        <div className="w-[95%] max-w-[1800px] mx-auto px-6">
          
          {/* Main Footer Content */}
          <div className="grid md:grid-cols-3 gap-16 mb-16">
            
            {/* Brand Section */}
            <div>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-8"
              >
                <h3 className="text-4xl font-black uppercase tracking-tight mb-2">
                  BALA<span className="text-[#FF8C42]">SURYA</span>
                </h3>
                <p className="text-[#FF8C42] font-bold uppercase tracking-wide text-sm mb-6">
                  Founder & Technology Leader
                </p>
                <p className="text-gray-400 leading-relaxed">
                  Building AI-powered solutions, leading teams, and creating impactful products through technology, leadership, and strategic execution.
                </p>
              </motion.div>

              {/* Back to Top Button */}
              <motion.button
                onClick={scrollToTop}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-3 px-6 py-3 bg-[#FF8C42] text-black rounded-full font-black text-sm uppercase hover:bg-white transition-all"
              >
                <ArrowUp className="w-4 h-4" />
                Back to Top
              </motion.button>
            </div>

            {/* Quick Contact */}
            <div>
              <h4 className="text-2xl font-black uppercase mb-6">Get in Touch</h4>
              <div className="space-y-4">
                <a href="mailto:balasurya9597@gmail.com" className="flex items-center gap-3 text-gray-400 hover:text-[#FF8C42] transition-colors group">
                  <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-[#FF8C42] transition-all">
                    <Mail className="w-5 h-5" />
                  </div>
                  <span className="font-medium">balasurya9597@gmail.com</span>
                </a>
                <a href="tel:+919597075831" className="flex items-center gap-3 text-gray-400 hover:text-[#FF8C42] transition-colors group">
                  <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-[#FF8C42] transition-all">
                    <Phone className="w-5 h-5" />
                  </div>
                  <span className="font-medium">+91 9597075831</span>
                </a>
                <div className="flex items-center gap-3 text-gray-400 group">
                  <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <span className="font-medium">Tirupur, Tamil Nadu</span>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-2xl font-black uppercase mb-6">Follow Me</h4>
              <div className="space-y-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className={`flex items-center gap-4 p-4 bg-white/5 rounded-2xl hover:scale-105 transition-all group ${social.color}`}
                  >
                    <social.icon className="w-6 h-6 text-white" />
                    <span className="font-bold text-white">{social.label}</span>
                  </motion.a>
                ))}
              </div>
            </div>

          </div>

          {/* Bottom Bar */}
          <div className="border-t border-white/10 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
              <p className="text-gray-400 text-sm font-medium text-center md:text-left">
                © {currentYear} Balasurya S. Crafted with passion and code. All rights reserved.
              </p>
              
              <div className="flex items-center gap-4">
                <span className="px-6 py-2 bg-[#FF8C42] text-black rounded-full text-xs font-black uppercase animate-pulse">
                  Open to Opportunities
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </footer>
  )
}
