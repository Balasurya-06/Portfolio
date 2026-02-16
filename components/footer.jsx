"use client"
import { motion } from "framer-motion"
import { Github, Linkedin, Instagram, Twitter, ArrowUp, Send, Heart } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const socialLinks = [
    { icon: Github, href: "https://github.com/Balasurya-06", label: "GitHub", color: "hover:bg-[#333] hover:text-white" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/balasurya-s-841b5225a/", label: "LinkedIn", color: "hover:bg-[#0077b5] hover:text-white" },
    { icon: Instagram, href: "https://www.instagram.com/_surya_x.06", label: "Instagram", color: "hover:bg-[#E1306C] hover:text-white" },
  ]

  const footerLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/#about" },
    { name: "Projects", href: "/#projects" },
    { name: "Gallery", href: "/gallery" },
  ]

  return (
    <footer className="relative bg-black text-white overflow-hidden border-t-8 border-yellow-400">
      
      {/* Marquee Section */}
      <div className="bg-yellow-400 py-4 overflow-hidden border-b-4 border-black rotate-1 scale-105 -translate-y-2 transform">
        <motion.div 
          className="whitespace-nowrap flex gap-10 text-black font-black text-2xl uppercase tracking-widest"
          animate={{ x: [0, -1000] }}
          transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
        >
          {Array(20).fill("Let's Build Something Amazing • ").map((text, i) => (
             <span key={i}>{text}</span>
          ))}
        </motion.div>
      </div>

      <div className="w-[90%] mx-auto px-6 lg:px-16 py-20 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-12 gap-12 mb-20">
            
            {/* Brand Section */}
            <div className="lg:col-span-5 space-y-8">
                <div className="inline-block relative">
                     <span className="absolute -inset-2 bg-yellow-400 transform -rotate-2 rounded-lg"></span>
                     <h2 className="relative text-5xl md:text-7xl font-black uppercase tracking-tighter text-black bg-white px-6 py-2 border-4 border-black rounded-lg transform rotate-2">
                        Bala Surya
                     </h2>
                </div>
                <p className="text-gray-400 text-lg leading-relaxed max-w-sm pt-4">
                    Full Stack Developer & Entrepreneur from <span className="text-white font-bold">Paruvai, Palladam</span>. 
                    Building digital experiences that merge creativity with code.
                </p>
                
                <div className="flex gap-4 pt-4">
                    {socialLinks.map((social, idx) => (
                         <motion.a
                            key={idx}
                            href={social.href}
                            target="_blank"
                            rel="noreferrer"
                            whileHover={{ y: -5, rotate: 5, scale: 1.1 }}
                            className={`w-14 h-14 bg-white text-black border-4 border-black rounded-xl flex items-center justify-center transition-all shadow-[4px_4px_0px_0px_rgba(255,255,255,0.5)] ${social.color}`}
                         >
                             <social.icon size={24} className="stroke-[2.5]" />
                         </motion.a>
                    ))}
                </div>
            </div>

            {/* Links Section */}
            <div className="lg:col-span-3 lg:col-start-7 space-y-8">
                 <h3 className="text-3xl font-black uppercase text-yellow-400 relative inline-block">
                    Menu
                    <span className="absolute -bottom-2 left-0 w-full h-1 bg-white rounded-full"></span>
                 </h3>
                 <ul className="space-y-4">
                    {footerLinks.map((link, idx) => (
                        <li key={idx}>
                            <a href={link.href} className="text-xl font-bold text-gray-300 hover:text-yellow-400 hover:pl-2 transition-all flex items-center gap-3 group">
                                <span className="w-2 h-2 bg-yellow-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                                {link.name}
                            </a>
                        </li>
                    ))}
                 </ul>
            </div>

            {/* Newsletter / Contact */}
            <div className="lg:col-span-4 space-y-8">
                <h3 className="text-3xl font-black uppercase text-yellow-400 relative inline-block">
                    Let's Talk
                    <span className="absolute -bottom-2 left-0 w-full h-1 bg-white rounded-full"></span>
                </h3>
                <p className="text-gray-400 text-lg">
                    Have an idea or just want to say hi? Drop me a message!
                </p>
                <div className="flex flex-col gap-4">
                     <a 
                        href="mailto:balasurya9597@gmail.com"
                        className="bg-white text-black border-4 border-black rounded-xl px-6 py-4 font-black uppercase tracking-wider hover:bg-yellow-400 hover:-translate-y-1 hover:shadow-[6px_6px_0px_0px_rgba(255,255,255,0.5)] transition-all flex items-center justify-between group"
                     >
                        Say Hello
                        <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                     </a>
                </div>
            </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t-2 border-dashed border-white/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
             <div className="flex flex-col md:flex-row items-center gap-2 text-gray-500 font-medium text-sm">
                <p>&copy; {currentYear} Bala Surya. All rights reserved.</p>
                <span className="hidden md:inline">•</span>
                <div className="flex items-center gap-1">
                    {/* <span>Made with</span>
                    <Heart size={14} className="text-red-500 fill-red-500 animate-pulse" />
                    <span>using Next.js</span> */}
                </div>
             </div>

             <motion.button 
                onClick={scrollToTop}
                whileHover={{ y: -5 }}
                className="flex items-center gap-2 bg-yellow-400 text-black px-4 py-2 rounded-lg font-black uppercase tracking-wider text-sm border-2 border-black shadow-[2px_2px_0px_0px_rgba(255,255,255,0.8)] hover:shadow-none hover:translate-y-[2px] transition-all"
             >
                Back to Top <ArrowUp size={16} />
             </motion.button>
        </div>
      </div>
      
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-yellow-400/10 rounded-full blur-[100px] -z-10 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-blue-500/10 rounded-full blur-[100px] -z-10 pointer-events-none"></div>

    </footer>
  )
}
