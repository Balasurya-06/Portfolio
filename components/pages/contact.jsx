"use client"
import { motion } from "framer-motion"
import { Mail, Phone, MapPin, MessageCircle, Send, Linkedin, Github, Instagram, Download } from "lucide-react"

export default function Contact() {
  const contactMethods = [
    {
      icon: Mail,
      label: "Email Me",
      value: "balasurya9597@gmail.com",
      link: "mailto:balasurya9597@gmail.com",
      color: "bg-blue-400",
      description: "Best for detailed inquiries"
    },
    {
      icon: Phone,
      label: "Call Me",
      value: "+91 9597075831",
      link: "tel:+919597075831",
      color: "bg-green-400",
      description: "Quick discussions"
    },
    {
      icon: MessageCircle,
      label: "WhatsApp",
      value: "Chat Now",
      link: "https://wa.me/919597075831?text=Hello%20Bala%2C%20I%27d%20like%20to%20connect!",
      color: "bg-[#25D366]",
      description: "Instant messaging"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Tirupur, Tamil Nadu",
      link: "https://maps.google.com/?q=Tirupur,Tamil+Nadu,India",
      color: "bg-red-400",
      description: "Paruvai, Palladam"
    }
  ]

  const socialLinks = [
    {
      icon: Linkedin,
      label: "LinkedIn",
      link: "https://www.linkedin.com/in/balasurya06/",
      color: "bg-[#0A66C2]"
    },
    {
      icon: Github,
      label: "GitHub",
      link: "https://github.com/Balasurya-06",
      color: "bg-[#333]"
    },
    {
      icon: Instagram,
      label: "Instagram",
      link: "https://www.instagram.com/surya.007._",
      color: "bg-gradient-to-br from-purple-500 via-pink-500 to-orange-500"
    }
  ]

  return (
    <section id="contact" className="py-20 bg-white text-[#1a1a1a] relative overflow-hidden">
      <div className="w-[90%] mx-auto px-6 lg:px-16 relative z-10">
        
        {/* Section Header */}
        <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col items-center justify-center mb-16"
        >
             <div className="relative inline-block mb-6">
                <div className="absolute inset-0 bg-yellow-400 transform -rotate-1 rounded-lg translate-y-2"></div>
                <h2 className="relative text-4xl md:text-6xl font-black uppercase tracking-tighter text-black px-6 py-2 bg-white border-4 border-black rounded-lg transform rotate-1 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                    Let's Connect
                </h2>
            </div>
            <p className="text-lg font-medium text-gray-600 max-w-3xl text-center leading-relaxed">
                Ready to start a project, discuss opportunities, or just say hello? Choose your preferred way to reach out!
            </p>
        </motion.div>

        {/* Contact Methods Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactMethods.map((method, index) => (
                <motion.a
                    key={index}
                    href={method.link}
                    target={method.link.startsWith('http') ? '_blank' : '_self'}
                    rel={method.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.03, y: -5 }}
                    className="bg-gradient-to-br from-gray-50 to-white border-4 border-black rounded-3xl p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] transition-all cursor-pointer group"
                >
                    <div className={`w-16 h-16 ${method.color} border-2 border-black rounded-2xl flex items-center justify-center mb-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] group-hover:scale-110 transition-transform`}>
                        <method.icon className="w-8 h-8 text-black" />
                    </div>
                    
                    <h3 className="text-xl font-black uppercase mb-1">{method.label}</h3>
                    <p className="text-sm font-bold text-gray-500 mb-2">{method.description}</p>
                    <p className="text-base font-bold text-black break-all">{method.value}</p>
                </motion.a>
            ))}
        </div>

        {/* Social Links & CTA Section */}
        <div className="grid lg:grid-cols-2 gap-8">
            
            {/* Social Links */}
            <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-black border-4 border-black rounded-3xl p-8 shadow-[8px_8px_0px_0px_rgba(250,204,21,1)] relative overflow-hidden"
            >
                <div className="absolute top-0 right-0 w-40 h-40 bg-yellow-400/20 rounded-full blur-3xl"></div>
                
                <h3 className="text-3xl font-black text-white uppercase mb-4 relative z-10">
                    Follow Me
                </h3>
                <p className="text-gray-300 mb-8 relative z-10">
                    Connect with me on social media for updates, insights, and more!
                </p>
                
                <div className="flex flex-wrap gap-4 relative z-10">
                    {socialLinks.map((social, idx) => (
                        <motion.a
                            key={idx}
                            href={social.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.1, rotate: 5 }}
                            whileTap={{ scale: 0.95 }}
                            className={`${social.color} border-2 border-white p-4 rounded-2xl flex items-center gap-3 text-white font-bold shadow-[4px_4px_0px_0px_rgba(255,255,255,0.3)] hover:shadow-[6px_6px_0px_0px_rgba(255,255,255,0.3)] transition-all`}
                        >
                            <social.icon className="w-6 h-6" />
                            <span>{social.label}</span>
                        </motion.a>
                    ))}
                </div>
            </motion.div>

            {/* CTA Box */}
            <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-yellow-400 border-4 border-black rounded-3xl p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] flex flex-col justify-between relative overflow-hidden"
            >
                <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-white/20 rounded-full blur-2xl"></div>
                
                <div className="relative z-10">
                    <h3 className="text-3xl font-black text-black uppercase mb-4">
                        Ready to Work Together?
                    </h3>
                    <p className="text-black font-bold mb-6 text-lg leading-relaxed">
                        Let's build something amazing! Whether it's a startup idea, a project, or collaboration – I'm here to help.
                    </p>
                </div>

                <div className="space-y-4 relative z-10">
                    <motion.a
                        href="mailto:balasurya9597@gmail.com"
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.98 }}
                        className="flex items-center justify-center gap-3 bg-black text-white px-8 py-4 rounded-2xl font-black text-lg border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all w-full"
                    >
                        <Send className="w-5 h-5" />
                        Send Email
                    </motion.a>
                    
                    <motion.a
                        href="/Balasurya_cv.pdf"
                        download="Bala_Surya_Balasurya_cv.pdf"
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.98 }}
                        className="flex items-center justify-center gap-3 bg-white text-black px-8 py-4 rounded-2xl font-black text-lg border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all w-full"
                    >
                        <Download className="w-5 h-5" />
                        Download Resume
                    </motion.a>
                </div>
            </motion.div>

        </div>

        {/* Bottom Decorative Element */}
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="mt-16 text-center"
        >
            <div className="inline-block px-6 py-3 bg-gray-100 border-4 border-black rounded-full font-black uppercase tracking-wider text-sm shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                Open to Opportunities • Available for Freelance • Let's Build Together
            </div>
        </motion.div>

      </div>
    </section>
  )
}
