"use client"
import { motion } from "framer-motion"
import { Mail, Phone, MapPin, MessageCircle, Send, Linkedin, Github, Instagram, Download, ArrowUpRight } from "lucide-react"

export default function Contact() {
  const contactMethods = [
    {
      icon: Mail,
      label: "Email",
      value: "balasurya9597@gmail.com",
      link: "mailto:balasurya9597@gmail.com",
      color: "bg-blue-500",
      description: "Drop me an email"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 9597075831",
      link: "tel:+919597075831",
      color: "bg-green-500",
      description: "Give me a call"
    },
    {
      icon: MessageCircle,
      label: "WhatsApp",
      value: "Quick Chat",
      link: "https://wa.me/919597075831?text=Hello%20Bala%2C%20I%27d%20like%20to%20connect!",
      color: "bg-[#25D366]",
      description: "Message instantly"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Tirupur, Tamil Nadu",
      link: "https://maps.google.com/?q=Tirupur,Tamil+Nadu,India",
      color: "bg-red-500",
      description: "Find me here"
    }
  ]

  const socialLinks = [
    {
      icon: Linkedin,
      label: "LinkedIn",
      link: "https://www.linkedin.com/in/balasurya06/",
      username: "@balasurya06",
      color: "from-[#0A66C2] to-blue-600"
    },
    {
      icon: Github,
      label: "GitHub",
      link: "https://github.com/Balasurya-06",
      username: "@Balasurya-06",
      color: "from-gray-800 to-black"
    },
    {
      icon: Instagram,
      label: "Instagram",
      link: "https://www.instagram.com/surya.007._",
      username: "@surya.007._",
      color: "from-purple-500 via-pink-500 to-orange-500"
    }
  ]

  return (
    <section id="contact" className="relative bg-[#E8E4DC] text-black py-24 px-6 overflow-hidden">
      
      {/* Background Decorative Elements */}
      <div className="absolute top-20 right-20 w-96 h-96 bg-[#FF8C42]/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-[#FF8C42]/10 rounded-full blur-3xl"></div>

      <div className="w-[95%] max-w-[1800px] mx-auto relative z-10">
        
        {/* Section Header - Left Aligned */}
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
            className="text-xs font-bold text-gray-600 uppercase tracking-[0.3em] mb-6 flex items-center gap-3"
          >
            <span className="w-12 h-0.5 bg-[#FF8C42]"></span>
            GET IN TOUCH
          </motion.h2>
          <h3 className="text-5xl md:text-6xl lg:text-8xl font-black mb-8 uppercase tracking-tight leading-[0.9]">
            LET'S CREATE<br/>
            SOMETHING <span className="text-[#FF8C42]">AMAZING</span>
          </h3>
          <p className="text-xl text-gray-700 leading-relaxed max-w-3xl">
            Have a project in mind? Want to collaborate? Or just want to say hi? I'd love to hear from you!
          </p>
        </motion.div>

        {/* Contact Methods - Bento Grid */}
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
              whileHover={{ y: -8 }}
              className="group relative bg-white rounded-3xl p-8 hover:shadow-2xl transition-all overflow-hidden border-2 border-gray-100"
            >
              {/* Hover Gradient */}
              <div className={`absolute inset-0 ${method.color} opacity-0 group-hover:opacity-10 transition-opacity`}></div>
              
              <div className="relative z-10">
                <div className={`w-14 h-14 ${method.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <method.icon className="w-7 h-7 text-white" />
                </div>
                
                <p className="text-sm text-gray-500 uppercase font-bold mb-2">{method.description}</p>
                <h4 className="text-xl font-black uppercase mb-3 group-hover:text-[#FF8C42] transition-colors">{method.label}</h4>
                <p className="text-base font-medium text-gray-700 break-words">{method.value}</p>
                
                <ArrowUpRight className="absolute top-8 right-8 w-5 h-5 text-[#FF8C42] opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </motion.a>
          ))}
        </div>

        {/* Main CTA Section */}
        <div className="grid lg:grid-cols-5 gap-8 mb-16">
          
          {/* Large CTA Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-3 bg-gradient-to-br from-[#FF8C42] to-orange-600 rounded-[3rem] p-12 relative overflow-hidden shadow-2xl"
          >
            {/* Decorative Circle */}
            <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-white/20 rounded-full blur-2xl"></div>
            
            <div className="relative z-10">
              <h4 className="text-4xl md:text-5xl font-black text-white uppercase mb-6 leading-tight">
                Ready to Start<br/>Your Project?
              </h4>
              <p className="text-white/90 text-xl font-bold mb-8 leading-relaxed max-w-xl">
                Let's discuss your ideas and turn them into reality. Whether it's a startup, a product, or collaboration – I'm here to help!
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <motion.a
                  href="mailto:balasurya9597@gmail.com"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center justify-center gap-3 bg-white text-black px-10 py-5 rounded-2xl font-black text-lg shadow-2xl hover:shadow-3xl transition-all"
                >
                  <Send className="w-6 h-6" />
                  Send Email
                </motion.a>
                
                <motion.a
                  href="/Balasurya_cv.pdf"
                  download="Bala_Surya_Resume.pdf"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center justify-center gap-3 bg-black text-white px-10 py-5 rounded-2xl font-black text-lg border-2 border-white/30 hover:border-white transition-all"
                >
                  <Download className="w-6 h-6" />
                  Download CV
                </motion.a>
              </div>
            </div>
          </motion.div>

          {/* Social Links Column */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-6"
          >
            <h4 className="text-3xl font-black uppercase mb-8 text-black">Connect<br/>With Me</h4>
            
            {socialLinks.map((social, idx) => (
              <motion.a
                key={idx}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ scale: 1.03, x: 10 }}
                className={`flex items-center gap-5 p-6 bg-gradient-to-r ${social.color} rounded-2xl shadow-xl group`}
              >
                <social.icon className="w-8 h-8 text-white" />
                <div className="flex-1">
                  <p className="font-black text-lg text-white">{social.label}</p>
                  <p className="text-sm text-white/80 font-medium">{social.username}</p>
                </div>
                <ArrowUpRight className="w-6 h-6 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
              </motion.a>
            ))}
          </motion.div>

        </div>

        {/* Availability Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="inline-flex items-center gap-4 px-8 py-4 bg-white rounded-full shadow-lg border-2 border-gray-100">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FF8C42] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-[#FF8C42]"></span>
            </span>
            <span className="text-sm font-black uppercase tracking-wider text-black">Available for New Projects • Open to Opportunities • Let's Build Together</span>
          </div>
        </motion.div>

      </div>
    </section>
  )
}
