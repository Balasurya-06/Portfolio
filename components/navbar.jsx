"use client"
import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMenuOpen(false)
  }

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { name: "About", id: "about" },
    { name: "Projects", id: "projects" },
    { name: "Honors", id: "honors-awards" },
    { name: "Career Fit", id: "career-fit" },
    { name: "Gallery", id: "gallery" },
  ]

  return (
    <>
        <motion.nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
                scrolled ? "bg-[#E8E4DC]/95 backdrop-blur-md shadow-lg py-4" : "bg-transparent py-6"
            }`}
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <div className="w-[95%] max-w-[1800px] mx-auto px-6 flex items-center justify-between">
                
                {/* Logo */}
                <motion.button
                    onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                    whileHover={{ scale: 1.05 }}
                    className="text-2xl md:text-3xl font-black uppercase tracking-tight text-black"
                >
                    BALA<span className="text-[#FF8C42]">SURYA</span>
                </motion.button>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-2">
                    {navItems.map((item) => (
                        <button
                            key={item.name}
                            onClick={() => scrollToSection(item.id)}
                            className="px-6 py-3 text-sm font-bold text-black hover:text-[#FF8C42] transition-colors uppercase tracking-wide"
                        >
                            {item.name}
                        </button>
                    ))}
                </div>

                {/* CTA Button */}
                <div className="hidden md:block">
                     <button 
                        onClick={() => scrollToSection("contact")}
                        className="px-8 py-3 bg-black text-white rounded-full font-bold text-sm hover:bg-[#FF8C42] hover:text-black transition-all uppercase tracking-wide shadow-lg"
                     >
                        Let's Talk
                     </button>
                </div>

                {/* Mobile Menu Toggle */}
                <button 
                    className="md:hidden p-2 text-black hover:text-[#FF8C42] transition-colors" 
                    onClick={toggleMenu}
                >
                    {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>
        </motion.nav>

        {/* Mobile Navigation Menu */}
        <AnimatePresence>
            {isMenuOpen && (
            <motion.div
                className="fixed inset-0 z-40 bg-[#E8E4DC] flex flex-col items-center justify-center space-y-8 md:hidden"
                initial={{ opacity: 0, x: "100%" }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: "100%" }}
                transition={{ duration: 0.3 }}
            >
                {navItems.map((item, index) => (
                    <motion.button
                        key={item.name}
                        onClick={() => scrollToSection(item.id)}
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="text-4xl font-black text-black hover:text-[#FF8C42] uppercase tracking-tight"
                    >
                        {item.name}
                    </motion.button>
                ))}
                <motion.button
                    onClick={() => scrollToSection("contact")}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="px-12 py-4 bg-black text-white rounded-full font-black text-xl uppercase tracking-wide mt-8"
                >
                    Let's Talk
                </motion.button>
            </motion.div>
            )}
        </AnimatePresence>
    </>
  )
}
