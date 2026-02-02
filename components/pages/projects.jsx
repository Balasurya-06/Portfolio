"use client"
import { motion } from "framer-motion"
import { Users, Award, Star, TrendingUp, Globe, ArrowUpRight, Code2, Target, Rocket, Briefcase, Zap, Trophy, Box, Megaphone } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Projects() {
  const company = {
      name: "Vygron",
      tagline: "Innovating Digital Solutions",
      description: "Building next-gen Web, Mobile & AI Solutions.",
      role: "Founder & CEO",
      founded: "2024",
      logo: "/vygron.png",
      website: "https://www.vygron.co.in/",
      services: [
        "Web Development",
        "Mobile Apps",
        "AI/ML Solutions",
        "Branding",
        "UI/UX Design",
        "Digital Marketing"
      ],
      technologies: ["React", "Node.js", "Python", "AWS", "MongoDB"],
    }

  const initiatives = [
      {
          title: "HackSprint 2.0",
          subtitle: "India's Biggest Hackathon",
          role: "Lead Organizer",
          description: "Orchestrated a 36-hour hackathon with 500+ developers.",
          icon: Trophy,
          color: "bg-yellow-400",
          stats: "36 Hours"
      },
      {
          title: "IEEE Student Branch",
          subtitle: "KAHE",
          role: "Vice Chair",
          description: "Leading technical workshops and community growth.",
          icon: Users,
          color: "bg-blue-400",
          stats: "Leadership"
      },
      {
          title: "Metaverse Association",
          subtitle: "Immersive Tech",
          role: "Metaverse Lead",
          description: "Spearheading AR/VR research and innovation.",
          icon: Box,
          color: "bg-purple-400",
          stats: "Innovation"
      }
  ]

  return (
    <section id="projects" className="relative py-24 bg-[#e6e6e6] text-[#1a1a1a]">
      <div className="container mx-auto px-6 lg:px-16 relative z-10">
        
        {/* Section Header */}
        <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col items-center justify-center mb-20"
        >
            <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-4 text-center">
                ENTREPRENEURIAL
            </h2>
            <div className="relative inline-block">
                <div className="absolute inset-0 bg-yellow-400 transform -rotate-2 rounded-lg translate-y-2"></div>
                <h2 className="relative text-5xl md:text-7xl font-black uppercase tracking-tighter text-black px-4 bg-white border-4 border-black rounded-lg transform rotate-2">
                    VENTURES
                </h2>
            </div>
        </motion.div>

        {/* Bento Grid Layout - VYGRON */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-6 mb-20">
            
            {/* 1. Main Identity Card (Large) */}
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="md:col-span-8 bg-white border-4 border-black rounded-[2rem] p-8 md:p-12 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] transition-all duration-300 relative overflow-hidden group"
            >
                <div className="absolute top-0 right-0 p-4">
                    <div className="bg-yellow-400 border-2 border-black px-4 py-1 rounded-full font-bold text-xs uppercase tracking-wider">
                        Flagship
                    </div>
                </div>
                
                <div className="flex flex-col md:flex-row items-start gap-8 relative z-10">
                    <div className="w-28 h-28 bg-black rounded-3xl flex items-center justify-center p-4 border-2 border-black flex-shrink-0 group-hover:rotate-6 transition-transform duration-300">
                        <img src={company.logo} alt="Vygron Logo" className="w-full h-full object-contain" />
                    </div>
                    <div className="space-y-4">
                        <div>
                            <h3 className="text-4xl md:text-6xl font-black uppercase leading-none tracking-tighter mb-2">{company.name}</h3>
                            <p className="text-xl font-bold text-gray-400">{company.tagline}</p>
                        </div>
                        <p className="text-lg font-medium leading-relaxed max-w-xl">
                            {company.description}
                        </p>
                        <div className="pt-2">
                            <div className="inline-flex items-center gap-2 px-4 py-2 border-2 border-black rounded-lg bg-gray-100 mb-4">
                               <Briefcase className="w-4 h-4" />
                               <span className="font-bold">{company.role}</span>
                            </div>
                            <div className="flex">
                                <Button 
                                    onClick={() => window.open(company.website, "_blank")}
                                    className="bg-yellow-400 text-black border-2 border-black rounded-xl hover:bg-yellow-500 hover:translate-y-[-2px] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all text-lg font-bold px-8 py-6"
                                >
                                    Visit Website <ArrowUpRight className="ml-2 w-6 h-6" />
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>

            {/* 2. Impact/Digital Card with Services */}
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="md:col-span-4 bg-black text-white border-4 border-black rounded-[2rem] p-8 shadow-[8px_8px_0px_0px_rgba(100,100,100,1)] flex flex-col justify-between relative overflow-hidden"
            >
                 <div className="relative z-10">
                     <div className="mb-8">
                        <p className="text-gray-500 font-bold text-xs uppercase tracking-widest mb-2">Global Impact</p>
                        <div className="flex items-center gap-3">
                            <h3 className="text-4xl font-black text-white">Digital <span className="text-yellow-400">.</span></h3>
                        </div>
                        <p className="text-gray-400 font-medium mt-2 leading-relaxed">Transforming businesses with scalable digital solutions.</p>
                     </div>

                     <div>
                        <div className="flex items-center gap-2 mb-4">
                            <div className="w-2 h-2 rounded-full bg-yellow-400 animate-pulse"></div>
                            <h4 className="font-bold text-sm uppercase tracking-wider text-white">Our Services</h4>
                        </div>
                        <div className="flex flex-wrap gap-2">
                            {company.services.map((service, i) => (
                                <span key={i} className="px-3 py-1.5 border border-white/20 bg-white/5 rounded-lg text-xs font-bold text-gray-300 hover:text-black hover:bg-yellow-400 hover:border-yellow-400 transition-all duration-300 cursor-default">
                                    {service}
                                </span>
                            ))}
                        </div>
                     </div>
                 </div>
                 
                 <Globe className="absolute -bottom-6 -right-6 w-40 h-40 text-white/5 rotate-12" />
            </motion.div>



        </div>


        {/* Leadership & Initiatives Section */}
        <div className="max-w-7xl mx-auto">
             <div className="flex items-center gap-4 mb-12">
                <div className="h-1 flex-1 bg-black"></div>
                <h3 className="text-3xl md:text-4xl font-black uppercase text-center bg-black text-white px-6 py-2 rounded-xl transform -rotate-1">
                    Leadership & Community
                </h3>
                <div className="h-1 flex-1 bg-black"></div>
             </div>

             <div className="grid md:grid-cols-3 gap-8">
                 {initiatives.map((item, i) => (
                     <motion.div 
                        key={i}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 + (i * 0.1) }}
                        className="bg-white border-4 border-black rounded-[2rem] p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-2 transition-all flex flex-col h-full"
                     >
                        <div className={`w-16 h-16 ${item.color} border-2 border-black rounded-2xl flex items-center justify-center mb-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]`}>
                            <item.icon className="w-8 h-8 text-black" />
                        </div>
                        
                        <div className="mb-4">
                            <div className="inline-block px-3 py-1 bg-black text-white text-xs font-bold uppercase rounded-full mb-3">
                                {item.subtitle}
                            </div>
                            <h3 className="text-2xl font-black uppercase leading-tight mb-1">{item.title}</h3>
                            <p className="text-lg font-bold text-gray-500">{item.stats}</p>
                        </div>
                        
                        <div className="border-t-2 border-dashed border-gray-300 my-4"></div>
                        
                        <p className="text-gray-700 font-medium leading-relaxed mb-6 flex-1">
                            {item.description}
                        </p>

                        <div className="bg-gray-100 border-2 border-black rounded-xl p-3 text-center">
                            <span className="text-sm font-black uppercase tracking-wide">{item.role}</span>
                        </div>
                     </motion.div>
                 ))}
             </div>
        </div>

      </div>
    </section>
  )
}

function UserGroup({size, className}) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
        </svg>
    )
}