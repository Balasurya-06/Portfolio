"use client"
import { motion } from "framer-motion"
import Image from "next/image"

export default function OfficialPartners() {
  const partners = [
    {
      name: "Karpagam Academy",
      role: "Educational Partner",
      description: "Collaborating on tech workshops & innovation.",
      image: "/partners/karpagam.png"
    },
    {
      name: "Anti Terrorism Squad",
      role: "Security Innovation",
      description: "Developing advanced surveillance solutions.",
      image: "/partners/ats.png"
    },
    {
      name: "Karupa Foundation",
      role: "Social Impact",
      description: "Empowering communities through technology.",
      image: "/partners/karupa.png"
    },
    {
      name: "ICSCIS",
      role: "Research & Development",
      description: "Innovative research in computer science.",
      image: "/partners/icscis.png"
    }
  ]

  return (
    <section className="relative bg-[#1a1a1a] text-white py-24 px-6">
      <div className="w-[95%] max-w-[1800px] mx-auto">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-xs font-bold text-gray-400 uppercase tracking-[0.3em] mb-6 flex items-center gap-3"
          >
            <span className="w-12 h-0.5 bg-[#FF8C42]"></span>
            COLLABORATIONS
          </motion.h2>
          <h3 className="text-5xl md:text-6xl lg:text-7xl font-black mb-6 uppercase tracking-tight leading-[0.9]">
            OFFICIAL <span className="text-[#FF8C42]">PARTNERS</span>
          </h3>
          <p className="text-xl text-gray-300 leading-relaxed max-w-3xl">
            Trusted collaborations with leading organizations in education, security, social impact, and research & development.
          </p>
        </motion.div>

        {/* Partners Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {partners.map((partner, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10 hover:bg-white/10 transition-all group text-center"
            >
              {/* Logo Container */}
              <div className="w-32 h-32 mx-auto mb-6 bg-white rounded-2xl flex items-center justify-center p-4 group-hover:scale-105 transition-transform shadow-lg">
                <div className="relative w-full h-full">
                  <Image 
                    src={partner.image}
                    alt={partner.name}
                    fill
                    className="object-contain"
                  />
                </div>
              </div>

              {/* Partner Name */}
              <h4 className="text-xl font-black uppercase leading-tight mb-3">
                {partner.name}
              </h4>
              
              {/* Role Badge */}
              <div className="inline-block px-4 py-2 bg-[#FF8C42] text-black rounded-full text-xs font-bold uppercase tracking-wider mb-4">
                {partner.role}
              </div>

              {/* Description */}
              <p className="text-sm text-gray-300 leading-relaxed">
                {partner.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
