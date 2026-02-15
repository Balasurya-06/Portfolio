"use client"


export default function Footer() {
  const currentYear = new Date().getFullYear()



  return (
    <footer className="bg-[#e6e6e6] text-[#1a1a1a] py-12 border-t border-black/10">
      <div className="w-[90%] mx-auto px-6 lg:px-16 flex flex-col md:flex-row justify-between items-center gap-6">
          
        <div className="flex flex-col items-center md:items-start gap-2">
            <h2 className="text-2xl font-bold">Bala Surya <span className="text-yellow-400">.</span></h2>
            <p className="text-gray-400 text-sm">
                Building digital experiences that matter.
            </p>
        </div>

        <div className="flex flex-col items-center md:items-end gap-2 text-sm text-gray-500">
            <p>&copy; {currentYear} All rights reserved.</p>
            <div className="flex gap-4">
                <span>Vygron</span>
            </div>
        </div>

      </div>
    </footer>
  )
}
