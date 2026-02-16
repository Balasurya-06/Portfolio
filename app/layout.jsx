import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import Navbar from "@/components/navbar"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  metadataBase: new URL('https://balasurya.me'),
  title: {
    default: "Bala Surya S | Founder of Vygron & AI Specialist | Top Rated Developer in Tirupur",
    template: "%s | Bala Surya S"
  },
  description: "Bala Surya Suresh (Bala Surya S) is the Founder of Vygron Technology and a leading Full Stack Developer & AI Specialist based in Paruvai, Palladam, Tirupur. Expert in Next.js, Agentic AI, and Scalable Web Solutions. delivering high-performance digital products for startups and enterprises.",
  keywords: [
    // Name Variations & Personal Branding
    "Bala Surya", "Balasurya Suresh", "Bala Surya S", "S Bala Surya", "Bala Surya Vygron", "Balasurya KAHE", 
    "Bala Surya Paruvai", "Bala Surya Palladam", "Bala Surya Tirupur",
    
    // Roles, Titles & Professional IDs
    "Founder of Vygron", "CEO of Vygron Technology", "Vygron Tech Founder", "Student Entrepreneur India", "Youngest CEO Tirupur",
    "Full Stack Developer", "AI Engineer", "Software Architect", "Freelance Web Developer Tirupur", "Best Developer 2024",
    "Technical Lead", "Open Source Contributor", "Hackathon Mentor", "Startup Consultant",
    
    // Core Tech Stack - Frontend & Mobile
    "Next.js Expert", "React.js Developer", "React Native Developer", "TypeScript Specialist", "Tailwind CSS Master",
    "Redux Toolkit", "Framer Motion", "Three.js", "WebGL", "Progressive Web Apps (PWA)",
    
    // Core Tech Stack - Backend & Database
    "Node.js Expert", "Express.js", "Python Developer", "Django", "FastAPI", "GoLang",
    "PostgreSQL", "MongoDB", "Redis", "Firebase", "Supabase", "GraphQL", "REST API Design",
    
    // AI, ML & Emerging Tech
    "Agentic AI Developer", "Generative AI Solutions", "LLM Integration", "OpenAI API", "Hugging Face",
    "Computer Vision Engineer", "TensorFlow", "PyTorch", "NLP Specialist", "Chatbot Development",
    "Metaverse Development", "AR/VR Solutions", "Blockchain Basics",
    
    // DevOps & Cloud
    "AWS Certified", "Docker", "Kubernetes", "CI/CD Pipelines", "Vercel Deployment", "Google Cloud Platform",
    "Nginx", "Linux Administration", "Cloud Architecture",
    
    // Services Offered
    "Custom Web Application Development", "Mobile App Development Android/iOS", "E-commerce Solutions",
    "AI Consulting Services", "MVP Development for Startups", "SaaS Product Development",
    "Website Redesign Services", "SEO Optimization Services", "Performance Tuning",
    
    // Location Specific - Hyperlocal & Regional
    "Web Design Paruvai", "Software Company Palladam", "Best IT Services Tirupur", "Web Development Coimbatore", 
    "Top Developer Tamil Nadu", "Tech Startup South India", "Digital Agency Tirupur",
    "Software Development Company Coimbatore", "Website Developers in Tirupur", "App Developers check Erode",
    "Tech Services Pollachi", "IT Solutions Udumalpet",
    
    // Education, Achievements & Affiliations
    "Karpagam Academy of Higher Education", "KAHE Final Year Student", "CSE Department KAHE",
    "Karpagam Innovation", "Hackathon Winner", "Smart India Hackathon", "SIH 2024 & 2025",
    "IEEE Chair KAHE", "Anti Terrorism Squad Tech Partner", 
    "ICSCIS Developer", "HackSprint 2.0 Organizer", "Metaverse Students Association Head"
  ],
  authors: [{ name: "Bala Surya", url: "https://balasurya.me" }],
  creator: "Bala Surya",
  publisher: "Vygron Technology",
  category: "Technology",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://balasurya.me',
    languages: {
      'en-US': 'https://balasurya.me/en-US',
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://balasurya.me",
    title: "Bala Surya | Full Stack Developer & AI Specialist - Vygron Technology",
    description: "Bala Surya is a passionate Full Stack Developer & AI Specialist from Paruvai, Palladam, Tirupur. Founder of Vygron Technology. Building the future with Code & AI.",
    siteName: "Bala Surya Portfolio",
    images: [
      {
        url: "/surya-founder.jpg",
        width: 1200,
        height: 630,
        alt: "Bala Surya – Founder of Vygron Technology",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bala Surya | Full Stack Developer & AI Specialist",
    description: "Personal portfolio of Bala Surya, Founder of Vygron Technology. Specializing in MERN Stack, Next.js, and AI Solutions.",
    images: ["/surya-founder.jpg"],
    creator: "@balasurya_06",
    site: "@balasurya_06",
  },
  icons: {
    icon: '/surya-founder.jpg',
    shortcut: '/surya-founder.jpg',
    apple: [
      { url: '/surya-founder.jpg' },
    ],
    other: {
      rel: 'apple-touch-icon-precomposed',
      url: '/surya-founder.jpg',
    },
  },
  verification: {
    google: 'verification_token', // Placeholder for actual token
    yandex: 'yandex_verification_token',
  },
  generator: 'Next.js',
  applicationName: 'Bala Surya Portfolio',
  referrer: 'origin-when-cross-origin',
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
