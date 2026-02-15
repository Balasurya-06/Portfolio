"use client"
import { motion } from "framer-motion"
import { Building2, Shield, Heart, GraduationCap } from "lucide-react"

export default function OfficialPartners() {
  const partners = [
    {
      name: "Karpagam Academy",
      role: "Educational Partner",
      description: "Collaborating on tech workshops & innovation.",
      image: "/partners/karpagam.png",
      color: "bg-white",
      textColor: "text-black"
    },
    {
      name: "Anti Terrorism Squad",
      role: "Security Innovation",
      description: "Developing advanced surveillance solutions.",
      image: "/partners/ats.png",
      color: "bg-white",
      textColor: "text-black"
    },
    {
      name: "Karupa Foundation",
      role: "Social Impact",
      description: "Empowering communities through technology.",
      image: "/partners/karupa.png",
      color: "bg-white",
      textColor: "text-black"
    },
    {
      name: "ICSCIS",
      role: "Research & Development",
      description: "Innovative research in computer science.",
      image: "/partners/icscis.png",
      color: "bg-white",
      textColor: "text-black"
    }
  ]

  return (
    <section className="py-20 bg-[#e6e6e6] text-[#1a1a1a] relative overflow-hidden">
      <div className="w-[90%] mx-auto px-6 lg:px-16 relative z-10">
        
        {/* Section Header */}
        <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col items-center justify-center mb-16"
        >
             <div className="relative inline-block mb-4">
                <div className="absolute inset-0 bg-yellow-400 transform -rotate-1 rounded-lg translate-y-2"></div>
                <h2 className="relative text-4xl md:text-6xl font-black uppercase tracking-tighter text-black px-6 py-2 bg-white border-4 border-black rounded-lg transform rotate-1">
                    Official Partners
                </h2>
            </div>
            <p className="font-bold text-gray-500 uppercase tracking-widest mt-4">Trusted Collaborations</p>
        </motion.div>

        {/* Partners Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {partners.map((partner, index) => (
                <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="group bg-white border-4 border-black rounded-3xl p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-2 transition-all duration-300 flex flex-col items-center text-center h-full"
                >
                    <div className={`w-36 h-36 ${partner.color} ${partner.textColor} border-2 border-black rounded-full flex items-center justify-center mb-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] group-hover:scale-105 transition-transform duration-300 overflow-hidden p-4 relative`}>
                        {partner.image ? (
                             <img src={partner.image} alt={partner.name} className="w-full h-full object-contain" />
                        ) : (
                             <partner.icon className="w-12 h-12" />
                        )}
                    </div>

                    <h3 className="text-xl font-black uppercase leading-tight mb-2">
                        {partner.name}
                    </h3>
                    
                    <div className="inline-block px-3 py-1 bg-gray-100 border border-black rounded-full text-xs font-bold uppercase tracking-wider mb-4">
                        {partner.role}
                    </div>

                    <p className="text-sm font-medium text-gray-600 leading-relaxed">
                        {partner.description}
                    </p>
                </motion.div>
            ))}
        </div>

      </div>
    </section>
  )
}
