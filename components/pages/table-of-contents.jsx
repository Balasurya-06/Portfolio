"use client"
import { motion } from "framer-motion"
import { PenTool, Layout, Cpu, ArrowRight } from "lucide-react"

export default function TableOfContents() {
  const items = [
    { title: "Web Development", icon: PenTool, href: "#projects" },
    { title: "App Development", icon: Smartphone, href: "#projects" },
    { title: "UI/UX Design", icon: Layout, href: "#projects" },
    { title: "AI Solutions", icon: Cpu, href: "#projects" }
  ]

  // Helper for icons since I used a variable in the array
  function Smartphone(props) {
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          {...props}
        >
          <rect width="14" height="20" x="5" y="2" rx="2" ry="2" />
          <path d="M12 18h.01" />
        </svg>
      )
  }

  return (
    <section className="py-20 bg-[#e6e6e6] text-[#1a1a1a] relative overflow-hidden">
      <div className="container mx-auto px-6 lg:px-16">
        
        {/* Title */}
        <div className="text-center mb-16 relative">
             <h2 className="text-[4rem] md:text-[6rem] font-black text-gray-200 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full select-none z-0">
                 TABLE OF CONTENT
             </h2>
             <div className="relative z-10 inline-block">
                 <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter">
                     Table <span className="bg-yellow-400 px-2 text-black">Of</span> Content<span className="text-yellow-400">.</span>
                 </h2>
             </div>
             
             <div className="flex justify-center mt-4">
                 <div className="w-12 h-12 rounded-full border border-gray-400 flex items-center justify-center">
                     <ArrowRight className="w-6 h-6 rotate-90" />
                 </div>
             </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {items.map((item, index) => (
                <a 
                    key={index} 
                    href={item.href}
                    className="group relative bg-yellow-400 rounded-[2rem] p-8 aspect-square flex flex-col items-center justify-center gap-6 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
                >
                    <div className="bg-[#1a1a1a] p-4 rounded-2xl text-yellow-400 group-hover:scale-110 transition-transform duration-300">
                        <item.icon className="w-12 h-12" />
                    </div>
                    <h3 className="text-xl font-bold text-center text-black leading-tight">
                        {item.title}
                    </h3>
                    
                    {/* Decorative elements */}
                    <div className="absolute top-4 right-4 w-3 h-3 bg-black rounded-full opacity-20"></div>
                    <div className="absolute bottom-4 left-4 w-16 h-1 bg-black rounded-full opacity-10"></div>
                </a>
            ))}
        </div>

        {/* Number 03 background */}
        <div className="absolute -bottom-20 -left-20 text-[20rem] font-black text-white opacity-40 select-none pointer-events-none">
            03
        </div>
      </div>
    </section>
  )
}
