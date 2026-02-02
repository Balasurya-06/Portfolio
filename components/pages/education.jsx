"use client"
import { motion } from "framer-motion"

export default function Education() {
  return (
    <div className="w-full">
      <h3 className="text-2xl font-bold bg-yellow-200 inline-block px-2 mb-6">
        Education
      </h3>
      <div className="space-y-6">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative pl-6 border-l-2 border-gray-300"
        >
          <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-black"></div>
          <span className="text-sm font-bold text-gray-500">2023 - 2027</span>
          <h4 className="text-xl font-bold">Computer Science</h4>
          <p className="text-sm text-gray-600">
            Karpagam Academy of Higher Education
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="relative pl-6 border-l-2 border-gray-300"
        >
          <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-gray-400"></div>
          <span className="text-sm font-bold text-gray-500">2021 - 2023</span>
          <h4 className="text-xl font-bold">Higher Secondary</h4>
          <p className="text-sm text-gray-600">
            Thamarai Matric Hr. Sec. School
          </p>
        </motion.div>
      </div>
    </div>
  )
}
