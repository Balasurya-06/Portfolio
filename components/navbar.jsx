"use client"
import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, ArrowUpRight } from "lucide-react"

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
    { name: "Gallery", id: "gallery" }, // Changed to ID scrolling
  ]

  return (
    <>
        <motion.nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out flex justify-center ${
                scrolled ? "py-4" : "py-6"
            }`}
             initial={{ y: -100 }}
             animate={{ y: 0 }}
             transition={{ duration: 0.5 }}
        >
            <div 
                className={`flex items-center justify-between transition-all duration-500 ease-in-out ${
                    scrolled 
                    ? "w-[90%] md:w-[70%] lg:w-[60%] bg-white/80 backdrop-blur-md border border-white/20 shadow-lg rounded-full px-6 py-3" 
                    : "w-[90%] bg-transparent px-0 py-2"
                }`}
            >
                {/* Logo */}
                <motion.div
                    className="flex items-center cursor-pointer"
                    onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                    whileHover={{ scale: 1.05 }}
                >
                    <div className="relative">
                        <span className="font-marker text-2xl font-bold text-black z-10 relative">Bala Surya</span>
                        <div className="absolute -bottom-1 left-0 w-full h-2 bg-yellow-400/50 -rotate-2 -z-0 rounded-sm"></div>
                    </div>
                </motion.div>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-1 bg-white/50 rounded-full px-2 py-1 border border-white/20 backdrop-blur-sm">
                    {navItems.map((item) => (
                         item.href ? (
                            <a
                                key={item.name}
                                href={item.href}
                                className="px-4 py-2 text-sm font-bold text-gray-600 hover:text-black hover:bg-white hover:shadow-sm rounded-full transition-all duration-300 capitalize"
                            >
                                {item.name}
                            </a>
                         ) : (
                            <button
                                key={item.name}
                                onClick={() => scrollToSection(item.id)}
                                className="px-4 py-2 text-sm font-bold text-gray-600 hover:text-black hover:bg-white hover:shadow-sm rounded-full transition-all duration-300 capitalize"
                            >
                                {item.name}
                            </button>
                         )
                    ))}
                </div>

                {/* CTA Button */}
                <div className="hidden md:block">
                     <button 
                        onClick={() => scrollToSection("contact")}
                        className="group flex items-center gap-2 bg-black text-white px-5 py-2.5 rounded-full font-bold text-sm hover:bg-yellow-400 hover:text-black transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5"
                     >
                        Let's Talk
                        <ArrowUpRight className="w-4 h-4 group-hover:rotate-45 transition-transform duration-300" />
                     </button>
                </div>

                {/* Mobile Menu Toggle */}
                <button className="md:hidden p-2 text-black" onClick={toggleMenu}>
                    {isMenuOpen ? <X /> : <Menu />}
                </button>
            </div>
        </motion.nav>

        {/* Mobile Navigation Menu Overlay */}
        <AnimatePresence>
            {isMenuOpen && (
            <motion.div
                className="fixed inset-0 z-40 bg-white/95 backdrop-blur-xl flex flex-col items-center justify-center space-y-8 md:hidden"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.2 }}
            >
                 {navItems.map((item, index) => (
                    item.href ? (
                        <a
                            key={item.name}
                            href={item.href}
                            className="text-3xl font-black text-black hover:text-yellow-500 capitalize"
                        >
                            {item.name}
                        </a>
                    ) : (
                        <button
                            key={item.name}
                            onClick={() => scrollToSection(item.id)}
                            className="text-3xl font-black text-black hover:text-yellow-500 capitalize"
                        >
                            {item.name}
                        </button>
                    )
                ))}
                <button
                    onClick={() => scrollToSection("contact")}
                    className="text-3xl font-black text-black hover:text-yellow-500 capitalize"
                >
                    Let's Talk
                </button>
            </motion.div>
            )}
        </AnimatePresence>
    </>
  )
}
