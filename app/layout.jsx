import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Bala Surya | Full Stack Developer & AI Specialist - Vygron Technology, Paruvai – Palladam – Tirupur",
  description: "Bala Surya is a passionate Full Stack Developer & AI Specialist from Paruvai, Palladam, Tirupur. Founder of Vygron Technology, specializing in Next.js, MERN Stack, and Custom AI Agents.",
  keywords: [
    "Bala Surya", "Vygron Technology", "Full Stack Developer", "AI Specialist", "Paruvai", "Palladam", "Tirupur", "Coimbatore", "Tamil Nadu", "South India",
    "Next.js Developer", "MERN Stack", "Agentic AI", "Computer Vision", "React Native", "Node.js", "Python", "Machine Learning",
    "OpenCV", "TensorFlow", "PyTorch", "Docker", "Redis", "PostgreSQL", "MongoDB", "Tailwind CSS", "Shadcn UI",
    "IEEE Student Branch", "Karpagam Academy of Higher Education", "Hackathon Organizer", "Startup Founder", "Student Entrepreneur",
    "Web Development Agency Tirupur", "AI Automation Solutions", "SaaS Developer"
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
