import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import Navbar from "@/components/navbar"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Bala Surya S | Founder of Vygron & AI Specialist | Top Rated Developer in Tirupur",
  description: "Bala Surya Suresh (Bala Surya S) is the Founder of Vygron Technology and a leading Full Stack Developer & AI Specialist based in Paruvai, Palladam, Tirupur. Expert in Next.js, Agentic AI, and Scalable Web Solutions.",
  keywords: [
    // Name Variations
    "Bala Surya", "Balasurya Suresh", "Bala Surya S", "S Bala Surya", "Bala Surya Vygron", "Balasurya KAHE",
    
    // Roles & Titles
    "Founder of Vygron", "CEO of Vygron Technology", "Vygron Tech Founder", "Student Entrepreneur India", "Youngest CEO Tirupur",
    "Full Stack Developer", "AI Engineer", "Software Architect", "Freelance Web Developer Tirupur", "Best Developer 2024",
    
    // Tech Stack & Skills
    "Next.js Expert", "React.js Developer", "MERN Stack Specialist", "Agentic AI Developer", "Generative AI Solutions",
    "Computer Vision Engineer", "Python Developer", "Node.js Expert", "Tailwind CSS Master", "Firebase Developer",
    "Mobile App Developer", "React Native", "PostgreSQL", "MongoDB", "Docker", "AWS", "Vercel Deployment",
    
    // Location Specific
    "Web Design Paruvai", "Software Company Palladam", "Best IT Services Tirupur", "Web Development Coimbatore", 
    "Top Developer Tamil Nadu", "Tech Startup South India", "Digital Agency Tirupur",
    
    // Education & achievements
    "Karpagam Academy of Higher Education", "KAHE Alumnus", "Karpagam Innovation", "Hackathon Winner", 
    "Smart India Hackathon", "IEEE Chair KAHE", "Anti Terrorism Squad Tech Partner"
  ],
  authors: [{ name: "Bala Surya" }],
  creator: "Bala Surya",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://balasurya.me",
    title: "Bala Surya | Full Stack Developer & AI Specialist - Vygron Technology",
    description: "Bala Surya is a passionate Full Stack Developer & AI Specialist from Paruvai, Palladam, Tirupur. Founder of Vygron Technology.",
    siteName: "Bala Surya Portfolio",
    images: [
      {
        url: "/surya-founder.jpg",
        width: 1200,
        height: 630,
        alt: "Bala Surya – Founder of Vygron Technology in Paruvai, Palladam, Tirupur",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bala Surya | Full Stack Developer & AI Specialist",
    description: "Personal portfolio of Bala Surya, Founder of Vygron Technology. Specializing in MERN Stack, Next.js, and AI Solutions in Tirupur, Tamil Nadu.",
    images: ["/surya-founder.jpg"],
    creator: "@balasurya_06",
  },
  icons: {
    icon: '/surya-founder.jpg',
    shortcut: '/surya-founder.jpg',
    apple: '/surya-founder.jpg',
  },
  generator: 'Next.js',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/surya-founder.jpg" />
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" forcedTheme="dark">
          <Navbar />
          {children}
        </ThemeProvider>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Person",
                  "name": "Bala Surya",
                  "url": "https://balasurya.me",
                  "image": "https://balasurya.me/surya-founder.jpg",
                  "sameAs": [
                    "https://github.com/Balasurya-06",
                    "https://www.instagram.com/_surya_x.06",
                    "mailto:balasurya9597@gmail.com"
                  ],
                  "jobTitle": "Full Stack Developer & AI Specialist",
                  "worksFor": {
                    "@type": "Organization",
                    "name": "Vygron Technology"
                  },
                  "address": {
                    "@type": "PostalAddress",
                    "addressLocality": "Paruvai",
                    "addressRegion": "Palladam, Tirupur, Tamil Nadu",
                    "addressCountry": "IN"
                  }
                },
                {
                  "@type": "Organization",
                  "name": "Vygron Technology",
                  "url": "https://balasurya.me",
                  "logo": "https://balasurya.me/surya-founder.jpg",
                  "founder": {
                    "@type": "Person",
                    "name": "Bala Surya"
                  },
                  "address": {
                    "@type": "PostalAddress",
                    "streetAddress": "Paruvai",
                    "addressLocality": "Palladam",
                    "addressRegion": "Tirupur, Tamil Nadu",
                    "addressCountry": "IN"
                  },
                  "contactPoint": {
                      "@type": "ContactPoint",
                      "email": "balasurya9597@gmail.com",
                      "contactType": "customer support"
                  }
                }
              ]
            }),
          }}
        />
      </body>
    </html>
  )
}
